<template>
  <div class="swiper home-desktop-cover">
    <div class="female-category">
      <v-lazy-image
        :src="require('./../../../../shared/assets/images/desktop-cover/TRIANON-IMÁGENES-CARRUSEL-COMPUTADOR-ALTA-01-ICC.jpg')"
        :src-placeholder="require('./../../../../shared/assets/images/desktop-cover/TRIANON-IMÁGENES-CARRUSEL-COMPUTADOR-BAJA-01-ICC.jpg')"
      />

      <div class="button" @click="UX.isFemaleOpen = !UX.isFemaleOpen">DAMA</div>
      <div class="categories male" v-bind:class="{ active: UX.isMaleOpen }">
        <ul>
          <li v-for="(category,index) of MaleCategories" :key="index">
            <span>{{category.title}}</span>
            <img
              src="../../../../shared/assets/images/gender-categories/bullet-gold.png"
              v-if="isBulletActive(category)"
            >
            <img
              src="../../../../shared/assets/images/gender-categories/bullet-gray.png"
              v-if="!isBulletActive(category)"
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="male-category">
      <v-lazy-image
        :src="require('./../../../../shared/assets/images/desktop-cover/TRIANON-IMÁGENES-CARRUSEL-COMPUTADOR-ALTA-02-ICC.jpg')"
        :src-placeholder="require('./../../../../shared/assets/images/desktop-cover/TRIANON-IMÁGENES-CARRUSEL-COMPUTADOR-BAJA-02-ICC.jpg')"
      />

      <div class="button" @click="UX.isMaleOpen = !UX.isMaleOpen; ">HOMBRE</div>
      <div class="categories female" v-bind:class="{ active: UX.isFemaleOpen }">
        <ul>
          <li v-for="(category,index) of FemaleCategories" :key="index">
            <span>{{category.title}}</span>
            <img
              src="../../../../shared/assets/images/gender-categories/bullet-gold.png"
              v-if="isBulletActive(category)"
            >
            <img
              src="../../../../shared/assets/images/gender-categories/bullet-gray.png"
              v-if="!isBulletActive(category)"
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
    isFemaleOpen: false
  };

  private MaleCategories: any[] = [
    { title: "BILLETERAS" },
    { title: "BOLSOS Y MALETINES" },
    { title: "CINTURONES" },
    { title: "LLAVEROS" },
    { title: "MONEDEROS Y TARJETEROS" },
    { title: "PORTA BILLETES" },
    { title: "PORTA DOCUMENTOS" },
    { title: "PORTA LLAVEROS" },
    { title: "PORTA PASAPORTES" }
  ];

  private FemaleCategories: any[] = [
    { title: "BILLETERAS" },
    { title: "BOLSOS Y MALETINES" },
    { title: "CINTURONES" },
    { title: "LLAVEROS" },
    { title: "MONEDEROS Y TARJETEROS" },
    { title: "PORTA BILLETES" },
    { title: "PORTA COSMÉTICOS" },
    { title: "PORTA DOCUMENTOS" },
    { title: "PORTA PASAPORTES" }
  ];

  private async mounted() {}

  private isBulletActive(category: any) {
    return false;
  }
}
</script>

<style lang="less">
@import "./home-desktop-cover.style.less";
div.home-desktop-cover {
  display: none;
}
@media (min-width: 600px) {
  #constructor-desktop-cover();
  div.home-desktop-cover {
    .female-category,
    .male-category {
      position: relative;
      .v-lazy-image {
        width: 100%;
      
      }
      .v-lazy-image-loaded {
        width: 100% !important;
        object-fit: cover;
        object-position: center;
      }
    }
    div.categories {
      position: absolute;
      width: 50vw;
      height: 450px;

      overflow: hidden;

      -webkit-transition: all 500ms linear;
      -moz-transition: all 500ms linear;
      -ms-transition: all 500ms linear;
      -o-transition: all 500ms linear;
      transition: all 500ms linear;

      &.active {
        top: 0px;
        -webkit-transition: all 500ms linear;
        -moz-transition: all 500ms linear;
        -ms-transition: all 500ms linear;
        -o-transition: all 500ms linear;
        transition: all 500ms linear;

        right: 0px;
        &.male {
          right: 0px;
          -webkit-transition: all 500ms linear;
          -moz-transition: all 500ms linear;
          -ms-transition: all 500ms linear;
          -o-transition: all 500ms linear;
          transition: all 500ms linear;
        }
        &.female {
          right: 0px;
          -webkit-transition: all 500ms linear;
          -moz-transition: all 500ms linear;
          -ms-transition: all 500ms linear;
          -o-transition: all 500ms linear;
          transition: all 500ms linear;
        }
      }

      &.male {
        background-size: cover;
        background-image: url("./../../../../shared/assets/images/gender-male-categories-bg_Mesa de trabajo 1.png");

        right: 50vw;
        -webkit-transition: all 500ms linear;
        -moz-transition: all 500ms linear;
        -ms-transition: all 500ms linear;
        -o-transition: all 500ms linear;
        transition: all 500ms linear;

        ul {
          display: block;
          padding: 0px;
          margin: 0px;
          padding: 1em;
          li {
            padding: 0px;
            margin: 0px;
            padding: 0.5em;
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
        background-image: url("./../../../../shared/assets/images/gender-female_Mesa de trabajo 1.png");

        right: -50vw;
        -webkit-transition: all 500ms linear;
        -moz-transition: all 500ms linear;
        -ms-transition: all 500ms linear;
        -o-transition: all 500ms linear;
        transition: all 500ms linear;
        ul {
          display: block;
          padding: 0px;
          margin: 0px;
          padding: 1em;
          li {
            padding: 0px;
            margin: 0px;
            padding: 0.5em;
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
}
</style>
