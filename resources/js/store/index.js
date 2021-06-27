import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {},
        validation_message: '',
        error_login: false
    },
    actions: {
        async loginUser({}, user ) {
            if( user.email != "" && user.password != "" ) {
                await axios.post('/api/user/login', {
                    email: user.email,
                    password: user.password
                })
                .then( response => {
                    if( response.data.access_token ){
                        localStorage.setItem('user_token', response.data.access_token)
                        window.location.href = "/dashboard"
                    }else{
                        this.commit('setLoginMessage', response.data.message)
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.commit('setLoginMessage', 'Email and password must valid')
                })
            }else{
                this.commit('setLoginMessage', 'Email and password must not empty')
            }
        },
        logoutUser() {
            localStorage.removeItem('user_token')
            window.location.replace('/login')
        }
    },
    mutations: {
        setLoginMessage(state, payload) {
            state.validation_message = payload
        }
    },
    getters: {
        getLoginMessage(state) {
            return state.validation_message
        }
    }
})

export default store