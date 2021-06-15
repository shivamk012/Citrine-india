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
        cart: [],
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
        },
        addToCart (state, {product, quantity}) {

            const productInCart = state.cart.find(item => {
                return item.product._id === product._id
            })

            if( productInCart ) {
                productInCart.quantity += quantity;
                return;
            }

            state.cart.push({
                product,
                quantity
            })
        }
    },
    actions: {
        setToken ({commit}, token) {
            commit('setToken', token)
        },
        setUser ({commit}, token) {
            commit('setUser', token)
        },
        addToCart ({commit}, {product, quantity}) {
            commit('addToCart', {product, quantity})
        }
    },
    getters: {
        cartItemCount: state => {
            return state.cart.length;
        }
    }
})