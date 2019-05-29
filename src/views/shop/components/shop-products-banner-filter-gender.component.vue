<template>
  <div class="products-filters-gender-color">
    <div class="products-filters-gender-color-male" v-if="gender === 'HOMBRE'">
      <div class="yellow"></div>
      <div class="blue"></div>
    </div>
    <div class="products-filters-gender-color-female" v-if="gender === 'DAMA'">
      <div class="yellow"></div>
      <div class="red"></div>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class ShopProductsBannerFilterGenderComponent extends Vue {
  @Prop()
  gender!: string;
}
</script>

<style lang="less" scoped>
@import (reference) "./../../../shared/styles/index.less";

div.products-filters-gender-color {
  display: block;
  width: 100vw;
  height: 5px;
  overflow: hidden;
  &-male {
    display: block;
    width: 100vw;
    height: 5px;
    overflow: hidden;
    div {
      display: inline-block;
      width: 50%;
      height: 5px;
      position: relative;
      top: -8px;

      &.red {
        background-color: @color-red;
      }
      &.blue {
        background-color: @color-blue;
      }
      &.yellow {
        background-color: @color-yellow;
      }
    }
  }
  &-female {
    display: block;
    width: 100vw;
    height: 5px;
    overflow: hidden;

    div {
      display: inline-block;
      width: 50%;
      height: 5px;
      position: relative;
      top: -8px;
      &.red {
        background-color: @color-red;
      }
      &.blue {
        background-color: @color-blue;
      }
      &.yellow {
        background-color: @color-yellow;
      }
    }
  }
}
</style>