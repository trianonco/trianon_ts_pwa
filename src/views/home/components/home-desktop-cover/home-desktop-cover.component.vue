<template>
  <div class="swiper home-desktop-cover">
    <div
      class="female-category"
      v-bind:class="{ active: UX.isFemaleOpen ,  default : !UX.isFemaleOpen }"
    >
      <v-lazy-image
        :src="require('./../../../../shared/assets/images/desktop-cover/TRIANON-IMÁGENES-CARRUSEL-COMPUTADOR-ALTA-01-ICC-V2.jpg')"
        :src-placeholder="require('./../../../../shared/assets/images/desktop-cover/TRIANON-IMÁGENES-CARRUSEL-COMPUTADOR-BAJA-01-ICC-V2.jpg')"
      />
      <img
        src="./../../../../shared/assets/images/desktop-cover/G-C-IZQUIERDA.png"
        style="position: absolute;bottom: 1em;left: 0px;width: 2em;"
      >

      <div class="button" @click="toogleFemaleOpen()">DAMA</div>
      <div
        class="categories female"
        v-bind:class="{ active: UX.isFemaleOpen ,  default : !UX.isFemaleOpen }"
      >
        <span class="close-category" @click="toogleFemaleOpen()">X</span>
        <ul>
          <li
            v-for="(category,index) of FemaleCategories"
            :key="index"
            @click="goToShopCategoryByCategoryAndGender(category.title, 'DAMA')"
          >
            <img
              src="../../../../shared/assets/images/gender-categories/bullet-gold.png"
              v-if="isBulletActive(category.title ,'DAMA')"
            >
            <img
              src="../../../../shared/assets/images/gender-categories/bullet-gray.png"
              v-if="!isBulletActive(category.title, 'DAMA')"
            >
            <span>{{category.title}}</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="male-category" v-bind:class="{ active: UX.isMaleOpen, default: !UX.isMaleOpen }">
      <v-lazy-image
        :src="require('./../../../../shared/assets/images/desktop-cover/TRIANON-IMÁGENES-CARRUSEL-COMPUTADOR-ALTA-02-ICC-V2.jpg')"
        :src-placeholder="require('./../../../../shared/assets/images/desktop-cover/TRIANON-IMÁGENES-CARRUSEL-COMPUTADOR-BAJA-02-ICC-V2.jpg')"
      />
      <img
        src="./../../../../shared/assets/images/desktop-cover/G-C-DERECHO.png"
        style="position: absolute;bottom: 1em;right: 0px;width: 2em;"
      >

      <div class="button" @click="UX.isMaleOpen = !UX.isMaleOpen; ">HOMBRE</div>

      <div
        class="categories male"
        v-bind:class="{ active: UX.isMaleOpen, default: !UX.isMaleOpen }"
      >
        <span class="close-category" @click="UX.isMaleOpen = !UX.isMaleOpen; ">X</span>
        <ul>
          <li
            v-for="(category,index) of MaleCategories"
            :key="index"
            @click="goToShopCategoryByCategoryAndGender(category.title, 'HOMBRE')"
          >
            <span>{{category.title}}</span>
            <img
              src="../../../../shared/assets/images/gender-categories/bullet-gold.png"
              v-if="isBulletActive(category.title,'HOMBRE')"
            >
            <img
              src="../../../../shared/assets/images/gender-categories/bullet-gray.png"
              v-if="!isBulletActive(category.title,'HOMBRE')"
            >
          </li>
        </ul>
      </div>
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
  private UX: any = {
    isMaleOpen: false,
    isFemaleOpen: false,
    isZIndex: false,
    currentCategorySelected: {
      category: "",
      gender: ""
    }
  };

  private MaleCategories: any[] = [
    { title: "BILLETERAS" },
    { title: "BOLSOS Y MALETINES" },
    { title: "CINTURONES" },
    { title: "LLAVEROS" },
    { title: "MONEDEROS Y TARJETEROS" },
    { title: "PORTA BILLETES" },
    //{ title: "PORTA LLAVEROS" },
    { title: "PORTA DOCUMENTOS" },
    { title: "PORTA PASAPORTES" }
  ];

  private FemaleCategories: any[] = [
    { title: "BILLETERAS" },
    { title: "BOLSOS Y MALETINES" },
    { title: "CINTURONES" },
    { title: "LLAVEROS" },
    { title: "MONEDEROS Y TARJETEROS" },
    { title: "PORTA BILLETES" },
    //{ title: "PORTA COSMÉTICOS" },
    { title: "PORTA DOCUMENTOS" },
    { title: "PORTA PASAPORTES" }
  ];

  private async mounted() {}

  private toogleFemaleOpen() {
    if (this.UX.isFemaleOpen) {
      this.UX.isFemaleOpen = false;
      setTimeout(() => {
        this.UX.isZIndex = false;
      }, 500);
    } else {
      this.UX.isFemaleOpen = true;
      this.UX.isZIndex = true;
    }
  }

  private goToShopCategoryByCategoryAndGender(category: any, gender: string) {
    this.UX.currentCategorySelected.category = category;
    this.UX.currentCategorySelected.gender = gender;

    setTimeout(() => {
      this.UX.currentCategorySelected.category = "";
      this.UX.currentCategorySelected.gender = "";

      this.$router.push({
        name: "shopCategoryGender",
        params: {
          category: category,
          gender: gender
        }
      });
    }, 500);
  }

  private isBulletActive(category: any, gender: any) {
    return (
      this.UX.currentCategorySelected.category === category &&
      this.UX.currentCategorySelected.gender === gender
    );
  }
}
</script>

<style lang="less">
@import "./home-desktop-cover.style.less";
div.home-desktop-cover {
  display: none;
}

@keyframes animate {
  0% {
    z-index: 2000;
  }
  99% {
    z-index: 2000;
  }
  100% {
    z-index: 0;
  }
}

@media (min-width: 600px) {
  #constructor-desktop-cover();
  div.home-desktop-cover {
    overflow-y: hidden;
    overflow-x: hidden;

    .female-category,
    .male-category {
      position: relative;
      z-index: 50;

      &::-webkit-scrollbar {
        width: 0px; /* Remove scrollbar space */
        background: transparent; /* Optional: just make scrollbar invisible */
      }
      /* Optional: show position indicator in red */
      &::-webkit-scrollbar-thumb {
        background: transparent; /* Optional: just make scrollbar invisible */
      }
      &::-webkit-scrollbar {
        display: none; // Safari and Chrome
      }
      .v-lazy-image {
        width: 100%;
      }
      .v-lazy-image-loaded {
        width: 100% !important;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }
    div.categories {
      position: absolute;
      width: 50vw;
      height: 75vw;
      max-height: 650px;

      overflow: hidden;
      z-index: 50;

      &.active {
        top: 0px;

        &.male {
          right: ~"calc(50vw - 0em)";
          top: 0px;
          -webkit-transition: right 500ms ease-in-out;
          -moz-transition: right 500ms ease-in-out;
          -ms-transition: right 500ms ease-in-out;
          -o-transition: right 500ms ease-in-out;
          transition: right 500ms ease-in-out;
        }
        &.female {
          right: -50vw;
          top: 0px;
          -webkit-transition: right 500ms ease-in-out;
          -moz-transition: right 500ms ease-in-out;
          -ms-transition: right 500ms ease-in-out;
          -o-transition: right 500ms ease-in-out;
          transition: right 500ms ease-in-out;
        }
      }

      &.default {
        top: 0px;

        &.male {
          right: -0.5em;
          top: 0px;
          -webkit-transition: right 500ms ease-in-out;
          -moz-transition: right 500ms ease-in-out;
          -ms-transition: right 500ms ease-in-out;
          -o-transition: right 500ms ease-in-out;
          transition: right 500ms ease-in-out;
        }
        &.female {
          right: 0vw;
          top: 0px;
          -webkit-transition: right 500ms ease-in-out;
          -moz-transition: right 500ms ease-in-out;
          -ms-transition: right 500ms ease-in-out;
          -o-transition: right 500ms ease-in-out;
          transition: right 500ms ease-in-out;
        }
      }

      &.male {
        background-size: cover;
        background-image: url("./../../../../shared/assets/images/desktop-cover/bg/gender-male-categories-bg.jpg");
        border-left: 0.25em solid white;

        .close-category {
          position: absolute;
          top: 14px;
          left: 16px;
          font-family: "Open Sans";
          color: white;
          transform: scaleY(0.89);
        }

        ul {
          display: block;
          padding: 0px;
          margin: 0px;
          padding-top: 3em;
          padding-left: 3em;
          padding-right: 3em;

          li {
            padding: 0px;
            margin: 0px;
            padding: 0.75em;
            text-decoration: underline;
            text-align: right;

            cursor: pointer;

            font-size: 16px;

            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-flex-direction: row;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-flex-wrap: wrap;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            -webkit-justify-content: flex-end;
            -ms-flex-pack: end;
            justify-content: flex-end;
            -webkit-align-content: center;
            -ms-flex-line-pack: center;
            align-content: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            img {
              width: 10px;
              padding: 0.5em;
            }
          }
          color: #fff;
          font-family: "TrajanPro";
        }
      }
      &.female {
        background-size: cover;
        background-image: url("./../../../../shared/assets/images/desktop-cover/bg/gender-female-categories-bg.jpg");
        border-right: 0.25em solid white;

        .close-category {
          position: absolute;
          top: 14px;
          right: 16px;
          font-family: "Open Sans";
          color: white;
          transform: scaleY(0.89);
        }
        ul {
          display: block;
          padding: 0px;
          margin: 0px;
          padding: 1em;

          padding-top: 3em;
          padding-left: 3em;
          padding-right: 3em;
          li {
            cursor: pointer;
            padding: 0px;
            margin: 0px;
            padding: 0.75em;
            font-size: 16px;
            letter-spacing: 1px;
            text-decoration: underline;
            text-align: right;
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
            img {
              width: 10px;
              padding: 0.5em;
            }
          }
          color: #fff;
          font-family: "TrajanPro";
        }
      }
    }
  }

  div.home-desktop-cover {
    .male-category {
      .v-lazy-image-loaded {
        z-index: 200;
        display: block;
      }
      .categories.male {
        z-index: -100;
        display: block;
      }
    }

    .female-category {
      -webkit-transition: all 500ms ease-in-out;
      -moz-transition: all 500ms ease-in-out;
      -ms-transition: all 500ms ease-in-out;
      -o-transition: all 500ms ease-in-out;
      transition: all 500ms ease-in-out;
      &.active {
        z-index: 20000;
        -webkit-transition: all 500ms ease-in-out;
        -moz-transition: all 500ms ease-in-out;
        -ms-transition: all 500ms ease-in-out;
        -o-transition: all 500ms ease-in-out;
        transition: all 500ms ease-in-out;
      }
      .v-lazy-image-loaded {
        z-index: 200;
        display: block;
      }
      .categories.female {
        z-index: -100;
        display: block;
      }
    }
  }
}

@media (min-width: 1200px) {
  div.home-desktop-cover .male-category {
    width: 50vw;
    height: 60vw;
    max-height: 650px;
  }
  div.home-desktop-cover .female-category {
    width: 50vw;
    height: 60vw;
    max-height: 650px;
  }
}

@media (min-width: 1600px) {
  div.home-desktop-cover .male-category {
    width: 50vw;
    height: 50vw;
    max-height: 650px;
  }
  div.home-desktop-cover .female-category {
    width: 50vw;
    height: 50vw;
    max-height: 650px;
  }
}
</style>
