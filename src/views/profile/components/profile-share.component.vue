<template>
  <div class="login-share" :class="getThemeClass()">
    <div class="login-share-wrapper">
      <h1>{{ message }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileShareComponent",
  props: ["theme"],
  methods: {
    getThemeClass() {
      if (this.theme && this.theme == "gray") {
        return "theme-gray";
      } else {
        return "theme-gold";
      }
    }
  },
  mounted() {},
  data() {
    return {
      message: "¡COMPARTE Y GANA DESCUENTOS!"
    };
  }
};
</script>

<style lang="less">
@import (reference) "./../../../shared/styles/index.less";
div.login-share {
  display: block;
  width: 100%;
  height: @size-login-share-height;

  background-repeat: repeat-x;
  background-size: contain;

  #Flex-Col-Center-Center();

  &.theme-gold {
    background-color: @color-yellow;
    background-image: url("./../../../shared/assets/images/signin/gold-bg.png");
  }
  &.theme-gray {
    background-color: @color-gray;
    background-image: none;
  }

  &-wrapper {
    display: block;
    width: fit-content;

    box-sizing: border-box;
    padding: 1em;

    margin: 0 auto;

    background-color: black;
    color: @color-white;

    #Font-TrajanPro("normal");
    #Font-Title();
  }
}
</style>
