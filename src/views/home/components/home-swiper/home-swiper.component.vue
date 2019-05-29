<template>
  <div class="swiper home-swiper">
    <swiper :options="swiperOption" ref="homeSwiper">
      <!-- slides -->
      <swiper-slide v-for="swiperSlide of swiperSlides" v-bind:key="swiperSlide.id">
        <div v-if="swiperSlide">
          <v-lazy-image :src="swiperSlide.src_hd" :src-placeholder="swiperSlide.src_thumb"/>
        </div>
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import VLazyImage from "v-lazy-image";
import HomeSwiperConfig from "./home-swiper.config";
import HomeSwiperMock from "./home-swiper.mock";
import appDB from "./../../../../shared/database/db";
import { Component, Vue } from "vue-property-decorator";
@Component({
  components: {
    VLazyImage
  }
})
export default class HomeSwiperComponent extends Vue {
  private swiperOption: any = HomeSwiperConfig;
  private swiperSlides: any[] = [];

  private mounted() {
    //this.swiperSlides = HomeSwiperMock;
    const db = new appDB();
    db.getHomeSwiperSlides().then(
      slides => (this.swiperSlides = slides) || console.log(this.swiperSlides)
    );
  }

  private get swiper() {
    return (this.$refs.homeSwiper as any).swiper;
  }
}
</script>

<style lang="less">
@import "./home-swiper.style.less";
#constructor-swiper();
</style>
