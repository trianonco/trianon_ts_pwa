<template>
  <div>
    <div class="banner mobile about us">
      <img alt="TrianonCo Image" src="../../../../shared/assets/images/banners/about-us-header.png">
      <div class="banner-title">
        <h2>UNA TRADICIÓN DESDE 1935</h2>
        <h3>En TRIANON hemos construido experiencia y tradición por más de 80 años, dedicándonos a la fabricación de marroquineriá y accesorios en cuero, como, billeteras, bolsos, cinturones y llaveros, entre otros. Nuestra escencia está en el talento humano, fabricando productos con insumos 100% colombianos. Creamos artesanalmente cada artículo con la más alta calidad y detalle, logrando que cada producto sea una pieza única.</h3>
      </div>
    </div>
    <div class="banner desktop about us">
      <img
        alt="TrianonCo Image"
        src="../../../../shared/assets/images/banners/about-us-desktop_Mesa de trabajo 1.png"
      >
      <div class="banner-title">
        <h2>UNA TRADICIÓN DESDE 1935</h2>
        <h3>En TRIANON hemos construido experiencia y tradición por más de 80 años, dedicándonos a la fabricación de marroquineriá y accesorios en cuero, como, billeteras, bolsos, cinturones y llaveros, entre otros. Nuestra escencia está en el talento humano, fabricando productos con insumos 100% colombianos. Creamos artesanalmente cada artículo con la más alta calidad y detalle, logrando que cada producto sea una pieza única.</h3>
      </div>
    </div>
    <div class="banner desktop instagram">
      <a href="https://www.instagram.com/trianonoficial/" target="_blank">
        <img src="./../../../../shared/assets/images/banners/instragram-mock.png" width="100%">
      </a>
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

.banner.mobile.about.us {
  display: block;
}
.banner.desktop.about.us {
  display: none;
}
@media (min-width: 600px) {
  .banner.mobile.about.us {
    display: none;
  }
  .banner.desktop.about.us {
    display: block;
    padding: 0px !important;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    background-image: url("./../../../../shared/assets/images/profile-gold-bg.png");
    background-size: 10px 100%;

    .banner-title {
      width: 100%;
    }
    h2 {
      display: block;
      padding: 1em;
      padding-left: 3em;
      text-align: left;
      font-size: 14px;
    }
    h3 {
      display: block;
      padding: 1em;
      padding-left: 3em;
      padding-right: 3em;
      text-align: left;
      max-width: 100%;
      box-sizing: border-box;
      font-size: 14px;
      margin: 0 auto;
      letter-spacing: 1px;
      line-height: 1.5em;
    }
    img {
      display: block;
      //height: 20vw;
      //min-width: 100px;
      //min-height: 200px;
      width: 30vw;
      height: 20vw;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
