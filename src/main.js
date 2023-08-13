import "../src/assets/main.css"
import { createApp } from 'vue'
import store from "./components/store/store"
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faUserSecret, faBars, faPersonWalkingDashedLineArrowRight, 
    faXmarkCircle,faStar, faHeadset, faXmark, faHome, faCheck, faEye, faUser, 
    faRightToBracket

} from '@fortawesome/free-solid-svg-icons'


library.add(faUserSecret, faBars, 
    faPersonWalkingDashedLineArrowRight, faXmarkCircle,
    faStar,faHeadset,faXmark,faHome, faCheck, faEye, faUser,
    faRightToBracket
    )

createApp(App)
.use(router)
.use(store)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
