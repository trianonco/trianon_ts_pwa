<template>
  <div class="home">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide>
        <div class="trianon-slide">I'm Slide 1</div>
      </swiper-slide>
      <swiper-slide>
        <div class="trianon-slide">I'm Slide 2</div>
      </swiper-slide>
      <swiper-slide>
        <div class="trianon-slide">I'm Slide 3</div>
      </swiper-slide>
      <swiper-slide>
        <div class="trianon-slide">I'm Slide 4</div>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      <div class="swiper-scrollbar" slot="scrollbar"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/shared/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  public swiperOption: any = {};

  get swiper() {
    return (this.$refs.mySwiper as any).swiper;
  }
}
</script>

<style lang="less">
div.trianon-slide {
  display: block;
  width: 100vw;
  height: 100vh;
  background-color: gray;
}
</style>
