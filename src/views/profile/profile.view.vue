<template>
  <div class="view profile">
    <!-- Home :: View-wrapper -->
    <div class="view-wrapper">
      <!-- Header  -->
      <HeaderComponent :theme="headerTheme"/>

      <div class="wrapper" v-if="user">
        <div class="wrapper-title">
          <span>{{ userName }}, BIENVENIDO A TU PERFIL TRIANON</span>
        </div>
        <div class="wrapper-text">
          <span>Aquí encontrarás los productos que hayas seleccionado, el estado de envio y los detalles de tus compras.</span>
        </div>
      </div>

      <ProfileEmptyShoppingCartComponent v-if="cartProducts.length === 0"></ProfileEmptyShoppingCartComponent>
      <ProfileListShoppingCartComponent v-if="cartProducts.length > 0"></ProfileListShoppingCartComponent>

      <ProfileShareComponent :theme="'gray'"></ProfileShareComponent>

      <!-- Footers -->
      <FooterComponent/>
    </div>
    <!-- Home // View-wrapper -->
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// Shared
import HeaderComponent from "../../shared/components/header/header.component.vue";
import FooterComponent from "../../shared/components/footer/footer.component.vue";

import ProfileEmptyShoppingCartComponent from "./components/profile-empty-shopping-cart.component.vue";
import ProfileListShoppingCartComponent from "./components/profile-list-shopping-cart.component.vue";
import ProfileShareComponent from "./components/profile-share.component.vue";

@Component({
  components: {
    HeaderComponent,
    FooterComponent,
    ProfileShareComponent,
    ProfileEmptyShoppingCartComponent,
    ProfileListShoppingCartComponent
  }
})
export default class ProfileView extends Vue {
  public headerTheme = {
    color: "light",
    background: "dark"
  };
  private user: any = {};
  private userName: string = "";

  get cartProducts() {
    return this.$store.state.shoppingCartModule.products;
  }

  private mounted() {
    this.user = JSON.parse(localStorage.getItem("user") || "");
    this.userName = this.user.displayName.split(" ")[0];
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

  div.wrapper {
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
</style>

