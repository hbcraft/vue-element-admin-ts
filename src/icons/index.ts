import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import * as icons from './icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(icons)

Vue.component('fa-icon', FontAwesomeIcon)
