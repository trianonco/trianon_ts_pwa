<template>
  <div class="product swiper">
    <div class="product-photo-swiper">
      <swiper :options="swiperOption" ref="productSwiper">
        <!-- slides -->
        <swiper-slide
          v-for="(swiperImage, swiperIndex) of getProductPhotos()"
          v-bind:key="swiperImage.hd"
        >
          <img
            :class="'photo'"
            :src="swiperImage.hd"
            @error="imgLoadError(swiperImage.hd)"
            onerror="this.onerror=null; this.style.display = 'none'"
            width="100%"
          >
        </swiper-slide>

        <!-- If we need navigation buttons -->
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";

@Component({
  components: {
    VLazyImage
  }
})
export default class ProductSwiperComponent extends Vue {
  @Prop()
  photos!: any[];

  @Prop()
  slideIndex!: number;

  @Watch("slideIndex")
  onPropertyChanged(value: number, oldValue: number) {
    this.productSwiperGoToSlide(value);
  }

  private photosOnErrorsIndex: number[] = [];
  private swiperImages = [];
  private swiperOption = {
    effect: "slide",
    autoplay: {
      delay: 5000
    },
    slidesPerView: 1,

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  };
  private mounted() {}

  private productSwiperGoToSlide(k: number) {
    ((this.$refs.productSwiper as any).swiper as any).slideTo(k, 1000, true);
  }

  private imgLoadError(hd_src: string) {
    const index = this.photos.findIndex(photo => photo.hd === hd_src);
    this.photosOnErrorsIndex.push(index);
  }

  private getProductPhotos() {
    return this.photos.filter(
      (photo, index: number) => !this.photosOnErrorsIndex.includes(index)
    );
  }
}
</script>

<style lang="less" scoped>
@import (reference) "./../../../shared/styles/index.less";
div.product.swiper {
  div.product-photo-swiper {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 1px;
  }

  .swiper-button-prev,
  .swiper-button-next {
    height: 27px;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }
}

@media (min-width: 600px) {
  div.product.swiper {
    border: 1px solid gray;
  }
}
</style>