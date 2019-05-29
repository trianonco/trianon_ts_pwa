<template>
  <div class="view product">
    <!-- Headers -->
    <HeaderComponent/>

    <div class="view-wrapper">

      <ProductHeaderComponent></ProductHeaderComponent>

      <div class="view-wrapper-frame">
        <div class="view-wrapper-frame-content" v-if="isProductLoaded">
          <ProductSwiperComponent :photos="productPhotos" :slideIndex="productSlideIndex"></ProductSwiperComponent>
          <ProductPriceComponent :price="productPrice"></ProductPriceComponent>
          <ProductDescriptionComponent :description="productDescription" :color="productColor"></ProductDescriptionComponent>
          <ProductPhotosComponent :photos="productPhotos" @goToSwiperSlide="goToSwiperSlide"></ProductPhotosComponent>
          <ProductBuyButtonComponent :product="productObj"></ProductBuyButtonComponent>
        </div>
      </div>

      <ProductInfoBannerComponent :sizes="productSizes" :ref_code="productObj.ref_code" :ref_color_code="productObj.ref_color_code" :ref_size_code="productObj.ref_size_code"></ProductInfoBannerComponent>

      
    </div>

    <FooterComponent/>
    <!-- Footers -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";
import HeaderComponent from "../../shared/components/header/header.component.vue";
import FooterComponent from "../../shared/components/footer/footer.component.vue";

import ProductHeaderComponent from "./components/product-header.component.vue";
import ProductSwiperComponent from "./components/product-swiper.component.vue";
import ProductPriceComponent from "./components/product-price.component.vue";
import ProductDescriptionComponent from "./components/product-description.component.vue";
import ProductPhotosComponent from "./components/product-photos.component.vue";
import ProductBuyButtonComponent from "./components/product-buy-button.component.vue";
import ProductInfoBannerComponent from "./components/product-info-banner.component.vue";

import TrianonDB from './../../shared/database/db';
import IShopProduct from './../../shared/models/IShopProduct.model';

import {toIShopProduct} from './../../shared/models/toIShopProduct.model';
@Component({
  components: {
    VLazyImage,
    HeaderComponent,
    FooterComponent,
    ProductHeaderComponent,
    ProductSwiperComponent,
    ProductPriceComponent,
    ProductDescriptionComponent,
    ProductPhotosComponent,
    ProductBuyButtonComponent,
    ProductInfoBannerComponent
  }
})
export default class ProductView extends Vue {

  private db = new TrianonDB();
  private productObj: any = {};
  private productPhotos: any[] = [];
  private productSizes: any[] = [];
  private productPrice: number = -1;
  private productDiscount : number = -1;
  private productColor: string = "";
  private productDescription: string = "";
  private isProductLoaded: boolean = false;
  private productSlideIndex: number = 0;

  private mounted() {

    // Route Params
    const params = (this.$route as any).params;
    const productRef = params.productRef ? params.productRef : "";


    this.db.getProductByRef(productRef).then( async (product:any) => {

      this.productObj = await toIShopProduct(product);

      this.productPhotos.push(this.getPhotoURLs(1));
      this.productPhotos.push(this.getPhotoURLs(2));
      this.productPhotos.push(this.getPhotoURLs(3));
      this.productPhotos.push(this.getPhotoURLs(4));
      this.productPhotos.push(this.getPhotoURLs(5));

      this.productPrice = this.productObj.price_cop;
      this.productDescription = this.productObj.description;
      this.productColor = this.productObj.color;
      this.productDiscount = this.productObj.discount;

      const refCode = this.productObj.ref_code;
      const refColorCode = this.productObj.ref_color_code;
      const gender = this.productObj.gender;
      const category = this.productObj.category;
      const producstSameCodeAndColor:IShopProduct[] = await this.db.getProductsSizesByRefCodeAndRefColorCode(refCode,refColorCode,gender,category);
      this.productSizes = (producstSameCodeAndColor as IShopProduct[]).map( (product : IShopProduct) => {
        return{
          height : product.height,
          width: product.width,
          depth: product.depth
        }
      })

      this.isProductLoaded = true;

    });
    
  }

  private getPhotoURLs(n:number){
      const product_token = "c392cfe1-c92e-4bb8-97f1-cf815a641f01";
      const filename = `${this.productObj.ref_photo_code}-0${n}.jpg`;
      const pathbase =
      "https://firebasestorage.googleapis.com/v0/b/trianon-pwa-v2.appspot.com/o/Shop-Products-Photos";
      const mediafile = `alt=media&token=${product_token}`;
      const photo_thumb_src = `${pathbase}%2Fthumb%2F${filename}?${mediafile}`;
      const photo_hd_src = `${pathbase}%2Fhd%2F${filename}?${mediafile}`;
      return {
        hd : photo_hd_src,
        thumb: photo_thumb_src
      }
  }

  private goToSwiperSlide(n:number){
    //(this.$refs.productSwiper as any).swiper.slideTo(n, 1000, true);
    this.productSlideIndex = n;
  }
}
</script>

<style lang="less">
@import (reference) "./../../shared/styles/index.less";
div.product {

  display: block;
  width: 100%;

  div.view-wrapper {
    display: block;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;

    background-color: black;
    color: white;

    #Font-TrajanPro();
  }

    div.view-wrapper-frame {
    display: block;
    width: 100%;
     box-sizing: border-box;
    background-color: white;
    color: black;
    padding: 1em;
    padding-bottom: 0em;

    div.view-wrapper-frame-content {
      display: block;
      width: 100%;
       box-sizing: border-box;
      border: 1px solid black;
      color: black;
      padding: 0em;
      padding-left: 0em;
      padding-right: 0em;
      padding-bottom: 0em;

     
      div.product-photo-swiper {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 1px;
      }
      div.photos {
        width: 100%;
        padding: 0.5em 0em;
        box-sizing: border-box;
        #Flex-Row-Center-toLeft();
        .photo {
          display: block;
          width: ~"calc(25% - 1em)";
          margin: 0em 0.5em;
          margin-left: 0em;
          border: 1px solid black;
          &:first-child {
            margin-left: 0.5em;
          }
        }
      }
    }
  }

}
</style>