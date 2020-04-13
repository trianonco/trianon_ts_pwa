<template>
  <div class="view product">
    <!-- Headers -->
    <HeaderComponent />

    <div class="view-wrapper">
      <ProductHeaderComponent></ProductHeaderComponent>

      <div class="view-wrapper-frame">
        <div class="view-wrapper-frame-content mobile" v-if="isProductLoaded">
          <ProductSwiperComponent :photos="productPhotos" :slideIndex="productSlideIndex"></ProductSwiperComponent>
          <ProductPriceComponent :price="productPrice"></ProductPriceComponent>
          <ProductDescriptionComponent :description="productDescription" :color="productColor"></ProductDescriptionComponent>
          <ProductPhotosComponent :photos="productPhotos" @goToSwiperSlide="goToSwiperSlide"></ProductPhotosComponent>
          <ProductBuyButtonComponent :product="productObj" :size="selectedByDropdownSize" :hasChoosenSize="hasSelectedSize" @showModalSizeError="showSizeModal"></ProductBuyButtonComponent>
        </div>

        <div class="view-wrapper-frame-content desktop" v-if="isProductLoaded">
          <div class="view-wrapper-frame-content-col">
            <ProductSwiperComponent :photos="productPhotos" :slideIndex="productSlideIndex"></ProductSwiperComponent>
            <ProductPhotosComponent :photos="productPhotos" @goToSwiperSlide="goToSwiperSlide"></ProductPhotosComponent>
          </div>
          <div class="view-wrapper-frame-content-col">
            <h1>
              <span>{{ productObj.description }} {{ productObj.line}} / {{ productObj.color }}</span>
            </h1>
            <h2>
              <span>{{ productObj.price_cop | toCurrency }}</span>
            </h2>
            <ProductBuyButtonComponent :product="productObj" :size="selectedByDropdownSize" :hasChoosenSize="hasSelectedSize" @showModalSizeError="showSizeModal"></ProductBuyButtonComponent>

            <div class="referencia">
              <h3>REFERENCIA : {{ productObj.ref }}</h3>
            </div>
            <div class="tallas" v-if="!(productSizes.length > 1)">
              <h3>
                <span
                  v-if="isCinturon(productObj) && productObj.height"
                >TALLA : {{ productObj.height }}</span>
                <br />
                <br />
                <span
                  v-if="productObj.width && productObj.width !== '-' && productObj.width !== '-'"
                >ANCHO : {{ productObj.width }}</span>
                <br />
                <br />
                <span
                  v-if="!isCinturon(productObj) && productObj.height && productObj.height !== '-' && productObj.height !== '-'"
                >ALTO : {{ productObj.height }}</span>
                <br />
                <br />
                <span
                  v-if="!isCinturon(productObj) && productObj.depth && productObj.depth !== '-' && productObj.depth !== '- '"
                >PROFUNDO : {{ productObj.depth }}</span>
              </h3>
            </div>

            <div class="tallas" v-if="productSizes.length > 1" style="display:block; width:100%">
              <select class="form-control" v-model="selected" @change="onChangeSize($event, true)">
                <option
                  v-for="(size, index) of productSizes"
                  v-bind:value="index"
                  v-bind:key="index"
                >
                  <span
                    v-if="size.size.height && size.size.height !== '-' && size.size.height !== 'NA'"
                  >{{ size.size.height.includes('T') ? 'TALLA' : 'Alto' }}: {{size.size.height}}</span>
                  <span
                    v-if="size.size.width  && size.size.width  !== '-' && size.size.width  !== 'NA'"
                  >, Ancho: {{size.size.width}}</span>
                  <span
                    v-if="size.size.depth  && size.size.depth  !== '-' && size.size.depth  !== '- ' && size.size.depth  !== ' -' && size.size.depth  !== 'NA'"
                  >, Profundo : {{size.size.depth}}</span>
                </option>
              </select>
            </div>

            <img class="symbol" src="./../../shared/assets/images/icon-symbol.png" />
          </div>
        </div>
      </div>

      <ProductInfoBannerComponent
        :sizes="productSizes"
        :ref_code="productObj.ref_code"
        :ref_color_code="productObj.ref_color_code"
        :ref_size_code="productObj.ref_size_code"
        @onChangeSize="onChangeSize($event, true)"
      ></ProductInfoBannerComponent>
    </div>

    <FooterComponent />
    <!-- Footers -->

    <div class="modal-size" v-if="isShowModalSize">
      <div class="modal-size--wrapper">
        <h1> Aún no has seleccionado ninguna talla. <br><br>  </h1> 
          
        <h2> ¿ Estas seguro que tu talla es  : <br><br>

            <div v-if="selectedByDropdownSize">
                  <div v-if="selectedByDropdownSize.hasOwnProperty('size')">

                  {{ selectedByDropdownSize.size.height.includes('T') ? 'TALLA' : 'Alto' }}: {{selectedByDropdownSize.size.height}}

                  ?
<!--
              
                    <span v-if="selectedByDropdownSize.size.height && selectedByDropdownSize.size.height !== '-' && selectedByDropdownSize.size.height !== 'NA'">
                    {{ selectedByDropdownSize.size.height.includes('T') ? 'TALLA' : 'Alto' }}: {{selectedByDropdownSize.size.height}}
                    </span>

                    <span v-if="selectedByDropdownSize.size.width  && selectedByDropdownSize.size.width  !== '-' && selectedByDropdownSize.size.width  !== 'NA'">
                      , Ancho: {{selectedByDropdownSize.size.width}}
                    </span>

                    <span v-if="selectedByDropdownSize.size.depth && selectedByDropdownSize.size.depth  !== '-' && size.size.depth  !== '- ' && selectedByDropdownSize.size.depth  !== ' -' && selectedByDropdownSize.size.depth  !== 'NA'">
                      , Profundo : {{selectedByDropdownSize.size.depth}}
                    </span>  
-->
          

              </div>
            </div>
         
          
        </h2>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";
import HeaderComponent from "../../shared/components/header/header.component.vue";
import FooterComponent from "../../shared/components/footer/footer.component.vue";

import ProductHeaderComponent from "./components/product-header.component.vue";
import ProductSwiperComponent from "./components/product-swiper.component.vue";
import ProductPriceComponent from "./components/product-price.component.vue";
import ProductDescriptionComponent from "./components/product-description.component.vue";
import ProductPhotosComponent from "./components/product-photos.component.vue";
import ProductBuyButtonComponent from "./components/product-buy-button.component.vue";
import ProductInfoBannerComponent from "./components/product-info-banner.component.vue";

import TrianonDB from "./../../shared/database/db";
import IShopProduct from "./../../shared/models/IShopProduct.model";

import { toIShopProduct } from "./../../shared/models/toIShopProduct.model";

import ApiDataBase from "./../../shared/database/index";

@Component({
  components: {
    VLazyImage,
    HeaderComponent,
    FooterComponent,
    ProductHeaderComponent,
    ProductSwiperComponent,
    ProductPriceComponent,
    ProductDescriptionComponent,
    ProductPhotosComponent,
    ProductBuyButtonComponent,
    ProductInfoBannerComponent
  },
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
})
export default class ProductView extends Vue {
  private productObj: any = {};
  private productPhotos: any[] = [];
  private productSizes: any[] = [];
  private productPrice: number = -1;
  private productDiscount: number = -1;
  private productColor: string = "";
  private productDescription: string = "";
  private isProductLoaded: boolean = false;
  private productSlideIndex: number = 0;
  private selectedByDropdownSize: any = {
    ref: '',
    size: {
      height:'',
      weight:'',
      depth: ''
    }
  };
  public selected: number = 0;

  private isShowModalSize: boolean = false;

  private apiDB = new ApiDataBase();
  private db: any = {};

  private hasSelectedSize:boolean = false;

  private beforeMount() {
    this.apiDB.setDatabaseByName("SHOP-DB");
    this.db = this.apiDB.getDatabase();
  }

  private isCinturon(productObj: any) {
    return productObj && productObj.height.slice(0, 1) === "T";
  }

  private showSizeModal(){
    console.clear()
    console.log(' =========== showSizeModal() ============ ')
    console.log(' this.isShowModalSize ')
    console.log(this.isShowModalSize)
    console.log(' selectedByDropdownSize ')
    console.log(this.selectedByDropdownSize)
    this.isShowModalSize = true;

    setTimeout(() => {
      this.isShowModalSize = false;
    }, 6000)
   
  }

  private mounted() {
    // Route Params
    const params = (this.$route as any).params;
    const productGender = params.gender ? params.gender : "";
    const productCategory = params.category ? params.category : "";
    const productRefNoSize = params.ref ? params.ref : "";

    (this as any).$ga.page("/product");
    (this as any).$ga.page("/product/gender/" + productGender);
    (this as any).$ga.page("/product/category/" + productCategory);
    (this as any).$ga.page("/product/ref/" + productRefNoSize);

    this.db
      .getProductsByGenderAndCategoriesAndID(
        productGender,
        productCategory,
        productRefNoSize
      )
      .then(async (response: any) => {
        const product: IShopProduct = response[0];
        const products_sizes = response.map((product: any) => {
          return {
            ref: product.ref,
            size: {
              width: product.width,
              height: product.height,
              depth: product.depth
            }
          };
        });

        this.productObj = product;

        this.productPhotos.push(this.getPhotoURLs(1));
        this.productPhotos.push(this.getPhotoURLs(2));
        this.productPhotos.push(this.getPhotoURLs(3));
        this.productPhotos.push(this.getPhotoURLs(4));
        this.productPhotos.push(this.getPhotoURLs(5));
        this.productPrice = this.productObj.price_cop;
        this.productDescription = this.productObj.description;
        this.productColor = this.productObj.color;
        this.productDiscount = this.productObj.discount;
        const refCode = this.productObj.ref_code;
        const refColorCode = this.productObj.ref_color_code;
        const gender = this.productObj.gender;
        const category = this.productObj.category;
        this.isProductLoaded = true;
        this.productSizes = products_sizes;
      });

    setTimeout(() => {
        if (this.productSizes && this.productSizes.length > 0 && this.productSizes[0]) {
        const size = JSON.parse(JSON.stringify(this.productSizes[0]) + "");
        this.onChangeSize(size);
      }
    }, 2600)

    if (this.productSizes && this.productSizes[0]) {
      const size = JSON.parse(JSON.stringify(this.productSizes[0]) + "");
      this.onChangeSize(size);
      //this.$emit("onChangeSize", size);
    }
    
  }

  private onChangeSize($event: any, userSelected?: boolean) {
    const size = JSON.parse(
      JSON.stringify(this.productSizes[this.selected]) + ""
    );
    this.selectedByDropdownSize = size;
    console.log($event);
    console.log('');
    if(userSelected){
      this.hasSelectedSize = true;
    }
  }

  private getPhotoURLs(n: number) {
    const product_token = "c392cfe1-c92e-4bb8-97f1-cf815a641f01";
    const filename = `${this.productObj.ref_photo_code}-0${n}.jpg`;
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

  private goToSwiperSlide(n: number) {
    //(this.$refs.productSwiper as any).swiper.slideTo(n, 1000, true);
    this.productSlideIndex = n;
  }

  private changeSize($event: any) {
    if (this.productSizes && this.selected) {
      const size = JSON.parse(
        JSON.stringify(this.productSizes[this.selected]) + ""
      );
      this.$emit("onChangeSize", size);
    }
  }
}
</script>

<style lang="less">
@import (reference) "./../../shared/styles/index.less";
div.product {
  display: block;
  width: 100%;

  div.view-wrapper {
    display: block;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;

    background-color: black;
    color: white;

    #Font-TrajanPro();
  }

  div.view-wrapper-frame {
    display: block;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
    color: black;
    padding: 1em;
    padding-bottom: 0em;

    div.view-wrapper-frame-content {
      display: block;
      width: 100%;
      box-sizing: border-box;
      border: 1px solid black;
      color: black;
      padding: 0em;
      padding-left: 0em;
      padding-right: 0em;
      padding-bottom: 0em;

      &.mobile {
        display: block;
      }
      &.desktop {
        display: none;
      }

      div.product-photo-swiper {
        display: block;
        width: 100%;
        box-sizing: border-box;
        padding: 1px;
      }
      div.photos {
        width: 100%;
        padding: 0.5em 0em;
        box-sizing: border-box;
        #Flex-Row-Center-toLeft();
        .photo {
          display: block;
          width: ~"calc(25% - 1em)";
          margin: 0em 0.5em;
          margin-left: 0em;
          border: 1px solid black;
          &:first-child {
            margin-left: 0.5em;
          }
        }
      }
    }
  }
}

@media (min-width: 600px) {
  div.view.product .view-wrapper {
    background: url("./../../shared/assets/images/product-view-bg-left.png")
        bottom left no-repeat,
      url("./../../shared/assets/images/product-view-bg-right.png") bottom right
        no-repeat;

    background-size: auto 50vh;
  }
  div.product {
    div.view-wrapper {
      width: 100%;
      margin: 0 auto;
      background-color: white;
      border: none;
    }

    div.view-wrapper-frame {
      border: none;

      width: 800px;
      margin: 0 auto;
      background-color: white;
      border: none;
      div.view-wrapper-frame-content {
        &.mobile {
          display: none;
        }
        &.desktop {
          border: none;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-flex-direction: row;
          -ms-flex-direction: row;
          flex-direction: row;
          -webkit-flex-wrap: nowrap;
          -ms-flex-wrap: nowrap;
          flex-wrap: nowrap;
          -webkit-justify-content: center;
          -ms-flex-pack: center;
          justify-content: center;
          -webkit-align-content: center;
          -ms-flex-line-pack: center;
          align-content: center;
          -webkit-align-items: center;
          -ms-flex-align: center;
          align-items: center;
        }

        &-col {
          width: 50%;
          display: block;

          .symbol {
            padding-top: 1.5em;
            padding-bottom: 2.5em;
            width: 3em;
            display: block;
            margin: 0 auto;
          }
          .referencia,
          .tallas {
            #Font-TrajanPro();
            h3 {
              font-size: 12px;
              letter-spacing: 1px;
              -webkit-transform: scaleY(0.8);
              transform: scaleY(0.8);
              display: block;
              color: gray;
              width: fit-content;
              margin: 0 auto;
              padding: 0.5em;
            }
          }

          h1,
          h2,
          span {
            text-align: center;
            font-size: 14px;
            #Font-TrajanPro();
          }

          h1,
          h2 {
            padding: 1em;
            margin: 0 auto;
            transform: scaleY(0.8);
            letter-spacing: 1px;
            display: block;
          }

          h2 {
            display: block;
            padding-top: 0px;
          }
          h2 span {
            display: block;
            font-size: 24px;
            font-weight: 900;
            transform: scaleY(0.9);
            letter-spacing: 1px;
          }
        }

        div.product-photo-swiper {
        }
        div.photos {
        }
      }
    }
  }

  select {
    background: none;
    padding: 1em;
    margin: 1em;
    font-family: inherit;
    color: gray;
    width: 80%;
    box-sizing: border-box;
    text-align: center;

    display: block;
    margin: 0 auto;
    option {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }
}

.modal-size{
  display: block;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  color:white;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000000000000;

   display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

}

.modal-size--wrapper{

    display: block;
  width: 300px;
  height: auto;
  background-color: white;
  color: black;
  padding: 1.5em;
 h1{
       font-family: 'TrajanPro';
   font-size: 16px;
    padding: -2px;
    position: relative;
    top: 0.25em;
    text-align: center;
    letter-spacing: 2px;
    -webkit-transform: scaleY(0.8);
    transform: scaleY(0.8);
 }
 h2{
       font-family: 'TrajanPro';
   font-size: 12px;
    padding: -2px;
    position: relative;
    top: 0.25em;
    text-align: center;
    letter-spacing: 2px;
    -webkit-transform: scaleY(0.8);
    transform: scaleY(0.8);
 }
}

</style>