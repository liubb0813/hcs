import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex';
import createRouter from './router';
import createStore from './store';
import './assets/comm.css'

Vue.use(VueRouter);
Vue.use(ElementUI);
Vue.use(Vuex);

const router = createRouter();
const store = createStore();

router.beforeEach((to, from, next) => {
    // if (to.fullPath != '/login') {
    //     next('/login');
    // } else {
    //     next();
    // }
    next();
});

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});