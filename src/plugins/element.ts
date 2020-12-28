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

import Card from '@/components/el-card/index.vue'
Vue.component('el-card', Card)

Vue.use(Button)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Loading)

Vue.prototype.$message = Message
