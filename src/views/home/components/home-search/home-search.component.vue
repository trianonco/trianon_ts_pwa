<template>
  <div class="search-bar-and-chat">
    <div class="search-bar" @click="openSearchResults()">
      <img alt="TrianonCo Image" src="../../../../shared/assets/images/search/lupa-icon.png">
      <input type="text" placeholder="BUSCAR" v-model="searchKeyword">
    </div>

    <div class="search-results" :class="getSearchResultsClass()">
      <div class="close-button" @click="closeSearchResults()">x</div>
      <ul>
        <li v-for="item of results" v-bind:key="item.id">
          <div v-if="isItemOnSearch(item)">
            <img alt="TrianonCo Image" src="../../../../shared/assets/images/gender-categories/bullet-gray.png">
            <h5>{{ item.description }}</h5>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import StringHelper from "./../../../../shared/helpers/string.helper";
export default {
  name: "HomeSearchBarComponent",

  methods: {
    isItemOnSearch(item) {
      const itemUpperCase = item.description.toUpperCase();
      const keywordUpperCase = this.searchKeyword.toUpperCase();
      return itemUpperCase.includes(keywordUpperCase);
    },
    closeSearchResults() {
      this.isClosed = true;
    },
    openSearchResults() {
      this.isClosed = false;
    },
    getSearchResultsClass() {
      if (this.isClosed) {
        return "closed";
      } else {
        return "opened";
      }
    }
  },

  mounted() {
    const resultsAsArray = this.results.map(result =>
      result.description.toUpperCase()
    );
    this.stringHelper.setWordsList(resultsAsArray);
  },

  data() {
    return {
      isClosed: true,

      searchKeyword: "",

      stringHelper: new StringHelper(),

      results: [
        { id: 0, description: "Billeteras Mujer", gender: ["FEMALE"] },
        { id: 1, description: "Billeteras Hombre", gender: ["MALE"] },
        { id: 2, description: "Bolsos y Maletines Mujer", gender: ["FEMALE"] },
        { id: 3, description: "Bolsos y Maletines Homber", gender: ["MALE"] },
        { id: 4, description: "Cinturones Mujer", gender: ["FEMALE"] },
        { id: 5, description: "Cinturones Hombre", gender: ["MALE"] },
        { id: 6, description: "LLaveros Mujer", gender: ["FEMALE"] },
        { id: 7, description: "LLaveros Hombre", gender: ["MALE"] }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import (reference) "./../../../../shared/styles/index.less";
.search-bar-and-chat {
  height: @size-search-height;
  width: 100vw;

  background-color: black;
  color: #fff;
  position: relative;
  z-index: 120;

  #Font-TrajanPro();
  h1 {
    #Font-Title();
    font-size: (@1pm + 4px);

    width: fit-content;
    margin: 0px;
    padding-bottom: 10px;
  }
}

.search-results {
  display: block;
  width: 100%;
  height: calc(@size-home-search-content + @size-home-gender-content);

  z-index: 100;

  position: relative;

  background-color: white;
  background-image: url("./../../../../shared/assets/images/search/border-top.png");
  background-repeat: no-repeat;
  background-size: 100% 4px;

  .close-button {
    position: absolute;
    top: 5px;
    right: 5px;
    padding: 0.5em;
    transform: scaleY(0.75);
  }

  ul {
    width: 100%;
    box-sizing: border-box;
    padding: 2em;
  }
  li {
    display: block;
    vertical-align: middle;
    width: fit-content;
    img {
      display: inline-block;
      width: 0.5em;
      vertical-align: middle;
      padding: 5px;
    }
    h5 {
      #Font-Title();
      font-size: (@1pm + 4px);
      display: inline-block;
      vertical-align: middle;
      width: fit-content;
      padding: 5px;
    }
  }

  &.closed {
    top: 0px;
    -webkit-transition: all 500ms ease-in-out;
    -moz-transition: all 500ms ease-in-out;
    -ms-transition: all 500ms ease-in-out;
    -o-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;
  }
  &.opened {
    -webkit-transition: all 500ms ease-in-out;
    -moz-transition: all 500ms ease-in-out;
    -ms-transition: all 500ms ease-in-out;
    -o-transition: all 500ms ease-in-out;
    transition: all 500ms ease-in-out;
    top: calc(
      0px - @size-home-search-content - @size-search-height -
        @size-gender-buttons-height
    );
  }

  background-color: white;
  color: black;
}

.search-bar {
  position: relative;
  z-index: 150;

  width: 100vw;
  box-sizing: border-box;
  padding: 0em 2em;
  height: @size-search-height;
  margin: 0 auto;
  background-color: black;
  color: #fff;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-justify-content: flex-start;
  -ms-flex-pack: start;
  justify-content: flex-start;
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  img {
    width: 2.25em;
  }
  input {
    margin: 0em 0em 0em 1em;
    background-color: black;
    padding-bottom: 0.5em;
    border: none;
    outline: none;
    border-bottom: 1px solid white;
    color: white;
    font-size: 0.75em;
    letter-spacing: 0.1em;
    width: ~"calc(100% - 6.5em)";
    #Font-TrajanPro();
  }
}
</style>
