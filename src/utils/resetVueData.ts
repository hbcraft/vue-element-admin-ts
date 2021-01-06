import Vue from 'vue'
Vue.prototype.$resetData = function (key: string) {
  // FIXME this.$options.data()不能获取到初始data，可能是vue-property-decorator的bug
  // 使用this.$options.data.call(this)也只能获取到一个空对象
  Object.assign(this.$data[key], this.$options.data.call(this)[key])
}
