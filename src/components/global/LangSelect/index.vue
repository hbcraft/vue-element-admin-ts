<template>
  <el-dropdown @command="setAppLang">
    <div class="fill-height d-flex jc-center ai-center px-10">
      <fa-icon icon="language" size="2x" />
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item
        v-for="lang in langs"
        class="lang-select-option"
        :key="lang.key"
        :disabled="lang.key === appLang"
        :class="{ selected: lang.key === appLang }"
        :command="lang.key"
      >
        {{ lang.value }}
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { langNames } from '@/utils/lang'
@Component({
  name: 'LangSelect'
})
export default class LangSelect extends Vue {
  get langs () {
    return this.$store.state.app.langs.map((lang: keyof typeof langNames) => {
      return {
        key: lang,
        value: langNames[lang]
      }
    })
  }

  get appLang () {
    return this.$i18n.locale
  }

  set appLang (v: string) {
    this.$setLang(v)
  }

  setAppLang (lang: string) {
    if (lang) {
      this.appLang = lang
    }
  }
}
</script>

<style lang="scss" scoped>
.lang-select-option.selected {
  color: #66b1ff;
}
</style>
