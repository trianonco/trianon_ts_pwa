<template>
  <div class="card" v-if="item && item.description && item.ref">
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
      <div class="card-header-title" v-if="item && item.description && item.ref">
        <h1>{{item.description}} {{item.ref}}</h1>
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
      <div class="card-content-title">
        <h1>ESTADO : PROCESO DE COMPRA</h1>
        <h2>PRECIO : {{ item.price_cop | toCurrency }}</h2>
      </div>

      <div class="card-content-wrapper">
        <v-lazy-image
          class="card-content-wrapper-photo"
          :src="getPhotoSRC_HD(item.ref_photo_code)"
          :src-placeholder="getPhotoSRC_THUMB(item.ref_photo_code)"
        />
      </div>
      <div class="card-content-quantity">
        <div class="card-content-quantity-remove" @click="removeProductoToShoppingCart()">
          <span>-</span>
        </div>
        <div class="card-content-quantity-number">
          <span>CANTIDAD: {{getProductsInShoppingCart.length}}</span>
        </div>
        <div class="card-content-quantity-add" @click="addProductoToShoppingCart()">
          <span>+</span>
        </div>
      </div>

      <div class="card-content-shipping-info">
        <h1>INFORMACIÓN DE ENVIO</h1>
        <input type="text" autocomplete="on" placeholder="DIRECCIÓN">
        <input type="text" autocomplete="on" placeholder="PISO O APARTAMENTO">
        <input type="text" autocomplete="on" placeholder="BARRIO">
        <input
          type="text"
          autocomplete="on"
          placeholder="DEPARTAMENTO"
          style="width:calc(50% - 0.5em);margin-right:1em;margin-bottom:0px;"
        >
        <input
          type="text"
          autocomplete="on"
          placeholder="MUNICIPIO"
          style="width:calc(50% - 0.5em);margin-bottom:0px;"
        >
        <span>EN CASO DE QUE OTRA PERSONA RECIBA TU PRODUCTO:</span>
        <br>
        <input
          type="text"
          autocomplete="on"
          placeholder="NOMBRE DE QUIEN VA A RECIBIR"
          style="margin-top:1em"
        >
      </div>

      <div class="card-content-phone-and-total">
        <div class="card-content-phone">
          <input type="text" placeholder="TU NUMERO CELULAR *">
        </div>

        <div class="card-content-total-sum">
          <h3>SUMA TOTAL DE TU COMPRA:</h3>
          <h1>{{ getTotalPriceByItem | toCurrency }}</h1>
        </div>

        <div class="card-content-if-free-shipping" v-if="getTotalPriceByItem > 100000">
          <h4>TU COMPRA SUPERA LOS $100.000 COP</h4>
          <h3>ASÍ QUE EL ENVÍO ES GRATIS</h3>
        </div>
      </div>

      <div class="card-content-payment">
        <h1>SELECCIONA UN METODO DE PAGO:</h1>

        <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
          <input name="merchantId" type="hidden" value="508029">
          <input name="accountId" type="hidden" value="512321">
          <input name="referenceCode" type="hidden" value="TestPayU">

          <input name="description" type="hidden" :value="getPayDescription()">
          <input name="amount" type="hidden" :value="getPayAmount()">
          <input name="tax" type="hidden" :value="getPayTax()">
          <input name="taxReturnBase" type="hidden" :value="getPayTaxReturnBase()">
          <input name="currency" type="hidden" :value="getPayCurrency()">
          <input name="signature" type="hidden" :value="getPaySignature()">
          <input name="test" type="hidden" value="1">
          <input name="buyerEmail" type="hidden" value="wallamejorge@hotmail.com">
          <input name="responseUrl" type="hidden" value="http://www.youtube.com/">
          <input name="confirmationUrl" type="hidden" value="http://www.facebook.com/">

          <input name="shippingAddress" type="hidden" value="calle 93 n 47 - 65">
          <input name="shippingCity" type="hidden" value="Bogota">
          <input name="shippingCountry" type="hidden" value="CO">
          <input name="Submit" type="submit" value="Enviar">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
var md5 = require("md5");

export default {
  name: "",
  components: {
    VLazyImage
  },
  methods: {
    getPaySignature() {
      console.warn("md5 => " + md5("POLII"));
      const apiKey = "4Vj8eK4rloUd272L48hsrarnUA";
      const merchandId = "508029";
      const referenceCode = "TestPayU";
      const amount = this.getPayAmount();
      const currency = this.getPayCurrency();
      ///return "7ee7cf808ce6a39b17481c54f2c57acc";
      return md5(
        `${apiKey}~${merchandId}~${referenceCode}~${amount}~${currency}`
      );
    },
    getPayCurrency() {
      return "COP";
    },
    getPayTaxReturnBase() {
      return this.getTotalPriceByItem * (1 - 0.19);
    },
    getPayTax() {
      return this.getTotalPriceByItem * 0.19;
    },
    getPayAmount() {
      return this.getTotalPriceByItem;
    },
    getPayDescription() {
      return this.getProductsInShoppingCart[0].description;
    },

    doToogleCard() {
      this.UX.isCardOpen = !this.UX.isCardOpen;
    },

    addProductoToShoppingCart() {
      this.$store.dispatch("addToCart", this.item);
    },

    removeProductoToShoppingCart() {
      this.$store.dispatch("removeFromCart", this.item);
    },

    getPhotoSRC_HD(ref_photo_code) {
      const product_token = "18c776df-f5a7-45a0-9012-16f780381d92";
      const filename = `${ref_photo_code}-01.jpg`;
      const pathbase =
        "https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos";
      const mediafile = `alt=media&token=${product_token}`;
      const photo_hd_src = `${pathbase}%2Fhd%2F${filename}?${mediafile}`;
      return photo_hd_src;
    },
    getPhotoSRC_THUMB(ref_photo_code) {
      const product_token = "18c776df-f5a7-45a0-9012-16f780381d92";
      const filename = `${ref_photo_code}-01.jpg`;
      const pathbase =
        "https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos";
      const mediafile = `alt=media&token=${product_token}`;
      const photo_thumb_src = `${pathbase}%2Fthumb%2F${filename}?${mediafile}`;
      return photo_thumb_src;
    }
  },
  computed: {
    getProductsInShoppingCart() {
      return this.$store.state.shoppingCartModule.products.filter(
        product =>
          product && product.ref_photo_code === this.item.ref_photo_code
      );
    },
    getTotalPriceByItem() {
      return this.getProductsInShoppingCart
        .map(item => item.price_cop)
        .reduce(function(valorAnterior, valorActual) {
          return valorAnterior + valorActual;
        });
    }
  },
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
  width: 100%;
  padding: 1em;
  box-sizing: border-box;

  &-title {
    color: black;
    h1 {
      font-size: 10px;
      padding-bottom: 1em;
    }
    h2 {
      font-size: 10px;
      padding-bottom: 1em;
    }
  }

  &-wrapper {
    display: block;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;

    border: 1px solid black;

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
</style>
