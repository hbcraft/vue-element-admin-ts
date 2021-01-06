<template>
  <div
    class="card"
    :class="shadow ? `is-${shadow}-shadow` : 'is-always-shadow'"
  >
    <div class="card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="card__body" :style="bodyStyle" :class="bodyClass">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'Card'
})
export default class Card extends Vue {
  @Prop() readonly header!: string|Element
  @Prop() readonly bodyStyle!: CSSStyleDeclaration | string
  @Prop() readonly bodyClass!: string
  @Prop() readonly shadow!: 'always' | 'hover' | 'never'
};
</script>

<style lang="scss">
.card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
}
.card.is-always-shadow,
.card.is-hover-shadow:focus,
.card.is-hover-shadow:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.card__header {
  padding: 18px 20px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
}
.card__body {
  padding: 20px;
}
</style>
