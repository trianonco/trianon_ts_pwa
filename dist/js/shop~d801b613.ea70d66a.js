(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["shop~d801b613"],{"088f":function(t,o,c){"use strict";var e=c("aa48"),a=c.n(e);a.a},aa48:function(t,o,c){},b39f:function(t,o,c){"use strict";var e=function(){var t=this,o=t.$createElement,c=t._self._c||o;return t.isNot?t._e():c("div",{staticClass:"products-list-item",class:t.getProducsListItemClass()},[c("div",{staticClass:"product-list-item-wrapper",on:{click:function(o){return t.goToProductView()}}},[t.isNew?c("div",{staticClass:"isNew"},[t._v("NUEVO")]):t._e(),t.product.discount&&0!=t.product.discount?c("ui-floating-discount",{attrs:{discount:t.product.discount}}):t._e(),c("v-lazy-image",{staticClass:"photo",attrs:{src:t.photo_hd_src,"src-placeholder":t.photo_thumb_src},on:{load:function(o){return t.onLoadVLazyImage()}}}),c("h2",{staticClass:"price"},[c("ui-price-tag",{attrs:{price:t.getPrice(t.product),discount:t.product.discount}})],1),c("h2",{staticClass:"name"},[t._v(t._s(t.product.description)+" "+t._s(t.product.line))]),c("h2",{staticClass:"color"},[t._v("COLOR "+t._s(t.product.color))])],1)])},a=[],s=(c("a481"),c("d225")),n=c("b0b4"),i=c("308d"),r=c("6bb5"),u=c("4e2b"),p=c("9ab4"),d=c("60a3"),h=c("fc1f"),l=c("5077"),f=c("b27c"),_=c("8dc2"),g=c.n(_),b=function(t){function o(){var t;return Object(s["a"])(this,o),t=Object(i["a"])(this,Object(r["a"])(o).apply(this,arguments)),t.isNew=!1,t.isNot=!1,t.isPhotoOnStock=!1,t.isProductOnStock=!1,t.photo_hd_src="",t.photo_thumb_src="",t.product_code="",t}return Object(u["a"])(o,t),Object(n["a"])(o,[{key:"getPrice",value:function(t){return Object(h["a"])(t)}},{key:"getProducsListItemClass",value:function(){return this.isPhotoOnStock?"default":this.isNot?"hidden bye-gone":"hidden"}},{key:"onLoadVLazyImage",value:function(){this.isPhotoOnStock=!0;var t=JSON.parse(""+localStorage.getItem("shopOnStock"));t.push(this.product.ref),localStorage.setItem("shopOnStock",JSON.stringify(t))}},{key:"imageExists",value:function(t){return new Promise(function(o,c){var e=new Image;e.onload=function(){o()},e.onerror=function(){c()},e.src=t})}},{key:"goToProductView",value:function(){var t="".concat(this.product.ref_photo_code,"-01.jpg"),o="gender/".concat(this.product.gender.replace("/","-")),c="category/".concat(this.product.category.replace("/","-")),e="ref/".concat(this.product.ref_photo_code.replace("/","-")),a="description/".concat(this.product.description.replace("/","-")),s="color/".concat(this.product.color.replace("/","-")),n="line/".concat(this.product.line.replace("/","-")),i="photo/".concat(t.replace("/","-"));this.$router.push("/product/".concat(o,"/").concat(c,"/").concat(e,"/").concat(a,"/").concat(s,"/").concat(n,"/").concat(i))}},{key:"mounted",value:function(){var t=this,o="18c776df-f5a7-45a0-9012-16f780381d92",c="".concat(this.product.ref_photo_code,"-01.jpg"),e="https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos",a="alt=media&token=".concat(o);this.photo_thumb_src="".concat(e,"%2Fthumb%2F").concat(c,"?").concat(a),this.photo_hd_src="".concat(e,"%2Fhd%2F").concat(c,"?").concat(a),this.imageExists(this.photo_thumb_src).then(function(o){t.isNot=!1}).catch(function(o){t.isNot=!0})}}]),o}(d["c"]);p["__decorate"]([Object(d["b"])()],b.prototype,"product",void 0),b=p["__decorate"]([Object(d["a"])({components:{VLazyImage:g.a,"ui-floating-discount":l["a"],"ui-price-tag":f["a"]}})],b);var m=b,v=m,O=(c("088f"),c("2877")),k=Object(O["a"])(v,e,a,!1,null,null,null);o["a"]=k.exports}}]);