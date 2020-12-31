<template>
  <div id="layout" class="fill-height d-flex">
    <Sidebar />
    <div class="main-container flex-1 fill-height d-flex flex-column">
      <div class="header">
        <Navbar />
        <TagsView />
      </div>
      <AppMain class="flex-1" />
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { Sidebar, TagsView, AppMain, Navbar } from './components'

@Component({
  name: 'Layout',
  components: {
    Sidebar,
    TagsView,
    AppMain,
    Navbar
  }
})
export default class Layout extends Vue {
}
</script>

<style lang="scss" scoped>
#layout {
}
</style>
