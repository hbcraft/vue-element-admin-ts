import Vue, { VueConstructor } from 'vue'
// 自动挂载global中的组件，只会挂载global目录的子文件夹中的index.vue
const files = require.context('./', true, /index\.vue/)
files.keys().forEach((filePath) => {
  const filePathList = filePath.split('/')
  if (filePathList.length === 3) {
    const component: VueConstructor = files(filePath).default || files(filePath)
    const componentName = filePathList[filePathList.length - 2]
    Vue.component(componentName, component)
    if (process.env.NODE_ENV === 'development') {
      console.log('自动注册组件：' + componentName)
    }
  }
})
