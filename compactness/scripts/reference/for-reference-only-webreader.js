/*! For license information please see nr-webreader-0.10.2.js.LICENSE */ ! function(e) {
    var n = {};

    function r(t) {
        if (n[t]) return n[t].exports;
        var a = n[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(a.exports, a, a.exports, r), a.l = !0, a.exports
    }
    r.m = e, r.c = n, r.d = function(e, n, t) {
        r.o(e, n) || Object.defineProperty(e, n, {
            enumerable: !0,
            get: t
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, n) {
        if (1 & n && (e = r(e)), 8 & n) return e;
        if (4 & n && "object" == typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (r.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & n && "string" != typeof e)
            for (var a in e) r.d(t, a, function(n) {
                return e[n]
            }.bind(null, a));
        return t
    }, r.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(n, "a", n), n
    }, r.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }, r.p = "", r(r.s = 29)
}([function(e, n, r) {
    e.exports = r(12)
}, function(e, n) {
    function r(e, n, r, t, a, i, o) {
        try {
            var s = e[i](o),
                d = s.value
        } catch (e) {
            return void r(e)
        }
        s.done ? n(d) : Promise.resolve(d).then(t, a)
    }
    e.exports = function(e) {
        return function() {
            var n = this,
                t = arguments;
            return new Promise((function(a, i) {
                var o = e.apply(n, t);

                function s(e) {
                    r(o, a, i, s, d, "next", e)
                }

                function d(e) {
                    r(o, a, i, s, d, "throw", e)
                }
                s(void 0)
            }))
        }
    }
}, function(e, n) {
    function r(e) {
        return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function t(n) {
        return "function" == typeof Symbol && "symbol" === r(Symbol.iterator) ? e.exports = t = function(e) {
            return r(e)
        } : e.exports = t = function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : r(e)
        }, t(n)
    }
    e.exports = t
}, function(e, n) {
    e.exports = {
        ttsEndpoint: "https://d27pjvtqve9u9l.cloudfront.net/prod/tts",
        securityEndpoint: "https://d27pjvtqve9u9l.cloudfront.net/prod/",
        configEndpoint: "https://d27pjvtqve9u9l.cloudfront.net/prod/"
    }
}, function(e, n, r) {
    "use strict";
    e.exports = function(e) {
        var n = [];
        return n.toString = function() {
            return this.map((function(n) {
                var r = function(e, n) {
                    var r = e[1] || "",
                        t = e[3];
                    if (!t) return r;
                    if (n && "function" == typeof btoa) {
                        var a = (o = t, s = btoa(unescape(encodeURIComponent(JSON.stringify(o)))), d = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s), "/*# ".concat(d, " */")),
                            i = t.sources.map((function(e) {
                                return "/*# sourceURL=".concat(t.sourceRoot).concat(e, " */")
                            }));
                        return [r].concat(i).concat([a]).join("\n")
                    }
                    var o, s, d;
                    return [r].join("\n")
                }(n, e);
                return n[2] ? "@media ".concat(n[2], "{").concat(r, "}") : r
            })).join("")
        }, n.i = function(e, r) {
            "string" == typeof e && (e = [
                [null, e, ""]
            ]);
            for (var t = {}, a = 0; a < this.length; a++) {
                var i = this[a][0];
                null != i && (t[i] = !0)
            }
            for (var o = 0; o < e.length; o++) {
                var s = e[o];
                null != s[0] && t[s[0]] || (r && !s[2] ? s[2] = r : r && (s[2] = "(".concat(s[2], ") and (").concat(r, ")")), n.push(s))
            }
        }, n
    }
}, function(e, n, r) {
    "use strict";
    var t, a = {},
        i = function() {
            return void 0 === t && (t = Boolean(window && document && document.all && !window.atob)), t
        },
        o = function() {
            var e = {};
            return function(n) {
                if (void 0 === e[n]) {
                    var r = document.querySelector(n);
                    if (window.HTMLIFrameElement && r instanceof window.HTMLIFrameElement) try {
                        r = r.contentDocument.head
                    } catch (e) {
                        r = null
                    }
                    e[n] = r
                }
                return e[n]
            }
        }();

    function s(e, n) {
        for (var r = [], t = {}, a = 0; a < e.length; a++) {
            var i = e[a],
                o = n.base ? i[0] + n.base : i[0],
                s = {
                    css: i[1],
                    media: i[2],
                    sourceMap: i[3]
                };
            t[o] ? t[o].parts.push(s) : r.push(t[o] = {
                id: o,
                parts: [s]
            })
        }
        return r
    }

    function d(e, n) {
        for (var r = 0; r < e.length; r++) {
            var t = e[r],
                i = a[t.id],
                o = 0;
            if (i) {
                for (i.refs++; o < i.parts.length; o++) i.parts[o](t.parts[o]);
                for (; o < t.parts.length; o++) i.parts.push(b(t.parts[o], n))
            } else {
                for (var s = []; o < t.parts.length; o++) s.push(b(t.parts[o], n));
                a[t.id] = {
                    id: t.id,
                    refs: 1,
                    parts: s
                }
            }
        }
    }

    function l(e) {
        var n = document.createElement("style");
        if (void 0 === e.attributes.nonce) {
            var t = r.nc;
            t && (e.attributes.nonce = t)
        }
        if (Object.keys(e.attributes).forEach((function(r) {
                n.setAttribute(r, e.attributes[r])
            })), "function" == typeof e.insert) e.insert(n);
        else {
            var a = o(e.insert || "head");
            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            a.appendChild(n)
        }
        return n
    }
    var c, p = (c = [], function(e, n) {
        return c[e] = n, c.filter(Boolean).join("\n")
    });

    function u(e, n, r, t) {
        var a = r ? "" : t.css;
        if (e.styleSheet) e.styleSheet.cssText = p(n, a);
        else {
            var i = document.createTextNode(a),
                o = e.childNodes;
            o[n] && e.removeChild(o[n]), o.length ? e.insertBefore(i, o[n]) : e.appendChild(i)
        }
    }

    function m(e, n, r) {
        var t = r.css,
            a = r.media,
            i = r.sourceMap;
        if (a && e.setAttribute("media", a), i && btoa && (t += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleSheet) e.styleSheet.cssText = t;
        else {
            for (; e.firstChild;) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(t))
        }
    }
    var g = null,
        h = 0;

    function b(e, n) {
        var r, t, a;
        if (n.singleton) {
            var i = h++;
            r = g || (g = l(n)), t = u.bind(null, r, i, !1), a = u.bind(null, r, i, !0)
        } else r = l(n), t = m.bind(null, r, n), a = function() {
            ! function(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e)
            }(r)
        };
        return t(e),
            function(n) {
                if (n) {
                    if (n.css === e.css && n.media === e.media && n.sourceMap === e.sourceMap) return;
                    t(e = n)
                } else a()
            }
    }
    e.exports = function(e, n) {
        (n = n || {}).attributes = "object" == typeof n.attributes ? n.attributes : {}, n.singleton || "boolean" == typeof n.singleton || (n.singleton = i());
        var r = s(e, n);
        return d(r, n),
            function(e) {
                for (var t = [], i = 0; i < r.length; i++) {
                    var o = r[i],
                        l = a[o.id];
                    l && (l.refs--, t.push(l))
                }
                e && d(s(e, n), n);
                for (var c = 0; c < t.length; c++) {
                    var p = t[c];
                    if (0 === p.refs) {
                        for (var u = 0; u < p.parts.length; u++) p.parts[u]();
                        delete a[p.id]
                    }
                }
            }
    }
}, function(e, n) {
    e.exports = '\x3c!-- Google Fonts CSS --\x3e\n\x3c!-- <link href="https://fonts.googleapis.com/css?family=Lato:300,300italic,400,400italic,500,700,700italic"\nrel="stylesheet" type="text/css" /> --\x3e\n<meta name="viewport"\n    content="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no">\n<link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" type="text/css" />\n\x3c!-- <link rel="stylesheet" href="reader_error.css" type="text/css" > --\x3e\n\n\n\x3c!-- new design test --\x3e\n<div id="nr-webreader-error">\n    <div class="nr-webreader-error-image">\n        <i class="material-icons">\n            error_outline\n        </i>\n    </div>\n    <div class="nr-webreader-error-message"  id="nr-webreader-error-message">\n        Error!\n    </div>\n</div>'
}, function(e, n) {
    e.exports = '\x3c!-- Google Fonts CSS --\x3e\n\x3c!-- <link href="https://fonts.googleapis.com/css?family=Lato:300,300italic,400,400italic,500,700,700italic"\nrel="stylesheet" type="text/css" /> --\x3e\n<meta name="viewport"\n    content="width=device-width,initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, shrink-to-fit=no">\n<link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" type="text/css" />\n\x3c!-- <link rel="stylesheet" href="reader_error.css" type="text/css" > --\x3e\n<style>\n     #nr-webreader-sandbox {\n         position: fixed;\n         top: 30px;\n         right: 30px;\n         width: auto;\n         height: auto;\n         padding: 10px;\n         background: #ffc107;\n         color: black;\n         opacity: 0.9;\n         text-align: center;\n         font-size: 12px;\n         font-weight: bold;\n         text-transform: uppercase;\n         border-radius: 6px;\n     }\n</style>\n\n\x3c!-- new design test --\x3e\n<div id="nr-webreader-sandbox">\n    <div>\n        Test Mode\n    </div>\n</div>'
}, function(e, n) {
    e.exports = '\x3c!-- Google Fonts CSS --\x3e\n\x3c!-- <link href="https://fonts.googleapis.com/css?family=Lato:300,300italic,400,400italic,500,700,700italic"\nrel="stylesheet" type="text/css" /> --\x3e\n<meta name="viewport" content="width=device-width,initial-scale=1, maximum-scale=5, minimum-scale=1, shrink-to-fit=no">\n\x3c!-- <link href="https://fonts.googleapis.com/css?family=Material+Icons" rel="stylesheet" type="text/css" /> --\x3e\n\n\n\x3c!-- new design test --\x3e\n<div id="nr-webreader">\n    <div class="nr-webreader-trigger-container" id="nr-webreader-trigger-container">\n        <div class="nr-webreader-trigger" id="nr-webreader-icons">\n\n            <input type="checkbox" class="nr-webreader-check nr-webreader-trigger-check"\n                id="nr-webreader-trigger-check" />\n\n            <label style="margin: 0px;" for="nr-webreader-trigger-check" id="nr-webreader-trigger">\n                <div class="nr-webreader-trigger-icon">\n                    <div class="nr-webreader-progress-circle" id="nr-webreader-progress-circle-outside">\n                        <div class="progress-circle" id="test" style="pointer-events: none;">\n                            <div class="left-half-clipper">\n                                <div class="first50-bar"></div>\n                                <div class="value-bar"></div>\n                            </div>\n                        </div>\n                    </div>\n                    \x3c!-- <object aria-label="Webreader Icon" class="nr-webreader-trigger-image" id="nr-webreader-icon-img" style="pointer-events: none;"></object> --\x3e\n                    <div id="nr-webreader-icon-img-preload" style="pointer-events: none;">\n                    </div>\n                    <div class="nr-webreader-trigger-image" id=\'circle-mask\' tabindex="0"></div>\n                </div>\n                <div class="nr-webreader-trigger-textbox" id="nr-webreader-trigger-textbox" tabindex="0">\n                    <div class="nr-webreader-trigger-text" id="nr-webreader-trigger-text">Listen</div>\n                </div>\n            </label>\n\n\n            <div class="nr-webreader-trigger-bar" id="nr-webreader-trigger-bar" tabindex="-1">\n                <div class="nr-webreader-trigger-error" id="nr-webreader-trigger-error">\n                    <div class="nr-webreader-trigger-error-image" id="nr-webreader-trigger-error-image">\n                        !\n                    </div>\n                    <div class="nr-webreader-trigger-error-text" id="nr-webreader-trigger-error-text">Error Message\n                    </div>\n                    <button class="nr-webreader-btn nr-webreader-trigger-error-close"\n                        id="nr-webreader-trigger-error-close">\n                        \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/close.svg"\n                            alt="minimize"> --\x3e\n                        <svg>\n                            <use xlink:href="#close"></use>\n                        </svg>\n                    </button>\n                </div>\n                <div class="nr-webreader-trigger-bar-content">\n                    <button class="nr-webreader-btn nr-webreader-btn-control" id="nr-webreader-backward-btn">\n                        \x3c!-- <img id="nr-webreader-backward-img"\n                            src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/rewind2.svg"\n                            alt="Rewind"> --\x3e\n                        <svg>\n                            <use xlink:href="#rewind2"></use>\n                        </svg>\n                    </button>\n                    <button class="nr-webreader-btn nr-webreader-btn-play" id="nr-webreader-read-btn">\n                        \x3c!-- <img id="nr-webreader-btn-change"\n                            src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/play2.svg"\n                            alt="Play/Pause"> --\x3e\n                        <svg id="nr-webreader-btn-change" alt="Play/Pause">\n                            <use xlink:href="#play2"></use>\n                        </svg>\n                        \x3c!-- <svg >\n                            <use xlink:href="#pause2"></use>\n                        </svg> --\x3e\n                    </button>\n                    <button class="nr-webreader-btn nr-webreader-btn-control" id="nr-webreader-forward-btn">\n                        \x3c!-- <img id="nr-webreader-forward-img"\n                            src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/forward2.svg"\n                            alt="Forward"> --\x3e\n                        <svg>\n                            <use xlink:href="#forward2"></use>\n                        </svg>\n                    </button>\n                    <label class="nr-webreader-btn" for="nr-webreader-frame-check" id="nr-webreader-frame-trigger"\n                        tabindex="0">\n                        \x3c!-- <img id="nr-webreader-settings-trigger-img"\n                                                src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/max2.svg"\n                                                alt="Maximize"> --\x3e\n                        <svg>\n                            <use xlink:href="#max2"></use>\n                        </svg>\n                    </label>\n                </div>\n                <div class="nr-webreader-btn nr-webreader-drag-handler">\n                    \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/drag_dots.svg"\n                                        alt="Drag"> --\x3e\n                    <svg>\n                        <use xlink:href="#drag_dots"></use>\n                    </svg>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <input type="checkbox" class="nr-webreader-check" id="nr-webreader-frame-check" />\n    <div class="nr-webreader-frame" id="nr-webreader-settings-menu">\n        <div class="nr-webreader-frame-content" id="nr-webreader-settings-content">\n            <input type="checkbox" class="nr-webreader-check" id="nr-webreader-textbox-check" />\n\n            <div class="nr-webreader-frame-menu" id="nr-webreader-frame-menu">\n                <div class="nr-webreader-frame-textbox">\n                    <div class="nr-webreader-textbox-header">\n                        <button class="nr-webreader-btn" id="nr-webreader-cc-zoomOut">\n                            \x3c!-- <img id="nr-webreader-cc-zoomOut-img"\n                                                    src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/bar_lowercase.svg"\n                                                    alt="increase font size"> --\x3e\n                            <svg>\n                                <use xlink:href="#bar_lowercase"></use>\n                            </svg>\n                        </button>\n                        <button class="nr-webreader-btn" id="nr-webreader-cc-zoomIn">\n                            \x3c!-- <img id="nr-webreader-cc-zoomIn-img"\n                                                    src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/bar_uppercase.svg"\n                                                    alt="decrease font size"> --\x3e\n                            <svg>\n                                <use xlink:href="#bar_uppercase"></use>\n                            </svg>\n                        </button>\n                        <button class="nr-webreader-btn" id="nr-webreader-locate-btn">\n                            \x3c!-- <img id="nr-webreader-locate-img"\n                                                    src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/bar_location.svg"\n                                                    alt="relocate reading"> --\x3e\n                            <svg>\n                                <use xlink:href="#bar_location"></use>\n                            </svg>\n                        </button>\n                    </div>\n                    <div class="nr-webreader-textbox" id="nr-webreader-cc-textbox" tabindex="0">\n                    </div>\n                </div>\n                <div class="nr-webreader-frame-settings" tabindex="-1" id="nr-webreader-settings-container">\n                    <div class="nr-webreader-settings-header">Settings</div>\n\n                    <div class="nr-webreader-settings-row-voice">\n                        <div class="nr-webreader-settings-label">Voice Name:</div>\n                        <div class="nr-webreader-settings-controls">\n                            <div class="nr-webreader-dropdown">\n                                <label class="nr-webreader-btn nr-webreader-dropdown-btn" for="nr-webreader-voice-check"\n                                    tabindex="0" id="nr-webreader-voice-menu-btn">\n                                    <div class="nr-sprite nr-webreader-dropdown-icon" id="nr-webreader-voice-flag"></div>\n                                    \x3c!-- <img class="nr-webreader-dropdown-icon" id="nr-webreader-voice-flag"\n                                        src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/arrow_down.svg"\n                                        alt="flag"> --\x3e\n                                    <div class="nr-webreader-dropdown-text" id="nr-webreader-voice-name">Display Text\n                                    </div>\n                                    \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/arrow_down.svg"\n                                        alt="voice menu button"> --\x3e\n                                    <svg>\n                                        <use xlink:href="#arrow_down"></use>\n                                    </svg>\n                                </label>\n                                <input type="checkbox" class="nr-webreader-check" id="nr-webreader-voice-check" />\n                                <ul class="nr-webreader-dropdown-menu" id="nr-webreader-voice-menu" tabindex="-1">\n                                </ul>\n                            </div>\n                            <select id="nr-webreader-voices" style="display: none;">\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class="nr-webreader-settings-row-highlight-colour">\n                        <div class="nr-webreader-settings-label">Highlight Color</div>\n                        <div class="nr-webreader-settings-controls">\n                            <div class="nr-webreader-dropdown">\n                                <label class="nr-webreader-btn nr-webreader-dropdown-btn" for="nr-webreader-ccc-check"\n                                    tabindex="0" id="nr-webreader-highlight-colour-menu-btn">\n                                    <div class="nr-webreader-dropdown-icon" id="nr-webreader-color-icon"></div>\n                                    <div class="nr-webreader-dropdown-text" id="nr-webreader-color-name"></div>\n                                    \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/arrow_down.svg"\n                                        alt="highlight colour menu button"> --\x3e\n                                    <svg>\n                                        <use xlink:href="#arrow_down"></use>\n                                    </svg>\n                                </label>\n                                <input type="checkbox" class="nr-webreader-check" id="nr-webreader-ccc-check" />\n                                <ul class="nr-webreader-dropdown-menu" id="nr-webreader-cc-menu" tabindex="-1">\n                                    <li value="light" tabindex="-1" class="focusable">\n                                        <div class="nr-webreader-dropdown-menu-item">\n                                            <div class="nr-webreader-dropdown-menu-item-icon icon-light"></div>\n                                            <div class="nr-webreader-dropdown-menu-item-text">light</div>\n                                        </div>\n                                    </li>\n                                    <li value="dark" tabindex="-1" class="focusable">\n                                        <div class="nr-webreader-dropdown-menu-item">\n                                            <div class="nr-webreader-dropdown-menu-item-icon icon-drak"></div>\n                                            <div class="nr-webreader-dropdown-menu-item-text">dark</div>\n                                        </div>\n                                    </li>\n                                    <li value="ice" tabindex="-1" class="focusable">\n                                        <div class="nr-webreader-dropdown-menu-item">\n                                            <div class="nr-webreader-dropdown-menu-item-icon icon-ice"></div>\n                                            <div class="nr-webreader-dropdown-menu-item-text">ice</div>\n                                        </div>\n                                    </li>\n                                    <li value="warm" tabindex="-1" class="focusable">\n                                        <div class="nr-webreader-dropdown-menu-item">\n                                            <div class="nr-webreader-dropdown-menu-item-icon icon-warm"></div>\n                                            <div class="nr-webreader-dropdown-menu-item-text">warm</div>\n                                        </div>\n                                    </li>\n                                </ul>\n                            </div>\n                            <select id="nr-webreader-highlight-colour-scheme" style="display: none;">\n                                <option value="light">Light</option>\n                                <option value="dark">Dark</option>\n                                <option value="ice">Ice</option>\n                                <option value="warm">Warm</option>\n                            </select>\n                        </div>\n                    </div>\n\n                    <div class="nr-webreader-settings-row-speed">\n                        <div class="nr-webreader-settings-label nr-webreader-settings-row">\n                            <div class="nr-webreader-settings-label">Speed:</div>\n                            <div id="nr-webreader-speed-text"></div>\n                        </div>\n                        <div class="nr-webreader-settings-controls">\n                            \x3c!-- <button class="nr-webreader-btn" id="nr-webreader-speeddown-btn">\n                            -\n                        </button> --\x3e\n                            <div class="nr-webreader-speed-slider">\n                                <input aria-label="Webreader Play Progress" class="nr-webreader-range"\n                                    id="nr-webreader-range-speed" type="range" value="0" min="-10" max="10" step="1">\n                            </div>\n                            \x3c!-- <button class="nr-webreader-btn" id="nr-webreader-speedup-btn">\n                            +\n                        </button> --\x3e\n                        </div>\n                    </div>\n\n                    <div class="nr-webreader-other">\n                        <div class="nr-webreader-settings-row nr-webreader-settings-row-highlight">\n                            <div class="nr-webreader-settings-label">Highlight Text</div>\n                            <div class="nr-webreader-settings-controls">\n                                <input type="checkbox" class="nr-webreader-check" id="nr-webreader-highlight-check" />\n                                <label class="nr-webreader-highlight-check" for="nr-webreader-highlight-check"\n                                    tabindex="0" id="nr-webreader-highlight-toggle">\n                                    <div class="highlight-off">\n                                        \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/off2.svg"\n                                                                alt="highlight off"> --\x3e\n                                        <svg>\n                                            <use xlink:href="#off2"></use>\n                                        </svg>\n                                        <div>OFF</div>\n                                    </div>\n                                    <div class="highlight-on">\n                                        \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/on2.svg"\n                                                                alt="highlight on"> --\x3e\n                                        <svg>\n                                            <use xlink:href="#on2"></use>\n                                        </svg>\n                                        <div>ON</div>\n                                    </div>\n                                </label>\n                            </div>\n                        </div>\n\n                        <div class="nr-webreader-settings-row nr-webreader-settings-row-scroll">\n                            <div class="nr-webreader-settings-label">auto-track text</div>\n                            <div class="nr-webreader-settings-controls">\n                                <input type="checkbox" class="nr-webreader-check nr-webreader-other-checkbox"\n                                    id="nr-webreader-scroll-check" />\n                                <label class="nr-webreader-other-check" for="nr-webreader-scroll-check" tabindex="0"\n                                    id="nr-webreader-autoscroll-toggle">\n                                    <div class="other-off">\n                                        \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/off2.svg"\n                                                                alt="autotrack text off"> --\x3e\n                                        <svg>\n                                            <use xlink:href="#off2"></use>\n                                        </svg>\n                                        <div>OFF</div>\n                                    </div>\n                                    <div class="other-on">\n                                        \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/on2.svg"\n                                                                alt="autotrack text on"> --\x3e\n                                        <svg>\n                                            <use xlink:href="#on2"></use>\n                                        </svg>\n                                        <div>ON</div>\n                                    </div>\n                                </label>\n                            </div>\n                        </div>\n\n                        <div class="nr-webreader-settings-row nr-webreader-settings-row-font">\n                            <div class="nr-webreader-settings-label">Dyslexia Fonts</div>\n                            <div class="nr-webreader-settings-controls">\n                                <input type="checkbox" class="nr-webreader-check nr-webreader-other-checkbox"\n                                    id="nr-webreader-font-check" />\n                                <label class="nr-webreader-other-check" for="nr-webreader-font-check" tabindex="0"\n                                    id="nr-webreader-dyslexic-toggle">\n                                    <div class="other-off">\n                                        \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/off2.svg"\n                                            alt="dyslexic font off"> --\x3e\n                                        <svg>\n                                            <use xlink:href="#off2"></use>\n                                        </svg>\n                                        <div>OFF</div>\n                                    </div>\n                                    <div class="other-on">\n                                        \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/on2.svg"\n                                            alt="dyslexic font on"> --\x3e\n                                        <svg>\n                                            <use xlink:href="#on2"></use>\n                                        </svg>\n                                        <div>ON</div>\n                                    </div>\n                                </label>\n                            </div>\n                        </div>\n\n                        <div class="nr-webreader-settings-footer">\n                            Powered By <a class="nr-webreader-settings-footer-link" target="_blank"\n                                href="https://naturalreaders.com/widget.html">NaturalReader</a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class="nr-webreader-frame-bar" tabindex="0" id="nr-webreader-frame-bar">\n                <div class="nr-webreader-progress-slider">\n                    <input aria-label="Webreader Play Progress" class="nr-webreader-range"\n                        id="nr-webreader-play-progress" type="range" value="0" min="0" max="100" step="1">\n                </div>\n                <div class="nr-webreader-frame-playbar">\n                    <div class="nr-webreader-frame-left ">\n                        <label class="nr-webreader-btn" for="nr-webreader-frame-check" id="nr-webreader-frame-close"\n                            tabindex="0">\n                            \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/close.svg"\n                                alt="minimize"> --\x3e\n                            <svg>\n                                <use xlink:href="#close"></use>\n                            </svg>\n                        </label>\n                    </div>\n\n                    <div class="nr-webreader-frame-play">\n                        <button class="nr-webreader-btn nr-webreader-btn-control"\n                            id="nr-webreader-settings-backward-btn">\n                            \x3c!-- <img id="nr-webreader-settings-backward-img"\n                                src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/rewind2.svg"\n                                alt="rewind"> --\x3e\n                            <svg>\n                                <use xlink:href="#rewind2"></use>\n                            </svg>\n                        </button>\n                        <button class="nr-webreader-btn nr-webreader-btn-play" id="nr-webreader-settings-read-btn">\n                            \x3c!-- <img id=\'nr-webreader-settings-btn-change\'\n                                src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/play2.svg"\n                                alt="play/pause"> --\x3e\n                            <svg id=\'nr-webreader-settings-btn-change\' alt="play/pause">\n                                <use xlink:href="#play2"></use>\n                            </svg>\n                        </button>\n                        <button class="nr-webreader-btn nr-webreader-btn-control"\n                            id="nr-webreader-settings-forward-btn">\n                            \x3c!-- <img id="nr-webreader-settings-forward-img"\n                                src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/forward2.svg"\n                                alt="forward"> --\x3e\n                            <svg>\n                                <use xlink:href="#forward2"></use>\n                            </svg>\n                        </button>\n                        <label class="nr-webreader-btn" for="nr-webreader-textbox-check"\n                            id="nr-webreader-frame-settings" tabindex="0">\n                            \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/settings2.svg"\n                                alt="settings"> --\x3e\n                            <svg>\n                                <use xlink:href="#settings2"></use>\n                            </svg>\n                        </label>\n                    </div>\n                    <div class="nr-webreader-frame-right">\n                        <button class="nr-webreader-btn" id="nr-webreader-text-btn">\n                            \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/caps.svg"\n                                alt="textbox"> --\x3e\n                            <svg>\n                                <use xlink:href="#caps"></use>\n                            </svg>\n                        </button>\n                        \n                    </div>\n\n                </div>\n\n                <div class="nr-webreader-frame-error" id="nr-webreader-frame-error">\n                    <div class="nr-webreader-frame-error-image" id="nr-webreader-frame-error-image">\n                        !\n                    </div>\n                    <div class="nr-webreader-frame-error-text" id="nr-webreader-frame-error-text">Error Message</div>\n                    <button class="nr-webreader-btn nr-webreader-frame-error-close" id="nr-webreader-frame-error-close">\n                        \x3c!-- <img src="https://wwwnaturalreaderscom.s3.amazonaws.com/webreader/webreader_icons/close.svg"\n                            alt="minimize"> --\x3e\n                        <svg>\n                            <use xlink:href="#close"></use>\n                        </svg>\n                    </button>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n    \x3c!-- SVG Sprite --\x3e\n    <svg width="0" height="0" fill="none">\n        <symbol viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="arrow_down">\n            <path d="M6 9l6 6 6-6" stroke="#1B7DF9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n            </path>\n        </symbol>\n        <symbol fill="#6c6c6c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="bar_location">\n            <path\n                d="M15.235 78.452C15.235 87.886 30.18 95 50 95s34.765-7.114 34.765-16.548c0-5.81-5.674-10.736-14.658-13.667a205.492 205.492 0 0 1-2.7 4.418c7.694 2.269 12.358 5.877 12.358 9.25C79.765 83.913 67.54 90 50 90s-29.764-6.086-29.764-11.548c0-3.372 4.664-6.98 12.357-9.25a205.493 205.493 0 0 1-2.7-4.417c-8.984 2.93-14.657 7.858-14.657 13.667z">\n            </path>\n            <path\n                d="M25.232 29.768c0 17.65 22.47 48.574 24.768 48.574s24.767-30.925 24.767-48.574a24.768 24.768 0 0 0-49.535 0zm36.39 0A11.623 11.623 0 1 1 50 18.145a11.623 11.623 0 0 1 11.622 11.623z">\n            </path>\n        </symbol>\n        <symbol fill="#6c6c6c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" id="bar_lowercase">\n            <path\n                d="M63.181 55H24.396l11.227-33h.062l1.626 5h16.18c-3.419-9.866-5.906-17.032-5.906-17.032-.244-.776-.541-1.39-.889-1.841-.348-.449-.92-.787-1.719-1.012-.797-.225-16.398-.225-17.113 0-.717.225-1.238.553-1.564.981-.328.43-.613.992-.859 1.687 0 0-25.273 73-25.396 73.86-.123.858.02 1.523.43 1.993.408.471 12.811.715 13.403.49.593-.224 1.022-.654 1.288-1.043S20.838 68 20.838 68h29.814s5.705 17.033 5.949 17.361c.246.326.676.643 1.289.827s14.211-.03 14.662-.46c.449-.429.613-1.059.49-1.917-.05-.363-4.613-13.618-9.861-28.811z">\n            </path>\n            <path d="M40 34h49v13H40z"></path>\n        </symbol>\n        <symbol fill="#6c6c6c" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" id="bar_uppercase">\n            <path\n                d="M50 55H24.396l11.227-33h.062l1.626 5H50V16.932c-1.492-4.304-2.416-6.964-2.416-6.964-.244-.776-.541-1.39-.889-1.841-.348-.449-.92-.787-1.719-1.012-.797-.224-16.398-.224-17.114 0-.716.225-1.238.552-1.564.981-.328.43-.613.992-.859 1.687 0 0-25.274 73-25.397 73.86-.123.858.021 1.523.43 1.993.409.471 12.811.715 13.404.49.592-.224 1.022-.654 1.288-1.043C15.43 84.695 20.838 68 20.838 68H50V55zm19.727 19H52.602c1.678 4.936 3.852 11.284 4 11.483.246.327.676.582 1.289.767s14.211-.062 14.662-.491c.449-.429.613-1.073.49-1.932-.027-.192-1.324-4.017-3.316-9.827z">\n            </path>\n            <path d="M89 34H71V16H58v18H40v13h18v18h13V47h18z"></path>\n        </symbol>\n        <symbol viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="caps">\n            <path d="M3.75 6.5a2.25 2.25 0 0 1 2.248-2.252H13.5M9 20h6" stroke="#7E8C9F" stroke-width="2"\n                stroke-linecap="round" stroke-linejoin="round"></path>\n            <path d="M10.5 4.248H18a2.25 2.25 0 0 1 2.25 2.25V6.5M12 5v15" stroke="#7E8C9F" stroke-width="2"\n                stroke-linecap="round" stroke-linejoin="round"></path>\n        </symbol>\n        <symbol viewBox="0 0 24 24" fill="#6c6c6c" xmlns="http://www.w3.org/2000/svg" id="close_b">\n            <path\n                d="M14.438 14.45a1.866 1.866 0 0 1-2.645 0L.547 3.198a1.877 1.877 0 0 1 0-2.65 1.87 1.87 0 0 1 2.646 0l11.245 11.253c.732.735.732 1.92 0 2.65zm.014-11.252L3.209 14.45a1.866 1.866 0 0 1-2.645 0 1.875 1.875 0 0 1 0-2.647L11.806.55a1.872 1.872 0 0 1 2.646 2.647z">\n            </path>\n        </symbol>\n        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#6c6c6c" id="close">\n            <path\n                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z">\n            </path>\n        </symbol>\n        <symbol viewBox="0 0 6 21" xmlns="http://www.w3.org/2000/svg" id="drag_dots">\n            <title>drag</title>\n            <g fill="#4A4A4A" fill-rule="evenodd">\n                <ellipse cx="1" cy="1.056" rx="1" ry="1.056"></ellipse>\n                <ellipse cx="1" cy="10.056" rx="1" ry="1.056"></ellipse>\n                <ellipse cx="1" cy="19.056" rx="1" ry="1.056"></ellipse>\n                <g transform="translate(4)">\n                    <ellipse cx="1" cy="1.056" rx="1" ry="1.056"></ellipse>\n                    <ellipse cx="1" cy="10.056" rx="1" ry="1.056"></ellipse>\n                    <ellipse cx="1" cy="19.056" rx="1" ry="1.056"></ellipse>\n                </g>\n            </g>\n        </symbol>\n        <symbol viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="forward2">\n            <path d="M13 19l9-7-9-7v14zM2 19l9-7-9-7v14z" stroke="#7E8C9F" stroke-width="2" stroke-linecap="round"\n                stroke-linejoin="round"></path>\n        </symbol>\n        <symbol viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="max2">\n            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="#7E8C9F" stroke-width="2" stroke-linecap="round"\n                stroke-linejoin="round"></path>\n        </symbol>\n        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 24" fill="none" id="off2">\n            <rect width="40" height="24" rx="12" fill="#C5DEFD"></rect>\n            <rect x="4" y="4" width="16" height="16" rx="8" fill="#FEFEFE" filter="url(#filter0_d)"></rect>\n            <defs>\n                <filter id="filter0_d" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse"\n                    color-interpolation-filters="sRGB">\n                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>\n                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>\n                    <feOffset dy="2"></feOffset>\n                    <feGaussianBlur stdDeviation="9"></feGaussianBlur>\n                    <feColorMatrix values="0 0 0 0 0.105882 0 0 0 0 0.490196 0 0 0 0 0.976471 0 0 0 0.5 0">\n                    </feColorMatrix>\n                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>\n                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>\n                </filter>\n            </defs>\n        </symbol>\n        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 24" fill="none" id="on2">\n            <rect width="40" height="24" rx="12" fill="#1B7DF9"></rect>\n            <rect x="20" y="4" width="16" height="16" rx="8" fill="#C5DEFD" filter="url(#filter0_d)"></rect>\n            <defs>\n                <filter id="filter0_d" x="2" y="0" width="52" height="52" filterUnits="userSpaceOnUse"\n                    color-interpolation-filters="sRGB">\n                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>\n                    <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>\n                    <feOffset dy="2"></feOffset>\n                    <feGaussianBlur stdDeviation="9"></feGaussianBlur>\n                    <feColorMatrix values="0 0 0 0 0.105882 0 0 0 0 0.490196 0 0 0 0 0.976471 0 0 0 0.5 0">\n                    </feColorMatrix>\n                    <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>\n                    <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape"></feBlend>\n                </filter>\n            </defs>\n        </symbol>\n        <symbol viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" id="pause2">\n            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z" fill="#C5DEFD"></path>\n            <path d="M20 30V18m8 12V18" stroke="#1B7DF9" stroke-width="2" stroke-linecap="round"\n                stroke-linejoin="round">\n            </path>\n        </symbol>\n        <symbol viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" id="play2">\n            <path d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20z" fill="#C5DEFD"></path>\n            <path d="M20 16l12 8-12 8V16z" stroke="#1B7DF9" stroke-width="2" stroke-linecap="round"\n                stroke-linejoin="round">\n            </path>\n        </symbol>\n        <symbol viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="rewind2">\n            <path d="M11 19l-9-7 9-7v14zm11 0l-9-7 9-7v14z" stroke="#7E8C9F" stroke-width="2" stroke-linecap="round"\n                stroke-linejoin="round"></path>\n        </symbol>\n        <symbol viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="settings2">\n            <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" stroke="#696969" stroke-width="2" stroke-linecap="round"\n                stroke-linejoin="round"></path>\n            <path\n                d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a1.998 1.998 0 0 1 0 2.83 1.998 1.998 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a1.998 1.998 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 3.417 1.415 2 2 0 0 1-.587 1.415l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"\n                stroke="#696969" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>\n        </symbol>\n        <symbol viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" id="trigger2">\n            <circle cx="32" cy="32" r="28" fill="#fff"></circle>\n            <g clip-path="url(#clip0)">\n                <path fill-rule="evenodd" clip-rule="evenodd"\n                    d="M26.619 18a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v.487c5.13 1.358 9 5.478 9 10.526v.698l2.255 3.384.001.001c.194.288.333.606.416.938v.002a3 3 0 0 1-2.183 3.637l-.49.122v2.497c0 .278-.023.552-.068.822v.002a5 5 0 0 1-5.755 4.108l-.176-.03V47a1 1 0 0 1-2 0v-2.987a1 1 0 0 1 1.164-.986l1.342.224a3 3 0 0 0 3.494-2.959v-3.279a1 1 0 0 1 .758-.97l1.246-.31a1 1 0 0 0 .59-1.524l-.001-.002-2.425-3.639a1 1 0 0 1-.168-.555v-1c0-3.782-2.822-7.148-7-8.446v5.96a6 6 0 1 1-8 0v-5.761c-5.12 1.979-8.063 7.52-6.666 12.968l-.968.248.968-.248a10.988 10.988 0 0 0 5.164 6.797 1 1 0 0 1 .502.867v5.6a1 1 0 0 1-2 0V41.96a12.988 12.988 0 0 1-5.604-7.73c-1.716-6.693 2.11-13.505 8.604-15.586V18zm6 1.261v6.08a5.99 5.99 0 0 0-2-.341 5.99 5.99 0 0 0-2 .341V18h4v1.261zm.416 8.55A3.982 3.982 0 0 0 30.619 27a3.982 3.982 0 0 0-2.416.813 4 4 0 1 0 4.832 0z"\n                    fill="#1B7DF9"></path>\n            </g>\n            <defs>\n                <clipPath id="clip0">\n                    <path fill="#fff" transform="translate(16 16)" d="M0 0h32v32H0z"></path>\n                </clipPath>\n            </defs>\n        </symbol>\n    </svg>\n</div>'
}, function(e, n, r) {
    e.exports = function(e) {
        function n(t) {
            if (r[t]) return r[t].exports;
            var a = r[t] = {
                exports: {},
                id: t,
                loaded: !1
            };
            return e[t].call(a.exports, a, a.exports, n), a.loaded = !0, a.exports
        }
        var r = {};
        return n.m = e, n.c = r, n.p = "", n(0)
    }([function(e, n, r) {
        "use strict";
        var t = function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }(r(1));
        e.exports = t.default
    }, function(e, n, r) {
        "use strict";

        function t() {
            var e = this,
                n = this.el,
                r = this.opts || s,
                t = {};
            if (n.style.position = "absolute", this.handle = r.handle || n, r.constrain) {
                for (var d = r.relativeTo || n.parentNode, l = n, c = 0, p = 0; l !== d;) l = l.parentNode, (0, a.isRelative)(l) && (c -= l.offsetLeft, p -= l.offsetTop), l === d && (c += l.offsetLeft, p += l.offsetTop);
                var u = c + d.offsetWidth - n.offsetWidth,
                    m = p + d.offsetHeight - n.offsetHeight;
                t.xClamp = (0, a.generateClamp)(c, u), t.yClamp = (0, a.generateClamp)(p, m)
            }
            this.opts = r, this.data = t, this.events = {
                mousedown: i.mousedown.bind(this),
                mouseup: i.mouseup.bind(this),
                touchstart: i.touchstart.bind(this),
                touchstop: i.touchstop.bind(this),
                scrollFix: function(n) {
                    e.isDragging && n.preventDefault()
                }
            }, this.handleMove = o(this.opts.customMove), this.handle.addEventListener("mousedown", this.events.mousedown, !1), this.handle.addEventListener("touchstart", this.events.touchstart, !1), document.addEventListener("touchmove", this.events.scrollFix, {
                passive: !1
            })
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = r(2),
            i = r(3),
            o = (0, a.generateMoveFn)(),
            s = {
                constrain: !1,
                relativeTo: null,
                handle: null,
                highlightInputs: !1,
                onMouseDown: null,
                onMouseMove: null,
                onMouseUp: null,
                onTouchStart: null,
                onTouchMove: null,
                onTouchStop: null,
                customMove: null
            },
            d = function() {
                function e(n, r) {
                    if (function(e, n) {
                            if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), !n) throw Error("Must include moveable element");
                    this.el = n, this.opts = r, t.call(this)
                }
                return e.prototype.reinit = function() {
                    this.destroy(), t.call(this)
                }, e.prototype.destroy = function() {
                    var e = this.events;
                    this.handle.removeEventListener("mousedown", e.mousedown, !1), document.removeEventListener("mousemove", e.mousemove, !1), document.removeEventListener("mouseup", e.mouseup, !1), this.handle.removeEventListener("touchstart", e.touchstart, !1), document.removeEventListener("touchmove", e.touchmove, !1), document.removeEventListener("touchstop", e.touchstop, !1), document.removeEventListener("touchmove", this.events.scrollFix, {
                        passive: !1
                    })
                }, e
            }();
        n.default = function(e, n) {
            return new d(e, n)
        }
    }, function(e, n) {
        "use strict";

        function r(e, n, r) {
            e.style.left = n + "px", e.style.top = r + "px"
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.generateClamp = function(e, n) {
            return function(r) {
                return Math.min(Math.max(r, e), n)
            }
        }, n.isRelative = function(e) {
            return "relative" === window.getComputedStyle(e).position
        }, n.generateMoveFn = function() {
            return window.requestAnimationFrame ? function(e) {
                var n = e || r;
                return function(e, r, t) {
                    window.requestAnimationFrame((function() {
                        n(e, r, t)
                    }))
                }
            } : function(e) {
                return function(n, t, a) {
                    (e || r)(n, t, a)
                }
            }
        }
    }, function(e, n) {
        "use strict";

        function r(e, n, r) {
            var t = this.el,
                a = this.opts,
                i = this.data;
            "function" == typeof a.onMouseMove && a.onMouseMove(t, r);
            var o = r.clientX - e,
                s = r.clientY - n;
            return a.constrain && (o = i.xClamp(o), s = i.yClamp(s)), this.handleMove(t, o, s), r.preventDefault(), !1
        }

        function t(e, n, r) {
            var t = this.el,
                a = this.opts,
                i = this.data;
            "function" == typeof a.onTouchMove && a.onTouchMove(t, r);
            var o = r.targetTouches[0],
                s = o.clientX - e,
                d = o.clientY - n;
            return a.constrain && (s = i.xClamp(s), d = i.yClamp(d)), this.handleMove(t, s, d), r.preventDefault(), !1
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.mousedown = function(e) {
            var n = this.opts;
            if (n.highlightInputs) {
                var t = e.target.tagName.toLowerCase();
                if ("input" === t || "textarea" === t) return
            }
            if (0 === e.button) {
                var a = this.el,
                    i = this.events;
                "function" == typeof n.onMouseDown && n.onMouseDown(a, e);
                var o = e.clientX - a.offsetLeft,
                    s = e.clientY - a.offsetTop;
                i.mousemove = r.bind(this, o, s), document.addEventListener("mousemove", i.mousemove, !1), document.addEventListener("mouseup", i.mouseup, !1)
            }
        }, n.mousemove = r, n.mouseup = function(e) {
            var n = this.el,
                r = this.opts,
                t = this.events;
            "function" == typeof r.onMouseUp && r.onMouseUp(n, e), document.removeEventListener("mouseup", t.mouseup, !1), document.removeEventListener("mousemove", t.mousemove, !1)
        }, n.touchstart = function(e) {
            var n = this.opts;
            if (n.highlightInputs) {
                var r = e.target.tagName.toLowerCase();
                if ("input" === r || "textarea" === r) return
            }
            var a = this.el,
                i = this.events;
            "function" == typeof n.onTouchStart && n.onTouchStart(a, e);
            var o = e.targetTouches[0],
                s = o.clientX - a.offsetLeft,
                d = o.clientY - a.offsetTop;
            i.touchmove = t.bind(this, s, d), this.isDragging = !0, document.addEventListener("touchmove", i.touchmove, !1), document.addEventListener("touchend", i.touchstop, !1), document.addEventListener("touchcancel", i.touchstop, !1)
        }, n.touchmove = t, n.touchstop = function(e) {
            this.isDragging = !1;
            var n = this.el,
                r = this.opts,
                t = this.events;
            "function" == typeof r.onTouchStop && r.onTouchStop(n, e), document.removeEventListener("touchmove", t.touchmove, !1), document.removeEventListener("touchend", t.touchstop, !1), document.removeEventListener("touchcancel", t.touchstop, !1)
        }
    }])
}, function(e, n) {
    e.exports = function(e, n) {
        if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
    }
}, function(e, n, r) {
    var t = r(19),
        a = r(20),
        i = r(21);
    e.exports = function(e) {
        return t(e) || a(e) || i()
    }
}, function(e, n, r) {
    var t = function(e) {
        "use strict";
        var n = Object.prototype,
            r = n.hasOwnProperty,
            t = "function" == typeof Symbol ? Symbol : {},
            a = t.iterator || "@@iterator",
            i = t.asyncIterator || "@@asyncIterator",
            o = t.toStringTag || "@@toStringTag";

        function s(e, n, r, t) {
            var a = n && n.prototype instanceof c ? n : c,
                i = Object.create(a.prototype),
                o = new k(t || []);
            return i._invoke = function(e, n, r) {
                var t = "suspendedStart";
                return function(a, i) {
                    if ("executing" === t) throw new Error("Generator is already running");
                    if ("completed" === t) {
                        if ("throw" === a) throw i;
                        return U()
                    }
                    for (r.method = a, r.arg = i;;) {
                        var o = r.delegate;
                        if (o) {
                            var s = x(o, r);
                            if (s) {
                                if (s === l) continue;
                                return s
                            }
                        }
                        if ("next" === r.method) r.sent = r._sent = r.arg;
                        else if ("throw" === r.method) {
                            if ("suspendedStart" === t) throw t = "completed", r.arg;
                            r.dispatchException(r.arg)
                        } else "return" === r.method && r.abrupt("return", r.arg);
                        t = "executing";
                        var c = d(e, n, r);
                        if ("normal" === c.type) {
                            if (t = r.done ? "completed" : "suspendedYield", c.arg === l) continue;
                            return {
                                value: c.arg,
                                done: r.done
                            }
                        }
                        "throw" === c.type && (t = "completed", r.method = "throw", r.arg = c.arg)
                    }
                }
            }(e, r, o), i
        }

        function d(e, n, r) {
            try {
                return {
                    type: "normal",
                    arg: e.call(n, r)
                }
            } catch (e) {
                return {
                    type: "throw",
                    arg: e
                }
            }
        }
        e.wrap = s;
        var l = {};

        function c() {}

        function p() {}

        function u() {}
        var m = {};
        m[a] = function() {
            return this
        };
        var g = Object.getPrototypeOf,
            h = g && g(g(V([])));
        h && h !== n && r.call(h, a) && (m = h);
        var b = u.prototype = c.prototype = Object.create(m);

        function f(e) {
            ["next", "throw", "return"].forEach((function(n) {
                e[n] = function(e) {
                    return this._invoke(n, e)
                }
            }))
        }

        function w(e) {
            var n;
            this._invoke = function(t, a) {
                function i() {
                    return new Promise((function(n, i) {
                        ! function n(t, a, i, o) {
                            var s = d(e[t], e, a);
                            if ("throw" !== s.type) {
                                var l = s.arg,
                                    c = l.value;
                                return c && "object" == typeof c && r.call(c, "__await") ? Promise.resolve(c.__await).then((function(e) {
                                    n("next", e, i, o)
                                }), (function(e) {
                                    n("throw", e, i, o)
                                })) : Promise.resolve(c).then((function(e) {
                                    l.value = e, i(l)
                                }), (function(e) {
                                    return n("throw", e, i, o)
                                }))
                            }
                            o(s.arg)
                        }(t, a, n, i)
                    }))
                }
                return n = n ? n.then(i, i) : i()
            }
        }

        function x(e, n) {
            var r = e.iterator[n.method];
            if (void 0 === r) {
                if (n.delegate = null, "throw" === n.method) {
                    if (e.iterator.return && (n.method = "return", n.arg = void 0, x(e, n), "throw" === n.method)) return l;
                    n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                }
                return l
            }
            var t = d(r, e.iterator, n.arg);
            if ("throw" === t.type) return n.method = "throw", n.arg = t.arg, n.delegate = null, l;
            var a = t.arg;
            return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = void 0), n.delegate = null, l) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, l)
        }

        function v(e) {
            var n = {
                tryLoc: e[0]
            };
            1 in e && (n.catchLoc = e[1]), 2 in e && (n.finallyLoc = e[2], n.afterLoc = e[3]), this.tryEntries.push(n)
        }

        function y(e) {
            var n = e.completion || {};
            n.type = "normal", delete n.arg, e.completion = n
        }

        function k(e) {
            this.tryEntries = [{
                tryLoc: "root"
            }], e.forEach(v, this), this.reset(!0)
        }

        function V(e) {
            if (e) {
                var n = e[a];
                if (n) return n.call(e);
                if ("function" == typeof e.next) return e;
                if (!isNaN(e.length)) {
                    var t = -1,
                        i = function n() {
                            for (; ++t < e.length;)
                                if (r.call(e, t)) return n.value = e[t], n.done = !1, n;
                            return n.value = void 0, n.done = !0, n
                        };
                    return i.next = i
                }
            }
            return {
                next: U
            }
        }

        function U() {
            return {
                value: void 0,
                done: !0
            }
        }
        return p.prototype = b.constructor = u, u.constructor = p, u[o] = p.displayName = "GeneratorFunction", e.isGeneratorFunction = function(e) {
            var n = "function" == typeof e && e.constructor;
            return !!n && (n === p || "GeneratorFunction" === (n.displayName || n.name))
        }, e.mark = function(e) {
            return Object.setPrototypeOf ? Object.setPrototypeOf(e, u) : (e.__proto__ = u, o in e || (e[o] = "GeneratorFunction")), e.prototype = Object.create(b), e
        }, e.awrap = function(e) {
            return {
                __await: e
            }
        }, f(w.prototype), w.prototype[i] = function() {
            return this
        }, e.AsyncIterator = w, e.async = function(n, r, t, a) {
            var i = new w(s(n, r, t, a));
            return e.isGeneratorFunction(r) ? i : i.next().then((function(e) {
                return e.done ? e.value : i.next()
            }))
        }, f(b), b[o] = "Generator", b[a] = function() {
            return this
        }, b.toString = function() {
            return "[object Generator]"
        }, e.keys = function(e) {
            var n = [];
            for (var r in e) n.push(r);
            return n.reverse(),
                function r() {
                    for (; n.length;) {
                        var t = n.pop();
                        if (t in e) return r.value = t, r.done = !1, r
                    }
                    return r.done = !0, r
                }
        }, e.values = V, k.prototype = {
            constructor: k,
            reset: function(e) {
                if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(y), !e)
                    for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = void 0)
            },
            stop: function() {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ("throw" === e.type) throw e.arg;
                return this.rval
            },
            dispatchException: function(e) {
                if (this.done) throw e;
                var n = this;

                function t(r, t) {
                    return o.type = "throw", o.arg = e, n.next = r, t && (n.method = "next", n.arg = void 0), !!t
                }
                for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                    var i = this.tryEntries[a],
                        o = i.completion;
                    if ("root" === i.tryLoc) return t("end");
                    if (i.tryLoc <= this.prev) {
                        var s = r.call(i, "catchLoc"),
                            d = r.call(i, "finallyLoc");
                        if (s && d) {
                            if (this.prev < i.catchLoc) return t(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                        } else if (s) {
                            if (this.prev < i.catchLoc) return t(i.catchLoc, !0)
                        } else {
                            if (!d) throw new Error("try statement without catch or finally");
                            if (this.prev < i.finallyLoc) return t(i.finallyLoc)
                        }
                    }
                }
            },
            abrupt: function(e, n) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                    var a = this.tryEntries[t];
                    if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                        var i = a;
                        break
                    }
                }
                i && ("break" === e || "continue" === e) && i.tryLoc <= n && n <= i.finallyLoc && (i = null);
                var o = i ? i.completion : {};
                return o.type = e, o.arg = n, i ? (this.method = "next", this.next = i.finallyLoc, l) : this.complete(o)
            },
            complete: function(e, n) {
                if ("throw" === e.type) throw e.arg;
                return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && n && (this.next = n), l
            },
            finish: function(e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.finallyLoc === e) return this.complete(r.completion, r.afterLoc), y(r), l
                }
            },
            catch: function(e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                    var r = this.tryEntries[n];
                    if (r.tryLoc === e) {
                        var t = r.completion;
                        if ("throw" === t.type) {
                            var a = t.arg;
                            y(r)
                        }
                        return a
                    }
                }
                throw new Error("illegal catch attempt")
            },
            delegateYield: function(e, n, r) {
                return this.delegate = {
                    iterator: V(e),
                    resultName: n,
                    nextLoc: r
                }, "next" === this.method && (this.arg = void 0), l
            }
        }, e
    }(e.exports);
    try {
        regeneratorRuntime = t
    } catch (e) {
        Function("r", "regeneratorRuntime = r")(t)
    }
}, function(e, n, r) {
    var t = r(14);
    "string" == typeof t && (t = [
        [e.i, t, ""]
    ]);
    var a = {
        insert: "head",
        singleton: !1
    };
    r(5)(t, a);
    t.locals && (e.exports = t.locals)
}, function(e, n, r) {
    n = e.exports = r(4)(!1);
    var t = r(15)(r(16));
    n.push([e.i, '/**\n  dyslexic fonts\n**/\n@font-face {\n  font-family: opendyslexic;\n  src: url(https://nr-fonts.s3.amazonaws.com/open-dyslexic/OpenDyslexic-Regular.otf);\n  font-style: normal;\n  font-weight: normal;\n  font-display: fallback;\n}\n\n@font-face {\n  font-family: opendyslexic;\n  src: url(https://nr-fonts.s3.amazonaws.com/open-dyslexic/OpenDyslexic-Italic.otf);\n  font-style: italic;\n  font-weight: normal;\n  font-display: fallback;\n}\n\n@font-face {\n  font-family: opendyslexic;\n  src: url(https://nr-fonts.s3.amazonaws.com/open-dyslexic/OpenDyslexic-Bold.otf);\n  font-weight: bold;\n  font-style: normal;\n  font-display: fallback;\n}\n\n@font-face {\n  font-family: opendyslexic;\n  src: url(https://nr-fonts.s3.amazonaws.com/open-dyslexic/OpenDyslexic-BoldItalic.otf);\n  font-weight: bold;\n  font-style: italic;\n  font-display: fallback;\n}\n\n.dyslexicfonts {\n  font-family: opendyslexic !important;\n  line-height: normal !important;\n}\n\n#nr-webreader-cc-textbox{\n  font-family: "Helvetica Neue","Noto Sans",Helvetica,Arial,sans-serif;\n\n}\n\n#nr-webreader-cc-textbox p {\n  cursor: pointer;\n  font-size: 16px;\n  margin-top: 1em;\n  margin-bottom: 1em;\n  margin-left: 0;\n  margin-right: 0;\n  word-break: break-word !important;\n  overflow-wrap: break-word !important;\n}\n\n#nr-webreader-cc-textbox p.nr-cc-mouseOver {\n  color: #1a7df9;\n}\n\n/* Rules range-slider. */\n:root {\n  --base: #e2e4ea;\n  --second: #1a7df9;\n  --first: #6c9ddb;\n\n  --rangeprogress: 0px;\n  --rangespeed: 0px;\n\n  --trackballprogress: var(--base);\n  --trackballspeed: var(--base);\n\n  --inactivecolor: #6c757d;\n  --bar-background: #ffffff;\n\n  --iconwidth: 56px;\n  --iconheight: 56px;\n  --iconradius: 28px;\n\n  --barmargin: -32px;\n  --barpadding: 32px;\n\n  --nrcpradius: 64px;\n  --nrchradius: 32px;\n  --nrdeg: 90deg;\n\n  --baritem: 24px;\n  --barplay: 38px;\n}\n\n/**\n***   web-reader-style\n**/\n\n*,\n::after,\n::before {\n  box-sizing: border-box;\n}\n\n.nr-webreader-btn {\n  cursor: pointer;\n  min-width: 10px;\n  padding: 0;\n  margin: 0;\n  border: none;\n  color: #6c757d;\n  display: inline-block;\n  font-weight: 400;\n  font-size: 14px !important;\n  text-align: center;\n  vertical-align: middle;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  background-color: transparent;\n  border: none;\n  text-decoration: none;\n  padding: 0;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,\n    box-shadow 0.15s ease-in-out;\n  transform: perspective(1px) translateZ(0);\n  position: relative;\n}\n@media (prefers-reduced-motion: reduce) {\n  .nr-webreader-btn {\n    transition: none;\n  }\n}\n\n.nr-webreader-btn:hover {\n  color: #212529;\n  text-decoration: none;\n}\n/* *:focus,\n*.focus,\n.nr-webreader-btn:focus,\n.nr-webreader-btn.focus {\n  outline: 0;\n  box-shadow: none;\n} */\n\n.nr-webreader-btn.disabled,\n.nr-webreader-btn:disabled {\n  opacity: 0.65;\n}\n\n.nr-webreader-btn i,\n.nr-webreader-btn img,\n.nr-webreader-btn svg {\n  width: 100%;\n  height: 100%;\n  vertical-align: baseline;\n}\n\n/* Rules range-slider. */\ninput[type="range"].nr-webreader-range {\n  -webkit-appearance: none !important;\n  -moz-appearance: none !important;\n  appearance: none !important;\n  margin: 0 !important;\n  cursor: pointer !important;\n  width: 100% !important;\n  height: 20px !important;\n  padding: 0 !important;\n  border: none !important;\n  background: transparent !important;\n  border-radius: 2px !important;\n  position: relative !important;\n  box-shadow: none !important;\n}\ninput[type="range"].nr-webreader-range:focus {\n  outline: none !important;\n}\n/**\n* for WebKit/Blink\n**/\ninput[type="range"].nr-webreader-range::-webkit-slider-runnable-track {\n  background: #e3e3e3 !important;\n  height: 2px !important;\n}\n\ninput[type="range"].nr-webreader-range:before {\n  position: absolute !important;\n  content: "" !important;\n  height: 2px !important;\n  background: var(--second) !important;\n  top: 9px !important;\n}\ninput[type="range"]#nr-webreader-range-speed:before {\n  width: var(--rangespeed) !important;\n}\ninput[type="range"]#nr-webreader-play-progress:before {\n  width: var(--rangeprogress) !important;\n}\n\ninput[type="range"].nr-webreader-range::-webkit-slider-thumb {\n  -webkit-appearance: none !important;\n  -moz-appearance: none !important;\n  appearance: none !important;\n  z-index: 9 !important;\n  position: relative !important;\n  transition: 0.5s all ease !important;\n  cursor: pointer !important;\n  background-color: #1b7df9 !important;\n  border-radius: 10px !important;\n  width: 10px !important;\n  height: 10px !important;\n  margin-top: -4px !important;\n}\n\n/* for IE */\ninput[type="range"].nr-webreader-range::-ms-track {\n  width: 100% !important;\n  background: #e3e3e3 !important;\n  height: 2px !important;\n  border-color: transparent !important;\n  color: transparent !important;\n}\n\ninput[type="range"].nr-webreader-range::-ms-thumb {\n  appearance: none !important;\n  z-index: 9 !important;\n  position: relative !important;\n  transition: 0.5s all ease !important;\n  cursor: pointer !important;\n  background-color: #1b7df9 !important;\n  border-radius: 10px !important;\n  width: 10px !important;\n  height: 10px !important;\n  margin-top: -4px !important;\n}\ninput[type="range"].nr-webreader-range::-ms-fill-lower {\n  height: 2px !important;\n  background: var(--second) !important;\n}\n\ninput[type="range"].nr-webreader-range::-ms-fill-upper {\n  height: 2px !important;\n  background: #e3e3e3 !important;\n}\n\n/* for Firefox */\ninput[type="range"].nr-webreader-range::-moz-focus-outer {\n  border: 0 !important;\n  outline: none !important;\n}\ninput[type="range"].nr-webreader-range::-moz-range-progress {\n  background: var(--second) !important;\n  height: 2px !important;\n}\ninput[type="range"].nr-webreader-range::-moz-range-track {\n  background: #e3e3e3 !important;\n  height: 2px !important;\n}\ninput[type="range"].nr-webreader-range::-moz-range-thumb {\n  appearance: none !important;\n  z-index: 9 !important;\n  position: relative !important;\n  transition: 0.5s all ease !important;\n  cursor: pointer !important;\n  background-color: #1b7df9 !important;\n  border-radius: 10px !important;\n  width: 10px !important;\n  height: 10px !important;\n  margin-top: -4px !important;\n  border: 1px solid transparent !important;\n}\n\n/**\n*    position\n**/\n.nr-trigger-position-lt {\n  top: 30px;\n  left: 30px;\n}\n\n.nr-trigger-position-rt {\n  top: 30px;\n  right: 30px;\n}\n\n.nr-trigger-position-lb {\n  bottom: 30px;\n  left: 30px;\n}\n\n.nr-trigger-position-rb {\n  bottom: 30px;\n  right: 30px;\n}\n\n.nr-webreader-check {\n  display: none !important;\n}\n\n/**\n*    trigger\n**/\n\n.nr-webreader-trigger-container {\n  position: fixed !important;\n  z-index: 9876543210;\n}\n\n.nr-webreader-trigger-preload {\n  position: fixed !important;\n  z-index: 9876543210;\n  width: 1px;\n  height: 1px;\n}\n\n.nr-webreader-trigger {\n  position: relative;\n  z-index: 10;\n  min-width: var(--iconwidth);\n  min-height: var(--iconwidth);\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n/**\n*    trigger icon\n**/\nlabel#nr-webreader-trigger {\n  position: relative;\n  min-width: var(--iconwidth);\n  min-height: var(--iconwidth);\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  cursor: pointer;\n}\n.nr-webreader-trigger-icon {\n  position: relative;\n  border-radius: 50%;\n  z-index: 1;\n}\n\n.nr-webreader-trigger-icon .nr-webreader-trigger-image {\n  width: var(--iconwidth);\n  height: var(--iconwidth);\n  border-radius: var(--iconradius);\n  position: absolute;\n  top: 4px;\n  left: 4px;\n  bottom: 0;\n  right: 0;\n  margin: 0 !important;\n}\n\n.nr-webreader-trigger.nr-webreader-trigger-text-right label#nr-webreader-trigger,\n.nr-webreader-trigger.nr-webreader-trigger-text-right {\n  flex-direction: row;\n}\n\n.nr-webreader-trigger.nr-webreader-trigger-text-left label#nr-webreader-trigger,\n.nr-webreader-trigger.nr-webreader-trigger-text-left {\n  flex-direction: row-reverse;\n}\n\n/**\n***  progress circle\n**/\n\n.nr-webreader-progress-circle {\n  position: relative;\n  width: var(--nrcpradius);\n  height: var(--nrcpradius);\n  margin: 0;\n  background-color: #f4f4f4;\n  border-radius: 50%;\n}\n.nr-webreader-progress-circle > .progress-circle {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  position: relative;\n}\n.left-half-clipper {\n  border-radius: 50%;\n  width: var(--nrcpradius);\n  height: var(--nrcpradius);\n  position: absolute;\n  clip: rect(0, var(--nrcpradius), var(--nrcpradius), var(--nrchradius));\n}\n.progress-circle.over50 .left-half-clipper {\n  clip: rect(auto, auto, auto, auto);\n}\n.value-bar {\n  position: absolute;\n  border-radius: 50%;\n  width: var(--nrcpradius);\n  height: var(--nrcpradius);\n  clip: rect(0, var(--nrchradius), var(--nrcpradius), 0);\n  border: 8px solid var(--second);\n  box-sizing: border-box;\n}\n.progress-circle.over50 .first50-bar {\n  position: absolute;\n  clip: rect(0, var(--nrcpradius), var(--nrcpradius), var(--nrchradius));\n  background-color: var(--second);\n  border-radius: 50%;\n  width: var(--nrcpradius);\n  height: var(--nrcpradius);\n}\n.progress-circle:not(.over50) .first50-bar {\n  display: none;\n}\n.progress-circle .value-bar {\n  transform: rotate(var(--nrdeg));\n}\n\n/**\n*    trigger textbox\n**/\n.nr-webreader-trigger-textbox {\n  height: var(--iconheight);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  color: #1a7df9;\n  background-color: #ffffff;\n  border-radius: 5px;\n  opacity: 1;\n  transition: all 150ms ease-in;\n}\n.nr-webreader-trigger-textbox .nr-webreader-trigger-text {\n  padding: 0 10px;\n}\n\n.nr-webreader-trigger.nr-webreader-trigger-text-right .nr-webreader-trigger-textbox {\n  margin-left: var(--barmargin);\n  padding-left: var(--barpadding);\n  box-shadow: 4px 2px 12px rgba(0, 0, 0, 0.1);\n}\n.nr-webreader-trigger.nr-webreader-trigger-text-left .nr-webreader-trigger-textbox {\n  margin-right: var(--barmargin);\n  padding-right: var(--barpadding);\n  box-shadow: -4px 2px 12px rgba(0, 0, 0, 0.1);\n}\n.nr-webreader-trigger.nr-webreader-trigger-text-none .nr-webreader-trigger-textbox {\n  display: none !important;\n}\n.nr-webreader-trigger-check:checked ~ #nr-webreader-trigger .nr-webreader-trigger-textbox {\n  display: none;\n}\n\n/**\n*    trigger button-bar\n**/\n.nr-webreader-trigger-bar {\n  position: relative;\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  height: var(--iconheight);\n  border-radius: 5px;\n  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.26);\n  background-color: #ffffff;\n}\n\n.nr-webreader-trigger.nr-webreader-trigger-text-right > .nr-webreader-trigger-bar {\n  margin-left: var(--barmargin);\n  padding-left: var(--barpadding);\n}\n.nr-webreader-trigger.nr-webreader-trigger-text-left > .nr-webreader-trigger-bar {\n  margin-right: var(--barmargin);\n  padding-right: var(--barpadding);\n}\n.nr-webreader-trigger.nr-webreader-trigger-text-none > .nr-webreader-trigger-bar {\n  margin-left: var(--barmargin);\n  padding-left: var(--barpadding);\n}\n\n.nr-webreader-trigger-bar .nr-webreader-trigger-bar-content {\n  padding-right: 20px;\n  padding-left: 0;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n.nr-webreader-trigger-bar .nr-webreader-trigger-bar-content .nr-webreader-btn {\n  width: var(--baritem);\n  height: var(--baritem);\n  margin: 0 10px;\n  border-radius: 50%;\n}\n.nr-webreader-trigger-bar .nr-webreader-trigger-bar-content .nr-webreader-btn#nr-webreader-read-btn {\n  width: var(--barplay);\n  height: var(--barplay);\n  margin: 0px 5px;\n}\n\n.nr-webreader-trigger-bar .nr-webreader-btn.nr-webreader-drag-handler {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 16px;\n  height: 100%;\n  padding: 10px 4px;\n  margin-right: 0;\n  border-left: 1px solid #e0e2e4;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  touch-action: none;\n  cursor: move;\n}\n.nr-webreader-trigger.nr-webreader-trigger-text-left > .nr-webreader-trigger-bar .nr-webreader-trigger-bar-content {\n  padding-left: 20px;\n  padding-right: 0;\n  justify-content: flex-start;\n}\n.nr-webreader-trigger.nr-webreader-trigger-text-left\n  > .nr-webreader-trigger-bar\n  .nr-webreader-btn.nr-webreader-drag-handler {\n  top: 0;\n  left: 0;\n  margin-left: 0;\n  border-right: 1px solid #e0e2e4;\n}\n.nr-webreader-trigger-check:checked ~ .nr-webreader-trigger-bar {\n  display: flex;\n}\n\n.nr-webreader-trigger-error {\n  cursor: pointer;\n  display: none;\n  /* padding: 14px 26px 14px 14px; */\n  padding: 5px 16px;\n  background: white;\n  font-size: 14px;\n  /* box-shadow: 0 3px 8px rgba(0, 0, 0, 0.15);\n  border-radius: 5px;\n  position: fixed;\n  top: 54px;\n  right: 44px; */\n}\n\n.nr-webreader-trigger.nr-show-error .nr-webreader-trigger-bar-content,\n.nr-webreader-trigger.nr-show-error .nr-webreader-drag-handler\n {\n  display: none;\n}\n\n.nr-webreader-trigger.nr-webreader-trigger-text-right.nr-show-error .nr-webreader-trigger-error {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.nr-webreader-trigger.nr-webreader-trigger-text-right .nr-webreader-trigger-error .nr-webreader-trigger-error-image {\n  color: orange;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 20px;\n  border-radius: 30px;\n  width: 30px;\n  height: 30px;\n  border: 2px solid orange;\n  padding: 3px 10px;\n  margin-right: 8px;\n}\n.nr-webreader-trigger.nr-webreader-trigger-text-right .nr-webreader-trigger-error .nr-webreader-trigger-error-close {\n  width: 20px;\n  height: 20px;\n  margin-left: 8px;\n  display: none;\n}\n\n.nr-webreader-trigger.nr-webreader-trigger-text-left.nr-show-error .nr-webreader-trigger-error {\n  display: flex;\n  flex-direction: row-reverse;\n  justify-content: flex-start;\n  align-items: center;\n}\n.nr-webreader-trigger.nr-webreader-trigger-text-left .nr-webreader-trigger-error .nr-webreader-trigger-error-image {\n  color: orange;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 20px;\n  border-radius: 30px;\n  width: 30px;\n  height: 30px;\n  border: 2px solid orange;\n  padding: 3px 10px;\n  margin-left: 8px;\n}\n.nr-webreader-trigger.nr-webreader-trigger.nr-webreader-trigger-text-left .nr-webreader-trigger-error .nr-webreader-trigger-error-close {\n  width: 20px;\n  height: 20px;\n  margin-right: 8px;\n  display: none;\n}\n\n.nr-webreader-frame-error {\n  cursor: pointer;\n  display: none;\n  background: white;\n  height: 100%;\n  font-size: 14px;\n}\n.nr-webreader-frame-bar.nr-show-error .nr-webreader-frame-error {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.nr-webreader-frame-bar .nr-webreader-frame-error .nr-webreader-frame-error-image {\n  color: orange;\n  font-size: 20px;\n  font-weight: bold;\n  line-height: 20px;\n  border-radius: 30px;\n  width: 30px;\n  height: 30px;\n  border: 2px solid orange;\n  padding: 3px 10px;\n  margin-right: 8px;\n}\n.nr-webreader-frame-bar .nr-webreader-frame-error .nr-webreader-frame-error-close {\n  width: 16px;\n  height: 16px;\n  margin-left: 10px;\n  display: none;\n}\n.nr-webreader-frame-bar .nr-webreader-frame-error .nr-webreader-frame-error-text {\n  flex-grow: 1;\n}\n.nr-webreader-frame-bar.nr-show-error .nr-webreader-progress-slider,\n.nr-webreader-frame-bar.nr-show-error .nr-webreader-frame-playbar {\n  display: none;\n}\n\n\n/**\n*    detail menu\n**/\n.nr-webreader-frame {\n  position: fixed;\n  z-index: 987654322;\n  background: rgba(27, 125, 249, 0.7);\n  top: 100%;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  transition: top 350ms ease-in, opacity 350ms ease-in;\n}\n#nr-webreader-frame-check:checked ~ .nr-webreader-frame {\n  top: 0;\n  opacity: 1;\n  transition: top 350ms ease-in, opacity 350ms ease-in;\n}\n.nr-webreader-frame-content {\n  width: 100%;\n  height: 80vh;\n  position: fixed;\n  bottom: -100%;\n  left: 0;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n  background: #ffffff;\n  border-radius: 30px 30px 0 0;\n  color: #1a1a1a;\n  opacity: 0;\n  transition: bottom 350ms ease-in, opacity 350ms ease-in;\n}\n#nr-webreader-frame-check:checked ~ .nr-webreader-frame .nr-webreader-frame-content {\n  bottom: 0;\n  opacity: 1;\n  transition: bottom 350ms ease-in, opacity 350ms ease-in;\n}\n\n.nr-webreader-frame-menu {\n  width: 100%;\n  height: calc(100% - 52px);\n  display: flex;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n/**\n*    detail reading-bar\n**/\n.nr-webreader-frame-bar {\n  width: 100%;\n  height: 52px;\n  padding: 0 16px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.26);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.nr-webreader-progress-slider {\n  display: none;\n}\n.nr-webreader-frame-playbar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}\n.nr-webreader-frame-bar .nr-webreader-frame-play {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.nr-webreader-frame-bar .nr-webreader-btn {\n  width: 24px;\n  height: 24px;\n  margin: 13px 16px;\n}\n.nr-webreader-frame-bar .nr-webreader-btn.nr-webreader-btn-play {\n  width: 40px;\n  height: 40px;\n  margin: 5px 16px;\n}\n.nr-webreader-frame-bar .nr-webreader-btn#nr-webreader-frame-close {\n  /* width: 16px;\n  height: 16px; */\n  margin-left: 0;\n}\n.nr-webreader-frame-bar .nr-webreader-btn#nr-webreader-frame-settings {\n  margin-right: 0;\n}\n.nr-webreader-frame-bar .nr-webreader-btn#nr-webreader-text-btn {\n  display: none;\n}\n.nr-webreader-frame-bar .nr-webreader-frame-left {\n  width: 112px;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n.nr-webreader-frame-bar .nr-webreader-frame-right {\n  width: 112px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n}\n\n#nr-webreader-textbox-check:checked ~ .nr-webreader-frame-menu .nr-webreader-frame-settings {\n  display: block;\n}\n#nr-webreader-textbox-check:checked ~ .nr-webreader-frame-menu .nr-webreader-frame-textbox {\n  width: calc(100% - 372px);\n}\n\n/**\n*    detail text-box\n**/\n.nr-webreader-frame-menu .nr-webreader-frame-textbox {\n  width: 100%;\n  overflow-y: hidden;\n  padding: 36px 0 0 0;\n  position: relative;\n}\n.nr-webreader-textbox {\n  width: 100%;\n  height: 100%;\n  padding: 10px 20%;\n  overflow-y: auto;\n  line-height: normal;\n}\n.nr-webreader-textbox-header {\n  width: 50px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  position: absolute;\n  top: 16px;\n  right: 30px;\n}\n.nr-webreader-textbox-header > .nr-webreader-btn {\n  width: 48px;\n  height: 48px;\n  padding: 12px;\n  margin: 8px 0;\n  border-radius: 24px;\n  background: #ffffff;\n  border: 1px solid #e3e3e3;\n  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.04);\n}\n\n.nr-webreader-textbox-header > .nr-webreader-btn:hover {\n  background: #90c2ff;\n}\n\n/**\n*    detail settings-menu\n**/\n.nr-webreader-frame-menu .nr-webreader-frame-settings {\n  width: 372px;\n  overflow-y: auto;\n  display: none;\n  background: #f4f7fc;\n  font-size: 14px;\n  color: #1a1a1a;\n  padding: 30px 16px 16px;\n  border-radius: 0 30px 0 0;\n}\n.nr-webreader-frame-menu .nr-webreader-frame-settings .nr-webreader-settings-header {\n  text-align: left;\n  font-size: 20px;\n  padding-bottom: 12px;\n}\n.nr-webreader-frame-menu .nr-webreader-frame-settings .nr-webreader-settings-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 0 16px 0;\n}\n.nr-webreader-frame-menu .nr-webreader-frame-settings .nr-webreader-settings-row .nr-webreader-settings-label {\n  text-transform: capitalize;\n}\n\n.nr-webreader-frame-menu .nr-webreader-frame-settings .nr-webreader-settings-row .nr-webreader-btn {\n  width: 24px;\n  height: 24px;\n}\n/** nr-webreader-footer\n**/\n.nr-webreader-settings-footer {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  padding: 10px 5px 5px 0px;\n}\n\n.nr-webreader-settings-footer > .nr-webreader-settings-footer-link:link {\n  text-decoration: none;\n  color: #1b7df9;\n}\n\n.nr-webreader-settings-footer > .nr-webreader-settings-footer-link:hover {\n  color: #0167ec !important;\n}\n\n.nr-webreader-settings-footer > .nr-webreader-settings-footer-link:visited {\n  text-decoration: none;\n  color: #1b7df9;\n}\n\n/**\nnr-webreader-voice & highlight\n**/\n.nr-webreader-settings-row-voice,\n.nr-webreader-settings-row-highlight-colour,\n.nr-webreader-settings-row-speed {\n  padding: 0 0 16px;\n}\n.nr-webreader-settings-row-voice .nr-webreader-settings-label,\n.nr-webreader-settings-row-highlight-colour .nr-webreader-settings-label {\n  color: #696969;\n}\n.nr-webreader-settings-row-voice .nr-webreader-settings-controls,\n.nr-webreader-settings-row-highlight-colour .nr-webreader-settings-controls {\n  width: 100%;\n}\n.nr-webreader-settings-row-voice .nr-webreader-dropdown,\n.nr-webreader-settings-row-highlight-colour .nr-webreader-dropdown {\n  margin: 10px 0;\n}\n.nr-webreader-settings-row-highlight-colour .nr-webreader-dropdown-btn > .nr-webreader-dropdown-icon {\n  width: 44px;\n  height: 24px;\n}\n.nr-webreader-settings-row-voice .nr-webreader-dropdown-btn > svg, \n.nr-webreader-settings-row-highlight-colour .nr-webreader-dropdown-btn > svg{\n  width: 44px;\n  height: 24px;\n}\n.nr-webreader-settings-row-highlight-colour .nr-webreader-dropdown-btn > .nr-webreader-dropdown-icon.icon-light,\n.nr-webreader-settings-row-highlight-colour .nr-webreader-dropdown-menu-item-icon.icon-light {\n  background: #0d3b55;\n  border: 8px solid #b5c687;\n}\n.nr-webreader-settings-row-highlight-colour .nr-webreader-dropdown-btn > .nr-webreader-dropdown-icon.icon-dark,\n.nr-webreader-settings-row-highlight-colour .nr-webreader-dropdown-menu-item-icon.icon-drak {\n  background: #efd369;\n  border: 8px solid #0d3b55;\n}\n.nr-webreader-settings-row-highlight-colour .nr-webreader-dropdown-btn > .nr-webreader-dropdown-icon.icon-ice,\n.nr-webreader-settings-row-highlight-colour .nr-webreader-dropdown-menu-item-icon.icon-ice {\n  background: #0f7895;\n  border: 8px solid #f1f3f4;\n}\n.nr-webreader-settings-row-highlight-colour .nr-webreader-dropdown-btn > .nr-webreader-dropdown-icon.icon-warm,\n.nr-webreader-settings-row-highlight-colour .nr-webreader-dropdown-menu-item-icon.icon-warm {\n  background: #605140;\n  border: 8px solid #ebdcb2;\n}\n/**\nnr-webreader-speed\n**/\n\n.nr-webreader-settings-row-speed .nr-webreader-settings-row.nr-webreader-settings-label {\n  padding: 0;\n}\n.nr-webreader-settings-row-speed .nr-webreader-settings-label .nr-webreader-settings-label {\n  color: #696969;\n}\n.nr-webreader-settings-row-speed .nr-webreader-settings-label #nr-webreader-speed-text {\n  color: #1b7df9;\n  font-size: 16px;\n}\n.nr-webreader-settings-row-speed .nr-webreader-settings-controls,\n.nr-webreader-settings-row-speed .nr-webreader-speed-slider {\n  width: 100%;\n  padding-top: 6px;\n}\n\n/**\nnr-webreader-other\n**/\n.nr-webreader-highlight-check .highlight-off,\n.nr-webreader-highlight-check .highlight-on,\n.nr-webreader-other-check .other-off,\n.nr-webreader-other-check .other-on {\n  cursor: pointer;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  cursor: pointer;\n}\n.nr-webreader-highlight-check .highlight-on div,\n.nr-webreader-highlight-check .highlight-off div,\n.nr-webreader-other-check .other-on div,\n.nr-webreader-other-check .other-off div {\n  width: 40px;\n  padding-left: 6px;\n}\n.nr-webreader-highlight-check .highlight-on img,\n.nr-webreader-highlight-check .highlight-off img,\n.nr-webreader-other-check .other-on img,\n.nr-webreader-other-check .other-off img,\n.nr-webreader-highlight-check .highlight-on svg,\n.nr-webreader-highlight-check .highlight-off svg,\n.nr-webreader-other-check .other-on svg,\n.nr-webreader-other-check .other-off svg {\n  width: 40px;\n  height: 24px;\n  border-radius: 12px;\n  margin-right: 5px;\n}\n.nr-webreader-highlight-check .highlight-off,\n#nr-webreader-highlight-check:checked ~ .nr-webreader-highlight-check .highlight-on,\n.nr-webreader-other-check .other-off,\n.nr-webreader-other-checkbox:checked ~ .nr-webreader-other-check .other-on {\n  display: flex;\n}\n.nr-webreader-highlight-check .highlight-on,\n#nr-webreader-highlight-check:checked ~ .nr-webreader-highlight-check .highlight-off,\n.nr-webreader-other-check .other-on,\n.nr-webreader-other-checkbox:checked ~ .nr-webreader-other-check .other-off {\n  display: none;\n}\n\n/**\n***  bar-trigger animations\n**/\n\n.nrSpin {\n  animation: rotation 7s infinite linear;\n}\n\n@keyframes rotation {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(359deg);\n  }\n}\n\n.triggerInRight {\n  -webkit-animation-name: triggerInRight;\n  animation-name: triggerInRight;\n  -webkit-animation-duration: 350ms;\n  animation-duration: 350ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes triggerInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(0.2) translate(200%, 0%);\n    transform: scale(0.2) translate(200%, 0%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n}\n\n@keyframes triggerInRight {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(0.2) translate(200%, 0%);\n    transform: scale(0.2) translate(200%, 0%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n}\n\n.triggerOutRight {\n  -webkit-animation-name: triggerOutRight;\n  animation-name: triggerOutRight;\n  -webkit-animation-duration: 350ms;\n  animation-duration: 350ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes triggerOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(0.2) translate(300px, 0%);\n    transform: scale(0.2) translate(300px 0%);\n  }\n}\n\n@keyframes triggerOutRight {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 100% 50%;\n    transform-origin: 100% 50%;\n    -webkit-transform: scale(0.2) translate(300px, 0%);\n    transform: scale(0.2) translate(300px 0%);\n  }\n}\n.barInRight {\n  -webkit-animation: barInRight 1 350ms ease-out;\n  animation: barInRight 1 350ms ease-out;\n}\n@-webkit-keyframes barInRight {\n  0% {\n    -webkit-transform: translateX(100%);\n    opacity: 0;\n  }\n  100% {\n    -webkit-transform: translateX(0);\n    opacity: 1;\n  }\n}\n@keyframes barInRight {\n  0% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n}\n.barOutRight {\n  -webkit-animation-name: barOutRight;\n  animation-name: barOutRight;\n  -webkit-animation-duration: 350ms;\n  animation-duration: 350ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes barOutRight {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n\n@keyframes barOutRight {\n  0% {\n    transform: translateX(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateX(100%);\n    opacity: 0;\n  }\n}\n\n.triggerInLeft {\n  -webkit-animation-name: triggerInLeft;\n  animation-name: triggerInLeft;\n  -webkit-animation-duration: 350ms;\n  animation-duration: 350ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes triggerInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(0.2) translate(-200%, 0%);\n    transform: scale(0.2) translate(-200%, 0%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n}\n\n@keyframes triggerInLeft {\n  0% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(0.2) translate(-200%, 0%);\n    transform: scale(0.2) translate(-200%, 0%);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n}\n.triggerOutLeft {\n  -webkit-animation-name: triggerOutLeft;\n  animation-name: triggerOutLeft;\n  -webkit-animation-duration: 350ms;\n  animation-duration: 350ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n\n@-webkit-keyframes triggerOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(0.2) translate(-200%, 0%);\n    transform: scale(0.2) translate(-200%, 0%);\n  }\n}\n\n@keyframes triggerOutLeft {\n  0% {\n    opacity: 1;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(1) translate(0%, 0%);\n    transform: scale(1) translate(0%, 0%);\n  }\n  100% {\n    opacity: 0;\n    -webkit-transform-origin: 0% 50%;\n    transform-origin: 0% 50%;\n    -webkit-transform: scale(0.2) translate(-200%, 0%);\n    transform: scale(0.2) translate(-200%, 0%);\n  }\n}\n\n.barInLeft {\n  -webkit-animation-name: barInLeft;\n  animation-name: barInLeft;\n  -webkit-animation-duration: 350ms;\n  animation-duration: 350ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes barInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n@keyframes barInLeft {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.barOutLeft {\n  -webkit-animation-name: barOutLeft;\n  animation-name: barOutLeft;\n  -webkit-animation-duration: 350ms;\n  animation-duration: 350ms;\n  -webkit-animation-fill-mode: both;\n  animation-fill-mode: both;\n}\n@-webkit-keyframes barOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n@keyframes barOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.btn-click {\n  -webkit-animation-name: btnClickAnimation;\n  animation-name: btnClickAnimation;\n  -webkit-animation-duration: 650ms;\n  animation-duration: 650ms;\n}\n\n@keyframes btnClickAnimation {\n  0% {\n    opacity: 0;\n    transform: scale(0);\n  }\n  40% {\n    opacity: 1;\n    transform: scale(1.5);\n  }\n  100% {\n    opacity: 0;\n    transform: scale(1.7);\n  }\n}\n\n\n/* dropdown */\n\n.nr-webreader-dropdown,\n.nr-webreader-hover-dropdown {\n  position: relative;\n  width: 100%;\n}\n\n.nr-webreader-dropdown-btn {\n  width: 100%;\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 16px;\n  color: #1a1a1a;\n  background-color: #ffffff;\n  border-radius: 5px;\n  box-shadow: 0 6px 5px -5px rgba(0, 0, 0, 0.3);\n  font-size: 14px;\n}\n\n.nr-webreader-dropdown-btn > .nr-webreader-dropdown-text {\n  margin: 0 10px;\n  text-transform: capitalize;\n  flex-grow: 1;\n  text-align: left;\n}\n.nr-webreader-dropdown-btn > img {\n  width: 24px;\n}\n.nr-webreader-dropdown-btn:hover {\n  background-color: #eeeeee;\n  color: #696969;\n  box-shadow: 0 6px 5px -5px rgba(0, 0, 0, 0.3);\n}\n\nul.nr-webreader-dropdown-menu {\n  list-style-type: none;\n  display: none;\n  margin: 3px 0 0 0;\n  padding: 0;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  background-color: #ffffff;\n  border-radius: 4px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);\n  overflow: hidden;\n  z-index: 121;\n  max-height: 220px;\n  overflow-y: auto;\n}\nul.nr-webreader-dropdown-menu > li {\n  width: 100%;\n  height: 0;\n  overflow: hidden;\n  opacity: 0;\n  cursor: pointer;\n  margin: 0 !important;\n  transition: all 280ms;\n}\nul.nr-webreader-dropdown-menu > li:hover {\n  color: #696969;\n  background: #eeeeee;\n}\nul.nr-webreader-dropdown-menu > li.selected {\n  color: #f0f4fe;\n  background: #1b7df9;\n}\nul.nr-webreader-dropdown-menu > li > .nr-webreader-dropdown-menu-item {\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 16px;\n  height: 100%;\n}\nul.nr-webreader-dropdown-menu > li > .nr-webreader-dropdown-menu-item .nr-webreader-dropdown-menu-item-icon {\n  width: 44px;\n  height: 24px;\n}\nul.nr-webreader-dropdown-menu > li > .nr-webreader-dropdown-menu-item .nr-webreader-dropdown-menu-item-text {\n  text-transform: capitalize;\n  margin-left: 12px;\n}\n\n#nr-webreader-ccc-check:checked ~ ul.nr-webreader-dropdown-menu,\n#nr-webreader-voice-check:checked ~ ul.nr-webreader-dropdown-menu {\n  display: block;\n}\n\n#nr-webreader-ccc-check:checked ~ ul.nr-webreader-dropdown-menu li,\n#nr-webreader-voice-check:checked ~ ul.nr-webreader-dropdown-menu li {\n  height: 44px;\n  opacity: 1;\n  transition: all 200ms;\n}\n\n/* hover-dropdown */\n.nr-webreader-hover-dropdown:hover ul.nr-webreader-dropdown-menu li {\n  height: 44px;\n  transition: all 200ms;\n}\n\n/* // Extra large devices (large desktops, 1200px and up) */\n@media (min-width: 1200px) {\n  .nr-webreader-textbox {\n    padding: 10px 30%;\n  }\n}\n\n/* // Large devices (desktops, 992px and up) */\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .nr-webreader-textbox {\n    padding: 10px 10%;\n  }\n}\n\n/* // Medium devices (tablets, 768px and up) */\n@media (min-width: 768px) and (max-width: 991.98px) {\n  .nr-webreader-textbox {\n    padding: 10px 10%;\n  }\n}\n\n/* // Small devices (landscape phones, 576px and up) */\n/* @media (min-width: 576px) and (max-width: 767.98px) {\n  .nr-webreader-textbox{\n    padding: 10px 5%;\n  }\n} */\n\n@media (max-width: 767.98px) {\n  .nr-webreader-textbox {\n    padding: 10px 5%;\n  }\n  .nr-webreader-frame-menu {\n    height: calc(100% - 52px);\n  }\n  .nr-webreader-frame-menu .nr-webreader-frame-textbox {\n    width: 100%;\n  }\n\n  .nr-webreader-frame-menu .nr-webreader-frame-settings {\n    display: none;\n    width: 100%;\n    border-left: none;\n    border-radius: 30px 30px 0 0;\n  }\n  #nr-webreader-textbox-check:checked ~ .nr-webreader-frame-menu .nr-webreader-frame-textbox {\n    display: none;\n  }\n  .nr-webreader-textbox-header {\n    width: auto;\n    height: 50px;\n    flex-direction: row;\n    justify-content: flex-end;\n    align-items: center;\n    right: 30px;\n  }\n\n  .nr-webreader-textbox-header > .nr-webreader-btn {\n    margin: 2px 8px;\n  }\n}\n\n/* // Small devices (protrait phones, 576px and under) */\n\n@media (max-width: 575.98px) {\n  .nr-webreader-frame-content {\n    height: calc(100% - 36px);\n  }\n\n  .nr-webreader-trigger-bar .nr-webreader-btn.nr-webreader-drag-handler {\n    display: none !important;\n  }\n  .nr-webreader-trigger-bar .nr-webreader-trigger-bar-content {\n    padding-right: 0;\n    padding-left: 0;\n  }\n  .nr-webreader-trigger.nr-webreader-trigger-text-left > .nr-webreader-trigger-bar .nr-webreader-trigger-bar-content {\n    padding-right: 0;\n    padding-left: 0;\n  }\n  .nr-webreader-frame-bar .nr-webreader-btn {\n    width: 24px;\n    height: 24px;\n    margin: 13px 5px;\n  }\n  .nr-webreader-frame-bar .nr-webreader-btn.nr-webreader-btn-play {\n    width: 40px;\n    height: 40px;\n    margin: 5px 16px;\n  }\n  /* .nr-webreader-frame-bar .nr-webreader-btn#nr-webreader-frame-close {\n    width: 16px;\n    height: 16px;\n  } */\n  .nr-webreader-frame-textbox {\n    padding: 50px 0 0 0;\n  }\n  .nr-webreader-textbox-header {\n    height: 40px;\n    top: 10px;\n    right: 24px;\n  }\n  .nr-webreader-textbox-header > .nr-webreader-btn {\n    width: 32px;\n    height: 32px;\n    padding: 5px;\n    border-radius: 16px;\n    margin: 2px 10px;\n  }\n  .nr-webreader-textbox{\n    padding: 10px 16px;\n  }\n}\n\n/********************\n**     devices     **\n********************/\n\n/* ----------- iPhone 4 and 4S to X ----------- */\n\n/* Portrait and Landscape */\n@media only screen and (min-device-width: 320px) and (max-device-width: 896px) /* and (max-device-width: 480px) */ and (-webkit-min-device-pixel-ratio: 2) {\n  .nr-webreader-trigger-bar {\n    display: none !important;\n  }\n\n  .nr-webreader-textbox {\n    padding: 10px 5%;\n  }\n  .nr-webreader-frame {\n    background: transparent;\n    height: 100%;\n    /* top: 0; */\n  }\n  #nr-webreader-frame-check:checked ~ .nr-webreader-frame {\n    top: 0;\n    opacity: 1;\n    transition: top 350ms ease-in, opacity 350ms ease-in;\n  }\n  .nr-webreader-frame-content {\n    height: 86px;\n    border-radius: 0;\n    background: transparent;\n  }\n  .nr-webreader-frame-content.open {\n    height: 100%;\n  }\n  .nr-webreader-trigger-bar .nr-webreader-btn.nr-webreader-drag-handler {\n    display: none !important;\n  }\n  .nr-webreader-trigger-bar .nr-webreader-trigger-bar-content {\n    padding-right: 0;\n    padding-left: 0;\n  }\n  .nr-webreader-trigger.nr-webreader-trigger-text-left > .nr-webreader-trigger-bar .nr-webreader-trigger-bar-content {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .nr-webreader-frame-menu {\n    height: calc(100% - 86px);\n    display: none;\n  }\n  .nr-webreader-frame-menu.open {\n    display: block;\n  }\n  .nr-webreader-frame-bar {\n    background: #ffffff;\n    height: 86px;\n    padding: 8px 16px 0;\n  }\n  .nr-webreader-frame-bar .nr-webreader-btn#nr-webreader-text-btn {\n    display: block;\n  }\n  .nr-webreader-progress-slider {\n    padding: 0 16px;\n    display: block;\n  }\n  .nr-webreader-frame-menu .nr-webreader-frame-textbox {\n    width: 100%;\n    height: 100%;\n    padding: 50px 0 0 0;\n    background: #ffffff;\n  }\n  .nr-webreader-frame-menu .nr-webreader-frame-settings {\n    display: none;\n    width: 100%;\n    min-height: 100%;\n    border-left: none;\n    border-radius: 0;\n  }\n  #nr-webreader-textbox-check:checked ~ .nr-webreader-frame-menu .nr-webreader-frame-textbox {\n    display: none;\n  }\n  .nr-webreader-settings-row-speed .nr-webreader-settings-controls {\n    padding: 6px 30px 0;\n  }\n\n  /* Rules range-slider. */\n\n  input[type="range"].nr-webreader-range::-webkit-slider-thumb {\n    -webkit-appearance: none !important;\n    -moz-appearance: none !important;\n    appearance: none !important;\n    z-index: 9 !important;\n    position: relative !important;\n    transition: 0.5s all ease !important;\n    cursor: pointer !important;\n    background-color: #1b7df9 !important;\n    border-radius: 10px !important;\n    width: 16px !important;\n    height: 16px !important;\n    margin-top: -7px !important;\n  }\n\n  /* for IE */\n\n  input[type="range"].nr-webreader-range::-ms-thumb {\n    appearance: none !important;\n    z-index: 9 !important;\n    position: relative !important;\n    transition: 0.5s all ease !important;\n    cursor: pointer !important;\n    background-color: #1b7df9 !important;\n    border-radius: 10px !important;\n    width: 16px !important;\n    height: 16px !important;\n    margin-top: -7px !important;\n  }\n  /* for Firefox */\n\n  input[type="range"].nr-webreader-range::-moz-range-thumb {\n    appearance: none !important;\n    z-index: 9 !important;\n    position: relative !important;\n    transition: 0.5s all ease !important;\n    cursor: pointer !important;\n    background-color: #1b7df9 !important;\n    border-radius: 10px !important;\n    width: 16px !important;\n    height: 16px !important;\n    margin-top: -7px !important;\n    border: 1px solid transparent !important;\n  }\n}\n\n/* ----------- iPad 1, 2, Mini and Air ----------- */\n\n/* Portrait and Landscape */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {\n  .nr-webreader-trigger-bar {\n    display: none !important;\n  }\n\n  .nr-webreader-textbox {\n    padding: 10px 5%;\n  }\n  .nr-webreader-frame {\n    background: transparent;\n    height: 100%;\n    /* top: 0; */\n  }\n  #nr-webreader-frame-check:checked ~ .nr-webreader-frame {\n    top: 0;\n    opacity: 1;\n    transition: top 350ms ease-in, opacity 350ms ease-in;\n  }\n  .nr-webreader-frame-content {\n    height: 86px;\n    border-radius: 0;\n    background: transparent;\n  }\n  .nr-webreader-frame-content.open {\n    height: 100%;\n  }\n  .nr-webreader-trigger-bar .nr-webreader-btn.nr-webreader-drag-handler {\n    display: none !important;\n  }\n  .nr-webreader-trigger-bar .nr-webreader-trigger-bar-content {\n    padding-right: 0;\n    padding-left: 0;\n  }\n  .nr-webreader-trigger.nr-webreader-trigger-text-left > .nr-webreader-trigger-bar .nr-webreader-trigger-bar-content {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .nr-webreader-frame-menu {\n    height: calc(100% - 86px);\n    display: none;\n  }\n  .nr-webreader-frame-menu.open {\n    display: block;\n  }\n  .nr-webreader-frame-bar {\n    background: #ffffff;\n    height: 86px;\n    padding: 8px 16px 0;\n  }\n  .nr-webreader-frame-bar .nr-webreader-btn#nr-webreader-text-btn {\n    display: block;\n  }\n  .nr-webreader-progress-slider {\n    padding: 0 16px;\n    display: block;\n  }\n  .nr-webreader-frame-menu .nr-webreader-frame-textbox {\n    width: 100%;\n    height: 100%;\n    padding: 50px 0 0 0;\n    background: #ffffff;\n  }\n  .nr-webreader-frame-menu .nr-webreader-frame-settings {\n    display: none;\n    width: 100%;\n    min-height: 100%;\n    border-left: none;\n    border-radius: 0;\n    padding: 80px 80px 0;\n  }\n  #nr-webreader-textbox-check:checked ~ .nr-webreader-frame-menu .nr-webreader-frame-textbox {\n    display: none;\n  }\n  .nr-webreader-settings-row-speed .nr-webreader-settings-controls {\n    padding: 6px 30px 0;\n  }\n  .nr-webreader-settings-row-voice,\n  .nr-webreader-settings-row-highlight-colour,\n  .nr-webreader-settings-row-speed {\n    padding: 0 0 26px;\n  }\n\n  /* Rules range-slider. */\n\n  input[type="range"].nr-webreader-range::-webkit-slider-thumb {\n    -webkit-appearance: none !important;\n    -moz-appearance: none !important;\n    appearance: none !important;\n    z-index: 9 !important;\n    position: relative !important;\n    transition: 0.5s all ease !important;\n    cursor: pointer !important;\n    background-color: #1b7df9 !important;\n    border-radius: 10px !important;\n    width: 16px !important;\n    height: 16px !important;\n    margin-top: -7px !important;\n  }\n\n  /* for IE */\n\n  input[type="range"].nr-webreader-range::-ms-thumb {\n    appearance: none !important;\n    z-index: 9 !important;\n    position: relative !important;\n    transition: 0.5s all ease !important;\n    cursor: pointer !important;\n    background-color: #1b7df9 !important;\n    border-radius: 10px !important;\n    width: 16px !important;\n    height: 16px !important;\n    margin-top: -7px !important;\n  }\n  /* for Firefox */\n\n  input[type="range"].nr-webreader-range::-moz-range-thumb {\n    appearance: none !important;\n    z-index: 9 !important;\n    position: relative !important;\n    transition: 0.5s all ease !important;\n    cursor: pointer !important;\n    background-color: #1b7df9 !important;\n    border-radius: 10px !important;\n    width: 16px !important;\n    height: 16px !important;\n    margin-top: -7px !important;\n    border: 1px solid transparent !important;\n  }\n}\n\n/* ----------- iPad 3, 4 and Pro 9.7" iPad Pro 12.9" ----------- */\n\n/* Portrait and Landscape */\n@media only screen and (min-device-width: 768px) and (max-device-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {\n  .nr-webreader-trigger-bar {\n    display: none !important;\n  }\n\n  .nr-webreader-textbox {\n    padding: 10px 5%;\n  }\n  .nr-webreader-frame {\n    background: transparent;\n    height: 100%;\n    /* top: 0; */\n  }\n  #nr-webreader-frame-check:checked ~ .nr-webreader-frame {\n    top: 0;\n    opacity: 1;\n    transition: top 350ms ease-in, opacity 350ms ease-in;\n  }\n  .nr-webreader-frame-content {\n    height: 86px;\n    border-radius: 0;\n    background: transparent;\n  }\n  .nr-webreader-frame-content.open {\n    height: 100%;\n  }\n  .nr-webreader-trigger-bar .nr-webreader-btn.nr-webreader-drag-handler {\n    display: none !important;\n  }\n  .nr-webreader-trigger-bar .nr-webreader-trigger-bar-content {\n    padding-right: 0;\n    padding-left: 0;\n  }\n  .nr-webreader-trigger.nr-webreader-trigger-text-left > .nr-webreader-trigger-bar .nr-webreader-trigger-bar-content {\n    padding-right: 0;\n    padding-left: 0;\n  }\n\n  .nr-webreader-frame-menu {\n    height: calc(100% - 86px);\n    display: none;\n  }\n  .nr-webreader-frame-menu.open {\n    display: block;\n  }\n  .nr-webreader-frame-bar {\n    background: #ffffff;\n    height: 86px;\n    padding: 8px 16px 0;\n  }\n  .nr-webreader-frame-bar .nr-webreader-btn#nr-webreader-text-btn {\n    display: block;\n  }\n  .nr-webreader-progress-slider {\n    padding: 0 16px;\n    display: block;\n  }\n  .nr-webreader-frame-menu .nr-webreader-frame-textbox {\n    width: 100%;\n    height: 100%;\n    padding: 50px 0 0 0;\n    background: #ffffff;\n  }\n  .nr-webreader-frame-menu .nr-webreader-frame-settings {\n    display: none;\n    width: 100%;\n    min-height: 100%;\n    border-left: none;\n    border-radius: 0;\n    padding: 80px 80px 0;\n  }\n  #nr-webreader-textbox-check:checked ~ .nr-webreader-frame-menu .nr-webreader-frame-textbox {\n    display: none;\n  }\n  .nr-webreader-settings-row-speed .nr-webreader-settings-controls {\n    padding: 6px 30px 0;\n  }\n  .nr-webreader-settings-row-voice,\n  .nr-webreader-settings-row-highlight-colour,\n  .nr-webreader-settings-row-speed {\n    padding: 0 0 26px;\n  }\n\n  /* Rules range-slider. */\n\n  input[type="range"].nr-webreader-range::-webkit-slider-thumb {\n    -webkit-appearance: none !important;\n    -moz-appearance: none !important;\n    appearance: none !important;\n    z-index: 9 !important;\n    position: relative !important;\n    transition: 0.5s all ease !important;\n    cursor: pointer !important;\n    background-color: #1b7df9 !important;\n    border-radius: 10px !important;\n    width: 16px !important;\n    height: 16px !important;\n    margin-top: -7px !important;\n  }\n\n  /* for IE */\n\n  input[type="range"].nr-webreader-range::-ms-thumb {\n    appearance: none !important;\n    z-index: 9 !important;\n    position: relative !important;\n    transition: 0.5s all ease !important;\n    cursor: pointer !important;\n    background-color: #1b7df9 !important;\n    border-radius: 10px !important;\n    width: 16px !important;\n    height: 16px !important;\n    margin-top: -7px !important;\n  }\n  /* for Firefox */\n\n  input[type="range"].nr-webreader-range::-moz-range-thumb {\n    appearance: none !important;\n    z-index: 9 !important;\n    position: relative !important;\n    transition: 0.5s all ease !important;\n    cursor: pointer !important;\n    background-color: #1b7df9 !important;\n    border-radius: 10px !important;\n    width: 16px !important;\n    height: 16px !important;\n    margin-top: -7px !important;\n    border: 1px solid transparent !important;\n  }\n}\n\n/* Radial Out */\n\n.nr-webreader-click:before {\n  background: rgba(0, 0, 0, 0.1);\n  border-radius: 100%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  animation: btnClickAnimation 300ms ease-out;\n}\n.nr-webreader-play-click:before {\n  background: rgba(197, 222, 253, 0.5);\n  border-radius: 100%;\n  -webkit-transform: scale(0);\n  transform: scale(0);\n  animation: btnClickAnimation 300ms ease-out;\n}\n\n.nr-webreader-btn-control:before {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  transform: scale(1.5);\n  border-radius: 100%;\n}\n.nr-webreader-btn-control:hover::before {\n  box-shadow: 0px 0px 8px #0000004d;\n}\n\n.nr-webreader-btn-play:before {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border-radius: 100%;\n}\n.nr-webreader-btn-play:hover::before {\n  box-shadow: 0px 0px 12px rgb(144, 194, 255);\n}\n\n/* Tooltips */\n.nr-leftTooltip {\n  visibility: hidden;\n  background-color: #383838;\n  color: #fff;\n  padding: 5px;\n  border-radius: 6px;\n  text-align: center;\n  position: absolute;\n  z-index: 9876543210;\n  top: -5px;\n  right: 105%;\n  opacity: 0.8;\n  font-size: 14px !important;\n  text-orientation: upright !important;\n  writing-mode: horizontal-tb !important;\n  word-break:normal !important;\n}\n\n.nr-topTooltip {\n  visibility: hidden;\n  background-color: #383838;\n  color: #fff;\n  padding: 5px;\n  border-radius: 6px;\n  text-align: center;\n  position: absolute;\n  z-index: 9876543210;\n  margin-left: -60px;\n  bottom: 100%;\n  left: 50%;\n  opacity: 0.8;\n  font-size: 14px !important;\n  text-orientation: upright !important;\n  writing-mode: horizontal-tb !important;\n  word-break:normal !important;\n}\n.nr-bottomTooltip {\n  background-color: #383838;\n  color: #fff;\n  padding: 5px;\n  border-radius: 6px;\n  text-align: center;\n  position: absolute;\n  margin-left: -38px;\n  z-index: 9876543210;\n  top: 100%;\n  left: 50%;\n  opacity: 0.8;\n  font-size: 14px !important;\n  text-orientation: upright !important;\n  writing-mode: horizontal-tb !important;\n  word-break:normal !important;\n}\n.nr-rightTooltip {\n  visibility: hidden;\n  background-color: #383838;\n  color: #fff;\n  padding: 5px;\n  border-radius: 6px;\n  text-align: center;\n  position: absolute;\n  z-index: 9876543210;\n  top: -5px;\n  left: 105%;\n  opacity: 0.8;\n  font-size: 14px !important;\n  text-orientation: upright !important;\n  writing-mode: horizontal-tb !important;\n  word-break:normal !important;\n}\n\n.nr-sprite { \n  background: url(' + t + ") no-repeat top left;\n  width: 33px;\n  height: 24px;\n} \n.nr-sprite.da-DK { background-position: 0 0; } \n.nr-sprite.de-DE { background-position: -43px 0; } \n.nr-sprite.en-AU { background-position: -86px 0; } \n.nr-sprite.en-GB-WLS { background-position: -129px 0; } \n.nr-sprite.en-GB { background-position: -172px 0; } \n.nr-sprite.en-IN { background-position: -215px 0; } \n.nr-sprite.en-US { background-position: -258px 0; } \n.nr-sprite.es-ES { background-position: -301px 0; } \n.nr-sprite.fr-CA { background-position: -344px 0; } \n.nr-sprite.fr-FR { background-position: -387px 0; } \n.nr-sprite.is-IS { background-position: -430px 0; } \n.nr-sprite.it-IT { background-position: -473px 0; } \n.nr-sprite.ja-JP { background-position: -516px 0; } \n.nr-sprite.ko-KR { background-position: -559px 0; } \n.nr-sprite.nb-NO { background-position: -602px 0; } \n.nr-sprite.nl-NL { background-position: -645px 0; } \n.nr-sprite.pl-PL { background-position: -688px 0; } \n.nr-sprite.pt-BR { background-position: -731px 0; } \n.nr-sprite.pt-PT { background-position: -774px 0; } \n.nr-sprite.ro-RO { background-position: -817px 0; } \n.nr-sprite.ru-RU { background-position: -860px 0; } \n.nr-sprite.sv-SE { background-position: -903px 0; } \n.nr-sprite.tr-TR { background-position: -946px 0; } \n", ""])
}, function(e, n, r) {
    "use strict";
    e.exports = function(e, n) {
        return "string" != typeof(e = e.__esModule ? e.default : e) ? e : (/^['"].*['"]$/.test(e) && (e = e.slice(1, -1)), /["'() \t\n]/.test(e) || n ? '"'.concat(e.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : e)
    }
}, function(e, n) {
    e.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTc5IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgOTc5IDI0IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KPHJlY3Qgd2lkdGg9Ijk3OSIgaGVpZ2h0PSIyNCIgZmlsbD0idXJsKCNwYXR0ZXJuMCkiLz4KPGRlZnM+CjxwYXR0ZXJuIGlkPSJwYXR0ZXJuMCIgcGF0dGVybkNvbnRlbnRVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHdpZHRoPSIxIiBoZWlnaHQ9IjEiPgo8dXNlIHhsaW5rOmhyZWY9IiNpbWFnZTAiIHRyYW5zZm9ybT0ic2NhbGUoMC4wMDEwMjE0NSAwLjA0MTY2NjcpIi8+CjwvcGF0dGVybj4KPGltYWdlIGlkPSJpbWFnZTAiIHdpZHRoPSI5NzkiIGhlaWdodD0iMjQiIHhsaW5rOmhyZWY9ImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBOU1BQUFBWUNBWUFBQUQ1eXE2dkFBQWdBRWxFUVZSNFh1MmRCM2hWUmZiQWYvZjFsL3JTSUVBS05YUVFVRUdhTkJjUlYyTFh4Yld0WWdOZEN5b3E2Nm9vSUxJV1VGZlV0YXlLS3haRUFRRUJsU1lnSUlTV0Jta1FRbnAvZWVYZS96ZjM1U1VoSk9TK2dIOE1acjZQejVqTXZmZmNtVE56NXpmbnpEblM1cWp6RkJvdENwSTFFRWY1UmlLZlhFVGN2WGVpeURLU1RrZmlxNitUOCtKVVRIN0RVT3hsZ05UNGJacjR5OUNzWHpWZEhCY1hOd0Y0QzRodTlzT2FmMkVtY0ZkU1V0SktMYmRRUHZsSVVhNjZoaDhUampENmdnOEFDK0RrNFRubk16dXFHT09pV2V5WStTSG5YN0tXQVhyWTVYYng2UFA5ZU1pYVRkdG9mMzQwZFdUVXBMVjBDYlZ5cEJMc2xiVlBsU1FJREpSd09CVHM5bE5KTTExVHV5cUtjZ29kQUVVV2Y2NnRJdnBmTGVJeUlVeWRJcnZkNlBUNkpuOVhYMnBKcW5lalJsN0xsWDE4UXFrMStLMUhaKzZNL3ZpenRDYTc0dTYvZFdQKzg0UElIVDhaVjNwV1RYMURiQlFScXo3bTRTZDM4TzkzazV1OHorVHJPakw3YWtPbXZITDFYVzNtUHFsTkI5NGFkTXAyYmZLaFo2Q0NkTmNPVFRvd1ljSXpFMlJaZVV0UkZKL0cxcU41T3doM24xSUptM3dMQ1NsVDBrbDM5ZHUxV2xPN3BrWDJuZUJHZVF2bExNd0RFcGw2cExzNkhrdlFKS3ZVZGVHSk9xQ0F4U0JoTDVIRndNTGZacURjS2NhUnA1azYyL1FjeWloaDQ5ZnhEQjBTaDh2bHhtRFFzL25uSklaUFdrcm5tQ0FPRmJtcnh4LzRHeVhLaTF3ZzZiQUU2YkM3YXUvbGJYZ2xaYW9tSGZqNzdMMHpsMzJmOTJoQmlUT2dxVTdMM1R5cXFTbzFmNithZUVPVGRTVmJrSjFoRjc3Zy84QTl6elZaV1h4dHJucW53YkZsQm9KMEVzZFR5OG44L25iQzB4TkppeCtFVG9vaGJ0ZE9manBjektqTHZxYnIyQkFPMlQzdEtHdDVZQU4xbEMvdjBOU3VVL2UrUGZPTHZHMlBGampMbW16WHNsRWZhcGFtc1BlQUp1dEtvU0YydzdoeEw0VE1lbHBUdXpvY2p0c1ZSZm1YVHFjTGJ2TG1aN2lDMisydTBPbDAwMHdtMDMrMDNMb2x5VnJZdSsvSitpckxFQmFHZlBRbjlHT25FTHp3Tlg3NE5aSFJJeDVXWDMvOWh2bU1PcTg3eFZQdng3MTJFYnIySXlFL0g3emZYeTJOVktkT3lMNEVUZnFhOHN6Y21hV3IxejNxTENwcFVsOTlGS0hKNm9aUW16MW8zS2dYdWo3OTJEbW5yN3c5MU9mMWdPZ3djWkZZY2JXVklFZnh6RmZlM3pmWm9QVXIzTGxaa3c1RVBCODV3YTI0TmErMXB5UUdNL3VYVUovRmFmQUNpVXpRM1NYdC8xblRONVkrVHpmZXJtN29FU1NUbUdyZ2hvdnR2UG5JQ29LRGR1Tnd4S0RYMVZsVTEzd3MxVThwTHJ1T2c0OEU0VG9zYVNLYmdabEptdHExSmMxWmtmOVlPOEV0eTZmVWdlY0gvc2lkM1hhZjBJMkRsOS9NNFRMYjZlcENwbDZudSt2WXMyTTE2VUNtWDF1Zng5YnBDbGovZXFtRndYVEdXUUpwYjd0bEppVWx4V2pwaEFOdmY2NzBxRXlENi85Q3BpbUVXWTkreHFLM3QvRFkvSGllYTF1QThkL1BzdXZaVHhnNDVpc1kxb0V2YjQ0aHZtZ3Ywc2dodUlhTTRKV0ZxNWsrYlRPZHV3WnpLS1Y2OFN3bVVjbkRzQ0IrSjJFMDZuQTZHNVBvOUdCYTNUZ1J0NjczOFM3TkwwQnh1d2xxRTRIZ2NDOEhlMEhhYnJkVGREeVh5SmhvRUFzR25RNjNJb05iUm04d25IQ05WM0t0TUgzODBWa1pmbU9HUmZ1UEg4V0tWVWVZK3NoMmNuSWJoN25UaGVtMkVSYmVlSzQzUTQ1dHdWMVFoTzNXNnpJTkhkcHAwZ0dsQmNIMCtQSC96TEJhVGRIbm5kZUp6WnNQb3RQcEdEcTBoL3F6TE12cXo3LytlcGlLaWlvR0RPaE1lbm91QlFXbHZIQitJRzJ0SjI2ZWFCa2ZKMDFFRXBsUlR6Mm9xVjFUSS90a25CV1FybEZXTXJzYzI2dEoxdm93YmRWTFZCYkxYRHpRank2eC92em5xMXdDYlRwS3E0RmFNMHdyRUdpVUtDMlN1ZjNLQ0ZMVHkvbHhad1hXWUIyVjducjhyaEdtdTE3eVEyVmVrVlBzK2pWWkNyZU5hN0tPdDBMNStHczAxZFVGQlpUNWZmNUJvSmJLV21FNkxEMlI5TE1NMDFFL1RLbk1kWlpxYWxmN3VFKzB2TDVhSjdkN1gwMTFkYmJnc3ZCdG16UzFxOTF1THplYnpYNmFidndiVkhJNEhNVm1zMW5UU3F3bHlkb2dUTHRsQ0E5RlBycEJJMHlQZ0x3QzBGZHZadnZZL2xwaGV1ZUlDWld1Z2lKTit1cWpDSnFxRzIxQlpRTTJyVHJuOU5WWG1CWmZWYkhLRTRNaFRGSklkZXZvb3BmSlZ5U0tBTy9mTlRXcXQ1SkdtQTZkRmVIVFd2dU13clNRVlNKVDJyOU4wemUyVVpnV0MyVlorbDNCZEV1YXN5S2VXdE9rRHZ5R01DMjBJRE4zMWlXYWRLQVZwcXNIdUErVzZiTysrNUNVcEcwSGl0QlhsU1hQZENJK2Z6ZUdNY053RHh2RjZ3dS80NWUwVXQ0ZDZNTDQzL2xzbnJxUVlXOGRJUGtxRzEwTEV1SEdtMGd6aFREOTlvLzQvTnNNT25XTDRIQ3lxOGJxWHd2U0NwTW1CWk9kWGNXMmJaWDQrK3NwTDIrb2Fab1AwMTRQQk5GRjVjWEZIRnV6RGtOZ0lJNktDZzVmZFJYZGY5NU03T0FMUFo0S2t1UUJaSjJPNHJ4OGRqM3dLRDJlZUpqSTNyM1VIajZhbEV4WmNURmR6aCtrZmdEcVc3TTl2OUptbWE0NFhxalkvL2NsaXIySzRGdXVvOWdRd0VNemRyQmtxUmozSjVmVGdlbHI0Mk40OFhvamZMY2F2NHVIRUhEcGFLcWNDaFpoV3RSUVdoSk0vK2xQVHl1alIvZGwrdlI0YnJoaFBwR1JObDU5OVE0ZWVPQWRqaDByNG4vL2U0UzVjNy9raHgvMnNtVEpveXhkdXBXUFAvNlI5OTY3bi9idHo4eU90RllkU0czYjU2elBBMTF5OW1yU2dSTmdXb0d1WVFaUzBncDQrUjhYTUg1Y1QzcU4rSUNPTWFHazVidkJjTEpsMnVseVkyeklNdTJDam1GNjBqSUsyTC9oRmxaOWY0QUhuOTFPMTQ2aHBPUUxTN1ZYUVNXVWxQczB5V3E3WUkzbWR2MHRZRnBJSExENkMwMnlhb1hwMzRObDJyem1SczN0K2x2QXRHalhOa25hOU5YcGRDb0dnMEhEN1BiYlZIRzVYQmlOUmswNjBKSmtiVW1XNlcyOUw5S3NyNytORnNDRis3YWNjenJnQzB4N0xjOGRKWVUwUlFLSGpuNVdOM3NxOVdDUzhmN2Vad3UxZHBqMlNRZk9PRXlMTmVHQmJacDBvRmt3WFJXRFh2Ly9iNWx1U1hOV3hGTk5yd2QrWTVnbWQ5WWxtblJBRTB3TEk0UFlZTkZWV3lTRmhvdU5TVTFQYUhxbWEybVdhWjhHZU5Pdjczc05yVEI5eFkzdktzc0taZWJjMEpNcCtteENBdlZ3UlR5cHhRNml2djBTOHovK3dwRzFSN0g4K2l0aFVqbktwR3ZZbG5LY3U2ZDhBY0VtZ3R4dWZ2cTJFSU5Kajl2cDBRRi9mNG55Y2lkRGh2anp6VGUzc0duVFFlTGpsOUc5ZXpoSlNhNXFpM1hkZC9JZHBsMU9KNG9rWVRRWU9McjlGNDUvOXozMkxUdkpYYm1FRU1BQkJEOC9sMEZQUEtvS0pUcEUxVVZKNHNqdVBhUmVjemNCS1Z0b3Mya0xwbzR4cFAzblE2aW9aTURUVDJJMG0xVGh5c3ZLMUd2OEFtcTl5TFNDMU1BUnk1VzNYeHRDajVJa3lwWi9UOERFY2ZpTkhNTFNiek41NExGZnlNdXZPcUZUbXdQVDRXRm1Gdnl6RnlNTHQrUE9LeUQ0NW1zeFJMVmo1NjhGM0huL3oremNNRkhUOEd0cE1DM0xic0xEL1prMGFSaTV1Y1ZzMmJLUGl5N3FUWGg0RU11V2JhWjc5eGlHRCsvRm9rVXJLQ21wUWxFa25yWVZFS0d2OVp6d2ZVVFZYaEczK0ExTjdkcGlZVnFDS0g4ZFdka1ZmUEN2aXhnNnBBdmRoaThoTUZoSHFYRFA5dEhOTzlBZ1VWb3NrN3p4V2padlNlV1doN2NRMWM2UHJITGhRbDdicmxyZHZNOUZtUDQ5V0taYkVrdzdIQTdGYURTZXpqQStyV3Q5Z2VtV0pHdExza3kzSkpodVNUcWdCYWE5Y0J3RWROQXBISERvUUpINElxNkljVkZIK0Q2ckExY24yVUJTNkdtU09TSkxsUGppOXYxSGdta3hFOVYzODU2K2d1REFzK3JtM1dMbTEzTUdwc1ZhU0hqSWhnU0F4Vmg5YmtLTUt4a0t5OER1QklQNC85UDZkTkVLMHo2Mm4xYVlya3c1cklnTkVMdmRpU2trQ0V0eElZckJnTlF1RWhZdlJybHpDbEpLc2dxa2NtQVE0bVJHU1U0K0Jxc1pmejh6Szc3Zno4UmJmNlpUbEQ5SGMyU3FuSjV6MHFXbFRrYU9ET1R6ejI5aTgrWkU0dU8vSVM0dWxKUVV0Nm92SnhiZllkcXRLQ1IrK2huR2tCRE1rVzF4SGpsSyt0ZkxhVHYyWXBqK0NxVk9COUtRT0xxL1BnOWIrL1kxNTZZUHJWbEw1cC9HWWFNM2xUMURLVDF3RU9HblpTYVhxRjkyRWpGb2dPb2FMdW4xN0gzakxUcGRkelgrNGVFMUx0OWFZZHF2N1dKRnI1ZDRaRnBQSHIybFBSVWZMMEd5bUFuKzZ6WGtPMDBxVUgrOXZQWnN0Szh3UFdsaUZQTW5XekNzWG8xMStJVUVYRFlHcHh0bXo5L0xTd3NPNEhZclZPVGNxQW42V2hwTUMrK0NObTJDbVRoeG9BclR2L3h5aVBQUDcweEVSRERMbCsra2E5ZEkxZDM3UC85WlIwbEpCVzYzM0FyVFRjd2ZOWlpwR2FLRDlXUWVMZWVGUjNwei9kVURLU210cEtyS3haQS9mMDJiTmxZS3F4U2lnM1JObnBuT0xKRUpNVWtjejYxa3k3SXJNRnVNMklMOStIVEpEcDU0YVIvUjdmM0pMSFo3RHRxSk0zY2EzYnpQRlpnTzFFdmtwdngremt6L1VXRGFmYndRZDBFeCt0Qmc5RzNFMXF2djVVekF0RGlXTW52MmJJWU9IY3JvMGFOOUY2TDZpdlhyMTdONTgyWm16SmloSG51cFgzeVJ0ZFV5N1ZzM2FMVk1ueXN3WGRmQzNFMm5xSkJjVWFYalpwdUxwM3Nmb1hPRUNObmpLWWR5bzNsbVh3YytMRExnWjVaVjZFNldQVXVTSmkzVnJURGRDdE1hUFgvT0NaZ1c4WjZFOVRraUdOS3lVQ2l2WVdZeFZxVGc5bUExUVVFNUdQWGVNN1MrVFZiVnRWdGgyc2RtMHdyVHdxSGdoRnNIQmtGcFNhMGwxNkJIY1lrRnJ4VkpyblkzRWV1UFFzOVY2N2lkc2JwK2RKWWRIRUdpcW5xV0ZMRzlCTVRFeDRlUW1WbkpqaDJWaElVWlZNL3BvaUlGbC9BS3J5bSt3YlQzL0hOSmVnYWJ1MTlHekNlendPRWs4N3Z2Y1JsMEJHellnMTRCUS9KbVFyOVpUdHpsbDZsUFN2NXlLWmxYWDBsZ3A2SFkzUzcwaFE2c09qMTBEYVZveHhxTUM5OWt5TjEzWXREck9ieDhKZG1YWDhhZ3NqTE0vdjdOZ21udjYvWHRaV1BSZ3NGMHlkcE4rYnBOQkYwekVjc0Y1L0haVittcTYzZGhrUU90TUIxaU0vSHEwejBaVzdZVFYwNnVPQnVOSWFvOWUvWVZNbVhhVmhMMmkxTktucUlacGhjMXgxMnV4dFpmSFhyRXkrMTFmNjlkYWFVcDJ0emxoSnYzeFJmMzVzRUhMMmZ5NUgvUnJsMEk4K2ZmenNNUC80ZnM3RUkrK2VSaDVzLy9tdlhyOS9EcHA5UDU1cHRmK1BUVGphMXUzazEwaGRTcE9nQ1pPT05zRVdlYzNWdytJb2kvMzNzaDdkclorUHFiM1R3eFB4a0NkR3BrbVZpYm52U3NZall1dlpLaEY4VlI0K2E5SlluaDhWOFJHeFZNdWdoQUp0YjJaVEt6SHV6R2xaUDZrWk5Uekw4V2J1UGJEU1VFMnZTVTJtc0RrU21IdFFVZ2Ewa3dyVzhnQUpuWVN4UUJ5T3JDdEJiTHRQYlJkR0pOdDhZQVpPY3lUQ3NWZGdyZVhFTHg0cFU0MHJOcmx2T20yUFlFMzNncG9mZGNpK1NuL2ZpdEw0RGFHRWl0WGJ1V0R6NzRnTnR1dTQzYzNGeDY5dXhKMzc3YXpwZUxIazVJU09EQWdRTkVSRVR3M252dmNjc3R0ekIyN05pVDFNUVhXUXQ3OXE1MTQvSk81V0wzVzV5Wnp0NkVmdXlkQkM5YzBFZ0FzbW00MTc2TnJ0MHd6NWxwQWZiZWU1enFzMUIzQlNKQnlJRjltamFCV3kzVDJtY0VYM1NnTWN1MEY0REZFYmdlT29WOXdob3R3V2VkUzdpMlJ3S1lvS3JVaHNNWmpNbFloRG13V0hVUlhIS3dMOWNkQ2xKMW9iZEo1cUFzVlVmU09ZV1I3WThPMDk0QVpLZHk4OWFEcS9JM0MwRFdhcG5XUHJ4TzM4MWJ1UFMydGFHa0pYa0MrWFhxanY2Q2dlcnhWUG03SDVITGpxa2JVRkpZTkpUYVBSYnFacFpXbVBheDRYeUdhZUhaTEh5anEwdk50eThvRUtXa1ZQMnRGQmJtaWRKWnA5U0hhVEcvQ20zd3VIdERlYmx3cmRVUkhLeWpXRmloMUduVWdMRGF1bXU4YnBzSDAySlJXbkRzR0VFQmdWUlZsTE5yMm5UYTNIUWRtZTkvZ3VYTFQ3REYzMFRvczQvUm9XOGZNdGV1SjNuY0dBejlSdUhLS2tKZkphUFRTYmpiK2tIS0Z2eWZuVTJ2aDZiaDcrL1BzVDBKSlBmdmg0S1o4L09QNGhjYWVsb3dMWnJMWUpCNC9LSGVQSGgxS09VZkxVSGZKaHpiYlRkd3JNQ2hCaWVMamZadk1wcDNlbVk1cjkzaWgzSE5hcXhEenlmZzhuRzRaSmozMm43bS9Hc2ZybW9YWEo5aGVxSHR4QTJWdWt1WitpNGwzaStxQ0NXcFZDTExsVWpxenlKNnZoVWtLeWp1MnZQbTN1dnJia1hYNVc1VnNVQzZyMGpUQWtyQXRNVmlvRStmS0FJQy9Da3JxOFN6Y1FNQkFWYkt5c3F4MjExMDZkS08xTlNqWkdVVlVGUlVlY1lDa0FseG8yYytxRW5XcXZWL08wMkhIQjhIZlFQVnphUGYxU1JyOThIL1ZtVVZsVVc4b1loZ1BWdjJGUERzZzMwWWZYRTNSc1Ivem5rOXdxZ1E4Q3VPVVBqcjJiNi9oRTFmLzVtTEJuZXJpZWE5WldzeXd5Wjl3d1c5Z2loV3h6NVlMUks3RCthejRldHJXTGMrbWFkZlNlQ2lmbUhrRnJ2VnpWaHZJeVZ1dlZ1VHJDMEpwazJOUlBNMlNlQ3ZsOGhKcVNCenpXMDBCdFBkeG9hUVZoM051N25hNFBpRHc3UWpKWk9Ndjh6QWNlaElUYmFIdW93bjJ0WGNLWXFZeGJNeGRkV1dKTUFYT0drSXBzdkx5NWsrZlRxaG9hSGNlT09OekowN2x3a1RKcWcvZTRzN094Zm53VU80UzhyUkIvbGo3TkVaZmJ1SW1yOHZYcnlZbFN0WDh0aGpqeUYrTGlnb1lONjhlZW8zckc3eFJkYkM0U09xaDJQTlJLL081MUpnTUhMU0N2U1hUU05vL2p4KzJKWEk2SkhWMGJ4L21zK29BZDBwZVhnNjdoVUwwTVZkaGxKYURKTEFydm8wWForcTYzOGdKRUkyL3FScEhtaUZhZTB6Z2k4NlVCK202MzY2TzBwUXFFQ3hYY2M5NFZVODBpT0h6dTB6eUQvYW4yVS9uTWZtWDRQSktkRFROdFRGUmVjVk0yblVyNFMxMzhPaG85RzhkRENTTi9QTUJGdGtRcnhuckJ1elV2L1JZYnJWelZ0elRJb1diWmtXYnNHVlRvZ0pSejZjaUg3NEtBSWVuNDdmNEF2UkJ3VWhsNVZSbFpaR3hYZXJzRC81QkJJQjZzYW02Z0lzWEZFRmFQa1k2RkhhSERYd0ZBdFRHY2svRUVmcEJpS2ZXa1RjUFhWU1k3MzJPamx6cDJJS0dJNVNJVkpqTlovb2gyYnQxRFRKZCtuUzVhd3ZvbE5UVXpYSnFycDU2M1hZeSsyWVRBWXM0U0VvZVhsSWdmN3czU3FVMjI1SE9ueEkrRzRqSDhsR0NnMmxwTXFOd1ZHRmY1QWZLOWJ1WitJdFA5T3hnejk1aFRJQlFSSmxaUXBsb3FtQmtCQkpqZUpkVnVabXdBQUxRNGVHOGZubk9lVGt1T3NBdFhhWTlscWx5MHRLS0M4b3BDUXJpMDdEaDZKSG9qQS9IMGRtRnI4T09JL1FkaGRpNmh0RDJ3WFBFeGtYeDY2N0hzQzE2RzNzM1FhZ0hDbkRhamFvQVpOTUpXNWNjVGE2YmZnU2EzQXd1ZnYyVTVKZlFIbkNYaW9UVStqeXdMMkVkK2xjazJyTkZ6ZnZoajUxQS9xRnNPaVZDNGxKM3FvQ3RmV2k4OVZxYWVsbGRJd05hRFExbHZmdmViTmV3U2JPUnNkMFlQL0JZcWJjL3pPNzlsUzdDZFI3b0diTDlFYzMrNmF2YWx3RXp5V1NuemcxNVNsS1JZazZ1TldVWkw3ZEVlbW1EelhwcTRCcDhXeEZrWms1ODFxT0hpM2czWGZYOHJlL2pWVURqRDMzM0JJbVRqeWZDUlBPWStyVWQ5V2djK0xmbVVpTjVYM1A4M1ovcjBsV1pmZnZJT1ZZZjIwcHg2UzI4eHJvTWJITFlhSlBOd3Q3azRyckxYdkV0bmdoUHl5OWtaSERlK0owdWpFYTlmeTA4UUNqNGhlRFFiaXZlSGZMUE11eFB0MkMySnZpQUVYRUN6ajVjVXFPdG5tZ0pjRjA3QTMvYVhBa2lLK1FXUzl4TUsyY3pHVzNuZ1RUR3c2WE1QTDZaUXdZYXFQQTBkeWtXQjZOVGYvMGRrMzZlaTVhcHQyNWhhU01uWUx6U0c0akhqUzEzV1BzMElhdWF4ZWhqMmphOWRzWE9Ha0lwai8rK0dOV3JWckY0NDgvemtjZmZVUnhjYkVLd241K2ZnZ3JldjRqOHloZnR2NmtUNGovRmFNSmUybTZha1d2cUtoUWdUdzRPSmliYnJxSk9YUG1NSDc4ZUNaUG50eHNtTTd2M1BETUxSUklPSk1aZThkaisrd1QxdTlKWmt4MWFxeDFHK1l6dWw4M2lxNzdDODU5UzBWOFFsK24veFBrRFR1a0xkUk9LMHovOWpBdDVpa3grNFJKSXVXVnd2NXFhL1RTYmdWYzFqRWJZMkFSZTNaZlN2OXAvZUdnRWRxTElETUtwRlNQcTJnbnY3N3pLLzM3cjhGWjVzK0s5RmppazBOVUJlbGxrc21SSllSNXh2dWNtamM2d3pBZFpOWnpXYmN3NHAxQmpFMHdvMXR2aDd6VG0xZTlzcDUyQURKeG85WXowODJlczFvc1RBczNYWEVPdWtNb1NrWXkrdmlyQ1YvNEtxWU9IZFMyS04rNmxhb0RCNUVzRnZRaE51dy9iNlBxbi85QUN1a0FacU1IcUsxbUtLMEU0VDJzTFRZeTBwYVlJWTB2ejhVQ1B0U2ZxdHgxUk01OG03aTc3NmpOTTczZ1RZN1B1UmRUK0dpVXdnck5EMnhvbXJvbzQyZE5pNUtpaUFnZlVVTDdwS2kxcGkwM1Y1T3NWOXp4WDJYWmlqem16dXpIbEx2SFlFdE5obFZyU0Izelo2TDIvb0w1MnFzNGtweUpPVGFLOEx3c2xDVmZzYTNqUU83WmxJZVNrRU9RSXZQVGR5WDQrZW1vcUJDdkxjemJCcXhXUFpXcVY3aEM5KzVHRWhNTFdiaHdHRk9tak9YaGgvL0hnZ1dwZE8wYVFFcUsrRVEvcWtsV1FWRmVtQzQ2ZXBSOWMxK202a0FLSFo5NWpNNFhEVkdiSnVIcFdhUStPNU5Rb2dsNzZDYmFQbmdmNFZFZDJQSFFERnd2ejZFODlrSk1SUTRrdDRJdTNJbytiU3ZHYTIvbXZNL2U1L0RuWDVIMzJFdFlMK2lPUGRDUDNxL01WU2Q1UzUyZGZxMHczVlJPN01iNnNiRTgwMXI3dlc0OXpiTGFLNVFURGpIVjc0M0d0Tm1vSi85WUFhVWxGUVFGK1JNYUdlTFpMVk1wdTg2S3FyR2Z2ZlZFZGJPZkpoMFFNRDFnUUNlbVRidVVlKzU1aTdDd1FGNTQ0U2FlZU9Jajh2TkxlZU9OS1N4Y3VKTHQyNU40L2ZXNytlNjdYMW01Y3RkWmNmTStGVXl2bW5hY3ZBTU9qRmFKeTkrTnhLL042YWZ0YWtoSEpJMHcvZGM3UGxaN3VlNmlSaWRKT0YweWRydWJvRUFqYmxsQi9FNVdGTXhHUFVtSHkzajVoZEVNSE5BWmwwdkdZTkN4YzljaEhueGlQWEdkQXFoeXVtdnE2M1VTSldWT0xHWTlSb05PdlVmOTh0OTNKbXZTZ1pZRTAxTHN5dzJQSHBGWndDUWhGWlp3ZU8vOXRNMUtKdTNLOHoxNXBuZnVZRzFpUHBkYzhRbEtkRGhTUVFPQjgrb2IrRHhUYllNUlA1VjBiWjRVNXlKTVo5dzFpOElscTJ1bW84WVV6TnQwdG12L1JNeGJUelU1M1o0dVRPL2V2WnZrNUdSQ1FrSnFYTDNWYzlPeVRNNk4wN0Z2MnRXb0RKWmhBMmk3ZUo3cVJyMXUzVHJlZi85OTFjVmJXS2JqNHVMbzM3OS9zeGVtUlhkT2FVQmZGU1N6QlRrOUhmMkZGeEw0MkhSKzJIR0EwYU1lVlorei9vY1hHVFdvSjZWejUrSGV0ZzFkYkN4S2xVZ0RxV2s0bi9TZXRyY1hhYnF3SloxRGJrbXllaTNUNm1kYlpIYlFlU0oxaTV6Rzk0Wlg4V2l2VEdKRGpvTWtJOExwZEJ0elgzVmZpMDFTOGM5S2NGZC91a2NiMkphc2h5dzNHVCt2SnpwcXUwcm02WVh0ZUhGL0ZHL2ttVEZZUEJHL1UyU3g2VjFuRStZTXd2U1l6amJlbUJpSHhhQ2orTGlUeUdBakdDVDBjMHVRdnF4b2NxdzNWZUZjaE9tQThTdlBPc09VclpxZ2FSNW9zVEF0V3Rqb01lNHFKZGxFcEtaaTZkd1pWMUV4K2MrL1FPVkxMOWFvbnFobG1uSTM3ajE3a1gvZTZGbGlkKytEa3JnWFNVUjlDZ3p3dUJScUtOS1A3VSs5MlNrZTVsQ2cvU092MHVPaCsydGdldi9zK1J4YjhBakNyVTdib3hxWDV1S2oycjRPTFFtbTRTRmx5VGVUaWIrMFA0WlYzK0JPeldKaGJqaS9HQU40TjdZUTAvL2VZUFBkOHhrMmFSUEpHYmZSTlZBSDc3MUxtcjROajZSWStHSkJNbkh0clNRZGRURnlaQUNQUERLWU5Xc1NXYkRnTUIwNitISGtpSnRPblF3Y1BsektuRGtEdVBYV0VUejExRExlZVNlTDZHZ0xtWm1pVjdSWnBHUlpMTUVGOTBscUpPK0VwNTZoYU9WUG5QLzk1L2lIaEZDWWxjWEI2RDdrZG9raklEV0ppTW5YMGVudFY1RVVoWVNyYmthMzZoZXFPclRCWEM3Y1N6Mmc0Q2pKeGpuOWRnWS9PNVBERDg3QWNza29LdFBTc1QvOEV2MHFFN0ZZcklqbzBhb3JzNXJLV3ZobE5GM0svN2VzV1pOUjJTdnZxSG1pdlVVZmFpUGc3M2MwL2NBR2F2aGZmNFVtV1gwRmYrL0M4MkJ5Tm5uNVpZU0dCbEJRVUVaNFdBQTl1clZyYkUxL3luZlFDdjRDcHNQREF4Z3pwamRMbG16RmFqVXhhZElndnY1NkI1V1ZEcTY5ZGpEcjF1MGpMNitNaVJQN3MzOS9Gb2NQNS9QeTlmMklETlorSnZKVXdvWmRvekZLZWozTHRMdEtJWE5ESlRFanJTUjhWRXFWT1BZZ1FiK2JnOGxQck1MVzBZaC91ek9iN2tjclRCZVhOSkN6cnJxalZZQVdBVExxYVpNSU1tbTFHakdaakRYSElCd09KNVdWVHFxSFMyMHppa3dQT2crSU42WWd3VUgrbXZTMUpjSDBnZlM4UnVjQnNYaDBPZDNFZFc2RFk5ZXZaTVVQUUNkMXAvT3VMWlFHaHBDVmZoeWp5WlB2L25SS3o5aHdUZTE2cnNHMDgyZ3UrL3RlcmJhZmFNTGFsSTIxZTMwMURWTzk0U2ZwSkhvbGZJR3hmYTA3ZFVOdGY3b3c3YjJuZ09HZmYvNVpEUjRtUEdqS0ZxOGdmL3BMVFhaMzJMeEhDTGp4TXZYZFJCQ3pJVU9HTUdiTW1BYXY4MFZXcGFyNkhFZERkeEpucDhXWkdxT0pqVnQyTVdMTVA5VmFHOWI5aytFWERRQ253M1BlcG9FZ2FFMitVSjBLa3RtaVNWOWJFcUMySkZucnVubDMxeWtrVmx1anYrNVd5TVJPKzlFYlBGMXR0QVN6SmVOTkR1UzFKZFRmUlpWRGgyS0hoUDBaTEZseGlPUk5aUmc3eURpUDJKZzdNNGRINzF5RXkybkZZS3pFN1pKWWZyZ25rNnF0MU4xTk1vblZ3Y2xVVlRoRE1CMFhabVhOTGYxWmVqQ1BuZG5uTStKWUVGZG1XSkhiYmtUK214bjlQUVZJVzA3TXJPS0xycXBRYzdxcHNjUk5tbU9aL2czUFRMY2ttSDdvdlVZMnJPdDA1SlV4U1F4dlV4dndWL3hwZHNKRjVGVlpmZTN1QnV2LzZ6WnRHOVkxcWJIRXg2aThFcWx2Rjl3Sk8vRi80MDNDN3JsYnZYZkIreDlRY3R1dEdNZU5oeXFIK3JGU0RtZWlaS2FvZnpmY2NoczZZYWwrNVdWUEN0OU8zU0VqRDh6YTFvNVNVYkxYYjZTUmR4YzcvVzQzeHNCQS9OdEYxaXp1eW85bTR4UXBqdW9lem10bTg5bTZkZFUweWJja21FN0t6RmU2aFJqZ3YrK1RxV3ZEYzBlc3ZQM3NCaDUvY1N5em9vclJ2L0VrdTJkOXdYbWp2bFd0emw5OGR3M3hmK3FIN3ZzVnlJZXllRFVqaUlkZVNBZWMzSDkvWjE1OTlTOHNXYktaNjY1YlFZOGU0Unc4NkZLamU0c3NKaVVsQ2tPR1dObTRVZXdHU3VvMzF4UFpXeHRNMTRlK0k5K3Y0L2hiN3pOZ3lZZHFqMmFzLzVHc01hUElPMjhreXE4LzBlNjJld2djUEFqNzE2dXBYUGtMbFcyQzhhc0NweXhqamZESGVtZ3o1aVZmRWpsK0hOYkFRQ3B5YzhsWS9oMWxDWHV4ZkxDQlhtbmZZd3J3TzBGYnRFTGYwZTRqVDI4RjNFd2RyWHRaKzBSdFo4OFVFZnBiU3hFYlVzSTZxZGVUbTFOQVl1SVJ1blp0VDE1ZWlXb2hQblRvR04yNnRhTk5aQml5MitXSkxGdi9TRnhqdzFjY290ZFF2RzdlWW9OREo0TEhxZGtFVHY1WkxFeGxXWGc5NkZRNWZnOXUzdG5iN2F5YmtjZklwOE00dHFzS3BiclpPMTNpejVxL0g2ZjdsUUVNdXMrbW9SVzBWOUVLMDc1dXFOU1Z3T3N0NHYydmR1bE9yS2wxYkxVa21IWWRTajNGMlBJRWwzQkpCb3EzYktWNHhnMUl1djZFdmZjYWZySFJHR3EyZnpVTmpVYWIzZEM1aTZZYm5Hc3duZi9mYjBtL2YwNkQ3WElxdUk1OTdYSENicjc4bEdyc0M2RDZBbExISmsyamFzZStKb2VRNWZ3K3RGMzZXcFAxUkFWZlpGMi9kWGZEK2lwVVZaejZrQlVNaXN5MnJYdDVlT2IzNnZQblB6ZU9Dd2Yzd1NYcEVLbEJwRVk4SkRRSkM0d2UzRitUdnZyU3JscWY3VXM5WDlxMUpja3FZRm9rblJOTDgwcTducnZEN1R6Uk81UG9rR01xOUxuY05tb0M5U0FBQUIvc1NVUkJWQXlHSWtyTFI3UDB3SFFLUzhvcHI3QVRGR0NsWTRkSUFtMFdNQ29VNVZmd3pydWIrT2JqZEVKNkI1SzZlQTBodHQwNG5WYU1JbmV5SGpJTEkzbGhYelQvenJOZ3RialZvd1JPMFFsbkNLWmZ2YXdyZmRyNE0rNzkzUnlaZm94WGw2UncrK1VkQ2IvK1J0eC9MNGN3UGZwYjhuenA5cFBxbmpXWTFxRjZDeHg4SkFqWFlXRmlhcm9NekV6U1VvMldCTk5Ld3ArMXJWK2JicDVtMTVENmZxT3BYV3RoR3JDN2tIckY0a3JZU2NUdTNmajE2NGN6TDQrYzZONWc4NFBnQUVqY0s4NU5RR0F3VXI5dU9EZjloT1crcVFUZmV5K1Z2MnhYQXk5WHpKd0Z4NDVEVURCcUVLVW1pdVRUWXEvdWwxS2pIM2xUQW9pL2ExM3N0U1NZZHU5SlVKei9YY3ptN3NNWTgrVXhXQ0dDdE1nODhQd2dubXRYVE9CL0ZySjV4aXNNbS9nRDUvVTE4MnZDVVI1OTRrSWVlUHdLMnFmdTVmdG5sM0hKVitMY3JKT0xSL3J6OENPRFdiMDZpWVVMMDRpTXRLcXUzeVVsWW9yMHVQOEl1aktiZFZTZHNCbW9EYVlycWxRL2NzKzVYTE9GakE4K3B2aldtNGs5bG9XdGJRZFNYbnVUMGdmdUpidkxCUmhMSElUazVtSG5DQ1k2SUxkcGk3NUNWdjFZQTNSNlNoVTM1VTRYWVpmMGd3bzdsdDV4V0lZTVZEZGhuTGY4Ry9lTDhYUjk0RjdQenBDYVBOMmpJWDRhM1pGYkZFejdZUHBTWVZvbmtaQ1FSbENRSDBuSjJYeitlUUxYWHRPUHJ0MGlLU3V0cEUrZjJKck5MQzNqeXBleHRXZlZ6ODJhT0dQYjJWVDM0ak5SL0hyRmFabzQ2N3Q1SDkxdVovMk1QTTYvejRiTHJ0RHQ2ajZVRnZVaWE4VXk5bjZVbzhLMCtOdVpMRnBoMnVYU3VLRlNUeml4YVZIWFdVUG9ody9xZE1MZERBWnRHeW90Q2FZUHhxaEcwWnFGVGwzbDlaNStFRm9wU2UzUTZXUFUzVVZaMmE1ZUpENkxEU2xhM2YycHhuU2w3ak43WkdoYVozR3V3ZlNSNTk3aTZFc2ZxRTBrOUxUdVprL2REYUQ2ZjIvMzhDMTBtRG5sbE1Qd3R3S3B6TzRUa2N1cnMyYlVrV0I3UUZ0ZWFUZUFKS3VOT0hzaEwrVHZZZVR1anpWTkZiN0lpbW5jcWVkWDRYSWlXY0JnSTZDako5QlpXVm81dUlwUXpaTENYZVYwaTBOYlRJcVdCS2dGMXp5a0NCMDhXMFhvZStqbi85SWtnS0VhcGlzVldOMDluMHRpRTlXSnlPM1dJVWt5aW14RmI2a2tKV1VJM1M0ZUp2S0dWTCtXbU1tRWU3OGZmNzJyRTJNdjdVN0hyaEdrcHh6bmxpdC9JSEhkR3VKNjdNWmRhVWJTVmFFb092UjZXVjFiclU3dnp2akVNS3lTQjZaZFp3aW1OOTh4a00vM0grZGZtN1BZZnR0aFJ0MzNJKzgvZFFGam5yd2JwVmMrN2hkc0dBWmxuOVloLzFhWS9tMjBXcXViZDR1RWFlSHBGeUJ5ZW9DU2wwbmJqRXhNMFZGVUhqaEFicTllNkhyMmc1U2pubnpUWXRTSzcxZnhVVXdQUFVMQTVML2dQM0NBZW0zdUM3T3BmUElKZEZGZFBMbW9OYXlPbXdmVFo3aVB6MFdZSHNkamlueHhGT3NPdWlHbmxNNmQvVGwweUVXSHpnYjYraXVZampqSTdXUmx5dzRIWnFORXg2NEdFZytJWUVRV3JyZzdtcVR0K1J6Y1VZSFZacUN5U0h4SUJTVWJNWnYxUkVUb3lNcXE1SVliSXJucXFsNDg5ZFJXa3BJY0JBWHBWU3QxYmRFRzAvSGYzcXJvRkNneFFQOThoUjQvSmhPM29ZU3N5M3N5K2RJQS92dEZBcjNmZEhLb2c0dk94V2JrUUFNbFFRWXN4UTZrY2pjR25ZUURzYk1PZW92RWNjVkorOXdDbkVqSVpDR1dCa0p2OThZYitmQ1dHN0NZemJqZHpoUE8yUys5L0gxTkg2UnpIYWIzN2swak1OQ1BwS1JzdnZsbUgxZGMwVWZONzF4ZVhrbnYzcjhkVEZmc1Q5SXdYWnpoZ1YvdmRxY0wweGM5R3NMdTkwcW95SFZqRGRYVGVid2YreGFYdHNKMEsweTN3blRTWGszenF4YVF5cW9EMDAzTkNEWEhoMURvOE1pdFJNMjg2NnpBOUtFZWYwWmZWbjdDczM4T2lPU2VMbU53MTRHeFBsSWxtNzZaMnRScnFYOXZoV2xOemVSekpWL2FOYmRYL0ZuL2JrWHNYNnBwYkFtWUZoVUYxSzZKeTJkc1RLSjZiTWZsMXFPWDNNaXlQM3BMT2FtcEY5TjE1QkQ2RE5kUlVpVVJIVzRtOFVnRjBXRm1kcTB2RVhadFJseldnZW1QRDhkb0RxU1BOSStvZHAvaGRvYWprL0p3SzNvTWVyZTZhL2g5Um5jdVNRcERXTVJGUS8wV01KMy81SEVlZTJNdno5elJDOHNWMTdiQzlDazB2dFV5N2R0MDRMTmx1dGt3L1hBMVRBOXNQa3kzdW5uNzFybGFBNUFSOWJKQ2xvTm9KSXJDZFpUbXllajBrdkRTb1VwMGVIWHhzMGpDZ0t1V21CZ2RHUmtDbk1VdlRCaXNPbHlWNmxFcXdzTjBhalR2MGxLRjZHZ2RtWmtWWEg5OUpGZGYzWnNaTTM0bU5WWEF0S0ZaTU0zaTloNkJERHF1U01rbXBXMWZwaHd5TVdMV0FUYmNXRXAwWlg5aWx1b3BDWGNSNkRSUTVuSVJhTmRSWlFPanBNTlJKV09XZEJ3elZOR3h3S0pPMmhVOURQanA5VGlxOUNTUE5iSDhBajBmaHpyQW1RWHVRalcvOWdtNzdUY2UxZlJCYWtrdzdYSjdjbXA1TFdXTmFacHdKSkpsRVdqS3dMRmpCU1FtZWR5OGMzS0thTk1tdU1iTnUxMWtHRTZYQzcxT2h5ZHBhZFBGb0Rkb2F0ZGYremRoT1duNlVhZGRvN25SdkwyVzZaSC9EQ1Y3V3hWRjZVNjZqdmRIYjlXeDhmbjhzd3JUUG5uKzFHdkJWamZ2eGxXcTFjMGJjcnRyejUzYzVnekM5UEVQbDNGbzZndHE1M2d0OVkzTlJtb2NqdXA0SEYwV3ppRGk1aXZPQ2t6Zk4vVy9YTHZ5Q3pwVkNSaUJ2WDVoM04xNURDVUdrYnV5dGd6dTJaYlY4MDd0aXU2dDdRdjB0YnA1YS84OCtOS3VMUW1taFp1M2lDNmlMdmNxOWR3YlllZXhYbG5FaEdhcmJ0NU90d1dqMFU1QlFSZXVldkt2bU0wbVVyTEtPWlJjU2JmdVZqcEVXQ2t0YzVKVFZrWFdkbUZjY2ZLZnhYL2kxcEhmZ24wUmJxa2RCaWxiOVNQUEtHakhYQkdNTE5jQ1ZqYzF6ejFEbHVtNmJ0NDc3L3VGR0ZzTVZGVEN4Uk54UDJmNmZiaDVxMjVJRWoyQ1pCSlREZHh3c1owM3ZYbW1IVEhvZFNkN3FvZ0pUZDNnYUhYenBrVmFwc1ZxdHpFMzc1ZytFR1FGV3gwMzc2QmdwTDdWYnQ3M1RpWDR2bnVvM1A0TGl0TkpwYTl1M3EwQnlMUlA4cUttVnBpMlNmTVUyUXdsSWdpMzhJTFdvWjV2cnFweTBiK1BoUTRkekt4WUpUN3NFbGFycmpwQ041aE00QjhnVVZtdVlEOUYvSWJnWUtrNnY3U1ltcTJZVEJLT092bXNQVytselRMZDZZdXhxc3VrUVZFbzBrbmtTUTdFelpaOWJhRFRKeEtGZ1JVRW15V2NWUXJGa2d1N0ltTU8xZU11a1FtbzBGTnNkbUV5NnZEUDExRTZHUFF1aWFBZGJtUWs5U0Ivd1RDRjVWY2JlYldqa1VqWlJBQkdYSkluNEptM0hMNTZyU2JvTzVjRGtIbmJJalg1R0FXRkl2QllFUG41SllTRUJOQ2xXNlJ2aWxwZFc2dlhSLzdueTdYUmViT2swSFpSY3dPUUhkOWR4WnFIYzdsa2ZnUUhQaThsdUtPSmdzUXFoajBSeWxkL09VYjMrQUFHVEFuV0pvVEdXbHJkdkJzTFFPWk5MU1kyVVU0L0FKbXVPaGpVeWNITXhPdTBCaUJyRFVCMkptSGFjZlE0TzNwTXFqNTJjR3Fjcm5HTGx5VE9QN2dNVS9zMi95OHdYVDhBMlllcms3ai90Wi9vVVZtSVhsSFk1eGVxSW43OXN1RCtFZHo4cDdqV0FHUmlzWEtXeXJrTTA2Skp4ZmFOaU9SZG13NnJrTXM3SFVCdlVHb0NpYjN5d1RRZW5CbkUxWCt4c3ZGQUpUa1ZUc2IxRE9iSHhHS2N1UW9YOXBIUWhVWnpSYmZkekxqN0hWeEtPQVpEbmhxQTdOdkRQVTlJa3lVaWV0Y3NEYzhRVE5jTlFQYm1OaWNQNnNkeHpZckR5R1B5a0tjRS9QNERrRlhGb0JmbnkrdVhWcGl1YVpFL1JBQ3lReGtvV2FucU82c0J5R3cyN0srK3JHWmZrVVFBc3N3OE1Ha01RTmFTVW1PbGg0V2Q5UVYvYkg2K0p1aUQydnl5SWxDbmlFWFZxNWVSL2Z0ZDNIZGZPd1lOYXMvdHQvL0NzR0ZXTm0wcUp6RFFvRnFkdFJSdjlGU3pHY0xDZEdSbnk1NERoQ2NWYlRETmt0cjBhT0xsSW1YSU51bm9YK0xpblRsdVRBY1VLcEFwYnlOamQ4dllaQU1XTlFXelJIbUVna3VSVlN0MFVJNk9hZS9xU1RKTFBMM0ZTZWh4c0dUTEJHOVVNQ094OWhHSnh5ODBxL0J3a3JYMldtM3AwYlJhK3BSS081SzFOc3IwMlVpTlZWWlpwcTFENi9XYnlXamdhSFkrUlVYbDJHeit0RzhYaHNNcHpzZjdYZ0tzQVpyMFZXdTcraTZCOWl1MGduOURxYkZLTXB3RXhSaFZaNGV5b3k3OHd2WHFrWVB5WXk0c05zL1BaN0pvaGVtR1VtT0ppUGVWZGpmbEZTN0NRODJlMUZqVmVVZFBUbzNseG1EUW41d2FTejFDb2FqUjgvTUtxdkQzTTJDMTZOVjcxUyt0cWJGYVUyT2RTWmdXK3BWNHg5TWMvM1JsMDJlbXE2M1hiVytZUU53N3p6UTVCSDBCcVlaYzB1dW54cnIxMWx2VmFOd2k1c0NrcDc3anB6MUhHNVZoWkwvMmZEM3JValZXUVd0cXJGYVlibEpacXl0b2RmTVdsdW02NjU3T2tzSnhSYUtzSmpWV0ZyRWgyV3I4bWN5c0FjUU11UVRpVEZ6ZVY4KzN2NWJSTWNSSWlMK0JUdTNNNUZWYU9IQ3NncDBMbGhQVmZ0dEpxYkVDTERKdEpJVkQ2aFByckxmT0VFeUxlN2JJMUZpdGxtbTBucGsrWjFKanBhUmk2VktkR2t1Y2haNDN0MlpvbjlIVVdKdWpCcDVpd1M4aitRZmlLTjFBNUZPTGlMdm56dG84MDYrOVRzN2NxWmdDaHFOVWxGVm5VdFU2L1p4WWIyaldUazByWFdWZnAyYkJTZk9rYXZncXFmZGhUYkxXaCtud2NJbWNIRHN2dnp5QTY2NGJnc2xrVU4xMzc3aGpKUWtKVlFRSDZ5a3Uxdlo2d3NvdExOTlZWUW9WcDB6bnB4V21MenJwd1YxbFNMSEF1NnNkdUV5d280M0M1Qmt1L0RIZ0NsRTRPaEtXWFdLZ1g0YWJDUzlDWVlSQ1lLNmVwYy9DekY1R2Nid2JSRFlRQ1o1SmNERHlYVGNmUFdya3U3WUdqaGc5N3U1cWRFbHZ1WGFMcG5iMWE3dTR3VVlhMEMrRVJhOE5vVmVQWUtyMkpWTDZ4WExDLy9FUWFlbGxkSXdOb0RHWTl2NWRpR0hmdGd0WGRnNFpYUzlreW9QYjJiVkgzVEU0cVZUazNLaEoxaHYrZloyMkRxM3pCSkhpU0ZaazJnV0ZvNWQwdUJXWjdKSThkSkpPL2FjcEVrS2QrMzE2OTJlYVpHM0pidDVuY254cnZaZFdtSmJhMW02cWVlNHRndTY1Q1lzSVpPUjVBWHkxSmhzazRiL2hWUldSbDZPUUg1YmV5TWpoUFhFNjNSaU5lbjdhZUlCUjhZdkJFT0xKOTFIblhsZGUwbzRmZmkyak1MZTAzcjA4dFpRY2JmTkFTd3BBRm52RGZ4b2NXMktFbVBVU0I5UEt5VngySzJIcGlhVEhEL0xrbWQ2MWt3MkhTeGg1L1RJR0RMVlI0RGk5b0U3cG45NnVhV3lkYXdISWhFNDVqeGV3WS9qTlZCM0pPZVdRRVI0WXdobzlhT09IR051RU5qbThUaGVtUC83NFkxYXRXc1hqanovT1J4OTlSSEZ4TWZQbXpjUFB6NDl5dTR0cHIyM2dpNThPblNUSDFTTTdJNnpTL2hZREZSVVZUSjgrbmVEZ1lHNjY2U2JtekpuRCtQSGptVHg1OGduWCtTSnJmdWVHeitVSUJSTGJwTWJlOGRnKys0VDFlNUlaTStKaDlUbnJOc3huZEw5dUZGMzNGNXo3bHFwUm9IMytvTlNST095UXRvQjVmYTc3OEhRZTAyUWZhNm13OTdPYk5ZMnRsdWJtWGYvZHhjd3YwbVI1cmRSZmRpM2s4bzdwR0FQS1NkZ3pqbjZUQjBDdUhrUk1KYXVhQnhFS3JIUWZwZkMvR1d2cDMvOG5uR1grZkpzV3kxVXBJYXFDOUtwT2grWDlTcHp3ekRNSTArSytRV1k5bDNVTEk5NFp4TmdFTTdyMWRzZzd2WG5WSysrNUdJRHN5TEFMenZyWTZyQnB1NmF4MVdKaFdsZ2I3VTdvRUlxU2tZdysvaXJDRjc2R3FVTUhWYlhLdDI2ajZzQUJKSXNGdlVpRjlmTldxdjc1TkZKSUJ6QUw5MkVuV00xUVdpa0NHcHdRMitsVWM1ZTBPZXE4VTNTdWdtUU54Rkcra2NnbkZ4RjNieDJZZnZWMWNsNmNpc2x2R0lwZHdMU20vbWxRbHFGWnYycTZ1S1hDdEhqcHVEZzlTVW1sVEo0Y3hidnZpdk13Um43OGNTK2pSbjFFcjE2UjdOL3Y5T1NMYldJZXFzM3BLYVpLQ1lOQmg2dFJvNlcyUlRSTFRvUnA4ZEZXYjZtWG1Kemw0T08yQm1idmNUTHVlVGMvek5CakxaT1pPbFpFSHBYd0w1UDU5NG9xb2xmSnVJV2xQRU5IemdVSzc5eGhZa2xiZzdwamVrT09pN3Z1c1ROdHNSOTd6UktCTGlpdDMrUE5oR21EUWVMeGgzb3ovZjVlNk4xT1NwZDhpeVA1TUk0ckpuSC9xOW5FUnZzei8vbEJqY0wwdzAvdUlEMnpuSVV2WFVCa21JbWk5LzZIT3ljWC81dXU1ZVV2Q3BqenIzMjRQRWVmYTRwV21PYVpacTU5MUVnaGRSNG9Pa1RUQ0dsZ2VEMnQ3Y3JNNTVyT0thaGxFWFE2ZGFKbmFzc3BXTFgrYjJmOWcyUWUvYTZtSHVrKytOKzFzaW9RRXFobjY5NGlGand6aUhHanU5Tnp4RWRjMENlVWdoSVhJazVZa0orZTdmdEwyUFQxbjdsb2NEZGNMbzlsZXN2V1pJWk4rb1lMZWdWUlV1RkdCQWtQRFRLd2ZXOEJCemJjeFBmckU1bjI5QTRHOTdGUldPckpzKzB0aVZ2djFpUnJTNEpwMDFYdk5LZ0RKZ244OVJJNUtSVmtycm50SkpqKzZYQXhveTc3bW01alEwaXpON2pjMUt6Q2ppL3YwTlN1NXlKTWkwYXFURTVuejlWL3B6STE4NlJNZmQ2R3NYYU9wdCtYcjJEdEZxdXBYWDBCMUlZczArWGw1U29JaDRhR2N1T05OekozN2x3bVRKaWcvdXd0bWNuWjdObDBrT0w4TW9MREF1ZzNyQWZSM2RyVi9IM3g0c1dzWExtU3h4NTdEUEZ6UVVHQkN1VCsvcDRvMjk3aWk2eUZ3MGRVNjZ2WE51blpWSk1DZzVHVFZxQy9iQnBCOCtmeHc2NUVSby8wd1BUNm4rWXpha0IzU2g2ZWpudkZBblJ4bDZHVUZ0ZlpNS3R6cjVPU3pIdUhSMjJka0kzYVVqcTJ3clFtVmEycDVJdGx1dTZkdldORTlGUTNuVUtHTEF3a09xYUVWZkZZajJOMGJwZEp3YkcrTEYwL2tJMDdnc2t0TmhJZTdHVFlnQUt1R3ZNTG9lMFBjdWhvTkhNUFJySW8zNHpaTEJPalUwaVdhdy9RblRSSm5tR1k5cjdQbE1SZ1p2L1M5R2FaTHkzYkN0Tyt0SmIydXVjOFRJdW1FSm1DS3AwUUU0NThPQkg5c0lzSm1ERWR2d3NIb3c4T1FpNHJveW90allxVjMyRi82a2trQWlBODFBUFNUcmVhMlFpUjl0bUgwZ3JUUGpTV3FOb2N5M1JBZ0VSWm1ZZVNOMnlZeUxCaFBWWDN1SUtDVWw1K2VUV3paaDJnVXlkL0RoOCs5ZUt1RnFRVjR1TnRaR2ZiMmJxMUVuOS9IZVVuQmlxdGZpdmZZZHI3NlEyVEZWU0hkaitkaUpqR21uc3EyRG5GeEdPRERNU1ZLeGhsdURUTHhmeGVaalgzNGF4MWxmeHB2cHRqbHh1WWY3V0ppSEkzcVVGNmRvVWJtTHJYenFRRlR1NmI2MGVTU1ZLamZvczNQV0dpYndaTTkrMWxZOUdDd2ZUckhZTGpZQXJGSDMyQnBWOVBWa3U5ZUdEbUhncUxITno5dDI1Tnd2Uy8zMDBteEdiaTVkbUR1UGJLV095LzdLWmt5YmY0anhsR2FsUi9wa3piU3NMK29ocE4wUXJUM2VkMTlobjZ2R2NNUFlGN3ZPNVpubkJqbWxidTlmUTVjZm9oVFplMUpEZnYxTFo5Zkc1WEg0ZDVrOVc3NUdpTGppeDFXbmlDckZFMkhWbEh5dmpnNVdFTUg5cVZMaGQ5aWk1UWoxdzlJR0pEOUtSbkZiTng2WlVNdlNpdUJxWTNiMGxpZVB4WHhFWUZrMTdvZ1dWaDBGWkszYVJ1dVlFTm0xSzQ5YUdOUkhVSUpFdU4vbDlibE1OVE5lbEFTNEpwZlFNd0xkNWFHSEFDOVJLNUtlVmtmbjk3b3pEZGRXd0loMDRUcHQxL2NKZ1dHaVpYMk1sNDdTT09mdkExbFdraS9hUG5DMkx0R0VYN202OGc1b0diMFBuVkhyZHBhbUQ1QXFpTlJSNWZ1M1l0SDN6d0FiZmRkaHU1dWJuMDdObVR2bjIxQjJ0TFNFamd3SUVEUkVSRThONTc3M0hMTGJjd2R1ellrMFQzUmRiQ25yMXJKM0h2WkM1MnpzTkRrYk0zb1I5N0o4RUxGL0REcjRtTXJyWk1yOTh3bjFIbmRhZDQ2alRjYTk5RzEyNFk1QlY0ckpPMUg0ZkdQd3gxWng0SlFnN3MwelFQdE1KMFUxcDY0dCtiQzlQZXUzalhYQUpGMitvVURqZzhpL2pQdXBSd2JmY0VrZUFGUjZrL0RrY29KbE1ocHNBeU5Zclprc1MrWEpjcTBxZENUNU5Naml4UjBGVEEwMWFZSmpod040NnpGSUNzMVRMdDI5aktuWFdKcGptckpzOTAvZHNMS0c1clEwbExVcWRNWGNjNDlCY09RcEhkeU10L1JLN004V1RJQ291R1Vyc2FoTG01cFJXbWZXeTU1c0MwZUVSUWtBZzA1c25MdVdyVlZmVHIxNUhubnZ1S2Yvd2ppYkF3QS9uNVRmT0J2NzlFZWJtVElVUDgrZWFiVzlpMDZTRHg4ZC9RbzBjWWlZbXVCczVOK3c3VC9ncVVHeVF1elhadzlVWUhPODQzTVR4SklUUk41ckpwRm14MmlTSVViajFjeFVVSmJpckNkQVM1ZFhSYzZhS3loNTdYNDQyc2pOUXpkVWNsNDc1eDhjNFVLM2VzY21GMHdzUTdMYlN2VUdnd2JyY1BNSzNYU3p3eXJTY3pIdTZEVVhGVDh1VnlxdlluNGI3OHp6ejBWajVmTDgrcTZWV3RNTzI5WU5MRUtGNmRlejVoSmlmRkh5NUJzVmZoOTVkcmVQSERiRjVhY0VBOSs2NFZwbTF6aERQNzJTMUZqenMxVFVaSk45NTcxbVdOVy95R0psbGJGRXgzcllacEdXSnRldEtQbERIdjhYNWNmZVVBOVV5OE9PTjh3WVN2YUJOaHBjaWhFQldrNDFCR0NSdS9qbWZva0Rvdy9YTVN3eWN0cFhOTUVGa2xNc0VtaWR4Y085dFd4S3ZucGtOQ0Evaml5NTFNbjdPSDJBNEJwQmU1MWJOM29pZ3A1eDVNUzQxWXBwc0QwODExU2xSYVlmcUV5YzJSazQ4enZ3aGptQTFUMjdCbVRYeStBR3BqTUMyQytzMmVQWnVoUTRjeWV2VG9ac2toTGxxL2ZqMmJOMjlteG93WjZBVEExaXUreUZyWXUrL0o4NnVBNmJBdzVLTS9vUjg3aGVDRnJ6VUMwL2ZqWHJzSVhmdVJrSi92Z2VsbWxKQjlDWnJtMTFhWTlxMXhUeGVtNno4dFJnSVJQcWZRcnVPMlVDZFA5RHhHMXpicE5Sc29LY2RqZWVGQUpPOFZHQW14eUFSS2tLSDE2LzFIZ3VuZllUVHZWcGoyYld5ZE5reUxHRExDd2h3UkRHbEhVQ2c3d1l0S0NtNFBWaE1VbElOUldDZTBEcVNUMzZNVnBuM3IyMlpacHNVajJyZlhjZlNvbmVIRGc3anV1cTVxUUpUOC9BcWVlMjR2c2JHQnBLZTdxNE81TkM1UVlLQkVhYW1URVNNQytlS0xtOWk4T1pINCtHK0ppd3NoSlVYa0theC9yZTh3SFFBSXAvMjdEbFR5MTMrNENNU0FHeDFIL3d3NytzRjd2VTJrR1dEZUQ1WDBYQzFEaUk3UVNyMGE1ZnVUVzQzOHQ0dVo2RXFaaWFsVi9PbHJGKzIzNjdHZ0oyZU16TEx4T2w3dmJGTFROSWhBNWMyeFRBOGNzVng1KzdVaEREd3ZGRWZ5SVlyLyt6bm1IdDFZYiszSC9VL3RJUy8veEJEb3ZzSzBhTUh3TUxNSzFQR1hSMU81WVN1bDM2NGg0TEt4SEF6dXpwMzMvOHpPRFJNMUxVcEM1NWliUHpKOTFNdkdxaGM4WHFWSjFsYVk5cTNCTlZ1bXZUQ3RnTTBzVVZRZ00vWUNmeDU3Y0RCUjdVUDQzK2M3ZVdiaElhekJldXd5ZEFwdUdxWVBGOHRZZEZCWjdPWWY5M1htK21zSGNQUm9FWE5lMmNyYWJlWFlRblVVVmRWRzl2Nmp3WFNRVHVKNHFzY3lIWjZlU0ZxZE05TmVOKys2bHVsV21LN1ZmUzE1cG4wYktiN1Y5Z1ZRVzVLc0RjSzB1OW95ZlhTRFJwZ2U0YkZNKytoKzZPMkJWcGoyVFJlMTFqNlRNRjBUaUxMYTlYdHZ0Wlg2ODY1RlhCSnpoRFVaSGJnbXhhYUsxc2NrcXk3ZFlzWGp2YTVKbWY5SU1DMGF3ODJKcWJHbXIvQllwczlTTk85V21HNVNRMCtvY05vd0xlNG1WdUVDamtJQ3dHTDAvTC9xM1NORG9mRHljSG9zMHFlNVdtK0ZhZC82dHRrd0xmcE9BSFIwdEo3TVRMRjhjOUs1czRXME5MZTZHYUoxUThRVEdWem15aXREeU1pb1pNZU95Z2J5UzN0ZnluZVl0aWhnMTBQL1FoZDM3SEdSSG12Z3BmWTZyaXBUNkhYRXpmdGRER1FGNmhtVzY2UjNzY3k3MFViY0JyZ3lYNlp0Z1l2M1lrMVVtWFYwS1hOeDVTRW5DVEVteWlRRm95VFJQOHZKQjUyTkZKbDA2S3Rkdld1YVg2TmwybTUzS1dhZFF1blM3N0R2M2dkL3ZwenA3eFd6WkdsR2d6M1pISmoyM3VqYStCaitOWHNRd2U1eWlqOVlnbVF5WUxudVN2d2l3elFCYWt1QzZWWTNiOThtQXUwdy9ib1kzWjZieTlBbFRFOXFlakZQMzkrSFVSZDNZZlRWWDlHaG5ZMGpwU0ovSG5TMjZadTBUQjhTVm1jWk9nVHFPSkpkeEE5ZlhNbTZIMU41OXJXOWRJa05KalcvMWlvdGZFQ1ZsUHMwNld0TGN2TStsV1c2TGt6WEQwRFdDdE9uMW5PbjA2bUlmUGRucS9nQzB5MUoxbGJMdEc4YTlVY0pRTlpRcTNqZHZzWGZ1a29LS1NJaXQxTkhGN09iMUNvOTRveGR6ZStiY3V1dS80QldtRzUxOHo3WEE1QTFOdFc0cTBGTG5LZFdvVXZFaGRJMTcveGtBODlvWVREZE9RT1VhTittNVROWlc4cVVlaCtLMFhiSCtsRjhQWnNoQXFoRjBDeWJUU0l2VDlZVWRLeis4MFJLTEpHdkd2VDQrVW1uaU9qdE8weUxaNms1MWdUc2lvU0k2dTZlT0tDcGdGR0NLb1VBa1g1SWhLRTBpRWxlSVZ5QlBQR3pEa3dPUmMxcDJGWld5QkhSZ05Ub3hkWGJRM29KSEo3c25pZHRBbW1FYVVkcVJrYnhoNTlGRzd2RXN0azJpUHVlMkUxT3JzaTEzWEE1SFpnV2Qyd2JZVkdEazEwMnZnUGxxMytrWXUzR3pEWXZQcVZKQjFvU1RHZk5lamxEVVRoclkwdVN5SXg2NmtGTjdab2EyU2VEc3lnckVwbGRqdTNWSkt2a3RVeFhxNmRKSitFb2xlblh4VVRIOWhhVy9WU0N2MDFIdWROalNhNFAwMDZYRzZOQnorWTZidDRxVEN2Z2I1UW9MNUw1ODhnZzByUHQ3RWx4WUFyVTRUZ2hQWloybU80ODlvZlNnaEtuY0U1cHNoUnVHOWRrSFcrRjh2SFhhS29yMllMcy9wKzlaOVZTV1N0TS94NHMwKzErdUxPMHdGbW1xVjN0NHo3Ujh2cHFuZHp1MnM0QlM2RWg5b2lmTjJocTE2cXFxaUtUeVhSbWs3SnJmaVB4WGF1cXNGZ3NKMGI2YXVUNmxpUnJTN0pNRC92Yi8wcUxTNnMwNmFzUFhhdTVha2lRMmI3aG5lczE2V3YrMEp0SzVTSnRZMHV6QUQ1VWxFS0Q3T0ViUDlRa3EwaU41Y090YTZxS2pnZ1ZydHd5eEloZzNvckhlN0JaUlR0TUMrdUU1dlhBR1E5QUpwRXA3ZCttNlJ0TG42Y2JidGZmb1p0MzlvU3hwWEpKeVZrYlc1TE5abSsvZkkwbWZZMTRhazJUT3ZEOHdCKzVzOXZ1RTFSeDhQS2JPVnptOFo0NHpaS1pPK3NTVFRyUTZKbnAweFRBbDh0YkdFeDNtUURLSWxDaWZIbkpNMU5YeWtRdlRaRjZwSDZuN1g0bnc3UzRUZ0MxQ0NRbXZBNkVsYm54U055bmZrcElpSVRkcmxCWjZibmY2ZVdaUGprMWxuaDZUUFZHVHA2SWtBc0VLSkFsZ1V2eVpHa0lFUkF0K0ZpQ3R1Sm9nZ0pIZGRVdVJ4SkVWUHRQQ3V3WHM1MTZmV1BIdlRUQzlQRW41a3pRWDNIWm9zYy9Mby82K0xPMEpydmlkR0hhKzRESjEzVmszcXlCbWY3bHhWT003ZHRvMG9HV0JOTjdCdnhwZ2lJcmk1U3pNTFlreE5qU1RlbS9jNVdtZGsyTDdEdkJEWXRRenNJOElKR3BrM1JUT21YdjBTUnJmWmdXQThGaWtMQ0xnSVJ1QlgrYnZnYWtoYTVwdGt5THlqVkE3VllqNzFzQ2ROaEY1UGw2ZG1pdGJ0NS9uNzEzNWpmcjhwN0lMM0kyR1RIcStLYUxteHg3M2dxT3kyc2pLVGQya1M0b29Fd2FNWFNPOVlHN250ZHlZNjB3L1h1d1RFL2QrL2JNci9LMlA1SG5MRzJ5WFVzdi9rREw2NnQxaXZvTWJMS3V6aFpjWnI3MDBqbUJ6ODdVMUs0T2grTjJXWllYNkhRNnZ5WnZmb1lyS0lwU0xFblNneWFUNlQwdHQyNUpzalp1bVE1RjlzWE5PNzg2QUptV0JxcFhSNnViOXpOdmJaNzUvYmJNSndwTHE1clUxMmFJY2NwTGdnUE5aWmNPaVprejg4NkxOT2xyOFRPdnozU3UzdnFFVWxqeS95NnJ6aFpRWmhvL2JFN2cwL2Rva3JXNU1PMDFQb2dCS1RLaE5taU0wTm9SR21FNjR2bklDVEx1UllxQ3ByWDJHWVZwaVV3ay9SUnAzeFpOMzloR1lWcTBTV051M3FjS1FDYlc1WlU2RGo0U2hPdHdiV1QwVXpYeHdNd2tUZDVmK1hObno2ejZjZDBUU25IUi83KytCZ1dWbWNlTW14TTZmWVltZlkzOHg5b0pia1U1NVRyck40VHBUQXpTbE54L2p0T2tBNzhIbVA0L0RES0tmZmFlUTZZQUFBQUFTVVZPUks1Q1lJST0iLz4KPC9kZWZzPgo8L3N2Zz4K"
}, function(e, n, r) {
    var t = r(18);
    "string" == typeof t && (t = [
        [e.i, t, ""]
    ]);
    var a = {
        insert: "head",
        singleton: !1
    };
    r(5)(t, a);
    t.locals && (e.exports = t.locals)
}, function(e, n, r) {
    (e.exports = r(4)(!1)).push([e.i, "#nr-webreader-error {\n    position: fixed;\n    bottom: 20px;\n    left: 20px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    max-width: 90%;\n    padding: 16px;\n    background: white;\n    box-shadow: 0 0 8px rgba(0, 0, 0, 0.16);\n    border-radius: 8px;\n}\n\n.nr-webreader-error-image {\n    color: crimson;\n    margin-right: 8px;\n}\n\n.nr-webreader-error-image > i {\n    font-size: 34px;\n}", ""])
}, function(e, n) {
    e.exports = function(e) {
        if (Array.isArray(e)) {
            for (var n = 0, r = new Array(e.length); n < e.length; n++) r[n] = e[n];
            return r
        }
    }
}, function(e, n) {
    e.exports = function(e) {
        if (Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e)) return Array.from(e)
    }
}, function(e, n) {
    e.exports = function() {
        throw new TypeError("Invalid attempt to spread non-iterable instance")
    }
}, function(e, n, r) {
    "use strict";
    r(23)("tokenizer");

    function t(e) {
        var n = e.trim();
        return n = n.replace("  ", " ")
    }

    function a(e, n) {
        this.username = e || "Guy", this.entry = null, this.sentences = null, this.botname = "string" == typeof n ? n : "ECTOR"
    }
    a.prototype = {
        setEntry: function(e) {
            this.entry = t(e), this.sentences = null
        },
        getSentences: function() {
            if (!this.entry) return [];
            var e = this.entry.split(" "),
                n = e.filter((function(e) {
                    return e.endsWith(".") || e.endsWith("!") || e.endsWith("?")
                })),
                r = this,
                a = new RegExp("\\W?" + r.botname.normalize() + "\\W?"),
                i = new RegExp("\\W?" + r.username.normalize() + "\\W?"),
                o = e[0];
            return r.sentences = [], e.reduce((function(e, s) {
                var d = s.normalize(),
                    l = s;
                return -1 !== d.search(a) ? l = s.replace(r.botname, "{yourname}") : -1 !== d.search(i) && (l = s.replace(r.username, "{myname}")), -1 != n.indexOf(e) && (r.sentences.push(t(o)), o = ""), o = o + " " + l, s
            })), r.sentences.push(t(o)), this.sentences
        },
        getTokens: function(e) {
            var n = 0;
            return "number" == typeof e && (n = e), this.sentences[n].split(" ")
        }
    }, e.exports = a
}, function(e, n, r) {
    (function(t) {
        n.log = function(...e) {
            return "object" == typeof console && console.log && console.log(...e)
        }, n.formatArgs = function(n) {
            if (n[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + n[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
            const r = "color: " + this.color;
            n.splice(1, 0, r, "color: inherit");
            let t = 0,
                a = 0;
            n[0].replace(/%[a-zA-Z%]/g, e => {
                "%%" !== e && (t++, "%c" === e && (a = t))
            }), n.splice(a, 0, r)
        }, n.save = function(e) {
            try {
                e ? n.storage.setItem("debug", e) : n.storage.removeItem("debug")
            } catch (e) {}
        }, n.load = function() {
            let e;
            try {
                e = n.storage.getItem("debug")
            } catch (e) {}!e && void 0 !== t && "env" in t && (e = t.env.DEBUG);
            return e
        }, n.useColors = function() {
            if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
            if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
            return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
        }, n.storage = function() {
            try {
                return localStorage
            } catch (e) {}
        }(), n.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.exports = r(25)(n);
        const {
            formatters: a
        } = e.exports;
        a.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }
    }).call(this, r(24))
}, function(e, n) {
    var r, t, a = e.exports = {};

    function i() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function s(e) {
        if (r === setTimeout) return setTimeout(e, 0);
        if ((r === i || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
        try {
            return r(e, 0)
        } catch (n) {
            try {
                return r.call(null, e, 0)
            } catch (n) {
                return r.call(this, e, 0)
            }
        }
    }! function() {
        try {
            r = "function" == typeof setTimeout ? setTimeout : i
        } catch (e) {
            r = i
        }
        try {
            t = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            t = o
        }
    }();
    var d, l = [],
        c = !1,
        p = -1;

    function u() {
        c && d && (c = !1, d.length ? l = d.concat(l) : p = -1, l.length && m())
    }

    function m() {
        if (!c) {
            var e = s(u);
            c = !0;
            for (var n = l.length; n;) {
                for (d = l, l = []; ++p < n;) d && d[p].run();
                p = -1, n = l.length
            }
            d = null, c = !1,
                function(e) {
                    if (t === clearTimeout) return clearTimeout(e);
                    if ((t === o || !t) && clearTimeout) return t = clearTimeout, clearTimeout(e);
                    try {
                        t(e)
                    } catch (n) {
                        try {
                            return t.call(null, e)
                        } catch (n) {
                            return t.call(this, e)
                        }
                    }
                }(e)
        }
    }

    function g(e, n) {
        this.fun = e, this.array = n
    }

    function h() {}
    a.nextTick = function(e) {
        var n = new Array(arguments.length - 1);
        if (arguments.length > 1)
            for (var r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
        l.push(new g(e, n)), 1 !== l.length || c || s(m)
    }, g.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = h, a.addListener = h, a.once = h, a.off = h, a.removeListener = h, a.removeAllListeners = h, a.emit = h, a.prependListener = h, a.prependOnceListener = h, a.listeners = function(e) {
        return []
    }, a.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, a.cwd = function() {
        return "/"
    }, a.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, a.umask = function() {
        return 0
    }
}, function(e, n, r) {
    e.exports = function(e) {
        function n(e) {
            let n = 0;
            for (let r = 0; r < e.length; r++) n = (n << 5) - n + e.charCodeAt(r), n |= 0;
            return t.colors[Math.abs(n) % t.colors.length]
        }

        function t(e) {
            let r;

            function o(...e) {
                if (!o.enabled) return;
                const n = o,
                    a = Number(new Date),
                    i = a - (r || a);
                n.diff = i, n.prev = r, n.curr = a, r = a, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                let s = 0;
                e[0] = e[0].replace(/%([a-zA-Z%])/g, (r, a) => {
                    if ("%%" === r) return r;
                    s++;
                    const i = t.formatters[a];
                    if ("function" == typeof i) {
                        const t = e[s];
                        r = i.call(n, t), e.splice(s, 1), s--
                    }
                    return r
                }), t.formatArgs.call(n, e), (n.log || t.log).apply(n, e)
            }
            return o.namespace = e, o.enabled = t.enabled(e), o.useColors = t.useColors(), o.color = n(e), o.destroy = a, o.extend = i, "function" == typeof t.init && t.init(o), t.instances.push(o), o
        }

        function a() {
            const e = t.instances.indexOf(this);
            return -1 !== e && (t.instances.splice(e, 1), !0)
        }

        function i(e, n) {
            return t(this.namespace + (void 0 === n ? ":" : n) + e)
        }

        function o(e) {
            return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
        }
        return t.debug = t, t.default = t, t.coerce = function(e) {
            if (e instanceof Error) return e.stack || e.message;
            return e
        }, t.disable = function() {
            const e = [...t.names.map(o), ...t.skips.map(o).map(e => "-" + e)].join(",");
            return t.enable(""), e
        }, t.enable = function(e) {
            let n;
            t.save(e), t.names = [], t.skips = [];
            const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                a = r.length;
            for (n = 0; n < a; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.substr(1) + "$")) : t.names.push(new RegExp("^" + e + "$")));
            for (n = 0; n < t.instances.length; n++) {
                const e = t.instances[n];
                e.enabled = t.enabled(e.namespace)
            }
        }, t.enabled = function(e) {
            if ("*" === e[e.length - 1]) return !0;
            let n, r;
            for (n = 0, r = t.skips.length; n < r; n++)
                if (t.skips[n].test(e)) return !1;
            for (n = 0, r = t.names.length; n < r; n++)
                if (t.names[n].test(e)) return !0;
            return !1
        }, t.humanize = r(26), Object.keys(e).forEach(n => {
            t[n] = e[n]
        }), t.instances = [], t.names = [], t.skips = [], t.formatters = {}, t.selectColor = n, t.enable(t.load()), t
    }
}, function(e, n) {
    var r = 1e3,
        t = 6e4,
        a = 36e5,
        i = 24 * a;

    function o(e, n, r, t) {
        var a = n >= 1.5 * r;
        return Math.round(e / r) + " " + t + (a ? "s" : "")
    }
    e.exports = function(e, n) {
        n = n || {};
        var s = typeof e;
        if ("string" === s && e.length > 0) return function(e) {
            if ((e = String(e)).length > 100) return;
            var n = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
            if (!n) return;
            var o = parseFloat(n[1]);
            switch ((n[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return 315576e5 * o;
                case "weeks":
                case "week":
                case "w":
                    return 6048e5 * o;
                case "days":
                case "day":
                case "d":
                    return o * i;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return o * a;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return o * t;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return o * r;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return o;
                default:
                    return
            }
        }(e);
        if ("number" === s && isFinite(e)) return n.long ? function(e) {
            var n = Math.abs(e);
            if (n >= i) return o(e, n, i, "day");
            if (n >= a) return o(e, n, a, "hour");
            if (n >= t) return o(e, n, t, "minute");
            if (n >= r) return o(e, n, r, "second");
            return e + " ms"
        }(e) : function(e) {
            var n = Math.abs(e);
            if (n >= i) return Math.round(e / i) + "d";
            if (n >= a) return Math.round(e / a) + "h";
            if (n >= t) return Math.round(e / t) + "m";
            if (n >= r) return Math.round(e / r) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, n, r) {
    var t = r(28);
    "string" == typeof t && (t = [
        [e.i, t, ""]
    ]);
    var a = {
        insert: "head",
        singleton: !1
    };
    r(5)(t, a);
    t.locals && (e.exports = t.locals)
}, function(e, n, r) {
    (e.exports = r(4)(!1)).push([e.i, ".nr-sentence-highlight-light{\n    background: #B5C687 !important;\n    color:#0d3b55 !important;\n    z-index: 1000;\n}\n\n.nr-word-highlight-light{\n    background-color:#0d3b55 !important;\n    color:#E7ECEE !important;\n    z-index: 1000;\n}\n\n.nr-sentence-highlight-dark{\n    background: #0d3b55 !important;\n    color:#E7ECEE !important;\n    z-index: 1000;\n}\n\n.nr-word-highlight-dark{\n    background-color:#EFD369 !important;\n    color:#393E3E !important;\n    z-index: 1000;\n}\n\n.nr-sentence-highlight-ice{\n    background: #F1F3F4 !important;\n    color:#373D3E !important;\n    z-index: 1000;\n}\n\n.nr-word-highlight-ice{\n    background-color:#0F7895 !important;\n    color:#FFFFFF !important;\n    z-index: 1000;\n}\n\n.nr-sentence-highlight-warm{\n    background: #ebdcb2!important;\n    color:#605140!important;\n    z-index: 1000;\n}\n\n.nr-word-highlight-warm{\n    background-color:#563e20 !important;\n    color:#E6CCB5!important;\n    z-index: 1000;\n}\n\n.nr-paragraph{\n    display:inline-block;\n}\n\n.nr-sentence{\n    display: inline-block;\n}\n\n.nr-word{\n    display: inline-block;\n}\n\n\n", ""])
}, function(e, n, r) {
    "use strict";
    r.r(n);
    var t = r(0),
        a = r.n(t),
        i = r(1),
        o = r.n(i),
        s = (r(13), r(6), r(17), r(7)),
        d = r.n(s),
        l = r(8),
        c = r.n(l),
        p = {
            icon: {
                icon_name: "speaker",
                icon_size: {
                    width: "60px",
                    height: "60px"
                },
                icon_position: "bottom-left",
                icon_position_offsets: {},
                icon_color: "#1B7DF9",
                text_box: !0,
                text_box_greeting: "Listen",
                text_box_background_color: "#ffffff",
                text_box_font_size: "18px",
                text_box_font_color: "#000000",
                show_in_mobile: !0,
                mob_icon_size: {
                    width: "40px",
                    height: "40px"
                },
                mob_icon_position: "bottom-left",
                mob_icon_position_offsets: {},
                mob_text_box: !1
            },
            bar: {
                settings_default_voice: "Matthew *",
                settings_default_speed: 1,
                settings_highlight_colour_scheme: "light"
            }
        },
        u = {
            settings_default_voice: "Matthew *",
            settings_default_speed: 1,
            settings_highlight_text: !0,
            settings_highlight_colour_scheme: "light",
            settings_auto_scroll: !1,
            settings_dyslexia_fonts: !1
        },
        m = {
            trigger: "nr-webreader-trigger-container",
            trigger_icons: "nr-webreader-icons",
            trigger_mask: "circle-mask",
            trigger_img: "nr-webreader-icon-img",
            trigger_textbox: "nr-webreader-trigger-textbox",
            trigger_text: "nr-webreader-trigger-text",
            bar: "nr-webreader-trigger-bar",
            btn_backward: "nr-webreader-backward-btn",
            btn_backward_img: "nr-webreader-backward-img",
            btn_read: "nr-webreader-read-btn",
            btn_read_img: "nr-webreader-btn-change",
            btn_forward: "nr-webreader-forward-btn",
            btn_forward_img: "nr-webreader-forward-img",
            btn_settings: "nr-webreader-frame-trigger",
            btn_settings_img: "nr-webreader-settings-trigger-img",
            cc_textbox: "nr-webreader-cc-textbox",
            btn_settings_backward: "nr-webreader-settings-backward-btn",
            btn_settings_backward_img: "nr-webreader-settings-backward-img",
            btn_settings_read: "nr-webreader-settings-read-btn",
            btn_settings_stop: "nr-webreader-settings-stop-btn",
            btn_settings_stop_img: "nr-webreader-settings-stop-img",
            btn_settings_read_img: "nr-webreader-settings-btn-change",
            btn_settings_forward: "nr-webreader-settings-forward-btn",
            btn_settings_forward_img: "nr-webreader-settings-forward-img",
            progress: "test",
            frame_progress: "nr-webreader-play-progress",
            settings_container: "nr-webreader-settings-menu",
            settings_check: "nr-webreader-frame-check",
            btn_settings_close: "nr-webreader-frame-close",
            speed_text: "nr-webreader-speed-text",
            btn_speed_down: "nr-webreader-speeddown-btn",
            speed_progress: "nr-webreader-range-speed",
            btn_speed_up: "nr-webreader-speedup-btn",
            voice_list: "nr-webreader-voices",
            voice_menu: "nr-webreader-voice-menu",
            highlight_check: "nr-webreader-highlight-check",
            highlight_colour_scheme_list: "nr-webreader-highlight-colour-scheme",
            highlight_colour_scheme_menu: "nr-webreader-cc-menu",
            auto_track_check: "nr-webreader-scroll-check",
            dyslexic_font_check: "nr-webreader-font-check",
            btn_cc_zoom_in: "nr-webreader-cc-zoomIn",
            btn_cc_zoom_out: "nr-webreader-cc-zoomOut",
            btn_locate: "nr-webreader-locate-btn",
            btn_locate_img: "nr-webreader-locate-img"
        },
        g = {
            "Matthew *": {
                gender: "Male",
                name: "Matthew",
                locale: "en-US",
                display_locale: "US English",
                display_name: "Matthew *",
                origin_name: "Matthew"
            },
            David: {
                gender: "Male",
                name: "Justin",
                locale: "en-US",
                display_locale: "US English",
                display_name: "David",
                origin_name: "Justin"
            },
            James: {
                gender: "Male",
                name: "Joey",
                locale: "en-US",
                display_locale: "US English",
                display_name: "James",
                origin_name: "Joey"
            },
            "Jennifer *": {
                gender: "Female",
                name: "Joanna",
                locale: "en-US",
                display_locale: "US English",
                display_name: "Jennifer *",
                origin_name: "Joanna"
            },
            Kathy: {
                gender: "Female",
                name: "Kimberly",
                locale: "en-US",
                display_locale: "US English",
                display_name: "Kathy",
                origin_name: "Kimberly"
            },
            Mary: {
                gender: "Female",
                name: "Salli",
                locale: "en-US",
                display_locale: "US English",
                display_name: "Mary",
                origin_name: "Salli"
            },
            Polly: {
                gender: "Female",
                name: "Ivy",
                locale: "en-US",
                display_locale: "US English",
                display_name: "Polly",
                origin_name: "Ivy"
            },
            Linda: {
                gender: "Female",
                name: "Kendra",
                locale: "en-US",
                display_locale: "US English",
                display_name: "Linda",
                origin_name: "Kendra"
            },
            John: {
                gender: "Male",
                name: "Brian",
                locale: "en-GB",
                display_locale: "British English",
                display_name: "John",
                origin_name: "Brian"
            },
            Emily: {
                gender: "Female",
                name: "Emma",
                locale: "en-GB",
                display_locale: "British English",
                display_name: "Emily",
                origin_name: "Emma"
            },
            Charlotte: {
                gender: "Female",
                name: "Amy",
                locale: "en-GB",
                display_locale: "British English",
                display_name: "Charlotte",
                origin_name: "Amy"
            },
            Noah: {
                gender: "Male",
                name: "Russell",
                locale: "en-AU",
                display_locale: "Australian English",
                display_name: "Noah",
                origin_name: "Russell"
            },
            Olivia: {
                gender: "Female",
                name: "Nicole",
                locale: "en-AU",
                display_locale: "Australian English",
                display_name: "Olivia",
                origin_name: "Nicole"
            },
            Gareth: {
                gender: "Male",
                name: "Geraint",
                locale: "en-GB-WLS",
                display_locale: "Welsh English",
                display_name: "Gareth",
                origin_name: "Geraint"
            },
            Padma: {
                gender: "Female",
                name: "Raveena",
                locale: "en-IN",
                display_locale: "Indian English",
                display_name: "Padma",
                origin_name: "Raveena"
            },
            Aditi: {
                gender: "Female",
                name: "Aditi",
                locale: "en-IN",
                display_locale: "Indian English",
                display_name: "Aditi",
                origin_name: "Aditi"
            },
            Isabella: {
                gender: "Female",
                name: "Penelope",
                locale: "es-US",
                display_locale: "US Spanish",
                display_name: "Isabella",
                origin_name: "Penelope"
            },
            "Matías": {
                gender: "Male",
                name: "Miguel",
                locale: "es-US",
                display_locale: "US Spanish",
                display_name: "Matías",
                origin_name: "Miguel"
            },
            Alejandro: {
                gender: "Male",
                name: "Enrique",
                locale: "es-ES",
                display_locale: "Castilian Spanish",
                display_name: "Alejandro",
                origin_name: "Enrique"
            },
            Lucia: {
                gender: "Female",
                name: "Conchita",
                locale: "es-ES",
                display_locale: "Castilian Spanish",
                display_name: "Lucia",
                origin_name: "Conchita"
            },
            Esma: {
                gender: "Female",
                name: "Filiz",
                locale: "tr-TR",
                display_locale: "Turkish",
                display_name: "Esma",
                origin_name: "Filiz"
            },
            Elsa: {
                gender: "Female",
                name: "Astrid",
                locale: "sv-SE",
                display_locale: "Swedish",
                display_name: "Elsa",
                origin_name: "Astrid"
            },
            Olga: {
                gender: "Female",
                name: "Tatyana",
                locale: "ru-RU",
                display_locale: "Russian",
                display_name: "Olga",
                origin_name: "Tatyana"
            },
            Sergei: {
                gender: "Male",
                name: "Maxim",
                locale: "ru-RU",
                display_locale: "Russian",
                display_name: "Sergei",
                origin_name: "Maxim"
            },
            Elena: {
                gender: "Female",
                name: "Carmen",
                locale: "ro-RO",
                display_locale: "Romanian",
                display_name: "Elena",
                origin_name: "Carmen"
            },
            Mariana: {
                gender: "Female",
                name: "Ines",
                locale: "pt-PT",
                display_locale: "Portuguese",
                display_name: "Mariana",
                origin_name: "Ines"
            },
            Joao: {
                gender: "Male",
                name: "Cristiano",
                locale: "pt-PT",
                display_locale: "Portuguese",
                display_name: "Joao",
                origin_name: "Cristiano"
            },
            Manuela: {
                gender: "Female",
                name: "Vitoria",
                locale: "pt-BR",
                display_locale: "Brazilian Portuguese",
                display_name: "Manuela",
                origin_name: "Vitoria"
            },
            Miguel: {
                gender: "Male",
                name: "Ricardo",
                locale: "pt-BR",
                display_locale: "Brazilian Portuguese",
                display_name: "Miguel",
                origin_name: "Ricardo"
            },
            Lena: {
                gender: "Female",
                name: "Maja",
                locale: "pl-PL",
                display_locale: "Polish",
                display_name: "Lena",
                origin_name: "Maja"
            },
            Jakub: {
                gender: "Male",
                name: "Jan",
                locale: "pl-PL",
                display_locale: "Polish",
                display_name: "Jakub",
                origin_name: "Jan"
            },
            Kacper: {
                gender: "Male",
                name: "Jacek",
                locale: "pl-PL",
                display_locale: "Polish",
                display_name: "Kacper",
                origin_name: "Jacek"
            },
            Zofia: {
                gender: "Female",
                name: "Ewa",
                locale: "pl-PL",
                display_locale: "Polish",
                display_name: "Zofia",
                origin_name: "Ewa"
            },
            Daan: {
                gender: "Male",
                name: "Ruben",
                locale: "nl-NL",
                display_locale: "Dutch",
                display_name: "Daan",
                origin_name: "Ruben"
            },
            Roos: {
                gender: "Female",
                name: "Lotte",
                locale: "nl-NL",
                display_locale: "Dutch",
                display_name: "Roos",
                origin_name: "Lotte"
            },
            Ingrid: {
                gender: "Female",
                name: "Liv",
                locale: "nb-NO",
                display_locale: "Norwegian",
                display_name: "Ingrid",
                origin_name: "Liv"
            },
            Seoyeon: {
                gender: "Female",
                name: "Seoyeon",
                locale: "ko-KR",
                display_locale: "Korean",
                display_name: "Seoyeon",
                origin_name: "Seoyeon"
            },
            Takumi: {
                gender: "Male",
                name: "Takumi",
                locale: "ja-JP",
                display_locale: "Japanese",
                display_name: "Takumi",
                origin_name: "Takumi"
            },
            Hana: {
                gender: "Female",
                name: "Mizuki",
                locale: "ja-JP",
                display_locale: "Japanese",
                display_name: "Hana",
                origin_name: "Mizuki"
            },
            Francesco: {
                gender: "Male",
                name: "Giorgio",
                locale: "it-IT",
                display_locale: "Italian",
                display_name: "Francesco",
                origin_name: "Giorgio"
            },
            Giulia: {
                gender: "Female",
                name: "Carla",
                locale: "it-IT",
                display_locale: "Italian",
                display_name: "Giulia",
                origin_name: "Carla"
            },
            Gunnar: {
                gender: "Male",
                name: "Karl",
                locale: "is-IS",
                display_locale: "Icelandic",
                display_name: "Gunnar",
                origin_name: "Karl"
            },
            Helga: {
                gender: "Female",
                name: "Dora",
                locale: "is-IS",
                display_locale: "Icelandic",
                display_name: "Helga",
                origin_name: "Dora"
            },
            Gabriel: {
                gender: "Male",
                name: "Mathieu",
                locale: "fr-FR",
                display_locale: "French",
                display_name: "Gabriel",
                origin_name: "Mathieu"
            },
            "Chloé": {
                gender: "Female",
                name: "Celine",
                locale: "fr-FR",
                display_locale: "French",
                display_name: "Chloé",
                origin_name: "Celine"
            },
            "Adèle": {
                gender: "Female",
                name: "Chantal",
                locale: "fr-CA",
                display_locale: "Canadian French",
                display_name: "Adèle",
                origin_name: "Chantal"
            },
            Vicki: {
                gender: "Female",
                name: "Vicki",
                locale: "de-DE",
                display_locale: "German",
                display_name: "Vicki",
                origin_name: "Vicki"
            },
            Ida: {
                gender: "Female",
                name: "Marlene",
                locale: "de-DE",
                display_locale: "German",
                display_name: "Ida",
                origin_name: "Marlene"
            },
            Johann: {
                gender: "Male",
                name: "Hans",
                locale: "de-DE",
                display_locale: "German",
                display_name: "Johann",
                origin_name: "Hans"
            },
            Line: {
                gender: "Female",
                name: "Naja",
                locale: "da-DK",
                display_locale: "Danish",
                display_name: "Line",
                origin_name: "Naja"
            },
            Mikkel: {
                gender: "Male",
                name: "Mads",
                locale: "da-DK",
                display_locale: "Danish",
                display_name: "Mikkel",
                origin_name: "Mads"
            },
            Seren: {
                gender: "Female",
                name: "Gwyneth",
                locale: "cy-GB",
                display_locale: "Welsh",
                display_name: "Seren",
                origin_name: "Gwyneth"
            }
        };

    function h() {
        var e = !1;
        return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) && (e = !0), e
    }

    function b(e) {
        var n;
        switch (e) {
            case "en-US":
                n = "en-US";
                break;
            case "en-GB":
                n = "en-GB";
                break;
            case "en-AU":
                n = "en-AU";
                break;
            case "en-GB-WLS":
                n = "en-GB-WLS";
                break;
            case "en-IN":
                n = "en-IN";
                break;
            case "es-US":
                n = "en-US";
                break;
            case "es-ES":
                n = "es-ES";
                break;
            case "tr-TR":
                n = "tr-TR";
                break;
            case "sv-SE":
                n = "sv-SE";
                break;
            case "ru-RU":
                n = "ru-RU";
                break;
            case "ro-RO":
                n = "ro-RO";
                break;
            case "pt-PT":
                n = "pt-PT";
                break;
            case "pt-BR":
                n = "pt-BR";
                break;
            case "pl-PL":
                n = "pl-PL";
                break;
            case "nl-NL":
                n = "nl-NL";
                break;
            case "nb-NO":
                n = "nb-NO";
                break;
            case "ko-KR":
                n = "ko-KR";
                break;
            case "ja-JP":
                n = "ja-JP";
                break;
            case "it-IT":
                n = "it-IT";
                break;
            case "is-IS":
                n = "is-IS";
                break;
            case "fr-FR":
                n = "fr-FR";
                break;
            case "fr-CA":
                n = "fr-CA";
                break;
            case "de-DE":
                n = "de-DE";
                break;
            case "da-DK":
                n = "da-DK";
                break;
            case "cy-GB":
                n = "en-GB-WLS";
                break;
            default:
                n = "en-US"
        }
        return n
    }

    function f(e) {
        return new Promise((function(n, r) {
            if (null !== document.getElementById("nr-webreader-error")) r("ERR_ERROR_MESSAGE_EXIST");
            else {
                var t = document.createElement("div");
                t.innerHTML = e;
                var a, i = [];
                for (a = document.getElementsByTagName("body")[0]; t.children.length > 0;) i.push(t.children[0]), a.appendChild(t.children[0]);
                n()
            }
        }))
    }
    var w = "",
        x = "",
        v = !0,
        y = T(),
        k = null;

    function V(e) {
        if ("" != e && null != e && v) {
            var n = function(e) {
                var n = "",
                    r = "",
                    t = !0;
                switch (e) {
                    case 5e3:
                        n = "ERR_CONVERT_FAILED", r = "Failed to convert. Please try again after a while.";
                        break;
                    case 5001:
                        n = "ERR_TEXT_NOT_READABLE", t = !1;
                        break;
                    case 5002:
                        n = "ERR_INVALID_REQUEST", r = "There is configuration issue", t = !1;
                        break;
                    case 5003:
                        n = "ERR_EMPTY_TEXT";
                        break;
                    case 5004:
                        n = "ERR_TEXT_TOO_LONG";
                        break;
                    case 5005:
                        n = "ERR_URL_LIMIT", r = "Number of monthly url limit reached", t = !1;
                        break;
                    case 5008:
                        n = "ERR_PROD_WIDGET", r = "Please use test widget id on localhost", t = !1;
                        break;
                    case 5009:
                        n = "ERR_WEBSITE_NOT_AUTHORIZED", r = "Please authorize your website", t = !1;
                        break;
                    case 5010:
                        n = "ERR_PAGEVIEW_LIMIT", r = "Number of daily pageview limit reached", t = !1;
                        break;
                    case "Limit Exceeded":
                        n = "Limit Exceeded", r = "Number of daily TTS request reached", t = !1;
                        break;
                    default:
                        n = e
                }
                "" == r && (r = n);
                return {
                    message: n,
                    description: r,
                    isTemp: t
                }
            }(e);
            w = n.message, x = n.description, v = n.isTemp
        }
    }

    function U() {
        return {
            message: w,
            description: x,
            isTemp: v
        }
    }

    function R(e) {
        y ? (document.getElementById("nr-webreader-frame-error-text").innerText = w, document.getElementById("nr-webreader-frame-bar").classList.add("nr-show-error")) : (document.getElementById("nr-webreader-trigger-error-text").innerText = w, document.getElementById("nr-webreader-icons").classList.add("nr-show-error")), !0 === e && (null !== k && (clearTimeout(k), k = null), k = setTimeout((function() {
            y ? document.getElementById("nr-webreader-frame-bar").classList.remove("nr-show-error") : document.getElementById("nr-webreader-icons").classList.remove("nr-show-error"), k = null
        }), 1e4))
    }

    function N() {
        document.getElementById("nr-webreader-progress-circle-outside").onclick = R, document.getElementById("nr-webreader-read-btn").onclick = R, document.getElementById("nr-webreader-forward-btn").onclick = R, document.getElementById("nr-webreader-backward-btn").onclick = R, document.getElementById("nr-webreader-settings-read-btn").onclick = R, document.getElementById("nr-webreader-settings-forward-btn").onclick = R, document.getElementById("nr-webreader-settings-backward-btn").onclick = R, document.getElementById("nr-webreader-trigger-textbox").onclick = R
    }

    function T() {
        var e, n = !1;
        return e = navigator.userAgent || navigator.vendor || window.opera, (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0, 4))) && (n = !0), n
    }
    var Z, F, E = [],
        W = {
            "top-right": "nr-trigger-position-rt",
            "top-left": "nr-trigger-position-lt",
            "bottom-right": "nr-trigger-position-rb",
            "bottom-left": "nr-trigger-position-lb"
        },
        S = "https://webreader.naturalreaders.com/webreader-icons/",
        M = {};
    new Array, new Array;

    function _(e) {
        return new Promise((function(n) {
            var r = e.nr_webreader_config.icon.icon_color.replace("#", "*");
            (function(e) {
                return (F = document.createElement("OBJECT")).classList.add("nr-webreader-trigger-preload"), F.id = "nr-webreader-icon-img", F.data = e[0], F.setAttribute("aria-label", "Webreader Icon"), Z = document.getElementsByTagName("body")[0], E.push(F), Z.appendChild(F), new Promise((function(e, n) {
                    F.onload = function() {
                        e()
                    }
                }))
            })([S + e.nr_webreader_config.icon.icon_name + ".svg#" + r, S + "rewind2.svg", S + "play2.svg", S + "forward2.svg", S + "max2.svg"]).then((function(r) {
                ! function(e) {
                    new Promise((function(n) {
                        f(c.a).then((function(r) {
                            ! function() {
                                for (var e in m) M[e] = document.getElementById(m[e])
                            }(),
                            function(e) {
                                l = e.icon,
                                    function(e, n, r) {
                                        if (null != e) {
                                            var t = r.replace("#", "*");
                                            null != n && n ? M.trigger_img.data = "https://webreader.naturalreaders.com/webreader-icons/animation/" + e + "s.svg#" + t : (F.classList.remove("nr-webreader-trigger-preload"), F.classList.add("nr-webreader-trigger-image"), document.getElementById("nr-webreader-icon-img-preload").appendChild(F))
                                        }
                                        document.documentElement.style.setProperty("--second", r), h() && document.getElementById("nr-webreader-progress-circle-outside").setAttribute("style", "pointer-events: none;")
                                    }(l.icon_name, l.icon_animated, l.icon_color), c = l.trigger_opacity, null != c && (M.trigger_icons.style.opacity = c),
                                    function(e, n) {
                                        var r = "",
                                            t = /\d/;
                                        if (n && (t.test(n.top) || t.test(n.bottom) || t.test(n.right) || t.test(n.left))) {
                                            r = "nr-trigger-position-custom";
                                            var a = document.createElement("style");
                                            a.type = "text/css";
                                            var i = ".nr-trigger-position-custom {";
                                            M.trigger, n.top && (i += "top:" + n.top + ";", t.test(n.left) || t.test(n.right) || ("top-left" === e ? i += "left:0px;" : "top-right" === e && (i += "right:0px;"))), n.bottom && (i += "bottom:" + n.bottom + ";", t.test(n.left) || t.test(n.right) || ("bottom-left" === e ? i += "left:0px;" : "bottom-right" === e && (i += "right:0px;"))), n.left && (i += "left:" + n.left + ";", t.test(n.top) || t.test(n.bottom) || ("top-left" === e ? i += "top:0px;" : "bottom-left" === e && (i += "bottom:0px;"))), n.right && (i += "right:" + n.right + ";", t.test(n.top) || t.test(n.bottom) || ("top-right" === e ? i += "top:0px;" : "bottom-right" === e && (i += "bottom:0px;"))), a.innerHTML = i + "}", document.getElementsByTagName("head")[0].appendChild(a)
                                        } else r = W[e];
                                        M.trigger.classList.add(r), void 0 !== M.bar_container && M.bar_container.classList.add(r)
                                    }(l.icon_position, l.icon_position_offsets),
                                    function(e) {
                                        if (null != e) {
                                            var n = parseInt(e.width.replace("px", "")),
                                                r = n - 8;
                                            if (document.documentElement.style.setProperty("--iconwidth", r + "px"), document.documentElement.style.setProperty("--iconradius", r / 2 + "px"), document.documentElement.style.setProperty("--barmargin", 0 - n / 2 + "px"), document.documentElement.style.setProperty("--barpadding", n / 2 + "px"), document.documentElement.style.setProperty("--nrcpradius", n + "px"), document.documentElement.style.setProperty("--nrchradius", n / 2 + "px"), document.documentElement.style.setProperty("--iconheight", n + "px"), n < 40) {
                                                var t = n - 4,
                                                    a = .631 * t;
                                                document.documentElement.style.setProperty("--baritem", a + "px"), document.documentElement.style.setProperty("--barplay", t + "px")
                                            }
                                        }
                                    }(l.icon_size),
                                    function(e) {
                                        if (null != e && h()) {
                                            var n = "zoom: " + e + "; -moz-transform: scale(" + e + ");";
                                            M.trigger.setAttribute("style", n)
                                        }
                                    }(l.icon_mobile_scale), i = e.icon, i.text_box ? (function(e, n) {
                                        null != e || (e = "auto");
                                        var r = "nr-webreader-trigger-text-right";
                                        "auto" == e ? "top-right" != n && "bottom-right" != n || (r = "nr-webreader-trigger-text-left") : "left" == e && (r = "nr-webreader-trigger-text-left"), M.trigger_icons.classList.add(r)
                                    }(i.text_box_position, i.icon_position), null != (d = i.text_box_greeting) && (M.trigger_text.innerText = d), null != (s = i.text_box_background_color) && (M.trigger_textbox.style.backgroundColor = s), function(e, n) {
                                        if (null != e) {
                                            M.trigger_text.style.fontSize = e;
                                            var r = parseInt(n.height.replace("px", "")),
                                                t = M.trigger_text.offsetHeight,
                                                a = M.trigger_text,
                                                i = window.getComputedStyle(a).getPropertyValue("border-width").replace("px", ""),
                                                o = window.getComputedStyle(a).getPropertyValue("padding-top").replace("px", "");
                                            if (a.style.lineHeight = t - 2 * (parseInt(i) + parseInt(o)) + "px", t <= r);
                                            else {
                                                var s = parseInt((t - r) / 2);
                                                M.trigger_text.style.marginTop = "0px", M.trigger_text.style.marginBottom = "0px", M.trigger_img.style.marginTop = s + "px", M.trigger_img.style.marginBottom = s + "px"
                                            }
                                        }
                                    }(i.text_box_font_size, i.icon_size), null != (o = i.text_box_font_color) && (M.trigger_text.style.color = o)) : M.trigger_icons.classList.add("nr-webreader-trigger-text-none"), a = e.bar,
                                    function(e) {
                                        if (function(e) {
                                                var n = M.voice_list;
                                                for (var r in n.options.length = 0, e) {
                                                    var t = document.createElement("option");
                                                    t.text = e[r].display_locale + " " + e[r].display_name, t.value = JSON.stringify({
                                                        originName: e[r].origin_name,
                                                        displayName: e[r].display_name,
                                                        locale: e[r].locale
                                                    }), n.add(t)
                                                }
                                            }(g), function(e) {
                                                var n = M.voice_menu;
                                                for (var r in n.innerHTML = "", e) {
                                                    var t = document.createElement("div");
                                                    t.classList.add("nr-sprite");
                                                    var a = b(e[r].locale);
                                                    t.classList.add(a);
                                                    var i = document.createElement("div");
                                                    i.classList.add("nr-webreader-dropdown-menu-item-text"), i.innerText = e[r].display_locale + " " + e[r].display_name;
                                                    var o = document.createElement("div");
                                                    o.classList.add("nr-webreader-dropdown-menu-item"), o.appendChild(t), o.appendChild(i);
                                                    var s = document.createElement("li");
                                                    s.appendChild(o), s.setAttribute("value", JSON.stringify({
                                                        originName: g[r].origin_name,
                                                        displayName: g[r].display_name,
                                                        locale: e[r].locale
                                                    })), n.appendChild(s)
                                                }
                                            }(g), null != e) {
                                            var n = M.voice_menu.querySelectorAll("li");
                                            e in g ? (M.voice_list.value = JSON.stringify({
                                                originName: g[e].origin_name,
                                                displayName: g[e].display_name,
                                                locale: g[e].locale
                                            }), document.getElementById("nr-webreader-voice-name").innerText = g[e].display_locale + " " + g[e].display_name, document.getElementById("nr-webreader-voice-flag").classList.add(b(g[e].locale))) : M.voice_list.options.length > 0 && (M.voice_list.selectedIndex = 0, document.getElementById("nr-webreader-voice-name").innerText = g[p.bar.settings_default_voice].display_locale + " " + g[p.bar.settings_default_voice].display_name, document.getElementById("nr-webreader-voice-flag").classList.add(b(g[p.bar.settings_default_voice].locale))), n[M.voice_list.selectedIndex].classList.add("selected")
                                        }
                                    }(a.settings_default_voice), t = a.settings_default_speed, null != t && (M.speed_progress.value = t), z(a.settings_highlight_text),
                                    function(e) {
                                        if (null != e) {
                                            var n = M.highlight_colour_scheme_menu.querySelectorAll("li");
                                            M.highlight_colour_scheme_list.value = e, document.getElementById("nr-webreader-color-name").innerText = e, n[M.highlight_colour_scheme_list.selectedIndex].classList.add("selected")
                                        }
                                    }(a.settings_highlight_colour_scheme), r = a.settings_auto_scroll, null != r && (M.auto_track_check.checked = r), n = a.settings_dyslexia_fonts, null != n && (M.dyslexic_font_check.checked = n, n ? M.cc_textbox.classList.add("dyslexicfonts") : M.cc_textbox.classList.remove("dyslexicfonts"));
                                var n;
                                var r;
                                var t;
                                var a;
                                var i, o, s, d;
                                var l, c
                            }(e.nr_webreader_config), n()
                        }))
                    }))
                }(e), n()
            }), (function(e) {
                n({
                    err: {
                        error: e
                    }
                })
            }))
        }))
    }

    function z(e) {
        if (null != e) {
            M.highlight_check.checked = e;
            for (var n = document.getElementsByClassName("nr-webreader-highlight-row"), r = 0; r < n.length; r++) n[r].style.display = e ? "flex" : "none"
        }
    }

    function J() {
        this.widgetChannel = null, this.readerChannel = null, this.settingsChannel = null
    }
    var Y = r(9),
        G = r.n(Y);

    function C(e, n, r) {
        var t = this;
        t.isReading = !1, t.init = !0, t.isOpen = !1, t.readInit = !1, t.readProgressUnit = 0, t.setUIOnPlay = function() {
            void 0 !== t.callbackPlay && t.callbackPlay();
            t.isReading = !0
        }, t.setUIOnPause = function() {
            void 0 !== t.callbackPause && t.callbackPause();
            t.isReading = !1
        }, t.setUIOnLoading = function() {
            void 0 !== t.callbackLoading && t.callbackLoading()
        }, t.setCC = function(e) {
            return se.apply(this, arguments)
        }, t.showCC = !1, t.isSmallScreen = T(), t.dragDisplace = null, t.callbackLoading, t.callbackPlay, t.callbackPause, t.debounce = function(e) {
            var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 250,
                t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return function() {
                var a = this,
                    i = arguments,
                    o = function() {
                        n = null, t || e.apply(a, i)
                    },
                    s = t && !n;
                clearTimeout(n), n = setTimeout(o, r), s && e.apply(a, i)
            }
        };
        var i = window.getComputedStyle(document.body).getPropertyValue("--base"),
            s = window.getComputedStyle(document.body).getPropertyValue("--second"),
            d = window.getComputedStyle(document.body).getPropertyValue("--first"),
            l = {},
            c = !1,
            p = 0,
            u = !1;

        function g(e) {
            if (document.getElementById("nr-webreader-trigger-check").checked = !document.getElementById("nr-webreader-trigger-check").checked, 0 !== t.readProgressUnit) {
                var n = e.target.getBoundingClientRect();
                ee(function(e, n, r) {
                    var t = 0;
                    t = e > r.width / 2 ? 50 * n / r.height : 50 * (r.height - n) / r.height + 50;
                    return t
                }(e.clientX - n.left, e.clientY - n.top, n))
            }
        }

        function h(e) {
            e.addEventListener("keyup", (function(n) {
                document.activeElement === e && 13 === n.keyCode && (n.preventDefault(), e.click())
            }))
        }

        function b(e) {
            var n = Array.from(e.querySelectorAll(".focusable"));
            e.addEventListener("keydown", (function(r) {
                document.activeElement, document.activeElement === e && (40 == r.keyCode ? (r.preventDefault(), n[0], n[0].focus()) : 38 == r.keyCode && (r.preventDefault(), n[n.length - 1].focus()))
            }));
            for (var r = function(r) {
                    var t = n[r];
                    t.addEventListener("keydown", (function(a) {
                        document.activeElement, document.activeElement === t && (a.keyCode, 40 == a.keyCode ? (a.preventDefault(), n[r + 1] ? n[r + 1].focus() : e.focus()) : 38 == a.keyCode && (a.preventDefault(), n[r - 1] ? n[r - 1].focus() : e.focus()))
                    }))
                }, t = 0; t < n.length; t++) r(t)
        }

        function f() {
            var e = l.voice_menu;
            setTimeout((function() {
                document.activeElement, e.contains(document.activeElement) || document.activeElement == document.getElementById("nr-webreader-voice-menu-btn") || (document.getElementById("nr-webreader-voice-check").checked = !1)
            }), 0)
        }

        function w() {
            var e = l.highlight_colour_scheme_menu;
            setTimeout((function() {
                document.activeElement, e.contains(document.activeElement) || document.activeElement == document.getElementById("nr-webreader-highlight-colour-menu-btn") || (document.getElementById("nr-webreader-ccc-check").checked = !1)
            }), 0)
        }

        function x(e) {
            var n = l.highlight_colour_scheme_menu,
                r = this.querySelector(".nr-webreader-dropdown-menu-item-text").innerText;
            document.getElementById("nr-webreader-color-name").innerText = r;
            var t = this.getAttribute("value"),
                a = l.highlight_colour_scheme_list,
                i = new Event("change", {
                    bubbles: !0
                });
            a.value = t, a.dispatchEvent(i);
            var o = n.querySelector("li.selected");
            if (this.classList.contains("selected"));
            else if (this.classList.add("selected"), null != o) {
                o.classList.remove("selected");
                var s = "icon-" + o.querySelector(".nr-webreader-dropdown-menu-item-text").innerText.toLowerCase();
                document.getElementById("nr-webreader-color-icon").classList.remove(s)
            }
            document.getElementById("nr-webreader-ccc-check").checked && (document.getElementById("nr-webreader-ccc-check").checked = !1, document.getElementById("nr-webreader-highlight-colour-menu-btn").focus());
            var d = "icon-" + l.highlight_colour_scheme_list.value;
            document.getElementById("nr-webreader-color-icon").classList.add(d)
        }

        function v(e) {
            var n = l.voice_menu,
                r = this.querySelector(".nr-webreader-dropdown-menu-item-text").innerText;
            document.getElementById("nr-webreader-voice-name").innerText = r;
            var t = this.getAttribute("value"),
                a = l.voice_list,
                i = new Event("change", {
                    bubbles: !0
                });
            a.value = t, a.dispatchEvent(i);
            var o = n.querySelector("li.selected");
            this.classList.contains("selected") || (this.classList.add("selected"), null != o && o.classList.remove("selected"), document.getElementById("nr-webreader-voice-flag").classList = this.querySelector(".nr-sprite").classList), document.getElementById("nr-webreader-voice-check").checked && (document.getElementById("nr-webreader-voice-check").checked = !1, document.getElementById("nr-webreader-voice-menu-btn").focus())
        }

        function y(e) {
            setTimeout((function() {
                document.getElementById("nr-webreader-voice-check").checked && l.voice_menu.focus()
            }), 0)
        }

        function k(e) {
            setTimeout((function() {
                document.getElementById("nr-webreader-ccc-check").checked && l.highlight_colour_scheme_menu.focus()
            }), 0)
        }

        function Z(e) {
            e.target, "nr-webreader-settings-menu" === e.target.id && (l.settings_check.checked = !1, F())
        }

        function F() {
            setTimeout((function() {
                var e = l.settings_check.checked;
                e ? (J.readerChannel.port1.postMessage({
                    fn: "setIsCCOpen",
                    value: !0
                }), J.readerChannel.port1.postMessage({
                    fn: "grabText"
                }), l.trigger.style.visibility = "hidden") : (J.readerChannel.port1.postMessage({
                    fn: "setIsCCOpen",
                    value: !1
                }), l.trigger.style.visibility = "visible", l.btn_settings.focus(), t.isSmallScreen && (document.getElementById("nr-webreader-frame-menu").classList.remove("open"), document.getElementById("nr-webreader-settings-content").classList.remove("open"), document.getElementById("nr-webreader-textbox-check").checked = !1, u = !1))
            }), 0)
        }

        function E() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            setTimeout((function() {
                t.isSmallScreen ? (l.settings_check.checked || (l.settings_check.checked = !0, l.trigger.style.visibility = "hidden"), l.settings_check.checked && !t.isReading && e && W()) : (document.getElementById("nr-webreader-trigger-check").checked || (document.getElementById("nr-webreader-trigger-check").checked = !0), document.getElementById("nr-webreader-trigger-check").checked && !t.isReading && e && W());
                l.trigger_mask.focus()
            }), 0)
        }

        function W() {
            t.readInit && (t.isReading ? (J.readerChannel.port1.postMessage("pause"), t.setUIOnPause()) : J.readerChannel.port1.postMessage("play"))
        }

        function S() {
            J.readerChannel.port1.postMessage("forward")
        }

        function M() {
            J.readerChannel.port1.postMessage("back")
        }

        function Y() {
            J.readerChannel.port1.postMessage("relocateText")
        }

        function C() {
            I("+").then((function(e) {
                O(e)
            }))
        }

        function B() {
            I("-").then((function(e) {
                O(e)
            }))
        }

        function I(e) {
            return new Promise((function(n) {
                var r = l.cc_textbox,
                    t = window.getComputedStyle(r, null).getPropertyValue("font-size"),
                    a = parseFloat(t);
                "+" === e ? n(a += 5) : "-" === e && n(a -= 5)
            }))
        }

        function O(e) {
            var n = l.cc_textbox;
            e >= 19 && (n.style.fontSize = e + "px")
        }

        function D() {
            var e = l.btn_read_img,
                n = l.btn_settings_read_img;
            l.trigger_img;
            t.isReading = !0, j(e, "#pause2", s), j(n, "#pause2", s), l.progress.style.display = "block", l.btn_read.style.pointerEvents = "", l.btn_settings_read.style.pointerEvents = "", e.classList.remove("nrSpin"), n.classList.remove("nrSpin"), t.isSmallScreen, t.showCC && !l.settings_check.checked && (l.cc_integrated_check.checked = !0), l.trigger_textbox.style.display = "none"
        }

        function H() {
            var e = l.btn_read_img,
                n = l.btn_settings_read_img;
            l.trigger_img;
            t.isReading = !1, j(e, "#play2", s), j(n, "#play2", s), l.progress.style.display = "none", l.btn_read.style.pointerEvents = "", l.btn_settings_read.style.pointerEvents = "", e.classList.remove("nrSpin"), n.classList.remove("nrSpin")
        }

        function L() {
            var e = l.btn_read_img,
                n = l.btn_settings_read_img;
            j(e, "#pause2", s), j(n, "#pause2", s), l.btn_read.style.pointerEvents = "none", l.btn_settings_read.style.pointerEvents = "none", e.classList.add("nrSpin"), n.classList.add("nrSpin")
        }

        function j(e, n) {
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            e.innerHTML = "<use xlink:href='" + n + "'></use>"
        }

        function Q(e) {
            e < p && ge(), me(p, e), $(e)
        }

        function X(e) {
            var n = e.target.value.toLowerCase();
            J.readerChannel.port1.postMessage({
                fn: "setHighlightColourScheme",
                value: n
            }), localStorage.setItem("settings_highlight_colour_scheme", n)
        }

        function P() {
            var e = l.highlight_check.checked;
            z(e), localStorage.setItem("settings_highlight_text", e), J.readerChannel.port1.postMessage({
                fn: "setHighlight",
                value: e
            })
        }

        function K(e) {
            var n = JSON.parse(e.target.value);
            J.readerChannel.port1.postMessage({
                fn: "setVoice",
                value: n.originName
            }), localStorage.setItem("settings_default_voice", n.displayName)
        }

        function A() {
            var e = l.auto_track_check.checked;
            localStorage.setItem("settings_auto_scroll", e), J.readerChannel.port1.postMessage({
                fn: "setAutoScroll",
                value: e
            })
        }

        function q() {
            var e = l.dyslexic_font_check.checked;
            localStorage.setItem("settings_dyslexia_fonts", e), e ? l.cc_textbox.classList.add("dyslexicfonts") : l.cc_textbox.classList.remove("dyslexicfonts")
        }

        function $(e) {
            ne(e), l.frame_progress.value = e
        }

        function ee(e) {
            t.readInit && (Q(e), function(e) {
                var n = e % t.readProgressUnit;
                n >= t.readProgressUnit / 2 ? e -= n : e = parseFloat(e) + n;
                var r = Math.round(e / t.readProgressUnit);
                J.readerChannel.port1.postMessage({
                    fn: "readIndex",
                    indexToRead: r
                })
            }(e))
        }

        function ne(e) {
            if (null != l.frame_progress) {
                var n = l.frame_progress.clientWidth * (1 * e / 100);
                document.documentElement.style.setProperty("--rangeprogress", n + "px"), e >= 100 ? document.documentElement.style.setProperty("--trackballprogress", s) : e <= 0 ? document.documentElement.style.setProperty("--trackballprogress", i) : document.documentElement.style.setProperty("--trackballprogress", d)
            }
        }

        function re(e) {
            ae(e), te(e)
        }

        function te(e) {
            l.speed_text.innerText = e
        }

        function ae(e) {
            l.speed_text.innerText = e;
            var n = l.speed_progress.clientWidth * ((1 * e + 10) / 20);
            document.documentElement.style.setProperty("--rangespeed", n + "px"), e >= 10 ? document.documentElement.style.setProperty("--trackballspeed", s) : e <= -10 ? document.documentElement.style.setProperty("--trackballspeed", "#d257fc") : document.documentElement.style.setProperty("--trackballspeed", d)
        }

        function ie() {
            document.body.style.pointerEvents = "none";
            var e = document.getElementById("nr-webreader-trigger-container"),
                n = e.clientWidth,
                r = e.clientHeight;
            e.style.setProperty("width", n + "px"), e.style.setProperty("height", r + "px")
        }

        function oe() {
            document.body.style.pointerEvents = "unset"
        }

        function se() {
            return (se = o()(a.a.mark((function e(n) {
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, ce();
                        case 3:
                            return e.next = 5, de(n);
                        case 5:
                            b(l.cc_textbox), e.next = 11;
                            break;
                        case 8:
                            e.prev = 8, e.t0 = e.catch(0), e.t0;
                        case 11:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 8]
                ])
            })))).apply(this, arguments)
        }

        function de(e) {
            return le.apply(this, arguments)
        }

        function le() {
            return (le = o()(a.a.mark((function e(n) {
                var r, t;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            try {
                                for (r = n.texts, t = 0; t < r.length; t++) r[t] && r[t].text && pe(r[t].text, t);
                                l.cc_textbox.scrollTo(0, 0)
                            } catch (e) {}
                        case 1:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function ce() {
            return new Promise((function(e) {
                for (var n = document.getElementById("nr-webreader-cc-textbox"); n.firstChild;) n.removeChild(n.firstChild);
                e()
            })).catch((function(e) {}))
        }

        function pe(e, n) {
            try {
                var r = document.createElement("P");
                r.classList.add("focusable"), r.tabIndex = "-1";
                var t = document.createElement("nr-sentence");
                r.appendChild(t), t.classList.add("nr-cc-s" + n), t.appendChild(document.createTextNode(e)), r.onclick = function() {
                    J.readerChannel.port1.postMessage({
                        fn: "readIndex",
                        indexToRead: n
                    })
                }, "ontouchstart" in document.documentElement || (r.onmouseover = function() {
                    r.classList.add("nr-cc-mouseOver")
                }), "ontouchend" in document.documentElement ? r.ontouchend = function() {
                    ue(r)
                } : r.onmouseleave = function() {
                    ue(r)
                }, document.getElementById("nr-webreader-cc-textbox").appendChild(r), h(r)
            } catch (e) {}
        }

        function ue(e) {
            e.classList.remove("nr-cc-mouseOver")
        }

        function me(e, n) {
            p = e, window.requestAnimationFrame((function e() {
                (p += 1) >= 50 && !c && (c = !0, l.progress.classList.add("over50"));
                var r = 3.6 * p + "deg";
                document.documentElement.style.setProperty("--nrdeg", r), p < n && window.requestAnimationFrame(e)
            }))
        }

        function ge() {
            c = !1, l.progress.classList.remove("over50"), me(-1, 0), $(0)
        }

        function he() {
            t.isSmallScreen || (t.dragDisplace.reinit(), re(l.speed_progress.value))
        }

        function be(e) {
            if (t.isSmallScreen) {
                if (document.getElementById("nr-webreader-frame-menu").classList.contains("open")) J.readerChannel.port1.postMessage({
                    fn: "setIsCCOpen",
                    value: !1
                }), document.getElementById("nr-webreader-textbox-check").checked ? document.getElementById("nr-webreader-textbox-check").checked = !1 : (document.getElementById("nr-webreader-frame-menu").classList.remove("open"), document.getElementById("nr-webreader-settings-content").classList.remove("open"));
                else J.readerChannel.port1.postMessage({
                    fn: "setIsCCOpen",
                    value: !0
                }), document.getElementById("nr-webreader-settings-content").classList.add("open"), document.getElementById("nr-webreader-frame-menu").classList.add("open");
                null != e && (u = document.getElementById("nr-webreader-frame-menu").classList.contains("open"))
            }
        }

        function fe(e) {
            setTimeout((function() {
                if (t.isSmallScreen) {
                    document.getElementById("nr-webreader-textbox-check").checked;
                    u || be(null)
                }
                document.getElementById("nr-webreader-textbox-check").checked ? document.getElementById("nr-webreader-settings-container").focus() : document.getElementById("nr-webreader-frame-settings").focus()
            }))
        }

        function we(e, n, r) {
            var t = function(e, n, r) {
                var t = document.createElement("span");
                return t.classList.add("nr-" + n + "Tooltip"), t.style.display = "none", t.innerHTML = r, e.appendChild(t), t
            }(e, n, r);
            e.onmouseover = function() {
                t.style.display = "block", t.style.visibility = "visible"
            }, e.onmouseleave = function() {
                t.style.display = "none"
            }
        }! function(e, r) {
            V(r), _(e).then((function(e) {
                t.readInit = !0,
                    function() {
                        for (var e in m) l[e] = document.getElementById(m[e])
                    }(), void 0 !== e && null == r && V(r = e.err.error),
                    function() {
                        "" == U().message ? (document.getElementById("nr-webreader-progress-circle-outside").onclick = g, l.btn_read.onclick = t.debounce(W), l.btn_forward.onclick = t.debounce(S), l.btn_backward.onclick = t.debounce(M), l.btn_settings_read.onclick = t.debounce(W), l.btn_settings_forward.onclick = t.debounce(S), l.btn_settings_backward.onclick = t.debounce(M), l.trigger_textbox.onclick = E) : N();
                        t.isSmallScreen && (l.trigger_mask.onclick = function() {
                            E(!1)
                        });
                        l.trigger_textbox.onclick = function() {
                            E(!0)
                        }, l.btn_read.onclick = t.debounce(W), l.btn_forward.onclick = t.debounce(S), l.btn_backward.onclick = t.debounce(M), l.btn_settings_read.onclick = t.debounce(W), l.btn_settings_forward.onclick = t.debounce(S), l.btn_settings_backward.onclick = t.debounce(M), l.btn_locate.onclick = Y, l.btn_cc_zoom_in.onclick = C, l.btn_cc_zoom_out.onclick = B, l.settings_container.onclick = Z, l.btn_settings.onclick = F, l.btn_settings_close.onclick = F, document.getElementById("nr-webreader-text-btn").addEventListener("click", be), document.getElementById("nr-webreader-textbox-check").addEventListener("click", fe), t.callbackLoading = L, t.callbackPlay = D, t.callbackPause = H, l.auto_track_check.onclick = A, l.dyslexic_font_check.onclick = q, l.voice_list.onchange = K, document.getElementById("nr-webreader-voice-check").onclick = y, l.voice_menu.onblur = f;
                        for (var e = 0; e < l.voice_menu.querySelectorAll("li").length; e++) l.voice_menu.querySelectorAll("li")[e].onclick = v, l.voice_menu.querySelectorAll("li")[e].onblur = f;
                        l.highlight_check.onclick = P, l.highlight_colour_scheme_list.onchange = X, l.highlight_colour_scheme_menu.onblur = w, document.getElementById("nr-webreader-ccc-check").onclick = k;
                        for (e = 0; e < l.highlight_colour_scheme_menu.querySelectorAll("li").length; e++) l.highlight_colour_scheme_menu.querySelectorAll("li")[e].onclick = x, l.highlight_colour_scheme_menu.querySelectorAll("li")[e].onblur = w;
                        if (re(l.speed_progress.value), l.speed_progress.addEventListener("input", (function() {
                                ae(l.speed_progress.value)
                            })), l.speed_progress.addEventListener("change", (function() {
                                te(l.speed_progress.value), localStorage.setItem("settings_default_speed", parseInt(l.speed_progress.value)), J.readerChannel.port1.postMessage({
                                    fn: "setSpeed",
                                    value: parseInt(l.speed_progress.value)
                                })
                            })), l.frame_progress.addEventListener("input", (function() {
                                ne(l.frame_progress.value)
                            })), l.frame_progress.addEventListener("change", (function() {
                                ee(l.frame_progress.value)
                            })), document.getElementById("nr-webreader-textbox-check").addEventListener("input", (function() {
                                document.getElementById("nr-webreader-textbox-check").checked && re(l.speed_progress.value)
                            })), !t.isSmallScreen) {
                            var n = document.querySelector("#nr-webreader-trigger-container"),
                                r = (document.body, document.querySelector(".nr-webreader-drag-handler"));
                            t.dragDisplace = G()(n, {
                                handle: r,
                                onMouseDown: ie,
                                onMouseUp: oe
                            })
                        }
                    }(),
                    function() {
                        for (var e = l.voice_menu.querySelectorAll("li"), n = 0; n < e.length; n++) {
                            var r = e[n];
                            r.classList.add("focusable"), r.tabIndex = "-1", r.getAttribute("value") == l.voice_list.value && r.classList.add("selected")
                        }
                        var t = l.highlight_colour_scheme_menu.querySelectorAll("li");
                        for (n = 0; n < t.length; n++) {
                            var a = t[n];
                            a.getAttribute("value") == l.highlight_colour_scheme_list.value && a.classList.add("selected")
                        }
                        document.getElementById("nr-webreader-color-icon").classList.add("icon-" + l.highlight_colour_scheme_list.value), b(l.voice_menu), b(l.highlight_colour_scheme_menu), ge()
                    }(),
                    function() {
                        h(l.trigger_mask), h(l.trigger_textbox), h(l.btn_settings), h(document.getElementById("nr-webreader-voice-menu-btn")), h(l.btn_settings_close), h(document.getElementById("nr-webreader-highlight-colour-menu-btn")), h(document.getElementById("nr-webreader-highlight-toggle")), h(document.getElementById("nr-webreader-autoscroll-toggle")), h(document.getElementById("nr-webreader-dyslexic-toggle")), h(document.getElementById("nr-webreader-settings-menu")), h(document.getElementById("nr-webreader-frame-settings"));
                        for (var e = 0; e < l.voice_menu.querySelectorAll("li").length; e++) h(l.voice_menu.querySelectorAll("li")[e]);
                        for (e = 0; e < l.highlight_colour_scheme_menu.querySelectorAll("li").length; e++) h(l.highlight_colour_scheme_menu.querySelectorAll("li")[e])
                    }(), we(l.btn_locate, "left", "Relocate Text"), we(l.btn_cc_zoom_in, "left", "Increase Font Size"), we(l.btn_cc_zoom_out, "left", "Decrease Font Size"), we(l.btn_settings, "bottom", "Maximize"), we(l.btn_settings_close, "right", "Minimize"), we(document.getElementById("nr-webreader-frame-settings"), "left", "Settings"), t.isSmallScreen ? (xe = document.getElementById("nr-webreader-frame-error"), ve = document.getElementById("nr-webreader-frame-error-image"), ye = document.getElementById("nr-webreader-frame-error-text"), ke = document.getElementById("nr-webreader-frame-error-close"), xe.addEventListener("click", Ue)) : (xe = document.getElementById("nr-webreader-trigger-error"), ve = document.getElementById("nr-webreader-trigger-error-image"), ye = document.getElementById("nr-webreader-trigger-error-text"), ke = document.getElementById("nr-webreader-trigger-error-close"), xe.addEventListener("click", Ue)), "" !== U().message && R(), n && E(n)
            })), J.widgetChannel = new MessageChannel, J.widgetChannel.port2.onmessage = function(e) {
                var n;
                t[e.data] ? t[e.data]() : e.data.readProgressUnit ? (n = e.data.readProgressUnit, t.readProgressUnit = n) : e.data.message && "currBeingRead" == e.data.message ? Q(e.data.currBeingRead.readProgress) : t[e.data.fn] && t[e.data.fn](e.data)
            }, window.addEventListener("locationchange", (function() {
                J.readerChannel.port1.postMessage("stop")
            })), window.addEventListener("popstate", (function() {
                window.dispatchEvent(new Event("locationchange"))
            })), window.addEventListener("keyup", (function(e) {
                "tab" === e.code.toLowerCase() && document.activeElement
            })), window.addEventListener("resize", function(e, n) {
                var r = null;
                return function() {
                    r || (r = setTimeout((function() {
                        e(), r = null
                    }), n))
                }
            }(he, 100), !1), history.pushState = (a = history.pushState, function() {
                var e = a.apply(this, arguments);
                return window.dispatchEvent(new Event("pushState")), window.dispatchEvent(new Event("locationchange")), e
            }), history.replaceState = function(e) {
                return function() {
                    var n = e.apply(this, arguments);
                    return window.dispatchEvent(new Event("replaceState")), window.dispatchEvent(new Event("locationchange")), n
                }
            }(history.replaceState);
            var a
        }(e, r);
        var xe = null,
            ve = null,
            ye = null,
            ke = null,
            Ve = !1;

        function Ue(e) {
            Ve ? ke.contains(e.target) && function(e) {
                1 == U().isTemp && (t.isSmallScreen ? document.getElementById("nr-webreader-frame-bar").classList.remove("nr-show-error") : document.getElementById("nr-webreader-icons").classList.remove("nr-show-error"));
                ve.style.display = "block", ke.style.display = "none", ye.innerText = U().message, Ve = !1
            }() : (Ve = !0, ve.style.display = "none", ke.style.display = "block", ye.innerText = U().description)
        }
    }
    var B = r(3),
        I = r.n(B);

    function O(e) {
        return new Promise((function(n, r) {
            fetch(I.a.configEndpoint + "config?i=" + e, {
                method: "GET",
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((function(e) {
                if (e.ok) return e.json().then((function(e) {
                    n(e)
                }));
                n(e)
            })).catch((function(e) {
                r(e)
            }))
        }))
    }

    function D() {
        this.set = function(e, n) {
            try {
                return "string" != typeof n && (n = JSON.stringify(n)), sessionStorage.setItem(e, n), !0
            } catch (e) {
                return !1
            }
        }, this.get = function(e) {
            var n = sessionStorage.getItem(e),
                r = null;
            if (n && "undefined" !== n && "null" !== n) try {
                r = JSON.parse(n)
            } catch (e) {
                r = n
            }
            return r
        }, this.remove = function(e) {
            sessionStorage.removeItem(e)
        }
    }

    function H() {
        this.getPageUrl = function() {
            return document.location.origin + document.location.pathname
        }, this.getCurrentUtcTime = function() {
            if (Date.now) return Math.floor(Date.now() / 1e3);
            Date.now = function() {
                return Math.floor((new Date).getTime() / 1e3)
            }
        }
    }

    function L(e) {
        var n, r, t, a = this,
            i = p,
            o = u,
            s = void 0,
            d = null,
            l = !0;
        a.widgetId = e, a.getSettings = function(e) {
            var n = function(e) {
                var n = a.sessionStorageService.get("config"),
                    r = a.sessionStorageService.get("configE");
                if (n && r && a.utilService.getCurrentUtcTime() < r) return n;
                if (n && r && a.utilService.getCurrentUtcTime() + 60 >= r) return m(e), n;
                return null
            }(e);
            return n ? Promise.resolve(n) : m(e)
        };

        function c(e) {
            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            a.sessionStorageService.set("config", e), n ? a.sessionStorageService.set("configE", a.utilService.getCurrentUtcTime() + 3) : a.sessionStorageService.set("configE", a.utilService.getCurrentUtcTime() + 300)
        }

        function m(p) {
            return n = p.custom_id, r = p.callback, t = p.custom_text_source, new Promise((function(u) {
                O(a.widgetId).then((function(a) {
                    var m = a ? a.key : "",
                        g = a ? a.settings : null,
                        h = p || null;
                    m && void 0 !== m ? sessionStorage.setItem("key", btoa(m)) : (console.error("apiKey is undefined"), d = 5002), f(h, g, i), b(i.bar, o), i.bar.settings_auto_scroll = o.settings_auto_scroll, i.bar.settings_dyslexia_fonts = o.settings_dyslexia_fonts, i.bar.settings_highlight_text = o.settings_highlight_text, void 0 === t && (t = a.settings ? a.settings.custom_text_source : void 0), void 0 !== a.env && (s = a.env);
                    var w = {
                        launched: {
                            needLaunchWR: l,
                            env: s
                        },
                        widget: {
                            nr_webreader_config: i,
                            customId: n,
                            callback: r
                        },
                        reader: {
                            widgetId: e,
                            reader_settings: o,
                            apiKey: m,
                            customTextSource: t
                        },
                        err: {
                            error: d
                        }
                    };
                    c(w), u(w)
                }), (function(a) {
                    d = 5002, f(p, null, i), b(i.bar, o);
                    var m = {
                        launched: {
                            needLaunchWR: l,
                            env: s
                        },
                        widget: {
                            nr_webreader_config: i,
                            customId: n,
                            callback: r
                        },
                        reader: {
                            widgetId: e,
                            reader_settings: o,
                            apiKey: "",
                            customTextSource: t
                        },
                        err: {
                            error: d
                        }
                    };
                    c(m, !0), u(m)
                }))
            }))
        }

        function b(e, n) {
            for (var r in n) {
                var t = localStorage.getItem(r);
                if (null !== t) {
                    try {
                        t = JSON.parse(t)
                    } catch (e) {}
                    n[r] = t
                }
                e && void 0 !== e[r] && (n[r] = e[r])
            }
            void 0 !== n.settings_default_voice && (n.settings_default_voice in g ? n.settings_default_voice = g[n.settings_default_voice].origin_name : n.settings_default_voice = g[p.bar.settings_default_voice].origin_name)
        }

        function f(e, n, r) {
            var t = n ? n.icon : null,
                a = e ? e.icon : null,
                i = n ? n.bar : null,
                o = e ? e.bar : null;
            w(a, t, r.icon), w(o, i, r.bar)
        }

        function w(e, n, r) {
            var t = r;
            for (var a in r) {
                var i = localStorage.getItem(a);
                null !== i ? t[a] = i : e && void 0 !== e[a] ? t[a] = e[a] : n && void 0 !== n[a] && (t[a] = n[a])
            }
            h() && void 0 !== t.show_in_mobile && (t.show_in_mobile ? function(e) {
                var n = e;
                for (var r in e)
                    if (r.includes("mob_")) {
                        var t = r.replace("mob_", "");
                        void 0 !== n[t] && (n[t] = e[r])
                    } e = n
            }(t) : l = !1), r = t
        }
        a.sessionStorageService = new D, a.utilService = new H
    }
    var j = r(10),
        Q = r.n(j);

    function X() {
        function e() {
            return !(!window || !window.navigator)
        }
        this.getUserDeviceInformation = function() {
            var n = e() && window.navigator.deviceMemory ? window.navigator.deviceMemory : -1,
                r = function() {
                    var n = {
                        ct: "na",
                        rtt: -1
                    };
                    if (!e()) return n;
                    var r = window.navigator;
                    return r.connection ? (n.ct = r.connection.effectiveType ? r.connection.effectiveType : "", n.rtt = r.connection.rtt ? r.connection.rtt : -1, n) : n
                }(),
                t = function() {
                    if (!e()) return;
                    var n, r = navigator.userAgent;
                    n = r.indexOf("Firefox") > -1 ? "f" : r.indexOf("SamsungBrowser") > -1 ? "s" : r.indexOf("Opera") > -1 || r.indexOf("OPR") > -1 ? "o" : r.indexOf("Trident") > -1 ? "i" : r.indexOf("Edge") > -1 ? "e" : r.indexOf("Chrome") > -1 ? "c" : r.indexOf("Safari") > -1 ? "a" : "u";
                    return n
                }();
            return {
                m: n,
                ct: r.ct,
                rt: r.rtt,
                b: t
            }
        }
    }

    function P(e) {
        var n = sessionStorage.getItem("key"),
            r = "";
        return n ? (r = atob(n), Promise.resolve(r)) : O(e).then((function(e) {
            var n = e ? e.key : "";
            return n && sessionStorage.setItem("key", btoa(n)), Promise.resolve(n)
        })).catch((function(e) {
            return Promise.resolve("")
        }))
    }

    function K(e, n) {
        var r = function e(n, r, t, a) {
                Q()(this, e)
            },
            t = this,
            i = I.a.ttsEndpoint;

        function s() {
            return Promise.resolve().then((function() {
                t.playTimeoutRef && clearTimeout(t.playTimeoutRef), t.wordMarkTimer && clearInterval(t.wordMarkTimer), t.onEvent = null, t.audioPlayer.pause()
            })).catch((function(e) {}))
        }

        function d(e, n) {
            return l.apply(this, arguments)
        }

        function l() {
            return (l = o()(a.a.mark((function e(n, r) {
                var i, o;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0, n && n.text && "" !== n.text.trim()) {
                                e.next = 7;
                                break
                            }
                            return t.onEvent && t.onEvent({
                                type: "end"
                            }), e.abrupt("return");
                        case 7:
                            if (i = r + "", !(o = t.preloads[i])) {
                                e.next = 19;
                                break
                            }
                            try {
                                o.blob.isPending() && t.onEvent({
                                    type: "loading"
                                })
                            } catch (e) {}
                            return e.next = 14, o.blob;
                        case 14:
                            e.sent.text === n.text ? c(o) : (N(r), d(n, r)), e.next = 21;
                            break;
                        case 19:
                            return t.onEvent({
                                type: "loading"
                            }), e.abrupt("return", T(n).then((function(e) {
                                t.preloads[r + ""] = {
                                    text: n.text,
                                    blob: e,
                                    index: r
                                }, c(t.preloads[r + ""])
                            })).catch((function(e) {})));
                        case 21:
                        case 22:
                            e.next = 27;
                            break;
                        case 24:
                            e.prev = 24, e.t0 = e.catch(0), e.t0;
                        case 27:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 24]
                ])
            })))).apply(this, arguments)
        }

        function c(e) {
            return p.apply(this, arguments)
        }

        function p() {
            return (p = o()(a.a.mark((function e(n) {
                var r;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.next = 2, n.blob;
                        case 2:
                            (r = e.sent) && r.err && "" !== r.err ? S(r.err) : (t.hasError && (t.hasError = !1, t.isStoppedWhenProcessingPlay = !1, t.setNumPreloads(2, 4)), u(n));
                        case 4:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function u(e) {
            return m.apply(this, arguments)
        }

        function m() {
            return (m = o()(a.a.mark((function e(n) {
                var r;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, t.errCount = 0, e.next = 4, n.blob;
                        case 4:
                            r = e.sent, t.onEvent && t.onEvent({
                                type: "setNrWords",
                                index: n.index,
                                words: r.marks.map((function(e) {
                                    return g(e.word)
                                })),
                                voice: t.voice
                            }), t.audioPlayer.src = r.url, b(), t.isStoppedWhenProcessingPlay ? f() : t.playTimeoutRef = setTimeout(o()(a.a.mark((function e() {
                                return a.a.wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, t.audioPlayer.play();
                                        case 2:
                                            h(r.marks);
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), 250), e.next = 14;
                            break;
                        case 11:
                            e.prev = 11, e.t0 = e.catch(0), e.t0;
                        case 14:
                            t.isProcessingPlay = !1, t.isStoppedWhenProcessingPlay = !1;
                        case 16:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 11]
                ])
            })))).apply(this, arguments)
        }

        function g(e) {
            switch (e) {
                case "&quot;":
                    return '"';
                case "&amp;":
                    return "&";
                case "&apos;":
                    return "'";
                case "&lt;":
                    return "<";
                case "&gt;":
                    return ">";
                default:
                    return e
            }
        }

        function h(e) {
            t.wordMarkTimer && clearInterval(t.wordMarkTimer);
            var n = performance.now(),
                r = 0;
            t.wordMarkTimer = setInterval((function() {
                var a = performance.now();
                a - n > e[r].time && t.onEvent && (t.onEvent({
                    type: "word",
                    wordIndex: r++
                }), r >= e.length && clearInterval(t.wordMarkTimer))
            }), 50)
        }

        function b() {
            t.audioPlayer.onended = function() {
                t.onEvent && t.onEvent({
                    type: "end"
                })
            }, t.audioPlayer.onplay = function() {
                t.onEvent && t.onEvent({
                    type: "start"
                })
            }, t.audioPlayer.onerror = function() {
                t.onEvent && t.onEvent({
                    type: "error",
                    err: t.audioPlayer.error.message
                })
            }
        }

        function f() {
            return t.onEvent && t.onEvent({
                type: "pause"
            }), t.isProcessingPlay && (t.isStoppedWhenProcessingPlay = !0), s()
        }

        function w() {
            return (w = o()(a.a.mark((function e(n) {
                var r, i, o, s, d;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            (r = {})[n + ""] = !0, i = 1;
                        case 3:
                            if (!(i < t.numPreloads.next + 1)) {
                                e.next = 25;
                                break
                            }
                            if (t.isStoppedWhenProcessingPlay) {
                                e.next = 21;
                                break
                            }
                            return e.prev = 5, e.next = 8, x(i, n);
                        case 8:
                            if (-1 !== (o = e.sent)) {
                                e.next = 11;
                                break
                            }
                            return e.abrupt("break", 25);
                        case 11:
                            r[o + ""] = !0, V(o), e.next = 19;
                            break;
                        case 15:
                            return e.prev = 15, e.t0 = e.catch(5), e.t0, e.abrupt("continue", 22);
                        case 19:
                            e.next = 22;
                            break;
                        case 21:
                            return e.abrupt("break", 25);
                        case 22:
                            i++, e.next = 3;
                            break;
                        case 25:
                            s = 1;
                        case 26:
                            if (!(s < t.numPreloads.prev + 1)) {
                                e.next = 47;
                                break
                            }
                            if (t.isStoppedWhenProcessingPlay) {
                                e.next = 43;
                                break
                            }
                            return e.prev = 28, e.next = 31, y(s, n);
                        case 31:
                            if (-1 !== (d = e.sent)) {
                                e.next = 34;
                                break
                            }
                            return e.abrupt("break", 47);
                        case 34:
                            r[d + ""] = !0, e.next = 41;
                            break;
                        case 37:
                            return e.prev = 37, e.t1 = e.catch(28), e.t1, e.abrupt("continue", 44);
                        case 41:
                            e.next = 44;
                            break;
                        case 43:
                            return e.abrupt("break", 47);
                        case 44:
                            s++, e.next = 26;
                            break;
                        case 47:
                            R(r);
                        case 48:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [5, 15],
                    [28, 37]
                ])
            })))).apply(this, arguments)
        }

        function x(e, n) {
            return v.apply(this, arguments)
        }

        function v() {
            return (v = o()(a.a.mark((function e(n, r) {
                var i;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0, 0 !== n) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", r);
                        case 5:
                            if (!(n >= 1 && r >= t.textsForTts.length - 1)) {
                                e.next = 9;
                                break
                            }
                            return e.abrupt("return", -1);
                        case 9:
                            if (r++, (i = t.textsForTts[r] ? t.textsForTts[r].text : "") && "" !== i.trim()) {
                                e.next = 15;
                                break
                            }
                            return e.abrupt("return", x(n, r));
                        case 15:
                            return e.abrupt("return", x(n - 1, r));
                        case 16:
                            e.next = 21;
                            break;
                        case 18:
                            e.prev = 18, e.t0 = e.catch(0), e.t0;
                        case 21:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 18]
                ])
            })))).apply(this, arguments)
        }

        function y(e, n) {
            return k.apply(this, arguments)
        }

        function k() {
            return (k = o()(a.a.mark((function e(n, r) {
                var i;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0, 0 !== n) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", r);
                        case 5:
                            if (!(n > 0 && r <= 0)) {
                                e.next = 9;
                                break
                            }
                            return e.abrupt("return", -1);
                        case 9:
                            if (r--, (i = t.textsForTts[r] ? t.textsForTts[r].text : "") && "" !== i.trim()) {
                                e.next = 15;
                                break
                            }
                            return e.abrupt("return", y(n, r));
                        case 15:
                            return e.abrupt("return", y(n - 1, r));
                        case 16:
                            e.next = 21;
                            break;
                        case 18:
                            e.prev = 18, e.t0 = e.catch(0), e.t0;
                        case 21:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 18]
                ])
            })))).apply(this, arguments)
        }

        function V(e) {
            return U.apply(this, arguments)
        }

        function U() {
            return (U = o()(a.a.mark((function e(n) {
                var r, i;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0, r = n + "", !t.preloads[r]) {
                                e.next = 6;
                                break
                            }
                            return e.abrupt("return");
                        case 6:
                            if ((i = t.textsForTts[n]).text && "" !== i.text.trim()) {
                                e.next = 11;
                                break
                            }
                            return e.abrupt("return");
                        case 11:
                            t.preloads[r] = {
                                text: i.text,
                                blob: _(T(i)),
                                index: n
                            };
                        case 12:
                            e.next = 17;
                            break;
                        case 14:
                            e.prev = 14, e.t0 = e.catch(0), e.t0;
                        case 17:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 14]
                ])
            })))).apply(this, arguments)
        }

        function R(e) {
            for (var n in t.preloads) {
                var r = t.preloads[n];
                e[n] || N(r.index)
            }
        }

        function N(e) {
            delete t.preloads[e + ""]
        }

        function T(e) {
            return new Promise(function() {
                var n = o()(a.a.mark((function n(i, o) {
                    var s, d;
                    return a.a.wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                s = 3, d = new r("", "", [], "");
                            case 2:
                                if (!(s > 0)) {
                                    n.next = 20;
                                    break
                                }
                                return n.next = 5, F(e);
                            case 5:
                                if (d = n.sent) {
                                    n.next = 8;
                                    break
                                }
                                return n.abrupt("return", o());
                            case 8:
                                if ("" === d.err) {
                                    n.next = 16;
                                    break
                                }
                                if (d.err, !Z(d.err)) {
                                    n.next = 12;
                                    break
                                }
                                return n.abrupt("break", 20);
                            case 12:
                                "Too Many Requests" === d.err && (t.hasTooManyRequestsError = !0), s--, n.next = 18;
                                break;
                            case 16:
                                return i(d), n.abrupt("return");
                            case 18:
                                n.next = 2;
                                break;
                            case 20:
                                i(d);
                            case 21:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })));
                return function(e, r) {
                    return n.apply(this, arguments)
                }
            }()).catch((function(n) {
                return Promise.resolve({
                    url: "",
                    text: e.text,
                    marks: [],
                    err: "ERR_UNKNOWN"
                })
            }))
        }

        function Z(e) {
            if (5001 === e || 5002 === e || 5003 === e || 5005 === e || 5008 === e || 5009 === e || 5010 === e || "Limit Exceeded" === e || "u" === e) return !0
        }

        function F(r) {
            return new Promise((function(e) {
                t.hasTooManyRequestsError ? setTimeout((function() {
                    e()
                }), 500) : e()
            })).then((function() {
                return t.requestU ? Promise.resolve(t.requestU) : Promise.reject({
                    type: "error",
                    err: "u"
                })
            })).then((function() {
                return new Promise(function() {
                    var s = o()(a.a.mark((function o(s, d) {
                        var l, c, p;
                        return a.a.wrap((function(a) {
                            for (;;) switch (a.prev = a.next) {
                                case 0:
                                    if (n) {
                                        a.next = 4;
                                        break
                                    }
                                    return a.next = 3, P(e);
                                case 3:
                                    n = a.sent;
                                case 4:
                                    t.hasTooManyRequestsError = !1, (l = new XMLHttpRequest).open("POST", i), l.setRequestHeader("Content-Type", "application/json"), l.setRequestHeader("Accept", "audio/mpeg"), l.setRequestHeader("x-api-key", n), l.onreadystatechange = function() {
                                        if (this.readyState === XMLHttpRequest.DONE && this.status >= 400) {
                                            var e = l.response;
                                            e && e.errorCode && s({
                                                url: "",
                                                text: r.text,
                                                marks: [],
                                                err: e.errorCode
                                            }), 429 == l.status && ("Limit Exceeded" == l.response.message ? s({
                                                url: "",
                                                text: r.text,
                                                marks: [],
                                                err: "Limit Exceeded"
                                            }) : (t.hasTooManyRequestsError = !0, s({
                                                url: "",
                                                text: r.text,
                                                marks: [],
                                                err: "Too Many Requests"
                                            })))
                                        }
                                        if (this.readyState === XMLHttpRequest.DONE && 200 === this.status) try {
                                            var n = l.response,
                                                a = window.URL.createObjectURL(n);
                                            if ("" === a) s({
                                                url: "",
                                                text: r.text,
                                                marks: [],
                                                err: "ERR_UNKNOWN"
                                            });
                                            else {
                                                var i = E(l.getResponseHeader("x-smark")),
                                                    o = {
                                                        url: a,
                                                        text: r.text,
                                                        marks: i,
                                                        err: ""
                                                    };
                                                s(o)
                                            }
                                        } catch (e) {
                                            s({
                                                url: "",
                                                text: r.text,
                                                marks: [],
                                                err: "ERR_UNKNOWN"
                                            })
                                        }
                                        2 === this.readyState && (200 === l.status ? l.responseType = "blob" : l.responseType = "json")
                                    }, l.onerror = function(e) {
                                        s({
                                            url: "",
                                            text: r.text,
                                            marks: [],
                                            err: "ERR_UNKNOWN"
                                        })
                                    }, t.requestU || d({
                                        type: "error",
                                        err: "u"
                                    }), c = t.userDeviceService.getUserDeviceInformation(), p = JSON.stringify({
                                        i: e,
                                        t: r.text,
                                        s: t.speed,
                                        v: t.voice,
                                        ui: t.requestU,
                                        u: t.utilService.getPageUrl(),
                                        ud: c
                                    });
                                    try {
                                        l.send(p)
                                    } catch (e) {
                                        s({
                                            url: "",
                                            text: r.text,
                                            marks: [],
                                            err: "ERR_UNKNOWN"
                                        })
                                    }
                                case 16:
                                case "end":
                                    return a.stop()
                            }
                        }), o)
                    })));
                    return function(e, n) {
                        return s.apply(this, arguments)
                    }
                }())
            })).catch((function(e) {
                return e && e.type && e.err ? (t.onEvent && t.onEvent(e), Promise.resolve({
                    url: "",
                    text: r.text,
                    marks: [],
                    err: e.err
                })) : (t.onEvent && t.onEvent({
                    type: "error",
                    err: "ERR_UNKNOWN"
                }), Promise.resolve({
                    url: "",
                    text: r.text,
                    marks: [],
                    err: "ERR_UNKNOWN"
                }))
            }))
        }

        function E(e) {
            try {
                for (var n = (e = function(e) {
                        return decodeURIComponent(atob(e).split("").map((function(e) {
                            return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
                        })).join(""))
                    }(e)).substring(0, 2).trim(), r = e.substring(2).split(n), t = [], a = 0; a < r.length; a += 4) {
                    var i = {};
                    i.word = r[a], i.start = parseInt(r[a + 1]), i.end = parseInt(r[a + 2]), i.time = parseInt(r[a + 3]), t.push(i)
                }
                for (var o = [], s = 0; s < t.length; s++)
                    if (t[s - 1])
                        if (t[s - 1].start === t[s].start || t[s - 1].end === t[s].end || t[s].start < t[s - 1].end) {
                            if (o[o.length - 1].end < t[s].end || t[s].start < o[o.length - 1].end) {
                                var d = W(o[o.length - 1].word, t[s].word);
                                o[o.length - 1].word = o[o.length - 1].word.substring(0, o[o.length - 1].word.length - d) + t[s].word, o[o.length - 1].end = t[s].end
                            }
                        } else {
                            var l = {};
                            l.word = t[s].word, l.start = t[s].start, l.end = t[s].end, l.time = t[s].time, o.push(l)
                        }
                else {
                    var c = {};
                    c.word = t[s].word, c.start = t[s].start, c.end = t[s].end, c.time = t[s].time, o.push(c)
                }
                return o
            } catch (e) {
                return []
            }
        }

        function W(e, n) {
            e.length > n.length && (e = e.substring(e.length - n.length));
            for (var r = function(e) {
                    var n = new Array(e.length),
                        r = 0;
                    n[0] = -1, n[1] = 0;
                    var t = 2;
                    for (; t < e.length;) e[t - 1] == e[r] ? (n[t] = r + 1, t += 1, r += 1) : r > 0 ? r = n[r] : (n[t] = 0, t += 1);
                    return n
                }(n), t = 0, a = 0; t + a < e.length;) n[a] == e[t + a] ? a += 1 : (t += a - r[a], a > 0 && (a = r[a]));
            return a
        }

        function S(e) {
            t.errCount++, t.errCount, t.errCount >= 3 || !M(e) ? (console.error("err", e), t.hasError = !0, t.setNumPreloads(2, 0), t.onEvent && t.onEvent({
                type: "error",
                err: e,
                isTempError: M(e)
            })) : t.onEvent && t.onEvent({
                type: "end"
            })
        }

        function M(e) {
            return 5002 !== e && 5005 !== e && 5008 !== e && 5009 !== e && 5010 !== e && "Limit Exceeded" !== e
        }

        function _(e) {
            try {
                if (e.isResolved) return e;
                var n = !0,
                    r = !1,
                    t = !1,
                    a = e.then((function(e) {
                        return t = !0, n = !1, e
                    }), (function(e) {
                        throw r = !0, n = !1, e
                    }));
                return a.isFulfilled = function() {
                    return t
                }, a.isPending = function() {
                    return n
                }, a.isRejected = function() {
                    return r
                }, a
            } catch (n) {
                return e
            }
        }
        t.textsForTts = [], t.audioPlayer = null, t.errCount = 0, t.numPreloads = {
                prev: 2,
                next: 4
            }, t.preloads = {}, t.enableAudio = null, t.hasError = !1, t.hasTooManyRequestsError = !1, t.onEvent = null, t.playTimeoutRef = null, t.wordMarkTimer = null, t.play = function(e, n, r) {
                return t.isStoppedWhenProcessingPlay ? (t.isProcessingPlay = !1, t.isStoppedWhenProcessingPlay = !1, Promise.resolve()) : s().then((function() {
                    return t.onEvent = r, d(e, n)
                })).then((function() {
                    return function(e) {
                        return w.apply(this, arguments)
                    }(n)
                })).catch((function(e) {}))
            }, t.pause = function() {
                t.stop()
            }, t.stop = f, t.clearPreloads = function() {
                t.preloads = {}
            }, t.setNumPreloads = function(e, n) {
                t.numPreloads = {
                    prev: e,
                    next: n
                }
            }, t.requestU = "", t.voice = "", t.speed = 0, t.isProcessingPlay = !1, t.isStoppedWhenProcessingPlay = !1, t.utilService = new H, t.userDeviceService = new X, t.audioPlayer = document.createElement("AUDIO"),
            function() {
                t.audioPlayer.src = "https://webreader.naturalreaders.com/webreader-voice-sample/silence.mp3";
                var e = !1;
                t.enableAudio = o()(a.a.mark((function n() {
                    return a.a.wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if (window.removeEventListener("click", t.enableAudio, !1), e) {
                                    n.next = 15;
                                    break
                                }
                                return n.prev = 3, n.next = 6, t.audioPlayer.play();
                            case 6:
                                n.next = 12;
                                break;
                            case 9:
                                n.prev = 9, n.t0 = n.catch(3), n.t0;
                            case 12:
                                setTimeout((function() {
                                    t.audioPlayer.pause()
                                }), 50), e = !0;
                            case 15:
                            case "end":
                                return n.stop()
                        }
                    }), n, null, [
                        [3, 9]
                    ])
                }))), window.addEventListener("click", t.enableAudio, !1)
            }()
    }
    var A = r(2),
        q = r.n(A),
        $ = r(11),
        ee = r.n($),
        ne = {
            domSelector: function(e, n) {
                return e.querySelector(n)
            },
            allDomsSelector: function(e, n) {
                return e.querySelectorAll(n)
            },
            setAttribute: function(e, n, r) {
                e.setAttribute(n, r)
            },
            getAttribute: function(e, n) {
                return e.getAttribute(n)
            },
            getCss: function(e, n) {
                return e instanceof Text ? null : e.ownerDocument.defaultView.getComputedStyle(e, null)[n]
            },
            setCss: function(e, n, r) {
                e.ownerDocument.defaultView;
                e.style[n] = r
            },
            addClass: function(e, n) {
                e.classList.add(n)
            },
            removeClass: function(e, n) {
                e.classList.remove(n)
            },
            hasClass: function(e, n) {
                return e.classList.contains(n)
            },
            removeSelf: function(e) {
                null != e && null != e.parentNode && e.parentNode.removeChild(e)
            },
            getText: function(e) {
                var n = "";
                return null == e ? n : (null == (n = e instanceof String ? e : e instanceof Text ? e.nodeValue : e.innerText) && (n = ""), n)
            },
            setText: function(e, n) {
                e instanceof String ? e = n : e instanceof Text ? e.nodeValue = n : e.innerText = n
            },
            setHtml: function(e, n) {
                e.innerHTML = n
            },
            appendDom: function(e, n) {
                e.appendChild(n)
            },
            prependDom: function(e, n) {
                e.insertBefore(n, e.firstChild)
            },
            insertBeforeDom: function(e, n) {
                e.parentNode && e.parentNode.insertBefore(n, e)
            },
            insertAferDom: function(e, n) {
                e.parentNode && e.parentNode.insertBefore(n, e.nextSibling)
            },
            emptyDom: function(e) {
                e.innerHTML = ""
            },
            wrapDom: function(e, n) {
                e.parentNode.insertBefore(n, e), n.appendChild(e)
            },
            replaceWithDom: function(e, n) {
                var r = e.parentNode;
                r.insertBefore(n, e), r.removeChild(e)
            },
            ajaxFunc: function(e, n) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                fetch(n).then((function(e) {
                    return e.text()
                })).then((function(n) {
                    document.querySelector(e).innerHTML = n
                })).then((function() {
                    r && r()
                }))
            },
            mergeArr: function() {
                var e;
                return (e = []).concat.apply(e, arguments)
            },
            showDom: function(e) {
                e.style.display = "block"
            },
            hideDom: function(e) {
                e.style.display = "none"
            },
            isVisibleDom: function(e) {
                return !(e.style.display && "none" == e.style.display)
            },
            contentsByDom: function(e) {
                return e.childNodes
            }
        },
        re = [];
    ne.findVisiDoms = function(e) {
        return re = [],
            function e(n) {
                for (var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "visible", t = n.children, a = t.length, i = null, o = 0; o < a; o++) i = t[o], "visible" == r ? ne.isVisibleDom(i) && re.push(i) : n.classList.contains(r) && re.push(i), i.children && e(i, r)
            }(e), re
    };
    var te = new(r(22))("Chuck");

    function ae(e) {
        var n = this,
            r = [],
            t = ["select", "textarea", "button", "label", "audio", "video", "dialog", "embed", "menu", "nav", "noframes", "noscript", "object", "script", "style", "svg", "aside", "footer", "#footer", ".no-read-aloud", "#nr-webreader", ".nr-webreader-trigger-container", ".nr-webreader-check", ".nr-webreader-frame"];

        function i() {
            return Promise.resolve().then((function() {
                r = []
            })).catch((function(e) {}))
        }

        function s() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "tts";
            return new Promise((function(e) {
                var r = [],
                    t = null,
                    a = n.textSource;
                try {
                    a && (t = document.querySelectorAll(a))
                } catch (e) {}
                if (t && t.length > 0) {
                    for (var i = 0; i < t.length; i++) r.push(t[i]);
                    e(r)
                } else {
                    new Date;
                    var o = l(20);
                    if (o.reduce((function(e, n) {
                            return e + I(n).length
                        }), 0) < 1e3) {
                        for (var s, d, p = (o = l(3)).map(I), u = 3; u < p.length && !s; u++) {
                            var m = c(p, 0, u);
                            p[u].length > m.mean + 2 * m.stdev && (s = u)
                        }
                        for (var g = p.length - 4; g >= 0 && !d; g--) {
                            var h = c(p, g + 1, p.length);
                            p[g].length > h.mean + 2 * h.stdev && (d = g + 1)
                        }(s || d) && (o = o.slice(s || 0, d))
                    }
                    for (var b = 0; b < o.length; b++) r.push.apply(r, _(o[b], o[b - 1])), r.push(o[b]);
                    e(r)
                }
            })).then((function(n) {
                return new Promise(function() {
                    var t = o()(a.a.mark((function t(i) {
                        var o, s, l, c;
                        return a.a.wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if ("tts" !== e) {
                                        t.next = 11;
                                        break
                                    }
                                    o = 0;
                                case 3:
                                    if (!(o < n.length)) {
                                        t.next = 9;
                                        break
                                    }
                                    return t.next = 6, p(n[o]);
                                case 6:
                                    o++, t.next = 3;
                                    break;
                                case 9:
                                    t.next = 14;
                                    break;
                                case 11:
                                    for (s = n.map(C), l = G(s).filter(O), c = 0; c < l.length; c++) l[c] && r.push(d(l[c]));
                                case 14:
                                    i(r);
                                case 15:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()).catch((function(e) {}))
            })).catch((function(e) {}))
        }

        function d(e) {
            try {
                return {
                    text: function(e) {
                        var n = function(e) {
                            var n = e.replace(/<br\s*\/?>/gi, ". ");
                            return n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = (n = n.replace(/[\u200c|\u200b|\u200d|\ufeff]/gi, " ")).replace(/[\u0000|\u001b|\u001c|\u001f|\ufe4f|\u005f|\uff3f]/g, "")).replace(/[\u2018|\u2019|\u2039|\u203A]/g, "'")).replace(/[\u201c|\u201d|\u00ab|\u00bb]/g, '"')).replace(/[\uff01]/g, "!")).replace(/[\uff1f]/g, "?")).replace(/[\uff0c]/g, ",")).replace(/[\uff1a]/g, ":")).replace(/[\uff1b]/g, ";")).replace(/[\u2026]/g, ".")).replace(/[\u2014|\u2015]/g, "-")).replace(/[\u005f|\uff3f]/g, " ")).replace(/(^|\s*)(&c\.|&c|etc)(\s|\”|\’|\'|\"|\;|\,|\?|\!|$)/g, "$1etc.$3")
                        }(e);
                        return n = function(e) {
                            return e = e.replace(/</g, "&lt;").replace(/>/g, "&gt;")
                        }(n)
                    }(e)
                }
            } catch (e) {
                return {
                    text: ""
                }
            }
        }

        function l(e) {
            var n = ["h1", "h2", "h3", "h4", "h5", "h6", "p", "a[href]"].concat(t),
                r = function(e) {
                    return 3 == e.nodeType && e.nodeValue.trim().length >= 3
                },
                a = function(n) {
                    return 1 == n.nodeType && A(n, "P") && P(n) && I(n).length >= e
                },
                i = function(n) {
                    return Y(n, r) && I(n).length >= e
                },
                o = function(e) {
                    return Y(e, a)
                },
                s = function e(r) {
                    var t = K(r.children, n);
                    return t.some(i) || t.some(o) || t.some(e)
                },
                d = function(e, n) {
                    n && e.setAttribute("read-aloud-multi-block", !0), l.push(e)
                },
                l = [];
            return function e(r) {
                var t = Array.from(r.classList);
                if (!(t.includes("nr-webreader-trigger-container") || t.includes("nr-webreader-check") || t.includes("nr-webreader-frame")))
                    if (A(r, "frame") || A(r, "iframe")) try {
                            e.call(r.contentDocument.body)
                        } catch (e) {} else if (A(r, "dl")) d(r);
                        else if (A(r, "ol") || A(r, "ul")) {
                    var a = Array.from(r.children);
                    a.some(i) ? d(r) : a.some(o) ? d(r, !0) : a.some(s) && d(r, !0)
                } else if (A(r, "tbody")) {
                    var l = Array.from(r.children);
                    if (l.length > 3 || l[0].children.length > 3) l.some(s) && d(r, !0);
                    else
                        for (var c = 0; c < l.length; c++) e(l[c])
                } else if (i(r)) d(r);
                else if (o(r)) d(r, !0);
                else {
                    var p = K(r.children, n);
                    for (c = 0; c < p.length; c++) e(p[c])
                }
            }(document.body), l.filter((function(e) {
                return P(e) && e.offsetLeft >= 0
            }))
        }

        function c(e, n, r) {
            null == n && (n = 0), null == r && (r = e.length);
            for (var t = 0, a = n; a < r; a++) t += e[a].length;
            for (var i = t / (r - n), o = 0, s = n; s < r; s++) o += (e[s].length - i) * (e[s].length - i);
            return {
                mean: i,
                stdev: Math.sqrt(o)
            }
        }

        function p(e) {
            return new Promise(function() {
                var n = o()(a.a.mark((function n(r) {
                    var t, i, o, s, d;
                    return a.a.wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                if ((t = (t = ne.findVisiDoms(e)).filter(S)).forEach((function(e, n) {
                                        e.classList.add("dontRead")
                                    })), !e.getAttribute("read-aloud-multi-block")) {
                                    n.next = 15;
                                    break
                                }
                                i = Array.from(e.children), o = 0;
                            case 7:
                                if (!(o < i.length)) {
                                    n.next = 13;
                                    break
                                }
                                return n.next = 10, b(i[o]);
                            case 10:
                                o++, n.next = 7;
                                break;
                            case 13:
                                n.next = 17;
                                break;
                            case 15:
                                return n.next = 17, b(e);
                            case 17:
                                for (s = ne.allDomsSelector(e, ".read-aloud-numbering"), d = 0; d < s.length; d++) ne.removeSelf(s[d]);
                                t.forEach((function(e, n) {
                                    e.classList.remove("dontRead")
                                })), r();
                            case 21:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })));
                return function(e) {
                    return n.apply(this, arguments)
                }
            }()).catch((function(e) {}))
        }

        function u() {
            return m.apply(this, arguments)
        }

        function m() {
            return (m = o()(a.a.mark((function e() {
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, e.next = 3, g("nr-paragraph");
                        case 3:
                            return e.next = 5, g("nr-sentence");
                        case 5:
                            e.next = 9;
                            break;
                        case 7:
                            e.prev = 7, e.t0 = e.catch(0);
                        case 9:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 7]
                ])
            })))).apply(this, arguments)
        }

        function g(e) {
            return new Promise(function() {
                var n = o()(a.a.mark((function n(r) {
                    var t, i;
                    return a.a.wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                t = document.querySelectorAll(e), i = 0;
                            case 2:
                                if (!(i < t.length)) {
                                    n.next = 8;
                                    break
                                }
                                return n.next = 5, h(t[i]);
                            case 5:
                                i++, n.next = 2;
                                break;
                            case 8:
                                r();
                            case 9:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })));
                return function(e) {
                    return n.apply(this, arguments)
                }
            }())
        }

        function h(e) {
            return new Promise((function(n) {
                var r = ne.getText(e);
                ne.replaceWithDom(e, document.createTextNode(r)), n()
            })).catch((function(e) {}))
        }

        function b(e) {
            return f.apply(this, arguments)
        }

        function f() {
            return (f = o()(a.a.mark((function e(n) {
                var r, t, i, o, s, d, l;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (3 === n.nodeType || !n.classList.contains("dontRead")) {
                                e.next = 2;
                                break
                            }
                            return e.abrupt("return");
                        case 2:
                            if (r = ne.contentsByDom(n), e.prev = 3, t = ne.getCss(n, "display"), i = ne.getCss(n, "visibility"), 3 === n.nodeType || "none" != t && "hidden" != i) {
                                e.next = 8;
                                break
                            }
                            return e.abrupt("return");
                        case 8:
                            if (0 !== r.length) {
                                e.next = 22;
                                break
                            }
                            if (3 !== n.nodeType || !n.nodeValue.trim()) {
                                e.next = 19;
                                break
                            }
                            for (te.setEntry(D(n.nodeValue)), o = w(te.getSentences()), s = 0; s < o.length; s++) o[s] = H(o[s]);
                            return d = v(o), e.next = 16, E(n, d, o, 0);
                        case 16:
                        case 19:
                            return e.abrupt("return");
                        case 20:
                            e.next = 34;
                            break;
                        case 22:
                            if ("P" !== n.nodeName) {
                                e.next = 27;
                                break
                            }
                            return e.next = 25, x(n);
                        case 25:
                            e.next = 34;
                            break;
                        case 27:
                            l = 0;
                        case 28:
                            if (!(l < r.length)) {
                                e.next = 34;
                                break
                            }
                            return e.next = 31, b(r[l]);
                        case 31:
                            l++, e.next = 28;
                            break;
                        case 34:
                            e.next = 39;
                            break;
                        case 36:
                            return e.prev = 36, e.t0 = e.catch(3), e.abrupt("return");
                        case 39:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [3, 36]
                ])
            })))).apply(this, arguments)
        }

        function w(e) {
            for (var n = [], r = 0; r < e.length; r++) {
                var t = j(e[r]);
                t = Q(t), n.push.apply(n, ee()(t))
            }
            return n
        }

        function x(e) {
            return Promise.resolve().then(o()(a.a.mark((function n() {
                var r, t, i;
                return a.a.wrap((function(n) {
                    for (;;) switch (n.prev = n.next) {
                        case 0:
                            return r = D(ne.getText(e)).trim(), te.setEntry(r), t = te.getSentences(), i = w(t.map((function(e) {
                                return H(e).trim()
                            }))), n.next = 6, Z(e, i);
                        case 6:
                        case "end":
                            return n.stop()
                    }
                }), n)
            })))).catch((function(e) {}))
        }

        function v(e) {
            for (var n = [], r = 0; r < e.length; r++) n.push(e[r]);
            return n
        }

        function y(e) {
            return k.apply(this, arguments)
        }

        function k() {
            return (k = o()(a.a.mark((function e(n) {
                var r, t, i;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            for (r = document.querySelectorAll("." + n), t = 0; t < r.length; t++) i = ne.getText(r[t]), r[t].textContent = i;
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function V() {
            return (V = o()(a.a.mark((function e(n, r, t) {
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            U("", n, r, t), U("cc", n, r, t);
                        case 2:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function U(e, n, r, t) {
            return R.apply(this, arguments)
        }

        function R() {
            return (R = o()(a.a.mark((function e(n, r, t, i) {
                var o, s, d, l, c, p, u, m, g, h;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            return e.prev = 0, o = 0, s = "nr-" + n + (n ? "-" : "") + "s" + r, e.next = 5, y(s);
                        case 5:
                            d = Array.from(document.getElementsByClassName(s)), l = v(t), c = 0;
                        case 8:
                            if (!(c < d.length)) {
                                e.next = 30;
                                break
                            }(p = d[c]).normalize(), u = document.createTreeWalker(p, NodeFilter.SHOW_TEXT, null, !1), m = null;
                        case 13:
                            if (!(m = u.nextNode())) {
                                e.next = 27;
                                break
                            }
                            return e.next = 16, N(m, s, l, o);
                        case 16:
                            if ((g = e.sent) && g.node) {
                                e.next = 19;
                                break
                            }
                            return e.abrupt("break", 27);
                        case 19:
                            if (h = g.index, u.currentNode = g.node, o == h) {
                                e.next = 25;
                                break
                            }
                            if (!((o = h) > t.length - 1)) {
                                e.next = 25;
                                break
                            }
                            return e.abrupt("break", 27);
                        case 25:
                            e.next = 13;
                            break;
                        case 27:
                            c++, e.next = 8;
                            break;
                        case 30:
                            e.next = 34;
                            break;
                        case 32:
                            e.prev = 32, e.t0 = e.catch(0);
                        case 34:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 32]
                ])
            })))).apply(this, arguments)
        }

        function N(e, n, r, t) {
            return T.apply(this, arguments)
        }

        function T() {
            return (T = o()(a.a.mark((function e(n, r, t, i) {
                var o, s, d, l, c, p, u, m;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0, !(i > t.length - 1)) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return");
                        case 3:
                            if (n.nodeValue && "" !== D(n.nodeValue).trim()) {
                                e.next = 5;
                                break
                            }
                            return e.abrupt("return", i);
                        case 5:
                            o = 0, s = 0, d = n.nodeValue, l = d.length, c = t[i], p = i, u = !1;
                        case 12:
                            if (!(o < d.length)) {
                                e.next = 23;
                                break
                            }
                            if (L(d[o]) !== c[0]) {
                                e.next = 20;
                                break
                            }
                            if (u || (s = o, u = !0), 0 !== (c = c.substring(1)).length) {
                                e.next = 20;
                                break
                            }
                            return o++, p++, e.abrupt("break", 23);
                        case 20:
                            o++, e.next = 12;
                            break;
                        case 23:
                            return l = o, t[i] = c, m = document.createElement("nr-word"), ne.addClass(m, r + "w" + i), 0 !== s && (n = n.splitText(s), l -= s), n.splitText(l), ne.wrapDom(n, m), e.abrupt("return", {
                                index: p,
                                node: n
                            });
                        case 33:
                            e.prev = 33, e.t0 = e.catch(0);
                        case 35:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 33]
                ])
            })))).apply(this, arguments)
        }

        function Z(e, n) {
            return F.apply(this, arguments)
        }

        function F() {
            return (F = o()(a.a.mark((function e(n, r) {
                var t, i, o, s, d;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            e.prev = 0, n.normalize(), t = v(r), i = document.createTreeWalker(n, NodeFilter.SHOW_TEXT, null, !1), o = null, s = 0;
                        case 6:
                            if (!(o = i.nextNode())) {
                                e.next = 15;
                                break
                            }
                            return o.nodeValue, e.next = 10, E(o, t, r, s);
                        case 10:
                            d = e.sent, s != d && (s = d), e.next = 6;
                            break;
                        case 15:
                            e.next = 19;
                            break;
                        case 17:
                            e.prev = 17, e.t0 = e.catch(0);
                        case 19:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 17]
                ])
            })))).apply(this, arguments)
        }

        function E(e, n, r, t) {
            return W.apply(this, arguments)
        }

        function W() {
            return (W = o()(a.a.mark((function e(n, t, i, o) {
                var s, l, c, p, u, m;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0, n.nodeValue && "" !== D(n.nodeValue).trim()) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", o);
                        case 3:
                            s = 0, 0, l = n.nodeValue, c = l.length, p = t[o], u = o;
                        case 10:
                            if (!(s < l.length)) {
                                e.next = 20;
                                break
                            }
                            if (D(l[s]) !== p[0]) {
                                e.next = 17;
                                break
                            }
                            if (0 !== (p = p.substring(1)).length) {
                                e.next = 17;
                                break
                            }
                            return s++, u++, e.abrupt("break", 20);
                        case 17:
                            s++, e.next = 10;
                            break;
                        case 20:
                            return c = s, t[o] = p, m = document.createElement("nr-sentence"), ne.addClass(m, "nr-s" + r.length), 0 === t[o].length && r.push(d(i[o])), n.splitText(c), ne.wrapDom(n, m), e.abrupt("return", u);
                        case 30:
                            e.prev = 30, e.t0 = e.catch(0);
                        case 32:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 30]
                ])
            })))).apply(this, arguments)
        }

        function S(e) {
            var n = ne.getCss(e, "float"),
                r = ne.getCss(e, "position");
            return q(e, t) || A(e, "sup") || "right" == n || "fixed" == r
        }

        function M(e) {
            return (n = ne.getText(e), n.replace(/(\w)(\s*?\r?\n)/g, "$1.$2")).trim();
            var n
        }

        function _(e, n) {
            for (var r = [], a = e.querySelectorAll("h1, h2, h3, h4, h5, h6, p"), i = null, o = 0; o != a.length; o++)
                if (ne.isVisibleDom(a[o])) {
                    i = a[o];
                    break
                } for (var s = z(i), d = J(e, !0); d && d != n;) {
                var l = q(d, t);
                if (!l && 1 == d.nodeType && P(d)) {
                    var c = z(d);
                    c < s && (r.push(d), s = c)
                }
                d = J(d, l)
            }
            return r.reverse()
        }

        function z(e) {
            var n = e && /^H(\d)$/i.exec(e.tagName);
            return n ? Number(n[1]) : 100
        }

        function J(e, n) {
            return A(e, "body") ? null : 1 == e.nodeType && !n && e.lastChild ? e.lastChild : e.previousSibling ? e.previousSibling : J(e.parentNode, !0)
        }

        function Y(e, n) {
            for (var r = e.firstChild; r;) {
                if (n(r)) return !0;
                r = r.nextSibling
            }
            return !1
        }

        function G(e) {
            return [].concat.apply([], e)
        }

        function C(e) {
            finddoms = ne.findVisiDoms(e), finddoms.filter(S);
            for (var n = 0; n < finddoms.length; n++) ne.showDom(finddoms[n]);
            var r = finddoms,
                t = [];
            ne.mergeArr(t, ne.allDomsSelector(e, "ol, ul"));
            for (var a = 0; a != t.length; a++) ne.mergeArr(t, ne.allDomsSelector(t[a], "ol, ul"));
            t.each((function(e) {
                var n, r, t;
                n = e, r = Array.from(n.children), (t = r.length ? I(r[0]) : null) && !t.match(/^[(]?(\d|[a-zA-Z][).])/) && r.each((function(e) {
                    var r = document.createElement("span");
                    ne.addClass(r, "read-aloud-numbering"), ne.setText(r, e + 1 + ". "), ne.prependDom(r, n)
                }))
            }));
            var i = [];
            Array.from(e.children).each((function(e) {
                domvisible(e) && i.push(e)
            }));
            var o = ne.getAttribute(e, "read-aloud-multi-block") ? i.map(M) : M(e).split(B);
            finddoms = ne.allDomsSelector(e, ".read-aloud-numbering");
            for (n = 0; n < finddoms.length; n++) ne.removeSelf(finddoms[n]);
            return r.each((function(e) {
                ne.showDom(e)
            })), o
        }
        n.getTextsFromPage = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "tts";
            return new Promise(function() {
                var e = o()(a.a.mark((function e(n) {
                    return a.a.wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, i();
                            case 2:
                                return e.next = 4, u();
                            case 4:
                                n();
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(n) {
                    return e.apply(this, arguments)
                }
            }()).then((function() {
                return new Promise(function() {
                    var n = o()(a.a.mark((function n(t) {
                        return a.a.wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.next = 2, s(e);
                                case 2:
                                    t(r);
                                case 3:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(e) {
                        return n.apply(this, arguments)
                    }
                }())
            })).catch((function(e) {}))
        }, n.setWordsForMainTextAndCC = function(e, n, r) {
            return V.apply(this, arguments)
        }, n.textSource = e;
        var B = /(?:\s*\r?\n\s*){2,}/;

        function I(e) {
            var n = ne.getText(e);
            return n ? n.trim() : ""
        }

        function O(e) {
            return e
        }

        function D(e) {
            return e = H(e = function(e) {
                return e = (e = e.replace(/&nbsp;/gi, " ")).replace(/[\u200c|\u200b|\u200d|\ufeff]/gi, " ")
            }(e = function(e) {
                return e.replace(/(\r\n|\n|\r)/gm, " ")
            }(e)))
        }

        function H(e) {
            return e.replace(/\s+/g, " ")
        }

        function L(e) {
            var n = D(e);
            return n = (n = n.replace(/[\u2018|\u2019|\u2039|\u203A]/g, "'")).replace(/[\u2014|\u2015]/g, "-")
        }

        function j(e) {
            for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500, r = [], t = 0; e.length > 0;) {
                var a = X(e, n),
                    i = e.substring(t, a + 1);
                r.push(i), e = e.substring(a + 1)
            }
            return r
        }

        function Q(e) {
            for (var n = "", r = [], t = 0; t != e.length; t++) {
                n += e[t];
                var a = !0;
                t + 1 < e.length && ((n + e[t + 1]).length > 250 && (a = !1), n.length < 50 && (a = !0)), t != e.length - 1 && a || (r.push(n), n = "")
            }
            return r
        }

        function X(e, n) {
            var r = ["?", "!", "¿", "¡", "。", "～", "……", "！", "？"],
                t = [",", ";", ":", "，", "；", "："],
                a = e.substring(0, n);
            if (e.length <= n) return e.length - 1;
            for (var i = Number.MAX_VALUE, o = 0; o < r.length; o++) {
                var s = a.indexOf(r[o]);
                s <= i && s >= 0 && (i = s)
            }
            if (i === Number.MAX_VALUE && (i = -1), i <= 0) {
                for (var d = 0; d < t.length; d++) i = Math.max(a.lastIndexOf(t[d]), i);
                return i <= 0 && (i = a.lastIndexOf(" ")) <= 0 && (i = a.lastIndexOf("〿")), i <= 0 ? n - 1 : i
            }
            return e[i + 1] && '"' === e[i + 1] ? i + 1 : i
        }

        function P(e) {
            return e.offsetWidth > 0 || e.offsetHeight > 0
        }

        function K(e, n) {
            for (var r = [], t = 0; t < e.length; t++) n.includes(e[t].tagName) || r.push(e[t]);
            return r
        }

        function A(e, n) {
            var r = !1;
            try {
                if (Element.prototype.matches) r = e.matches(n);
                else {
                    var t = Element.prototype;
                    if (t.webkitMatchesSelector) t.matches = t.webkitMatchesSelector;
                    else if (t.msMatchesSelector) t.matches = t.msMatchesSelector;
                    else {
                        if (!t.mozMatchesSelector) return !1;
                        t.matches = t.mozMatchesSelector
                    }
                    r = e.matches(n)
                }
                return r
            } catch (e) {
                return !1
            }
        }

        function q(e, n) {
            for (var r = 0; r < n.length; r++)
                if (A(e, n[r])) return !0;
            return !1
        }
        Number.prototype.mod = function(e) {
            return (this % e + e) % e
        }
    }
    r(27);

    function ie(e) {
        var n = this;

        function r(e, r) {
            n.removeHighlight(), n.highlightColourScheme = e, r && n.isHighlight && (n.isCCOpen || (t(n.currHighlightedSentence, "add", "sentence"), t(n.currHighlightedWord, "add", "word")), t(n.currHighlightedCCSentence, "add", "sentence"), t(n.currHighlightedCCWord, "add", "word"))
        }

        function t(e, r, t) {
            if (e)
                for (var a = 0; a < e.length; a++) e[a] && ("add" === r && n.isHighlight ? e[a].classList.add("nr-" + t + "-highlight-" + n.highlightColourScheme) : e[a].classList.remove("nr-" + t + "-highlight-" + n.highlightColourScheme))
        }

        function a(e) {
            var r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            n.isHighlight && (n.removeHighlight(), n.currHighlightedSentence = document.getElementsByClassName("nr-s" + e), n.currHighlightedCCSentence = document.getElementsByClassName("nr-cc-s" + e), r && t(n.currHighlightedCCSentence, "add", "sentence"), n.isCCOpen || t(n.currHighlightedSentence, "add", "sentence"))
        }

        function i(e) {
            try {
                var r = null;
                (r = n.isCCOpen ? document.getElementsByClassName("nr-cc-s" + e)[0] : document.getElementsByClassName("nr-s" + e)[0]) && r.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
            } catch (e) {}
        }
        n.currHighlightedWord = null, n.currHighlightedSentence = null, n.currHighlightedCCSentence = null, n.currHighlightedCCWord = null, n.highlightWord = function(e, r) {
                var a = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                if (!n.isHighlight) return;
                t(n.currHighlightedWord, "remove", "word"), t(n.currHighlightedCCWord, "remove", "word");
                var i = "nr-s" + e + "w" + r;
                n.currHighlightedWord = document.getElementsByClassName(i);
                var o = "nr-cc-s" + e + "w" + r;
                n.currHighlightedCCWord = document.getElementsByClassName(o), a && t(n.currHighlightedCCWord, "add", "word");
                n.isCCOpen || t(n.currHighlightedWord, "add", "word")
            }, n.highlightSentence = a, n.scrollTo = i, n.setCurrRead = function(e) {
                a(e), n.isAutoScroll && i(e)
            }, n.removeHighlight = function() {
                t(n.currHighlightedSentence, "remove", "sentence"), t(n.currHighlightedWord, "remove", "word"), t(n.currHighlightedCCSentence, "remove", "sentence"), t(n.currHighlightedCCWord, "remove", "word")
            }, n.setHighlightColourScheme = r, n.modifyPageHighlight = function(e) {
                "add" === e ? n.isHighlight && (t(n.currHighlightedSentence, "add", "sentence"), t(n.currHighlightedWord, "add", "word")) : (t(n.currHighlightedSentence, "remove", "sentence"), t(n.currHighlightedWord, "remove", "word"))
            }, n.showCC = !1, n.isCCOpen = !1, n.setIsCCOpen = function(e, r) {
                n.isCCOpen = e, n.removeHighlight(), r && n.isHighlight && (n.isCCOpen || (t(n.currHighlightedSentence, "add", "sentence"), t(n.currHighlightedWord, "add", "word")), t(n.currHighlightedCCSentence, "add", "sentence"), t(n.currHighlightedCCWord, "add", "word"))
            }, n.highlightColourScheme = "light", n.isHighlight = !0, n.isAutoScroll = !0, n.CCContainer = document.getElementById("nr-webreader-cc-container"), n.CCTextBox = document.getElementById("nr-webreader-cc-textbox"), n.CC = document.getElementById("nr-webreader-cc"),
            function(e) {
                null != e.settings_highlight_text && (n.isHighlight = e.settings_highlight_text), null != e.settings_auto_scroll && (n.isAutoScroll = e.settings_auto_scroll), null != e.settings_highlight_colour_scheme && (n.highlightColourScheme = e.settings_highlight_colour_scheme), r(n.highlightColourScheme)
            }(e)
    }

    function oe() {
        this.set = function(e, n) {
            try {
                return "string" != typeof n && (n = JSON.stringify(n)), localStorage.setItem(e, n), !0
            } catch (e) {
                return !1
            }
        }, this.get = function(e) {
            var n = localStorage.getItem(e),
                r = null;
            if (n && "undefined" !== n && "null" !== n) try {
                r = JSON.parse(n)
            } catch (e) {
                r = n
            }
            return r
        }, this.remove = function(e) {
            localStorage.removeItem(e)
        }
    }

    function se() {
        var e = this;
        e.gU = function(e) {
            var n = function(e) {
                var n = t.get("user"),
                    r = t.get("userE"),
                    i = o();
                if (n && r && i && a.getCurrentUtcTime() < r - 5e3) return n;
                if (n && r && i && a.getCurrentUtcTime() + 300 >= r - 5e3) return s(e).catch((function(e) {})), n;
                return ""
            }();
            if (n) return Promise.resolve(n);
            return s(e)
        }, e.resetU = i, e.resetUIfUrlChanged = function() {
            o() || i()
        };
        var n = I.a.securityEndpoint,
            r = new oe,
            t = new D,
            a = new H;

        function i() {
            t.remove("user"), t.remove("userE"), t.remove("url")
        }

        function o() {
            var e = t.get("url"),
                n = a.getPageUrl();
            return !!e && e == n
        }

        function s(i) {
            var o = function() {
                var e = r.get("eui");
                return e || ""
            }();
            return new Promise((function(s, d) {
                var l = n + "request",
                    c = new XMLHttpRequest;
                c.open("POST", l), c.setRequestHeader("Content-Type", "application/json"), c.onreadystatechange = function() {
                    if (this.readyState === XMLHttpRequest.DONE && this.status >= 400) {
                        var n = c.response;
                        e.resetU(), d(n)
                    }
                    if (this.readyState === XMLHttpRequest.DONE && 200 === this.status) try {
                        var i, l = c.response;
                        i = l && "object" == q()(l) && l.u ? l.u : l;
                        var p = a.getCurrentUtcTime() + 1200 + 5e3,
                            u = i.substring(0, 29) + i.substring(i.length - 3, i.length);
                        if (u || (e.resetU(), d({
                                errorCode: 5002
                            })), t.set("user", u), t.set("url", a.getPageUrl()), t.set("userE", p), (!o || "object" == q()(l) && l.add) && u)(function(e) {
                            r.set("eui", e)
                        })(u);
                        s(u)
                    } catch (n) {
                        e.resetU(), d(n)
                    }
                    2 === this.readyState && (c.responseType = "json")
                }, c.onerror = function(n) {
                    e.resetU(), d(n)
                };
                var p = JSON.stringify({
                    i: i.widgetId,
                    u: a.getPageUrl(),
                    eui: o
                });
                try {
                    c.send(p)
                } catch (e) {}
            })).catch((function(n) {
                return e.resetU(), Promise.reject(n)
            }))
        }
    }

    function de(e, n) {
        var r = this;

        function t() {
            if (!r.isGrabbingText || !r.isFirstRead) {
                var e = r.setPlayId();
                return r.isFirstRead && J.widgetChannel.port1.postMessage("setUIOnLoading"), s().then((function(e) {
                    return r.playId, r.isFirstRead ? i() : Promise.resolve()
                })).then((function() {
                    return r.playId, r.isFirstRead = !1, r.isGrabbingText = !1, e === r.playId ? (n = r.tts.textsForTts[r.currReadIndex], r.domController.highlightSentence(r.currReadIndex), r.tts.play(n, r.currReadIndex, d).catch((function(e) {}))) : Promise.reject(new Error("ERR_INVALID_PLAY_ID"));
                    var n
                })).catch((function(e) {
                    e && "ERR_INVALID_PLAY_ID" === e.message ? r.id : u()
                }))
            }
        }

        function i() {
            return r.isGrabbingText = !0, s().then((function(n) {
                return r.isFirstRead ? r.textProcessor.getTextsFromPage().then((function(n) {
                    if (r.isGrabbingText = !1, 0 === n.length) throw new Error("no text");
                    return r.tts.textsForTts = n, r.tts.textsForTts, J.widgetChannel.port1.postMessage({
                            fn: "setCC",
                            texts: r.tts.textsForTts
                        }), J.widgetChannel.port1.postMessage({
                            readProgressUnit: 100 / r.tts.textsForTts.length
                        }),
                        function(n) {
                            var t = r.securityApi + "serve";
                            return new Promise((function(a, i) {
                                return fetch(t, {
                                    method: "POST",
                                    mode: "cors",
                                    cache: "no-cache",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify({
                                        l: n,
                                        u: r.utilService.getPageUrl(),
                                        i: e.widgetId
                                    })
                                }).then((function(e) {
                                    return a(e.json())
                                })).catch((function(e) {
                                    return i(e)
                                }))
                            })).catch((function(e) {}))
                        }(n.map((function(e) {
                            return e.text
                        })))
                })).catch((function(e) {
                    r.isGrabbingText = !1
                })) : (r.isGrabbingText = !1, Promise.resolve())
            })).catch((function(e) {
                r.isGrabbingText = !1
            }))
        }

        function s() {
            return r.uiService.gU(e).then((function(e) {
                r.tts.requestU = e
            })).catch((function(e) {
                r.tts.requestU = "", e && e.errorCode ? d({
                    type: "error",
                    err: e.errorCode
                }) : d({
                    type: "error"
                })
            }))
        }

        function d(e) {
            e && ("start" === e.type ? (r.isFirstRead = !1, r.isReading = !0, J.widgetChannel.port1.postMessage("setUIOnPlay"), r.domController.setCurrRead(r.currReadIndex), r.readProgress = (r.currReadIndex + 1) / r.tts.textsForTts.length * 100, J.widgetChannel.port1.postMessage({
                readProgressUnit: 100 / r.tts.textsForTts.length
            }), r.sendCurrReadProgressToPopup()) : "end" === e.type ? (r.isReading = !1, l()) : "pause" === e.type ? (r.isReading = !1, r.domController.removeHighlight(), J.widgetChannel.port1.postMessage("setUIOnPause")) : "word" === e.type ? r.domController.highlightWord(r.currReadIndex, e.wordIndex) : "error" === e.type ? (e.err, e.err && "u" != e.err && (V(e.err), e.isTempError || N(), R(e.isTempError)), 5e3 === e.err ? (p(), r.tts.errCount = 0) : u()) : "setNrWords" === e.type ? r.textProcessor.setWordsForMainTextAndCC(r.currReadIndex, e.words, e.voice) : "loading" === e.type && J.widgetChannel.port1.postMessage("setUIOnLoading"))
        }

        function l() {
            r.currReadIndex + 1 < r.tts.textsForTts.length ? (r.currReadIndex++, t()) : u()
        }

        function c() {
            return (c = o()(a.a.mark((function e() {
                var n, t = arguments;
                return a.a.wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            n = t.length > 0 && void 0 !== t[0] ? t[0] : 0, r.resetRequestU(), r.isFirstRead = !0, r.isReading = !1, r.isGrabbingText = !1, r.currReadText = null, r.currReadIndex = n, r.charIndicesOfWords = [], r.currWordIndex = 0, r.currChunkIndex = 0, r.readProgress = 0, r.playId = void 0, r.sendCurrReadProgressToPopup(), r.tts.clearPreloads();
                        case 14:
                        case "end":
                            return e.stop()
                    }
                }), e)
            })))).apply(this, arguments)
        }

        function p() {
            r.tts.pause()
        }

        function u() {
            J.widgetChannel.port1.postMessage("setUIOnPause"), r.domController.removeHighlight(), r.tts.stop(),
                function() {
                    c.apply(this, arguments)
                }()
        }

        function m(e) {
            "number" != typeof e.value && (e.value = parseInt(e.value)), isNaN(e.value) || (r.tts.speed = e.value, r.replay())
        }
        r.tts = {}, r.textProcessor = {}, r.domController = {}, r.isReading = !1, r.currReadText = null, r.currReadIndex = 0, r.readProgress = 0, r.apiKey = e.apiKey, r.charIndicesOfWords = [], r.isFirstRead = !0, r.playId = void 0, r.securityApi = I.a.securityEndpoint, r.play = t, r.replay = function() {
                r.tts.clearPreloads(), r.isReading && (r.pause(), r.play())
            }, r.stop = u, r.pause = p, r.forward = function() {
                r.currReadIndex + 1 < r.tts.textsForTts.length ? (r.currReadIndex++, r.play()) : r.play()
            }, r.back = function() {
                r.currReadIndex - 1 >= 0 ? (r.currReadIndex--, r.play()) : r.play()
            }, r.playNext = l, r.readIndex = function(e) {
                isNaN(e.indexToRead) || (e.indexToRead >= 0 && e.indexToRead < r.tts.textsForTts.length ? (r.pause(), r.currReadIndex = e.indexToRead, r.play()) : e.indexToRead >= 0 && e.indexToRead == r.tts.textsForTts.length && (r.pause(), r.currReadIndex = e.indexToRead - 1, r.play()))
            }, r.setPlayId = function() {
                void 0 === r.playId ? r.playId = 0 : r.playId++;
                return r.playId, r.playId
            }, r.sendCurrReadProgressToPopup = function() {
                var e = {
                    message: "currBeingRead",
                    currBeingRead: {
                        text: r.currReadText,
                        readProgress: r.readProgress
                    }
                };
                return J.widgetChannel.port1.postMessage(e)
            }, r.setHighlightColourScheme = function(e) {
                e.value && r.domController.setHighlightColourScheme(e.value, r.isReading)
            }, r.modifyPageHighlight = function(e) {
                var n = e.op;
                r.domController.modifyPageHighlight(n)
            }, r.setHighlight = function(e) {
                r.domController.isHighlight = e.value, e.value ? r.domController.highlightSentence(r.currReadIndex, r.isReading) : r.domController.removeHighlight()
            }, r.setVoice = function(e) {
                e.value && (r.tts.voice = e.value, r.replay())
            }, r.setSpeed = m, r.setAutoScroll = function(e) {
                r.domController.isAutoScroll = e.value, r.isReading && e.value && r.domController.scrollTo(r.currReadIndex)
            }, r.relocateText = function() {
                r.domController.scrollTo(r.currReadIndex)
            }, r.setShowCC = function(e) {
                var n = e.value;
                r.domController.showCC = n
            }, r.setIsCCOpen = function(e) {
                var n = e.value;
                r.domController.setIsCCOpen(n, r.isReading)
            }, r.initApi = function() {
                r.gU()
            }, r.grabText = i, r.isGrabbingText = !1, r.utilService = new H, r.gU = s, r.requestU = "", r.resetRequestU = function() {
                r.tts.requestU = "", r.uiService.resetUIfUrlChanged()
            }, r.uiService = new se,
            function(e) {
                r.tts = new K(e.widgetId, e.apiKey), r.tts.voice = e.reader_settings.settings_default_voice, r.tts.speed = e.reader_settings.settings_default_speed, r.textProcessor = new ae(e.customTextSource), r.domController = new ie(e.reader_settings), J.readerChannel = new MessageChannel, J.readerChannel.port2.onmessage = function(e) {
                    r[e.data] ? r[e.data]() : r[e.data.fn] && r[e.data.fn](e.data)
                }, window.onbeforeunload = function() {
                    r.stop()
                }, m({
                    value: e.reader_settings.settings_default_speed
                }), r.initApi()
            }(e)
    }
    window.NRWebReader = function(e) {
        var n = this;
        n.widgetId = e.widget_id, n.widget = {}, n.config = {}, n.reader = {}, n.widgetResult = null, n.readerResult = null;
        var r = !1,
            t = !1,
            a = null;

        function i() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            t && (r ? o() : (r = !0, n.widget = new C(n.widgetResult, e, a), n.reader = new de(n.readerResult, a)))
        }

        function o() {
            var e = document.getElementById("nr-webreader"),
                n = document.getElementById("nr-webreader-trigger-container");
            e && "hidden" == e.style.visibility ? e.style.visibility = "visible" : e.style.visibility = "hidden", n && "hidden" == n.style.visibility ? n.style.visibility = "visible" : n.style.visibility = "hidden"
        }
        n.init = i, n.config = new L(n.widgetId), n.config.getSettings(e).then((function(e) {
            if ("test" == e.launched.env && f(d.a), e.launched.needLaunchWR) {
                n.widgetResult = e.widget, n.readerResult = e.reader;
                var r = Array.from(document.querySelectorAll(".nr-custom-trigger")),
                    o = Array.from(document.querySelectorAll(".nr-trigger-placeholder"));
                if (r.length, o.length, a = e.err.error, t = !0, 0 === r.length && 0 === o.length) i(!1);
                else if (o.length > 0 && function(e) {
                        for (var n = 0; n < e.length; n++) r = e[n], t = void 0, (t = document.createElement("BUTTON")).style.backgroundImage = "url('https://webreader.naturalreaders.com/webreader-icons/speaker.svg')", t.style.width = "28px", t.style.height = "28px", t.style.border = "none", t.style.backgroundRepeat = "no-repeat", t.style.backgroundSize = "28px 28px", t.style.backgroundPosition = "center center", t.style.borderRadius = "50%", t.style.cursor = "pointer", r.appendChild(t), t.onclick = i;
                        var r, t
                    }(o), r.length > 0)
                    for (var s = 0; s < r.length; s++) r[s].onclick = i
            }
        }))
    }
}]);