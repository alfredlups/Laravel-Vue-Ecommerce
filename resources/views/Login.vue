<template>
    <div>
        <front-header></front-header>
        <div class="form-signin">
            <div>
                <h1 class="h3 mb-3 fw-normal">Login</h1>
                <div class="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" v-model="user.email" >
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" v-model="user.password">
                </div>
                <button class="w-100 btn btn-lg btn-primary btn-login" type="submit" @click="login">Sign in</button>
                <div class="alert alert-danger" role="alert" v-if="loginMessage">
                    {{ loginMessage }}
                </div>
            </div>
        </div>
        <front-footer></front-footer>
    </div>
</template>

<script>
import FrontHeader from '../js/components/Header.vue'
import FrontFooter from '../js/components/Footer.vue'
import axios from 'axios'
import { mapActions, mapGetters } from 'vuex'

export default {
    name: "Login",
    components: {
        FrontHeader,
        FrontFooter
    },
    data() {
        return {
            user: {
                email: '',
                password: ''
            },
            validation_message: '',
            error_login: false
        }
    },
    mounted() {
        //this.validation_message =  this.$store.getters.getLoginMessage
    },
    computed: {
        loginMessage() {
            //return this.$store.getters.getLoginMessage this code is for getters
            return this.$store.state.validation_message
        }
    },
    methods: {

        login() {
            this.$store.dispatch('loginUser', this.user)
        },
        validateEmail() {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.user.email)) {
                return true
            } else {
               return false
            }
        }
    }
}
</script>

<style scoped>
    
    .form-signin {
        width: 100%;
        max-width: 400px;
        padding: 15px;
        margin: auto;
        margin-top: 80px;
        margin-bottom: 100px;
    }

    .form-signin .checkbox {
        font-weight: 400;
    }

    .form-signin .form-floating:focus-within {
        z-index: 2;
    }

    .bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
    }
    .form-floating{ margin-bottom:10px; }
    .btn-login{ margin-top: 10px; }
    .alert{ margin-top: 20px; }
    @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }
</style>
