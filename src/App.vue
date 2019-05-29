<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},

  mounted() {
    localStorage.setItem("shopOnStock", JSON.stringify([]));
  },
  data() {
    return {
      //
    };
  }
};
</script>
<style lang="less">
@import "./shared/styles/index.less";
</style>