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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
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
})({"f1KsU":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "701a3e58ae189f7d";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
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
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
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
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"1wubG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _cssJs = require("./css.js");
var _cssJsDefault = parcelHelpers.interopDefault(_cssJs);
let textPart = document.querySelector(".textPart");
let htmlPart = document.querySelector(".html");
let cssPart = document.querySelector(".css");
// textPart.innerText = "Hello!";
textPart.scrollIntoView(false);
let n = 0;
// let printCSS = setInterval(() => {
//   n = n + 1;
//   console.log(n);
//   if (n > cssString.length) {
//     clearInterval(print);
//     return;
//   }
//   console.log(cssString.substring(0, n));
//   //   输出从第0位到第n-1位，第n位是不会输出的
//   textPart.innerHTML = cssString.substring(0, n);
//   //   相隔300毫秒执行这个匿名函数
// }, 0);
let printText = setInterval(()=>{
    n = n + 1;
    console.log(n);
    if (n > _cssJsDefault.default.length) {
        clearInterval(printText);
        return;
    }
    console.log(_cssJsDefault.default.substring(0, n));
    //   输出从第0位到第n-1位，第n位是不会输出的
    textPart.innerText = _cssJsDefault.default.substring(0, n);
    //   关键就是在这里面执行啊
    // textPart.scrollIntoView(false);
    // textPart.scrollTop = 9999999;
    textPart.scrollTop = textPart.scrollHeight;
}, 0);
// cssPart.innerHTML = cssString;
let printStyle = setInterval(()=>{
    n = n + 1;
    console.log(n);
    if (n > _cssJsDefault.default.length) {
        clearInterval(printStyle);
        return;
    }
    console.log(_cssJsDefault.default.substring(0, n));
    //   输出从第0位到第n-1位，第n位是不会输出的
    cssPart.innerHTML = _cssJsDefault.default.substring(0, n);
//   相隔300毫秒执行这个匿名函数
}, 0);

},{"./css.js":"gXuoQ","@parcel/transformer-js/src/esmodule-helpers.js":"iFRSE"}],"gXuoQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
let cssString = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

.textPart {
  height: 50vh;
  overflow: auto;

  /* position: fixed; */
  width: 100%;
  /* top: 50%; */
  font-size: 16px;
}

/* 让滚动条消失 */
.textPart::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}

.html {
  border: 1px solid blue;
  background-color: rgb(255, 230, 0);
  /* position: fixed; */
  width: 100%;
  height: 50vh;
  /* top: 50%; */
}

.css {
  border: 1px solid red;
}

.skin {
  /* 设置为相对定位，其他的内容相对它进行位移变化 */

  position: relative;
  width: 420px;
  height: 240px;
  left: 50%;
  margin-left: -210px;
  top: 50%;
  margin-top: -120px;
  /* border: 1px solid green; */
}

/* ----------------------------------------- */
/* ----------------------------------------- */

/* 下面是鼻子 */

.triangle {
  /* position: relative; */
  position: absolute;
  border: 10px solid black;
  border-color: rgb(0, 0, 0) transparent transparent transparent;
  width: 1px;
  height: 1px;
  left: 50%;
  top: 20%;
  margin-top: -10px;
  margin-left: -10px;
}

.circular_arc {
  background-color: rgb(0, 0, 0);
  width: 20px;
  height: 6px;
  /* 设置绝对定位后，就会找到上一个不是static的父元素作为定位基准，这里就是三角形triangle */
  /* xiu */
  position: absolute;
  top: -16px;
  left: -10px;
  border-radius: 100% 100% 0 0;
}

/* 实现鼠标hover时，鼻子的晃动效果 */
@-webkit-keyframes wave {
  0% {
  }
  25% {
    transform: rotate(4deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-4deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes wave {
  0% {
  }
  25% {
    transform: rotate(4deg);
  }
  50% {
    transform: rotate(0deg);
  }
  75% {
    transform: rotate(-4deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

.triangle:hover {
  -webkit-animation: wave 300ms infinite linear;
  animation: wave 300ms infinite linear;
}

/* ----------------------------------------- */
/* ----------------------------------------- */

/* 下面是眼睛 */
.eye {
  position: absolute;
  border: 2px solid #000;
  width: 63px;
  height: 63px;
  /* 从上下排列变成左右排列 */
  /* display: inline-block; */
  left: 50%;
  top: 0%;
  /* top: 100px; */
  margin-left: -31.5px;
  border-radius: 50%;
  background-color: rgb(46, 46, 46);
}

.eye.left {
  transform: translateX(-100px);
}

.eye.right {
  transform: translateX(100px);
}

.eye::after {
  position: absolute;
  /* 必须要有这个content */
  content: "";
  display: block;
  width: 25px;
  height: 25px;
  left: 10px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid #000;
}
/* ----------------------------------------- */
/* ----------------------------------------- */

/* 下面是嘴巴 */
.mouth {
  /* border: 3px solid orange; */
  width: 170px;
  height: 170px;
  /* position: absolute; */
  position: relative;
  left: 50%;
  top: 70px;
  margin-left: -85px;
  overflow: hidden;
}

.mouth .up {
  z-index: 1;
  /* border-color: #ffe600; */
}

.mouth .up .lip {
  border: 3px solid #000;
  width: 80px;
  height: 25px;
  top: -12px;
  left: 50%;
  position: absolute;
  border-top: none;
  background-color: #ffe600;
  z-index: 1;
}

.mouth .up .left-lip {
  border-bottom-left-radius: 60px 30px;
  transform: rotate(20deg);
  border-right: none;
  transform: translateX(-85px) rotate(-20deg) translateY(9px);
  /*  */
}

.mouth .up .right-lip {
  border-bottom-right-radius: 60px 30px;
  transform: rotate(20deg) translateY(8px) translateX(3px);
  border-left: none;
  /* z-index: 1; */
}

.mouth .down {
  position: absolute;
  /* background-color: #00039b; */
  width: 100%;
  /* height: 800px; */
  height: 100%;
  /* 这里是让舌头超出的部分隐藏 */
  overflow: hidden;
  top: 7px;
}

.down .tongue {
  border: 3px solid #000000;
  position: absolute;
  /* border: 1px solid rgb(36, 167, 64); */
  background-color: #9b000a;
  height: 500px;
  width: 100%;
  border-bottom-left-radius: 50% 80%;
  border-bottom-right-radius: 50% 80%;
  top: -213%;
  overflow: hidden;
  /* z-index: 0.9; */
}

.mouth .down .tongue .circle {
  position: absolute;
  /* border: 1px solid rgb(36, 167, 64); */
  background-color: #ff485f;
  height: 170px;
  width: 170px;
  top: 382px;
  left: -3px;
  border-top-left-radius: 50% 80%;
  border-top-right-radius: 50% 80%;
  /* top: 30px; */
  /* z-index: 0.1; */
}
/* ----------------------------------------- */
/* ----------------------------------------- */

/* 下面是脸颊 */
.cheek {
  position: absolute;
  border: 2px solid black;
  width: 80px;
  height: 80px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
}

/* 如果是同一层级，那么中间不能有空格 */
.cheek.left {
  /* transform: translateX(-190px); */
  background-color: #ff0000;
  margin-left: -190px;
}

.cheek.right {
  /* transform: translateX(110px); */
  background-color: #ff0000;
  margin-left: 110px;
}

.cheek.left a img {
  position: relative;
  right: 100px;
  /* 一种将元素围绕一个定点（由transform-origin属性指定）旋转而不变形的转换 */
  transform: rotateY(180deg);
}

.cheek.right a img {
  position: relative;
  right: -40px;
  /* transform: translateY(90deg); */
}
`;
exports.default = cssString;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"iFRSE"}],"iFRSE":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
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

},{}]},["f1KsU","1wubG"], "1wubG", "parcelRequire94c2")

//# sourceMappingURL=test.ae189f7d.js.map
