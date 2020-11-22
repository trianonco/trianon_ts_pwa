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
  },
  metaInfo() {
    return {
      title: " TRIANON | Fabricación de marroquinería y accesorios en cuero ",
      meta: [
        { name: "author", content: "Jorge Luis Mayorga Taborda" },
        {
          name: "description",
          content:
            "TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."
        },
        {
          name: "keyword",
          content:
            "billeteras,billeteras colombia,envio a toda colombia,trianon,trianonshoponline,pagosonline,tienda en linea trianon,bolsos,bolsos en cuero,regalo mama ,regalo papa colombia,regalo navidad colombia,pago seguro en linea,cinturon trianon,dia del padre,billete"
        },

        // OpenGraph data (Most widely used)
        {
          property: "og:title",
          content:
            "TRIANON | Fabricación de marroquinería y accesorios en cuero "
        },
        { property: "og:site_name", content: "TRIANON" },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: "https://www.trianon.com.co/"
        },
        {
          property: "og:image",
          content: "https://www.trianon.com.co/img/logo.01e54327.png"
        },
        // Often the same as your meta description, but not always.
        {
          property: "og:description",
          content:
            "TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."
        },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: "https://www.trianon.com.co/"
        },
        {
          name: "twitter:title",
          content:
            "TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."
        },
        {
          name: "twitter:description",
          content:
            "TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."
        },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@trianonco" },
        {
          name: "twitter:image:src",
          content: "https://www.trianon.com.co/img/logo.01e54327.png"
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: "My Page Title ← My Site" },
        { itemprop: "description", content: "I have things here on my site." },
        {
          itemprop: "image",
          content: "https://www.trianon.com.co/img/logo.01e54327.png"
        }
      ]
    };
  }
})
export default class ShopComponent extends Vue {
  private description: string = "";
  private category: string = "";
  private gender: string = "";
  private sortBy: any = {};
  private products: any[] = [];

  private mounted() {
    (this as any).$ga.page("/shop");
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