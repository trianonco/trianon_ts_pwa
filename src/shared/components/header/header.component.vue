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
      <div class="header-nav-auth">
        <div class="header-nav-auth-login" v-if="hasLogin()" @click="goToLogin()">
          <h3>INICIAR SESIÓN</h3>
        </div>
        <div class="header-nav-auth-profile" v-if="hasProfile()" @click="goToProfile()">
          <div class="wrapper">
            <img
              class="profile"
              src="../../assets/images/headers/profile.png"
              alt="Trianon Colombia, Profile. Perfil persional. Usuarios de Trianon"
            />
            <h3>MI PERFIL</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="header-title">
      <h1 v-if="hasTitle()">LO MEJOR DE LA MARROQUINERÍA -- </h1>
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
  public UX = {};

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
}
</script>


<style scoped lang="less">
@import (reference) "./header.style.less";
@import (reference) "./header-desktop.style.less";
header {
  #constructor-header();
  background-color: white;
}
header .header-nav {
  #constructor-header-nav();
}
header .header-title {
  #constructor-header-title();
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
}
</style>
