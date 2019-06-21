<template>
  <div class="card inprocess" v-if="item">
    <div class="card-header" @click="doToogleCard()">
      <div class="card-header-bullet">
        <img
          alt="TrianonCo Image"
          src="../../../../shared/assets/images/gender-categories/bullet-gray.png"
          v-if="!UX.isCardOpen"
        >
        <img
          alt="TrianonCo Image"
          src="../../../../shared/assets/images/gender-categories/bullet-gold.png"
          v-if="UX.isCardOpen"
        >
      </div>

      <div class="card-header-title" v-if="item.product.description">
        <h1>{{item.product.description }} {{item.product.ref}}</h1>
      </div>

      <div class="card-header-see-more">
        <span v-if="!UX.isCardOpen">VER</span>
      </div>

      <img
        class="card-header-triangle"
        v-if="UX.isCardOpen"
        src="./../../../../shared/assets/images/gray-arrow.png"
      >
    </div>

    <div class="card-content" v-if="UX.isCardOpen">
      <div class="card-content-title" v-if="item.product.price_cop">
        <h1>ESTADO : PROCESO DE ENVIO</h1>
        <h2>PRECIO : {{ item.product.price_cop | toCurrency }} | COMPRA : {{ getDate(item.updatedAt) }}</h2>
        <h4>
          <a target="_blank" :href="getFacturaLink()" download>DESCARGAR FACTURA</a>
        </h4>
      </div>

      <div class="card-content-subtitle">
        <h1>¡TU COMPRA HA SIDO EXITOSA!</h1>
        <h5>Se notificará a tu correo electrónico cada proceso</h5>
      </div>

      <div class="card-content-status">
        <div class="status-icon-in-stock">
          <img
            src="./../../../../shared/assets/images/in-process/s0-green.png"
            v-if="isStateInStock()"
          >
          <img
            src="./../../../../shared/assets/images/in-process/s0-yellow.png"
            v-if="!isStateInStock()"
          >
          <h5>EN FÁBRICA</h5>
        </div>
        <div class="status-icon-dispatches">
          <img
            src="./../../../../shared/assets/images/in-process/s1-green.png"
            v-if="isStateInDispatches()"
          >
          <img
            src="./../../../../shared/assets/images/in-process/s1-yellow.png"
            v-if="!isStateInDispatches()"
          >
          <h5>DESPACHOS</h5>
        </div>
        <div class="status-icon-shipping">
          <img
            src="./../../../../shared/assets/images/in-process/s2-green.png"
            v-if="isStateInShipping()"
          >
          <img
            src="./../../../../shared/assets/images/in-process/s2-yellow.png"
            v-if="!isStateInShipping()"
          >
          <h5>EN ENVIO</h5>
        </div>
      </div>

      <div class="card-content-tracking-code">
        <div class="wrapper">OBTENER CÓDIGO DE RASTREO</div>
      </div>

      <h5 class="tracking-code-msg">( CÓDIGO DISPONIBLE EN 2 Ó 3 DÍAS HÁBILES )</h5>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
import firebase from "firebase/app";
var md5 = require("md5");

export default {
  name: "",
  components: {
    VLazyImage
  },
  methods: {
    doToogleCard() {
      this.UX.isCardOpen = !this.UX.isCardOpen;
    },

    isStateInStock() {
      return this.item.state.includes("IN PROCESS: PAYMENT SUCCESSFULL");
    },
    isStateInDispatches() {
      return this.item.state.includes("IN PROCESS: IN DISPATCHES");
    },
    isStateInShipping() {
      return this.item.state.includes("IN PROCESS: IN SHIPPING");
    },

    getFacturaLink() {
      const filename = "ComprobantePSE20190605172640.pdf";
      return (
        "https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F" +
        filename +
        "?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7"
      );
    },

    getDate(data) {
      const date = new Date(data.toDate());
      const dateObj = date;
      const month = dateObj.getUTCMonth() + 1; //months from 1-12
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();
      const newdate = day + "/" + month + "/" + year;
      return newdate;
    }
  },
  computed: {},
  props: ["item"],
  mounted() {
    console.warn(this.item);
  },
  data() {
    return {
      UX: {
        isCardOpen: false
      }
    };
  }
};
</script>

<style lang="less">
.card.inprocess {
  .card-header {
    display: block;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;

    border-bottom: 1px solid gray;

    position: relative;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    &-triangle {
      display: block;
      width: 1em;
      height: 1em;
      object-fit: contain;
      object-position: center;

      position: absolute;
      top: 2.75em;
      left: ~"calc(50vw - 1em)";
    }

    &-bullet {
      img {
        display: block;
        width: 0.75em;
        height: 0.75em;
        object-fit: contain;
        object-position: center;
      }
    }

    &-title {
      padding: 0em 0.5em;
      h1 {
        font-size: 0.75em;
      }
    }

    &-see-more {
      position: absolute;
      top: 1.8em;
      right: 15px;
      font-size: 10px;
      span {
        text-decoration: underline;
        //padding-bottom: 1px;
        //border-bottom: 1px solid black;
      }
    }
  }

  .card-content {
    display: block;
    padding: 0em;
    width: 100%;

    &-title {
      color: black;
      width: 100%;
      box-sizing: border-box;
      padding: 1em;
      h1 {
        font-size: 10px;
        padding-bottom: 1em;
        text-align: left;
      }
      h2 {
        font-size: 10px;
        padding-bottom: 1em;
        text-align: left;
      }
      h4 {
        font-size: 10px;
        padding-bottom: 1em;
        text-align: left;
        text-decoration: underline;
      }
    }

    &-subtitle {
      display: block;
      width: 100%;
      background-color: #5a9978;
      color: #fff;
      h1 {
        padding: 1em;
        padding-bottom: 5px;
      }
      h5 {
        font-size: 10px;
        padding: 1em 0em;
        padding-top: 0.5em;
        font-family: "Open Sans";
      }
    }

    &-status {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;

      background-image: url("./../../../../shared/assets/images/in-process/bg.png");
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 100%;

      img {
        display: block;
        width: 3em;
        margin: 0 auto;
      }

      .status-icon-in-stock {
        padding: 0.5em;
        width: ~"calc(33% - 2em)" !important;
        position: relative;
        h5 {
          position: absolute;
          left: 2px;
          font-size: 10px;
          width: 100%;
          text-align: center;
        }
      }
      .status-icon-dispatches {
        padding: 0.5em;
        width: ~"calc(33% - 1em)" !important;
        position: relative;
        h5 {
          position: absolute;
          left: 2px;
          font-size: 10px;
          width: 100%;
          text-align: center;
        }
      }
      .status-icon-shipping {
        padding: 0.5em;
        width: ~"calc(33% - 1em)" !important;
        position: relative;
        h5 {
          position: absolute;
          left: -2px;
          font-size: 10px;
          width: 100%;
          text-align: center;
        }
      }
    }

    &-tracking-code {
      padding: 1em;
      padding-top: 1.5em;
      .wrapper {
        display: block;
        box-sizing: border-box;
        padding: 1em;
        width: 100%;
        border: 1px solid #d8b151;
      }
    }

    .tracking-code-msg {
      font-size: 10px;
      padding: 1em;
    }

    &-wrapper {
      display: block;
      width: 100%;
      padding: 1em;
      box-sizing: border-box;

      border: 1px solid white;

      &-photo {
        display: block;
        width: auto;
        height: 244px;
        padding: 1em;
        box-sizing: border-box;
        margin: 0 auto;
      }
    }

    &-quantity {
      display: block;
      width: 100%;
      padding: 0em;
      box-sizing: border-box;

      background-color: gray;
      color: #fff;

      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;

      &-remove {
        display: block;
        padding: 1em;
        width: 2em;
        border-right: 1px solid white;
      }
      &-number {
        display: block;
        padding: 1em;
        width: ~"calc(100% - 10em - 2px)";
      }
      &-add {
        display: block;
        padding: 1em;
        width: 2em;
        border-left: 1px solid white;
      }
    }

    &-shipping-info {
      display: block;
      width: 100%;

      box-sizing: border-box;
      padding: 1em;

      background-color: #ddb55e;
      color: white;

      h1 {
        padding: 0.75em;
        padding-top: 0em;
        margin: 0px;
        font-size: 14px;
      }
      span {
        font-family: "Open Sans";
        font-size: 8px;
        letter-spacing: 0px;
        padding: 2em 0em;
      }
      input {
        display: inline-block;
        width: 100%;
        border: none;

        box-sizing: border-box;
        padding: 1.5em;
        margin-bottom: 1.5em;

        font-family: "TrajanPro";
        font-size: 0.5em;
        font-display: block;
        letter-spacing: 2px;
        text-align: center;
      }
    }

    &-phone-and-total {
      display: block;
      width: 100%;

      box-sizing: border-box;
      padding: 1em;

      background-color: #ddb55e;
      color: black;

      background-image: url("../../../../shared/assets/images/profile-gold-bg.png");
      background-size: 10px 100%;
      background-repeat: repeat-x;
      div.card-content-phone {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 1em;

        background-color: black;
        border: 1px solid #ddb55e;
        border: 1px solid #ddb55e;

        font-family: "TrajanPro";
        font-size: 0.5em;
        font-display: block;
        letter-spacing: 2px;
        text-align: center;

        input {
          width: 100%;
          border: none;
          outline: none;
          color: white;
          background-color: black;

          display: block;
          width: 100%;
          box-sizing: border-box;
          padding: 0.5em 1em;
          text-align: center;

          font-family: "TrajanPro";
          font-size: 1.25em;
          font-display: block;
          letter-spacing: 2px;
          text-align: center;
        }
      }

      div.card-content-total-sum {
        display: block;
        box-sizing: border-box;
        width: 100%;
        border: 1px solid black;
        padding: 1em;
        margin: 1em 0em;

        h3 {
          font-size: 0.8em;
          padding-bottom: 0.5em;
        }
        h1 {
          font-size: 1.24em;
          font-weight: 900;
        }
      }

      div.card-content-if-free-shipping {
        font-family: "Open Sans";
        font-size: 10px;
        h3 {
          font-size: 1em;
          font-weight: 900;
        }
        h4 {
          font-size: 1em;
        }
      }
    }

    &-payment {
      display: block;
      width: 100%;

      box-sizing: border-box;
      padding: 1em;

      background-color: white;
      color: black;

      h1 {
      }
    }
  }
}
</style>