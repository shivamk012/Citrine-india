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
        contactInfo: null,
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
        },
        removeProductFromCart (state, product) {
            state.cart = state.cart.filter(item => {
                return item.product._id !== product._id
            })
        },
        addContactInfo (state, info) {
            state.contactInfo = info;
        },
        quantityChange (state, {_id, quantity}) {
            const productInCart = state.cart.find(item => {
                return item.product._id === _id
            })

            productInCart.quantity = quantity
        },
        setCart (state, cart) {
            state.cart = cart;
        },
        logout (state) {
            state.token =  null;
            state.user = null;
            state.isUserLoggedin = false;
            state.isAdmin = false;
            state.cart = [];
            state.contactInfo = null;
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
        },
        removeProductFromCart ({commit}, product) {
            commit('removeProductFromCart', product)
        },
        addContactInfo ({commit}, info) {
            commit('addContactInfo',info)
        },
        quantityChange ({commit}, {_id, quantity}) {
            commit('quantityChange', {_id, quantity})
        },
        setCart ({commit}, cart) {
            commit('setCart', cart)
        },
        logout ({commit}) {
            commit('logout')
        }
    },
    getters: {
        cartItemCount: state => {
            return state.cart.length;
        },
        cartTotal: (state) => {
            let totalPrice = 0;
            let totalQuantity = 0;

            if ( state.user.role === 'customer') {
                state.cart.forEach(item => {
                    totalPrice += item.product.retailPrice * item.quantity;
                    totalQuantity += item.quantity
                })
            }

            if ( state.user.role === 'wholesaler' || state.user.role === 'admin') {
                state.cart.forEach(item => {
                    totalPrice += item.product.wholesalePrice * item.quantity;
                    totalQuantity += item.quantity
                })
            }

            return {totalPrice, totalQuantity}
        },
        contactInfo: state => {
            return state.contactInfo;
        },
        getUser: state => {
            return state.user;
        },
    }
})