(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["profile~14337625"],{c1f8:function(e,n,r){"use strict";r.d(n,"a",function(){return a});r("96cf"),r("7f7f"),r("28a5");var t=r("3b8d"),o=r("123c"),c=r("12e8");function i(e){return u.apply(this,arguments)}function u(){return u=Object(t["a"])(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(t["a"])(regeneratorRuntime.mark(function e(r){var t,o,c,i,u,a,s,m,k,x,B,P,y,M,U,G,T,j,S;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=p(n),o=f(n),c=h(n),i=l(n),u=d(n),a=w(n),e.next=8,N(n);case 8:s=e.sent,m=O(n),k=b(n),x=R(n),B=A(n),P=g(n),y=v(n),M=C(n),U=_(n),G=E(n),T=D(n),j=L(n),S={ref:t,ref_code:o,ref_color_code:c,ref_size_code:i,ref_photo_code:u,gender:a,category:s,description:m,short_name:k,barcode:x,price_cop:B,price_usd:P,line:y,color:M,height:U,width:G,depth:T,discount:j},r(S);case 22:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e)})),u.apply(this,arguments)}function a(e){return s.apply(this,arguments)}function s(){return s=Object(t["a"])(regeneratorRuntime.mark(function e(n){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(){var e=Object(t["a"])(regeneratorRuntime.mark(function e(r){var t,o,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=[],o=0;case 2:if(!(o<n.length-1)){e.next=10;break}return e.next=5,i(n[o]);case 5:c=e.sent,t.push(c);case 7:o++,e.next=2;break;case 10:r(t);case 11:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}()));case 1:case"end":return e.stop()}},e)})),s.apply(this,arguments)}function p(e){return e.ref||e.Referencia||e.REFERENCIA||"NA"}function f(e){var n=p(e),r="".concat(n.split("-")[0]),t=("".concat(n.split("-")[1].slice(0,2)),"".concat(n.split("-")[1].slice(2,4)),r);return t}function h(e){var n=p(e),r=("".concat(n.split("-")[0]),"".concat(n.split("-")[1].slice(0,2))),t=("".concat(n.split("-")[1].slice(2,4)),r);return t}function l(e){var n=p(e),r=("".concat(n.split("-")[0]),"".concat(n.split("-")[1].slice(0,2)),"".concat(n.split("-")[1].slice(2,4))),t=r;return t}function d(e){var n=f(e),r=h(e);return"".concat(n,"-").concat(r)}function m(e){return e.name||e.description||e["Nombre Largo"]||e["NOMBRE LARGO"]||e["Nombre"]||"NA"}function w(e){var n=p(e).toUpperCase(),r=n.charAt(0),t="D"===r?"DAMA":"HOMBRE";return t}function N(e){return new Promise(function(n){var r=new o["a"],t=new c["a"],i=m(e).toUpperCase();r.getHomeGenderButtonsGategories().then(function(e){var r=e.map(function(e){return e.title});t.setWordsList(r),t.setWordToMatch(i),t.getMatch().then(function(e){n(e)})}).catch(function(e){n("NA")})})}function O(e){return e.description||e.name||e["Nombre Largo"]||e["NOMBRE LARGO"]||e["Nombre"]||"NA"}function b(e){return e.short_name||e["Nombre Corto"]||e["Nombre corto"]||e["Nombre Corto"]||e["NOMBRE CORTO"]||e["Nombre"]||"NA"}function R(e){return e.barcode||e.codebar||e["Codigo Barras "]||e["Codigo Barras"]||e["CODIGO BARRAS"]||"NA"}function A(e){return e.price_cop||e["Precio COP"]||-1}function g(e){return e.price_usd||e["Precio USD"]||-1}function v(e){return e.line||e["Linea"]||e["LINEA"]||"NA"}function C(e){return e.color||e["Color"]||e["COLOR"]||"NA"}function _(e){return e.height||e["ALTO"]||e["Alto"]||-1}function E(e){return e.width||e["Ancho"]||e["ANCHO"]||-1}function D(e){return e.depth||e["PROFUNDO"]||e["Profundo"]||-1}function L(e){return e.discount||e.Discount||e.DESCUENTO||e["Descuento"]||e["DESCUENTO"]||0}}}]);