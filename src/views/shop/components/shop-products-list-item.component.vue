<template>
  <div class="products-list-item" :class="getProducsListItemClass()" v-if="!isNot">
    <div class="product-list-item-wrapper" @click="goToProductView()">
      <div class="isNew" v-if="isNew">NUEVO</div>

      <v-lazy-image
        class="photo"
        :src="photo_hd_src"
        :src-placeholder="photo_thumb_src"
        @load="onLoadVLazyImage()"
      />

      <h2 class="price">{{ product.ref }}</h2>
      <h2 class="price">{{ parseFloat(product.price_cop) | toCurrency}}</h2>

      <h2 class="name">{{ product.description }} {{ product.line }}</h2>

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
  private isNot: boolean = false;
  private isPhotoOnStock: boolean = false;
  private isProductOnStock: boolean = false;
  private photo_hd_src: string = "";
  private photo_thumb_src: string = "";
  private product_code: string = "";

  private getProducsListItemClass() {
    if (this.isPhotoOnStock) {
      return "default";
    } else {
      if (this.isNot) {
        return "hidden bye-gone";
      } else {
        return "hidden";
      }
    }
  }

  private onLoadVLazyImage() {
    this.isPhotoOnStock = true;
    const shopOnStock = JSON.parse("" + localStorage.getItem("shopOnStock"));
    shopOnStock.push(this.product.ref);
    localStorage.setItem("shopOnStock", JSON.stringify(shopOnStock));
  }

  private imageExists(image_url: string) {
    return new Promise((resolve, reject) => {
      var img = new Image();
      img.onload = () => {
        resolve();
      };
      img.onerror = () => {
        reject();
      };
      img.src = image_url;
    });
  }

  private goToProductView() {
    const filename = `${this.product.ref_photo_code}-01.jpg`;

    ///product/gender/:gender/category/:category/product_ref/:ref/product_name/:product_name/product_description/:product_description/product_photo_ref/:product_photo_ref
    const url_gender = `gender/${this.product.gender.replace("/", "-")}`;
    const url_category = `category/${this.product.category.replace("/", "-")}`;
    const url_ref = `ref/${this.product.ref_photo_code.replace("/", "-")}`;
    const url_description = `description/${this.product.description.replace(
      "/",
      "-"
    )}`;
    const url_color = `color/${this.product.color.replace("/", "-")}`;
    const url_line = `line/${this.product.line.replace("/", "-")}`;
    const url_photo = `photo/${filename.replace("/", "-")}`;
    this.$router.push(
      `/product/${url_gender}/${url_category}/${url_ref}/${url_description}/${url_color}/${url_line}/${url_photo}`
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

    this.imageExists(this.photo_thumb_src)
      .then((response: any) => {
        this.isNot = false;
      })
      .catch((error: any) => {
        this.isNot = true;
      });
  }
}
</script>

<style lang="less">
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
    background-color: black;
    position: fixed;
    z-index: -10000000;
    top: 0px;
    opacity: 0;
    display: block;
    &.bye-gone {
      display: none !important;
    }
  }

  &.default {
    background-color: white;

    z-index: 0;
    position: relative;
    top: 0px;
    opacity: 1;
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

  