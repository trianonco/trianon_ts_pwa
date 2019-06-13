<template>
  <div class="admin page title">
    <h1>SWIPER</h1>
    <form>
      <div class="input" v-for="(swiper, index) of DATA.SWIPER" v-bind:key="index">
        <input type="text" v-model="swiper.id" placeholder="Posición">
        <input type="text" v-model="swiper.description" placeholder="Descripción">
        <input type="text" v-model="swiper.filename_hd" placeholder="Nombre de Archivo de HD">
        <input type="text" v-model="swiper.filename_thumb" placeholder="Hombre de Archivo Thumb">
        <div class="button remove" @click="remove(swiper.id)">
          <i class="fas fa-trash-alt"></i>
        </div>
      </div>

      <div class="input">
        <input type="text" v-model="DATA.SWIPER_BLANK.description" placeholder="Descripción">
        <input
          type="text"
          v-model="DATA.SWIPER_BLANK.filename_hd"
          placeholder="Nombre de Archivo de HD"
        >
        <input
          type="text"
          v-model="DATA.SWIPER_BLANK.filename_thumb"
          placeholder="Hombre de Archivo Thumb"
        >
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
export default class AdminTitlePageComponent extends Vue {
  private DATA: any = {
    SWIPER: [
      {
        id: 0,
        description: "",
        filename_hd: "",
        filename_thumb: ""
      },
      {
        id: 1,
        description: "",
        filename_hd: "",
        filename_thumb: ""
      }
    ],
    SWIPER_BLANK: {
      id: 0,
      description: "",
      filename_hd: "",
      filename_thumb: ""
    }
  };

  private isLoading: boolean = false;
  private apiDB: any = new ApiDataBase();
  private db: any = {};

  private beforeMount() {
    this.apiDB.setDatabaseByName("SETTINGS-DB");
    this.db = this.apiDB.getDatabase();

    this.isLoading = true;
    this.db
      .getSwiperSlides()
      .then((swiper: any) => {
        this.DATA.SWIPER = swiper;
        this.isLoading = false;
      })
      .catch((error: any) => console.error(error));
  }

  private remove(id: number) {
    if (confirm("Seguro deseas borrar este Slide del Swiper?")) {
      this.DATA.SWIPER = this.DATA.SWIPER.filter(
        (swiper: any) => swiper.id !== id
      );
    } else {
    }
  }

  private add() {
    this.DATA.SWIPER_BLANK.id = this.DATA.SWIPER.length;
    this.DATA.SWIPER.push(
      JSON.parse(JSON.stringify(this.DATA.SWIPER_BLANK) + "")
    );
    this.DATA.SWIPER_BLANK.description = "";
    this.DATA.SWIPER_BLANK.filename_hd = "";
    this.DATA.SWIPER_BLANK.filename_thumb = "";
  }

  private clear() {
    this.isLoading = true;
    this.db
      .getSwiperSlides()
      .then((swiper: any) => {
        this.DATA.SWIPER = swiper;
        this.isLoading = false;
      })
      .catch((error: any) => console.error(error));
  }
  private save() {
    this.isLoading = true;
    this.db
      .setSwiperSlides(this.DATA.SWIPER)
      .then((swiper: any) => {
        this.DATA.SWIPER = swiper;
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