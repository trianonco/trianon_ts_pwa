(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["AuthorizedShops~ea1f58e8"],{2305:function(t,e,o){t.exports=o.p+"img/shops.9b012b00.png"},"42de":function(t,e,o){"use strict";o.r(e);var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"view authorized-shops"},[o("HeaderComponent"),o("div",{staticClass:"view-wrapper"},[t._m(0),o("div",{staticClass:"list-and-map"},[o("div",{staticClass:"list"},t._l(t.shopsFilteredBySearchKey,function(e,n){return o("div",{key:n},[o("div",{staticClass:"authorized-shop-card",on:{click:function(o){return t.setCurrentShop(e)}}},[o("div",{staticClass:"authorized-shop-card-phone"},[o("span",[t._v(t._s(e.city))]),e.place?o("span",[t._v("- "+t._s(e.place))]):t._e(),e.local?o("span",[t._v(t._s(e.local))]):t._e()]),o("div",{staticClass:"authorized-shop-card-address"},[e.address?o("span",[t._v(t._s(e.address)+" /")]):t._e(),e.phone?o("span",[t._v("TELÉFONO "+t._s(e.phone))]):t._e()]),o("div",{staticClass:"authorized-shop-card-address"},[e.schedule?o("span",[t._v("HORARIO DE ATENCIÓN : "+t._s(e.schedule))]):t._e(),e.daytime?o("span",[t._v(t._s(e.daytime))]):t._e()])])])}),0),o("GmapMap",{staticStyle:{width:"500px",height:"300px"},attrs:{"map-type-id":"terrain",center:t.position,zoom:16,options:{zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,fullscreenControl:!0,disableDefaultUi:!1}}},[t.currentShop&&t.currentShop.coord?o("GmapMarker",{attrs:{position:t.currentShop.coord,clickable:!0,draggable:!1},on:{click:function(e){t.center=t.currentShop.coord}}}):t._e()],1)],1),o("BannerAddressComponent"),t.isFirstPage?t._e():o("div",{staticClass:"goUpButton",on:{click:function(e){return t.goScrollTop()}}},[o("i",{staticClass:"fas fa-arrow-up"})])],1),o("FooterComponent")],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"title"},[n("span",[t._v("TIENDAS TRIANON")]),n("img",{staticClass:"mobile",attrs:{src:o("2305")}}),n("img",{staticClass:"desktop",attrs:{src:o("c771")}}),n("p",[t._v("EN NUESTRAS TIENDAS, PODRÁS ENCONTRAR COMPLETA DISPONIBILIDAD DE TODOS NUETROS PRODUCTOS ASI COMO TAMBIÉN CONOCER LAS MÁS RECIENTES COLECCIONES")])])}],i=(o("6762"),o("2fdb"),o("55dd"),o("d225")),r=o("b0b4"),s=o("308d"),c=o("6bb5"),p=o("4e2b"),l=o("9ab4"),u=o("60a3"),d=o("8dc2"),h=o.n(d),m=o("4ef3"),g=o("9dc0"),b=o("185b"),y=o("e166"),f=o.n(y),v=o("709b"),C=function(t){function e(){var t;return Object(i["a"])(this,e),t=Object(s["a"])(this,Object(c["a"])(e).apply(this,arguments)),t.apiDB=new b["a"],t.db={},t.shop=[],t.shopDB=[],t.markers=[],t.position={lat:10,lng:10},t.productsPageSize=6,t.isFirstPage=!0,t.page=1,t.currentCity="",t.currentSearchKey="",t.currentShop={},t}return Object(p["a"])(e,t),Object(r["a"])(e,[{key:"beforeMount",value:function(){this.apiDB.setDatabaseByName("SETTINGS-DB"),this.db=this.apiDB.getDatabase()}},{key:"setCurrentShop",value:function(t){t&&t.coord&&(this.currentShop=t,this.position=this.currentShop.coord,this.currentCity=this.currentShop.city)}},{key:"isNew",value:function(t){var e=(new Date).getTime(),o=new Date(t.createdAt).getTime(),n=(e-o)/864e5;return n<7}},{key:"mounted",value:function(){var t=this;this.$ga.page("/authorized/shops"),this.db.getAuthorizedShops().then(function(e){t.shop=e.sort(function(t,e){return t.city.localeCompare(e.city)})}),this.$getLocation().then(function(e){var o=e.lat,n=e.lng,a={lat:o,lng:n};t.position=a,t.markers.push({position:t.position}),console.log(a)}).catch(function(e){var o=4.610292,n=-74.100711;t.position={lat:o,lng:n},t.markers.push({position:t.position})})}},{key:"onSubmit",value:function(){this.currentCity=JSON.parse(JSON.stringify(this.currentSearchKey+"")+"")}},{key:"handleScroll",value:function(t){var e=document.documentElement.scrollTop||document.body.scrollTop;this.isFirstPage=e<50}},{key:"created",value:function(){window.addEventListener("scroll",this.handleScroll)}},{key:"destroyed",value:function(){window.removeEventListener("scroll",this.handleScroll)}},{key:"goScrollTop",value:function(){window.scroll({top:0,left:0,behavior:"smooth"})}},{key:"shopsFilteredBySearchKey",get:function(){var t=this;return this.shop.filter(function(e){return e.city.toUpperCase().includes(t.currentSearchKey.toUpperCase())})}}]),e}(u["c"]);C=l["__decorate"]([Object(u["a"])({components:{HeaderComponent:m["a"],FooterComponent:g["a"],VLazyImage:h.a,InfiniteLoading:f.a,BannerAddressComponent:v["a"]},metaInfo:function(){return{title:" TRIANON | Fabricación de marroquinería y accesorios en cuero ",meta:[{name:"author",content:"Jorge Luis Mayorga Taborda"},{name:"description",content:"TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."},{name:"keyword",content:"billeteras,billeteras colombia,envio a toda colombia,trianon,trianonshoponline,pagosonline,tienda en linea trianon,bolsos,bolsos en cuero,regalo mama ,regalo papa colombia,regalo navidad colombia,pago seguro en linea,cinturon trianon,dia del padre,billete"},{property:"og:title",content:"TRIANON | Fabricación de marroquinería y accesorios en cuero "},{property:"og:site_name",content:"TRIANON"},{property:"og:type",content:"website"},{property:"og:url",content:"https://www.trianon.com.co/"},{property:"og:image",content:"https://www.trianon.com.co/img/logo.01e54327.png"},{property:"og:description",content:"TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."},{name:"twitter:card",content:"summary"},{name:"twitter:site",content:"https://www.trianon.com.co/"},{name:"twitter:title",content:"TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."},{name:"twitter:description",content:"TRIANON | Manufactura 100% Colombiana, una tradición desde 1935."},{name:"twitter:creator",content:"@trianonco"},{name:"twitter:image:src",content:"https://www.trianon.com.co/img/logo.01e54327.png"},{itemprop:"name",content:"My Page Title ← My Site"},{itemprop:"description",content:"I have things here on my site."},{itemprop:"image",content:"https://www.trianon.com.co/img/logo.01e54327.png"}]}}})],C);var w=C,S=w,N=(o("bf91"),o("2877")),O=Object(N["a"])(S,n,a,!1,null,null,null);e["default"]=O.exports},4491:function(t,e,o){},bf91:function(t,e,o){"use strict";var n=o("4491"),a=o.n(n);a.a},c771:function(t,e,o){t.exports=o.p+"img/shops-desktops.95e1e28a.png"}}]);