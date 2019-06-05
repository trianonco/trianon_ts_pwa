<template>
  <div class="wrapper empty-shopping-cart" v-if="user">
    <div class="wrapper-container">
      <div class="wrapper-container-header">
        <img src="../../../shared/assets/images/gender-categories/bullet-gray.png">
        <h1>ESPACIO PARA TUS PRODUCTOS</h1>
      </div>
      <div class="wrapper-container-content">
        <img
          src="../../../shared/assets/images/banners/plus_icon-01.png"
          @click="addItemOnShoppingCart()"
        >
        <p
          class="normal"
        >¿Qué esperas?, descubre los articulos considerados lo mejor de la arroquinería.</p>
        <p class="light">¡ Toca el simbolo + para empezar!</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapGetters, mapActions } from "vuex";
@Component({
  components: {},
  computed: {
    ...mapState(["products"]),
    ...mapActions(["addItem"])
  }
})
export default class ProfileEmptyShopppingCart extends Vue {
  private user: any = {};
  private userName: string = "";

  get cartProducts() {
    return this.$store.state.shoppingCartModule.products;
  }

  private mounted() {
    this.user = JSON.parse(localStorage.getItem("user") || "");
    this.userName = this.user.displayName.split(" ")[0];
  }

  private addItemOnShoppingCart() {
    this.$router.push("/");
  }
}
</script>

<style lang="less">
@import (reference) "../../../shared/styles/index.less";
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

    &.empty-shopping-cart {
      height: ~"calc(100vh - 72px - 122px - 62px - 110.5px)";
      #Flex-Row-Center-Center();
    }

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

  div.wrapper-container {
    display: block;
    width: 100%;
    background-color: white;
    color: gray;
    #Font-TrajanPro();

    &-header {
      #Flex-Row-Center-toLeft();
      padding: 1em;
      border-bottom: 1px solid gray;
      h1 {
        padding: 0em 1em;
        margin: 0px;
        text-align: left;
        font-size: 11px;
      }
      img {
        width: 1em;
      }
    }

    &-content {
      #Font-OpenSans();
      img {
        box-sizing: content-box;
        width: 3.5em;
        padding: 1em;
      }
      p {
        transform: scaleY(0.9);
        font-size: 12px;
        padding-bottom: 0.5em;
        &.normal {
          color: black;
        }
        &.light {
          color: gray;
          padding-bottom: 2em;
        }
      }
    }
  }
}
</style>