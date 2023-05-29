import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


createApp(App).mount('#app')

/*
const routes = [
    {path: '/', component: HomeView}, 
    {path: '/game', component: GameView},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

const app = Vue.createApp({})

app.use(router)

app.mount('#app')
*/