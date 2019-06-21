<template>
  <div class="view privacy">
    <!-- Headers -->
    <HeaderComponent/>

    <div class="view-wrapper">
      <h1>POLÍTICAS DE PRIVACIDAD</h1>

      <div class="block white">
        <p>
          TRIANON S.A.S. siguiendo y dando cumplimiento a la Ley 1581 de 2012 y su decreto Reglamentario 1377 de 2013, también conocido como Ley de protección de Datos Personales comunica a todos sus clientes y usuarios que en el momento de diligenciar cualquier casilla y/o formulario en www.trianon.com.co está autorizando a TRIANON S.A.S a que pueda generar el almacenamiento de dicha información en las bases de datos regidas por políticas
          de seguridad y confidencialidad, también aprueba el uso de dicha información para él envió de comunicados que comercializarán nuestros productos, promociones, ofertas, lanzamientos ó cualquier evento publicitario que ayuden a mejorar la experiencia con la marca. En caso de que el usuario tenga el requerimiento de actualizar,
          modificar ó corregir sus datos ó si manifiesta que sean eliminados de las bases de datos deberá remitir su
          solicitud a través de una comunicación al correo electrónico ftrianon@trianon.com.co La información del usuario será borrada 5 días hábiles a partir del día siguiente de realizada la solicitud.
        </p>
        <br>
        <p>
          Ahora bien, para la información suministrada en los formularios de compra de nuestra tienda en línea, todos
          los datos serán transmitidos directamente, con su respectiva encriptación de seguridad a la entidad financiera
          y una vez esto suceda TRIANON no tendrá control en el uso de información de ningún usuario.
        </p>
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
div.view.privacy .view-wrapper {
  strong {
    font-weight: 900;
  }
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
      font-size: 11px;
      letter-spacing: 0px;
      text-align: center;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 5px;
    }

    h2 {
      font-family: "TrajanPro";
      font-size: 11px;
      letter-spacing: 3px;
      text-align: center;
      padding-bottom: 1em;
    }

    &.white {
      background-image: none;
      background-color: #fff;
      color: black;
      h2 {
        font-family: "TrajanPro";
        font-size: 11px;
        letter-spacing: 3px;
        text-align: center;
        padding-bottom: 1em;
      }
    }

    &.silver {
      background-image: none;
      background-color: #dadada;
      color: black;
      h2 {
        font-family: "TrajanPro";

        font-size: 11px;
        letter-spacing: 3px;
        text-align: center;
        padding-bottom: 0em;
      }
    }

    &.black {
      background-image: none;
      background-color: black;
      color: white;
      h2 {
        font-family: "TrajanPro";
        font-size: 11px;
        letter-spacing: 3px;
        text-align: center;
        padding-top: 1em;
        padding-bottom: 1em;
        font-weight: 100;
      }
      img {
        width: 100%;
      }
      p {
        font-size: 12px;
        width: 100%;
        margin: 0 auto;
        letter-spacing: px;
        line-height: 1.5em;
      }
    }
  }
}
</style>