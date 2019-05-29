
<template>
  <div class="banner address">
    <div class="header">
      <div class="title">
        <img src="../../../../shared/assets/images/banners/bullet-gold-01.png">
        <h2>PUNTO DE FÁBRICA</h2>
        <img src="../../../../shared/assets/images/banners/bullet-gold-01.png">
      </div>
      <div class="address">
        BOGOTÁ | CALLE 6A # 33 - 22
        <br>TEL : (1) 2011688 / CEL: 310 785 6037
      </div>
    </div>
    <div class="links">
      <router-link to="/safe">COMPRA SEGURA</router-link>/
      <router-link to="/terms">TERMINOS DE SERVICIO</router-link>
      <br>
      <router-link to="/politics">POLITICAS DE PRIVACIDAD</router-link>/
      <router-link to="/sitemap">MAPA DEL SITIO</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBannerAddressComponent",
  props: {}
};
</script>

<style lang="less">
@import (reference) "../../../../shared/styles/index.less";

.banner.address {
  display: block;
  width: 100%;
  height: fit-content;
  padding: 0em;
  padding-bottom: 1em;
  box-sizing: border-box;
  background-color: black;
  background-image: url("../../../../shared/assets/images/banners/address-bg.png");
  background-size: cover;
  background-position: center;

  color: white;

  .links {
    color: white;
    text-decoration: none;
    font-size: 10px;
    letter-spacing: 2px;
    width: 330px;
    margin: 0 auto;
    line-height: 18px;
    font-weight: 300;
    text-align: center;
    font-family: "Open Sans";
    a {
      color: white;
      text-decoration: none;
    }
  }

  div.header {
    display: block;
    width: 90%;
    font-family: "Open Sans";
    height: fit-content;
    margin: 0 auto;
    background-color: white;
    color: black;
    margin-bottom: 1em;

    padding-top: 1em;
    padding-bottom: 1em;

    text-align: center;

    .address {
      font-family: "Open Sans";
      text-transform: uppercase;
      font-size: 0.85em;
      font-weight: 300;
      width: 90%;
      margin: 0 auto;
      padding-bottom: 0.5em;
      line-height: 20px;
    }
    .title {
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

      font-family: "TrajanPro";
      font-size: 0.7em;
      font-weight: 300;
      padding: 0em 0.5em;

      img {
        width: 1em;
        padding: 1.25em;
      }
    }
  }
}
</style>
