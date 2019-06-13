<template>
  <div class="admin page title">
    <h1>DISTRIBUIDORES AUTORIZADOS Y TIENDAS</h1>
    <form>
      <div class="excel-input">
        <DragAndDropExcelDistributorsComponent
          :message="'DISTRIBUIDORES AUTORIZADOS'"
          @onStart="onDragAndDropStartDistributors"
          @onLoad="onDragAndDropLoadDistributors"
        ></DragAndDropExcelDistributorsComponent>

        <div>
          <h5
            style="text-align:center;padding:0.5em;"
            v-for="(item,index) of resumeList(DATA.AUTHORIZED_DISTRIBUTORS)"
            v-bind:key="index"
          >{{ item }}</h5>
        </div>
      </div>
      <div class="excel-input">
        <DragAndDropExcelShopsComponent
          :message="'TIENDAS AUTORIZADAS'"
          @onStart="onDragAndDropStartShops"
          @onLoad="onDragAndDropLoadShops"
        ></DragAndDropExcelShopsComponent>
        <div>
          <h5
            style="text-align:center;padding:0.5em;"
            v-for="(item,index) of resumeList(DATA.AUTHORIZED_SHOPS)"
            v-bind:key="index"
          >{{ item }}</h5>
        </div>
      </div>
      <br>

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
import DragAndDropExcelDistributorsComponent from "./../components/lib/drag-and-drop-excel-distributors.componet.vue";
import DragAndDropExcelShopsComponent from "./../components/lib/drag-and-drop-excel-shops.components.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    DragAndDropExcelDistributorsComponent,
    DragAndDropExcelShopsComponent
  },
  name: "AdminDistributorsAndShopsPageComponent"
})
export default class AdminDistributorsAndShopsPageComponent extends Vue {
  private DATA: any = {
    AUTHORIZED_DISTRIBUTORS: [],
    AUTHORIZED_SHOPS: []
  };

  private isLoading: boolean = false;
  private apiDB: any = new ApiDataBase();
  private db: any = {};

  private beforeMount() {
    this.apiDB.setDatabaseByName("SETTINGS-DB");
    this.db = this.apiDB.getDatabase();
  }

  private resumeList(list: any[]) {
    const initArray = list
      .map(item => item["Correo Electrónico"] || item["Lugar"])
      .slice(0, 3);
    const midArray = ["."];
    const endArray = list
      .map(item => item["Correo Electrónico"] || item["Lugar"])
      .slice(list.length - 3, list.length);
    return [...initArray, ...midArray, ...endArray];
  }

  private onDragAndDropLoadDistributors($event: any) {
    this.isLoading = false;
    this.DATA.AUTHORIZED_DISTRIBUTORS = $event;
  }

  private onDragAndDropStartDistributors() {
    this.isLoading = true;
    this.DATA.AUTHORIZED_DISTRIBUTORS = [];
    //this.DATA.AUTHORIZED_SHOPS = [];
  }

  private onDragAndDropLoadShops($event: any) {
    this.isLoading = false;
    this.DATA.AUTHORIZED_SHOPS = $event;
  }

  private onDragAndDropStartShops() {
    this.isLoading = true;
    this.DATA.AUTHORIZED_SHOPS = [];
  }

  private clear() {
    this.DATA.AUTHORIZED_SHOPS = [];
    this.DATA.AUTHORIZED_DISTRIBUTORS = [];
  }
  private save() {
    this.isLoading = true;

    if (this.DATA.AUTHORIZED_DISTRIBUTORS.length > 0) {
      const distributors: any[] = this.DATA.AUTHORIZED_DISTRIBUTORS.map(
        (distributor: any) => {
          return {
            code: (distributor["Codigo"] || "").replace(/ +(?= )/g, ""),
            nit: (distributor["Nro nit"] || "").replace(/ +(?= )/g, ""),
            address: (distributor["Dirección"] || "").replace(/ +(?= )/g, ""),
            phone: (distributor["Teléfono"] || "").replace(/ +(?= )/g, ""),
            personal_name: {
              firstname: (distributor["Nombre 1"] || "").replace(
                / +(?= )/g,
                ""
              ),
              secondname: (distributor["Nombre 2"] || "").replace(
                / +(?= )/g,
                ""
              ),
              lastname: (distributor["Apellido 1"] || "").replace(
                / +(?= )/g,
                ""
              ),
              lastname2: (distributor["Apellido 2"] || "").replace(
                / +(?= )/g,
                ""
              ),
              fullname: `${distributor["Nombre 1"] || ""} ${distributor[
                "Nombre 2"
              ] || ""} ${distributor["Apellido 1"] || ""} ${distributor[
                "Apellido 2"
              ] || ""}`.replace(/ +(?= )/g, "")
            },
            business_name: (distributor["Razon Social"] || "").replace(
              / +(?= )/g,
              ""
            ),
            country: (distributor["Pais"] || "").replace(/ +(?= )/g, ""),
            department: (distributor["Departamento"] || "").replace(
              / +(?= )/g,
              ""
            ),
            city: (distributor["Ciudad"] || "").replace(/ +(?= )/g, ""),
            email: (distributor["Correo Electrónico"] || "").replace(
              / +(?= )/g,
              ""
            )
          };
        }
      );

      this.db
        .setAuthorizedDistributors(distributors)
        .then((response: any) => {
          this.isLoading = false;
        })
        .catch((error: any) => console.error(error));
    }

    if (this.DATA.AUTHORIZED_SHOPS.length > 0) {
      const shops: any[] = this.DATA.AUTHORIZED_SHOPS.map((shop: any) => {
        return {
          city: shop["Ciudad"] || "",
          address: shop["Dirección"] || "",
          place: shop["Lugar"] || "",
          local: shop["Local"] || "",
          phone: shop["Teléfono"] || "",
          schedule: shop["Horario Atención"] || "",
          daytime: shop["Jornada"] || ""
        };
      });


      this.db
        .setAuthorizedShops(shops)
        .then((shops: any) => {
          //this.DATA.AUTHORIZED_SHOPS = shops;
          this.isLoading = false;
        })
        .catch((error: any) => console.error(error));
    }
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