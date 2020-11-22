<template>
  <div class="drag-and-drop-excel">
    <div id="drop-area">
      <form class="my-form">
        <input
          type="file"
          id="fileElem1"
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
          @change="handleFiles"
        >
        <label
          class="button"
          style="text-align:center"
          for="fileElem1"
        >{{ message ? message : 'ARRASTRA TU ARCHIVO EXCEL ACA ' }}</label>
      </form>
    </div>
  </div>
</template>

<script>
import xlsx from "xlsx";
export default {
  name: "DragAndDropExcelComponent",
  props: ["message"],

  data() {
    return {};
  },
  methods: {
    handleFiles(event) {
      this.$emit("onStart");

      var f = event.target.files[0];

      var reader = new FileReader();
      reader.readAsArrayBuffer(f);

      var name = f.name;
      var self = this;

      reader.onload = function(e) {
        var data = e.target.result;
        var fixedData = self.fixdata(data);
        var workbook = xlsx.read(btoa(fixedData), { type: "base64" });
        var worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const results = xlsx.utils.sheet_to_json(worksheet);
        results.map(obj => {
          const objValues = Object.values(obj);
          const objKeys = Object.keys(obj);
          objKeys.map(key => {
            //obj[key] = obj[key].replace(/ +(?= )/g, "");
            const objValue = (obj[key] + " ")
              .toUpperCase()
              .replace(/ +(?= )/g, "");
            obj[key] = objValue;
          });

          return obj;
        });

        //  str.replace(/ +(?= )/g,'');

        self.$emit("onLoad", results);
      };
    },
    fixdata(data) {
      var o = "",
        l = 0,
        w = 10240;
      for (; l < data.byteLength / w; ++l)
        o += String.fromCharCode.apply(
          null,
          new Uint8Array(data.slice(l * w, l * w + w))
        );
      o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
      return o;
    }
  }
};
</script>

<style lang="less">
@import (reference) "./../../../../shared/styles/index.less";
div.drag-and-drop-excel {
  #drop-area {
    border: 2px dashed #ccc;
    border-radius: 20px;
    width: ~"calc(100% - 5em)";
    font-family: sans-serif;
    margin: 20px auto;
    padding: 20px;
  }
  #drop-area.highlight {
    border-color: purple;
  }
  p {
    margin-top: 0;
  }
  .my-form {
    margin-bottom: 0px;
    input {
      display: block;
      width: fit-content;
      margin: 0px auto;
    }
    label {
      display: block;
      width: fit-content;
      margin: 0px auto;
    }
  }
  #gallery {
    margin-top: 10px;
  }
  #gallery img {
    width: 150px;
    margin-bottom: 10px;
    margin-right: 10px;
    vertical-align: middle;
  }
  .button {
    display: inline-block;
    padding: 10px;
    background: #ddd;
    cursor: pointer;
    border-radius: 5px;
    border: 1px solid #ccc;
    text-align: center;
  }
  .button:hover {
    background: #ddd;
  }
  #fileElem1 {
    display: none;
  }
}
</style>
