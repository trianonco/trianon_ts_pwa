<template>
  <footer class="footer">
    <div class="footer-title">
      <h2>SÍGUENOS EN NUESTRAS REDES SOCIALES</h2>
    </div>
    <div class="footer-networks">
      <div class="footer-network" v-for="icon in icons" v-bind:key="icon.id">
        <a :href="icon.url" target="_blank">
          <img :src="icon.src" :alt="icon.alt">
        </a>
      </div>
    </div>
    <div class="footer-logo">
      <img src="./../../assets/images/footers/bull.png" class alt>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      icons: [
        {
          id: 0,
          alt: "Facebook",
          url: "https://www.facebook.com/trianonoficial/",
          src: require("./../../assets/images/footers/fb.png")
        },
        {
          id: 1,
          alt: "Instagram",
          url: "https://www.instagram.com/trianonoficial/",
          src: require("./../../assets/images/footers/instagram.png")
        },
        {
          id: 2,
          alt: "Twitter",
          url: "https://twitter.com/TrianonOficial",
          src: require("./../../assets/images/footers/twitter.png")
        },
        {
          id: 3,
          alt: "Pinterest",
          url: "https://co.pinterest.com/TrianonOficial/",
          src: require("./../../assets/images/footers/pinterest.png")
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "./footer.style.less";
.footer {
  #constructor-footer();
  text-align: center;
}
</style>
