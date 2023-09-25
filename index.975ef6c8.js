// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"igKGj":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"8lqZg":[function(require,module,exports) {
var _mainScss = require("./sass/main.scss");
var _header = require("./js/header");
var _search = require("./js/search");
var _libraryNav = require("./js/libraryNav");
var _filmList = require("./js/filmList");
var _pagination = require("./js/pagination");
var _modal = require("./js/modal");

},{"./sass/main.scss":"dFl68","./js/header":"bvS82","./js/search":"4TESp","./js/libraryNav":"kQNv0","./js/filmList":"5vzQp","./js/pagination":"9j1Dd","./js/modal":"aHHgN"}],"dFl68":[function() {},{}],"bvS82":[function(require,module,exports) {
var _localstorage = require("./localstorage");
var _filmList = require("./filmList");
var _search = require("./search");
const homeBtn = document.querySelector(".home");
const libraryBtn = document.querySelector(".library");
const header = document.querySelector("header");
const libraryBtns = document.querySelector(".library-buttons");
const searchForm = document.querySelector(".form-box");
const headerFeatures = document.querySelector(".header-features");
const nothingAdded = document.querySelector(".nothing-added");
const searchInput = document.querySelector(".search-input");
const paginator = document.querySelector(".paginator");
homeBtn.addEventListener("click", (e)=>{
    document.querySelector("head>title").innerHTML = "Home";
    libraryBtn.disabled = false;
    toggleBtn(e);
    if (!nothingAdded.classList.contains("visually-hidden")) nothingAdded.classList.add("visually-hidden");
    const query = searchInput.value;
    if (query.length === 0) (0, _filmList.renderTrending)();
    else if (query.length > 0) (0, _search.renderSearch)({
        query
    });
});
libraryBtn.addEventListener("click", (e)=>{
    document.querySelector("head>title").innerHTML = "Library";
    homeBtn.disabled = false;
    toggleBtn(e);
    (0, _localstorage.chooseCurrentButton)();
    (0, _localstorage.storageRender)();
    paginator.innerHTML = "";
    if (!paginator.classList.contains("visually-hidden")) paginator.classList.add("visually-hidden");
});
function toggleBtn(e) {
    e.target.disabled = true;
    toggleHeader();
    chooseHeaderType();
    homeBtn.classList.toggle("current");
    libraryBtn.classList.toggle("current");
}
function toggleHeader() {
    if (header.classList.contains("home-page")) {
        header.classList.remove("home-page");
        header.classList.add("library-page");
    } else if (header.classList.contains("library-page")) {
        header.classList.remove("library-page");
        header.classList.add("home-page");
    }
}
function chooseHeaderType() {
    if (header.classList.contains("library-page")) {
        headerFeatures.classList.toggle("library");
        searchForm.classList.toggle("visually-hidden");
        libraryBtns.classList.toggle("visually-hidden");
    } else if (header.classList.contains("home-page")) {
        if (libraryBtns.classList.contains("visually-hidden") || !searchForm.classList.contains("visually-hidden")) return;
        headerFeatures.classList.toggle("library");
        searchForm.classList.toggle("visually-hidden");
        libraryBtns.classList.toggle("visually-hidden");
    }
}

},{"./localstorage":"ejDaS","./filmList":"5vzQp","./search":"4TESp"}],"ejDaS":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "storageOperation", ()=>storageOperation);
parcelHelpers.export(exports, "storageContains", ()=>storageContains);
parcelHelpers.export(exports, "chooseCurrentButton", ()=>chooseCurrentButton);
parcelHelpers.export(exports, "storageRender", ()=>storageRender);
var _api = require("./api");
var _filmList = require("./filmList");
const storageOperation = (e)=>{
    const { target } = e;
    const { id, type } = target.parentNode.dataset;
    if (!target.classList.contains("modal-button")) return;
    if (target.classList.contains("watched") && target.classList.contains("selected")) {
        target.innerHTML = "add to watched";
        removeFromStorage(id, "watched");
    } else if (target.classList.contains("watched")) {
        target.innerHTML = "remove from watched";
        addToStorage({
            id,
            type
        }, "watched");
    }
    if (target.classList.contains("queue") && target.classList.contains("selected")) {
        target.innerHTML = "add to queue";
        removeFromStorage(id, "queue");
    } else if (target.classList.contains("queue")) {
        target.innerHTML = "remove from queue";
        addToStorage({
            id,
            type
        }, "queue");
    }
    target.classList.toggle("selected");
};
function storageContains(id, type, arrName) {
    if (arrName === "watched") {
        const watchedArr = JSON.parse(localStorage.getItem("watched"));
        return Boolean(watchedArr.find((obj)=>obj.type === type && obj.id === id));
    }
    if (arrName === "queue") {
        const queueArr = JSON.parse(localStorage.getItem("queue"));
        return Boolean(queueArr.find((obj)=>obj.type === type && obj.id === id));
    }
}
function addToStorage(item, arrName) {
    if (arrName === "watched") {
        const watchedArr = JSON.parse(localStorage.getItem("watched"));
        localStorage.setItem("watched", JSON.stringify([
            item,
            ...watchedArr
        ]));
    } else if (arrName === "queue") {
        const queueArr = JSON.parse(localStorage.getItem("queue"));
        localStorage.setItem("queue", JSON.stringify([
            item,
            ...queueArr
        ]));
    }
}
function removeFromStorage(id, arrName) {
    if (arrName === "watched") {
        const watchedArr = JSON.parse(localStorage.getItem("watched"));
        const index = watchedArr.findIndex((item)=>item.id === id);
        watchedArr.splice(index, 1);
        localStorage.setItem("watched", JSON.stringify([
            ...watchedArr
        ]));
    } else if (arrName === "queue") {
        const queueArr = JSON.parse(localStorage.getItem("queue"));
        const index = queueArr.findIndex((item)=>item.id === id);
        queueArr.splice(index, 1);
        localStorage.setItem("queue", JSON.stringify([
            ...queueArr
        ]));
    }
}
const chooseCurrentButton = ()=>{
    const watchedArr = JSON.parse(localStorage.getItem("watched"));
    const queueArr = JSON.parse(localStorage.getItem("queue"));
    const queueBtn = document.querySelector(".library-queue");
    const watchedBtn = document.querySelector(".library-watched");
    if (queueBtn.classList.contains("current")) {
        queueBtn.classList.remove("current");
        queueBtn.disabled = false;
    }
    if (watchedBtn.classList.contains("current")) {
        watchedBtn.classList.remove("current");
        watchedBtn.disabled = false;
    }
    if (watchedArr.length && queueArr.length === 0) {
        watchedBtn.classList.add("current");
        watchedBtn.disabled = true;
    } else if (watchedArr.length === 0 && queueArr.length) {
        queueBtn.classList.add("current");
        queueBtn.disabled = true;
    } else {
        watchedBtn.classList.add("current");
        watchedBtn.disabled = true;
    }
};
const storageRender = async ()=>{
    const type = (0, _filmList.getType)();
    const filmList = document.querySelector(".film-list");
    const buttons = document.querySelector(".library-buttons");
    const watchedBtn = buttons.firstElementChild;
    const queueBtn = buttons.lastElementChild;
    let arr = [];
    if (buttons.classList.contains("visually-hidden")) return;
    else {
        if (watchedBtn.classList.contains("current")) arr = [
            ...JSON.parse(localStorage.getItem("watched"))
        ];
        else if (queueBtn.classList.contains("current")) arr = [
            ...JSON.parse(localStorage.getItem("queue"))
        ];
    }
    filmList.innerHTML = "";
    const filtredArr = arr?.filter((item)=>item.type === type);
    if (filtredArr.length === 0) {
        document.querySelector(".nothing-added").classList.remove("visually-hidden");
        return;
    }
    const markup = await createStorageMarkup(filtredArr);
    filmList.insertAdjacentHTML("beforeend", markup);
};
async function createStorageMarkup(arr) {
    if (!document.querySelector(".nothing-added").classList.contains("visually-hidden")) document.querySelector(".nothing-added").classList.add("visually-hidden");
    const type = (0, _filmList.getType)();
    const arrayOfPromises = arr.map(async (item)=>{
        const data = await (0, _api.fetchDetails)(item.id, type);
        const genres = data.genres.map((item)=>item.name);
        const info = {
            ...data,
            genres,
            pageType: "library",
            media_type: type
        };
        return (0, _filmList.createCardMarkup)(info);
    });
    const markup = (await Promise.all(arrayOfPromises)).join(" ");
    return markup;
}

},{"./api":"9u7qN","./filmList":"5vzQp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9u7qN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchTrending", ()=>fetchTrending);
parcelHelpers.export(exports, "fetchGenres", ()=>fetchGenres);
parcelHelpers.export(exports, "fetchDetails", ()=>fetchDetails);
parcelHelpers.export(exports, "search", ()=>search);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
const instanse = (0, _axiosDefault.default).create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "122ff25a5fbe369b9dc701b94b06cdc8"
    }
});
const fetchTrending = async ({ page = 1, period = "week", type = "movie" })=>{
    try {
        const { data } = await instanse.get(`trending/${type}/${period}`, {
            params: {
                page
            }
        });
        // console.log(data);
        return data;
    } catch (err) {
        console.log(err.message);
    }
};
const fetchGenres = async (type)=>{
    try {
        const { data } = await instanse.get(`genre/${type}/list`);
        // console.log(data.genres);
        return data.genres;
    } catch (err) {
        console.log(err.message);
    }
};
const fetchDetails = async (id, type)=>{
    try {
        const { data } = await instanse.get(`${type}/${id}`);
        // console.log(data);
        return data;
    } catch (err) {
        console.log(err.message);
    }
};
const search = async ({ query, page = 1, type })=>{
    if (!query) return;
    try {
        const { data } = await instanse.get(`search/${type}`, {
            params: {
                page,
                query
            }
        });
        return data;
    } catch (err) {
        console.log(err.message);
    }
};

},{"axios":"jo6P5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jo6P5":[function(require,module,exports) {
module.exports = require("9f37cef8b0e13afc");

},{"9f37cef8b0e13afc":"63MyY"}],"63MyY":[function(require,module,exports) {
"use strict";
var utils = require("1137fef34918bf53");
var bind = require("ce63a8247a300202");
var Axios = require("c14c66f4c3ec48a2");
var mergeConfig = require("345f9ec0ee8efc80");
var defaults = require("27bdb15d131780c5");
/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */ function createInstance(defaultConfig) {
    var context = new Axios(defaultConfig);
    var instance = bind(Axios.prototype.request, context);
    // Copy axios.prototype to instance
    utils.extend(instance, Axios.prototype, context);
    // Copy context to instance
    utils.extend(instance, context);
    // Factory for creating new instances
    instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
    };
    return instance;
}
// Create the default instance to be exported
var axios = createInstance(defaults);
// Expose Axios class to allow class inheritance
axios.Axios = Axios;
// Expose Cancel & CancelToken
axios.Cancel = require("ae1da7645e57ebca");
axios.CancelToken = require("853fec7db7d524b4");
axios.isCancel = require("322a636c3e2325e1");
axios.VERSION = require("3d6b2db6c802d85d").version;
// Expose all/spread
axios.all = function all(promises) {
    return Promise.all(promises);
};
axios.spread = require("75c7c70e55d88256");
// Expose isAxiosError
axios.isAxiosError = require("543a1da09311ae9b");
module.exports = axios;
// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"1137fef34918bf53":"5By4s","ce63a8247a300202":"haRQb","c14c66f4c3ec48a2":"cpqD8","345f9ec0ee8efc80":"b85oP","27bdb15d131780c5":"lTJJ4","ae1da7645e57ebca":"kjMy2","853fec7db7d524b4":"45wzn","322a636c3e2325e1":"a0VmF","3d6b2db6c802d85d":"h29L9","75c7c70e55d88256":"dyQ8N","543a1da09311ae9b":"eyiLq"}],"5By4s":[function(require,module,exports) {
"use strict";
var bind = require("a7c7b4094caa86ac");
// utils is a library of generic helper functions non-specific to axios
var toString = Object.prototype.toString;
/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */ function isArray(val) {
    return toString.call(val) === "[object Array]";
}
/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */ function isUndefined(val) {
    return typeof val === "undefined";
}
/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */ function isBuffer(val) {
    return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
}
/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */ function isArrayBuffer(val) {
    return toString.call(val) === "[object ArrayBuffer]";
}
/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */ function isFormData(val) {
    return typeof FormData !== "undefined" && val instanceof FormData;
}
/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */ function isArrayBufferView(val) {
    var result;
    if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) result = ArrayBuffer.isView(val);
    else result = val && val.buffer && val.buffer instanceof ArrayBuffer;
    return result;
}
/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */ function isString(val) {
    return typeof val === "string";
}
/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */ function isNumber(val) {
    return typeof val === "number";
}
/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */ function isObject(val) {
    return val !== null && typeof val === "object";
}
/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */ function isPlainObject(val) {
    if (toString.call(val) !== "[object Object]") return false;
    var prototype = Object.getPrototypeOf(val);
    return prototype === null || prototype === Object.prototype;
}
/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */ function isDate(val) {
    return toString.call(val) === "[object Date]";
}
/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */ function isFile(val) {
    return toString.call(val) === "[object File]";
}
/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */ function isBlob(val) {
    return toString.call(val) === "[object Blob]";
}
/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */ function isFunction(val) {
    return toString.call(val) === "[object Function]";
}
/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */ function isStream(val) {
    return isObject(val) && isFunction(val.pipe);
}
/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */ function isURLSearchParams(val) {
    return typeof URLSearchParams !== "undefined" && val instanceof URLSearchParams;
}
/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */ function trim(str) {
    return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
}
/**
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
 */ function isStandardBrowserEnv() {
    if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) return false;
    return typeof window !== "undefined" && typeof document !== "undefined";
}
/**
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
 */ function forEach(obj, fn) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === "undefined") return;
    // Force an array if not already something iterable
    if (typeof obj !== "object") /*eslint no-param-reassign:0*/ obj = [
        obj
    ];
    if (isArray(obj)) // Iterate over array values
    for(var i = 0, l = obj.length; i < l; i++)fn.call(null, obj[i], i, obj);
    else {
        // Iterate over object keys
        for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) fn.call(null, obj[key], key, obj);
    }
}
/**
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
 */ function merge() {
    var result = {};
    function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) result[key] = merge(result[key], val);
        else if (isPlainObject(val)) result[key] = merge({}, val);
        else if (isArray(val)) result[key] = val.slice();
        else result[key] = val;
    }
    for(var i = 0, l = arguments.length; i < l; i++)forEach(arguments[i], assignValue);
    return result;
}
/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */ function extend(a, b, thisArg) {
    forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === "function") a[key] = bind(val, thisArg);
        else a[key] = val;
    });
    return a;
}
/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */ function stripBOM(content) {
    if (content.charCodeAt(0) === 0xFEFF) content = content.slice(1);
    return content;
}
module.exports = {
    isArray: isArray,
    isArrayBuffer: isArrayBuffer,
    isBuffer: isBuffer,
    isFormData: isFormData,
    isArrayBufferView: isArrayBufferView,
    isString: isString,
    isNumber: isNumber,
    isObject: isObject,
    isPlainObject: isPlainObject,
    isUndefined: isUndefined,
    isDate: isDate,
    isFile: isFile,
    isBlob: isBlob,
    isFunction: isFunction,
    isStream: isStream,
    isURLSearchParams: isURLSearchParams,
    isStandardBrowserEnv: isStandardBrowserEnv,
    forEach: forEach,
    merge: merge,
    extend: extend,
    trim: trim,
    stripBOM: stripBOM
};

},{"a7c7b4094caa86ac":"haRQb"}],"haRQb":[function(require,module,exports) {
"use strict";
module.exports = function bind(fn, thisArg) {
    return function wrap() {
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        return fn.apply(thisArg, args);
    };
};

},{}],"cpqD8":[function(require,module,exports) {
"use strict";
var utils = require("2cd2d0baba832579");
var buildURL = require("945ebba9256ed84f");
var InterceptorManager = require("fc2d71ae77ba798e");
var dispatchRequest = require("77b4f57f4d663a9b");
var mergeConfig = require("5db81a4f62f8927d");
var validator = require("d0f5147a00cee7c5");
var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */ function Axios(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
    };
}
/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */ Axios.prototype.request = function request(config) {
    /*eslint no-param-reassign:0*/ // Allow for axios('example/url'[, config]) a la fetch API
    if (typeof config === "string") {
        config = arguments[1] || {};
        config.url = arguments[0];
    } else config = config || {};
    config = mergeConfig(this.defaults, config);
    // Set config.method
    if (config.method) config.method = config.method.toLowerCase();
    else if (this.defaults.method) config.method = this.defaults.method.toLowerCase();
    else config.method = "get";
    var transitional = config.transitional;
    if (transitional !== undefined) validator.assertOptions(transitional, {
        silentJSONParsing: validators.transitional(validators.boolean),
        forcedJSONParsing: validators.transitional(validators.boolean),
        clarifyTimeoutError: validators.transitional(validators.boolean)
    }, false);
    // filter out skipped interceptors
    var requestInterceptorChain = [];
    var synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) return;
        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    var responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    var promise;
    if (!synchronousRequestInterceptors) {
        var chain = [
            dispatchRequest,
            undefined
        ];
        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);
        promise = Promise.resolve(config);
        while(chain.length)promise = promise.then(chain.shift(), chain.shift());
        return promise;
    }
    var newConfig = config;
    while(requestInterceptorChain.length){
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
            newConfig = onFulfilled(newConfig);
        } catch (error) {
            onRejected(error);
            break;
        }
    }
    try {
        promise = dispatchRequest(newConfig);
    } catch (error) {
        return Promise.reject(error);
    }
    while(responseInterceptorChain.length)promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
    return promise;
};
Axios.prototype.getUri = function getUri(config) {
    config = mergeConfig(this.defaults, config);
    return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, "");
};
// Provide aliases for supported request methods
utils.forEach([
    "delete",
    "get",
    "head",
    "options"
], function forEachMethodNoData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: (config || {}).data
        }));
    };
});
utils.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    /*eslint func-names:0*/ Axios.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig(config || {}, {
            method: method,
            url: url,
            data: data
        }));
    };
});
module.exports = Axios;

},{"2cd2d0baba832579":"5By4s","945ebba9256ed84f":"3bwC2","fc2d71ae77ba798e":"1VRIM","77b4f57f4d663a9b":"6sjJ6","5db81a4f62f8927d":"b85oP","d0f5147a00cee7c5":"9vgkY"}],"3bwC2":[function(require,module,exports) {
"use strict";
var utils = require("d198994ea2a45305");
function encode(val) {
    return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */ module.exports = function buildURL(url, params, paramsSerializer) {
    /*eslint no-param-reassign:0*/ if (!params) return url;
    var serializedParams;
    if (paramsSerializer) serializedParams = paramsSerializer(params);
    else if (utils.isURLSearchParams(params)) serializedParams = params.toString();
    else {
        var parts = [];
        utils.forEach(params, function serialize(val, key) {
            if (val === null || typeof val === "undefined") return;
            if (utils.isArray(val)) key = key + "[]";
            else val = [
                val
            ];
            utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) v = v.toISOString();
                else if (utils.isObject(v)) v = JSON.stringify(v);
                parts.push(encode(key) + "=" + encode(v));
            });
        });
        serializedParams = parts.join("&");
    }
    if (serializedParams) {
        var hashmarkIndex = url.indexOf("#");
        if (hashmarkIndex !== -1) url = url.slice(0, hashmarkIndex);
        url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
    }
    return url;
};

},{"d198994ea2a45305":"5By4s"}],"1VRIM":[function(require,module,exports) {
"use strict";
var utils = require("982be9ba543c1801");
function InterceptorManager() {
    this.handlers = [];
}
/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */ InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
    this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
};
/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */ InterceptorManager.prototype.eject = function eject(id) {
    if (this.handlers[id]) this.handlers[id] = null;
};
/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */ InterceptorManager.prototype.forEach = function forEach(fn) {
    utils.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) fn(h);
    });
};
module.exports = InterceptorManager;

},{"982be9ba543c1801":"5By4s"}],"6sjJ6":[function(require,module,exports) {
"use strict";
var utils = require("dccb83262660ba2a");
var transformData = require("670a836c9c5a1abe");
var isCancel = require("9b938a75c8452b2f");
var defaults = require("293260d2186f65fb");
var Cancel = require("41ce48c743b65c6a");
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ function throwIfCancellationRequested(config) {
    if (config.cancelToken) config.cancelToken.throwIfRequested();
    if (config.signal && config.signal.aborted) throw new Cancel("canceled");
}
/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */ module.exports = function dispatchRequest(config) {
    throwIfCancellationRequested(config);
    // Ensure headers exist
    config.headers = config.headers || {};
    // Transform request data
    config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
    // Flatten headers
    config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
    utils.forEach([
        "delete",
        "get",
        "head",
        "post",
        "put",
        "patch",
        "common"
    ], function cleanHeaderConfig(method) {
        delete config.headers[method];
    });
    var adapter = config.adapter || defaults.adapter;
    return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);
        // Transform response data
        response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
        return response;
    }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
            throwIfCancellationRequested(config);
            // Transform response data
            if (reason && reason.response) reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
        }
        return Promise.reject(reason);
    });
};

},{"dccb83262660ba2a":"5By4s","670a836c9c5a1abe":"eRqJY","9b938a75c8452b2f":"a0VmF","293260d2186f65fb":"lTJJ4","41ce48c743b65c6a":"kjMy2"}],"eRqJY":[function(require,module,exports) {
"use strict";
var utils = require("506225f7f22ee5b3");
var defaults = require("5f8f7bd977372ccb");
/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */ module.exports = function transformData(data, headers, fns) {
    var context = this || defaults;
    /*eslint no-param-reassign:0*/ utils.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
    });
    return data;
};

},{"506225f7f22ee5b3":"5By4s","5f8f7bd977372ccb":"lTJJ4"}],"lTJJ4":[function(require,module,exports) {
var process = require("1ad3e53325021694");
"use strict";
var utils = require("46f17d5a961ed1b0");
var normalizeHeaderName = require("cc6d63c7870abf00");
var enhanceError = require("381f0945c152ddd3");
var DEFAULT_CONTENT_TYPE = {
    "Content-Type": "application/x-www-form-urlencoded"
};
function setContentTypeIfUnset(headers, value) {
    if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) headers["Content-Type"] = value;
}
function getDefaultAdapter() {
    var adapter;
    if (typeof XMLHttpRequest !== "undefined") // For browsers use XHR adapter
    adapter = require("f5547462a34fd4c6");
    else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") // For node use HTTP adapter
    adapter = require("1a73616b0da0ef06");
    return adapter;
}
function stringifySafely(rawValue, parser, encoder) {
    if (utils.isString(rawValue)) try {
        (parser || JSON.parse)(rawValue);
        return utils.trim(rawValue);
    } catch (e) {
        if (e.name !== "SyntaxError") throw e;
    }
    return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
    transitional: {
        silentJSONParsing: true,
        forcedJSONParsing: true,
        clarifyTimeoutError: false
    },
    adapter: getDefaultAdapter(),
    transformRequest: [
        function transformRequest(data, headers) {
            normalizeHeaderName(headers, "Accept");
            normalizeHeaderName(headers, "Content-Type");
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) return data;
            if (utils.isArrayBufferView(data)) return data.buffer;
            if (utils.isURLSearchParams(data)) {
                setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
                return data.toString();
            }
            if (utils.isObject(data) || headers && headers["Content-Type"] === "application/json") {
                setContentTypeIfUnset(headers, "application/json");
                return stringifySafely(data);
            }
            return data;
        }
    ],
    transformResponse: [
        function transformResponse(data) {
            var transitional = this.transitional || defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) try {
                return JSON.parse(data);
            } catch (e) {
                if (strictJSONParsing) {
                    if (e.name === "SyntaxError") throw enhanceError(e, this, "E_JSON_PARSE");
                    throw e;
                }
            }
            return data;
        }
    ],
    /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */ timeout: 0,
    xsrfCookieName: "XSRF-TOKEN",
    xsrfHeaderName: "X-XSRF-TOKEN",
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
    },
    headers: {
        common: {
            "Accept": "application/json, text/plain, */*"
        }
    }
};
utils.forEach([
    "delete",
    "get",
    "head"
], function forEachMethodNoData(method) {
    defaults.headers[method] = {};
});
utils.forEach([
    "post",
    "put",
    "patch"
], function forEachMethodWithData(method) {
    defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});
module.exports = defaults;

},{"1ad3e53325021694":"d5jf4","46f17d5a961ed1b0":"5By4s","cc6d63c7870abf00":"adBZo","381f0945c152ddd3":"itUQr","f5547462a34fd4c6":"ldm57","1a73616b0da0ef06":"ldm57"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"adBZo":[function(require,module,exports) {
"use strict";
var utils = require("5f8afca0889a63e1");
module.exports = function normalizeHeaderName(headers, normalizedName) {
    utils.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
            headers[normalizedName] = value;
            delete headers[name];
        }
    });
};

},{"5f8afca0889a63e1":"5By4s"}],"itUQr":[function(require,module,exports) {
"use strict";
/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */ module.exports = function enhanceError(error, config, code, request, response) {
    error.config = config;
    if (code) error.code = code;
    error.request = request;
    error.response = response;
    error.isAxiosError = true;
    error.toJSON = function toJSON() {
        return {
            // Standard
            message: this.message,
            name: this.name,
            // Microsoft
            description: this.description,
            number: this.number,
            // Mozilla
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            // Axios
            config: this.config,
            code: this.code,
            status: this.response && this.response.status ? this.response.status : null
        };
    };
    return error;
};

},{}],"ldm57":[function(require,module,exports) {
"use strict";
var utils = require("2bb8b5f6db10dd6d");
var settle = require("a7b983c12bb9f77f");
var cookies = require("19bdb320f45f036e");
var buildURL = require("568f70ee55491398");
var buildFullPath = require("a1fd5a6807469b6d");
var parseHeaders = require("f197d20bdfdcd5a4");
var isURLSameOrigin = require("32737c301de74bf5");
var createError = require("df24397a62f10f34");
var defaults = require("a828450c134f438a");
var Cancel = require("42ed100f53273f39");
module.exports = function xhrAdapter(config) {
    return new Promise(function dispatchXhrRequest(resolve, reject) {
        var requestData = config.data;
        var requestHeaders = config.headers;
        var responseType = config.responseType;
        var onCanceled;
        function done() {
            if (config.cancelToken) config.cancelToken.unsubscribe(onCanceled);
            if (config.signal) config.signal.removeEventListener("abort", onCanceled);
        }
        if (utils.isFormData(requestData)) delete requestHeaders["Content-Type"]; // Let the browser set it
        var request = new XMLHttpRequest();
        // HTTP basic authentication
        if (config.auth) {
            var username = config.auth.username || "";
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
            requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
        }
        var fullPath = buildFullPath(config.baseURL, config.url);
        request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
        // Set the request timeout in MS
        request.timeout = config.timeout;
        function onloadend() {
            if (!request) return;
            // Prepare the response
            var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
            var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
            var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config: config,
                request: request
            };
            settle(function _resolve(value) {
                resolve(value);
                done();
            }, function _reject(err) {
                reject(err);
                done();
            }, response);
            // Clean up request
            request = null;
        }
        if ("onloadend" in request) // Use onloadend if available
        request.onloadend = onloadend;
        else // Listen for ready state to emulate onloadend
        request.onreadystatechange = function handleLoad() {
            if (!request || request.readyState !== 4) return;
            // The request errored out and we didn't get a response, this will be
            // handled by onerror instead
            // With one exception: request that using file: protocol, most browsers
            // will return status as 0 even though it's a successful request
            if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) return;
            // readystate handler is calling before onerror or ontimeout handlers,
            // so we should call onloadend on the next 'tick'
            setTimeout(onloadend);
        };
        // Handle browser request cancellation (as opposed to a manual cancellation)
        request.onabort = function handleAbort() {
            if (!request) return;
            reject(createError("Request aborted", config, "ECONNABORTED", request));
            // Clean up request
            request = null;
        };
        // Handle low level network errors
        request.onerror = function handleError() {
            // Real errors are hidden from us by the browser
            // onerror should only fire if it's a network error
            reject(createError("Network Error", config, null, request));
            // Clean up request
            request = null;
        };
        // Handle timeout
        request.ontimeout = function handleTimeout() {
            var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
            var transitional = config.transitional || defaults.transitional;
            if (config.timeoutErrorMessage) timeoutErrorMessage = config.timeoutErrorMessage;
            reject(createError(timeoutErrorMessage, config, transitional.clarifyTimeoutError ? "ETIMEDOUT" : "ECONNABORTED", request));
            // Clean up request
            request = null;
        };
        // Add xsrf header
        // This is only done if running in a standard browser environment.
        // Specifically not if we're in a web worker, or react-native.
        if (utils.isStandardBrowserEnv()) {
            // Add xsrf header
            var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : undefined;
            if (xsrfValue) requestHeaders[config.xsrfHeaderName] = xsrfValue;
        }
        // Add headers to the request
        if ("setRequestHeader" in request) utils.forEach(requestHeaders, function setRequestHeader(val, key) {
            if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") // Remove Content-Type if data is undefined
            delete requestHeaders[key];
            else // Otherwise add header to the request
            request.setRequestHeader(key, val);
        });
        // Add withCredentials to request if needed
        if (!utils.isUndefined(config.withCredentials)) request.withCredentials = !!config.withCredentials;
        // Add responseType to request if needed
        if (responseType && responseType !== "json") request.responseType = config.responseType;
        // Handle progress if needed
        if (typeof config.onDownloadProgress === "function") request.addEventListener("progress", config.onDownloadProgress);
        // Not all browsers support upload events
        if (typeof config.onUploadProgress === "function" && request.upload) request.upload.addEventListener("progress", config.onUploadProgress);
        if (config.cancelToken || config.signal) {
            // Handle cancellation
            // eslint-disable-next-line func-names
            onCanceled = function(cancel) {
                if (!request) return;
                reject(!cancel || cancel && cancel.type ? new Cancel("canceled") : cancel);
                request.abort();
                request = null;
            };
            config.cancelToken && config.cancelToken.subscribe(onCanceled);
            if (config.signal) config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
        }
        if (!requestData) requestData = null;
        // Send the request
        request.send(requestData);
    });
};

},{"2bb8b5f6db10dd6d":"5By4s","a7b983c12bb9f77f":"dD9aC","19bdb320f45f036e":"4WJjt","568f70ee55491398":"3bwC2","a1fd5a6807469b6d":"1I5TW","f197d20bdfdcd5a4":"kqDd5","32737c301de74bf5":"lxXtv","df24397a62f10f34":"5nVS9","a828450c134f438a":"lTJJ4","42ed100f53273f39":"kjMy2"}],"dD9aC":[function(require,module,exports) {
"use strict";
var createError = require("72d296795d733aeb");
/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */ module.exports = function settle(resolve, reject, response) {
    var validateStatus = response.config.validateStatus;
    if (!response.status || !validateStatus || validateStatus(response.status)) resolve(response);
    else reject(createError("Request failed with status code " + response.status, response.config, null, response.request, response));
};

},{"72d296795d733aeb":"5nVS9"}],"5nVS9":[function(require,module,exports) {
"use strict";
var enhanceError = require("ff529806947600d1");
/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */ module.exports = function createError(message, config, code, request, response) {
    var error = new Error(message);
    return enhanceError(error, config, code, request, response);
};

},{"ff529806947600d1":"itUQr"}],"4WJjt":[function(require,module,exports) {
"use strict";
var utils = require("c987331427b8b2ad");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs support document.cookie
function standardBrowserEnv() {
    return {
        write: function write(name, value, expires, path, domain, secure) {
            var cookie = [];
            cookie.push(name + "=" + encodeURIComponent(value));
            if (utils.isNumber(expires)) cookie.push("expires=" + new Date(expires).toGMTString());
            if (utils.isString(path)) cookie.push("path=" + path);
            if (utils.isString(domain)) cookie.push("domain=" + domain);
            if (secure === true) cookie.push("secure");
            document.cookie = cookie.join("; ");
        },
        read: function read(name) {
            var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
            return match ? decodeURIComponent(match[3]) : null;
        },
        remove: function remove(name) {
            this.write(name, "", Date.now() - 86400000);
        }
    };
}() : // Non standard browser env (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return {
        write: function write() {},
        read: function read() {
            return null;
        },
        remove: function remove() {}
    };
}();

},{"c987331427b8b2ad":"5By4s"}],"1I5TW":[function(require,module,exports) {
"use strict";
var isAbsoluteURL = require("5ff0e8c05aa13380");
var combineURLs = require("e1ac36eef7d02fa4");
/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */ module.exports = function buildFullPath(baseURL, requestedURL) {
    if (baseURL && !isAbsoluteURL(requestedURL)) return combineURLs(baseURL, requestedURL);
    return requestedURL;
};

},{"5ff0e8c05aa13380":"jD6NM","e1ac36eef7d02fa4":"brOWK"}],"jD6NM":[function(require,module,exports) {
"use strict";
/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */ module.exports = function isAbsoluteURL(url) {
    // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    // by any combination of letters, digits, plus, period, or hyphen.
    return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"brOWK":[function(require,module,exports) {
"use strict";
/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */ module.exports = function combineURLs(baseURL, relativeURL) {
    return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
};

},{}],"kqDd5":[function(require,module,exports) {
"use strict";
var utils = require("5802dc5113a634d0");
// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent"
];
/**
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
 */ module.exports = function parseHeaders(headers) {
    var parsed = {};
    var key;
    var val;
    var i;
    if (!headers) return parsed;
    utils.forEach(headers.split("\n"), function parser(line) {
        i = line.indexOf(":");
        key = utils.trim(line.substr(0, i)).toLowerCase();
        val = utils.trim(line.substr(i + 1));
        if (key) {
            if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) return;
            if (key === "set-cookie") parsed[key] = (parsed[key] ? parsed[key] : []).concat([
                val
            ]);
            else parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
        }
    });
    return parsed;
};

},{"5802dc5113a634d0":"5By4s"}],"lxXtv":[function(require,module,exports) {
"use strict";
var utils = require("c8f79893fd676b4c");
module.exports = utils.isStandardBrowserEnv() ? // Standard browser envs have full support of the APIs needed to test
// whether the request URL is of the same origin as current location.
function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement("a");
    var originURL;
    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */ function resolveURL(url) {
        var href = url;
        if (msie) {
            // IE needs attribute set twice to normalize properties
            urlParsingNode.setAttribute("href", href);
            href = urlParsingNode.href;
        }
        urlParsingNode.setAttribute("href", href);
        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
            href: urlParsingNode.href,
            protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
            host: urlParsingNode.host,
            search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
            hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
            hostname: urlParsingNode.hostname,
            port: urlParsingNode.port,
            pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
        };
    }
    originURL = resolveURL(window.location.href);
    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */ return function isURLSameOrigin(requestURL) {
        var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
        return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
    };
}() : // Non standard browser envs (web workers, react-native) lack needed support.
function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
        return true;
    };
}();

},{"c8f79893fd676b4c":"5By4s"}],"kjMy2":[function(require,module,exports) {
"use strict";
/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */ function Cancel(message) {
    this.message = message;
}
Cancel.prototype.toString = function toString() {
    return "Cancel" + (this.message ? ": " + this.message : "");
};
Cancel.prototype.__CANCEL__ = true;
module.exports = Cancel;

},{}],"a0VmF":[function(require,module,exports) {
"use strict";
module.exports = function isCancel(value) {
    return !!(value && value.__CANCEL__);
};

},{}],"b85oP":[function(require,module,exports) {
"use strict";
var utils = require("99adbff39af8f677");
/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */ module.exports = function mergeConfig(config1, config2) {
    // eslint-disable-next-line no-param-reassign
    config2 = config2 || {};
    var config = {};
    function getMergedValue(target, source) {
        if (utils.isPlainObject(target) && utils.isPlainObject(source)) return utils.merge(target, source);
        else if (utils.isPlainObject(source)) return utils.merge({}, source);
        else if (utils.isArray(source)) return source.slice();
        return source;
    }
    // eslint-disable-next-line consistent-return
    function mergeDeepProperties(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(config1[prop], config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function valueFromConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
    }
    // eslint-disable-next-line consistent-return
    function defaultToConfig2(prop) {
        if (!utils.isUndefined(config2[prop])) return getMergedValue(undefined, config2[prop]);
        else if (!utils.isUndefined(config1[prop])) return getMergedValue(undefined, config1[prop]);
    }
    // eslint-disable-next-line consistent-return
    function mergeDirectKeys(prop) {
        if (prop in config2) return getMergedValue(config1[prop], config2[prop]);
        else if (prop in config1) return getMergedValue(undefined, config1[prop]);
    }
    var mergeMap = {
        "url": valueFromConfig2,
        "method": valueFromConfig2,
        "data": valueFromConfig2,
        "baseURL": defaultToConfig2,
        "transformRequest": defaultToConfig2,
        "transformResponse": defaultToConfig2,
        "paramsSerializer": defaultToConfig2,
        "timeout": defaultToConfig2,
        "timeoutMessage": defaultToConfig2,
        "withCredentials": defaultToConfig2,
        "adapter": defaultToConfig2,
        "responseType": defaultToConfig2,
        "xsrfCookieName": defaultToConfig2,
        "xsrfHeaderName": defaultToConfig2,
        "onUploadProgress": defaultToConfig2,
        "onDownloadProgress": defaultToConfig2,
        "decompress": defaultToConfig2,
        "maxContentLength": defaultToConfig2,
        "maxBodyLength": defaultToConfig2,
        "transport": defaultToConfig2,
        "httpAgent": defaultToConfig2,
        "httpsAgent": defaultToConfig2,
        "cancelToken": defaultToConfig2,
        "socketPath": defaultToConfig2,
        "responseEncoding": defaultToConfig2,
        "validateStatus": mergeDirectKeys
    };
    utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
    });
    return config;
};

},{"99adbff39af8f677":"5By4s"}],"9vgkY":[function(require,module,exports) {
"use strict";
var VERSION = require("e9aa819e853e8a05").version;
var validators = {};
// eslint-disable-next-line func-names
[
    "object",
    "boolean",
    "number",
    "function",
    "string",
    "symbol"
].forEach(function(type, i) {
    validators[type] = function validator(thing) {
        return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
    };
});
var deprecatedWarnings = {};
/**
 * Transitional option validator
 * @param {function|boolean?} validator - set to false if the transitional option has been removed
 * @param {string?} version - deprecated version / removed since version
 * @param {string?} message - some message with additional info
 * @returns {function}
 */ validators.transitional = function transitional(validator, version, message) {
    function formatMessage(opt, desc) {
        return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
    }
    // eslint-disable-next-line func-names
    return function(value, opt, opts) {
        if (validator === false) throw new Error(formatMessage(opt, " has been removed" + (version ? " in " + version : "")));
        if (version && !deprecatedWarnings[opt]) {
            deprecatedWarnings[opt] = true;
            // eslint-disable-next-line no-console
            console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
        }
        return validator ? validator(value, opt, opts) : true;
    };
};
/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */ function assertOptions(options, schema, allowUnknown) {
    if (typeof options !== "object") throw new TypeError("options must be an object");
    var keys = Object.keys(options);
    var i = keys.length;
    while(i-- > 0){
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
            var value = options[opt];
            var result = value === undefined || validator(value, opt, options);
            if (result !== true) throw new TypeError("option " + opt + " must be " + result);
            continue;
        }
        if (allowUnknown !== true) throw Error("Unknown option " + opt);
    }
}
module.exports = {
    assertOptions: assertOptions,
    validators: validators
};

},{"e9aa819e853e8a05":"h29L9"}],"h29L9":[function(require,module,exports) {
module.exports = {
    "version": "0.24.0"
};

},{}],"45wzn":[function(require,module,exports) {
"use strict";
var Cancel = require("69a8f59e5e2b033");
/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */ function CancelToken(executor) {
    if (typeof executor !== "function") throw new TypeError("executor must be a function.");
    var resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
        resolvePromise = resolve;
    });
    var token = this;
    // eslint-disable-next-line func-names
    this.promise.then(function(cancel) {
        if (!token._listeners) return;
        var i;
        var l = token._listeners.length;
        for(i = 0; i < l; i++)token._listeners[i](cancel);
        token._listeners = null;
    });
    // eslint-disable-next-line func-names
    this.promise.then = function(onfulfilled) {
        var _resolve;
        // eslint-disable-next-line func-names
        var promise = new Promise(function(resolve) {
            token.subscribe(resolve);
            _resolve = resolve;
        }).then(onfulfilled);
        promise.cancel = function reject() {
            token.unsubscribe(_resolve);
        };
        return promise;
    };
    executor(function cancel(message) {
        if (token.reason) // Cancellation has already been requested
        return;
        token.reason = new Cancel(message);
        resolvePromise(token.reason);
    });
}
/**
 * Throws a `Cancel` if cancellation has been requested.
 */ CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    if (this.reason) throw this.reason;
};
/**
 * Subscribe to the cancel signal
 */ CancelToken.prototype.subscribe = function subscribe(listener) {
    if (this.reason) {
        listener(this.reason);
        return;
    }
    if (this._listeners) this._listeners.push(listener);
    else this._listeners = [
        listener
    ];
};
/**
 * Unsubscribe from the cancel signal
 */ CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    if (!this._listeners) return;
    var index = this._listeners.indexOf(listener);
    if (index !== -1) this._listeners.splice(index, 1);
};
/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */ CancelToken.source = function source() {
    var cancel;
    var token = new CancelToken(function executor(c) {
        cancel = c;
    });
    return {
        token: token,
        cancel: cancel
    };
};
module.exports = CancelToken;

},{"69a8f59e5e2b033":"kjMy2"}],"dyQ8N":[function(require,module,exports) {
"use strict";
/**
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
 */ module.exports = function spread(callback) {
    return function wrap(arr) {
        return callback.apply(null, arr);
    };
};

},{}],"eyiLq":[function(require,module,exports) {
"use strict";
/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */ module.exports = function isAxiosError(payload) {
    return typeof payload === "object" && payload.isAxiosError === true;
};

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"5vzQp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getType", ()=>getType);
parcelHelpers.export(exports, "renderTrending", ()=>renderTrending);
parcelHelpers.export(exports, "renderList", ()=>renderList);
parcelHelpers.export(exports, "createCardMarkup", ()=>createCardMarkup);
parcelHelpers.export(exports, "genreLengthController", ()=>genreLengthController);
var _api = require("./api");
var _localstorage = require("./localstorage");
var _pagination = require("./pagination");
var _search = require("./search");
const paginator = document.querySelector(".paginator");
const loader = document.querySelector(".loader-backdrop");
const typesContainer = document.querySelector(".types-container");
const IMG_URL = "https://image.tmdb.org/t/p/w500";
document.addEventListener("DOMContentLoaded", async ()=>{
    document.querySelector(".filmoteka").href = window.location.href;
    const viewportWidth = window.innerWidth;
    if (localStorage.getItem("watched") === null) localStorage.setItem("watched", JSON.stringify([]));
    if (localStorage.getItem("queue") === null) localStorage.setItem("queue", JSON.stringify([]));
    if (viewportWidth < 768) paginator.classList.toggle("mobile");
    renderTrending();
});
typesContainer.addEventListener("click", (e)=>{
    if (e.target.nodeName != "BUTTON") return;
    const header = document.querySelector("header");
    const searchInput = header.querySelector(".search-input");
    const tvBtn = typesContainer.querySelector(".tv");
    const movieBtn = typesContainer.querySelector(".movie");
    e.target.disabled = true;
    tvBtn.classList.toggle("selected");
    movieBtn.classList.toggle("selected");
    if (e.target.classList.contains("tv")) movieBtn.disabled = false;
    if (e.target.classList.contains("movie")) tvBtn.disabled = false;
    if (header.classList.contains("home-page")) {
        if (searchInput.value.length === 0) renderTrending();
        else (0, _search.renderSearch)({
            query: searchInput.value
        });
    } else if (header.classList.contains("library-page")) (0, _localstorage.storageRender)();
});
function getType() {
    const selected = typesContainer.querySelector(".selected");
    return selected.dataset.type;
}
async function renderTrending(page = 1) {
    const type = getType();
    if (loader.classList.contains("visually-hidden")) loader.classList.remove("visually-hidden");
    try {
        const { results, total_pages } = await (0, _api.fetchTrending)({
            page,
            type
        });
        paginator.dataset.pages = (0, _pagination.getTotalPages)(total_pages);
        await renderList({
            list: results,
            type
        });
        (0, _pagination.renderPaginator)(page, (0, _pagination.getTotalPages)(total_pages));
        if (!loader.classList.contains("visually-hidden")) loader.classList.add("visually-hidden");
    } catch (err) {
        if (!loader.classList.contains("visually-hidden")) loader.classList.add("visually-hidden");
        console.log(err.message);
    }
}
async function renderList({ list, type }) {
    const filmList = document.querySelector(".film-list");
    try {
        const arrOfPromises = list.map(async (item)=>{
            const genres = await getGenreNames(item.genre_ids, type);
            const markup = createCardMarkup({
                ...item,
                genres,
                media_type: type
            });
            return markup;
        });
        const markup = (await Promise.all(arrOfPromises)).join("");
        filmList.innerHTML = "";
        filmList.insertAdjacentHTML("beforeend", markup);
    } catch (err) {
        console.log(err.message);
    }
}
function createCardMarkup({ pageType = "home", genres, id, media_type, poster_path, title, release_date, name, first_air_date, vote_average = 0 }) {
    return `<li class="movie-card" >
  <img
    src=${poster_path ? `${IMG_URL}${poster_path}` : `${IMG_URL}/wjYOUKIIOEklJJ4xbbQVRN6PRly.jpg`}
    width=280px
    height=400px
    alt="poster" id=${id} data-type=${media_type}
    class="movie-poster"
  />
  <p class="movie-name">${title || name}</p>
  <div class="movie-thumb">
    ${genres?.length ? `<p class="movie-genres">${genreLengthController(genres, 31)}</p>` : ""}
    ${`<p class="movie-date">${release_date || first_air_date ? release_date?.slice(0, 4) || first_air_date?.slice(0, 4) : ""}</p>`}
    ${pageType === "library" ? `<span class="movie-rate">${vote_average.toFixed(1)}</span>` : ""}
  </div>
</li>`;
}
async function getGenreNames(idArr, type) {
    try {
        const genres = await (0, _api.fetchGenres)(type);
        const newArr = idArr.map((id)=>{
            const genre = genres.find((item)=>item.id === id);
            if (!genre) return null;
            return genre.name;
        });
        return newArr;
    } catch (error) {
        console.log(error.message);
    }
}
function genreLengthController(genres, limit) {
    const sliceCount = 3;
    let string = genres.join(", ");
    for(let i = 0; string.length > limit; i++)string = genres.slice(0, sliceCount - i).join(", ");
    return string;
}

},{"./api":"9u7qN","./localstorage":"ejDaS","./pagination":"9j1Dd","./search":"4TESp","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9j1Dd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getTotalPages", ()=>getTotalPages);
parcelHelpers.export(exports, "renderPaginator", ()=>renderPaginator);
var _filmList = require("./filmList");
var _search = require("./search");
var _symbolDefsSvg = require("../images/symbol-defs.svg");
var _symbolDefsSvgDefault = parcelHelpers.interopDefault(_symbolDefsSvg);
const paginator = document.querySelector(".paginator");
window.addEventListener("resize", (e)=>{
    const viewportWidth = e.target.innerWidth;
    if (viewportWidth < 768) {
        if (paginator.classList.contains("mobile")) return;
        paginator.classList.toggle("mobile");
        const currentPage = Number(paginator.querySelector(".current").innerHTML);
        const totalPages = Number(paginator.dataset.pages);
        renderPaginator(currentPage, totalPages);
    }
    if (viewportWidth > 768 && paginator.classList.contains("mobile")) {
        paginator.classList.toggle("mobile");
        const currentPage = Number(paginator.querySelector(".current").innerHTML);
        const totalPages = Number(paginator.dataset.pages);
        renderPaginator(currentPage, totalPages);
    }
});
paginator.addEventListener("click", (e)=>{
    let target = undefined;
    if (e.target.nodeName === "use") target = e.target.parentNode.parentNode;
    else if (e.target.nodeName === "svg") target = e.target.parentNode;
    else if (e.target.nodeName === "BUTTON") target = e.target;
    if (!target?.classList.contains("paginator-button")) return;
    if (target.disabled) return;
    const header = document.querySelector("header");
    const error = document.querySelector(".error");
    const searchInput = document.querySelector(".search-input");
    if (!error.classList.contains("visually-hidden")) {
        error.classList.add("visually-hidden");
        searchInput.value = "";
    }
    const currentPage = Number(paginator.querySelector(".current").innerHTML);
    if (target.classList.contains("previous")) {
        if (searchInput.value.length === 0) (0, _filmList.renderTrending)(currentPage - 1);
        else (0, _search.renderSearch)({
            query: searchInput.value,
            page: currentPage - 1
        });
    } else if (target.classList.contains("next")) {
        if (searchInput.value.length === 0) (0, _filmList.renderTrending)(currentPage + 1);
        else (0, _search.renderSearch)({
            query: searchInput.value,
            page: currentPage + 1
        });
    } else if (target.classList.contains("number")) {
        if (searchInput.value.length === 0) (0, _filmList.renderTrending)(Number(target.innerHTML));
        else (0, _search.renderSearch)({
            query: searchInput.value,
            page: Number(target.innerHTML)
        });
    }
    header.scrollIntoView({
        block: "start",
        behavior: "smooth"
    });
});
function getTotalPages(totalPages) {
    return totalPages <= 500 ? totalPages : 500;
}
function renderPaginator(current, totalPages) {
    if (totalPages === 1) {
        if (!paginator.classList.contains("visually-hidden")) paginator.classList.add("visually-hidden");
        paginator.innerHTML = "";
        return;
    }
    if (paginator.classList.contains("visually-hidden")) paginator.classList.remove("visually-hidden");
    let markup = "";
    if (paginator.classList.contains("mobile")) markup = createMobilePaginator(current, totalPages);
    else {
        if (totalPages <= 7) markup = createNumberOfButtons({
            startValue: 1,
            endValue: totalPages,
            current,
            totalPages
        });
        else if (totalPages > 7) markup = createLargeSizePaginator(current, totalPages);
    }
    paginator.innerHTML = "";
    paginator.insertAdjacentHTML("beforeend", markup);
}
function createMobilePaginator(current, totalPages) {
    if (totalPages <= 5) return createNumberOfButtons({
        startValue: 1,
        endValue: totalPages,
        current,
        totalPages
    });
    else if (2 >= current && current >= 1) return createNumberOfButtons({
        startValue: 1,
        endValue: 3,
        current,
        totalPages
    });
    else if (totalPages - 1 <= current && current <= totalPages) return createNumberOfButtons({
        startValue: totalPages - 2,
        endValue: totalPages,
        current,
        totalPages
    });
    else if (current - 1 > 1 && current + 1 <= totalPages) return `<ul class="paginator-buttons">
    <li class="paginator-item "><button class="paginator-button previous" ${current === 1 ? "disabled" : ""}><svg class="left-arrow"><use href="${0, _symbolDefsSvgDefault.default}#icon-arrow-left" class="svg"></use></svg></button></li>
    <li class="paginator-item"><button class="paginator-button number ">${current - 1}</button></li>
    <li class="paginator-item"><button class="paginator-button number current " disabled>${current}</button></li>
    <li class="paginator-item"><button class="paginator-button number ">${current + 1}</button></li>
    <li class="paginator-item"><button class="paginator-button next" ${current === totalPages ? "disabled" : ""}><svg class="right-arrow"><use href="${0, _symbolDefsSvgDefault.default}#icon-arrow-left" class="svg"></use></svg></button></li>
    </ul>`;
}
function createNumberOfButtons({ startValue, endValue, current, totalPages }) {
    const arrOfMarkup = [];
    for(let i = startValue; i <= endValue; i++){
        const buttonMarkup = `<li class="paginator-item"><button class="paginator-button number ${i === current ? "current" : ""}"${i === current ? "disabled" : ""}>${i}</button></li>`;
        arrOfMarkup.push(buttonMarkup);
    }
    const markup = `<ul class="paginator-buttons"><li class="paginator-item"><button class="paginator-button previous" ${current === 1 ? "disabled" : ""}><svg class="left-arrow"><use href="${(0, _symbolDefsSvgDefault.default)}#icon-arrow-left" class="svg"></use></svg></button></li>${arrOfMarkup.join("")}
  <li class="paginator-item"><button class="paginator-button next"  ${current === totalPages ? "disabled" : ""}><svg class="right-arrow"><use href="${(0, _symbolDefsSvgDefault.default)}#icon-arrow-left" class="svg"></use></svg></button></li></ul>`;
    return markup;
}
function createLargeSizePaginator(current, totalPages) {
    return `<ul class="paginator-buttons">
<li class="paginator-item "><button class="paginator-button previous" ${current === 1 ? "disabled" : ""}><svg class="left-arrow"><use href="${0, _symbolDefsSvgDefault.default}#icon-arrow-left" class="svg"></use></svg></button></li>
<li class="paginator-item ${current === 1 ? "visually-hidden" : ""}"><button class="paginator-button number ">1</button></li>
<li class="paginator-item first-decor ${current - 1 <= 3 ? "visually-hidden" : ""}"><svg class="dots"><use href="${0, _symbolDefsSvgDefault.default}#dots" class="svg"></use></svg></li>
<li class="paginator-item ${current - 2 <= 1 ? "visually-hidden" : ""}"><button class="paginator-button number ">${current - 2}</button></li>
<li class="paginator-item ${current - 1 <= 1 ? "visually-hidden" : ""}"><button class="paginator-button number ">${current - 1}</button></li>
<li class="paginator-item"><button class="paginator-button number current " disabled>${current}</button></li>
<li class="paginator-item ${current + 1 >= totalPages ? "visually-hidden" : ""}"><button class="paginator-button number ">${current + 1}</button></li>
<li class="paginator-item ${current + 2 >= totalPages ? "visually-hidden" : ""}"><button class="paginator-button number ">${current + 2}</button></li>
<li class="paginator-item second-decor ${totalPages - current <= 3 ? "visually-hidden" : ""}"><svg class="dots"><use href="${0, _symbolDefsSvgDefault.default}#dots" class="svg"></use></svg></li>
<li class="paginator-item ${current == totalPages ? "visually-hidden" : ""}"><button class="paginator-button number ">${totalPages}</button></li>
<li class="paginator-item"><button class="paginator-button next" ${current === totalPages ? "disabled" : ""}><svg class="right-arrow"><use href="${0, _symbolDefsSvgDefault.default}#icon-arrow-left" class="svg"></use></svg></button></li>
</ul>`;
}

},{"./filmList":"5vzQp","./search":"4TESp","../images/symbol-defs.svg":"8r0xV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4TESp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderSearch", ()=>renderSearch);
var _lodashDebounce = require("lodash.debounce");
var _lodashDebounceDefault = parcelHelpers.interopDefault(_lodashDebounce);
var _api = require("./api");
var _filmList = require("./filmList");
var _pagination = require("./pagination");
const error = document.querySelector(".error");
const searchForm = document.querySelector(".search-form");
const loader = document.querySelector(".loader-backdrop");
const paginator = document.querySelector(".paginator");
searchForm.addEventListener("submit", (e)=>{
    e.preventDefault();
});
searchForm.addEventListener("input", ()=>{
    if (!error.classList.contains("visually-hidden")) error.classList.add("visually-hidden");
});
searchForm.addEventListener("input", (0, _lodashDebounceDefault.default)(async (e)=>{
    const query = e.target.value;
    if (!query) {
        (0, _filmList.renderTrending)();
        return;
    }
    renderSearch({
        query
    });
}, 500));
async function renderSearch({ query, page = 1 }) {
    if (loader.classList.contains("visually-hidden")) loader.classList.remove("visually-hidden");
    if (!/[a-z0-9]/i.test(query)) {
        (0, _filmList.renderTrending)();
        showQueryError();
        return;
    }
    const type = (0, _filmList.getType)();
    try {
        const { total_pages, results } = await (0, _api.search)({
            query,
            page,
            type
        });
        loader.classList.toggle("visually-hidden");
        if (results.length === 0) {
            (0, _filmList.renderTrending)();
            showQueryError();
        } else {
            paginator.dataset.pages = (0, _pagination.getTotalPages)(total_pages);
            (0, _filmList.renderList)({
                list: results,
                type
            });
            (0, _pagination.renderPaginator)(page, (0, _pagination.getTotalPages)(total_pages));
        }
        if (!loader.classList.contains("visually-hidden")) loader.classList.add("visually-hidden");
    } catch (error) {
        if (!loader.classList.contains("visually-hidden")) loader.classList.add("visually-hidden");
        console.log(error.message);
    }
}
function showQueryError() {
    searchForm.firstElementChild.focus();
    if (!loader.classList.contains("visually-hidden")) loader.classList.add("visually-hidden");
    if (error.classList.contains("visually-hidden")) error.classList.remove("visually-hidden");
    return;
}

},{"lodash.debounce":"3JP5n","./api":"9u7qN","./filmList":"5vzQp","./pagination":"9j1Dd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3JP5n":[function(require,module,exports) {
/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */ /** Used as the `TypeError` message for "Functions" methods. */ var global = arguments[3];
var FUNC_ERROR_TEXT = "Expected a function";
/** Used as references for various `Number` constants. */ var NAN = 0 / 0;
/** `Object#toString` result references. */ var symbolTag = "[object Symbol]";
/** Used to match leading and trailing whitespace. */ var reTrim = /^\s+|\s+$/g;
/** Used to detect bad signed hexadecimal string values. */ var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
/** Used to detect binary string values. */ var reIsBinary = /^0b[01]+$/i;
/** Used to detect octal string values. */ var reIsOctal = /^0o[0-7]+$/i;
/** Built-in method references without a dependency on `root`. */ var freeParseInt = parseInt;
/** Detect free variable `global` from Node.js. */ var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
/** Detect free variable `self`. */ var freeSelf = typeof self == "object" && self && self.Object === Object && self;
/** Used as a reference to the global object. */ var root = freeGlobal || freeSelf || Function("return this")();
/** Used for built-in method references. */ var objectProto = Object.prototype;
/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */ var objectToString = objectProto.toString;
/* Built-in method references for those with the same name as other `lodash` methods. */ var nativeMax = Math.max, nativeMin = Math.min;
/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */ var now = function() {
    return root.Date.now();
};
/**
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
 */ function debounce(func, wait, options) {
    var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
    if (typeof func != "function") throw new TypeError(FUNC_ERROR_TEXT);
    wait = toNumber(wait) || 0;
    if (isObject(options)) {
        leading = !!options.leading;
        maxing = "maxWait" in options;
        maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
        trailing = "trailing" in options ? !!options.trailing : trailing;
    }
    function invokeFunc(time) {
        var args = lastArgs, thisArg = lastThis;
        lastArgs = lastThis = undefined;
        lastInvokeTime = time;
        result = func.apply(thisArg, args);
        return result;
    }
    function leadingEdge(time) {
        // Reset any `maxWait` timer.
        lastInvokeTime = time;
        // Start the timer for the trailing edge.
        timerId = setTimeout(timerExpired, wait);
        // Invoke the leading edge.
        return leading ? invokeFunc(time) : result;
    }
    function remainingWait(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result = wait - timeSinceLastCall;
        return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
    }
    function shouldInvoke(time) {
        var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
        // Either this is the first call, activity has stopped and we're at the
        // trailing edge, the system time has gone backwards and we're treating
        // it as the trailing edge, or we've hit the `maxWait` limit.
        return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
    }
    function timerExpired() {
        var time = now();
        if (shouldInvoke(time)) return trailingEdge(time);
        // Restart the timer.
        timerId = setTimeout(timerExpired, remainingWait(time));
    }
    function trailingEdge(time) {
        timerId = undefined;
        // Only invoke if we have `lastArgs` which means `func` has been
        // debounced at least once.
        if (trailing && lastArgs) return invokeFunc(time);
        lastArgs = lastThis = undefined;
        return result;
    }
    function cancel() {
        if (timerId !== undefined) clearTimeout(timerId);
        lastInvokeTime = 0;
        lastArgs = lastCallTime = lastThis = timerId = undefined;
    }
    function flush() {
        return timerId === undefined ? result : trailingEdge(now());
    }
    function debounced() {
        var time = now(), isInvoking = shouldInvoke(time);
        lastArgs = arguments;
        lastThis = this;
        lastCallTime = time;
        if (isInvoking) {
            if (timerId === undefined) return leadingEdge(lastCallTime);
            if (maxing) {
                // Handle invocations in a tight loop.
                timerId = setTimeout(timerExpired, wait);
                return invokeFunc(lastCallTime);
            }
        }
        if (timerId === undefined) timerId = setTimeout(timerExpired, wait);
        return result;
    }
    debounced.cancel = cancel;
    debounced.flush = flush;
    return debounced;
}
/**
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
 */ function isObject(value) {
    var type = typeof value;
    return !!value && (type == "object" || type == "function");
}
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */ function isObjectLike(value) {
    return !!value && typeof value == "object";
}
/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */ function isSymbol(value) {
    return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
}
/**
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
 */ function toNumber(value) {
    if (typeof value == "number") return value;
    if (isSymbol(value)) return NAN;
    if (isObject(value)) {
        var other = typeof value.valueOf == "function" ? value.valueOf() : value;
        value = isObject(other) ? other + "" : other;
    }
    if (typeof value != "string") return value === 0 ? value : +value;
    value = value.replace(reTrim, "");
    var isBinary = reIsBinary.test(value);
    return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}
module.exports = debounce;

},{}],"8r0xV":[function(require,module,exports) {
module.exports = require("86218512c8ec71c4").getBundleURL("bLxZJ") + "symbol-defs.a8b2e413.svg" + "?" + Date.now();

},{"86218512c8ec71c4":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"kQNv0":[function(require,module,exports) {
var _localstorage = require("./localstorage");
const watchedBtn = document.querySelector(".library-watched");
const queueBtn = document.querySelector(".library-queue");
const toggleBtn = (e)=>{
    e.target.disabled = true;
    watchedBtn.classList.toggle("current");
    queueBtn.classList.toggle("current");
};
watchedBtn.addEventListener("click", (e)=>{
    queueBtn.disabled = false;
    toggleBtn(e);
    (0, _localstorage.storageRender)();
});
queueBtn.addEventListener("click", (e)=>{
    watchedBtn.disabled = false;
    toggleBtn(e);
    (0, _localstorage.storageRender)();
});

},{"./localstorage":"ejDaS"}],"aHHgN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _api = require("./api");
var _filmList = require("./filmList");
var _localstorage = require("./localstorage");
var _symbolDefsSvg = require("../images/symbol-defs.svg");
var _symbolDefsSvgDefault = parcelHelpers.interopDefault(_symbolDefsSvg);
const body = document.querySelector("body");
const filmList = document.querySelector(".film-list");
const backdrop = document.querySelector(".backdrop");
const queueBtn = document.querySelector(".library-queue");
const watchedBtn = document.querySelector(".library-watched");
const IMG_URL = "https://image.tmdb.org/t/p/w500";
filmList.addEventListener("click", async ({ target })=>{
    if (target.nodeName !== "IMG") return;
    body.style.overflow = "hidden";
    await renderModal(target.id, target.dataset.type);
    backdrop.classList.toggle("hidden");
    const closeButton = document.querySelector(".close-button");
    closeButton?.addEventListener("click", ()=>{
        if (!backdrop.classList.contains("hidden")) closeModal();
    });
    const storageButtons = document.querySelector(".modal__buttons");
    storageButtons.addEventListener("click", (0, _localstorage.storageOperation));
});
document.addEventListener("keydown", ({ key })=>{
    if (key !== "Escape") return;
    if (!backdrop.classList.contains("hidden")) closeModal();
});
backdrop.addEventListener("click", ({ target })=>{
    if (!target.classList.contains("backdrop")) return;
    if (!backdrop.classList.contains("hidden")) closeModal();
});
async function closeModal() {
    const id = document.querySelector(".modal__buttons").dataset.id;
    const type = (0, _filmList.getType)();
    body.style.overflow = "unset";
    backdrop.classList.add("hidden");
    backdrop.innerHTML = "";
    if (queueBtn.classList.contains("current")) {
        if (!(0, _localstorage.storageContains)(id, type, "queue")) (0, _localstorage.storageRender)();
    } else if (watchedBtn.classList.contains("current")) {
        if (!(0, _localstorage.storageContains)(id, type, "watched")) (0, _localstorage.storageRender)();
    }
}
async function renderModal(id, type) {
    try {
        const movieDetails = await (0, _api.fetchDetails)(id, type);
        const markup = createModalMarkup({
            ...movieDetails,
            type
        });
        backdrop.insertAdjacentHTML("beforeend", markup);
    } catch (err) {
        console.log(err);
    }
}
function createModalMarkup({ id, type, poster_path, genres, original_title, title, name, original_name, vote_average, vote_count, popularity, overview }) {
    const isInWatched = (0, _localstorage.storageContains)(String(id), type, "watched");
    const isInQueue = (0, _localstorage.storageContains)(String(id), type, "queue");
    return `<div class="modal">
    <button class="close-button">
      <svg class="close-icon">
        <use href="${0, _symbolDefsSvgDefault.default}#closeIcon"></use>
      </svg>
    </button>
    <div class="poster-container">
      <img
        src=${poster_path ? `${IMG_URL}${poster_path}` : `${IMG_URL}/wjYOUKIIOEklJJ4xbbQVRN6PRly.jpg`}
        alt="poster"
        class="modal-poster"
      />
    </div>
    <div class="modal-info">
      <h2 class="modal-title">${title || name}</h2>
      <div class="specifications">
        <ul class="keys">
          <li class="key">Vote / Votes</li>
          <li class="key">Popularity</li>
          <li class="key">Original title</li>
          <li class="key">Genres</li>
        </ul>
        <ul class="values">
          <li class="value">
            <span class="movie-rate modal--rate">${vote_average.toFixed(1)}</span> / <span class="modal-votes">${vote_count}</span>
          </li>
          <li class="value">${popularity.toFixed(1)}</li>
          <li class="value title">${original_title || original_name}</li>
          <li class="value">${genres.length ? (0, _filmList.genreLengthController)(genres.map((item)=>item.name), 26) : "None"}</li>
        </ul>
      </div>
      <h3 class="about-title">ABOUT</h3>
      <p class="movie-description">
      ${overview}
      </p>
      <div class="modal__buttons" data-id=${id} data-type=${type}>
        <button class="modal-button watched ${isInWatched && "selected"}" >${isInWatched ? "remove from watched" : "add to watched"}</button>
        <button class="modal-button queue ${isInQueue && "selected"}">${isInQueue ? "remove from queue" : "add to queue"}</button>
      </div>
    </div>
  </div>`;
}

},{"./api":"9u7qN","./filmList":"5vzQp","./localstorage":"ejDaS","../images/symbol-defs.svg":"8r0xV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["igKGj","8lqZg"], "8lqZg", "parcelRequired7c6")

//# sourceMappingURL=index.975ef6c8.js.map
