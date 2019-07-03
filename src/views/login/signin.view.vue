<template>
  <div class="view signin">
    <!-- Home :: View-wrapper -->
    <div class="view-wrapper">
      <!-- Header  -->
      <HeaderComponent :theme="headerTheme" />

      <!-- Login Components -->

      <h1 class="signin-title">INICIO DE SESIÓN</h1>
      <div class="signin-p mobile">
        <p>Gracias por visitarnos. En este espacio podrás crear tu PERFIL TRIANON, con el cual habilitarás el chat para contactarte con nosotros, también realizar compras y ver los estados de envió.</p>
      </div>
      <div class="signin-cols">
        <div class="signin-col">
          <LoginSigninComponent></LoginSigninComponent>
        </div>
        <div class="signin-col">
          <div class="signin-p desktop">
            <p>Gracias por visitarnos. En este espacio podrás crear tu PERFIL TRIANON, con el cual habilitarás el chat para contactarte con nosotros, también realizar compras y ver los estados de envió.</p>
          </div>
          <LoginShareComponent></LoginShareComponent>
        </div>
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
import HeaderComponent from "../../shared/components/header/header.component.vue";
import FooterComponent from "../../shared/components/footer/footer.component.vue";
import LoginSigninComponent from "./components/login-signin.component.vue";
import LoginShareComponent from "./components/login-share.component.vue";
@Component({
  components: {
    HeaderComponent,
    FooterComponent,
    LoginSigninComponent,
    LoginShareComponent
  }
})
export default class Home extends Vue {
  public headerTheme = {
    color: "light",
    background: "dark"
  };
}
</script>
<style lang="less">
@import (reference) "./../../shared/styles/index.less";
div.view.signin {
  div.view-wrapper {
    .signin-title {
      font-family: "Open Sans";
      font-display: block;
      font-weight: normal;
      font-style: normal;
      font-size: 12px;
      padding: 20px;
      text-align: center;
      letter-spacing: 1px;

      background-color: black;
      color: white;
    }
    .signin-p {
      font-family: "Open Sans";
      font-display: block;
      font-weight: normal;
      font-style: normal;
      font-size: 11px;
      font-weight: 300;
      line-height: 20px;
      width: 100%;
      letter-spacing: 0px;
      padding-bottom: 12px;
      letter-spacing: 1px;

      background-color: black;
      color: white;

      &.desktop {
        display: none;
      }
      p {
        width: 314px;
        margin: 0 auto;
        text-align: center;
      }
    }

    .signin-cols {
    }
    .signin-col {
    }
  }
}
@media (min-width: 400px) {
  div.view.signin {
    div.view-wrapper {
      .signin-p {
        p {
          font-size: 13px;
          width: 370px;
          margin: 0 auto;
          text-align: center;
        }
      }
    }
  }
}
@media (min-width: 600px) {
  div.view.signin {
    div.view-wrapper {
      background-color: white;
      color: black;
      .signin-title {
        background-color: white;
        color: black;
        font-weight: bold;
      }
      .signin-p.mobile {
        display: none;
      }
      .signin-p.desktop {
        display: block;
        background-color: white !important;
        color: black !important;
        padding-bottom: 2em;
        p {
          background-color: white;
          color: black;
        }
      }

      .signin-cols {
        background-color: white;
        color: black;

        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: nowrap;
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        -webkit-justify-content: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-align-content: center;
        -ms-flex-line-pack: center;
        align-content: center;
        -webkit-align-items: flex-start;
        -ms-flex-align: start;
        align-items: flex-start;
      }
      .signin-col {
        width: 100%;
        max-width: 500px;
        box-sizing: border-box;
        padding: 1em;
        min-height: ~"calc(100vh - 72px - 122px - 193px)";
        height: auto;

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
        align-items: center;

        background-color: white;
        color: black;
      }
    }
  }
}
</style>
