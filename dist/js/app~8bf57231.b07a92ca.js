(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app~8bf57231"],{"185b":function(e,t,n){"use strict";n.d(t,"a",function(){return u});n("96cf");var o=n("3b8d"),r=n("d225"),c=n("b0b4"),a=n("f579"),i=n("a7f4"),s=n("5e1a"),u=function(){function e(){Object(r["a"])(this,e),this.currentDatabase={},this.optionsDatabase={"USER-DB":new a["a"],"SHOP-DB":new i["a"],"SETTINGS-DB":new s["a"]}}return Object(c["a"])(e,[{key:"init",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:console.log(" .... Initing DB ");case 1:case"end":return e.stop()}},e)}));function t(){return e.apply(this,arguments)}return t}()},{key:"setDatabaseByName",value:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:this.currentDatabase=this.optionsDatabase[t];case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}()},{key:"getDatabase",value:function(){return this.currentDatabase}}]),e}()},"4c60":function(e,t,n){"use strict";n.d(t,"a",function(){return i});n("a481"),n("ac6a");var o=n("d225"),r=n("b0b4"),c=n("59ca"),a=n.n(c),i=function(){function e(){Object(o["a"])(this,e),this.db=a.a.firestore()}return Object(r["a"])(e,[{key:"getLastUpdated",value:function(){var e=this;return new Promise(function(t){e.db.collection("CONFIG").get().then(function(e){e.forEach(function(e){var n=e.data(),o=(n["COLLECTION"],n["LAST_UPDATED"].toDate());t(o)})})})}},{key:"getHeaderTitleText",value:function(){var e=this;return new Promise(function(t){e.db.collection("HOME_SETTINGS").where("code","==","header_title_text").get().then(function(e){t(e.docs[0].data().content)})})}},{key:"getUserFromDB",value:function(e){var t=this;return new Promise(function(n,o){console.warn("email ==> "+e),t.db.collection("USERS").where("email","==",e).get().then(function(r){t.db.collection("SHOPPING_HISTORY").where("email","==",e).get().then(function(e){var t=r.docs[0].data(),o=e.docs.map(function(e){return e.data()});t["inProcessCart"]=o,console.error(""),console.error({user:t}),console.error(""),n(t)}).catch(function(e){return o(e)})}).catch(function(e){return o(e)})})}},{key:"getHomeSwiperSlides",value:function(){var e=this;return new Promise(function(t){e.db.collection("HOME_SETTINGS").where("code","==","home_swiper_slides").get().then(function(e){t(JSON.parse(e.docs[0].data().content))})})}},{key:"getHomeGenderButtonsGategories",value:function(){var e=this;return new Promise(function(t){e.db.collection("HOME_SETTINGS").where("code","==","home_gender_buttons_categories").get().then(function(e){t(JSON.parse(e.docs[0].data().content))})})}},{key:"getShopProductsByCategoryAndGender",value:function(e,t){var n=this;return new Promise(function(o){var r=t,c=e.toUpperCase().replace(" ","-").replace(" ","-"),a="db_shop_gender_".concat(r,"_category_").concat(c);r.length>0&&c.length>0&&n.db.collection("SHOP").where("gender","==",t).where("category","==",e).get().then(function(e){if(e&&e.docs&&e.docs[0]){var t=e.docs[0].data(),n=t.products;o(n)}else console.error(" db.ts Firebase Error !!! "),console.error(e),console.error(a),o([])})})}},{key:"setShopProducts",value:function(e,t,n){var o=this;return new Promise(function(r){var c=t,a=n.toUpperCase().replace(" ","-").replace(" ","-"),i="db_shop_gender_".concat(c,"_category_").concat(a),s=t,u=n,d=e.length>0?e:[],l={gender:s,category:u,products:d,updatedAt:new Date};o.db.collection("SHOP").doc(i).set(l).then(function(e){r(!0)}).catch(function(e){console.log(e),r(!1)})})}},{key:"getProductByRef",value:function(e){var t=this;return new Promise(function(n){var o="H"===e.slice(0,1)?"HOMBRE":"DAMA";t.db.collection("SHOP").where("gender","==",o).get().then(function(t){var o=t.docs;o.forEach(function(t){var o=t.data(),r=o.products,c=r.filter(function(t){return t.ref===e}),a=c.length>0;if(a){var i=t.id,s=c[0],u=r;n({name:i,product:s,products:u})}}),n({})})})}},{key:"getAuthorizedDistributors",value:function(){var e=this;return new Promise(function(t){e.db.collection("AUTHORIZED_DISTRIBUTORS").where("code","==","PLACES").get().then(function(e){t(e.docs[0].data().PLACES)})})}},{key:"setAuthorizedDistributors",value:function(e){var t=this;return new Promise(function(e){t.db.collection("AUTHORIZED_DISTRIBUTORS").doc("wH9jN7gQ631j0Z1xq2AP").set({name:"Los Angeles",state:"CA",country:"USA"}).then(function(){console.log("Document successfully written!")}).catch(function(e){console.error("Error writing document: ",e)})})}},{key:"setShoppingCartProducts",value:function(e){var t=this;return new Promise(function(n){var o=JSON.parse(localStorage.getItem("user")||"{}"),r=o.email||"";r?t.db.collection("USERS").doc(r).update({shoppingCart:e}).then(function(){console.log("Document successfully written!"),n("OK")}).catch(function(e){console.error("Error writing document: ",e),n("ERROR FROM FIRESTORE")}):n("ERROR!!! NO EMAIL IN LOCALSTORGAE")})}}]),e}()},"8ca0":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o={apiKey:"AIzaSyA3iNUvGsYc-Hmy1gUapAqi1JgDgI5DHQA",authDomain:"trianon-co-pwa-dev.firebaseapp.com",databaseURL:"https://trianon-co-pwa-dev.firebaseio.com",projectId:"trianon-co-pwa-dev",storageBucket:"trianon-co-pwa-dev.appspot.com",messagingSenderId:"886337397745",appId:"1:886337397745:web:21248e035f8148df"}}}]);