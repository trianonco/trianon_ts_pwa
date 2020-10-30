<template>
  <div class="view home">
    <LoaderComponent @isLoaded="isLoaded = true" />
    <div class="view-wrapper">
      <HeaderComponent :theme="headerTheme" />


      <img class="covid-banner mobile" src="../../shared/assets/images/Sin título-3.png">
      <img class="covid-banner desktop" src="../../shared/assets/images/Sin título-4.png">

      <HomeSwiperComponent></HomeSwiperComponent>
      <HomeDekstopCoverComponent></HomeDekstopCoverComponent>
      <HomeDesktopProductsSwiperComponent></HomeDesktopProductsSwiperComponent>

      <HomeGenderButtonsComponent></HomeGenderButtonsComponent>
      <HomeSearchBarComponent></HomeSearchBarComponent>
      <HomeBannerAuthorizedDistributorsComponent></HomeBannerAuthorizedDistributorsComponent>
      <HomeBannerAuthorizedShopsComponent></HomeBannerAuthorizedShopsComponent>
      <HomeBannerAboutUsComponent></HomeBannerAboutUsComponent>
      <HomeBannerCreditCardsComponent></HomeBannerCreditCardsComponent>
      <HomeBannerFreeShippingComponent></HomeBannerFreeShippingComponent>
      <HomeBannerGuaranteeComponent></HomeBannerGuaranteeComponent>
      <HomeBannerAddressComponent></HomeBannerAddressComponent>

      <FooterComponent />
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
import HomeDekstopCoverComponent from "./components/home-desktop-cover/home-desktop-cover.component.vue";
import HomeDesktopProductsSwiperComponent from "./components/home-desktop-products-swiper/home-desktop-products-swiper.component.vue";
import HomeGenderButtonsComponent from "./components/home-gender-buttons/home-gender-buttons.component.vue";
import HomeSearchBarComponent from "./components/home-search/home-search.component.vue";
import HomeBannerAuthorizedDistributorsComponent from "./components/home-banners/banner-authorized-distributors.component.vue";
import HomeBannerAuthorizedShopsComponent from "./components/home-banners/banner-authorized-shops.component.vue";
import HomeBannerAboutUsComponent from "./components/home-banners/banner-about-us.component.vue";
import HomeBannerCreditCardsComponent from "./components/home-banners/banner-credit-cards.component.vue";
import HomeBannerFreeShippingComponent from "./components/home-banners/banner-free-shipping.component.vue";
import HomeBannerGuaranteeComponent from "./components/home-banners/banner-guarantee.component.vue";
import HomeBannerAddressComponent from "./components/home-banners/banner-address.component.vue";
/*
,
  metaInfo() {
    return {
      title: " TRIANON | Fabricación de marroquinería y accesorios en cuero ",
      meta: [
        { name: "author", content: "Jorge Luis Mayorga Taborda" },
        {
          name: "description",
          content:
            "TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."
        },
        {
          name: "keyword",
          content:
            "billeteras,billeteras colombia,envio a toda colombia,trianon,trianonshoponline,pagosonline,tienda en linea trianon,bolsos,bolsos en cuero,regalo mama ,regalo papa colombia,regalo navidad colombia,pago seguro en linea,cinturon trianon,dia del padre,billete"
        },

        // OpenGraph data (Most widely used)
        {
          property: "og:title",
          content:
            "TRIANON | Fabricación de marroquinería y accesorios en cuero "
        },
        { property: "og:site_name", content: "TRIANON" },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: "https://www.trianon.com.co/"
        },
        {
          property: "og:image",
          content: "https://www.trianon.com.co/img/logo.01e54327.png"
        },
        // Often the same as your meta description, but not always.
        {
          property: "og:description",
          content:
            "TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."
        },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: "https://www.trianon.com.co/"
        },
        {
          name: "twitter:title",
          content:
            "TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."
        },
        {
          name: "twitter:description",
          content:
            "TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."
        },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@trianonco" },
        {
          name: "twitter:image:src",
          content: "https://www.trianon.com.co/img/logo.01e54327.png"
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: "My Page Title ← My Site" },
        { itemprop: "description", content: "I have things here on my site." },
        {
          itemprop: "image",
          content: "https://www.trianon.com.co/img/logo.01e54327.png"
        }
      ]
    };
  }
  */
@Component({
  components: {
    VLazyImage,
    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    HomeDekstopCoverComponent,
    HomeDesktopProductsSwiperComponent,
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
  private isLoaded: boolean = false;
  private mounted() {
    (this as any).$ga.page("/home");
  }
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

.covid-banner.desktop{
  width: 100%;
  display: none;
}
.covid-banner.mobile{
  width: 100%;
  display: block;
}
@media only screen and (max-width: 600px) {
  .covid-banner.desktop{
  width: 100%;
   display: block;
}
.covid-banner.mobile{
  width: 100%;
  display: none;
}
}
</style>  