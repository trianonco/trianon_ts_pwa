<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "AppTrianon",
  components: {},

  mounted() {
    localStorage.setItem("shopOnStock", JSON.stringify([]));  
  },
  data() {
    return {
      //
    };
  },

  metaInfo() {
    return {
      title: " TRIANON | Fabricación de marroquinería y accesorios en cuero ",
      meta: [
        { name: "author", content: "Jorge Luis Mayorga Taborda" },
        {
          name: "description",
          content:
            "TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."
        },
        {
          name: "keyword",
          content:
            "billeteras,billeteras colombia,envio a toda colombia,trianon,trianonshoponline,pagosonline,tienda en linea trianon,bolsos,bolsos en cuero,regalo mama ,regalo papa colombia,regalo navidad colombia,pago seguro en linea,cinturon trianon,dia del padre,billete"
        },

        // OpenGraph data (Most widely used)
        {
          property: "og:title",
          content:
            "TRIANON | Fabricación de marroquinería y accesorios en cuero "
        },
        { property: "og:site_name", content: "TRIANON" },
        { property: "og:type", content: "website" },
        {
          property: "og:url",
          content: "https://www.trianon.com.co/"
        },
        {
          property: "og:image",
          content: "https://www.trianon.com.co/img/logo.01e54327.png"
        },
        // Often the same as your meta description, but not always.
        {
          property: "og:description",
          content:
            "TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."
        },

        // Twitter card
        { name: "twitter:card", content: "summary" },
        {
          name: "twitter:site",
          content: "https://www.trianon.com.co/"
        },
        {
          name: "twitter:title",
          content:
            "TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."
        },
        {
          name: "twitter:description",
          content:
            "TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."
        },
        // Your twitter handle, if you have one.
        { name: "twitter:creator", content: "@trianonco" },
        {
          name: "twitter:image:src",
          content: "https://www.trianon.com.co/img/logo.01e54327.png"
        },

        // Google / Schema.org markup:
        { itemprop: "name", content: "My Page Title ← My Site" },
        { itemprop: "description", content: "I have things here on my site." },
        {
          itemprop: "image",
          content: "https://www.trianon.com.co/img/logo.01e54327.png"
        }
      ]
    };
  }
};
</script>
<style lang="less">
@import "./shared/styles/index.less";
</style>