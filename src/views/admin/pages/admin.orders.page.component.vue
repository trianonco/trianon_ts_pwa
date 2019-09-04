<template>
  <div class="admin page orders">
      <div class="wrapper">
          
          <h1>ORDENES DE COMPRA</h1>
          
          <div class="navbar">
              <div class="search-section"></div>
              <div class="filter-section"></div>
          </div>

          <div class="orders">
        
          </div>

      </div>
  </div>
</template>

<script lang="ts">
import VLazyImage from "v-lazy-image";

import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
  name: "AdminOrdersPageComponent"
})
export default class AdminOrdersPageComponent extends Vue {}
</script>

<style lang="less">
</style>