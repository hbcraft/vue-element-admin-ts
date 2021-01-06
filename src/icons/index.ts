import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as icons from './icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(icons)

Vue.component('fa-icon', FontAwesomeIcon)
