<template>
  <div class="product photos">
    <div class="photos">
      <img
        class="photo"
        @error="imgLoadError(0)"
        @click="productSwiperGoToSlide(0)"
        onerror="this.onerror=null; this.style.display = 'none'"
        :src="photos[0].thumb"
      >
      <img
        onerror="this.onerror=null; this.style.display = 'none'"
        class="photo"
        @click="productSwiperGoToSlide(1)"
        @error="imgLoadError(1)"
        :src="photos[1].thumb"
      >
      <img
        class="photo"
        @error="imgLoadError(2)"
        @click="productSwiperGoToSlide(2)"
        onerror="this.onerror=null; this.style.display = 'none'"
        :src="photos[2].thumb"
      >
      <img
        class="photo"
        @error="imgLoadError(3)"
        @click="productSwiperGoToSlide(3)"
        onerror="this.onerror=null; this.style.display = 'none'"
        :src="photos[3].thumb"
      >
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
export default class ProductPhotosComponent extends Vue {
  @Prop()
  photos!: any[];

  private mounted() {}
  private imgLoadError(index: number) {
    //this.photosOnErrorsIndex.push(index);
  }
  private productSwiperGoToSlide(k: number) {
    this.$emit("goToSwiperSlide", k);
  }
}
</script>

<style lang="less" scoped>
@import (reference) "./../../../shared/styles/index.less";

@media (min-width: 600px) {
  .product.photos .photos .photo {
    margin-left: 0px !important;
    border: 1px solid gray !important;
  }
}
</style>