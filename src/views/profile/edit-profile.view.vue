<template>
  <div class="view profile">
    <!-- Home :: View-wrapper -->
    <div class="view-wrapper" style="position: relative;">
      <!-- Header  -->
      <HeaderComponent :theme="headerTheme" />

      <div class="vw-content" style="width:100%">


        <div class="vw-wrapper" v-if="user">
          <div class="vw-wrapper-text">
            <span>
                ¿Necesitas camiar algún dato?. Este espacio esta pensado para que,  en caso de errores ó simplemente modificación de tu información personal, puedas hacerlo sin ningún problema.
            </span>
          </div>
        </div>

        <div class="vw-wrapper" v-if="user" style=" width: 100%;
                                                    max-width:100%;
                                                    height: 1em;
                                                    margin: 0px;
                                                    padding: 0px;">
            <img src="./../../shared/assets/images/gold-bars_Mesa de trabajo 1.png" style="width:100%; height:1em; object-fit: cover;" alt="">
        </div>

        <div class="vw-wrapper" v-if="user" >
            <form class="edit-profile-form">
                <div class="col">
                    <div class="input">
                        <label>NOMBRE:</label>
                        <input type="text">
                    </div>
                      <div class="input">
                        <label>DOCUMENTO DE INDENTIDAD</label>
                        <input type="text">
                    </div>
                </div>
                <div class="col">
                    <div class="input">
                        <label>APELLIDO:</label>
                        <input type="text">
                    </div>
                    <div class="input">
                        <label>FECHA DE NACIMIENTO</label>
                        <input type="text">
                    </div>
                </div>
            </form>
        </div>

        <div class="vw-wrapper" v-if="user" style=" width: 100%;
                                                    max-width:100%;
                                                    margin: 0px;
                                                    padding: 0px;">
            <div class="confirm-changes">
                <h2>
                    <h3>
                        <span>CONFIRMAR CAMBIOS</span>
                    </h3>
                </h2>
            </div>

            <div class="delete-gray-tape">
                <h5 style="padding:1em">BORRAR PRODUCTOS SELECCIONADOS Y ALMACENADOS EN MI PERFIL</h5>
            </div>

            <h1 style="color:gray; text-decoration: underline; margin:1em">CERRAR SESIÓN</h1>

                    <div class="vw-wrapper" v-if="user" style=" width: 100%;
                                                    max-width:100%;
                                                    height: 1em;
                                                    margin: 0px;
                                                    padding: 0px;">
            <img src="./../../shared/assets/images/gold-bars_Mesa de trabajo 1.png" style="width:100%; height:1em; object-fit: cover;" alt="">
        </div>

            <div class="floating-icon bottom left"> <img src="./../../shared/assets/images/icon-symbol.png"></div>
            <div class="floating-icon bottom right"> <img src="./../../shared/assets/images/icon-symbol.png"></div>
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
 .edit-profile-form{
     display: block;
     padding: 1em;
    background-color: black;
    color: white;
  }

@color-1st: white;
@color-2nd: gray;
.confirm-changes{

    display: block;
    width: 100%;
    background: linear-gradient(to bottom, @color-1st 0%,@color-1st 50%,@color-1st 50%,@color-2nd 50%,@color-2nd 100%); /* W3C */

    h2{
        display: block;
        width: fit-content;
        margin: 0 auto;
        padding: 0.25em;
        background-image: url('../../shared/assets/images/banners/bg-gold_Mesa de trabajo 1.png');
        font-family: 'TrajanPro';
    }
    h3{
        width: 100%;
        padding: 0em;
        background-color:black;
        color:white;
        padding:  1.5em 3em;
        font-size:11px;
        box-sizing: border-box;
        letter-spacing: 3px;
            span{
                    -webkit-transform: scaleY(0.8);
                    transform: scaleY(0.8);
            }
    }
}
.delete-gray-tape{
    display: block;
    width: 100%;
    background-color: @color-2nd;
    color: white;
}
.floating-icon{
    position: absolute;
    img{width: 3.5em;
    filter: grayscale(100%) saturate(1000%) contrast(1000%) ;
-webkit-filter: grayscale(100%) saturate(1000%) contrast(1000%) ;
-moz-filter: grayscale(100%) saturate(1000%) contrast(1000%);
    }
    &.bottom{
        bottom: 2em;
    }
    &.left{
        left: -0.5em;
        img{
            -moz-transform: rotate(-90deg);
            -webkit-transform: rotate(-90deg);
            -o-transform: rotate(-90deg);
            -ms-transform: rotate(-90deg);
            transform: rotate(-90deg);
        }
    }
    &.right{
        right: -0.5em;
        img{
            -moz-transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
            -o-transform: rotate(90deg);
            -ms-transform: rotate(90deg);
            transform: rotate(90deg);
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

 .edit-profile-form{
    display: block;
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
 
    .col{
        &:first-child{
            padding-right: 2em;
        }
    }

    .input{
        display: block;
        width: 100%;
        label{
            width: 100%;
            padding: 1em;
        }
        input{
            width: ~"calc(100% - 2em)";
            margin:1em;
            padding: 1em;
            box-sizing: border-box;
        }
    }
}
}
</style>

