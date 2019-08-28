<template>
  <div class="product info-banner">
    <br />
    <div class="product-reference">Referencia : {{ref_code}} - {{ref_color_code}}</div>
    <br />

    <div v-if="sizes.length > 1" class="mobile">
      <select class="form-control" v-model="selected" @change="changeSize">
        <option v-for="(size, index) of sizes" v-bind:value="index" v-bind:key="index">
          <span
            v-if="size.size.height && size.size.height !== '-' && size.size.height !== 'NA'"
          >{{ size.size.height.includes('T') ? 'TALLA' : 'Alto' }}: {{size.size.height}}</span>
          <span
            v-if="size.size.width  && size.size.width  !== '-' && size.size.width  !== 'NA'"
          >, Ancho: {{size.size.width}}</span>
          <span
            v-if="size.size.depth  && size.size.depth  !== '-' && size.size.depth  !== '- ' && size.size.depth  !== ' -' && size.size.depth  !== 'NA'"
          >, Profundo : {{size.size.depth}}</span>
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

  private mounted() {
    if (this.sizes && this.sizes[0]) {
      const size = JSON.parse(JSON.stringify(this.sizes[0]) + "");
      this.$emit("onChangeSize", size);
    }
  }

  private changeSize($event: any) {
    if (this.sizes && this.selected) {
      const size = JSON.parse(JSON.stringify(this.sizes[this.selected]) + "");
      this.$emit("onChangeSize", size);
    }
  }
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
    width: 80%;
    box-sizing: border-box;
    text-align: center;
    option {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
}
.mobile {
  display: inherit;
}
@media (min-width: 600px) {
  .mobile {
    display: none;
  }
}
</style>