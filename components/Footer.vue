<template>
  <footer>
    <b-container>
      <b-row class="py-5 d-flex align-items-center">
        <b-col lg="6">
          <p class="text-center">Copyright © FlashFootball</p>
        </b-col>
        <b-col lg="6">
          <div class="social-networks d-flex align-items-center justify-content-center mt-3">
              <a href="https://twitter.com/FlashFootballFR" target="_blank">
                <img class="img-twitter" src="~/assets/images/twitter.svg" alt="Icon Twitter">
              </a>
              <a href="https://www.instagram.com/flashfootball_fr/" target="_blank">
                <img class="img-instagram" src="~/assets/images/instagram.svg" alt="Icon Instagram">
              </a>
              <a href="https://www.facebook.com/Flash.football.fr" target="_blank">
                <img class="img-facebook" src="~/assets/images/facebook.svg" alt="Icon Facebook">
              </a>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  footer {
    margin-top: 75px;
    background-color: #222228;
  }

  p {
    margin-bottom: 0;
  }

  img {
    width: auto;
    transition: opacity 200ms;
  }

  img:hover {
    opacity: 0.8;
  }

  .img-twitter {
    height: 30px;
  }

  .img-instagram {
    height: 28px;
    margin: 0 10px 0 13px;
  }

  .img-facebook {
    height: 26px;
  }

  @media screen and (min-width: 992px) {  
    p {
      text-align: left!important;
    }

    .social-networks {
      margin-top: 0!important;
      justify-content: flex-end!important;
    }
  }
</style>