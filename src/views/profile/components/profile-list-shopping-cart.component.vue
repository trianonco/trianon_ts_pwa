<template>
  <div class="wrapper" v-if="user">
    <div class="wrapper-title">
      <span>{{ userName }}, BIENVENIDO A TU PERFIL TRIANON</span>
    </div>
    <div class="wrapper-text">
      <span>Aquí encontrarás los productos que hayas seleccionado, el estado de envio y los detalles de tus compras.</span>
    </div>
    <div class="wrapper-container">
      <div class="wrapper-container-header">
        <img src="../../../shared/assets/images/gender-categories/bullet-gray.png">
        <h1>ESPACIO PARA TUS PRODUCTOS</h1>
      </div>
      <div class="wrapper-container-content">
        <img
          src="../../../shared/assets/images/banners/plus_icon-01.png"
          @click="addItemOnShoppingCart()"
        >
        <p
          class="normal"
        >¿Qué esperas?, descubre los articulos considerados lo mejor de la arroquinería.</p>
        <p class="light">¡ Toca el simbolo + para empezar!</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { mapState, mapGetters, mapActions } from "vuex";
@Component({
  components: {},
  computed: {
    ...mapState(["products"]),
    ...mapActions(["addItem"])
  }
})
export default class ProfileListShoppingCart extends Vue {
  private user: any = {};
  private userName: string = "";

  get cartProducts() {
    return this.$store.state.shoppingCartModule.products;
  }

  private mounted() {
    this.user = JSON.parse(localStorage.getItem("user") || "");
    this.userName = this.user.displayName.split(" ")[0];
  }

  private addItemOnShoppingCart() {
    this.$router.push("/");
  }
}
</script>

<style lang="less">