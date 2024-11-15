import { createRouter, createWebHistory } from 'vue-router';
import login from '../router/views/login.vue';
import login_success from '../router/views/login_success.vue';


const routes = [
    {
    path: '/' },
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