<template>
  <div>
    <b-container class="first-content">
      <b-row class="align-items-end">
        <!-- Premier article -->
        <b-col lg="6">
          <div>
            <nuxt-link class="first-article" :to="{ name: 'actu-slug', params: { slug: articles[0].slug } }">
              <b-row class="title-and-date">
                <b-col lg="9">
                  <h2>{{ articles[0].title }}</h2>
                </b-col>
                <b-col lg="3">
                  <p class="text-lg-right">{{ articles[0].date }}</p>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <img class="d-block w-100" :src="articles[0].img" alt="" />
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <p>{{ articles[0].tag }}</p>
                </b-col>
              </b-row>
            </nuxt-link>
          </div>
        </b-col>
        <!-- Fin premier article -->
        <!-- Du 2 au 4ème article -->
        <b-col lg="6" class="content-recent-articles">
          <div class="recent-articles" v-for="(i, idx) in (1, 3)" :key="idx"> <!-- À modifier quand on aura plus d'articles -->
            <nuxt-link class="d-flex" :to="{ name: 'actu-slug', params: { slug: articles[i].slug } }">
              <img class="d-block" :src="articles[i].img" alt="" />
              <div class="text">
                <h3>{{ articles[i].title }}</h3>
                <div class="category-and-date d-flex justify-content-between">
                  <p>{{ articles[i].date }}</p>
                  <p>{{ articles[i].tag }}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </b-col>
        <!-- Fin du 2 au 4ème article -->
      </b-row>
    </b-container>
    <b-container class="mt-5 home-second-section">
      <h2>Les derniers articles</h2>
      <b-row class="last-articles">
        <b-col lg="3">
          <div class="article">
            <nuxt-link :to="{ name:  'actu-slug', params: { slug: articles[4].slug }}">
              <img class="d-block w-100" :src="articles[4].img" alt="" />
              <div class="text">
                <h3>{{ articles[4].title }}</h3>
                <div class="category-and-date d-flex justify-content-between">
                  <p>{{ articles[4].date }}</p>
                  <p>{{ articles[4].tag }}</p>
                </div>
              </div>
            </nuxt-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('actu', params.slug)
      .only(['title', 'img', 'slug', 'tag', 'date'])
      .sortBy('id', 'desc')
      .limit(12)
      .fetch();

    return {
      articles
    }
  }
}
</script>

<style scoped>
  .first-article img {
    border-radius: 17px;
    height: 370px;
    object-fit: cover;
    object-position: center;
  }

  .first-article .title-and-date {
    align-items: flex-end;
  }

  .recent-articles {
    background-color: #222228;
    border-radius: 15px;
    margin-top: 25px;
  }

  .recent-articles img {
    width: 110px;
    height: 110px;
    object-fit: cover;
    border-radius: 15px;
  }

  .recent-articles .text {
    height: 110px;
    position: relative;
    width: 100%;
  }

  h3 {
    font-size: 18px;
    margin: 10px 0 0 10px;
  }

  .category-and-date {
    position: absolute;
    bottom: -8px;
    left: 10px;
    right: 15px;
  }

  .home-second-section h2 {
    position: relative;
  }

  .home-second-section h2::after {
    content: "____";
    position: absolute;
    top: 20px;
    left: 0px;
    color: #9B52E0;
  }

  .article {
    background-color: #222228;
    border-radius: 18px;
    margin-bottom: 20px;
    position: relative;
    min-height: 450px;
  }

  .last-articles {
    margin-top: 50px;
  }

  .last-articles .category-and-date {
    position: absolute;
    width: 90%;
    bottom: 0;
    left: 5%;
  }

  .last-articles img {
    height: 300px;
    object-fit: cover;
    border-radius: 18px 18px 0 0;
  }

  @media screen and (min-width: 992px) {
    .content-recent-articles {
      margin-bottom: 40px;
    }

    h3 {
      font-size: 22px;
    }

    .home-second-section h2::after {
      top: -10px;
      left: 310px;
    }

    .article {
      height: 380px;
      min-height: unset;
    }

    .last-articles img {
      height: 200px;
    }
  }
</style>