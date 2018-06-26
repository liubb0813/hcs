import http from '../http';

export default {
    state: {

    },
    getters: {},
    actions: {
        getUserList({commit}, {offset, limit}) {
            return http.post("/sys/getUserList", {offset: offset, limit: limit});
        },
        findUserById({commit}, id) {
            return http.post("/sys/findUserById", {id: id});
        }
    },
    mutations: {

    }
}