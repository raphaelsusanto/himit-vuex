import axios from "axios";

const state = {
    stringFormated: '',
    availableLanguage: [],

};

const getters = {
    getStringFormated: state => {
        return state.stringFormated;
    },
    getAvailableLanguage: state => {
        return state.availableLanguage;
    }
};

const mutations = {
    generateFormatedMutation: (state, payload) => {
        state.stringFormated = payload;
    },
    availableLanguageMutation: (state, payload) => {
        state.availableLanguage = payload;
    }
};

const actions = {
    generateFormated: ({ commit }, formData) => {
        axios.post('https://highlight-code-api.jefrydco.vercel.app/api', { code: formData.code }, {
            params: {
                lang: formData.selectedLanguage,
                fileName: formData.filename
            }
        }).then(result=>{
            console.log(result.data.data);
            commit('generateFormatedMutation', result.data.data);
        })
        
    },
    populateAvailableLanguage: ({ commit }) => {
        axios.get('https://highlight-code-api.jefrydco.vercel.app/api/options').then(result => {
            commit('availableLanguageMutation', result.data.data.languages);
        })
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}