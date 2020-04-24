<template>
  <header>
    <div class="header-nav">
      <!-- Header :: Nav :: Back -->
      <div class="header-nav-back">
        <div v-show="hasBack()" @click="goToBack()">
          <img
            class="back"
            src="../../assets/images/headers/back.png"
            alt="Trianon Colombia, Back. Regresa a la vista anterior."
          />
          <h3>ATRÁS</h3>
        </div>
      </div>

      <!-- Header :: Nav :: Logo -->
      <div class="header-nav-logo" @click="goToHome()">
        <img
          v-show="hasLogo()"
          class="logo"
          src="../../assets/images/headers/logo.png"
          alt="Trianon Colombia, La mejor marroquinería."
        />
      </div>

      <!-- Header :: Nav :: Auth -->
      <div class="header-nav-auth"  @mouseenter="UX.showEditProfile = false">
        <div class="header-nav-auth-login" v-if="hasLogin()" @click="goToLogin()">
          <h3>INICIAR SESIÓN</h3>
        </div>
        <div class="header-nav-auth-profile" v-if="hasProfile()" >
          <div class="wrapper">
            <div>
            <img
              class="profile"
              src="../../assets/images/headers/profile.png"
              alt="Trianon Colombia, Profile. Perfil personal. Usuarios de Trianon"
            />
            <label class="header-shopping-cart" v-if="shoppingCart.length > 0">
              <span>{{shoppingCart.length}}</span>
            </label>
            </div>
            <h3 @mouseenter="UX.showEditProfile = true" @click="goToProfile()" >MI PERFIL</h3>
            <div class="edit-profile-dropdown" v-if="UX.showEditProfile" >
              <h3 @click="goToEditProfile()">EDITAR PERFIL</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header-title">
      <h1 v-if="hasTitle()">LO MEJOR DE LA MARROQUINERÍA</h1>
      <h2>
        solidarios ante la situación sanitaria sobre el coronavirus covid-19 y en apoyo a nuestros colaboradores, los envíos de las compras mediante la página web, se realizarán a partir del 27 de abril de 2020.
      </h2>
      <!-- <h1 v-if="hasTitle()">100% COLOMBIANO</h1> -->
    </div>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

import AuthHelper from "./../../helpers/auth.helper";
import RouterHelper from "./../../helpers/router.helper";

@Component({})
export default class HeaderComponent extends Vue {
  // Component's Input
  @Prop()
  public theme: any;

  // UI Property
  public UI = {};
  public UX = {
    showEditProfile: false
  };

  // Helpers
  public routerHelper = new RouterHelper();
  public authHelper = new AuthHelper();

  // public mounted() {}

  private goToHome() {
    this.$router.push("/");
  }

  private goToLogin() {
    this.$router.push("/view/signin");
  }

  private goToProfile() {
    this.$router.push("/view/profile");
  }

  private goToEditProfile(){
    this.$router.push('/view/edit-profile')
  }

  private goToBack() {
    this.$router.back();
  }
  private hasBack() {
    return this.routerHelper.hasBack(this.$router.currentRoute.name || "none");
  }
  private hasLogin() {
    return this.authHelper.hasLogin();
  }
  private hasProfile() {
    return this.authHelper.hasProfile();
  }
  private hasLogo() {
    return this.routerHelper.hasLogo(this.$router.currentRoute.name || "none");
  }

  private hasTitle() {
    return this.routerHelper.hasTitle(this.$router.currentRoute.name || "none");
  }

  get shoppingCart(){
    console.warn('this.$store.state.shoppingCartModule.products')
    console.warn(this.$store.state.shoppingCartModule.products)
    return this.$store.state.shoppingCartModule.products;
  }
}
</script>


<style scoped lang="less">
@import (reference) "./header.style.less";
@import (reference) "./header-desktop.style.less";
header {
  #constructor-header();
  background-color: white;
  color:black;
}
header .header-nav {
  #constructor-header-nav();
}
header .header-title {
  #constructor-header-title();
}

header .edit-profile-dropdown{
  display: none;
}


.header-shopping-cart{
    position: relative;
    top: -6px;
    left: 5px;
    background-color: #9b9b9b;
    color: white;
    padding: 1px 3px;
    border-radius: 100%;
    font-weight: 900;
}
@media (min-width: 600px) {
  header {
    #constructor-desktop-header();
    background-color: black;
    color: white;
  }
  header .header-nav {
    #constructor-desktop-header-nav();
  }
  header .header-title {
    #constructor-desktop-header-title();
  }
  header .edit-profile-dropdown{
    display: block;
  text-decoration: underline;
    position: fixed;
    top: 45px;
    width: auto;
    font-size: 1.25em;
    letter-spacing: 1px;
    color: gray;
    z-index: 10000000;
}
.header-shopping-cart{
    position: relative;
    top: -6px;
    left: 5px;
    background-color: white;
    color: #9b9b9b;
}
}
</style>
