(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop~31ecd969"],{"088f":function(t,e,o){"use strict";var r=o("aa48"),i=o.n(r);i.a},2849:function(t,e,o){},"2f21":function(t,e,o){"use strict";var r=o("79e5");t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},"3a6d":function(t,e,o){"use strict";var r=o("c712"),i=o.n(r);i.a},4987:function(t,e,o){},"55dd":function(t,e,o){"use strict";var r=o("5ca1"),i=o("d8e8"),n=o("4bf8"),c=o("79e5"),s=[].sort,a=[1,2,3];r(r.P+r.F*(c(function(){a.sort(void 0)})||!c(function(){a.sort(null)})||!o("2f21")(s)),"Array",{sort:function(t){return void 0===t?s.call(n(this)):s.call(n(this),i(t))}})},6204:function(t,e,o){"use strict";var r=o("2849"),i=o.n(r);i.a},"68fd":function(t,e,o){},"836a":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"view shop"},[o("div",{staticClass:"wrapper"},[o("HeaderComponent"),o("ShopProductsBannerComponent",{attrs:{gender:t.gender,description:t.description}}),o("ShopProductsBannerFilterGenderComponent",{attrs:{gender:t.gender}}),o("ShopProductsBannerFiltersSortByComponent",{on:{onSortByName:t.onSortByName,onSortByColor:t.onSortByColor,onSortByPrice:t.onSortByPrice}}),o("ShopProductsBannerFilterGenderColorComponent",{attrs:{gender:t.gender}}),o("ShopProductsListComponent",{attrs:{sortBy:t.sortBy}}),o("FooterComponent")],1)])},i=[],n=o("d225"),c=o("b0b4"),s=o("308d"),a=o("6bb5"),l=o("4e2b"),d=o("9ab4"),u=o("8dc2"),p=o.n(u),h=o("60a3"),f=o("4ef3"),m=o("9dc0"),v=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"products-list"},[t.isFirstPage?t._e():o("div",{staticClass:"goUpButton",on:{click:function(e){return t.goScrollTop()}}},[o("i",{staticClass:"fas fa-arrow-up"})]),t._l(t.productsSortedBy,function(t){return o("ShopProductsListItemComponent",{key:t.ref,attrs:{product:t}})}),o("infinite-loading",{on:{infinite:t.infiniteHandler}},[o("div",{attrs:{slot:"no-results"},slot:"no-results"},[t._v(".")]),o("div",{attrs:{slot:"no-more"},slot:"no-more"},[t._v("-")])])],2)},y=[],g=(o("a481"),o("6762"),o("2fdb"),o("55dd"),o("96cf"),o("3b8d")),b=o("e166"),_=o.n(b),C=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isNot?t._e():o("div",{staticClass:"products-list-item",class:t.getProducsListItemClass()},[o("div",{staticClass:"product-list-item-wrapper",on:{click:function(e){return t.goToProductView()}}},[t.isNew?o("div",{staticClass:"isNew"},[t._v("NUEVO")]):t._e(),o("v-lazy-image",{staticClass:"photo",attrs:{src:t.photo_hd_src,"src-placeholder":t.photo_thumb_src},on:{load:function(e){return t.onLoadVLazyImage()}}}),o("h2",{staticClass:"price"},[t._v(t._s(t._f("toCurrency")(parseFloat(t.product.price_cop))))]),o("h2",{staticClass:"name"},[t._v(t._s(t.product.description)+" "+t._s(t.product.line))]),o("h2",{staticClass:"color"},[t._v("COLOR "+t._s(t.product.color))])],1)])},O=[],B=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(s["a"])(this,Object(a["a"])(e).apply(this,arguments)),t.isNew=!1,t.isNot=!1,t.isPhotoOnStock=!1,t.isProductOnStock=!1,t.photo_hd_src="",t.photo_thumb_src="",t.product_code="",t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"getProducsListItemClass",value:function(){return this.isPhotoOnStock?"default":this.isNot?"hidden bye-gone":"hidden"}},{key:"onLoadVLazyImage",value:function(){this.isPhotoOnStock=!0;var t=JSON.parse(""+localStorage.getItem("shopOnStock"));t.push(this.product.ref),localStorage.setItem("shopOnStock",JSON.stringify(t))}},{key:"imageExists",value:function(t){return new Promise(function(e,o){var r=new Image;r.onload=function(){e()},r.onerror=function(){o()},r.src=t})}},{key:"goToProductView",value:function(){var t="".concat(this.product.ref_photo_code,"-01.jpg"),e="gender/".concat(this.product.gender.replace("/","-")),o="category/".concat(this.product.category.replace("/","-")),r="ref/".concat(this.product.ref_photo_code.replace("/","-")),i="description/".concat(this.product.description.replace("/","-")),n="color/".concat(this.product.color.replace("/","-")),c="line/".concat(this.product.line.replace("/","-")),s="photo/".concat(t.replace("/","-"));this.$router.push("/product/".concat(e,"/").concat(o,"/").concat(r,"/").concat(i,"/").concat(n,"/").concat(c,"/").concat(s))}},{key:"mounted",value:function(){var t=this,e="18c776df-f5a7-45a0-9012-16f780381d92",o="".concat(this.product.ref_photo_code,"-01.jpg"),r="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos",i="alt=media&token=".concat(e);this.photo_thumb_src="".concat(r,"%2Fthumb%2F").concat(o,"?").concat(i),this.photo_hd_src="".concat(r,"%2Fhd%2F").concat(o,"?").concat(i),this.imageExists(this.photo_thumb_src).then(function(e){t.isNot=!1}).catch(function(e){t.isNot=!0})}}]),e}(h["c"]);d["__decorate"]([Object(h["b"])()],B.prototype,"product",void 0),B=d["__decorate"]([Object(h["a"])({components:{VLazyImage:p.a}})],B);var w=B,P=w,S=(o("088f"),o("2877")),j=Object(S["a"])(P,C,O,!1,null,null,null),F=j.exports,A=o("185b"),M=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(s["a"])(this,Object(a["a"])(e).apply(this,arguments)),t.products=[],t.productsDB=[],t.productsPageSize=6,t.isFirstPage=!0,t.page=1,t.list=[],t.apiDB=new A["a"],t.db={},t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"beforeMount",value:function(){this.apiDB.setDatabaseByName("SHOP-DB"),this.db=this.apiDB.getDatabase()}},{key:"handleScroll",value:function(t){var e=document.documentElement.scrollTop||document.body.scrollTop;this.isFirstPage=e<50}},{key:"created",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"destroyed",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"mounted",value:function(){var t=this,e=this.$route.params,o=e.category?e.category:"",r=(e.category&&e.category,e.gender?e.gender:"");this.db.getProductsByGenderAndCategories(r,o).then(function(){var e=Object(g["a"])(regeneratorRuntime.mark(function e(o){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:r=t.removeDuplicates(o,"ref_photo_code"),t.productsDB=r,t.products=t.productsDB.slice(0,t.productsPageSize);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},{key:"removeDuplicates",value:function(t,e){return t.filter(function(t,o,r){return r.map(function(t){return t[e]}).indexOf(t[e])===o})}},{key:"goScrollTop",value:function(){window.scroll({top:0,left:0,behavior:"smooth"})}},{key:"infiniteHandler",value:function(t){var e=this;setTimeout(function(){if(e.products.length!==e.productsDB.length){e.page+=1;var o=e.productsPageSize*e.page;e.products=e.productsDB.slice(0,o),t.loaded()}else t.complete()},0)}},{key:"productsSortedBy",get:function(){var t=this,e=[];return console.warn(this.sortBy),e="price"===this.sortBy.by?-1===this.sortBy.isAscendent?this.productsDB.sort(function(t,e){return t.price_cop-e.price_cop}):this.productsDB.sort(function(t,e){return e.price_cop-t.price_cop}):"color"===this.sortBy.by?this.productsDB.filter(function(e){return e.color.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").includes(t.sortBy.keyword.toUpperCase().normalize("NFD").replace(/[\u0300-\u036f]/g,""))}):"name"===this.sortBy.by?1===this.sortBy.isAscendent?this.productsDB.sort(function(t,e){var o=t.description+" "+t.line,r=e.description+" "+e.line;return(""+o).localeCompare(r)}):this.productsDB.sort(function(t,e){var o=t.description+" "+t.line,r=e.description+" "+e.line;return(""+r).localeCompare(o)}):this.productsDB,e}}]),e}(h["c"]);d["__decorate"]([Object(h["b"])()],M.prototype,"sortBy",void 0),M=d["__decorate"]([Object(h["a"])({components:{ShopProductsListItemComponent:F,InfiniteLoading:_.a}})],M);var N=M,k=N,U=(o("cda6"),Object(S["a"])(k,v,y,!1,null,null,null)),X=U.exports,D=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products-banner"},["HOMBRE"===t.gender?r("img",{staticClass:"first",attrs:{src:o("9235")}}):t._e(),"DAMA"===t.gender?r("img",{staticClass:"first",attrs:{src:o("e7fd")}}):t._e(),r("h1",[t._v(t._s(t.description))]),"HOMBRE"===t.gender?r("img",{staticClass:"last",attrs:{src:o("9235")}}):t._e(),"DAMA"===t.gender?r("img",{staticClass:"last",attrs:{src:o("e7fd")}}):t._e()])},E=[],I=function(t){function e(){return Object(n["a"])(this,e),Object(s["a"])(this,Object(a["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(h["c"]);d["__decorate"]([Object(h["b"])()],I.prototype,"gender",void 0),d["__decorate"]([Object(h["b"])()],I.prototype,"description",void 0),I=d["__decorate"]([Object(h["a"])({})],I);var L=I,T=L,x=(o("3a6d"),Object(S["a"])(T,D,E,!1,null,"f64d22cc",null)),R=x.exports,$=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"products-filters-gender-color"},["HOMBRE"===t.gender?o("div",{staticClass:"products-filters-gender-color-male"},[o("div",{staticClass:"yellow"}),o("div",{staticClass:"blue"})]):t._e(),"DAMA"===t.gender?o("div",{staticClass:"products-filters-gender-color-female"},[o("div",{staticClass:"yellow"}),o("div",{staticClass:"red"})]):t._e()])},z=[],Z=function(t){function e(){return Object(n["a"])(this,e),Object(s["a"])(this,Object(a["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(h["c"]);d["__decorate"]([Object(h["b"])()],Z.prototype,"gender",void 0),Z=d["__decorate"]([Object(h["a"])({})],Z);var H=Z,V=H,G=(o("ae10"),Object(S["a"])(V,$,z,!1,null,"0b8ce116",null)),J=G.exports,q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"products-filters-gender-color"},["HOMBRE"===t.gender?o("div",{staticClass:"products-filters-gender-color-male"},[o("div",{staticClass:"blue",staticStyle:{width:"100vw"}})]):t._e(),"DAMA"===t.gender?o("div",{staticClass:"products-filters-gender-color-female"},[o("div",{staticClass:"red",staticStyle:{width:"100vw"}})]):t._e()])},Y=[],K=function(t){function e(){return Object(n["a"])(this,e),Object(s["a"])(this,Object(a["a"])(e).apply(this,arguments))}return Object(l["a"])(e,t),e}(h["c"]);d["__decorate"]([Object(h["b"])()],K.prototype,"gender",void 0),K=d["__decorate"]([Object(h["a"])({})],K);var Q=K,W=Q,tt=(o("9654"),Object(S["a"])(W,q,Y,!1,null,"d13f2ea8",null)),et=tt.exports,ot=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"products-filters-sort-by"},[r("div",{staticClass:"products-filters-sort-by-wrapper"},[r("h1",[t._v("Filtrar por :")]),r("div",{staticClass:"filter",class:t.isFilterActiveByName("price"),on:{click:function(e){return t.setFilterActiveByName("price")}}},[r("span",[t._v("PRECIO")]),t.UX.isModalPrice?r("span",{staticClass:"triangle",staticStyle:{position:"absolute",top:"13px",left:"25px"}}):t._e()]),r("div",{staticClass:"filter",class:t.isFilterActiveByName("color"),on:{click:function(e){return t.setFilterActiveByName("color")}}},[r("span",[t._v("COLOR")]),t.UX.isModalColor?r("span",{staticClass:"triangle",staticStyle:{position:"absolute",top:"13px",left:"18px"}}):t._e()]),r("div",{staticClass:"filter",class:t.isFilterActiveByName("az"),on:{click:function(e){return t.setFilterActiveByName("az")}}},[r("span",[t._v("A-Z")]),t._e()]),r("div",{staticClass:"filter",class:t.isFilterActiveByName("za"),on:{click:function(e){return t.setFilterActiveByName("za")}}},[r("span",[t._v("Z-A")]),t._e()])]),t.UX.isModalActive&&t.UX.isModalPrice?r("div",{staticClass:"products-filters-sort-by-modal"},[r("div",{staticClass:"products-filters-sort-by-modal-row prices"},[r("div",{staticClass:"price active",on:{click:function(e){return t.doFilterByPriceFromBiggerToLower()}}},[t._v("DE MAYOR A MENOR")]),r("div",{staticClass:"price",on:{click:function(e){return t.doFilterByPriceFromLowerToBigger()}}},[t._v("DE MENOR A MAYOR")])])]):t._e(),t.UX.isModalActive&&t.UX.isModalColor?r("div",{staticClass:"products-filters-sort-by-modal"},[r("div",{staticClass:"products-filters-sort-by-modal-row search-bar"},[r("img",{attrs:{src:o("c07b")}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.UX.FilterColor,expression:"UX.FilterColor"}],attrs:{type:"text"},domProps:{value:t.UX.FilterColor},on:{change:t.onColorTyped,input:function(e){e.target.composing||t.$set(t.UX,"FilterColor",e.target.value)}}})]),r("div",{staticClass:"products-filters-sort-by-modal-row"})]):t._e()])},rt=[],it=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(s["a"])(this,Object(a["a"])(e).apply(this,arguments)),t.filter="",t.UX={isModalActive:!1,isModalPrice:!1,isModalColor:!1,isModalAZ:!1,isModalZA:!1,FilterPrice:0,FilterColor:"",FilterName:0},t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"onColorTyped",value:function(){this.$emit("onSortByColor",this.UX.FilterColor)}},{key:"isFilterActiveByName",value:function(t){return this.filter===t?"active":"no-active"}},{key:"doFilterByPriceFromBiggerToLower",value:function(){this.UX.FilterPrice=1,this.$emit("onSortByPrice",1)}},{key:"doFilterByPriceFromLowerToBigger",value:function(){this.UX.FilterPrice=-1,this.$emit("onSortByPrice",-1)}},{key:"setFilterActiveByName",value:function(t){this.UX.isModalPrice="price"===t&&!this.UX.isModalPrice,this.UX.isModalColor="color"===t&&!this.UX.isModalColor,"az"===t?(this.UX.FilterName=1,this.UX.isModalAZ=!this.UX.isModalAZ):this.UX.isModalAZ=!1,"za"===t?(this.UX.FilterName=-1,this.UX.isModalZA=!this.UX.isModalZA):this.UX.isModalZA=!1,this.UX.isModalPrice||this.UX.isModalColor||this.UX.isModalAZ||this.UX.isModalZA?this.UX.isModalActive=!0:this.UX.isModalActive=!1,this.UX.isModalPrice&&this.$emit("onSortByPrice",this.UX.FilterPrice),this.UX.isModalColor&&this.$emit("onSortByColor",this.UX.FilterColor),(this.UX.isModalAZ||this.UX.isModalZA)&&this.$emit("onSortByName",this.UX.FilterName)}}]),e}(h["c"]);it=d["__decorate"]([Object(h["a"])({})],it);var nt=it,ct=nt,st=(o("ac82"),Object(S["a"])(ct,ot,rt,!1,null,"762d0d04",null)),at=st.exports,lt=function(t){function e(){var t;return Object(n["a"])(this,e),t=Object(s["a"])(this,Object(a["a"])(e).apply(this,arguments)),t.description="",t.category="",t.gender="",t.sortBy={},t.products=[],t}return Object(l["a"])(e,t),Object(c["a"])(e,[{key:"mounted",value:function(){this.$ga.page("/shop");var t=this.$route.params;this.category=t.category?t.category:"",this.description=t.category?t.category:"",this.gender=t.gender?t.gender:""}},{key:"onSortByName",value:function(t){this.sortBy={by:"name",isAscendent:t}}},{key:"onSortByPrice",value:function(t){this.sortBy={by:"price",isAscendent:t}}},{key:"onSortByColor",value:function(t){this.sortBy={by:"color",keyword:t}}}]),e}(h["c"]);lt=d["__decorate"]([Object(h["a"])({components:{VLazyImage:p.a,HeaderComponent:f["a"],FooterComponent:m["a"],ShopProductsListComponent:X,ShopProductsBannerComponent:R,ShopProductsBannerFilterGenderComponent:J,ShopProductsBannerFilterGenderColorComponent:et,ShopProductsBannerFiltersSortByComponent:at},metaInfo:function(){return{title:" TRIANON | Fabricación de marroquinería y accesorios en cuero ",meta:[{name:"author",content:"Jorge Luis Mayorga Taborda"},{name:"description",content:"TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."},{name:"keyword",content:"billeteras,billeteras colombia,envio a toda colombia,trianon,trianonshoponline,pagosonline,tienda en linea trianon,bolsos,bolsos en cuero,regalo mama ,regalo papa colombia,regalo navidad colombia,pago seguro en linea,cinturon trianon,dia del padre,billete"},{property:"og:title",content:"TRIANON | Fabricación de marroquinería y accesorios en cuero "},{property:"og:site_name",content:"TRIANON"},{property:"og:type",content:"website"},{property:"og:url",content:"https://www.trianon.com.co/"},{property:"og:image",content:"https://www.trianon.com.co/img/logo.01e54327.png"},{property:"og:description",content:"TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"https://www.trianon.com.co/"},{name:"twitter:title",content:"TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."},{name:"twitter:description",content:"TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."},{name:"twitter:creator",content:"@trianonco"},{name:"twitter:image:src",content:"https://www.trianon.com.co/img/logo.01e54327.png"},{itemprop:"name",content:"My Page Title ← My Site"},{itemprop:"description",content:"I have things here on my site."},{itemprop:"image",content:"https://www.trianon.com.co/img/logo.01e54327.png"}]}}})],lt);var dt=lt,ut=dt,pt=(o("6204"),Object(S["a"])(ut,r,i,!1,null,null,null));e["default"]=pt.exports},9235:function(t,e,o){t.exports=o.p+"img/male-bg.9fc233ad.png"},9654:function(t,e,o){"use strict";var r=o("4987"),i=o.n(r);i.a},"99ff":function(t,e,o){},"9fed":function(t,e,o){},aa48:function(t,e,o){},ac82:function(t,e,o){"use strict";var r=o("9fed"),i=o.n(r);i.a},ae10:function(t,e,o){"use strict";var r=o("99ff"),i=o.n(r);i.a},c712:function(t,e,o){},cda6:function(t,e,o){"use strict";var r=o("68fd"),i=o.n(r);i.a},e7fd:function(t,e,o){t.exports=o.p+"img/female-bg.6927d9ee.png"}}]);