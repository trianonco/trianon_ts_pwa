<template>
  <div class="wrapper no-empty-shopping-cart">
    <div class="wrapper-container">
      <!-- --------------------------------------------------------------------------------- -->
      <!-- -- SHOPPING CART ITEMS ---------------------------------------------------------- -->
      <!-- --------------------------------------------------------------------------------- -->
      <!--
      <h4>CARRITO DE COMPRAS</h4>
      -->
      <div class="cards-shopping-cart-items" v-for="(item,index) of cartProducts" :key="index">
        <CardShoppingCartItemComponent :item="item"></CardShoppingCartItemComponent>
      </div>

      <!-- --------------------------------------------------------------------------------- -->

      <!-- --------------------------------------------------------------------------------- -->
      <!-- -- IN PROCESS ITEMS ------------------------------------------------------------- -->
      <!-- --------------------------------------------------------------------------------- -->
      <!--
      <div style="background-color:black;width:100%; padding:0.33em;" />
      <h4>COMPRAS EN PROCESO</h4>
      -->
      <div class="cards-in-process-items" v-for="(item,index) of inProcessProducts" :key="index">
        <CardInProcessItemComponent :item="item"></CardInProcessItemComponent>
      </div>

      <!-- --------------------------------------------------------------------------------- -->

      <!-- --------------------------------------------------------------------------------- -->
      <!-- -- PURCHASED ITEMS -------------------------------------------------------------- -->
      <!-- --------------------------------------------------------------------------------- -->

      <!--
      <div style="background-color:black;width:100%; padding:0.33em;" />
      <h4>COMPRAS FINALIZADAS</h4>
      -->

      <div class="cards-purchased-items" v-for="(item,index) of purchasedProducts" :key="index">
        <CardPurchasedItemComponent :item="item"></CardPurchasedItemComponent>
      </div>

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
    return this.getUnique(this.$store.state.inProcessCartModule.products, "ID");
  }

  get purchasedProducts() {
    return this.getUnique(this.$store.state.inProcessCartModule.products, "ID");
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

  h4 {
    padding: 0.5em;
  }
}
</style>