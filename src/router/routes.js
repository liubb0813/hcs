export default [
    {
        path: '/login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/',
        component: () => import('../views/home.vue'),
        children: [{
            path: '/info-user',
            component: () => import('../views/info/user.vue')
        }, {
            path: '/info-role',
            component: () => import('../views/info/role.vue')
        }, {
            path: '/show',
            component: () => import('../views/show.vue')
        }]
    }
]