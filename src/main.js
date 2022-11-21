import {createApp} from 'vue'
// import App from './App.vue'
// import App2 from './App2.vue'
import App3 from "@/App3";
import bus from './bus'
// import 'bootstrap/dist/css/bootstrap.min.css'
//登录router的bootstrap
import './assets/css/bootstrap.css'
// import './index.css'
import Vant from 'vant';
import 'vant/lib/index.css';

// import router from './router'
import router from "@/router/index1";


const app = createApp(App3)

app.use(Vant)
app.use(router)

app.config.globalProperties.$bus = bus

app.mount('#app')




