import Vue from 'vue'
import {
  Button,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Form,
  FormItem,
  Image,
  Input,
  Loading,
  Menu,
  MenuItem,
  Message,
  Option,
  Select
} from 'element-ui'

// 已在@/component/global中挂载自定义全局组件el-card

Vue.use(Button)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Image)
Vue.use(Input)
Vue.use(Loading)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Option)
Vue.use(Select)

Vue.prototype.$message = Message
