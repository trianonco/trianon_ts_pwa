<template>
  <div class="swiper home-desktop-cover">
    <div class="female-category">
      <div class="button">DAMA</div>
    </div>
    <div class="male-category">
      <div class="button">HOMBRE</div>
    </div>
  </div>
</template>

<script lang="ts">
// -------------------------------------------------------- //
// -- Vue Resources & Core -------------------------------- //
// -------------------------------------------------------- //
import { Component, Vue } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";
// -------------------------------------------------------- //

@Component({
  components: {
    VLazyImage
  }
})
export default class HomeSwiperComponent extends Vue {
  private async mounted() {}
}
</script>

<style lang="less">
@import "./home-desktop-cover.style.less";
div.home-desktop-cover {
  display: none;
}
@media (min-width: 600px) {
  #constructor-desktop-cover();
}
</style>
