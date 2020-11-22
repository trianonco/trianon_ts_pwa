<template>
  <div class="login-signin">
    <div class="login-signin-wrapper">
      <div class="login-signin-buttons">
        <br />
        <div
          class="login-signin-button facebook"
          v-if="!isEmailLoginOpen"
          @click="doLoginFacebook()"
        >
          <img alt="TrianonCo Image" src="../../../shared/assets/images/signin/bullet-fb.png" />
          <h1>INGRESA CON FACEBOOK</h1>
          <img alt="TrianonCo Image" src="../../../shared/assets/images/signin/bullet-fb.png" />
        </div>
        <div class="login-signin-button gmail" v-if="!isEmailLoginOpen" @click="doLoginGmail()">
          <img alt="TrianonCo Image" src="../../../shared/assets/images/signin/bullet-gmail.png" />
          <h1>INGRESA CON GMAIL</h1>
          <img alt="TrianonCo Image" src="../../../shared/assets/images/signin/bullet-gmail.png" />
        </div>
        <div
          class="login-signin-button email"
          @click="doToogleLoginEmail()"
          style="margin-bottom:0px"
        >
          <img alt="TrianonCo Image" src="../../../shared/assets/images/signin/bullet-email.png" />
          <h1>CORREO ELECTRÓNICO</h1>
          <img alt="TrianonCo Image" src="../../../shared/assets/images/signin/bullet-email.png" />
        </div>
        <br v-if="isEmailLoginOpen" />




        <div class="email-login-form" v-if="isEmailLoginOpen">

          <div class="email-login-form-input email">
            <input type="email" v-model="auth.email" placeholder="CORREO ELECTRÓNICO" />
          </div>

          <div class="email-login-form-input password">
            <input type="password" v-model="auth.password" placeholder="CONSTRASEÑA" />
          </div>


          <div class="email-login-form-input password" v-if="isNewUser">
            <input type="password" v-model="auth.repassword" placeholder="CONFIRMAR CONSTRASEÑA" />
            <span class="error" v-if="!isSamePassword || ERROR_EMAIL">
               <div v-if="!isSamePassword"> CONTRASEÑAS NO COINCIDEN </div>
               <div v-if="ERROR_EMAIL"> {{ ERROR_EMAIL }} </div>
              </span> 
          </div>

          <div class="email-login-form-submit login" @click="doLoginEmail()">INICIAR SESIÓN</div>
          
          
          <div
            class="email-login-form-label recovery-password"
            @click="doSignUp()" v-if="!isNewUser"
          >¿Crear cuenta?
          </div>

          <div
            class="email-login-form-label recovery-password"
            @click="doRecoveryPassword()"
          >¿Olvidaste tu contraseña?
          </div>

          
        </div>



        <br v-if="!isEmailLoginOpen" />
      </div>
    </div>
  </div>
</template>

<script>
import AuthGmail from "./../../../shared/auth/authSignInGmail";
import AuthFB from "./../../../shared/auth/authSignInFB";
import AuthEmail from "./../../../shared/auth/authSignInEmail";
const DEFAULT_DESCRIPTION =
  "Gracias por visitarnos. En este espacio podrás crear tu PERFIL TRIANON, con el cual habilitarás el chat para contactarte con nosotros, también realizar compras y ver los estados de envió.";
export default {
  name: "LoginSigninComponent",

  methods: {

    doSignUp(){
        this.isNewUser = true;
    },

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

    doLoginEmail() {
      if (!this.isNewUser) {
        const authProvider = new AuthEmail();
        authProvider
          .doLoginWithEmailAndPassword(this.auth.email, this.auth.password)
          .then(isExistingUser => {
            if (!isExistingUser) {
              this.isNewUser = true;
              console.warn(" USUARIO NUEVO ");
            } else {
              console.warn(" USUARIO REGISTRADO ");
            }
          })
          .catch(error => {});
      } else {
        if (this.auth.password === this.auth.repassword) {
          const authProvider = new AuthEmail();
          authProvider
            .doSignUpWithEmailAndPassword(this.auth.email, this.auth.password)
            .then(response => {
              this.$router.push("/view/profile/");
            })
            .catch(error => {
              console.error('HAY UN HIJUEPUTA ERROR ACA COÑO')
              console.error(error)
              this.ERROR_EMAIL = error;
            });
        }
      }
    },

    doRecoveryPassword() {},

    doToogleLoginEmail() {
      this.description =
        this.description === DEFAULT_DESCRIPTION
          ? "Por favor selecciona la opcion mediante la cual realizaste tu registro"
          : DEFAULT_DESCRIPTION;

      this.isEmailLoginOpen = !this.isEmailLoginOpen;
    }
  },

  computed: {
    isSamePassword: function() {
      return this.auth.password === this.auth.repassword;
    }
  },

  data() {
    return {
      auth: {
        email: "",
        password: "",
        repassword: ""
      },
      isNewUser: false,
      isEmailLoginOpen: false,
      title: "INICIO DE SESIÓN",
      ERROR_EMAIL: '',
      description: DEFAULT_DESCRIPTION
    };
  }
};
</script>

<style lang="less">
@import (reference) "./../../../shared/styles/index.less";
div.login-signin {
  display: block;
  width: 100%;
  min-height: ~"calc(100vh - 72px - 122px - 193px)";
  height: auto;
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
    padding: 0em;
    background-color: white;
  }

  &-button {
    #Font-TrajanPro();
    #Flex-Row-Extremes();

    margin: 0em 1em;

    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;

    width: ~"calc(100% - 2em)";

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

div.email-login-form {
  display: block;
  width: 100%;

  box-sizing: border-box;
  padding: 1em;

  background-color: @color-gold;

  &-input {
    width: 100%;
    box-sizing: border-box;

    padding: 0px;
    padding-top: 5px;
    padding-bottom: 5px;

    input {
      width: 100%;
      box-sizing: border-box;
      padding: 0.35em;
      border: none;
      text-align: center;
      font-family: "TrajanPro";
      font-weight: normal;
      font-style: normal;
    }

    &.email {
      padding-bottom: 5px;
    }
    &.password {
      padding-bottom: 10px;
      .error {
        padding: 0.5em 0em;
        color: red;
        font-size: 0.9em;
        text-transform: lowercase;
      }
    }
  }
  &-submit {
    display: block;
    width: 100%;
    background-color: white;
    color: @color-gold;
    box-sizing: border-box;
    padding: 10px;
  }
  &-label {
    padding: 10px;
    font-family: "Open Sans";
    font-weight: normal;
    font-style: normal;
    font-size: 12px;
    text-decoration: underline;
  }
}

@media (min-width: 600px) {
  div.login-signin {
    display: block;
    width: 100%;
    min-height: ~"calc(100vh - 72px - 122px - 193px)";
    height: auto;
    background-color: white;
    color: black;

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

    &-wrapper {
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 1em;
      padding-left: 0px;
      padding-right: 0.5em;
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
      padding: 0em;
      background-color: white;
    }

    &-button {
      #Font-TrajanPro();
      #Flex-Row-Extremes();

      margin: 0em 1em;

      padding: 1em 1em;
      margin-bottom: 10px;
      box-sizing: border-box;

      width: ~"calc(100% - 2em)";

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
        padding: 0.5em;
      }
    }
  }
}
</style>
