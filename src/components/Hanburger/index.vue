<template>
  <div
    class="hanburger d-flex jc-center ai-center"
    :style="{ width, height }"
    @click="$emit('toggleClick')"
  >
    <fa-icon :icon="hanburgerActive ? 'indent' : 'outdent'" size="1x" />
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'
@Component({
  name: 'Hanburger'
})
export default class Hanburger extends Vue {
  @Prop() readonly width!: string
  @Prop() readonly height!: string
  @Prop() readonly hanburgerActive!: boolean
}
</script>

<style lang="scss" scoped>
.hanburger {
  cursor: pointer;
  transition: background 0.1s;
  &:hover {
    background-color: rgba(100, 100, 100, 0.05);
  }
}
</style>
