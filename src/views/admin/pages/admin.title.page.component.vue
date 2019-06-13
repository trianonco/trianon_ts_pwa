<template>
  <div class="admin page title">
    <h1>TITULO</h1>
    <form>
      <div class="input">
        <input type="text" v-model="DATA.title" placeholder="Titulo del Header">
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
    title: ""
  };

  private isLoading: boolean = false;
  private apiDB: any = new ApiDataBase();
  private db: any = {};

  private beforeMount() {
    this.apiDB.setDatabaseByName("SETTINGS-DB");
    this.db = this.apiDB.getDatabase();

    this.isLoading = true;
    this.db
      .getTitle()
      .then((title: string) => {
        this.DATA.title = title;
        this.isLoading = false;
      })
      .catch((error: any) => console.error(error));
  }

  private clear() {
    this.DATA.title = "";
  }
  private save() {
    this.isLoading = true;
    this.db
      .setTitle(this.DATA.title)
      .then((title: string) => {
        console.log(title);
        //this.DATA.title = title;
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
  box-sizing: border-box;
  border: 1px solid rgba(100, 100, 100, 0.5);
  border-radius: 0.5em;
  padding: 0.5em;
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