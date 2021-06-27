<template>
    <header class="p-3 bg-dark text-white">
        <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <router-link :to="{ name: 'home' }" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
                 <h3 class="logo">MyStore</h3>
            </router-link>

            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <router-link :to="{ name: 'home' }" class="nav-link px-2 text-secondary">Home</router-link>
                <li><a href="#" class="nav-link px-2 text-white">Features</a></li>
                <li><a href="#" class="nav-link px-2 text-white">Pricing</a></li>
                <li><a href="#" class="nav-link px-2 text-white">FAQs</a></li>
                <li><a href="#" class="nav-link px-2 text-white">About</a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
            </form>

            <div class="text-end">
                <router-link :to="{ name: 'login' }" class="btn btn-outline-light me-2">Login</router-link>
                <router-link :to="{ name: 'register' }" class="btn btn-warning">Sign-up</router-link>
                <button type="button" class="btn btn-success">Cart (0)</button>
            </div>
        </div>
        </div>
    </header>
</template>

<script>
export default {
}
</script>

<style scoped>
    .logo{ margin-right: 20px; margin-top: 5px; }
    .b-example-divider {
    height: 3rem;
    background-color: rgba(0, 0, 0, .1);
    border: solid rgba(0, 0, 0, .15);
    border-width: 1px 0;
    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
    }

    .form-control-dark {
    color: #fff;
    background-color: var(--bs-dark);
    border-color: var(--bs-gray);
    }
    .form-control-dark:focus {
    color: #fff;
    background-color: var(--bs-dark);
    border-color: #fff;
    box-shadow: 0 0 0 .25rem rgba(255, 255, 255, .25);
    }

    .bi {
    vertical-align: -.125em;
    fill: currentColor;
    }

    .text-small {
    font-size: 85%;
    }

    .dropdown-toggle {
    outline: 0;
    }
    .me-lg-auto {
        margin-right: auto!important;
    }
</style>