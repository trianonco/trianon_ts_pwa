<template>
  <div class="view signin">
    <!-- Home :: View-wrapper -->
    <div class="view-wrapper">
      <!-- Header  -->
      <HeaderComponent :theme="headerTheme"/>

      <!-- Login Components -->
      <LoginSigninComponent></LoginSigninComponent>
      <LoginShareComponent></LoginShareComponent>

      <!-- Footers -->
      <FooterComponent/>
    </div>
    <!-- Home // View-wrapper -->
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// Shared
import HeaderComponent from "../../shared/components/header/header.component.vue";
import FooterComponent from "../../shared/components/footer/footer.component.vue";
import LoginSigninComponent from "./components/login-signin.component.vue";
import LoginShareComponent from "./components/login-share.component.vue";
@Component({
  components: {
    HeaderComponent,
    FooterComponent,
    LoginSigninComponent,
    LoginShareComponent
  }
})
export default class Home extends Vue {
  public headerTheme = {
    color: "light",
    background: "dark"
  };
}
</script>

