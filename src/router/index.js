import { createRouter, createWebHashHistory } from "vue-router"


// 导入需要的组件
import Login from '@/components/MyLogin.vue'
import Home from '@/components/MyHome.vue'

import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'
import UserDetail from '@/components/user/MyUserDetail.vue'

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login }
]

const router = createRouter({
    history:createWebHashHistory(),
    routes
})

export default router
