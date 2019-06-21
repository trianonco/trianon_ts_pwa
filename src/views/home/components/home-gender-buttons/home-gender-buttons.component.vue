<template>
  <div class="gender-buttons home-gender-buttons">
    <div class="gender-selector">
      <div class="gender-buttons">
        <div class="gender-button female" @click="openGenderContent('DAMA')">
          <div class="wrapper" :class="getActiveClassByGender('DAMA')">
            <h3>MUJER</h3>
          </div>
        </div>
        <div class="gender-button male" @click="openGenderContent('HOMBRE')">
          <div class="wrapper" :class="getActiveClassByGender('HOMBRE')">
            <h3>HOMBRE</h3>
          </div>
        </div>
      </div>
    </div>

    <div class="gender-contents" :class="getStatusClass()">
      <div class="gender-content">
        <div class="close-button" @click="closeGenderContent()">x</div>
        <ul class="categories" :class="getGenderClass()">
          <li class="category" v-for="category in categories" v-bind:key="category.id">
            <div v-if="isCategoryByGender(category)">
              <img
                src="../../../../shared/assets/images/gender-categories/bullet-gold.png"
                v-if="selectedItemID === category.id"
              >
              <img
                src="../../../../shared/assets/images/gender-categories/bullet-gray.png"
                v-if="selectedItemID !== category.id"
              >
              <h5
                @click="goToProductsByCodeAndGender(category.id, category, gender)"
              >{{ category.title }}</h5>
            </div>
          </li>
        </ul>
        <div class="border">
          <img
            src="../../../../shared/assets/images/gender-categories/female-border.png"
            v-if="gender === 'FEMALE'"
          >
          <img
            src="../../../../shared/assets/images/gender-categories/male-border.png"
            v-if="gender === 'MALE'"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ApiDataBase from "./../../../../shared/database/index";
import { Component, Vue } from "vue-property-decorator";
@Component({})
export default class HomeGenderButtonsComponent extends Vue {
  private gender: string = "";
  private categories: any[] = [];
  private isOpen: boolean = false;
  private selectedItemID: number = -1;

  private mounted() {
    const apiDB = new ApiDataBase();
    apiDB.setDatabaseByName("SETTINGS-DB");
    const db = apiDB.getDatabase();

    db.getShopCategories().then((categories: any) => {
      this.categories = categories;
    });
  }

  private getActiveClassByGender(gender: string) {
    return this.gender === gender ? "active" : "default";
  }

  private getStatusClass() {
    return this.isOpen ? "opened" : "closed";
  }

  private getGenderClass() {
    return this.gender;
  }

  private isCategoryByGender(category: any) {
    return category.gender.filter((gender: any) => gender == this.gender);
  }

  private closeGenderContent() {
    this.isOpen = false;
    setTimeout(() => {
      this.gender = "";
    }, 500);
  }
  private openGenderContent(gender: string) {
    this.isOpen = true;
    this.gender = gender;
  }

  private goToProductsByCodeAndGender(
    id: string,
    category: any,
    gender: string
  ) {
    this.selectedItemID = parseInt(id);
    setTimeout(() => {
      this.selectedItemID = 0;
      this.$router.push({
        name: "shopCategoryGender",
        params: {
          category: category.title,
          gender: gender
        }
      });
    }, 500);
  }
}
</script>

<style lang="less">
@import "./home-gender-buttons.componet.style.less";
div.gender-buttons.home-gender-buttons {
  #constructor-home-gender-buttons();
}
div.gender-buttons {
  text-align: center;
  #constructor-gender-buttons();
}
div.gender-contents {
  #constructor-gender-contents();
}

@media (min-width: 600px) {
  .gender-buttons.home-gender-buttons {
    display: none;
  }
}
</style>
