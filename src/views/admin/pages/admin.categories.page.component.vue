<template>
  <div class="admin page title">
    <h1>CATEGORIAS DE LA TIENDA</h1>
    <form>
      <div class="input" v-for="(category, index) of DATA.CATEGORIES" v-bind:key="index">
        <input type="text" v-model="category.title" placeholder="Descripción">

        <div
          class="button male"
          @click="setBtnActive(category,'HOMBRE')"
          :class="btnActive(category,'HOMBRE')"
        >HOMBRE</div>
        <div
          class="button female"
          @click="setBtnActive(category,'DAMA')"
          :class="btnActive(category,'DAMA')"
        >DAMA</div>

        <div class="button remove" @click="remove(category.id)">
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>

      <div class="input">
        <input type="text" v-model="DATA.CATEGORIES_BLANK.title" placeholder="Descripción">

        <div
          class="button male"
          @click="setBtnActive(DATA.CATEGORIES_BLANK,'HOMBRE')"
          :class="btnActive(DATA.CATEGORIES_BLANK,'HOMBRE')"
        >HOMBRE</div>
        <div
          class="button female"
          @click="setBtnActive(DATA.CATEGORIES_BLANK,'DAMA')"
          :class="btnActive(DATA.CATEGORIES_BLANK,'DAMA')"
        >DAMA</div>
        <div class="button add" @click="add()">
          <i class="fas fa-plus-square"></i>
        </div>
      </div>

      <div class="buttons">
        <div class="button clear" @click="clear()">BORRAR</div>
        <div class="button save" @click="save()">GUARDAR</div>
      </div>
    </form>
    <div class="loader" v-if="isLoading">
      <img src="./../../../shared/assets/images/ajax-loader.gif" width="25px">
    </div>
  </div>
</template>

<script lang="ts">
import VLazyImage from "v-lazy-image";
import ApiDataBase from "./../../../shared/database/index";

import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
  name: "AdminTitlePageComponent"
})
export default class AdminCategoiresPageComponent extends Vue {
  private DATA: any = {
    CATEGORIES: [
      {
        id: 0,
        title: "",
        gender: []
      }
    ],
    CATEGORIES_BLANK: {
      id: 0,
      title: "",
      gender: []
    }
  };

  private isLoading: boolean = false;
  private apiDB: any = new ApiDataBase();
  private db: any = {};

  private btnActive(obj: any, gender: string) {
    return obj.gender.includes(gender) ? "active" : "no-active";
  }

  private setBtnActive(obj: any, gender: string) {
    if (!obj.gender.includes(gender)) {
      obj.gender.push(gender);
    } else {
      obj.gender = obj.gender.filter((_gender: any) => _gender !== gender);
    }
  }

  private beforeMount() {
    this.apiDB.setDatabaseByName("SETTINGS-DB");
    this.db = this.apiDB.getDatabase();

    this.isLoading = true;
    this.db
      .getShopCategories()
      .then((categories: any) => {
        this.DATA.CATEGORIES = categories;
        this.isLoading = false;
      })
      .catch((error: any) => console.error(error));
  }

  private remove(id: number) {
    if (confirm("Seguro deseas borrar esta categoria ?")) {
      this.DATA.CATEGORIES = this.DATA.CATEGORIES.filter(
        (category: any) => category.id !== id
      );
    }
  }

  private add() {
    this.DATA.CATEGORIES_BLANK.id = this.DATA.CATEGORIES.length;
    this.DATA.CATEGORIES.push(
      JSON.parse(JSON.stringify(this.DATA.CATEGORIES_BLANK) + "")
    );
    this.DATA.CATEGORIES_BLANK.title = "";
    this.DATA.CATEGORIES_BLANK.gender = [];
  }

  private clear() {
    this.isLoading = true;
    this.db
      .getShopCategories()
      .then((categories: any) => {
        this.DATA.CATEGORIES = categories;
        this.isLoading = false;
      })
      .catch((error: any) => console.error(error));
  }
  private save() {
    this.isLoading = true;

    this.db
      .setShopCategories(this.DATA.CATEGORIES)
      .then((categories: any) => {
        this.DATA.CATEGORIES = categories;
        this.isLoading = false;
      })
      .catch((error: any) => console.error(error));
  }
}
</script>

<style scoped lang="less">
.loader {
  width: 100vw;
  height: 100vh;
  background-color: rgba(50, 50, 50, 0.85);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10000000;
  filter: blur(1px);

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
form {
  display: block;
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding: 1em;
}
div.input {
  display: block;
  width: 100%;
  border: none;
  position: relative;
  box-sizing: border-box;
  border: 1px solid rgba(100, 100, 100, 0.5);
  border-radius: 0.5em;
  padding: 0.5em;
  margin-bottom: 1em;
}

input {
  display: block;
  width: 100%;
  border: none;

  box-sizing: border-box;
  padding: 0.5em;
}

.buttons {
  width: 100%;
  box-sizing: border-box;
  padding: 1em;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}
.button {
  display: block;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 1em;
  color: white;
  padding: 1em;
  margin: 0.5em;

  font-family: "Open Sans";
  font-weight: normal;
  font-style: normal;

  cursor: pointer;

  &.male,
  &.female {
    width: ~"calc(50% - 3.5em)";
    display: inline-block;
    padding: 0.25em;
    margin: 0.5em;
    border: 1px solid #6a8ebb;
    color: #6a8ebb;
    text-align: center;
    border-radius: 0.5em;
    &.active {
      background-color: #6a8ebb;
      color: white;
    }
  }

  &.remove {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 0em;
    margin: 0em;
    color: #000;
    padding: 0.5em;
    font-size: 1.24em;
  }

  &.add {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 0em;
    margin: 0em;
    color: #000;
    padding: 0.5em;
    font-size: 1.24em;
  }

  &.save {
    background-color: #34a853;
    color: white;
  }

  &.clear {
    background-color: #ea4335;
    color: white;
  }
}
</style>