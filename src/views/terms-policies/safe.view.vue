<template>
  <div class="view safe">
    <!-- Headers -->
    <HeaderComponent/>

    <div class="view-wrapper">
      <h1>COMPRA SEGURA</h1>
      <div class="block gold">
        <p>En TRIANON tenemos como compromiso fundamental brindar la máxima calidad posible, no solo en nuestros productos sino en cada uno de los servicios que prestamos. Por esta razón, contamos con procesos de alta seguridad en las transacciones para garantizar el adecuado manejo de tu información personal y el de tus tarjetas.</p>
        <p>En el proceso de compra el transporte de información se hace con algortimos cifrados, de tal manera, que si es interceptada no puede ser vista por terceros. Lo anterior es gracias a mecanismos que funcionan bajo el protocolo SSL (Secure Socket Layer).</p>
      </div>
      <div class="block silver">
        <h2>PROPIEDAD DE INFORMACIÓN</h2>
        <p>Toda información publicada en www.trianon.com.co, es propiedad exclusiva de TRIANON S.A.S, al igual que los derechos patrimoniales, del sitio web. La diagramación, imágenes, iconos, ilustraciones, marcas, diseño gráfico,ó cualquier otro material que reproduzca, imprima, descargue o guarde es autoría de Luis Rodríguez Prieto con C.C. 1010210066 de Bogotá D.C.</p>
      </div>
    </div>

    <FooterComponent/>
    <!-- Footers -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";

import HeaderComponent from "../../shared/components/header/header.component.vue";
import FooterComponent from "../../shared/components/footer/footer.component.vue";

import ApiDataBase from "./../../shared/database/index";
import InfiniteLoading from "vue-infinite-loading";

@Component({
  components: { HeaderComponent, FooterComponent, VLazyImage, InfiniteLoading }
})
export default class TermsAndPoliciesSafe extends Vue {}

//
</script>

<style lang="less">
@import (reference) "./../../shared/styles/index.less";
div.view.safe .view-wrapper {
  h1 {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 2.5em;
    background-color: black;
    color: white;
    text-align: center;
    font-family: "TrajanPro";

    font-size: 12px;
    letter-spacing: 3px;

    border-bottom: 5px solid #e6cd82;
  }

  div.block {
    font-family: "Open Sans";
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    background-size: 10px 100%;
    background-image: url("./../../shared/assets/images/terms/gold-bg.png");
    p {
      line-height: 1.5em;
      font-size: 12px;
      letter-spacing: 0px;
      text-align: center;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 25px;
    }

    &.silver {
      background-image: none;
      background-color: #dadada;
      color: black;
      h2 {
        font-family: "TrajanPro";

        font-size: 12px;
        letter-spacing: 3px;
        text-align: center;
        padding-bottom: 1em;
      }
    }
  }
}
</style>