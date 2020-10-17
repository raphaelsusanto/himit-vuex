import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import programming from './modules/programming';

// import actions from './actions';
// import getters from './getters';
// import mutations from './mutations';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        user,
        programming
    }
});