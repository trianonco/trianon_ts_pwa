<template>
  <div class="product buy-button">
    <div class="button theme-black border-gold">
      <h5 v-if="getProductsInShoppingCart.length === 0" @click="doAddToCart()">
        <span>COMPRAR</span>
      </h5>
      <h5 v-if="getProductsInShoppingCart.length !== 0">
        <span class="remove-btn" @click="doRemoveFromCart()">-</span>
        <span class="counted" style=" flex:1">{{ getProductsInShoppingCart.length }}</span>
        <span class="add-btn" @click="doAddToCart()">+</span>
      </h5>
    </div>

    <div class="message">
      <h3>EL PRODUCTO SE AÑADIRÁ A TU PERFIL</h3>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import IShopProduct from "./../../../shared/models/IShopProduct.model";
import VLazyImage from "v-lazy-image";

@Component({
  components: {
    VLazyImage
  }
})
export default class ProductBuyButtonComponent extends Vue {
  @Prop()
  product!: IShopProduct;

  @Prop()
  size!: any;

  get getProductsInShoppingCart() {
    return this.$store.state.shoppingCartModule.products.filter(
      (product: IShopProduct) =>
        product.ref_photo_code === this.product.ref_photo_code
    );
  }
  private mounted() {
    console.warn("getProductsInShoppingCart");
    console.warn(this.getProductsInShoppingCart);
  }

  private doAddToCart() {
    const size = JSON.parse(JSON.stringify(this.size || {}) + "");
    console.log(size);
    if (size.ref) {
      const product = JSON.parse(JSON.stringify(this.product || {}) + "");
      product["ref"] = size.ref;
      product["height"] = size.size.height;
      product["width"] = size.size.width;
      product["depth"] = size.size.depth;

      this.$store.dispatch("addToCart", product);
    } else {
      if (this.product.category !== "CINTURONES") {
        this.$store.dispatch("addToCart", this.product);
      }
    }
    this.$router.push("/view/profile");
    //
    //console.log((this.getProductsInShoppingCart as any[]).length);
  }
  private doRemoveFromCart() {
    //
    const size = JSON.parse(JSON.stringify(this.size) + "");
    if (size.ref) {
      const product = JSON.parse(JSON.stringify(this.product) + "");
      product["ref"] = size.ref;
      product["height"] = size.size.height;
      product["width"] = size.size.width;
      product["depth"] = size.size.depth;

      this.$store.dispatch("removeFromCart", product);
    } else {
      if (this.product.category !== "CINTURONES") {
        this.$store.dispatch("removeFromCart", this.product);
      }
    }
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

    h5 {
      padding: 1em 0em;
      text-align: center;
      #Flex-Row-Center-Extremes();
      span {
        display: block;
        margin: 0 auto;
        &.remove-btn {
          padding: 0em 1em;
        }
        &.add-btn {
          padding: 0em 1em;
        }
      }
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

@media (min-width: 600px) {
  div.product.buy-button {
    div.button {
      display: block;
      width: ~"calc(200px - 1em)";
      box-sizing: border-box;
    }
    div.message {
      display: block;
      width: ~"calc(100% - 1em)";
      box-sizing: border-box;
      padding: 0.5em;
      margin: 0em auto;
      margin-top: 0em;
      #Font-TrajanPro();
      h3 {
        font-size: 12px;
        letter-spacing: 1px;
        -webkit-transform: scaleY(0.8);
        transform: scaleY(0.8);
        display: block;
        color: gray;
        width: fit-content;
        margin: 0 auto;
        padding: 1em;
        padding-bottom: 2.5em;
        border-bottom: 1px solid gray;
      }
    }
  }
}
</style>