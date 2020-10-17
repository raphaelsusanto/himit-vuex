import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import programming from './modules/programming';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        user,
        programming
    }
});