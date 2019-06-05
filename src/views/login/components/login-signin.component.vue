<template>
  <div class="login-signin">
    <div class="login-signin-wrapper">
      <h1 class="title">{{ title }}</h1>
      <h2 class="subtitle">{{ description }}</h2>
      <div class="login-signin-buttons">
        <div class="login-signin-button facebook" @click="doLoginFacebook()">
          <img src="../../../shared/assets/images/signin/bullet-fb.png" class alt>
          <h1>INGRESA CON FACEBOOK</h1>
          <img src="../../../shared/assets/images/signin/bullet-fb.png" class alt>
        </div>
        <div class="login-signin-button gmail" @click="doLoginGmail()">
          <img src="../../../shared/assets/images/signin/bullet-gmail.png" class alt>
          <h1>INGRESA CON GMAIL</h1>
          <img src="../../../shared/assets/images/signin/bullet-gmail.png" class alt>
        </div>
        <div class="login-signin-button email" @click="doLoginEmail()">
          <img src="../../../shared/assets/images/signin/bullet-email.png" class alt>
          <h1>CORREO ELECTRÓNICO</h1>
          <img src="../../../shared/assets/images/signin/bullet-email.png" class alt>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AuthGmail from "./../../../shared/auth/authSignInGmail";
import AuthFB from "./../../../shared/auth/authSignInFB";
export default {
  name: "LoginSigninComponent",

  methods: {
    doLoginGmail() {
      const authProvider = new AuthGmail();
      authProvider
        .doLoginGmail()
        .then(response => {
          this.$router.push("/view/profile/");
        })
        .catch(error => {});
    },

    doLoginFacebook() {
      const authProvider = new AuthFB();
      authProvider
        .doLoginFB()
        .then(response => {
          this.$router.push("/view/profile/");
        })
        .catch(error => {});
    },

    doLoginEmail() {}
  },
  data() {
    return {
      auth: {},
      title: "INICIO DE SESIÓN",
      description:
        "Gracias por visitarnos. En este espacio podrás crear tu PERFIL TRIANON, con el cual habilitarás el chat para contactarte con nosotros, también realizar compras y ver los estados de envió."
    };
  }
};
</script>

<style lang="less">
@import (reference) "./../../../shared/styles/index.less";
div.login-signin {
  display: block;
  width: 100%;
  height: @size-login-signin-height;
  background-color: @color-black;
  color: white;

  &-wrapper {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    text-align: center;
    .title {
      #Font-OpenSans("normal");
      font-size: 12px;
      padding-bottom: 12px;
    }
    .subtitle {
      #Font-OpenSans();
      font-size: 11px;
      font-weight: 300;
      line-height: 20px;
      width: 269px;
      letter-spacing: 0px;
      padding-bottom: 12px;
      margin: 0 auto;
    }
  }

  &-buttons {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    background-color: white;
  }

  &-button {
    #Font-TrajanPro();
    #Flex-Row-Extremes();

    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;

    width: 100%;

    border: 1px solid @color-yellow;

    &:last-child {
      margin-bottom: 0px;
    }

    h1 {
      color: black;
      font-size: 12px;
      transform: scaleY(0.9);
      letter-spacing: 1px;
    }
    img {
      width: 10px;
    }
  }
}
</style>
