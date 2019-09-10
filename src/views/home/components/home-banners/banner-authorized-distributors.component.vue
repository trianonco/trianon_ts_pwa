<template>
  <div>
    <div class="banner mobile authorized distributors">
      <div class="banner-title">
        <h2>DISTRIBUIDORES AUTORIZADOS</h2>
        <h3>
          ENCUENTRA nuestros productos en
          MÚLTIPLEs puntos por toda COLOMBIA.
        </h3>
      </div>
      <div class="banner-button gold">
        <img class src="../../../../shared/assets/images/banners/button-place-ico-02.png">
        <h4 @click="goToAuthorizedDistributors()">
          <span>VER UBICACIONES</span>
        </h4>
      </div>
    </div>

    <div class="banner desktop authorized distributors">
      <h1>TRIANON ES COLOMBIA</h1>
      <p>
        ENTENDEMOS QUE LA CERCANÍA EN DONDE QUIERA QUE ESTÉS, ES FACILITAR TU VIDA Y RESPETAR TU TIEMPO,
        <br>POR ELLO, ESTAMOS EN MÁS DE 1.300 DISTRIBUIDORES AUTORIZADOS POR TODA COLOMBIA,
        <br>TAMBIÉN CONTAMOS CON 5 TIENDAS DIRECTAS UNA EN PALMIRA Y 4 MÁS EN BOGOTÁ.
      </p>
      <div class="buttons">
        <div style="    padding: 0em 2em;">
          <div class="banner-button gold">
            <img class src="../../../../shared/assets/images/banners/button-place-ico-02.png">
            <h4 @click="goToAuthorizedDistributors()">
              <span>DISTRIBUIDORES</span>
            </h4>
          </div>
        </div>
        <div style="    padding: 0em 2em;">
          <div class="banner-button gold">
            <img class src="../../../../shared/assets/images/banners/button-place-dark-ico-02.png">
            <h4 @click="goToAuthorizedShops()">
              <span>TIENDAS TRIANON</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBannerAuthorizedDistributorsComponent",
  props: {},
  methods: {
    goToAuthorizedDistributors() {
      this.$router.push("/view/authorized/distributors");
    },
    goToAuthorizedShops() {
      this.$router.push("/view/authorized/shops");
    }
  }
};
</script>

<style lang="less">
@import (reference) "../../../../shared/styles/index.less";

.banner {
  display: block;
  width: 100%;

  //height: @10pm;
  padding: 1em;
  box-sizing: border-box;
  background-color: white;
  z-index: 150;
  position: relative;

  &.mobile {
    display: block;
  }
  &.desktop {
    display: none;
  }

  &.authorized.distributors {
    .banner-title {
      max-width: 290px;
      margin: 0 auto;
      #Font-TrajanPro("normal");
      text-align: center;
      h2 {
        font-size: 12px;
        padding-bottom: 10px;
      }
      h3 {
        font-family: "Open Sans";
        transform: scaleY(1);
        text-transform: uppercase;
        color: @color-black;
        font-size: 10px;
        font-weight: 300;
        letter-spacing: 2px;
        padding-bottom: 10px;
        line-height: 16px;
      }
    }
    .banner-button {
      max-width: 290px;
      margin: 0 auto;
      &.gold {
        #button-gold();
      }
    }
  }
}

@media (min-width: 600px) {
  .banner {
    &.mobile {
      display: none;
    }
    &.desktop {
      display: block;

      h1 {
        font-family: "TrajanPro";
        text-align: center;
        padding: 1em;
        padding-bottom: 1.5em;
        font-size: 18px;
        transform: scaleY(0.9);
        letter-spacing: 2px;
            padding-bottom: 0.85em;
      }
      p {
        font-family: "Open Sans";
        text-align: center;
        font-size: 14px;
        width: 90%;
        max-width: 938px;
        margin: 0 auto;
        line-height: 1.85em;
        -webkit-transform: scaleY(0.95);
        transform: scaleY(0.95);
        letter-spacing: 2px;
        color: #525252;

        transform: scaleY(0.85);

      }

      .buttons {
        margin: 1em;
        display: block;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-align-items: center;
        -ms-flex-align: center;
        align-items: center;

        h4 {
          font-size: 16px !important;
          width: calc(100% - 3.25em) !important;
        }
        img {
          width: 3em !important;
        }
      }

      .banner.authorized.distributors .banner-button.gold {
        width: 320px;
      }

      .banner-button {
        margin: 0em !important;
        width: 320px !important;
      }

      div {
        display: inline-block;
      }
    }
  }
}
</style>
