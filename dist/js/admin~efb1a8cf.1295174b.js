(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin~efb1a8cf"],{"35e2":function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"admin page orders"},[o("div",{staticClass:"wrapper"},[o("h1",[e._v("ORDENES DE COMPRA")]),o("div",{staticClass:"orders"},[o("vue-good-table",{attrs:{"search-options":{enabled:!0},"select-options":{enabled:!0},columns:e.columns,rows:e.queue},on:{"on-selected-rows-change":e.selectionChanged}},[o("div",{attrs:{slot:"selected-row-actions"},slot:"selected-row-actions"},[o("button",{staticStyle:{display:"block"},on:{click:function(t){return e.downloadInvoices()}}},[e._v(" Descargar InVoices ")])])])],1)])])},n=[],r=(o("a481"),o("ac6a"),o("d225")),i=o("b0b4"),c=o("308d"),s=o("6bb5"),d=o("4e2b"),u=o("9ab4"),l=(o("dac4"),o("f617")),f=o("60a3"),A=o("185b"),p=o("59ca"),g=o.n(p),O=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.apiDB=new A["a"],e.db={},e.inVoices=[],e.queue=[],e.ORDER_STATE="IN PROCESS: PAYMENT SUCCESSFULL",e.columns=[{label:"Ref",field:"ref"},{label:"Email",field:"email",type:"string"},{label:"Telefóno",field:"phone",type:"string"},{label:"Producto",field:"product",type:"string"},{label:"Foto",field:"photo",html:!0},{label:"InVoice",field:"invoice",html:!0},{label:"Fecha Compra",field:"createdAt",type:"date",dateInputFormat:"dd-MM-yyyy",dateOutputFormat:"dd/MM/yyyy"}],e.rows=[{ref:"REF_OERFEF_eRF",email:"wallamejorge@hotmail.com",phone:"300531837",product:"BOTAS NEGRAS",photo:'<img style="width:50px" src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fhd%2FHR156-01-01.jpg?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01">',invoice:'<a href="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F07f3518fcbc0d26abd6ec782d01a827b.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7" download="w3logo"> DESCARGAR </a>'},{ref:"REF_OERFEF_eRF",email:"wallamejorge@hotmail.com",phone:"300531837",product:"BOTAS NEGRAS",photo:'<img style="width:50px" src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fhd%2FHR156-01-01.jpg?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01">',invoice:'<a href="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F07f3518fcbc0d26abd6ec782d01a827b.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7" download="w3logo"> DESCARGAR </a>'},{ref:"REF_OERFEF_eRF",email:"wallamejorge@hotmail.com",phone:"300531837",product:"BOTAS NEGRAS",photo:'<img style="width:50px" src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fhd%2FHR156-01-01.jpg?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01">',invoice:'<a href="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F07f3518fcbc0d26abd6ec782d01a827b.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7" download="w3logo"> DESCARGAR </a>'}],e}return Object(d["a"])(t,e),Object(i["a"])(t,[{key:"beforeMount",value:function(){var e=this,t=g.a.firestore();this.queue=[],t.collection("SHOPPING_HISTORY").get().then(function(t){t.forEach(function(t){var o=t.data(),a=o.meta.createdAt.toDate(),n=a.getDate(),r=a.getMonth()+1,i=a.getFullYear();a=r<10?"".concat(n,"-0").concat(r,"-").concat(i):"".concat(n,"-").concat(r,"-").concat(i);var c=o.products.map(function(e){return e.ref}).reduce(function(e,t){return e+" "+t},""),s=o.products.map(function(e){return e.ref_photo_code}).reduce(function(e,t){return" <br> "+'<img style="width:50px" src="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos%2Fhd%2F'.concat(decodeURI(t).replace(" ",""),'-01.jpg?alt=media&token=c392cfe1-c92e-4bb8-97f1-cf815a641f01">')+e+" <br> "},""),d=o.products.map(function(e){return e.description}).reduce(function(e,t){return e+" "+t}),u={ref:c,email:o.shipping.email,phone:o.shipping.phone,product:d,createdAt:a,photo:s,invoice:'<a href="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-InVoices%2F'.concat(o.ID,'.pdf?alt=media&token=f0f2ab54-4e49-4d22-9e79-ab18233e4af7" download="').concat(o.ID,'" target="_blank"> DESCARGAR </a>')};o.state!==e.ORDER_STATE&&"IN PROCESS: IN FACTORY"!==o.state||(e.queue.push(u),console.warn(u))})})}},{key:"mount",value:function(){}},{key:"selectionChanged",value:function(e){var t=e.selectedRows;console.error(t);var o=t.map(function(e){return e.invoice.replace('<a href="',"").replace('" download="w3logo"> DESCARGAR </a>')});console.warn(""),console.warn(o),this.inVoices=o}},{key:"downloadInvoices",value:function(){this.inVoices}},{key:"download_file",value:function(e,t){var o=document.createElement("a");o.href=e,o.download=t,document.body.appendChild(o),o.click(),document.body.removeChild(o)}}]),t}(f["c"]);O=u["__decorate"]([Object(f["a"])({components:{VueGoodTable:l["a"]},name:"AdminOrdersPageComponent"})],O);var R=O,E=R,h=o("2877"),S=Object(h["a"])(E,a,n,!1,null,null,null);t["a"]=S.exports},4013:function(e,t,o){},"4c20":function(e,t,o){},"710d":function(e,t,o){"use strict";var a=o("4013"),n=o.n(a);n.a},b8b8:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"admin page"})},n=[],r=o("d225"),i=o("308d"),c=o("6bb5"),s=o("4e2b"),d=o("9ab4"),u=o("60a3"),l=function(e){function t(){return Object(r["a"])(this,t),Object(i["a"])(this,Object(c["a"])(t).apply(this,arguments))}return Object(s["a"])(t,e),t}(u["c"]);l=d["__decorate"]([Object(u["a"])({components:{},name:"AdminTitlePageComponent"})],l);var f=l,A=f,p=o("2877"),g=Object(p["a"])(A,a,n,!1,null,null,null);t["a"]=g.exports},ca25:function(e,t,o){"use strict";var a=o("e7f7"),n=o.n(a);n.a},d967:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin page products"},[a("form",[a("DragAndDropExcelProductsComponent",{attrs:{message:"PRODUCTOS"},on:{onStart:e.onDragAndDropStartProducts,onLoad:e.onDragAndDropLoadProducts}}),a("div",{staticClass:"buttons"},[a("div",{staticClass:"button clear",on:{click:function(t){return e.clear()}}},[e._v("BORRAR")]),a("div",{staticClass:"button save",on:{click:function(t){return e.save()}}},[e._v("GUARDAR")])])],1),e.isLoading?a("div",{staticClass:"loader"},[a("img",{attrs:{src:o("b2fa"),width:"25px"}})]):e._e()])},n=[],r=(o("456d"),o("6762"),o("2fdb"),o("ac6a"),o("8615"),o("20d6"),o("55dd"),o("28a5"),o("96cf"),o("3b8d")),i=o("d225"),c=o("b0b4"),s=o("308d"),d=o("6bb5"),u=o("4e2b"),l=o("9ab4"),f=o("185b"),A=o("acee"),p=o("60a3"),g=o("9a8a"),O=o.n(g),R=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(s["a"])(this,Object(d["a"])(t).apply(this,arguments)),e.isLoading=!1,e.apiDB=new f["a"],e.db={},e.PRODUCTS=[],e}return Object(u["a"])(t,e),Object(c["a"])(t,[{key:"beforeMount",value:function(){this.apiDB.setDatabaseByName("SHOP-DB"),this.db=this.apiDB.getDatabase()}},{key:"onDragAndDropStartProducts",value:function(){this.isLoading=!0}},{key:"onDragAndDropLoadProducts",value:function(e){var t=this;e.map(function(e){var o={ref:t.getProductRef(e),ref_code:t.getProductRefCode(e),ref_color_code:t.getProductRefColorCode(e),ref_size_code:t.getProductRefSizeCode(e),ref_photo_code:t.getProductRefPhotoCode(e),discount:t.getProductDiscount(e),description:t.getProductDescription(e),gender:t.getProductGender(e),category:t.getProductCategory(e).toUpperCase(),short_name:t.getProductShortName(e),barcode:t.getProductBarCode(e),price_cop:t.getProductPriceCOP(e),price_usd:t.getProductPriceUSD(e),line:t.getProductLine(e),color:t.getProductColor(e),height:t.getProductHeight(e),width:t.getProductWidth(e),depth:t.getProductDepth(e)};t.PRODUCTS.push(o)}),this.isLoading=!1}},{key:"save",value:function(){var e=Object(r["a"])(regeneratorRuntime.mark(function e(){var t,o,a,n,r,i,c,s,d,u,l,f,A,p,g,O,R,E,h,S,m,P,T,v,b;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:console.warn("----------------------------------------------------------------------"),this.isLoading=!0,t=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"BILLETERAS"===e.category}),o=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"BOLSOS Y MALETINES"===e.category}),a=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"CINTURONES"===e.category}),n=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"LLAVEROS"===e.category}),r=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"PORTA LLAVES"===e.category}),i=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"MONEDEROS Y TARJETEROS"===e.category}),c=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"PORTA BILLETES"===e.category}),s=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"PORTA COSMÉTICOS"===e.category}),d=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"PORTA DOCUMENTOS"===e.category}),u=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"PORTA PASAPORTES"===e.category}),l=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"BILLETERAS"===e.category}),f=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"BOLSOS Y MALETINES"===e.category}),A=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"CINTURONES"===e.category}),p=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"LLAVEROS"===e.category}),g=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"PORTA LLAVES"===e.category}),O=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"MONEDEROS Y TARJETEROS"===e.category}),R=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"PORTA BILLETES"===e.category}),E=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"PORTA COSMÉTICOS"===e.category}),h=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"PORTA DOCUMENTOS"===e.category}),S=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"PORTA PASAPORTES"===e.category}),m=[{gender:"HOMBRE",category:"BILLETERAS",data:t},{gender:"HOMBRE",category:"BOLSOS_Y_MALETINES",data:o},{gender:"HOMBRE",category:"CINTURONES",data:a},{gender:"HOMBRE",category:"LLAVEROS",data:n},{gender:"HOMBRE",category:"PORTA_LLAVES",data:r},{gender:"HOMBRE",category:"MONEDEROS_Y_TARJETEROS",data:i},{gender:"HOMBRE",category:"PORTA_BILLETES",data:c},{gender:"HOMBRE",category:"PORTA_COSMETICOS",data:s},{gender:"HOMBRE",category:"PORTA_DOCUMENTOS",data:d},{gender:"HOMBRE",category:"PORTA_PASAPORTES",data:u},{gender:"DAMA",category:"BILLETERAS",data:l},{gender:"DAMA",category:"BOLSOS_Y_MALETINES",data:f},{gender:"DAMA",category:"CINTURONES",data:A},{gender:"DAMA",category:"LLAVEROS",data:p},{gender:"DAMA",category:"PORTA_LLAVES",data:g},{gender:"DAMA",category:"MONEDEROS_Y_TARJETEROS",data:O},{gender:"DAMA",category:"PORTA_BILLETES",data:R},{gender:"DAMA",category:"PORTA_COSMETICOS",data:E},{gender:"DAMA",category:"PORTA_DOCUMENTOS",data:h},{gender:"DAMA",category:"PORTA_PASAPORTES",data:S}],console.warn("--                                                         --"),console.warn("-- Beginig Uploading Productos                             --"),console.warn("--                                                         --"),P=0;case 27:if(!(P<m.length)){e.next=39;break}return T="PRODUCTS",v="PRODUCTS_GENDER_".concat(m[P].gender,"_CATEGORY_").concat(m[P].category),b={gender:m[P].gender,category:m[P].category,products:JSON.stringify(m[P].data)},console.warn(b),console.log(""),e.next=35,this.db.setShopProducts(T,v,b);case 35:e.sent;case 36:P++,e.next=27;break;case 39:this.isLoading=!1;case 40:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"clear",value:function(){this.PRODUCTS=[]}},{key:"getProductRef",value:function(e){return e["REFERENCIA"]}},{key:"getProductRefCode",value:function(e){return e["REFERENCIA"].split("-")[0]}},{key:"getProductRefColorCode",value:function(e){return e["REFERENCIA"].split("-")[1].slice(0,2)}},{key:"getProductRefSizeCode",value:function(e){return e["REFERENCIA"].split("-")[1].slice(2,4)}},{key:"getProductRefPhotoCode",value:function(e){return this.getProductRefCode(e)+"-"+this.getProductRefColorCode(e)}},{key:"getProductDiscount",value:function(e){return e["DESCUENTO"]}},{key:"getProductDescription",value:function(e){return e["NOMBRE LARGO"]}},{key:"getProductGender",value:function(e){return"D"===this.getProductRefCode(e).slice(0,1)?"DAMA":"HOMBRE"}},{key:"getProductCategory",value:function(e){var t=e["NOMBRE LARGO"].toUpperCase(),o=["BILLETERA","CARTERA"],a=["BOLSO","ORGANIZADOR VIAJE","MANOS LIBRES","BOLSO CRUZADO","MORRAL","MALETA","PAPELERA","MALETIN"],n=["CINTURONES"],r=["LLAVERO","LLAVEROS"],i=["MONEDERO","TARJETERO","MONEDAS"],c=["PORTA BILLETES","BILLETES","PORTA BILLETE"],s=["PORTA LAVE","POTA LLAVES"],d=["PORTA COSMÉTICOS","COSMETICOS","PORTA LAPICES"],u=["PORTA DOCUMENTOS","DOCUMENTOS","PORTA DOCUMENTO"],l=["PASAPORTES","PORTA PASAPORTE"],f=O()(o),A=O()(a),p=O()(n),g=O()(r),R=O()(i),E=O()(c),h=O()(s),S=O()(d),m=O()(u),P=O()(l),T=f.get(t),v=A.get(t),b=p.get(t),D=g.get(t),C=R.get(t),_=E.get(t),L=h.get(t),y=S.get(t),I=m.get(t),N=P.get(t),B=[T,v,b,D,C,_,L,y,I,N],M=B.map(function(e){if(e){var t=e.sort(function(e,t){return t[0]-e[0]}),o=t[0];return o}return null}),w=M.map(function(e){return e||[-1,"NO MATCH"]}),k=w.sort(function(e,t){return t[0]-e[0]}),U=k[0],j=U[1],F={BILLETERAS:o,MORRALES:a,CINTURONES:n,LLAVEROS:r,MONEDEROS_Y_TARJETEROS:i,PORTA_LLAVES:s,PORTA_BILLETES:c,PORTA_COSMETICOS:d,PORTA_DOCUMENTOS:u,PORTA_PASAPORTES:l},H=Object.values(F).findIndex(function(e){return e.includes(j)}),x=Object.keys(F)[H],W={BILLETERAS:"Billeteras",MORRALES:"Bolsos y Maletines",CINTURONES:"Cinturones",LLAVEROS:"Llaveros",MONEDEROS_Y_TARJETEROS:"Monederos y Tarjeteros",PORTA_LLAVES:"Porta Llaves",PORTA_BILLETES:"Porta Billetes",PORTA_COSMETICOS:"Porta Cosméticos",PORTA_DOCUMENTOS:"Porta Documentos",PORTA_PASAPORTES:"Porta Pasaportes"};return W[x]}},{key:"getProductShortName",value:function(e){return e["NOMBRE CORTO"]}},{key:"getProductBarCode",value:function(e){return e["CODIGO BARRAS"]}},{key:"getProductPriceCOP",value:function(e){return parseFloat(e["PRECIO COP"])}},{key:"getProductPriceUSD",value:function(e){return parseFloat(e["PRECIO USD"])}},{key:"getProductLine",value:function(e){return e["LINEA"]}},{key:"getProductColor",value:function(e){return e["COLOR"]}},{key:"getProductHeight",value:function(e){return e["ALTO"]}},{key:"getProductWidth",value:function(e){return e["ANCHO"]}},{key:"getProductDepth",value:function(e){return e["PROFUNDO"]}}]),t}(p["c"]);R=l["__decorate"]([Object(p["a"])({components:{DragAndDropExcelProductsComponent:A["a"]},name:"AdminTitlePageComponent"})],R);var E=R,h=E,S=(o("710d"),o("2877")),m=Object(S["a"])(h,a,n,!1,null,"5f8be800",null);t["a"]=m.exports},e7f7:function(e,t,o){},e901:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin page title"},[a("h1",[e._v("SWIPER")]),a("form",[e._l(e.DATA.SWIPER,function(t,o){return a("div",{key:o,staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"swiper.id"}],attrs:{type:"text",placeholder:"Posición"},domProps:{value:t.id},on:{input:function(o){o.target.composing||e.$set(t,"id",o.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"swiper.description"}],attrs:{type:"text",placeholder:"Descripción"},domProps:{value:t.description},on:{input:function(o){o.target.composing||e.$set(t,"description",o.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filename_hd,expression:"swiper.filename_hd"}],attrs:{type:"text",placeholder:"Nombre de Archivo de HD"},domProps:{value:t.filename_hd},on:{input:function(o){o.target.composing||e.$set(t,"filename_hd",o.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.filename_thumb,expression:"swiper.filename_thumb"}],attrs:{type:"text",placeholder:"Hombre de Archivo Thumb"},domProps:{value:t.filename_thumb},on:{input:function(o){o.target.composing||e.$set(t,"filename_thumb",o.target.value)}}}),a("div",{staticClass:"button remove",on:{click:function(o){return e.remove(t.id)}}},[a("i",{staticClass:"fas fa-trash-alt"})])])}),a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.DATA.SWIPER_BLANK.description,expression:"DATA.SWIPER_BLANK.description"}],attrs:{type:"text",placeholder:"Descripción"},domProps:{value:e.DATA.SWIPER_BLANK.description},on:{input:function(t){t.target.composing||e.$set(e.DATA.SWIPER_BLANK,"description",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.DATA.SWIPER_BLANK.filename_hd,expression:"DATA.SWIPER_BLANK.filename_hd"}],attrs:{type:"text",placeholder:"Nombre de Archivo de HD"},domProps:{value:e.DATA.SWIPER_BLANK.filename_hd},on:{input:function(t){t.target.composing||e.$set(e.DATA.SWIPER_BLANK,"filename_hd",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.DATA.SWIPER_BLANK.filename_thumb,expression:"DATA.SWIPER_BLANK.filename_thumb"}],attrs:{type:"text",placeholder:"Hombre de Archivo Thumb"},domProps:{value:e.DATA.SWIPER_BLANK.filename_thumb},on:{input:function(t){t.target.composing||e.$set(e.DATA.SWIPER_BLANK,"filename_thumb",t.target.value)}}}),a("div",{staticClass:"button add",on:{click:function(t){return e.add()}}},[a("i",{staticClass:"fas fa-plus-square"})])]),a("div",{staticClass:"buttons"},[a("div",{staticClass:"button clear",on:{click:function(t){return e.clear()}}},[e._v("BORRAR")]),a("div",{staticClass:"button save",on:{click:function(t){return e.save()}}},[e._v("GUARDAR")])])],2),e.isLoading?a("div",{staticClass:"loader"},[a("img",{attrs:{src:o("b2fa"),width:"25px"}})]):e._e()])},n=[],r=o("d225"),i=o("b0b4"),c=o("308d"),s=o("6bb5"),d=o("4e2b"),u=o("9ab4"),l=o("185b"),f=o("60a3"),A=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.DATA={SWIPER:[{id:0,description:"",filename_hd:"",filename_thumb:""},{id:1,description:"",filename_hd:"",filename_thumb:""}],SWIPER_BLANK:{id:0,description:"",filename_hd:"",filename_thumb:""}},e.isLoading=!1,e.apiDB=new l["a"],e.db={},e}return Object(d["a"])(t,e),Object(i["a"])(t,[{key:"beforeMount",value:function(){var e=this;this.apiDB.setDatabaseByName("SETTINGS-DB"),this.db=this.apiDB.getDatabase(),this.isLoading=!0,this.db.getSwiperSlides().then(function(t){e.DATA.SWIPER=t,e.isLoading=!1}).catch(function(e){return console.error(e)})}},{key:"remove",value:function(e){confirm("Seguro deseas borrar este Slide del Swiper?")&&(this.DATA.SWIPER=this.DATA.SWIPER.filter(function(t){return t.id!==e}))}},{key:"add",value:function(){this.DATA.SWIPER_BLANK.id=this.DATA.SWIPER.length,this.DATA.SWIPER.push(JSON.parse(JSON.stringify(this.DATA.SWIPER_BLANK)+"")),this.DATA.SWIPER_BLANK.description="",this.DATA.SWIPER_BLANK.filename_hd="",this.DATA.SWIPER_BLANK.filename_thumb=""}},{key:"clear",value:function(){var e=this;this.isLoading=!0,this.db.getSwiperSlides().then(function(t){e.DATA.SWIPER=t,e.isLoading=!1}).catch(function(e){return console.error(e)})}},{key:"save",value:function(){var e=this;this.isLoading=!0,this.db.setSwiperSlides(this.DATA.SWIPER).then(function(t){e.DATA.SWIPER=t,e.isLoading=!1}).catch(function(e){return console.error(e)})}}]),t}(f["c"]);A=u["__decorate"]([Object(f["a"])({components:{},name:"AdminTitlePageComponent"})],A);var p=A,g=p,O=(o("f6a5"),o("2877")),R=Object(O["a"])(g,a,n,!1,null,"1cd392a3",null);t["a"]=R.exports},f6a5:function(e,t,o){"use strict";var a=o("4c20"),n=o.n(a);n.a},ff16:function(e,t,o){"use strict";var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin page title"},[a("h1",[e._v("TITULO")]),a("form",[a("div",{staticClass:"input"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.DATA.title,expression:"DATA.title"}],attrs:{type:"text",placeholder:"Titulo del Header"},domProps:{value:e.DATA.title},on:{input:function(t){t.target.composing||e.$set(e.DATA,"title",t.target.value)}}})]),a("div",{staticClass:"buttons"},[a("div",{staticClass:"button clear",on:{click:function(t){return e.clear()}}},[e._v("BORRAR")]),a("div",{staticClass:"button save",on:{click:function(t){return e.save()}}},[e._v("GUARDAR")])])]),e.isLoading?a("div",{staticClass:"loader"},[a("img",{attrs:{src:o("b2fa"),width:"25px"}})]):e._e()])},n=[],r=o("d225"),i=o("b0b4"),c=o("308d"),s=o("6bb5"),d=o("4e2b"),u=o("9ab4"),l=o("185b"),f=o("60a3"),A=function(e){function t(){var e;return Object(r["a"])(this,t),e=Object(c["a"])(this,Object(s["a"])(t).apply(this,arguments)),e.DATA={title:""},e.isLoading=!1,e.apiDB=new l["a"],e.db={},e}return Object(d["a"])(t,e),Object(i["a"])(t,[{key:"beforeMount",value:function(){var e=this;this.apiDB.setDatabaseByName("SETTINGS-DB"),this.db=this.apiDB.getDatabase(),this.isLoading=!0,this.db.getTitle().then(function(t){e.DATA.title=t,e.isLoading=!1}).catch(function(e){return console.error(e)})}},{key:"clear",value:function(){this.DATA.title=""}},{key:"save",value:function(){var e=this;this.isLoading=!0,this.db.setTitle(this.DATA.title).then(function(t){console.log(t),e.isLoading=!1}).catch(function(e){return console.error(e)})}}]),t}(f["c"]);A=u["__decorate"]([Object(f["a"])({components:{},name:"AdminTitlePageComponent"})],A);var p=A,g=p,O=(o("ca25"),o("2877")),R=Object(O["a"])(g,a,n,!1,null,"2a6ec5dc",null);t["a"]=R.exports}}]);