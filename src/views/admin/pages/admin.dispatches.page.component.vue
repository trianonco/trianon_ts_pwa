<template>
  <div class="admin page title">
    <h1>DESPACHOS</h1>
    <form>
      <div
        v-for="(item, index) of queue"
        v-bind:key="index"
        style="display:inline-block;
      width:fit-content; vertical-align:top"
      >
        <div v-if="item.ID && isOnDate(item)" class="queue-card">
          <div class="queue-card-header" style="text-align:left">
            <span style="font-weight:900;">{{item.products[0].ref}}  {{isOnDate(item)}}/</span>
            <br />
            <span style="font-weight:100; font-size:0.7em">{{item.ID}}</span>
          </div>

          <center>
            <v-lazy-image
              :src="getPhotoURL(item.products[0].ref)[1]"
              :src-placeholder="getPhotoURL(item.products[0].ref)[0]"
            />
          </center>
          <div class="queue-card-preview">
            <div class="queue-card-preview-col">
              <h1 class="title">
                <strong>Fecha de Compra</strong>
                : {{ getDate(item.meta.createdAt)}}
              </h1>
              <h1 class="title">
                <strong>Producto</strong>
                : {{ item.products[0].ref }}
              </h1>
              <h1 class="title">
                <strong>Email</strong>
                : {{item.shipping.email}}
              </h1>
              <h1 class="title">
                <strong>Teléfono</strong>
                : {{item.shipping.phone}}
              </h1>
              <h1 class="title">
                <strong>Dirección</strong>
                : {{item.shipping.address}} {{item.shipping.info}}
              </h1>
              <h1 class="title">
                <strong>Barrio</strong>
                : {{item.shipping.neighbourhood}}
              </h1>
              <h1 class="title">
                <strong>Municipio</strong>
                : {{ item.shipping.city}} , {{ item.shipping.department}}
              </h1>
            </div>
          </div>

          <div class="queue-card-comment">{{ item.comment }}</div>

          <a :href="getInvoiceURL(item.ID)" target="_blank">
            <div class="queue-card-invoice-button">VER INFORMACIÓN DE PEDIDO</div>
          </a>

          <div class="queue-card-shipping-info">
            <input type="text" placeholder="Numero de Factura" v-model="item.billing.number" />
            <select v-model="item.shipping.shipping_company">
              <option
                v-for="(company,index) in ShippingCompanies"
                v-bind:key="index"
                v-bind:value="company.name"
              >{{ company.name }}</option>
            </select>
            <input type="text" placeholder="Codigo de Guia" v-model="item.shipping.tracker_code" />

            <input type="date" placeholder="Fecha de entrega" v-model="item.shipping.delivery_date" />
          </div>

          <div class="queue-card-row states">
            <div class="state" @click="setState(item,'IN PROCESS: IN FACTORY')">
              <div class="state-inStock-icon">
                <img
                  src="./../../../shared/assets/images/in-process/s0-green.png"
                  v-if="isStateInStock(item)"
                />
                <img
                  src="./../../../shared/assets/images/in-process/s0-yellow.png"
                  v-if="!isStateInStock(item)"
                />
              </div>
              <div class="state-label">EN FABRICA</div>
            </div>
            <div class="state" @click="setState(item,'IN PROCESS: IN SHIPPING')">
              <div class="state-inDispatches">
                <img
                  src="./../../../shared/assets/images/in-process/s1-green.png"
                  v-if="isStateInShipping(item)"
                />
                <img
                  src="./../../../shared/assets/images/in-process/s1-yellow.png"
                  v-if="!isStateInShipping(item)"
                />
              </div>
              <div class="state-label">ENVIADO</div>
            </div>
            <div class="state" @click="setState(item,'IN PROCESS: IN DELIVERED')">
              <div class="state-inShipping">
                <img
                  src="./../../../shared/assets/images/in-process/s2-green.png"
                  v-if="isStateInDelivered(item)"
                />
                <img
                  src="./../../../shared/assets/images/in-process/s2-yellow.png"
                  v-if="!isStateInDelivered(item)"
                />
              </div>
              <div class="state-label">RECIBIDO</div>
            </div>
          </div>
          <div class="queue-card-save-button" @click="save(item)">GUARDAR</div>
          <div class="queue-card-row"></div>
        </div>
      </div>
    </form>
    <div class="loader" v-if="isLoading">
      <img src="./../../../shared/assets/images/ajax-loader.gif" width="25px" />
    </div>
  </div>
</template>

<script lang="ts">
import VLazyImage from "v-lazy-image";
import ApiDataBase from "./../../../shared/database/index";
import firebase from "firebase/app";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: { VLazyImage },
  name: "AdminDispatchesPageComponent"
})
export default class AdminTitlePageComponent extends Vue {
  private DATA: any = {
    title: ""
  };

  private isLoading: boolean = false;
  private apiDB: any = new ApiDataBase();
  private db: any = {};

  private queue: any[] = [];

  private ShippingCompanies: any[] = [
    {
      name: "TCC",
      url: "https://www.tcc.com.co/logistica/servicios-on-line/rastrear-envios/"
    },
    {
      name: "INTERRAPIDISIMO",
      url: "https://www.interrapidisimo.com/sigue-tu-envio/"
    },
    { name: "SERVIENTREGA", url: " SERVIENTRGA.COM" },

    { name: "DHL", url: "http://www.dhl.com.co/es/express/rastreo.html" },
    { name: "FEDEX", url: "https://www.fedex.com/es-co/tracking.html" },
    { name: "DEPRISA", url: "https://www.deprisa.com/" },
    {
      name: "COORDINADORA",
      url:
        "https://www.coordinadora.com/portafolio-de-servicios/servicios-en-linea/rastrear-guias/"
    },
    { name: "VELOTAX", url: "https://www.velotax.com.co/mensajeria" },
    { name: "4/72", url: "http://www.4-72.com.co/" }
  ];

  private beforeMount() {
    const db = firebase.firestore();
    this.queue = [];
    db.collection("SHOPPING_HISTORY")
      .get()
      .then((querySnapshot: any) => {
        querySnapshot.forEach((doc: any) => {
          const doc_data = doc.data();
          doc_data.shipping.delivery_date = this.formatDate(
            doc_data.shipping.delivery_date
          );
          this.queue.push(doc_data);
        });
      });
  }

  private isOnDate(item: any): boolean {
    let isOnDateFlag = true;
    try {
      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const date = item.meta.updatedAt.toDate();
      const now = new Date();
      const diffDays = Math.round(
        Math.abs((now.getTime() - date.getTime()) / oneDay)
      );


      if(item.state === "IN PROCESS: IN DELIVERED"){
      if (diffDays > 15) {
        isOnDateFlag = false;
      } else {
        isOnDateFlag = true;
      }
      }

      if(item.state === "IN PROCESS: WATING FOR PAYMENT"){
        isOnDateFlag = false;
      }


    } catch (e) {
      console.error(e);
    }

    return isOnDateFlag;
  }

  private getDate(data: any) {
    const date = new Date(data.toDate());
    const dateObj = date;
    const month = dateObj.getUTCMonth() + 1; //months from 1-12
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    const newdate = day + "/" + month + "/" + year;
    return newdate;
  }
  private formatDate(date: any) {
    var d, month, day, year;
    try {
      d = date.toDate();
      month = "" + (d.getMonth() + 1);
      day = "" + d.getDate();
      year = d.getFullYear();
    } catch (e) {
      d = new Date();
      month = "" + (d.getMonth() + 1);
      day = "" + d.getDate();
      year = d.getFullYear();
    }

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }
  private getInvoiceURL(ID: string): string {
    return `https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F${ID}.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7`;
  }
  private getPhotoURL(code: string): string[] {
    const photo_ref_code = code.replace(" ", "");
    const hd = `https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fhd%2F${photo_ref_code}-01.jpg?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01`;
    const thumb = `https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fthumb%2F${photo_ref_code}-01.jpg?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01`;
    return [thumb, hd];
  }
  private save(inorder: any) {
    //
    //
    //
    if (inorder.state.includes("IN PROCESS: IN FACTORY")) {
      this.isLoading = true;

      const order = JSON.parse("" + JSON.stringify(inorder));
      const url = `https://us-central1-trianon-co-pwa-dev.cloudfunctions.net/HandleUpdateInStock?ID=${order.ID}`;

      this.$http
        .get(url)
        .then((response: any) => {
          this.isLoading = false;
          console.warn(response);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }

    if (inorder.state.includes("IN PROCESS: IN SHIPPING")) {
      const order = JSON.parse("" + JSON.stringify(inorder));
      const orderShippingCompany = order.shipping.shipping_company;
      const oderShippingURL = this.ShippingCompanies.filter(
        (company: any) => company.name === orderShippingCompany
      )[0].url;
      order.shipping.tracker_link = oderShippingURL;

      const date_delivery = new Date(
        order.shipping.delivery_date.replace("-", "/")
      ).getTime();
      order.shipping.delivery_date = date_delivery;

      this.isLoading = true;

      const url = `https://us-central1-trianon-co-pwa-dev.cloudfunctions.net/HandleUpdateInShipping?ID=${
        order.ID
      }&BILLING_NUMBER=${order.billing.number}&SHIPPING_COMPANY=${
        order.shipping.shipping_company
      }&SHIPPING_DELIVERY_DATE=${
        order.shipping.delivery_date
      }&SHIPPING_TRACKER_CODE=${
        order.shipping.tracker_code
      }&SHIPPING_TRACKER_LINK=${encodeURIComponent(
        order.shipping.tracker_link
      )}&`;

      this.$http
        .get(url)
        .then((response: any) => {
          this.isLoading = false;
          console.warn(response);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }

    if (inorder.state.includes("IN PROCESS: IN DELIVERED")) {
      this.isLoading = true;

      const order = JSON.parse("" + JSON.stringify(inorder));
      const url = `https://us-central1-trianon-co-pwa-dev.cloudfunctions.net/HandleUpdateInDelivered?ID=${order.ID}`;

      this.$http
        .get(url)
        .then((response: any) => {
          this.isLoading = false;
          console.warn(response);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }
  private isStateInStock(item: any) {
    return (
      item.state.includes("IN PROCESS: IN FACTORY") ||
      item.state.includes("IN PROCESS: IN SHIPPING") ||
      item.state.includes("IN PROCESS: IN DELIVERED")
    );
  }
  private isStateInShipping(item: any) {
    return (
      item.state.includes("IN PROCESS: IN SHIPPING") ||
      item.state.includes("IN PROCESS: IN DELIVERED")
    );
  }
  private isStateInDelivered(item: any) {
    return item.state.includes("IN PROCESS: IN DELIVERED");
  }
  private setState(item: any, stateName: string) {
    if (item.state.includes(stateName)) {
      if (item.state.includes("IN PROCESS: IN FACTORY")) {
        item.state = "IN PROCESS: PAYMENT SUCCESSFULL";
      }

      if (item.state.includes("IN PROCESS: IN SHIPPING")) {
        item.state = "IN PROCESS: IN FACTORY";
      }

      if (item.state.includes("IN PROCESS: IN DELIVERED")) {
        item.state = "IN PROCESS: IN SHIPPING";
      }
    } else {
      item.state = stateName;
    }

    console.log(item.state);
  }

  private clear() {
    this.DATA.title = "";
  }
}
</script>

<style scoped lang="less">
.loader {
  width: 100vw;
  height: 100vh;
  background-color: rgba(50, 50, 50, 0.85);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10000000;
  filter: blur(1px);

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
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
  align-items: center;
}

div.queue-card {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 0em;
  margin: 0.5em;
  border: 1px solid gray;
  border-radius: 0.5em;
  user-select: text;
  &-header {
    width: 100%;

    display: block;
    box-sizing: border-box;

    background-color: #d8b151;

    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    padding: 1em;

    text-align: center;
    font-family: "TrajanPro";
  }

  img.v-lazy-image {
    width: 50% !important;
    height: 50% !important;
    margin: 0 auto !important;
  }

  &-preview {
    display: block;
    box-sizing: border-box;
    width: 100%;

    padding: 1em;

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
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;

    &-col {
      display: block;
      width: 100%;

      h1.title {
        padding: 0px !important;
        margin: 0px !important;

        padding-top: 0.75em !important;

        font-size: 13px !important;

        line-height: 1.25em;
        text-align: left !important;

        font-family: "Open Sans" !important;

        strong {
          font-weight: 600;
        }
      }
    }
  }

  &-comment {
    width: 100%;
    height: 5em;

    overflow-x: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    padding: 1em;
    padding-top: 0px;
    white-space: pre-wrap;
    word-wrap: break-word;
    font-family: "Open Sans";

    font-size: 12px;
    line-height: 1.5em;
  }

  &-invoice-button {
    display: block;
    width: 60%;
    margin: 1em auto;
    margin-top: 0px;
    font-size: 14px;
    padding: 1em;
    text-align: center;

    background-color: black;
    font-family: "TrajanPro";
    color: white;

    border: 2px solid gold;

    cursor: pointer;

    &:hover {
      opacity: 0.95;
      border: 2px solid #c1a300;
    }
  }

  &-shipping-info {
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    padding-top: 0px;
    input[type="text"] {
      display: inline-block;
      width: ~"calc(50% - 1em)";
      border: 1px solid gray;
      border-radius: 0.2em;
      padding: 0.5em;
      margin: 0.5em;
    }

    select {
      display: inline-block;
      width: ~"calc(50% - 1em)";
      border: 1px solid gray;
      border-radius: 0.2em;
      padding: 0.5em;
      margin: 0.5em;
    }

    input[type="date"] {
      display: inline-block;
      width: ~"calc(50% - 1em)";
      border: 1px solid gray;
      border-radius: 0.2em;
      padding: 0.5em;
      margin: 1em 0.5em;
    }
  }
  &-save-button {
    color: white;
    width: fit-content;
    padding: 0.75em;
    font-family: "Open Sans";
    border-radius: 0.25em;
    cursor: pointer;
    background-color: #5a9978;
    margin: 1.5em;
    margin-left: auto;
  }
}

form {
  display: block;
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding: 1em;
}

div.input {
  display: block;
  width: 100%;
  border: none;
  box-sizing: border-box;
  border: 1px solid rgba(100, 100, 100, 0.5);
  border-radius: 0.5em;
  padding: 0.5em;
}

input {
  display: block;
  width: 100%;
  border: none;

  box-sizing: border-box;
  padding: 0.5em;
}

.buttons {
  width: 100%;
  box-sizing: border-box;
  padding: 1em;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
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
  align-items: center;
}
.button {
  display: block;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 1em;
  color: white;
  padding: 1em;
  margin: 0.5em;

  font-family: "Open Sans";
  font-weight: normal;
  font-style: normal;

  &.save {
    background-color: #34a853;
    color: white;
  }

  &.clear {
    background-color: #ea4335;
    color: white;
  }
}

div.queue-card-row.states {
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
}
div.state {
  display: block;
  width: 33%;
  img {
    display: block;
    width: 50%;
    margin: 0 auto;
    cursor: pointer;
    opacity: 1;
    &:hover {
      opacity: 0.9;
    }
  }
  .state-label {
    font-family: "Open Sans";
    font-weight: normal;
    font-style: normal;
    text-align: center;
    font-size: 13px;
  }
}

@media (min-width: 600px) {
  div.queue-card {
    display: inline-block;
    width: 350px;
    margin-left: 10px;
  }
}
</style>