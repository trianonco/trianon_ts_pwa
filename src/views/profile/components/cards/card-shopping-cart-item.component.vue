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
        <h2>PRECIO : {{ parseFloat(getPrice(item))*(1 - 0.01*parseFloat(item.discount)) | toCurrency }}</h2>
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
                <span>
                  CANTIDAD: 
                  
                {{

                  getProductsInShoppingCart.filter(
                    product =>
                      product && product.ref_photo_code === item.ref_photo_code
                  ).length

                }}

                </span>
              </div>
              <div class="card-content-quantity-add" @click="addProductoToShoppingCart()">
                <span>+</span>
              </div>
            </div>

            <textarea  v-if="isLast" class="comment-area" v-model="BUY.comment" placeholder="COMENTARIOS ADICIONALES"></textarea>
          </div>

          <div class="col">

            <div v-if="!isLast && isDesktop" style="
                                      height:500px;
                                      display: -ms-flexbox;
                                      display: -webkit-flex;
                                      display: flex;
                                      -webkit-flex-direction: column;
                                      -ms-flex-direction: column;
                                      flex-direction: column;
                                      -webkit-flex-wrap: wrap;
                                      -ms-flex-wrap: wrap;
                                      flex-wrap: wrap;
                                      -webkit-justify-content: center;
                                      -ms-flex-pack: center;
                                      justify-content: center;
                                      -webkit-align-content: center;
                                      -ms-flex-line-pack: center;
                                      align-content: center;
                                      -webkit-align-items: center;
                                      -ms-flex-align: center;
                                      align-items: center;">

              <h1>¡COMPRARÁS MÁS DE UN PRODUCTO!</h1>
              <hr style="margin-bottom: 23px;
                          width: 80%;
                          display: block;
                          margin-top: 23px;">
              <h2 style="
                          width: 100%;
                          letter-spacing: 1px;
                          line-height: 1.5em;
                          font-size: 13px;
                          padding: 1em;
                          box-sizing: border-box;
                          padding-top: 0px;
              "> 
                  PODRÁS AÑADIR LA INFORMACIÓN DE ENVIÓ Y REALIZAR TU PAGO EN LA PARTE INFERIOR
              </h2>
              <img src="../../../../shared/assets/images/icon-symbol.png" style="width: 5em;">

            </div>

            <form v-if="isLast">
              <div class="card-content-shipping-info">
                <h1>INFORMACIÓN DE ENVIO</h1>
                <input
                  type="text"
                  name="address"
                  :class="isInputError('address')"
                  autocomplete="on"
                  placeholder="DIRECCIÓN"
                  v-model="BUY.shipping.address"
                  required
                />
                <input
                  type="text"
                  name="apartment"
                  :class="isInputError('info')"
                  autocomplete="on"
                  placeholder="PISO O APARTAMENTO"
                  v-model="BUY.shipping.info"
                  required
                />
                <input
                  type="text"
                  name="neighbourhood"
                  :class="isInputError('neighbourhood')"
                  autocomplete="on"
                  placeholder="BARRIO"
                  v-model="BUY.shipping.neighbourhood"
                  required
                />

                <input
                  type="text"
                  :class="isInputError('department')"
                  autocomplete="on"
                  placeholder="DEPARTAMENTO"
                  v-model="BUY.shipping.department"
                  style="width:calc(50% - 0.5em);margin-right:1em;margin-bottom:0px;"
                  required
                />

                <input
                  type="text"
                  :class="isInputError('city')"
                  autocomplete="on"
                  placeholder="MUNICIPIO"
                  v-model="BUY.shipping.city"
                  style="width:calc(50% - 0.5em);margin-bottom:0px;"
                  required
                />
                
                <input
                  type="text"
                  autocomplete="on"
                  placeholder="NOMBRES Y APELLIDOS"
                  v-model="BUY.shipping.name"
                  style="margin-top:12px; margin-bottom: 12px"
                  required
                />
                
                <!-- <span>EN CASO DE QUE OTRA PERSONA RECIBA TU PRODUCTO:</span> -->

                <input
                  type="text"
                  :class="isInputError('cc')"
                  autocomplete="off"
                  name="CC_NUMBER"
                  placeholder="ID/ CEDULA DE CIUDADANÍA/ NIT"
                  v-model="BUY.shipping.cc"
                  style="margin-top:0PX; margin-bottom: 0px"
                  required
                />
                
                
              </div>

              <div class="card-content-phone-and-total">
                <div class="card-content-phone">
                  <input
                    type="number"
                    name="PHONE_NUMBER"
                     autocomplete="off"
                    :class="isInputError('phone')"
                    placeholder="TU NUMERO CELULAR"
                    v-model="BUY.shipping.phone"
                    required
                  />
                </div>

                <div class="card-content-total-sum">
                  <h3>SUMA TOTAL DE TU COMPRA:</h3>
                  <h1>{{ (getTotalPriceByItemWithShipping) | toCurrency }}</h1>
                </div>

                <div class="card-content-if-free-shipping" v-if="getTotalPriceByItem >= 100000">
                  <h4>TU COMPRA SUPERA LOS $100.000 COP</h4>
                  <h3>ASÍ QUE EL ENVÍO ES GRATIS</h3>
                </div>

                <div class="card-content-if-free-shipping" v-if="getTotalPriceByItem < 100000">
                  <h4>TU COMPRA ES INFERIOR A LOS $100.000 COP</h4>
                  <h3>ASÍ QUE EL COSTO DEL ENVÍO ES $8.000COP</h3>
                  <h5 style="padding-top: 5px;font-size: 0.95em;">* incluido en  la suma total de tu compra</h5>
                </div>

              </div>
            </form>

            <div v-if="isLast" class="card-content-payment">
              <br>
              <br>
              <br>
              <h1> SELECCIONA UN METODO DE PAGO:</h1>
            
              <br>
              <br>
              <form ref="payU_Form" method="post" :action="PAYU.url">
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
import { getPrice } from '../../../../shared/helpers/priceNoIVA.helper';
var md5 = require("md5");

export default {
  name: "CardShoppingCartItemComponent",

  components: {
    VLazyImage
  },

  data() {
    return {
      UX: {
        isCardOpen: true,
        isEmpty: true
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
          apiKey: "0t4jk46T6YA78S2dios6WQBSbP",
          accountId: "544845",
          merchantId: "542713"
        }
      },

      PAYU: {},

      BUY: {
        ID: "",
        state: "IN PROCESS: WATING FOR PAYMENT",
        email: "",

        meta: {
          items: 0,
          total: 0.0,
          createdAt: new Date(),
          updatedAt: new Date()
        },

        shipping: {
          address: "",
          info: "",
          neighbourhood: "",
          department: "",
          city: "",
          country: "",
          name: "",
          phone: "",
          email: "",
          tracker_code: "",
          tracker_link: "",
          shipping_company: "",
          delivery_date: ""
        },

        billing: {
          number: "",
          subtotal_price: "",
          total_price: "",
          shipping_price: "",
          name: "",
          cc: "",
          phone: "",
          email: ""
        },

        comment: "",

        products: []
      }
    };
  },

  props: ["items","item","isLast"],

  mounted() {

    console.clear();
    console.warn("");
    console.warn(" ------------------------------------------- ");
    console.warn(" Proceso de Compra Trianon PWA ");
    console.warn(" ------------------------------------------ ");
    console.warn("");

    const envPayName = "TRIANON"; // JORGE_MAYORGA o TEST o TRIANON
    const envPayOptions = this.PAYU_OPTIONS[envPayName];
    this.PAYU = envPayOptions;

    console.warn({
      PAYU_SETTINGS: this.PAYU
    });

    if (envPayName === "JORGE_MAYORGA") {
      this.BUY.shipping.address = "Calle 141 #7b - 86";
      this.BUY.shipping.info = "Apto 502";
      this.BUY.shipping.neighbourhood = "Belmira";
      this.BUY.shipping.department = "Bogota";
      this.BUY.shipping.city = "Bogota";
      this.BUY.shipping.name = "Jorge L. Mayorga";
      this.BUY.shipping.phone = "3005318387";
    }

    if (envPayName === "TEST") {
      this.BUY.shipping.address = "Calle Av Siempre Viva #70c - 86";
      this.BUY.shipping.info = "Casa 124";
      this.BUY.shipping.neighbourhood = "La Soledad";
      this.BUY.shipping.department = "Bogota";
      this.BUY.shipping.city = "Bogota";
      this.BUY.shipping.name = "Jorge L. Mayorga";
      this.BUY.shipping.phone = "3005318387";
    }

    const date = new Date();
    const browser = JSON.stringify(navigator.userAgent);

    this.BUY.shipping.email = JSON.parse(localStorage.getItem("user")).email;
    this.BUY.email = this.BUY.shipping.email;
    this.BUY.ID = md5(date + browser + Math.random() + this.item.ref);

    console.warn({
      md5: this.getPaySignature(),
      apiKey: this.PAYU.apiKey,
      merchandId: this.getPayMerchantID(),
      referenceCode: this.getPayReferenceCode(),
      amount: this.getPayAmount(),
      currency: this.getPayCurrency()
    });
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
      return `${this.BUY.shipping.address} ${this.BUY.shipping.info}`;
    },
    getPayShippingCity() {
      return `${this.BUY.shipping.department} ${this.BUY.shipping.city}`;
    },
    getPayClientEmail() {
      return this.BUY.shipping.email;
    },
    getPayUpdateURL() {
      const base =
        "https://us-central1-trianon-co-pwa-dev.cloudfunctions.net/HandleUpdateInBuy?ID=" +
        this.BUY.ID;
      return base;
    },
    getPayCurrency() {
      return "COP";
    },


    getPayTaxReturnBase() {
      if (
        this.PAYU === this.PAYU_OPTIONS["JORGE_MAYORGA"]
      ) {
        const price = 12000;
        //return (price * (1 - 0.19)).toFixed(2);
        return 0;
      } else {
        const price =  parseFloat(this.BUY.billing.total_price);
        //return (price * (1 - 0.19)).toFixed(2);
        return 0;
      }
    },
    getPayTax() {
      if (
        this.PAYU === this.PAYU_OPTIONS["JORGE_MAYORGA"]
      ) {
        const price = 12000;
        //return (price * 0.19).toFixed(2);
        return 0;
      } else {
        const price = parseFloat(this.BUY.billing.total_price);
        //return (price * 0.19).toFixed(2);
        return 0;
      }
    },
    getPayAmount() {
      if (
        this.PAYU === this.PAYU_OPTIONS["JORGE_MAYORGA"]
      ) {
        const price = 12000;
        return price.toFixed(2);
      } else {
        const price = parseFloat(this.BUY.billing.total_price + '');
        return price.toFixed(2);
      }
    },
    getPayDescription() {
      return `${this.item.description} ${this.item.line} COLOR : ${this.item.color} REF ${this.item.ref} `;
    },
    getPaySignature() {
      const payu_md5 = md5(
        `${this.PAYU.apiKey}~${
          this.PAYU.merchantId
        }~${this.getPayReferenceCode()}~${this.getPayAmount()}~${this.getPayCurrency()}`
      );

      return payu_md5;
    },

    goToPayU() {
      this.UX.isEmpty = false;
      console.clear();
      console.error('IS THE FINAL COUNTDOWN!!!')

      const isOk = 
        this.BUY.shipping.address    && this.BUY.shipping.address.length > 0 &&
        this.BUY.shipping.info && this.BUY.shipping.info.length > 0 &&
        this.BUY.shipping.neighbourhood && this.BUY.shipping.neighbourhood.length > 0 &&
        this.BUY.shipping.department && this.BUY.shipping.department.length > 0 &&
        this.BUY.shipping.city && this.BUY.shipping.city.length > 0 &&
        this.BUY.shipping.phone && this.BUY.shipping.phone.length > 0 && 
        this.BUY.shipping.cc && this.BUY.shipping.cc.length > 0 &&
        this.BUY.shipping.phone !== this.BUY.shipping.cc &&
        this.BUY.shipping.name.length > 1;

        console.log({
          r1:this.BUY.shipping.address    && this.BUY.shipping.address.length > 0,
          r2:this.BUY.shipping.info && this.BUY.shipping.info.length > 0,
          r3:this.BUY.shipping.neighbourhood && this.BUY.shipping.neighbourhood.length > 0 ,
          r4:this.BUY.shipping.department && this.BUY.shipping.department.length > 0,
          r5:this.BUY.shipping.city && this.BUY.shipping.city.length > 0,
          r6:this.BUY.shipping.phone && this.BUY.shipping.phone.length > 0,
          r7:this.BUY.shipping.cc && this.BUY.shipping.cc.length > 0,
          r8:this.BUY.shipping.phone !== this.BUY.shipping.cc,
          r9:this.BUY.shipping.name.length > 1,
          isOk
        })

      if (
        isOk
      ) {
        this.BUY.shipping.country = "COLOMBIA";

        this.BUY.billing.number = "N/A";
        this.BUY.billing.cc = this.BUY.shipping.cc;

        this.BUY.billing.name = this.BUY.shipping.name
          ? this.BUY.shipping.name
          : JSON.parse(localStorage.getItem("user")).displayName;
        this.BUY.billing.phone = this.BUY.shipping.phone;
        this.BUY.billing.email = this.BUY.shipping.email;

        this.BUY.products = [];
      
        this.BUY.products = this.items;
        this.BUY.products.map((product) => {
          const productsSameRef = this.$store.state.shoppingCartModule.products.filter(cartProduct => cartProduct.ref === product.ref );
          product["quantity"] = productsSameRef.length;
          product["subtotal"] = product["quantity"] * getPrice(product)*(1 - 0.01*(product.discount));
        })

        this.BUY.billing.subtotal_price = parseFloat(
            this.BUY.products.map(product => product["subtotal"])
                             .reduce((accumulator, currentValue) => parseFloat(accumulator + '') + parseFloat(currentValue + ''))
        );
        this.BUY.billing.shipping_price = this.BUY.billing.subtotal_price > 100000 ? 0 : 8000;
        this.BUY.billing.total_price = this.BUY.billing.subtotal_price + this.BUY.billing.shipping_price;


        if (location.host === "www.trianon.com.co" || true) {
          const db = firebase.firestore();
          db.collection("SHOPPING_HISTORY")
            .doc(this.BUY.ID)
            .set(this.BUY)
            .then(() => {
              console.log("Document successfully written!");
              this.$refs.payU_Form.submit();
            })
            .catch(function(error) {
              alert("ERRROR EN LA BASE DE DATOS, CONTACTE AL ADMIN");
              console.error("Error writing document: ", error);
            });
        } else {
       
        }
      } else{
            console.clear()
            console.error('this.BUY')
            console.error(this.BUY)
      }
    },


getPrice(product){
  return getPrice(product);
},
    isInputError(field) {

      if(field == 'phone'){
        if(this.BUY.shipping['phone'] === this.BUY.shipping['cc']){
          return "error";
        }
        if(this.BUY.shipping['phone'].length < 7 || this.BUY.shipping['phone'].length  > 15){
          return "error";
        }
      }

        if(field == 'name'){
          if(this.BUY.shipping['name'].length < 5 || this.BUY.shipping['name'].split(' ').length < 2){
            return "error";
          }
      }

      if (this.UX.isEmpty) {
        return "default";
      } else {
        if (this.BUY.shipping[field]) {
          return "default";
        } else {
          return "error";
        }
      }
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


    isDesktop(){
      var w = window.innerWidth;
      return w > 600;
    },

    getProductsInShoppingCart() {
      /*
      const items = this.$store.state.shoppingCartModule.products.filter(
        product =>
          product && product.ref_photo_code === this.item.ref_photo_code
      );
      */
      const items = this.$store.state.shoppingCartModule.products;
      //this.BUY.ref = items.reduce((currentItem, acumulateItem) => `${currentItem.ref} - ${acumulateItem}`);
      return items;
    },
    getTotalPriceByItem() {
      this.BUY.meta.items = this.getProductsInShoppingCart.length;
      this.BUY.meta.total = this.getProductsInShoppingCart
        .map(item => getPrice(item)*(1 - 0.01*parseFloat(item.discount || 0)))
        .reduce(function(valorAnterior, valorActual) {
          return valorAnterior + valorActual;
        });
      return this.BUY.meta.total;
    },

    getTotalPriceByItemWithShipping(){
      return this.getTotalPriceByItem < 100000 ? this.getTotalPriceByItem + 8000 : this.getTotalPriceByItem 
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
      text-transform: uppercase;

      font-family: "TrajanPro";
      font-size: 0.5em;
      font-display: block;
      letter-spacing: 2px;
      text-align: center;

      border: 1px solid #fff;
      &.error {
        border: 2px solid rgba(255, 50, 50, 0.85);
      }
    }

    textarea {
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
      cursor: pointer;
      opacity: 1;
      -webkit-transition: all 300ms ease-in-out;
-moz-transition: all 300ms ease-in-out;
-ms-transition: all 300ms ease-in-out;
-o-transition: all 300ms ease-in-out;
transition: all 300ms ease-in-out;
      &:hover{
        opacity: 0.8;
        -webkit-transition: all 300ms ease-in-out;
-moz-transition: all 300ms ease-in-out;
-ms-transition: all 300ms ease-in-out;
-o-transition: all 300ms ease-in-out;
transition: all 300ms ease-in-out;
      }
    }
    .credit-cards-mobile {
      display: block;
      cursor: pointer;
    }
  }
}


.card-content{
  .comment-area{
    display: none;
    width: 100%;
    min-height: 95px;
    box-sizing: border-box;
    padding: 1em;

  }
}
@media (min-width: 600px) {

  .card-content{
  .comment-area{
      display: block;
          min-height: 95px;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;

  }
}

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
        height: 450px;
        object-fit: contain;
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

        box-sizing:border-box;


        font-family: "TrajanPro";
        font-size: 0.55em;
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
        cursor: pointer;
      }
      .credit-cards-mobile {
        display: none;
        cursor: pointer;
      }
    }
  }
}
</style>
