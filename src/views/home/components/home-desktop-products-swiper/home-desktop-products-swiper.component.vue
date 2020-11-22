<template>
  <div
    class="swiper home-desktop-products-swiper"
    v-if="isMounted"
    style="position:relative; top:0px;"
  >
    <div style="display:block; width:calc(100% - 6em); margin: 0 auto;">
      <swiper :options="swiperOption" ref="homeProductSwiper">
        <!-- slides -->
        <swiper-slide v-for="(product, index) of products" v-bind:key="index">
          <div class="product-card" @click="goToProductView(product)">
            <div class="wrapper">
              <v-lazy-image
                :src="getPhotoURLs(product).hd"
                :src-placeholder="getPhotoURLs(product).thumb"
              />
              <div class="info">
                {{product.description}} {{product.line}}
                <br />
                <br />
                COLOR {{ product.color }}
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>

    <div class="swiper-button-prev" style="position:absolute; top: 50%;left:10px;width:30px"></div>
    <div class="swiper-button-next" style="position:absolute; top: 50%;right:10px;width:30px"></div>
  </div>
</template>

<script lang="ts">
// -------------------------------------------------------- //
// -- Vue Resources & Core -------------------------------- //
// -------------------------------------------------------- //
import { Component, Vue } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";
import HomeSwiperConfig from "./home-swiper.config";
import HomeSwiperMock from "./home-swiper.mock";
import ApiDataBase from "./../../../../shared/database/index";

// -------------------------------------------------------- //
/*

*/
@Component({
  components: {
    VLazyImage
  }
})
export default class HomeDesktopProductsSwiperComponent extends Vue {
  private swiperOption: any = HomeSwiperConfig;
  private swiperSlides: any[] = [];

  private apiDB: any = new ApiDataBase();
  private db: any = {};

  private productsDB: any[] = [];
  private products: any[] = [];

  private isMounted: boolean = false;

  private get swiper() {
    return (this.$refs.homeProductSwiper as any).swiper;
  }
  private goToProductView(product: any) {
    const filename = `${product.ref_photo_code}-01.jpg`;
    const url_gender = `gender/${product.gender.replace('/','-')}`;
    const url_category = `category/${product.category.replace('/','-')}`;
    const url_ref = `ref/${product.ref_photo_code.replace('/','-')}`;
    const url_description = `description/${product.description.replace('/','-')}`;
    const url_color = `color/${product.color.replace('/','-')}`;
    const url_line = `line/${product.line.replace('/','-')}`;
    const url_photo = `photo/${filename.replace('/','-')}`;
    this.$router.push(
      `/product/${url_gender}/${url_category}/${url_ref}/${url_description}/${url_color}/${url_line}/${url_photo}`
    );
  }
  private getPhotoURLs(productObj: any) {
    const product_token = "c392cfe1-c92e-4bb8-97f1-cf815a641f01";
    const filename = `${productObj.ref_photo_code}-01.jpg`;
    const pathbase =
      "https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos";
    const mediafile = `alt=media&token=${product_token}`;
    const photo_thumb_src = `${pathbase}%2Fthumb%2F${filename}?${mediafile}`;
    const photo_hd_src = `${pathbase}%2Fhd%2F${filename}?${mediafile}`;
    return {
      hd: photo_hd_src,
      thumb: photo_thumb_src
    };
  }

  private beforeMount() {
    this.apiDB.setDatabaseByName("SHOP-DB");
    this.db = this.apiDB.getDatabase();
    this.productsDB = [];
    this.db
      .getProductsByGenderAndCategories("HOMBRE", "BILLETERAS")
      .then(async (products: any) => {
        this.productsDB = [
          ...this.productsDB,
          ...this.removeDuplicates(products, "ref_photo_code")
        ];
        this.db
          .getProductsByGenderAndCategories("DAMA", "BILLETERAS")
          .then(async (products: any) => {
            this.productsDB = [
              ...this.productsDB,
              ...this.removeDuplicates(products, "ref_photo_code")
            ];
            this.db
              .getProductsByGenderAndCategories("HOMBRE", "BOLSOS_Y_MALETINES")
              .then(async (products: any) => {
                this.productsDB = [
                  ...this.productsDB,
                  ...this.removeDuplicates(products, "ref_photo_code")
                ];
                this.db
                  .getProductsByGenderAndCategories(
                    "DAMA",
                    "BOLSOS_Y_MALETINES"
                  )
                  .then(async (products: any) => {
                    this.productsDB = [
                      ...this.productsDB,
                      ...this.removeDuplicates(products, "ref_photo_code")
                    ];
                    this.db
                      .getProductsByGenderAndCategories("HOMBRE", "CINTURONES")
                      .then(async (products: any) => {
                        this.productsDB = [
                          ...this.productsDB,
                          ...this.removeDuplicates(products, "ref_photo_code")
                        ];
                        this.db
                          .getProductsByGenderAndCategories(
                            "DAMA",
                            "CINTURONES"
                          )
                          .then(async (products: any) => {
                            this.productsDB = [
                              ...this.productsDB,
                              ...this.removeDuplicates(
                                products,
                                "ref_photo_code"
                              )
                            ];
                            this.products = this.shuffleArray(
                              this.productsDB.filter(
                                (product: any) =>
                                  product.ref_photo_code.includes(
                                    "HB1212-01"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HB1212-12"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HJ1255-01"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HJ1255-07"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HJ1256-01"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HM1206-04"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HT1242-04"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HT1251-01"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HT1251-04"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HT1252-04"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HT1252-15"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HT1251-01"
                                  ) ||
                                  product.ref_photo_code.includes("HA157-01") ||
                                  product.ref_photo_code.includes("HA157-04") ||
                                  product.ref_photo_code.includes("HB148-01") ||
                                  product.ref_photo_code.includes("HB148-15") ||
                                  product.ref_photo_code.includes("HG158-01") ||
                                  product.ref_photo_code.includes("HK159-01") ||
                                  product.ref_photo_code.includes("HK159-15") ||
                                  product.ref_photo_code.includes("HK160-07") ||
                                  product.ref_photo_code.includes("HK160-08") ||
                                  product.ref_photo_code.includes("HK160-15") ||
                                  product.ref_photo_code.includes("HM154-01") ||
                                  product.ref_photo_code.includes("HM154-04") ||
                                  product.ref_photo_code.includes("HR156-01") ||
                                  product.ref_photo_code.includes("DF170-01") ||
                                  product.ref_photo_code.includes("DF230-15") ||
                                  product.ref_photo_code.includes(
                                    "DF5230-32"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DF5231-15"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DF5231-32"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DP5216-02"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DP5216-07"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DP5216-08"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DP5217-02"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DP5217-07"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DP5234-02"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DP5234-15"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DP5235-02"
                                  ) ||
                                  product.ref_photo_code.includes("DP236-15") ||
                                  product.ref_photo_code.includes(
                                    "DS5210-04"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DS5210-07"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DS5210-32"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DS5211-04"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DS5211-07"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DS5211-32"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DF5173-01"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DL2147-01"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DL2147-07"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DL2147-22"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DP2159-07"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DP2159-08"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DP2163-02"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DP2163-15"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DS2162-04"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DS2162-07"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DS2162-32"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HC628-1028"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HC628-1728"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HC629-1028"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HC629-1128"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HC629-1728"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HM636-0128"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HM636-0428"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HM636-0728"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HM636-0128"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "HM636-0328"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DA617-0808"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DA617-1508"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DA617-2208"
                                  ) ||
                                  product.ref_photo_code.includes(
                                    "DA617-1508"
                                  ) ||
                                  product.ref_photo_code.includes("HT1241-15")
                              )
                            );

                            this.isMounted = true;
                          });
                      });
                  });
              });
          });
      });
  }

  private shuffleArray(inarray: any[]) {
    const array = inarray;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  private async mounted() {}

  private removeDuplicates(myArr: any[], prop: string) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
}
</script>

<style lang="less">
@import "./home-desktop-products-swiper.style.less";
div.home-desktop-products-swiper {
  display: none;
}
@media (min-width: 600px) {
  #constructor-desktop-products-swiper();
}
</style>
