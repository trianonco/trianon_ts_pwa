<template>
  <div class="product price">

      
      <div class="price" v-if="price && discount == 0">{{ parseFloat(price) | toCurrency }}</div>
      
      
      <div class="price" v-if="price && (discount && discount!= 0)">

        {{ (parseFloat(price)*(1 - 0.01*parseFloat(discount || 0))) | toCurrency}} 
        <br>
        <div v-if="price && discount != 0"  style="color: #a6a6a6;text-decoration: line-through;font-size: 20px;">
          {{ parseFloat(price) | toCurrency}}
        </div>

      </div>
     
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
  @Prop()
 discount!: number;
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