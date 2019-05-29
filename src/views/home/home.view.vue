<template>
  <div class="view home">
    <LoaderComponent/>
    <div class="view-wrapper">
      <HeaderComponent :theme="headerTheme"/>
      <HomeSwiperComponent></HomeSwiperComponent>
      <HomeGenderButtonsComponent></HomeGenderButtonsComponent>
      <HomeSearchBarComponent></HomeSearchBarComponent>
      <HomeBannerAuthorizedDistributorsComponent></HomeBannerAuthorizedDistributorsComponent>
      <HomeBannerAuthorizedShopsComponent></HomeBannerAuthorizedShopsComponent>
      <HomeBannerAboutUsComponent></HomeBannerAboutUsComponent>
      <HomeBannerCreditCardsComponent></HomeBannerCreditCardsComponent>
      <HomeBannerFreeShippingComponent></HomeBannerFreeShippingComponent>
      <HomeBannerGuaranteeComponent></HomeBannerGuaranteeComponent>
      <HomeBannerAddressComponent></HomeBannerAddressComponent>
      <FooterComponent/>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";

import HeaderComponent from "./../../shared/components/header/header.component.vue";
import FooterComponent from "./../../shared/components/footer/footer.component.vue";
import LoaderComponent from "./../../shared/components/loader/loader.component.vue";
import HomeSwiperComponent from "./components/home-swiper/home-swiper.component.vue";
import HomeGenderButtonsComponent from "./components/home-gender-buttons/home-gender-buttons.component.vue";
import HomeSearchBarComponent from "./components/home-search/home-search.component.vue";
import HomeBannerAuthorizedDistributorsComponent from "./components/home-banners/banner-authorized-distributors.component.vue";
import HomeBannerAuthorizedShopsComponent from "./components/home-banners/banner-authorized-shops.component.vue";
import HomeBannerAboutUsComponent from "./components/home-banners/banner-about-us.component.vue";
import HomeBannerCreditCardsComponent from "./components/home-banners/banner-credit-cards.component.vue";
import HomeBannerFreeShippingComponent from "./components/home-banners/banner-free-shipping.component.vue";
import HomeBannerGuaranteeComponent from "./components/home-banners/banner-guarantee.component.vue";
import HomeBannerAddressComponent from "./components/home-banners/banner-address.component.vue";

@Component({
  components: {
    VLazyImage,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    HomeSwiperComponent,
    HomeGenderButtonsComponent,
    HomeSearchBarComponent,
    HomeBannerAuthorizedDistributorsComponent,
    HomeBannerAuthorizedShopsComponent,
    HomeBannerAboutUsComponent,
    HomeBannerCreditCardsComponent,
    HomeBannerFreeShippingComponent,
    HomeBannerGuaranteeComponent,
    HomeBannerAddressComponent
  }
})
export default class HomeComponent extends Vue {
  private headerTheme: any = {
    color: "light",
    background: "dark"
  };
}
</script>

<style lang="less">
div.cover {
  display: block;
  width: 100%;
  height: 100px;
  img {
    width: 100%;
  }
}
</style>  