<template>
  <div class="swiper home-swiper">
    <swiper :options="swiperOption" ref="homeSwiper">
      <!-- slides -->
      <swiper-slide v-for="swiperSlide of swiperSlides" v-bind:key="swiperSlide.id">
        <div v-if="swiperSlide">
          <v-lazy-image
            :src="get_src(swiperSlide.filename_hd)"
            :src-placeholder="get_src(swiperSlide.filename_thumb)"
          />
        </div>
      </swiper-slide>

      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
// -------------------------------------------------------- //
// -- Vue Resources & Core -------------------------------- //
// -------------------------------------------------------- //
import { Component, Vue } from "vue-property-decorator";
// -------------------------------------------------------- //

// -------------------------------------------------------- //
// -- Vendors & Libs -------------------------------------- //
// -------------------------------------------------------- //
import VLazyImage from "v-lazy-image";
// -------------------------------------------------------- //

// -------------------------------------------------------- //
// -- Services & Helpers ---------------------------------- //
// -------------------------------------------------------- //
import ApiDataBase from "./../../../../shared/database/index";
// -------------------------------------------------------- //

// -------------------------------------------------------- //
// -- Subcomponents -------------------------------------- //
// -------------------------------------------------------- //
import HomeSwiperConfig from "./home-swiper.config";
import HomeSwiperMock from "./home-swiper.mock";
// -------------------------------------------------------- //

@Component({
  components: {
    VLazyImage
  }
})
export default class HomeSwiperComponent extends Vue {
  private swiperOption: any = HomeSwiperConfig;
  private swiperSlides: any[] = [];

  private async mounted() {
    //
    // Set Settings-DB Database
    const db = new ApiDataBase();
    db.init();
    db.setDatabaseByName("SETTINGS-DB");

    const settingsDB: any = db.getDatabase();
    const homeSwiperSlides = await settingsDB.getSwiperSlides();
    this.swiperSlides = homeSwiperSlides;
  }

  private get_src(filename: string): string {
    const auth: any = JSON.parse(sessionStorage.getItem("auth") + "");
    const base: string =
      "https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/";
    const folder: string = "Home-Swiper";
    const token: string = auth
      ? auth.token
      : "82081afa-7490-4f14-a187-a2f7cf74a50d";
    return `${base}${folder}%2F${filename}?alt=media&token=${token}`;
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
