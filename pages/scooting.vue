<template>
  <b-container class="first-content">
    <h1>Scooting</h1>
    <b-row class="articles">
      <b-col lg="3" v-for="(article, idx) in articles" :key="idx">
        <div class="article">
          <nuxt-link :to="{ name:  'actu-slug', params: { slug: article.slug }}">
            <img class="d-block w-100" :src="require(`~/assets/images/articles/${article.img}`)" alt="" />
            <div class="text">
              <h3>{{ article.title }}</h3>
              <div class="category-and-date d-flex justify-content-between">
                <p>{{ article.date }}</p>
                <p>{{ article.tag }}</p>
              </div>
            </div>
          </nuxt-link>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('actu', params.slug)
      .only(['title', 'img', 'slug', 'tag', 'date', 'category'])
      .where({ category: 'Scooting' })
      .sortBy('createdAt', 'asc')
      .limit(8)
      .fetch();

    return {
      articles
    }
  }
}
</script>

<style scoped>
  h1 {
    position: relative;
  }

  h1::after {
    content: "____";
    position: absolute;
    top: 20px;
    left: 0px;
    color: #9B52E0;
  }

  .articles {
    margin-top: 50px;
  }

  .article {
    background-color: #222228;
    border-radius: 18px;
    margin-bottom: 20px;
    position: relative;
    min-height: 450px;
  }

  img {
    height: 300px;
    object-fit: cover;
    border-radius: 18px 18px 0 0;
  }

  h3 {
    font-size: 18px;
    margin: 15px auto;
    width: 90%;
  }

  .category-and-date {
    position: absolute;
    width: 90%;
    bottom: 0;
    left: 5%;
  }

  @media screen and (min-width: 992px) {
    h1::after {
      top: -15px;
      left: 185px;
    }

    .articles {
      margin-top: 25px;
    }

    .article {
      height: 380px;
      min-height: unset;
    }

    img {
      height: 200px;
    }

    h3 {
      font-size: 22px;
    }
  }
</style>