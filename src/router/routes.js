export default [
    {
        path: '/',
        component: () => import('../views/home.vue')
    },
    {
        path: '/login',
        component: () => import('../views/login.vue')
    }
]