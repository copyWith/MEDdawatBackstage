import Login from '../components/public/login.vue'
import Index from '../components/public/index.vue'
import MainIndex from '../components/public/main_index.vue'
import MainMenu from '../components/public/main_menu.vue'
import MainApp from '../components/public/main_appreciate.vue'
import MainAbout from '../components/public/main_aboutus.vue'
import MainRelation from '../components/public/main_relation.vue'
import MainOnline from '../components/public/main_online.vue'


export default [
    {
        path: '/',
        component: Login

    },
    {
        path: '/index',
        component: Index,

        children:[
            {path: '/index/', component: MainIndex},
            {path: '/index/menu', component: MainMenu},
            {path: '/index/appreciate', component: MainApp},
            {path: '/index/about', component: MainAbout},
            {path: '/index/relation', component: MainRelation},
            {path: '/index/online', component: MainOnline}
            ]
    }
]