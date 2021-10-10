<template>
    <b-container class="first-content">
        <article>
            <img class="d-block w-100 mb-4" :src="article.img" alt="" />
            <h1 class="h2 text-center">{{ article.title }}</h1>
            <p class="text-center mb-5">Le {{ article.date }} par <span>{{ article.auteur }}</span></p>
            <nuxt-content :document="article" />
        </article>
    </b-container>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('actu', params.slug).fetch();

        return { article }
    },
    head() {
        return {
            title: this.article.title,
            meta: [
                { hid: 'twitter:image', name: 'twitter:image', content: this.article.img },
                { hid: 'og:image', property: 'og:image', content: this.article.img }
            ]
        }
    }
}
</script>

<style scoped>
    img {
        border-radius: 17px;
    }

    span {
        color: #9B52E0;
    }
</style>