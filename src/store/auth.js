import http from './http';

export default {
    state: {
        loginUser: JSON.parse(sessionStorage.getItem('loginUser')),
        menus: []
    },
    getters: {},
    actions: {
        login({commit}, {username, password}) {
            return http.post("/auth/login", {username: username, password: password});
        },
        getMenus({commit}) {
            http.post("/auth/getMenus").then(res => {
                commit('SET_MENUS', res.data.data);
            });
        }
    },
    mutations: {
        SET_LOGIN_USER(state, loginUser) {
            state.loginUser = loginUser;
            sessionStorage.setItem('loginUser', JSON.stringify(loginUser));
        },
        SET_MENUS(state, menus) {
            state.menus = menus;
        }
    }
}