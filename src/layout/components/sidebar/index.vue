<template>
  <div
    class="sidebar fill-height over-hidden"
    :class="{ 'sidebar-opened': opened }"
  >
    <el-scrollbar class="fill-height" wrap-class="overx-hidden">
      <el-menu
        :default-active="activeMenu"
        :collapse="!opened"
        :background-color="variables.sidebarMenuBg"
        :text-color="variables.sidebarMenuTextColor"
        :active-text-color="variables.sidebarMenuActiveTextColor"
        :unique-opened="false"
        :collapse-transition="false"
      >
        <SidebarItem
          v-for="route in routes"
          :key="route.path"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang='ts'>
import variables from '@/style/variables.scss'
import { Component, Vue } from 'vue-property-decorator'
import SidebarItem from './SidebarItem.vue'
import { RouteConfig } from 'vue-router'
@Component({
  name: 'Sidebar',
  components: {
    SidebarItem
  }
})
export default class Sidebar extends Vue {
  variables = variables
  get opened () {
    return this.$store.getters.sidebar.opened
  }

  get activeMenu (): string {
    const route = this.$route
    const { meta, path } = route
    // 隐藏菜单的选中菜单
    if (meta.activeMenu) {
      return meta.activeMenu
    }
    return path
  }

  get routes (): RouteConfig[] {
    return this.$store.state.router.routes
  }
}
</script>

<style lang="scss" scoped>
@import "@/style/variables.scss";
.sidebar {
  background-color: $sidebarBg;
  z-index: 999;
  width: 54px;
  transition: width 0.2s;
  &.sidebar-opened {
    width: $sidebarWidth;
  }
}
</style>
