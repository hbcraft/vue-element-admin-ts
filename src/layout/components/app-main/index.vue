<template>
  <div class="app-main">1</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'AppMain'
})
export default class AppMain extends Vue {}
</script>

<style lang="scss" scoped>
.app-main {
  padding: 20px;
  box-sizing: border-box;
}
</style>
