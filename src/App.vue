<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div>
      <p>
        If Element is successfully added to this project, you'll see an
        <code v-text="'<el-button>'"></code>
        below
      </p>
      <el-button @click="a">{{$t('el-button')}}</el-button>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang="ts">
import HelloWorld from './components/HelloWorld.vue'

import { Component, Vue } from 'vue-property-decorator'
@Component({
  name: 'app',
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  a () {
    if (this.$i18n.locale === 'zh-cn') {
      this.$setLang('en-us')
    } else {
      this.$setLang('zh-cn')
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
