(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["admin~8f16f0f7"],{"0757":function(e,t,a){"use strict";var n=a("ffb4"),r=a.n(n);r.a},"413d":function(e,t,a){"use strict";var n=a("f640"),r=a.n(n);r.a},"5ec4":function(e,t,a){},6190:function(e,t,a){},6229:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"drag-and-drop-excel"},[a("div",{attrs:{id:"drop-area"}},[a("form",{staticClass:"my-form"},[a("input",{attrs:{type:"file",id:"fileElem1",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},on:{change:e.handleFiles}}),a("label",{staticClass:"button",staticStyle:{"text-align":"center"},attrs:{for:"fileElem1"}},[e._v(e._s(e.message?e.message:"ARRASTRA TU ARCHIVO EXCEL ACA "))])])])])},r=[],i=(a("34ef"),a("a481"),a("456d"),a("ac6a"),a("8615"),a("7f7f"),a("1146")),s=a.n(i),l={name:"DragAndDropExcelComponent",props:["message"],data:function(){return{}},methods:{handleFiles:function(e){this.$emit("onStart");var t=e.target.files[0],a=new FileReader;a.readAsArrayBuffer(t);t.name;var n=this;a.onload=function(e){var t=e.target.result,a=n.fixdata(t),r=s.a.read(btoa(a),{type:"base64"}),i=r.Sheets[r.SheetNames[0]],l=s.a.utils.sheet_to_json(i);l.map(function(e){Object.values(e);var t=Object.keys(e);return t.map(function(t){var a=(e[t]+" ").toUpperCase().replace(/ +(?= )/g,"");e[t]=a}),e}),n.$emit("onLoad",l)}},fixdata:function(e){for(var t="",a=0,n=10240;a<e.byteLength/n;++a)t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(a*n,a*n+n)));return t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(a*n))),t}}},o=l,c=(a("413d"),a("2877")),u=Object(c["a"])(o,n,r,!1,null,null,null);t["a"]=u.exports},"893a":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"drag-and-drop-excel"},[a("div",{attrs:{id:"drop-area"}},[a("form",{staticClass:"my-form"},[a("input",{attrs:{type:"file",id:"fileElem2",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},on:{change:e.handleFiles}}),a("label",{staticClass:"button",staticStyle:{"text-align":"center"},attrs:{for:"fileElem2"}},[e._v(e._s(e.message?e.message:"ARRASTRA TU ARCHIVO EXCEL ACA "))])])])])},r=[],i=(a("34ef"),a("a481"),a("456d"),a("ac6a"),a("8615"),a("7f7f"),a("1146")),s=a.n(i),l={name:"DragAndDropExcelComponent",props:["message"],data:function(){return{}},methods:{handleFiles:function(e){this.$emit("onStart");var t=e.target.files[0],a=new FileReader;a.readAsArrayBuffer(t);t.name;var n=this;a.onload=function(e){var t=e.target.result,a=n.fixdata(t),r=s.a.read(btoa(a),{type:"base64"}),i=r.Sheets[r.SheetNames[0]],l=s.a.utils.sheet_to_json(i);l.map(function(e){Object.values(e);var t=Object.keys(e);return t.map(function(t){var a=(e[t]+" ").toUpperCase().replace(/ +(?= )/g,"");e[t]=a}),e}),n.$emit("onLoad",l)}},fixdata:function(e){for(var t="",a=0,n=10240;a<e.byteLength/n;++a)t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(a*n,a*n+n)));return t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(a*n))),t}}},o=l,c=(a("a238"),a("2877")),u=Object(c["a"])(o,n,r,!1,null,null,null);t["a"]=u.exports},a238:function(e,t,a){"use strict";var n=a("6190"),r=a.n(n);r.a},acee:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"drag-and-drop-excel"},[a("div",{attrs:{id:"drop-area"}},[a("form",{staticClass:"my-form"},[a("input",{attrs:{type:"file",id:"fileElem3",accept:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"},on:{change:e.handleFiles}}),a("label",{staticClass:"button",staticStyle:{"text-align":"center"},attrs:{for:"fileElem3"}},[e._v(e._s(e.message?e.message:"ARRASTRA TU ARCHIVO EXCEL ACA "))])])])])},r=[],i=(a("34ef"),a("a481"),a("456d"),a("ac6a"),a("8615"),a("7f7f"),a("1146")),s=a.n(i),l={name:"DragAndDropExcelComponent",props:["message"],data:function(){return{}},methods:{handleFiles:function(e){this.$emit("onStart");var t=e.target.files[0],a=new FileReader;a.readAsArrayBuffer(t);t.name;var n=this;a.onload=function(e){var t=e.target.result,a=n.fixdata(t),r=s.a.read(btoa(a),{type:"base64"}),i=r.Sheets[r.SheetNames[0]],l=s.a.utils.sheet_to_json(i);l.map(function(e){Object.values(e);var t=Object.keys(e);return t.map(function(t){var a=(e[t]+" ").toUpperCase().replace(/ +(?= )/g,"");e[t]=a}),e}),n.$emit("onLoad",l)}},fixdata:function(e){for(var t="",a=0,n=10240;a<e.byteLength/n;++a)t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(a*n,a*n+n)));return t+=String.fromCharCode.apply(null,new Uint8Array(e.slice(a*n))),t}}},o=l,c=(a("0757"),a("2877")),u=Object(c["a"])(o,n,r,!1,null,null,null);t["a"]=u.exports},c33b:function(e,t,a){"use strict";var n=a("5ec4"),r=a.n(n);r.a},d6c2:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"panels-menu-wrapper"},[a("Slide",e._l(e.pages,function(t,n){return a("a",{key:n,on:{click:function(a){return e.adminOpenPanelByTitle(t.title)}}},[a("span",{staticClass:"panels-menu-button",class:e.isActive(t.title)},[e._v(e._s(t.titulo))])])}),0)],1)},r=[],i=(a("6762"),a("2fdb"),a("d225")),s=a("b0b4"),l=a("308d"),o=a("6bb5"),c=a("4e2b"),u=a("9ab4"),m=a("db0f"),f=a("60a3"),d=function(e){function t(){var e;return Object(i["a"])(this,t),e=Object(l["a"])(this,Object(o["a"])(t).apply(this,arguments)),e.email="",e.currentPanelTitle="",e.secureMenu=[{title:"Title",users:["jl.mayorga236@gmail.com","luiska93@hotmail.com"]},{title:"Dispatches",users:["jl.mayorga236@gmail.com","luiska93@hotmail.com","despachos.web.trianon@gmail.com"]},{title:"Orders",users:["jl.mayorga236@gmail.com","luiska93@hotmail.com","sistemas.web.trianon@gmail.com"]},{title:"Users",users:["jl.mayorga236@gmail.com"]},{title:"Swiper",users:["jl.mayorga236@gmail.com","luiska93@hotmail.com"]},{title:"Banners",users:["jl.mayorga236@gmail.com"]},{title:"Products",users:["jl.mayorga236@gmail.com","luiska93@hotmail.com","sistemas.web.trianon@gmail.com"]},{title:"Categories",users:["jl.mayorga236@gmail.com","luiska93@hotmail.com"]},{title:"DistributorsAndSHops",users:["jl.mayorga236@gmail.com","luiska93@hotmail.com","distribuidores.web.trianon@gmail.com"]}],e}return Object(c["a"])(t,e),Object(s["a"])(t,[{key:"mounted",value:function(){var e=JSON.parse(localStorage.getItem("user")||"");this.email=e.email,console.warn(""),console.warn("this.email"),console.warn(this.email),console.warn("")}},{key:"isUserAllowedByPageTitle",value:function(e){var t=this,a=this.secureMenu.filter(function(a){return a.title===e&&a.users.includes(t.email)});return a.length>0}},{key:"adminOpenPanelByTitle",value:function(e){this.currentPanelTitle===e?(this.currentPanelTitle="",this.$emit("btnChange","")):(this.currentPanelTitle=e,this.$emit("btnChange",e))}},{key:"isActive",value:function(e){return this.currentPanelTitle===e?"active":"no-active"}}]),t}(f["c"]);u["__decorate"]([Object(f["b"])({default:[]})],d.prototype,"pages",void 0),d=u["__decorate"]([Object(f["a"])({components:{Slide:m["Slide"]}})],d);var p=d,h=p,g=(a("c33b"),a("2877")),v=Object(g["a"])(h,n,r,!1,null,null,null);t["a"]=v.exports},f640:function(e,t,a){},ffb4:function(e,t,a){}}]);