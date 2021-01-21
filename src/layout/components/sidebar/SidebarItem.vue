<template>
  <div v-if="!item.hidden">
    <template v-if="onlyOneChild">
      <SidebarLink
        v-if="onlyOneChild.meta"
        :to="resolvePath(onlyOneChild.path)"
      >
        <el-menu-item :index="resolvePath(onlyOneChild.path)">
          <Item
            :icon="onlyOneChild.meta.icon || (item.meta && item.meta.icon)"
            :title="$t(`route.${onlyOneChild.meta.title}`)"
          ></Item>
        </el-menu-item>
      </SidebarLink>
    </template>
    <el-submenu v-else :index="resolvePath(item.path)" popper-append-to-body>
      <template v-if="item.meta" slot="title">
        <Item
          v-if="item.meta"
          :icon="item.meta && item.meta.icon"
          :title="$t(`route.${item.meta.title}`)"
        />
      </template>
      <SidebarItem
        v-for="child in item.children"
        :key="child.path"
        :item="child"
        :base-path="resolvePath(child.path)"
      />
    </el-submenu>
  </div>
</template>

<script lang='ts'>
import { isExternal } from '@/utils/validate'
import { resolve as PathResolve } from 'path'
import { Component, Prop, Vue } from 'vue-property-decorator'
import { RouteConfig } from 'vue-router'
import SidebarLink from './SidebarLink.vue'
import Item from './Item.vue'
@Component({
  name: 'SidebarItem',
  components: {
    SidebarLink,
    Item
  }
})
export default class SidebarItem extends Vue {
  @Prop() readonly item!: RouteConfig
  @Prop() readonly basePath!: string
  // onlyOneChild: null|RouteConfig = null

  get onlyOneChild () {
    if (!this.item.children) return this.item
    let oneChild
    const showingChildren = this.item.children.filter((item) => {
      if (item.hidden) return false
      oneChild = item
      return true
    })

    if (showingChildren.length > 1) return false
    if (showingChildren.length === 1) return oneChild
    if (showingChildren.length === 0) {
      return { ...this.item, path: '', noShowingChildren: true }
    }
    return oneChild
  }

  resolvePath (routePath: string) {
    if (isExternal(routePath)) {
      return routePath
    }
    if (isExternal(this.basePath)) {
      return this.basePath
    }
    return PathResolve(this.basePath, routePath)
  }
}
</script>

<style lang="scss">
@import "@/style/variables.scss";
#app .sidebar .el-menu {
  width: 100%;
  height: 100%;
  border: none;
  &.el-menu--collapse {
    .el-submenu .el-submenu__title span {
      display: none;
    }
  }
  .el-submenu .el-menu-item {
    background-color: $sidebarSubMenuBgColor !important;
    &:hover {
      background-color: $sidebarSubMenuHoverBgColor !important;
    }
  }
}
</style>
