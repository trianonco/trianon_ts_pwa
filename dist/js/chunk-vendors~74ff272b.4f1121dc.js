(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors~74ff272b"],{"2e66":function(t,e,r){"use strict";var n=r("c23d"),o=r.n(n),i="firebasestorage.googleapis.com",a="storageBucket",u=12e4,s=6e4,c=-9007199254740991,l=function(){function t(t,e){this.code_=p(t),this.message_="Firebase Storage: "+e,this.serverResponse_=null,this.name_="FirebaseError"}return t.prototype.codeProp=function(){return this.code},t.prototype.codeEquals=function(t){return p(t)===this.codeProp()},t.prototype.serverResponseProp=function(){return this.serverResponse_},t.prototype.setServerResponseProp=function(t){this.serverResponse_=t},Object.defineProperty(t.prototype,"name",{get:function(){return this.name_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"code",{get:function(){return this.code_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"message",{get:function(){return this.message_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"serverResponse",{get:function(){return this.serverResponse_},enumerable:!0,configurable:!0}),t}(),h={UNKNOWN:"unknown",OBJECT_NOT_FOUND:"object-not-found",BUCKET_NOT_FOUND:"bucket-not-found",PROJECT_NOT_FOUND:"project-not-found",QUOTA_EXCEEDED:"quota-exceeded",UNAUTHENTICATED:"unauthenticated",UNAUTHORIZED:"unauthorized",RETRY_LIMIT_EXCEEDED:"retry-limit-exceeded",INVALID_CHECKSUM:"invalid-checksum",CANCELED:"canceled",INVALID_EVENT_NAME:"invalid-event-name",INVALID_URL:"invalid-url",INVALID_DEFAULT_BUCKET:"invalid-default-bucket",NO_DEFAULT_BUCKET:"no-default-bucket",CANNOT_SLICE_BLOB:"cannot-slice-blob",SERVER_FILE_WRONG_SIZE:"server-file-wrong-size",NO_DOWNLOAD_URL:"no-download-url",INVALID_ARGUMENT:"invalid-argument",INVALID_ARGUMENT_COUNT:"invalid-argument-count",APP_DELETED:"app-deleted",INVALID_ROOT_OPERATION:"invalid-root-operation",INVALID_FORMAT:"invalid-format",INTERNAL_ERROR:"internal-error"};function p(t){return"storage/"+t}function f(){var t="An unknown error occurred, please check the error payload for server response.";return new l(h.UNKNOWN,t)}function d(t){return new l(h.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function _(t){return new l(h.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function v(){var t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new l(h.UNAUTHENTICATED,t)}function b(t){return new l(h.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function m(){return new l(h.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function g(){return new l(h.CANCELED,"User canceled the upload/download.")}function y(t){return new l(h.INVALID_URL,"Invalid URL '"+t+"'.")}function R(t){return new l(h.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function E(){return new l(h.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function w(){return new l(h.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function T(){return new l(h.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function U(t,e,r){return new l(h.INVALID_ARGUMENT,"Invalid argument in `"+e+"` at index "+t+": "+r)}function A(t,e,r,n){var o,i;return t===e?(o=t,i=1===t?"argument":"arguments"):(o="between "+t+" and "+e,i="arguments"),new l(h.INVALID_ARGUMENT_COUNT,"Invalid argument count in `"+r+"`: Expected "+o+" "+i+", received "+n+".")}function N(){return new l(h.APP_DELETED,"The Firebase app was deleted.")}function k(t){return new l(h.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function O(t,e){return new l(h.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function C(t){throw new l(h.INTERNAL_ERROR,"Internal error: "+t)}
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
 */var S={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};function I(t){switch(t){case S.RAW:case S.BASE64:case S.BASE64URL:case S.DATA_URL:return;default:throw"Expected one of the event types: ["+S.RAW+", "+S.BASE64+", "+S.BASE64URL+", "+S.DATA_URL+"]."}}var P=function(){function t(t,e){this.data=t,this.contentType=e||null}return t}();function x(t,e){switch(t){case S.RAW:return new P(L(e));case S.BASE64:case S.BASE64URL:return new P(M(t,e));case S.DATA_URL:return new P(B(e),G(e))}throw f()}function L(t){for(var e=[],r=0;r<t.length;r++){var n=t.charCodeAt(r);if(n<=127)e.push(n);else if(n<=2047)e.push(192|n>>6,128|63&n);else if(55296==(64512&n)){var o=r<t.length-1&&56320==(64512&t.charCodeAt(r+1));if(o){var i=n,a=t.charCodeAt(++r);n=65536|(1023&i)<<10|1023&a,e.push(240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n)}else e.push(239,191,189)}else 56320==(64512&n)?e.push(239,191,189):e.push(224|n>>12,128|n>>6&63,128|63&n)}return new Uint8Array(e)}function D(t){var e;try{e=decodeURIComponent(t)}catch(r){throw O(S.DATA_URL,"Malformed data URL.")}return L(e)}function M(t,e){switch(t){case S.BASE64:var r=-1!==e.indexOf("-"),n=-1!==e.indexOf("_");if(r||n){var o=r?"-":"_";throw O(t,"Invalid character '"+o+"' found: is it base64url encoded?")}break;case S.BASE64URL:var i=-1!==e.indexOf("+"),a=-1!==e.indexOf("/");if(i||a){o=i?"+":"/";throw O(t,"Invalid character '"+o+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}var u;try{u=atob(e)}catch(l){throw O(t,"Invalid character found")}for(var s=new Uint8Array(u.length),c=0;c<u.length;c++)s[c]=u.charCodeAt(c);return s}var W=function(){function t(t){this.base64=!1,this.contentType=null;var e=t.match(/^data:([^,]+)?,/);if(null===e)throw O(S.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");var r=e[1]||null;null!=r&&(this.base64=q(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-";base64".length):r),this.rest=t.substring(t.indexOf(",")+1)}return t}();function B(t){var e=new W(t);return e.base64?M(S.BASE64,e.rest):D(e.rest)}function G(t){var e=new W(t);return e.contentType}function q(t,e){var r=t.length>=e.length;return!!r&&t.substring(t.length-e.length)===e}
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
 */var j,F={STATE_CHANGED:"state_changed"},H={RUNNING:"running",PAUSING:"pausing",PAUSED:"paused",SUCCESS:"success",CANCELING:"canceling",CANCELED:"canceled",ERROR:"error"},z={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function X(t){switch(t){case H.RUNNING:case H.PAUSING:case H.CANCELING:return z.RUNNING;case H.PAUSED:return z.PAUSED;case H.SUCCESS:return z.SUCCESS;case H.CANCELED:return z.CANCELED;case H.ERROR:return z.ERROR;default:return z.ERROR}}
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
 */function V(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function K(t,e){for(var r in t)V(t,r)&&e(r,t[r])}function Z(t){if(null==t)return{};var e={};return K(t,function(t,r){e[t]=r}),e}
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
 */function J(t){return new Promise(t)}function Q(t){return Promise.resolve(t)}function Y(t){return Promise.reject(t)}
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
 */function $(t){return null!=t}function tt(t){return void 0!==t}function et(t){return"function"===typeof t}function rt(t){return"object"===typeof t}function nt(t){return rt(t)&&null!==t}function ot(t){return rt(t)&&!Array.isArray(t)}function it(t){return"string"===typeof t||t instanceof String}function at(t){return"number"===typeof t||t instanceof Number}function ut(t){return st()&&t instanceof Blob}function st(){return"undefined"!==typeof Blob}
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
 */(function(t){t[t["NO_ERROR"]=0]="NO_ERROR",t[t["NETWORK_ERROR"]=1]="NETWORK_ERROR",t[t["ABORT"]=2]="ABORT"})(j||(j={}));
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
var ct=function(){function t(){var t=this;this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=j.NO_ERROR,this.sendPromise_=J(function(e,r){t.xhr_.addEventListener("abort",function(r){t.errorCode_=j.ABORT,e(t)}),t.xhr_.addEventListener("error",function(r){t.errorCode_=j.NETWORK_ERROR,e(t)}),t.xhr_.addEventListener("load",function(r){e(t)})})}return t.prototype.send=function(t,e,r,n){var o=this;if(this.sent_)throw C("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),$(n)){var i=n;K(i,function(t,e){o.xhr_.setRequestHeader(t,e.toString())})}return $(r)?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_},t.prototype.getErrorCode=function(){if(!this.sent_)throw C("cannot .getErrorCode() before sending");return this.errorCode_},t.prototype.getStatus=function(){if(!this.sent_)throw C("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}},t.prototype.getResponseText=function(){if(!this.sent_)throw C("cannot .getResponseText() before sending");return this.xhr_.responseText},t.prototype.abort=function(){this.xhr_.abort()},t.prototype.getResponseHeader=function(t){return this.xhr_.getResponseHeader(t)},t.prototype.addUploadProgressListener=function(t){$(this.xhr_.upload)&&this.xhr_.upload.addEventListener("progress",t)},t.prototype.removeUploadProgressListener=function(t){$(this.xhr_.upload)&&this.xhr_.upload.removeEventListener("progress",t)},t}(),lt=function(){function t(){}return t.prototype.createXhrIo=function(){return new ct},t}();
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
function ht(t){var e;try{e=JSON.parse(t)}catch(r){return null}return ot(e)?e:null}
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
 */var pt=function(){function t(t,e){this.bucket=t,this.path_=e}return Object.defineProperty(t.prototype,"path",{get:function(){return this.path_},enumerable:!0,configurable:!0}),t.prototype.fullServerUrl=function(){var t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)},t.prototype.bucketOnlyServerUrl=function(){var t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o"},t.makeFromBucketSpec=function(e){var r;try{r=t.makeFromUrl(e)}catch(n){return new t(e,"")}if(""===r.path)return r;throw R(e)},t.makeFromUrl=function(e){var r=null,n="([A-Za-z0-9.\\-_]+)";function o(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}var a="(/(.*))?$",u="(/([^?#]*).*)?$",s=new RegExp("^gs://"+n+a,"i"),c={bucket:1,path:3};function l(t){t.path_=decodeURIComponent(t.path)}for(var h="v[A-Za-z0-9_]+",p=i.replace(/[.]/g,"\\."),f=new RegExp("^https?://"+p+"/"+h+"/b/"+n+"/o"+u,"i"),d={bucket:1,path:3},_=[{regex:s,indices:c,postModify:o},{regex:f,indices:d,postModify:l}],v=0;v<_.length;v++){var b=_[v],m=b.regex.exec(e);if(m){var g=m[b.indices.bucket],R=m[b.indices.path];R||(R=""),r=new t(g,R),b.postModify(r);break}}if(null==r)throw y(e);return r},t}();
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
 */function ft(t){if(0==t.length)return null;var e=t.lastIndexOf("/");if(-1===e)return"";var r=t.slice(0,e);return r}function dt(t,e){var r=e.split("/").filter(function(t){return t.length>0}).join("/");return 0===t.length?r:t+"/"+r}function _t(t){var e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
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
 */function vt(t){return"https://"+i+"/v0"+t}function bt(t){var e=encodeURIComponent,r="?";return K(t,function(t,n){var o=e(t)+"="+e(n);r=r+o+"&"}),r=r.slice(0,-1),r}
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
 */function mt(t,e){return e}var gt=function(){function t(t,e,r,n){this.server=t,this.local=e||t,this.writable=!!r,this.xform=n||mt}return t}(),yt=null;function Rt(t){var e=it(t);return!e||t.length<2?t:(t=t,_t(t))}function Et(){if(yt)return yt;var t=[];function e(t,e){return Rt(e)}t.push(new gt("bucket")),t.push(new gt("generation")),t.push(new gt("metageneration")),t.push(new gt("name","fullPath",!0));var r=new gt("name");function n(t,e){return $(e)?+e:e}r.xform=e,t.push(r);var o=new gt("size");return o.xform=n,t.push(o),t.push(new gt("timeCreated")),t.push(new gt("updated")),t.push(new gt("md5Hash",null,!0)),t.push(new gt("cacheControl",null,!0)),t.push(new gt("contentDisposition",null,!0)),t.push(new gt("contentEncoding",null,!0)),t.push(new gt("contentLanguage",null,!0)),t.push(new gt("contentType",null,!0)),t.push(new gt("metadata","customMetadata",!0)),yt=t,yt}function wt(t,e){function r(){var r=t["bucket"],n=t["fullPath"],o=new pt(r,n);return e.makeStorageReference(o)}Object.defineProperty(t,"ref",{get:r})}function Tt(t,e,r){for(var n={type:"file"},o=r.length,i=0;i<o;i++){var a=r[i];n[a.local]=a.xform(n,e[a.server])}return wt(n,t),n}function Ut(t,e,r){var n=ht(e);if(null===n)return null;var o=n;return Tt(t,o,r)}function At(t,e){var r=ht(e);if(null===r)return null;if(!it(r["downloadTokens"]))return null;var n=r["downloadTokens"];if(0===n.length)return null;var o=encodeURIComponent,i=n.split(","),a=i.map(function(e){var r=t["bucket"],n=t["fullPath"],i="/b/"+o(r)+"/o/"+o(n),a=vt(i),u=bt({alt:"media",token:e});return a+u});return a[0]}function Nt(t,e){for(var r={},n=e.length,o=0;o<n;o++){var i=e[o];i.writable&&(r[i.server]=t[i.local])}return JSON.stringify(r)}function kt(t){var e=t&&rt(t);if(!e)throw"Expected Metadata object.";for(var r in t){var n=t[r];if("customMetadata"===r){if(!rt(n))throw"Expected object for 'customMetadata' mapping."}else if(nt(n))throw"Mapping for '"+r+"' cannot be an object."}}
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
 */function Ot(t,e,r){for(var n=e.length,o=e.length,i=0;i<e.length;i++)if(e[i].optional){n=i;break}var a=n<=r.length&&r.length<=o;if(!a)throw A(n,o,t,r.length);for(i=0;i<r.length;i++)try{e[i].validator(r[i])}catch(u){throw u instanceof Error?U(i,t,u.message):U(i,t,u)}}var Ct=function(){function t(t,e){var r=this;this.validator=function(e){r.optional&&!tt(e)||t(e)},this.optional=!!e}return t}();function St(t,e){return function(r){t(r),e(r)}}function It(t,e){function r(t){if(!it(t))throw"Expected string."}var n;return n=t?St(r,t):r,new Ct(n,e)}function Pt(){function t(t){var e=t instanceof Uint8Array||t instanceof ArrayBuffer||st()&&t instanceof Blob;if(!e)throw"Expected Blob or File."}return new Ct(t)}function xt(t){return new Ct(kt,t)}function Lt(){function t(t){var e=at(t)&&t>=0;if(!e)throw"Expected a number 0 or greater."}return new Ct(t)}function Dt(t,e){function r(e){var r=null===e||$(e)&&e instanceof Object;if(!r)throw"Expected an Object.";void 0!==t&&null!==t&&t(e)}return new Ct(r,e)}function Mt(t){function e(t){var e=null===t||et(t);if(!e)throw"Expected a Function."}return new Ct(e,t)}
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
 */function Wt(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function Bt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var r=Wt();if(void 0!==r){for(var n=new r,o=0;o<t.length;o++)n.append(t[o]);return n.getBlob()}if(st())return new Blob(t);throw Error("This browser doesn't seem to support creating Blobs")}function Gt(t,e,r){return t.webkitSlice?t.webkitSlice(e,r):t.mozSlice?t.mozSlice(e,r):t.slice?t.slice(e,r):null}
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
 */var qt=function(){function t(t,e){var r=0,n="";ut(t)?(this.data_=t,r=t.size,n=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),r=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),r=t.length),this.size_=r,this.type_=n}return t.prototype.size=function(){return this.size_},t.prototype.type=function(){return this.type_},t.prototype.slice=function(e,r){if(ut(this.data_)){var n=this.data_,o=Gt(n,e,r);return null===o?null:new t(o)}var i=new Uint8Array(this.data_.buffer,e,r-e);return new t(i,!0)},t.getBlob=function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];if(st()){var n=e.map(function(e){return e instanceof t?e.data_:e});return new t(Bt.apply(null,n))}var o=e.map(function(t){return it(t)?x(S.RAW,t).data:t.data_}),i=0;o.forEach(function(t){i+=t.byteLength});var a=new Uint8Array(i),u=0;return o.forEach(function(t){for(var e=0;e<t.length;e++)a[u++]=t[e]}),new t(a,!0)},t.prototype.uploadData=function(){return this.data_},t}();
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
 */function jt(t,e){return-1!==t.indexOf(e)}function Ft(t){return Array.prototype.slice.call(t)}function Ht(t,e){var r=t.indexOf(e);-1!==r&&t.splice(r,1)}var zt=function(){function t(t,e,r,n){this.url=t,this.method=e,this.handler=r,this.timeout=n,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}return t}();
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
 */function Xt(t){if(!t)throw f()}function Vt(t,e){function r(r,n){var o=Ut(t,n,e);return Xt(null!==o),o}return r}function Kt(t,e){function r(r,n){var o=Ut(t,n,e);return Xt(null!==o),At(o,n)}return r}function Zt(t){function e(e,r){var n;return n=401===e.getStatus()?v():402===e.getStatus()?_(t.bucket):403===e.getStatus()?b(t.path):r,n.setServerResponseProp(r.serverResponseProp()),n}return e}function Jt(t){var e=Zt(t);function r(r,n){var o=e(r,n);return 404===r.getStatus()&&(o=d(t.path)),o.setServerResponseProp(n.serverResponseProp()),o}return r}function Qt(t,e,r){var n=e.fullServerUrl(),o=vt(n),i="GET",a=t.maxOperationRetryTime(),u=new zt(o,i,Vt(t,r),a);return u.errorHandler=Jt(e),u}function Yt(t,e,r){var n=e.fullServerUrl(),o=vt(n),i="GET",a=t.maxOperationRetryTime(),u=new zt(o,i,Kt(t,r),a);return u.errorHandler=Jt(e),u}function $t(t,e,r,n){var o=e.fullServerUrl(),i=vt(o),a="PATCH",u=Nt(r,n),s={"Content-Type":"application/json; charset=utf-8"},c=t.maxOperationRetryTime(),l=new zt(i,a,Vt(t,n),c);return l.headers=s,l.body=u,l.errorHandler=Jt(e),l}function te(t,e){var r=e.fullServerUrl(),n=vt(r),o="DELETE",i=t.maxOperationRetryTime();function a(t,e){}var u=new zt(n,o,a,i);return u.successCodes=[200,204],u.errorHandler=Jt(e),u}function ee(t,e){return t&&t["contentType"]||e&&e.type()||"application/octet-stream"}function re(t,e,r){var n=Z(r);return n["fullPath"]=t.path,n["size"]=e.size(),n["contentType"]||(n["contentType"]=ee(null,e)),n}function ne(t,e,r,n,o){var i=e.bucketOnlyServerUrl(),a={"X-Goog-Upload-Protocol":"multipart"};function u(){for(var t="",e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}var s=u();a["Content-Type"]="multipart/related; boundary="+s;var c=re(e,n,o),l=Nt(c,r),h="--"+s+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+s+"\r\nContent-Type: "+c["contentType"]+"\r\n\r\n",p="\r\n--"+s+"--",f=qt.getBlob(h,n,p);if(null===f)throw E();var d={name:c["fullPath"]},_=vt(i),v="POST",b=t.maxUploadRetryTime(),m=new zt(_,v,Vt(t,r),b);return m.urlParams=d,m.headers=a,m.body=f.uploadData(),m.errorHandler=Zt(e),m}var oe=function(){function t(t,e,r,n){this.current=t,this.total=e,this.finalized=!!r,this.metadata=n||null}return t}();function ie(t,e){var r;try{r=t.getResponseHeader("X-Goog-Upload-Status")}catch(o){Xt(!1)}var n=e||["active"];return Xt(jt(n,r)),r}function ae(t,e,r,n,o){var i=e.bucketOnlyServerUrl(),a=re(e,n,o),u={name:a["fullPath"]},s=vt(i),c="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":n.size(),"X-Goog-Upload-Header-Content-Type":a["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Nt(a,r),p=t.maxUploadRetryTime();function f(t,e){var r;ie(t);try{r=t.getResponseHeader("X-Goog-Upload-URL")}catch(n){Xt(!1)}return Xt(it(r)),r}var d=new zt(s,c,f,p);return d.urlParams=u,d.headers=l,d.body=h,d.errorHandler=Zt(e),d}function ue(t,e,r,n){var o={"X-Goog-Upload-Command":"query"};function i(t,e){var r,o=ie(t,["active","final"]);try{r=t.getResponseHeader("X-Goog-Upload-Size-Received")}catch(a){Xt(!1)}var i=parseInt(r,10);return Xt(!isNaN(i)),new oe(i,n.size(),"final"===o)}var a="POST",u=t.maxUploadRetryTime(),s=new zt(r,a,i,u);return s.headers=o,s.errorHandler=Zt(e),s}var se=262144;function ce(t,e,r,n,o,i,a,u){var s=new oe(0,0);if(a?(s.current=a.current,s.total=a.total):(s.current=0,s.total=n.size()),n.size()!==s.total)throw w();var c=s.total-s.current,l=c;o>0&&(l=Math.min(l,o));var h=s.current,p=h+l,f=l===c?"upload, finalize":"upload",d={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":s.current},_=n.slice(h,p);if(null===_)throw E();function v(t,r){var o,a=ie(t,["active","final"]),u=s.current+l,c=n.size();return o="final"===a?Vt(e,i)(t,r):null,new oe(u,c,"final"===a,o)}var b="POST",m=e.maxUploadRetryTime(),g=new zt(r,b,v,m);return g.headers=d,g.body=_.uploadData(),g.progressCallback=u||null,g.errorHandler=Zt(t),g}
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
 */var le=function(){function t(t,e,r){var n=et(t)||$(e)||$(r);if(n)this.next=t,this.error=e||null,this.complete=r||null;else{var o=t;this.next=o.next||null,this.error=o.error||null,this.complete=o.complete||null}}return t}(),he=function(){function t(t,e,r,n,o,i){this.bytesTransferred=t,this.totalBytes=e,this.state=r,this.metadata=n,this.task=o,this.ref=i}return t}();
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
function pe(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];Q(!0).then(function(){t.apply(null,e)})}}
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
 */var fe=function(){function t(t,e,r,n,o,i){var a=this;void 0===i&&(i=null),this.transferred_=0,this.needToFetchStatus_=!1,this.needToFetchMetadata_=!1,this.observers_=[],this.error_=null,this.uploadUrl_=null,this.request_=null,this.chunkMultiplier_=1,this.resolve_=null,this.reject_=null,this.ref_=t,this.authWrapper_=e,this.location_=r,this.blob_=o,this.metadata_=i,this.mappings_=n,this.resumable_=this.shouldDoResumable_(this.blob_),this.state_=H.RUNNING,this.errorHandler_=function(t){a.request_=null,a.chunkMultiplier_=1,t.codeEquals(h.CANCELED)?(a.needToFetchStatus_=!0,a.completeTransitions_()):(a.error_=t,a.transition_(H.ERROR))},this.metadataErrorHandler_=function(t){a.request_=null,t.codeEquals(h.CANCELED)?a.completeTransitions_():(a.error_=t,a.transition_(H.ERROR))},this.promise_=J(function(t,e){a.resolve_=t,a.reject_=e,a.start_()}),this.promise_.then(null,function(){})}return t.prototype.makeProgressCallback_=function(){var t=this,e=this.transferred_;return function(r,n){t.updateProgress_(e+r)}},t.prototype.shouldDoResumable_=function(t){return t.size()>262144},t.prototype.start_=function(){this.state_===H.RUNNING&&null===this.request_&&(this.resumable_?null===this.uploadUrl_?this.createResumable_():this.needToFetchStatus_?this.fetchStatus_():this.needToFetchMetadata_?this.fetchMetadata_():this.continueUpload_():this.oneShotUpload_())},t.prototype.resolveToken_=function(t){var e=this;this.authWrapper_.getAuthToken().then(function(r){switch(e.state_){case H.RUNNING:t(r);break;case H.CANCELING:e.transition_(H.CANCELED);break;case H.PAUSING:e.transition_(H.PAUSED);break;default:}})},t.prototype.createResumable_=function(){var t=this;this.resolveToken_(function(e){var r=ae(t.authWrapper_,t.location_,t.mappings_,t.blob_,t.metadata_),n=t.authWrapper_.makeRequest(r,e);t.request_=n,n.getPromise().then(function(e){t.request_=null,t.uploadUrl_=e,t.needToFetchStatus_=!1,t.completeTransitions_()},t.errorHandler_)})},t.prototype.fetchStatus_=function(){var t=this,e=this.uploadUrl_;this.resolveToken_(function(r){var n=ue(t.authWrapper_,t.location_,e,t.blob_),o=t.authWrapper_.makeRequest(n,r);t.request_=o,o.getPromise().then(function(e){e=e,t.request_=null,t.updateProgress_(e.current),t.needToFetchStatus_=!1,e.finalized&&(t.needToFetchMetadata_=!0),t.completeTransitions_()},t.errorHandler_)})},t.prototype.continueUpload_=function(){var t=this,e=se*this.chunkMultiplier_,r=new oe(this.transferred_,this.blob_.size()),n=this.uploadUrl_;this.resolveToken_(function(o){var i;try{i=ce(t.location_,t.authWrapper_,n,t.blob_,e,t.mappings_,r,t.makeProgressCallback_())}catch(u){return t.error_=u,void t.transition_(H.ERROR)}var a=t.authWrapper_.makeRequest(i,o);t.request_=a,a.getPromise().then(function(e){t.increaseMultiplier_(),t.request_=null,t.updateProgress_(e.current),e.finalized?(t.metadata_=e.metadata,t.transition_(H.SUCCESS)):t.completeTransitions_()},t.errorHandler_)})},t.prototype.increaseMultiplier_=function(){var t=se*this.chunkMultiplier_;t<33554432&&(this.chunkMultiplier_*=2)},t.prototype.fetchMetadata_=function(){var t=this;this.resolveToken_(function(e){var r=Qt(t.authWrapper_,t.location_,t.mappings_),n=t.authWrapper_.makeRequest(r,e);t.request_=n,n.getPromise().then(function(e){t.request_=null,t.metadata_=e,t.transition_(H.SUCCESS)},t.metadataErrorHandler_)})},t.prototype.oneShotUpload_=function(){var t=this;this.resolveToken_(function(e){var r=ne(t.authWrapper_,t.location_,t.mappings_,t.blob_,t.metadata_),n=t.authWrapper_.makeRequest(r,e);t.request_=n,n.getPromise().then(function(e){t.request_=null,t.metadata_=e,t.updateProgress_(t.blob_.size()),t.transition_(H.SUCCESS)},t.errorHandler_)})},t.prototype.updateProgress_=function(t){var e=this.transferred_;this.transferred_=t,this.transferred_!==e&&this.notifyObservers_()},t.prototype.transition_=function(t){if(this.state_!==t)switch(t){case H.CANCELING:this.state_=t,null!==this.request_&&this.request_.cancel();break;case H.PAUSING:this.state_=t,null!==this.request_&&this.request_.cancel();break;case H.RUNNING:var e=this.state_===H.PAUSED;this.state_=t,e&&(this.notifyObservers_(),this.start_());break;case H.PAUSED:this.state_=t,this.notifyObservers_();break;case H.CANCELED:this.error_=g(),this.state_=t,this.notifyObservers_();break;case H.ERROR:this.state_=t,this.notifyObservers_();break;case H.SUCCESS:this.state_=t,this.notifyObservers_();break}},t.prototype.completeTransitions_=function(){switch(this.state_){case H.PAUSING:this.transition_(H.PAUSED);break;case H.CANCELING:this.transition_(H.CANCELED);break;case H.RUNNING:this.start_();break;default:break}},Object.defineProperty(t.prototype,"snapshot",{get:function(){var t=X(this.state_);return new he(this.transferred_,this.blob_.size(),t,this.metadata_,this,this.ref_)},enumerable:!0,configurable:!0}),t.prototype.on=function(t,e,r,n){function o(e){if(t!==F.STATE_CHANGED)throw"Expected one of the event types: ["+F.STATE_CHANGED+"]."}void 0===e&&(e=void 0),void 0===r&&(r=void 0),void 0===n&&(n=void 0);var i="Expected a function or an Object with one of `next`, `error`, `complete` properties.",a=Mt(!0).validator,u=Dt(null,!0).validator;function s(t){try{return void a(t)}catch(r){}try{u(t);var e=tt(t["next"])||tt(t["error"])||tt(t["complete"]);if(!e)throw"";return}catch(r){throw i}}var c=[It(o),Dt(s,!0),Mt(!0),Mt(!0)];Ot("on",c,arguments);var l=this;function h(t){function e(e,r,o){null!==t&&Ot("on",t,arguments);var i=new le(e,r,n);return l.addObserver_(i),function(){l.removeObserver_(i)}}return e}function p(t){if(null===t)throw i;s(t)}var f=[Dt(p),Mt(!0),Mt(!0)],d=!(tt(e)||tt(r)||tt(n));return d?h(f):h(null)(e,r,n)},t.prototype.then=function(t,e){return this.promise_.then(t,e)},t.prototype.catch=function(t){return this.then(null,t)},t.prototype.addObserver_=function(t){this.observers_.push(t),this.notifyObserver_(t)},t.prototype.removeObserver_=function(t){Ht(this.observers_,t)},t.prototype.notifyObservers_=function(){var t=this;this.finishPromise_();var e=Ft(this.observers_);e.forEach(function(e){t.notifyObserver_(e)})},t.prototype.finishPromise_=function(){if(null!==this.resolve_){var t=!0;switch(X(this.state_)){case z.SUCCESS:pe(this.resolve_.bind(null,this.snapshot))();break;case z.CANCELED:case z.ERROR:var e=this.reject_;pe(e.bind(null,this.error_))();break;default:t=!1;break}t&&(this.resolve_=null,this.reject_=null)}},t.prototype.notifyObserver_=function(t){var e=X(this.state_);switch(e){case z.RUNNING:case z.PAUSED:null!==t.next&&pe(t.next.bind(t,this.snapshot))();break;case z.SUCCESS:null!==t.complete&&pe(t.complete.bind(t))();break;case z.CANCELED:case z.ERROR:null!==t.error&&pe(t.error.bind(t,this.error_))();break;default:null!==t.error&&pe(t.error.bind(t,this.error_))()}},t.prototype.resume=function(){Ot("resume",[],arguments);var t=this.state_===H.PAUSED||this.state_===H.PAUSING;return t&&this.transition_(H.RUNNING),t},t.prototype.pause=function(){Ot("pause",[],arguments);var t=this.state_===H.RUNNING;return t&&this.transition_(H.PAUSING),t},t.prototype.cancel=function(){Ot("cancel",[],arguments);var t=this.state_===H.RUNNING||this.state_===H.PAUSING;return t&&this.transition_(H.CANCELING),t},t}(),de=function(){function t(t,e){this.authWrapper=t,this.location=e instanceof pt?e:pt.makeFromUrl(e)}return t.prototype.toString=function(){return Ot("toString",[],arguments),"gs://"+this.location.bucket+"/"+this.location.path},t.prototype.newRef=function(e,r){return new t(e,r)},t.prototype.mappings=function(){return Et()},t.prototype.child=function(t){Ot("child",[It()],arguments);var e=dt(this.location.path,t),r=new pt(this.location.bucket,e);return this.newRef(this.authWrapper,r)},Object.defineProperty(t.prototype,"parent",{get:function(){var t=ft(this.location.path);if(null===t)return null;var e=new pt(this.location.bucket,t);return this.newRef(this.authWrapper,e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"root",{get:function(){var t=new pt(this.location.bucket,"");return this.newRef(this.authWrapper,t)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"bucket",{get:function(){return this.location.bucket},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"fullPath",{get:function(){return this.location.path},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"name",{get:function(){return _t(this.location.path)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"storage",{get:function(){return this.authWrapper.service()},enumerable:!0,configurable:!0}),t.prototype.put=function(t,e){return void 0===e&&(e=null),Ot("put",[Pt(),xt(!0)],arguments),this.throwIfRoot_("put"),new fe(this,this.authWrapper,this.location,this.mappings(),new qt(t),e)},t.prototype.putString=function(t,e,r){void 0===e&&(e=S.RAW),Ot("putString",[It(),It(I,!0),xt(!0)],arguments),this.throwIfRoot_("putString");var n=x(e,t),o=Z(r);return!$(o["contentType"])&&$(n.contentType)&&(o["contentType"]=n.contentType),new fe(this,this.authWrapper,this.location,this.mappings(),new qt(n.data,!0),o)},t.prototype.delete=function(){Ot("delete",[],arguments),this.throwIfRoot_("delete");var t=this;return this.authWrapper.getAuthToken().then(function(e){var r=te(t.authWrapper,t.location);return t.authWrapper.makeRequest(r,e).getPromise()})},t.prototype.getMetadata=function(){Ot("getMetadata",[],arguments),this.throwIfRoot_("getMetadata");var t=this;return this.authWrapper.getAuthToken().then(function(e){var r=Qt(t.authWrapper,t.location,t.mappings());return t.authWrapper.makeRequest(r,e).getPromise()})},t.prototype.updateMetadata=function(t){Ot("updateMetadata",[xt()],arguments),this.throwIfRoot_("updateMetadata");var e=this;return this.authWrapper.getAuthToken().then(function(r){var n=$t(e.authWrapper,e.location,t,e.mappings());return e.authWrapper.makeRequest(n,r).getPromise()})},t.prototype.getDownloadURL=function(){Ot("getDownloadURL",[],arguments),this.throwIfRoot_("getDownloadURL");var t=this;return this.authWrapper.getAuthToken().then(function(e){var r=Yt(t.authWrapper,t.location,t.mappings());return t.authWrapper.makeRequest(r,e).getPromise().then(function(t){if(null===t)throw T();return t})})},t.prototype.throwIfRoot_=function(t){if(""===this.location.path)throw k(t)},t}(),_e=function(){function t(t){this.promise_=Y(t)}return t.prototype.getPromise=function(){return this.promise_},t.prototype.cancel=function(t){void 0===t&&(t=!1)},t}(),ve=function(){function t(){this.map_={},this.id_=c}return t.prototype.addRequest=function(t){var e=this.id_;this.id_++,this.map_[e]=t;var r=this;function n(){delete r.map_[e]}t.getPromise().then(n,n)},t.prototype.clear=function(){K(this.map_,function(t,e){e&&e.cancel(!0)}),this.map_={}},t}(),be=function(){function t(e,r,n,o,i){if(this.bucket_=null,this.deleted_=!1,this.app_=e,null!==this.app_){var a=this.app_.options;$(a)&&(this.bucket_=t.extractBucket_(a))}this.storageRefMaker_=r,this.requestMaker_=n,this.pool_=i,this.service_=o,this.maxOperationRetryTime_=u,this.maxUploadRetryTime_=s,this.requestMap_=new ve}return t.extractBucket_=function(t){var e=t[a]||null;if(null==e)return null;var r=pt.makeFromBucketSpec(e);return r.bucket},t.prototype.getAuthToken=function(){return null!==this.app_&&$(this.app_.INTERNAL)&&$(this.app_.INTERNAL.getToken)?this.app_.INTERNAL.getToken().then(function(t){return null!==t?t.accessToken:null},function(t){return null}):Q(null)},t.prototype.bucket=function(){if(this.deleted_)throw N();return this.bucket_},t.prototype.service=function(){return this.service_},t.prototype.makeStorageReference=function(t){return this.storageRefMaker_(this,t)},t.prototype.makeRequest=function(t,e){if(this.deleted_)return new _e(N());var r=this.requestMaker_(t,e,this.pool_);return this.requestMap_.addRequest(r),r},t.prototype.deleteApp=function(){this.deleted_=!0,this.app_=null,this.requestMap_.clear()},t.prototype.maxUploadRetryTime=function(){return this.maxUploadRetryTime_},t.prototype.setMaxUploadRetryTime=function(t){this.maxUploadRetryTime_=t},t.prototype.maxOperationRetryTime=function(){return this.maxOperationRetryTime_},t.prototype.setMaxOperationRetryTime=function(t){this.maxOperationRetryTime_=t},t}();
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
function me(t,e,r){var n=1,o=null,i=!1,a=0;function u(){return 2===a}var s=!1;function c(){s||(s=!0,e.apply(null,arguments))}function l(e){o=setTimeout(function(){o=null,t(h,u())},e)}function h(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];if(!s)if(t)c.apply(null,arguments);else{var o,h=u()||i;if(h)c.apply(null,arguments);else n<64&&(n*=2),1===a?(a=2,o=0):o=1e3*(n+Math.random()),l(o)}}var p=!1;function f(t){p||(p=!0,s||(null!==o?(t||(a=2),clearTimeout(o),l(0)):t||(a=1)))}return l(0),setTimeout(function(){i=!0,f(!0)},r),f}function ge(t){t(!1)}
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
 */var ye=function(){function t(t,e,r,n,o,i,a,u,s,c,l){this.pendingXhr_=null,this.backoffId_=null,this.resolve_=null,this.reject_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=t,this.method_=e,this.headers_=r,this.body_=n,this.successCodes_=o.slice(),this.additionalRetryCodes_=i.slice(),this.callback_=a,this.errorCallback_=u,this.progressCallback_=c,this.timeout_=s,this.pool_=l;var h=this;this.promise_=J(function(t,e){h.resolve_=t,h.reject_=e,h.start_()})}return t.prototype.start_=function(){var t=this;function e(e,r){if(r)e(!1,new Re(!1,null,!0));else{var n=t.pool_.createXhrIo();t.pendingXhr_=n,null!==t.progressCallback_&&n.addUploadProgressListener(o),n.send(t.url_,t.method_,t.body_,t.headers_).then(function(r){null!==t.progressCallback_&&r.removeUploadProgressListener(o),t.pendingXhr_=null,r=r;var n=r.getErrorCode()===j.NO_ERROR,i=r.getStatus();if(n&&!t.isRetryStatusCode_(i)){var a=jt(t.successCodes_,i);e(!0,new Re(a,r))}else{var u=r.getErrorCode()===j.ABORT;e(!1,new Re(!1,null,u))}})}function o(e){var r=e.loaded,n=e.lengthComputable?e.total:-1;null!==t.progressCallback_&&t.progressCallback_(r,n)}}function r(e,r){var n=t.resolve_,o=t.reject_,i=r.xhr;if(r.wasSuccessCode)try{var a=t.callback_(i,i.getResponseText());tt(a)?n(a):n()}catch(s){o(s)}else if(null!==i){var u=f();u.setServerResponseProp(i.getResponseText()),t.errorCallback_?o(t.errorCallback_(i,u)):o(u)}else if(r.canceled){u=t.appDelete_?N():g();o(u)}else{u=m();o(u)}}this.canceled_?r(!1,new Re(!1,null,!0)):this.backoffId_=me(e,r,this.timeout_)},t.prototype.getPromise=function(){return this.promise_},t.prototype.cancel=function(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&ge(this.backoffId_),null!==this.pendingXhr_&&this.pendingXhr_.abort()},t.prototype.isRetryStatusCode_=function(t){var e=t>=500&&t<600,r=[408,429],n=jt(r,t),o=jt(this.additionalRetryCodes_,t);return e||n||o},t}(),Re=function(){function t(t,e,r){this.wasSuccessCode=t,this.xhr=e,this.canceled=!!r}return t}();function Ee(t,e){null!==e&&e.length>0&&(t["Authorization"]="Firebase "+e)}function we(t){var e="undefined"!==typeof o.a?o.a.SDK_VERSION:"AppManager";t["X-Firebase-Storage-Version"]="webjs/"+e}function Te(t,e,r){var n=bt(t.urlParams),o=t.url+n,i=Z(t.headers);return Ee(i,e),we(i),new ye(o,t.method,i,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r)}
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
 */var Ue=function(){function t(t,e,r){function n(t,e){return new de(t,e)}if(this.bucket_=null,this.authWrapper_=new be(t,n,Te,this,e),this.app_=t,null!=r)this.bucket_=pt.makeFromBucketSpec(r);else{var o=this.authWrapper_.bucket();null!=o&&(this.bucket_=new pt(o,""))}this.internals_=new Ae(this)}return t.prototype.ref=function(t){function e(t){if(/^[A-Za-z]+:\/\//.test(t))throw"Expected child path but got a URL, use refFromURL instead."}if(Ot("ref",[It(e,!0)],arguments),null==this.bucket_)throw new Error("No Storage Bucket defined in Firebase Options.");var r=new de(this.authWrapper_,this.bucket_);return null!=t?r.child(t):r},t.prototype.refFromURL=function(t){function e(t){if(!/^[A-Za-z]+:\/\//.test(t))throw"Expected full URL but got a child path, use ref instead.";try{pt.makeFromUrl(t)}catch(e){throw"Expected valid full URL but got an invalid one."}}return Ot("refFromURL",[It(e,!1)],arguments),new de(this.authWrapper_,t)},Object.defineProperty(t.prototype,"maxUploadRetryTime",{get:function(){return this.authWrapper_.maxUploadRetryTime()},enumerable:!0,configurable:!0}),t.prototype.setMaxUploadRetryTime=function(t){Ot("setMaxUploadRetryTime",[Lt()],arguments),this.authWrapper_.setMaxUploadRetryTime(t)},t.prototype.setMaxOperationRetryTime=function(t){Ot("setMaxOperationRetryTime",[Lt()],arguments),this.authWrapper_.setMaxOperationRetryTime(t)},Object.defineProperty(t.prototype,"app",{get:function(){return this.app_},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"INTERNAL",{get:function(){return this.internals_},enumerable:!0,configurable:!0}),t}(),Ae=function(){function t(t){this.service_=t}return t.prototype.delete=function(){return this.service_.authWrapper_.deleteApp(),Q(void 0)},t}(),Ne="storage";function ke(t,e,r){return new Ue(t,new lt,r)}function Oe(t){var e={TaskState:z,TaskEvent:F,StringFormat:S,Storage:Ue,Reference:de};t.INTERNAL.registerService(Ne,ke,e,void 0,!0)}Oe(o.a)}}]);