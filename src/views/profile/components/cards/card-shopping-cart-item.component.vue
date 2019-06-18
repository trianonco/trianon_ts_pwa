<template>
  <div class="card" v-if="item && item.description && item.ref">
    <div class="card-header" @click="doToogleCard()">
      <div class="card-header-bullet">
        <img
          alt="TrianonCo Image"
          src="../../../../shared/assets/images/gender-categories/bullet-gray.png"
          v-if="!UX.isCardOpen"
        >
        <img
          alt="TrianonCo Image"
          src="../../../../shared/assets/images/gender-categories/bullet-gold.png"
          v-if="UX.isCardOpen"
        >
      </div>
      <div class="card-header-title" v-if="item && item.description && item.ref">
        <h1>{{item.description}} {{item.ref}}</h1>
      </div>
      <div class="card-header-see-more">
        <span v-if="!UX.isCardOpen">VER</span>
      </div>

      <img
        class="card-header-triangle"
        v-if="UX.isCardOpen"
        src="./../../../../shared/assets/images/gray-arrow.png"
      >
    </div>
    <div class="card-content" v-if="UX.isCardOpen">
      <div class="card-content-title">
        <h1>ESTADO : PROCESO DE COMPRA</h1>
        <h2>PRECIO : {{ item.price_cop | toCurrency }}</h2>
      </div>

      <div class="card-content-wrapper">
        <v-lazy-image
          class="card-content-wrapper-photo"
          :src="getPhotoSRC_HD(item.ref_photo_code)"
          :src-placeholder="getPhotoSRC_THUMB(item.ref_photo_code)"
        />
      </div>
      <div class="card-content-quantity">
        <div class="card-content-quantity-remove" @click="removeProductoToShoppingCart()">
          <span>-</span>
        </div>
        <div class="card-content-quantity-number">
          <span>CANTIDAD: {{getProductsInShoppingCart.length}}</span>
        </div>
        <div class="card-content-quantity-add" @click="addProductoToShoppingCart()">
          <span>+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VLazyImage from "v-lazy-image";

export default {
  name: "",
  components: {
    VLazyImage
  },
  methods: {
    doToogleCard() {
      this.UX.isCardOpen = !this.UX.isCardOpen;
    },

    addProductoToShoppingCart() {
      this.$store.dispatch("addToCart", this.item);
    },

    removeProductoToShoppingCart() {
      this.$store.dispatch("removeFromCart", this.item);
    },

    getPhotoSRC_HD(ref_photo_code) {
      const product_token = "18c776df-f5a7-45a0-9012-16f780381d92";
      const filename = `${ref_photo_code}-01.jpg`;
      const pathbase =
        "https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos";
      const mediafile = `alt=media&token=${product_token}`;
      const photo_hd_src = `${pathbase}%2Fhd%2F${filename}?${mediafile}`;
      return photo_hd_src;
    },
    getPhotoSRC_THUMB(ref_photo_code) {
      const product_token = "18c776df-f5a7-45a0-9012-16f780381d92";
      const filename = `${ref_photo_code}-01.jpg`;
      const pathbase =
        "https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos";
      const mediafile = `alt=media&token=${product_token}`;
      const photo_thumb_src = `${pathbase}%2Fthumb%2F${filename}?${mediafile}`;
      return photo_thumb_src;
    }
  },
  computed: {
    getProductsInShoppingCart() {
      return this.$store.state.shoppingCartModule.products.filter(
        product => product && product.ref === this.item.ref
      );
    }
  },
  props: ["item"],
  mounted() {
    console.warn(this.item);
  },
  data() {
    return {
      UX: {
        isCardOpen: false
      }
    };
  }
};
</script>

<style lang="less">
.card-header {
  display: block;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;

  border-bottom: 1px solid gray;

  position: relative;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;

  &-triangle {
    display: block;
    width: 1em;
    height: 1em;
    object-fit: contain;
    object-position: center;

    position: absolute;
    top: 2.75em;
    left: ~"calc(50vw - 1em)";
  }

  &-bullet {
    img {
      display: block;
      width: 0.75em;
      height: 0.75em;
      object-fit: contain;
      object-position: center;
    }
  }

  &-title {
    padding: 0em 0.5em;
    h1 {
      font-size: 0.75em;
    }
  }

  &-see-more {
    position: absolute;
    top: 1.8em;
    right: 15px;
    font-size: 10px;
    span {
      text-decoration: underline;
      //padding-bottom: 1px;
      //border-bottom: 1px solid black;
    }
  }
}

.card-content {
  display: block;
  width: 100%;
  padding: 1em;
  box-sizing: border-box;

  &-title {
    color: black;
    h1 {
      font-size: 10px;
      padding-bottom: 1em;
    }
    h2 {
      font-size: 10px;
      padding-bottom: 1em;
    }
  }

  &-wrapper {
    display: block;
    width: 100%;
    padding: 1em;
    box-sizing: border-box;

    border: 1px solid black;

    &-photo {
      display: block;
      width: auto;
      height: 244px;
      padding: 1em;
      box-sizing: border-box;
      margin: 0 auto;
    }
  }

  &-quantity {
    display: block;
    width: 100%;
    padding: 0em;
    box-sizing: border-box;

    background-color: gray;
    color: #fff;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    &-remove {
      display: block;
      padding: 1em;
      width: 2em;
      border-right: 1px solid white;
    }
    &-number {
      display: block;
      padding: 1em;
      width: ~"calc(100% - 10em - 2px)";
    }
    &-add {
      display: block;
      padding: 1em;
      width: 2em;
      border-left: 1px solid white;
    }
  }
}
</style>
