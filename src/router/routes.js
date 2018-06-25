export default [
    {
        path: '/login',
        component: () => import('../views/login.vue')
    },
    {
        path: '/',
        component: () => import('../views/home.vue'),
        children: [{
            path: '/sys-user',
            component: () => import('../views/sys/user.vue')
        }, {
            path: '/sys-role',
            component: () => import('../views/sys/role.vue')
        }, {
            path: '/sys-menu',
            component: () => import('../views/sys/menu.vue')
        }]
    }
]