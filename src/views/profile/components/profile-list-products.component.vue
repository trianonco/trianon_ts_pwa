<template>
  <div class="wrapper no-empty-shopping-cart">
    <div class="wrapper-container">
      <!-- --------------------------------------------------------------------------------- -->
      <!-- -- SHOPPING CART ITEMS ---------------------------------------------------------- -->
      <!-- --------------------------------------------------------------------------------- -->
      <div class="cards-shopping-cart-items" v-for="(item,index) of cartProducts" :key="index">
        <CardShoppingCartItemComponent :item="item"></CardShoppingCartItemComponent>
      </div>
      <!-- --------------------------------------------------------------------------------- -->

      <!-- --------------------------------------------------------------------------------- -->
      <!-- -- IN PROCESS ITEMS ------------------------------------------------------------- -->
      <!-- --------------------------------------------------------------------------------- -->
      <!--
      <div class="cards-in-process-items" v-for="(item,index) of inProcessProducts" :key="index">
          {{ index }}
        <CardInProcessItemComponent :item="item"></CardInProcessItemComponent>
      </div>
      -->
      <!-- --------------------------------------------------------------------------------- -->

      <!-- --------------------------------------------------------------------------------- -->
      <!-- -- PURCHASED ITEMS -------------------------------------------------------------- -->
      <!-- --------------------------------------------------------------------------------- -->
      <!--
      <div class="cards-purchased-items" v-for="(item,index) of purchasedProducts" :key="index">
          {{ index }}
        <CardPurchasedItemComponent :item="item"></CardPurchasedItemComponent>
      </div>
      -->
      <!-- --------------------------------------------------------------------------------- -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapGetters, mapActions } from "vuex";

import CardShoppingCartItemComponent from "./cards/card-shopping-cart-item.component.vue";
import CardPurchasedItemComponent from "./cards/card-purchased-item.component.vue";
import CardInProcessItemComponent from "./cards/card-in-process-item.component.vue";

@Component({
  components: {
    CardShoppingCartItemComponent,
    CardPurchasedItemComponent,
    CardInProcessItemComponent
  },
  computed: {
    ...mapState(["products"]),
    ...mapActions(["addItem"])
  }
})
export default class ProfileListProductsComponent extends Vue {
  private created() {
    console.log("CREATED SHOPPING CART");
  }

  get cartProducts() {
    return this.getUnique(
      [...new Set(this.$store.state.shoppingCartModule.products)],
      "ref_photo_code"
    );
  }

  get inProcessProducts() {
    return [...new Set(this.$store.state.shoppingCartModule.products)];
  }

  get purchasedProducts() {
    return [...new Set(this.$store.state.shoppingCartModule.products)];
  }

  getUnique(arr: any[], comp: any) {
    const unique = arr
      .map((e: any) => e[comp])

      // store the keys of the unique objects
      .map((e: any, i: any, final: any) => final.indexOf(e) === i && i)

      // eliminate the dead keys & store unique objects
      .filter((e: any) => arr[e])
      .map((e: any) => arr[e]);

    return unique;
  }
}
</script>
<style lang="less">
@import (reference) "../../../shared/styles/index.less";
div.no-empty-shopping-cart {
  padding-top: 0em !important;
}
</style>