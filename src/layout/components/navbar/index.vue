<template>
  <div class="navbar d-flex">
    <Hanburger
      width="50px"
      height="50px"
      :hanburgerActive="hanburgerActive"
      @toggleClick="toggleSidebar"
    />
    <Space />
    <HeaderSearch />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Hanburger from '@/components/Hanburger/index.vue'
import Space from '@/components/Space/index.vue'
import HeaderSearch from '@/components/HeaderSearch/index.vue'
@Component({
  name: 'Navbar',
  components: {
    Hanburger,
    Space,
    HeaderSearch
  }
})
export default class Navbar extends Vue {
  get hanburgerActive () {
    return !this.$store.getters.sidebar.opened
  }

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
