<template>
  <div id="app" class="fill-height">
    <router-view v-if="show" />
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator'

@Component({
  name: 'app'
})
export default class App extends Vue {
  show = true

  @Provide('reload')
  reload () {
    this.show = false
    this.$nextTick(() => {
      this.show = true
    })
  }
}
</script>

<style>
</style>
