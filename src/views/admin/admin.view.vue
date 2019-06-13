<template>
  <div class="view admin">
    <div class="wrapper">
      <!-- Headers -->
      <HeaderComponent/>

      <!-- Panels -->
      <div class="panels">
        <!-- Menu -->
        <div class="panels-menu">
          <AdminPanelsMenuComponent :pages="pages" @btnChange="setPanelByTitle"></AdminPanelsMenuComponent>
        </div>

        <!-- Content -->
        <div class="panels-content">
          <div class="panel no-module" style="padding:2em" v-if="!currentPageTitle">
            <h1>Trianon Panel de Admin</h1>
            <img src="./../../shared/assets/images/headers/logo.png">
            <h5>Selecciona un modulo del menu</h5>
          </div>

          <div class="panel" v-for="(page,index) of pages" v-bind:key="index">
            <div v-if="isPanelActiveByTitle(page.title)">
              <div class="panel-content" style=" padding: 2em 1em;">
                <component :is="page.component"></component>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footers -->
      <FooterComponent/>
    </div>
  </div>
</template>

<script lang="ts">
import VLazyImage from "v-lazy-image";

import { Component, Vue } from "vue-property-decorator";

import HeaderComponent from "./../../shared/components/header/header.component.vue";
import FooterComponent from "./../../shared/components/footer/footer.component.vue";

import AdminPanelsMenuComponent from "./components/panels.menu.component.vue";

import AdminTitle from "./pages/admin.title.page.component.vue";
import AdminUsers from "./pages/admin.users.page.component.vue";
import AdminSwiper from "./pages/admin.swiper.page.component.vue";
import AdminBanners from "./pages/admin.banners.page.component.vue";
import AdminProducts from "./pages/admin.products.page.component.vue";
import AdminCategories from "./pages/admin.categories.page.component.vue";
import AdminDistributorsAndShops from "./pages/admin.distributors.and.shops.page.component.vue";

@Component({
  components: {
    VLazyImage,
    HeaderComponent,
    FooterComponent,
    AdminPanelsMenuComponent,
    AdminTitle,
    AdminUsers,
    AdminSwiper,
    AdminBanners,
    AdminProducts,
    AdminCategories,
    AdminDistributorsAndShops
  }
})
export default class AdminViewComponent extends Vue {
  private pages: any[] = [
    {
      title: "Title",
      titulo: "Titulo",
      component: AdminTitle
    },
    {
      title: "Users",
      titulo: "Usuarios",
      component: AdminUsers
    },
    {
      title: "Swiper",
      titulo: "Swiper",
      component: AdminSwiper
    },
    {
      title: "Banners",
      titulo: "Banners",
      component: AdminBanners
    },
    {
      title: "Products",
      titulo: "Productos",
      component: AdminProducts
    },
    {
      title: "Categories",
      titulo: "Categorias",
      component: AdminCategories
    },
    {
      title: "DistributorsAndSHops",
      titulo: "Distribuidores y Tiendas",
      component: AdminDistributorsAndShops
    }
  ];

  private currentPageTitle: string = "";

  private getEnablePanelByUserRole(panelName: string): boolean {
    return true;
  }

  private isPanelActiveByTitle(title: string): boolean {
    return (
      this.getEnablePanelByUserRole(title) && this.currentPageTitle === title
    );
  }

  private setPanelByTitle(title: string) {
    this.currentPageTitle = title;
    console.warn("setPanelByTitle :: " + title);
  }
}
</script>

<style lang="less">
@import "./admin.view.style.less";
</style>