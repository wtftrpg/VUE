import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'//element-plus组件库????????
import 'element-plus/dist/index.css'

const app=createApp(App)

//路由配置文件
import router from './router/index.js'
createApp(App).use(router).mount('#app')

app.use(ElementPlus) //使用element-plus组件库
app.mount('#app') //挂载到id为app的div上


