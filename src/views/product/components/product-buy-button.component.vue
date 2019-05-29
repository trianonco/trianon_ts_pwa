<template>
  <div class="product buy-button">
     <div class="button theme-black border-gold" @click="doAddToCart()">
            <h5 v-if="getProductsInShoppingCart.lenght === 0">COMPRAR</h5>
            <h5 v-if="getProductsInShoppingCart.lenght !== 0">AÑADIDO AL CARRITO</h5>
      </div>

       <div class="message">
            <h3>EL PRODUCTO SE AÑADIRÁ A TU PERFIL</h3>
      </div>

     
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import IShopProduct from './../../../shared/models/IShopProduct.model';
import VLazyImage from "v-lazy-image";

@Component({
  components: {
    VLazyImage
  }
})
export default class ProductBuyButtonComponent extends Vue {

 @Prop()
 product!:IShopProduct ;

  get getProductsInShoppingCart(){
        return this.$store.state.shoppingCartModule.products.filter( (product:IShopProduct) => product.ref === this.product.ref)
  }
  private mounted() {
  }
  private  doAddToCart() {
      this.$store.dispatch("addToCart", this.product);
      console.log(this.getProductsInShoppingCart)
    }
}
</script>

<style lang="less" scoped>
@import (reference) "./../../../shared/styles/index.less";
div.product.buy-button {

  text-align: center;

    div.button {
    display: block;
    width: ~"calc(100% - 1em)";
    box-sizing: border-box;
    padding: 1em;
    margin: 0.5em auto;
    margin-top: 0em;
    margin-bottom: 0em;
    #Font-TrajanPro();
    &.theme-black {
      background-color: @color-black;
      color: white;
    }
    &.border-gold {
      border: 2px solid @color-yellow;
    }
  }

    div.message {
    display: block;
    width: ~"calc(100% - 1em)";
    box-sizing: border-box;
    padding: 1em;
    margin: 0em auto;
    margin-top: 0em;
    #Font-TrajanPro();
    h3 {
      font-size: 12px;
      letter-spacing: 0px;
      -webkit-transform: scaleY(0.9);
      transform: scaleY(0.9);
    }
  }

}
</style>