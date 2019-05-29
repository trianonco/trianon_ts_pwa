<template>
  <div class="product description">
  <div class="description" v-if="description && color">  

  {{ description }}
  <br>
  {{ color }}
  
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
export default class ProductDescriptionComponent extends Vue {
  @Prop()
 description!: string;

   @Prop()
color!: string;

  private mounted() {}
}
</script>

<style lang="less" scoped>
@import (reference) "./../../../shared/styles/index.less";
div.product.description {
      .price,
      .description {
          display: block;
        width: 100%;
        background-color: @color-gray-light;
        padding: 1em 0em;
        margin: 0em;
        margin-bottom:1px;
        color: white;
        line-height: 1.55em;
        font-size: 1em;
        letter-spacing:5px;
        text-align: center;
        font-weight: 100 !important;

          font-family: 'TrajanPro';
  font-weight: normal;
  font-style: normal;

      

      }
}
</style>