import Vue from 'vue'
import { BigHump2Kebab } from '@/utils/ConversionCase'

// 自动挂载global中的组件，只会挂载global目录的子文件夹中的index.vue
const files = require.context('./', true, /index\.vue/)
files.keys().forEach((filePath) => {
  if (filePath.split('/').length === 3) {
    const component = files(filePath).default || files(filePath)
    Vue.component(BigHump2Kebab(component.name), component)
    if (process.env.NODE_ENV === 'development') {
      console.log('自动注册组件：' + component.name)
    }
  }
})
