<template>
  <div class="banner about us">
    <img src="../../../../shared/assets/images/banners/about-us-header.png">
    <div class="banner-title">
      <h2>UNA TRADICIÓN DESDE 1935</h2>
      <h3>En TRIANON hemos construido experiencia y tradición por más de 80 años, dedicándonos a la fabricación de marroquineriá y accesorios en cuero, como, billeteras, bolsos, cinturones y llaveros, entre otros. Nuestra escencia está en el talento humano, fabricando productos con insumos 100% colombianos. Creamos artesanalmente cada artículo con la más alta calidad y detalle, logrando que cada producto sea una pieza única.</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBannerAboutUsComponent",
  props: {}
};
</script>

<style lang="less">
@import (reference) "../../../../shared/styles/index.less";

.banner.about.us {
  display: block;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;
  background-color: white;
  background-image: url("../../../../shared/assets/images/banners/about-us-bg.png");
  background-position: center;
  background-repeat: repeat-x;
  background-size: cover;
  color: black;
  img {
    display: block;
    width: 100%;
  }
  .banner-title {
    text-align: center;
    h2 {
      font-family: "TrajanPro";
      font-weight: 300;
      transform: scaleY(0.9);
      letter-spacing: 1px;
      font-size: 12px;
      padding-top: 12px;
      padding-bottom: 8px;
    }
    h3 {
      font-family: "Open Sans";
      color: @color-black;
      font-weight: 900;
      letter-spacing: 1px;
      max-width: 285px;
      width: 100%;
      margin: 0 auto;

      font-family: "Open Sans";
      transform: scaleY(1);

      font-size: 11px;
      font-weight: 300;
      letter-spacing: 0px;
      padding-bottom: 10px;
      padding-top: 10px;
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
