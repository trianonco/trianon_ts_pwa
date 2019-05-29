<template>
  <div class="products-list">
    <ShopProductsListItemComponent
      v-for="product in productsDB"
      v-bind:key="product.ref"
      :product="product"
    ></ShopProductsListItemComponent>
  </div>
</template>

<script lang="ts">
import appDB from "./../../../shared/database/db";
import { Component, Vue, Prop } from "vue-property-decorator";
import ShopProductsListItemComponent from "./shop-products-list-item.component.vue";
import IShopProduct from "../../../shared/models/IShopProduct.model";
import { toIShopProducts } from "../../../shared/models/toIShopProduct.model";
@Component({
  components: {
    ShopProductsListItemComponent
  }
})
export default class ShopProductsListComponent extends Vue {
  @Prop()
  sortBy!: any;

  private products: any = [];
  private productsDB: any = [];

  private mounted() {
    // Database
    const db = new appDB();
    const params = (this.$route as any).params;

    // Route Params
    const category = params.category ? params.category : "";
    const description = params.category ? params.category : "";
    const gender = params.gender ? params.gender : "";

    const n = 100;
    db.getShopProductsByCategoryAndGender(category, gender).then(
      async (productsFromDB: any) => {
        const products: IShopProduct[] = await toIShopProducts(productsFromDB);
        const unique = this.removeDuplicates(products, "ref_photo_code");
        this.productsDB = unique;
      }
    );
  }

  private removeDuplicates(myArr: any[], prop: string) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
}
</script>

<style lang="less" scoped>
@import (reference) "./../../../shared/styles/index.less";
</style>