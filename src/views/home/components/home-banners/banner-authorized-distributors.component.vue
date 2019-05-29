<template>
  <div class="banner authorized distributors">
    <div class="banner-title">
      <h2>Distribuidos Autorizados</h2>
      <h3>
        ENCUENTRA nuestros productos en
        MÚLTIPLEs puntos por toda COLOMBIA.
      </h3>
    </div>
    <div class="banner-button gold">
      <img class src="../../../../shared/assets/images/banners/button-place-ico-02.png">
      <h4>
        <span>VER UBICACIONES</span>
      </h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBannerAuthorizedDistributorsComponent",
  props: {}
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
</style>
