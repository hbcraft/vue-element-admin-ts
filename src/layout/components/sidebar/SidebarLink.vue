<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script lang="ts">
import { isExternal } from '@/utils/validate'
import { Component, Vue, Prop } from 'vue-property-decorator'
@Component({
  name: 'SidebarLink'
})
export default class SidebarLink extends Vue {
  @Prop() readonly to!: string
  get isExternal () {
    return isExternal(this.to)
  }

  get type () {
    if (this.isExternal) {
      return 'a'
    }
    return 'router-link'
  }

  linkProps (to: string) {
    if (this.isExternal) {
      return {
        href: to,
        target: '_blank',
        rel: 'noopener'
      }
    }
    return {
      to: to
    }
  }
}
</script>
