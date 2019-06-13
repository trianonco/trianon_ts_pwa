<template>
  <div class="banner authorized shops">
    <br>
    <div class="banner-title">
      <h2>Tiendas Trianon</h2>
      <h3>CONTAMOS CON CINCO PUNTOS DIRECTOS CUATRO EN BOGOTÁ Y UNO EN PALMIRA</h3>
    </div>
    <div class="banner-button gold">
      <img class src="../../../../shared/assets/images/banners/button-place-dark-ico-02.png">
      <h4 @click="goToAuthorizedShops()">
        <span>VER UBICACIONES</span>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBannerAuthorizedShopsComponent",
  props: {},
  methods: {
    goToAuthorizedShops() {
      this.$router.push("/view/authorized/shops");
    }
  }
};
</script>

<style lang="less">
@import (reference) "../../../../shared/styles/index.less";

.banner.authorized.shops {
  display: block;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  background-color: black;
  color: white;
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
      color: @color-white;
      font-size: 10px;
      font-weight: 300;
      letter-spacing: 2px;
      padding-bottom: 10px;
      line-height: 16px;
    }
  }
  .banner-button {
    &.gold {
      #button-gold-dark();
    }
  }
}
</style>
