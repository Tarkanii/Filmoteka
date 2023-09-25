function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},s=t.parcelRequired7c6;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){r[e]=t},t.parcelRequired7c6=s),s.register("9d9Fx",function(e,t){var n=s("i4ijA"),r=s("lwbau"),i=s("eCrWh"),a=s("kSe7Y"),o=/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */function e(t){var s=new i(t),o=r(i.prototype.request,s);return(// Copy axios.prototype to instance
n.extend(o,i.prototype,s),// Copy context to instance
n.extend(o,s),// Factory for creating new instances
o.create=function(n){return e(a(t,n))},o)}(s("2Y4F5"));// Expose Axios class to allow class inheritance
o.Axios=i,// Expose Cancel & CancelToken
o.Cancel=s("kKSgw"),o.CancelToken=s("9GGcx"),o.isCancel=s("5SIUr"),o.VERSION=s("8WPkr").version,// Expose all/spread
o.all=function(e){return Promise.all(e)},o.spread=s("4rx4g"),// Expose isAxiosError
o.isAxiosError=s("4Qexm"),e.exports=o,// Allow use of default import syntax in TypeScript
e.exports.default=o}),s.register("i4ijA",function(e,t){var n=s("lwbau"),r=Object.prototype.toString;/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */function i(e){return"[object Array]"===r.call(e)}/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */function a(e){return void 0===e}/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */function o(e){return null!==e&&"object"==typeof e}/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */function l(e){if("[object Object]"!==r.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */function c(e){return"[object Function]"===r.call(e)}/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */function u(e,t){// Don't bother if no value provided
if(null!=e){if("object"!=typeof e&&/*eslint no-param-reassign:0*/(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else // Iterate over object keys
for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.call(null,e[s],s,e)}}e.exports={isArray:i,isArrayBuffer:/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */function(e){return"[object ArrayBuffer]"===r.call(e)},isBuffer:/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */function(e){return null!==e&&!a(e)&&null!==e.constructor&&!a(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */function(e){return"string"==typeof e},isNumber:/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */function(e){return"number"==typeof e},isObject:o,isPlainObject:l,isUndefined:a,isDate:/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */function(e){return"[object Date]"===r.call(e)},isFile:/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */function(e){return"[object File]"===r.call(e)},isBlob:/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */function(e){return"[object Blob]"===r.call(e)},isFunction:c,isStream:/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */function(e){return o(e)&&c(e.pipe)},isURLSearchParams:/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:u,merge:/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */function e(){var t={};function n(n,r){l(t[r])&&l(n)?t[r]=e(t[r],n):l(n)?t[r]=e({},n):i(n)?t[r]=n.slice():t[r]=n}for(var r=0,s=arguments.length;r<s;r++)u(arguments[r],n);return t},extend:/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */function(e,t,r){return u(t,function(t,s){r&&"function"==typeof t?e[s]=n(t,r):e[s]=t}),e},trim:/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}}),s.register("lwbau",function(e,t){e.exports=function(e,t){return function(){for(var n=Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}}),s.register("eCrWh",function(e,t){var n=s("i4ijA"),r=s("h9Lf1"),i=s("itbxz"),a=s("2u9Ce"),o=s("kSe7Y"),l=s("hd4Q7"),c=l.validators;/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */function u(e){this.defaults=e,this.interceptors={request:new i,response:new i}}/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */u.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{},e.url=arguments[0]):e=e||{},(e=o(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t,n=e.transitional;void 0!==n&&l.assertOptions(n,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);// filter out skipped interceptors
var r=[],s=!0;this.interceptors.request.forEach(function(t){("function"!=typeof t.runWhen||!1!==t.runWhen(e))&&(s=s&&t.synchronous,r.unshift(t.fulfilled,t.rejected))});var i=[];if(this.interceptors.response.forEach(function(e){i.push(e.fulfilled,e.rejected)}),!s){var u=[a,void 0];for(Array.prototype.unshift.apply(u,r),u=u.concat(i),t=Promise.resolve(e);u.length;)t=t.then(u.shift(),u.shift());return t}for(var d=e;r.length;){var f=r.shift(),p=r.shift();try{d=f(d)}catch(e){p(e);break}}try{t=a(d)}catch(e){return Promise.reject(e)}for(;i.length;)t=t.then(i.shift(),i.shift());return t},u.prototype.getUri=function(e){return r((e=o(this.defaults,e)).url,e.params,e.paramsSerializer).replace(/^\?/,"")},// Provide aliases for supported request methods
n.forEach(["delete","get","head","options"],function(e){/*eslint func-names:0*/u.prototype[e]=function(t,n){return this.request(o(n||{},{method:e,url:t,data:(n||{}).data}))}}),n.forEach(["post","put","patch"],function(e){/*eslint func-names:0*/u.prototype[e]=function(t,n,r){return this.request(o(r||{},{method:e,url:t,data:n}))}}),e.exports=u}),s.register("h9Lf1",function(e,t){var n=s("i4ijA");function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */e.exports=function(e,t,s){/*eslint no-param-reassign:0*/if(!t)return e;if(s)i=s(t);else if(n.isURLSearchParams(t))i=t.toString();else{var i,a=[];n.forEach(t,function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),a.push(r(t)+"="+r(e))}))}),i=a.join("&")}if(i){var o=e.indexOf("#");-1!==o&&(e=e.slice(0,o)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}}),s.register("itbxz",function(e,t){var n=s("i4ijA");function r(){this.handlers=[]}/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */r.prototype.forEach=function(e){n.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=r}),s.register("2u9Ce",function(e,t){var n=s("i4ijA"),r=s("iQhXV"),i=s("5SIUr"),a=s("2Y4F5"),o=s("kKSgw");/**
 * Throws a `Cancel` if cancellation has been requested.
 */function l(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new o("canceled")}/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */e.exports=function(e){return l(e),// Ensure headers exist
e.headers=e.headers||{},// Transform request data
e.data=r.call(e,e.data,e.headers,e.transformRequest),// Flatten headers
e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||a.adapter)(e).then(function(t){return l(e),// Transform response data
t.data=r.call(e,t.data,t.headers,e.transformResponse),t},function(t){return!i(t)&&(l(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}}),s.register("iQhXV",function(e,t){var n=s("i4ijA"),r=s("2Y4F5");/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */e.exports=function(e,t,s){var i=this||r;return /*eslint no-param-reassign:0*/n.forEach(s,function(n){e=n.call(i,e,t)}),e}}),s.register("2Y4F5",function(e,t){var n,r=s("2C7N7"),i=s("i4ijA"),a=s("fwPMl"),o=s("FzJVl"),l={"Content-Type":"application/x-www-form-urlencoded"};function c(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:("undefined"!=typeof XMLHttpRequest?n=s("2kdvM"):void 0!==r&&"[object process]"===Object.prototype.toString.call(r)&&(n=s("2kdvM")),n),transformRequest:[function(e,t){return(a(t,"Accept"),a(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e))?e:i.isArrayBufferView(e)?e.buffer:i.isURLSearchParams(e)?(c(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):i.isObject(e)||t&&"application/json"===t["Content-Type"]?(c(t,"application/json"),function(e,t,n){if(i.isString(e))try{return(0,JSON.parse)(e),i.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||u.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||r&&i.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw o(e,this,"E_JSON_PARSE");throw e}}return e}],/**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],function(e){u.headers[e]={}}),i.forEach(["post","put","patch"],function(e){u.headers[e]=i.merge(l)}),e.exports=u}),s.register("2C7N7",function(e,t){// shim for using process in browser
var n,r,s,i=e.exports={};function a(){throw Error("setTimeout has not been defined")}function o(){throw Error("clearTimeout has not been defined")}function l(e){if(n===setTimeout)return setTimeout(e,0);// if setTimeout wasn't available but was latter defined
if((n===a||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{// when when somebody has screwed with setTimeout but no I.E. maddness
return n(e,0)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
return n.call(null,e,0)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:a}catch(e){n=a}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var c=[],u=!1,d=-1;function f(){u&&s&&(u=!1,s.length?c=s.concat(c):d=-1,c.length&&p())}function p(){if(!u){var e=l(f);u=!0;for(var t=c.length;t;){for(s=c,c=[];++d<t;)s&&s[d].run();d=-1,t=c.length}s=null,u=!1,function(e){if(r===clearTimeout)return clearTimeout(e);// if clearTimeout wasn't available but was latter defined
if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{// when when somebody has screwed with setTimeout but no I.E. maddness
r(e)}catch(t){try{// When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
return r.call(null,e)}catch(t){// same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
// Some versions of I.E. have different rules for clearTimeout vs setTimeout
return r.call(this,e)}}}(e)}}// v8 likes predictible objects
function h(e,t){this.fun=e,this.array=t}function g(){}i.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||u||l(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(e){return[]},i.binding=function(e){throw Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw Error("process.chdir is not supported")},i.umask=function(){return 0}}),s.register("fwPMl",function(e,t){var n=s("i4ijA");e.exports=function(e,t){n.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}}),s.register("FzJVl",function(e,t){/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */e.exports=function(e,t,n,r,s){return e.config=t,n&&(e.code=n),e.request=r,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{// Standard
message:this.message,name:this.name,// Microsoft
description:this.description,number:this.number,// Mozilla
fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,// Axios
config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}}),s.register("2kdvM",function(e,t){var n=s("i4ijA"),r=s("4Bh8W"),i=s("j9ifV"),a=s("h9Lf1"),o=s("kHvG3"),l=s("gwcWo"),c=s("kgVUb"),u=s("6EBa4"),d=s("2Y4F5"),f=s("kKSgw");e.exports=function(e){return new Promise(function(t,s){var p,h=e.data,g=e.headers,m=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(h)&&delete g["Content-Type"];var v=new XMLHttpRequest;// HTTP basic authentication
if(e.auth){var b=e.auth.username||"",L=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";g.Authorization="Basic "+btoa(b+":"+L)}var w=o(e.baseURL,e.url);function S(){if(v){// Prepare the response
var n="getAllResponseHeaders"in v?l(v.getAllResponseHeaders()):null;r(function(e){t(e),y()},function(e){s(e),y()},{data:m&&"text"!==m&&"json"!==m?v.response:v.responseText,status:v.status,statusText:v.statusText,headers:n,config:e,request:v}),// Clean up request
v=null}}// Add xsrf header
// This is only done if running in a standard browser environment.
// Specifically not if we're in a web worker, or react-native.
if(v.open(e.method.toUpperCase(),a(w,e.params,e.paramsSerializer),!0),// Set the request timeout in MS
v.timeout=e.timeout,"onloadend"in v?v.onloadend=S:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&// readystate handler is calling before onerror or ontimeout handlers,
// so we should call onloadend on the next 'tick'
setTimeout(S)},// Handle browser request cancellation (as opposed to a manual cancellation)
v.onabort=function(){v&&(s(u("Request aborted",e,"ECONNABORTED",v)),// Clean up request
v=null)},// Handle low level network errors
v.onerror=function(){// Real errors are hidden from us by the browser
// onerror should only fire if it's a network error
s(u("Network Error",e,null,v)),// Clean up request
v=null},// Handle timeout
v.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||d.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),s(u(t,e,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",v)),// Clean up request
v=null},n.isStandardBrowserEnv()){// Add xsrf header
var x=(e.withCredentials||c(w))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;x&&(g[e.xsrfHeaderName]=x)}"setRequestHeader"in v&&n.forEach(g,function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete g[t]:v.setRequestHeader(t,e)}),n.isUndefined(e.withCredentials)||(v.withCredentials=!!e.withCredentials),m&&"json"!==m&&(v.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&v.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(// Handle cancellation
// eslint-disable-next-line func-names
p=function(e){v&&(s(!e||e&&e.type?new f("canceled"):e),v.abort(),v=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),h||(h=null),// Send the request
v.send(h)})}}),s.register("4Bh8W",function(e,t){var n=s("6EBa4");/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */e.exports=function(e,t,r){var s=r.config.validateStatus;!r.status||!s||s(r.status)?e(r):t(n("Request failed with status code "+r.status,r.config,null,r.request,r))}}),s.register("6EBa4",function(e,t){var n=s("FzJVl");/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */e.exports=function(e,t,r,s,i){return n(Error(e),t,r,s,i)}}),s.register("j9ifV",function(e,t){var n=s("i4ijA");e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,s,i,a){var o=[];o.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&o.push("expires="+new Date(r).toGMTString()),n.isString(s)&&o.push("path="+s),n.isString(i)&&o.push("domain="+i),!0===a&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var t=document.cookie.match(RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}}),s.register("kHvG3",function(e,t){var n=s("2IQpt"),r=s("bb7xE");/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */e.exports=function(e,t){return e&&!n(t)?r(e,t):t}}),s.register("2IQpt",function(e,t){/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */e.exports=function(e){// A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
// RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
// by any combination of letters, digits, plus, period, or hyphen.
return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}}),s.register("bb7xE",function(e,t){/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}}),s.register("gwcWo",function(e,t){var n=s("i4ijA"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */e.exports=function(e){var t,s,i,a={};return e&&n.forEach(e.split("\n"),function(e){i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),s=n.trim(e.substr(i+1)),t&&!(a[t]&&r.indexOf(t)>=0)&&("set-cookie"===t?a[t]=(a[t]?a[t]:[]).concat([s]):a[t]=a[t]?a[t]+", "+s:s)}),a}}),s.register("kgVUb",function(e,t){var n=s("i4ijA");e.exports=n.isStandardBrowserEnv()?// whether the request URL is of the same origin as current location.
function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");/**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */function s(e){var n=e;// urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
return t&&(// IE needs attribute set twice to normalize properties
r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}/**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */return e=s(window.location.href),function(t){var r=n.isString(t)?s(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}}),s.register("kKSgw",function(e,t){/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */function n(e){this.message=e}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,e.exports=n}),s.register("5SIUr",function(e,t){e.exports=function(e){return!!(e&&e.__CANCEL__)}}),s.register("kSe7Y",function(e,t){var n=s("i4ijA");/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */e.exports=function(e,t){// eslint-disable-next-line no-param-reassign
t=t||{};var r={};function s(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}// eslint-disable-next-line consistent-return
function i(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:s(void 0,e[r]):s(e[r],t[r])}// eslint-disable-next-line consistent-return
function a(e){if(!n.isUndefined(t[e]))return s(void 0,t[e])}// eslint-disable-next-line consistent-return
function o(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:s(void 0,e[r]):s(void 0,t[r])}// eslint-disable-next-line consistent-return
function l(n){return n in t?s(e[n],t[n]):n in e?s(void 0,e[n]):void 0}var c={url:a,method:a,data:a,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l};return n.forEach(Object.keys(e).concat(Object.keys(t)),function(e){var t=c[e]||i,s=t(e);n.isUndefined(s)&&t!==l||(r[e]=s)}),r}}),s.register("hd4Q7",function(e,t){var n=s("8WPkr").version,r={};// eslint-disable-next-line func-names
["object","boolean","number","function","string","symbol"].forEach(function(e,t){r[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});var i={};/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */r.transitional=function(e,t,r){function s(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}// eslint-disable-next-line func-names
return function(n,r,a){if(!1===e)throw Error(s(r," has been removed"+(t?" in "+t:"")));return t&&!i[r]&&(i[r]=!0,// eslint-disable-next-line no-console
console.warn(s(r," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,r,a)}},e.exports={assertOptions:/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */function(e,t,n){if("object"!=typeof e)throw TypeError("options must be an object");for(var r=Object.keys(e),s=r.length;s-- >0;){var i=r[s],a=t[i];if(a){var o=e[i],l=void 0===o||a(o,i,e);if(!0!==l)throw TypeError("option "+i+" must be "+l);continue}if(!0!==n)throw Error("Unknown option "+i)}},validators:r}}),s.register("8WPkr",function(e,t){e.exports={version:"0.24.0"}}),s.register("9GGcx",function(e,t){var n=s("kKSgw");/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */function r(e){if("function"!=typeof e)throw TypeError("executor must be a function.");this.promise=new Promise(function(e){t=e});var t,r=this;// eslint-disable-next-line func-names
this.promise.then(function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}}),// eslint-disable-next-line func-names
this.promise.then=function(e){// eslint-disable-next-line func-names
var t,n=new Promise(function(e){r.subscribe(e),t=e}).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e(function(e){r.reason||(r.reason=new n(e),t(r.reason))})}/**
 * Throws a `Cancel` if cancellation has been requested.
 */r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},/**
 * Subscribe to the cancel signal
 */r.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]},/**
 * Unsubscribe from the cancel signal
 */r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */r.source=function(){var e;return{token:new r(function(t){e=t}),cancel:e}},e.exports=r}),s.register("4rx4g",function(e,t){/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */e.exports=function(e){return function(t){return e.apply(null,t)}}}),s.register("4Qexm",function(e,t){/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}});var i={};i=s("9d9Fx");const a=/*@__PURE__*/e(i).create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"122ff25a5fbe369b9dc701b94b06cdc8"}}),o=async({page:e=1,period:t="week",type:n="movie"})=>{try{let{data:r}=await a.get(`trending/${n}/${t}`,{params:{page:e}});// console.log(data);
return r}catch(e){console.log(e.message)}},l=async e=>{try{let{data:t}=await a.get(`genre/${e}/list`);// console.log(data.genres);
return t.genres}catch(e){console.log(e.message)}},c=async(e,t)=>{try{let{data:n}=await a.get(`${t}/${e}`);// console.log(data);
return n}catch(e){console.log(e.message)}},u=async({query:e,page:t=1,type:n})=>{if(e)try{let{data:r}=await a.get(`search/${n}`,{params:{page:t,query:e}});return r}catch(e){console.log(e.message)}};var d={},f=0/0,p=/^\s+|\s+$/g,h=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,m=/^0o[0-7]+$/i,y=parseInt,v="object"==typeof t&&t&&t.Object===Object&&t,b="object"==typeof self&&self&&self.Object===Object&&self,L=v||b||Function("return this")(),w=Object.prototype.toString,S=Math.max,x=Math.min,q=function(){return L.Date.now()};/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */function E(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */function T(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==w.call(t))return f;if(E(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=E(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(p,"");var r=g.test(e);return r||m.test(e)?y(e.slice(2),r?2:8):h.test(e)?f:+e}d=/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */function(e,t,n){var r,s,i,a,o,l,c=0,u=!1,d=!1,f=!0;if("function"!=typeof e)throw TypeError("Expected a function");function p(t){var n=r,i=s;return r=s=void 0,c=t,a=e.apply(i,n)}function h(e){var n=e-l,r=e-c;// Either this is the first call, activity has stopped and we're at the
// trailing edge, the system time has gone backwards and we're treating
// it as the trailing edge, or we've hit the `maxWait` limit.
return void 0===l||n>=t||n<0||d&&r>=i}function g(){var e,n,r,s=q();if(h(s))return m(s);// Restart the timer.
o=setTimeout(g,(e=s-l,n=s-c,r=t-e,d?x(r,i-n):r))}function m(e){return(// Only invoke if we have `lastArgs` which means `func` has been
// debounced at least once.
(o=void 0,f&&r)?p(e):(r=s=void 0,a))}function y(){var e,n=q(),i=h(n);if(r=arguments,s=this,l=n,i){if(void 0===o)return(// Reset any `maxWait` timer.
c=e=l,// Start the timer for the trailing edge.
o=setTimeout(g,t),u?p(e):a);if(d)return(// Handle invocations in a tight loop.
o=setTimeout(g,t),p(l))}return void 0===o&&(o=setTimeout(g,t)),a}return t=T(t)||0,E(n)&&(u=!!n.leading,i=(d="maxWait"in n)?S(T(n.maxWait)||0,t):i,f="trailing"in n?!!n.trailing:f),y.cancel=function(){void 0!==o&&clearTimeout(o),c=0,r=l=s=o=void 0},y.flush=function(){return void 0===o?a:m(q())},y};const O=document.querySelector(".error"),j=document.querySelector(".search-form"),N=document.querySelector(".loader-backdrop"),$=document.querySelector(".paginator");async function k({query:e,page:t=1}){if(N.classList.contains("visually-hidden")&&N.classList.remove("visually-hidden"),!/[a-z0-9]/i.test(e)){V(),A();return}let n=H();try{let{total_pages:r,results:s}=await u({query:e,page:t,type:n});N.classList.toggle("visually-hidden"),0===s.length?(V(),A()):($.dataset.pages=_(r),F({list:s,type:n}),R(t,_(r))),N.classList.contains("visually-hidden")||N.classList.add("visually-hidden")}catch(e){N.classList.contains("visually-hidden")||N.classList.add("visually-hidden"),console.log(e.message)}}function A(){j.firstElementChild.focus(),N.classList.contains("visually-hidden")||N.classList.add("visually-hidden"),O.classList.contains("visually-hidden")&&O.classList.remove("visually-hidden")}j.addEventListener("submit",e=>{e.preventDefault()}),j.addEventListener("input",()=>{O.classList.contains("visually-hidden")||O.classList.add("visually-hidden")}),j.addEventListener("input",/*@__PURE__*/e(d)(async e=>{let t=e.target.value;if(!t){V();return}k({query:t})},500));var C={};C=new URL(s("ifJdc").resolve("6a4rn"),import.meta.url).toString();const P=document.querySelector(".paginator");function _(e){return e<=500?e:500}function R(t,n){if(1===n){P.classList.contains("visually-hidden")||P.classList.add("visually-hidden"),P.innerHTML="";return}P.classList.contains("visually-hidden")&&P.classList.remove("visually-hidden");let r="";P.classList.contains("mobile")?r=n<=5?U({startValue:1,endValue:n,current:t,totalPages:n}):2>=t&&t>=1?U({startValue:1,endValue:3,current:t,totalPages:n}):n-1<=t&&t<=n?U({startValue:n-2,endValue:n,current:t,totalPages:n}):t-1>1&&t+1<=n?`<ul class="paginator-buttons">
    <li class="paginator-item "><button class="paginator-button previous" ${1===t?"disabled":""}><svg class="left-arrow"><use href="${/*@__PURE__*/e(C)}#icon-arrow-left" class="svg"></use></svg></button></li>
    <li class="paginator-item"><button class="paginator-button number ">${t-1}</button></li>
    <li class="paginator-item"><button class="paginator-button number current " disabled>${t}</button></li>
    <li class="paginator-item"><button class="paginator-button number ">${t+1}</button></li>
    <li class="paginator-item"><button class="paginator-button next" ${t===n?"disabled":""}><svg class="right-arrow"><use href="${/*@__PURE__*/e(C)}#icon-arrow-left" class="svg"></use></svg></button></li>
    </ul>`:void 0:n<=7?r=U({startValue:1,endValue:n,current:t,totalPages:n}):n>7&&(r=`<ul class="paginator-buttons">
<li class="paginator-item "><button class="paginator-button previous" ${1===t?"disabled":""}><svg class="left-arrow"><use href="${/*@__PURE__*/e(C)}#icon-arrow-left" class="svg"></use></svg></button></li>
<li class="paginator-item ${1===t?"visually-hidden":""}"><button class="paginator-button number ">1</button></li>
<li class="paginator-item first-decor ${t-1<=3?"visually-hidden":""}"><svg class="dots"><use href="${/*@__PURE__*/e(C)}#dots" class="svg"></use></svg></li>
<li class="paginator-item ${t-2<=1?"visually-hidden":""}"><button class="paginator-button number ">${t-2}</button></li>
<li class="paginator-item ${t-1<=1?"visually-hidden":""}"><button class="paginator-button number ">${t-1}</button></li>
<li class="paginator-item"><button class="paginator-button number current " disabled>${t}</button></li>
<li class="paginator-item ${t+1>=n?"visually-hidden":""}"><button class="paginator-button number ">${t+1}</button></li>
<li class="paginator-item ${t+2>=n?"visually-hidden":""}"><button class="paginator-button number ">${t+2}</button></li>
<li class="paginator-item second-decor ${n-t<=3?"visually-hidden":""}"><svg class="dots"><use href="${/*@__PURE__*/e(C)}#dots" class="svg"></use></svg></li>
<li class="paginator-item ${t==n?"visually-hidden":""}"><button class="paginator-button number ">${n}</button></li>
<li class="paginator-item"><button class="paginator-button next" ${t===n?"disabled":""}><svg class="right-arrow"><use href="${/*@__PURE__*/e(C)}#icon-arrow-left" class="svg"></use></svg></button></li>
</ul>`),P.innerHTML="",P.insertAdjacentHTML("beforeend",r)}function U({startValue:t,endValue:n,current:r,totalPages:s}){let i=[];for(let e=t;e<=n;e++){let t=`<li class="paginator-item"><button class="paginator-button number ${e===r?"current":""}"${e===r?"disabled":""}>${e}</button></li>`;i.push(t)}let a=`<ul class="paginator-buttons"><li class="paginator-item"><button class="paginator-button previous" ${1===r?"disabled":""}><svg class="left-arrow"><use href="${/*@__PURE__*/e(C)}#icon-arrow-left" class="svg"></use></svg></button></li>${i.join("")}
  <li class="paginator-item"><button class="paginator-button next"  ${r===s?"disabled":""}><svg class="right-arrow"><use href="${/*@__PURE__*/e(C)}#icon-arrow-left" class="svg"></use></svg></button></li></ul>`;return a}window.addEventListener("resize",e=>{let t=e.target.innerWidth;if(t<768){if(P.classList.contains("mobile"))return;P.classList.toggle("mobile");let e=Number(P.querySelector(".current").innerHTML),t=Number(P.dataset.pages);R(e,t)}if(t>768&&P.classList.contains("mobile")){P.classList.toggle("mobile");let e=Number(P.querySelector(".current").innerHTML),t=Number(P.dataset.pages);R(e,t)}}),P.addEventListener("click",e=>{let t;if("use"===e.target.nodeName?t=e.target.parentNode.parentNode:"svg"===e.target.nodeName?t=e.target.parentNode:"BUTTON"===e.target.nodeName&&(t=e.target),!t?.classList.contains("paginator-button")||t.disabled)return;let n=document.querySelector("header"),r=document.querySelector(".error"),s=document.querySelector(".search-input");r.classList.contains("visually-hidden")||(r.classList.add("visually-hidden"),s.value="");let i=Number(P.querySelector(".current").innerHTML);t.classList.contains("previous")?0===s.value.length?V(i-1):k({query:s.value,page:i-1}):t.classList.contains("next")?0===s.value.length?V(i+1):k({query:s.value,page:i+1}):t.classList.contains("number")&&(0===s.value.length?V(Number(t.innerHTML)):k({query:s.value,page:Number(t.innerHTML)})),n.scrollIntoView({block:"start",behavior:"smooth"})});const I=document.querySelector(".paginator"),M=document.querySelector(".loader-backdrop"),J=document.querySelector(".types-container"),B="https://image.tmdb.org/t/p/w500";function H(){let e=J.querySelector(".selected");return e.dataset.type}async function V(e=1){let t=H();M.classList.contains("visually-hidden")&&M.classList.remove("visually-hidden");try{let{results:n,total_pages:r}=await o({page:e,type:t});I.dataset.pages=_(r),await F({list:n,type:t}),R(e,_(r)),M.classList.contains("visually-hidden")||M.classList.add("visually-hidden")}catch(e){M.classList.contains("visually-hidden")||M.classList.add("visually-hidden"),console.log(e.message)}}async function F({list:e,type:t}){let n=document.querySelector(".film-list");try{let r=e.map(async e=>{let n=await W(e.genre_ids,t),r=D({...e,genres:n,media_type:t});return r}),s=(await Promise.all(r)).join("");n.innerHTML="",n.insertAdjacentHTML("beforeend",s)}catch(e){console.log(e.message)}}function D({pageType:e="home",genres:t,id:n,media_type:r,poster_path:s,title:i,release_date:a,name:o,first_air_date:l,vote_average:c=0}){return`<li class="movie-card" >
  <img
    src=${s?`${B}${s}`:`${B}/wjYOUKIIOEklJJ4xbbQVRN6PRly.jpg`}
    width=280px
    height=400px
    alt="poster" id=${n} data-type=${r}
    class="movie-poster"
  />
  <p class="movie-name">${i||o}</p>
  <div class="movie-thumb">
    ${t?.length?`<p class="movie-genres">${z(t,31)}</p>`:""}
    <p class="movie-date">${a||l?a?.slice(0,4)||l?.slice(0,4):""}</p>
    ${"library"===e?`<span class="movie-rate">${c.toFixed(1)}</span>`:""}
  </div>
</li>`}async function W(e,t){try{let n=await l(t),r=e.map(e=>{let t=n.find(t=>t.id===e);return t?t.name:null});return r}catch(e){console.log(e.message)}}function z(e,t){let n=e.join(", ");for(let r=0;n.length>t;r++)n=e.slice(0,3-r).join(", ");return n}document.addEventListener("DOMContentLoaded",async()=>{document.querySelector(".filmoteka").href=window.location.href;let e=window.innerWidth;null===localStorage.getItem("watched")&&localStorage.setItem("watched",JSON.stringify([])),null===localStorage.getItem("queue")&&localStorage.setItem("queue",JSON.stringify([])),e<768&&I.classList.toggle("mobile"),V()}),J.addEventListener("click",e=>{if("BUTTON"!=e.target.nodeName)return;let t=document.querySelector("header"),n=t.querySelector(".search-input"),r=J.querySelector(".tv"),s=J.querySelector(".movie");e.target.disabled=!0,r.classList.toggle("selected"),s.classList.toggle("selected"),e.target.classList.contains("tv")&&(s.disabled=!1),e.target.classList.contains("movie")&&(r.disabled=!1),t.classList.contains("home-page")?0===n.value.length?V():k({query:n.value}):t.classList.contains("library-page")&&Z()});const Q=e=>{let{target:t}=e,{id:n,type:r}=t.parentNode.dataset;t.classList.contains("modal-button")&&(t.classList.contains("watched")&&t.classList.contains("selected")?(t.innerHTML="add to watched",K(n,"watched")):t.classList.contains("watched")&&(t.innerHTML="remove from watched",G({id:n,type:r},"watched")),t.classList.contains("queue")&&t.classList.contains("selected")?(t.innerHTML="add to queue",K(n,"queue")):t.classList.contains("queue")&&(t.innerHTML="remove from queue",G({id:n,type:r},"queue")),t.classList.toggle("selected"))};function Y(e,t,n){if("watched"===n){let n=JSON.parse(localStorage.getItem("watched"));return!!n.find(n=>n.type===t&&n.id===e)}if("queue"===n){let n=JSON.parse(localStorage.getItem("queue"));return!!n.find(n=>n.type===t&&n.id===e)}}function G(e,t){if("watched"===t){let t=JSON.parse(localStorage.getItem("watched"));localStorage.setItem("watched",JSON.stringify([e,...t]))}else if("queue"===t){let t=JSON.parse(localStorage.getItem("queue"));localStorage.setItem("queue",JSON.stringify([e,...t]))}}function K(e,t){if("watched"===t){let t=JSON.parse(localStorage.getItem("watched")),n=t.findIndex(t=>t.id===e);t.splice(n,1),localStorage.setItem("watched",JSON.stringify([...t]))}else if("queue"===t){let t=JSON.parse(localStorage.getItem("queue")),n=t.findIndex(t=>t.id===e);t.splice(n,1),localStorage.setItem("queue",JSON.stringify([...t]))}}const X=()=>{let e=JSON.parse(localStorage.getItem("watched")),t=JSON.parse(localStorage.getItem("queue")),n=document.querySelector(".library-queue"),r=document.querySelector(".library-watched");n.classList.contains("current")&&(n.classList.remove("current"),n.disabled=!1),r.classList.contains("current")&&(r.classList.remove("current"),r.disabled=!1),e.length&&0===t.length?(r.classList.add("current"),r.disabled=!0):0===e.length&&t.length?(n.classList.add("current"),n.disabled=!0):(r.classList.add("current"),r.disabled=!0)},Z=async()=>{let e=H(),t=document.querySelector(".film-list"),n=document.querySelector(".library-buttons"),r=n.firstElementChild,s=n.lastElementChild,i=[];if(n.classList.contains("visually-hidden"))return;r.classList.contains("current")?i=[...JSON.parse(localStorage.getItem("watched"))]:s.classList.contains("current")&&(i=[...JSON.parse(localStorage.getItem("queue"))]),t.innerHTML="";let a=i?.filter(t=>t.type===e);if(0===a.length){document.querySelector(".nothing-added").classList.remove("visually-hidden");return}let o=await ee(a);t.insertAdjacentHTML("beforeend",o)};async function ee(e){document.querySelector(".nothing-added").classList.contains("visually-hidden")||document.querySelector(".nothing-added").classList.add("visually-hidden");let t=H(),n=e.map(async e=>{let n=await c(e.id,t),r=n.genres.map(e=>e.name),s={...n,genres:r,pageType:"library",media_type:t};return D(s)}),r=(await Promise.all(n)).join(" ");return r}const et=document.querySelector(".home"),en=document.querySelector(".library"),er=document.querySelector("header"),es=document.querySelector(".library-buttons"),ei=document.querySelector(".form-box"),ea=document.querySelector(".header-features"),eo=document.querySelector(".nothing-added"),el=document.querySelector(".search-input"),ec=document.querySelector(".paginator");function eu(e){e.target.disabled=!0,er.classList.contains("home-page")?(er.classList.remove("home-page"),er.classList.add("library-page")):er.classList.contains("library-page")&&(er.classList.remove("library-page"),er.classList.add("home-page")),function(){if(er.classList.contains("library-page"))ea.classList.toggle("library"),ei.classList.toggle("visually-hidden"),es.classList.toggle("visually-hidden");else if(er.classList.contains("home-page")){if(es.classList.contains("visually-hidden")||!ei.classList.contains("visually-hidden"))return;ea.classList.toggle("library"),ei.classList.toggle("visually-hidden"),es.classList.toggle("visually-hidden")}}(),et.classList.toggle("current"),en.classList.toggle("current")}et.addEventListener("click",e=>{document.querySelector("head>title").innerHTML="Home",en.disabled=!1,eu(e),eo.classList.contains("visually-hidden")||eo.classList.add("visually-hidden");let t=el.value;0===t.length?V():t.length>0&&k({query:t})}),en.addEventListener("click",e=>{document.querySelector("head>title").innerHTML="Library",et.disabled=!1,eu(e),X(),Z(),ec.innerHTML="",ec.classList.contains("visually-hidden")||ec.classList.add("visually-hidden")});const ed=document.querySelector(".library-watched"),ef=document.querySelector(".library-queue"),ep=e=>{e.target.disabled=!0,ed.classList.toggle("current"),ef.classList.toggle("current")};ed.addEventListener("click",e=>{ef.disabled=!1,ep(e),Z()}),ef.addEventListener("click",e=>{ed.disabled=!1,ep(e),Z()});const eh=document.querySelector("body"),eg=document.querySelector(".film-list"),em=document.querySelector(".backdrop"),ey=document.querySelector(".library-queue"),ev=document.querySelector(".library-watched"),eb="https://image.tmdb.org/t/p/w500";async function eL(){let e=document.querySelector(".modal__buttons").dataset.id,t=H();eh.style.overflow="unset",em.classList.add("hidden"),em.innerHTML="",ey.classList.contains("current")?Y(e,t,"queue")||Z():ev.classList.contains("current")&&!Y(e,t,"watched")&&Z()}async function ew(t,n){try{let r=await c(t,n),s=function({id:t,type:n,poster_path:r,genres:s,original_title:i,title:a,name:o,original_name:l,vote_average:c,vote_count:u,popularity:d,overview:f}){let p=Y(String(t),n,"watched"),h=Y(String(t),n,"queue");return`<div class="modal">
    <button class="close-button">
      <svg class="close-icon">
        <use href="${/*@__PURE__*/e(C)}#closeIcon"></use>
      </svg>
    </button>
    <div class="poster-container">
      <img
        src=${r?`${eb}${r}`:`${eb}/wjYOUKIIOEklJJ4xbbQVRN6PRly.jpg`}
        alt="poster"
        class="modal-poster"
      />
    </div>
    <div class="modal-info">
      <h2 class="modal-title">${a||o}</h2>
      <div class="specifications">
        <ul class="keys">
          <li class="key">Vote / Votes</li>
          <li class="key">Popularity</li>
          <li class="key">Original title</li>
          <li class="key">Genres</li>
        </ul>
        <ul class="values">
          <li class="value">
            <span class="movie-rate modal--rate">${c.toFixed(1)}</span> / <span class="modal-votes">${u}</span>
          </li>
          <li class="value">${d.toFixed(1)}</li>
          <li class="value title">${i||l}</li>
          <li class="value">${s.length?z(s.map(e=>e.name),26):"None"}</li>
        </ul>
      </div>
      <h3 class="about-title">ABOUT</h3>
      <p class="movie-description">
      ${f}
      </p>
      <div class="modal__buttons" data-id=${t} data-type=${n}>
        <button class="modal-button watched ${p&&"selected"}" >${p?"remove from watched":"add to watched"}</button>
        <button class="modal-button queue ${h&&"selected"}">${h?"remove from queue":"add to queue"}</button>
      </div>
    </div>
  </div>`}//# sourceMappingURL=index.cbbef975.js.map
({...r,type:n});em.insertAdjacentHTML("beforeend",s)}catch(e){console.log(e)}}eg.addEventListener("click",async({target:e})=>{if("IMG"!==e.nodeName)return;eh.style.overflow="hidden",await ew(e.id,e.dataset.type),em.classList.toggle("hidden");let t=document.querySelector(".close-button");t?.addEventListener("click",()=>{em.classList.contains("hidden")||eL()});let n=document.querySelector(".modal__buttons");n.addEventListener("click",Q)}),document.addEventListener("keydown",({key:e})=>{"Escape"!==e||em.classList.contains("hidden")||eL()}),em.addEventListener("click",({target:e})=>{e.classList.contains("backdrop")&&!em.classList.contains("hidden")&&eL()});
//# sourceMappingURL=index.cbbef975.js.map
