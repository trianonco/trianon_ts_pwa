(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin~015b7949"],{2067:function(t,e,i){"use strict";var a=i("42e6"),n=i.n(a);n.a},"29d6":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin page title"},[a("h1",[t._v("DISTRIBUIDORES AUTORIZADOS Y TIENDAS")]),a("form",[a("div",{staticClass:"excel-input"},[a("DragAndDropExcelDistributorsComponent",{attrs:{message:"DISTRIBUIDORES AUTORIZADOS"},on:{onStart:t.onDragAndDropStartDistributors,onLoad:t.onDragAndDropLoadDistributors}}),a("div",t._l(t.resumeList(t.DATA.AUTHORIZED_DISTRIBUTORS),function(e,i){return a("h5",{key:i,staticStyle:{"text-align":"center",padding:"0.5em"}},[t._v(t._s(e))])}),0)],1),a("div",{staticClass:"excel-input"},[a("DragAndDropExcelShopsComponent",{attrs:{message:"TIENDAS AUTORIZADAS"},on:{onStart:t.onDragAndDropStartShops,onLoad:t.onDragAndDropLoadShops}}),a("div",t._l(t.resumeList(t.DATA.AUTHORIZED_SHOPS),function(e,i){return a("h5",{key:i,staticStyle:{"text-align":"center",padding:"0.5em"}},[t._v(t._s(e))])}),0)],1),a("br"),a("div",{staticClass:"buttons"},[a("div",{staticClass:"button clear",on:{click:function(e){return t.clear()}}},[t._v("BORRAR")]),a("div",{staticClass:"button save",on:{click:function(e){return t.save()}}},[t._v("GUARDAR")])])]),t.isLoading?a("div",{staticClass:"loader"},[a("img",{attrs:{src:i("b2fa"),width:"25px"}})]):t._e()])},n=[],s=(i("a481"),i("75fc")),r=i("d225"),o=i("b0b4"),c=i("308d"),l=i("6bb5"),d=i("4e2b"),p=i("9ab4"),u=i("185b"),g=i("6229"),v=i("893a"),h=i("60a3"),D=function(t){function e(){var t;return Object(r["a"])(this,e),t=Object(c["a"])(this,Object(l["a"])(e).apply(this,arguments)),t.DATA={AUTHORIZED_DISTRIBUTORS:[],AUTHORIZED_SHOPS:[]},t.isLoading=!1,t.apiDB=new u["a"],t.db={},t}return Object(d["a"])(e,t),Object(o["a"])(e,[{key:"beforeMount",value:function(){this.apiDB.setDatabaseByName("SETTINGS-DB"),this.db=this.apiDB.getDatabase()}},{key:"resumeList",value:function(t){var e=t.map(function(t){return t["Correo Electrónico"]||t["Lugar"]}).slice(0,3),i=["."],a=t.map(function(t){return t["Correo Electrónico"]||t["Lugar"]}).slice(t.length-3,t.length);return[].concat(Object(s["a"])(e),i,Object(s["a"])(a))}},{key:"onDragAndDropLoadDistributors",value:function(t){this.isLoading=!1,this.DATA.AUTHORIZED_DISTRIBUTORS=t}},{key:"onDragAndDropStartDistributors",value:function(){this.isLoading=!0,this.DATA.AUTHORIZED_DISTRIBUTORS=[]}},{key:"onDragAndDropLoadShops",value:function(t){this.isLoading=!1,this.DATA.AUTHORIZED_SHOPS=t}},{key:"onDragAndDropStartShops",value:function(){this.isLoading=!0,this.DATA.AUTHORIZED_SHOPS=[]}},{key:"clear",value:function(){this.DATA.AUTHORIZED_SHOPS=[],this.DATA.AUTHORIZED_DISTRIBUTORS=[]}},{key:"save",value:function(){var t=this;if(this.isLoading=!0,this.DATA.AUTHORIZED_DISTRIBUTORS.length>0){var e=this.DATA.AUTHORIZED_DISTRIBUTORS.map(function(t){return{code:(t["Codigo"]||"").replace(/ +(?= )/g,""),nit:(t["Nro nit"]||"").replace(/ +(?= )/g,""),address:(t["Dirección"]||"").replace(/ +(?= )/g,""),phone:(t["Teléfono"]||"").replace(/ +(?= )/g,""),personal_name:{firstname:(t["Nombre 1"]||"").replace(/ +(?= )/g,""),secondname:(t["Nombre 2"]||"").replace(/ +(?= )/g,""),lastname:(t["Apellido 1"]||"").replace(/ +(?= )/g,""),lastname2:(t["Apellido 2"]||"").replace(/ +(?= )/g,""),fullname:"".concat(t["Nombre 1"]||""," ").concat(t["Nombre 2"]||""," ").concat(t["Apellido 1"]||""," ").concat(t["Apellido 2"]||"").replace(/ +(?= )/g,"")},business_name:(t["Razon Social"]||"").replace(/ +(?= )/g,""),country:(t["Pais"]||"").replace(/ +(?= )/g,""),department:(t["Departamento"]||"").replace(/ +(?= )/g,""),city:(t["Ciudad"]||"").replace(/ +(?= )/g,""),email:(t["Correo Electrónico"]||"").replace(/ +(?= )/g,"")}});this.db.setAuthorizedDistributors(e).then(function(e){t.isLoading=!1}).catch(function(t){return console.error(t)})}if(this.DATA.AUTHORIZED_SHOPS.length>0){var i=this.DATA.AUTHORIZED_SHOPS.map(function(t){return{city:t["Ciudad"]||"",address:t["Dirección"]||"",place:t["Lugar"]||"",local:t["Local"]||"",phone:t["Teléfono"]||"",schedule:t["Horario Atención"]||"",daytime:t["Jornada"]||""}});this.db.setAuthorizedShops(i).then(function(e){t.isLoading=!1}).catch(function(t){return console.error(t)})}}}]),e}(h["c"]);D=p["__decorate"]([Object(h["a"])({components:{DragAndDropExcelDistributorsComponent:g["a"],DragAndDropExcelShopsComponent:v["a"]},name:"AdminDistributorsAndShopsPageComponent"})],D);var m=D,_=m,S=(i("8cd1"),i("2877")),A=Object(S["a"])(_,a,n,!1,null,"7c202e83",null);e["a"]=A.exports},"543e":function(t,e,i){"use strict";var a=i("5671");e["a"]=a["a"]},"8cd1":function(t,e,i){"use strict";var a=i("9759"),n=i.n(a);n.a},9759:function(t,e,i){},"999b":function(t,e,i){"use strict";i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin page title"},[a("h1",[t._v("DESPACHOS")]),a("form",t._l(t.queueSorted,function(e,n){return a("div",{key:n,staticStyle:{display:"inline-block",width:"fit-content","vertical-align":"top"}},[e.ID&&t.isOnDate(e)?a("div",{staticClass:"queue-card"},[a("div",{staticClass:"queue-card-header",staticStyle:{"text-align":"left"}},[a("span",{staticStyle:{"font-weight":"900"}},[t._v(t._s(e.products[0].ref)+"  "+t._s(t.isOnDate(e))+"/")]),a("br"),a("span",{staticStyle:{"font-weight":"100","font-size":"0.7em"}},[t._v(t._s(e.ID))])]),a("center",[a("v-lazy-image",{attrs:{src:t.getPhotoURL(e.products[0].ref)[1],"src-placeholder":t.getPhotoURL(e.products[0].ref)[0]}})],1),a("div",{staticClass:"queue-card-preview"},[a("div",{staticClass:"queue-card-preview-col"},[a("h1",{staticClass:"title"},[a("strong",[t._v("Fecha de Compra")]),t._v("\n              : "+t._s(t.getDate(e.meta.createdAt))+"\n            ")]),a("h1",{staticClass:"title"},[a("strong",[t._v("Producto")]),t._v("\n              : "+t._s(e.products[0].ref)+"\n            ")]),a("h1",{staticClass:"title"},[a("strong",[t._v("Email")]),t._v("\n              : "+t._s(e.shipping.email)+"\n            ")]),a("h1",{staticClass:"title"},[a("strong",[t._v("Teléfono")]),t._v("\n              : "+t._s(e.shipping.phone)+"\n            ")]),a("h1",{staticClass:"title"},[a("strong",[t._v("Dirección")]),t._v("\n              : "+t._s(e.shipping.address)+" "+t._s(e.shipping.info)+"\n            ")]),a("h1",{staticClass:"title"},[a("strong",[t._v("Barrio")]),t._v("\n              : "+t._s(e.shipping.neighbourhood)+"\n            ")]),a("h1",{staticClass:"title"},[a("strong",[t._v("Municipio")]),t._v("\n              : "+t._s(e.shipping.city)+" , "+t._s(e.shipping.department)+"\n            ")])])]),a("div",{staticClass:"queue-card-comment"},[t._v(t._s(e.comment))]),a("a",{attrs:{href:t.getInvoiceURL(e.ID),target:"_blank"}},[a("div",{staticClass:"queue-card-invoice-button"},[t._v("VER INFORMACIÓN DE PEDIDO")])]),a("div",{staticClass:"queue-card-shipping-info"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.billing.number,expression:"item.billing.number"}],attrs:{type:"text",placeholder:"Numero de Factura"},domProps:{value:e.billing.number},on:{input:function(i){i.target.composing||t.$set(e.billing,"number",i.target.value)}}}),a("select",{directives:[{name:"model",rawName:"v-model",value:e.shipping.shipping_company,expression:"item.shipping.shipping_company"}],on:{change:function(i){var a=Array.prototype.filter.call(i.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.$set(e.shipping,"shipping_company",i.target.multiple?a:a[0])}}},t._l(t.ShippingCompanies,function(e,i){return a("option",{key:i,domProps:{value:e.name}},[t._v(t._s(e.name))])}),0),a("input",{directives:[{name:"model",rawName:"v-model",value:e.shipping.tracker_code,expression:"item.shipping.tracker_code"}],attrs:{type:"text",placeholder:"Codigo de Guia"},domProps:{value:e.shipping.tracker_code},on:{input:function(i){i.target.composing||t.$set(e.shipping,"tracker_code",i.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.shipping.delivery_date,expression:"item.shipping.delivery_date"}],attrs:{type:"date",placeholder:"Fecha de entrega"},domProps:{value:e.shipping.delivery_date},on:{input:function(i){i.target.composing||t.$set(e.shipping,"delivery_date",i.target.value)}}})]),a("div",{staticClass:"queue-card-row states"},[a("div",{staticClass:"state",on:{click:function(i){return t.setState(e,"IN PROCESS: IN FACTORY")}}},[a("div",{staticClass:"state-inStock-icon"},[t.isStateInStock(e)?a("img",{attrs:{src:i("db39")}}):t._e(),t.isStateInStock(e)?t._e():a("img",{attrs:{src:i("b654")}})]),a("div",{staticClass:"state-label"},[t._v("EN FABRICA")])]),a("div",{staticClass:"state",on:{click:function(i){return t.setState(e,"IN PROCESS: IN SHIPPING")}}},[a("div",{staticClass:"state-inDispatches"},[t.isStateInShipping(e)?a("img",{attrs:{src:i("086d")}}):t._e(),t.isStateInShipping(e)?t._e():a("img",{attrs:{src:i("9228")}})]),a("div",{staticClass:"state-label"},[t._v("ENVIADO")])]),a("div",{staticClass:"state",on:{click:function(i){return t.setState(e,"IN PROCESS: IN DELIVERED")}}},[a("div",{staticClass:"state-inShipping"},[t.isStateInDelivered(e)?a("img",{attrs:{src:i("4c34")}}):t._e(),t.isStateInDelivered(e)?t._e():a("img",{attrs:{src:i("f3fe")}})]),a("div",{staticClass:"state-label"},[t._v("RECIBIDO")])])]),a("div",{staticClass:"queue-card-save-button",on:{click:function(i){return t.save(e)}}},[t._v("GUARDAR")]),a("div",{staticClass:"queue-card-row"})],1):t._e()])}),0),t.isLoading?a("div",{staticClass:"loader"},[a("img",{attrs:{src:i("b2fa"),width:"25px"}})]):t._e()])},n=[]}}]);