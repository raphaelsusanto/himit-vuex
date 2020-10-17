import axios from "axios";

const state = {
    userid: '',
    name: '',
    errMsg: ''
};

const getters = {
    getUserId: state => {
        return state.userid;
    },
    getErrMsg: state => {
        return state.errMsg;
    },
    getName: state => {
        return state.name;
    },
    isAuth: state => {
        return state.userid != '';
    }
};

const mutations = {
    loginMutation: (state, payload) => {
        state.userid = payload;
    },
    signoutMutation: (state) => {
        state.userid = '';
        state.name = '';
        state.errMsg = '';
    },
    setname: (state, payload) => {
        state.name = payload;
    },
    setErrMsg: (state, payload) => {
        state.errMsg = payload;
    }

};

const actions = {
    login: ({ commit }, user) => {
        axios.post('https://highlight-code-api.vercel.app/api/user/login', { name: user.name }).then(data => {
            console.log(data.data.success);
            if (data.data.success) {
                commit('loginMutation', data.data.data.id);
                commit('setname', user.name);
                commit('setErrMsg', '');
                localStorage.setItem('token', data.data.data.id);
                localStorage.setItem('name', user.name);
            } else {
                commit('setErrMsg', data.data.message);
                console.log(data.data.message);
            }
        })
    },
    logout: ({ commit }) => {
        commit('signoutMutation');
        localStorage.removeItem('token');
        localStorage.removeItem('name');
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}