import { createRouter, createWebHistory } from 'vue-router';
import login from 'C:/Users/mamol008/Desktop/vue1111/project01/src/router/views/login.vue';
import login_success from 'C:/Users/mamol008/Desktop/vue1111/project01/src/router/views/login_success.vue';

const routes = [
    {
    path: '/', component: login },
    {
    path: '/login', component: login },
    {
    path: '/login_success', component: login_success },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;