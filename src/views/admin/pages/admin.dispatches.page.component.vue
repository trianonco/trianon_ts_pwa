<template>
  <div class="admin page title">
    <h1>DESPACHOS</h1>
    <form>
      <div class="queue-card" v-for="(item, index) of queue" v-bind:key="index">
        <h1>ID {{item.ID}}</h1>
        <h1>Fecha de Compra : {{ getDate(item.meta.createdAt)}}</h1>
        <h1>Producto : {{ item.products[0].ref }}</h1>
        <h1>Email : {{item.shipping.email}}</h1>
        <h1>Teléfono : {{item.shipping.phone}}</h1>
        <div class="queue-card-row states">
          <div class="state" @click="setState(item,'IN PROCESS: PAYMENT SUCCESSFULL')">
            <img
              src="./../../../shared/assets/images/in-process/s0-green.png"
              v-if="isStateInStock(item)"
            />
            <img
              src="./../../../shared/assets/images/in-process/s0-yellow.png"
              v-if="!isStateInStock(item)"
            />
          </div>
          <div class="state" @click="setState(item,'IN PROCESS: IN DISPATCHES')">
            <img
              src="./../../../shared/assets/images/in-process/s1-green.png"
              v-if="isStateInDispatch(item)"
            />
            <img
              src="./../../../shared/assets/images/in-process/s1-yellow.png"
              v-if="!isStateInDispatch(item)"
            />
          </div>
          <div class="state" @click="setState(item,'IN PROCESS: IN SHIPPING')">
            <img
              src="./../../../shared/assets/images/in-process/s2-green.png"
              v-if="isStateInShipping(item)"
            />
            <img
              src="./../../../shared/assets/images/in-process/s2-yellow.png"
              v-if="!isStateInShipping(item)"
            />
          </div>
        </div>
        <div class="queue-card-row"></div>
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
  components: {},
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

  private beforeMount() {
    const db = firebase.firestore();
    this.queue = [];
    db.collection("SHOPPING_HISTORY")
      .get()
      .then((querySnapshot: any) => {
        querySnapshot.forEach((doc: any) => {
          const doc_data = doc.data();
          this.queue.push(doc_data);
        });
      });
  }

  private setState(item: any, stateName: string) {
    const id = item.ID;
    //console.error(" => id" + id);
    const db = firebase.firestore();

    db.collection("SHOPPING_HISTORY")
      .doc(id)
      .update({
        state: stateName,
        updatedAt: new Date()
      })
      .then((response: any) => {
        this.queue = [];
        db.collection("SHOPPING_HISTORY")
          .get()
          .then((querySnapshot: any) => {
            querySnapshot.forEach((doc: any) => {
              const doc_data = doc.data();
              this.queue.push(doc_data);
            });
          });
      });
    //IN PROCESS: PAYMENT SUCCESSFULL
    //IN PROCESS: IN DISPATCHES
    //IN PROCESS: IN SHIPPING
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
  private isStateInStock(item: any) {
    return item.state.includes("IN PROCESS: PAYMENT SUCCESSFULL");
  }
  private isStateInDispatch(item: any) {
    return item.state.includes("IN PROCESS: IN DISPATCHES");
  }
  private isStateInShipping(item: any) {
    return item.state.includes("IN PROCESS: IN SHIPPING");
  }

  private clear() {
    this.DATA.title = "";
  }
  private save() {
    this.isLoading = true;
    this.db
      .setTitle(this.DATA.title)
      .then((title: string) => {
        console.log(title);
        //this.DATA.title = title;
        this.isLoading = false;
      })
      .catch((error: any) => console.error(error));
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

div.queue-card {
  display: block;
  width: 100%;
  box-sizing: border-box;
  padding: 0.25em;
  border: 1px solid gray;
  border-radius: 0.5em;
  h1 {
    display: block;
    width: 100%;
    overflow-x: auto;
    font-size: 10px;
    text-align: left !important;

    padding: 10px 0px !important;
    margin: 0px !important;

    padding-left: 1em !important;
  }
}
div.queue-card-row {
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
  }
}
</style>