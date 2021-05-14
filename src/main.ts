import { createApp } from 'vue'
import App from './App.vue'

import "bulma/bulma.sass";
import 'font-awesome/scss/font-awesome.scss';

import { createRouter, createWebHistory } from 'vue-router'



const routes = [
    { path: '/', component: () => import('./views/Home.vue') },
    { path: '/about', component:() => import('./views/About.vue') },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

const app = createApp(App)

console.log('\n' + ' %c EdithSystem ' + ' %c Version 1.0 ' + '\n', 'color: white; background: #030307; padding:5px 0;font-style:italic', 'background: white;font-style:italic; padding:5px 0;');

app.use(router)
app.mount('#app')
