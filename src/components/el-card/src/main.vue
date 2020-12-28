<template>
  <div
    class="el-card"
    :class="shadow ? `is-${shadow}-shadow` : 'is-always-shadow'"
  >
    <div class="el-card__header" v-if="$slots.header || header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="el-card__body" :style="bodyStyle" :class="bodyClass">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'ElCard'
})
export default class ElCard extends Vue {
  @Prop() readonly header!: string|Element
  @Prop() readonly bodyStyle!: CSSStyleDeclaration | string
  @Prop() readonly bodyClass!: string
  @Prop() readonly shadow!: 'always' | 'hover' | 'never'
};
</script>

<style lang="scss">
.el-card {
  border-radius: 4px;
  border: 1px solid #ebeef5;
  background-color: #fff;
  overflow: hidden;
  color: #303133;
  transition: 0.3s;
}
.el-card.is-always-shadow,
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.el-card__header {
  padding: 18px 20px;
  border-bottom: 1px solid #ebeef5;
  box-sizing: border-box;
}
.el-card__body {
  padding: 20px;
}
</style>
