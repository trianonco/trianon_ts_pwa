<template>
  <div class="view profile">
    <!-- Home :: View-wrapper -->
    <div class="view-wrapper" style="position: relative;">
      <!-- Header  -->
      <HeaderComponent :theme="headerTheme" />

      <img class="img-bg-desktop left" src="../../shared/assets/images/product-view-bg-left.png" />
      <img class="img-bg-desktop right" src="../../shared/assets/images/product-view-bg-right.png" />

      <div class="vw-content">
        <div class="vw-wrapper" v-if="user">
          <div class="vw-wrapper-title">
            <span>{{ userName }}, BIENVENIDO A TU PERFIL TRIANON</span>
          </div>
          <div class="vw-wrapper-text">
            <span>Aquí encontrarás los productos que hayas seleccionado, el estado de envio y los detalles de tus compras.</span>
          </div>
        </div>

        <ProfileEmptyProductsComponent
          v-if="(cartProducts.length === 0 && inProcessProducts.length === 0 && purchasedProducts.length === 0)"
        ></ProfileEmptyProductsComponent>

        <ProfileListProductsComponent
          v-if="!(cartProducts.length === 0 && inProcessProducts.length === 0 && purchasedProducts.length === 0)"
        ></ProfileListProductsComponent>

        <ProfileShareComponent :theme="'gray'"></ProfileShareComponent>
      </div>

      <!-- Footers -->
      <FooterComponent />
    </div>
    <!-- Home // View-wrapper -->
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// Shared

import TrianonDB from "./../../shared/database/db";

import HeaderComponent from "../../shared/components/header/header.component.vue";
import FooterComponent from "../../shared/components/footer/footer.component.vue";

import ProfileEmptyProductsComponent from "./components/profile-empty-products.component.vue";
import ProfileListProductsComponent from "./components/profile-list-products.component.vue";

import ProfileShareComponent from "./components/profile-share.component.vue";

@Component({
  components: {
    HeaderComponent,
    FooterComponent,
    ProfileShareComponent,
    ProfileEmptyProductsComponent,
    ProfileListProductsComponent
  }
})
export default class ProfileView extends Vue {
  public headerTheme = {
    color: "light",
    background: "dark"
  };

  private db: any = new TrianonDB();

  private user: any = {};
  private userName: string = "";

  //private shoppingCartProducts: any[] = [];
  //private inProcessProducts: any[] = [];
  //private purchasedProducts: any[] = [];

  get cartProducts() {
    return this.$store.state.shoppingCartModule.products;
  }

  get inProcessProducts() {
    return this.$store.state.inProcessCartModule.products;
  }

  get purchasedProducts() {
    //return this.$store.state.shoppingCartModule.products;
    return [];
  }
  private created() {
    this.user = JSON.parse(localStorage.getItem("user") || "");
    this.userName = this.user.displayName.split(" ")[0];

    this.db
      .getUserFromDB(this.user.email)
      .then((response: any) => {
        const shoppingCart = response.shoppingCart || [];
        const inProcess = response.inProcessCart || [];
        const purchased = response.purchased || [];

        inProcess.map((product: any) => {
          this.$store.dispatch("addToInProcessCart", product);
        });

        /*
        shoppingCart.map((product: any) => {
          this.$store.dispatch("addToCart", product);
        });
        */
      })
      .catch((error: any) => console.error(error));
  }
}
</script>


<style lang="less">
@import (reference) "../../shared/styles/index.less";

div.view.profile {
  display: block;
  width: 100%;
  background-color: black;
  color: white;

  text-align: center;

  .img-bg-desktop {
    display: none;
  }

  div.vw-content {
    min-height: ~"calc(100vh - 193px)";
    width: 100%;
    margin: 0 auto;
  }

  div.vw-wrapper {
    display: block;
    width: 100%;
    padding: 1em;

    box-sizing: border-box;
    #Font-OpenSans();

    &-title {
      color: white;
      width: fit-content;
      margin: 0 auto;
      text-transform: uppercase;
      #Font-OpenSans();
      font-weight: 600;
      letter-spacing: 1px;
      font-size: 12px;
      padding: 0.5em 0em 1em 0em;
    }
    &-text {
      color: white;
      width: 100%;
      margin: 0 auto;
      #Font-OpenSans("light");
      letter-spacing: 1px;
      line-height: 150%;
      font-size: 11px;
      font-weight: 300;
      padding: 0.5em 0em 1em 0em;
    }
  }
}

@media (min-width: 600px) {
  div.view.profile {
    display: block;
    width: 100%;

    background-color: white;
    color: black;

    text-align: center;

    .img-bg-desktop {
      display: block;
      position: absolute !important;
      width: 7em;
      bottom: 200px;
      &.left {
        left: 0px;
      }
      &.right {
        right: 0px;
      }
    }

    div.vw-content {
      min-height: ~"calc(100vh - 300px)";
      width: 700px;
      margin: 0 auto;
      position: relative;
    }

    div.vw-wrapper {
      display: block;
      width: 100%;
      max-width: 700px;

      margin: 0 auto;
      padding: 1em;

      box-sizing: border-box;
      #Font-OpenSans();

      &-container {
        border: 1px solid gray;
      }

      &-title {
        color: black;
        width: fit-content;
        margin: 0 auto;
        text-transform: uppercase;
        #Font-OpenSans();
        font-weight: 600;
        letter-spacing: 1px;
        font-size: 12px;
        padding: 0.5em 0em 1em 0em;
      }
      &-text {
        color: black;
        width: 100%;
        margin: 0 auto;
        #Font-OpenSans("light");
        letter-spacing: 1px;
        line-height: 150%;
        font-size: 11px;
        font-weight: 300;
        padding: 0.5em 0em 1em 0em;
      }
    }
  }
}
</style>

