<template>
  <div class="products-list-item" v-if="isProductOnStock" :class="getProducsListItemClass()">
    <div class="product-list-item-wrapper" @click="goToProductView()">
      <div class="isNew" v-if="isNew">NUEVO</div>

      <v-lazy-image
        class="photo"
        :src="photo_hd_src"
        :src-placeholder="photo_thumb_src"
        @load="onLoadVLazyImage()"
      />

      <h2 class="price">{{ parseFloat(product.price_cop) | toCurrency}}</h2>

      <h2 class="name">{{ product.description }}</h2>

      <h2 class="color">Color {{ product.color}}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";

@Component({
  components: { VLazyImage }
})
export default class ShopProductsListItemComponent extends Vue {
  @Prop()
  product!: any;

  private isNew: boolean = false;
  private isPhotoOnStock: boolean = true;
  private isProductOnStock: boolean = false;
  private photo_hd_src: string = "";
  private photo_thumb_src: string = "";
  private product_code: string = "";

  private getProducsListItemClass() {
    return this.isPhotoOnStock ? "default" : "hidden";
  }

  private onLoadVLazyImage() {
    this.isPhotoOnStock = true;
    const shopOnStock = JSON.parse("" + localStorage.getItem("shopOnStock"));
    shopOnStock.push(this.product.ref);
    localStorage.setItem("shopOnStock", JSON.stringify(shopOnStock));
  }

  private goToProductView() {
    this.$router.push(
      `/product/gender/${this.product.gender}/category/${
        this.product.category
      }/ref/${this.product.ref_photo_code}`
    );
  }
  private mounted() {
    const product_token = "18c776df-f5a7-45a0-9012-16f780381d92";
    const filename = `${this.product.ref_photo_code}-01.jpg`;
    const pathbase =
      "https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos";
    const mediafile = `alt=media&token=${product_token}`;

    this.photo_thumb_src = `${pathbase}%2Fthumb%2F${filename}?${mediafile}`;
    this.photo_hd_src = `${pathbase}%2Fhd%2F${filename}?${mediafile}`;

    console.warn(this.photo_thumb_src);
  }
}
</script>

<style lang="less" scoped>
@import (reference) "./../../../shared/styles/index.less";
div.products-list-item {
  display: block;

  background-color: rgba(0, 0, 0, 0);
  width: 50%;
  padding: 0.5em 0.5em;
  box-sizing: border-box;

  display: inline-block;
  visibility: inherit;

  &.hidden {
    visibility: hidden;
    height: 0px;
    width: 0%;
    padding: 0em 0em;

    div.product-list-item-wrapper {
      width: 100%;
      height: 0px;
      border: none;
    }

    .photo {
      width: 0%;
      padding: 0%;
      &.v-lazy-image {
        height: 0px;
      }
    }

    .price {
      font-size: 0px;
      padding: 0em;
      margin-bottom: 0px;
    }

    .name {
      font-size: 0px;
      padding: 0em;
    }

    .color {
      font-size: 0px;
      padding: 0em;
    }

    //display: none;
  }

  div.product-list-item-wrapper {
    width: 100%;
    padding: 0em 0em;
    box-sizing: border-box;
    background-color: rgba(0, 0, 0, 0);
    border: 1px solid black;
    position: relative;
  }

  .isNew {
    display: block;
    position: absolute;
    width: 100%;
    padding: 0.5em;
    letter-spacing: 3px;
    font-weight: 900;
    box-sizing: border-box;
    background-color: @color-yellow;
    color: white;
    #Font-OpenSans();
  }

  .photo {
    width: 100%;
    padding: 0%;
    &.v-lazy-image {
      height: 120px;
    }
  }

  .price {
    display: block;
    background-color: #575656;
    color: white;
    text-align: center;
    padding: 0.5em;
    margin-bottom: 1px;
    font-size: 12px;
    #Font-TrajanPro();
  }

  .name {
    display: block;
    background-color: #575656;
    color: white;
    text-align: center;
    padding: 0.5em;
    font-size: 10px;
    #Font-TrajanPro();
  }

  .color {
    display: block;
    background-color: #575656;
    color: white;
    text-align: center;
    padding: 0.5em;
    font-size: 10px;
    #Font-TrajanPro();
  }
}

@media (min-width: 600px) {
  div.products-list-item {
    display: inline-block;
    background-color: rgba(0, 0, 0, 0);
    width: 20%;
    .photo {
      width: 100%;
      padding: 0%;
      &.v-lazy-image {
        height: 20vw;
      }
    }
  }
}
</style>

  