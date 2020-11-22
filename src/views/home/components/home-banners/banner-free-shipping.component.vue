

<template>
  <div>
    <div class="banner free shipping">
      <div class="pic-bg mobile">
        <h2>MEDIOS DE ENVIO</h2>
        <h3>
          !Envíos Gratis!
          <br>POR COMPRAS SUPERIORES A $100.000 COP
          <br>
          <span>valido solo para colombia</span>
        </h3>
        <h4>Costo de envío a nivel nacional : $8.000 COP</h4>
        <!-- <h4>Costo de envío a nivel internacional: $10 USD</h4> -->
      </div>
      <div class="pic-bg desktop">
        <h2>MEDIOS DE ENVIO</h2>
        <h3>
          !Envíos Gratis!
          POR COMPRAS SUPERIORES A $100.000 COP
          <br>

          <h4 >(valido solo para colombia) Costo de envío a nivel nacional : $8.000 COP <br> 
         <span style="display:none"> Costo de envío a nivel internacional: $10 USD </span>
          </h4>
        </h3>

      </div>
      <!-- <div class="gold-bg">
        <div class="message">COMPRAS INTERNACIONALES</div>
      </div> -->
    </div>
    <div class="banner desktop credit-cards">
      <h1>METODOS DE PAGO</h1>
      <div class="cards">
        <img
          class="card"
          src="./../../../../shared/assets/images/banners/desktop-credit-card/PW-IMAGENES-PARA-MAQUETAR-VISA.png"
        >
        <img
          class="card"
          src="./../../../../shared/assets/images/banners/desktop-credit-card/PW-IMAGENES-PARA-MAQUETAR-MASTERCARD.png"
        >
        <img
          class="card"
          src="./../../../../shared/assets/images/banners/desktop-credit-card/PW-IMAGENES-PARA-MAQUETAR-AMERICAN.png"
        >
      </div>

      <p>
        Realiza tus pagos a través de tarjeta de credito, debito automático (PSE)
        <br>ó efectivo por medio de Efecty, Davivienda ó Bancolombia ( consignación )
      </p>

      <img
        class="corner toRight"
        src="./../../../../shared/assets/images/banners/desktop-credit-card/PW-IMAGENES-PARA-MAQUETAR-GPLDER.png"
      >
      <img
        class="corner toLeft"
        src="./../../../../shared/assets/images/banners/desktop-credit-card/PW-IMAGENES-PARA-MAQUETAR-GPLIZQ.png"
      >
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

  .mobile {
    display: block !important;
  }
  .desktop {
    display: none !important;
  }

  div.pic-bg {
    background-color: black;
    background-image: url("../../../../shared/assets/images/banners/free-shipping-bg.jpg");
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

@media (min-width: 600px) {
  .banner.free.shipping {
    .mobile {
      display: none !important;
    }
    .desktop {
      display: block !important;
    }

    div.pic-bg {
      background-color: #dfcc8d;
      background-image: url("../../../../shared/assets/images/banners/free-shipping-bg-desktop_Mesa de trabajo 1.jpg");
      background-size: cover;

      padding: 1.5em;

      h2 {
        font-size: 16px;
        letter-spacing: 4px;
        font-weight: 300;

        padding-top: 10px;
        padding-bottom: 10px;
      }

      h3 {
        font-size: 14px;
        letter-spacing: 2px;
        font-weight: 900;
        line-height: 2em;

        font-family: "Open Sans" !important;

        transform: scaleY(0.9);
        padding-top: 5px;
        padding-bottom: 10px;
      }

      h4 {
        font-size: 14px;
        line-height: 25px;
        font-weight: 300;
        font-family: "Open Sans" !important;

        transform: scaleY(0.9);
      }
    }
    div.gold-bg {
      display: none;
    }
  }
  .banner.desktop.credit-cards {
    padding: 0px;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
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

    position: relative;

    .cards {
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
    }

    h1 {
      font-size: 16px;
      letter-spacing: 4px;
      font-weight: 300;

      padding-top: 2em;
    padding-bottom: 1.5em;
    }

    h2 {
      font-size: 13px;
    }

    p {
      width: 638px;
      font-family: "Open Sans";
      font-size: 14px;
      margin: 0 auto;
      line-height: 1.5em;
      padding-bottom: 2em;
          padding-bottom: 4px;
          letter-spacing: 1px;
    }

    .corner {
      position: absolute;
      width: 20em;

      top: 0px;
      &.toRight {
        right: 0px;
      }
      &.toLeft {
        left: 0px;
      }
    }

    .card {
      width: 4em;
      margin: 1em;
    }
  }
}
</style>
