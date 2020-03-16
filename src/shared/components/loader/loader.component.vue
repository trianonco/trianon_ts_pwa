<template>
  <div class="view-loader" v-if="getIsLoaded()">
    <div class="view-loader-wrapper" :class="getViewLoaderWrapperClass()">
      <img class="view-loader-logo" src="../../assets/images/loaders/main-logo.png">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import LoaderHelper from "./../../helpers/loader.helper";
@Component({})
export default class RouterLoading extends Vue {
  @Prop()
  inTime!: number;

  // UI Property
  public LOAD_TIME: number = 2000;
  public UI = {
    isLoading: true,
    isLoaderOn: true
  };



  public mounted() {

    const isLoadedBefore = sessionStorage.getItem("isLoadedBefore");

    if(!isLoadedBefore){
      if (this.inTime) {
        this.LOAD_TIME = this.inTime;
      }
      setTimeout(() => {
        this.UI.isLoading = false;
        setTimeout(() => {
          this.UI.isLoaderOn = false;
          this.$emit("isLoaded");
          sessionStorage.setItem("isLoadedBefore", JSON.stringify(true));
        }, this.LOAD_TIME);
      }, this.LOAD_TIME);
      
    } else {
      this.UI.isLoading = false;
      this.UI.isLoaderOn = false;
      this.$emit("isLoaded");
    }
  }

  private getViewLoaderWrapperClass() {
    return this.UI.isLoading ? "default" : "hidden";
  }
  private getIsLoaded() {
    return this.UI.isLoaderOn;
  }
}
</script>

<style scoped lang="less">
div.view-loader {
  display: block;
  background-color: rgba(0, 0, 0, 0);
  z-index: 10000;

  width: 100vw;
  height: 100%;
  max-height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
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
div.view-loader-wrapper {
  display: block;
  background-color: white;
  z-index: 100;

  width: 100vw;
  height: 100%;
  max-height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  overflow: hidden;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
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

  &.default {
    opacity: 1;
    -webkit-transition: all 1000ms ease-in-out;
    -moz-transition: all 1000ms ease-in-out;
    -ms-transition: all 1000ms ease-in-out;
    -o-transition: all 1000ms ease-in-out;
    transition: all 1000ms ease-in-out;
  }

  &.hidden {
    opacity: 0;
    -webkit-transition: all 1000ms ease-in-out;
    -moz-transition: all 1000ms ease-in-out;
    -ms-transition: all 1000ms ease-in-out;
    -o-transition: all 1000ms ease-in-out;
    transition: all 1000ms ease-in-out;
  }
}
img.view-loader-logo {
  width: 50vw;
}

@media (min-width: 600px) {
  div.view-loader-wrapper {
    display: block;
    background-color: black;
    z-index: 100;

    width: 100vw;
    height: 100%;
    max-height: 100vh;
    position: fixed;
    top: 0px;
    left: 0px;
    overflow: hidden;

    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
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

    &.default {
      opacity: 1;
      -webkit-transition: all 1000ms ease-in-out;
      -moz-transition: all 1000ms ease-in-out;
      -ms-transition: all 1000ms ease-in-out;
      -o-transition: all 1000ms ease-in-out;
      transition: all 1000ms ease-in-out;
    }

    &.hidden {
      opacity: 0;
      -webkit-transition: all 1000ms ease-in-out;
      -moz-transition: all 1000ms ease-in-out;
      -ms-transition: all 1000ms ease-in-out;
      -o-transition: all 1000ms ease-in-out;
      transition: all 1000ms ease-in-out;
    }
  }
  img.view-loader-logo {
    width: 200px;
  }
}
</style>
