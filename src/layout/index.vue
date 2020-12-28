<template>
  <div id="layout">
    <router-view />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'Layout'
})
export default class Layout extends Vue {}
</script>

<style>
</style>
