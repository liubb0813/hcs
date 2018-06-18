export default {
    state: {
        userInfo: {},
        menuItems: []
    },
    getters: {},
    actions: {
        login(store, {username, password}) {
            /*http请求后台获取user*/
            let userInfo = {username: username, gender: 'man'};

            store.commit('setUserInfo', userInfo);
        },
        getMenuItems(store) {
            /*http请求后台获取menuItems*/
            let meunItems = [];
            meunItems.push({menuId: 100, menuName: '用户管理'});
            store.commit('setMenuItems', meunItems);
        }
    },
    mutations: {
        setUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        setMenuItems(state, menuItems) {
            state.menuItems = menuItems;
        }
    }
}