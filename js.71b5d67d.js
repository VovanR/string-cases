// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/preact/dist/preact.module.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = I;
exports.hydrate = L;
exports.h = exports.createElement = h;
exports.Fragment = d;
exports.createRef = p;
exports.Component = m;
exports.cloneElement = M;
exports.createContext = O;
exports.toChildArray = x;
exports._unmount = D;
exports.options = exports.isValidElement = void 0;
var n,
    l,
    u,
    t,
    i,
    r,
    o,
    f = {},
    e = [],
    c = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i;
exports.isValidElement = l;
exports.options = n;

function s(n, l) {
  for (var u in l) n[u] = l[u];

  return n;
}

function a(n) {
  var l = n.parentNode;
  l && l.removeChild(n);
}

function h(n, l, u) {
  var t,
      i,
      r,
      o,
      f = arguments;
  if (l = s({}, l), arguments.length > 3) for (u = [u], t = 3; t < arguments.length; t++) u.push(f[t]);
  if (null != u && (l.children = u), null != n && null != n.defaultProps) for (i in n.defaultProps) void 0 === l[i] && (l[i] = n.defaultProps[i]);
  return o = l.key, null != (r = l.ref) && delete l.ref, null != o && delete l.key, v(n, l, o, r);
}

function v(l, u, t, i) {
  var r = {
    type: l,
    props: u,
    key: t,
    ref: i,
    __k: null,
    __p: null,
    __b: 0,
    __e: null,
    l: null,
    __c: null,
    constructor: void 0
  };
  return n.vnode && n.vnode(r), r;
}

function p() {
  return {};
}

function d(n) {
  return n.children;
}

function y(n) {
  if (null == n || "boolean" == typeof n) return null;
  if ("string" == typeof n || "number" == typeof n) return v(null, n, null, null);

  if (null != n.__e || null != n.__c) {
    var l = v(n.type, n.props, n.key, null);
    return l.__e = n.__e, l;
  }

  return n;
}

function m(n, l) {
  this.props = n, this.context = l;
}

function w(n, l) {
  if (null == l) return n.__p ? w(n.__p, n.__p.__k.indexOf(n) + 1) : null;

  for (var u; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) return u.__e;

  return "function" == typeof n.type ? w(n) : null;
}

function g(n) {
  var l, u;

  if (null != (n = n.__p) && null != n.__c) {
    for (n.__e = n.__c.base = null, l = 0; l < n.__k.length; l++) if (null != (u = n.__k[l]) && null != u.__e) {
      n.__e = n.__c.base = u.__e;
      break;
    }

    return g(n);
  }
}

function k(l) {
  (!l.__d && (l.__d = !0) && 1 === u.push(l) || i !== n.debounceRendering) && (i = n.debounceRendering, (n.debounceRendering || t)(_));
}

function _() {
  var n, l, t, i, r, o, f, e;

  for (u.sort(function (n, l) {
    return l.__v.__b - n.__v.__b;
  }); n = u.pop();) n.__d && (t = void 0, i = void 0, o = (r = (l = n).__v).__e, f = l.__P, e = l.u, l.u = !1, f && (t = [], i = $(f, r, s({}, r), l.__n, void 0 !== f.ownerSVGElement, null, t, e, null == o ? w(r) : o), j(t, r), i != o && g(r)));
}

function b(n, l, u, t, i, r, o, c, s) {
  var h,
      v,
      p,
      d,
      y,
      m,
      g,
      k = u && u.__k || e,
      _ = k.length;
  if (c == f && (c = null != r ? r[0] : _ ? w(u, 0) : null), h = 0, l.__k = x(l.__k, function (u) {
    if (null != u) {
      if (u.__p = l, u.__b = l.__b + 1, null === (p = k[h]) || p && u.key == p.key && u.type === p.type) k[h] = void 0;else for (v = 0; v < _; v++) {
        if ((p = k[v]) && u.key == p.key && u.type === p.type) {
          k[v] = void 0;
          break;
        }

        p = null;
      }

      if (d = $(n, u, p = p || f, t, i, r, o, null, c, s), (v = u.ref) && p.ref != v && (g || (g = [])).push(v, u.__c || d, u), null != d) {
        if (null == m && (m = d), null != u.l) d = u.l, u.l = null;else if (r == p || d != c || null == d.parentNode) {
          n: if (null == c || c.parentNode !== n) n.appendChild(d);else {
            for (y = c, v = 0; (y = y.nextSibling) && v < _; v += 2) if (y == d) break n;

            n.insertBefore(d, c);
          }

          "option" == l.type && (n.value = "");
        }
        c = d.nextSibling, "function" == typeof l.type && (l.l = d);
      }
    }

    return h++, u;
  }), l.__e = m, null != r && "function" != typeof l.type) for (h = r.length; h--;) null != r[h] && a(r[h]);

  for (h = _; h--;) null != k[h] && D(k[h], k[h]);

  if (g) for (h = 0; h < g.length; h++) A(g[h], g[++h], g[++h]);
}

function x(n, l, u) {
  if (null == u && (u = []), null == n || "boolean" == typeof n) l && u.push(l(null));else if (Array.isArray(n)) for (var t = 0; t < n.length; t++) x(n[t], l, u);else u.push(l ? l(y(n)) : n);
  return u;
}

function C(n, l, u, t, i) {
  var r;

  for (r in u) r in l || N(n, r, null, u[r], t);

  for (r in l) i && "function" != typeof l[r] || "value" === r || "checked" === r || u[r] === l[r] || N(n, r, l[r], u[r], t);
}

function P(n, l, u) {
  "-" === l[0] ? n.setProperty(l, u) : n[l] = "number" == typeof u && !1 === c.test(l) ? u + "px" : null == u ? "" : u;
}

function N(n, l, u, t, i) {
  var r, o, f, e, c;
  if ("key" === (l = i ? "className" === l ? "class" : l : "class" === l ? "className" : l) || "children" === l) ;else if ("style" === l) {
    if (r = n.style, "string" == typeof u) r.cssText = u;else {
      if ("string" == typeof t && (r.cssText = "", t = null), t) for (o in t) u && o in u || P(r, o, "");
      if (u) for (f in u) t && u[f] === t[f] || P(r, f, u[f]);
    }
  } else "o" === l[0] && "n" === l[1] ? (e = l !== (l = l.replace(/Capture$/, "")), c = l.toLowerCase(), l = (c in n ? c : l).slice(2), u ? (t || n.addEventListener(l, T, e), (n.t || (n.t = {}))[l] = u) : n.removeEventListener(l, T, e)) : "list" !== l && "tagName" !== l && "form" !== l && !i && l in n ? n[l] = null == u ? "" : u : "function" != typeof u && "dangerouslySetInnerHTML" !== l && (l !== (l = l.replace(/^xlink:?/, "")) ? null == u || !1 === u ? n.removeAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase()) : n.setAttributeNS("http://www.w3.org/1999/xlink", l.toLowerCase(), u) : null == u || !1 === u ? n.removeAttribute(l) : n.setAttribute(l, u));
}

function T(l) {
  return this.t[l.type](n.event ? n.event(l) : l);
}

function $(l, u, t, i, r, o, f, e, c, a) {
  var h,
      v,
      p,
      y,
      w,
      g,
      k,
      _,
      C,
      P,
      N = u.type;

  if (void 0 !== u.constructor) return null;
  (h = n.__b) && h(u);

  try {
    n: if ("function" == typeof N) {
      if (_ = u.props, C = (h = N.contextType) && i[h.__c], P = h ? C ? C.props.value : h.__p : i, t.__c ? k = (v = u.__c = t.__c).__p = v.__E : ("prototype" in N && N.prototype.render ? u.__c = v = new N(_, P) : (u.__c = v = new m(_, P), v.constructor = N, v.render = H), C && C.sub(v), v.props = _, v.state || (v.state = {}), v.context = P, v.__n = i, p = v.__d = !0, v.__h = []), null == v.__s && (v.__s = v.state), null != N.getDerivedStateFromProps && s(v.__s == v.state ? v.__s = s({}, v.__s) : v.__s, N.getDerivedStateFromProps(_, v.__s)), p) null == N.getDerivedStateFromProps && null != v.componentWillMount && v.componentWillMount(), null != v.componentDidMount && f.push(v);else {
        if (null == N.getDerivedStateFromProps && null == e && null != v.componentWillReceiveProps && v.componentWillReceiveProps(_, P), !e && null != v.shouldComponentUpdate && !1 === v.shouldComponentUpdate(_, v.__s, P)) {
          for (v.props = _, v.state = v.__s, v.__d = !1, v.__v = u, u.__e = null != c ? c !== t.__e ? c : t.__e : null, u.__k = t.__k, h = 0; h < u.__k.length; h++) u.__k[h] && (u.__k[h].__p = u);

          break n;
        }

        null != v.componentWillUpdate && v.componentWillUpdate(_, v.__s, P);
      }

      for (y = v.props, w = v.state, v.context = P, v.props = _, v.state = v.__s, (h = n.__r) && h(u), v.__d = !1, v.__v = u, v.__P = l, h = v.render(v.props, v.state, v.context), u.__k = x(null != h && h.type == d && null == h.key ? h.props.children : h), null != v.getChildContext && (i = s(s({}, i), v.getChildContext())), p || null == v.getSnapshotBeforeUpdate || (g = v.getSnapshotBeforeUpdate(y, w)), b(l, u, t, i, r, o, f, c, a), v.base = u.__e; h = v.__h.pop();) v.__s && (v.state = v.__s), h.call(v);

      p || null == y || null == v.componentDidUpdate || v.componentDidUpdate(y, w, g), k && (v.__E = v.__p = null);
    } else u.__e = z(t.__e, u, t, i, r, o, f, a);

    (h = n.diffed) && h(u);
  } catch (l) {
    n.__e(l, u, t);
  }

  return u.__e;
}

function j(l, u) {
  for (var t; t = l.pop();) try {
    t.componentDidMount();
  } catch (l) {
    n.__e(l, t.__v);
  }

  n.__c && n.__c(u);
}

function z(n, l, u, t, i, r, o, c) {
  var s,
      a,
      h,
      v,
      p = u.props,
      d = l.props;
  if (i = "svg" === l.type || i, null == n && null != r) for (s = 0; s < r.length; s++) if (null != (a = r[s]) && (null === l.type ? 3 === a.nodeType : a.localName === l.type)) {
    n = a, r[s] = null;
    break;
  }

  if (null == n) {
    if (null === l.type) return document.createTextNode(d);
    n = i ? document.createElementNS("http://www.w3.org/2000/svg", l.type) : document.createElement(l.type), r = null;
  }

  return null === l.type ? p !== d && (null != r && (r[r.indexOf(n)] = null), n.data = d) : l !== u && (null != r && (r = e.slice.call(n.childNodes)), h = (p = u.props || f).dangerouslySetInnerHTML, v = d.dangerouslySetInnerHTML, c || (v || h) && (v && h && v.__html == h.__html || (n.innerHTML = v && v.__html || "")), C(n, d, p, i, c), l.__k = l.props.children, v || b(n, l, u, t, "foreignObject" !== l.type && i, r, o, f, c), c || ("value" in d && void 0 !== d.value && d.value !== n.value && (n.value = null == d.value ? "" : d.value), "checked" in d && void 0 !== d.checked && d.checked !== n.checked && (n.checked = d.checked))), n;
}

function A(l, u, t) {
  try {
    "function" == typeof l ? l(u) : l.current = u;
  } catch (l) {
    n.__e(l, t);
  }
}

function D(l, u, t) {
  var i, r, o;

  if (n.unmount && n.unmount(l), (i = l.ref) && A(i, null, u), t || "function" == typeof l.type || (t = null != (r = l.__e)), l.__e = l.l = null, null != (i = l.__c)) {
    if (i.componentWillUnmount) try {
      i.componentWillUnmount();
    } catch (l) {
      n.__e(l, u);
    }
    i.base = i.__P = null;
  }

  if (i = l.__k) for (o = 0; o < i.length; o++) i[o] && D(i[o], u, t);
  null != r && a(r);
}

function H(n, l, u) {
  return this.constructor(n, u);
}

function I(l, u, t) {
  var i, o, c;
  n.__p && n.__p(l, u), o = (i = t === r) ? null : t && t.__k || u.__k, l = h(d, null, [l]), c = [], $(u, i ? u.__k = l : (t || u).__k = l, o || f, f, void 0 !== u.ownerSVGElement, t && !i ? [t] : o ? null : e.slice.call(u.childNodes), c, !1, t || f, i), j(c, l);
}

function L(n, l) {
  I(n, l, r);
}

function M(n, l) {
  return l = s(s({}, n.props), l), arguments.length > 2 && (l.children = e.slice.call(arguments, 2)), v(n.type, l, l.key || n.key, l.ref || n.ref);
}

function O(n) {
  var l = {},
      u = {
    __c: "__cC" + o++,
    __p: n,
    Consumer: function (n, l) {
      return n.children(l);
    },
    Provider: function (n) {
      var t,
          i = this;
      return this.getChildContext || (t = [], this.getChildContext = function () {
        return l[u.__c] = i, l;
      }, this.shouldComponentUpdate = function (i) {
        n.value !== i.value && (l[u.__c].props.value = i.value, t.some(function (n) {
          n.__P && (n.context = i.value, k(n));
        }));
      }, this.sub = function (n) {
        t.push(n);
        var l = n.componentWillUnmount;

        n.componentWillUnmount = function () {
          t.splice(t.indexOf(n), 1), l && l.call(n);
        };
      }), n.children;
    }
  };
  return u.Consumer.contextType = u, u;
}

exports.options = n = {}, exports.isValidElement = l = function (n) {
  return null != n && void 0 === n.constructor;
}, m.prototype.setState = function (n, l) {
  var u = this.__s !== this.state && this.__s || (this.__s = s({}, this.state));
  ("function" != typeof n || (n = n(u, this.props))) && s(u, n), null != n && this.__v && (this.u = !1, l && this.__h.push(l), k(this));
}, m.prototype.forceUpdate = function (n) {
  this.__v && (n && this.__h.push(n), this.u = !0, k(this));
}, m.prototype.render = d, u = [], t = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, i = n.debounceRendering, n.__e = function (n, l, u) {
  for (var t; l = l.__p;) if ((t = l.__c) && !t.__p) try {
    if (t.constructor && null != t.constructor.getDerivedStateFromError) t.setState(t.constructor.getDerivedStateFromError(n));else {
      if (null == t.componentDidCatch) continue;
      t.componentDidCatch(n);
    }
    return k(t.__E = t);
  } catch (l) {
    n = l;
  }

  throw n;
}, r = f, o = 0;
},{}],"node_modules/to-no-case/index.js":[function(require,module,exports) {

/**
 * Export.
 */

module.exports = toNoCase

/**
 * Test whether a string is camel-case.
 */

var hasSpace = /\s/
var hasSeparator = /(_|-|\.|:)/
var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/

/**
 * Remove any starting case from a `string`, like camel or snake, but keep
 * spaces and punctuation that may be important otherwise.
 *
 * @param {String} string
 * @return {String}
 */

function toNoCase(string) {
  if (hasSpace.test(string)) return string.toLowerCase()
  if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase()
  if (hasCamel.test(string)) return uncamelize(string).toLowerCase()
  return string.toLowerCase()
}

/**
 * Separator splitter.
 */

var separatorSplitter = /[\W_]+(.|$)/g

/**
 * Un-separate a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function unseparate(string) {
  return string.replace(separatorSplitter, function (m, next) {
    return next ? ' ' + next : ''
  })
}

/**
 * Camelcase splitter.
 */

var camelSplitter = /(.)([A-Z]+)/g

/**
 * Un-camelcase a `string`.
 *
 * @param {String} string
 * @return {String}
 */

function uncamelize(string) {
  return string.replace(camelSplitter, function (m, previous, uppers) {
    return previous + ' ' + uppers.toLowerCase().split('').join(' ')
  })
}

},{}],"node_modules/to-space-case/index.js":[function(require,module,exports) {

var clean = require('to-no-case')

/**
 * Export.
 */

module.exports = toSpaceCase

/**
 * Convert a `string` to space case.
 *
 * @param {String} string
 * @return {String}
 */

function toSpaceCase(string) {
  return clean(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
    return match ? ' ' + match : ''
  }).trim()
}

},{"to-no-case":"node_modules/to-no-case/index.js"}],"node_modules/to-camel-case/index.js":[function(require,module,exports) {

var space = require('to-space-case')

/**
 * Export.
 */

module.exports = toCamelCase

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toCamelCase(string) {
  return space(string).replace(/\s(\w)/g, function (matches, letter) {
    return letter.toUpperCase()
  })
}

},{"to-space-case":"node_modules/to-space-case/index.js"}],"node_modules/to-capital-case/index.js":[function(require,module,exports) {

var space = require('to-space-case')

/**
 * Export.
 */

module.exports = toCapitalCase

/**
 * Convert a `string` to capital case.
 *
 * @param {String} string
 * @return {String}
 */

function toCapitalCase(string) {
  return space(string).replace(/(^|\s)(\w)/g, function (matches, previous, letter) {
    return previous + letter.toUpperCase()
  })
}

},{"to-space-case":"node_modules/to-space-case/index.js"}],"node_modules/to-snake-case/index.js":[function(require,module,exports) {

var toSpace = require('to-space-case')

/**
 * Export.
 */

module.exports = toSnakeCase

/**
 * Convert a `string` to snake case.
 *
 * @param {String} string
 * @return {String}
 */

function toSnakeCase(string) {
  return toSpace(string).replace(/\s/g, '_')
}

},{"to-space-case":"node_modules/to-space-case/index.js"}],"node_modules/to-constant-case/index.js":[function(require,module,exports) {

var snake = require('to-snake-case')

/**
 * Export.
 */

module.exports = toConstantCase

/**
 * Convert a `string` to constant case.
 *
 * @param {String} string
 * @return {String}
 */

function toConstantCase(string) {
  return snake(string).toUpperCase()
}

},{"to-snake-case":"node_modules/to-snake-case/index.js"}],"node_modules/to-dot-case/index.js":[function(require,module,exports) {

var space = require('to-space-case')

/**
 * Export.
 */

module.exports = toDotCase

/**
 * Convert a `string` to slug case.
 *
 * @param {String} string
 * @return {String}
 */

function toDotCase(string) {
  return space(string).replace(/\s/g, '.')
}

},{"to-space-case":"node_modules/to-space-case/index.js"}],"node_modules/to-pascal-case/index.js":[function(require,module,exports) {

var space = require('to-space-case')

/**
 * Export.
 */

module.exports = toPascalCase

/**
 * Convert a `string` to pascal case.
 *
 * @param {String} string
 * @return {String}
 */

function toPascalCase(string) {
  return space(string).replace(/(?:^|\s)(\w)/g, function (matches, letter) {
    return letter.toUpperCase()
  })
}

},{"to-space-case":"node_modules/to-space-case/index.js"}],"node_modules/to-sentence-case/index.js":[function(require,module,exports) {

var clean = require('to-no-case')

/**
 * Export.
 */

module.exports = toSentenceCase

/**
 * Convert a `string` to camel case.
 *
 * @param {String} string
 * @return {String}
 */

function toSentenceCase(string) {
  return clean(string).replace(/[a-z]/i, function (letter) {
    return letter.toUpperCase()
  }).trim()
}

},{"to-no-case":"node_modules/to-no-case/index.js"}],"node_modules/to-slug-case/index.js":[function(require,module,exports) {

var toSpace = require('to-space-case')

/**
 * Export.
 */

module.exports = toSlugCase

/**
 * Convert a `string` to slug case.
 *
 * @param {String} string
 * @return {String}
 */

function toSlugCase(string) {
  return toSpace(string).replace(/\s/g, '-')
}

},{"to-space-case":"node_modules/to-space-case/index.js"}],"node_modules/escape-regexp-component/index.js":[function(require,module,exports) {

/**
 * Escape regexp special characters in `str`.
 *
 * @param {String} str
 * @return {String}
 * @api public
 */

module.exports = function(str){
  return String(str).replace(/([.*+?=^!:${}()|[\]\/\\])/g, '\\$1');
};
},{}],"node_modules/title-case-minors/index.js":[function(require,module,exports) {

module.exports = [
  'a',
  'an',
  'and',
  'as',
  'at',
  'but',
  'by',
  'en',
  'for',
  'from',
  'how',
  'if',
  'in',
  'neither',
  'nor',
  'of',
  'on',
  'only',
  'onto',
  'out',
  'or',
  'per',
  'so',
  'than',
  'that',
  'the',
  'to',
  'until',
  'up',
  'upon',
  'v',
  'v.',
  'versus',
  'vs',
  'vs.',
  'via',
  'when',
  'with',
  'without',
  'yet'
]

},{}],"node_modules/to-title-case/index.js":[function(require,module,exports) {

var sentence = require('to-sentence-case')
var escape = require('escape-regexp-component')
var minors = require('title-case-minors')

/**
 * Export.
 */

module.exports = toTitleCase

/**
 * Matchers.
 */

var escaped = minors.map(escape)
var minorMatcher = new RegExp('[^^]\\b(' + escaped.join('|') + ')\\b', 'ig')
var punctuationMatcher = /:\s*(\w)/g

/**
 * Convert a `string` to title case.
 *
 * @param {String} string
 * @return {String}
 */

function toTitleCase(string) {
  return sentence(string)
    .replace(/(^|\s)(\w)/g, function (matches, previous, letter) {
      return previous + letter.toUpperCase()
    })
    .replace(minorMatcher, function (minor) {
      return minor.toLowerCase()
    })
    .replace(punctuationMatcher, function (letter) {
      return letter.toUpperCase()
    })
}

},{"to-sentence-case":"node_modules/to-sentence-case/index.js","escape-regexp-component":"node_modules/escape-regexp-component/index.js","title-case-minors":"node_modules/title-case-minors/index.js"}],"node_modules/to-case/lib/cases.js":[function(require,module,exports) {

var camel = require('to-camel-case')
var capital = require('to-capital-case')
var constant = require('to-constant-case')
var dot = require('to-dot-case')
var none = require('to-no-case')
var pascal = require('to-pascal-case')
var sentence = require('to-sentence-case')
var slug = require('to-slug-case')
var snake = require('to-snake-case')
var space = require('to-space-case')
var title = require('to-title-case')

/**
 * Camel.
 */

exports.camel = camel

/**
 * Pascal.
 */

exports.pascal = pascal

/**
 * Dot. Should precede lowercase.
 */

exports.dot = dot

/**
 * Slug. Should precede lowercase.
 */

exports.slug = slug

/**
 * Snake. Should precede lowercase.
 */

exports.snake = snake

/**
 * Space. Should precede lowercase.
 */

exports.space = space

/**
 * Constant. Should precede uppercase.
 */

exports.constant = constant

/**
 * Capital. Should precede sentence and title.
 */

exports.capital = capital

/**
 * Title.
 */

exports.title = title

/**
 * Sentence.
 */

exports.sentence = sentence

/**
 * Convert a `string` to lower case from camel, slug, etc. Different that the
 * usual `toLowerCase` in that it will try to break apart the input first.
 *
 * @param {String} string
 * @return {String}
 */

exports.lower = function (string) {
  return none(string).toLowerCase()
}

/**
 * Convert a `string` to upper case from camel, slug, etc. Different that the
 * usual `toUpperCase` in that it will try to break apart the input first.
 *
 * @param {String} string
 * @return {String}
 */

exports.upper = function (string) {
  return none(string).toUpperCase()
}

/**
 * Invert each character in a `string` from upper to lower and vice versa.
 *
 * @param {String} string
 * @return {String}
 */

exports.inverse = function (string) {
  var chars = string.split('')
  for (var i = 0, char; char = chars[i]; i++) {
    if (!/[a-z]/i.test(char)) continue
    var upper = char.toUpperCase()
    var lower = char.toLowerCase()
    chars[i] = char == upper ? lower : upper
  }
  return chars.join('')
}

/**
 * None.
 */

exports.none = none

},{"to-camel-case":"node_modules/to-camel-case/index.js","to-capital-case":"node_modules/to-capital-case/index.js","to-constant-case":"node_modules/to-constant-case/index.js","to-dot-case":"node_modules/to-dot-case/index.js","to-no-case":"node_modules/to-no-case/index.js","to-pascal-case":"node_modules/to-pascal-case/index.js","to-sentence-case":"node_modules/to-sentence-case/index.js","to-slug-case":"node_modules/to-slug-case/index.js","to-snake-case":"node_modules/to-snake-case/index.js","to-space-case":"node_modules/to-space-case/index.js","to-title-case":"node_modules/to-title-case/index.js"}],"node_modules/to-case/lib/index.js":[function(require,module,exports) {

var cases = require('./cases')

/**
 * Export `determineCase`.
 */

module.exports = exports = determineCase

/**
 * Export `cases`.
 */

exports.cases = cases

/**
 * Determine the case of a `string`.
 *
 * @param {String} string
 * @return {String|Null}
 */

function determineCase(string){
  for (var key in cases) {
    if (key == 'none') continue
    var convert = cases[key]
    if (convert(string) == string) return key
  }
  return null
}

/**
 * Define a case by `name` with a `convert` function.
 *
 * @param {String} name
 * @param {Object} convert
 */

exports.add = function(name, convert){
  exports[name] = cases[name] = convert
}

/**
 * Export all the `cases`.
 */

for (var key in cases) {
  exports.add(key, cases[key])
}

},{"./cases":"node_modules/to-case/lib/cases.js"}],"js/components/Output/index.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function copy(_ref) {
  var target = _ref.target;
  target.select();
  document.execCommand('copy');
}

var Input =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  function Input() {
    _classCallCheck(this, Input);

    return _possibleConstructorReturn(this, _getPrototypeOf(Input).apply(this, arguments));
  }

  _createClass(Input, [{
    key: "render",
    value: function render(_ref2) {
      var value = _ref2.value,
          placeholder = _ref2.placeholder;
      return (0, _preact.h)("input", {
        value: value,
        placeholder: placeholder,
        onClick: copy,
        readOnly: true
      });
    }
  }]);

  return Input;
}(_preact.Component);

exports.default = Input;
},{"preact":"node_modules/preact/dist/preact.module.js"}],"js/app.jsx":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _preact = require("preact");

var _toCase = _interopRequireDefault(require("to-case"));

var _index = _interopRequireDefault(require("./components/Output/index.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function select(_ref) {
  var target = _ref.target;
  target.select();
}

function readSearchRequest() {
  var searchParams = new URLSearchParams(window.location.search);
  return Array.from(searchParams.keys())[0] || '';
}

function updateSearchRequest(value) {
  var url = window.location.pathname + '?' + value;
  window.history.pushState(null, null, url);
}

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
    _this.state = {
      value: readSearchRequest()
    };
    _this.converters = [{
      name: 'camel',
      fn: function fn(value) {
        return _toCase.default.camel(value);
      }
    }, {
      name: 'capital',
      fn: function fn(value) {
        return _toCase.default.capital(value);
      }
    }, {
      name: 'constant',
      fn: function fn(value) {
        return _toCase.default.constant(value);
      }
    }, {
      name: 'dot',
      fn: function fn(value) {
        return _toCase.default.dot(value);
      }
    }, {
      name: 'inverse',
      fn: function fn(value) {
        return _toCase.default.inverse(value);
      }
    }, {
      name: 'lower',
      fn: function fn(value) {
        return _toCase.default.lower(value);
      }
    }, {
      name: 'pascal',
      fn: function fn(value) {
        return _toCase.default.pascal(value);
      }
    }, {
      name: 'sentence',
      fn: function fn(value) {
        return _toCase.default.sentence(value);
      }
    }, {
      name: 'slug',
      fn: function fn(value) {
        return _toCase.default.slug(value);
      }
    }, {
      name: 'snake',
      fn: function fn(value) {
        return _toCase.default.snake(value);
      }
    }, {
      name: 'space',
      fn: function fn(value) {
        return _toCase.default.space(value);
      }
    }, {
      name: 'title',
      fn: function fn(value) {
        return _toCase.default.title(value);
      }
    }, {
      name: 'upper',
      fn: function fn(value) {
        return _toCase.default.upper(value);
      }
    }];
    _this.updateValue = _this.updateValue.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "updateValue",
    value: function updateValue(_ref2) {
      var value = _ref2.target.value;
      updateSearchRequest(value);
      this.setState({
        value: value
      });
    }
  }, {
    key: "render",
    value: function render(props, _ref3) {
      var value = _ref3.value;
      return (0, _preact.h)("div", null, (0, _preact.h)("div", {
        className: "app__input"
      }, (0, _preact.h)("input", {
        value: value,
        onInput: this.updateValue,
        onClick: select,
        autoFocus: true
      })), (0, _preact.h)("div", {
        className: "app__output"
      }, this.converters.map(function (_ref4) {
        var name = _ref4.name,
            fn = _ref4.fn;
        return (0, _preact.h)(_index.default, {
          key: name,
          value: fn(value),
          placeholder: name
        });
      })));
    }
  }]);

  return App;
}(_preact.Component);

exports.default = App;
},{"preact":"node_modules/preact/dist/preact.module.js","to-case":"node_modules/to-case/lib/index.js","./components/Output/index.jsx":"js/components/Output/index.jsx"}],"js/index.jsx":[function(require,module,exports) {
"use strict";

var _preact = require("preact");

var _app = _interopRequireDefault(require("./app.jsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _preact.render)((0, _preact.h)(_app.default, null), document.querySelector('#app-container'));
},{"preact":"node_modules/preact/dist/preact.module.js","./app.jsx":"js/app.jsx"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "34753" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.jsx"], null)
//# sourceMappingURL=/js.71b5d67d.js.map