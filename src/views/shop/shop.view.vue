<template>
  <div class="view shop">
    <div class="wrapper">
      <!-- Headers -->
      <HeaderComponent/>

      <!-- Products Components -->
      <ShopProductsBannerComponent :gender="gender" :description="description"></ShopProductsBannerComponent>
      <ShopProductsBannerFilterGenderComponent :gender="gender"></ShopProductsBannerFilterGenderComponent>
      <ShopProductsBannerFiltersSortByComponent
        @onSortByName="onSortByName"
        @onSortByColor="onSortByColor"
        @onSortByPrice="onSortByPrice"
      ></ShopProductsBannerFiltersSortByComponent>

      <ShopProductsBannerFilterGenderColorComponent :gender="gender"></ShopProductsBannerFilterGenderColorComponent>
      <ShopProductsListComponent :sortBy="sortBy"></ShopProductsListComponent>

      <!-- Footers -->
      <FooterComponent/>
    </div>
  </div>
</template>

<script lang="ts">
import appDB from "./../../shared/database/db";
import VLazyImage from "v-lazy-image";
import { Component, Vue } from "vue-property-decorator";

import HeaderComponent from "./../../shared/components/header/header.component.vue";
import FooterComponent from "./../../shared/components/footer/footer.component.vue";

import ShopProductsListComponent from "./components/shop-products-list.components.vue";
import ShopProductsBannerComponent from "./components/shop-products-banner.component.vue";
import ShopProductsBannerFilterGenderComponent from "./components/shop-products-banner-filter-gender.component.vue";
import ShopProductsBannerFilterGenderColorComponent from "./components/shop-products-banner-filters-gender-color.component.vue";
import ShopProductsBannerFiltersSortByComponent from "./components/shop-products-banne-filters-sort-by.component.vue";

@Component({
  components: {
    VLazyImage,
    HeaderComponent,
    FooterComponent,
    ShopProductsListComponent,
    ShopProductsBannerComponent,
    ShopProductsBannerFilterGenderComponent,
    ShopProductsBannerFilterGenderColorComponent,
    ShopProductsBannerFiltersSortByComponent
  }
})
export default class ShopComponent extends Vue {
  private description: string = "";
  private category: string = "";
  private gender: string = "";
  private sortBy: any = {};
  private products: any[] = [];

  private mounted() {
    const params = (this.$route as any).params;

    // Route Params
    this.category = params.category ? params.category : "";
    this.description = params.category ? params.category : "";
    this.gender = params.gender ? params.gender : "";

    // Get Shops Items from DB
    //db.getShopProducts().then(products => this.products);
  }

  private onSortByName(isAscendent: any) {
    this.sortBy = {
      by: "name",
      isAscendent: isAscendent
    };
  }
  private onSortByPrice(isAscendent: any) {
    this.sortBy = {
      by: "price",
      isAscendent: isAscendent
    };
  }
  private onSortByColor(keyword: any) {
    this.sortBy = {
      by: "color",
      keyword: keyword
    };
  }
}
</script>

<style lang="less">
@import "./shop.styles.less";
</style>