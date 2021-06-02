import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
Vue.config.devtools = true

export default new Vuex.Store({
    strict: true,
    plugins: [createPersistedState()],
    state:{
        token: null,
        user: null,
        isUserLoggedin: false,
        isAdmin: false,
    },
    mutations:{
        setToken (state, token) {
            state.token = token
            if (token) {
                state.isUserLoggedin = true
            } else{
                state.isUserLoggedin = false
                state.isAdmin = false
            }
        },
        setUser (state, user) {
            state.user = user
            if (user.role === 'admin') {
                state.isAdmin = true
            } else{
                state.isAdmin = false
            }
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, token) {
            commit('setUser', token)
        }
    }
})