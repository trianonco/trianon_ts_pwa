<template>
  <div class="card" v-if="item && item.description && item.ref">
    <div class="card-header" @click="doToogleCard()">
      <div class="card-header-bullet">
        <img
          alt="TrianonCo Image"
          src="../../../../shared/assets/images/gender-categories/bullet-gray.png"
          v-if="!UX.isCardOpen"
        />
        <img
          alt="TrianonCo Image"
          src="../../../../shared/assets/images/gender-categories/bullet-gold.png"
          v-if="UX.isCardOpen"
        />
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
      />
    </div>

    <div class="card-content" v-if="UX.isCardOpen">
      <div class="card-content-title">
        <h1>ESTADO : PROCESO DE COMPRA</h1>
        <h2>PRECIO : {{ item.price_cop | toCurrency }}</h2>
      </div>

      <div class="cols">
        <div class="col">
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
        </div>
        <div class="col">
          <form>
            <div class="card-content-shipping-info">
              <h1>INFORMACIÓN DE ENVIO</h1>
              <input
                type="text"
                name="address"
                autocomplete="on"
                placeholder="DIRECCIÓN"
                v-model="BUY.address"
                required
              />
              <input
                type="text"
                name="apartment"
                autocomplete="on"
                placeholder="PISO O APARTAMENTO"
                v-model="BUY.address_info"
              />
              <input
                type="text"
                name="neighbourhood"
                autocomplete="on"
                placeholder="BARRIO"
                v-model="BUY.address_neighborhood"
                required
              />
              <input
                type="text"
                autocomplete="on"
                placeholder="DEPARTAMENTO"
                v-model="BUY.address_department"
                style="width:calc(50% - 0.5em);margin-right:1em;margin-bottom:0px;"
                required
              />
              <input
                type="text"
                autocomplete="on"
                placeholder="MUNICIPIO"
                v-model="BUY.address_city"
                style="width:calc(50% - 0.5em);margin-bottom:0px;"
                required
              />
              <span>EN CASO DE QUE OTRA PERSONA RECIBA TU PRODUCTO:</span>
              <br />
              <input
                type="text"
                autocomplete="on"
                placeholder="NOMBRE DE QUIEN VA A RECIBIR"
                v-model="BUY.fullname"
                style="margin-top:1em"
                required
              />
            </div>

            <div class="card-content-phone-and-total">
              <div class="card-content-phone">
                <input type="text" placeholder="TU NUMERO CELULAR *" v-model="BUY.phone" required />
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
          </form>

          <div class="card-content-payment">
            <h1>SELECCIONA UN METODO DE PAGO:</h1>

            <form
              ref="payU_Form"
              method="post"
              action="https://checkout.payulatam.com/ppp-web-gateway-payu"
            >
              <img
                class="credit-cards-mobile"
                src="../../../../shared/assets/images/credit-cards2.jpg"
                width="100%"
                @click="goToPayU()"
              />

              <img
                class="credit-cards-desktop"
                src="../../../../shared/assets/images/credit-cards-desktops_Mesa de trabajo 1.jpg"
                width="100%"
                @click="goToPayU()"
              />
              <input name="merchantId" type="hidden" :value="getPayMerchantID()" />
              <input name="accountId" type="hidden" :value="getPayAccountID()" />
              <input name="referenceCode" type="hidden" :value="getPayReferenceCode()" />

              <input name="description" type="hidden" :value="getPayDescription()" />
              <input name="amount" type="hidden" :value="getPayAmount()" />
              <input name="tax" type="hidden" :value="getPayTax()" />
              <input name="taxReturnBase" type="hidden" :value="getPayTaxReturnBase()" />
              <input name="currency" type="hidden" :value="getPayCurrency()" />
              <input name="signature" type="hidden" :value="getPaySignature()" />
              <input name="buyerEmail" type="hidden" :value="getPayClientEmail()" />
              <input name="shippingAddress" type="hidden" :value="getPayShippingAddress()" />
              <input name="shippingCity" type="hidden" :value="getPayShippingCity()" />
              <input name="shippingCountry" type="hidden" value="CO" />

              <input name="test" type="hidden" value="1" v-if="PAYU === PAYU_OPTIONS['TEST']" />
              <input name="responseUrl" type="hidden" :value="getPayUpdateURL()" />
              <input name="confirmationUrl" type="hidden" :value="getPayConfirmationURL()" />

              <input name="Submit" type="hidden" value="Enviar" />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";
import firebase from "firebase/app";
var md5 = require("md5");

export default {
  name: "CardShoppingCartItemComponent",

  components: {
    VLazyImage
  },

  data() {
    return {
      UX: {
        isCardOpen: false
      },

      PAYU_OPTIONS: {
        TEST: {
          url: "https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu",
          apiKey: "4Vj8eK4rloUd272L48hsrarnUA",
          accountId: "512321",
          merchantId: "508029"
        },
        JORGE_MAYORGA: {
          url: "https://checkout.payulatam.com/ppp-web-gateway-payu",
          apiKey: "4bk50ANMJ03RzWeFPVZ4Ca8Tnx",
          accountId: "672018",
          merchantId: "669392"
        },
        TRIANON: {
          url: "https://checkout.payulatam.com/ppp-web-gateway-payu",
          apiKey: "",
          accountId: "",
          merchantId: ""
        }
      },

      PAYU: {},

      BUY: {
        ID: "",
        state: "IN PROCESS: WATING FOR PAYMENT",
        createdAt: new Date(),
        updatedAt: new Date(),
        ref: "",
        items: 0,
        address: "",
        address_info: "",
        address_neighborhood: "",
        address_department: "",
        address_city: "",
        fullname: "",
        phone: "",
        total: 0,
        product: {}
      }
    };
  },

  props: ["item"],

  mounted() {
    console.clear();
    console.warn("");
    console.warn(" ------------------------------------------- ");
    console.warn(" Proceso de Compra Trianon PWA ");
    console.warn(" ------------------------------------------ ");
    console.warn("");

    const envPayName = "JORGE_MAYORGA"; // JORGE_MAYORGA o TEST o TRIANON
    const envPayOptions = this.PAYU_OPTIONS[envPayName];
    this.PAYU = envPayOptions;

    console.warn({
      PAYU_SETTINGS: this.PAYU
    });

    if (envPayName === "JORGE_MAYORGA") {
      this.BUY.address = "Calle 141 #7b - 86";
      this.BUY.address_info = "Apto 502";
      this.BUY.address_neighborhood = "Belmira";
      this.BUY.address_department = "Bogota";
      this.BUY.address_city = "Bogota";
      this.BUY.fullname = "Jorge L. Mayorga";
      this.BUY.phone = "3005318387";
    }

    const date = new Date();
    const browser = JSON.stringify(navigator.userAgent);

    this.BUY.email = JSON.parse(localStorage.getItem("user")).email;
    this.BUY.ID = md5(date + browser + Math.random());

    console.warn(this.getPayAmount());
  },

  methods: {
    /**
     *  GetPay Methods
     */
    getPayMerchantID() {
      return this.PAYU.merchantId;
    },
    getPayAccountID() {
      return this.PAYU.accountId;
    },
    getPayReferenceCode() {
      return this.BUY.ID;
    },
    getPayConfirmationURL() {
      return this.PAYU.confirmationURL;
    },
    getPayShippingAddress() {
      return `${this.BUY.address} ${this.BUY.address_info}`;
    },
    getPayShippingCity() {
      return `${this.BUY.address_department} ${this.BUY.address_city}`;
    },
    getPayClientEmail() {
      return this.BUY.email;
    },
    getPayUpdateURL() {
      const base =
        "https://us-central1-trianon-co-pwa-dev.cloudfunctions.net/HandleUpdateBuy?ID=" +
        this.BUY.ID;
      return base;
    },
    getPayCurrency() {
      return "COP";
    },
    getPayTaxReturnBase() {
      if (
        this.PAYU === this.PAYU_OPTIONS["JORGE_MAYORGA"] ||
        this.PAYU === this.PAYU_OPTIONS["TEST"]
      ) {
        const price = 12000;
        return (price * (1 - 0.19)).toFixed(2);
      } else {
        const price = this.getTotalPriceByItem;
        return (price * (1 - 0.19)).toFixed(2);
      }
    },
    getPayTax() {
      if (
        this.PAYU === this.PAYU_OPTIONS["JORGE_MAYORGA"] ||
        this.PAYU === this.PAYU_OPTIONS["TEST"]
      ) {
        const price = 12000;
        return (price * (1 - 0.19)).toFixed(2);
      } else {
        const price = this.getTotalPriceByItem;
        return (price * 0.19).toFixed(2);
      }
    },
    getPayAmount() {
      if (
        this.PAYU === this.PAYU_OPTIONS["JORGE_MAYORGA"] ||
        this.PAYU === this.PAYU_OPTIONS["TEST"]
      ) {
        const price = 12000;
        return price.toFixed(2);
      } else {
        const price =
          this.getTotalPriceByItem > 100000
            ? this.getTotalPriceByItem
            : this.getTotalPriceByItem + 8000;
        return price.toFixed(2);
      }
    },
    getPayDescription() {
      return `${this.getProductsInShoppingCart[0].description} ${this.getProductsInShoppingCart[0].line}
               COLOR : ${this.getProductsInShoppingCart[0].color} REF 
               ${this.getProductsInShoppingCart[0].ref} 
               `;
    },
    getPaySignature() {
      console.warn({
        apiKey: this.PAYU.apiKey,
        merchandId: this.PAYU.merchantId,
        referenceCode: this.getPayReferenceCode(),
        amount: this.getPayAmount(),
        currency: this.getPayCurrency()
      });
      const payu_md5 = md5(
        `${this.PAYU.apiKey}~${
          this.PAYU.merchantId
        }~${this.getPayReferenceCode()}~${this.getPayAmount()}~${this.getPayCurrency()}`
      );
      return payu_md5;
    },

    goToPayU() {
      const db = firebase.firestore();
      this.BUY.product = this.item;
      this.$refs.payU_Form.submit();

      /*
      db.collection("SHOPPING_HISTORY")
        .doc(this.BUY.ID)
        .set(this.BUY)
        .then(() => {
          console.log("Document successfully written!");
          this.$refs.payU_Form.submit();
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
        */
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
      const items = this.$store.state.shoppingCartModule.products.filter(
        product =>
          product && product.ref_photo_code === this.item.ref_photo_code
      );
      this.BUY.ref = items[0].ref;
      return items;
    },
    getTotalPriceByItem() {
      this.BUY.items = this.getProductsInShoppingCart.length;
      this.BUY.total = this.getProductsInShoppingCart
        .map(item => item.price_cop)
        .reduce(function(valorAnterior, valorActual) {
          return valorAnterior + valorActual;
        });
      return this.BUY.total;
    }
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

    .credit-cards-desktop {
      display: none;
    }
    .credit-cards-mobile {
      display: block;
    }
  }
}

@media (min-width: 600px) {
  .card-header {
    &-triangle {
      left: ~"calc(50% - 1em)";
    }
  }

  .card-content {
    .cols {
      width: 100%;
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
      -webkit-align-content: flex-start;
      -ms-flex-line-pack: start;
      align-content: flex-start;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      align-items: flex-start;
    }
    .col {
      width: 50%;
      height: 100%;
    }
    &-title {
      color: black;
      display: block;
      width: 100%;
      h1 {
        text-align: left;
      }
      h2 {
        text-align: left;
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
        width: 100%;
        height: 412px;
        object-fit: cover;
        padding: 1em;
        box-sizing: border-box;
        margin: 0 auto;
      }
    }

    &-quantity {
      width: 100%;
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
        font-size: 0.8em;
        padding-bottom: 10px;
      }

      .credit-cards-desktop {
        display: block;
      }
      .credit-cards-mobile {
        display: none;
      }
    }
  }
}
</style>
