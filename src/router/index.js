import {createRouter, createWebHashHistory} from "vue-router"


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
    {path: '/', redirect: '/login'},
    {path: '/login', component: Login},
    {
        path: '/home',
        component: Home,
        redirect: '/home/users',
        children: [
            {path: 'users', component: Users},
            { path: 'rights', component: Rights },
            { path: 'goods', component: Goods },
            { path: 'orders', component: Orders },
            { path: 'settings', component: Settings },
            // 用户详情页的路由规则
            { path: 'userinfo/:id', component: UserDetail, props: true }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
