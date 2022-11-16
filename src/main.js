import {createApp} from 'vue'
import App from './App.vue'
import bus from './bus'
import 'bootstrap/dist/css/bootstrap.min.css'
// import App2 from './App2.vue'

const app = createApp(App)

app.config.globalProperties.$bus = bus

app.mount('#app')



