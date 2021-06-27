<template>
    <div>
        <front-header></front-header>
        <div class="form-signin">
            <div>
                <h1 class="h3 mb-3 fw-normal">Register</h1>
                <div class="form-floating">
                    <input type="text" name="name" class="form-control" placeholder="Name" v-model="name">
                </div>
                <div class="form-floating">
                    <input type="email" name="email" class="form-control" placeholder="Email" v-model="email">
                </div>
                <div class="form-floating">
                    <input type="password" name="password" class="form-control" placeholder="Password" v-model="password">
                </div>
                <div class="form-floating">
                    <input type="password" name="password_confirmation" class="form-control" placeholder="Confirm Password" v-model="confirm_password">
                </div>
                <button class="w-100 btn btn-lg btn-primary btn-register" type="submit" @click="register">Sign in</button>
                <div class="alert alert-danger" role="alert" v-if="has_error">
                <div v-for="message in validation_message" :key="message">{{ message }}</div>
                </div>
                <div class="alert alert-success" role="alert" v-if="no_error">
                    You registered successfully
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

export default {
    name: "Register",
    components: {
        FrontHeader,
        FrontFooter
    },
    data() {
        return {
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            validation_message: [],
            has_error: false,
            no_error: false,
        }
    },
    computed: {

    },
    methods: {
        register() {
            this.validation_message = []
            this.has_error = false
            this.no_error = false
            if( this.name == "" ){
                this.validation_message.push('Name is required')
                this.has_error = true
            }
            if( this.email == "" ){
                this.validation_message.push('Email is required')
                this.has_error = true
            }
            if( this.password == "" ){
                this.validation_message.push('Password is required')
                this.has_error = true
            }
            if( this.confirm_password == "" ){
                this.validation_message.push('Confirm password is required')
                this.has_error = true
            }
            if( this.password != this.confirm_password ){
                this.validation_message.push('Password and confirm password does not match')
                this.has_error = true
            }
            if( !this.has_error ){
                //code here
                axios.post('/api/user/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password
                })
                .then( response => {
                    this.no_error = true
                    setTimeout(function(){
                        window.location.href = "/login"
                    },2000);
                })
                .catch(error => {
                    this.validation_message.push('Something went wrong')
                })
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
        margin-top: 50px;
        margin-bottom: 50px;
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
