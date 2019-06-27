<template>
  <div class="view terms">
    <!-- Headers -->
    <HeaderComponent/>

    <div class="view-wrapper">
      <h1>TERMINOS DE SERVICIO</h1>

      <div class="block gold desk-white">
        <p>Te encuéntras en el sitio web de TRIANON S.A.S, al acceder y utilizar los servicios bajo el dominio www.trianon.com.co se dará por entendida la aceptación y seguimientos a los términos de servicio y políticas de privacidad establecidos por la compañía.</p>
      </div>

      <div class="block white desk-gold">
        <p>
          TRIANON S.A.S., siempre confiará y asumirá en buena fé, que está contratando directamente con el cliente o con
          su representante legal, para efectuar cualquier tipo de operaciones y no asumirá responsabilidad por suplantación
          personal fisica y/ó virtual que realice cualquier cliente y/ó usuario.
        </p>
        <br>
        <p>
          A la hora de realizar una compra ó stablecer contacto vía chat es un requisito fundamental generar el registro,
          identificarse y presentarse como usuario en el sitio web. Lo anterior se realiza por medio de una cuenta de correo
          electrónico y una clave privada cuya responsabilidad recae directamente en el usuario.
        </p>
        <br>
        <p>
          Si en algún momento la clave llega a ser extraviada, olvidad ó es expuesta a terceros podrá realizar la modificación
          de la misma en la sección de: “¿OLVIDASATE TU CONTRASEÑA?”, en donde siguiendo las instrucciones el usuario
          la cambiará a través de su correo electrónico. En caso de no poder realizar el procedimiento se recomienda escribir
          un correo a ftrianon@trianon.com.co ó ponerse en contácto con los siguientes números:
          <br>
          <br>

          <strong>TEL: (1)2011688 EXT 151 / CEL: 310 785 6037.</strong>
        </p>
      </div>

      <div class="block black desk-black">
        <img
          class="mobile"
          src="./../../shared/assets/images/terms/black-logo-mobile_Mesa de trabajo 1.png"
        >
        <img class="desktop" src="./../../shared/assets/images/terms/desktop/Recurso 9@4x.png">
        <h2>POLÍTICA DE GARANTÍA</h2>
        <p>
          Nuestros artículos son 100% Colombianos, cuentan con garantía de 6 meses por defectos de fabricación que empiezan
          a contar desde la fecha de compra de acuerdo a la factura. Los productos en oferta ó en promoción no tienen cambio.
          La garantía será la que ampara la ley por un término no mayor a 3 meses, se debe tener presente que las variaciones
          de color, huellas, rayas y vetas en los cueros son características esenciales que hacen únicos los productos debido
          al tratamiento químico aplícado por las curtiembres sobre cada piel, lo que aporta estética y legitimidad
          de la materia prima, por ello este tipo de atributos no son motivo de cambio ó devolución.
        </p>
      </div>

      <div class="block white">
        <h2>RETRACTO Y DEVOLUCIÓN</h2>
        <p>
          TRIANON S.A.S., se rige según el derecho de retracto consagrado por la ley 1480 art. 47 de 2011, el termino máximo
          que tendrá el cliente ó usuario para solicitarlo es de 5 días hábiles contando a partir del recibido del pedido, el producto deberá ser devuelto en su empaque original, en optimas condiciones sin ningún tipo de alteración física, con su respectiva factura de compra. El cliente ó usuario asumirá los costos de transporte y todo lo que implique la devolución del producto.
          El proceso de la devolución se deberá hacer a la dirección calle 6 A # 33 – 22, en la Zona industrial de Bogotá D.C., Colombia, de donde fue despachado el pedido, dirigido a TRIANON S.A.S.
        </p>
      </div>

      <div class="block silver">
        <h2>FOTOGRAFÍAS DE PRODUCTO</h2>
        <p>
          Todo el material fotográfico de los artículos TRIANON, corresponde a modelo reales y se asocian directamente
          con los productos en inventario, tratando que cada imagen conserve los colores y todas las características físicas.
          Sin embargo se presentarán variaciones en los colores percibidos en la pantalla de tu computador, tableta y/ó celular,
          dependiendo de la calidad de las pantallas y proveedor de internet, por lo tanto TRIANON S.A.S. no garantiza que estos apoyos gráficos se muestren exactamente igual al producto físico. La disponibilidad de los artículos exhibidos en la tienda en línea esta sujeta a inventario.
        </p>
      </div>

      <div class="block gold">
        <h2>ECONOMÍA COLABORATIVA</h2>
        <p>
          Con el proposito de brindar a todos nuestros clientes y usuarios beneficios y promociones, TRIANON S.A.S podrá realizar convenios con varios sitios web de terceros para acceder desde ellos, aunque sean contratados ó realcionados
          con TRIANON S.A.S la compañía no tendrá ningún control sobre estos, que podrán tener técnicas de privacidad
          y almacenamiento de datos diferentes a los utilizados por TRIANON S.A.S., por lo anterior la marca no asumirá ninguna
          responsabilidad u obligación en el uso de las acciones ni prácticas de privacidad de dichos sitos web.
        </p>
      </div>

      <div class="block white">
        <h2>POLÍTICA DE PRECIOS</h2>
        <p>
          Los precios visualizados en www.trianon.com.co generalmente serán iguales a los productos en las TIENDAS TRIANON.
          En algunas ocasiones los valores podrán variar y generar diferencias por promociones ó descuentos especiales.
          Toda oferta programada será presentada mediante los diversos medios de comunicación OFICIALES de TRIANON.
        </p>
        <p>
          Toda disponibilidad de los productos está sujeta a inventario, tanto de los exhibidos en www.trianon.com.co,
          TIENDAS TRIANON como en nuestros DISTRIBUIDORES AUTORIZADOS.
        </p>
        <p>
          Cada DISTRIBUIDOR AUTORIZADO tiene libre albedrío sobre el precio de los prodcutos que compra como mayorista,
          los valores brindados por TRIANON S.A.S son precios sugeridos.
        </p>
      </div>

      <div class="block gold">
        <h2>TÉRMINOS DE ENVÍO</h2>
        <p>
          TRIANON S.A.S se compromete a realizar los envíos gratuitos siempre y cuando la dirección
          se encuentre dentro de COLOMBIA y el precio de la misma sea de $100.000.COP ó superior.
          Este beneficio no es acumulable con otras promociones ni ofertas.
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
export default class TermsAndPoliciesSafe extends Vue {
  private mounted() {
    (this as any).$ga.page("/terms/terms");
  }
}

//
</script>

<style lang="less">
@import (reference) "./../../shared/styles/index.less";
div.view.terms .view-wrapper {
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }
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

@media (min-width: 600px) {
  div.view.terms .view-wrapper {
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }

    div.block p {
      width: 650px !important;
      display: block !important;
      margin: 0 auto !important;
      line-height: 2em !important;
    }
    h1 {
      background-color: white;
    }
    h1,
    h2,
    h3,
    h4 {
      border: none;

      color: black;
      font-size: 16px !important;
      padding-top: 2em;
      padding-bottom: 1.5em;
    }

    .desk-gold {
      background-size: 10px 100%;
      background-image: url("./../../shared/assets/images/terms/gold-bg.png") !important;
    }

    .desk-black h2 {
      color: white !important;
    }

    .desk-white {
      background-size: 10px 100%;
      background-image: none !important;
      background-color: white;
    }
  }
}
</style>