<template>
  <div class="wrapper no-empty-shopping-cart">
    <div class="wrapper-container">
      <!-- List of ShoppingCart Items -->
      <h1>LIST OF SHOPPÍNG CART ITEMS</h1>
      <!-- List of InProcess Items -->
      <!-- List of Purchased Items -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapGetters, mapActions } from "vuex";
@Component({
  components: {},
  computed: {
    ...mapState(["products"]),
    ...mapActions(["addItem"])
  }
})
export default class ProfileListShoppingCart extends Vue {
  private created() {
    console.log("CREATED SHOPPING CART");
  }
}
</script>
<style lang="less">
@import (reference) "../../../shared/styles/index.less";
div.no-empty-shopping-cart {
}
</style>