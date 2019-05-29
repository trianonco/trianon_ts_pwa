<template>
  <div class="products-filters-sort-by">
    <h1>Filtrar por :</h1>
    <div
      class="filter"
      :class="isFilterActiveByName('price')"
      @click="setFilterActiveByName('price')"
    >PRECIO</div>
    <div
      class="filter"
      :class="isFilterActiveByName('color')"
      @click="setFilterActiveByName('color')"
    >COLOR</div>
    <div class="filter" :class="isFilterActiveByName('az')" @click="setFilterActiveByName('az')">A-Z</div>
    <div class="filter" :class="isFilterActiveByName('za')" @click="setFilterActiveByName('za')">Z-A</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class ShopProductsBannerFiltersSortByComponent extends Vue {
  private filter: string = "";

  private isFilterActiveByName(filterName: string) {
    if (this.filter === filterName) {
      return "active";
    } else {
      return "no-active";
    }
  }

  private setFilterActiveByName(filterName: string) {
    this.$emit("onSortByName", true);
    this.$emit("onSortByColor", false);
    this.$emit("onSortByPrice", true);
  }
}
</script>

<style lang="less" scoped>
@import (reference) "./../../../shared/styles/index.less";

div.products-filters-sort-by {
  #Font-TrajanPro();

  background-color: white;
  color: gray;

  display: block;
  width: 100%;

  box-sizing: border-box;

  padding: 1em;

  font-size: 12px;

  #Flex-Row-Extremes();

  .filter {
    text-decoration: underline;
    &.active {
      color: @color-yellow;
    }
  }
}
</style>