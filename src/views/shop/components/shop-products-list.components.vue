<template>
  <div class="products-list">
    <div class="goUpButton" v-if="!isFirstPage" @click="goScrollTop()">
      <i class="fas fa-arrow-up"></i>
    </div>

    <!--
    {{ productsDB }}
    -->

    <ShopProductsListItemComponent
      v-for="product in products"
      v-bind:key="product.ref"
      :product="product"
    ></ShopProductsListItemComponent>

    <infinite-loading @infinite="infiniteHandler">
      <div slot="no-results">.</div>
      <div slot="no-more">-</div>
    </infinite-loading>

    <!--
    <ShopProductsListItemComponent
      v-for="product in productsDB"
      v-bind:key="product.ref"
      :product="product"
    ></ShopProductsListItemComponent>
    -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { toIShopProducts } from "../../../shared/models/toIShopProduct.model";

import appDB from "./../../../shared/database/db";
import InfiniteLoading from "vue-infinite-loading";
import IShopProduct from "../../../shared/models/IShopProduct.model";
import ShopProductsListItemComponent from "./shop-products-list-item.component.vue";

import axios from "axios";

const api = "//hn.algolia.com/api/v1/search_by_date?tags=story";

@Component({
  components: {
    ShopProductsListItemComponent,
    InfiniteLoading
  }
})
export default class ShopProductsListComponent extends Vue {
  @Prop()
  sortBy!: any;

  private products: any = [];
  private productsDB: any = [];
  private productsPageSize: number = 6;

  private isFirstPage: boolean = true;

  private page: number = 1;
  private list: any[] = [];

  private handleScroll($event: any) {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition < 50) {
      this.isFirstPage = true;
    } else {
      this.isFirstPage = false;
    }
  }

  private created() {
    window.addEventListener("scroll", this.handleScroll);
  }

  private destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  private mounted() {
    // Database
    const db = new appDB();
    const params = (this.$route as any).params;

    // Route Params
    const category = params.category ? params.category : "";
    const description = params.category ? params.category : "";
    const gender = params.gender ? params.gender : "";

    db.getShopProductsByCategoryAndGender(category, gender).then(
      async (productsFromDB: any) => {
        const products: IShopProduct[] = await toIShopProducts(productsFromDB);
        const unique = this.removeDuplicates(products, "ref_photo_code");
        this.productsDB = unique;
        this.products = this.productsDB.slice(0, this.productsPageSize);
      }
    );
  }

  private removeDuplicates(myArr: any[], prop: string) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }

  private goScrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  private infiniteHandler($state: any) {
    setTimeout(() => {
      if (
        (this.products as any[]).length !== (this.productsDB as any[]).length
      ) {
        this.page += 1;
        const lastProductIndex = this.productsPageSize * this.page;
        this.products = this.productsDB.slice(0, lastProductIndex);
        $state.loaded();
      } else {
        $state.complete();
      }
    }, 0);
  }
}
</script>

<style lang="less">
@import (reference) "./../../../shared/styles/index.less";
div.products-list {
  min-height: 50vh;
  div.goUpButton {
    display: block;
    #Flex-Row-Center-Center();
    width: 3em;
    height: 3em;
    z-index: 1000;
    border-radius: 100%;
    background-color: rgba(155, 155, 155, 0.45);
    color: rgba(220, 220, 220, 0.8);
    position: fixed;
    bottom: 1em;
    right: 1em;
  }
}
</style>