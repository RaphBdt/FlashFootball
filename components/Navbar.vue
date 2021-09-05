<template>
    <div>
    <b-navbar toggleable="lg" type="dark" class="py-3 navbar">
        <b-container>
            <b-navbar-brand><nuxt-link to="/"><img class="logo" src="~/assets/images/logo-f-flashfootball.svg" /></nuxt-link></b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-item><nuxt-link to="/">Tous les articles</nuxt-link></b-nav-item>
                <b-nav-item><nuxt-link to="/scooting">Scooting</nuxt-link></b-nav-item>
                <b-nav-item><nuxt-link to="/sportbets">Paris sportifs</nuxt-link></b-nav-item>
                <b-nav-item><nuxt-link to="/esport">E-sport</nuxt-link></b-nav-item>
                <b-nav-item><Button name="Événement" link="/events" /></b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .navbar {
        background-color: #222228;
    }

    .navbar-nav {
        align-items: flex-start;
    }

    .logo {
        height: 60px;
    }

    .nuxt-link-exact-active {
        color: #9B52E0;
    }

    a {
        color: #8A8A8F;
    }

    a:hover {
        color: #9B52E0;
    }

    @media screen and (min-width: 992px) {      
        .navbar-nav {
            align-items: center;
        }
        
        .logo {
            height: 75px;
        }
    }
</style>