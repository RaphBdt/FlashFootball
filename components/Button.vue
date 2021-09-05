<template>
  <b-button><nuxt-link :to="link">{{ name }}</nuxt-link></b-button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        name: {
            type: String,
            default: 'Bouton'
        },
        link: {
            type: String,
            default: '/'
        }
    }
}
</script>

<style scoped>
    button {
        background: #9B52E0!important;
        border: none;
        transition: 200ms opacity;
    }

    button:hover {
        opacity: 0.8;
    }

    a {
        color: #ffffff;
    }
</style>