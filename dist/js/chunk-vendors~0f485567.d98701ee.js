(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~0f485567"],{"001a":function(e,n,t){"use strict";function r(e){return e&&"object"===typeof e&&"default"in e?e["default"]:e}Object.defineProperty(n,"__esModule",{value:!0});var o=r(t("c23d")),i=t("9ab4"),a={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},s=function(e){function n(t,r,o){var i=e.call(this,r)||this;return Object.setPrototypeOf(i,n.prototype),i.code=t,i.details=o,i}return i.__extends(n,e),n}(Error);function u(e){if(e>=200&&e<300)return"ok";switch(e){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function c(e,n,t){var r=u(e),o=r,i=void 0;try{var c=n.error;if(c){var l=c.status;if("string"===typeof l){if(!a[l])return new s("internal","internal");r=a[l]}o=l;var p=c.message;"string"===typeof p&&(o=p),i=c.details,void 0!==i&&(i=t.decode(i))}}catch(f){}return"ok"===r?null:new s(r,o,i)}var l=function(){function e(e){this.app=e}return e.prototype.getAuthToken=function(){return i.__awaiter(this,void 0,void 0,function(){var e;return i.__generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.app.INTERNAL.getToken()];case 1:return e=n.sent(),e?[2,e.accessToken]:[2,void 0];case 2:return n.sent(),[2,void 0];case 3:return[2]}})})},e.prototype.getInstanceIdToken=function(){return i.__awaiter(this,void 0,void 0,function(){var e,n;return i.__generator(this,function(t){switch(t.label){case 0:return t.trys.push([0,2,,3]),this.app.messaging?(e=this.app.messaging(),[4,e.getToken()]):[2,void 0];case 1:return n=t.sent(),n?[2,n]:[2,void 0];case 2:return t.sent(),[2,void 0];case 3:return[2]}})})},e.prototype.getContext=function(){return i.__awaiter(this,void 0,void 0,function(){var e,n;return i.__generator(this,function(t){switch(t.label){case 0:return[4,this.getAuthToken()];case 1:return e=t.sent(),[4,this.getInstanceIdToken()];case 2:return n=t.sent(),[2,{authToken:e,instanceIdToken:n}]}})})},e}(),p="type.googleapis.com/google.protobuf.Int64Value",f="type.googleapis.com/google.protobuf.UInt64Value";
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(e,n){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[r]=n(e[r]));return t}var h=function(){function e(){}return e.prototype.encode=function(e){var n=this;if(null===e||void 0===e)return null;if(e instanceof Number&&(e=e.valueOf()),"number"===typeof e&&isFinite(e))return e;if(!0===e||!1===e)return e;if("[object String]"===Object.prototype.toString.call(e))return e;if(Array.isArray(e))return e.map(function(e){return n.encode(e)});if("function"===typeof e||"object"===typeof e)return d(e,function(e){return n.encode(e)});throw new Error("Data cannot be encoded in JSON: "+e)},e.prototype.decode=function(e){var n=this;if(null===e)return e;if(e["@type"])switch(e["@type"]){case p:case f:var t=parseFloat(e.value);if(isNaN(t))throw new Error("Data cannot be decoded from JSON: "+e);return t;default:throw new Error("Data cannot be decoded from JSON: "+e)}return Array.isArray(e)?e.map(function(e){return n.decode(e)}):"function"===typeof e||"object"===typeof e?d(e,function(e){return n.decode(e)}):e},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e){return new Promise(function(n,t){setTimeout(function(){t(new s("deadline-exceeded","deadline-exceeded"))},e)})}var b=function(){function e(e,n){var t=this;void 0===n&&(n="us-central1"),this.app_=e,this.region_=n,this.serializer=new h,this.emulatorOrigin=null,this.INTERNAL={delete:function(){return t.deleteService()}},this.contextProvider=new l(e),this.cancelAllRequests=new Promise(function(e){t.deleteService=function(){return e()}})}return Object.defineProperty(e.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),e.prototype._url=function(e){var n=this.app_.options.projectId,t=this.region_;if(null!==this.emulatorOrigin){var r=this.emulatorOrigin;return r+"/"+n+"/"+t+"/"+e}return"https://"+t+"-"+n+".cloudfunctions.net/"+e},e.prototype.useFunctionsEmulator=function(e){this.emulatorOrigin=e},e.prototype.httpsCallable=function(e,n){var t=this,r=function(r){return t.call(e,r,n||{})};return r},e.prototype.postJSON=function(e,n,t){return i.__awaiter(this,void 0,void 0,function(){var r,o;return i.__generator(this,function(i){switch(i.label){case 0:t.append("Content-Type","application/json"),i.label=1;case 1:return i.trys.push([1,3,,4]),[4,fetch(e,{method:"POST",body:JSON.stringify(n),headers:t})];case 2:return r=i.sent(),[3,4];case 3:return i.sent(),[2,{status:0,json:null}];case 4:o=null,i.label=5;case 5:return i.trys.push([5,7,,8]),[4,r.json()];case 6:return o=i.sent(),[3,8];case 7:return i.sent(),[3,8];case 8:return[2,{status:r.status,json:o}]}})})},e.prototype.call=function(e,n,t){return i.__awaiter(this,void 0,void 0,function(){var r,o,a,u,l,p,f,d,h;return i.__generator(this,function(i){switch(i.label){case 0:return r=this._url(e),n=this.serializer.encode(n),o={data:n},a=new Headers,[4,this.contextProvider.getContext()];case 1:return u=i.sent(),u.authToken&&a.append("Authorization","Bearer "+u.authToken),u.instanceIdToken&&a.append("Firebase-Instance-ID-Token",u.instanceIdToken),l=t.timeout||7e4,[4,Promise.race([this.postJSON(r,o,a),v(l),this.cancelAllRequests])];case 2:if(p=i.sent(),!p)throw new s("cancelled","Firebase Functions instance was deleted.");if(f=c(p.status,p.json,this.serializer),f)throw f;if(!p.json)throw new s("internal","Response is not valid JSON object.");if(d=p.json.data,"undefined"===typeof d&&(d=p.json.result),"undefined"===typeof d)throw new s("internal","Response is missing data field.");return h=this.serializer.decode(d),[2,{data:h}]}})})},e}(),y="functions";
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(e,n,t){return new b(e,t)}function m(e){var n={Functions:b};e.INTERNAL.registerService(y,g,n,void 0,!0)}m(o),n.registerFunctions=m},"061b":function(e,n,t){e.exports=t("fa99")},"308d":function(e,n,t){"use strict";var r=t("5d58"),o=t.n(r),i=t("67bb"),a=t.n(i);function s(e){return s="function"===typeof a.a&&"symbol"===typeof o.a?function(e){return typeof e}:function(e){return e&&"function"===typeof a.a&&e.constructor===a.a&&e!==a.a.prototype?"symbol":typeof e},s(e)}function u(e){return u="function"===typeof a.a&&"symbol"===s(o.a)?function(e){return s(e)}:function(e){return e&&"function"===typeof a.a&&e.constructor===a.a&&e!==a.a.prototype?"symbol":s(e)},u(e)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function l(e,n){return!n||"object"!==u(n)&&"function"!==typeof n?c(e):n}t.d(n,"a",function(){return l})},"3b8d":function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t("795b"),o=t.n(r);function i(e,n,t,r,i,a,s){try{var u=e[a](s),c=u.value}catch(l){return void t(l)}u.done?n(c):o.a.resolve(c).then(r,i)}function a(e){return function(){var n=this,t=arguments;return new o.a(function(r,o){var a=e.apply(n,t);function s(e){i(a,r,o,s,u,"next",e)}function u(e){i(a,r,o,s,u,"throw",e)}s(void 0)})}}},"4aa6":function(e,n,t){e.exports=t("dc62")},"4d16":function(e,n,t){e.exports=t("25b0")},"4e2b":function(e,n,t){"use strict";var r=t("4aa6"),o=t.n(r),i=t("4d16"),a=t.n(i);function s(e,n){return s=a.a||function(e,n){return e.__proto__=n,e},s(e,n)}function u(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=o()(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}t.d(n,"a",function(){return u})},"5d58":function(e,n,t){e.exports=t("d8d6")},"67bb":function(e,n,t){e.exports=t("f921")},"6bb5":function(e,n,t){"use strict";t.d(n,"a",function(){return s});var r=t("061b"),o=t.n(r),i=t("4d16"),a=t.n(i);function s(e){return s=a.a?o.a:function(e){return e.__proto__||o()(e)},s(e)}},"75fc":function(e,n,t){"use strict";var r=t("a745"),o=t.n(r);function i(e){if(o()(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}var a=t("774e"),s=t.n(a),u=t("c8bb"),c=t.n(u);function l(e){if(c()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return s()(e)}function p(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(e){return i(e)||l(e)||p()}t.d(n,"a",function(){return f})},"774e":function(e,n,t){e.exports=t("d2d5")},"795b":function(e,n,t){e.exports=t("696e")},"85f2":function(e,n,t){e.exports=t("454f")},a745:function(e,n,t){e.exports=t("f410")},abfd:function(e,n,t){"use strict";t.r(n),t.d(n,"LogLevel",function(){return r}),t.d(n,"Logger",function(){return s}),t.d(n,"setLogLevel",function(){return u});
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r,o=[];(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));var i=r.INFO,a=function(e,n){for(var t=[],o=2;o<arguments.length;o++)t[o-2]=arguments[o];if(!(n<e.logLevel)){var i=(new Date).toISOString();switch(n){case r.DEBUG:console.log.apply(console,["["+i+"]  "+e.name+":"].concat(t));break;case r.VERBOSE:console.log.apply(console,["["+i+"]  "+e.name+":"].concat(t));break;case r.INFO:console.info.apply(console,["["+i+"]  "+e.name+":"].concat(t));break;case r.WARN:console.warn.apply(console,["["+i+"]  "+e.name+":"].concat(t));break;case r.ERROR:console.error.apply(console,["["+i+"]  "+e.name+":"].concat(t));break;default:throw new Error("Attempted to log a message with an invalid logType (value: "+n+")")}}},s=function(){function e(e){this.name=e,this._logLevel=i,this._logHandler=a,o.push(this)}return Object.defineProperty(e.prototype,"logLevel",{get:function(){return this._logLevel},set:function(e){if(!(e in r))throw new TypeError("Invalid value assigned to `logLevel`");this._logLevel=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"logHandler",{get:function(){return this._logHandler},set:function(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e},enumerable:!0,configurable:!0}),e.prototype.debug=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._logHandler.apply(this,[this,r.DEBUG].concat(e))},e.prototype.log=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._logHandler.apply(this,[this,r.VERBOSE].concat(e))},e.prototype.info=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._logHandler.apply(this,[this,r.INFO].concat(e))},e.prototype.warn=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._logHandler.apply(this,[this,r.WARN].concat(e))},e.prototype.error=function(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n];this._logHandler.apply(this,[this,r.ERROR].concat(e))},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(e){o.forEach(function(n){n.logLevel=e})}},b0b4:function(e,n,t){"use strict";t.d(n,"a",function(){return a});var r=t("85f2"),o=t.n(r);function i(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),o()(e,r.key,r)}}function a(e,n,t){return n&&i(e.prototype,n),t&&i(e,t),e}},c23d:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r,o=t("9ab4"),i=t("cd51"),a=t("abfd"),s=(r={},r["no-app"]="No Firebase App '{$name}' has been created - call Firebase App.initializeApp()",r["bad-app-name"]="Illegal App name: '{$name}",r["duplicate-app"]="Firebase App named '{$name}' already exists",r["app-deleted"]="Firebase App named '{$name}' already deleted",r["duplicate-service"]="Firebase service named '{$name}' already registered",r["invalid-app-argument"]="firebase.{$name}() takes either no argument or a Firebase App instance.",r),u=new i.ErrorFactory("app","Firebase",s);function c(e,n){throw u.create(e,n)}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var l="[DEFAULT]",p=[],f=function(){function e(e,n,t){this.firebase_=t,this.isDeleted_=!1,this.services_={},this.name_=n.name,this.automaticDataCollectionEnabled_=n.automaticDataCollectionEnabled||!1,this.options_=i.deepCopy(e),this.INTERNAL={getUid:function(){return null},getToken:function(){return Promise.resolve(null)},addAuthTokenListener:function(e){p.push(e),setTimeout(function(){return e(null)},0)},removeAuthTokenListener:function(e){p=p.filter(function(n){return n!==e})}}}return Object.defineProperty(e.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed_(),this.automaticDataCollectionEnabled_},set:function(e){this.checkDestroyed_(),this.automaticDataCollectionEnabled_=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"name",{get:function(){return this.checkDestroyed_(),this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this.checkDestroyed_(),this.options_},enumerable:!0,configurable:!0}),e.prototype.delete=function(){var e=this;return new Promise(function(n){e.checkDestroyed_(),n()}).then(function(){e.firebase_.INTERNAL.removeApp(e.name_);for(var n=[],t=0,r=Object.keys(e.services_);t<r.length;t++)for(var o=r[t],i=0,a=Object.keys(e.services_[o]);i<a.length;i++){var s=a[i];n.push(e.services_[o][s])}return Promise.all(n.map(function(e){return e.INTERNAL.delete()}))}).then(function(){e.isDeleted_=!0,e.services_={}})},e.prototype._getService=function(e,n){if(void 0===n&&(n=l),this.checkDestroyed_(),this.services_[e]||(this.services_[e]={}),!this.services_[e][n]){var t=n!==l?n:void 0,r=this.firebase_.INTERNAL.factories[e](this,this.extendApp.bind(this),t);this.services_[e][n]=r}return this.services_[e][n]},e.prototype.extendApp=function(e){var n=this;i.deepExtend(this,e),e.INTERNAL&&e.INTERNAL.addAuthTokenListener&&(p.forEach(function(e){n.INTERNAL.addAuthTokenListener(e)}),p=[])},e.prototype.checkDestroyed_=function(){this.isDeleted_&&c("app-deleted",{name:this.name_})},e}();
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(e,n){return Object.prototype.hasOwnProperty.call(e,n)}function h(e){var n={},t={},r={},o={__esModule:!0,initializeApp:u,app:s,apps:null,SDK_VERSION:"6.0.2",INTERNAL:{registerService:f,removeApp:a,factories:t,useAsService:v}};function a(e){var t=n[e];h(t,"delete"),delete n[e]}function s(e){return e=e||l,d(n,e)||c("no-app",{name:e}),n[e]}function u(t,r){if(void 0===r&&(r={}),"object"!==typeof r||null===r){var i=r;r={name:i}}var a=r;void 0===a.name&&(a.name=l);var s=a.name;"string"===typeof s&&s||c("bad-app-name",{name:String(s)}),d(n,s)&&c("duplicate-app",{name:s});var u=new e(t,a,o);return n[s]=u,h(u,"create"),u}function p(){return Object.keys(n).map(function(e){return n[e]})}function f(n,a,u,l,f){function d(e){return void 0===e&&(e=s()),"function"!==typeof e[n]&&c("invalid-app-argument",{name:n}),e[n]()}return void 0===f&&(f=!1),t[n]&&c("duplicate-service",{name:n}),t[n]=a,l&&(r[n]=l,p().forEach(function(e){l("create",e)})),void 0!==u&&i.deepExtend(d,u),o[n]=d,e.prototype[n]=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=this._getService.bind(this,n);return r.apply(this,f?e:[])},d}function h(e,n){for(var o=0,i=Object.keys(t);o<i.length;o++){var a=i[o],s=v(e,a);if(null===s)return;r[s]&&r[s](n,e)}}function v(e,n){if("serverAuth"===n)return null;var t=n;return t}return i.patchProperty(o,"default",o),Object.defineProperty(o,"apps",{get:p}),i.patchProperty(s,"App",e),o}
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(){var e=h(f);function n(n){i.deepExtend(e,n)}return e.INTERNAL=o.__assign({},e.INTERNAL,{createFirebaseNamespace:v,extendNamespace:n,createSubscribe:i.createSubscribe,ErrorFactory:i.ErrorFactory,deepExtend:i.deepExtend}),e}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */f.prototype.name&&f.prototype.options||f.prototype.delete||console.log("dc");var b=new a.Logger("@firebase/app");if(i.isBrowser()&&"firebase"in self){b.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");var y=self.firebase.SDK_VERSION;y&&y.indexOf("LITE")>=0&&b.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}var g=v(),m=g.initializeApp;g.initializeApp=function(){return i.isNode()&&b.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and set "module"\n      to false and "main" to true:\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '),m.apply(void 0,arguments)};var _=g;n.default=_,n.firebase=_},c8bb:function(e,n,t){e.exports=t("54a1")},d225:function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}t.d(n,"a",function(){return r})}}]);