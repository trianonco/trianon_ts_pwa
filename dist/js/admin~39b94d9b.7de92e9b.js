(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin~39b94d9b"],{"1c63":function(e,t,r){"use strict";var n=r("5a41"),o=r.n(n);o.a},"5a41":function(e,t,r){},d967:function(e,t,r){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin page products"},[n("form",[n("DragAndDropExcelProductsComponent",{attrs:{message:"PRODUCTOS"},on:{onStart:e.onDragAndDropStartProducts,onLoad:e.onDragAndDropLoadProducts}}),n("div",{staticClass:"buttons"},[n("div",{staticClass:"button clear",on:{click:function(t){return e.clear()}}},[e._v("BORRAR")]),n("div",{staticClass:"button save",on:{click:function(t){return e.save()}}},[e._v("GUARDAR")])])],1),e.isLoading?n("div",{staticClass:"loader"},[n("img",{attrs:{src:r("b2fa"),width:"25px"}})]):e._e()])},o=[],a=(r("456d"),r("6762"),r("2fdb"),r("ac6a"),r("8615"),r("20d6"),r("55dd"),r("28a5"),r("96cf"),r("3b8d")),c=r("d225"),O=r("b0b4"),i=r("308d"),u=r("6bb5"),R=r("4e2b"),d=r("9ab4"),E=r("185b"),A=r("acee"),g=r("60a3"),P=r("9a8a"),S=r.n(P),s=function(e){function t(){var e;return Object(c["a"])(this,t),e=Object(i["a"])(this,Object(u["a"])(t).apply(this,arguments)),e.isLoading=!1,e.apiDB=new E["a"],e.db={},e.PRODUCTS=[],e}return Object(R["a"])(t,e),Object(O["a"])(t,[{key:"beforeMount",value:function(){this.apiDB.setDatabaseByName("SHOP-DB"),this.db=this.apiDB.getDatabase()}},{key:"onDragAndDropStartProducts",value:function(){this.isLoading=!0}},{key:"onDragAndDropLoadProducts",value:function(e){var t=this;e.map(function(e){var r={ref:t.getProductRef(e),ref_code:t.getProductRefCode(e),ref_color_code:t.getProductRefColorCode(e),ref_size_code:t.getProductRefSizeCode(e),ref_photo_code:t.getProductRefPhotoCode(e),discount:t.getProductDiscount(e),description:t.getProductDescription(e),gender:t.getProductGender(e),category:t.getProductCategory(e).toUpperCase(),short_name:t.getProductShortName(e),barcode:t.getProductBarCode(e),price_cop:t.getProductPriceCOP(e),price_usd:t.getProductPriceUSD(e),line:t.getProductLine(e),color:t.getProductColor(e),height:t.getProductHeight(e),width:t.getProductWidth(e),depth:t.getProductDepth(e)};t.PRODUCTS.push(r)}),this.isLoading=!1}},{key:"save",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark(function e(){var t,r,n,o,a,c,O,i,u,R,d,E,A,g,P,S,s,T,C,f,l,D,L,M,y;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:console.warn("----------------------------------------------------------------------"),this.isLoading=!0,t=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"BILLETERAS"===e.category}),r=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"BOLSOS Y MALETINES"===e.category}),n=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"CINTURONES"===e.category}),o=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"LLAVEROS"===e.category}),a=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"PORTA LLAVES"===e.category}),c=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"MONEDEROS Y TARJETEROS"===e.category}),O=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"PORTA BILLETES"===e.category}),i=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"PORTA COSMÉTICOS"===e.category}),u=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"PORTA DOCUMENTOS"===e.category}),R=this.PRODUCTS.filter(function(e){return"HOMBRE"===e.gender&&"PORTA PASAPORTES"===e.category}),d=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"BILLETERAS"===e.category}),E=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"BOLSOS Y MALETINES"===e.category}),A=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"CINTURONES"===e.category}),g=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"LLAVEROS"===e.category}),P=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"PORTA LLAVES"===e.category}),S=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"MONEDEROS Y TARJETEROS"===e.category}),s=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"PORTA BILLETES"===e.category}),T=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"PORTA COSMÉTICOS"===e.category&&"PORTA COSMETICOS"===e.category}),C=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"PORTA DOCUMENTOS"===e.category}),f=this.PRODUCTS.filter(function(e){return"DAMA"===e.gender&&"PORTA PASAPORTES"===e.category}),l=[{gender:"HOMBRE",category:"BILLETERAS",data:t},{gender:"HOMBRE",category:"BOLSOS_Y_MALETINES",data:r},{gender:"HOMBRE",category:"CINTURONES",data:n},{gender:"HOMBRE",category:"LLAVEROS",data:o},{gender:"HOMBRE",category:"PORTA_LLAVES",data:a},{gender:"HOMBRE",category:"MONEDEROS_Y_TARJETEROS",data:c},{gender:"HOMBRE",category:"PORTA_BILLETES",data:O},{gender:"HOMBRE",category:"PORTA_COSMETICOS",data:i},{gender:"HOMBRE",category:"PORTA_DOCUMENTOS",data:u},{gender:"HOMBRE",category:"PORTA_PASAPORTES",data:R},{gender:"DAMA",category:"BILLETERAS",data:d},{gender:"DAMA",category:"BOLSOS_Y_MALETINES",data:E},{gender:"DAMA",category:"CINTURONES",data:A},{gender:"DAMA",category:"LLAVEROS",data:g},{gender:"DAMA",category:"PORTA_LLAVES",data:P},{gender:"DAMA",category:"MONEDEROS_Y_TARJETEROS",data:S},{gender:"DAMA",category:"PORTA_BILLETES",data:s},{gender:"DAMA",category:"PORTA_COSMETICOS",data:T},{gender:"DAMA",category:"PORTA_DOCUMENTOS",data:C},{gender:"DAMA",category:"PORTA_PASAPORTES",data:f}],console.warn("--                                                         --"),console.warn("-- Beginig Uploading Productos                             --"),console.warn("--                                                         --"),D=0;case 27:if(!(D<l.length)){e.next=39;break}return L="PRODUCTS",M="PRODUCTS_GENDER_".concat(l[D].gender,"_CATEGORY_").concat(l[D].category),y={gender:l[D].gender,category:l[D].category,products:JSON.stringify(l[D].data)},console.warn(y),console.log(""),e.next=35,this.db.setShopProducts(L,M,y);case 35:e.sent;case 36:D++,e.next=27;break;case 39:this.isLoading=!1;case 40:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()},{key:"clear",value:function(){this.PRODUCTS=[]}},{key:"getProductRef",value:function(e){return e["REFERENCIA"]}},{key:"getProductRefCode",value:function(e){return e["REFERENCIA"].split("-")[0]}},{key:"getProductRefColorCode",value:function(e){return e["REFERENCIA"].split("-")[1].slice(0,2)}},{key:"getProductRefSizeCode",value:function(e){return e["REFERENCIA"].split("-")[1].slice(2,4)}},{key:"getProductRefPhotoCode",value:function(e){return this.getProductRefCode(e)+"-"+this.getProductRefColorCode(e)}},{key:"getProductDiscount",value:function(e){return e["DESCUENTO"]}},{key:"getProductDescription",value:function(e){return e["NOMBRE LARGO"]}},{key:"getProductGender",value:function(e){return"D"===this.getProductRefCode(e).slice(0,1)?"DAMA":"HOMBRE"}},{key:"getProductCategory",value:function(e){var t=e["NOMBRE LARGO"].toUpperCase(),r=["BILLETERA","CARTERA"],n=["BOLSO","ORGANIZADOR VIAJE","MANOS LIBRES","BOLSO CRUZADO","MORRAL","MALETA","PAPELERA","MALETIN"],o=["CINTURONES"],a=["LLAVERO","LLAVEROS"],c=["MONEDERO","TARJETERO","MONEDAS"],O=["PORTA BILLETES","BILLETES","PORTA BILLETE"],i=["PORTA LAVE","POTA LLAVES"],u=["PORTA COSMÉTICOS","COSMETICOS","PORTA LAPICES"],R=["PORTA DOCUMENTOS","DOCUMENTOS","PORTA DOCUMENTO"],d=["PASAPORTES","PORTA PASAPORTE","PORTA AFEITES","AFEITADORES","AFEITE"],E=S()(r),A=S()(n),g=S()(o),P=S()(a),s=S()(c),T=S()(O),C=S()(i),f=S()(u),l=S()(R),D=S()(d),L=E.get(t),M=A.get(t),y=g.get(t),h=P.get(t),B=s.get(t),p=T.get(t),N=C.get(t),I=f.get(t),_=l.get(t),U=D.get(t),v=[L,M,y,h,B,p,N,I,_,U],b=v.map(function(e){if(e){var t=e.sort(function(e,t){return t[0]-e[0]}),r=t[0];return r}return null}),k=b.map(function(e){return e||[-1,"NO MATCH"]}),H=k.sort(function(e,t){return t[0]-e[0]}),m=H[0],w=m[1],V={BILLETERAS:r,MORRALES:n,CINTURONES:o,LLAVEROS:a,MONEDEROS_Y_TARJETEROS:c,PORTA_LLAVES:i,PORTA_BILLETES:O,PORTA_COSMETICOS:u,PORTA_DOCUMENTOS:R,PORTA_PASAPORTES:d},j=Object.values(V).findIndex(function(e){return e.includes(w)}),J=Object.keys(V)[j],Y={BILLETERAS:"Billeteras",MORRALES:"Bolsos y Maletines",CINTURONES:"Cinturones",LLAVEROS:"Llaveros",MONEDEROS_Y_TARJETEROS:"Monederos y Tarjeteros",PORTA_LLAVES:"Porta Llaves",PORTA_BILLETES:"Porta Billetes",PORTA_COSMETICOS:"Porta Cosméticos",PORTA_DOCUMENTOS:"Porta Documentos",PORTA_PASAPORTES:"Porta Pasaportes"};return Y[J]}},{key:"getProductShortName",value:function(e){return e["NOMBRE CORTO"]}},{key:"getProductBarCode",value:function(e){return e["CODIGO BARRAS"]}},{key:"getProductPriceCOP",value:function(e){return parseFloat(e["PRECIO COP"])}},{key:"getProductPriceUSD",value:function(e){return parseFloat(e["PRECIO USD"])}},{key:"getProductLine",value:function(e){return e["LINEA"]}},{key:"getProductColor",value:function(e){return e["COLOR"]}},{key:"getProductHeight",value:function(e){return e["ALTO"]}},{key:"getProductWidth",value:function(e){return e["ANCHO"]}},{key:"getProductDepth",value:function(e){return e["PROFUNDO"]}}]),t}(g["c"]);s=d["__decorate"]([Object(g["a"])({components:{DragAndDropExcelProductsComponent:A["a"]},name:"AdminTitlePageComponent"})],s);var T=s,C=T,f=(r("1c63"),r("2877")),l=Object(f["a"])(C,n,o,!1,null,"6923131e",null);t["a"]=l.exports}}]);