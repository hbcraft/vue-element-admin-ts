<template>
  <div class="header-search fill-height d-flex ai-center">
    <fa-icon
      icon="search"
      size="lg"
      class="px-10 pointer"
      @click.stop="openSearch"
    />
    <el-select
      v-model="keyword"
      filterable
      default-first-option
      remote
      class="header-search-select"
      ref="HeaderSearchSelectEl"
      :placeholder="$t('enterToSearch')"
      :class="{ show }"
      :remote-method="querySearch"
      @change="selectPage"
    >
      <el-option
        v-for="item in options"
        :key="item.path"
        :value="item"
        :label="item.title.join(' > ')"
      />
    </el-select>
  </div>
</template>

<script lang='ts'>
import Fuse from 'fuse.js' // 模糊过滤库
import { resolve as PathResolve } from 'path'
import { isArray } from 'lodash'

// 类型定义，无实际作用
import { ElSelect } from 'element-ui/types/select'
import { RouteConfig } from 'vue-router'
import { Component, Ref, Vue, Watch } from 'vue-property-decorator'
import { SearchPool, SearchPoolItem } from '@/types/components/header-search'
@Component({
  name: 'HeaderSearch'
})
export default class HeaderSearch extends Vue {
  // el-select的组件ref
  @Ref() readonly HeaderSearchSelectEl!: ElSelect
  // 搜索关键词
  keyword = ''
  // 搜索结果
  options: SearchPool = []
  // 模糊过滤库的实例
  fuse: Fuse<SearchPoolItem>|undefined = undefined
  // 是否显示搜索框
  show = false

  @Watch('show')
  onShowChange (show: boolean) {
    // 在打开搜索框的时候为body添加点击关闭的事件，注意fa-icon组件click事件的stop修饰符
    // 在搜索框关闭时取消事件的监听
    if (show) {
      document.body.addEventListener('click', this.closeSearch)
    } else {
      document.body.removeEventListener('click', this.closeSearch)
    }
  }

  // 搜索池
  searchPool: SearchPool = []

  @Watch('searchPool')
  onSearchPoolChange (list: SearchPool) {
    // 如果语言是中文，添加拼音搜索
    if (this.lang === 'zh-cn') {
      this.addPinyinField(list)
    } else {
      // 初始化模糊过滤实例
      this.initFuse(list)
    }
  }

  get lang (): string {
    return this.$store.state.app.lang
  }

  @Watch('lang')
  onLangChange () {
    this.refreshSearchPool()
  }

  get routes (): RouteConfig[] {
    return this.$store.state.router.routes
  }

  @Watch('routes')
  onRoutesChange () {
    this.refreshSearchPool()
  }

  mounted () {
    this.refreshSearchPool()
  }

  // 刷新搜索池
  refreshSearchPool () {
    // 重置搜索池，会在语言切换和路由表更改时触发
    this.searchPool = this.generateRoutes(this.routes)
  }

  // 在搜索池中添加拼音字段
  async addPinyinField (list: SearchPool) {
    // 懒加载拼音库
    const { default: pinyin } = await import(/* webpackChunkName: "pinpin" */'pinyin')
    if (isArray(list)) {
      list.forEach((item) => {
        const titles = item.title
        if (isArray(titles)) {
          titles.forEach((title) => {
            title = pinyin(title, {
              style: pinyin.STYLE_NORMAL // 普通格式，无声调
            }).join('')
            item.pinyinTitle = title
          })
        }
      })
      // 添加完拼音之后再初始化模糊搜索实例
      this.initFuse(list)
    }
  }

  // 打开搜索框方法
  openSearch () {
    this.show = !this.show
    this.show && this.HeaderSearchSelectEl && this.HeaderSearchSelectEl.focus()
  }

  // 关闭搜索框方法
  closeSearch () {
    this.HeaderSearchSelectEl && this.HeaderSearchSelectEl.blur()
    this.options = []
    this.show = false
  }

  // 搜索方法
  querySearch (query: string) {
    if (query !== '') {
      const result = this.fuse!.search<SearchPoolItem>(query)
      this.options = result.map((option) => option.item)
    } else {
      this.options = []
    }
  }

  // 选择搜索结果方法
  selectPage (val: SearchPoolItem) {
    if (val.path !== this.$route.path) {
      this.$router.push(val.path)
    }
    this.keyword = ''
    this.options = []
    this.$nextTick(() => {
      this.show = false
    })
  }

  // 生成可跳转的路由表
  generateRoutes (routes: RouteConfig[], basePath = '/', prefixTitle: string[] = []) {
    let res: SearchPool = []
    for (const router of routes) {
      if (router.hidden) continue
      const data = {
        path: PathResolve(basePath, router.path),
        title: [...prefixTitle]
      }
      if (router.meta && router.meta.title) {
        const i18nTitle = this.$t(`route.${router.meta.title}`) as string
        data.title = [...data.title, i18nTitle]
        if (router.redirect !== 'noRedirect') {
          res.push(data)
        }
      }
      if (router.children) {
        const tempRoutes = this.generateRoutes(router.children, data.path, data.title)
        if (tempRoutes.length >= 1) {
          res = res.concat(tempRoutes)
        }
      }
    }
    return res
  }

  // 初始化模糊过滤
  initFuse (list: SearchPool) {
    this.fuse = new Fuse(list, {
      shouldSort: true,
      threshold: 0.4,
      location: 0,
      distance: 100,
      minMatchCharLength: 1,
      keys: [{
        name: 'title',
        weight: 0.7
      }, {
        name: 'pinyinTitle',
        weight: 0.3
      }, {
        name: 'path',
        weight: 0.3
      }]
    })
  }
}
</script>

<style lang="scss" scoped>
.header-search {
  .header-search-select {
    height: 35px;
    width: 0;
    overflow: hidden;
    transition: width 0.2s;
    ::v-deep .el-input {
      .el-input__inner {
        border: 0;
        border-bottom: 1px solid #d9d9d9;
        border-radius: 0;
        height: 35px;
        padding: 0;
      }
      .el-input__suffix {
        display: none;
      }
      &.is-focus {
        .el-input__inner {
          border-bottom: 1px solid #888;
        }
      }
    }
    &.show {
      width: 210px;
      margin-right: 10px;
    }
  }
}
</style>
