<template>
  <div class="tags-view">1</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'TagsView'
})
export default class TagsView extends Vue {}
</script>

<style lang="scss" scoped>
.tags-view {
  height: 40px;
  border-bottom: 1px solid #d8dce5;
  box-sizing: border-box;
}
</style>
