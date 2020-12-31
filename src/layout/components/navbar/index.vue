<template>
  <div class="navbar">
    <el-button @click="toggleSidebar">切换</el-button>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Navbar'
})
export default class Navbar extends Vue {
  toggleSidebar () {
    this.$store.dispatch('app/toggleSidebar')
  }
}
</script>

<style lang='scss' scoped>
.navbar {
  height: 50px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
</style>
