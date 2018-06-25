import http from '../http';

export default {
    state: {
        userList: [],
        total: 0
    },
    getters: {},
    actions: {
        getUserList({commit}, {offset, limit}) {
            http.post("/sys/getUserList", {offset: offset, limit: limit}).then(res => {
                let data = res.data.data;
                commit('SET_USER_LIST', data.userList);
                commit('SET_TOTAL', data.total);
            });
        }
    },
    mutations: {
        SET_USER_LIST(state, userList) {
            state.userList = userList;
        },
        SET_TOTAL(state, total) {
            state.total = total;
        }
    }
}