import http from './http';

export default {
    state: {
        userInfo: {},
        menus: []
    },
    getters: {},
    actions: {
        login({commit}, {username, password}) {
            return http.post("/auth/login", {username: username, password: password});
        },
        getMenus({commit}) {
            http.post("/auth/getMenus").then(res => {
                commit('setMenus', res.data.data);
            });
        }
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setMenus(state, menus) {
            state.menus = menus;
        }
    }
}