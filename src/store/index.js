import Vuex from 'vuex';
import auth from './auth';

export default () => {
    return new Vuex.Store({
        modules: {
            auth
        }
    })
}