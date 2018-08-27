import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('@/pages/Login')
        },
        {
            path: '/home',
            name: 'home',
            component: () => import('@/pages/Home')
        },
        {
            path: '/add',
            name: 'add',
            component: () => import('@/pages/Add')
        }
    ]
});
