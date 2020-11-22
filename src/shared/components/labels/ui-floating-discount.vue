<template>
    <div class="ui ui-label ui-label-floating-discount">
            <h5> - {{  discount }} % </h5>
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";

@Component({
  components: {
    VLazyImage
  }
})
export default class UIFloatingDiscuontComponent extends Vue {

  @Prop()
  discount!: number;

}
</script>


<style lang="less">
 .ui.ui-label.ui-label-floating-discount{
      display: block;
      position: absolute;
      top: 0px;
      right: 0px;
      background-color: #62549f;
      color: white;
      padding: 0.5em 0.83em;
      z-index: 1000;
   h5{
        padding:0px;
        margin:0px;
        font-size: 14px;
        letter-spacing: 1px;
        font-family: 'Open Sans';
        font-display: block;
        font-weight: bold;
        transform: scaleY(0.9);
   }
  }
@media (min-width: 600px) {

}
</style>