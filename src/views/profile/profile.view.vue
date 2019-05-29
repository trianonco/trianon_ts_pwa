<template>
  <div class="view profile">
    <!-- Home :: View-wrapper -->
    <div class="view-wrapper">
      <!-- Header  -->
      <HeaderComponent :theme="headerTheme"/>

      <ProfileEmptyShopppingCartComponent></ProfileEmptyShopppingCartComponent>

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

import ProfileEmptyShopppingCartComponent from "./components/profile-empty-shopping-cart.component.vue";
@Component({
  components: {
    HeaderComponent,
    FooterComponent,
    ProfileEmptyShopppingCartComponent
  }
})
export default class ProfileView extends Vue {
  public headerTheme = {
    color: "light",
    background: "dark"
  };
}
</script>

