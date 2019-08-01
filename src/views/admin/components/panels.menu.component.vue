<template>
  <div class="panels-menu-wrapper">
    <Slide>
      <a
        v-for="(page,index) of pages"
        v-bind:key="index"
        @click="adminOpenPanelByTitle(page.title)"
      >
        <span
          class="panels-menu-button"
          :class="isActive(page.title)"
          v-if="isUserAllowedByPageTitle(page.title)"
        >{{ page.titulo }}</span>
      </a>
    </Slide>
  </div>
</template>
<script lang="ts">
//
//
import { Slide } from "vue-burger-menu"; // import the CSS transitions you wish to use, in this case we are using `Slide` v-show="secureMenu[page.title].includes(email)"
import { Component, Vue, Prop } from "vue-property-decorator";
@Component({
  components: { Slide }
})
export default class AdminPanelsMenuComponent extends Vue {
  @Prop({ default: [] })
  pages!: any[];
  email: string = "";

  public currentPanelTitle: string = "";
  private secureMenu = [
    {
      title: "Title",
      users: ["jl.mayorga236@gmail.com", "luiska93@hotmail.com"]
    },
    {
      title: "Dispatches",
      users: ["jl.mayorga236@gmail.com", "luiska93@hotmail.com"]
    },
    {
      title: "Users",
      users: ["jl.mayorga236@gmail.com"]
    },
    {
      title: "Swiper",
      users: ["jl.mayorga236@gmail.com", "luiska93@hotmail.com"]
    },
    {
      title: "Banners",
      users: ["jl.mayorga236@gmail.com"]
    },
    {
      title: "Products",
      users: ["jl.mayorga236@gmail.com", "luiska93@hotmail.com"]
    },
    {
      title: "Categories",
      users: ["jl.mayorga236@gmail.com", "luiska93@hotmail.com"]
    },
    {
      title: "DistributorsAndSHops",
      users: ["jl.mayorga236@gmail.com", "luiska93@hotmail.com"]
    }
  ];

  private mounted() {
    const user = JSON.parse(localStorage.getItem("user") || "");
    this.email = user.email;
    console.warn("");
    console.warn("this.email");
    console.warn(this.email);
    console.warn("");
  }

  private isUserAllowedByPageTitle(title: string) {
    const isUserAllowed = this.secureMenu.filter(
      (sMenu: any) => sMenu.title === title && sMenu.users.includes(this.email)
    );
    return isUserAllowed.length > 0;
  }

  private adminOpenPanelByTitle(title: string) {
    if (this.currentPanelTitle === title) {
      this.currentPanelTitle = "";
      this.$emit("btnChange", "");
    } else {
      this.currentPanelTitle = title;
      this.$emit("btnChange", title);
    }
  }
  private isActive(title: string): string {
    return this.currentPanelTitle === title ? "active" : "no-active";
  }
}
</script>


<style lang="less">
div.panels-menu-wrapper {
  ul {
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
  }
  li {
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    background-color: yellow;
  }
}

.panels-menu-button {
  display: block;
  width: ~"calc(100% - 2em)";
  margin: 0px 1em;
  box-sizing: border-box;
  padding: 1em 2em;
  background-color: black;
  border: 1px solid gray;
  text-align: center;
  font-family: "TrajanPro";
  color: white;
  border-radius: 1em;
  font-size: 10px;

  &.active {
    background-color: white;
    color: #000;
  }
}
.bm-menu {
  position: absolute;
  height: ~"calc(100vh - 72px - 122px - 20px)";
  padding-top: 20px;
  background-color: black;
}
.bm-item-list {
  margin-left: 0px;
}
.bm-burger-button {
  cursor: pointer;
  height: 20px;
  width: 26px;

  position: absolute;
  top: 6px;
  left: 6px;
}
.bm-item-list > * > span {
  margin-left: 1em;
}
</style>