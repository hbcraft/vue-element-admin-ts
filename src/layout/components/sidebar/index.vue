<template>
  <div class="sidebar" :class="{ 'sidebar-opened': opened }">233</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Sidebar'
})
export default class Sidebar extends Vue {
  get opened () {
    return this.$store.getters.sidebar.opened
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  background-color: #304156;
  z-index: 999;
  width: 54px;
  transition: width 0.2s;
  &.sidebar-opened {
    width: 210px;
  }
}
</style>
