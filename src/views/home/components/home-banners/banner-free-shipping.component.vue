

<template>
  <div class="banner free shipping">
    <div class="pic-bg">
      <h2>MEDIOS DE ENVIO</h2>
      <h3>
        !Envíos Gratis!
        <br>POR COMPRAS SUPERIORES A $100.000 COP
        <br>
        <span>valido solo para colombia</span>
      </h3>
      <h4>Costo de envío a nivel nacional : $8.000 COP</h4>
      <h4>Costo de envío a nivel internacional: $10 USD</h4>
    </div>
    <div class="gold-bg">
      <div class="message">COMPRAS INTERNACIONALES</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBannerFreeShippingComponent",
  props: {}
};
</script>

<style lang="less">
@import (reference) "../../../../shared/styles/index.less";

.banner.free.shipping {
  display: block;
  width: 100%;
  padding: 0em;
  box-sizing: border-box;
  background-color: white;

  div.pic-bg {
    background-color: black;
    background-image: url("../../../../shared/assets/images/banners/free-shipping-bg.png");
    background-size: cover;
    color: white;
    display: block;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;
    text-align: center;

    h2 {
      font-size: 13px;
      letter-spacing: 4px;
      font-weight: 300;

      padding-top: 10px;
      padding-bottom: 10px;
    }

    h3 {
      font-size: 11px;
      letter-spacing: 1px;
      font-weight: 900;
      line-height: 16px;

      padding-top: 5px;
      padding-bottom: 10px;
    }

    h4 {
      font-size: 11px;
      line-height: 25px;
    }
  }
  div.gold-bg {
    background-color: #dfcc8d;
    background-image: url("../../../../shared/assets/images/banners/free-shipping-gold.png");
    background-size: cover;
    color: white;
    display: block;
    width: 100%;
    padding: 1.5em;
    box-sizing: border-box;
    text-align: center;
    .message {
      background-color: black;
      color: white;
      font-family: "TrajanPro";
      font-weight: normal;
      font-style: normal;
      font-size: 10px;
      letter-spacing: 2px;
      padding: 1em;
      text-transform: uppercase;
      border: 1px solid @color-yellow;
    }
  }
  h2 {
    text-align: center;
    font-family: "TrajanPro";
    font-size: 0.85em;
    text-transform: uppercase;
  }
  h3 {
    text-align: center;
    font-family: "Open Sans";
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.9em;
    span {
      font-size: 0.85em;
      padding-top: 0.25em;
      font-weight: lighter;
    }
  }
  h4 {
    text-align: center;
    font-family: "Open Sans";
    text-transform: uppercase;
    font-weight: lighter;
    margin: 0px;
    padding: 0px;
  }
}
</style>
