import Vue from 'vue'
import {
  Button,
  Col,
  Form,
  FormItem,
  Input,
  Loading,
  Message
} from 'element-ui'

// 已在@/component/global中挂载自定义全局组件el-card

Vue.use(Button)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Loading)

Vue.prototype.$message = Message
