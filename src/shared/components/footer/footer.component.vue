<template>
  <footer class="footer">
    <div class="footer-title">
      <h2>SÍGUENOS EN NUESTRAS REDES SOCIALES</h2>
    </div>
    <div class="footer-networks">
      <div class="footer-network" v-for="icon in icons" v-bind:key="icon.id">
        <a :href="icon.url" target="_blank">
          <img :src="icon.src" :alt="icon.alt" />
        </a>
      </div>
    </div>
    <div class="footer-logo">
      <img class="mobile" alt="TrianonCo Image" src="./../../assets/images/footers/bull.png" />
      <img
        class="desktop"
        alt="TrianonCo Image"
        src="./../../assets/images/footers/G-C-LÍNEA-TORO-V1.png"
      />
    </div>
    <div class="footer-copy desktop">© {{currentYear}} TRIANON S.A.S TODOS LOS DERECHOS RESERVADOS.</div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      currentYear: new Date().getFullYear(),
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
  .footer-logo {
    .mobile {
      display: block;
    }
    .desktop {
      display: none;
    }
  }

  .footer-copy {
    display: none;
  }

  @media (min-width: 600px) {
    .footer-logo {
      .mobile {
        display: none;
      }
      .desktop {
        display: block;
      }
    }

    .footer-copy {
      background-color: #3f3e3d;
      display: block;
      margin-top: -0em;
      padding: 1em;
      letter-spacing: 1px;
      font-size: 12px;
      font-family: "Open Sans";
      color: #9d9d9c;

      position: absolute;
      bottom: 0px;
      width: 100%;
    }
  }
}

@media (min-width: 600px) {
  div.view.profile {
    .footer {
      position: relative;
      bottom: 0px;
    }
  }
}
</style>
