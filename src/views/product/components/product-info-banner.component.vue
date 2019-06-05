<template>
  <div class="product info-banner">
    <br>
    <div class="product-reference">Referencia : {{ref_code}} - {{ref_color_code}}</div>
    <br>
    <div v-if="sizes.length > 1">
      <select class="form-control" v-model="selected" @change="changeSize">
        <option v-for="(size, index) of sizes" v-bind:value="index" v-bind:key="index">
          <span
            v-if="size.height && size.height !== '-' && size.height !== 'NA'"
          >Alto : {{size.height}}</span>
          <span
            v-if="size.width  && size.width  !== '-' && size.width  !== 'NA'"
          >, Ancho: {{size.width}}</span>
          <span
            v-if="size.depth  && size.depth  !== '-' && size.depth  !== 'NA'"
          >, Profundo : {{size.depth}}</span>
        </option>
      </select>
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
export default class ProductInfoBannerComponent extends Vue {
  @Prop()
  sizes!: any[];

  @Prop()
  ref_code!: string;

  @Prop()
  ref_color_code!: string;

  @Prop()
  ref_size_code!: string;

  public selected: number = 0;

  private mounted() {}

  private changeSize() {}
}
</script>

<style lang="less">
@import (reference) "./../../../shared/styles/index.less";
div.product.info-banner {
  display: block;
  text-align: center;
  select {
    background: none;
    padding: 1em;
    margin: 1em;
    font-family: inherit;
    color: gray;
  }
}
</style>