import {createApp} from 'vue'
// import App from './App.vue'
import bus from './bus'
// import 'bootstrap/dist/css/bootstrap.min.css'
//登录router的bootstrap
import './assets/css/bootstrap.css'
import App2 from './App2.vue'
import './index.css'
import router from './router'

const app = createApp(App2)

app.config.globalProperties.$bus = bus

app.use(router)
app.mount('#app')




