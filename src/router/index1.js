import {createRouter, createWebHashHistory} from "vue-router"

// 导入需要的组件
import Home from '@/views/Home/Home.vue'
import User from '@/views/User/User.vue'

// 路由规则的数组
const routes = [
    // 定义首页的路由规则
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    // 定义我的路由规则
    {path: '/user', component: User}
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router