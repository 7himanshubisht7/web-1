(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
function xm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Vd = {
    exports: {}
}
  , Es = {}
  , Dd = {
    exports: {}
}
  , D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ii = Symbol.for("react.element")
  , wm = Symbol.for("react.portal")
  , zm = Symbol.for("react.fragment")
  , Sm = Symbol.for("react.strict_mode")
  , jm = Symbol.for("react.profiler")
  , Pm = Symbol.for("react.provider")
  , Cm = Symbol.for("react.context")
  , Tm = Symbol.for("react.forward_ref")
  , Em = Symbol.for("react.suspense")
  , bm = Symbol.for("react.memo")
  , Mm = Symbol.for("react.lazy")
  , mu = Symbol.iterator;
function Nm(e) {
    return e === null || typeof e != "object" ? null : (e = mu && e[mu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ad = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , Rd = Object.assign
  , Wd = {};
function rr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Wd,
    this.updater = n || Ad
}
rr.prototype.isReactComponent = {};
rr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
rr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function Id() {}
Id.prototype = rr.prototype;
function Xl(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = Wd,
    this.updater = n || Ad
}
var Zl = Xl.prototype = new Id;
Zl.constructor = Xl;
Rd(Zl, rr.prototype);
Zl.isPureReactComponent = !0;
var gu = Array.isArray
  , Fd = Object.prototype.hasOwnProperty
  , Jl = {
    current: null
}
  , Bd = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function qd(e, t, n) {
    var r, i = {}, s = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            Fd.call(t, r) && !Bd.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: ii,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: Jl.current
    }
}
function Om(e, t) {
    return {
        $$typeof: ii,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function ea(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ii
}
function Lm(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var yu = /\/+/g;
function ro(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Lm("" + e.key) : t.toString(36)
}
function Di(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ii:
            case wm:
                o = !0
            }
        }
    if (o)
        return o = e,
        i = i(o),
        e = r === "" ? "." + ro(o, 0) : r,
        gu(i) ? (n = "",
        e != null && (n = e.replace(yu, "$&/") + "/"),
        Di(i, t, n, "", function(u) {
            return u
        })) : i != null && (ea(i) && (i = Om(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(yu, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    gu(e))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var a = r + ro(s, l);
            o += Di(s, t, n, a, i)
        }
    else if (a = Nm(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(s = e.next()).done; )
            s = s.value,
            a = r + ro(s, l++),
            o += Di(s, t, n, a, i);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function mi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Di(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }),
    r
}
function Vm(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var we = {
    current: null
}
  , Ai = {
    transition: null
}
  , Dm = {
    ReactCurrentDispatcher: we,
    ReactCurrentBatchConfig: Ai,
    ReactCurrentOwner: Jl
};
function Ud() {
    throw Error("act(...) is not supported in production builds of React.")
}
D.Children = {
    map: mi,
    forEach: function(e, t, n) {
        mi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return mi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return mi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ea(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
D.Component = rr;
D.Fragment = zm;
D.Profiler = jm;
D.PureComponent = Xl;
D.StrictMode = Sm;
D.Suspense = Em;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dm;
D.act = Ud;
D.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Rd({}, e.props)
      , i = e.key
      , s = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        o = Jl.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            Fd.call(t, a) && !Bd.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: ii,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
;
D.createContext = function(e) {
    return e = {
        $$typeof: Cm,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Pm,
        _context: e
    },
    e.Consumer = e
}
;
D.createElement = qd;
D.createFactory = function(e) {
    var t = qd.bind(null, e);
    return t.type = e,
    t
}
;
D.createRef = function() {
    return {
        current: null
    }
}
;
D.forwardRef = function(e) {
    return {
        $$typeof: Tm,
        render: e
    }
}
;
D.isValidElement = ea;
D.lazy = function(e) {
    return {
        $$typeof: Mm,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Vm
    }
}
;
D.memo = function(e, t) {
    return {
        $$typeof: bm,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
D.startTransition = function(e) {
    var t = Ai.transition;
    Ai.transition = {};
    try {
        e()
    } finally {
        Ai.transition = t
    }
}
;
D.unstable_act = Ud;
D.useCallback = function(e, t) {
    return we.current.useCallback(e, t)
}
;
D.useContext = function(e) {
    return we.current.useContext(e)
}
;
D.useDebugValue = function() {}
;
D.useDeferredValue = function(e) {
    return we.current.useDeferredValue(e)
}
;
D.useEffect = function(e, t) {
    return we.current.useEffect(e, t)
}
;
D.useId = function() {
    return we.current.useId()
}
;
D.useImperativeHandle = function(e, t, n) {
    return we.current.useImperativeHandle(e, t, n)
}
;
D.useInsertionEffect = function(e, t) {
    return we.current.useInsertionEffect(e, t)
}
;
D.useLayoutEffect = function(e, t) {
    return we.current.useLayoutEffect(e, t)
}
;
D.useMemo = function(e, t) {
    return we.current.useMemo(e, t)
}
;
D.useReducer = function(e, t, n) {
    return we.current.useReducer(e, t, n)
}
;
D.useRef = function(e) {
    return we.current.useRef(e)
}
;
D.useState = function(e) {
    return we.current.useState(e)
}
;
D.useSyncExternalStore = function(e, t, n) {
    return we.current.useSyncExternalStore(e, t, n)
}
;
D.useTransition = function() {
    return we.current.useTransition()
}
;
D.version = "18.3.1";
Dd.exports = D;
var w = Dd.exports;
const ta = xm(w);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Am = w
  , Rm = Symbol.for("react.element")
  , Wm = Symbol.for("react.fragment")
  , Im = Object.prototype.hasOwnProperty
  , Fm = Am.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Bm = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function Hd(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        Im.call(t, r) && !Bm.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: Rm,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: Fm.current
    }
}
Es.Fragment = Wm;
Es.jsx = Hd;
Es.jsxs = Hd;
Vd.exports = Es;
var y = Vd.exports
  , Uo = {}
  , $d = {
    exports: {}
}
  , De = {}
  , Gd = {
    exports: {}
}
  , Kd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(T, O) {
        var V = T.length;
        T.push(O);
        e: for (; 0 < V; ) {
            var L = V - 1 >>> 1
              , q = T[L];
            if (0 < i(q, O))
                T[L] = O,
                T[V] = q,
                V = L;
            else
                break e
        }
    }
    function n(T) {
        return T.length === 0 ? null : T[0]
    }
    function r(T) {
        if (T.length === 0)
            return null;
        var O = T[0]
          , V = T.pop();
        if (V !== O) {
            T[0] = V;
            e: for (var L = 0, q = T.length, Zt = q >>> 1; L < Zt; ) {
                var rt = 2 * (L + 1) - 1
                  , Sn = T[rt]
                  , be = rt + 1
                  , Jt = T[be];
                if (0 > i(Sn, V))
                    be < q && 0 > i(Jt, Sn) ? (T[L] = Jt,
                    T[be] = V,
                    L = be) : (T[L] = Sn,
                    T[rt] = V,
                    L = rt);
                else if (be < q && 0 > i(Jt, V))
                    T[L] = Jt,
                    T[be] = V,
                    L = be;
                else
                    break e
            }
        }
        return O
    }
    function i(T, O) {
        var V = T.sortIndex - O.sortIndex;
        return V !== 0 ? V : T.id - O.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , l = o.now();
        e.unstable_now = function() {
            return o.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , d = null
      , f = 3
      , m = !1
      , v = !1
      , k = !1
      , C = typeof setTimeout == "function" ? setTimeout : null
      , g = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function p(T) {
        for (var O = n(u); O !== null; ) {
            if (O.callback === null)
                r(u);
            else if (O.startTime <= T)
                r(u),
                O.sortIndex = O.expirationTime,
                t(a, O);
            else
                break;
            O = n(u)
        }
    }
    function _(T) {
        if (k = !1,
        p(T),
        !v)
            if (n(a) !== null)
                v = !0,
                J(x);
            else {
                var O = n(u);
                O !== null && We(_, O.startTime - T)
            }
    }
    function x(T, O) {
        v = !1,
        k && (k = !1,
        g(z),
        z = -1),
        m = !0;
        var V = f;
        try {
            for (p(O),
            d = n(a); d !== null && (!(d.expirationTime > O) || T && !H()); ) {
                var L = d.callback;
                if (typeof L == "function") {
                    d.callback = null,
                    f = d.priorityLevel;
                    var q = L(d.expirationTime <= O);
                    O = e.unstable_now(),
                    typeof q == "function" ? d.callback = q : d === n(a) && r(a),
                    p(O)
                } else
                    r(a);
                d = n(a)
            }
            if (d !== null)
                var Zt = !0;
            else {
                var rt = n(u);
                rt !== null && We(_, rt.startTime - O),
                Zt = !1
            }
            return Zt
        } finally {
            d = null,
            f = V,
            m = !1
        }
    }
    var S = !1
      , P = null
      , z = -1
      , b = 5
      , M = -1;
    function H() {
        return !(e.unstable_now() - M < b)
    }
    function Z() {
        if (P !== null) {
            var T = e.unstable_now();
            M = T;
            var O = !0;
            try {
                O = P(!0, T)
            } finally {
                O ? ve() : (S = !1,
                P = null)
            }
        } else
            S = !1
    }
    var ve;
    if (typeof h == "function")
        ve = function() {
            h(Z)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var le = new MessageChannel
          , zt = le.port2;
        le.port1.onmessage = Z,
        ve = function() {
            zt.postMessage(null)
        }
    } else
        ve = function() {
            C(Z, 0)
        }
        ;
    function J(T) {
        P = T,
        S || (S = !0,
        ve())
    }
    function We(T, O) {
        z = C(function() {
            T(e.unstable_now())
        }, O)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(T) {
        T.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || m || (v = !0,
        J(x))
    }
    ,
    e.unstable_forceFrameRate = function(T) {
        0 > T || 125 < T ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : b = 0 < T ? Math.floor(1e3 / T) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return f
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(T) {
        switch (f) {
        case 1:
        case 2:
        case 3:
            var O = 3;
            break;
        default:
            O = f
        }
        var V = f;
        f = O;
        try {
            return T()
        } finally {
            f = V
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(T, O) {
        switch (T) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            T = 3
        }
        var V = f;
        f = T;
        try {
            return O()
        } finally {
            f = V
        }
    }
    ,
    e.unstable_scheduleCallback = function(T, O, V) {
        var L = e.unstable_now();
        switch (typeof V == "object" && V !== null ? (V = V.delay,
        V = typeof V == "number" && 0 < V ? L + V : L) : V = L,
        T) {
        case 1:
            var q = -1;
            break;
        case 2:
            q = 250;
            break;
        case 5:
            q = 1073741823;
            break;
        case 4:
            q = 1e4;
            break;
        default:
            q = 5e3
        }
        return q = V + q,
        T = {
            id: c++,
            callback: O,
            priorityLevel: T,
            startTime: V,
            expirationTime: q,
            sortIndex: -1
        },
        V > L ? (T.sortIndex = V,
        t(u, T),
        n(a) === null && T === n(u) && (k ? (g(z),
        z = -1) : k = !0,
        We(_, V - L))) : (T.sortIndex = q,
        t(a, T),
        v || m || (v = !0,
        J(x))),
        T
    }
    ,
    e.unstable_shouldYield = H,
    e.unstable_wrapCallback = function(T) {
        var O = f;
        return function() {
            var V = f;
            f = O;
            try {
                return T.apply(this, arguments)
            } finally {
                f = V
            }
        }
    }
}
)(Kd);
Gd.exports = Kd;
var qm = Gd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Um = w
  , Le = qm;
function j(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Qd = new Set
  , Rr = {};
function kn(e, t) {
    Kn(e, t),
    Kn(e + "Capture", t)
}
function Kn(e, t) {
    for (Rr[e] = t,
    e = 0; e < t.length; e++)
        Qd.add(t[e])
}
var vt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Ho = Object.prototype.hasOwnProperty
  , Hm = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , vu = {}
  , _u = {};
function $m(e) {
    return Ho.call(_u, e) ? !0 : Ho.call(vu, e) ? !1 : Hm.test(e) ? _u[e] = !0 : (vu[e] = !0,
    !1)
}
function Gm(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Km(e, t, n, r) {
    if (t === null || typeof t > "u" || Gm(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function ze(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var fe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    fe[e] = new ze(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    fe[t] = new ze(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    fe[e] = new ze(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    fe[e] = new ze(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    fe[e] = new ze(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    fe[e] = new ze(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    fe[e] = new ze(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    fe[e] = new ze(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    fe[e] = new ze(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var na = /[\-:]([a-z])/g;
function ra(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(na, ra);
    fe[t] = new ze(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(na, ra);
    fe[t] = new ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(na, ra);
    fe[t] = new ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    fe[e] = new ze(e,1,!1,e.toLowerCase(),null,!1,!1)
});
fe.xlinkHref = new ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    fe[e] = new ze(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ia(e, t, n, r) {
    var i = fe.hasOwnProperty(t) ? fe[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Km(t, n, i, r) && (n = null),
    r || i === null ? $m(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var wt = Um.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , gi = Symbol.for("react.element")
  , Pn = Symbol.for("react.portal")
  , Cn = Symbol.for("react.fragment")
  , sa = Symbol.for("react.strict_mode")
  , $o = Symbol.for("react.profiler")
  , Yd = Symbol.for("react.provider")
  , Xd = Symbol.for("react.context")
  , oa = Symbol.for("react.forward_ref")
  , Go = Symbol.for("react.suspense")
  , Ko = Symbol.for("react.suspense_list")
  , la = Symbol.for("react.memo")
  , Tt = Symbol.for("react.lazy")
  , Zd = Symbol.for("react.offscreen")
  , ku = Symbol.iterator;
function lr(e) {
    return e === null || typeof e != "object" ? null : (e = ku && e[ku] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Q = Object.assign, io;
function vr(e) {
    if (io === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            io = t && t[1] || ""
        }
    return `
` + io + e
}
var so = !1;
function oo(e, t) {
    if (!e || so)
        return "";
    so = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l]; )
                l--;
            for (; 1 <= o && 0 <= l; o--,
            l--)
                if (i[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                            l--,
                            0 > l || i[o] !== s[l]) {
                                var a = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        so = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? vr(e) : ""
}
function Qm(e) {
    switch (e.tag) {
    case 5:
        return vr(e.type);
    case 16:
        return vr("Lazy");
    case 13:
        return vr("Suspense");
    case 19:
        return vr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = oo(e.type, !1),
        e;
    case 11:
        return e = oo(e.type.render, !1),
        e;
    case 1:
        return e = oo(e.type, !0),
        e;
    default:
        return ""
    }
}
function Qo(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Cn:
        return "Fragment";
    case Pn:
        return "Portal";
    case $o:
        return "Profiler";
    case sa:
        return "StrictMode";
    case Go:
        return "Suspense";
    case Ko:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case Xd:
            return (e.displayName || "Context") + ".Consumer";
        case Yd:
            return (e._context.displayName || "Context") + ".Provider";
        case oa:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case la:
            return t = e.displayName || null,
            t !== null ? t : Qo(e.type) || "Memo";
        case Tt:
            t = e._payload,
            e = e._init;
            try {
                return Qo(e(t))
            } catch {}
        }
    return null
}
function Ym(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Qo(t);
    case 8:
        return t === sa ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Ut(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function Jd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function Xm(e) {
    var t = Jd(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function yi(e) {
    e._valueTracker || (e._valueTracker = Xm(e))
}
function ef(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = Jd(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Zi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Yo(e, t) {
    var n = t.checked;
    return Q({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function xu(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Ut(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function tf(e, t) {
    t = t.checked,
    t != null && ia(e, "checked", t, !1)
}
function Xo(e, t) {
    tf(e, t);
    var n = Ut(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Zo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Zo(e, t.type, Ut(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function wu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Zo(e, t, n) {
    (t !== "number" || Zi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var _r = Array.isArray;
function Bn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Ut(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Jo(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(j(91));
    return Q({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function zu(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(j(92));
            if (_r(n)) {
                if (1 < n.length)
                    throw Error(j(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Ut(n)
    }
}
function nf(e, t) {
    var n = Ut(t.value)
      , r = Ut(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Su(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function rf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function el(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? rf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var vi, sf = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (vi = vi || document.createElement("div"),
        vi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = vi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Wr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var zr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Zm = ["Webkit", "ms", "Moz", "O"];
Object.keys(zr).forEach(function(e) {
    Zm.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        zr[t] = zr[e]
    })
});
function of(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zr.hasOwnProperty(e) && zr[e] ? ("" + t).trim() : t + "px"
}
function lf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = of(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var Jm = Q({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function tl(e, t) {
    if (t) {
        if (Jm[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(j(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(j(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(j(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(j(62))
    }
}
function nl(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var rl = null;
function aa(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var il = null
  , qn = null
  , Un = null;
function ju(e) {
    if (e = li(e)) {
        if (typeof il != "function")
            throw Error(j(280));
        var t = e.stateNode;
        t && (t = Ls(t),
        il(e.stateNode, e.type, t))
    }
}
function af(e) {
    qn ? Un ? Un.push(e) : Un = [e] : qn = e
}
function uf() {
    if (qn) {
        var e = qn
          , t = Un;
        if (Un = qn = null,
        ju(e),
        t)
            for (e = 0; e < t.length; e++)
                ju(t[e])
    }
}
function cf(e, t) {
    return e(t)
}
function df() {}
var lo = !1;
function ff(e, t, n) {
    if (lo)
        return e(t, n);
    lo = !0;
    try {
        return cf(e, t, n)
    } finally {
        lo = !1,
        (qn !== null || Un !== null) && (df(),
        uf())
    }
}
function Ir(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = Ls(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(j(231, t, typeof n));
    return n
}
var sl = !1;
if (vt)
    try {
        var ar = {};
        Object.defineProperty(ar, "passive", {
            get: function() {
                sl = !0
            }
        }),
        window.addEventListener("test", ar, ar),
        window.removeEventListener("test", ar, ar)
    } catch {
        sl = !1
    }
function eg(e, t, n, r, i, s, o, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Sr = !1
  , Ji = null
  , es = !1
  , ol = null
  , tg = {
    onError: function(e) {
        Sr = !0,
        Ji = e
    }
};
function ng(e, t, n, r, i, s, o, l, a) {
    Sr = !1,
    Ji = null,
    eg.apply(tg, arguments)
}
function rg(e, t, n, r, i, s, o, l, a) {
    if (ng.apply(this, arguments),
    Sr) {
        if (Sr) {
            var u = Ji;
            Sr = !1,
            Ji = null
        } else
            throw Error(j(198));
        es || (es = !0,
        ol = u)
    }
}
function xn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function hf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function Pu(e) {
    if (xn(e) !== e)
        throw Error(j(188))
}
function ig(e) {
    var t = e.alternate;
    if (!t) {
        if (t = xn(e),
        t === null)
            throw Error(j(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return Pu(i),
                    e;
                if (s === r)
                    return Pu(i),
                    t;
                s = s.sibling
            }
            throw Error(j(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, l = i.child; l; ) {
                if (l === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (l === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (l === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(j(189))
            }
        }
        if (n.alternate !== r)
            throw Error(j(190))
    }
    if (n.tag !== 3)
        throw Error(j(188));
    return n.stateNode.current === n ? e : t
}
function pf(e) {
    return e = ig(e),
    e !== null ? mf(e) : null
}
function mf(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = mf(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var gf = Le.unstable_scheduleCallback
  , Cu = Le.unstable_cancelCallback
  , sg = Le.unstable_shouldYield
  , og = Le.unstable_requestPaint
  , ee = Le.unstable_now
  , lg = Le.unstable_getCurrentPriorityLevel
  , ua = Le.unstable_ImmediatePriority
  , yf = Le.unstable_UserBlockingPriority
  , ts = Le.unstable_NormalPriority
  , ag = Le.unstable_LowPriority
  , vf = Le.unstable_IdlePriority
  , bs = null
  , lt = null;
function ug(e) {
    if (lt && typeof lt.onCommitFiberRoot == "function")
        try {
            lt.onCommitFiberRoot(bs, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Je = Math.clz32 ? Math.clz32 : fg
  , cg = Math.log
  , dg = Math.LN2;
function fg(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (cg(e) / dg | 0) | 0
}
var _i = 64
  , ki = 4194304;
function kr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function ns(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var l = o & ~i;
        l !== 0 ? r = kr(l) : (s &= o,
        s !== 0 && (r = kr(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = kr(o) : s !== 0 && (r = kr(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - Je(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function hg(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function pg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - Je(s)
          , l = 1 << o
          , a = i[o];
        a === -1 ? (!(l & n) || l & r) && (i[o] = hg(l, t)) : a <= t && (e.expiredLanes |= l),
        s &= ~l
    }
}
function ll(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function _f() {
    var e = _i;
    return _i <<= 1,
    !(_i & 4194240) && (_i = 64),
    e
}
function ao(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function si(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - Je(t),
    e[t] = n
}
function mg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Je(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function ca(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - Je(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var W = 0;
function kf(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var xf, da, wf, zf, Sf, al = !1, xi = [], Vt = null, Dt = null, At = null, Fr = new Map, Br = new Map, Mt = [], gg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Tu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Vt = null;
        break;
    case "dragenter":
    case "dragleave":
        Dt = null;
        break;
    case "mouseover":
    case "mouseout":
        At = null;
        break;
    case "pointerover":
    case "pointerout":
        Fr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Br.delete(t.pointerId)
    }
}
function ur(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = li(t),
    t !== null && da(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function yg(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Vt = ur(Vt, e, t, n, r, i),
        !0;
    case "dragenter":
        return Dt = ur(Dt, e, t, n, r, i),
        !0;
    case "mouseover":
        return At = ur(At, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return Fr.set(s, ur(Fr.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        Br.set(s, ur(Br.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function jf(e) {
    var t = an(e.target);
    if (t !== null) {
        var n = xn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = hf(n),
                t !== null) {
                    e.blockedOn = t,
                    Sf(e.priority, function() {
                        wf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ri(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ul(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            rl = r,
            n.target.dispatchEvent(r),
            rl = null
        } else
            return t = li(n),
            t !== null && da(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Eu(e, t, n) {
    Ri(e) && n.delete(t)
}
function vg() {
    al = !1,
    Vt !== null && Ri(Vt) && (Vt = null),
    Dt !== null && Ri(Dt) && (Dt = null),
    At !== null && Ri(At) && (At = null),
    Fr.forEach(Eu),
    Br.forEach(Eu)
}
function cr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    al || (al = !0,
    Le.unstable_scheduleCallback(Le.unstable_NormalPriority, vg)))
}
function qr(e) {
    function t(i) {
        return cr(i, e)
    }
    if (0 < xi.length) {
        cr(xi[0], e);
        for (var n = 1; n < xi.length; n++) {
            var r = xi[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Vt !== null && cr(Vt, e),
    Dt !== null && cr(Dt, e),
    At !== null && cr(At, e),
    Fr.forEach(t),
    Br.forEach(t),
    n = 0; n < Mt.length; n++)
        r = Mt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Mt.length && (n = Mt[0],
    n.blockedOn === null); )
        jf(n),
        n.blockedOn === null && Mt.shift()
}
var Hn = wt.ReactCurrentBatchConfig
  , rs = !0;
function _g(e, t, n, r) {
    var i = W
      , s = Hn.transition;
    Hn.transition = null;
    try {
        W = 1,
        fa(e, t, n, r)
    } finally {
        W = i,
        Hn.transition = s
    }
}
function kg(e, t, n, r) {
    var i = W
      , s = Hn.transition;
    Hn.transition = null;
    try {
        W = 4,
        fa(e, t, n, r)
    } finally {
        W = i,
        Hn.transition = s
    }
}
function fa(e, t, n, r) {
    if (rs) {
        var i = ul(e, t, n, r);
        if (i === null)
            _o(e, t, r, is, n),
            Tu(e, r);
        else if (yg(i, e, t, n, r))
            r.stopPropagation();
        else if (Tu(e, r),
        t & 4 && -1 < gg.indexOf(e)) {
            for (; i !== null; ) {
                var s = li(i);
                if (s !== null && xf(s),
                s = ul(e, t, n, r),
                s === null && _o(e, t, r, is, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            _o(e, t, r, null, n)
    }
}
var is = null;
function ul(e, t, n, r) {
    if (is = null,
    e = aa(r),
    e = an(e),
    e !== null)
        if (t = xn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = hf(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return is = e,
    null
}
function Pf(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (lg()) {
        case ua:
            return 1;
        case yf:
            return 4;
        case ts:
        case ag:
            return 16;
        case vf:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Ot = null
  , ha = null
  , Wi = null;
function Cf() {
    if (Wi)
        return Wi;
    var e, t = ha, n = t.length, r, i = "value"in Ot ? Ot.value : Ot.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return Wi = i.slice(e, 1 < r ? 1 - r : void 0)
}
function Ii(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function wi() {
    return !0
}
function bu() {
    return !1
}
function Ae(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? wi : bu,
        this.isPropagationStopped = bu,
        this
    }
    return Q(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = wi)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = wi)
        },
        persist: function() {},
        isPersistent: wi
    }),
    t
}
var ir = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, pa = Ae(ir), oi = Q({}, ir, {
    view: 0,
    detail: 0
}), xg = Ae(oi), uo, co, dr, Ms = Q({}, oi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: ma,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== dr && (dr && e.type === "mousemove" ? (uo = e.screenX - dr.screenX,
        co = e.screenY - dr.screenY) : co = uo = 0,
        dr = e),
        uo)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : co
    }
}), Mu = Ae(Ms), wg = Q({}, Ms, {
    dataTransfer: 0
}), zg = Ae(wg), Sg = Q({}, oi, {
    relatedTarget: 0
}), fo = Ae(Sg), jg = Q({}, ir, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Pg = Ae(jg), Cg = Q({}, ir, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Tg = Ae(Cg), Eg = Q({}, ir, {
    data: 0
}), Nu = Ae(Eg), bg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, Mg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Ng = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function Og(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ng[e]) ? !!t[e] : !1
}
function ma() {
    return Og
}
var Lg = Q({}, oi, {
    key: function(e) {
        if (e.key) {
            var t = bg[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = Ii(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mg[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ma,
    charCode: function(e) {
        return e.type === "keypress" ? Ii(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Ii(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Vg = Ae(Lg)
  , Dg = Q({}, Ms, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Ou = Ae(Dg)
  , Ag = Q({}, oi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ma
})
  , Rg = Ae(Ag)
  , Wg = Q({}, ir, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Ig = Ae(Wg)
  , Fg = Q({}, Ms, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Bg = Ae(Fg)
  , qg = [9, 13, 27, 32]
  , ga = vt && "CompositionEvent"in window
  , jr = null;
vt && "documentMode"in document && (jr = document.documentMode);
var Ug = vt && "TextEvent"in window && !jr
  , Tf = vt && (!ga || jr && 8 < jr && 11 >= jr)
  , Lu = " "
  , Vu = !1;
function Ef(e, t) {
    switch (e) {
    case "keyup":
        return qg.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function bf(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Tn = !1;
function Hg(e, t) {
    switch (e) {
    case "compositionend":
        return bf(t);
    case "keypress":
        return t.which !== 32 ? null : (Vu = !0,
        Lu);
    case "textInput":
        return e = t.data,
        e === Lu && Vu ? null : e;
    default:
        return null
    }
}
function $g(e, t) {
    if (Tn)
        return e === "compositionend" || !ga && Ef(e, t) ? (e = Cf(),
        Wi = ha = Ot = null,
        Tn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Tf && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Gg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Du(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gg[e.type] : t === "textarea"
}
function Mf(e, t, n, r) {
    af(r),
    t = ss(t, "onChange"),
    0 < t.length && (n = new pa("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Pr = null
  , Ur = null;
function Kg(e) {
    Bf(e, 0)
}
function Ns(e) {
    var t = Mn(e);
    if (ef(t))
        return e
}
function Qg(e, t) {
    if (e === "change")
        return t
}
var Nf = !1;
if (vt) {
    var ho;
    if (vt) {
        var po = "oninput"in document;
        if (!po) {
            var Au = document.createElement("div");
            Au.setAttribute("oninput", "return;"),
            po = typeof Au.oninput == "function"
        }
        ho = po
    } else
        ho = !1;
    Nf = ho && (!document.documentMode || 9 < document.documentMode)
}
function Ru() {
    Pr && (Pr.detachEvent("onpropertychange", Of),
    Ur = Pr = null)
}
function Of(e) {
    if (e.propertyName === "value" && Ns(Ur)) {
        var t = [];
        Mf(t, Ur, e, aa(e)),
        ff(Kg, t)
    }
}
function Yg(e, t, n) {
    e === "focusin" ? (Ru(),
    Pr = t,
    Ur = n,
    Pr.attachEvent("onpropertychange", Of)) : e === "focusout" && Ru()
}
function Xg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Ns(Ur)
}
function Zg(e, t) {
    if (e === "click")
        return Ns(t)
}
function Jg(e, t) {
    if (e === "input" || e === "change")
        return Ns(t)
}
function ey(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var tt = typeof Object.is == "function" ? Object.is : ey;
function Hr(e, t) {
    if (tt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Ho.call(t, i) || !tt(e[i], t[i]))
            return !1
    }
    return !0
}
function Wu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Iu(e, t) {
    var n = Wu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Wu(n)
    }
}
function Lf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Vf() {
    for (var e = window, t = Zi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Zi(e.document)
    }
    return t
}
function ya(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function ty(e) {
    var t = Vf()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Lf(n.ownerDocument.documentElement, n)) {
        if (r !== null && ya(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = Iu(n, s);
                var o = Iu(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var ny = vt && "documentMode"in document && 11 >= document.documentMode
  , En = null
  , cl = null
  , Cr = null
  , dl = !1;
function Fu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    dl || En == null || En !== Zi(r) || (r = En,
    "selectionStart"in r && ya(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Cr && Hr(Cr, r) || (Cr = r,
    r = ss(cl, "onSelect"),
    0 < r.length && (t = new pa("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = En)))
}
function zi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var bn = {
    animationend: zi("Animation", "AnimationEnd"),
    animationiteration: zi("Animation", "AnimationIteration"),
    animationstart: zi("Animation", "AnimationStart"),
    transitionend: zi("Transition", "TransitionEnd")
}
  , mo = {}
  , Df = {};
vt && (Df = document.createElement("div").style,
"AnimationEvent"in window || (delete bn.animationend.animation,
delete bn.animationiteration.animation,
delete bn.animationstart.animation),
"TransitionEvent"in window || delete bn.transitionend.transition);
function Os(e) {
    if (mo[e])
        return mo[e];
    if (!bn[e])
        return e;
    var t = bn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Df)
            return mo[e] = t[n];
    return e
}
var Af = Os("animationend")
  , Rf = Os("animationiteration")
  , Wf = Os("animationstart")
  , If = Os("transitionend")
  , Ff = new Map
  , Bu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Kt(e, t) {
    Ff.set(e, t),
    kn(t, [e])
}
for (var go = 0; go < Bu.length; go++) {
    var yo = Bu[go]
      , ry = yo.toLowerCase()
      , iy = yo[0].toUpperCase() + yo.slice(1);
    Kt(ry, "on" + iy)
}
Kt(Af, "onAnimationEnd");
Kt(Rf, "onAnimationIteration");
Kt(Wf, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(If, "onTransitionEnd");
Kn("onMouseEnter", ["mouseout", "mouseover"]);
Kn("onMouseLeave", ["mouseout", "mouseover"]);
Kn("onPointerEnter", ["pointerout", "pointerover"]);
Kn("onPointerLeave", ["pointerout", "pointerover"]);
kn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
kn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
kn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
kn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
kn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , sy = new Set("cancel close invalid load scroll toggle".split(" ").concat(xr));
function qu(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    rg(r, t, void 0, e),
    e.currentTarget = null
}
function Bf(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== s && i.isPropagationStopped())
                        break e;
                    qu(i, l, u),
                    s = a
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (l = r[o],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== s && i.isPropagationStopped())
                        break e;
                    qu(i, l, u),
                    s = a
                }
        }
    }
    if (es)
        throw e = ol,
        es = !1,
        ol = null,
        e
}
function F(e, t) {
    var n = t[gl];
    n === void 0 && (n = t[gl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (qf(t, e, 2, !1),
    n.add(r))
}
function vo(e, t, n) {
    var r = 0;
    t && (r |= 4),
    qf(n, e, r, t)
}
var Si = "_reactListening" + Math.random().toString(36).slice(2);
function $r(e) {
    if (!e[Si]) {
        e[Si] = !0,
        Qd.forEach(function(n) {
            n !== "selectionchange" && (sy.has(n) || vo(n, !1, e),
            vo(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Si] || (t[Si] = !0,
        vo("selectionchange", !1, t))
    }
}
function qf(e, t, n, r) {
    switch (Pf(t)) {
    case 1:
        var i = _g;
        break;
    case 4:
        i = kg;
        break;
    default:
        i = fa
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !sl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function _o(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var a = o.tag;
                        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; l !== null; ) {
                    if (o = an(l),
                    o === null)
                        return;
                    if (a = o.tag,
                    a === 5 || a === 6) {
                        r = s = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    ff(function() {
        var u = s
          , c = aa(n)
          , d = [];
        e: {
            var f = Ff.get(e);
            if (f !== void 0) {
                var m = pa
                  , v = e;
                switch (e) {
                case "keypress":
                    if (Ii(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    m = Vg;
                    break;
                case "focusin":
                    v = "focus",
                    m = fo;
                    break;
                case "focusout":
                    v = "blur",
                    m = fo;
                    break;
                case "beforeblur":
                case "afterblur":
                    m = fo;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    m = Mu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    m = zg;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    m = Rg;
                    break;
                case Af:
                case Rf:
                case Wf:
                    m = Pg;
                    break;
                case If:
                    m = Ig;
                    break;
                case "scroll":
                    m = xg;
                    break;
                case "wheel":
                    m = Bg;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    m = Tg;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    m = Ou
                }
                var k = (t & 4) !== 0
                  , C = !k && e === "scroll"
                  , g = k ? f !== null ? f + "Capture" : null : f;
                k = [];
                for (var h = u, p; h !== null; ) {
                    p = h;
                    var _ = p.stateNode;
                    if (p.tag === 5 && _ !== null && (p = _,
                    g !== null && (_ = Ir(h, g),
                    _ != null && k.push(Gr(h, _, p)))),
                    C)
                        break;
                    h = h.return
                }
                0 < k.length && (f = new m(f,v,null,n,c),
                d.push({
                    event: f,
                    listeners: k
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (f = e === "mouseover" || e === "pointerover",
                m = e === "mouseout" || e === "pointerout",
                f && n !== rl && (v = n.relatedTarget || n.fromElement) && (an(v) || v[_t]))
                    break e;
                if ((m || f) && (f = c.window === c ? c : (f = c.ownerDocument) ? f.defaultView || f.parentWindow : window,
                m ? (v = n.relatedTarget || n.toElement,
                m = u,
                v = v ? an(v) : null,
                v !== null && (C = xn(v),
                v !== C || v.tag !== 5 && v.tag !== 6) && (v = null)) : (m = null,
                v = u),
                m !== v)) {
                    if (k = Mu,
                    _ = "onMouseLeave",
                    g = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (k = Ou,
                    _ = "onPointerLeave",
                    g = "onPointerEnter",
                    h = "pointer"),
                    C = m == null ? f : Mn(m),
                    p = v == null ? f : Mn(v),
                    f = new k(_,h + "leave",m,n,c),
                    f.target = C,
                    f.relatedTarget = p,
                    _ = null,
                    an(c) === u && (k = new k(g,h + "enter",v,n,c),
                    k.target = p,
                    k.relatedTarget = C,
                    _ = k),
                    C = _,
                    m && v)
                        t: {
                            for (k = m,
                            g = v,
                            h = 0,
                            p = k; p; p = jn(p))
                                h++;
                            for (p = 0,
                            _ = g; _; _ = jn(_))
                                p++;
                            for (; 0 < h - p; )
                                k = jn(k),
                                h--;
                            for (; 0 < p - h; )
                                g = jn(g),
                                p--;
                            for (; h--; ) {
                                if (k === g || g !== null && k === g.alternate)
                                    break t;
                                k = jn(k),
                                g = jn(g)
                            }
                            k = null
                        }
                    else
                        k = null;
                    m !== null && Uu(d, f, m, k, !1),
                    v !== null && C !== null && Uu(d, C, v, k, !0)
                }
            }
            e: {
                if (f = u ? Mn(u) : window,
                m = f.nodeName && f.nodeName.toLowerCase(),
                m === "select" || m === "input" && f.type === "file")
                    var x = Qg;
                else if (Du(f))
                    if (Nf)
                        x = Jg;
                    else {
                        x = Xg;
                        var S = Yg
                    }
                else
                    (m = f.nodeName) && m.toLowerCase() === "input" && (f.type === "checkbox" || f.type === "radio") && (x = Zg);
                if (x && (x = x(e, u))) {
                    Mf(d, x, n, c);
                    break e
                }
                S && S(e, f, u),
                e === "focusout" && (S = f._wrapperState) && S.controlled && f.type === "number" && Zo(f, "number", f.value)
            }
            switch (S = u ? Mn(u) : window,
            e) {
            case "focusin":
                (Du(S) || S.contentEditable === "true") && (En = S,
                cl = u,
                Cr = null);
                break;
            case "focusout":
                Cr = cl = En = null;
                break;
            case "mousedown":
                dl = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                dl = !1,
                Fu(d, n, c);
                break;
            case "selectionchange":
                if (ny)
                    break;
            case "keydown":
            case "keyup":
                Fu(d, n, c)
            }
            var P;
            if (ga)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var z = "onCompositionStart";
                        break e;
                    case "compositionend":
                        z = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        z = "onCompositionUpdate";
                        break e
                    }
                    z = void 0
                }
            else
                Tn ? Ef(e, n) && (z = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (z = "onCompositionStart");
            z && (Tf && n.locale !== "ko" && (Tn || z !== "onCompositionStart" ? z === "onCompositionEnd" && Tn && (P = Cf()) : (Ot = c,
            ha = "value"in Ot ? Ot.value : Ot.textContent,
            Tn = !0)),
            S = ss(u, z),
            0 < S.length && (z = new Nu(z,e,null,n,c),
            d.push({
                event: z,
                listeners: S
            }),
            P ? z.data = P : (P = bf(n),
            P !== null && (z.data = P)))),
            (P = Ug ? Hg(e, n) : $g(e, n)) && (u = ss(u, "onBeforeInput"),
            0 < u.length && (c = new Nu("onBeforeInput","beforeinput",null,n,c),
            d.push({
                event: c,
                listeners: u
            }),
            c.data = P))
        }
        Bf(d, t)
    })
}
function Gr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function ss(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = Ir(e, n),
        s != null && r.unshift(Gr(e, s, i)),
        s = Ir(e, t),
        s != null && r.push(Gr(e, s, i))),
        e = e.return
    }
    return r
}
function jn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Uu(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        i ? (a = Ir(n, s),
        a != null && o.unshift(Gr(n, a, l))) : i || (a = Ir(n, s),
        a != null && o.push(Gr(n, a, l)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var oy = /\r\n?/g
  , ly = /\u0000|\uFFFD/g;
function Hu(e) {
    return (typeof e == "string" ? e : "" + e).replace(oy, `
`).replace(ly, "")
}
function ji(e, t, n) {
    if (t = Hu(t),
    Hu(e) !== t && n)
        throw Error(j(425))
}
function os() {}
var fl = null
  , hl = null;
function pl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var ml = typeof setTimeout == "function" ? setTimeout : void 0
  , ay = typeof clearTimeout == "function" ? clearTimeout : void 0
  , $u = typeof Promise == "function" ? Promise : void 0
  , uy = typeof queueMicrotask == "function" ? queueMicrotask : typeof $u < "u" ? function(e) {
    return $u.resolve(null).then(e).catch(cy)
}
: ml;
function cy(e) {
    setTimeout(function() {
        throw e
    })
}
function ko(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    qr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    qr(t)
}
function Rt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Gu(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var sr = Math.random().toString(36).slice(2)
  , ot = "__reactFiber$" + sr
  , Kr = "__reactProps$" + sr
  , _t = "__reactContainer$" + sr
  , gl = "__reactEvents$" + sr
  , dy = "__reactListeners$" + sr
  , fy = "__reactHandles$" + sr;
function an(e) {
    var t = e[ot];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[_t] || n[ot]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Gu(e); e !== null; ) {
                    if (n = e[ot])
                        return n;
                    e = Gu(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function li(e) {
    return e = e[ot] || e[_t],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Mn(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(j(33))
}
function Ls(e) {
    return e[Kr] || null
}
var yl = []
  , Nn = -1;
function Qt(e) {
    return {
        current: e
    }
}
function B(e) {
    0 > Nn || (e.current = yl[Nn],
    yl[Nn] = null,
    Nn--)
}
function I(e, t) {
    Nn++,
    yl[Nn] = e.current,
    e.current = t
}
var Ht = {}
  , ge = Qt(Ht)
  , Ce = Qt(!1)
  , mn = Ht;
function Qn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Ht;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function Te(e) {
    return e = e.childContextTypes,
    e != null
}
function ls() {
    B(Ce),
    B(ge)
}
function Ku(e, t, n) {
    if (ge.current !== Ht)
        throw Error(j(168));
    I(ge, t),
    I(Ce, n)
}
function Uf(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(j(108, Ym(e) || "Unknown", i));
    return Q({}, n, r)
}
function as(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Ht,
    mn = ge.current,
    I(ge, e),
    I(Ce, Ce.current),
    !0
}
function Qu(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(j(169));
    n ? (e = Uf(e, t, mn),
    r.__reactInternalMemoizedMergedChildContext = e,
    B(Ce),
    B(ge),
    I(ge, e)) : B(Ce),
    I(Ce, n)
}
var ft = null
  , Vs = !1
  , xo = !1;
function Hf(e) {
    ft === null ? ft = [e] : ft.push(e)
}
function hy(e) {
    Vs = !0,
    Hf(e)
}
function Yt() {
    if (!xo && ft !== null) {
        xo = !0;
        var e = 0
          , t = W;
        try {
            var n = ft;
            for (W = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            ft = null,
            Vs = !1
        } catch (i) {
            throw ft !== null && (ft = ft.slice(e + 1)),
            gf(ua, Yt),
            i
        } finally {
            W = t,
            xo = !1
        }
    }
    return null
}
var On = []
  , Ln = 0
  , us = null
  , cs = 0
  , Be = []
  , qe = 0
  , gn = null
  , ht = 1
  , pt = "";
function nn(e, t) {
    On[Ln++] = cs,
    On[Ln++] = us,
    us = e,
    cs = t
}
function $f(e, t, n) {
    Be[qe++] = ht,
    Be[qe++] = pt,
    Be[qe++] = gn,
    gn = e;
    var r = ht;
    e = pt;
    var i = 32 - Je(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - Je(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        ht = 1 << 32 - Je(t) + i | n << i | r,
        pt = s + e
    } else
        ht = 1 << s | n << i | r,
        pt = e
}
function va(e) {
    e.return !== null && (nn(e, 1),
    $f(e, 1, 0))
}
function _a(e) {
    for (; e === us; )
        us = On[--Ln],
        On[Ln] = null,
        cs = On[--Ln],
        On[Ln] = null;
    for (; e === gn; )
        gn = Be[--qe],
        Be[qe] = null,
        pt = Be[--qe],
        Be[qe] = null,
        ht = Be[--qe],
        Be[qe] = null
}
var Oe = null
  , Ne = null
  , U = !1
  , Xe = null;
function Gf(e, t) {
    var n = Ue(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function Yu(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Oe = e,
        Ne = Rt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Oe = e,
        Ne = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = gn !== null ? {
            id: ht,
            overflow: pt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = Ue(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Oe = e,
        Ne = null,
        !0) : !1;
    default:
        return !1
    }
}
function vl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function _l(e) {
    if (U) {
        var t = Ne;
        if (t) {
            var n = t;
            if (!Yu(e, t)) {
                if (vl(e))
                    throw Error(j(418));
                t = Rt(n.nextSibling);
                var r = Oe;
                t && Yu(e, t) ? Gf(r, n) : (e.flags = e.flags & -4097 | 2,
                U = !1,
                Oe = e)
            }
        } else {
            if (vl(e))
                throw Error(j(418));
            e.flags = e.flags & -4097 | 2,
            U = !1,
            Oe = e
        }
    }
}
function Xu(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Oe = e
}
function Pi(e) {
    if (e !== Oe)
        return !1;
    if (!U)
        return Xu(e),
        U = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !pl(e.type, e.memoizedProps)),
    t && (t = Ne)) {
        if (vl(e))
            throw Kf(),
            Error(j(418));
        for (; t; )
            Gf(e, t),
            t = Rt(t.nextSibling)
    }
    if (Xu(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(j(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ne = Rt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ne = null
        }
    } else
        Ne = Oe ? Rt(e.stateNode.nextSibling) : null;
    return !0
}
function Kf() {
    for (var e = Ne; e; )
        e = Rt(e.nextSibling)
}
function Yn() {
    Ne = Oe = null,
    U = !1
}
function ka(e) {
    Xe === null ? Xe = [e] : Xe.push(e)
}
var py = wt.ReactCurrentBatchConfig;
function fr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(j(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(j(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var l = i.refs;
                o === null ? delete l[s] : l[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(j(284));
        if (!n._owner)
            throw Error(j(290, e))
    }
    return e
}
function Ci(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(j(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Zu(e) {
    var t = e._init;
    return t(e._payload)
}
function Qf(e) {
    function t(g, h) {
        if (e) {
            var p = g.deletions;
            p === null ? (g.deletions = [h],
            g.flags |= 16) : p.push(h)
        }
    }
    function n(g, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(g, h),
            h = h.sibling;
        return null
    }
    function r(g, h) {
        for (g = new Map; h !== null; )
            h.key !== null ? g.set(h.key, h) : g.set(h.index, h),
            h = h.sibling;
        return g
    }
    function i(g, h) {
        return g = Bt(g, h),
        g.index = 0,
        g.sibling = null,
        g
    }
    function s(g, h, p) {
        return g.index = p,
        e ? (p = g.alternate,
        p !== null ? (p = p.index,
        p < h ? (g.flags |= 2,
        h) : p) : (g.flags |= 2,
        h)) : (g.flags |= 1048576,
        h)
    }
    function o(g) {
        return e && g.alternate === null && (g.flags |= 2),
        g
    }
    function l(g, h, p, _) {
        return h === null || h.tag !== 6 ? (h = To(p, g.mode, _),
        h.return = g,
        h) : (h = i(h, p),
        h.return = g,
        h)
    }
    function a(g, h, p, _) {
        var x = p.type;
        return x === Cn ? c(g, h, p.props.children, _, p.key) : h !== null && (h.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Tt && Zu(x) === h.type) ? (_ = i(h, p.props),
        _.ref = fr(g, h, p),
        _.return = g,
        _) : (_ = Gi(p.type, p.key, p.props, null, g.mode, _),
        _.ref = fr(g, h, p),
        _.return = g,
        _)
    }
    function u(g, h, p, _) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== p.containerInfo || h.stateNode.implementation !== p.implementation ? (h = Eo(p, g.mode, _),
        h.return = g,
        h) : (h = i(h, p.children || []),
        h.return = g,
        h)
    }
    function c(g, h, p, _, x) {
        return h === null || h.tag !== 7 ? (h = hn(p, g.mode, _, x),
        h.return = g,
        h) : (h = i(h, p),
        h.return = g,
        h)
    }
    function d(g, h, p) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = To("" + h, g.mode, p),
            h.return = g,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case gi:
                return p = Gi(h.type, h.key, h.props, null, g.mode, p),
                p.ref = fr(g, null, h),
                p.return = g,
                p;
            case Pn:
                return h = Eo(h, g.mode, p),
                h.return = g,
                h;
            case Tt:
                var _ = h._init;
                return d(g, _(h._payload), p)
            }
            if (_r(h) || lr(h))
                return h = hn(h, g.mode, p, null),
                h.return = g,
                h;
            Ci(g, h)
        }
        return null
    }
    function f(g, h, p, _) {
        var x = h !== null ? h.key : null;
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return x !== null ? null : l(g, h, "" + p, _);
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case gi:
                return p.key === x ? a(g, h, p, _) : null;
            case Pn:
                return p.key === x ? u(g, h, p, _) : null;
            case Tt:
                return x = p._init,
                f(g, h, x(p._payload), _)
            }
            if (_r(p) || lr(p))
                return x !== null ? null : c(g, h, p, _, null);
            Ci(g, p)
        }
        return null
    }
    function m(g, h, p, _, x) {
        if (typeof _ == "string" && _ !== "" || typeof _ == "number")
            return g = g.get(p) || null,
            l(h, g, "" + _, x);
        if (typeof _ == "object" && _ !== null) {
            switch (_.$$typeof) {
            case gi:
                return g = g.get(_.key === null ? p : _.key) || null,
                a(h, g, _, x);
            case Pn:
                return g = g.get(_.key === null ? p : _.key) || null,
                u(h, g, _, x);
            case Tt:
                var S = _._init;
                return m(g, h, p, S(_._payload), x)
            }
            if (_r(_) || lr(_))
                return g = g.get(p) || null,
                c(h, g, _, x, null);
            Ci(h, _)
        }
        return null
    }
    function v(g, h, p, _) {
        for (var x = null, S = null, P = h, z = h = 0, b = null; P !== null && z < p.length; z++) {
            P.index > z ? (b = P,
            P = null) : b = P.sibling;
            var M = f(g, P, p[z], _);
            if (M === null) {
                P === null && (P = b);
                break
            }
            e && P && M.alternate === null && t(g, P),
            h = s(M, h, z),
            S === null ? x = M : S.sibling = M,
            S = M,
            P = b
        }
        if (z === p.length)
            return n(g, P),
            U && nn(g, z),
            x;
        if (P === null) {
            for (; z < p.length; z++)
                P = d(g, p[z], _),
                P !== null && (h = s(P, h, z),
                S === null ? x = P : S.sibling = P,
                S = P);
            return U && nn(g, z),
            x
        }
        for (P = r(g, P); z < p.length; z++)
            b = m(P, g, z, p[z], _),
            b !== null && (e && b.alternate !== null && P.delete(b.key === null ? z : b.key),
            h = s(b, h, z),
            S === null ? x = b : S.sibling = b,
            S = b);
        return e && P.forEach(function(H) {
            return t(g, H)
        }),
        U && nn(g, z),
        x
    }
    function k(g, h, p, _) {
        var x = lr(p);
        if (typeof x != "function")
            throw Error(j(150));
        if (p = x.call(p),
        p == null)
            throw Error(j(151));
        for (var S = x = null, P = h, z = h = 0, b = null, M = p.next(); P !== null && !M.done; z++,
        M = p.next()) {
            P.index > z ? (b = P,
            P = null) : b = P.sibling;
            var H = f(g, P, M.value, _);
            if (H === null) {
                P === null && (P = b);
                break
            }
            e && P && H.alternate === null && t(g, P),
            h = s(H, h, z),
            S === null ? x = H : S.sibling = H,
            S = H,
            P = b
        }
        if (M.done)
            return n(g, P),
            U && nn(g, z),
            x;
        if (P === null) {
            for (; !M.done; z++,
            M = p.next())
                M = d(g, M.value, _),
                M !== null && (h = s(M, h, z),
                S === null ? x = M : S.sibling = M,
                S = M);
            return U && nn(g, z),
            x
        }
        for (P = r(g, P); !M.done; z++,
        M = p.next())
            M = m(P, g, z, M.value, _),
            M !== null && (e && M.alternate !== null && P.delete(M.key === null ? z : M.key),
            h = s(M, h, z),
            S === null ? x = M : S.sibling = M,
            S = M);
        return e && P.forEach(function(Z) {
            return t(g, Z)
        }),
        U && nn(g, z),
        x
    }
    function C(g, h, p, _) {
        if (typeof p == "object" && p !== null && p.type === Cn && p.key === null && (p = p.props.children),
        typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case gi:
                e: {
                    for (var x = p.key, S = h; S !== null; ) {
                        if (S.key === x) {
                            if (x = p.type,
                            x === Cn) {
                                if (S.tag === 7) {
                                    n(g, S.sibling),
                                    h = i(S, p.props.children),
                                    h.return = g,
                                    g = h;
                                    break e
                                }
                            } else if (S.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Tt && Zu(x) === S.type) {
                                n(g, S.sibling),
                                h = i(S, p.props),
                                h.ref = fr(g, S, p),
                                h.return = g,
                                g = h;
                                break e
                            }
                            n(g, S);
                            break
                        } else
                            t(g, S);
                        S = S.sibling
                    }
                    p.type === Cn ? (h = hn(p.props.children, g.mode, _, p.key),
                    h.return = g,
                    g = h) : (_ = Gi(p.type, p.key, p.props, null, g.mode, _),
                    _.ref = fr(g, h, p),
                    _.return = g,
                    g = _)
                }
                return o(g);
            case Pn:
                e: {
                    for (S = p.key; h !== null; ) {
                        if (h.key === S)
                            if (h.tag === 4 && h.stateNode.containerInfo === p.containerInfo && h.stateNode.implementation === p.implementation) {
                                n(g, h.sibling),
                                h = i(h, p.children || []),
                                h.return = g,
                                g = h;
                                break e
                            } else {
                                n(g, h);
                                break
                            }
                        else
                            t(g, h);
                        h = h.sibling
                    }
                    h = Eo(p, g.mode, _),
                    h.return = g,
                    g = h
                }
                return o(g);
            case Tt:
                return S = p._init,
                C(g, h, S(p._payload), _)
            }
            if (_r(p))
                return v(g, h, p, _);
            if (lr(p))
                return k(g, h, p, _);
            Ci(g, p)
        }
        return typeof p == "string" && p !== "" || typeof p == "number" ? (p = "" + p,
        h !== null && h.tag === 6 ? (n(g, h.sibling),
        h = i(h, p),
        h.return = g,
        g = h) : (n(g, h),
        h = To(p, g.mode, _),
        h.return = g,
        g = h),
        o(g)) : n(g, h)
    }
    return C
}
var Xn = Qf(!0)
  , Yf = Qf(!1)
  , ds = Qt(null)
  , fs = null
  , Vn = null
  , xa = null;
function wa() {
    xa = Vn = fs = null
}
function za(e) {
    var t = ds.current;
    B(ds),
    e._currentValue = t
}
function kl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function $n(e, t) {
    fs = e,
    xa = Vn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Pe = !0),
    e.firstContext = null)
}
function $e(e) {
    var t = e._currentValue;
    if (xa !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        Vn === null) {
            if (fs === null)
                throw Error(j(308));
            Vn = e,
            fs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Vn = Vn.next = e;
    return t
}
var un = null;
function Sa(e) {
    un === null ? un = [e] : un.push(e)
}
function Xf(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    Sa(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    kt(e, r)
}
function kt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Et = !1;
function ja(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function Zf(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function gt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Wt(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    A & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        kt(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    Sa(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    kt(e, n)
}
function Fi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        ca(e, n)
    }
}
function Ju(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function hs(e, t, n, r) {
    var i = e.updateQueue;
    Et = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        o === null ? s = u : o.next = u,
        o = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== o && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (s !== null) {
        var d = i.baseState;
        o = 0,
        c = u = a = null,
        l = s;
        do {
            var f = l.lane
              , m = l.eventTime;
            if ((r & f) === f) {
                c !== null && (c = c.next = {
                    eventTime: m,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e
                      , k = l;
                    switch (f = t,
                    m = n,
                    k.tag) {
                    case 1:
                        if (v = k.payload,
                        typeof v == "function") {
                            d = v.call(m, d, f);
                            break e
                        }
                        d = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = k.payload,
                        f = typeof v == "function" ? v.call(m, d, f) : v,
                        f == null)
                            break e;
                        d = Q({}, d, f);
                        break e;
                    case 2:
                        Et = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                f = i.effects,
                f === null ? i.effects = [l] : f.push(l))
            } else
                m = {
                    eventTime: m,
                    lane: f,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = m,
                a = d) : c = c.next = m,
                o |= f;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                f = l,
                l = f.next,
                f.next = null,
                i.lastBaseUpdate = f,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = d),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                o |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        vn |= o,
        e.lanes = o,
        e.memoizedState = d
    }
}
function ec(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(j(191, i));
                i.call(r)
            }
        }
}
var ai = {}
  , at = Qt(ai)
  , Qr = Qt(ai)
  , Yr = Qt(ai);
function cn(e) {
    if (e === ai)
        throw Error(j(174));
    return e
}
function Pa(e, t) {
    switch (I(Yr, t),
    I(Qr, e),
    I(at, ai),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : el(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = el(t, e)
    }
    B(at),
    I(at, t)
}
function Zn() {
    B(at),
    B(Qr),
    B(Yr)
}
function Jf(e) {
    cn(Yr.current);
    var t = cn(at.current)
      , n = el(t, e.type);
    t !== n && (I(Qr, e),
    I(at, n))
}
function Ca(e) {
    Qr.current === e && (B(at),
    B(Qr))
}
var $ = Qt(0);
function ps(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var wo = [];
function Ta() {
    for (var e = 0; e < wo.length; e++)
        wo[e]._workInProgressVersionPrimary = null;
    wo.length = 0
}
var Bi = wt.ReactCurrentDispatcher
  , zo = wt.ReactCurrentBatchConfig
  , yn = 0
  , K = null
  , ie = null
  , ae = null
  , ms = !1
  , Tr = !1
  , Xr = 0
  , my = 0;
function he() {
    throw Error(j(321))
}
function Ea(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!tt(e[n], t[n]))
            return !1;
    return !0
}
function ba(e, t, n, r, i, s) {
    if (yn = s,
    K = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Bi.current = e === null || e.memoizedState === null ? _y : ky,
    e = n(r, i),
    Tr) {
        s = 0;
        do {
            if (Tr = !1,
            Xr = 0,
            25 <= s)
                throw Error(j(301));
            s += 1,
            ae = ie = null,
            t.updateQueue = null,
            Bi.current = xy,
            e = n(r, i)
        } while (Tr)
    }
    if (Bi.current = gs,
    t = ie !== null && ie.next !== null,
    yn = 0,
    ae = ie = K = null,
    ms = !1,
    t)
        throw Error(j(300));
    return e
}
function Ma() {
    var e = Xr !== 0;
    return Xr = 0,
    e
}
function st() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ae === null ? K.memoizedState = ae = e : ae = ae.next = e,
    ae
}
function Ge() {
    if (ie === null) {
        var e = K.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = ie.next;
    var t = ae === null ? K.memoizedState : ae.next;
    if (t !== null)
        ae = t,
        ie = e;
    else {
        if (e === null)
            throw Error(j(310));
        ie = e,
        e = {
            memoizedState: ie.memoizedState,
            baseState: ie.baseState,
            baseQueue: ie.baseQueue,
            queue: ie.queue,
            next: null
        },
        ae === null ? K.memoizedState = ae = e : ae = ae.next = e
    }
    return ae
}
function Zr(e, t) {
    return typeof t == "function" ? t(e) : t
}
function So(e) {
    var t = Ge()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = ie
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var l = o = null
          , a = null
          , u = s;
        do {
            var c = u.lane;
            if ((yn & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = d,
                o = r) : a = a.next = d,
                K.lanes |= c,
                vn |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        a === null ? o = r : a.next = l,
        tt(r, t.memoizedState) || (Pe = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            K.lanes |= s,
            vn |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function jo(e) {
    var t = Ge()
      , n = t.queue;
    if (n === null)
        throw Error(j(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
            o = o.next;
        while (o !== i);
        tt(s, t.memoizedState) || (Pe = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function eh() {}
function th(e, t) {
    var n = K
      , r = Ge()
      , i = t()
      , s = !tt(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    Pe = !0),
    r = r.queue,
    Na(ih.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || ae !== null && ae.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        Jr(9, rh.bind(null, n, r, i, t), void 0, null),
        ue === null)
            throw Error(j(349));
        yn & 30 || nh(n, t, i)
    }
    return i
}
function nh(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = K.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    K.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function rh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    sh(t) && oh(e)
}
function ih(e, t, n) {
    return n(function() {
        sh(t) && oh(e)
    })
}
function sh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !tt(e, n)
    } catch {
        return !0
    }
}
function oh(e) {
    var t = kt(e, 1);
    t !== null && et(t, e, 1, -1)
}
function tc(e) {
    var t = st();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zr,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = vy.bind(null, K, e),
    [t.memoizedState, e]
}
function Jr(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = K.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    K.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function lh() {
    return Ge().memoizedState
}
function qi(e, t, n, r) {
    var i = st();
    K.flags |= e,
    i.memoizedState = Jr(1 | t, n, void 0, r === void 0 ? null : r)
}
function Ds(e, t, n, r) {
    var i = Ge();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (ie !== null) {
        var o = ie.memoizedState;
        if (s = o.destroy,
        r !== null && Ea(r, o.deps)) {
            i.memoizedState = Jr(t, n, s, r);
            return
        }
    }
    K.flags |= e,
    i.memoizedState = Jr(1 | t, n, s, r)
}
function nc(e, t) {
    return qi(8390656, 8, e, t)
}
function Na(e, t) {
    return Ds(2048, 8, e, t)
}
function ah(e, t) {
    return Ds(4, 2, e, t)
}
function uh(e, t) {
    return Ds(4, 4, e, t)
}
function ch(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function dh(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Ds(4, 4, ch.bind(null, t, e), n)
}
function Oa() {}
function fh(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ea(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function hh(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ea(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function ph(e, t, n) {
    return yn & 21 ? (tt(n, t) || (n = _f(),
    K.lanes |= n,
    vn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Pe = !0),
    e.memoizedState = n)
}
function gy(e, t) {
    var n = W;
    W = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = zo.transition;
    zo.transition = {};
    try {
        e(!1),
        t()
    } finally {
        W = n,
        zo.transition = r
    }
}
function mh() {
    return Ge().memoizedState
}
function yy(e, t, n) {
    var r = Ft(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    gh(e))
        yh(t, n);
    else if (n = Xf(e, t, n, r),
    n !== null) {
        var i = xe();
        et(n, e, r, i),
        vh(n, t, r)
    }
}
function vy(e, t, n) {
    var r = Ft(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (gh(e))
        yh(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , l = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                tt(l, o)) {
                    var a = t.interleaved;
                    a === null ? (i.next = i,
                    Sa(t)) : (i.next = a.next,
                    a.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = Xf(e, t, i, r),
        n !== null && (i = xe(),
        et(n, e, r, i),
        vh(n, t, r))
    }
}
function gh(e) {
    var t = e.alternate;
    return e === K || t !== null && t === K
}
function yh(e, t) {
    Tr = ms = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function vh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        ca(e, n)
    }
}
var gs = {
    readContext: $e,
    useCallback: he,
    useContext: he,
    useEffect: he,
    useImperativeHandle: he,
    useInsertionEffect: he,
    useLayoutEffect: he,
    useMemo: he,
    useReducer: he,
    useRef: he,
    useState: he,
    useDebugValue: he,
    useDeferredValue: he,
    useTransition: he,
    useMutableSource: he,
    useSyncExternalStore: he,
    useId: he,
    unstable_isNewReconciler: !1
}
  , _y = {
    readContext: $e,
    useCallback: function(e, t) {
        return st().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: $e,
    useEffect: nc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        qi(4194308, 4, ch.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return qi(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return qi(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = st();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = st();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = yy.bind(null, K, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = st();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: tc,
    useDebugValue: Oa,
    useDeferredValue: function(e) {
        return st().memoizedState = e
    },
    useTransition: function() {
        var e = tc(!1)
          , t = e[0];
        return e = gy.bind(null, e[1]),
        st().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = K
          , i = st();
        if (U) {
            if (n === void 0)
                throw Error(j(407));
            n = n()
        } else {
            if (n = t(),
            ue === null)
                throw Error(j(349));
            yn & 30 || nh(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        nc(ih.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        Jr(9, rh.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = st()
          , t = ue.identifierPrefix;
        if (U) {
            var n = pt
              , r = ht;
            n = (r & ~(1 << 32 - Je(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Xr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = my++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , ky = {
    readContext: $e,
    useCallback: fh,
    useContext: $e,
    useEffect: Na,
    useImperativeHandle: dh,
    useInsertionEffect: ah,
    useLayoutEffect: uh,
    useMemo: hh,
    useReducer: So,
    useRef: lh,
    useState: function() {
        return So(Zr)
    },
    useDebugValue: Oa,
    useDeferredValue: function(e) {
        var t = Ge();
        return ph(t, ie.memoizedState, e)
    },
    useTransition: function() {
        var e = So(Zr)[0]
          , t = Ge().memoizedState;
        return [e, t]
    },
    useMutableSource: eh,
    useSyncExternalStore: th,
    useId: mh,
    unstable_isNewReconciler: !1
}
  , xy = {
    readContext: $e,
    useCallback: fh,
    useContext: $e,
    useEffect: Na,
    useImperativeHandle: dh,
    useInsertionEffect: ah,
    useLayoutEffect: uh,
    useMemo: hh,
    useReducer: jo,
    useRef: lh,
    useState: function() {
        return jo(Zr)
    },
    useDebugValue: Oa,
    useDeferredValue: function(e) {
        var t = Ge();
        return ie === null ? t.memoizedState = e : ph(t, ie.memoizedState, e)
    },
    useTransition: function() {
        var e = jo(Zr)[0]
          , t = Ge().memoizedState;
        return [e, t]
    },
    useMutableSource: eh,
    useSyncExternalStore: th,
    useId: mh,
    unstable_isNewReconciler: !1
};
function Qe(e, t) {
    if (e && e.defaultProps) {
        t = Q({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function xl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : Q({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var As = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? xn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe()
          , i = Ft(e)
          , s = gt(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = Wt(e, s, i),
        t !== null && (et(t, e, i, r),
        Fi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = xe()
          , i = Ft(e)
          , s = gt(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Wt(e, s, i),
        t !== null && (et(t, e, i, r),
        Fi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = xe()
          , r = Ft(e)
          , i = gt(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Wt(e, i, r),
        t !== null && (et(t, e, r, n),
        Fi(t, e, r))
    }
};
function rc(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Hr(n, r) || !Hr(i, s) : !0
}
function _h(e, t, n) {
    var r = !1
      , i = Ht
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = $e(s) : (i = Te(t) ? mn : ge.current,
    r = t.contextTypes,
    s = (r = r != null) ? Qn(e, i) : Ht),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = As,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function ic(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && As.enqueueReplaceState(t, t.state, null)
}
function wl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    ja(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = $e(s) : (s = Te(t) ? mn : ge.current,
    i.context = Qn(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (xl(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && As.enqueueReplaceState(i, i.state, null),
    hs(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function Jn(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += Qm(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function Po(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function zl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var wy = typeof WeakMap == "function" ? WeakMap : Map;
function kh(e, t, n) {
    n = gt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        vs || (vs = !0,
        Ol = r),
        zl(e, t)
    }
    ,
    n
}
function xh(e, t, n) {
    n = gt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            zl(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        zl(e, t),
        typeof r != "function" && (It === null ? It = new Set([this]) : It.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function sc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new wy;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = Dy.bind(null, e, t, n),
    t.then(e, e))
}
function oc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function lc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = gt(-1, 1),
    t.tag = 2,
    Wt(n, t, 1))),
    n.lanes |= 1),
    e)
}
var zy = wt.ReactCurrentOwner
  , Pe = !1;
function ke(e, t, n, r) {
    t.child = e === null ? Yf(t, null, n, r) : Xn(t, e.child, n, r)
}
function ac(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return $n(t, i),
    r = ba(e, t, n, r, s, i),
    n = Ma(),
    e !== null && !Pe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    xt(e, t, i)) : (U && n && va(t),
    t.flags |= 1,
    ke(e, t, r, i),
    t.child)
}
function uc(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Fa(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        wh(e, t, s, r, i)) : (e = Gi(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Hr,
        n(o, r) && e.ref === t.ref)
            return xt(e, t, i)
    }
    return t.flags |= 1,
    e = Bt(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function wh(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Hr(s, r) && e.ref === t.ref)
            if (Pe = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Pe = !0);
            else
                return t.lanes = e.lanes,
                xt(e, t, i)
    }
    return Sl(e, t, n, r, i)
}
function zh(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            I(An, Me),
            Me |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                I(An, Me),
                Me |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            I(An, Me),
            Me |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        I(An, Me),
        Me |= r;
    return ke(e, t, i, n),
    t.child
}
function Sh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function Sl(e, t, n, r, i) {
    var s = Te(n) ? mn : ge.current;
    return s = Qn(t, s),
    $n(t, i),
    n = ba(e, t, n, r, s, i),
    r = Ma(),
    e !== null && !Pe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    xt(e, t, i)) : (U && r && va(t),
    t.flags |= 1,
    ke(e, t, n, i),
    t.child)
}
function cc(e, t, n, r, i) {
    if (Te(n)) {
        var s = !0;
        as(t)
    } else
        s = !1;
    if ($n(t, i),
    t.stateNode === null)
        Ui(e, t),
        _h(t, n, r),
        wl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , l = t.memoizedProps;
        o.props = l;
        var a = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = $e(u) : (u = Te(n) ? mn : ge.current,
        u = Qn(t, u));
        var c = n.getDerivedStateFromProps
          , d = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        d || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== u) && ic(t, o, r, u),
        Et = !1;
        var f = t.memoizedState;
        o.state = f,
        hs(t, r, o, i),
        a = t.memoizedState,
        l !== r || f !== a || Ce.current || Et ? (typeof c == "function" && (xl(t, n, c, r),
        a = t.memoizedState),
        (l = Et || rc(t, n, l, r, f, a, u)) ? (d || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        o.props = r,
        o.state = a,
        o.context = u,
        r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        Zf(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : Qe(t.type, l),
        o.props = u,
        d = t.pendingProps,
        f = o.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = $e(a) : (a = Te(n) ? mn : ge.current,
        a = Qn(t, a));
        var m = n.getDerivedStateFromProps;
        (c = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== d || f !== a) && ic(t, o, r, a),
        Et = !1,
        f = t.memoizedState,
        o.state = f,
        hs(t, r, o, i);
        var v = t.memoizedState;
        l !== d || f !== v || Ce.current || Et ? (typeof m == "function" && (xl(t, n, m, r),
        v = t.memoizedState),
        (u = Et || rc(t, n, u, r, f, v, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, a),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, a)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        o.props = r,
        o.state = v,
        o.context = a,
        r = u) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && f === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return jl(e, t, n, r, s, i)
}
function jl(e, t, n, r, i, s) {
    Sh(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && Qu(t, n, !1),
        xt(e, t, s);
    r = t.stateNode,
    zy.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = Xn(t, e.child, null, s),
    t.child = Xn(t, null, l, s)) : ke(e, t, l, s),
    t.memoizedState = r.state,
    i && Qu(t, n, !0),
    t.child
}
function jh(e) {
    var t = e.stateNode;
    t.pendingContext ? Ku(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ku(e, t.context, !1),
    Pa(e, t.containerInfo)
}
function dc(e, t, n, r, i) {
    return Yn(),
    ka(i),
    t.flags |= 256,
    ke(e, t, n, r),
    t.child
}
var Pl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Cl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Ph(e, t, n) {
    var r = t.pendingProps, i = $.current, s = !1, o = (t.flags & 128) !== 0, l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    I($, i & 1),
    e === null)
        return _l(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = Is(o, r, 0, null),
        e = hn(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Cl(n),
        t.memoizedState = Pl,
        e) : La(t, o));
    if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return Sy(e, t, o, r, l, i, n);
    if (s) {
        s = r.fallback,
        o = t.mode,
        i = e.child,
        l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Bt(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? s = Bt(l, s) : (s = hn(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? Cl(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = Pl,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Bt(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function La(e, t) {
    return t = Is({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ti(e, t, n, r) {
    return r !== null && ka(r),
    Xn(t, e.child, null, n),
    e = La(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Sy(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = Po(Error(j(422))),
        Ti(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = Is({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = hn(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && Xn(t, e.child, null, o),
        t.child.memoizedState = Cl(o),
        t.memoizedState = Pl,
        s);
    if (!(t.mode & 1))
        return Ti(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        s = Error(j(419)),
        r = Po(s, r, void 0),
        Ti(e, t, o, r)
    }
    if (l = (o & e.childLanes) !== 0,
    Pe || l) {
        if (r = ue,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            kt(e, i),
            et(r, e, i, -1))
        }
        return Ia(),
        r = Po(Error(j(421))),
        Ti(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = Ay.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    Ne = Rt(i.nextSibling),
    Oe = t,
    U = !0,
    Xe = null,
    e !== null && (Be[qe++] = ht,
    Be[qe++] = pt,
    Be[qe++] = gn,
    ht = e.id,
    pt = e.overflow,
    gn = t),
    t = La(t, r.children),
    t.flags |= 4096,
    t)
}
function fc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    kl(e.return, t, n)
}
function Co(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function Ch(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (ke(e, t, r.children, n),
    r = $.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && fc(e, n, t);
                else if (e.tag === 19)
                    fc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (I($, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && ps(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            Co(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && ps(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            Co(t, !0, n, null, s);
            break;
        case "together":
            Co(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ui(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function xt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    vn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(j(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Bt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Bt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function jy(e, t, n) {
    switch (t.tag) {
    case 3:
        jh(t),
        Yn();
        break;
    case 5:
        Jf(t);
        break;
    case 1:
        Te(t.type) && as(t);
        break;
    case 4:
        Pa(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        I(ds, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (I($, $.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Ph(e, t, n) : (I($, $.current & 1),
            e = xt(e, t, n),
            e !== null ? e.sibling : null);
        I($, $.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Ch(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        I($, $.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        zh(e, t, n)
    }
    return xt(e, t, n)
}
var Th, Tl, Eh, bh;
Th = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Tl = function() {}
;
Eh = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        cn(at.current);
        var s = null;
        switch (n) {
        case "input":
            i = Yo(e, i),
            r = Yo(e, r),
            s = [];
            break;
        case "select":
            i = Q({}, i, {
                value: void 0
            }),
            r = Q({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = Jo(e, i),
            r = Jo(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = os)
        }
        tl(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (o in l)
                        l.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Rr.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in a)
                            a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}),
                            n[o] = a[o])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Rr.hasOwnProperty(u) ? (a != null && u === "onScroll" && F("scroll", e),
                    s || l === a || (s = [])) : (s = s || []).push(u, a))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
bh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function hr(e, t) {
    if (!U)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function pe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Py(e, t, n) {
    var r = t.pendingProps;
    switch (_a(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return pe(t),
        null;
    case 1:
        return Te(t.type) && ls(),
        pe(t),
        null;
    case 3:
        return r = t.stateNode,
        Zn(),
        B(Ce),
        B(ge),
        Ta(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Pi(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        Xe !== null && (Dl(Xe),
        Xe = null))),
        Tl(e, t),
        pe(t),
        null;
    case 5:
        Ca(t);
        var i = cn(Yr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Eh(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(j(166));
                return pe(t),
                null
            }
            if (e = cn(at.current),
            Pi(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[ot] = t,
                r[Kr] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    F("cancel", r),
                    F("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    F("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < xr.length; i++)
                        F(xr[i], r);
                    break;
                case "source":
                    F("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    F("error", r),
                    F("load", r);
                    break;
                case "details":
                    F("toggle", r);
                    break;
                case "input":
                    xu(r, s),
                    F("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    F("invalid", r);
                    break;
                case "textarea":
                    zu(r, s),
                    F("invalid", r)
                }
                tl(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var l = s[o];
                        o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && ji(r.textContent, l, e),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && ji(r.textContent, l, e),
                        i = ["children", "" + l]) : Rr.hasOwnProperty(o) && l != null && o === "onScroll" && F("scroll", r)
                    }
                switch (n) {
                case "input":
                    yi(r),
                    wu(r, s, !0);
                    break;
                case "textarea":
                    yi(r),
                    Su(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = os)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = rf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[ot] = t,
                e[Kr] = r,
                Th(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = nl(n, r),
                    n) {
                    case "dialog":
                        F("cancel", e),
                        F("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        F("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < xr.length; i++)
                            F(xr[i], e);
                        i = r;
                        break;
                    case "source":
                        F("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        F("error", e),
                        F("load", e),
                        i = r;
                        break;
                    case "details":
                        F("toggle", e),
                        i = r;
                        break;
                    case "input":
                        xu(e, r),
                        i = Yo(e, r),
                        F("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = Q({}, r, {
                            value: void 0
                        }),
                        F("invalid", e);
                        break;
                    case "textarea":
                        zu(e, r),
                        i = Jo(e, r),
                        F("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    tl(n, i),
                    l = i;
                    for (s in l)
                        if (l.hasOwnProperty(s)) {
                            var a = l[s];
                            s === "style" ? lf(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && sf(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Wr(e, a) : typeof a == "number" && Wr(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Rr.hasOwnProperty(s) ? a != null && s === "onScroll" && F("scroll", e) : a != null && ia(e, s, a, o))
                        }
                    switch (n) {
                    case "input":
                        yi(e),
                        wu(e, r, !1);
                        break;
                    case "textarea":
                        yi(e),
                        Su(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Ut(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Bn(e, !!r.multiple, s, !1) : r.defaultValue != null && Bn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = os)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return pe(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            bh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(j(166));
            if (n = cn(Yr.current),
            cn(at.current),
            Pi(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[ot] = t,
                (s = r.nodeValue !== n) && (e = Oe,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        ji(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && ji(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[ot] = t,
                t.stateNode = r
        }
        return pe(t),
        null;
    case 13:
        if (B($),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (U && Ne !== null && t.mode & 1 && !(t.flags & 128))
                Kf(),
                Yn(),
                t.flags |= 98560,
                s = !1;
            else if (s = Pi(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(j(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(j(317));
                    s[ot] = t
                } else
                    Yn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                pe(t),
                s = !1
            } else
                Xe !== null && (Dl(Xe),
                Xe = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || $.current & 1 ? oe === 0 && (oe = 3) : Ia())),
        t.updateQueue !== null && (t.flags |= 4),
        pe(t),
        null);
    case 4:
        return Zn(),
        Tl(e, t),
        e === null && $r(t.stateNode.containerInfo),
        pe(t),
        null;
    case 10:
        return za(t.type._context),
        pe(t),
        null;
    case 17:
        return Te(t.type) && ls(),
        pe(t),
        null;
    case 19:
        if (B($),
        s = t.memoizedState,
        s === null)
            return pe(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                hr(s, !1);
            else {
                if (oe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = ps(e),
                        o !== null) {
                            for (t.flags |= 128,
                            hr(s, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                e = o.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return I($, $.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && ee() > er && (t.flags |= 128,
                r = !0,
                hr(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ps(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    hr(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !U)
                        return pe(t),
                        null
                } else
                    2 * ee() - s.renderingStartTime > er && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    hr(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = ee(),
        t.sibling = null,
        n = $.current,
        I($, r ? n & 1 | 2 : n & 1),
        t) : (pe(t),
        null);
    case 22:
    case 23:
        return Wa(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Me & 1073741824 && (pe(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : pe(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(j(156, t.tag))
}
function Cy(e, t) {
    switch (_a(t),
    t.tag) {
    case 1:
        return Te(t.type) && ls(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Zn(),
        B(Ce),
        B(ge),
        Ta(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Ca(t),
        null;
    case 13:
        if (B($),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(j(340));
            Yn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return B($),
        null;
    case 4:
        return Zn(),
        null;
    case 10:
        return za(t.type._context),
        null;
    case 22:
    case 23:
        return Wa(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Ei = !1
  , me = !1
  , Ty = typeof WeakSet == "function" ? WeakSet : Set
  , E = null;
function Dn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                Y(e, t, r)
            }
        else
            n.current = null
}
function El(e, t, n) {
    try {
        n()
    } catch (r) {
        Y(e, t, r)
    }
}
var hc = !1;
function Ey(e, t) {
    if (fl = rs,
    e = Vf(),
    ya(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , d = e
                      , f = null;
                    t: for (; ; ) {
                        for (var m; d !== n || i !== 0 && d.nodeType !== 3 || (l = o + i),
                        d !== s || r !== 0 && d.nodeType !== 3 || (a = o + r),
                        d.nodeType === 3 && (o += d.nodeValue.length),
                        (m = d.firstChild) !== null; )
                            f = d,
                            d = m;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (f === n && ++u === i && (l = o),
                            f === s && ++c === r && (a = o),
                            (m = d.nextSibling) !== null)
                                break;
                            d = f,
                            f = d.parentNode
                        }
                        d = m
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (hl = {
        focusedElem: e,
        selectionRange: n
    },
    rs = !1,
    E = t; E !== null; )
        if (t = E,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            E = e;
        else
            for (; E !== null; ) {
                t = E;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var k = v.memoizedProps
                                  , C = v.memoizedState
                                  , g = t.stateNode
                                  , h = g.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Qe(t.type, k), C);
                                g.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var p = t.stateNode.containerInfo;
                            p.nodeType === 1 ? p.textContent = "" : p.nodeType === 9 && p.documentElement && p.removeChild(p.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(j(163))
                        }
                } catch (_) {
                    Y(t, t.return, _)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    E = e;
                    break
                }
                E = t.return
            }
    return v = hc,
    hc = !1,
    v
}
function Er(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && El(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function Rs(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function bl(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Mh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Mh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[ot],
    delete t[Kr],
    delete t[gl],
    delete t[dy],
    delete t[fy])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Nh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function pc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Nh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ml(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = os));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ml(e, t, n),
        e = e.sibling; e !== null; )
            Ml(e, t, n),
            e = e.sibling
}
function Nl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Nl(e, t, n),
        e = e.sibling; e !== null; )
            Nl(e, t, n),
            e = e.sibling
}
var ce = null
  , Ye = !1;
function St(e, t, n) {
    for (n = n.child; n !== null; )
        Oh(e, t, n),
        n = n.sibling
}
function Oh(e, t, n) {
    if (lt && typeof lt.onCommitFiberUnmount == "function")
        try {
            lt.onCommitFiberUnmount(bs, n)
        } catch {}
    switch (n.tag) {
    case 5:
        me || Dn(n, t);
    case 6:
        var r = ce
          , i = Ye;
        ce = null,
        St(e, t, n),
        ce = r,
        Ye = i,
        ce !== null && (Ye ? (e = ce,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ce.removeChild(n.stateNode));
        break;
    case 18:
        ce !== null && (Ye ? (e = ce,
        n = n.stateNode,
        e.nodeType === 8 ? ko(e.parentNode, n) : e.nodeType === 1 && ko(e, n),
        qr(e)) : ko(ce, n.stateNode));
        break;
    case 4:
        r = ce,
        i = Ye,
        ce = n.stateNode.containerInfo,
        Ye = !0,
        St(e, t, n),
        ce = r,
        Ye = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!me && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && El(n, t, o),
                i = i.next
            } while (i !== r)
        }
        St(e, t, n);
        break;
    case 1:
        if (!me && (Dn(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                Y(n, t, l)
            }
        St(e, t, n);
        break;
    case 21:
        St(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (me = (r = me) || n.memoizedState !== null,
        St(e, t, n),
        me = r) : St(e, t, n);
        break;
    default:
        St(e, t, n)
    }
}
function mc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Ty),
        t.forEach(function(r) {
            var i = Ry.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function Ke(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , o = t
                  , l = o;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ce = l.stateNode,
                        Ye = !1;
                        break e;
                    case 3:
                        ce = l.stateNode.containerInfo,
                        Ye = !0;
                        break e;
                    case 4:
                        ce = l.stateNode.containerInfo,
                        Ye = !0;
                        break e
                    }
                    l = l.return
                }
                if (ce === null)
                    throw Error(j(160));
                Oh(s, o, i),
                ce = null,
                Ye = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                Y(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Lh(t, e),
            t = t.sibling
}
function Lh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Ke(t, e),
        it(e),
        r & 4) {
            try {
                Er(3, e, e.return),
                Rs(3, e)
            } catch (k) {
                Y(e, e.return, k)
            }
            try {
                Er(5, e, e.return)
            } catch (k) {
                Y(e, e.return, k)
            }
        }
        break;
    case 1:
        Ke(t, e),
        it(e),
        r & 512 && n !== null && Dn(n, n.return);
        break;
    case 5:
        if (Ke(t, e),
        it(e),
        r & 512 && n !== null && Dn(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Wr(i, "")
            } catch (k) {
                Y(e, e.return, k)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && s.type === "radio" && s.name != null && tf(i, s),
                    nl(l, o);
                    var u = nl(l, s);
                    for (o = 0; o < a.length; o += 2) {
                        var c = a[o]
                          , d = a[o + 1];
                        c === "style" ? lf(i, d) : c === "dangerouslySetInnerHTML" ? sf(i, d) : c === "children" ? Wr(i, d) : ia(i, c, d, u)
                    }
                    switch (l) {
                    case "input":
                        Xo(i, s);
                        break;
                    case "textarea":
                        nf(i, s);
                        break;
                    case "select":
                        var f = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var m = s.value;
                        m != null ? Bn(i, !!s.multiple, m, !1) : f !== !!s.multiple && (s.defaultValue != null ? Bn(i, !!s.multiple, s.defaultValue, !0) : Bn(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[Kr] = s
                } catch (k) {
                    Y(e, e.return, k)
                }
        }
        break;
    case 6:
        if (Ke(t, e),
        it(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(j(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (k) {
                Y(e, e.return, k)
            }
        }
        break;
    case 3:
        if (Ke(t, e),
        it(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                qr(t.containerInfo)
            } catch (k) {
                Y(e, e.return, k)
            }
        break;
    case 4:
        Ke(t, e),
        it(e);
        break;
    case 13:
        Ke(t, e),
        it(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (Aa = ee())),
        r & 4 && mc(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (me = (u = me) || c,
        Ke(t, e),
        me = u) : Ke(t, e),
        it(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (E = e,
                c = e.child; c !== null; ) {
                    for (d = E = c; E !== null; ) {
                        switch (f = E,
                        m = f.child,
                        f.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Er(4, f, f.return);
                            break;
                        case 1:
                            Dn(f, f.return);
                            var v = f.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = f,
                                n = f.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (k) {
                                    Y(r, n, k)
                                }
                            }
                            break;
                        case 5:
                            Dn(f, f.return);
                            break;
                        case 22:
                            if (f.memoizedState !== null) {
                                yc(d);
                                continue
                            }
                        }
                        m !== null ? (m.return = f,
                        E = m) : yc(d)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (c === null) {
                        c = d;
                        try {
                            i = d.stateNode,
                            u ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = d.stateNode,
                            a = d.memoizedProps.style,
                            o = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = of("display", o))
                        } catch (k) {
                            Y(e, e.return, k)
                        }
                    }
                } else if (d.tag === 6) {
                    if (c === null)
                        try {
                            d.stateNode.nodeValue = u ? "" : d.memoizedProps
                        } catch (k) {
                            Y(e, e.return, k)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    c === d && (c = null),
                    d = d.return
                }
                c === d && (c = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        Ke(t, e),
        it(e),
        r & 4 && mc(e);
        break;
    case 21:
        break;
    default:
        Ke(t, e),
        it(e)
    }
}
function it(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Nh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(j(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Wr(i, ""),
                r.flags &= -33);
                var s = pc(e);
                Nl(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , l = pc(e);
                Ml(e, l, o);
                break;
            default:
                throw Error(j(161))
            }
        } catch (a) {
            Y(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function by(e, t, n) {
    E = e,
    Vh(e)
}
function Vh(e, t, n) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
        var i = E
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Ei;
            if (!o) {
                var l = i.alternate
                  , a = l !== null && l.memoizedState !== null || me;
                l = Ei;
                var u = me;
                if (Ei = o,
                (me = a) && !u)
                    for (E = i; E !== null; )
                        o = E,
                        a = o.child,
                        o.tag === 22 && o.memoizedState !== null ? vc(i) : a !== null ? (a.return = o,
                        E = a) : vc(i);
                for (; s !== null; )
                    E = s,
                    Vh(s),
                    s = s.sibling;
                E = i,
                Ei = l,
                me = u
            }
            gc(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            E = s) : gc(e)
    }
}
function gc(e) {
    for (; E !== null; ) {
        var t = E;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        me || Rs(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !me)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : Qe(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && ec(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            ec(t, o, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var d = c.dehydrated;
                                    d !== null && qr(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(j(163))
                    }
                me || t.flags & 512 && bl(t)
            } catch (f) {
                Y(t, t.return, f)
            }
        }
        if (t === e) {
            E = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            E = n;
            break
        }
        E = t.return
    }
}
function yc(e) {
    for (; E !== null; ) {
        var t = E;
        if (t === e) {
            E = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            E = n;
            break
        }
        E = t.return
    }
}
function vc(e) {
    for (; E !== null; ) {
        var t = E;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Rs(4, t)
                } catch (a) {
                    Y(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        Y(t, i, a)
                    }
                }
                var s = t.return;
                try {
                    bl(t)
                } catch (a) {
                    Y(t, s, a)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    bl(t)
                } catch (a) {
                    Y(t, o, a)
                }
            }
        } catch (a) {
            Y(t, t.return, a)
        }
        if (t === e) {
            E = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            E = l;
            break
        }
        E = t.return
    }
}
var My = Math.ceil
  , ys = wt.ReactCurrentDispatcher
  , Va = wt.ReactCurrentOwner
  , He = wt.ReactCurrentBatchConfig
  , A = 0
  , ue = null
  , ne = null
  , de = 0
  , Me = 0
  , An = Qt(0)
  , oe = 0
  , ei = null
  , vn = 0
  , Ws = 0
  , Da = 0
  , br = null
  , je = null
  , Aa = 0
  , er = 1 / 0
  , dt = null
  , vs = !1
  , Ol = null
  , It = null
  , bi = !1
  , Lt = null
  , _s = 0
  , Mr = 0
  , Ll = null
  , Hi = -1
  , $i = 0;
function xe() {
    return A & 6 ? ee() : Hi !== -1 ? Hi : Hi = ee()
}
function Ft(e) {
    return e.mode & 1 ? A & 2 && de !== 0 ? de & -de : py.transition !== null ? ($i === 0 && ($i = _f()),
    $i) : (e = W,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Pf(e.type)),
    e) : 1
}
function et(e, t, n, r) {
    if (50 < Mr)
        throw Mr = 0,
        Ll = null,
        Error(j(185));
    si(e, n, r),
    (!(A & 2) || e !== ue) && (e === ue && (!(A & 2) && (Ws |= n),
    oe === 4 && Nt(e, de)),
    Ee(e, r),
    n === 1 && A === 0 && !(t.mode & 1) && (er = ee() + 500,
    Vs && Yt()))
}
function Ee(e, t) {
    var n = e.callbackNode;
    pg(e, t);
    var r = ns(e, e === ue ? de : 0);
    if (r === 0)
        n !== null && Cu(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Cu(n),
        t === 1)
            e.tag === 0 ? hy(_c.bind(null, e)) : Hf(_c.bind(null, e)),
            uy(function() {
                !(A & 6) && Yt()
            }),
            n = null;
        else {
            switch (kf(r)) {
            case 1:
                n = ua;
                break;
            case 4:
                n = yf;
                break;
            case 16:
                n = ts;
                break;
            case 536870912:
                n = vf;
                break;
            default:
                n = ts
            }
            n = qh(n, Dh.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Dh(e, t) {
    if (Hi = -1,
    $i = 0,
    A & 6)
        throw Error(j(327));
    var n = e.callbackNode;
    if (Gn() && e.callbackNode !== n)
        return null;
    var r = ns(e, e === ue ? de : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = ks(e, r);
    else {
        t = r;
        var i = A;
        A |= 2;
        var s = Rh();
        (ue !== e || de !== t) && (dt = null,
        er = ee() + 500,
        fn(e, t));
        do
            try {
                Ly();
                break
            } catch (l) {
                Ah(e, l)
            }
        while (!0);
        wa(),
        ys.current = s,
        A = i,
        ne !== null ? t = 0 : (ue = null,
        de = 0,
        t = oe)
    }
    if (t !== 0) {
        if (t === 2 && (i = ll(e),
        i !== 0 && (r = i,
        t = Vl(e, i))),
        t === 1)
            throw n = ei,
            fn(e, 0),
            Nt(e, r),
            Ee(e, ee()),
            n;
        if (t === 6)
            Nt(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !Ny(i) && (t = ks(e, r),
            t === 2 && (s = ll(e),
            s !== 0 && (r = s,
            t = Vl(e, s))),
            t === 1))
                throw n = ei,
                fn(e, 0),
                Nt(e, r),
                Ee(e, ee()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(j(345));
            case 2:
                rn(e, je, dt);
                break;
            case 3:
                if (Nt(e, r),
                (r & 130023424) === r && (t = Aa + 500 - ee(),
                10 < t)) {
                    if (ns(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        xe(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = ml(rn.bind(null, e, je, dt), t);
                    break
                }
                rn(e, je, dt);
                break;
            case 4:
                if (Nt(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - Je(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = ee() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * My(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = ml(rn.bind(null, e, je, dt), r);
                    break
                }
                rn(e, je, dt);
                break;
            case 5:
                rn(e, je, dt);
                break;
            default:
                throw Error(j(329))
            }
        }
    }
    return Ee(e, ee()),
    e.callbackNode === n ? Dh.bind(null, e) : null
}
function Vl(e, t) {
    var n = br;
    return e.current.memoizedState.isDehydrated && (fn(e, t).flags |= 256),
    e = ks(e, t),
    e !== 2 && (t = je,
    je = n,
    t !== null && Dl(t)),
    e
}
function Dl(e) {
    je === null ? je = e : je.push.apply(je, e)
}
function Ny(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!tt(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function Nt(e, t) {
    for (t &= ~Da,
    t &= ~Ws,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - Je(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function _c(e) {
    if (A & 6)
        throw Error(j(327));
    Gn();
    var t = ns(e, 0);
    if (!(t & 1))
        return Ee(e, ee()),
        null;
    var n = ks(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = ll(e);
        r !== 0 && (t = r,
        n = Vl(e, r))
    }
    if (n === 1)
        throw n = ei,
        fn(e, 0),
        Nt(e, t),
        Ee(e, ee()),
        n;
    if (n === 6)
        throw Error(j(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    rn(e, je, dt),
    Ee(e, ee()),
    null
}
function Ra(e, t) {
    var n = A;
    A |= 1;
    try {
        return e(t)
    } finally {
        A = n,
        A === 0 && (er = ee() + 500,
        Vs && Yt())
    }
}
function _n(e) {
    Lt !== null && Lt.tag === 0 && !(A & 6) && Gn();
    var t = A;
    A |= 1;
    var n = He.transition
      , r = W;
    try {
        if (He.transition = null,
        W = 1,
        e)
            return e()
    } finally {
        W = r,
        He.transition = n,
        A = t,
        !(A & 6) && Yt()
    }
}
function Wa() {
    Me = An.current,
    B(An)
}
function fn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    ay(n)),
    ne !== null)
        for (n = ne.return; n !== null; ) {
            var r = n;
            switch (_a(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ls();
                break;
            case 3:
                Zn(),
                B(Ce),
                B(ge),
                Ta();
                break;
            case 5:
                Ca(r);
                break;
            case 4:
                Zn();
                break;
            case 13:
                B($);
                break;
            case 19:
                B($);
                break;
            case 10:
                za(r.type._context);
                break;
            case 22:
            case 23:
                Wa()
            }
            n = n.return
        }
    if (ue = e,
    ne = e = Bt(e.current, null),
    de = Me = t,
    oe = 0,
    ei = null,
    Da = Ws = vn = 0,
    je = br = null,
    un !== null) {
        for (t = 0; t < un.length; t++)
            if (n = un[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        un = null
    }
    return e
}
function Ah(e, t) {
    do {
        var n = ne;
        try {
            if (wa(),
            Bi.current = gs,
            ms) {
                for (var r = K.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                ms = !1
            }
            if (yn = 0,
            ae = ie = K = null,
            Tr = !1,
            Xr = 0,
            Va.current = null,
            n === null || n.return === null) {
                oe = 1,
                ei = t,
                ne = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , l = n
                  , a = t;
                if (t = de,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , d = c.tag;
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var f = c.alternate;
                        f ? (c.updateQueue = f.updateQueue,
                        c.memoizedState = f.memoizedState,
                        c.lanes = f.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var m = oc(o);
                    if (m !== null) {
                        m.flags &= -257,
                        lc(m, o, l, s, t),
                        m.mode & 1 && sc(s, u, t),
                        t = m,
                        a = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var k = new Set;
                            k.add(a),
                            t.updateQueue = k
                        } else
                            v.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            sc(s, u, t),
                            Ia();
                            break e
                        }
                        a = Error(j(426))
                    }
                } else if (U && l.mode & 1) {
                    var C = oc(o);
                    if (C !== null) {
                        !(C.flags & 65536) && (C.flags |= 256),
                        lc(C, o, l, s, t),
                        ka(Jn(a, l));
                        break e
                    }
                }
                s = a = Jn(a, l),
                oe !== 4 && (oe = 2),
                br === null ? br = [s] : br.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var g = kh(s, a, t);
                        Ju(s, g);
                        break e;
                    case 1:
                        l = a;
                        var h = s.type
                          , p = s.stateNode;
                        if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || p !== null && typeof p.componentDidCatch == "function" && (It === null || !It.has(p)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var _ = xh(s, l, t);
                            Ju(s, _);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            Ih(n)
        } catch (x) {
            t = x,
            ne === n && n !== null && (ne = n = n.return);
            continue
        }
        break
    } while (!0)
}
function Rh() {
    var e = ys.current;
    return ys.current = gs,
    e === null ? gs : e
}
function Ia() {
    (oe === 0 || oe === 3 || oe === 2) && (oe = 4),
    ue === null || !(vn & 268435455) && !(Ws & 268435455) || Nt(ue, de)
}
function ks(e, t) {
    var n = A;
    A |= 2;
    var r = Rh();
    (ue !== e || de !== t) && (dt = null,
    fn(e, t));
    do
        try {
            Oy();
            break
        } catch (i) {
            Ah(e, i)
        }
    while (!0);
    if (wa(),
    A = n,
    ys.current = r,
    ne !== null)
        throw Error(j(261));
    return ue = null,
    de = 0,
    oe
}
function Oy() {
    for (; ne !== null; )
        Wh(ne)
}
function Ly() {
    for (; ne !== null && !sg(); )
        Wh(ne)
}
function Wh(e) {
    var t = Bh(e.alternate, e, Me);
    e.memoizedProps = e.pendingProps,
    t === null ? Ih(e) : ne = t,
    Va.current = null
}
function Ih(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Cy(n, t),
            n !== null) {
                n.flags &= 32767,
                ne = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                oe = 6,
                ne = null;
                return
            }
        } else if (n = Py(n, t, Me),
        n !== null) {
            ne = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ne = t;
            return
        }
        ne = t = e
    } while (t !== null);
    oe === 0 && (oe = 5)
}
function rn(e, t, n) {
    var r = W
      , i = He.transition;
    try {
        He.transition = null,
        W = 1,
        Vy(e, t, n, r)
    } finally {
        He.transition = i,
        W = r
    }
    return null
}
function Vy(e, t, n, r) {
    do
        Gn();
    while (Lt !== null);
    if (A & 6)
        throw Error(j(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(j(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (mg(e, s),
    e === ue && (ne = ue = null,
    de = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || bi || (bi = !0,
    qh(ts, function() {
        return Gn(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = He.transition,
        He.transition = null;
        var o = W;
        W = 1;
        var l = A;
        A |= 4,
        Va.current = null,
        Ey(e, n),
        Lh(n, e),
        ty(hl),
        rs = !!fl,
        hl = fl = null,
        e.current = n,
        by(n),
        og(),
        A = l,
        W = o,
        He.transition = s
    } else
        e.current = n;
    if (bi && (bi = !1,
    Lt = e,
    _s = i),
    s = e.pendingLanes,
    s === 0 && (It = null),
    ug(n.stateNode),
    Ee(e, ee()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (vs)
        throw vs = !1,
        e = Ol,
        Ol = null,
        e;
    return _s & 1 && e.tag !== 0 && Gn(),
    s = e.pendingLanes,
    s & 1 ? e === Ll ? Mr++ : (Mr = 0,
    Ll = e) : Mr = 0,
    Yt(),
    null
}
function Gn() {
    if (Lt !== null) {
        var e = kf(_s)
          , t = He.transition
          , n = W;
        try {
            if (He.transition = null,
            W = 16 > e ? 16 : e,
            Lt === null)
                var r = !1;
            else {
                if (e = Lt,
                Lt = null,
                _s = 0,
                A & 6)
                    throw Error(j(331));
                var i = A;
                for (A |= 4,
                E = e.current; E !== null; ) {
                    var s = E
                      , o = s.child;
                    if (E.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (E = u; E !== null; ) {
                                    var c = E;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Er(8, c, s)
                                    }
                                    var d = c.child;
                                    if (d !== null)
                                        d.return = c,
                                        E = d;
                                    else
                                        for (; E !== null; ) {
                                            c = E;
                                            var f = c.sibling
                                              , m = c.return;
                                            if (Mh(c),
                                            c === u) {
                                                E = null;
                                                break
                                            }
                                            if (f !== null) {
                                                f.return = m,
                                                E = f;
                                                break
                                            }
                                            E = m
                                        }
                                }
                            }
                            var v = s.alternate;
                            if (v !== null) {
                                var k = v.child;
                                if (k !== null) {
                                    v.child = null;
                                    do {
                                        var C = k.sibling;
                                        k.sibling = null,
                                        k = C
                                    } while (k !== null)
                                }
                            }
                            E = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        E = o;
                    else
                        e: for (; E !== null; ) {
                            if (s = E,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Er(9, s, s.return)
                                }
                            var g = s.sibling;
                            if (g !== null) {
                                g.return = s.return,
                                E = g;
                                break e
                            }
                            E = s.return
                        }
                }
                var h = e.current;
                for (E = h; E !== null; ) {
                    o = E;
                    var p = o.child;
                    if (o.subtreeFlags & 2064 && p !== null)
                        p.return = o,
                        E = p;
                    else
                        e: for (o = h; E !== null; ) {
                            if (l = E,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Rs(9, l)
                                    }
                                } catch (x) {
                                    Y(l, l.return, x)
                                }
                            if (l === o) {
                                E = null;
                                break e
                            }
                            var _ = l.sibling;
                            if (_ !== null) {
                                _.return = l.return,
                                E = _;
                                break e
                            }
                            E = l.return
                        }
                }
                if (A = i,
                Yt(),
                lt && typeof lt.onPostCommitFiberRoot == "function")
                    try {
                        lt.onPostCommitFiberRoot(bs, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            W = n,
            He.transition = t
        }
    }
    return !1
}
function kc(e, t, n) {
    t = Jn(n, t),
    t = kh(e, t, 1),
    e = Wt(e, t, 1),
    t = xe(),
    e !== null && (si(e, 1, t),
    Ee(e, t))
}
function Y(e, t, n) {
    if (e.tag === 3)
        kc(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                kc(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (It === null || !It.has(r))) {
                    e = Jn(n, e),
                    e = xh(t, e, 1),
                    t = Wt(t, e, 1),
                    e = xe(),
                    t !== null && (si(t, 1, e),
                    Ee(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Dy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = xe(),
    e.pingedLanes |= e.suspendedLanes & n,
    ue === e && (de & n) === n && (oe === 4 || oe === 3 && (de & 130023424) === de && 500 > ee() - Aa ? fn(e, 0) : Da |= n),
    Ee(e, t)
}
function Fh(e, t) {
    t === 0 && (e.mode & 1 ? (t = ki,
    ki <<= 1,
    !(ki & 130023424) && (ki = 4194304)) : t = 1);
    var n = xe();
    e = kt(e, t),
    e !== null && (si(e, t, n),
    Ee(e, n))
}
function Ay(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    Fh(e, n)
}
function Ry(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(j(314))
    }
    r !== null && r.delete(t),
    Fh(e, n)
}
var Bh;
Bh = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ce.current)
            Pe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Pe = !1,
                jy(e, t, n);
            Pe = !!(e.flags & 131072)
        }
    else
        Pe = !1,
        U && t.flags & 1048576 && $f(t, cs, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ui(e, t),
        e = t.pendingProps;
        var i = Qn(t, ge.current);
        $n(t, n),
        i = ba(null, t, r, e, i, n);
        var s = Ma();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Te(r) ? (s = !0,
        as(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        ja(t),
        i.updater = As,
        t.stateNode = i,
        i._reactInternals = t,
        wl(t, r, e, n),
        t = jl(null, t, r, !0, s, n)) : (t.tag = 0,
        U && s && va(t),
        ke(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ui(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = Iy(r),
            e = Qe(r, e),
            i) {
            case 0:
                t = Sl(null, t, r, e, n);
                break e;
            case 1:
                t = cc(null, t, r, e, n);
                break e;
            case 11:
                t = ac(null, t, r, e, n);
                break e;
            case 14:
                t = uc(null, t, r, Qe(r.type, e), n);
                break e
            }
            throw Error(j(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Qe(r, i),
        Sl(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Qe(r, i),
        cc(e, t, r, i, n);
    case 3:
        e: {
            if (jh(t),
            e === null)
                throw Error(j(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            Zf(e, t),
            hs(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = Jn(Error(j(423)), t),
                    t = dc(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = Jn(Error(j(424)), t),
                    t = dc(e, t, r, n, i);
                    break e
                } else
                    for (Ne = Rt(t.stateNode.containerInfo.firstChild),
                    Oe = t,
                    U = !0,
                    Xe = null,
                    n = Yf(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (Yn(),
                r === i) {
                    t = xt(e, t, n);
                    break e
                }
                ke(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return Jf(t),
        e === null && _l(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        pl(r, i) ? o = null : s !== null && pl(r, s) && (t.flags |= 32),
        Sh(e, t),
        ke(e, t, o, n),
        t.child;
    case 6:
        return e === null && _l(t),
        null;
    case 13:
        return Ph(e, t, n);
    case 4:
        return Pa(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Xn(t, null, r, n) : ke(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Qe(r, i),
        ac(e, t, r, i, n);
    case 7:
        return ke(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return ke(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return ke(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            I(ds, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (tt(s.value, o)) {
                    if (s.children === i.children && !Ce.current) {
                        t = xt(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var l = s.dependencies;
                        if (l !== null) {
                            o = s.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (s.tag === 1) {
                                        a = gt(-1, n & -n),
                                        a.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    s.lanes |= n,
                                    a = s.alternate,
                                    a !== null && (a.lanes |= n),
                                    kl(s.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(j(341));
                            o.lanes |= n,
                            l = o.alternate,
                            l !== null && (l.lanes |= n),
                            kl(o, n, t),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            ke(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        $n(t, n),
        i = $e(i),
        r = r(i),
        t.flags |= 1,
        ke(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = Qe(r, t.pendingProps),
        i = Qe(r.type, i),
        uc(e, t, r, i, n);
    case 15:
        return wh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : Qe(r, i),
        Ui(e, t),
        t.tag = 1,
        Te(r) ? (e = !0,
        as(t)) : e = !1,
        $n(t, n),
        _h(t, r, i),
        wl(t, r, i, n),
        jl(null, t, r, !0, e, n);
    case 19:
        return Ch(e, t, n);
    case 22:
        return zh(e, t, n)
    }
    throw Error(j(156, t.tag))
}
;
function qh(e, t) {
    return gf(e, t)
}
function Wy(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function Ue(e, t, n, r) {
    return new Wy(e,t,n,r)
}
function Fa(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Iy(e) {
    if (typeof e == "function")
        return Fa(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === oa)
            return 11;
        if (e === la)
            return 14
    }
    return 2
}
function Bt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ue(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Gi(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Fa(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Cn:
            return hn(n.children, i, s, t);
        case sa:
            o = 8,
            i |= 8;
            break;
        case $o:
            return e = Ue(12, n, t, i | 2),
            e.elementType = $o,
            e.lanes = s,
            e;
        case Go:
            return e = Ue(13, n, t, i),
            e.elementType = Go,
            e.lanes = s,
            e;
        case Ko:
            return e = Ue(19, n, t, i),
            e.elementType = Ko,
            e.lanes = s,
            e;
        case Zd:
            return Is(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case Yd:
                    o = 10;
                    break e;
                case Xd:
                    o = 9;
                    break e;
                case oa:
                    o = 11;
                    break e;
                case la:
                    o = 14;
                    break e;
                case Tt:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(j(130, e == null ? e : typeof e, ""))
        }
    return t = Ue(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function hn(e, t, n, r) {
    return e = Ue(7, e, r, t),
    e.lanes = n,
    e
}
function Is(e, t, n, r) {
    return e = Ue(22, e, r, t),
    e.elementType = Zd,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function To(e, t, n) {
    return e = Ue(6, e, null, t),
    e.lanes = n,
    e
}
function Eo(e, t, n) {
    return t = Ue(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Fy(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ao(0),
    this.expirationTimes = ao(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ao(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Ba(e, t, n, r, i, s, o, l, a) {
    return e = new Fy(e,t,n,l,a),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = Ue(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    ja(s),
    e
}
function By(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Pn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function Uh(e) {
    if (!e)
        return Ht;
    e = e._reactInternals;
    e: {
        if (xn(e) !== e || e.tag !== 1)
            throw Error(j(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Te(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(j(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Te(n))
            return Uf(e, n, t)
    }
    return t
}
function Hh(e, t, n, r, i, s, o, l, a) {
    return e = Ba(n, r, !0, e, i, s, o, l, a),
    e.context = Uh(null),
    n = e.current,
    r = xe(),
    i = Ft(n),
    s = gt(r, i),
    s.callback = t ?? null,
    Wt(n, s, i),
    e.current.lanes = i,
    si(e, i, r),
    Ee(e, r),
    e
}
function Fs(e, t, n, r) {
    var i = t.current
      , s = xe()
      , o = Ft(i);
    return n = Uh(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = gt(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Wt(i, t, o),
    e !== null && (et(e, i, o, s),
    Fi(e, i, o)),
    o
}
function xs(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function xc(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function qa(e, t) {
    xc(e, t),
    (e = e.alternate) && xc(e, t)
}
function qy() {
    return null
}
var $h = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ua(e) {
    this._internalRoot = e
}
Bs.prototype.render = Ua.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(j(409));
    Fs(e, t, null, null)
}
;
Bs.prototype.unmount = Ua.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        _n(function() {
            Fs(null, e, null, null)
        }),
        t[_t] = null
    }
}
;
function Bs(e) {
    this._internalRoot = e
}
Bs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = zf();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < Mt.length && t !== 0 && t < Mt[n].priority; n++)
            ;
        Mt.splice(n, 0, e),
        n === 0 && jf(e)
    }
}
;
function Ha(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function qs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function wc() {}
function Uy(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = xs(o);
                s.call(u)
            }
        }
        var o = Hh(t, r, e, 0, null, !1, !1, "", wc);
        return e._reactRootContainer = o,
        e[_t] = o.current,
        $r(e.nodeType === 8 ? e.parentNode : e),
        _n(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = xs(a);
            l.call(u)
        }
    }
    var a = Ba(e, 0, !1, null, null, !1, !1, "", wc);
    return e._reactRootContainer = a,
    e[_t] = a.current,
    $r(e.nodeType === 8 ? e.parentNode : e),
    _n(function() {
        Fs(t, a, n, r)
    }),
    a
}
function Us(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = xs(o);
                l.call(a)
            }
        }
        Fs(t, o, e, i)
    } else
        o = Uy(n, t, e, i, r);
    return xs(o)
}
xf = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = kr(t.pendingLanes);
            n !== 0 && (ca(t, n | 1),
            Ee(t, ee()),
            !(A & 6) && (er = ee() + 500,
            Yt()))
        }
        break;
    case 13:
        _n(function() {
            var r = kt(e, 1);
            if (r !== null) {
                var i = xe();
                et(r, e, 1, i)
            }
        }),
        qa(e, 1)
    }
}
;
da = function(e) {
    if (e.tag === 13) {
        var t = kt(e, 134217728);
        if (t !== null) {
            var n = xe();
            et(t, e, 134217728, n)
        }
        qa(e, 134217728)
    }
}
;
wf = function(e) {
    if (e.tag === 13) {
        var t = Ft(e)
          , n = kt(e, t);
        if (n !== null) {
            var r = xe();
            et(n, e, t, r)
        }
        qa(e, t)
    }
}
;
zf = function() {
    return W
}
;
Sf = function(e, t) {
    var n = W;
    try {
        return W = e,
        t()
    } finally {
        W = n
    }
}
;
il = function(e, t, n) {
    switch (t) {
    case "input":
        if (Xo(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = Ls(r);
                    if (!i)
                        throw Error(j(90));
                    ef(r),
                    Xo(r, i)
                }
            }
        }
        break;
    case "textarea":
        nf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Bn(e, !!n.multiple, t, !1)
    }
}
;
cf = Ra;
df = _n;
var Hy = {
    usingClientEntryPoint: !1,
    Events: [li, Mn, Ls, af, uf, Ra]
}
  , pr = {
    findFiberByHostInstance: an,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , $y = {
    bundleType: pr.bundleType,
    version: pr.version,
    rendererPackageName: pr.rendererPackageName,
    rendererConfig: pr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: wt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = pf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: pr.findFiberByHostInstance || qy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Mi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Mi.isDisabled && Mi.supportsFiber)
        try {
            bs = Mi.inject($y),
            lt = Mi
        } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Hy;
De.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ha(t))
        throw Error(j(200));
    return By(e, t, null, n)
}
;
De.createRoot = function(e, t) {
    if (!Ha(e))
        throw Error(j(299));
    var n = !1
      , r = ""
      , i = $h;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Ba(e, 1, !1, null, null, n, !1, r, i),
    e[_t] = t.current,
    $r(e.nodeType === 8 ? e.parentNode : e),
    new Ua(t)
}
;
De.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(j(188)) : (e = Object.keys(e).join(","),
        Error(j(268, e)));
    return e = pf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
De.flushSync = function(e) {
    return _n(e)
}
;
De.hydrate = function(e, t, n) {
    if (!qs(t))
        throw Error(j(200));
    return Us(null, e, t, !0, n)
}
;
De.hydrateRoot = function(e, t, n) {
    if (!Ha(e))
        throw Error(j(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = $h;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = Hh(t, null, e, 1, n ?? null, i, !1, s, o),
    e[_t] = t.current,
    $r(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Bs(t)
}
;
De.render = function(e, t, n) {
    if (!qs(t))
        throw Error(j(200));
    return Us(null, e, t, !1, n)
}
;
De.unmountComponentAtNode = function(e) {
    if (!qs(e))
        throw Error(j(40));
    return e._reactRootContainer ? (_n(function() {
        Us(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[_t] = null
        })
    }),
    !0) : !1
}
;
De.unstable_batchedUpdates = Ra;
De.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!qs(n))
        throw Error(j(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(j(38));
    return Us(e, t, n, !1, r)
}
;
De.version = "18.3.1-next-f1338f8080-20240426";
function Gh() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Gh)
        } catch (e) {
            console.error(e)
        }
}
Gh(),
$d.exports = De;
var Gy = $d.exports
  , zc = Gy;
Uo.createRoot = zc.createRoot,
Uo.hydrateRoot = zc.hydrateRoot;
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kh = (...e) => e.filter( (t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n).join(" ").trim();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ky = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qy = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (t, n, r) => r ? r.toUpperCase() : n.toLowerCase());
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sc = e => {
    const t = Qy(e);
    return t.charAt(0).toUpperCase() + t.slice(1)
}
;
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Yy = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xy = e => {
    for (const t in e)
        if (t.startsWith("aria-") || t === "role" || t === "title")
            return !0;
    return !1
}
;
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zy = w.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: i="", children: s, iconNode: o, ...l}, a) => w.createElement("svg", {
    ref: a,
    ...Yy,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: Kh("lucide", i),
    ...!s && !Xy(l) && {
        "aria-hidden": "true"
    },
    ...l
}, [...o.map( ([u,c]) => w.createElement(u, c)), ...Array.isArray(s) ? s : [s]]));
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Re = (e, t) => {
    const n = w.forwardRef( ({className: r, ...i}, s) => w.createElement(Zy, {
        ref: s,
        iconNode: t,
        className: Kh(`lucide-${Ky(Sc(e))}`, `lucide-${e}`, r),
        ...i
    }));
    return n.displayName = Sc(e),
    n
}
;
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jy = [["path", {
    d: "m5 12 7-7 7 7",
    key: "hav0vg"
}], ["path", {
    d: "M12 19V5",
    key: "x0mq9r"
}]]
  , e0 = Re("arrow-up", Jy);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const t0 = [["path", {
    d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",
    key: "jecpp"
}], ["rect", {
    width: "20",
    height: "14",
    x: "2",
    y: "6",
    rx: "2",
    key: "i6l2r4"
}]]
  , n0 = Re("briefcase", t0);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const r0 = [["path", {
    d: "M8 2v4",
    key: "1cmpym"
}], ["path", {
    d: "M16 2v4",
    key: "4m81vk"
}], ["rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2",
    key: "1hopcy"
}], ["path", {
    d: "M3 10h18",
    key: "8toen8"
}]]
  , i0 = Re("calendar", r0);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const s0 = [["path", {
    d: "m6 9 6 6 6-6",
    key: "qrunsl"
}]]
  , Qh = Re("chevron-down", s0);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const o0 = [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]
  , l0 = Re("external-link", o0);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const a0 = [["path", {
    d: "M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",
    key: "tonef"
}], ["path", {
    d: "M9 18c-4.51 2-5-2-7-2",
    key: "9comsn"
}]]
  , Hs = Re("github", a0);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const u0 = [["path", {
    d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
    key: "c2jq9f"
}], ["rect", {
    width: "4",
    height: "12",
    x: "2",
    y: "9",
    key: "mk3on5"
}], ["circle", {
    cx: "4",
    cy: "4",
    r: "2",
    key: "bt5ra8"
}]]
  , Yh = Re("linkedin", u0);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const c0 = [["path", {
    d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
    key: "132q7q"
}], ["rect", {
    x: "2",
    y: "4",
    width: "20",
    height: "16",
    rx: "2",
    key: "izxlao"
}]]
  , $a = Re("mail", c0);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const d0 = [["path", {
    d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
    key: "1r0f0z"
}], ["circle", {
    cx: "12",
    cy: "10",
    r: "3",
    key: "ilqhr7"
}]]
  , f0 = Re("map-pin", d0);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const h0 = [["path", {
    d: "M4 5h16",
    key: "1tepv9"
}], ["path", {
    d: "M4 12h16",
    key: "1lakjw"
}], ["path", {
    d: "M4 19h16",
    key: "1djgab"
}]]
  , p0 = Re("menu", h0);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const m0 = [["path", {
    d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
    key: "1ffxy3"
}], ["path", {
    d: "m21.854 2.147-10.94 10.939",
    key: "12cjpa"
}]]
  , g0 = Re("send", m0);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const y0 = [["path", {
    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
    key: "pff0z6"
}]]
  , v0 = Re("twitter", y0);
/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _0 = [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]]
  , k0 = Re("x", _0)
  , x0 = () => {
    const [e,t] = w.useState(!1)
      , [n,r] = w.useState(!1);
    w.useEffect( () => {
        const o = () => {
            r(window.scrollY > 50)
        }
        ;
        return window.addEventListener("scroll", o),
        () => window.removeEventListener("scroll", o)
    }
    , []);
    const i = (o, l) => {
        o.preventDefault(),
        t(!1);
        const a = document.getElementById(l);
        a && a.scrollIntoView({
            behavior: "smooth"
        })
    }
      , s = [{
        name: "About",
        id: "about"
    }, {
        name: "Skills",
        id: "skills"
    }, {
        name: "Projects",
        id: "projects"
    }, {
        name: "Experience",
        id: "experience"
    }, {
        name: "Contact",
        id: "contact"
    }];
    return y.jsxs("nav", {
        className: `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${n ? "bg-white/80 dark:bg-dark/80 backdrop-blur-md border-b border-black/5 dark:border-white/10 py-4" : "bg-transparent py-6"}`,
        children: [y.jsxs("div", {
            className: "max-w-7xl mx-auto px-6 flex justify-between items-center",
            children: [y.jsxs("a", {
                href: "#",
                className: "text-2xl font-heading font-bold gradient-text",
                onClick: o => {
                    o.preventDefault(),
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    })
                }
                ,
                children: ["HIMANSHU", y.jsx("span", {
                    className: "text-accent",
                    children: ".DEV"
                })]
            }), y.jsxs("div", {
                className: "hidden md:flex items-center space-x-8",
                children: [s.map(o => y.jsx("a", {
                    href: `#${o.id}`,
                    onClick: l => i(l, o.id),
                    className: "text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-accent transition-colors duration-200",
                    children: o.name
                }, o.name)), y.jsx("a", {
                    href: "contact",
                    onClick: o => i(o, "contact"),
                    className: "px-5 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:border-accent/50 transition-all duration-300 text-sm font-medium text-gray-700 dark:text-white",
                    children: "Let's Talk"
                })]
            }), y.jsx("div", {
                className: "md:hidden",
                children: y.jsx("button", {
                    onClick: () => t(!e),
                    className: "text-gray-700 dark:text-gray-300 hover:text-accent dark:hover:text-white focus:outline-none",
                    children: e ? y.jsx(k0, {
                        size: 24
                    }) : y.jsx(p0, {
                        size: 24
                    })
                })
            })]
        }), e && y.jsxs("div", {
            className: "md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-dark/95 backdrop-blur-xl border-b border-black/10 dark:border-white/10 p-6 flex flex-col space-y-4 animate-fadeIn",
            children: [s.map(o => y.jsx("a", {
                href: `#${o.id}`,
                className: "text-lg font-medium text-gray-700 dark:text-gray-300 hover:text-accent",
                onClick: l => i(l, o.id),
                children: o.name
            }, o.name)), y.jsxs("div", {
                className: "flex space-x-4 pt-4 border-t border-black/10 dark:border-white/10",
                children: [y.jsx("a", {
                    href: "https://github.com/7himanshubisht7",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-white",
                    children: y.jsx(Hs, {
                        size: 20
                    })
                }), y.jsx("a", {
                    href: "https://www.linkedin.com/in/himanshu-bisht-641414251/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-white",
                    children: y.jsx(Yh, {
                        size: 20
                    })
                }), y.jsx("a", {
                    href: "himanshu.s.bisht94@gmail.com",
                    className: "text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-white",
                    children: y.jsx($a, {
                        size: 20
                    })
                })]
            })]
        })]
    })
}
  , w0 = () => y.jsxs("footer", {
    className: "bg-dark-lighter border-t border-white/5 py-12 relative overflow-hidden z-20",
    children: [y.jsx("div", {
        className: "absolute top-0 left-0 w-full h-full bg-grid-white opacity-[0.02]"
    }), y.jsxs("div", {
        className: "max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center",
        children: [y.jsxs("div", {
            className: "mb-6 md:mb-0",
            children: [y.jsx("span", {
                className: "text-xl font-heading font-bold gradient-text",
                children: "HIMANSHU.DEV"
            }), y.jsx("p", {
                className: "text-gray-400 text-sm mt-2",
                children: "Building the future with AI & ML."
            })]
        }), y.jsxs("div", {
            className: "flex space-x-6",
            children: [y.jsx("a", {
                href: "https://github.com/7himanshubisht7",
                className: "text-gray-400 hover:text-white transition-colors",
                children: y.jsx(Hs, {
                    size: 20
                })
            }), y.jsx("a", {
                href: "https://www.linkedin.com/in/himanshu-bisht-641414251/",
                className: "text-gray-400 hover:text-white transition-colors",
                children: y.jsx(Yh, {
                    size: 20
                })
            }), y.jsx("a", {
                href: "#",
                className: "text-gray-400 hover:text-white transition-colors",
                children: y.jsx(v0, {
                    size: 20
                })
            }), y.jsx("a", {
                href: "mailto:himanshu.s.bisht92@gmail.com",
                className: "text-gray-400 hover:text-white transition-colors",
                children: y.jsx($a, {
                    size: 20
                })
            })]
        })]
    }), y.jsxs("div", {
        className: "text-center mt-8 text-gray-600 text-xs",
        children: ["© ", new Date().getFullYear(), " HIMANSHU. All rights reserved."]
    })]
})
  , z0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_000-JgE0m3UI.jpg"
  , S0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: z0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , j0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_001-e2pkFxCr.jpg"
  , P0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: j0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , C0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_002-CUyJGoEl.jpg"
  , T0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: C0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , E0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_003-DjG1N4IZ.jpg"
  , b0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: E0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , M0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_004-CPb5kbxH.jpg"
  , N0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: M0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , O0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_005-D3kebqwl.jpg"
  , L0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: O0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , V0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_006-BNx1CiTP.jpg"
  , D0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: V0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , A0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_007-fYcNWVnp.jpg"
  , R0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: A0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , W0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_008-DtGVPZHz.jpg"
  , I0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: W0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , F0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_009-CWjCMf6p.jpg"
  , B0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: F0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , q0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_010-CAz5clSv.jpg"
  , U0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: q0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , H0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_011-CM4y5zcz.jpg"
  , $0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: H0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , G0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_012-o7r1VuBr.jpg"
  , K0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: G0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Q0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_013-B1oIGQVS.jpg"
  , Y0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Q0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , X0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_014-CIjjCJfL.jpg"
  , Z0 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: X0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , J0 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_015-67w4vsZz.jpg"
  , ev = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: J0
}, Symbol.toStringTag, {
    value: "Module"
}))
  , tv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_016-m70S07d0.jpg"
  , nv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: tv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , rv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_017-CHa9EvwI.jpg"
  , iv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: rv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , sv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_018-DRdu1M6i.jpg"
  , ov = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: sv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , lv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_019-DbFZqEnw.jpg"
  , av = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: lv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , uv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_020-DAcgwq1H.jpg"
  , cv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: uv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , dv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_021-iBwJvjYv.jpg"
  , fv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: dv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , hv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_022-Dj1DYwOi.jpg"
  , pv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: hv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , mv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_023-CFmOL50W.jpg"
  , gv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: mv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , yv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_024-CPUxxHU2.jpg"
  , vv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: yv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , _v = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_025-Bfd7_ZLt.jpg"
  , kv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: _v
}, Symbol.toStringTag, {
    value: "Module"
}))
  , xv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_026-DusQvCV8.jpg"
  , wv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: xv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , zv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_027-CmYTf1mp.jpg"
  , Sv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: zv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , jv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_028-DN9Knv9I.jpg"
  , Pv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: jv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Cv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_029-BhJyJRz_.jpg"
  , Tv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Cv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ev = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_030-BdCMdvUy.jpg"
  , bv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ev
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Mv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_031-DnpChBnv.jpg"
  , Nv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Mv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Ov = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_032-COHz2Koi.jpg"
  , Lv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ov
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Vv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_033-DA3MsQPt.jpg"
  , Dv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Vv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Av = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_034-CRuGLlHD.jpg"
  , Rv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Av
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Wv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_035-BUiQ8Jzm.jpg"
  , Iv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Wv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Fv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_036-BG4JDZAX.jpg"
  , Bv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Fv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , qv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_037-wGKklFee.jpg"
  , Uv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: qv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Hv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_038-DSYuPh6U.jpg"
  , $v = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Hv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Gv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_039-C5EZPgCH.jpg"
  , Kv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Gv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Qv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_040-CuNdiJCg.jpg"
  , Yv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Qv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Xv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_041-b-yFthh7.jpg"
  , Zv = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Xv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Jv = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_042-CS8SrRzJ.jpg"
  , e1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Jv
}, Symbol.toStringTag, {
    value: "Module"
}))
  , t1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_043-C_Y1mxTD.jpg"
  , n1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: t1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , r1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_044-CAKqXtnL.jpg"
  , i1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: r1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , s1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_045-BAz7WHky.jpg"
  , o1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: s1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , l1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_046-BaWOvdBg.jpg"
  , a1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: l1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , u1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_047-DGqqclks.jpg"
  , c1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: u1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , d1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_048-B_oYLZYU.jpg"
  , f1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: d1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , h1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_049-DfkwJEPo.jpg"
  , p1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: h1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , m1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_050-ZTMBQ0oL.jpg"
  , g1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: m1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , y1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_051-cnpaAF9u.jpg"
  , v1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: y1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , _1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_052-sbpECVbz.jpg"
  , k1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: _1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , x1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_053-YaIixYtQ.jpg"
  , w1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: x1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , z1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_054-DNWHKQJr.jpg"
  , S1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: z1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , j1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_055-g3gVEsmT.jpg"
  , P1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: j1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , C1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_056-lIX8zYjW.jpg"
  , T1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: C1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , E1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_057-ySRHVbx3.jpg"
  , b1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: E1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , M1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_058-BhP_UsRC.jpg"
  , N1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: M1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , O1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_059-DzfrI2f2.jpg"
  , L1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: O1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , V1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_060-Daim-Xt8.jpg"
  , D1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: V1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , A1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_061-C7UG6YIS.jpg"
  , R1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: A1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , W1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_062-B-e_uRce.jpg"
  , I1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: W1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , F1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_063-DNv8wNBF.jpg"
  , B1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: F1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , q1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_064-ClYMGd_l.jpg"
  , U1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: q1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , H1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_065-DyQpKyAg.jpg"
  , $1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: H1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , G1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_066-BWv67w2w.jpg"
  , K1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: G1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , Q1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_067-D7U_Mda_.jpg"
  , Y1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Q1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , X1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_068-DTskwJ7k.jpg"
  , Z1 = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: X1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , J1 = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_069-BkwfChHS.jpg"
  , e_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: J1
}, Symbol.toStringTag, {
    value: "Module"
}))
  , t_ = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_070-Bg5VlTb6.jpg"
  , n_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: t_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , r_ = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_071-2L6WD75O.jpg"
  , i_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: r_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , s_ = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_072-DI--LjVS.jpg"
  , o_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: s_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , l_ = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_073-SGZpaWd3.jpg"
  , a_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: l_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , u_ = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_074-D1skvvdP.jpg"
  , c_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: u_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , d_ = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_075-CX4ZgvTi.jpg"
  , f_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: d_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , h_ = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_076-B2awI5hE.jpg"
  , p_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: h_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , m_ = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_077-DV5YEoyL.jpg"
  , g_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: m_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , y_ = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_078-A83ln0VA.jpg"
  , v_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: y_
}, Symbol.toStringTag, {
    value: "Module"
}))
  , __ = "/assets/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_079-CrNgDNV8.jpg"
  , k_ = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: __
}, Symbol.toStringTag, {
    value: "Module"
}))
  , $s = w.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
})
  , Gs = w.createContext({})
  , Ks = w.createContext(null)
  , Qs = typeof document < "u"
  , or = Qs ? w.useLayoutEffect : w.useEffect
  , Xh = w.createContext({
    strict: !1
})
  , Ga = e => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase()
  , x_ = "framerAppearId"
  , Zh = "data-" + Ga(x_);
function w_(e, t, n, r) {
    const {visualElement: i} = w.useContext(Gs)
      , s = w.useContext(Xh)
      , o = w.useContext(Ks)
      , l = w.useContext($s).reducedMotion
      , a = w.useRef();
    r = r || s.renderer,
    !a.current && r && (a.current = r(e, {
        visualState: t,
        parent: i,
        props: n,
        presenceContext: o,
        blockInitialAnimation: o ? o.initial === !1 : !1,
        reducedMotionConfig: l
    }));
    const u = a.current;
    w.useInsertionEffect( () => {
        u && u.update(n, o)
    }
    );
    const c = w.useRef(!!(n[Zh] && !window.HandoffComplete));
    return or( () => {
        u && (u.render(),
        c.current && u.animationState && u.animationState.animateChanges())
    }
    ),
    w.useEffect( () => {
        u && (u.updateFeatures(),
        !c.current && u.animationState && u.animationState.animateChanges(),
        c.current && (c.current = !1,
        window.HandoffComplete = !0))
    }
    ),
    u
}
function Rn(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function z_(e, t, n) {
    return w.useCallback(r => {
        r && e.mount && e.mount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : Rn(n) && (n.current = r))
    }
    , [t])
}
function ti(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Ys(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Ka = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Qa = ["initial", ...Ka];
function Xs(e) {
    return Ys(e.animate) || Qa.some(t => ti(e[t]))
}
function Jh(e) {
    return !!(Xs(e) || e.variants)
}
function S_(e, t) {
    if (Xs(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || ti(n) ? n : void 0,
            animate: ti(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function j_(e) {
    const {initial: t, animate: n} = S_(e, w.useContext(Gs));
    return w.useMemo( () => ({
        initial: t,
        animate: n
    }), [jc(t), jc(n)])
}
function jc(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Pc = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , ni = {};
for (const e in Pc)
    ni[e] = {
        isEnabled: t => Pc[e].some(n => !!t[n])
    };
function P_(e) {
    for (const t in e)
        ni[t] = {
            ...ni[t],
            ...e[t]
        }
}
const Ya = w.createContext({})
  , ep = w.createContext({})
  , C_ = Symbol.for("motionComponentSymbol");
function T_({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    e && P_(e);
    function s(l, a) {
        let u;
        const c = {
            ...w.useContext($s),
            ...l,
            layoutId: E_(l)
        }
          , {isStatic: d} = c
          , f = j_(l)
          , m = r(l, d);
        if (!d && Qs) {
            f.visualElement = w_(i, m, c, t);
            const v = w.useContext(ep)
              , k = w.useContext(Xh).strict;
            f.visualElement && (u = f.visualElement.loadFeatures(c, k, e, v))
        }
        return w.createElement(Gs.Provider, {
            value: f
        }, u && f.visualElement ? w.createElement(u, {
            visualElement: f.visualElement,
            ...c
        }) : null, n(i, l, z_(m, f.visualElement, a), m, d, f.visualElement))
    }
    const o = w.forwardRef(s);
    return o[C_] = i,
    o
}
function E_({layoutId: e}) {
    const t = w.useContext(Ya).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function b_(e) {
    function t(r, i={}) {
        return T_(e(r, i))
    }
    if (typeof Proxy > "u")
        return t;
    const n = new Map;
    return new Proxy(t,{
        get: (r, i) => (n.has(i) || n.set(i, t(i)),
        n.get(i))
    })
}
const M_ = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Xa(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(M_.indexOf(e) > -1 || /[A-Z]/.test(e))
}
const ws = {};
function N_(e) {
    Object.assign(ws, e)
}
const ui = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , wn = new Set(ui);
function tp(e, {layout: t, layoutId: n}) {
    return wn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!ws[e] || e === "opacity")
}
const ye = e => !!(e && e.getVelocity)
  , O_ = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , L_ = ui.length;
function V_(e, {enableHardwareAcceleration: t=!0, allowTransformNone: n=!0}, r, i) {
    let s = "";
    for (let o = 0; o < L_; o++) {
        const l = ui[o];
        if (e[l] !== void 0) {
            const a = O_[l] || l;
            s += `${a}(${e[l]}) `
        }
    }
    return t && !e.z && (s += "translateZ(0)"),
    s = s.trim(),
    i ? s = i(e, r ? "" : s) : n && r && (s = "none"),
    s
}
const np = e => t => typeof t == "string" && t.startsWith(e)
  , rp = np("--")
  , Al = np("var(--")
  , D_ = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g
  , A_ = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , $t = (e, t, n) => Math.min(Math.max(n, e), t)
  , zn = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , Nr = {
    ...zn,
    transform: e => $t(0, 1, e)
}
  , Ni = {
    ...zn,
    default: 1
}
  , Or = e => Math.round(e * 1e5) / 1e5
  , Zs = /(-)?([\d]*\.?[\d])+/g
  , ip = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi
  , R_ = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ci(e) {
    return typeof e == "string"
}
const di = e => ({
    test: t => ci(t) && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Pt = di("deg")
  , ut = di("%")
  , N = di("px")
  , W_ = di("vh")
  , I_ = di("vw")
  , Cc = {
    ...ut,
    parse: e => ut.parse(e) / 100,
    transform: e => ut.transform(e * 100)
}
  , Tc = {
    ...zn,
    transform: Math.round
}
  , sp = {
    borderWidth: N,
    borderTopWidth: N,
    borderRightWidth: N,
    borderBottomWidth: N,
    borderLeftWidth: N,
    borderRadius: N,
    radius: N,
    borderTopLeftRadius: N,
    borderTopRightRadius: N,
    borderBottomRightRadius: N,
    borderBottomLeftRadius: N,
    width: N,
    maxWidth: N,
    height: N,
    maxHeight: N,
    size: N,
    top: N,
    right: N,
    bottom: N,
    left: N,
    padding: N,
    paddingTop: N,
    paddingRight: N,
    paddingBottom: N,
    paddingLeft: N,
    margin: N,
    marginTop: N,
    marginRight: N,
    marginBottom: N,
    marginLeft: N,
    rotate: Pt,
    rotateX: Pt,
    rotateY: Pt,
    rotateZ: Pt,
    scale: Ni,
    scaleX: Ni,
    scaleY: Ni,
    scaleZ: Ni,
    skew: Pt,
    skewX: Pt,
    skewY: Pt,
    distance: N,
    translateX: N,
    translateY: N,
    translateZ: N,
    x: N,
    y: N,
    z: N,
    perspective: N,
    transformPerspective: N,
    opacity: Nr,
    originX: Cc,
    originY: Cc,
    originZ: N,
    zIndex: Tc,
    fillOpacity: Nr,
    strokeOpacity: Nr,
    numOctaves: Tc
};
function Za(e, t, n, r) {
    const {style: i, vars: s, transform: o, transformOrigin: l} = e;
    let a = !1
      , u = !1
      , c = !0;
    for (const d in t) {
        const f = t[d];
        if (rp(d)) {
            s[d] = f;
            continue
        }
        const m = sp[d]
          , v = A_(f, m);
        if (wn.has(d)) {
            if (a = !0,
            o[d] = v,
            !c)
                continue;
            f !== (m.default || 0) && (c = !1)
        } else
            d.startsWith("origin") ? (u = !0,
            l[d] = v) : i[d] = v
    }
    if (t.transform || (a || r ? i.transform = V_(e.transform, n, c, r) : i.transform && (i.transform = "none")),
    u) {
        const {originX: d="50%", originY: f="50%", originZ: m=0} = l;
        i.transformOrigin = `${d} ${f} ${m}`
    }
}
const Ja = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
});
function op(e, t, n) {
    for (const r in t)
        !ye(t[r]) && !tp(r, n) && (e[r] = t[r])
}
function F_({transformTemplate: e}, t, n) {
    return w.useMemo( () => {
        const r = Ja();
        return Za(r, t, {
            enableHardwareAcceleration: !n
        }, e),
        Object.assign({}, r.vars, r.style)
    }
    , [t])
}
function B_(e, t, n) {
    const r = e.style || {}
      , i = {};
    return op(i, r, e),
    Object.assign(i, F_(e, t, n)),
    e.transformValues ? e.transformValues(i) : i
}
function q_(e, t, n) {
    const r = {}
      , i = B_(e, t, n);
    return e.drag && e.dragListener !== !1 && (r.draggable = !1,
    i.userSelect = i.WebkitUserSelect = i.WebkitTouchCallout = "none",
    i.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (r.tabIndex = 0),
    r.style = i,
    r
}
const U_ = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "transformValues", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function zs(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || U_.has(e)
}
let lp = e => !zs(e);
function H_(e) {
    e && (lp = t => t.startsWith("on") ? !zs(t) : e(t))
}
try {
    H_(require("@emotion/is-prop-valid").default)
} catch {}
function $_(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (lp(i) || n === !0 && zs(i) || !t && !zs(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function Ec(e, t, n) {
    return typeof e == "string" ? e : N.transform(t + n * e)
}
function G_(e, t, n) {
    const r = Ec(t, e.x, e.width)
      , i = Ec(n, e.y, e.height);
    return `${r} ${i}`
}
const K_ = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , Q_ = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function Y_(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? K_ : Q_;
    e[s.offset] = N.transform(-r);
    const o = N.transform(t)
      , l = N.transform(n);
    e[s.array] = `${o} ${l}`
}
function eu(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: s, pathLength: o, pathSpacing: l=1, pathOffset: a=0, ...u}, c, d, f) {
    if (Za(e, u, c, f),
    d) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: m, style: v, dimensions: k} = e;
    m.transform && (k && (v.transform = m.transform),
    delete m.transform),
    k && (i !== void 0 || s !== void 0 || v.transform) && (v.transformOrigin = G_(k, i !== void 0 ? i : .5, s !== void 0 ? s : .5)),
    t !== void 0 && (m.x = t),
    n !== void 0 && (m.y = n),
    r !== void 0 && (m.scale = r),
    o !== void 0 && Y_(m, o, l, a, !1)
}
const ap = () => ({
    ...Ja(),
    attrs: {}
})
  , tu = e => typeof e == "string" && e.toLowerCase() === "svg";
function X_(e, t, n, r) {
    const i = w.useMemo( () => {
        const s = ap();
        return eu(s, t, {
            enableHardwareAcceleration: !1
        }, tu(r), e.transformTemplate),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        op(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
function Z_(e=!1) {
    return (n, r, i, {latestValues: s}, o) => {
        const a = (Xa(n) ? X_ : q_)(r, s, o, n)
          , c = {
            ...$_(r, typeof n == "string", e),
            ...a,
            ref: i
        }
          , {children: d} = r
          , f = w.useMemo( () => ye(d) ? d.get() : d, [d]);
        return w.createElement(n, {
            ...c,
            children: f
        })
    }
}
function up(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n)
        e.style.setProperty(s, n[s])
}
const cp = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function dp(e, t, n, r) {
    up(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(cp.has(i) ? i : Ga(i), t.attrs[i])
}
function nu(e, t) {
    const {style: n} = e
      , r = {};
    for (const i in n)
        (ye(n[i]) || t.style && ye(t.style[i]) || tp(i, e)) && (r[i] = n[i]);
    return r
}
function fp(e, t) {
    const n = nu(e, t);
    for (const r in e)
        if (ye(e[r]) || ye(t[r])) {
            const i = ui.indexOf(r) !== -1 ? "attr" + r.charAt(0).toUpperCase() + r.substring(1) : r;
            n[i] = e[r]
        }
    return n
}
function ru(e, t, n, r={}, i={}) {
    return typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function" && (t = t(n !== void 0 ? n : e.custom, r, i)),
    t
}
function fi(e) {
    const t = w.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const Ss = e => Array.isArray(e)
  , J_ = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , ek = e => Ss(e) ? e[e.length - 1] || 0 : e;
function Ki(e) {
    const t = ye(e) ? e.get() : e;
    return J_(t) ? t.toValue() : t
}
function tk({scrapeMotionValuesFromProps: e, createRenderState: t, onMount: n}, r, i, s) {
    const o = {
        latestValues: nk(r, i, s, e),
        renderState: t()
    };
    return n && (o.mount = l => n(r, l, o)),
    o
}
const hp = e => (t, n) => {
    const r = w.useContext(Gs)
      , i = w.useContext(Ks)
      , s = () => tk(e, t, r, i);
    return n ? s() : fi(s)
}
;
function nk(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const f in s)
        i[f] = Ki(s[f]);
    let {initial: o, animate: l} = e;
    const a = Xs(e)
      , u = Jh(e);
    t && u && !a && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    l === void 0 && (l = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const d = c ? l : o;
    return d && typeof d != "boolean" && !Ys(d) && (Array.isArray(d) ? d : [d]).forEach(m => {
        const v = ru(e, m);
        if (!v)
            return;
        const {transitionEnd: k, transition: C, ...g} = v;
        for (const h in g) {
            let p = g[h];
            if (Array.isArray(p)) {
                const _ = c ? p.length - 1 : 0;
                p = p[_]
            }
            p !== null && (i[h] = p)
        }
        for (const h in k)
            i[h] = k[h]
    }
    ),
    i
}
const X = e => e;
class bc {
    constructor() {
        this.order = [],
        this.scheduled = new Set
    }
    add(t) {
        if (!this.scheduled.has(t))
            return this.scheduled.add(t),
            this.order.push(t),
            !0
    }
    remove(t) {
        const n = this.order.indexOf(t);
        n !== -1 && (this.order.splice(n, 1),
        this.scheduled.delete(t))
    }
    clear() {
        this.order.length = 0,
        this.scheduled.clear()
    }
}
function rk(e) {
    let t = new bc
      , n = new bc
      , r = 0
      , i = !1
      , s = !1;
    const o = new WeakSet
      , l = {
        schedule: (a, u=!1, c=!1) => {
            const d = c && i
              , f = d ? t : n;
            return u && o.add(a),
            f.add(a) && d && i && (r = t.order.length),
            a
        }
        ,
        cancel: a => {
            n.remove(a),
            o.delete(a)
        }
        ,
        process: a => {
            if (i) {
                s = !0;
                return
            }
            if (i = !0,
            [t,n] = [n, t],
            n.clear(),
            r = t.order.length,
            r)
                for (let u = 0; u < r; u++) {
                    const c = t.order[u];
                    c(a),
                    o.has(c) && (l.schedule(c),
                    e())
                }
            i = !1,
            s && (s = !1,
            l.process(a))
        }
    };
    return l
}
const Oi = ["prepare", "read", "update", "preRender", "render", "postRender"]
  , ik = 40;
function sk(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = Oi.reduce( (d, f) => (d[f] = rk( () => n = !0),
    d), {})
      , o = d => s[d].process(i)
      , l = () => {
        const d = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(d - i.timestamp, ik), 1),
        i.timestamp = d,
        i.isProcessing = !0,
        Oi.forEach(o),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(l))
    }
      , a = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(l)
    }
    ;
    return {
        schedule: Oi.reduce( (d, f) => {
            const m = s[f];
            return d[f] = (v, k=!1, C=!1) => (n || a(),
            m.schedule(v, k, C)),
            d
        }
        , {}),
        cancel: d => Oi.forEach(f => s[f].cancel(d)),
        state: i,
        steps: s
    }
}
const {schedule: R, cancel: nt, state: re, steps: bo} = sk(typeof requestAnimationFrame < "u" ? requestAnimationFrame : X, !0)
  , ok = {
    useVisualState: hp({
        scrapeMotionValuesFromProps: fp,
        createRenderState: ap,
        onMount: (e, t, {renderState: n, latestValues: r}) => {
            R.read( () => {
                try {
                    n.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect()
                } catch {
                    n.dimensions = {
                        x: 0,
                        y: 0,
                        width: 0,
                        height: 0
                    }
                }
            }
            ),
            R.render( () => {
                eu(n, r, {
                    enableHardwareAcceleration: !1
                }, tu(t.tagName), e.transformTemplate),
                dp(t, n)
            }
            )
        }
    })
}
  , lk = {
    useVisualState: hp({
        scrapeMotionValuesFromProps: nu,
        createRenderState: Ja
    })
};
function ak(e, {forwardMotionProps: t=!1}, n, r) {
    return {
        ...Xa(e) ? ok : lk,
        preloadedFeatures: n,
        useRender: Z_(t),
        createVisualElement: r,
        Component: e
    }
}
function mt(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
const pp = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Js(e, t="page") {
    return {
        point: {
            x: e[t + "X"],
            y: e[t + "Y"]
        }
    }
}
const uk = e => t => pp(t) && e(t, Js(t));
function yt(e, t, n, r) {
    return mt(e, t, uk(n), r)
}
const ck = (e, t) => n => t(e(n))
  , qt = (...e) => e.reduce(ck);
function mp(e) {
    let t = null;
    return () => {
        const n = () => {
            t = null
        }
        ;
        return t === null ? (t = e,
        n) : !1
    }
}
const Mc = mp("dragHorizontal")
  , Nc = mp("dragVertical");
function gp(e) {
    let t = !1;
    if (e === "y")
        t = Nc();
    else if (e === "x")
        t = Mc();
    else {
        const n = Mc()
          , r = Nc();
        n && r ? t = () => {
            n(),
            r()
        }
        : (n && n(),
        r && r())
    }
    return t
}
function yp() {
    const e = gp(!0);
    return e ? (e(),
    !1) : !0
}
class Xt {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
function Oc(e, t) {
    const n = "pointer" + (t ? "enter" : "leave")
      , r = "onHover" + (t ? "Start" : "End")
      , i = (s, o) => {
        if (s.pointerType === "touch" || yp())
            return;
        const l = e.getProps();
        e.animationState && l.whileHover && e.animationState.setActive("whileHover", t),
        l[r] && R.update( () => l[r](s, o))
    }
    ;
    return yt(e.current, n, i, {
        passive: !e.getProps()[r]
    })
}
class dk extends Xt {
    mount() {
        this.unmount = qt(Oc(this.node, !0), Oc(this.node, !1))
    }
    unmount() {}
}
class fk extends Xt {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = qt(mt(this.node.current, "focus", () => this.onFocus()), mt(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
const vp = (e, t) => t ? e === t ? !0 : vp(e, t.parentElement) : !1;
function Mo(e, t) {
    if (!t)
        return;
    const n = new PointerEvent("pointer" + e);
    t(n, Js(n))
}
class hk extends Xt {
    constructor() {
        super(...arguments),
        this.removeStartListeners = X,
        this.removeEndListeners = X,
        this.removeAccessibleListeners = X,
        this.startPointerPress = (t, n) => {
            if (this.isPressing)
                return;
            this.removeEndListeners();
            const r = this.node.getProps()
              , s = yt(window, "pointerup", (l, a) => {
                if (!this.checkPressEnd())
                    return;
                const {onTap: u, onTapCancel: c, globalTapTarget: d} = this.node.getProps();
                R.update( () => {
                    !d && !vp(this.node.current, l.target) ? c && c(l, a) : u && u(l, a)
                }
                )
            }
            , {
                passive: !(r.onTap || r.onPointerUp)
            })
              , o = yt(window, "pointercancel", (l, a) => this.cancelPress(l, a), {
                passive: !(r.onTapCancel || r.onPointerCancel)
            });
            this.removeEndListeners = qt(s, o),
            this.startPress(t, n)
        }
        ,
        this.startAccessiblePress = () => {
            const t = s => {
                if (s.key !== "Enter" || this.isPressing)
                    return;
                const o = l => {
                    l.key !== "Enter" || !this.checkPressEnd() || Mo("up", (a, u) => {
                        const {onTap: c} = this.node.getProps();
                        c && R.update( () => c(a, u))
                    }
                    )
                }
                ;
                this.removeEndListeners(),
                this.removeEndListeners = mt(this.node.current, "keyup", o),
                Mo("down", (l, a) => {
                    this.startPress(l, a)
                }
                )
            }
              , n = mt(this.node.current, "keydown", t)
              , r = () => {
                this.isPressing && Mo("cancel", (s, o) => this.cancelPress(s, o))
            }
              , i = mt(this.node.current, "blur", r);
            this.removeAccessibleListeners = qt(n, i)
        }
    }
    startPress(t, n) {
        this.isPressing = !0;
        const {onTapStart: r, whileTap: i} = this.node.getProps();
        i && this.node.animationState && this.node.animationState.setActive("whileTap", !0),
        r && R.update( () => r(t, n))
    }
    checkPressEnd() {
        return this.removeEndListeners(),
        this.isPressing = !1,
        this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1),
        !yp()
    }
    cancelPress(t, n) {
        if (!this.checkPressEnd())
            return;
        const {onTapCancel: r} = this.node.getProps();
        r && R.update( () => r(t, n))
    }
    mount() {
        const t = this.node.getProps()
          , n = yt(t.globalTapTarget ? window : this.node.current, "pointerdown", this.startPointerPress, {
            passive: !(t.onTapStart || t.onPointerStart)
        })
          , r = mt(this.node.current, "focus", this.startAccessiblePress);
        this.removeStartListeners = qt(n, r)
    }
    unmount() {
        this.removeStartListeners(),
        this.removeEndListeners(),
        this.removeAccessibleListeners()
    }
}
const Rl = new WeakMap
  , No = new WeakMap
  , pk = e => {
    const t = Rl.get(e.target);
    t && t(e)
}
  , mk = e => {
    e.forEach(pk)
}
;
function gk({root: e, ...t}) {
    const n = e || document;
    No.has(n) || No.set(n, {});
    const r = No.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(mk,{
        root: e,
        ...t
    })),
    r[i]
}
function yk(e, t, n) {
    const r = gk(t);
    return Rl.set(e, n),
    r.observe(e),
    () => {
        Rl.delete(e),
        r.unobserve(e)
    }
}
const vk = {
    some: 0,
    all: 1
};
class _k extends Xt {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : vk[i]
        }
          , l = a => {
            const {isIntersecting: u} = a;
            if (this.isInView === u || (this.isInView = u,
            s && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: d} = this.node.getProps()
              , f = u ? c : d;
            f && f(a)
        }
        ;
        return yk(this.node.current, o, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(kk(t, n)) && this.startObserver()
    }
    unmount() {}
}
function kk({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const xk = {
    inView: {
        Feature: _k
    },
    tap: {
        Feature: hk
    },
    focus: {
        Feature: fk
    },
    hover: {
        Feature: dk
    }
};
function _p(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function wk(e) {
    const t = {};
    return e.values.forEach( (n, r) => t[r] = n.get()),
    t
}
function zk(e) {
    const t = {};
    return e.values.forEach( (n, r) => t[r] = n.getVelocity()),
    t
}
function eo(e, t, n) {
    const r = e.getProps();
    return ru(r, t, n !== void 0 ? n : r.custom, wk(e), zk(e))
}
let Sk = X
  , iu = X;
const pn = e => e * 1e3
  , ct = e => e / 1e3
  , jk = {
    current: !1
}
  , kp = e => Array.isArray(e) && typeof e[0] == "number";
function xp(e) {
    return !!(!e || typeof e == "string" && wp[e] || kp(e) || Array.isArray(e) && e.every(xp))
}
const wr = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , wp = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: wr([0, .65, .55, 1]),
    circOut: wr([.55, 0, 1, .45]),
    backIn: wr([.31, .01, .66, -.59]),
    backOut: wr([.33, 1.53, .69, .99])
};
function zp(e) {
    if (e)
        return kp(e) ? wr(e) : Array.isArray(e) ? e.map(zp) : wp[e]
}
function Pk(e, t, n, {delay: r=0, duration: i, repeat: s=0, repeatType: o="loop", ease: l, times: a}={}) {
    const u = {
        [t]: n
    };
    a && (u.offset = a);
    const c = zp(l);
    return Array.isArray(c) && (u.easing = c),
    e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
function Ck(e, {repeat: t, repeatType: n="loop"}) {
    const r = t && n !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
    return e[r]
}
const Sp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , Tk = 1e-7
  , Ek = 12;
function bk(e, t, n, r, i) {
    let s, o, l = 0;
    do
        o = t + (n - t) / 2,
        s = Sp(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > Tk && ++l < Ek);
    return o
}
function hi(e, t, n, r) {
    if (e === t && n === r)
        return X;
    const i = s => bk(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Sp(i(s), t, r)
}
const Mk = hi(.42, 0, 1, 1)
  , Nk = hi(0, 0, .58, 1)
  , jp = hi(.42, 0, .58, 1)
  , Ok = e => Array.isArray(e) && typeof e[0] != "number"
  , Pp = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Cp = e => t => 1 - e(1 - t)
  , su = e => 1 - Math.sin(Math.acos(e))
  , Tp = Cp(su)
  , Lk = Pp(su)
  , Ep = hi(.33, 1.53, .69, .99)
  , ou = Cp(Ep)
  , Vk = Pp(ou)
  , Dk = e => (e *= 2) < 1 ? .5 * ou(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Ak = {
    linear: X,
    easeIn: Mk,
    easeInOut: jp,
    easeOut: Nk,
    circIn: su,
    circInOut: Lk,
    circOut: Tp,
    backIn: ou,
    backInOut: Vk,
    backOut: Ep,
    anticipate: Dk
}
  , Lc = e => {
    if (Array.isArray(e)) {
        iu(e.length === 4);
        const [t,n,r,i] = e;
        return hi(t, n, r, i)
    } else if (typeof e == "string")
        return Ak[e];
    return e
}
  , lu = (e, t) => n => !!(ci(n) && R_.test(n) && n.startsWith(e) || t && Object.prototype.hasOwnProperty.call(n, t))
  , bp = (e, t, n) => r => {
    if (!ci(r))
        return r;
    const [i,s,o,l] = r.match(Zs);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , Rk = e => $t(0, 255, e)
  , Oo = {
    ...zn,
    transform: e => Math.round(Rk(e))
}
  , dn = {
    test: lu("rgb", "red"),
    parse: bp("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Oo.transform(e) + ", " + Oo.transform(t) + ", " + Oo.transform(n) + ", " + Or(Nr.transform(r)) + ")"
};
function Wk(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Wl = {
    test: lu("#"),
    parse: Wk,
    transform: dn.transform
}
  , Wn = {
    test: lu("hsl", "hue"),
    parse: bp("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + ut.transform(Or(t)) + ", " + ut.transform(Or(n)) + ", " + Or(Nr.transform(r)) + ")"
}
  , _e = {
    test: e => dn.test(e) || Wl.test(e) || Wn.test(e),
    parse: e => dn.test(e) ? dn.parse(e) : Wn.test(e) ? Wn.parse(e) : Wl.parse(e),
    transform: e => ci(e) ? e : e.hasOwnProperty("red") ? dn.transform(e) : Wn.transform(e)
}
  , G = (e, t, n) => -n * e + n * t + e;
function Lo(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function Ik({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!t)
        i = s = o = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - l;
        i = Lo(a, l, e + 1 / 3),
        s = Lo(a, l, e),
        o = Lo(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
const Vo = (e, t, n) => {
    const r = e * e;
    return Math.sqrt(Math.max(0, n * (t * t - r) + r))
}
  , Fk = [Wl, dn, Wn]
  , Bk = e => Fk.find(t => t.test(e));
function Vc(e) {
    const t = Bk(e);
    let n = t.parse(e);
    return t === Wn && (n = Ik(n)),
    n
}
const Mp = (e, t) => {
    const n = Vc(e)
      , r = Vc(t)
      , i = {
        ...n
    };
    return s => (i.red = Vo(n.red, r.red, s),
    i.green = Vo(n.green, r.green, s),
    i.blue = Vo(n.blue, r.blue, s),
    i.alpha = G(n.alpha, r.alpha, s),
    dn.transform(i))
}
;
function qk(e) {
    var t, n;
    return isNaN(e) && ci(e) && (((t = e.match(Zs)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(ip)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const Np = {
    regex: D_,
    countKey: "Vars",
    token: "${v}",
    parse: X
}
  , Op = {
    regex: ip,
    countKey: "Colors",
    token: "${c}",
    parse: _e.parse
}
  , Lp = {
    regex: Zs,
    countKey: "Numbers",
    token: "${n}",
    parse: zn.parse
};
function Do(e, {regex: t, countKey: n, token: r, parse: i}) {
    const s = e.tokenised.match(t);
    s && (e["num" + n] = s.length,
    e.tokenised = e.tokenised.replace(t, r),
    e.values.push(...s.map(i)))
}
function js(e) {
    const t = e.toString()
      , n = {
        value: t,
        tokenised: t,
        values: [],
        numVars: 0,
        numColors: 0,
        numNumbers: 0
    };
    return n.value.includes("var(--") && Do(n, Np),
    Do(n, Op),
    Do(n, Lp),
    n
}
function Vp(e) {
    return js(e).values
}
function Dp(e) {
    const {values: t, numColors: n, numVars: r, tokenised: i} = js(e)
      , s = t.length;
    return o => {
        let l = i;
        for (let a = 0; a < s; a++)
            a < r ? l = l.replace(Np.token, o[a]) : a < r + n ? l = l.replace(Op.token, _e.transform(o[a])) : l = l.replace(Lp.token, Or(o[a]));
        return l
    }
}
const Uk = e => typeof e == "number" ? 0 : e;
function Hk(e) {
    const t = Vp(e);
    return Dp(e)(t.map(Uk))
}
const Gt = {
    test: qk,
    parse: Vp,
    createTransformer: Dp,
    getAnimatableNone: Hk
}
  , Ap = (e, t) => n => `${n > 0 ? t : e}`;
function Rp(e, t) {
    return typeof e == "number" ? n => G(e, t, n) : _e.test(e) ? Mp(e, t) : e.startsWith("var(") ? Ap(e, t) : Ip(e, t)
}
const Wp = (e, t) => {
    const n = [...e]
      , r = n.length
      , i = e.map( (s, o) => Rp(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
  , $k = (e, t) => {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Rp(e[i], t[i]));
    return i => {
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
  , Ip = (e, t) => {
    const n = Gt.createTransformer(t)
      , r = js(e)
      , i = js(t);
    return r.numVars === i.numVars && r.numColors === i.numColors && r.numNumbers >= i.numNumbers ? qt(Wp(r.values, i.values), n) : Ap(e, t)
}
  , tr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , Dc = (e, t) => n => G(e, t, n);
function Gk(e) {
    return typeof e == "number" ? Dc : typeof e == "string" ? _e.test(e) ? Mp : Ip : Array.isArray(e) ? Wp : typeof e == "object" ? $k : Dc
}
function Kk(e, t, n) {
    const r = []
      , i = n || Gk(e[0])
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let l = i(e[o], e[o + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[o] || X : t;
            l = qt(a, l)
        }
        r.push(l)
    }
    return r
}
function to(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (iu(s === t.length),
    s === 1)
        return () => t[0];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const o = Kk(t, r, i)
      , l = o.length
      , a = u => {
        let c = 0;
        if (l > 1)
            for (; c < e.length - 2 && !(u < e[c + 1]); c++)
                ;
        const d = tr(e[c], e[c + 1], u);
        return o[c](d)
    }
    ;
    return n ? u => a($t(e[0], e[s - 1], u)) : a
}
function Qk(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = tr(0, t, r);
        e.push(G(n, 1, i))
    }
}
function Fp(e) {
    const t = [0];
    return Qk(t, e.length - 1),
    t
}
function Yk(e, t) {
    return e.map(n => n * t)
}
function Xk(e, t) {
    return e.map( () => t || jp).splice(0, e.length - 1)
}
function Ps({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = Ok(r) ? r.map(Lc) : Lc(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = Yk(n && n.length === t.length ? n : Fp(t), e)
      , l = to(o, t, {
        ease: Array.isArray(i) ? i : Xk(t, i)
    });
    return {
        calculatedDuration: e,
        next: a => (s.value = l(a),
        s.done = a >= e,
        s)
    }
}
function au(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Zk = 5;
function Bp(e, t, n) {
    const r = Math.max(t - Zk, 0);
    return au(n - e(r), t - r)
}
const Ao = .001
  , Jk = .01
  , e2 = 10
  , t2 = .05
  , n2 = 1;
function r2({duration: e=800, bounce: t=.25, velocity: n=0, mass: r=1}) {
    let i, s, o = 1 - t;
    o = $t(t2, n2, o),
    e = $t(Jk, e2, ct(e)),
    o < 1 ? (i = u => {
        const c = u * o
          , d = c * e
          , f = c - n
          , m = Il(u, o)
          , v = Math.exp(-d);
        return Ao - f / m * v
    }
    ,
    s = u => {
        const d = u * o * e
          , f = d * n + n
          , m = Math.pow(o, 2) * Math.pow(u, 2) * e
          , v = Math.exp(-d)
          , k = Il(Math.pow(u, 2), o);
        return (-i(u) + Ao > 0 ? -1 : 1) * ((f - m) * v) / k
    }
    ) : (i = u => {
        const c = Math.exp(-u * e)
          , d = (u - n) * e + 1;
        return -Ao + c * d
    }
    ,
    s = u => {
        const c = Math.exp(-u * e)
          , d = (n - u) * (e * e);
        return c * d
    }
    );
    const l = 5 / e
      , a = s2(i, s, l);
    if (e = pn(e),
    isNaN(a))
        return {
            stiffness: 100,
            damping: 10,
            duration: e
        };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const i2 = 12;
function s2(e, t, n) {
    let r = n;
    for (let i = 1; i < i2; i++)
        r = r - e(r) / t(r);
    return r
}
function Il(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const o2 = ["duration", "bounce"]
  , l2 = ["stiffness", "damping", "mass"];
function Ac(e, t) {
    return t.some(n => e[n] !== void 0)
}
function a2(e) {
    let t = {
        velocity: 0,
        stiffness: 100,
        damping: 10,
        mass: 1,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!Ac(e, l2) && Ac(e, o2)) {
        const n = r2(e);
        t = {
            ...t,
            ...n,
            mass: 1
        },
        t.isResolvedFromDuration = !0
    }
    return t
}
function qp({keyframes: e, restDelta: t, restSpeed: n, ...r}) {
    const i = e[0]
      , s = e[e.length - 1]
      , o = {
        done: !1,
        value: i
    }
      , {stiffness: l, damping: a, mass: u, duration: c, velocity: d, isResolvedFromDuration: f} = a2({
        ...r,
        velocity: -ct(r.velocity || 0)
    })
      , m = d || 0
      , v = a / (2 * Math.sqrt(l * u))
      , k = s - i
      , C = ct(Math.sqrt(l / u))
      , g = Math.abs(k) < 5;
    n || (n = g ? .01 : 2),
    t || (t = g ? .005 : .5);
    let h;
    if (v < 1) {
        const p = Il(C, v);
        h = _ => {
            const x = Math.exp(-v * C * _);
            return s - x * ((m + v * C * k) / p * Math.sin(p * _) + k * Math.cos(p * _))
        }
    } else if (v === 1)
        h = p => s - Math.exp(-C * p) * (k + (m + C * k) * p);
    else {
        const p = C * Math.sqrt(v * v - 1);
        h = _ => {
            const x = Math.exp(-v * C * _)
              , S = Math.min(p * _, 300);
            return s - x * ((m + v * C * k) * Math.sinh(S) + p * k * Math.cosh(S)) / p
        }
    }
    return {
        calculatedDuration: f && c || null,
        next: p => {
            const _ = h(p);
            if (f)
                o.done = p >= c;
            else {
                let x = m;
                p !== 0 && (v < 1 ? x = Bp(h, p, _) : x = 0);
                const S = Math.abs(x) <= n
                  , P = Math.abs(s - _) <= t;
                o.done = S && P
            }
            return o.value = o.done ? s : _,
            o
        }
    }
}
function Rc({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: l, max: a, restDelta: u=.5, restSpeed: c}) {
    const d = e[0]
      , f = {
        done: !1,
        value: d
    }
      , m = z => l !== void 0 && z < l || a !== void 0 && z > a
      , v = z => l === void 0 ? a : a === void 0 || Math.abs(l - z) < Math.abs(a - z) ? l : a;
    let k = n * t;
    const C = d + k
      , g = o === void 0 ? C : o(C);
    g !== C && (k = g - d);
    const h = z => -k * Math.exp(-z / r)
      , p = z => g + h(z)
      , _ = z => {
        const b = h(z)
          , M = p(z);
        f.done = Math.abs(b) <= u,
        f.value = f.done ? g : M
    }
    ;
    let x, S;
    const P = z => {
        m(f.value) && (x = z,
        S = qp({
            keyframes: [f.value, v(f.value)],
            velocity: Bp(p, z, f.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return P(0),
    {
        calculatedDuration: null,
        next: z => {
            let b = !1;
            return !S && x === void 0 && (b = !0,
            _(z),
            P(z)),
            x !== void 0 && z > x ? S.next(z - x) : (!b && _(z),
            f)
        }
    }
}
const u2 = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => R.update(t, !0),
        stop: () => nt(t),
        now: () => re.isProcessing ? re.timestamp : performance.now()
    }
}
  , Wc = 2e4;
function Ic(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < Wc; )
        t += n,
        r = e.next(t);
    return t >= Wc ? 1 / 0 : t
}
const c2 = {
    decay: Rc,
    inertia: Rc,
    tween: Ps,
    keyframes: Ps,
    spring: qp
};
function ri({autoplay: e=!0, delay: t=0, driver: n=u2, keyframes: r, type: i="keyframes", repeat: s=0, repeatDelay: o=0, repeatType: l="loop", onPlay: a, onStop: u, onComplete: c, onUpdate: d, ...f}) {
    let m = 1, v = !1, k, C;
    const g = () => {
        C = new Promise(L => {
            k = L
        }
        )
    }
    ;
    g();
    let h;
    const p = c2[i] || Ps;
    let _;
    p !== Ps && typeof r[0] != "number" && (_ = to([0, 100], r, {
        clamp: !1
    }),
    r = [0, 100]);
    const x = p({
        ...f,
        keyframes: r
    });
    let S;
    l === "mirror" && (S = p({
        ...f,
        keyframes: [...r].reverse(),
        velocity: -(f.velocity || 0)
    }));
    let P = "idle"
      , z = null
      , b = null
      , M = null;
    x.calculatedDuration === null && s && (x.calculatedDuration = Ic(x));
    const {calculatedDuration: H} = x;
    let Z = 1 / 0
      , ve = 1 / 0;
    H !== null && (Z = H + o,
    ve = Z * (s + 1) - o);
    let le = 0;
    const zt = L => {
        if (b === null)
            return;
        m > 0 && (b = Math.min(b, L)),
        m < 0 && (b = Math.min(L - ve / m, b)),
        z !== null ? le = z : le = Math.round(L - b) * m;
        const q = le - t * (m >= 0 ? 1 : -1)
          , Zt = m >= 0 ? q < 0 : q > ve;
        le = Math.max(q, 0),
        P === "finished" && z === null && (le = ve);
        let rt = le
          , Sn = x;
        if (s) {
            const no = Math.min(le, ve) / Z;
            let pi = Math.floor(no)
              , en = no % 1;
            !en && no >= 1 && (en = 1),
            en === 1 && pi--,
            pi = Math.min(pi, s + 1),
            !!(pi % 2) && (l === "reverse" ? (en = 1 - en,
            o && (en -= o / Z)) : l === "mirror" && (Sn = S)),
            rt = $t(0, 1, en) * Z
        }
        const be = Zt ? {
            done: !1,
            value: r[0]
        } : Sn.next(rt);
        _ && (be.value = _(be.value));
        let {done: Jt} = be;
        !Zt && H !== null && (Jt = m >= 0 ? le >= ve : le <= 0);
        const km = z === null && (P === "finished" || P === "running" && Jt);
        return d && d(be.value),
        km && T(),
        be
    }
      , J = () => {
        h && h.stop(),
        h = void 0
    }
      , We = () => {
        P = "idle",
        J(),
        k(),
        g(),
        b = M = null
    }
      , T = () => {
        P = "finished",
        c && c(),
        J(),
        k()
    }
      , O = () => {
        if (v)
            return;
        h || (h = n(zt));
        const L = h.now();
        a && a(),
        z !== null ? b = L - z : (!b || P === "finished") && (b = L),
        P === "finished" && g(),
        M = b,
        z = null,
        P = "running",
        h.start()
    }
    ;
    e && O();
    const V = {
        then(L, q) {
            return C.then(L, q)
        },
        get time() {
            return ct(le)
        },
        set time(L) {
            L = pn(L),
            le = L,
            z !== null || !h || m === 0 ? z = L : b = h.now() - L / m
        },
        get duration() {
            const L = x.calculatedDuration === null ? Ic(x) : x.calculatedDuration;
            return ct(L)
        },
        get speed() {
            return m
        },
        set speed(L) {
            L === m || !h || (m = L,
            V.time = ct(le))
        },
        get state() {
            return P
        },
        play: O,
        pause: () => {
            P = "paused",
            z = le
        }
        ,
        stop: () => {
            v = !0,
            P !== "idle" && (P = "idle",
            u && u(),
            We())
        }
        ,
        cancel: () => {
            M !== null && zt(M),
            We()
        }
        ,
        complete: () => {
            P = "finished"
        }
        ,
        sample: L => (b = 0,
        zt(L))
    };
    return V
}
function d2(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const f2 = d2( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , h2 = new Set(["opacity", "clipPath", "filter", "transform", "backgroundColor"])
  , Li = 10
  , p2 = 2e4
  , m2 = (e, t) => t.type === "spring" || e === "backgroundColor" || !xp(t.ease);
function g2(e, t, {onUpdate: n, onComplete: r, ...i}) {
    if (!(f2() && h2.has(t) && !i.repeatDelay && i.repeatType !== "mirror" && i.damping !== 0 && i.type !== "inertia"))
        return !1;
    let o = !1, l, a, u = !1;
    const c = () => {
        a = new Promise(p => {
            l = p
        }
        )
    }
    ;
    c();
    let {keyframes: d, duration: f=300, ease: m, times: v} = i;
    if (m2(t, i)) {
        const p = ri({
            ...i,
            repeat: 0,
            delay: 0
        });
        let _ = {
            done: !1,
            value: d[0]
        };
        const x = [];
        let S = 0;
        for (; !_.done && S < p2; )
            _ = p.sample(S),
            x.push(_.value),
            S += Li;
        v = void 0,
        d = x,
        f = S - Li,
        m = "linear"
    }
    const k = Pk(e.owner.current, t, d, {
        ...i,
        duration: f,
        ease: m,
        times: v
    })
      , C = () => {
        u = !1,
        k.cancel()
    }
      , g = () => {
        u = !0,
        R.update(C),
        l(),
        c()
    }
    ;
    return k.onfinish = () => {
        u || (e.set(Ck(d, i)),
        r && r(),
        g())
    }
    ,
    {
        then(p, _) {
            return a.then(p, _)
        },
        attachTimeline(p) {
            return k.timeline = p,
            k.onfinish = null,
            X
        },
        get time() {
            return ct(k.currentTime || 0)
        },
        set time(p) {
            k.currentTime = pn(p)
        },
        get speed() {
            return k.playbackRate
        },
        set speed(p) {
            k.playbackRate = p
        },
        get duration() {
            return ct(f)
        },
        play: () => {
            o || (k.play(),
            nt(C))
        }
        ,
        pause: () => k.pause(),
        stop: () => {
            if (o = !0,
            k.playState === "idle")
                return;
            const {currentTime: p} = k;
            if (p) {
                const _ = ri({
                    ...i,
                    autoplay: !1
                });
                e.setWithVelocity(_.sample(p - Li).value, _.sample(p).value, Li)
            }
            g()
        }
        ,
        complete: () => {
            u || k.finish()
        }
        ,
        cancel: g
    }
}
function y2({keyframes: e, delay: t, onUpdate: n, onComplete: r}) {
    const i = () => (n && n(e[e.length - 1]),
    r && r(),
    {
        time: 0,
        speed: 1,
        duration: 0,
        play: X,
        pause: X,
        stop: X,
        then: s => (s(),
        Promise.resolve()),
        cancel: X,
        complete: X
    });
    return t ? ri({
        keyframes: [0, 1],
        duration: 0,
        delay: t,
        onComplete: i
    }) : i()
}
const v2 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , _2 = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , k2 = {
    type: "keyframes",
    duration: .8
}
  , x2 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , w2 = (e, {keyframes: t}) => t.length > 2 ? k2 : wn.has(e) ? e.startsWith("scale") ? _2(t[1]) : v2 : x2
  , Fl = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && (Gt.test(t) || t === "0") && !t.startsWith("url("))
  , z2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function S2(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(Zs) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = z2.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const j2 = /([a-z-]*)\(.*?\)/g
  , Bl = {
    ...Gt,
    getAnimatableNone: e => {
        const t = e.match(j2);
        return t ? t.map(S2).join(" ") : e
    }
}
  , P2 = {
    ...sp,
    color: _e,
    backgroundColor: _e,
    outlineColor: _e,
    fill: _e,
    stroke: _e,
    borderColor: _e,
    borderTopColor: _e,
    borderRightColor: _e,
    borderBottomColor: _e,
    borderLeftColor: _e,
    filter: Bl,
    WebkitFilter: Bl
}
  , uu = e => P2[e];
function Up(e, t) {
    let n = uu(e);
    return n !== Bl && (n = Gt),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const Hp = e => /^0[^.\s]+$/.test(e);
function C2(e) {
    if (typeof e == "number")
        return e === 0;
    if (e !== null)
        return e === "none" || e === "0" || Hp(e)
}
function T2(e, t, n, r) {
    const i = Fl(t, n);
    let s;
    Array.isArray(n) ? s = [...n] : s = [null, n];
    const o = r.from !== void 0 ? r.from : e.get();
    let l;
    const a = [];
    for (let u = 0; u < s.length; u++)
        s[u] === null && (s[u] = u === 0 ? o : s[u - 1]),
        C2(s[u]) && a.push(u),
        typeof s[u] == "string" && s[u] !== "none" && s[u] !== "0" && (l = s[u]);
    if (i && a.length && l)
        for (let u = 0; u < a.length; u++) {
            const c = a[u];
            s[c] = Up(t, l)
        }
    return s
}
function E2({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: l, from: a, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
function cu(e, t) {
    return e[t] || e.default || e
}
const b2 = {
    skipAnimations: !1
}
  , du = (e, t, n, r={}) => i => {
    const s = cu(r, e) || {}
      , o = s.delay || r.delay || 0;
    let {elapsed: l=0} = r;
    l = l - pn(o);
    const a = T2(t, e, n, s)
      , u = a[0]
      , c = a[a.length - 1]
      , d = Fl(e, u)
      , f = Fl(e, c);
    let m = {
        keyframes: a,
        velocity: t.getVelocity(),
        ease: "easeOut",
        ...s,
        delay: -l,
        onUpdate: v => {
            t.set(v),
            s.onUpdate && s.onUpdate(v)
        }
        ,
        onComplete: () => {
            i(),
            s.onComplete && s.onComplete()
        }
    };
    if (E2(s) || (m = {
        ...m,
        ...w2(e, m)
    }),
    m.duration && (m.duration = pn(m.duration)),
    m.repeatDelay && (m.repeatDelay = pn(m.repeatDelay)),
    !d || !f || jk.current || s.type === !1 || b2.skipAnimations)
        return y2(m);
    if (!r.isHandoff && t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
        const v = g2(t, e, m);
        if (v)
            return v
    }
    return ri(m)
}
;
function Cs(e) {
    return !!(ye(e) && e.add)
}
const $p = e => /^\-?\d*\.?\d+$/.test(e);
function fu(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function hu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class pu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return fu(this.subscriptions, t),
        () => hu(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
const M2 = e => !isNaN(parseFloat(e))
  , Lr = {
    current: void 0
};
class N2 {
    constructor(t, n={}) {
        this.version = "10.18.0",
        this.timeDelta = 0,
        this.lastUpdated = 0,
        this.canTrackVelocity = !1,
        this.events = {},
        this.updateAndNotify = (r, i=!0) => {
            this.prev = this.current,
            this.current = r;
            const {delta: s, timestamp: o} = re;
            this.lastUpdated !== o && (this.timeDelta = s,
            this.lastUpdated = o,
            R.postRender(this.scheduleVelocityCheck)),
            this.prev !== this.current && this.events.change && this.events.change.notify(this.current),
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.scheduleVelocityCheck = () => R.postRender(this.velocityCheck),
        this.velocityCheck = ({timestamp: r}) => {
            r !== this.lastUpdated && (this.prev = this.current,
            this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()))
        }
        ,
        this.hasAnimated = !1,
        this.prev = this.current = t,
        this.canTrackVelocity = M2(this.current),
        this.owner = n.owner
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new pu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            R.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = t,
        this.timeDelta = r
    }
    jump(t) {
        this.updateAndNotify(t),
        this.prev = t,
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return Lr.current && Lr.current.push(this),
        this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        return this.canTrackVelocity ? au(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta) : 0
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function Ze(e, t) {
    return new N2(e,t)
}
const Gp = e => t => t.test(e)
  , O2 = {
    test: e => e === "auto",
    parse: e => e
}
  , Kp = [zn, N, ut, Pt, I_, W_, O2]
  , mr = e => Kp.find(Gp(e))
  , L2 = [...Kp, _e, Gt]
  , V2 = e => L2.find(Gp(e));
function D2(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, Ze(n))
}
function A2(e, t) {
    const n = eo(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n ? e.makeTargetAnimatable(n, !1) : {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const l = ek(s[o]);
        D2(e, o, l)
    }
}
function R2(e, t, n) {
    var r, i;
    const s = Object.keys(t).filter(l => !e.hasValue(l))
      , o = s.length;
    if (o)
        for (let l = 0; l < o; l++) {
            const a = s[l]
              , u = t[a];
            let c = null;
            Array.isArray(u) && (c = u[0]),
            c === null && (c = (i = (r = n[a]) !== null && r !== void 0 ? r : e.readValue(a)) !== null && i !== void 0 ? i : t[a]),
            c != null && (typeof c == "string" && ($p(c) || Hp(c)) ? c = parseFloat(c) : !V2(c) && Gt.test(u) && (c = Up(a, u)),
            e.addValue(a, Ze(c, {
                owner: e
            })),
            n[a] === void 0 && (n[a] = c),
            c !== null && e.setBaseTarget(a, c))
        }
}
function W2(e, t) {
    return t ? (t[e] || t.default || t).from : void 0
}
function I2(e, t, n) {
    const r = {};
    for (const i in e) {
        const s = W2(i, t);
        if (s !== void 0)
            r[i] = s;
        else {
            const o = n.getValue(i);
            o && (r[i] = o.get())
        }
    }
    return r
}
function F2({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function B2(e, t) {
    const n = e.get();
    if (Array.isArray(t)) {
        for (let r = 0; r < t.length; r++)
            if (t[r] !== n)
                return !0
    } else
        return n !== t
}
function Qp(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    let {transition: s=e.getDefaultTransition(), transitionEnd: o, ...l} = e.makeTargetAnimatable(t);
    const a = e.getValue("willChange");
    r && (s = r);
    const u = []
      , c = i && e.animationState && e.animationState.getState()[i];
    for (const d in l) {
        const f = e.getValue(d)
          , m = l[d];
        if (!f || m === void 0 || c && F2(c, d))
            continue;
        const v = {
            delay: n,
            elapsed: 0,
            ...cu(s || {}, d)
        };
        if (window.HandoffAppearAnimations) {
            const g = e.getProps()[Zh];
            if (g) {
                const h = window.HandoffAppearAnimations(g, d, f, R);
                h !== null && (v.elapsed = h,
                v.isHandoff = !0)
            }
        }
        let k = !v.isHandoff && !B2(f, m);
        if (v.type === "spring" && (f.getVelocity() || v.velocity) && (k = !1),
        f.animation && (k = !1),
        k)
            continue;
        f.start(du(d, f, m, e.shouldReduceMotion && wn.has(d) ? {
            type: !1
        } : v));
        const C = f.animation;
        Cs(a) && (a.add(d),
        C.then( () => a.remove(d))),
        u.push(C)
    }
    return o && Promise.all(u).then( () => {
        o && A2(e, o)
    }
    ),
    u
}
function ql(e, t, n={}) {
    const r = eo(e, t, n.custom);
    let {transition: i=e.getDefaultTransition() || {}} = r || {};
    n.transitionOverride && (i = n.transitionOverride);
    const s = r ? () => Promise.all(Qp(e, r, n)) : () => Promise.resolve()
      , o = e.variantChildren && e.variantChildren.size ? (a=0) => {
        const {delayChildren: u=0, staggerChildren: c, staggerDirection: d} = i;
        return q2(e, t, u + a, c, d, n)
    }
    : () => Promise.resolve()
      , {when: l} = i;
    if (l) {
        const [a,u] = l === "beforeChildren" ? [s, o] : [o, s];
        return a().then( () => u())
    } else
        return Promise.all([s(), o(n.delay)])
}
function q2(e, t, n=0, r=0, i=1, s) {
    const o = []
      , l = (e.variantChildren.size - 1) * r
      , a = i === 1 ? (u=0) => u * r : (u=0) => l - u * r;
    return Array.from(e.variantChildren).sort(U2).forEach( (u, c) => {
        u.notify("AnimationStart", t),
        o.push(ql(u, t, {
            ...s,
            delay: n + a(c)
        }).then( () => u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(o)
}
function U2(e, t) {
    return e.sortNodePosition(t)
}
function H2(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => ql(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = ql(e, t, n);
    else {
        const i = typeof t == "function" ? eo(e, t, n.custom) : t;
        r = Promise.all(Qp(e, i, n))
    }
    return r.then( () => e.notify("AnimationComplete", t))
}
const $2 = [...Ka].reverse()
  , G2 = Ka.length;
function K2(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => H2(e, n, r)))
}
function Q2(e) {
    let t = K2(e);
    const n = X2();
    let r = !0;
    const i = (a, u) => {
        const c = eo(e, u);
        if (c) {
            const {transition: d, transitionEnd: f, ...m} = c;
            a = {
                ...a,
                ...m,
                ...f
            }
        }
        return a
    }
    ;
    function s(a) {
        t = a(e)
    }
    function o(a, u) {
        const c = e.getProps()
          , d = e.getVariantContext(!0) || {}
          , f = []
          , m = new Set;
        let v = {}
          , k = 1 / 0;
        for (let g = 0; g < G2; g++) {
            const h = $2[g]
              , p = n[h]
              , _ = c[h] !== void 0 ? c[h] : d[h]
              , x = ti(_)
              , S = h === u ? p.isActive : null;
            S === !1 && (k = g);
            let P = _ === d[h] && _ !== c[h] && x;
            if (P && r && e.manuallyAnimateOnMount && (P = !1),
            p.protectedKeys = {
                ...v
            },
            !p.isActive && S === null || !_ && !p.prevProp || Ys(_) || typeof _ == "boolean")
                continue;
            let b = Y2(p.prevProp, _) || h === u && p.isActive && !P && x || g > k && x
              , M = !1;
            const H = Array.isArray(_) ? _ : [_];
            let Z = H.reduce(i, {});
            S === !1 && (Z = {});
            const {prevResolvedValues: ve={}} = p
              , le = {
                ...ve,
                ...Z
            }
              , zt = J => {
                b = !0,
                m.has(J) && (M = !0,
                m.delete(J)),
                p.needsAnimating[J] = !0
            }
            ;
            for (const J in le) {
                const We = Z[J]
                  , T = ve[J];
                if (v.hasOwnProperty(J))
                    continue;
                let O = !1;
                Ss(We) && Ss(T) ? O = !_p(We, T) : O = We !== T,
                O ? We !== void 0 ? zt(J) : m.add(J) : We !== void 0 && m.has(J) ? zt(J) : p.protectedKeys[J] = !0
            }
            p.prevProp = _,
            p.prevResolvedValues = Z,
            p.isActive && (v = {
                ...v,
                ...Z
            }),
            r && e.blockInitialAnimation && (b = !1),
            b && (!P || M) && f.push(...H.map(J => ({
                animation: J,
                options: {
                    type: h,
                    ...a
                }
            })))
        }
        if (m.size) {
            const g = {};
            m.forEach(h => {
                const p = e.getBaseTarget(h);
                p !== void 0 && (g[h] = p)
            }
            ),
            f.push({
                animation: g
            })
        }
        let C = !!f.length;
        return r && (c.initial === !1 || c.initial === c.animate) && !e.manuallyAnimateOnMount && (C = !1),
        r = !1,
        C ? t(f) : Promise.resolve()
    }
    function l(a, u, c) {
        var d;
        if (n[a].isActive === u)
            return Promise.resolve();
        (d = e.variantChildren) === null || d === void 0 || d.forEach(m => {
            var v;
            return (v = m.animationState) === null || v === void 0 ? void 0 : v.setActive(a, u)
        }
        ),
        n[a].isActive = u;
        const f = o(c, a);
        for (const m in n)
            n[m].protectedKeys = {};
        return f
    }
    return {
        animateChanges: o,
        setActive: l,
        setAnimateFunction: s,
        getState: () => n
    }
}
function Y2(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !_p(t, e) : !1
}
function tn(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function X2() {
    return {
        animate: tn(!0),
        whileInView: tn(),
        whileHover: tn(),
        whileTap: tn(),
        whileDrag: tn(),
        whileFocus: tn(),
        exit: tn()
    }
}
class Z2 extends Xt {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = Q2(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        this.unmount(),
        Ys(t) && (this.unmount = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {}
}
let J2 = 0;
class ex extends Xt {
    constructor() {
        super(...arguments),
        this.id = J2++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n, custom: r} = this.node.presenceContext
          , {isPresent: i} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === i)
            return;
        const s = this.node.animationState.setActive("exit", !t, {
            custom: r ?? this.node.getProps().custom
        });
        n && !t && s.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const tx = {
    animation: {
        Feature: Z2
    },
    exit: {
        Feature: ex
    }
}
  , Fc = (e, t) => Math.abs(e - t);
function nx(e, t) {
    const n = Fc(e.x, t.x)
      , r = Fc(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class Yp {
    constructor(t, n, {transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const d = Wo(this.lastMoveEventInfo, this.history)
              , f = this.startEvent !== null
              , m = nx(d.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!f && !m)
                return;
            const {point: v} = d
              , {timestamp: k} = re;
            this.history.push({
                ...v,
                timestamp: k
            });
            const {onStart: C, onMove: g} = this.handlers;
            f || (C && C(this.lastMoveEvent, d),
            this.startEvent = this.lastMoveEvent),
            g && g(this.lastMoveEvent, d)
        }
        ,
        this.handlePointerMove = (d, f) => {
            this.lastMoveEvent = d,
            this.lastMoveEventInfo = Ro(f, this.transformPagePoint),
            R.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (d, f) => {
            this.end();
            const {onEnd: m, onSessionEnd: v, resumeAnimation: k} = this.handlers;
            if (this.dragSnapToOrigin && k && k(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const C = Wo(d.type === "pointercancel" ? this.lastMoveEventInfo : Ro(f, this.transformPagePoint), this.history);
            this.startEvent && m && m(d, C),
            v && v(d, C)
        }
        ,
        !pp(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = i || window;
        const o = Js(t)
          , l = Ro(o, this.transformPagePoint)
          , {point: a} = l
          , {timestamp: u} = re;
        this.history = [{
            ...a,
            timestamp: u
        }];
        const {onSessionStart: c} = n;
        c && c(t, Wo(l, this.history)),
        this.removeListeners = qt(yt(this.contextWindow, "pointermove", this.handlePointerMove), yt(this.contextWindow, "pointerup", this.handlePointerUp), yt(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        nt(this.updatePoint)
    }
}
function Ro(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function Bc(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Wo({point: e}, t) {
    return {
        point: e,
        delta: Bc(e, Xp(t)),
        offset: Bc(e, rx(t)),
        velocity: ix(t, .1)
    }
}
function rx(e) {
    return e[0]
}
function Xp(e) {
    return e[e.length - 1]
}
function ix(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = Xp(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > pn(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const s = ct(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
function Ve(e) {
    return e.max - e.min
}
function Ul(e, t=0, n=.01) {
    return Math.abs(e - t) <= n
}
function qc(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = G(t.min, t.max, e.origin),
    e.scale = Ve(n) / Ve(t),
    (Ul(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1),
    e.translate = G(n.min, n.max, e.origin) - e.originPoint,
    (Ul(e.translate) || isNaN(e.translate)) && (e.translate = 0)
}
function Vr(e, t, n, r) {
    qc(e.x, t.x, n.x, r ? r.originX : void 0),
    qc(e.y, t.y, n.y, r ? r.originY : void 0)
}
function Uc(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + Ve(t)
}
function sx(e, t, n) {
    Uc(e.x, t.x, n.x),
    Uc(e.y, t.y, n.y)
}
function Hc(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + Ve(t)
}
function Dr(e, t, n) {
    Hc(e.x, t.x, n.x),
    Hc(e.y, t.y, n.y)
}
function ox(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? G(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? G(n, e, r.max) : Math.min(e, n)),
    e
}
function $c(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function lx(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: $c(e.x, n, i),
        y: $c(e.y, t, r)
    }
}
function Gc(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function ax(e, t) {
    return {
        x: Gc(e.x, t.x),
        y: Gc(e.y, t.y)
    }
}
function ux(e, t) {
    let n = .5;
    const r = Ve(e)
      , i = Ve(t);
    return i > r ? n = tr(t.min, t.max - r, e.min) : r > i && (n = tr(e.min, e.max - i, t.min)),
    $t(0, 1, n)
}
function cx(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Hl = .35;
function dx(e=Hl) {
    return e === !1 ? e = 0 : e === !0 && (e = Hl),
    {
        x: Kc(e, "left", "right"),
        y: Kc(e, "top", "bottom")
    }
}
function Kc(e, t, n) {
    return {
        min: Qc(e, t),
        max: Qc(e, n)
    }
}
function Qc(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const Yc = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , In = () => ({
    x: Yc(),
    y: Yc()
})
  , Xc = () => ({
    min: 0,
    max: 0
})
  , te = () => ({
    x: Xc(),
    y: Xc()
});
function Fe(e) {
    return [e("x"), e("y")]
}
function Zp({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function fx({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function hx(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Io(e) {
    return e === void 0 || e === 1
}
function $l({scale: e, scaleX: t, scaleY: n}) {
    return !Io(e) || !Io(t) || !Io(n)
}
function sn(e) {
    return $l(e) || Jp(e) || e.z || e.rotate || e.rotateX || e.rotateY
}
function Jp(e) {
    return Zc(e.x) || Zc(e.y)
}
function Zc(e) {
    return e && e !== "0%"
}
function Ts(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function Jc(e, t, n, r, i) {
    return i !== void 0 && (e = Ts(e, i, r)),
    Ts(e, n, r) + t
}
function Gl(e, t=0, n=1, r, i) {
    e.min = Jc(e.min, t, n, r, i),
    e.max = Jc(e.max, t, n, r, i)
}
function em(e, {x: t, y: n}) {
    Gl(e.x, t.translate, t.scale, t.originPoint),
    Gl(e.y, n.translate, n.scale, n.originPoint)
}
function px(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let l = 0; l < i; l++) {
        s = n[l],
        o = s.projectionDelta;
        const a = s.instance;
        a && a.style && a.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Fn(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        em(e, o)),
        r && sn(s.latestValues) && Fn(e, s.latestValues))
    }
    t.x = ed(t.x),
    t.y = ed(t.y)
}
function ed(e) {
    return Number.isInteger(e) || e > 1.0000000000001 || e < .999999999999 ? e : 1
}
function bt(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function td(e, t, [n,r,i]) {
    const s = t[i] !== void 0 ? t[i] : .5
      , o = G(e.min, e.max, s);
    Gl(e, t[n], t[r], o, t.scale)
}
const mx = ["x", "scaleX", "originX"]
  , gx = ["y", "scaleY", "originY"];
function Fn(e, t) {
    td(e.x, t, mx),
    td(e.y, t, gx)
}
function tm(e, t) {
    return Zp(hx(e.getBoundingClientRect(), t))
}
function yx(e, t, n) {
    const r = tm(e, n)
      , {scroll: i} = t;
    return i && (bt(r.x, i.offset.x),
    bt(r.y, i.offset.y)),
    r
}
const nm = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , vx = new WeakMap;
class _x {
    constructor(t) {
        this.openGlobalLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = te(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = c => {
            const {dragSnapToOrigin: d} = this.getProps();
            d ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(Js(c, "page").point)
        }
          , s = (c, d) => {
            const {drag: f, dragPropagation: m, onDragStart: v} = this.getProps();
            if (f && !m && (this.openGlobalLock && this.openGlobalLock(),
            this.openGlobalLock = gp(f),
            !this.openGlobalLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Fe(C => {
                let g = this.getAxisMotionValue(C).get() || 0;
                if (ut.test(g)) {
                    const {projection: h} = this.visualElement;
                    if (h && h.layout) {
                        const p = h.layout.layoutBox[C];
                        p && (g = Ve(p) * (parseFloat(g) / 100))
                    }
                }
                this.originPoint[C] = g
            }
            ),
            v && R.update( () => v(c, d), !1, !0);
            const {animationState: k} = this.visualElement;
            k && k.setActive("whileDrag", !0)
        }
          , o = (c, d) => {
            const {dragPropagation: f, dragDirectionLock: m, onDirectionLock: v, onDrag: k} = this.getProps();
            if (!f && !this.openGlobalLock)
                return;
            const {offset: C} = d;
            if (m && this.currentDirection === null) {
                this.currentDirection = kx(C),
                this.currentDirection !== null && v && v(this.currentDirection);
                return
            }
            this.updateAxis("x", d.point, C),
            this.updateAxis("y", d.point, C),
            this.visualElement.render(),
            k && k(c, d)
        }
          , l = (c, d) => this.stop(c, d)
          , a = () => Fe(c => {
            var d;
            return this.getAnimationState(c) === "paused" && ((d = this.getAxisMotionValue(c).animation) === null || d === void 0 ? void 0 : d.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new Yp(t,{
            onSessionStart: i,
            onStart: s,
            onMove: o,
            onSessionEnd: l,
            resumeAnimation: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: nm(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: s} = this.getProps();
        s && R.update( () => s(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openGlobalLock && (this.openGlobalLock(),
        this.openGlobalLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Vi(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = ox(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , s = this.constraints;
        n && Rn(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = lx(i.layoutBox, n) : this.constraints = !1,
        this.elastic = dx(r),
        s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Fe(o => {
            this.getAxisMotionValue(o) && (this.constraints[o] = cx(i.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !Rn(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = yx(r, i.root, this.visualElement.getTransformPagePoint());
        let o = ax(i.layout.layoutBox, s);
        if (n) {
            const l = n(fx(o));
            this.hasMutatedConstraints = !!l,
            l && (o = Zp(l))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: l} = this.getProps()
          , a = this.constraints || {}
          , u = Fe(c => {
            if (!Vi(c, n, this.currentDirection))
                return;
            let d = a && a[c] || {};
            o && (d = {
                min: 0,
                max: 0
            });
            const f = i ? 200 : 1e6
              , m = i ? 40 : 1e7
              , v = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: f,
                bounceDamping: m,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...d
            };
            return this.startAxisValueAnimation(c, v)
        }
        );
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return r.start(du(t, r, 0, n))
    }
    stopAnimation() {
        Fe(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Fe(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = "_drag" + t.toUpperCase()
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Fe(n => {
            const {drag: r} = this.getProps();
            if (!Vi(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: l} = i.layout.layoutBox[n];
                s.set(t[n] - G(o, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!Rn(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Fe(o => {
            const l = this.getAxisMotionValue(o);
            if (l) {
                const a = l.get();
                i[o] = ux({
                    min: a,
                    max: a
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        Fe(o => {
            if (!Vi(o, t, null))
                return;
            const l = this.getAxisMotionValue(o)
              , {min: a, max: u} = this.constraints[o];
            l.set(G(a, u, i[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        vx.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = yt(t, "pointerdown", a => {
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(a)
        }
        )
          , r = () => {
            const {dragConstraints: a} = this.getProps();
            Rn(a) && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        r();
        const o = mt(window, "resize", () => this.scalePositionWithinConstraints())
          , l = i.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: u}) => {
            this.isDragging && u && (Fe(c => {
                const d = this.getAxisMotionValue(c);
                d && (this.originPoint[c] += a[c].translate,
                d.set(d.get() + a[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            o(),
            n(),
            s(),
            l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=Hl, dragMomentum: l=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: l
        }
    }
}
function Vi(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function kx(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class xx extends Xt {
    constructor(t) {
        super(t),
        this.removeGroupControls = X,
        this.removeListeners = X,
        this.controls = new _x(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || X
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const nd = e => (t, n) => {
    e && R.update( () => e(t, n))
}
;
class wx extends Xt {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = X
    }
    onPointerDown(t) {
        this.session = new Yp(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: nm(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: nd(t),
            onStart: nd(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session,
                i && R.update( () => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = yt(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
function zx() {
    const e = w.useContext(Ks);
    if (e === null)
        return [!0, null];
    const {isPresent: t, onExitComplete: n, register: r} = e
      , i = w.useId();
    return w.useEffect( () => r(i), []),
    !t && n ? [!1, () => n && n(i)] : [!0]
}
const Qi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function rd(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const gr = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (N.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = rd(e, t.target.x)
          , r = rd(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , Sx = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = Gt.parse(e);
        if (i.length > 5)
            return r;
        const s = Gt.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , l = n.x.scale * t.x
          , a = n.y.scale * t.y;
        i[0 + o] /= l,
        i[1 + o] /= a;
        const u = G(l, a, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
    }
};
class jx extends ta.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        N_(Px),
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
        })),
        Qi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , o = r.projection;
        return o && (o.isPresent = s,
        i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || R.postRender( () => {
            const l = o.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        queueMicrotask( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function rm(e) {
    const [t,n] = zx()
      , r = w.useContext(Ya);
    return ta.createElement(jx, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: w.useContext(ep),
        isPresent: t,
        safeToRemove: n
    })
}
const Px = {
    borderRadius: {
        ...gr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: gr,
    borderTopRightRadius: gr,
    borderBottomLeftRadius: gr,
    borderBottomRightRadius: gr,
    boxShadow: Sx
}
  , im = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , Cx = im.length
  , id = e => typeof e == "string" ? parseFloat(e) : e
  , sd = e => typeof e == "number" || N.test(e);
function Tx(e, t, n, r, i, s) {
    i ? (e.opacity = G(0, n.opacity !== void 0 ? n.opacity : 1, Ex(r)),
    e.opacityExit = G(t.opacity !== void 0 ? t.opacity : 1, 0, bx(r))) : s && (e.opacity = G(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < Cx; o++) {
        const l = `border${im[o]}Radius`;
        let a = od(t, l)
          , u = od(n, l);
        if (a === void 0 && u === void 0)
            continue;
        a || (a = 0),
        u || (u = 0),
        a === 0 || u === 0 || sd(a) === sd(u) ? (e[l] = Math.max(G(id(a), id(u), r), 0),
        (ut.test(u) || ut.test(a)) && (e[l] += "%")) : e[l] = u
    }
    (t.rotate || n.rotate) && (e.rotate = G(t.rotate || 0, n.rotate || 0, r))
}
function od(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const Ex = sm(0, .5, Tp)
  , bx = sm(.5, .95, X);
function sm(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(tr(e, t, r))
}
function ld(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Ie(e, t) {
    ld(e.x, t.x),
    ld(e.y, t.y)
}
function ad(e, t, n, r, i) {
    return e -= t,
    e = Ts(e, 1 / n, r),
    i !== void 0 && (e = Ts(e, 1 / i, r)),
    e
}
function Mx(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (ut.test(t) && (t = parseFloat(t),
    t = G(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let l = G(s.min, s.max, r);
    e === s && (l -= t),
    e.min = ad(e.min, t, n, l, i),
    e.max = ad(e.max, t, n, l, i)
}
function ud(e, t, [n,r,i], s, o) {
    Mx(e, t[n], t[r], t[i], t.scale, s, o)
}
const Nx = ["x", "scaleX", "originX"]
  , Ox = ["y", "scaleY", "originY"];
function cd(e, t, n, r) {
    ud(e.x, t, Nx, n ? n.x : void 0, r ? r.x : void 0),
    ud(e.y, t, Ox, n ? n.y : void 0, r ? r.y : void 0)
}
function dd(e) {
    return e.translate === 0 && e.scale === 1
}
function om(e) {
    return dd(e.x) && dd(e.y)
}
function Lx(e, t) {
    return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max
}
function lm(e, t) {
    return Math.round(e.x.min) === Math.round(t.x.min) && Math.round(e.x.max) === Math.round(t.x.max) && Math.round(e.y.min) === Math.round(t.y.min) && Math.round(e.y.max) === Math.round(t.y.max)
}
function fd(e) {
    return Ve(e.x) / Ve(e.y)
}
class Vx {
    constructor() {
        this.members = []
    }
    add(t) {
        fu(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (hu(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function hd(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y;
    if ((i || s) && (r = `translate3d(${i}px, ${s}px, 0) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {rotate: a, rotateX: u, rotateY: c} = n;
        a && (r += `rotate(${a}deg) `),
        u && (r += `rotateX(${u}deg) `),
        c && (r += `rotateY(${c}deg) `)
    }
    const o = e.x.scale * t.x
      , l = e.y.scale * t.y;
    return (o !== 1 || l !== 1) && (r += `scale(${o}, ${l})`),
    r || "none"
}
const Dx = (e, t) => e.depth - t.depth;
class Ax {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        fu(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        hu(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort(Dx),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function Rx(e, t) {
    const n = performance.now()
      , r = ({timestamp: i}) => {
        const s = i - n;
        s >= t && (nt(r),
        e(s - t))
    }
    ;
    return R.read(r, !0),
    () => nt(r)
}
function Wx(e) {
    window.MotionDebug && window.MotionDebug.record(e)
}
function Ix(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
function Fx(e, t, n) {
    const r = ye(e) ? e : Ze(e);
    return r.start(du("", r, t, n)),
    r.animation
}
const pd = ["", "X", "Y", "Z"]
  , Bx = {
    visibility: "hidden"
}
  , md = 1e3;
let qx = 0;
const on = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
};
function am({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, l=t == null ? void 0 : t()) {
            this.id = qx++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                on.totalNodes = on.resolvedTargetDeltas = on.recalculatedProjection = 0,
                this.nodes.forEach($x),
                this.nodes.forEach(Xx),
                this.nodes.forEach(Zx),
                this.nodes.forEach(Gx),
                Wx(on)
            }
            ,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = l ? l.root || l : this,
            this.path = l ? [...l.path, l] : [],
            this.parent = l,
            this.depth = l ? l.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++)
                this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Ax)
        }
        addEventListener(o, l) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new pu),
            this.eventHandlers.get(o).add(l)
        }
        notifyListeners(o, ...l) {
            const a = this.eventHandlers.get(o);
            a && a.notify(...l)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, l=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = Ix(o),
            this.instance = o;
            const {layoutId: a, layout: u, visualElement: c} = this.options;
            if (c && !c.current && c.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            l && (u || a) && (this.isLayoutDirty = !0),
            e) {
                let d;
                const f = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0,
                    d && d(),
                    d = Rx(f, 250),
                    Qi.hasAnimatedSinceResize && (Qi.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(yd))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: m, layout: v}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const k = this.options.transition || c.getDefaultTransition() || rw
                  , {onLayoutAnimationStart: C, onLayoutAnimationComplete: g} = c.getProps()
                  , h = !this.targetLayout || !lm(this.targetLayout, v) || m
                  , p = !f && m;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || p || f && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(d, p);
                    const _ = {
                        ...cu(k, "layout"),
                        onPlay: C,
                        onComplete: g
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (_.delay = 0,
                    _.type = !1),
                    this.startAnimation(_)
                } else
                    f || yd(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = v
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            nt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(Jx),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (!this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const d = this.path[c];
                d.shouldResetTransform = !0,
                d.updateScroll("snapshot"),
                d.options.layoutRoot && d.willUpdate(!1)
            }
            const {layoutId: l, layout: a} = this.options;
            if (l === void 0 && !a)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach(gd);
                return
            }
            this.isUpdating || this.nodes.forEach(Qx),
            this.isUpdating = !1,
            this.nodes.forEach(Yx),
            this.nodes.forEach(Ux),
            this.nodes.forEach(Hx),
            this.clearAllSnapshots();
            const l = performance.now();
            re.delta = $t(0, 1e3 / 60, l - re.timestamp),
            re.timestamp = l,
            re.isProcessing = !0,
            bo.update.process(re),
            bo.preRender.process(re),
            bo.render.process(re),
            re.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            queueMicrotask( () => this.update()))
        }
        clearAllSnapshots() {
            this.nodes.forEach(Kx),
            this.sharedNodes.forEach(ew)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            R.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            R.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++)
                    this.path[a].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = te(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: l} = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1),
            l && (this.scroll = {
                animationId: this.root.animationId,
                phase: o,
                isRoot: r(this.instance),
                offset: n(this.instance)
            })
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform
              , l = this.projectionDelta && !om(this.projectionDelta)
              , a = this.getTransformTemplate()
              , u = a ? a(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            o && (l || sn(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return o && (a = this.removeTransform(a)),
            iw(a),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            const {visualElement: o} = this.options;
            if (!o)
                return te();
            const l = o.measureViewportBox()
              , {scroll: a} = this.root;
            return a && (bt(l.x, a.offset.x),
            bt(l.y, a.offset.y)),
            l
        }
        removeElementScroll(o) {
            const l = te();
            Ie(l, o);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a]
                  , {scroll: c, options: d} = u;
                if (u !== this.root && c && d.layoutScroll) {
                    if (c.isRoot) {
                        Ie(l, o);
                        const {scroll: f} = this.root;
                        f && (bt(l.x, -f.offset.x),
                        bt(l.y, -f.offset.y))
                    }
                    bt(l.x, c.offset.x),
                    bt(l.y, c.offset.y)
                }
            }
            return l
        }
        applyTransform(o, l=!1) {
            const a = te();
            Ie(a, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && Fn(a, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                sn(c.latestValues) && Fn(a, c.latestValues)
            }
            return sn(this.latestValues) && Fn(a, this.latestValues),
            a
        }
        removeTransform(o) {
            const l = te();
            Ie(l, o);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !sn(u.latestValues))
                    continue;
                $l(u.latestValues) && u.updateSnapshot();
                const c = te()
                  , d = u.measurePageBox();
                Ie(c, d),
                cd(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return sn(this.latestValues) && cd(l, this.latestValues),
            l
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== re.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget))
                return;
            const {layout: d, layoutId: f} = this.options;
            if (!(!this.layout || !(d || f))) {
                if (this.resolvedRelativeTargetAt = re.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const m = this.getClosestProjectingParent();
                    m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = te(),
                    this.relativeTargetOrigin = te(),
                    Dr(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox),
                    Ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = te(),
                    this.targetWithTransforms = te()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    sx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ie(this.target, this.layout.layoutBox),
                    em(this.target, this.targetDelta)) : Ie(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const m = this.getClosestProjectingParent();
                        m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = te(),
                        this.relativeTargetOrigin = te(),
                        Dr(this.relativeTargetOrigin, this.target, m.target),
                        Ie(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    on.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || $l(this.parent.latestValues) || Jp(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const l = this.getLead()
              , a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === re.timestamp && (u = !1),
            u)
                return;
            const {layout: c, layoutId: d} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || d))
                return;
            Ie(this.layoutCorrected, this.layout.layoutBox);
            const f = this.treeScale.x
              , m = this.treeScale.y;
            px(this.layoutCorrected, this.treeScale, this.path, a),
            l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox);
            const {target: v} = l;
            if (!v) {
                this.projectionTransform && (this.projectionDelta = In(),
                this.projectionTransform = "none",
                this.scheduleRender());
                return
            }
            this.projectionDelta || (this.projectionDelta = In(),
            this.projectionDeltaWithTransform = In());
            const k = this.projectionTransform;
            Vr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
            this.projectionTransform = hd(this.projectionDelta, this.treeScale),
            (this.projectionTransform !== k || this.treeScale.x !== f || this.treeScale.y !== m) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", v)),
            on.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            if (this.options.scheduleRender && this.options.scheduleRender(),
            o) {
                const l = this.getStack();
                l && l.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        setAnimationOrigin(o, l=!1) {
            const a = this.snapshot
              , u = a ? a.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , d = In();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !l;
            const f = te()
              , m = a ? a.source : void 0
              , v = this.layout ? this.layout.source : void 0
              , k = m !== v
              , C = this.getStack()
              , g = !C || C.members.length <= 1
              , h = !!(k && !g && this.options.crossfade === !0 && !this.path.some(nw));
            this.animationProgress = 0;
            let p;
            this.mixTargetDelta = _ => {
                const x = _ / 1e3;
                vd(d.x, o.x, x),
                vd(d.y, o.y, x),
                this.setTargetDelta(d),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Dr(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                tw(this.relativeTarget, this.relativeTargetOrigin, f, x),
                p && Lx(this.relativeTarget, p) && (this.isProjectionDirty = !1),
                p || (p = te()),
                Ie(p, this.relativeTarget)),
                k && (this.animationValues = c,
                Tx(c, u, this.latestValues, x, h, g)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = x
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (nt(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = R.update( () => {
                Qi.hasAnimatedSinceResize = !0,
                this.currentAnimation = Fx(0, md, {
                    ...o,
                    onUpdate: l => {
                        this.mixTargetDelta(l),
                        o.onUpdate && o.onUpdate(l)
                    }
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(md),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: l, target: a, layout: u, latestValues: c} = o;
            if (!(!l || !a || !u)) {
                if (this !== o && this.layout && u && um(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || te();
                    const d = Ve(this.layout.layoutBox.x);
                    a.x.min = o.target.x.min,
                    a.x.max = a.x.min + d;
                    const f = Ve(this.layout.layoutBox.y);
                    a.y.min = o.target.y.min,
                    a.y.max = a.y.min + f
                }
                Ie(l, a),
                Fn(l, c),
                Vr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
            }
        }
        registerSharedNode(o, l) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new Vx),
            this.sharedNodes.get(o).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: l, preserveFollowOpacity: a}={}) {
            const u = this.getStack();
            u && u.promote(this, a),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let l = !1;
            const {latestValues: a} = o;
            if ((a.rotate || a.rotateX || a.rotateY || a.rotateZ) && (l = !0),
            !l)
                return;
            const u = {};
            for (let c = 0; c < pd.length; c++) {
                const d = "rotate" + pd[c];
                a[d] && (u[d] = a[d],
                o.setStaticValue(d, 0))
            }
            o.render();
            for (const c in u)
                o.setStaticValue(c, u[c]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var l, a;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return Bx;
            const u = {
                visibility: ""
            }
              , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = Ki(o == null ? void 0 : o.pointerEvents) || "",
                u.transform = c ? c(this.latestValues, "") : "none",
                u;
            const d = this.getLead();
            if (!this.projectionDelta || !this.layout || !d.target) {
                const k = {};
                return this.options.layoutId && (k.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                k.pointerEvents = Ki(o == null ? void 0 : o.pointerEvents) || ""),
                this.hasProjected && !sn(this.latestValues) && (k.transform = c ? c({}, "") : "none",
                this.hasProjected = !1),
                k
            }
            const f = d.animationValues || d.latestValues;
            this.applyTransformsToTarget(),
            u.transform = hd(this.projectionDeltaWithTransform, this.treeScale, f),
            c && (u.transform = c(f, u.transform));
            const {x: m, y: v} = this.projectionDelta;
            u.transformOrigin = `${m.origin * 100}% ${v.origin * 100}% 0`,
            d.animationValues ? u.opacity = d === this ? (a = (l = f.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : u.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
            for (const k in ws) {
                if (f[k] === void 0)
                    continue;
                const {correct: C, applyTo: g} = ws[k]
                  , h = u.transform === "none" ? f[k] : C(f[k], d);
                if (g) {
                    const p = g.length;
                    for (let _ = 0; _ < p; _++)
                        u[g[_]] = h
                } else
                    u[k] = h
            }
            return this.options.layoutId && (u.pointerEvents = d === this ? Ki(o == null ? void 0 : o.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var l;
                return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach(gd),
            this.root.sharedNodes.clear()
        }
    }
}
function Ux(e) {
    e.updateLayout()
}
function Hx(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = n.source !== e.layout.source;
        s === "size" ? Fe(d => {
            const f = o ? n.measuredBox[d] : n.layoutBox[d]
              , m = Ve(f);
            f.min = r[d].min,
            f.max = f.min + m
        }
        ) : um(s, n.layoutBox, r) && Fe(d => {
            const f = o ? n.measuredBox[d] : n.layoutBox[d]
              , m = Ve(r[d]);
            f.max = f.min + m,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[d].max = e.relativeTarget[d].min + m)
        }
        );
        const l = In();
        Vr(l, r, n.layoutBox);
        const a = In();
        o ? Vr(a, e.applyTransform(i, !0), n.measuredBox) : Vr(a, r, n.layoutBox);
        const u = !om(l);
        let c = !1;
        if (!e.resumeFrom) {
            const d = e.getClosestProjectingParent();
            if (d && !d.resumeFrom) {
                const {snapshot: f, layout: m} = d;
                if (f && m) {
                    const v = te();
                    Dr(v, n.layoutBox, f.layoutBox);
                    const k = te();
                    Dr(k, r, m.layoutBox),
                    lm(v, k) || (c = !0),
                    d.options.layoutRoot && (e.relativeTarget = k,
                    e.relativeTargetOrigin = v,
                    e.relativeParent = d)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function $x(e) {
    on.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function Gx(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function Kx(e) {
    e.clearSnapshot()
}
function gd(e) {
    e.clearMeasurements()
}
function Qx(e) {
    e.isLayoutDirty = !1
}
function Yx(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function yd(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function Xx(e) {
    e.resolveTargetDelta()
}
function Zx(e) {
    e.calcProjection()
}
function Jx(e) {
    e.resetRotation()
}
function ew(e) {
    e.removeLeadSnapshot()
}
function vd(e, t, n) {
    e.translate = G(t.translate, 0, n),
    e.scale = G(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function _d(e, t, n, r) {
    e.min = G(t.min, n.min, r),
    e.max = G(t.max, n.max, r)
}
function tw(e, t, n, r) {
    _d(e.x, t.x, n.x, r),
    _d(e.y, t.y, n.y, r)
}
function nw(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const rw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , kd = e => typeof navigator < "u" && navigator.userAgent.toLowerCase().includes(e)
  , xd = kd("applewebkit/") && !kd("chrome/") ? Math.round : X;
function wd(e) {
    e.min = xd(e.min),
    e.max = xd(e.max)
}
function iw(e) {
    wd(e.x),
    wd(e.y)
}
function um(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !Ul(fd(t), fd(n), .2)
}
const sw = am({
    attachResizeListener: (e, t) => mt(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , Fo = {
    current: void 0
}
  , cm = am({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!Fo.current) {
            const e = new sw({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            Fo.current = e
        }
        return Fo.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , ow = {
    pan: {
        Feature: wx
    },
    drag: {
        Feature: xx,
        ProjectionNode: cm,
        MeasureLayout: rm
    }
}
  , lw = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function aw(e) {
    const t = lw.exec(e);
    if (!t)
        return [, ];
    const [,n,r] = t;
    return [n, r]
}
function Kl(e, t, n=1) {
    const [r,i] = aw(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return $p(o) ? parseFloat(o) : o
    } else
        return Al(i) ? Kl(i, t, n + 1) : i
}
function uw(e, {...t}, n) {
    const r = e.current;
    if (!(r instanceof Element))
        return {
            target: t,
            transitionEnd: n
        };
    n && (n = {
        ...n
    }),
    e.values.forEach(i => {
        const s = i.get();
        if (!Al(s))
            return;
        const o = Kl(s, r);
        o && i.set(o)
    }
    );
    for (const i in t) {
        const s = t[i];
        if (!Al(s))
            continue;
        const o = Kl(s, r);
        o && (t[i] = o,
        n || (n = {}),
        n[i] === void 0 && (n[i] = s))
    }
    return {
        target: t,
        transitionEnd: n
    }
}
const cw = new Set(["width", "height", "top", "left", "right", "bottom", "x", "y", "translateX", "translateY"])
  , dm = e => cw.has(e)
  , dw = e => Object.keys(e).some(dm)
  , zd = e => e === zn || e === N
  , Sd = (e, t) => parseFloat(e.split(", ")[t])
  , jd = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/);
    if (i)
        return Sd(i[1], t);
    {
        const s = r.match(/^matrix\((.+)\)$/);
        return s ? Sd(s[1], e) : 0
    }
}
  , fw = new Set(["x", "y", "z"])
  , hw = ui.filter(e => !fw.has(e));
function pw(e) {
    const t = [];
    return hw.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t.length && e.render(),
    t
}
const nr = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: jd(4, 13),
    y: jd(5, 14)
};
nr.translateX = nr.x;
nr.translateY = nr.y;
const mw = (e, t, n) => {
    const r = t.measureViewportBox()
      , i = t.current
      , s = getComputedStyle(i)
      , {display: o} = s
      , l = {};
    o === "none" && t.setStaticValue("display", e.display || "block"),
    n.forEach(u => {
        l[u] = nr[u](r, s)
    }
    ),
    t.render();
    const a = t.measureViewportBox();
    return n.forEach(u => {
        const c = t.getValue(u);
        c && c.jump(l[u]),
        e[u] = nr[u](a, s)
    }
    ),
    e
}
  , gw = (e, t, n={}, r={}) => {
    t = {
        ...t
    },
    r = {
        ...r
    };
    const i = Object.keys(t).filter(dm);
    let s = []
      , o = !1;
    const l = [];
    if (i.forEach(a => {
        const u = e.getValue(a);
        if (!e.hasValue(a))
            return;
        let c = n[a]
          , d = mr(c);
        const f = t[a];
        let m;
        if (Ss(f)) {
            const v = f.length
              , k = f[0] === null ? 1 : 0;
            c = f[k],
            d = mr(c);
            for (let C = k; C < v && f[C] !== null; C++)
                m ? iu(mr(f[C]) === m) : m = mr(f[C])
        } else
            m = mr(f);
        if (d !== m)
            if (zd(d) && zd(m)) {
                const v = u.get();
                typeof v == "string" && u.set(parseFloat(v)),
                typeof f == "string" ? t[a] = parseFloat(f) : Array.isArray(f) && m === N && (t[a] = f.map(parseFloat))
            } else
                d != null && d.transform && (m != null && m.transform) && (c === 0 || f === 0) ? c === 0 ? u.set(m.transform(c)) : t[a] = d.transform(f) : (o || (s = pw(e),
                o = !0),
                l.push(a),
                r[a] = r[a] !== void 0 ? r[a] : t[a],
                u.jump(f))
    }
    ),
    l.length) {
        const a = l.indexOf("height") >= 0 ? window.pageYOffset : null
          , u = mw(t, e, l);
        return s.length && s.forEach( ([c,d]) => {
            e.getValue(c).set(d)
        }
        ),
        e.render(),
        Qs && a !== null && window.scrollTo({
            top: a
        }),
        {
            target: u,
            transitionEnd: r
        }
    } else
        return {
            target: t,
            transitionEnd: r
        }
}
;
function yw(e, t, n, r) {
    return dw(t) ? gw(e, t, n, r) : {
        target: t,
        transitionEnd: r
    }
}
const vw = (e, t, n, r) => {
    const i = uw(e, t, r);
    return t = i.target,
    r = i.transitionEnd,
    yw(e, t, n, r)
}
  , Ql = {
    current: null
}
  , fm = {
    current: !1
};
function _w() {
    if (fm.current = !0,
    !!Qs)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Ql.current = e.matches;
            e.addListener(t),
            t()
        } else
            Ql.current = !1
}
function kw(e, t, n) {
    const {willChange: r} = t;
    for (const i in t) {
        const s = t[i]
          , o = n[i];
        if (ye(s))
            e.addValue(i, s),
            Cs(r) && r.add(i);
        else if (ye(o))
            e.addValue(i, Ze(s, {
                owner: e
            })),
            Cs(r) && r.remove(i);
        else if (o !== s)
            if (e.hasValue(i)) {
                const l = e.getValue(i);
                !l.hasAnimated && l.set(s)
            } else {
                const l = e.getStaticValue(i);
                e.addValue(i, Ze(l !== void 0 ? l : s, {
                    owner: e
                }))
            }
    }
    for (const i in n)
        t[i] === void 0 && e.removeValue(i);
    return t
}
const Pd = new WeakMap
  , hm = Object.keys(ni)
  , xw = hm.length
  , Cd = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"]
  , ww = Qa.length;
class zw {
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, visualState: s}, o={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.scheduleRender = () => R.render(this.render, !1, !0);
        const {latestValues: l, renderState: a} = s;
        this.latestValues = l,
        this.baseTarget = {
            ...l
        },
        this.initialValues = n.initial ? {
            ...l
        } : {},
        this.renderState = a,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = o,
        this.isControllingVariants = Xs(n),
        this.isVariantNode = Jh(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: u, ...c} = this.scrapeMotionValuesFromProps(n, {});
        for (const d in c) {
            const f = c[d];
            l[d] !== void 0 && ye(f) && (f.set(l[d], !1),
            Cs(u) && u.add(d))
        }
    }
    scrapeMotionValuesFromProps(t, n) {
        return {}
    }
    mount(t) {
        this.current = t,
        Pd.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        fm.current || _w(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ql.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Pd.delete(this.current),
        this.projection && this.projection.unmount(),
        nt(this.notifyUpdate),
        nt(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features)
            this.features[t].unmount();
        this.current = null
    }
    bindToMotionValue(t, n) {
        const r = wn.has(t)
          , i = n.on("change", o => {
            this.latestValues[t] = o,
            this.props.onUpdate && R.update(this.notifyUpdate, !1, !0),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , s = n.on("renderRequest", this.scheduleRender);
        this.valueSubscriptions.set(t, () => {
            i(),
            s()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    loadFeatures({children: t, ...n}, r, i, s) {
        let o, l;
        for (let a = 0; a < xw; a++) {
            const u = hm[a]
              , {isEnabled: c, Feature: d, ProjectionNode: f, MeasureLayout: m} = ni[u];
            f && (o = f),
            c(n) && (!this.features[u] && d && (this.features[u] = new d(this)),
            m && (l = m))
        }
        if ((this.type === "html" || this.type === "svg") && !this.projection && o) {
            this.projection = new o(this.latestValues,this.parent && this.parent.projection);
            const {layoutId: a, layout: u, drag: c, dragConstraints: d, layoutScroll: f, layoutRoot: m} = n;
            this.projection.setOptions({
                layoutId: a,
                layout: u,
                alwaysMeasureLayout: !!c || d && Rn(d),
                visualElement: this,
                scheduleRender: () => this.scheduleRender(),
                animationType: typeof u == "string" ? u : "both",
                initialPromotionConfig: s,
                layoutScroll: f,
                layoutRoot: m
            })
        }
        return l
    }
    updateFeatures() {
        for (const t in this.features) {
            const n = this.features[t];
            n.isMounted ? n.update() : (n.mount(),
            n.isMounted = !0)
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.options, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : te()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    makeTargetAnimatable(t, n=!0) {
        return this.makeTargetAnimatableFromInstance(t, this.props, n)
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < Cd.length; r++) {
            const i = Cd[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = t["on" + i];
            s && (this.propEventSubscriptions[i] = this.on(i, s))
        }
        this.prevMotionValues = kw(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue()
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    getVariantContext(t=!1) {
        if (t)
            return this.parent ? this.parent.getVariantContext() : void 0;
        if (!this.isControllingVariants) {
            const r = this.parent ? this.parent.getVariantContext() || {} : {};
            return this.props.initial !== void 0 && (r.initial = this.props.initial),
            r
        }
        const n = {};
        for (let r = 0; r < ww; r++) {
            const i = Qa[r]
              , s = this.props[i];
            (ti(s) || s === !1) && (n[i] = s)
        }
        return n
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        n !== this.values.get(t) && (this.removeValue(t),
        this.bindToMotionValue(t, n)),
        this.values.set(t, n),
        this.latestValues[t] = n.get()
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = Ze(n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t) {
        var n;
        return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (n = this.getBaseTargetFromProps(this.props, t)) !== null && n !== void 0 ? n : this.readValueFromInstance(this.current, t, this.options)
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props
          , i = typeof r == "string" || typeof r == "object" ? (n = ru(this.props, r)) === null || n === void 0 ? void 0 : n[t] : void 0;
        if (r && i !== void 0)
            return i;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !ye(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new pu),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class pm extends zw {
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    makeTargetAnimatableFromInstance({transition: t, transitionEnd: n, ...r}, {transformValues: i}, s) {
        let o = I2(r, t || {}, this);
        if (i && (n && (n = i(n)),
        r && (r = i(r)),
        o && (o = i(o))),
        s) {
            R2(this, r, o);
            const l = vw(this, r, o, n);
            n = l.transitionEnd,
            r = l.target
        }
        return {
            transition: t,
            transitionEnd: n,
            ...r
        }
    }
}
function Sw(e) {
    return window.getComputedStyle(e)
}
class jw extends pm {
    constructor() {
        super(...arguments),
        this.type = "html"
    }
    readValueFromInstance(t, n) {
        if (wn.has(n)) {
            const r = uu(n);
            return r && r.default || 0
        } else {
            const r = Sw(t)
              , i = (rp(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return tm(t, n)
    }
    build(t, n, r, i) {
        Za(t, n, r, i.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n) {
        return nu(t, n)
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        ye(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
    renderInstance(t, n, r, i) {
        up(t, n, r, i)
    }
}
class Pw extends pm {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (wn.has(n)) {
            const r = uu(n);
            return r && r.default || 0
        }
        return n = cp.has(n) ? n : Ga(n),
        t.getAttribute(n)
    }
    measureInstanceViewportBox() {
        return te()
    }
    scrapeMotionValuesFromProps(t, n) {
        return fp(t, n)
    }
    build(t, n, r, i) {
        eu(t, n, r, this.isSVGTag, i.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        dp(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = tu(t.tagName),
        super.mount(t)
    }
}
const Cw = (e, t) => Xa(e) ? new Pw(t,{
    enableHardwareAcceleration: !1
}) : new jw(t,{
    enableHardwareAcceleration: !0
})
  , Tw = {
    layout: {
        ProjectionNode: cm,
        MeasureLayout: rm
    }
}
  , Ew = {
    ...tx,
    ...xk,
    ...ow,
    ...Tw
}
  , se = b_( (e, t) => ak(e, t, Ew, Cw));
function mm() {
    const e = w.useRef(!1);
    return or( () => (e.current = !0,
    () => {
        e.current = !1
    }
    ), []),
    e
}
function bw() {
    const e = mm()
      , [t,n] = w.useState(0)
      , r = w.useCallback( () => {
        e.current && n(t + 1)
    }
    , [t]);
    return [w.useCallback( () => R.postRender(r), [r]), t]
}
class Mw extends w.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function Nw({children: e, isPresent: t}) {
    const n = w.useId()
      , r = w.useRef(null)
      , i = w.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    });
    return w.useInsertionEffect( () => {
        const {width: s, height: o, top: l, left: a} = i.current;
        if (t || !r.current || !s || !o)
            return;
        r.current.dataset.motionPopId = n;
        const u = document.createElement("style");
        return document.head.appendChild(u),
        u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${a}px !important;
          }
        `),
        () => {
            document.head.removeChild(u)
        }
    }
    , [t]),
    w.createElement(Mw, {
        isPresent: t,
        childRef: r,
        sizeRef: i
    }, w.cloneElement(e, {
        ref: r
    }))
}
const Bo = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o}) => {
    const l = fi(Ow)
      , a = w.useId()
      , u = w.useMemo( () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: c => {
            l.set(c, !0);
            for (const d of l.values())
                if (!d)
                    return;
            r && r()
        }
        ,
        register: c => (l.set(c, !1),
        () => l.delete(c))
    }), s ? void 0 : [n]);
    return w.useMemo( () => {
        l.forEach( (c, d) => l.set(d, !1))
    }
    , [n]),
    w.useEffect( () => {
        !n && !l.size && r && r()
    }
    , [n]),
    o === "popLayout" && (e = w.createElement(Nw, {
        isPresent: n
    }, e)),
    w.createElement(Ks.Provider, {
        value: u
    }, e)
}
;
function Ow() {
    return new Map
}
function Lw(e) {
    return w.useEffect( () => () => e(), [])
}
const ln = e => e.key || "";
function Vw(e, t) {
    e.forEach(n => {
        const r = ln(n);
        t.set(r, n)
    }
    )
}
function Dw(e) {
    const t = [];
    return w.Children.forEach(e, n => {
        w.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const gm = ({children: e, custom: t, initial: n=!0, onExitComplete: r, exitBeforeEnter: i, presenceAffectsLayout: s=!0, mode: o="sync"}) => {
    const l = w.useContext(Ya).forceRender || bw()[0]
      , a = mm()
      , u = Dw(e);
    let c = u;
    const d = w.useRef(new Map).current
      , f = w.useRef(c)
      , m = w.useRef(new Map).current
      , v = w.useRef(!0);
    if (or( () => {
        v.current = !1,
        Vw(u, m),
        f.current = c
    }
    ),
    Lw( () => {
        v.current = !0,
        m.clear(),
        d.clear()
    }
    ),
    v.current)
        return w.createElement(w.Fragment, null, c.map(h => w.createElement(Bo, {
            key: ln(h),
            isPresent: !0,
            initial: n ? void 0 : !1,
            presenceAffectsLayout: s,
            mode: o
        }, h)));
    c = [...c];
    const k = f.current.map(ln)
      , C = u.map(ln)
      , g = k.length;
    for (let h = 0; h < g; h++) {
        const p = k[h];
        C.indexOf(p) === -1 && !d.has(p) && d.set(p, void 0)
    }
    return o === "wait" && d.size && (c = []),
    d.forEach( (h, p) => {
        if (C.indexOf(p) !== -1)
            return;
        const _ = m.get(p);
        if (!_)
            return;
        const x = k.indexOf(p);
        let S = h;
        if (!S) {
            const P = () => {
                d.delete(p);
                const z = Array.from(m.keys()).filter(b => !C.includes(b));
                if (z.forEach(b => m.delete(b)),
                f.current = u.filter(b => {
                    const M = ln(b);
                    return M === p || z.includes(M)
                }
                ),
                !d.size) {
                    if (a.current === !1)
                        return;
                    l(),
                    r && r()
                }
            }
            ;
            S = w.createElement(Bo, {
                key: ln(_),
                isPresent: !1,
                onExitComplete: P,
                custom: t,
                presenceAffectsLayout: s,
                mode: o
            }, _),
            d.set(p, S)
        }
        c.splice(x, 0, S)
    }
    ),
    c = c.map(h => {
        const p = h.key;
        return d.has(p) ? h : w.createElement(Bo, {
            key: ln(h),
            isPresent: !0,
            presenceAffectsLayout: s,
            mode: o
        }, h)
    }
    ),
    w.createElement(w.Fragment, null, d.size ? c : c.map(h => w.cloneElement(h)))
}
;
function ym(e) {
    const t = fi( () => Ze(e))
      , {isStatic: n} = w.useContext($s);
    if (n) {
        const [,r] = w.useState(e);
        w.useEffect( () => t.on("change", r), [])
    }
    return t
}
const Aw = e => e && typeof e == "object" && e.mix
  , Rw = e => Aw(e) ? e.mix : void 0;
function Ww(...e) {
    const t = !Array.isArray(e[0])
      , n = t ? 0 : -1
      , r = e[0 + n]
      , i = e[1 + n]
      , s = e[2 + n]
      , o = e[3 + n]
      , l = to(i, s, {
        mixer: Rw(s[0]),
        ...o
    });
    return t ? l(r) : l
}
function vm(e, t) {
    const n = ym(t())
      , r = () => n.set(t());
    return r(),
    or( () => {
        const i = () => R.update(r, !1, !0)
          , s = e.map(o => o.on("change", i));
        return () => {
            s.forEach(o => o()),
            nt(r)
        }
    }
    ),
    n
}
function Iw(e) {
    Lr.current = [],
    e();
    const t = vm(Lr.current, e);
    return Lr.current = void 0,
    t
}
function Se(e, t, n, r) {
    if (typeof e == "function")
        return Iw(e);
    const i = typeof t == "function" ? t : Ww(t, n, r);
    return Array.isArray(e) ? Td(e, i) : Td([e], ([s]) => i(s))
}
function Td(e, t) {
    const n = fi( () => []);
    return vm(e, () => {
        n.length = 0;
        const r = e.length;
        for (let i = 0; i < r; i++)
            n[i] = e[i].get();
        return t(n)
    }
    )
}
function Fw(e, t={}) {
    const {isStatic: n} = w.useContext($s)
      , r = w.useRef(null)
      , i = ym(ye(e) ? e.get() : e)
      , s = () => {
        r.current && r.current.stop()
    }
    ;
    return w.useInsertionEffect( () => i.attach( (o, l) => {
        if (n)
            return l(o);
        if (s(),
        r.current = ri({
            keyframes: [i.get(), o],
            velocity: i.getVelocity(),
            type: "spring",
            restDelta: .001,
            restSpeed: .01,
            ...t,
            onUpdate: l
        }),
        !re.isProcessing) {
            const a = performance.now() - re.timestamp;
            a < 30 && (r.current.time = ct(a))
        }
        return i.get()
    }
    , s), [JSON.stringify(t)]),
    or( () => {
        if (ye(e))
            return e.on("change", o => i.set(parseFloat(o)))
    }
    , [i]),
    i
}
function Bw(e, t, n) {
    w.useInsertionEffect( () => e.on(t, n), [e, t, n])
}
function qw(e, t, n) {
    return typeof e == "string" ? e = document.querySelectorAll(e) : e instanceof Element && (e = [e]),
    Array.from(e || [])
}
const Yi = new WeakMap;
let Ct;
function Uw(e, t) {
    if (t) {
        const {inlineSize: n, blockSize: r} = t[0];
        return {
            width: n,
            height: r
        }
    } else
        return e instanceof SVGElement && "getBBox"in e ? e.getBBox() : {
            width: e.offsetWidth,
            height: e.offsetHeight
        }
}
function Hw({target: e, contentRect: t, borderBoxSize: n}) {
    var r;
    (r = Yi.get(e)) === null || r === void 0 || r.forEach(i => {
        i({
            target: e,
            contentSize: t,
            get size() {
                return Uw(e, n)
            }
        })
    }
    )
}
function $w(e) {
    e.forEach(Hw)
}
function Gw() {
    typeof ResizeObserver > "u" || (Ct = new ResizeObserver($w))
}
function Kw(e, t) {
    Ct || Gw();
    const n = qw(e);
    return n.forEach(r => {
        let i = Yi.get(r);
        i || (i = new Set,
        Yi.set(r, i)),
        i.add(t),
        Ct == null || Ct.observe(r)
    }
    ),
    () => {
        n.forEach(r => {
            const i = Yi.get(r);
            i == null || i.delete(t),
            i != null && i.size || Ct == null || Ct.unobserve(r)
        }
        )
    }
}
const Xi = new Set;
let Ar;
function Qw() {
    Ar = () => {
        const e = {
            width: window.innerWidth,
            height: window.innerHeight
        }
          , t = {
            target: window,
            size: e,
            contentSize: e
        };
        Xi.forEach(n => n(t))
    }
    ,
    window.addEventListener("resize", Ar)
}
function Yw(e) {
    return Xi.add(e),
    Ar || Qw(),
    () => {
        Xi.delete(e),
        !Xi.size && Ar && (Ar = void 0)
    }
}
function Xw(e, t) {
    return typeof e == "function" ? Yw(e) : Kw(e, t)
}
const Zw = 50
  , Ed = () => ({
    current: 0,
    offset: [],
    progress: 0,
    scrollLength: 0,
    targetOffset: 0,
    targetLength: 0,
    containerLength: 0,
    velocity: 0
})
  , Jw = () => ({
    time: 0,
    x: Ed(),
    y: Ed()
})
  , ez = {
    x: {
        length: "Width",
        position: "Left"
    },
    y: {
        length: "Height",
        position: "Top"
    }
};
function bd(e, t, n, r) {
    const i = n[t]
      , {length: s, position: o} = ez[t]
      , l = i.current
      , a = n.time;
    i.current = e["scroll" + o],
    i.scrollLength = e["scroll" + s] - e["client" + s],
    i.offset.length = 0,
    i.offset[0] = 0,
    i.offset[1] = i.scrollLength,
    i.progress = tr(0, i.scrollLength, i.current);
    const u = r - a;
    i.velocity = u > Zw ? 0 : au(i.current - l, u)
}
function tz(e, t, n) {
    bd(e, "x", t, n),
    bd(e, "y", t, n),
    t.time = n
}
function nz(e, t) {
    const n = {
        x: 0,
        y: 0
    };
    let r = e;
    for (; r && r !== t; )
        if (r instanceof HTMLElement)
            n.x += r.offsetLeft,
            n.y += r.offsetTop,
            r = r.offsetParent;
        else if (r.tagName === "svg") {
            const i = r.getBoundingClientRect();
            r = r.parentElement;
            const s = r.getBoundingClientRect();
            n.x += i.left - s.left,
            n.y += i.top - s.top
        } else if (r instanceof SVGGraphicsElement) {
            const {x: i, y: s} = r.getBBox();
            n.x += i,
            n.y += s;
            let o = null
              , l = r.parentNode;
            for (; !o; )
                l.tagName === "svg" && (o = l),
                l = r.parentNode;
            r = o
        } else
            break;
    return n
}
const rz = {
    All: [[0, 0], [1, 1]]
}
  , Yl = {
    start: 0,
    center: .5,
    end: 1
};
function Md(e, t, n=0) {
    let r = 0;
    if (Yl[e] !== void 0 && (e = Yl[e]),
    typeof e == "string") {
        const i = parseFloat(e);
        e.endsWith("px") ? r = i : e.endsWith("%") ? e = i / 100 : e.endsWith("vw") ? r = i / 100 * document.documentElement.clientWidth : e.endsWith("vh") ? r = i / 100 * document.documentElement.clientHeight : e = i
    }
    return typeof e == "number" && (r = t * e),
    n + r
}
const iz = [0, 0];
function sz(e, t, n, r) {
    let i = Array.isArray(e) ? e : iz
      , s = 0
      , o = 0;
    return typeof e == "number" ? i = [e, e] : typeof e == "string" && (e = e.trim(),
    e.includes(" ") ? i = e.split(" ") : i = [e, Yl[e] ? e : "0"]),
    s = Md(i[0], n, r),
    o = Md(i[1], t),
    s - o
}
const oz = {
    x: 0,
    y: 0
};
function lz(e) {
    return "getBBox"in e && e.tagName !== "svg" ? e.getBBox() : {
        width: e.clientWidth,
        height: e.clientHeight
    }
}
function az(e, t, n) {
    let {offset: r=rz.All} = n;
    const {target: i=e, axis: s="y"} = n
      , o = s === "y" ? "height" : "width"
      , l = i !== e ? nz(i, e) : oz
      , a = i === e ? {
        width: e.scrollWidth,
        height: e.scrollHeight
    } : lz(i)
      , u = {
        width: e.clientWidth,
        height: e.clientHeight
    };
    t[s].offset.length = 0;
    let c = !t[s].interpolate;
    const d = r.length;
    for (let f = 0; f < d; f++) {
        const m = sz(r[f], u[o], a[o], l[s]);
        !c && m !== t[s].interpolatorOffsets[f] && (c = !0),
        t[s].offset[f] = m
    }
    c && (t[s].interpolate = to(t[s].offset, Fp(r)),
    t[s].interpolatorOffsets = [...t[s].offset]),
    t[s].progress = t[s].interpolate(t[s].current)
}
function uz(e, t=e, n) {
    if (n.x.targetOffset = 0,
    n.y.targetOffset = 0,
    t !== e) {
        let r = t;
        for (; r && r !== e; )
            n.x.targetOffset += r.offsetLeft,
            n.y.targetOffset += r.offsetTop,
            r = r.offsetParent
    }
    n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth,
    n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight,
    n.x.containerLength = e.clientWidth,
    n.y.containerLength = e.clientHeight
}
function cz(e, t, n, r={}) {
    return {
        measure: () => uz(e, r.target, n),
        update: i => {
            tz(e, n, i),
            (r.offset || r.target) && az(e, n, r)
        }
        ,
        notify: () => t(n)
    }
}
const yr = new WeakMap
  , Nd = new WeakMap
  , qo = new WeakMap
  , Od = e => e === document.documentElement ? window : e;
function dz(e, {container: t=document.documentElement, ...n}={}) {
    let r = qo.get(t);
    r || (r = new Set,
    qo.set(t, r));
    const i = Jw()
      , s = cz(t, e, i, n);
    if (r.add(s),
    !yr.has(t)) {
        const l = () => {
            for (const f of r)
                f.measure()
        }
          , a = () => {
            for (const f of r)
                f.update(re.timestamp)
        }
          , u = () => {
            for (const f of r)
                f.notify()
        }
          , c = () => {
            R.read(l, !1, !0),
            R.read(a, !1, !0),
            R.update(u, !1, !0)
        }
        ;
        yr.set(t, c);
        const d = Od(t);
        window.addEventListener("resize", c, {
            passive: !0
        }),
        t !== document.documentElement && Nd.set(t, Xw(t, c)),
        d.addEventListener("scroll", c, {
            passive: !0
        })
    }
    const o = yr.get(t);
    return R.read(o, !1, !0),
    () => {
        var l;
        nt(o);
        const a = qo.get(t);
        if (!a || (a.delete(s),
        a.size))
            return;
        const u = yr.get(t);
        yr.delete(t),
        u && (Od(t).removeEventListener("scroll", u),
        (l = Nd.get(t)) === null || l === void 0 || l(),
        window.removeEventListener("resize", u))
    }
}
function Ld(e, t) {
    Sk(!!(!t || t.current))
}
const fz = () => ({
    scrollX: Ze(0),
    scrollY: Ze(0),
    scrollXProgress: Ze(0),
    scrollYProgress: Ze(0)
});
function _m({container: e, target: t, layoutEffect: n=!0, ...r}={}) {
    const i = fi(fz);
    return (n ? or : w.useEffect)( () => (Ld("target", t),
    Ld("container", e),
    dz( ({x: o, y: l}) => {
        i.scrollX.set(o.current),
        i.scrollXProgress.set(o.progress),
        i.scrollY.set(l.current),
        i.scrollYProgress.set(l.progress)
    }
    , {
        ...r,
        container: (e == null ? void 0 : e.current) || void 0,
        target: (t == null ? void 0 : t.current) || void 0
    })), [e, t, JSON.stringify(r.offset)]),
    i
}
const hz = () => {
    const e = w.useRef(null)
      , [t,n] = w.useState([])
      , [r,i] = w.useState(!1)
      , s = w.useRef()
      , o = w.useRef()
      , l = w.useRef(0)
      , u = 1e3 / 22
      , {scrollYProgress: c} = _m()
      , d = w.useRef(0)
      , f = Se(c, [0, 1], [0, 0]);
    Bw(f, "change", h => {
        d.current = h
    }
    ),
    w.useEffect( () => {
        const h = Object.assign({
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_000.jpg": S0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_001.jpg": P0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_002.jpg": T0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_003.jpg": b0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_004.jpg": N0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_005.jpg": L0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_006.jpg": D0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_007.jpg": R0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_008.jpg": I0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_009.jpg": B0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_010.jpg": U0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_011.jpg": $0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_012.jpg": K0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_013.jpg": Y0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_014.jpg": Z0,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_015.jpg": ev,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_016.jpg": nv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_017.jpg": iv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_018.jpg": ov,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_019.jpg": av,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_020.jpg": cv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_021.jpg": fv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_022.jpg": pv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_023.jpg": gv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_024.jpg": vv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_025.jpg": kv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_026.jpg": wv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_027.jpg": Sv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_028.jpg": Pv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_029.jpg": Tv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_030.jpg": bv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_031.jpg": Nv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_032.jpg": Lv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_033.jpg": Dv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_034.jpg": Rv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_035.jpg": Iv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_036.jpg": Bv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_037.jpg": Uv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_038.jpg": $v,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_039.jpg": Kv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_040.jpg": Yv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_041.jpg": Zv,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_042.jpg": e1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_043.jpg": n1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_044.jpg": i1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_045.jpg": o1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_046.jpg": a1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_047.jpg": c1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_048.jpg": f1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_049.jpg": p1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_050.jpg": g1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_051.jpg": v1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_052.jpg": k1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_053.jpg": w1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_054.jpg": S1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_055.jpg": P1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_056.jpg": T1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_057.jpg": b1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_058.jpg": N1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_059.jpg": L1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_060.jpg": D1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_061.jpg": R1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_062.jpg": I1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_063.jpg": B1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_064.jpg": U1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_065.jpg": $1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_066.jpg": K1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_067.jpg": Y1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_068.jpg": Z1,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_069.jpg": e_,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_070.jpg": n_,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_071.jpg": i_,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_072.jpg": o_,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_073.jpg": a_,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_074.jpg": c_,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_075.jpg": f_,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_076.jpg": p_,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_077.jpg": g_,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_078.jpg": v_,
            "../../assets/hero_section_animation/Whisk_kdnivgz4q2n5e2ml1czzktytiwoirtl1i2yh1sm_079.jpg": k_
        })
          , _ = Object.keys(h).sort( (x, S) => {
            var b, M;
            const P = parseInt(((b = x.match(/_(\d+)\.jpg$/)) == null ? void 0 : b[1]) || 0)
              , z = parseInt(((M = S.match(/_(\d+)\.jpg$/)) == null ? void 0 : M[1]) || 0);
            return P - z
        }
        ).map(x => {
            const S = new Image;
            return S.src = h[x].default,
            S
        }
        );
        Promise.all(_.map(x => new Promise(S => {
            x.complete ? S() : x.onload = S
        }
        ))).then( () => {
            n(_),
            i(!0)
        }
        )
    }
    , []);
    const m = (h, p, _, x) => {
        if (!p)
            return;
        const S = _ * d.current
          , P = p.width / p.height
          , z = _ / x;
        let b, M, H, Z;
        z > P ? (b = _,
        M = _ / P,
        H = 0,
        Z = (x - M) / 2) : (b = x * P,
        M = x,
        H = (_ - b) / 2,
        Z = 0),
        H += S,
        h.clearRect(0, 0, _, x),
        h.save(),
        h.drawImage(p, H, Z, b, M),
        h.restore()
    }
      , v = h => {
        if (o.current != null) {
            const p = h - o.current;
            if (p > u) {
                l.current = (l.current + 1) % t.length;
                const _ = e.current;
                if (_) {
                    const x = _.getContext("2d");
                    m(x, t[l.current], _.width, _.height)
                }
                o.current = h - p % u
            }
        } else
            o.current = h;
        s.current = requestAnimationFrame(v)
    }
    ;
    w.useEffect( () => {
        if (!(!r || t.length === 0))
            return s.current = requestAnimationFrame(v),
            () => cancelAnimationFrame(s.current)
    }
    , [r, t]),
    w.useEffect( () => {
        const h = () => {
            if (e.current && (e.current.width = window.innerWidth,
            e.current.height = window.innerHeight,
            r && t.length > 0)) {
                const p = e.current.getContext("2d");
                m(p, t[l.current], window.innerWidth, window.innerHeight)
            }
        }
        ;
        return window.addEventListener("resize", h),
        h(),
        () => window.removeEventListener("resize", h)
    }
    , [r, t]);
    const k = Se(c, [0, 1], [1, 1.1])
      , C = Se(c, [0, .25, .5, 1], [1, 1, .3, .2])
      , g = Se(c, [0, .25, .5], ["0px", "0px", "4px"]);
    return y.jsxs(se.div, {
        style: {
            scale: k,
            opacity: C,
            filter: `blur(${g})`
        },
        className: "fixed top-0 left-0 w-full h-full -z-10 pointer-events-none will-change-transform",
        children: [y.jsx("div", {
            className: `absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${r ? "opacity-0" : "opacity-100"}`,
            style: {
                backgroundImage: t.length > 0 ? `url(${t[0].src})` : "none",
                filter: "blur(10px)",
                transform: "scale(1.1)"
            }
        }), y.jsx("canvas", {
            ref: e,
            className: `w-full h-full block transition-opacity duration-1000 ${r ? "opacity-100" : "opacity-0"}`
        }), y.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-r from-dark/80 via-dark/50 to-dark/80 pointer-events-none"
        }), y.jsx("div", {
            className: "absolute inset-0 bg-gradient-to-b from-dark/30 via-transparent to-dark/95 pointer-events-none"
        })]
    })
}
  , pz = () => {
    const [e,t] = w.useState(!1);
    w.useEffect( () => {
        const r = () => {
            window.scrollY > 300 ? t(!0) : t(!1)
        }
        ;
        return window.addEventListener("scroll", r),
        () => window.removeEventListener("scroll", r)
    }
    , []),
    w.useEffect( () => {
        document.documentElement.classList.add("dark")
    }
    , []);
    const n = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    ;
    return y.jsx("div", {
        className: "fixed bottom-6 right-6 md:right-10 z-[100] flex flex-col gap-4",
        children: y.jsx(gm, {
            children: e && y.jsx(se.button, {
                initial: {
                    opacity: 0,
                    y: 20,
                    scale: .8
                },
                animate: {
                    opacity: 1,
                    y: 0,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    y: 20,
                    scale: .8
                },
                onClick: n,
                className: "p-3 rounded-full bg-accent/20 border border-accent/50 text-accent hover:bg-accent hover:text-white backdrop-blur-md shadow-lg transition-all duration-300",
                title: "Scroll to Top",
                children: y.jsx(e0, {
                    size: 24
                })
            })
        })
    })
}
  , mz = ({children: e}) => y.jsxs("div", {
    className: "min-h-screen flex flex-col text-[var(--text-main)] font-sans selection:bg-accent selection:text-dark relative transition-colors duration-300",
    children: [y.jsx(hz, {}), y.jsx(x0, {}), y.jsx("main", {
        className: "flex-grow z-10 relative",
        children: e
    }), y.jsx(pz, {}), y.jsx(w0, {})]
})
  , gz = () => {
    const [e,t] = w.useState("")
      , [n,r] = w.useState(!1)
      , [i,s] = w.useState(0)
      , [o,l] = w.useState(150)
      , a = ["HIMANSHU", "Software Engineer", "AI / ML Professional"];
    return w.useEffect( () => {
        const c = setTimeout( () => {
            const d = i % a.length
              , f = a[d];
            t(n ? f.substring(0, e.length - 1) : f.substring(0, e.length + 1)),
            n && l(m => m / 2),
            !n && e === f ? (setTimeout( () => r(!0), 2e3),
            l(150)) : n && e === "" && (r(!1),
            s(i + 1),
            l(150))
        }
        , o);
        return () => clearTimeout(c)
    }
    , [e, n, i, a, o]),
    y.jsxs("section", {
        id: "hero",
        className: "relative w-full h-screen flex items-center justify-center overflow-hidden",
        children: [y.jsx("div", {
            className: "relative z-10 max-w-7xl mx-auto px-6 text-center pointer-events-none",
            children: y.jsxs(se.div, {
                initial: {
                    opacity: 0,
                    y: 30
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    duration: 1,
                    delay: .2
                },
                className: "pointer-events-auto",
                children: [y.jsx("h2", {
                    className: "text-xl md:text-2xl font-medium text-accent mb-4 tracking-wider",
                    children: "HELLO, I'M"
                }), y.jsxs("h1", {
                    className: "text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 tracking-tight min-h-[2.4em] md:min-h-[1.2em]]",
                    children: [" ", y.jsx("span", {
                        className: "gradient-text inline-block",
                        children: e
                    }), y.jsx("span", {
                        className: "animate-pulse text-gray-900 dark:text-white",
                        children: "|"
                    })]
                }), y.jsx("p", {
                    className: "text-lg md:text-2xl text-gray-600 dark:text-gray-300/90 mb-10 max-w-2xl mx-auto font-light leading-relaxed",
                    children: "Building efficient solutions with DSA at the core"
                }), y.jsxs(se.div, {
                    className: "flex flex-col md:flex-row justify-center gap-6",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: .8,
                        delay: .6
                    },
                    children: [y.jsx("a", {
                        href: "#projects",
                        className: "px-8 py-3 bg-accent text-dark font-bold rounded-full hover:bg-accent/90 transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)]",
                        children: "View Projects"
                    }), y.jsx("a", {
                        href: "#contact",
                        className: "px-8 py-3 bg-black/5 dark:bg-white/5 backdrop-blur-sm border border-black/20 dark:border-white/20 text-gray-900 dark:text-white font-medium rounded-full hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/40 dark:hover:border-white/40 transition-all hover:scale-105",
                        children: "Contact Me"
                    })]
                })]
            })
        }), y.jsxs(se.div, {
            className: "absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2",
            animate: {
                y: [0, 10, 0]
            },
            transition: {
                duration: 2,
                repeat: 1 / 0,
                ease: "easeInOut"
            },
            children: [y.jsx("div", {
                className: "w-6 h-10 border-2 border-black/30 dark:border-white/30 rounded-full flex justify-center p-2",
                children: y.jsx("div", {
                    className: "w-1 h-2 bg-accent rounded-full mb-1"
                })
            }), y.jsx(Qh, {
                size: 20,
                className: "text-black/50 dark:text-white/50"
            })]
        })]
    })
}
  , yz = () => y.jsx("section", {
    id: "about",
    className: "min-h-screen flex flex-col justify-center py-20 relative bg-transparent",
    children: y.jsx("div", {
        className: "max-w-7xl mx-auto px-6",
        children: y.jsxs(se.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .6
            },
            children: [y.jsxs("h2", {
                className: "text-3xl md:text-5xl font-heading font-bold mb-12 text-center",
                children: ["About ", y.jsx("span", {
                    className: "gradient-text",
                    children: "Me"
                })]
            }), y.jsx("div", {
  className: "flex flex-col items-center",
  children: y.jsxs("div", {
    className:
      "max-w-3xl space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed glass p-6 md:p-8 rounded-2xl border border-black/5 dark:border-white/5 shadow-2xl backdrop-blur-xl bg-white/50 dark:bg-white/5",
    children: [
      y.jsxs("p", {
        children: [
          "I am a ",
          y.jsx("span", {
            className: "text-accent font-semibold",
            children: "Computer Science student"
          }),
          " with a strong focus on ",
          y.jsx("span", {
            className: "text-accent font-semibold",
            children: "Data Structures & Algorithms"
          }),
          " and ",
          y.jsx("span", {
            className: "text-accent font-semibold",
            children: "problem-solving"
          }),
          "."
        ]
      }),
      y.jsx("p", {
        children:
          "I enjoy breaking down complex problems, optimizing solutions, and writing clean, efficient code."
      }),
      y.jsx("p", {
        children:
          "I consistently practice DSA to strengthen my logical thinking and prepare for technical interviews and real-world challenges."
      })
    ]
  })
})
]
        })
    })
})
  ,vz = [
  {
    category: "Programming Languages",
    items: ["C", "C++", "Java", "JavaScript", "Python", "PHP"]
  },
  {
    category: "Web Technologies",
    items: ["HTML5", "CSS3", "React.js", "Bootstrap", "Node.js"]
  },
  {
    category: "Databases",
    items: ["MySQL", "Database Optimization"]
  },
  {
    category: "AI / Data & Libraries",
    items: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "OpenCV", "DeepFace"]
  },
  {
    category: "APIs & Tools",
    items: ["API Integration", "Postman", "Git", "VS Code", "MySQL Workbench"]
  },
  {
    category: "Specializations",
    items: ["Full-Stack Development", "Data Analysis", "Problem Solving"]
  }
]
  , _z = () => y.jsx("section", {
    id: "skills",
    className: "min-h-screen flex flex-col justify-center py-20 relative bg-transparent",
    children: y.jsx("div", {
        className: "max-w-7xl mx-auto px-6",
        children: y.jsxs(se.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .6
            },
            children: [y.jsxs("h2", {
                className: "text-3xl md:text-5xl font-heading font-bold mb-16 text-center",
                children: ["Technical ", y.jsx("span", {
                    className: "gradient-text",
                    children: "Skills"
                })]
            }), y.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: vz.map( (e, t) => y.jsxs(se.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .5,
                        delay: t * .1
                    },
                    className: "glass p-6 rounded-xl border border-black/5 dark:border-white/5 hover:border-accent/30 transition-colors duration-300 bg-white/50 dark:bg-white/5 backdrop-blur-md",
                    children: [y.jsx("h3", {
                        className: "text-xl font-bold text-accent mb-4 border-b border-black/10 dark:border-white/10 pb-2",
                        children: e.category
                    }), y.jsx("ul", {
                        className: "space-y-2",
                        children: e.items.map( (n, r) => y.jsxs("li", {
                            className: "flex items-center text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors",
                            children: [y.jsx("span", {
                                className: "w-1.5 h-1.5 bg-primary rounded-full mr-2"
                            }), n]
                        }, r))
                    })]
                }, t))
            })]
        })
    })
})
// images
  , kz = "/assets/fa.png"
  , xz = "/assets/rd.png"
  , wz = "/assets/di.png"
  , z = "/assets/el.png"
  , a = "/assets/cr.png"

  , zz = [
  {
    title: "Face Recognition System",
    description:
      "A real-time face recognition system built using advanced computer vision and machine learning techniques, achieving high accuracy and optimized performance for multi-face detection.",
    tags: ["Python", "OpenCV", "DeepFace", "NumPy", "Pandas", "Computer Vision"],
    links: {
      github: "#",
      live: "#"
    },
    image: kz,
    status: "Completed"
  },
  {
    title: "ReadyGo – Travel Platform",
    description:
      "A full-stack travel coordination platform designed to simplify bookings and planning through a responsive UI, optimized backend, and interactive user experience.",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    links: {
      github: "#",
      live: "#"
    },
    image: xz,
    status: "Completed"
  },
  {
    title: "Disease Prediction System",
    description:
      "A machine learning-powered healthcare application that predicts disease risk based on patient data, improving early diagnosis through data analysis and model optimization.",
    tags: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Streamlit", "Machine Learning"],
    links: {
      github: "#",
      live: "#"
    },
    image: wz,
    status: "Completed"
  },
  {
    title: "E-Learning Platform",
    description:
      "A comprehensive self-learning platform with gamified modules, optimized database performance, and seamless multimedia delivery for large-scale user engagement.",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    links: {
      github: "#",
      live: "#"
    },
    image: z,
    status: "Completed"
  },
  {
    title: "Courier Karo",
    description:
      "A web-based courier service platform focused on delivery optimization, secure transactions, and scalable logistics architecture. Patent work in progress.",
    tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "API Integration"],
    links: {
      github: "#",
      live: "#"
    },
    image: a,
    status: "In Progress"
  }
]

  , Sz = () => y.jsx("section", {
    id: "projects",
    className: "min-h-screen flex flex-col justify-center py-20 relative bg-transparent",
    children: y.jsx("div", {
        className: "max-w-7xl mx-auto px-6",
        children: y.jsxs(se.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            whileInView: {
                opacity: 1,
                y: 0
            },
            viewport: {
                once: !0
            },
            transition: {
                duration: .6
            },
            children: [y.jsxs("h2", {
                className: "text-3xl md:text-5xl font-heading font-bold mb-16 text-center",
                children: ["Featured ", y.jsx("span", {
                    className: "gradient-text",
                    children: "Projects"
                })]
            }), y.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: zz.map( (e, t) => y.jsxs(se.div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: !0
                    },
                    transition: {
                        duration: .5,
                        delay: t * .1
                    },
                    className: "group relative rounded-2xl overflow-hidden glass hover:-translate-y-2 transition-transform duration-300 border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-md",
                    children: [y.jsxs("div", {
                        className: "h-48 w-full relative overflow-hidden",
                        children: [y.jsx("img", {
                            src: e.image,
                            alt: e.title,
                            className: "w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        }), y.jsx("div", {
                            className: "absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"
                        }), e.status !== "Completed" && y.jsx("div", {
                            className: "absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-white border border-white/10 shadow-lg z-10",
                            children: e.status
                        })]
                    }), y.jsxs("div", {
                        className: "p-6",
                        children: [y.jsx("h3", {
                            className: "text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-accent transition-colors",
                            children: e.title
                        }), y.jsx("p", {
                            className: "text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3",
                            children: e.description
                        }), y.jsx("div", {
                            className: "flex flex-wrap gap-2 mb-6",
                            children: e.tags.map( (n, r) => y.jsx("span", {
                                className: "text-xs px-2 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300",
                                children: n
                            }, r))
                        }), y.jsxs("div", {
                            className: "flex justify-between items-center pt-4 border-t border-black/10 dark:border-white/10",
                            children: [y.jsxs("a", {
                                href: e.links.github,
                                className: "flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-accent dark:hover:text-white transition-colors",
                                children: [y.jsx(Hs, {
                                    size: 16,
                                    className: "mr-2"
                                }), " Code"]
                            }), y.jsxs("a", {
                                href: e.links.live,
                                className: "flex items-center text-sm text-accent hover:text-sky-400 dark:hover:text-white transition-colors",
                                children: [y.jsx(l0, {
                                    size: 16,
                                    className: "mr-2"
                                }), " Live Demo"]
                            })]
                        })]
                    })]
                }, t))
            })]
        })
    })
})
  , jt = [
  {
    role: "B.Tech in Computer Science & Engineering",
    company: "COER University, Roorkee",
    period: "2022 - 2026",
    chapters: [
      "Strong foundation in computer science and programming.",
      "Focused on problem-solving and core system concepts.",
      "CGPA: 8.08 / 10 with consistent academic performance."
    ]
  },
  {
    role: "Community Manager Intern",
    company: "Nblik (Virtual)",
    period: "May 2023 - Jun 2023",
    chapters: [
      "Improved community engagement and retention.",
      "Managed content and user interactions.",
      "Automated workflows for better efficiency."
    ]
  },
   {
    role: "Java Development Intern",
    company: "LetsGrowMore (Virtual)",
    period: "Nov 2023 - Dec 2023",
    chapters: [
      "Developed Java applications using OOP principles.",
      "Improved performance through algorithm optimization.",
      "Applied design patterns for cleaner architecture."
    ]
  },
   {
    role: "Web Development Intern",
    company: "Bharat Intern (Virtual)",
    period: "Jul 2024 - Aug 2024",
    chapters: [
      "Built responsive web apps including a Netflix clone.",
      "Developed real-time utility applications.",
      "Optimized UI performance and page load speed."
    ]
  }
]
  , jz = () => {
    const e = w.useRef(null)
      , {scrollYProgress: t} = _m({
        target: e,
        offset: ["start start", "end end"]
    })
      , n = Fw(t, {
        damping: 20,
        stiffness: 100
    });
    Se(n, [0, .1], [0, 1]),
    Se(n, [0, .15], [.8, 1]),
    Se(n, [0, .15], [100, 0]);
    const [r,i] = w.useState(0)
      , s = Se(n, [.75, .9], [1, .5])
      , o = Se(n, [.75, .9], [0, -300])
      , l = Se(n, [.85, .95], [1, 0])
      , a = Se(n, [.75, .9], [0, 1])
      , u = Se(n, [.75, .9], [.8, 1]);
    return w.useEffect( () => {
        const c = n.on("change", d => {
            if (d >= .15 && d < .75) {
                const m = (d - .15) / .6
                  , v = Math.floor(m * jt.length);
                i(Math.min(Math.max(v, 0), jt.length - 1))
            }
        }
        );
        return () => c()
    }
    , [n]),
    y.jsx("section", {
        ref: e,
        id: "experience",
        className: "relative h-[300vh] bg-transparent",
        children: y.jsxs("div", {
            className: "sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden perspective-1000",
            children: [y.jsx(se.div, {
                style: {
                    opacity: l,
                    scale: s,
                    y: o
                },
                className: "relative z-20 w-auto h-[80vh] aspect-[3/4] md:aspect-[3/4] flex items-center justify-center",
                children: y.jsxs("div", {
                    className: "relative z-20 w-auto h-[70vh] md:h-[80vh] aspect-[3/4] rounded-[2.5rem] glass border-2 border-black/10 dark:border-white/10 bg-white/40 dark:bg-gray-900/40 backdrop-blur-xl flex flex-col shadow-[0_0_40px_rgba(6,182,212,0.3)] overflow-hidden",
                    children: [y.jsx("div", {
                        className: "absolute inset-0 rounded-[2.5rem] border border-black/5 dark:border-white/5 pointer-events-none"
                    }), y.jsxs("div", {
                        className: "relative z-10 p-8 border-b border-black/5 dark:border-white/5 flex justify-between items-center bg-white/50 dark:bg-white/5",
                        children: [y.jsxs("div", {
                            children: [y.jsx("h2", {
                                className: "text-xl md:text-2xl font-heading font-bold gradient-text tracking-wide",
                                children: "HIMANSHU'S JOURNEY"
                            }), y.jsxs("p", {
                                className: "text-[10px] text-accent uppercase tracking-widest mt-1",
                                children: ["Chapter ", r + 1, " / ", jt.length]
                            })]
                        }), y.jsxs("div", {
                            className: "flex gap-2",
                            children: [y.jsx("span", {
                                className: "w-2 h-2 rounded-full bg-red-500/50"
                            }), y.jsx("span", {
                                className: "w-2 h-2 rounded-full bg-yellow-500/50"
                            }), y.jsx("span", {
                                className: "w-2 h-2 rounded-full bg-green-500/50"
                            })]
                        })]
                    }), y.jsx("div", {
                        className: "flex-1 relative p-6 md:p-8 flex items-center justify-center",
                        children: y.jsx(gm, {
                            mode: "wait",
                            children: y.jsxs(se.div, {
                                initial: {
                                    opacity: 0,
                                    scale: .95,
                                    filter: "blur(10px)"
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1,
                                    filter: "blur(0px)"
                                },
                                exit: {
                                    opacity: 0,
                                    scale: 1.05,
                                    filter: "blur(10px)"
                                },
                                transition: {
                                    duration: .5,
                                    ease: "easeOut"
                                },
                                className: "text-center w-full",
                                children: [y.jsx("h3", {
                                    className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2",
                                    children: jt[r].role
                                }), y.jsxs("p", {
                                    className: "text-lg text-accent mb-8 flex items-center justify-center gap-2",
                                    children: [y.jsx(n0, {
                                        size: 18
                                    }), " ", jt[r].company]
                                }), y.jsx("div", {
                                    className: "space-y-3 text-left",
                                    children: jt[r].chapters.map( (c, d) => y.jsxs(se.div, {
                                        initial: {
                                            opacity: 0,
                                            y: 10
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        transition: {
                                            delay: .2 + d * .1
                                        },
                                        className: "glass p-4 rounded-xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 flex items-start gap-3 hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
                                        children: [y.jsx("span", {
                                            className: "w-1.5 h-1.5 mt-2 bg-accent rounded-full shrink-0 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                                        }), y.jsx("span", {
                                            className: "text-sm text-gray-700 dark:text-gray-200 leading-relaxed font-light",
                                            children: c
                                        })]
                                    }, d))
                                }), y.jsxs("p", {
                                    className: "text-xs text-gray-500 mt-8 flex items-center justify-center gap-2 font-mono",
                                    children: [y.jsx(i0, {
                                        size: 12
                                    }), " ", jt[r].period]
                                })]
                            }, r)
                        })
                    }), y.jsx("div", {
                        className: "h-1.5 bg-white/5 shrink-0 relative",
                        children: y.jsx(se.div, {
                            className: "absolute left-0 top-0 bottom-0 bg-gradient-to-r from-accent/50 to-accent shadow-[0_0_15px_rgba(6,182,212,0.6)]",
                            style: {
                                width: Se(n, [.15, .75], ["0%", "100%"])
                            }
                        })
                    })]
                })
            }), y.jsx(se.div, {
                style: {
                    opacity: a,
                    scale: u
                },
                className: "absolute inset-0 z-10 flex items-center justify-center pointer-events-none",
                children: y.jsxs("div", {
                    className: "max-w-7xl w-full px-6 pointer-events-auto flex flex-col items-center mt-20",
                    children: [y.jsxs("h3", {
                        className: "text-4xl font-heading font-bold text-center mb-16 text-gray-900 dark:text-white text-shadow-glow",
                        children: ["Full Journey ", y.jsx("span", {
                            className: "gradient-text",
                            children: "Roadmap"
                        })]
                    }), y.jsxs("div", {
                        className: "relative w-full",
                        children: [y.jsx("div", {
                            className: "absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/50 to-transparent -translate-y-1/2 hidden lg:block"
                        }), y.jsx("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative",
                            children: jt.map( (c, d) => y.jsxs(se.div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                whileInView: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    delay: d * .2
                                },
                                className: "relative group",
                                children: [y.jsx("div", {
                                    className: "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-dark border-2 border-accent rounded-full z-10 group-hover:bg-accent group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.5)] hidden lg:block"
                                }), y.jsxs("div", {
                                    className: `glass p-6 rounded-xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors backdrop-blur-md relative z-20 
                                            ${d % 2 === 0 ? "lg:mt-12" : "lg:mb-12 lg:-mt-12"}
                                        `,
                                    children: [y.jsx("div", {
                                        className: `absolute left-1/2 -translate-x-1/2 w-0.5 bg-accent/30 hidden lg:block h-12 
                                                ${d % 2 === 0 ? "-top-12" : "-bottom-12"}
                                            `
                                    }), y.jsx("h4", {
                                        className: "font-bold text-gray-900 dark:text-white text-lg mb-1",
                                        children: c.role
                                    }), y.jsx("p", {
                                        className: "text-accent text-sm font-medium mb-3",
                                        children: c.company
                                    }), y.jsx("p", {
                                        className: "text-gray-600 dark:text-gray-400 text-xs mb-3",
                                        children: c.period
                                    }), y.jsx("ul", {
                                        className: "space-y-1",
                                        children: c.chapters.slice(0, 2).map( (f, m) => y.jsxs("li", {
                                            className: "text-[10px] text-gray-600 dark:text-gray-400",
                                            children: ["• ", f]
                                        }, m))
                                    })]
                                })]
                            }, d))
                        })]
                    })]
                })
            }), y.jsxs(se.div, {
                style: {
                    opacity: Se(n, [.05, .15], [1, 0])
                },
                className: "absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2 pointer-events-none",
                children: [y.jsx("span", {
                    className: "text-xs tracking-widest uppercase",
                    children: "Start Journey"
                }), y.jsx(Qh, {
                    className: "animate-bounce"
                })]
            })]
        })
    })
}
  , Pz = () => {
    const [e,t] = w.useState({
        name: "",
        email: "",
        message: ""
    })
      , [n,r] = w.useState(!1) //*** */
      ,  i = (o) => {
  o.preventDefault();
  r(true);

  const formData = new FormData(o.target);

  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  })
    .then(() => {
      t({
        name: "",
        email: "",
        message: ""
      });
      r(false);
      alert("Message sent successfully ");
    })
    .catch(() => {
      r(false);
      alert("Something went wrong ");
    });
} //*** */
      , s = o => {
        t({
            ...e,
            [o.target.name]: o.target.value
        })
    }
    ;
    return y.jsxs("section", {
        id: "contact",
        className: "min-h-screen flex flex-col justify-center py-20 relative bg-transparent",
        children: [y.jsx("div", {
            className: "absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"
        }), y.jsx("div", {
            className: "max-w-7xl mx-auto px-6 relative z-10",
            children: y.jsxs(se.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                whileInView: {
                    opacity: 1,
                    y: 0
                },
                viewport: {
                    once: !0
                },
                transition: {
                    duration: .6
                },
                children: [y.jsxs("h2", {
                    className: "text-3xl md:text-5xl font-heading font-bold mb-16 text-center",
                    children: ["Get In ", y.jsx("span", {
                        className: "gradient-text",
                        children: "Touch"
                    })]
                }), y.jsxs("div", {
                    className: "grid grid-cols-1 lg:grid-cols-2 gap-12",
                    children: [y.jsxs("div", {
                        className: "space-y-8",
                        children: [y.jsx("h3", {
                            className: "text-2xl font-bold text-gray-900 dark:text-white",
                            children: "Let’s build something meaningful."
                        }), y.jsx("p", {
                            className: "text-gray-600 dark:text-gray-400 leading-relaxed",
                            children: "I’m always open to discussing opportunities, collaborations, and innovative ideas. Whether you have a project in mind or just want to chat about the latest in AI and Security, feel free to reach out."
                        }), y.jsxs("div", {
                            className: "space-y-6 mt-8",
                            children: [y.jsxs("div", {
                                className: "flex items-center space-x-4",
                                children: [y.jsx("div", {
                                    className: "w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-accent",
                                    children: y.jsx($a, {
                                        size: 20
                                    })
                                }), y.jsxs("div", {
                                    children: [y.jsx("p", {
                                        className: "text-sm text-gray-500",
                                        children: "Email"
                                    }), y.jsx("p", {
                                        className: "text-gray-900 dark:text-white font-medium",
                                        children: "himanshu.s.bisht94@gmail.com"
                                    })]
                                })]
                            }), y.jsxs("div", {
                                className: "flex items-center space-x-4",
                                children: [y.jsx("div", {
                                    className: "w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-secondary",
                                    children: y.jsx(Hs, {
                                        size: 20
                                    })
                                }), y.jsxs("div", {
                                    children: [y.jsx("p", {
                                        className: "text-sm text-gray-500",
                                        children: "GitHub"
                                    }), y.jsx("p", {
                                        className: "text-gray-900 dark:text-white font-medium",
                                        children: "https://github.com/7himanshubisht7"
                                    })]
                                })]
                            }), y.jsxs("div", {
                                className: "flex items-center space-x-4",
                                children: [y.jsx("div", {
                                    className: "w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center text-primary",
                                    children: y.jsx(f0, {
                                        size: 20
                                    })
                                }), y.jsxs("div", {
                                    children: [y.jsx("p", {
                                        className: "text-sm text-gray-500",
                                        children: "Location"
                                    }), y.jsx("p", {
                                        className: "text-gray-900 dark:text-white font-medium",
                                        children: "Available Remote / Worldwide"
                                    })]
                                })]
                            })]
                        })]
                    }), y.jsx("div", {
                        className: "glass p-8 rounded-2xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-white/5 backdrop-blur-md",
                        children: y.jsxs("form", {
                                    name: "contact",
                                    method: "POST",
                                    "data-netlify": "true",
                                    "data-netlify-honeypot": "bot-field",
                                    onSubmit: i,
                                    className: "space-y-6",
                                children: [
                                y.jsx("input", {
                                type: "hidden",
                                name: "form-name",
                                value: "contact"
                                }),

                                y.jsx("input", {
                                type: "hidden",
                                name: "bot-field"
                                }),

                                y.jsxs("div", {
                                children: [y.jsx("label", {
                                    htmlFor: "name",
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2",
                                    children: "Name"
                                }), y.jsx("input", {
                                    type: "text",
                                    id: "name",
                                    name: "name",
                                    value: e.name,
                                    onChange: s,
                                    className: "w-full bg-white dark:bg-dark/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-400 dark:placeholder-gray-600",
                                    placeholder: "Your Name",
                                    required: !0
                                })]
                            }), y.jsxs("div", {
                                children: [y.jsx("label", {
                                    htmlFor: "email",
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2",
                                    children: "Email"
                                }), y.jsx("input", {
                                    type: "email",
                                    id: "email",
                                    name: "email",
                                    value: e.email,
                                    onChange: s,
                                    className: "w-full bg-white dark:bg-dark/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-400 dark:placeholder-gray-600",
                                    placeholder: "your@email.com",
                                    required: !0
                                })]
                            }), y.jsxs("div", {
                                children: [y.jsx("label", {
                                    htmlFor: "message",
                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-400 mb-2",
                                    children: "Message"
                                }), y.jsx("textarea", {
                                    id: "message",
                                    name: "message",
                                    value: e.message,
                                    onChange: s,
                                    rows: "4",
                                    className: "w-full bg-white dark:bg-dark/50 border border-black/10 dark:border-white/10 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder-gray-400 dark:placeholder-gray-600 resize-none",
                                    placeholder: "Tell me about your project...",
                                    required: !0
                                })]
                            }), y.jsxs("button", {
                                type: "submit",
                                disabled: n,
                                className: "w-full bg-gradient-to-r from-primary to-accent text-dark font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-accent/25 transition-all flex items-center justify-center transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed",
                                children: [y.jsx(se.div, {
                                    animate: n ? {
                                        x: [0, 100, -100, 0],
                                        opacity: [1, 0, 0, 1]
                                    } : {},
                                    transition: {
                                        duration: 1.5,
                                        times: [0, .4, .41, 1]
                                    },
                                    className: "mr-2",
                                    children: y.jsx(g0, {
                                        size: 18
                                    })
                                }), n ? "Sending..." : "Send Message"]
                            })]
                        })
                    })]
                })]
            })
        })]
    })
}
;
function Cz() {
    return y.jsxs(mz, {
        children: [y.jsx(gz, {}), y.jsx(yz, {}), y.jsx(_z, {}), y.jsx(Sz, {}), y.jsx(jz, {}), y.jsx(Pz, {})]
    })
}
Uo.createRoot(document.getElementById("root")).render(y.jsx(ta.StrictMode, {
    children: y.jsx(Cz, {})
}));
