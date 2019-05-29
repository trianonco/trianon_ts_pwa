<template>
  <div class="product price">
  <div class="price" v-if="price">{{ parseFloat(price) | toCurrency }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";

@Component({
  components: {
    VLazyImage
  }
})
export default class ProductHeaderComponent extends Vue {
  @Prop()
 price!: number;
  private mounted() {}
}
</script>

<style lang="less" scoped>
@import (reference) "./../../../shared/styles/index.less";
div.product.price {
      .price,
      .description {
        display: block;
        width: 100%;
        background-color: @color-gray-light;
        padding: 0.75em 0em;
        margin: 0em;
        margin-bottom:1px;
        color: white;
        line-height: 1;
        font-size: 1.5em;
        letter-spacing:5px;
        text-align: center;
      }
}
</style>