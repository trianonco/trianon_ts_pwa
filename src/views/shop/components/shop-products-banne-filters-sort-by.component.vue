<template>
  <div class="products-filters-sort-by">
    <div class="products-filters-sort-by-wrapper">
      <h1>Filtrar por :</h1>

      <div
        class="filter"
        :class="isFilterActiveByName('price')"
        @click="setFilterActiveByName('price')"
      >
        <span>PRECIO</span>
        <span
          class="triangle"
          style="position: absolute;top: 13px;left: 25px;"
          v-if="UX.isModalPrice"
        ></span>
      </div>

      <div
        class="filter"
        :class="isFilterActiveByName('color')"
        @click="setFilterActiveByName('color')"
      >
        <span>COLOR</span>
        <span
          class="triangle"
          style="position: absolute;top: 13px;left: 18px;"
          v-if="UX.isModalColor"
        ></span>
      </div>

      <div class="filter" :class="isFilterActiveByName('az')" @click="setFilterActiveByName('az')">
        <span>A-Z</span>
        <span
          class="triangle"
          style="position: absolute;top: 13px;left: 3px;"
          v-if="false && UX.isModalAZ"
        ></span>
      </div>

      <div class="filter" :class="isFilterActiveByName('za')" @click="setFilterActiveByName('za')">
        <span>Z-A</span>
        <span
          class="triangle"
          style="position: absolute;top: 13px;left: 1px;"
          v-if="false && UX.isModalZA"
        ></span>
      </div>
    </div>

    <div class="products-filters-sort-by-modal" v-if="UX.isModalActive && UX.isModalPrice">
      <div class="products-filters-sort-by-modal-row prices">
        <div class="price active" @click="doFilterByPriceFromBiggerToLower()">DE MAYOR A MENOR</div>
        <div class="price" @click="doFilterByPriceFromLowerToBigger()">DE MENOR A MAYOR</div>
      </div>
    </div>

    <div class="products-filters-sort-by-modal" v-if="UX.isModalActive && UX.isModalColor">
      <div class="products-filters-sort-by-modal-row search-bar">
        <img src="./../../../shared/assets/images/search/lupa-icon.png">
        <input type="text" v-model="UX.FilterColor" @change="onColorTyped">
      </div>
      <div class="products-filters-sort-by-modal-row"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class ShopProductsBannerFiltersSortByComponent extends Vue {
  private filter: string = "";
  private UX: any = {
    isModalActive: false,
    isModalPrice: false,
    isModalColor: false,
    isModalAZ: false,
    isModalZA: false,
    FilterPrice: 0,
    FilterColor: "",
    FilterName: 0
  };

  private onColorTyped() {
    this.$emit("onSortByColor", this.UX.FilterColor);
  }
  private isFilterActiveByName(filterName: string) {
    if (this.filter === filterName) {
      return "active";
    } else {
      return "no-active";
    }
  }

  private doFilterByPriceFromBiggerToLower() {
    this.UX.FilterPrice = 1;
    this.$emit("onSortByPrice", 1);
  }
  private doFilterByPriceFromLowerToBigger() {
    this.UX.FilterPrice = -1;
    this.$emit("onSortByPrice", -1);
  }

  private setFilterActiveByName(filterName: string) {
    if (filterName === "price") {
      this.UX.isModalPrice = this.UX.isModalPrice ? false : true;
    } else {
      this.UX.isModalPrice = false;
    }

    if (filterName === "color") {
      this.UX.isModalColor = this.UX.isModalColor ? false : true;
    } else {
      this.UX.isModalColor = false;
    }

    if (filterName === "az") {
      this.UX.FilterName = 1;
      this.UX.isModalAZ = this.UX.isModalAZ ? false : true;
    } else {
      this.UX.isModalAZ = false;
    }

    if (filterName === "za") {
      this.UX.FilterName = -1;
      this.UX.isModalZA = this.UX.isModalZA ? false : true;
    } else {
      this.UX.isModalZA = false;
    }

    if (
      this.UX.isModalPrice ||
      this.UX.isModalColor ||
      this.UX.isModalAZ ||
      this.UX.isModalZA
    ) {
      this.UX.isModalActive = true;
    } else {
      this.UX.isModalActive = false;
    }

    if (this.UX.isModalPrice) {
      this.$emit("onSortByPrice", this.UX.FilterPrice);
    }

    if (this.UX.isModalColor) {
      this.$emit("onSortByColor", this.UX.FilterColor);
    }

    if (this.UX.isModalAZ || this.UX.isModalZA) {
      this.$emit("onSortByName", this.UX.FilterName);
    }
  }
}
</script>

<style lang="less" scoped>
@import (reference) "./../../../shared/styles/index.less";

.triangle {
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 10px 15px 10px;
  border-color: transparent transparent gray transparent;
}

div.products-filters-sort-by {
  position: relative;
  display: block;
  width: 100%;
}

div.products-filters-sort-by-wrapper {
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
    position: relative;
    &.active {
      color: @color-yellow;
    }
  }
}

div.products-filters-sort-by-modal {
  display: block;
  width: 100%;
  position: absolute;
  z-index: 100000;
  top: 35px;
  left: 0px;
  #Font-TrajanPro();

  background-color: gray;
  color: white;
  box-sizing: border-box;
  padding: 0.25em;
  font-size: 12px;

  #Flex-Row-Extremes();

  .filter {
    text-decoration: underline;
    &.active {
      color: @color-yellow;
    }
  }
}

div.products-filters-sort-by-modal-row {
  &.search-bar {
    display: block;
    width: 100%;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    img {
      width: 2em;
      padding: 0.25em 1em;
    }

    input {
      padding: 0.25em 1em;
      background: none;
      border: none;
      outline: none;
      border-left: 1px solid white;
      border-bottom: 1px solid white;
      color: white;
    }
  }

  &.prices {
    display: block;
    width: 100%;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;

    .price {
      padding: 1em;
      font-size: 0.85em;

      &.active {
        font-weight: 900;
      }
    }
  }
}

@media (min-width: 600px) {
  div.products-filters-sort-by {
    position: relative;
    display: block;
    width: 500px;
    margin: 0 auto;
  }
  div.products-filters-sort-by-modal {
    display: block;
    width: 80%;
  }
}
</style>