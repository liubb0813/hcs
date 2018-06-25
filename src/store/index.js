import Vuex from 'vuex';
import auth from './auth';
import sysUser from './sys/user';

export default () => {
    return new Vuex.Store({
        modules: {
            auth,
            sysUser
        }
    })
}