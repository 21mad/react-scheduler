var xn = Object.defineProperty;
var Cn = (e, n, t) => n in e ? xn(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var rr = (e, n, t) => (Cn(e, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as O, jsxs as ae, Fragment as Ft } from "react/jsx-runtime";
import * as Z from "react";
import Fe, { useRef as xe, useContext as Ne, useLayoutEffect as Lr, useMemo as Ye, useDebugValue as nr, createElement as Sn, createContext as Ir, useState as me, useCallback as be, useEffect as pe, forwardRef as Mn } from "react";
var ye = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function $e(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pt = { exports: {} }, ne = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var or;
function $n() {
  if (or)
    return ne;
  or = 1;
  var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y;
  y = Symbol.for("react.module.reference");
  function b(p) {
    if (typeof p == "object" && p !== null) {
      var _ = p.$$typeof;
      switch (_) {
        case e:
          switch (p = p.type, p) {
            case t:
            case o:
            case r:
            case a:
            case d:
              return p;
            default:
              switch (p = p && p.$$typeof, p) {
                case c:
                case i:
                case l:
                case f:
                case u:
                case s:
                  return p;
                default:
                  return _;
              }
          }
        case n:
          return _;
      }
    }
  }
  return ne.ContextConsumer = i, ne.ContextProvider = s, ne.Element = e, ne.ForwardRef = l, ne.Fragment = t, ne.Lazy = f, ne.Memo = u, ne.Portal = n, ne.Profiler = o, ne.StrictMode = r, ne.Suspense = a, ne.SuspenseList = d, ne.isAsyncMode = function() {
    return !1;
  }, ne.isConcurrentMode = function() {
    return !1;
  }, ne.isContextConsumer = function(p) {
    return b(p) === i;
  }, ne.isContextProvider = function(p) {
    return b(p) === s;
  }, ne.isElement = function(p) {
    return typeof p == "object" && p !== null && p.$$typeof === e;
  }, ne.isForwardRef = function(p) {
    return b(p) === l;
  }, ne.isFragment = function(p) {
    return b(p) === t;
  }, ne.isLazy = function(p) {
    return b(p) === f;
  }, ne.isMemo = function(p) {
    return b(p) === u;
  }, ne.isPortal = function(p) {
    return b(p) === n;
  }, ne.isProfiler = function(p) {
    return b(p) === o;
  }, ne.isStrictMode = function(p) {
    return b(p) === r;
  }, ne.isSuspense = function(p) {
    return b(p) === a;
  }, ne.isSuspenseList = function(p) {
    return b(p) === d;
  }, ne.isValidElementType = function(p) {
    return typeof p == "string" || typeof p == "function" || p === t || p === o || p === r || p === a || p === d || p === v || typeof p == "object" && p !== null && (p.$$typeof === f || p.$$typeof === u || p.$$typeof === s || p.$$typeof === i || p.$$typeof === l || p.$$typeof === y || p.getModuleId !== void 0);
  }, ne.typeOf = b, ne;
}
var oe = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sr;
function kn() {
  return sr || (sr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), n = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), y = !1, b = !1, p = !1, _ = !1, A = !1, L;
    L = Symbol.for("react.module.reference");
    function H(Y) {
      return !!(typeof Y == "string" || typeof Y == "function" || Y === t || Y === o || A || Y === r || Y === a || Y === d || _ || Y === v || y || b || p || typeof Y == "object" && Y !== null && (Y.$$typeof === f || Y.$$typeof === u || Y.$$typeof === s || Y.$$typeof === i || Y.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Y.$$typeof === L || Y.getModuleId !== void 0));
    }
    function m(Y) {
      if (typeof Y == "object" && Y !== null) {
        var Q = Y.$$typeof;
        switch (Q) {
          case e:
            var le = Y.type;
            switch (le) {
              case t:
              case o:
              case r:
              case a:
              case d:
                return le;
              default:
                var re = le && le.$$typeof;
                switch (re) {
                  case c:
                  case i:
                  case l:
                  case f:
                  case u:
                  case s:
                    return re;
                  default:
                    return Q;
                }
            }
          case n:
            return Q;
        }
      }
    }
    var S = i, E = s, j = e, F = l, D = t, ee = f, K = u, T = n, $ = o, w = r, N = a, C = d, I = !1, B = !1;
    function X(Y) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function te(Y) {
      return B || (B = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function k(Y) {
      return m(Y) === i;
    }
    function M(Y) {
      return m(Y) === s;
    }
    function P(Y) {
      return typeof Y == "object" && Y !== null && Y.$$typeof === e;
    }
    function z(Y) {
      return m(Y) === l;
    }
    function h(Y) {
      return m(Y) === t;
    }
    function V(Y) {
      return m(Y) === f;
    }
    function x(Y) {
      return m(Y) === u;
    }
    function U(Y) {
      return m(Y) === n;
    }
    function G(Y) {
      return m(Y) === o;
    }
    function q(Y) {
      return m(Y) === r;
    }
    function g(Y) {
      return m(Y) === a;
    }
    function ce(Y) {
      return m(Y) === d;
    }
    oe.ContextConsumer = S, oe.ContextProvider = E, oe.Element = j, oe.ForwardRef = F, oe.Fragment = D, oe.Lazy = ee, oe.Memo = K, oe.Portal = T, oe.Profiler = $, oe.StrictMode = w, oe.Suspense = N, oe.SuspenseList = C, oe.isAsyncMode = X, oe.isConcurrentMode = te, oe.isContextConsumer = k, oe.isContextProvider = M, oe.isElement = P, oe.isForwardRef = z, oe.isFragment = h, oe.isLazy = V, oe.isMemo = x, oe.isPortal = U, oe.isProfiler = G, oe.isStrictMode = q, oe.isSuspense = g, oe.isSuspenseList = ce, oe.isValidElementType = H, oe.typeOf = m;
  }()), oe;
}
process.env.NODE_ENV === "production" ? Pt.exports = $n() : Pt.exports = kn();
var zt = Pt.exports;
function _n(e) {
  function n(k, M, P, z, h) {
    for (var V = 0, x = 0, U = 0, G = 0, q, g, ce = 0, Y = 0, Q, le = Q = q = 0, re = 0, he = 0, nt = 0, fe = 0, lt = P.length, ot = lt - 1, ke, J = "", de = "", Mt = "", $t = "", Ae; re < lt; ) {
      if (g = P.charCodeAt(re), re === ot && x + G + U + V !== 0 && (x !== 0 && (g = x === 47 ? 10 : 47), G = U = V = 0, lt++, ot++), x + G + U + V === 0) {
        if (re === ot && (0 < he && (J = J.replace(f, "")), 0 < J.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;
            default:
              J += P.charAt(re);
          }
          g = 59;
        }
        switch (g) {
          case 123:
            for (J = J.trim(), q = J.charCodeAt(0), Q = 1, fe = ++re; re < lt; ) {
              switch (g = P.charCodeAt(re)) {
                case 123:
                  Q++;
                  break;
                case 125:
                  Q--;
                  break;
                case 47:
                  switch (g = P.charCodeAt(re + 1)) {
                    case 42:
                    case 47:
                      e: {
                        for (le = re + 1; le < ot; ++le)
                          switch (P.charCodeAt(le)) {
                            case 47:
                              if (g === 42 && P.charCodeAt(le - 1) === 42 && re + 2 !== le) {
                                re = le + 1;
                                break e;
                              }
                              break;
                            case 10:
                              if (g === 47) {
                                re = le + 1;
                                break e;
                              }
                          }
                        re = le;
                      }
                  }
                  break;
                case 91:
                  g++;
                case 40:
                  g++;
                case 34:
                case 39:
                  for (; re++ < ot && P.charCodeAt(re) !== g; )
                    ;
              }
              if (Q === 0)
                break;
              re++;
            }
            switch (Q = P.substring(fe, re), q === 0 && (q = (J = J.replace(u, "").trim()).charCodeAt(0)), q) {
              case 64:
                switch (0 < he && (J = J.replace(f, "")), g = J.charCodeAt(1), g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    he = M;
                    break;
                  default:
                    he = N;
                }
                if (Q = n(M, he, Q, g, h + 1), fe = Q.length, 0 < I && (he = t(N, J, nt), Ae = c(3, Q, he, M, T, K, fe, g, h, z), J = he.join(""), Ae !== void 0 && (fe = (Q = Ae.trim()).length) === 0 && (g = 0, Q = "")), 0 < fe)
                  switch (g) {
                    case 115:
                      J = J.replace(S, i);
                    case 100:
                    case 109:
                    case 45:
                      Q = J + "{" + Q + "}";
                      break;
                    case 107:
                      J = J.replace(A, "$1 $2"), Q = J + "{" + Q + "}", Q = w === 1 || w === 2 && s("@" + Q, 3) ? "@-webkit-" + Q + "@" + Q : "@" + Q;
                      break;
                    default:
                      Q = J + Q, z === 112 && (Q = (de += Q, ""));
                  }
                else
                  Q = "";
                break;
              default:
                Q = n(M, t(M, J, nt), Q, z, h + 1);
            }
            Mt += Q, Q = nt = he = le = q = 0, J = "", g = P.charCodeAt(++re);
            break;
          case 125:
          case 59:
            if (J = (0 < he ? J.replace(f, "") : J).trim(), 1 < (fe = J.length))
              switch (le === 0 && (q = J.charCodeAt(0), q === 45 || 96 < q && 123 > q) && (fe = (J = J.replace(" ", ":")).length), 0 < I && (Ae = c(1, J, M, k, T, K, de.length, z, h, z)) !== void 0 && (fe = (J = Ae.trim()).length) === 0 && (J = "\0\0"), q = J.charCodeAt(0), g = J.charCodeAt(1), q) {
                case 0:
                  break;
                case 64:
                  if (g === 105 || g === 99) {
                    $t += J + P.charAt(re);
                    break;
                  }
                default:
                  J.charCodeAt(fe - 1) !== 58 && (de += o(J, q, g, J.charCodeAt(2)));
              }
            nt = he = le = q = 0, J = "", g = P.charCodeAt(++re);
        }
      }
      switch (g) {
        case 13:
        case 10:
          x === 47 ? x = 0 : 1 + q === 0 && z !== 107 && 0 < J.length && (he = 1, J += "\0"), 0 < I * X && c(0, J, M, k, T, K, de.length, z, h, z), K = 1, T++;
          break;
        case 59:
        case 125:
          if (x + G + U + V === 0) {
            K++;
            break;
          }
        default:
          switch (K++, ke = P.charAt(re), g) {
            case 9:
            case 32:
              if (G + V + x === 0)
                switch (ce) {
                  case 44:
                  case 58:
                  case 9:
                  case 32:
                    ke = "";
                    break;
                  default:
                    g !== 32 && (ke = " ");
                }
              break;
            case 0:
              ke = "\\0";
              break;
            case 12:
              ke = "\\f";
              break;
            case 11:
              ke = "\\v";
              break;
            case 38:
              G + x + V === 0 && (he = nt = 1, ke = "\f" + ke);
              break;
            case 108:
              if (G + x + V + $ === 0 && 0 < le)
                switch (re - le) {
                  case 2:
                    ce === 112 && P.charCodeAt(re - 3) === 58 && ($ = ce);
                  case 8:
                    Y === 111 && ($ = Y);
                }
              break;
            case 58:
              G + x + V === 0 && (le = re);
              break;
            case 44:
              x + U + G + V === 0 && (he = 1, ke += "\r");
              break;
            case 34:
            case 39:
              x === 0 && (G = G === g ? 0 : G === 0 ? g : G);
              break;
            case 91:
              G + x + U === 0 && V++;
              break;
            case 93:
              G + x + U === 0 && V--;
              break;
            case 41:
              G + x + V === 0 && U--;
              break;
            case 40:
              if (G + x + V === 0) {
                if (q === 0)
                  switch (2 * ce + 3 * Y) {
                    case 533:
                      break;
                    default:
                      q = 1;
                  }
                U++;
              }
              break;
            case 64:
              x + U + G + V + le + Q === 0 && (Q = 1);
              break;
            case 42:
            case 47:
              if (!(0 < G + V + U))
                switch (x) {
                  case 0:
                    switch (2 * g + 3 * P.charCodeAt(re + 1)) {
                      case 235:
                        x = 47;
                        break;
                      case 220:
                        fe = re, x = 42;
                    }
                    break;
                  case 42:
                    g === 47 && ce === 42 && fe + 2 !== re && (P.charCodeAt(fe + 2) === 33 && (de += P.substring(fe, re + 1)), ke = "", x = 0);
                }
          }
          x === 0 && (J += ke);
      }
      Y = ce, ce = g, re++;
    }
    if (fe = de.length, 0 < fe) {
      if (he = M, 0 < I && (Ae = c(2, de, he, k, T, K, fe, z, h, z), Ae !== void 0 && (de = Ae).length === 0))
        return $t + de + Mt;
      if (de = he.join(",") + "{" + de + "}", w * $ !== 0) {
        switch (w !== 2 || s(de, 2) || ($ = 0), $) {
          case 111:
            de = de.replace(H, ":-moz-$1") + de;
            break;
          case 112:
            de = de.replace(L, "::-webkit-input-$1") + de.replace(L, "::-moz-$1") + de.replace(L, ":-ms-input-$1") + de;
        }
        $ = 0;
      }
    }
    return $t + de + Mt;
  }
  function t(k, M, P) {
    var z = M.trim().split(p);
    M = z;
    var h = z.length, V = k.length;
    switch (V) {
      case 0:
      case 1:
        var x = 0;
        for (k = V === 0 ? "" : k[0] + " "; x < h; ++x)
          M[x] = r(k, M[x], P).trim();
        break;
      default:
        var U = x = 0;
        for (M = []; x < h; ++x)
          for (var G = 0; G < V; ++G)
            M[U++] = r(k[G] + " ", z[x], P).trim();
    }
    return M;
  }
  function r(k, M, P) {
    var z = M.charCodeAt(0);
    switch (33 > z && (z = (M = M.trim()).charCodeAt(0)), z) {
      case 38:
        return M.replace(_, "$1" + k.trim());
      case 58:
        return k.trim() + M.replace(_, "$1" + k.trim());
      default:
        if (0 < 1 * P && 0 < M.indexOf("\f"))
          return M.replace(_, (k.charCodeAt(0) === 58 ? "" : "$1") + k.trim());
    }
    return k + M;
  }
  function o(k, M, P, z) {
    var h = k + ";", V = 2 * M + 3 * P + 4 * z;
    if (V === 944) {
      k = h.indexOf(":", 9) + 1;
      var x = h.substring(k, h.length - 1).trim();
      return x = h.substring(0, k).trim() + x + ";", w === 1 || w === 2 && s(x, 1) ? "-webkit-" + x + x : x;
    }
    if (w === 0 || w === 2 && !s(h, 1))
      return h;
    switch (V) {
      case 1015:
        return h.charCodeAt(10) === 97 ? "-webkit-" + h + h : h;
      case 951:
        return h.charCodeAt(3) === 116 ? "-webkit-" + h + h : h;
      case 963:
        return h.charCodeAt(5) === 110 ? "-webkit-" + h + h : h;
      case 1009:
        if (h.charCodeAt(4) !== 100)
          break;
      case 969:
      case 942:
        return "-webkit-" + h + h;
      case 978:
        return "-webkit-" + h + "-moz-" + h + h;
      case 1019:
      case 983:
        return "-webkit-" + h + "-moz-" + h + "-ms-" + h + h;
      case 883:
        if (h.charCodeAt(8) === 45)
          return "-webkit-" + h + h;
        if (0 < h.indexOf("image-set(", 11))
          return h.replace(ee, "$1-webkit-$2") + h;
        break;
      case 932:
        if (h.charCodeAt(4) === 45)
          switch (h.charCodeAt(5)) {
            case 103:
              return "-webkit-box-" + h.replace("-grow", "") + "-webkit-" + h + "-ms-" + h.replace("grow", "positive") + h;
            case 115:
              return "-webkit-" + h + "-ms-" + h.replace("shrink", "negative") + h;
            case 98:
              return "-webkit-" + h + "-ms-" + h.replace("basis", "preferred-size") + h;
          }
        return "-webkit-" + h + "-ms-" + h + h;
      case 964:
        return "-webkit-" + h + "-ms-flex-" + h + h;
      case 1023:
        if (h.charCodeAt(8) !== 99)
          break;
        return x = h.substring(h.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify"), "-webkit-box-pack" + x + "-webkit-" + h + "-ms-flex-pack" + x + h;
      case 1005:
        return y.test(h) ? h.replace(v, ":-webkit-") + h.replace(v, ":-moz-") + h : h;
      case 1e3:
        switch (x = h.substring(13).trim(), M = x.indexOf("-") + 1, x.charCodeAt(0) + x.charCodeAt(M)) {
          case 226:
            x = h.replace(m, "tb");
            break;
          case 232:
            x = h.replace(m, "tb-rl");
            break;
          case 220:
            x = h.replace(m, "lr");
            break;
          default:
            return h;
        }
        return "-webkit-" + h + "-ms-" + x + h;
      case 1017:
        if (h.indexOf("sticky", 9) === -1)
          break;
      case 975:
        switch (M = (h = k).length - 10, x = (h.charCodeAt(M) === 33 ? h.substring(0, M) : h).substring(k.indexOf(":", 7) + 1).trim(), V = x.charCodeAt(0) + (x.charCodeAt(7) | 0)) {
          case 203:
            if (111 > x.charCodeAt(8))
              break;
          case 115:
            h = h.replace(x, "-webkit-" + x) + ";" + h;
            break;
          case 207:
          case 102:
            h = h.replace(x, "-webkit-" + (102 < V ? "inline-" : "") + "box") + ";" + h.replace(x, "-webkit-" + x) + ";" + h.replace(x, "-ms-" + x + "box") + ";" + h;
        }
        return h + ";";
      case 938:
        if (h.charCodeAt(5) === 45)
          switch (h.charCodeAt(6)) {
            case 105:
              return x = h.replace("-items", ""), "-webkit-" + h + "-webkit-box-" + x + "-ms-flex-" + x + h;
            case 115:
              return "-webkit-" + h + "-ms-flex-item-" + h.replace(j, "") + h;
            default:
              return "-webkit-" + h + "-ms-flex-line-pack" + h.replace("align-content", "").replace(j, "") + h;
          }
        break;
      case 973:
      case 989:
        if (h.charCodeAt(3) !== 45 || h.charCodeAt(4) === 122)
          break;
      case 931:
      case 953:
        if (D.test(k) === !0)
          return (x = k.substring(k.indexOf(":") + 1)).charCodeAt(0) === 115 ? o(k.replace("stretch", "fill-available"), M, P, z).replace(":fill-available", ":stretch") : h.replace(x, "-webkit-" + x) + h.replace(x, "-moz-" + x.replace("fill-", "")) + h;
        break;
      case 962:
        if (h = "-webkit-" + h + (h.charCodeAt(5) === 102 ? "-ms-" + h : "") + h, P + z === 211 && h.charCodeAt(13) === 105 && 0 < h.indexOf("transform", 10))
          return h.substring(0, h.indexOf(";", 27) + 1).replace(b, "$1-webkit-$2") + h;
    }
    return h;
  }
  function s(k, M) {
    var P = k.indexOf(M === 1 ? ":" : "{"), z = k.substring(0, M !== 3 ? P : 10);
    return P = k.substring(P + 1, k.length - 1), B(M !== 2 ? z : z.replace(F, "$1"), P, M);
  }
  function i(k, M) {
    var P = o(M, M.charCodeAt(0), M.charCodeAt(1), M.charCodeAt(2));
    return P !== M + ";" ? P.replace(E, " or ($1)").substring(4) : "(" + M + ")";
  }
  function c(k, M, P, z, h, V, x, U, G, q) {
    for (var g = 0, ce = M, Y; g < I; ++g)
      switch (Y = C[g].call(d, k, ce, P, z, h, V, x, U, G, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;
        default:
          ce = Y;
      }
    if (ce !== M)
      return ce;
  }
  function l(k) {
    switch (k) {
      case void 0:
      case null:
        I = C.length = 0;
        break;
      default:
        if (typeof k == "function")
          C[I++] = k;
        else if (typeof k == "object")
          for (var M = 0, P = k.length; M < P; ++M)
            l(k[M]);
        else
          X = !!k | 0;
    }
    return l;
  }
  function a(k) {
    return k = k.prefix, k !== void 0 && (B = null, k ? typeof k != "function" ? w = 1 : (w = 2, B = k) : w = 0), a;
  }
  function d(k, M) {
    var P = k;
    if (33 > P.charCodeAt(0) && (P = P.trim()), te = P, P = [te], 0 < I) {
      var z = c(-1, M, P, P, T, K, 0, 0, 0, 0);
      z !== void 0 && typeof z == "string" && (M = z);
    }
    var h = n(N, P, M, 0, 0);
    return 0 < I && (z = c(-2, h, P, P, T, K, h.length, 0, 0, 0), z !== void 0 && (h = z)), te = "", $ = 0, K = T = 1, h;
  }
  var u = /^\0+/g, f = /[\0\r\f]/g, v = /: */g, y = /zoo|gra/, b = /([,: ])(transform)/g, p = /,\r+?/g, _ = /([\t\r\n ])*\f?&/g, A = /@(k\w+)\s*(\S*)\s*/, L = /::(place)/g, H = /:(read-only)/g, m = /[svh]\w+-[tblr]{2}/, S = /\(\s*(.*)\s*\)/g, E = /([\s\S]*?);/g, j = /-self|flex-/g, F = /[^]*?(:[rp][el]a[\w-]+)[^]*/, D = /stretch|:\s*\w+\-(?:conte|avail)/, ee = /([^-])(image-set\()/, K = 1, T = 1, $ = 0, w = 1, N = [], C = [], I = 0, B = null, X = 0, te = "";
  return d.use = l, d.set = a, e !== void 0 && a(e), d;
}
var En = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};
function Tn(e) {
  var n = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return n[t] === void 0 && (n[t] = e(t)), n[t];
  };
}
var Pn = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ir = /* @__PURE__ */ Tn(
  function(e) {
    return Pn.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Ot = { exports: {} }, se = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar;
function On() {
  if (ar)
    return se;
  ar = 1;
  var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
  function L(m) {
    if (typeof m == "object" && m !== null) {
      var S = m.$$typeof;
      switch (S) {
        case n:
          switch (m = m.type, m) {
            case l:
            case a:
            case r:
            case s:
            case o:
            case u:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case c:
                case d:
                case y:
                case v:
                case i:
                  return m;
                default:
                  return S;
              }
          }
        case t:
          return S;
      }
    }
  }
  function H(m) {
    return L(m) === a;
  }
  return se.AsyncMode = l, se.ConcurrentMode = a, se.ContextConsumer = c, se.ContextProvider = i, se.Element = n, se.ForwardRef = d, se.Fragment = r, se.Lazy = y, se.Memo = v, se.Portal = t, se.Profiler = s, se.StrictMode = o, se.Suspense = u, se.isAsyncMode = function(m) {
    return H(m) || L(m) === l;
  }, se.isConcurrentMode = H, se.isContextConsumer = function(m) {
    return L(m) === c;
  }, se.isContextProvider = function(m) {
    return L(m) === i;
  }, se.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === n;
  }, se.isForwardRef = function(m) {
    return L(m) === d;
  }, se.isFragment = function(m) {
    return L(m) === r;
  }, se.isLazy = function(m) {
    return L(m) === y;
  }, se.isMemo = function(m) {
    return L(m) === v;
  }, se.isPortal = function(m) {
    return L(m) === t;
  }, se.isProfiler = function(m) {
    return L(m) === s;
  }, se.isStrictMode = function(m) {
    return L(m) === o;
  }, se.isSuspense = function(m) {
    return L(m) === u;
  }, se.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === a || m === s || m === o || m === u || m === f || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === v || m.$$typeof === i || m.$$typeof === c || m.$$typeof === d || m.$$typeof === p || m.$$typeof === _ || m.$$typeof === A || m.$$typeof === b);
  }, se.typeOf = L, se;
}
var ie = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cr;
function Rn() {
  return cr || (cr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, n = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, s = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, c = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, a = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, u = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, v = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, b = e ? Symbol.for("react.block") : 60121, p = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, A = e ? Symbol.for("react.scope") : 60119;
    function L(g) {
      return typeof g == "string" || typeof g == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      g === r || g === a || g === s || g === o || g === u || g === f || typeof g == "object" && g !== null && (g.$$typeof === y || g.$$typeof === v || g.$$typeof === i || g.$$typeof === c || g.$$typeof === d || g.$$typeof === p || g.$$typeof === _ || g.$$typeof === A || g.$$typeof === b);
    }
    function H(g) {
      if (typeof g == "object" && g !== null) {
        var ce = g.$$typeof;
        switch (ce) {
          case n:
            var Y = g.type;
            switch (Y) {
              case l:
              case a:
              case r:
              case s:
              case o:
              case u:
                return Y;
              default:
                var Q = Y && Y.$$typeof;
                switch (Q) {
                  case c:
                  case d:
                  case y:
                  case v:
                  case i:
                    return Q;
                  default:
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var m = l, S = a, E = c, j = i, F = n, D = d, ee = r, K = y, T = v, $ = t, w = s, N = o, C = u, I = !1;
    function B(g) {
      return I || (I = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), X(g) || H(g) === l;
    }
    function X(g) {
      return H(g) === a;
    }
    function te(g) {
      return H(g) === c;
    }
    function k(g) {
      return H(g) === i;
    }
    function M(g) {
      return typeof g == "object" && g !== null && g.$$typeof === n;
    }
    function P(g) {
      return H(g) === d;
    }
    function z(g) {
      return H(g) === r;
    }
    function h(g) {
      return H(g) === y;
    }
    function V(g) {
      return H(g) === v;
    }
    function x(g) {
      return H(g) === t;
    }
    function U(g) {
      return H(g) === s;
    }
    function G(g) {
      return H(g) === o;
    }
    function q(g) {
      return H(g) === u;
    }
    ie.AsyncMode = m, ie.ConcurrentMode = S, ie.ContextConsumer = E, ie.ContextProvider = j, ie.Element = F, ie.ForwardRef = D, ie.Fragment = ee, ie.Lazy = K, ie.Memo = T, ie.Portal = $, ie.Profiler = w, ie.StrictMode = N, ie.Suspense = C, ie.isAsyncMode = B, ie.isConcurrentMode = X, ie.isContextConsumer = te, ie.isContextProvider = k, ie.isElement = M, ie.isForwardRef = P, ie.isFragment = z, ie.isLazy = h, ie.isMemo = V, ie.isPortal = x, ie.isProfiler = U, ie.isStrictMode = G, ie.isSuspense = q, ie.isValidElementType = L, ie.typeOf = H;
  }()), ie;
}
process.env.NODE_ENV === "production" ? Ot.exports = On() : Ot.exports = Rn();
var An = Ot.exports, jt = An, Dn = {
  childContextTypes: !0,
  contextType: !0,
  contextTypes: !0,
  defaultProps: !0,
  displayName: !0,
  getDefaultProps: !0,
  getDerivedStateFromError: !0,
  getDerivedStateFromProps: !0,
  mixins: !0,
  propTypes: !0,
  type: !0
}, Yn = {
  name: !0,
  length: !0,
  prototype: !0,
  caller: !0,
  callee: !0,
  arguments: !0,
  arity: !0
}, Ln = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Nr = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, Bt = {};
Bt[jt.ForwardRef] = Ln;
Bt[jt.Memo] = Nr;
function lr(e) {
  return jt.isMemo(e) ? Nr : Bt[e.$$typeof] || Dn;
}
var In = Object.defineProperty, Nn = Object.getOwnPropertyNames, dr = Object.getOwnPropertySymbols, Hn = Object.getOwnPropertyDescriptor, Wn = Object.getPrototypeOf, ur = Object.prototype;
function Hr(e, n, t) {
  if (typeof n != "string") {
    if (ur) {
      var r = Wn(n);
      r && r !== ur && Hr(e, r, t);
    }
    var o = Nn(n);
    dr && (o = o.concat(dr(n)));
    for (var s = lr(e), i = lr(n), c = 0; c < o.length; ++c) {
      var l = o[c];
      if (!Yn[l] && !(t && t[l]) && !(i && i[l]) && !(s && s[l])) {
        var a = Hn(n, l);
        try {
          In(e, l, a);
        } catch {
        }
      }
    }
  }
  return e;
}
var Zn = Hr;
const Fn = /* @__PURE__ */ $e(Zn);
function _e() {
  return (_e = Object.assign || function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var t = arguments[n];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
    }
    return e;
  }).apply(this, arguments);
}
var hr = function(e, n) {
  for (var t = [e[0]], r = 0, o = n.length; r < o; r += 1)
    t.push(n[r], e[r + 1]);
  return t;
}, Rt = function(e) {
  return e !== null && typeof e == "object" && (e.toString ? e.toString() : Object.prototype.toString.call(e)) === "[object Object]" && !zt.typeOf(e);
}, pt = Object.freeze([]), Le = Object.freeze({});
function Ue(e) {
  return typeof e == "function";
}
function At(e) {
  return process.env.NODE_ENV !== "production" && typeof e == "string" && e || e.displayName || e.name || "Component";
}
function Vt(e) {
  return e && typeof e.styledComponentId == "string";
}
var Xe = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", Gt = typeof window < "u" && "HTMLElement" in window, zn = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" ? process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY : process.env.NODE_ENV !== "production")), jn = {}, Bn = process.env.NODE_ENV !== "production" ? { 1: `Cannot create styled-component for component: %s.

`, 2: `Can't collect styles once you've consumed a \`ServerStyleSheet\`'s styles! \`ServerStyleSheet\` is a one off instance for each server-side render cycle.

- Are you trying to reuse it across renders?
- Are you accidentally calling collectStyles twice?

`, 3: `Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.

`, 4: `The \`StyleSheetManager\` expects a valid target or sheet prop!

- Does this error occur on the client and is your target falsy?
- Does this error occur on the server and is the sheet falsy?

`, 5: `The clone method cannot be used on the client!

- Are you running in a client-like environment on the server?
- Are you trying to run SSR on the client?

`, 6: `Trying to insert a new style tag, but the given Node is unmounted!

- Are you using a custom target that isn't mounted?
- Does your document not have a valid head element?
- Have you accidentally removed a style tag manually?

`, 7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n', 8: `ThemeProvider: Please make your "theme" prop an object.

`, 9: "Missing document `<head>`\n\n", 10: `Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021

`, 11: `_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.

`, 12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n", 13: `%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.

`, 14: `ThemeProvider: "theme" prop is required.

`, 15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n", 16: `Reached the limit of how many styled components may be created at group %s.
You may only create up to 1,073,741,824 components. If you're creating components dynamically,
as for instance in your render method then you may be running into this limitation.

`, 17: `CSSStyleSheet could not be found on HTMLStyleElement.
Has styled-components' style tag been unmounted or altered by another script?
` } : {};
function Vn() {
  for (var e = arguments.length <= 0 ? void 0 : arguments[0], n = [], t = 1, r = arguments.length; t < r; t += 1)
    n.push(t < 0 || arguments.length <= t ? void 0 : arguments[t]);
  return n.forEach(function(o) {
    e = e.replace(/%[a-z]/, o);
  }), e;
}
function Oe(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  throw process.env.NODE_ENV === "production" ? new Error("An error occurred. See https://git.io/JUIaE#" + e + " for more information." + (t.length > 0 ? " Args: " + t.join(", ") : "")) : new Error(Vn.apply(void 0, [Bn[e]].concat(t)).trim());
}
var Gn = function() {
  function e(t) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = t;
  }
  var n = e.prototype;
  return n.indexOfGroup = function(t) {
    for (var r = 0, o = 0; o < t; o++)
      r += this.groupSizes[o];
    return r;
  }, n.insertRules = function(t, r) {
    if (t >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, i = s; t >= i; )
        (i <<= 1) < 0 && Oe(16, "" + t);
      this.groupSizes = new Uint32Array(i), this.groupSizes.set(o), this.length = i;
      for (var c = s; c < i; c++)
        this.groupSizes[c] = 0;
    }
    for (var l = this.indexOfGroup(t + 1), a = 0, d = r.length; a < d; a++)
      this.tag.insertRule(l, r[a]) && (this.groupSizes[t]++, l++);
  }, n.clearGroup = function(t) {
    if (t < this.length) {
      var r = this.groupSizes[t], o = this.indexOfGroup(t), s = o + r;
      this.groupSizes[t] = 0;
      for (var i = o; i < s; i++)
        this.tag.deleteRule(o);
    }
  }, n.getGroup = function(t) {
    var r = "";
    if (t >= this.length || this.groupSizes[t] === 0)
      return r;
    for (var o = this.groupSizes[t], s = this.indexOfGroup(t), i = s + o, c = s; c < i; c++)
      r += this.tag.getRule(c) + `/*!sc*/
`;
    return r;
  }, e;
}(), ft = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), it = 1, dt = function(e) {
  if (ft.has(e))
    return ft.get(e);
  for (; mt.has(it); )
    it++;
  var n = it++;
  return process.env.NODE_ENV !== "production" && ((0 | n) < 0 || n > 1 << 30) && Oe(16, "" + n), ft.set(e, n), mt.set(n, e), n;
}, Un = function(e) {
  return mt.get(e);
}, Xn = function(e, n) {
  n >= it && (it = n + 1), ft.set(e, n), mt.set(n, e);
}, Jn = "style[" + Xe + '][data-styled-version="5.3.8"]', qn = new RegExp("^" + Xe + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'), Kn = function(e, n, t) {
  for (var r, o = t.split(","), s = 0, i = o.length; s < i; s++)
    (r = o[s]) && e.registerName(n, r);
}, Qn = function(e, n) {
  for (var t = (n.textContent || "").split(`/*!sc*/
`), r = [], o = 0, s = t.length; o < s; o++) {
    var i = t[o].trim();
    if (i) {
      var c = i.match(qn);
      if (c) {
        var l = 0 | parseInt(c[1], 10), a = c[2];
        l !== 0 && (Xn(a, l), Kn(e, a, c[3]), e.getTag().insertRules(l, r)), r.length = 0;
      } else
        r.push(i);
    }
  }
}, eo = function() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}, Wr = function(e) {
  var n = document.head, t = e || n, r = document.createElement("style"), o = function(c) {
    for (var l = c.childNodes, a = l.length; a >= 0; a--) {
      var d = l[a];
      if (d && d.nodeType === 1 && d.hasAttribute(Xe))
        return d;
    }
  }(t), s = o !== void 0 ? o.nextSibling : null;
  r.setAttribute(Xe, "active"), r.setAttribute("data-styled-version", "5.3.8");
  var i = eo();
  return i && r.setAttribute("nonce", i), t.insertBefore(r, s), r;
}, to = function() {
  function e(t) {
    var r = this.element = Wr(t);
    r.appendChild(document.createTextNode("")), this.sheet = function(o) {
      if (o.sheet)
        return o.sheet;
      for (var s = document.styleSheets, i = 0, c = s.length; i < c; i++) {
        var l = s[i];
        if (l.ownerNode === o)
          return l;
      }
      Oe(17);
    }(r), this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    try {
      return this.sheet.insertRule(r, t), this.length++, !0;
    } catch {
      return !1;
    }
  }, n.deleteRule = function(t) {
    this.sheet.deleteRule(t), this.length--;
  }, n.getRule = function(t) {
    var r = this.sheet.cssRules[t];
    return r !== void 0 && typeof r.cssText == "string" ? r.cssText : "";
  }, e;
}(), ro = function() {
  function e(t) {
    var r = this.element = Wr(t);
    this.nodes = r.childNodes, this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    if (t <= this.length && t >= 0) {
      var o = document.createTextNode(r), s = this.nodes[t];
      return this.element.insertBefore(o, s || null), this.length++, !0;
    }
    return !1;
  }, n.deleteRule = function(t) {
    this.element.removeChild(this.nodes[t]), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.nodes[t].textContent : "";
  }, e;
}(), no = function() {
  function e(t) {
    this.rules = [], this.length = 0;
  }
  var n = e.prototype;
  return n.insertRule = function(t, r) {
    return t <= this.length && (this.rules.splice(t, 0, r), this.length++, !0);
  }, n.deleteRule = function(t) {
    this.rules.splice(t, 1), this.length--;
  }, n.getRule = function(t) {
    return t < this.length ? this.rules[t] : "";
  }, e;
}(), fr = Gt, oo = { isServer: !Gt, useCSSOMInjection: !zn }, vt = function() {
  function e(t, r, o) {
    t === void 0 && (t = Le), r === void 0 && (r = {}), this.options = _e({}, oo, {}, t), this.gs = r, this.names = new Map(o), this.server = !!t.isServer, !this.server && Gt && fr && (fr = !1, function(s) {
      for (var i = document.querySelectorAll(Jn), c = 0, l = i.length; c < l; c++) {
        var a = i[c];
        a && a.getAttribute(Xe) !== "active" && (Qn(s, a), a.parentNode && a.parentNode.removeChild(a));
      }
    }(this));
  }
  e.registerId = function(t) {
    return dt(t);
  };
  var n = e.prototype;
  return n.reconstructWithOptions = function(t, r) {
    return r === void 0 && (r = !0), new e(_e({}, this.options, {}, t), this.gs, r && this.names || void 0);
  }, n.allocateGSInstance = function(t) {
    return this.gs[t] = (this.gs[t] || 0) + 1;
  }, n.getTag = function() {
    return this.tag || (this.tag = (o = (r = this.options).isServer, s = r.useCSSOMInjection, i = r.target, t = o ? new no(i) : s ? new to(i) : new ro(i), new Gn(t)));
    var t, r, o, s, i;
  }, n.hasNameForId = function(t, r) {
    return this.names.has(t) && this.names.get(t).has(r);
  }, n.registerName = function(t, r) {
    if (dt(t), this.names.has(t))
      this.names.get(t).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(t, o);
    }
  }, n.insertRules = function(t, r, o) {
    this.registerName(t, r), this.getTag().insertRules(dt(t), o);
  }, n.clearNames = function(t) {
    this.names.has(t) && this.names.get(t).clear();
  }, n.clearRules = function(t) {
    this.getTag().clearGroup(dt(t)), this.clearNames(t);
  }, n.clearTag = function() {
    this.tag = void 0;
  }, n.toString = function() {
    return function(t) {
      for (var r = t.getTag(), o = r.length, s = "", i = 0; i < o; i++) {
        var c = Un(i);
        if (c !== void 0) {
          var l = t.names.get(c), a = r.getGroup(i);
          if (l && a && l.size) {
            var d = Xe + ".g" + i + '[id="' + c + '"]', u = "";
            l !== void 0 && l.forEach(function(f) {
              f.length > 0 && (u += f + ",");
            }), s += "" + a + d + '{content:"' + u + `"}/*!sc*/
`;
          }
        }
      }
      return s;
    }(this);
  }, e;
}(), so = /(a)(d)/gi, pr = function(e) {
  return String.fromCharCode(e + (e > 25 ? 39 : 97));
};
function Dt(e) {
  var n, t = "";
  for (n = Math.abs(e); n > 52; n = n / 52 | 0)
    t = pr(n % 52) + t;
  return (pr(n % 52) + t).replace(so, "$1-$2");
}
var He = function(e, n) {
  for (var t = n.length; t; )
    e = 33 * e ^ n.charCodeAt(--t);
  return e;
}, Zr = function(e) {
  return He(5381, e);
};
function Fr(e) {
  for (var n = 0; n < e.length; n += 1) {
    var t = e[n];
    if (Ue(t) && !Vt(t))
      return !1;
  }
  return !0;
}
var io = Zr("5.3.8"), ao = function() {
  function e(n, t, r) {
    this.rules = n, this.staticRulesId = "", this.isStatic = process.env.NODE_ENV === "production" && (r === void 0 || r.isStatic) && Fr(n), this.componentId = t, this.baseHash = He(io, t), this.baseStyle = r, vt.registerId(t);
  }
  return e.prototype.generateAndInjectStyles = function(n, t, r) {
    var o = this.componentId, s = [];
    if (this.baseStyle && s.push(this.baseStyle.generateAndInjectStyles(n, t, r)), this.isStatic && !r.hash)
      if (this.staticRulesId && t.hasNameForId(o, this.staticRulesId))
        s.push(this.staticRulesId);
      else {
        var i = ze(this.rules, n, t, r).join(""), c = Dt(He(this.baseHash, i) >>> 0);
        if (!t.hasNameForId(o, c)) {
          var l = r(i, "." + c, void 0, o);
          t.insertRules(o, c, l);
        }
        s.push(c), this.staticRulesId = c;
      }
    else {
      for (var a = this.rules.length, d = He(this.baseHash, r.hash), u = "", f = 0; f < a; f++) {
        var v = this.rules[f];
        if (typeof v == "string")
          u += v, process.env.NODE_ENV !== "production" && (d = He(d, v + f));
        else if (v) {
          var y = ze(v, n, t, r), b = Array.isArray(y) ? y.join("") : y;
          d = He(d, b + f), u += b;
        }
      }
      if (u) {
        var p = Dt(d >>> 0);
        if (!t.hasNameForId(o, p)) {
          var _ = r(u, "." + p, void 0, o);
          t.insertRules(o, p, _);
        }
        s.push(p);
      }
    }
    return s.join(" ");
  }, e;
}(), co = /^\s*\/\/.*$/gm, lo = [":", "[", ".", "#"];
function uo(e) {
  var n, t, r, o, s = e === void 0 ? Le : e, i = s.options, c = i === void 0 ? Le : i, l = s.plugins, a = l === void 0 ? pt : l, d = new _n(c), u = [], f = function(b) {
    function p(_) {
      if (_)
        try {
          b(_ + "}");
        } catch {
        }
    }
    return function(_, A, L, H, m, S, E, j, F, D) {
      switch (_) {
        case 1:
          if (F === 0 && A.charCodeAt(0) === 64)
            return b(A + ";"), "";
          break;
        case 2:
          if (j === 0)
            return A + "/*|*/";
          break;
        case 3:
          switch (j) {
            case 102:
            case 112:
              return b(L[0] + A), "";
            default:
              return A + (D === 0 ? "/*|*/" : "");
          }
        case -2:
          A.split("/*|*/}").forEach(p);
      }
    };
  }(function(b) {
    u.push(b);
  }), v = function(b, p, _) {
    return p === 0 && lo.indexOf(_[t.length]) !== -1 || _.match(o) ? b : "." + n;
  };
  function y(b, p, _, A) {
    A === void 0 && (A = "&");
    var L = b.replace(co, ""), H = p && _ ? _ + " " + p + " { " + L + " }" : L;
    return n = A, t = p, r = new RegExp("\\" + t + "\\b", "g"), o = new RegExp("(\\" + t + "\\b){2,}"), d(_ || !p ? "" : p, H);
  }
  return d.use([].concat(a, [function(b, p, _) {
    b === 2 && _.length && _[0].lastIndexOf(t) > 0 && (_[0] = _[0].replace(r, v));
  }, f, function(b) {
    if (b === -2) {
      var p = u;
      return u = [], p;
    }
  }])), y.hash = a.length ? a.reduce(function(b, p) {
    return p.name || Oe(15), He(b, p.name);
  }, 5381).toString() : "", y;
}
var zr = Fe.createContext();
zr.Consumer;
var jr = Fe.createContext(), ho = (jr.Consumer, new vt()), Yt = uo();
function Br() {
  return Ne(zr) || ho;
}
function Vr() {
  return Ne(jr) || Yt;
}
var Gr = function() {
  function e(n, t) {
    var r = this;
    this.inject = function(o, s) {
      s === void 0 && (s = Yt);
      var i = r.name + s.hash;
      o.hasNameForId(r.id, i) || o.insertRules(r.id, i, s(r.rules, i, "@keyframes"));
    }, this.toString = function() {
      return Oe(12, String(r.name));
    }, this.name = n, this.id = "sc-keyframes-" + n, this.rules = t;
  }
  return e.prototype.getName = function(n) {
    return n === void 0 && (n = Yt), this.name + n.hash;
  }, e;
}(), fo = /([A-Z])/, po = /([A-Z])/g, mo = /^ms-/, vo = function(e) {
  return "-" + e.toLowerCase();
};
function mr(e) {
  return fo.test(e) ? e.replace(po, vo).replace(mo, "-ms-") : e;
}
var vr = function(e) {
  return e == null || e === !1 || e === "";
};
function ze(e, n, t, r) {
  if (Array.isArray(e)) {
    for (var o, s = [], i = 0, c = e.length; i < c; i += 1)
      (o = ze(e[i], n, t, r)) !== "" && (Array.isArray(o) ? s.push.apply(s, o) : s.push(o));
    return s;
  }
  if (vr(e))
    return "";
  if (Vt(e))
    return "." + e.styledComponentId;
  if (Ue(e)) {
    if (typeof (a = e) != "function" || a.prototype && a.prototype.isReactComponent || !n)
      return e;
    var l = e(n);
    return process.env.NODE_ENV !== "production" && zt.isElement(l) && console.warn(At(e) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), ze(l, n, t, r);
  }
  var a;
  return e instanceof Gr ? t ? (e.inject(t, r), e.getName(r)) : e : Rt(e) ? function d(u, f) {
    var v, y, b = [];
    for (var p in u)
      u.hasOwnProperty(p) && !vr(u[p]) && (Array.isArray(u[p]) && u[p].isCss || Ue(u[p]) ? b.push(mr(p) + ":", u[p], ";") : Rt(u[p]) ? b.push.apply(b, d(u[p], p)) : b.push(mr(p) + ": " + (v = p, (y = u[p]) == null || typeof y == "boolean" || y === "" ? "" : typeof y != "number" || y === 0 || v in En ? String(y).trim() : y + "px") + ";"));
    return f ? [f + " {"].concat(b, ["}"]) : b;
  }(e) : e.toString();
}
var yr = function(e) {
  return Array.isArray(e) && (e.isCss = !0), e;
};
function Ut(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  return Ue(e) || Rt(e) ? yr(ze(hr(pt, [e].concat(t)))) : t.length === 0 && e.length === 1 && typeof e[0] == "string" ? e : yr(ze(hr(e, t)));
}
var gr = /invalid hook call/i, ut = /* @__PURE__ */ new Set(), Ur = function(e, n) {
  if (process.env.NODE_ENV !== "production") {
    var t = "The component " + e + (n ? ' with the id of "' + n + '"' : "") + ` has been created dynamically.
You may see this warning because you've called styled inside another component.
To resolve this only create new StyledComponents outside of any render method and function component.`, r = console.error;
    try {
      var o = !0;
      console.error = function(s) {
        if (gr.test(s))
          o = !1, ut.delete(t);
        else {
          for (var i = arguments.length, c = new Array(i > 1 ? i - 1 : 0), l = 1; l < i; l++)
            c[l - 1] = arguments[l];
          r.apply(void 0, [s].concat(c));
        }
      }, xe(), o && !ut.has(t) && (console.warn(t), ut.add(t));
    } catch (s) {
      gr.test(s.message) && ut.delete(t);
    } finally {
      console.error = r;
    }
  }
}, Xr = function(e, n, t) {
  return t === void 0 && (t = Le), e.theme !== t.theme && e.theme || n || t.theme;
}, yo = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, go = /(^-|-$)/g;
function kt(e) {
  return e.replace(yo, "-").replace(go, "");
}
var Xt = function(e) {
  return Dt(Zr(e) >>> 0);
};
function ht(e) {
  return typeof e == "string" && (process.env.NODE_ENV === "production" || e.charAt(0) === e.charAt(0).toLowerCase());
}
var Lt = function(e) {
  return typeof e == "function" || typeof e == "object" && e !== null && !Array.isArray(e);
}, wo = function(e) {
  return e !== "__proto__" && e !== "constructor" && e !== "prototype";
};
function bo(e, n, t) {
  var r = e[t];
  Lt(n) && Lt(r) ? Jr(r, n) : e[t] = n;
}
function Jr(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  for (var o = 0, s = t; o < s.length; o++) {
    var i = s[o];
    if (Lt(i))
      for (var c in i)
        wo(c) && bo(e, i[c], c);
  }
  return e;
}
var Je = Fe.createContext();
Je.Consumer;
function xo(e) {
  var n = Ne(Je), t = Ye(function() {
    return function(r, o) {
      if (!r)
        return Oe(14);
      if (Ue(r)) {
        var s = r(o);
        return process.env.NODE_ENV === "production" || s !== null && !Array.isArray(s) && typeof s == "object" ? s : Oe(7);
      }
      return Array.isArray(r) || typeof r != "object" ? Oe(8) : o ? _e({}, o, {}, r) : r;
    }(e.theme, n);
  }, [e.theme, n]);
  return e.children ? Fe.createElement(Je.Provider, { value: t }, e.children) : null;
}
var _t = {};
function qr(e, n, t) {
  var r = Vt(e), o = !ht(e), s = n.attrs, i = s === void 0 ? pt : s, c = n.componentId, l = c === void 0 ? function(A, L) {
    var H = typeof A != "string" ? "sc" : kt(A);
    _t[H] = (_t[H] || 0) + 1;
    var m = H + "-" + Xt("5.3.8" + H + _t[H]);
    return L ? L + "-" + m : m;
  }(n.displayName, n.parentComponentId) : c, a = n.displayName, d = a === void 0 ? function(A) {
    return ht(A) ? "styled." + A : "Styled(" + At(A) + ")";
  }(e) : a, u = n.displayName && n.componentId ? kt(n.displayName) + "-" + n.componentId : n.componentId || l, f = r && e.attrs ? Array.prototype.concat(e.attrs, i).filter(Boolean) : i, v = n.shouldForwardProp;
  r && e.shouldForwardProp && (v = n.shouldForwardProp ? function(A, L, H) {
    return e.shouldForwardProp(A, L, H) && n.shouldForwardProp(A, L, H);
  } : e.shouldForwardProp);
  var y, b = new ao(t, u, r ? e.componentStyle : void 0), p = b.isStatic && i.length === 0, _ = function(A, L) {
    return function(H, m, S, E) {
      var j = H.attrs, F = H.componentStyle, D = H.defaultProps, ee = H.foldedComponentIds, K = H.shouldForwardProp, T = H.styledComponentId, $ = H.target;
      process.env.NODE_ENV !== "production" && nr(T);
      var w = function(z, h, V) {
        z === void 0 && (z = Le);
        var x = _e({}, h, { theme: z }), U = {};
        return V.forEach(function(G) {
          var q, g, ce, Y = G;
          for (q in Ue(Y) && (Y = Y(x)), Y)
            x[q] = U[q] = q === "className" ? (g = U[q], ce = Y[q], g && ce ? g + " " + ce : g || ce) : Y[q];
        }), [x, U];
      }(Xr(m, Ne(Je), D) || Le, m, j), N = w[0], C = w[1], I = function(z, h, V, x) {
        var U = Br(), G = Vr(), q = h ? z.generateAndInjectStyles(Le, U, G) : z.generateAndInjectStyles(V, U, G);
        return process.env.NODE_ENV !== "production" && nr(q), process.env.NODE_ENV !== "production" && !h && x && x(q), q;
      }(F, E, N, process.env.NODE_ENV !== "production" ? H.warnTooManyClasses : void 0), B = S, X = C.$as || m.$as || C.as || m.as || $, te = ht(X), k = C !== m ? _e({}, m, {}, C) : m, M = {};
      for (var P in k)
        P[0] !== "$" && P !== "as" && (P === "forwardedAs" ? M.as = k[P] : (K ? K(P, ir, X) : !te || ir(P)) && (M[P] = k[P]));
      return m.style && C.style !== m.style && (M.style = _e({}, m.style, {}, C.style)), M.className = Array.prototype.concat(ee, T, I !== T ? I : null, m.className, C.className).filter(Boolean).join(" "), M.ref = B, Sn(X, M);
    }(y, A, L, p);
  };
  return _.displayName = d, (y = Fe.forwardRef(_)).attrs = f, y.componentStyle = b, y.displayName = d, y.shouldForwardProp = v, y.foldedComponentIds = r ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : pt, y.styledComponentId = u, y.target = r ? e.target : e, y.withComponent = function(A) {
    var L = n.componentId, H = function(S, E) {
      if (S == null)
        return {};
      var j, F, D = {}, ee = Object.keys(S);
      for (F = 0; F < ee.length; F++)
        j = ee[F], E.indexOf(j) >= 0 || (D[j] = S[j]);
      return D;
    }(n, ["componentId"]), m = L && L + "-" + (ht(A) ? A : kt(At(A)));
    return qr(A, _e({}, H, { attrs: f, componentId: m }), t);
  }, Object.defineProperty(y, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(A) {
    this._foldedDefaultProps = r ? Jr({}, e.defaultProps, A) : A;
  } }), process.env.NODE_ENV !== "production" && (Ur(d, u), y.warnTooManyClasses = function(A, L) {
    var H = {}, m = !1;
    return function(S) {
      if (!m && (H[S] = !0, Object.keys(H).length >= 200)) {
        var E = L ? ' with the id of "' + L + '"' : "";
        console.warn("Over 200 classes were generated for component " + A + E + `.
Consider using the attrs method, together with a style object for frequently changed styles.
Example:
  const Component = styled.div.attrs(props => ({
    style: {
      background: props.background,
    },
  }))\`width: 100%;\`

  <Component />`), m = !0, H = {};
      }
    };
  }(d, u)), y.toString = function() {
    return "." + y.styledComponentId;
  }, o && Fn(y, e, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0, withComponent: !0 }), y;
}
var It = function(e) {
  return function n(t, r, o) {
    if (o === void 0 && (o = Le), !zt.isValidElementType(r))
      return Oe(1, String(r));
    var s = function() {
      return t(r, o, Ut.apply(void 0, arguments));
    };
    return s.withConfig = function(i) {
      return n(t, r, _e({}, o, {}, i));
    }, s.attrs = function(i) {
      return n(t, r, _e({}, o, { attrs: Array.prototype.concat(o.attrs, i).filter(Boolean) }));
    }, s;
  }(qr, e);
};
["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach(function(e) {
  It[e] = It(e);
});
var Co = function() {
  function e(t, r) {
    this.rules = t, this.componentId = r, this.isStatic = Fr(t), vt.registerId(this.componentId + 1);
  }
  var n = e.prototype;
  return n.createStyles = function(t, r, o, s) {
    var i = s(ze(this.rules, r, o, s).join(""), ""), c = this.componentId + t;
    o.insertRules(c, c, i);
  }, n.removeStyles = function(t, r) {
    r.clearRules(this.componentId + t);
  }, n.renderStyles = function(t, r, o, s) {
    t > 2 && vt.registerId(this.componentId + t), this.removeStyles(t, o), this.createStyles(t, r, o, s);
  }, e;
}();
function So(e) {
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Ut.apply(void 0, [e].concat(t)), s = "sc-global-" + Xt(JSON.stringify(o)), i = new Co(o, s);
  function c(a) {
    var d = Br(), u = Vr(), f = Ne(Je), v = xe(d.allocateGSInstance(s)).current;
    return process.env.NODE_ENV !== "production" && Fe.Children.count(a.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), process.env.NODE_ENV !== "production" && o.some(function(y) {
      return typeof y == "string" && y.indexOf("@import") !== -1;
    }) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), d.server && l(v, a, d, f, u), Lr(function() {
      if (!d.server)
        return l(v, a, d, f, u), function() {
          return i.removeStyles(v, d);
        };
    }, [v, a, d, f, u]), null;
  }
  function l(a, d, u, f, v) {
    if (i.isStatic)
      i.renderStyles(a, jn, u, v);
    else {
      var y = _e({}, d, { theme: Xr(d, f, c.defaultProps) });
      i.renderStyles(a, y, u, v);
    }
  }
  return process.env.NODE_ENV !== "production" && Ur(s), Fe.memo(c);
}
function Mo(e) {
  process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
  for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++)
    t[r - 1] = arguments[r];
  var o = Ut.apply(void 0, [e].concat(t)).join(""), s = Xt(o);
  return new Gr(s, o);
}
var Be = function() {
  return Ne(Je);
};
process.env.NODE_ENV !== "production" && typeof navigator < "u" && navigator.product === "ReactNative" && console.warn(`It looks like you've imported 'styled-components' on React Native.
Perhaps you're looking to import 'styled-components/native'?
Read more about this at https://www.styled-components.com/docs/basics#react-native`), process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "test" && typeof window < "u" && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, window["__styled-components-init__"] === 1 && console.warn(`It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.

See https://s-c.sh/2BAXzed for more info.`), window["__styled-components-init__"] += 1);
const W = It, st = "reactSchedulerOutsideWrapper", $o = So`

  #${st} {
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
    margin: 0;
  }

 #${st} *,
 #${st} *:before,
 #${st} *:after {
    box-sizing: inherit;
    font-family: inherit;
    line-height: inherit;
  }
`, ko = {
  mode: "light",
  navHeight: "44px",
  colors: {
    background: "#FFFFFF",
    gridBackground: "#FFFFFF",
    primary: "#F8F8FD",
    secondary: "#E6F3FF",
    tertiary: "#C9E5FF",
    textPrimary: "#1C222F",
    textSecondary: "#FFFFFF",
    placeholder: "#777777",
    button: "#FFFFFF",
    border: "#D2D2D2",
    tooltip: "#3B3C5F",
    hover: "#E6F3FF",
    disabled: "#777777",
    warning: "#EF4444",
    defaultTile: "#728DE2",
    accent: "#0A11EB"
  }
}, _o = {
  mode: "dark",
  navHeight: "44px",
  colors: {
    background: "#161B22",
    gridBackground: "#1E252E",
    primary: "#303b49",
    secondary: "#444e5b",
    tertiary: "#6E757F",
    textPrimary: "#DADCE0",
    textSecondary: "#EAEBED",
    placeholder: "#bbbbbb",
    button: "#60676f",
    border: "#2C333A",
    hover: "#303439",
    tooltip: "#3B3C5F",
    disabled: "#38414a",
    warning: "#FF4C4C",
    defaultTile: "#728DE2",
    accent: "#1798c2"
  }
}, Qe = `
margin: 0;
padding: 0;
`, Kr = `
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
`;
W.div`
  margin: 10rem 10rem;
  position: relative;
  width: 40vw;
  height: 40vh;
`;
const ge = 50, Re = 24, et = 16, Ze = 40, qe = Ze + et + Re, Jt = 40, at = 40, Eo = Jt + at, Ie = 84, Qr = 100, we = 56, Me = 196, Te = 12, Pe = 4, ve = 50, Ke = 24, ct = 16, Nt = 40, To = Ke + ct + Nt, wr = 1, br = 52, Ce = {
  topRow: "600 14px Inter",
  middleRow: "400 10px Inter",
  bottomRow: {
    name: "600 14px Inter",
    number: "600 10px Inter"
  }
}, We = 3, Po = 1.6, Oo = 4.5, yt = 12, gt = 24, Ro = "reactSchedulerCanvasHeaderWrapper", en = "reactSchedulerCanvasWrapper", je = st, Ao = 4, Do = 48, De = 5, Yo = 40, xr = 8, qt = Re / 2 + 2, Lo = at / 2 + 2, tn = et / 2 + Re + 1, Io = at / 2 + Jt + 1, Cr = 2, Sr = 6, ue = 60;
var rn = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    var t = 1e3, r = 6e4, o = 36e5, s = "millisecond", i = "second", c = "minute", l = "hour", a = "day", d = "week", u = "month", f = "quarter", v = "year", y = "date", b = "Invalid Date", p = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, _ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, A = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(T) {
      var $ = ["th", "st", "nd", "rd"], w = T % 100;
      return "[" + T + ($[(w - 20) % 10] || $[w] || $[0]) + "]";
    } }, L = function(T, $, w) {
      var N = String(T);
      return !N || N.length >= $ ? T : "" + Array($ + 1 - N.length).join(w) + T;
    }, H = { s: L, z: function(T) {
      var $ = -T.utcOffset(), w = Math.abs($), N = Math.floor(w / 60), C = w % 60;
      return ($ <= 0 ? "+" : "-") + L(N, 2, "0") + ":" + L(C, 2, "0");
    }, m: function T($, w) {
      if ($.date() < w.date())
        return -T(w, $);
      var N = 12 * (w.year() - $.year()) + (w.month() - $.month()), C = $.clone().add(N, u), I = w - C < 0, B = $.clone().add(N + (I ? -1 : 1), u);
      return +(-(N + (w - C) / (I ? C - B : B - C)) || 0);
    }, a: function(T) {
      return T < 0 ? Math.ceil(T) || 0 : Math.floor(T);
    }, p: function(T) {
      return { M: u, y: v, w: d, d: a, D: y, h: l, m: c, s: i, ms: s, Q: f }[T] || String(T || "").toLowerCase().replace(/s$/, "");
    }, u: function(T) {
      return T === void 0;
    } }, m = "en", S = {};
    S[m] = A;
    var E = function(T) {
      return T instanceof ee;
    }, j = function T($, w, N) {
      var C;
      if (!$)
        return m;
      if (typeof $ == "string") {
        var I = $.toLowerCase();
        S[I] && (C = I), w && (S[I] = w, C = I);
        var B = $.split("-");
        if (!C && B.length > 1)
          return T(B[0]);
      } else {
        var X = $.name;
        S[X] = $, C = X;
      }
      return !N && C && (m = C), C || !N && m;
    }, F = function(T, $) {
      if (E(T))
        return T.clone();
      var w = typeof $ == "object" ? $ : {};
      return w.date = T, w.args = arguments, new ee(w);
    }, D = H;
    D.l = j, D.i = E, D.w = function(T, $) {
      return F(T, { locale: $.$L, utc: $.$u, x: $.$x, $offset: $.$offset });
    };
    var ee = function() {
      function T(w) {
        this.$L = j(w.locale, null, !0), this.parse(w);
      }
      var $ = T.prototype;
      return $.parse = function(w) {
        this.$d = function(N) {
          var C = N.date, I = N.utc;
          if (C === null)
            return /* @__PURE__ */ new Date(NaN);
          if (D.u(C))
            return /* @__PURE__ */ new Date();
          if (C instanceof Date)
            return new Date(C);
          if (typeof C == "string" && !/Z$/i.test(C)) {
            var B = C.match(p);
            if (B) {
              var X = B[2] - 1 || 0, te = (B[7] || "0").substring(0, 3);
              return I ? new Date(Date.UTC(B[1], X, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, te)) : new Date(B[1], X, B[3] || 1, B[4] || 0, B[5] || 0, B[6] || 0, te);
            }
          }
          return new Date(C);
        }(w), this.$x = w.x || {}, this.init();
      }, $.init = function() {
        var w = this.$d;
        this.$y = w.getFullYear(), this.$M = w.getMonth(), this.$D = w.getDate(), this.$W = w.getDay(), this.$H = w.getHours(), this.$m = w.getMinutes(), this.$s = w.getSeconds(), this.$ms = w.getMilliseconds();
      }, $.$utils = function() {
        return D;
      }, $.isValid = function() {
        return this.$d.toString() !== b;
      }, $.isSame = function(w, N) {
        var C = F(w);
        return this.startOf(N) <= C && C <= this.endOf(N);
      }, $.isAfter = function(w, N) {
        return F(w) < this.startOf(N);
      }, $.isBefore = function(w, N) {
        return this.endOf(N) < F(w);
      }, $.$g = function(w, N, C) {
        return D.u(w) ? this[N] : this.set(C, w);
      }, $.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, $.valueOf = function() {
        return this.$d.getTime();
      }, $.startOf = function(w, N) {
        var C = this, I = !!D.u(N) || N, B = D.p(w), X = function(x, U) {
          var G = D.w(C.$u ? Date.UTC(C.$y, U, x) : new Date(C.$y, U, x), C);
          return I ? G : G.endOf(a);
        }, te = function(x, U) {
          return D.w(C.toDate()[x].apply(C.toDate("s"), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(U)), C);
        }, k = this.$W, M = this.$M, P = this.$D, z = "set" + (this.$u ? "UTC" : "");
        switch (B) {
          case v:
            return I ? X(1, 0) : X(31, 11);
          case u:
            return I ? X(1, M) : X(0, M + 1);
          case d:
            var h = this.$locale().weekStart || 0, V = (k < h ? k + 7 : k) - h;
            return X(I ? P - V : P + (6 - V), M);
          case a:
          case y:
            return te(z + "Hours", 0);
          case l:
            return te(z + "Minutes", 1);
          case c:
            return te(z + "Seconds", 2);
          case i:
            return te(z + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, $.endOf = function(w) {
        return this.startOf(w, !1);
      }, $.$set = function(w, N) {
        var C, I = D.p(w), B = "set" + (this.$u ? "UTC" : ""), X = (C = {}, C[a] = B + "Date", C[y] = B + "Date", C[u] = B + "Month", C[v] = B + "FullYear", C[l] = B + "Hours", C[c] = B + "Minutes", C[i] = B + "Seconds", C[s] = B + "Milliseconds", C)[I], te = I === a ? this.$D + (N - this.$W) : N;
        if (I === u || I === v) {
          var k = this.clone().set(y, 1);
          k.$d[X](te), k.init(), this.$d = k.set(y, Math.min(this.$D, k.daysInMonth())).$d;
        } else
          X && this.$d[X](te);
        return this.init(), this;
      }, $.set = function(w, N) {
        return this.clone().$set(w, N);
      }, $.get = function(w) {
        return this[D.p(w)]();
      }, $.add = function(w, N) {
        var C, I = this;
        w = Number(w);
        var B = D.p(N), X = function(M) {
          var P = F(I);
          return D.w(P.date(P.date() + Math.round(M * w)), I);
        };
        if (B === u)
          return this.set(u, this.$M + w);
        if (B === v)
          return this.set(v, this.$y + w);
        if (B === a)
          return X(1);
        if (B === d)
          return X(7);
        var te = (C = {}, C[c] = r, C[l] = o, C[i] = t, C)[B] || 1, k = this.$d.getTime() + w * te;
        return D.w(k, this);
      }, $.subtract = function(w, N) {
        return this.add(-1 * w, N);
      }, $.format = function(w) {
        var N = this, C = this.$locale();
        if (!this.isValid())
          return C.invalidDate || b;
        var I = w || "YYYY-MM-DDTHH:mm:ssZ", B = D.z(this), X = this.$H, te = this.$m, k = this.$M, M = C.weekdays, P = C.months, z = function(U, G, q, g) {
          return U && (U[G] || U(N, I)) || q[G].slice(0, g);
        }, h = function(U) {
          return D.s(X % 12 || 12, U, "0");
        }, V = C.meridiem || function(U, G, q) {
          var g = U < 12 ? "AM" : "PM";
          return q ? g.toLowerCase() : g;
        }, x = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: k + 1, MM: D.s(k + 1, 2, "0"), MMM: z(C.monthsShort, k, P, 3), MMMM: z(P, k), D: this.$D, DD: D.s(this.$D, 2, "0"), d: String(this.$W), dd: z(C.weekdaysMin, this.$W, M, 2), ddd: z(C.weekdaysShort, this.$W, M, 3), dddd: M[this.$W], H: String(X), HH: D.s(X, 2, "0"), h: h(1), hh: h(2), a: V(X, te, !0), A: V(X, te, !1), m: String(te), mm: D.s(te, 2, "0"), s: String(this.$s), ss: D.s(this.$s, 2, "0"), SSS: D.s(this.$ms, 3, "0"), Z: B };
        return I.replace(_, function(U, G) {
          return G || x[U] || B.replace(":", "");
        });
      }, $.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, $.diff = function(w, N, C) {
        var I, B = D.p(N), X = F(w), te = (X.utcOffset() - this.utcOffset()) * r, k = this - X, M = D.m(this, X);
        return M = (I = {}, I[v] = M / 12, I[u] = M, I[f] = M / 3, I[d] = (k - te) / 6048e5, I[a] = (k - te) / 864e5, I[l] = k / o, I[c] = k / r, I[i] = k / t, I)[B] || k, C ? M : D.a(M);
      }, $.daysInMonth = function() {
        return this.endOf(u).$D;
      }, $.$locale = function() {
        return S[this.$L];
      }, $.locale = function(w, N) {
        if (!w)
          return this.$L;
        var C = this.clone(), I = j(w, N, !0);
        return I && (C.$L = I), C;
      }, $.clone = function() {
        return D.w(this.$d, this);
      }, $.toDate = function() {
        return new Date(this.valueOf());
      }, $.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, $.toISOString = function() {
        return this.$d.toISOString();
      }, $.toString = function() {
        return this.$d.toUTCString();
      }, T;
    }(), K = ee.prototype;
    return F.prototype = K, [["$ms", s], ["$s", i], ["$m", c], ["$H", l], ["$W", a], ["$M", u], ["$y", v], ["$D", y]].forEach(function(T) {
      K[T[1]] = function($) {
        return this.$g($, T[0], T[1]);
      };
    }), F.extend = function(T, $) {
      return T.$i || (T($, ee, F), T.$i = !0), F;
    }, F.locale = j, F.isDayjs = E, F.unix = function(T) {
      return F(1e3 * T);
    }, F.en = S[m], F.Ls = S, F.p = {}, F;
  });
})(rn);
var xt = rn.exports;
const R = /* @__PURE__ */ $e(xt), wt = (e) => e % 4 === 0 && e % 100 > 0 || e % 400 === 0 ? 366 : 365, Kt = (e) => {
  const n = e.day();
  return n !== 0 && n !== 6;
}, Ct = (e, n) => R(`${e.year}-${e.month + 1}-${e.dayOfMonth}`).add(n, "months").daysInMonth(), nn = (e) => ({
  hour: e.hour(),
  dayName: e.format("ddd"),
  dayOfMonth: e.date(),
  weekOfYear: e.isoWeek(),
  month: e.month(),
  monthName: e.format("MMMM"),
  isBusinessDay: Kt(e),
  isCurrentDay: e.isSame(R(), "day"),
  year: parseInt(e.format("YYYY"))
}), St = (e, n, t, r, o, s, i) => {
  e.strokeStyle = i.colors.border, s ? e.fillStyle = i.colors.secondary : o ? e.fillStyle = "transparent" : e.fillStyle = i.colors.primary, e.beginPath(), e.setLineDash([]), e.fillRect(n, t, r, we), e.strokeRect(n + 0.5, t + 0.5, r, we);
}, No = (e, n, t, r, o) => {
  for (let s = 0; s < n; s++)
    for (let i = 0; i <= t; i++) {
      const c = R(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
        i,
        "days"
      ), l = c.isSame(R(), "day");
      St(
        e,
        i * ge,
        s * we,
        ge,
        Kt(c),
        l,
        o
      );
    }
}, Ho = (e, n, t, r) => {
  e.setLineDash([5, 5]), e.strokeStyle = r.colors.border, e.moveTo(n + 0.5, 0.5), e.lineTo(n + 0.5, t + 0.5), e.stroke();
}, Wo = (e, n, t, r, o) => {
  let s = 0, i = -(r.dayOfMonth - 1) * Te;
  for (let c = 0; c <= t; c++) {
    const a = R(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      c,
      "weeks"
    ).isSame(R(), "week");
    for (let d = 0; d < n; d++)
      St(e, s, d * we, Ie, !0, a, o);
    s += Ie;
  }
  for (let c = 0; c < t; c++) {
    const l = Ct(r, c) * Te;
    Ho(e, i, n * we, o), i += l;
  }
}, Zo = (e, n, t, r, o) => {
  const s = R(`${r.year}-${r.month + 1}-${r.dayOfMonth + 1}`);
  for (let i = 0; i < n; i++)
    for (let c = 0; c <= t; c++) {
      let l;
      c === Math.floor(t / 2) ? l = R() : c > Math.floor(t / 2) ? l = R().add(c - Math.floor(t / 2), "hours") : l = R().subtract(Math.floor(t / 2) - i, "hours");
      const a = s.isSame(R(), "day") && l.isSame(R(), "hour");
      St(
        e,
        c * ve + ve / 2 - 0.5,
        // -0.5 to make borders better aligned with hour axis
        i * we,
        ve,
        Kt(l),
        a,
        o
      );
    }
}, Fo = (e, n, t, r, o) => {
  let s = -(r.dayOfMonth - 1) * Pe;
  for (let i = 0; i <= t; i++) {
    const l = R(`${r.year}-${r.month + 1}-${r.dayOfMonth}`).add(
      i,
      "months"
    ).isSame(R(), "month"), a = Ct(r, i) * Pe;
    for (let d = 0; d < n; d++)
      St(e, s, d * we, a, !0, l, o);
    s += a;
  }
}, zo = (e, n, t, r, o, s) => {
  if (e.clearRect(0, 0, e.canvas.width, e.canvas.height), !!document.getElementById(en))
    switch (n) {
      case -1:
        Fo(e, t, r, o, s);
        break;
      case 0:
        Wo(e, t, r, o, s);
        break;
      case 1:
        No(e, t, r, o, s);
        break;
      case 2:
        Zo(e, t, r, o, s);
        break;
    }
};
var on = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    var t = "week", r = "year";
    return function(o, s, i) {
      var c = s.prototype;
      c.week = function(l) {
        if (l === void 0 && (l = null), l !== null)
          return this.add(7 * (l - this.week()), "day");
        var a = this.$locale().yearStart || 1;
        if (this.month() === 11 && this.date() > 25) {
          var d = i(this).startOf(r).add(1, r).date(a), u = i(this).endOf(t);
          if (d.isBefore(u))
            return 1;
        }
        var f = i(this).startOf(r).date(a).startOf(t).subtract(1, "millisecond"), v = this.diff(f, t, !0);
        return v < 0 ? i(this).startOf("week").week() : Math.ceil(v);
      }, c.weeks = function(l) {
        return l === void 0 && (l = null), this.week(l);
      };
    };
  });
})(on);
var jo = on.exports;
const Bo = /* @__PURE__ */ $e(jo);
var sn = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    return function(t, r, o) {
      r.prototype.dayOfYear = function(s) {
        var i = Math.round((o(this).startOf("day") - o(this).startOf("year")) / 864e5) + 1;
        return s == null ? i : this.add(s - i, "day");
      };
    };
  });
})(sn);
var Vo = sn.exports;
const Go = /* @__PURE__ */ $e(Vo);
var an = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    var t = "day";
    return function(r, o, s) {
      var i = function(a) {
        return a.add(4 - a.isoWeekday(), t);
      }, c = o.prototype;
      c.isoWeekYear = function() {
        return i(this).year();
      }, c.isoWeek = function(a) {
        if (!this.$utils().u(a))
          return this.add(7 * (a - this.isoWeek()), t);
        var d, u, f, v, y = i(this), b = (d = this.isoWeekYear(), u = this.$u, f = (u ? s.utc : s)().year(d).startOf("year"), v = 4 - f.isoWeekday(), f.isoWeekday() > 4 && (v += 7), f.add(v, t));
        return y.diff(b, "week") + 1;
      }, c.isoWeekday = function(a) {
        return this.$utils().u(a) ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7);
      };
      var l = c.startOf;
      c.startOf = function(a, d) {
        var u = this.$utils(), f = !!u.u(d) || d;
        return u.p(a) === "isoweek" ? f ? this.date(this.date() - (this.isoWeekday() - 1)).startOf("day") : this.date(this.date() - 1 - (this.isoWeekday() - 1) + 7).endOf("day") : l.bind(this)(a, d);
      };
    };
  });
})(an);
var Uo = an.exports;
const Xo = /* @__PURE__ */ $e(Uo);
var cn = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    return function(t, r, o) {
      r.prototype.isBetween = function(s, i, c, l) {
        var a = o(s), d = o(i), u = (l = l || "()")[0] === "(", f = l[1] === ")";
        return (u ? this.isAfter(a, c) : !this.isBefore(a, c)) && (f ? this.isBefore(d, c) : !this.isAfter(d, c)) || (u ? this.isBefore(a, c) : !this.isAfter(a, c)) && (f ? this.isAfter(d, c) : !this.isBefore(d, c));
      };
    };
  });
})(cn);
var Jo = cn.exports;
const qo = /* @__PURE__ */ $e(Jo);
var ln = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    var t, r, o = 1e3, s = 6e4, i = 36e5, c = 864e5, l = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, a = 31536e6, d = 2592e6, u = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/, f = { years: a, months: d, days: c, hours: i, minutes: s, seconds: o, milliseconds: 1, weeks: 6048e5 }, v = function(m) {
      return m instanceof H;
    }, y = function(m, S, E) {
      return new H(m, E, S.$l);
    }, b = function(m) {
      return r.p(m) + "s";
    }, p = function(m) {
      return m < 0;
    }, _ = function(m) {
      return p(m) ? Math.ceil(m) : Math.floor(m);
    }, A = function(m) {
      return Math.abs(m);
    }, L = function(m, S) {
      return m ? p(m) ? { negative: !0, format: "" + A(m) + S } : { negative: !1, format: "" + m + S } : { negative: !1, format: "" };
    }, H = function() {
      function m(E, j, F) {
        var D = this;
        if (this.$d = {}, this.$l = F, E === void 0 && (this.$ms = 0, this.parseFromMilliseconds()), j)
          return y(E * f[b(j)], this);
        if (typeof E == "number")
          return this.$ms = E, this.parseFromMilliseconds(), this;
        if (typeof E == "object")
          return Object.keys(E).forEach(function(T) {
            D.$d[b(T)] = E[T];
          }), this.calMilliseconds(), this;
        if (typeof E == "string") {
          var ee = E.match(u);
          if (ee) {
            var K = ee.slice(2).map(function(T) {
              return T != null ? Number(T) : 0;
            });
            return this.$d.years = K[0], this.$d.months = K[1], this.$d.weeks = K[2], this.$d.days = K[3], this.$d.hours = K[4], this.$d.minutes = K[5], this.$d.seconds = K[6], this.calMilliseconds(), this;
          }
        }
        return this;
      }
      var S = m.prototype;
      return S.calMilliseconds = function() {
        var E = this;
        this.$ms = Object.keys(this.$d).reduce(function(j, F) {
          return j + (E.$d[F] || 0) * f[F];
        }, 0);
      }, S.parseFromMilliseconds = function() {
        var E = this.$ms;
        this.$d.years = _(E / a), E %= a, this.$d.months = _(E / d), E %= d, this.$d.days = _(E / c), E %= c, this.$d.hours = _(E / i), E %= i, this.$d.minutes = _(E / s), E %= s, this.$d.seconds = _(E / o), E %= o, this.$d.milliseconds = E;
      }, S.toISOString = function() {
        var E = L(this.$d.years, "Y"), j = L(this.$d.months, "M"), F = +this.$d.days || 0;
        this.$d.weeks && (F += 7 * this.$d.weeks);
        var D = L(F, "D"), ee = L(this.$d.hours, "H"), K = L(this.$d.minutes, "M"), T = this.$d.seconds || 0;
        this.$d.milliseconds && (T += this.$d.milliseconds / 1e3);
        var $ = L(T, "S"), w = E.negative || j.negative || D.negative || ee.negative || K.negative || $.negative, N = ee.format || K.format || $.format ? "T" : "", C = (w ? "-" : "") + "P" + E.format + j.format + D.format + N + ee.format + K.format + $.format;
        return C === "P" || C === "-P" ? "P0D" : C;
      }, S.toJSON = function() {
        return this.toISOString();
      }, S.format = function(E) {
        var j = E || "YYYY-MM-DDTHH:mm:ss", F = { Y: this.$d.years, YY: r.s(this.$d.years, 2, "0"), YYYY: r.s(this.$d.years, 4, "0"), M: this.$d.months, MM: r.s(this.$d.months, 2, "0"), D: this.$d.days, DD: r.s(this.$d.days, 2, "0"), H: this.$d.hours, HH: r.s(this.$d.hours, 2, "0"), m: this.$d.minutes, mm: r.s(this.$d.minutes, 2, "0"), s: this.$d.seconds, ss: r.s(this.$d.seconds, 2, "0"), SSS: r.s(this.$d.milliseconds, 3, "0") };
        return j.replace(l, function(D, ee) {
          return ee || String(F[D]);
        });
      }, S.as = function(E) {
        return this.$ms / f[b(E)];
      }, S.get = function(E) {
        var j = this.$ms, F = b(E);
        return F === "milliseconds" ? j %= 1e3 : j = F === "weeks" ? _(j / f[F]) : this.$d[F], j === 0 ? 0 : j;
      }, S.add = function(E, j, F) {
        var D;
        return D = j ? E * f[b(j)] : v(E) ? E.$ms : y(E, this).$ms, y(this.$ms + D * (F ? -1 : 1), this);
      }, S.subtract = function(E, j) {
        return this.add(E, j, !0);
      }, S.locale = function(E) {
        var j = this.clone();
        return j.$l = E, j;
      }, S.clone = function() {
        return y(this.$ms, this);
      }, S.humanize = function(E) {
        return t().add(this.$ms, "ms").locale(this.$l).fromNow(!E);
      }, S.milliseconds = function() {
        return this.get("milliseconds");
      }, S.asMilliseconds = function() {
        return this.as("milliseconds");
      }, S.seconds = function() {
        return this.get("seconds");
      }, S.asSeconds = function() {
        return this.as("seconds");
      }, S.minutes = function() {
        return this.get("minutes");
      }, S.asMinutes = function() {
        return this.as("minutes");
      }, S.hours = function() {
        return this.get("hours");
      }, S.asHours = function() {
        return this.as("hours");
      }, S.days = function() {
        return this.get("days");
      }, S.asDays = function() {
        return this.as("days");
      }, S.weeks = function() {
        return this.get("weeks");
      }, S.asWeeks = function() {
        return this.as("weeks");
      }, S.months = function() {
        return this.get("months");
      }, S.asMonths = function() {
        return this.as("months");
      }, S.years = function() {
        return this.get("years");
      }, S.asYears = function() {
        return this.as("years");
      }, m;
    }();
    return function(m, S, E) {
      t = E, r = E().$utils(), E.duration = function(D, ee) {
        var K = E.locale();
        return y(D, { $l: K }, ee);
      }, E.isDuration = v;
      var j = S.prototype.add, F = S.prototype.subtract;
      S.prototype.add = function(D, ee) {
        return v(D) && (D = D.asMilliseconds()), j.bind(this)(D, ee);
      }, S.prototype.subtract = function(D, ee) {
        return v(D) && (D = D.asMilliseconds()), F.bind(this)(D, ee);
      };
    };
  });
})(ln);
var Ko = ln.exports;
const Qo = /* @__PURE__ */ $e(Ko);
var es = "Expected a function", Mr = 0 / 0, ts = "[object Symbol]", rs = /^\s+|\s+$/g, ns = /^[-+]0x[0-9a-f]+$/i, os = /^0b[01]+$/i, ss = /^0o[0-7]+$/i, is = parseInt, as = typeof ye == "object" && ye && ye.Object === Object && ye, cs = typeof self == "object" && self && self.Object === Object && self, ls = as || cs || Function("return this")(), ds = Object.prototype, us = ds.toString, hs = Math.max, fs = Math.min, Et = function() {
  return ls.Date.now();
};
function ps(e, n, t) {
  var r, o, s, i, c, l, a = 0, d = !1, u = !1, f = !0;
  if (typeof e != "function")
    throw new TypeError(es);
  n = $r(n) || 0, Ht(t) && (d = !!t.leading, u = "maxWait" in t, s = u ? hs($r(t.maxWait) || 0, n) : s, f = "trailing" in t ? !!t.trailing : f);
  function v(S) {
    var E = r, j = o;
    return r = o = void 0, a = S, i = e.apply(j, E), i;
  }
  function y(S) {
    return a = S, c = setTimeout(_, n), d ? v(S) : i;
  }
  function b(S) {
    var E = S - l, j = S - a, F = n - E;
    return u ? fs(F, s - j) : F;
  }
  function p(S) {
    var E = S - l, j = S - a;
    return l === void 0 || E >= n || E < 0 || u && j >= s;
  }
  function _() {
    var S = Et();
    if (p(S))
      return A(S);
    c = setTimeout(_, b(S));
  }
  function A(S) {
    return c = void 0, f && r ? v(S) : (r = o = void 0, i);
  }
  function L() {
    c !== void 0 && clearTimeout(c), a = 0, r = l = o = c = void 0;
  }
  function H() {
    return c === void 0 ? i : A(Et());
  }
  function m() {
    var S = Et(), E = p(S);
    if (r = arguments, o = this, l = S, E) {
      if (c === void 0)
        return y(l);
      if (u)
        return c = setTimeout(_, n), v(l);
    }
    return c === void 0 && (c = setTimeout(_, n)), i;
  }
  return m.cancel = L, m.flush = H, m;
}
function Ht(e) {
  var n = typeof e;
  return !!e && (n == "object" || n == "function");
}
function ms(e) {
  return !!e && typeof e == "object";
}
function vs(e) {
  return typeof e == "symbol" || ms(e) && us.call(e) == ts;
}
function $r(e) {
  if (typeof e == "number")
    return e;
  if (vs(e))
    return Mr;
  if (Ht(e)) {
    var n = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = Ht(n) ? n + "" : n;
  }
  if (typeof e != "string")
    return e === 0 ? e : +e;
  e = e.replace(rs, "");
  var t = os.test(e);
  return t || ss.test(e) ? is(e.slice(2), t ? 2 : 8) : ns.test(e) ? Mr : +e;
}
var ys = ps;
const Ve = /* @__PURE__ */ $e(ys), Wt = [-1, 0, 1, 2], gs = (e) => Wt.includes(e), Ge = (e) => {
  var r;
  const t = (((r = document.getElementById(je)) == null ? void 0 : r.clientWidth) || 0) - Me;
  switch (e) {
    case -1:
      return Math.ceil(t / Qr) * We;
    case 1:
      return Math.ceil(t / ge) * We;
    case 2:
      return Math.ceil(t / ve) * We;
    default:
      return Math.ceil(t / Ie) * We;
  }
}, ws = (e) => Ge(e) / We, Qt = (e, n) => {
  const t = Ge(n) / 2;
  let r;
  switch (n) {
    case -1:
      r = e.subtract(t, "months");
      break;
    case 1:
      r = e.subtract(t, "days");
      break;
    case 2:
      r = e.subtract(t, "hours");
      break;
    default:
      r = e.subtract(t, "weeks");
      break;
  }
  let o;
  switch (n) {
    case -1:
      o = e.add(t, "months");
      break;
    case 1:
      o = e.add(t, "days");
      break;
    case 2:
      o = e.add(t, "hours");
      break;
    default:
      o = e.add(t, "weeks");
      break;
  }
  return {
    startDate: r,
    endDate: o
  };
}, bs = (e, n) => {
  const t = Qt(e, n);
  return {
    startDate: t.startDate.toDate(),
    endDate: t.endDate.toDate()
  };
}, er = () => {
  var t;
  return ((((t = document.getElementById(je)) == null ? void 0 : t.clientWidth) || 0) - Me) * We;
}, dn = Ir({
  handleGoNext: () => {
  },
  handleScrollNext: () => {
  },
  handleGoPrev: () => {
  },
  handleScrollPrev: () => {
  },
  handleGoToday: () => {
  },
  zoomIn: () => {
  },
  zoomOut: () => {
  },
  handleFilterData: () => {
  },
  updateTilesCoords: () => {
  },
  tilesCoords: [],
  zoom: 0,
  isNextZoom: !1,
  isPrevZoom: !1,
  date: R(),
  isLoading: !1,
  cols: 0,
  startDate: {
    hour: 0,
    dayName: "",
    dayOfMonth: 0,
    weekOfYear: 0,
    month: 0,
    monthName: "",
    isCurrentDay: !1,
    isBusinessDay: !1,
    year: 0
  },
  dayOfYear: 0,
  recordsThreshold: 0,
  config: {
    zoom: 0
  }
});
R.extend(Bo);
R.extend(Go);
R.extend(Xo);
R.extend(qo);
R.extend(Qo);
const xs = ({
  data: e,
  children: n,
  isLoading: t,
  config: r,
  defaultStartDate: o = R(),
  onRangeChange: s,
  onFilterData: i,
  onClearFilterData: c
}) => {
  const {
    zoom: l,
    maxRecordsPerPage: a = 50,
    minZoom: d = -1,
    maxZoom: u = Wt[Wt.length - 1]
  } = r, [f, v] = me(l), [y, b] = me(R()), [p, _] = me(!1), [A, L] = me(Ge(f)), H = f < u, m = f > d, S = Ye(() => bs(y, f), [y, f]), E = Qt(y, f).startDate, j = R(E).dayOfYear(), F = nn(E), D = xe(null), [ee, K] = me([{ x: 0, y: 0 }]), T = be(
    (h, V = "auto") => {
      var U, G, q, g;
      const x = er();
      switch (h) {
        case "back":
          return (U = D.current) == null ? void 0 : U.scrollTo({
            behavior: V,
            left: x / 3
          });
        case "forward":
          return (G = D.current) == null ? void 0 : G.scrollTo({
            behavior: V,
            left: x / 3
          });
        case "middle": {
          const ce = x / We / 4;
          return (q = D.current) == null ? void 0 : q.scrollTo({
            behavior: V,
            left: x / 2 - ce
          });
        }
        default:
          return (g = D.current) == null ? void 0 : g.scrollTo({
            behavior: V,
            left: x / 2
          });
      }
    },
    []
  ), $ = (h) => {
    K(h);
  }, w = be(
    (h) => {
      const V = ws(f);
      let x;
      switch (f) {
        case -1:
          x = V * 31;
          break;
        case 0:
          x = V * 7;
          break;
        case 1:
          x = V;
          break;
        case 2:
          x = Math.ceil(V / gt);
          break;
      }
      Ve(() => {
        switch (h) {
          case "back":
            b((G) => G.subtract(x, "days"));
            break;
          case "forward":
            b((G) => G.add(x, "days"));
            break;
          case "middle":
            b(R());
            break;
        }
        s == null || s(S);
      }, 300)();
    },
    [s, S, f]
  );
  pe(() => {
    D.current = document.getElementById(je), L(Ge(f));
  }, [f]), pe(() => {
    const h = () => L(Ge(f));
    return window.addEventListener("resize", h), () => window.removeEventListener("resize", h);
  }, [f]), pe(() => {
    s == null || s(S);
  }, [s, S]), pe(() => {
    _(!1);
  }, [o]), pe(() => {
    p || (T("middle"), _(!0), b(o));
  }, [o, p, T]);
  const N = () => {
    t || (b(
      (h) => f === -1 ? h.add(Sr, "months") : f === 2 ? h.add(wr, "hours") : h.add(Cr, "weeks")
    ), s == null || s(S));
  }, C = be(() => {
    t || (w("forward"), Ve(() => {
      T("forward");
    }, 300)());
  }, [t, w, T]), I = () => {
    t || (b(
      (h) => f === -1 ? h.subtract(Sr, "months") : f === 2 ? h.subtract(wr, "hours") : h.subtract(Cr, "weeks")
    ), s == null || s(S));
  }, B = be(() => {
    !p || t || (w("back"), Ve(() => {
      T("back");
    }, 300)());
  }, [p, t, w, T]), X = be(() => {
    t || (w("middle"), Ve(() => {
      T("middle", "smooth");
    }, 300)());
  }, [t, w, T]), te = () => M(f + 1), k = () => M(f - 1), M = (h) => {
    gs(h) && (v(h), L(Ge(h)), s == null || s(S));
  }, P = () => i == null ? void 0 : i(), { Provider: z } = dn;
  return /* @__PURE__ */ O(
    z,
    {
      value: {
        data: e,
        config: r,
        handleGoNext: N,
        handleScrollNext: C,
        handleGoPrev: I,
        handleScrollPrev: B,
        handleGoToday: X,
        zoomIn: te,
        zoomOut: k,
        zoom: f,
        isNextZoom: H,
        isPrevZoom: m,
        date: y,
        isLoading: t,
        cols: A,
        startDate: F,
        dayOfYear: j,
        handleFilterData: P,
        tilesCoords: ee,
        updateTilesCoords: $,
        recordsThreshold: a,
        onClearFilterData: c
      },
      children: n
    }
  );
}, tt = () => Ne(dn), un = (e, n, t) => {
  e.canvas.width = n * window.devicePixelRatio, e.canvas.height = t * window.devicePixelRatio, e.canvas.style.width = n + "px", e.canvas.style.height = t + "px", e.scale(window.devicePixelRatio, window.devicePixelRatio);
}, Cs = W.div`
  height: calc(100vh - headerHeight);
`, Ss = W.div`
  position: relative;
`, Ms = W.canvas``;
W.canvas``;
const kr = W.span`
  width: 1px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
`, $s = Mn(function({ zoom: n, rows: t, data: r, onTileClick: o }, s) {
  const { handleScrollNext: i, handleScrollPrev: c, date: l, isLoading: a, cols: d, startDate: u } = tt(), f = xe(null), v = xe(null), y = xe(null), b = Be(), p = be(
    (_) => {
      const A = er(), L = t * we + 1;
      un(_, A, L), zo(_, n, t, d, u, b);
    },
    [d, u, t, n, b]
  );
  return pe(() => {
    if (!f.current)
      return;
    const _ = f.current.getContext("2d");
    if (!_)
      return;
    const A = () => p(_);
    return window.addEventListener("resize", A), () => window.removeEventListener("resize", A);
  }, [p]), pe(() => {
    const _ = f.current;
    if (!_)
      return;
    _.style.letterSpacing = "1px";
    const A = _.getContext("2d");
    A && p(A);
  }, [l, t, n, p]), pe(() => {
    if (!v.current)
      return;
    const _ = new IntersectionObserver(
      (A) => A[0].isIntersecting ? i() : null,
      { root: document.getElementById(je) }
    );
    return _.observe(v.current), () => _.disconnect();
  }, [i]), pe(() => {
    if (!y.current)
      return;
    const _ = new IntersectionObserver(
      (A) => A[0].isIntersecting ? c() : null,
      {
        root: document.getElementById(je),
        rootMargin: `0px 0px 0px -${Me}px`
      }
    );
    return _.observe(y.current), () => _.disconnect();
  }, [c]), /* @__PURE__ */ O(Cs, { id: en, children: /* @__PURE__ */ ae(Ss, { ref: s, children: [
    /* @__PURE__ */ O(kr, { position: "left", ref: y }),
    /* @__PURE__ */ O(Or, { isLoading: a, position: "left" }),
    /* @__PURE__ */ O(Ms, { ref: f }),
    /* @__PURE__ */ O(xa, { data: r, zoom: n, onTileClick: o }),
    /* @__PURE__ */ O(kr, { ref: v, position: "right" }),
    /* @__PURE__ */ O(Or, { isLoading: a, position: "right" })
  ] }) });
}), hn = (e) => {
  const n = R.duration(e, "seconds"), t = n.hours(), r = n.minutes();
  return { hours: t, minutes: r };
}, fn = (e) => {
  let n = 0, t = 0, r = 0;
  return e.forEach((o) => {
    n += o.minutes;
    const s = Math.floor(n / ue);
    t += o.hours + s, r += n % ue, r >= ue && (t++, r -= ue);
  }), { hours: t, minutes: r };
}, pn = (e, n) => {
  let t = xr;
  switch (n) {
    case 0:
      t = Yo;
      break;
    case 1:
      t = xr;
      break;
    case 2:
      t = 1;
      break;
  }
  const r = () => {
    let s = t - e.hours - 1, i = ue - e.minutes;
    return i === ue && (s++, i = 0), { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  }, o = () => {
    const s = e.hours - t, i = e.minutes;
    return { hours: Math.max(0, s), minutes: s < 0 ? 0 : i };
  };
  return {
    free: r(),
    overtime: o()
  };
}, ks = (e, n, t) => {
  const r = n.isoWeek(), o = e.map((a) => {
    const d = R(a.startDate).isoWeek(), u = R(a.startDate).isoWeekday(), f = R(a.endDate).isoWeek(), v = R(a.endDate).isoWeekday(), { hours: y, minutes: b } = hn(a.occupancy);
    if (r === d) {
      const p = (De + 1 - u) * y, _ = (De + 1 - u) * b;
      return { hours: Math.max(0, p), minutes: _ };
    } else if (r === f) {
      const p = v > De ? De * y : v * y, _ = v > De ? De * b : v * b;
      return { hours: p, minutes: _ };
    } else if (R(n).isBetween(a.startDate, a.endDate))
      return { hours: De * y, minutes: De * b };
    return { hours: 0, minutes: 0 };
  }), { hours: s, minutes: i } = fn(o), { free: c, overtime: l } = pn({ hours: s, minutes: i }, t);
  return {
    taken: { hours: Math.max(0, s), minutes: Math.max(0, i) },
    free: c,
    overtime: l
  };
}, _s = (e, n, t, r) => {
  const o = n.isoWeekday(), s = e.map((d) => {
    const { hours: u, minutes: f } = hn(d.occupancy);
    return o <= (r ? 7 : 5) ? { hours: u, minutes: f } : { hours: 0, minutes: 0 };
  }), { hours: i, minutes: c } = fn(s), { free: l, overtime: a } = pn({ hours: i, minutes: c }, t);
  return {
    taken: { hours: Math.max(0, i), minutes: Math.max(0, c) },
    free: l,
    overtime: a
  };
}, Es = (e, n) => {
  let t = 0;
  e.forEach((c) => {
    const l = R(c.startDate).hour(), a = R(c.endDate).hour(), d = n.hour(), u = R(c.endDate).minute(), f = R(c.startDate).minute();
    l < d && a > d ? t += ue : l === d && a === d && f && u ? t += u ? u - f : ue - f : l === d && a >= d ? t += f ? ue - f : ue : a === d && u && (t += u);
  });
  const r = Math.floor(t / ue), o = t % ue, s = r || o ? 0 : 1, i = r ? 0 : o ? ue - o : 0;
  return {
    taken: { hours: r, minutes: o },
    free: { hours: s, minutes: i },
    overtime: { hours: 0, minutes: 0 }
  };
}, Ts = (e, n, t, r, o = !1) => {
  if (n < 0)
    return {
      taken: { hours: 0, minutes: 0 },
      free: { hours: 0, minutes: 0 },
      overtime: { hours: 0, minutes: 0 }
    };
  const s = e.flat(2).filter((i) => r === 1 ? R(t).isBetween(i.startDate, i.endDate, "day", "[]") : r === 2 ? R(t).isBetween(i.startDate, i.endDate, "hour", "[]") : R(i.startDate).isBetween(
    R(t),
    R(t).add(6, "days"),
    "day",
    "[]"
  ) || R(t).isBetween(R(i.startDate), R(i.endDate), "day", "[]"));
  switch (r) {
    case 1:
      return _s(s, t, r, o);
    case 2:
      return Es(s, t);
    default:
      return ks(s, t, r);
  }
}, Ps = (e, n, t, r, o, s = !1) => {
  let i = "weeks", c;
  switch (o) {
    case -1:
      i = "months", c = Qr;
      break;
    case 0:
      i = "weeks", c = Ie;
      break;
    case 1:
      i = "days", c = ge;
      break;
    case 2:
      i = "hours", c = ve;
      break;
  }
  const l = Math.ceil(o === 2 ? (n.x - 0.5 * c) / c : n.x / c), a = R(
    `${e.year}-${e.month + 1}-${e.dayOfMonth}T${e.hour}:00:00`
  ).add(l - 1, i), d = Math.ceil(n.y / we), u = t.findIndex((b, p, _) => _.slice(0, p + 1).reduce((L, H) => L + H, 0) >= d), f = o === 2 ? (l + 1) * c : l * c, v = (d - 1) * we + we, y = Ts(
    r[u],
    u,
    a,
    o,
    s
  );
  return { coords: { x: f, y: v }, resourceIndex: u, disposition: y };
}, Os = (e, n, t, r) => {
  const o = [];
  let s = 0, i = [], c = 0;
  return n.length > r ? (n.forEach((l, a) => {
    const d = { id: e[a].id, label: e[a].label, data: l };
    c >= r && (o.push(i), s += i.length, i = [], c = 0), c++, i.push(d);
  }), t.slice(s).length <= r && (i = [], n.slice(s).forEach((l, a) => {
    const d = {
      id: e[a + s].id,
      label: e[a + s].label,
      data: l
    };
    i.push(d), a === n.length - s - 1 && o.push(i);
  })), o) : (n.forEach((l, a) => {
    const d = { id: e[a].id, label: e[a].label, data: l };
    i.push(d);
  }), o.push(i), o);
}, Rs = (e) => {
  const n = [];
  for (const t of e) {
    let r = !1;
    if (n.length)
      for (const o of n) {
        let s = !1;
        for (let i = 0; i < o.length; i++) {
          if (R(t.startDate).isBetween(o[i].startDate, o[i].endDate, null, "[]") || R(t.endDate).isBetween(o[i].startDate, o[i].endDate, null, "[]")) {
            s = !0;
            break;
          }
          if (R(t.startDate).isBefore(o[i].startDate, "day") && R(t.endDate).isAfter(o[i].endDate, "day")) {
            s = !0;
            break;
          }
        }
        if (!s) {
          o.push(t), r = !0;
          break;
        }
      }
    r || n.push([t]);
  }
  return n;
}, As = (e) => {
  const n = [[], []], [t, r] = e.reduce((o, s) => {
    const i = Rs(s.data);
    return o[0].push(i), o[1].push(Math.max(i.length, 1)), o;
  }, n);
  return { projectsPerPerson: t, rowsPerPerson: r };
}, Ds = (e) => e ? e.map((n) => n.data.length).reduce((n, t) => n + Math.max(t, 1), 0) : 0, Ys = (e) => {
  const { recordsThreshold: n } = tt(), [t, r] = me(0), [o, s] = me(0), i = xe(null);
  pe(() => {
    i.current = document.getElementById(je);
  }, []);
  const { projectsPerPerson: c, rowsPerPerson: l } = Ye(() => As(e), [e]), a = Ye(
    () => Os(e, c, l, n),
    [e, c, n, l]
  ), d = be(() => {
    a[o].length && i.current && (i.current.scroll({ top: 0 }), r((p) => p + a[Math.max(o, 0)].length), s((p) => Math.min(p + 1, a.length - 1)), window.scroll({ top: 0 }));
  }, [o, a]), u = be(() => {
    a[o].length && (r((p) => Math.max(p - a[o - 1].length, 0)), s((p) => Math.max(p - 1, 0)));
  }, [o, a]), f = be(() => {
    r(0), s(0);
  }, []), v = t + a[o].length, y = Ye(
    () => l.slice(t, v),
    [v, l, t]
  ), b = Ye(
    () => c.slice(t, v),
    [v, c, t]
  );
  return {
    page: a[o],
    currentPageNum: o,
    pagesAmount: a.length,
    projectsPerPerson: b,
    rowsPerItem: y,
    totalRowsPerPage: Ds(a[o]),
    next: d,
    previous: u,
    reset: f
  };
};
var mn = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r();
  })(ye, function() {
    return { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t) {
      var r = ["th", "st", "nd", "rd"], o = t % 100;
      return "[" + t + (r[(o - 20) % 10] || r[o] || r[0]) + "]";
    } };
  });
})(mn);
var Ls = mn.exports;
const Is = /* @__PURE__ */ $e(Ls);
var vn = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r(xt);
  })(ye, function(t) {
    function r(f) {
      return f && typeof f == "object" && "default" in f ? f : { default: f };
    }
    var o = r(t);
    function s(f) {
      return f % 10 < 5 && f % 10 > 1 && ~~(f / 10) % 10 != 1;
    }
    function i(f, v, y) {
      var b = f + " ";
      switch (y) {
        case "m":
          return v ? "minuta" : "minutę";
        case "mm":
          return b + (s(f) ? "minuty" : "minut");
        case "h":
          return v ? "godzina" : "godzinę";
        case "hh":
          return b + (s(f) ? "godziny" : "godzin");
        case "MM":
          return b + (s(f) ? "miesiące" : "miesięcy");
        case "yy":
          return b + (s(f) ? "lata" : "lat");
      }
    }
    var c = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"), l = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), a = /D MMMM/, d = function(f, v) {
      return a.test(v) ? c[f.month()] : l[f.month()];
    };
    d.s = l, d.f = c;
    var u = { name: "pl", weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), months: d, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), ordinal: function(f) {
      return f + ".";
    }, weekStart: 1, yearStart: 4, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: i, mm: i, h: i, hh: i, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: i, y: "rok", yy: i }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" } };
    return o.default.locale(u, null, !0), u;
  });
})(vn);
var Ns = vn.exports;
const Hs = /* @__PURE__ */ $e(Ns);
var yn = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r(xt);
  })(ye, function(t) {
    function r(l) {
      return l && typeof l == "object" && "default" in l ? l : { default: l };
    }
    var o = r(t), s = { s: "ein paar Sekunden", m: ["eine Minute", "einer Minute"], mm: "%d Minuten", h: ["eine Stunde", "einer Stunde"], hh: "%d Stunden", d: ["ein Tag", "einem Tag"], dd: ["%d Tage", "%d Tagen"], M: ["ein Monat", "einem Monat"], MM: ["%d Monate", "%d Monaten"], y: ["ein Jahr", "einem Jahr"], yy: ["%d Jahre", "%d Jahren"] };
    function i(l, a, d) {
      var u = s[d];
      return Array.isArray(u) && (u = u[a ? 0 : 1]), u.replace("%d", l);
    }
    var c = { name: "de", weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"), ordinal: function(l) {
      return l + ".";
    }, weekStart: 1, yearStart: 4, formats: { LTS: "HH:mm:ss", LT: "HH:mm", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, relativeTime: { future: "in %s", past: "vor %s", s: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i } };
    return o.default.locale(c, null, !0), c;
  });
})(yn);
var Ws = yn.exports;
const Zs = /* @__PURE__ */ $e(Ws);
var gn = { exports: {} };
(function(e, n) {
  (function(t, r) {
    e.exports = r(xt);
  })(ye, function(t) {
    function r(d) {
      return d && typeof d == "object" && "default" in d ? d : { default: d };
    }
    var o = r(t), s = "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), i = "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), c = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/, l = function(d, u) {
      return c.test(u) ? s[d.month()] : i[d.month()];
    };
    l.s = i, l.f = s;
    var a = { name: "lt", weekdays: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), weekdaysShort: "sek_pir_ant_tre_ket_pen_šeš".split("_"), weekdaysMin: "s_p_a_t_k_pn_š".split("_"), months: l, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), ordinal: function(d) {
      return d + ".";
    }, weekStart: 1, relativeTime: { future: "už %s", past: "prieš %s", s: "kelias sekundes", m: "minutę", mm: "%d minutes", h: "valandą", hh: "%d valandas", d: "dieną", dd: "%d dienas", M: "mėnesį", MM: "%d mėnesius", y: "metus", yy: "%d metus" }, format: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" } };
    return o.default.locale(a, null, !0), a;
  });
})(gn);
var Fs = gn.exports;
const zs = /* @__PURE__ */ $e(Fs), js = {
  feelingEmpty: "Czuję się taki pusty...",
  free: "Wolne",
  loadNext: "Następne",
  loadPrevious: "Poprzednie",
  over: "ponad",
  taken: "Zajęte",
  topbar: {
    filters: "Filtry",
    next: "następny",
    prev: "poprzedni",
    today: "Dziś",
    view: "Widok"
  },
  search: "szukaj",
  week: "tydzień"
}, Bs = {
  feelingEmpty: "I feel so empty...",
  free: "Free",
  loadNext: "Next",
  loadPrevious: "Previous",
  over: "over",
  taken: "Taken",
  topbar: {
    filters: "Filters",
    next: "next",
    prev: "prev",
    today: "Today",
    view: "View"
  },
  search: "search",
  week: "week"
}, Vs = {
  feelingEmpty: "Keine Ergebnisse...",
  free: "Frei",
  loadNext: "Weiter",
  loadPrevious: "Zurück",
  over: "über",
  taken: "Gebucht",
  topbar: {
    filters: "Filter",
    next: "vor",
    prev: "zurück",
    today: "Heute",
    view: "Ansicht"
  },
  search: "Suche",
  week: "Woche"
}, Gs = {
  feelingEmpty: "Jaučiuosi toks tuščias...",
  free: "Laisva",
  loadNext: "Kitas",
  loadPrevious: "Ankstesnis",
  over: "virš",
  taken: "Užimta",
  topbar: {
    filters: "Filtras",
    next: "kitas",
    prev: "ankstesnis",
    today: "Šiandien",
    view: "Rodinys"
  },
  search: "ieškoti",
  week: "savaitė"
}, Us = [
  {
    id: "en",
    lang: Bs,
    translateCode: "en-GB",
    dayjsTranslations: Is
  },
  {
    id: "pl",
    lang: js,
    translateCode: "pl-PL",
    dayjsTranslations: Hs
  },
  {
    id: "lt",
    lang: Gs,
    translateCode: "lt-LT",
    dayjsTranslations: zs
  },
  {
    id: "de",
    lang: Vs,
    translateCode: "de-DE",
    dayjsTranslations: Zs
  }
];
class Xs {
  constructor() {
    rr(this, "locales", Us);
  }
  getLocales() {
    return this.locales;
  }
  addLocales(n) {
    this.locales.push(n);
  }
}
const bt = new Xs(), wn = Ir({
  localesData: bt.getLocales(),
  currentLocale: bt.getLocales()[0],
  setCurrentLocale: () => {
  }
}), Js = ({ children: e, lang: n, translations: t }) => {
  const [r, o] = me("en"), s = bt.getLocales(), i = be(() => {
    const u = s.find((f) => f.id === r);
    return typeof (u == null ? void 0 : u.dayjsTranslations) == "object" && R.locale(u.dayjsTranslations), u || s[0];
  }, [r, s]), [c, l] = me(i()), a = (u) => {
    localStorage.setItem("locale", u.translateCode), l(u);
  };
  pe(() => {
    t == null || t.forEach((u) => {
      s.find((v) => v.id === u.id) || bt.addLocales(u);
    });
  }, [s, t]), pe(() => {
    const u = localStorage.getItem("locale"), f = n ?? u ?? "en";
    localStorage.setItem("locale", f), o(f), l(i());
  }, [i, n]);
  const { Provider: d } = wn;
  return /* @__PURE__ */ O(d, { value: { currentLocale: c, localesData: s, setCurrentLocale: a }, children: e });
}, rt = () => Ne(wn).currentLocale.lang, qs = (e) => /* @__PURE__ */ Z.createElement("svg", { id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 514 440", ...e }, /* @__PURE__ */ Z.createElement("defs", null, /* @__PURE__ */ Z.createElement("style", null, ".cls-1{fill:#fff;}.cls-2{fill:#dbf0fd;}.cls-3{fill:#1c222f;}.cls-4{fill:url(#radial-gradient);}"), /* @__PURE__ */ Z.createElement("radialGradient", { id: "radial-gradient", cx: 256.33, cy: 218.64, fx: 256.33, fy: 218.64, r: 206.09, gradientUnits: "userSpaceOnUse" }, /* @__PURE__ */ Z.createElement("stop", { offset: 0.47, stopColor: "#ccc" }), /* @__PURE__ */ Z.createElement("stop", { offset: 0.49, stopColor: "#ccc", stopOpacity: 0.95 }), /* @__PURE__ */ Z.createElement("stop", { offset: 0.59, stopColor: "#ccc", stopOpacity: 0.67 }), /* @__PURE__ */ Z.createElement("stop", { offset: 0.69, stopColor: "#ccc", stopOpacity: 0.43 }), /* @__PURE__ */ Z.createElement("stop", { offset: 0.78, stopColor: "#ccc", stopOpacity: 0.24 }), /* @__PURE__ */ Z.createElement("stop", { offset: 0.87, stopColor: "#ccc", stopOpacity: 0.11 }), /* @__PURE__ */ Z.createElement("stop", { offset: 0.94, stopColor: "#ccc", stopOpacity: 0.03 }), /* @__PURE__ */ Z.createElement("stop", { offset: 1, stopColor: "#ccc", stopOpacity: 0 }))), /* @__PURE__ */ Z.createElement("path", { className: "cls-4", d: "m462.42,66.49v-1h-2.13V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-49.92V12.55h-1v52.94h-49.81V12.55h-1v52.94h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v49.92h-2.13v1h2.13v49.81h-2.13v1h2.13v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h49.81v53.06h1v-53.06h49.92v53.06h1v-53.06h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13v-1h-2.13v-49.81h2.13v-1h-2.13v-49.92h2.13Zm-54.06,0v49.92h-49.81v-49.92h49.81Zm-152.54,151.65h-49.92v-49.92h49.92v49.92Zm1-49.92h49.81v49.92h-49.81v-49.92Zm-51.92,49.92h-49.81v-49.92h49.81v49.92Zm0,1v49.81h-49.81v-49.81h49.81Zm1,0h49.92v49.81h-49.92v-49.81Zm50.92,0h49.81v49.81h-49.81v-49.81Zm50.81,0h49.92v49.81h-49.92v-49.81Zm0-1v-49.92h49.92v49.92h-49.92Zm0-50.92v-49.81h49.92v49.81h-49.92Zm-1,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm-50.92,0h-49.81v-49.81h49.81v49.81Zm-50.81,0h-49.92v-49.81h49.92v49.81Zm0,1v49.92h-49.92v-49.92h49.92Zm0,50.92v49.81h-49.92v-49.81h49.92Zm0,50.81v49.92h-49.92v-49.92h49.92Zm1,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm50.81,0h49.92v49.92h-49.92v-49.92Zm50.92,0h49.81v49.92h-49.81v-49.92Zm0-1v-49.81h49.81v49.81h-49.81Zm0-50.81v-49.92h49.81v49.92h-49.81Zm0-50.92v-49.81h49.81v49.81h-49.81Zm-1-100.73v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-50.92,0v49.92h-49.81v-49.92h49.81Zm-50.81,0v49.92h-49.92v-49.92h49.92Zm-100.73,0h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,50.92h49.81v49.81h-49.81v-49.81Zm0,50.81h49.81v49.92h-49.81v-49.92Zm0,100.73v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm50.81,0v-49.81h49.92v49.81h-49.92Zm50.92,0v-49.81h49.81v49.81h-49.81Zm100.73,0h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Zm0-50.92h-49.92v-49.81h49.92v49.81Zm0-50.81h-49.92v-49.92h49.92v49.92Z" }), /* @__PURE__ */ Z.createElement("path", { className: "cls-1", d: "m418.99,155.87l-48.04,18.79v108.18h-227.53v-108.18l-48.04-18.79,38.34-27.86,42.94,13.48h161.03l42.94-13.48,38.34,27.86Zm-229.89-87.54c2.6-2.6,4.23-5.54,4.56-7.85,2.63,1.44,5.25,1.63,6.66.22,1.41-1.42,1.22-4.04-.23-6.66,2.31-.34,5.25-1.97,7.84-4.58,4.09-4.1,5.79-9.04,3.8-11.04-2-2-6.94-.29-11.03,3.81-2.42,2.42-3.99,5.13-4.47,7.35-3.13-2.38-6.62-3.01-8.33-1.29s-1.08,5.21,1.31,8.33c-2.23.48-4.93,2.06-7.35,4.48-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm10.82-2.58c1.28,1.28,3.55,1.1,5.06-.41,1.51-1.51,1.69-3.77.41-5.06-1.28-1.28-3.55-1.1-5.06.41-1.51,1.51-1.69,3.77-.41,5.06Z" }), /* @__PURE__ */ Z.createElement("path", { className: "cls-2", d: "m251.22,145.7c-.21-.72.21-1.48.93-1.68.72-.21,1.48.21,1.68.93.75,2.63,1.57,5.34,2.43,8.06.23.72-.17,1.48-.89,1.71-.14.04-.28.06-.41.06-.58,0-1.11-.37-1.3-.95-.87-2.74-1.69-5.48-2.46-8.13Zm-3.07-25.31c-.48-2.83-.87-5.63-1.17-8.3-.08-.75-.76-1.29-1.5-1.2-.75.08-1.28.76-1.2,1.5.31,2.72.71,5.56,1.19,8.45.11.66.69,1.13,1.34,1.13.07,0,.15,0,.23-.02.74-.12,1.24-.83,1.12-1.57Zm-3.2-15.22s.04,0,.06,0c.75-.03,1.33-.67,1.3-1.42-.07-1.55-.1-3.07-.1-4.53,0-1.31.03-2.58.08-3.81.03-.75-.55-1.39-1.3-1.42-.72-.02-1.39.55-1.42,1.3-.06,1.27-.08,2.57-.08,3.92,0,1.5.04,3.07.11,4.65.03.73.63,1.3,1.36,1.3Zm.6-16.88c.08.01.15.02.22.02.65,0,1.23-.47,1.34-1.14.47-2.88,1.14-5.56,1.98-7.97.25-.71-.13-1.49-.84-1.73-.71-.25-1.49.13-1.73.84-.89,2.56-1.6,5.39-2.1,8.42-.12.74.38,1.44,1.12,1.56Zm3.46,49.2c.16.62.71,1.03,1.32,1.03.11,0,.22-.01.33-.04.73-.18,1.17-.92.99-1.65-.7-2.78-1.35-5.53-1.91-8.19-.16-.74-.88-1.2-1.61-1.05-.73.16-1.2.88-1.05,1.61.57,2.69,1.23,5.48,1.94,8.28Zm16.4-73.89c.64-.08,1.28-.09,1.95-.12,1.95,0,3.88.34,5.75,1.02.15.06.31.08.46.08.56,0,1.08-.34,1.28-.9.26-.71-.11-1.49-.82-1.74-2.16-.78-4.41-1.18-6.67-1.18h0c-.76,0-1.52.05-2.27.14-.75.09-1.28.77-1.19,1.51.09.75.77,1.28,1.51,1.19Zm-16.95,29.4c-.25.71.12,1.49.83,1.74,2.87,1.01,5.66,1.82,8.28,2.4.1.02.2.03.3.03.62,0,1.19-.43,1.33-1.07.16-.73-.3-1.46-1.03-1.62-2.51-.56-5.19-1.34-7.96-2.31-.71-.25-1.49.12-1.74.83Zm35-17.62c.16.61.71,1.01,1.31,1.01.12,0,.24-.02.36-.05.73-.2,1.15-.94.96-1.67-.78-2.9-2.34-5.61-4.5-7.85-.52-.54-1.39-.56-1.92-.03-.54.52-.56,1.38-.03,1.92,1.84,1.9,3.16,4.21,3.83,6.67Zm-9.33,19.12c-2.25.77-4.91,1.12-7.86,1.05-.75-.03-1.38.57-1.4,1.32-.02.75.57,1.38,1.32,1.4.29,0,.57.01.86.01,2.95,0,5.63-.41,7.95-1.2.71-.24,1.09-1.02.84-1.73-.24-.71-1.02-1.09-1.73-.84Zm11-12.44c-.73-.16-1.46.31-1.62,1.04-.62,2.84-1.68,5.23-3.16,7.09-.47.59-.37,1.44.22,1.91.25.2.55.29.84.29.4,0,.8-.18,1.07-.51,1.74-2.19,2.98-4.95,3.68-8.2.16-.73-.31-1.46-1.04-1.62Zm-33.61-9.51c.44,0,.86-.21,1.13-.6,1.58-2.34,3.44-4.23,5.51-5.63.62-.42.79-1.27.37-1.89-.42-.62-1.27-.79-1.89-.37-2.37,1.6-4.47,3.74-6.25,6.36-.42.62-.26,1.47.36,1.89.23.16.5.23.76.23Zm-17.85,15.17c2.56,1.38,5.14,2.66,7.67,3.8.18.08.37.12.56.12.52,0,1.01-.3,1.24-.8.31-.68,0-1.49-.68-1.8-2.47-1.11-4.99-2.36-7.5-3.72-.66-.36-1.49-.11-1.84.55-.36.66-.11,1.49.55,1.84Zm-25.71-38.23c4.09-4.1-4.68,1.35-6.68-.64-2-2,3.54-10.69-.56-6.58-4.09,4.1-4.86,7.57-2.87,9.56,2,2,6.01,1.77,10.1-2.34Zm121.24,179.57c0,6.06-4.91,10.97-10.97,10.97s-10.97-4.91-10.97-10.97,4.91-10.97,10.97-10.97,10.97,4.91,10.97,10.97Zm-5.51-.85c0-3.53-2.86-6.38-6.38-6.38s-6.38,2.86-6.38,6.38,2.86,6.38,6.38,6.38,6.38-2.86,6.38-6.38Zm-84.1,31.49c-1.86,1.86-1.86,4.87,0,6.73.93.93,2.15,1.4,3.37,1.4s2.44-.47,3.37-1.39c6.97-6.97,18.31-6.97,25.28,0,1.86,1.86,4.87,1.86,6.73,0,1.86-1.86,1.86-4.87,0-6.73-10.68-10.68-28.06-10.68-38.75,0Zm-47.36-41.78c2.19-1.14,4.69-1.36,7.05-.62,1.43.45,2.96-.35,3.41-1.78.45-1.43-.35-2.96-1.78-3.41-3.74-1.18-7.72-.83-11.2.99-3.48,1.81-6.04,4.87-7.22,8.62-.45,1.43.35,2.96,1.78,3.41.27.09.55.13.82.13,1.16,0,2.23-.74,2.59-1.91.74-2.36,2.35-4.28,4.54-5.42Zm139.73,7.33c.27,0,.55-.04.82-.13,1.43-.45,2.23-1.98,1.78-3.41-2.43-7.72-10.69-12.04-18.41-9.6-1.43.45-2.23,1.98-1.78,3.41.45,1.43,1.98,2.23,3.41,1.78,4.87-1.53,10.06,1.18,11.59,6.05.37,1.16,1.44,1.91,2.59,1.91Zm-144.88,3.81c0-6.06,4.91-10.97,10.97-10.97s10.97,4.91,10.97,10.97-4.91,10.97-10.97,10.97-10.97-4.91-10.97-10.97Zm3.65-.85c0,3.53,2.86,6.38,6.38,6.38s6.38-2.86,6.38-6.38-2.86-6.38-6.38-6.38-6.38,2.86-6.38,6.38Zm18.69-157.72c.91.91,1.93,1.87,3.05,2.85.26.23.58.34.9.34.38,0,.76-.16,1.02-.46.49-.57.44-1.43-.13-1.92-1.07-.94-2.05-1.85-2.91-2.72-.53-.53-1.39-.54-1.92,0-.53.53-.54,1.39,0,1.92Zm16.89,12.95c.22.14.47.21.72.21.45,0,.9-.23,1.16-.64.4-.64.2-1.48-.43-1.87-2.41-1.51-4.75-3.08-6.95-4.67-.61-.44-1.46-.3-1.9.3-.44.61-.3,1.46.3,1.9,2.25,1.62,4.63,3.23,7.1,4.77Zm-25.94-22.7c2-2-4-2-7.43-5.42-3.43-3.43-3-8.98-4.99-6.98-1.99,2-.83,6.39,2.6,9.82,3.43,3.43,7.83,4.58,9.82,2.58Zm137.37,101.16h-78.49c-.09-.25-.18-.52-.27-.77-.24-.71-1.02-1.09-1.73-.84-.67.23-1.03.94-.86,1.61h-79.68l-10.81,12.8h185.72l-13.89-12.8Zm-148.6-93.53c4.09-4.1-4.71,1.02-6.7-.98s3.56-10.35-.53-6.25c-4.09,4.1-5.79,9.04-3.8,11.04,2,2,6.94.29,11.03-3.81Zm211.17,194.3h-29.32v14.55s-209.51.67-218.27-4.49c-7.39-4.36-5.84-98.04-5.84-98.04h-3.42v87.98h-30.68c-10.34,0-18.72,8.38-18.72,18.72h0c0,10.34,8.38,18.72,18.72,18.72h287.53c10.34,0,18.72-8.38,18.72-18.72h0c0-10.34-8.38-18.72-18.72-18.72Z" }), /* @__PURE__ */ Z.createElement("path", { className: "cls-3", d: "m274.16,260.36c.53.53.53,1.39,0,1.92-.27.27-.61.4-.96.4s-.7-.13-.96-.4c-8.3-8.3-21.8-8.3-30.09,0-.53.53-1.39.53-1.92,0-.53-.53-.53-1.39,0-1.92,9.36-9.36,24.58-9.36,33.94,0Zm-97.05-187.21c-1.35-1.35-1.61-3.53-.71-6.13.78-2.28,2.38-4.7,4.51-6.83,1.93-1.94,4.11-3.42,6.18-4.27-.55-.94-.97-1.91-1.23-2.86-.09-.35-.15-.68-.2-1.01l-5.62-1.9c-.71-.24-1.09-1.01-.85-1.72.24-.71,1.01-1.1,1.72-.85l4.93,1.66c.23-.71.6-1.34,1.11-1.86.52-.52,1.14-.89,1.85-1.12l-1.67-4.92c-.24-.71.14-1.48.85-1.73.71-.24,1.48.14,1.73.85l1.91,5.62c.33.05.67.11,1.02.2.95.25,1.92.68,2.87,1.22.84-2.08,2.33-4.27,4.26-6.19,4.77-4.78,10.34-6.42,12.96-3.82,1.35,1.35,1.61,3.53.71,6.13-.78,2.28-2.38,4.7-4.51,6.83-2.14,2.14-4.61,3.74-6.87,4.52.42,1.1.62,2.18.61,3.18.06,0,.12-.03.18-.03,1.36-.11,2.61.33,3.52,1.23.91.91,1.35,2.16,1.24,3.51-.1,1.28-.69,2.51-1.64,3.47-.96.96-2.19,1.54-3.46,1.65-.14.01-.28.02-.41.02-1.2,0-2.29-.44-3.1-1.25-.91-.91-1.35-2.15-1.24-3.51,0-.06.02-.11.03-.17-.02,0-.05,0-.07,0-.65,0-1.35-.09-2.07-.28-.34-.09-.69-.23-1.03-.36-.77,2.27-2.36,4.74-4.52,6.9-3.25,3.25-6.86,5.05-9.66,5.05-1.32,0-2.46-.4-3.3-1.23Zm24.19-11.45c-.5.5-.81,1.13-.86,1.76-.04.55.11,1.04.45,1.37.33.33.82.5,1.37.45.63-.05,1.26-.36,1.76-.86.5-.5.81-1.13.86-1.76.04-.55-.11-1.04-.45-1.37h0c-.3-.3-.71-.46-1.19-.46-.06,0-.12,0-.18,0-.63.05-1.26.36-1.76.86Zm-3.51-12.55c.31.26.62.52.91.81.82.82,1.52,1.69,2.1,2.58,1.95-.56,4.2-2.01,6.2-4,1.81-1.81,3.22-3.92,3.86-5.79.52-1.52.5-2.76-.06-3.32-1.11-1.11-5.11-.19-9.11,3.81-1.88,1.88-3.27,4.01-3.89,5.91Zm-9.29,3.22c.42,1.6,1.51,3.36,2.98,4.83,1.47,1.47,3.23,2.55,4.83,2.97,1.35.36,2.47.21,3.07-.39,1.25-1.26.5-4.81-2.6-7.9-1.47-1.47-3.23-2.55-4.83-2.97-.49-.13-.95-.19-1.36-.19-.73,0-1.32.2-1.7.58-.6.6-.74,1.72-.38,3.07Zm-9.46,18.86c1.11,1.1,5.11.19,9.11-3.81,1.98-1.98,3.44-4.28,3.99-6.22-.9-.58-1.78-1.27-2.58-2.07-.29-.29-.55-.61-.81-.91-1.88.62-4.04,2.04-5.9,3.9-1.81,1.81-3.22,3.92-3.86,5.79-.52,1.52-.5,2.76.06,3.32Zm136.18,140.83c-.72.23-1.12.99-.89,1.71.23.72.99,1.12,1.71.89,5.58-1.76,11.54,1.36,13.3,6.93.18.58.72.95,1.3.95.14,0,.27-.02.41-.06.72-.23,1.12-.99.89-1.71-2.2-7.01-9.7-10.92-16.71-8.71Zm-110.38,16.16c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Zm-3.76-13.57c.71.23,1.48-.17,1.71-.89.23-.72-.17-1.48-.89-1.71-7.01-2.21-14.5,1.71-16.71,8.71-.23.72.17,1.48.89,1.71.14.04.27.06.41.06.58,0,1.11-.37,1.3-.95,1.75-5.58,7.72-8.69,13.3-6.93Zm221.99-58.56c-.06.49-.39.91-.85,1.09l-47.17,18.45v107.25c0,.75-.61,1.36-1.36,1.36h-227.53c-.75,0-1.36-.61-1.36-1.36v-107.25l-47.17-18.45c-.46-.18-.79-.6-.85-1.09-.06-.49.15-.98.55-1.27l38.34-27.86c.35-.25.8-.33,1.21-.2l42.74,13.42h160.61l42.74-13.42c.41-.13.86-.06,1.21.2l38.34,27.86c.4.29.61.78.55,1.27Zm-81.28,17.26h28.6l-28.6-28.53v28.53Zm-161.03,0h158.31v-30.45h-158.31v30.45Zm-23.23-11.91l19.32-19.27-40.15-12.6-35.78,25.99,44.89,17.56,11.71-11.68Zm-8.09,11.91h28.6v-28.53l-28.6,28.53Zm222.88,2.72h-224.81v105.46h224.81v-105.46Zm46.59-20.51l-35.78-25.99-40.14,12.6,31.03,30.95,44.89-17.56Zm-91.14,72.66c0,4.27-3.47,7.74-7.74,7.74s-7.74-3.47-7.74-7.74,3.47-7.74,7.74-7.74,7.74,3.47,7.74,7.74Zm-2.72,0c0-2.77-2.25-5.02-5.02-5.02s-5.02,2.25-5.02,5.02,2.25,5.02,5.02,5.02,5.02-2.25,5.02-5.02Z" })), Ks = W.div`
  height: 440px;
  width: 514px;
  position: relative;
`, Qs = W.p`
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 20px;
  letter-spacing: 1px;
  line-height: 1px;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, ei = () => {
  const { feelingEmpty: e } = rt();
  return /* @__PURE__ */ ae(Ks, { children: [
    /* @__PURE__ */ O(qs, {}),
    /* @__PURE__ */ O(Qs, { children: e })
  ] });
}, ti = W.div`
  position: relative;
  display: flex;
`, ri = W.div`
  position: relative;
  margin-left: ${Me};
  display: flex;
  flex-direction: column;
  contain: paint;
`, ni = W.div`
  width: calc(${({ width: e }) => e}px - ${Me}px);
  position: sticky;
  top: 0;
  height: 100%;
  left: ${Me}px;
  display: flex;
  justify-content: center;
  align-items: center;
`, _r = {
  coords: { x: 0, y: 0 },
  resourceIndex: 0,
  disposition: {
    taken: { hours: 0, minutes: 0 },
    free: { hours: 0, minutes: 0 },
    overtime: { hours: 0, minutes: 0 }
  }
}, oi = ({
  data: e,
  onTileClick: n,
  onItemClick: t,
  toggleTheme: r,
  topBarWidth: o
}) => {
  const [s, i] = me(_r), [c, l] = me(e), [a, d] = me(!1), [u, f] = me(""), {
    zoom: v,
    startDate: y,
    config: { includeTakenHoursOnWeekendsInDayView: b, showTooltip: p, showThemeToggle: _ }
  } = tt(), A = xe(null), {
    page: L,
    projectsPerPerson: H,
    totalRowsPerPage: m,
    rowsPerItem: S,
    currentPageNum: E,
    pagesAmount: j,
    next: F,
    previous: D,
    reset: ee
  } = Ys(c), K = xe(
    Ve(
      (N, C, I, B, X) => {
        if (!A.current)
          return;
        const { left: te, top: k } = A.current.getBoundingClientRect(), M = { x: N.clientX - te, y: N.clientY - k }, {
          coords: { x: P, y: z },
          resourceIndex: h,
          disposition: V
        } = Ps(
          C,
          M,
          I,
          B,
          X,
          b
        );
        i({ coords: { x: P, y: z }, resourceIndex: h, disposition: V }), d(!0);
      },
      300
    )
  ), T = xe(
    Ve((N, C) => {
      ee(), l(
        N.filter(
          (I) => I.label.title.toLowerCase().includes(C.toLowerCase())
        )
      );
    }, 500)
  ), $ = (N) => {
    const C = N.target.value;
    f(C), T.current.cancel(), T.current(e, C);
  }, w = be(() => {
    K.current.cancel(), d(!1), i(_r);
  }, []);
  return pe(() => {
    const N = (I) => K.current(I, y, S, H, v), C = A.current;
    if (C)
      return C.addEventListener("mousemove", N), C.addEventListener("mouseleave", w), () => {
        C.removeEventListener("mousemove", N), C.removeEventListener("mouseleave", w);
      };
  }, [K, w, H, S, y, v]), pe(() => {
    u || l(e);
  }, [e, u]), /* @__PURE__ */ ae(ti, { children: [
    /* @__PURE__ */ O(
      Bi,
      {
        data: L,
        pageNum: E,
        pagesAmount: j,
        rows: S,
        onLoadNext: F,
        onLoadPrevious: D,
        searchInputValue: u,
        onSearchInputChange: $,
        onItemClick: t
      }
    ),
    /* @__PURE__ */ ae(ri, { children: [
      /* @__PURE__ */ O(
        ua,
        {
          zoom: v,
          topBarWidth: o,
          showThemeToggle: _,
          toggleTheme: r
        }
      ),
      e.length ? /* @__PURE__ */ O(
        $s,
        {
          data: L,
          zoom: v,
          rows: m,
          ref: A,
          onTileClick: n
        }
      ) : /* @__PURE__ */ O(ni, { width: o, children: /* @__PURE__ */ O(ei, {}) }),
      p && a && (s == null ? void 0 : s.resourceIndex) > -1 && /* @__PURE__ */ O(_a, { tooltipData: s, zoom: v })
    ] })
  ] });
}, bn = `
  background: none;
  outline: none;
  border: none;
  font-size: 100%;
  line-height: 1.15
  margin: 0
`, si = W.div`
  width: calc(${({ width: e }) => e}px - ${Me}px);
  position: sticky;
  top: 0;
  left: ${Me}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${({ theme: e }) => e.navHeight};
  padding: 0.625rem 1rem;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, ii = W.div`
  display: flex;
  gap: 1.875rem;
`, Er = W.button`
  ${bn};
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${({ theme: e }) => e.colors.textPrimary};
  :not(:disabled) {
    cursor: pointer;
  }
`, ai = W.button`
  ${bn};
  position: relative;
  font-weight: 600;
  cursor: pointer;
  line-height: 1.5rem;
  color: ${({ theme: e }) => e.colors.textPrimary};

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 1px;
    height: 1.5rem;
    background-color: ${({ theme: e }) => e.colors.textPrimary};
  }
  &::before {
    left: -1.125rem;
  }
  &::after {
    right: -1.125rem;
  }
`, ci = W.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 0.875rem;
  color: ${({ theme: e }) => e.colors.textPrimary};
`, li = W.div`
  display: flex;
`, di = W.div`
  display: flex;
  align-items: "center";
  gap: 1.25rem;
`, ui = ({ width: e, showThemeToggle: n, toggleTheme: t }) => {
  const { topbar: r } = rt(), {
    data: o,
    config: s,
    handleGoNext: i,
    handleGoPrev: c,
    handleGoToday: l,
    zoomIn: a,
    zoomOut: d,
    isNextZoom: u,
    isPrevZoom: f,
    handleFilterData: v,
    onClearFilterData: y
  } = tt(), { colors: b } = Be(), { filterButtonState: p = -1 } = s, _ = (A) => {
    A.stopPropagation(), y == null || y();
  };
  return /* @__PURE__ */ ae(si, { width: e, children: [
    /* @__PURE__ */ O(li, { children: p >= 0 && /* @__PURE__ */ ae(
      Tt,
      {
        variant: p ? "filled" : "outlined",
        iconName: "filter",
        width: "16",
        height: "16",
        onClick: v,
        children: [
          r.filters,
          !!p && /* @__PURE__ */ O("span", { onClick: _, children: /* @__PURE__ */ O(Se, { iconName: "close", height: "16", width: "16", fill: b.textSecondary }) })
        ]
      }
    ) }),
    /* @__PURE__ */ ae(ii, { children: [
      /* @__PURE__ */ ae(Er, { disabled: !(o != null && o.length), onClick: c, children: [
        /* @__PURE__ */ O(Se, { iconName: "arrowLeft", height: "15", fill: b.textPrimary }),
        r.prev
      ] }),
      /* @__PURE__ */ O(ai, { onClick: l, children: r.today }),
      /* @__PURE__ */ ae(Er, { disabled: !(o != null && o.length), onClick: i, children: [
        r.next,
        /* @__PURE__ */ O(Se, { iconName: "arrowRight", height: "15", fill: b.textPrimary })
      ] })
    ] }),
    /* @__PURE__ */ ae(di, { children: [
      n && /* @__PURE__ */ O(Oa, { toggleTheme: t }),
      /* @__PURE__ */ ae(ci, { children: [
        r.view,
        /* @__PURE__ */ O(
          Tt,
          {
            isDisabled: !f,
            onClick: d,
            isFullRounded: !0,
            iconName: "subtract",
            width: "14"
          }
        ),
        /* @__PURE__ */ O(
          Tt,
          {
            isDisabled: !u,
            onClick: a,
            isFullRounded: !0,
            iconName: "add",
            width: "14"
          }
        )
      ] })
    ] })
  ] });
}, hi = (e) => /* @__PURE__ */ Z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 5.25C12.4142 5.25 12.75 5.58579 12.75 6V11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H12.75V18C12.75 18.4142 12.4142 18.75 12 18.75C11.5858 18.75 11.25 18.4142 11.25 18V12.75H6C5.58579 12.75 5.25 12.4142 5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H11.25V6C11.25 5.58579 11.5858 5.25 12 5.25Z" })), fi = (e) => /* @__PURE__ */ Z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.25 12C5.25 11.5858 5.58579 11.25 6 11.25H18C18.4142 11.25 18.75 11.5858 18.75 12C18.75 12.4142 18.4142 12.75 18 12.75H6C5.58579 12.75 5.25 12.4142 5.25 12Z" })), pi = (e) => /* @__PURE__ */ Z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.33008 2.76001C4.65781 2.76001 4.06006 3.31031 4.06006 4.13V6.45001C4.06006 6.6129 4.11982 6.88231 4.25809 7.19052C4.39356 7.49249 4.5738 7.76311 4.75036 7.93967L4.76365 7.9533L8.60367 11.9933C8.61628 12.0066 8.6284 12.0203 8.64001 12.0345C8.90276 12.3549 9.14136 12.7775 9.31532 13.2131C9.48804 13.6456 9.62006 14.1484 9.62006 14.63V19.98C9.62006 20.9693 10.7551 21.5824 11.6002 21.0655L13.0033 20.1599L13.0205 20.1491C13.1208 20.0882 13.2665 19.9358 13.3909 19.6966C13.5132 19.4611 13.5701 19.2272 13.5701 19.07C13.5701 18.6558 13.9059 18.32 14.3201 18.32C14.7343 18.32 15.0701 18.6558 15.0701 19.07C15.0701 19.5228 14.9269 19.9939 14.7218 20.3885C14.5202 20.7761 14.2142 21.1755 13.8093 21.425L12.4068 22.3302L12.3945 22.3379C10.6202 23.435 8.12006 22.2286 8.12006 19.98V14.63C8.12006 14.4016 8.05207 14.0944 7.92229 13.7694C7.79829 13.4589 7.63905 13.1851 7.49575 13.0049L3.68249 8.9931C3.3523 8.66063 3.08013 8.22943 2.8895 7.80449C2.70028 7.38271 2.56006 6.89712 2.56006 6.45001V4.13C2.56006 2.5297 3.78235 1.26001 5.33008 1.26001H18.67C20.1942 1.26001 21.4401 2.50577 21.4401 4.03V6.25C21.4401 6.79751 21.2722 7.36158 21.0548 7.83769C20.8366 8.31586 20.5373 8.77344 20.2104 9.10034C19.9175 9.39323 19.4426 9.39323 19.1497 9.10034C18.8568 8.80744 18.8568 8.33257 19.1497 8.03968C19.3228 7.86657 19.5285 7.56915 19.6903 7.21482C19.853 6.85843 19.9401 6.51249 19.9401 6.25V4.03C19.9401 3.33423 19.3658 2.76001 18.67 2.76001H5.33008Z", fill: "currentColor" }), /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.0701 10.87C14.717 10.87 13.6201 11.9669 13.6201 13.32C13.6201 14.6731 14.717 15.77 16.0701 15.77C17.4232 15.77 18.5201 14.6731 18.5201 13.32C18.5201 11.9669 17.4232 10.87 16.0701 10.87ZM12.1201 13.32C12.1201 11.1385 13.8885 9.37 16.0701 9.37C18.2516 9.37 20.0201 11.1385 20.0201 13.32C20.0201 15.5015 18.2516 17.27 16.0701 17.27C13.8886 17.27 12.1201 15.5015 12.1201 13.32Z", fill: "currentColor" }), /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.3397 15.5897C18.6326 15.2968 19.1075 15.2968 19.4004 15.5897L20.4004 16.5897C20.6933 16.8826 20.6933 17.3574 20.4004 17.6503C20.1075 17.9432 19.6326 17.9432 19.3397 17.6503L18.3397 16.6503C18.0468 16.3574 18.0468 15.8826 18.3397 15.5897Z", fill: "currentColor" })), mi = (e) => /* @__PURE__ */ Z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M10.1003 5.39966C10.3932 5.69256 10.3932 6.16743 10.1003 6.46032L5.31065 11.25H20.5C20.9142 11.25 21.25 11.5858 21.25 12C21.25 12.4142 20.9142 12.75 20.5 12.75H5.31067L10.1003 17.5397C10.3932 17.8326 10.3932 18.3074 10.1003 18.6003C9.80744 18.8932 9.33256 18.8932 9.03967 18.6003L2.96967 12.5303C2.82902 12.3897 2.75 12.1989 2.75 12C2.75 11.8011 2.82902 11.6103 2.96967 11.4697L9.03967 5.39966C9.33256 5.10677 9.80744 5.10677 10.1003 5.39966Z" })), vi = (e) => /* @__PURE__ */ Z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8997 5.39966C14.1926 5.10677 14.6674 5.10677 14.9603 5.39966L21.0303 11.4697C21.171 11.6103 21.25 11.8011 21.25 12C21.25 12.1989 21.171 12.3897 21.0303 12.5303L14.9603 18.6003C14.6674 18.8932 14.1926 18.8932 13.8997 18.6003C13.6068 18.3074 13.6068 17.8326 13.8997 17.5397L18.6893 12.75H3.5C3.08579 12.75 2.75 12.4142 2.75 12C2.75 11.5858 3.08579 11.25 3.5 11.25H18.6893L13.8997 6.46032C13.6068 6.16743 13.6068 5.69256 13.8997 5.39966Z" })), yi = (e) => /* @__PURE__ */ Z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 14.2736 3.57027 16.3556 4.93102 17.9662C5.29334 17.2869 5.86897 16.6773 6.61129 16.1778L6.61502 16.1753L6.61503 16.1753C8.13359 15.1666 10.0914 14.685 12.0075 14.685C13.9234 14.685 15.8774 15.1665 17.3871 16.1767L17.3887 16.1778C18.131 16.6773 18.7067 17.2869 19.069 17.9662C20.4297 16.3556 21.25 14.2736 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75ZM13.6371 22.6261C18.7972 21.8377 22.75 17.3805 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C12.1855 22.75 12.37 22.7453 12.5532 22.736C12.8268 22.7221 13.0977 22.698 13.3655 22.6641C13.4564 22.6526 13.5469 22.6399 13.6371 22.6261ZM17.9216 19.1C17.7538 18.5356 17.323 17.9417 16.5521 17.4228C15.3419 16.6133 13.6963 16.185 12.0075 16.185C10.3195 16.185 8.66811 16.613 7.44686 17.4235C6.67666 17.9422 6.24614 18.5359 6.07838 19.1C7.06079 19.9227 8.21266 20.5433 9.47543 20.9013C10.2779 21.1284 11.1248 21.25 12 21.25C12.8752 21.25 13.7221 21.1284 14.5246 20.9013C15.7873 20.5433 16.9392 19.9227 17.9216 19.1ZM12 6.98C10.5957 6.98 9.47 8.11272 9.47 9.51C9.47 10.8588 10.5236 11.9585 11.8587 12.0284C11.9506 12.0209 12.0487 12.0202 12.1439 12.0283C13.4732 11.9572 14.5212 10.8618 14.53 9.50795C14.5289 8.1131 13.3951 6.98 12 6.98ZM7.97 9.51C7.97 7.28728 9.7643 5.48 12 5.48C14.2242 5.48 16.03 7.28579 16.03 9.51V9.51424H16.03C16.0177 11.6826 14.3122 13.4557 12.1456 13.5296C12.1016 13.5311 12.0575 13.5287 12.0139 13.5225C12.0182 13.5231 12.0191 13.523 12.0163 13.5228C12.0137 13.5227 12.0094 13.5225 12.0037 13.5225C11.9915 13.5225 11.9801 13.5233 11.973 13.5242C11.9337 13.5291 11.8941 13.5309 11.8544 13.5296C9.69161 13.4558 7.97 11.6855 7.97 9.51Z", fill: "#777" })), gi = (e) => /* @__PURE__ */ Z.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#EF4444" }), /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#EF4444" }), /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 6.01326C9.23021 6.18411 9.23021 6.46112 9.05936 6.63198L5.55936 10.132C5.3885 10.3028 5.11149 10.3028 4.94064 10.132C4.76979 9.96112 4.76979 9.68411 4.94064 9.51326L8.44064 6.01326C8.6115 5.8424 8.8885 5.8424 9.05936 6.01326Z", fill: "#EF4444" }), /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.05936 10.132C8.8885 10.3028 8.61149 10.3028 8.44064 10.132L4.94064 6.63198C4.76979 6.46112 4.76979 6.18411 4.94064 6.01326C5.11149 5.8424 5.3885 5.8424 5.55936 6.01326L9.05936 9.51326C9.23021 9.68411 9.23021 9.96112 9.05936 10.132Z", fill: "#EF4444" }), /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#EF4444" })), wi = (e) => /* @__PURE__ */ Z.createElement("svg", { width: 14, height: 14, viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M1.3125 2.91536C1.3125 2.02941 2.03071 1.3112 2.91667 1.3112H11.0833C11.9693 1.3112 12.6875 2.02941 12.6875 2.91536V11.082C12.6875 11.968 11.9693 12.6862 11.0833 12.6862H2.91667C2.03071 12.6862 1.3125 11.968 1.3125 11.082V2.91536ZM2.91667 2.1862C2.51396 2.1862 2.1875 2.51266 2.1875 2.91536V11.082C2.1875 11.4847 2.51396 11.8112 2.91667 11.8112H11.0833C11.486 11.8112 11.8125 11.4847 11.8125 11.082V2.91536C11.8125 2.51266 11.486 2.1862 11.0833 2.1862H2.91667Z", fill: "#278904" }), /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.375 0.144531C4.61662 0.144531 4.8125 0.340407 4.8125 0.582031V3.20703C4.8125 3.44866 4.61662 3.64453 4.375 3.64453C4.13338 3.64453 3.9375 3.44866 3.9375 3.20703V0.582031C3.9375 0.340407 4.13338 0.144531 4.375 0.144531Z", fill: "#278904" }), /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.625 0.144531C9.86662 0.144531 10.0625 0.340407 10.0625 0.582031V3.20703C10.0625 3.44866 9.86662 3.64453 9.625 3.64453C9.38338 3.64453 9.1875 3.44866 9.1875 3.20703V0.582031C9.1875 0.340407 9.38338 0.144531 9.625 0.144531Z", fill: "#278904" }), /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.6875 4.66536C12.6875 4.90699 12.4916 5.10286 12.25 5.10286H1.75C1.50838 5.10286 1.3125 4.90699 1.3125 4.66536C1.3125 4.42374 1.50838 4.22786 1.75 4.22786H12.25C12.4916 4.22786 12.6875 4.42374 12.6875 4.66536Z", fill: "#278904" })), bi = (e) => /* @__PURE__ */ Z.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.59957 6.73486C3.40431 6.5396 3.40431 6.22301 3.59957 6.02775L7.64624 1.98108C7.74001 1.88732 7.86718 1.83464 7.99979 1.83464C8.1324 1.83464 8.25958 1.88732 8.35334 1.98108L12.4 6.02775C12.5953 6.22301 12.5953 6.5396 12.4 6.73486C12.2047 6.93012 11.8882 6.93012 11.6929 6.73486L8.4998 3.54175L8.4998 13.668C8.4998 13.9441 8.27594 14.168 7.9998 14.168C7.72365 14.168 7.4998 13.9441 7.4998 13.668L7.4998 3.54174L4.30668 6.73486C4.11142 6.93012 3.79483 6.93012 3.59957 6.73486Z" })), xi = (e) => /* @__PURE__ */ Z.createElement("svg", { width: 17, height: 16, viewBox: "0 0 17 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.09957 9.26775C4.29483 9.07249 4.61142 9.07249 4.80668 9.26775L7.9998 12.4609L7.9998 2.33463C7.9998 2.05848 8.22365 1.83463 8.4998 1.83463C8.77594 1.83463 8.9998 2.05848 8.9998 2.33463L8.9998 12.4609L12.1929 9.26775C12.3882 9.07249 12.7047 9.07249 12.9 9.26775C13.0953 9.46301 13.0953 9.77959 12.9 9.97486L8.85334 14.0215C8.75958 14.1153 8.6324 14.168 8.49979 14.168C8.36718 14.168 8.24001 14.1153 8.14624 14.0215L4.09957 9.97486C3.90431 9.77959 3.90431 9.46301 4.09957 9.26775Z" })), Ci = (e) => /* @__PURE__ */ Z.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11 4.75C7.54822 4.75 4.75 7.54822 4.75 11C4.75 14.4518 7.54822 17.25 11 17.25C14.4518 17.25 17.25 14.4518 17.25 11C17.25 7.54822 14.4518 4.75 11 4.75ZM3.25 11C3.25 6.71979 6.71979 3.25 11 3.25C15.2802 3.25 18.75 6.71979 18.75 11C18.75 12.87 18.0877 14.5853 16.9848 15.9242L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L15.9242 16.9848C14.5853 18.0877 12.87 18.75 11 18.75C6.71979 18.75 3.25 15.2802 3.25 11Z", fill: "#777777" })), Si = (e) => /* @__PURE__ */ Z.createElement("svg", { width: 16, height: 16, viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M3.64645 3.64645C3.84171 3.45118 4.15829 3.45118 4.35355 3.64645L8 7.29289L11.6464 3.64645C11.8417 3.45118 12.1583 3.45118 12.3536 3.64645C12.5488 3.84171 12.5488 4.15829 12.3536 4.35355L8.70711 8L12.3536 11.6464C12.5488 11.8417 12.5488 12.1583 12.3536 12.3536C12.1583 12.5488 11.8417 12.5488 11.6464 12.3536L8 8.70711L4.35355 12.3536C4.15829 12.5488 3.84171 12.5488 3.64645 12.3536C3.45118 12.1583 3.45118 11.8417 3.64645 11.6464L7.29289 8L3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645Z" })), Mi = (e) => /* @__PURE__ */ Z.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("path", { d: "M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z", fill: "#1C274C" })), $i = (e) => /* @__PURE__ */ Z.createElement("svg", { width: "800px", height: "800px", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...e }, /* @__PURE__ */ Z.createElement("circle", { cx: 12, cy: 12, r: 5, stroke: "#1C274C", strokeWidth: 1.5 }), /* @__PURE__ */ Z.createElement("path", { d: "M12 2V4", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ Z.createElement("path", { d: "M12 20V22", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ Z.createElement("path", { d: "M4 12L2 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ Z.createElement("path", { d: "M22 12L20 12", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ Z.createElement("path", { d: "M19.7778 4.22266L17.5558 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ Z.createElement("path", { d: "M4.22217 4.22266L6.44418 6.25424", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ Z.createElement("path", { d: "M6.44434 17.5557L4.22211 19.7779", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" }), /* @__PURE__ */ Z.createElement("path", { d: "M19.7778 19.7773L17.5558 17.5551", stroke: "#1C274C", strokeWidth: 1.5, strokeLinecap: "round" })), ki = {
  add: hi,
  subtract: fi,
  filter: pi,
  arrowLeft: mi,
  arrowRight: vi,
  defaultAvatar: yi,
  calendarWarning: gi,
  calendarFree: wi,
  arrowDown: xi,
  arrowUp: bi,
  search: Ci,
  close: Si,
  moon: Mi,
  sun: $i
}, Se = ({ iconName: e, width: n, height: t, fill: r, className: o }) => {
  const { colors: s } = Be(), i = ki[e];
  return i ? /* @__PURE__ */ O(
    i,
    {
      style: { transition: ".5s ease" },
      fill: r ?? s.accent,
      width: n,
      height: t,
      className: o
    }
  ) : null;
}, _i = (e, n, t) => ({
  outlined: {
    color: t ? e.colors.disabled : e.colors.accent,
    border: `1px solid ${t ? e.colors.disabled : e.colors.accent}`,
    background: "transparent"
  },
  filled: {
    color: t ? e.colors.primary : e.colors.textSecondary,
    background: t ? e.colors.disabled : e.colors.accent,
    border: "1px solid transparent"
  }
})[n], Ei = W.button`
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  min-height: 24px;
  border-radius: ${({ isFullRounded: e }) => e ? "50%" : "4px"};
  cursor: ${({ disabled: e }) => e ? "auto" : "pointer"};
  font-size: 14px;
  gap: 4px;
  padding: ${({ hasChildren: e }) => e ? "0 10px" : "0"};
  transition: 0.5s ease;
  ${({ theme: e, variant: n, disabled: t }) => _i(e, n, t)}
`, Tt = ({
  iconName: e,
  width: n,
  height: t,
  fill: r,
  className: o,
  onClick: s,
  children: i,
  isFullRounded: c,
  isDisabled: l,
  variant: a = "outlined"
}) => {
  const { colors: d } = Be();
  return /* @__PURE__ */ ae(
    Ei,
    {
      onClick: s,
      isFullRounded: c,
      hasChildren: !!i,
      disabled: l,
      variant: a,
      children: [
        /* @__PURE__ */ O(
          Se,
          {
            iconName: e,
            width: n,
            height: t,
            fill: l ? d.disabled : r,
            className: o
          }
        ),
        i
      ]
    }
  );
}, Ti = W.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  overflow-x: ${({ showScroll: e }) => e ? "scroll" : "hidden"};
  background-color: ${({ theme: e }) => e.colors.gridBackground};
`, Pi = W.div`
  position: relative;
`, Ya = ({
  data: e,
  config: n,
  startDate: t,
  onRangeChange: r,
  onTileClick: o,
  onFilterData: s,
  onClearFilterData: i,
  onItemClick: c,
  isLoading: l
}) => {
  var H;
  const a = Ye(
    () => ({
      zoom: 0,
      filterButtonState: 1,
      includeTakenHoursOnWeekendsInDayView: !1,
      showTooltip: !0,
      translations: void 0,
      ...n
    }),
    [n]
  ), d = xe(null), [u, f] = me((H = d.current) == null ? void 0 : H.clientWidth), v = Ye(() => R(t), [t]), [y, b] = me(a.defaultTheme ?? "light"), p = () => {
    b(y === "light" ? "dark" : "light");
  }, _ = y === "light" ? ko : _o, A = a.theme ? a.theme[_.mode] : {}, L = {
    ..._,
    colors: {
      ..._.colors,
      ...A
    }
  };
  return pe(() => {
    const m = () => {
      d.current && f(d.current.clientWidth);
    };
    return m(), window.addEventListener("resize", m), () => window.removeEventListener("resize", m);
  }, []), d.current, /* @__PURE__ */ ae(Ft, { children: [
    /* @__PURE__ */ O($o, {}),
    /* @__PURE__ */ O(xo, { theme: L, children: /* @__PURE__ */ O(Js, { lang: a.lang, translations: a.translations, children: /* @__PURE__ */ O(
      xs,
      {
        data: e,
        isLoading: !!l,
        config: a,
        onRangeChange: r,
        defaultStartDate: v,
        onFilterData: s,
        onClearFilterData: i,
        children: /* @__PURE__ */ O(
          Ti,
          {
            showScroll: !!e.length,
            id: je,
            ref: d,
            children: /* @__PURE__ */ O(Pi, { children: /* @__PURE__ */ O(
              oi,
              {
                data: e,
                onTileClick: o,
                topBarWidth: u ?? 0,
                onItemClick: c,
                toggleTheme: p
              }
            ) })
          }
        )
      }
    ) }) })
  ] });
}, Oi = W.div`
  padding: 4px 11px 0;
  width: 100%;
  border-top: ${({ intent: e, theme: n }) => e === "next" ? `1px solid ${n.colors.border}` : "none"};
`, Ri = W.button`
  margin-top: 0px;
  padding: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${({ theme: e }) => e.colors.accent};
  border-radius: 4px;
  font-size: 14px;
  color: ${({ theme: e }) => e.colors.accent};
  line-height: 150%;
  letter-spacing: 1px;
  cursor: pointer;
  opacity: ${({ isVisible: e }) => e ? "1" : "0"};
  pointer-events: ${({ isVisible: e }) => e ? "auto" : "none"};
  &:hover {
    transition: 0.5s ease;
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Ai = W.div`
  position: absolute;
  max-height: 16px;
  margin: 0 4px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Di = W.p`
  ${Qe}
  margin-left: 14px;
  width: 100%;
  text-align: center;
`, Tr = ({
  intent: e,
  onClick: n,
  icon: t,
  isVisible: r,
  pageNum: o,
  pagesAmount: s
}) => {
  const { loadNext: i, loadPrevious: c } = rt(), l = e === "next" ? `${i} ${o + 2}/${s}` : `${c} ${o}/${s}`;
  return /* @__PURE__ */ O(Oi, { intent: e, children: /* @__PURE__ */ ae(Ri, { onClick: n, isVisible: r, children: [
    t && /* @__PURE__ */ O(Ai, { children: t }),
    /* @__PURE__ */ O(Di, { children: l })
  ] }) });
}, Yi = W.div`
  min-width: ${Me + "px"};
  max-width: ${Me + "px"};
  min-height: 100vh;
  position: sticky;
  left: 0;
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 4px 15px rgba(39, 55, 75, 0.16);
  z-index: 2;
`, Li = W.div`
  padding-bottom: 4px;
  position: sticky;
  top: 0;
  height: 124px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: ${Me}px;
  background-color: ${({ theme: e }) => e.colors.background};
  z-index: 3;
`, Ii = W.input`
  height: 100%;
  width: calc(100% - 44px);
  background-color: transparent;
  color: ${({ theme: e }) => e.colors.textPrimary};
  padding: 7px 0 7px 12px;
  border: 0;
  outline: none;
  &::placeholder {
    color: ${({ theme: e }) => e.colors.placeholder};
  }
`, Ni = W.div`
  margin-left: 10px;
  height: 36px;
  width: calc(100% - 20px); //20px = 10px margin each side
  background-color: ${({ theme: e }) => e.colors.primary};
  border: 1px solid
    ${({ theme: e, isFocused: n }) => n ? e.colors.accent : e.colors.border};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    margin-left: auto;
    margin-right: 12px;
    height: 24px;
    width: 24px;
  }
`, Hi = W.div`
  display: flex;
  align-items: ${({ rows: e }) => e > 1 ? "start" : "center"};
  padding: 0.813rem 0 0.813rem 1rem;
  width: 100%;
  min-height: ${we}px;
  height: calc(${we}px * ${({ rows: e }) => e});
  border-top: 1px solid ${({ theme: e }) => e.colors.border};
  transition: 0.5s ease;
  cursor: ${({ clickable: e }) => e ? "pointer" : "auto"};
  &:hover {
    background-color: ${({ theme: e }) => e.colors.hover};
  }
`, Wi = W.div`
  display: flex;
  align-items: center;
`, Zi = W.div`
  margin-right: 0.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`, Fi = W.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`, zi = W.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
`, Pr = W.p`
  margin: 0;
  padding: 0;
  font-size: ${({ isMain: e }) => e ? 0.75 + "rem" : 0.625 + "rem"};
  letter-spacing: ${({ isMain: e }) => e ? "1px" : 0.5 + "px"};
  line-height: ${({ isMain: e }) => e ? 1.125 + "rem" : 0.75 + "rem"};
  color: ${({ isMain: e, theme: n }) => e ? n.colors.textPrimary : n.colors.placeholder};
  text-overflow: ellipsis;
  display: inline-block;
  max-width: 144px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
`, ji = ({ id: e, item: n, rows: t, onItemClick: r }) => /* @__PURE__ */ O(
  Hi,
  {
    title: n.title + " | " + n.subtitle,
    clickable: typeof r == "function",
    rows: t,
    onClick: () => r == null ? void 0 : r({ id: e, label: n }),
    children: /* @__PURE__ */ ae(Wi, { children: [
      /* @__PURE__ */ O(Zi, { children: n.icon ? /* @__PURE__ */ O(Fi, { src: n.icon, alt: "Icon" }) : /* @__PURE__ */ O(Se, { iconName: "defaultAvatar" }) }),
      /* @__PURE__ */ ae(zi, { children: [
        /* @__PURE__ */ O(Pr, { isMain: !0, children: n.title }),
        /* @__PURE__ */ O(Pr, { children: n.subtitle })
      ] })
    ] })
  }
), Bi = ({
  data: e,
  rows: n,
  onLoadNext: t,
  onLoadPrevious: r,
  pageNum: o,
  pagesAmount: s,
  searchInputValue: i,
  onSearchInputChange: c,
  onItemClick: l
}) => {
  const [a, d] = me(!1), { search: u } = rt(), f = () => d((v) => !v);
  return /* @__PURE__ */ ae(Yi, { children: [
    /* @__PURE__ */ ae(Li, { children: [
      /* @__PURE__ */ ae(Ni, { isFocused: a, children: [
        /* @__PURE__ */ O(
          Ii,
          {
            placeholder: u,
            value: i,
            onChange: c,
            onFocus: f,
            onBlur: f
          }
        ),
        /* @__PURE__ */ O(Se, { iconName: "search" })
      ] }),
      /* @__PURE__ */ O(
        Tr,
        {
          intent: "previous",
          isVisible: o !== 0,
          onClick: r,
          icon: /* @__PURE__ */ O(Se, { iconName: "arrowUp", width: "16", height: "16" }),
          pageNum: o,
          pagesAmount: s
        }
      )
    ] }),
    e.map((v, y) => /* @__PURE__ */ O(
      ji,
      {
        id: v.id,
        item: v.label,
        rows: n[y],
        onItemClick: l
      },
      v.id
    )),
    /* @__PURE__ */ O(
      Tr,
      {
        intent: "next",
        isVisible: o !== s - 1,
        onClick: t,
        icon: /* @__PURE__ */ O(Se, { iconName: "arrowDown", width: "16", height: "16" }),
        pageNum: o,
        pagesAmount: s
      }
    )
  ] });
}, Vi = W.div`
  width: 388px;
  height: 100%;
  position: absolute;
  top: 0;
  left: ${({ position: e }) => e === "left" ? 0 : "auto"};
  right: ${({ position: e }) => e === "right" ? 0 : "auto"};
  background-color: ${({ theme: e }) => e.colors.secondary};
  opacity: 0.7;
  overflow: hidden;
  z-index: 1;
`, Gi = Mo`
from{
    left: -100%;
}
to{
    left: 100%;
}`, Ui = W.div`
  width: inherit;
  height: 100%;
  position: absolute;
  background: linear-gradient(90deg, #e6f3ff 1%, #9ec4e7 50%, #e6f3ff 100%);
  animation: ${Gi} 1s infinite;
`, Xi = ({ isLoading: e, position: n }) => e ? /* @__PURE__ */ O(Vi, { position: n, children: /* @__PURE__ */ O(Ui, {}) }) : null, Or = Xi, Ee = (e, n) => {
  const {
    ctx: t,
    x: r,
    y: o,
    width: s,
    height: i,
    textYPos: c,
    label: l,
    font: a,
    isBottomRow: d,
    fillStyle: u,
    topText: f,
    bottomText: v,
    labelBetweenCells: y
  } = e;
  if (t.beginPath(), t.strokeStyle = n.colors.border, t.setLineDash([]), l && a && c) {
    t.fillStyle = d && u ? u : n.colors.gridBackground, t.fillRect(r, o, s, i), y ? (t.moveTo(r, o), t.lineTo(r + s, o), t.stroke(), t.moveTo(r, o + i), t.lineTo(r + s, o + i), t.stroke(), t.moveTo(r + s / 2, o + i), t.lineTo(r + s / 2, o + i - 5), t.stroke()) : t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = a;
    const b = r + s / 2 - t.measureText(l).width / 2;
    t.textBaseline = "middle", t.fillStyle = n.colors.placeholder, t.fillText(l, b, c);
  }
  if (d && u && f && v) {
    t.fillStyle = u, t.fillRect(r, o, s, i), t.strokeRect(r + 0.5, o + 0.5, s, i), t.font = f.font;
    const b = r + s / 2 - t.measureText(f.label).width / 2;
    t.fillStyle = f.color, t.fillText(f.label, b, f.y), t.font = v.font;
    const p = r + s / 2 - t.measureText(v.label).width / 2;
    t.fillStyle = v.color, t.fillText(v.label, p, v.y);
  }
}, tr = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return o === "yearView" ? t ? n.colors.tertiary : n.colors.gridBackground : t || !r ? n.colors.secondary : n.colors.primary;
}, Zt = (e, n) => {
  const { isCurrent: t, isBusinessDay: r, variant: o } = e;
  return t ? o === "bottomRow" ? n.colors.placeholder : n.colors.accent : r ? o === "bottomRow" ? n.colors.placeholder : n.colors.textPrimary : n.colors.placeholder;
}, Ji = (e, n, t, r) => {
  const o = qe - Ze / Po, s = qe - Ze / Oo, i = Re + et;
  let c = 0;
  for (let l = 0; l < n; l++) {
    const a = nn(
      R(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(l, "days")
    );
    Ee(
      {
        ctx: e,
        x: c,
        y: i,
        width: ge,
        height: Ze,
        isBottomRow: !0,
        fillStyle: tr(
          {
            isCurrent: a.isCurrentDay,
            isBusinessDay: a.isBusinessDay
          },
          r
        ),
        topText: {
          y: o,
          label: a.dayName.toUpperCase(),
          font: Ce.bottomRow.name,
          color: Zt(
            { isCurrent: a.isCurrentDay, isBusinessDay: a.isBusinessDay },
            r
          )
        },
        bottomText: {
          y: s,
          label: `${a.dayOfMonth}`,
          font: Ce.bottomRow.number,
          color: Zt(
            {
              isCurrent: a.isCurrentDay,
              isBusinessDay: a.isBusinessDay,
              variant: "bottomRow"
            },
            r
          )
        }
      },
      r
    ), c += ge;
  }
}, qi = (e, n, t, r) => {
  let o = -(t.dayOfMonth - 1) * Te;
  const s = Re;
  let c = t.month;
  for (let l = 0; l < n; l++) {
    c >= yt && (c = 0);
    const a = Ct(t, l) * Te;
    Ee(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: et,
        textYPos: tn,
        label: R().month(c).format("MMMM").toUpperCase(),
        font: Ce.bottomRow.number
      },
      r
    ), o += a, c++;
  }
}, Ki = (e, n, t) => {
  let o = 0, s = 0, i = 0, c = R(
    `${n.year}-${n.month + 1}-${n.dayOfMonth}`
  ).month();
  o = -n.dayOfMonth * ge + ge;
  for (let l = 0; l < yt; l++)
    c > yt - 1 && (c = 0, i++), s = R(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).add(l, "months").daysInMonth() * ge, Ee(
      {
        ctx: e,
        x: o,
        y: 0,
        width: s,
        height: Re,
        textYPos: qt,
        label: R(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).month(c).format("MMMM").toUpperCase() + ` ${R(`${n.year + i}-${n.month + 1}-${n.dayOfMonth}`).month(c).format("YYYY")}`,
        font: Ce.topRow
      },
      t
    ), o += s, c++;
}, Qi = (e, n, t, r) => {
  const o = 7 * ge, s = Re, i = e.canvas.width / o + o, c = n.weekOfYear;
  let l = 0;
  for (let a = 0; a < i; a++) {
    const d = R(`${n.year}-${n.month + 1}-${n.dayOfMonth}`).day();
    let u = (c + a) % br;
    u <= 0 && (u += br), d !== 1 && a === 0 && (l = -d * ge + ge), Ee(
      {
        ctx: e,
        x: l,
        y: s,
        width: o,
        height: et,
        textYPos: tn,
        label: `${t.toUpperCase()} ${u}`,
        font: Ce.middleRow
      },
      r
    ), l += o;
  }
}, ea = (e, n, t, r, o) => {
  const s = qe - Ze / 1.6, i = qe - Ze / 4.5, c = Re + et;
  let l = 0;
  for (let a = 0; a < n; a++) {
    const d = R(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      a,
      "weeks"
    ), u = d.isSame(R(), "week");
    Ee(
      {
        ctx: e,
        x: l,
        y: c,
        width: Ie,
        height: Ze,
        isBottomRow: !0,
        fillStyle: tr({ isCurrent: u, variant: "yearView" }, o),
        topText: {
          y: s,
          label: d.isoWeek().toString(),
          font: Ce.bottomRow.name,
          color: Zt({ isCurrent: u }, o)
        },
        bottomText: {
          y: i,
          label: r.toUpperCase(),
          font: Ce.middleRow,
          color: o.colors.placeholder
        }
      },
      o
    ), l += Ie;
  }
}, ta = (e, n, t, r) => {
  const s = n.year, i = e.canvas.width * 2;
  let c = 0, l = 0, a = (wt(s) - t + 1) * Te, d = 0;
  for (; c + d <= i; )
    l > 0 && (a = wt(s + l) * Te), d + a > i && l > 0 && (a = Math.ceil((i - d) / Te) * Te), Ee(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Re,
        textYPos: qt,
        label: (s + l).toString(),
        font: Ce.topRow
      },
      r
    ), c += a, d += a, l++;
}, ra = (e, n, t, r) => {
  const o = Math.floor(n / gt) + 2, s = gt * ve;
  let l = -R(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ).hour() * ve + 0.5 * ve;
  for (let a = 0; a < o; a++) {
    const d = R(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(a, "day").format("dddd DD.MM.YYYY").toUpperCase();
    Ee(
      {
        ctx: e,
        x: l,
        y: Ke,
        width: s,
        height: ct,
        textYPos: Ke + ct / 2 + 2,
        label: d,
        font: Ce.bottomRow.number
      },
      r
    ), l += s;
  }
}, na = (e, n, t, r) => {
  const o = Math.ceil(n / gt), s = R(`${t.year}-${t.month + 1}-${t.dayOfMonth}`), i = s.add(o - 1, "days"), c = s.month(), l = i.add(1, "day").month(), a = c === l ? 1 : 2;
  let d = 0.5 * ve;
  for (let u = 0; u < a; u++) {
    const f = R(
      `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
    ), y = R(`${t.year}-${t.month + u + 1}-01T:23:59:59`).endOf("month"), b = y.format("MMMM").toUpperCase(), p = y.diff(f, "hour") + 1, _ = u === 0 ? p * ve : n * ve;
    Ee(
      {
        ctx: e,
        x: d,
        y: 0,
        width: _,
        height: Ke,
        textYPos: qt,
        label: b,
        font: Ce.topRow
      },
      r
    ), d += _;
  }
}, oa = (e, n, t, r) => {
  let o = 0;
  const s = Ke + ct, i = R(
    `${t.year}-${t.month + 1}-${t.dayOfMonth}T${t.hour}:00:00`
  ), c = ve;
  for (let l = 0; l < n; l++) {
    const a = i.add(l, "hours").format("HH:00").toUpperCase();
    Ee(
      {
        ctx: e,
        x: o,
        y: s,
        width: c,
        height: Nt,
        label: a,
        font: Ce.bottomRow.number,
        textYPos: Ke + ct + Nt / 2 + 2,
        labelBetweenCells: !0
      },
      r
    ), o += ve;
  }
}, sa = (e, n, t, r) => {
  const s = n.year, i = e.canvas.width * 2;
  let c = 0, l = 0, a = (wt(s) - t + 1) * Pe, d = 0;
  for (; c + d <= i; )
    l > 0 && (a = wt(s + l) * Pe), d + a > i && l > 0 && (a = Math.ceil((i - d) / Pe) * Pe), Ee(
      {
        ctx: e,
        x: c,
        y: 0,
        width: a,
        height: Jt,
        textYPos: Lo,
        label: (s + l).toString(),
        font: Ce.topRow
      },
      r
    ), c += a, d += a, l++;
}, ia = (e, n, t, r) => {
  let o = -(t.dayOfMonth - 1) * Pe;
  const s = at;
  let c = t.month;
  for (let l = 0; l < n; l++) {
    c >= yt && (c = 0);
    const a = Ct(t, l) * Pe, u = R(`${t.year}-${t.month + 1}-${t.dayOfMonth}`).add(
      l,
      "months"
    ).isSame(R(), "month");
    Ee(
      {
        ctx: e,
        x: o,
        y: s,
        width: a,
        height: at,
        textYPos: Io,
        fillStyle: tr({ isCurrent: u, variant: "yearView" }, r),
        label: R().month(c).format("MMMM").toUpperCase(),
        font: Ce.bottomRow.number,
        isBottomRow: !0
      },
      r
    ), o += a, c++;
  }
}, aa = (e, n, t, r, o, s, i) => {
  switch (n) {
    case -1:
      sa(e, r, s, i), ia(e, t, r, i);
      break;
    case 0:
      ta(e, r, s, i), qi(e, t, r, i), ea(e, t, r, o, i);
      break;
    case 1:
      Ki(e, r, i), Qi(e, r, o, i), Ji(e, t, r, i);
      break;
    case 2:
      na(e, t, r, i), ra(e, t, r, i), oa(e, t, r, i);
      break;
  }
}, ca = W.div`
  position: sticky;
  top: 0;
  z-index: 1;
`, la = W.div`
  height: ${qe}px;
  display: block;
`, da = W.canvas``, ua = ({ zoom: e, topBarWidth: n, showThemeToggle: t, toggleTheme: r }) => {
  const { week: o } = rt(), { date: s, cols: i, dayOfYear: c, startDate: l } = tt(), a = xe(null), d = Be(), u = be(
    (f) => {
      const v = er(), b = (e === -1 ? Eo : e === 2 ? To : qe) + 1;
      un(f, v, b), aa(f, e, i, l, o, c, d);
    },
    [i, c, l, o, e, d]
  );
  return pe(() => {
    if (!a.current)
      return;
    const f = a.current.getContext("2d");
    if (!f)
      return;
    const v = () => u(f);
    return window.addEventListener("resize", v), () => window.removeEventListener("resize", v);
  }, [u]), pe(() => {
    const f = a.current;
    if (!f)
      return;
    f.style.letterSpacing = "1px";
    const v = f.getContext("2d");
    v && u(v);
  }, [s, e, u]), /* @__PURE__ */ ae(ca, { children: [
    /* @__PURE__ */ O(ui, { width: n, showThemeToggle: t, toggleTheme: r }),
    /* @__PURE__ */ O(la, { id: Ro, children: /* @__PURE__ */ O(da, { ref: a }) })
  ] });
}, ha = (e, n, t) => {
  let r;
  switch (t) {
    case -1:
      r = Pe;
      break;
    case 0:
      r = Te;
      break;
    case 2:
      r = ve;
      break;
    default:
      r = ge;
  }
  const o = () => {
    let s;
    switch (t) {
      case 2:
        s = (e.startDate.diff(n.startDate, "minute") / ue + 1) * r - r / 2;
        break;
      default:
        s = (e.startDate.diff(n.startDate, "day") + 1) * r;
    }
    return Math.max(0, s);
  };
  if (e.startDate.isAfter(n.startDate) && e.endDate.isBefore(n.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = e.endDate.diff(e.startDate, "minute") / ue * r;
        break;
      default:
        s = e.endDate.diff(e.startDate, "day") * r + r;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(n.startDate) && e.endDate.isBefore(n.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = e.endDate.diff(n.startDate, "minute") / ue * r + 0.5 * r;
        break;
      default:
        s = e.endDate.diff(n.startDate, "day") * r + r;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isAfter(n.startDate) && e.endDate.isAfter(n.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = n.endDate.diff(e.startDate, "minute") / ue * r;
        break;
      default:
        s = n.endDate.diff(e.startDate, "day") * r + r;
    }
    return { x: o(), width: s };
  }
  if (e.startDate.isBefore(n.startDate) && e.endDate.isAfter(n.endDate)) {
    let s;
    switch (t) {
      case 2:
        s = n.endDate.diff(n.startDate, "minute") / ue * r;
        break;
      default:
        s = n.endDate.diff(n.startDate, "day") * r + r;
    }
    return { x: o(), width: s };
  }
  return { x: o(), width: 0 };
}, fa = (e, n, t, r, o, s) => {
  const i = e * we + Ao, c = n.hour(), l = t.hour();
  let a, d, u, f;
  switch (s) {
    case 2: {
      a = R(r), d = R(o), u = R(n).hour(c).minute(0), f = R(t).hour(l).minute(0);
      break;
    }
    default: {
      a = R(r).hour(0).minute(0), d = R(o).hour(23).minute(59), u = n, f = t;
      break;
    }
  }
  return {
    ...ha(
      { startDate: a, endDate: d },
      { startDate: u, endDate: f },
      s
    ),
    y: i
  };
}, pa = (e) => {
  if (!e)
    return "white";
  const n = [];
  for (let o = 1; o < 6; o += 2)
    n.push(parseInt(e.slice(o, o + 2), 16) / 255);
  const t = n.map(
    (o) => o <= 0.03928 ? o / 12.92 : Math.pow((o + 0.055) / 1.055, 2.4)
  );
  return 0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2] > 0.5 ? "black" : "white";
}, ma = W.button`
  ${Qe}
  height: ${Do}px;
  position: absolute;
  outline: none;
  border: none;
  border-radius: 4px;
  text-align: left;
  color: ${({ theme: e }) => e.colors.textPrimary};
  width: 100%;
  cursor: pointer;
`, va = W.div`
  margin: 10px 16px;
  position: relative;
  display: flex;
  font-size: 10px;
  letter-spacing: 0.5px;
  line-height: 12px;
`, Rr = W.p`
  ${Qe}
  ${Kr}
  display: inline;
  font-weight: ${({ bold: e }) => e ? "600" : "400"};
  &:first-child {
    &::after {
      content: "|";
      margin: 0 3px;
    }
  }
`, ya = W.p`
  ${Qe}
  ${Kr}
`, ga = W.div`
  position: sticky;
  left: ${Me + 16}px;
  overflow: hidden;
`, wa = ({ row: e, data: n, zoom: t, onTileClick: r }) => {
  const { date: o } = tt(), s = Qt(o, t), { y: i, x: c, width: l } = fa(
    e,
    s.startDate,
    s.endDate,
    n.startDate,
    n.endDate,
    t
  ), { colors: a } = Be();
  return /* @__PURE__ */ O(
    ma,
    {
      style: {
        left: `${c}px`,
        top: `${i}px`,
        backgroundColor: `${n.bgColor ?? a.defaultTile}`,
        width: `${l}px`,
        color: pa(n.bgColor ?? "")
      },
      onClick: () => r == null ? void 0 : r(n),
      children: /* @__PURE__ */ O(va, { children: /* @__PURE__ */ ae(ga, { children: [
        /* @__PURE__ */ O(Rr, { bold: !0, children: n.title }),
        /* @__PURE__ */ O(Rr, { children: n.subtitle }),
        /* @__PURE__ */ O(ya, { children: n.description })
      ] }) })
    }
  );
}, ba = ({ data: e, zoom: n, onTileClick: t }) => {
  const r = be(() => {
    let o = 0;
    return e.map((s, i) => (i > 0 && (o += Math.max(e[i - 1].data.length, 1)), s.data.map(
      (c, l) => c.map((a) => /* @__PURE__ */ O(
        wa,
        {
          row: l + o,
          data: a,
          zoom: n,
          onTileClick: t
        },
        a.id
      ))
    ))).flat(2);
  }, [e, t, n]);
  return /* @__PURE__ */ O(Ft, { children: r() });
}, xa = ba;
W.div`
  box-sizing: border-box;
  font-family: Inter;
  padding: 0 0.5rem;
  height: 125px;
  position: fixed;
  top: ${({ isExpanded: e }) => e ? 0 : "-129px"};
  display: flex;
  flex-direction: column;
  background-color: white;
  z-index: 999;
`;
W.div`
  width: 100%;
  margin-top: 2px;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.5px;
  background-color: white;
`;
W.label`
  font-size: 14px;
`;
W.input`
  width: 45px;
  height: 18px;
  font-size: 14px;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  background-color: white;
  outline: none;
`;
W.input`
  height: 18px;
  width: 18px;
`;
W.button`
  width: 100%;
  font-size: 14px;
  outline: none;
  background-color: #fff;
  border: 1px solid #0a11eb;
  border-radius: 4px;
  color: #0a11eb;
  cursor: pointer;
  &:hover {
    background-color: #c9e5ff;
  }
`;
W.form`
  background-color: rgba(255, 255, 255, 0.75);
`;
const Ca = W.div`
  padding: 8px 16px;
  position: absolute;
  background-color: ${({ theme: e }) => e.colors.tooltip};
  border-radius: 8px;
  z-index: 3;
  transition: all 0.25s;
  transition-timing-function: ease-out;
  pointer-events: none;
`, Sa = W.div`
  width: 100%;
`, Ma = W.div`
  position: absolute;
  width: 0;
  height: 0;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 14px solid ${({ theme: e }) => e.colors.tooltip};
`, $a = W.div``, Ar = W.div`
  display: flex;
  align-items: center;
  &:first-child {
    margin-bottom: 8px;
  }
`, Dr = W.div`
  ${Qe}
  display: flex;
  align-items: center;
  font-size: 10px;
  color: ${({ theme: e }) => e.colors.textSecondary};
  line-height: 12px;
  letter-spacing: 0.5px;
`, Yr = W.p`
  ${Qe}
  margin-left: 4px;
  color: ${({ theme: e }) => e.colors.textSecondary};
`, ka = W.span`
  font-size: 10px;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.warning};
`, _a = ({ tooltipData: e, zoom: n }) => {
  const { taken: t, free: r, over: o } = rt(), { coords: s, disposition: i } = e, c = xe(null);
  let l = Ie;
  switch (n) {
    case 0:
      l = Ie;
      break;
    case 1:
      l = ge;
      break;
    case 2:
      l = ve;
      break;
  }
  return Lr(() => {
    if (!c.current)
      return;
    const { width: a } = c.current.getBoundingClientRect();
    let d;
    switch (n) {
      case 2:
        d = a / 2 + l;
        break;
      default:
        d = a / 2 + l / 2;
        break;
    }
    c.current.style.left = `${s.x - d}px`, c.current.style.top = `${s.y + 8}px`;
  }, [s.x, l, i.overtime, s.y, n]), /* @__PURE__ */ ae(Ca, { ref: c, children: [
    /* @__PURE__ */ O(Sa, { children: /* @__PURE__ */ ae($a, { children: [
      /* @__PURE__ */ ae(Ar, { children: [
        /* @__PURE__ */ O(Se, { iconName: "calendarWarning", height: "14" }),
        /* @__PURE__ */ ae(Dr, { children: [
          /* @__PURE__ */ O(Yr, { children: `${t}: ${i.taken.hours}h ${i.taken.minutes}m` }),
          (i.overtime.hours > 0 || i.overtime.minutes > 0) && /* @__PURE__ */ ae(Ft, { children: [
            " ",
            "-",
            " ",
            /* @__PURE__ */ O(ka, { children: `${i.overtime.hours}h ${i.overtime.minutes}m ${o}` })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ ae(Ar, { children: [
        /* @__PURE__ */ O(Se, { iconName: "calendarFree", height: "14" }),
        /* @__PURE__ */ O(Dr, { children: /* @__PURE__ */ O(Yr, { children: `${r}: ${i.free.hours}h ${i.free.minutes}m` }) })
      ] })
    ] }) }),
    /* @__PURE__ */ O(Ma, {})
  ] });
}, Ea = W.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  width: 60px;
  height: 26px;
  background-color: ${({ theme: e }) => e.colors.secondary};
  border-radius: 30px;
  position: relative;
  transition: background-color 0.3s ease;
`, Ta = W.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme: e }) => e.colors.button};
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: ${({ theme: e }) => e.mode === "light" ? "4px" : "34px"};
  transition: left 0.3s ease;
`, Pa = W.div`
  position: absolute;
  top: 5px;
  left: ${({ theme: e }) => e.mode === "light" ? "38px" : "4px"};
  transition: left 0.3s ease;
`, Oa = ({ toggleTheme: e }) => {
  const n = Be();
  return /* @__PURE__ */ ae(Ea, { onClick: e, children: [
    /* @__PURE__ */ O(Ta, {}),
    /* @__PURE__ */ O(Pa, { children: n.mode === "light" ? /* @__PURE__ */ O(Se, { iconName: "sun", height: "16", width: "16" }) : /* @__PURE__ */ O(Se, { iconName: "moon", height: "16", width: "16" }) })
  ] });
};
export {
  Ya as Scheduler
};
