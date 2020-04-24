<template>
    <div class="ui ui-label ui-label-price-tag">

        <h5>{{ (parseFloat(price)*(1 - 0.01*parseFloat(discount || 0))) | toCurrency}}</h5>

        <h5 v-if="discount && parseFloat(discount) > 0" style="padding-left:4px;  text-decoration: line-through;">{{ parseFloat(price) | toCurrency}}</h5>

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
export default class UIPriceTagComponent extends Vue {

  @Prop()
  discount!: number;

  @Prop()
  price!: number;

}
</script>


<style lang="less">
 .ui.ui-label.ui-label-price-tag{
    display: block;
    color: white;
    text-align: center;
    padding: 0.5em;

     display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;

    h5{
        width: fit-content;
        font-size: 14px;
        letter-spacing: 1px;
        font-family: 'TrajanPro';
        font-display: block;
        font-weight: normal;
        font-style: normal;
        transform: scaleY(0.9);
    }
}
@media (min-width: 600px) {

}
</style>