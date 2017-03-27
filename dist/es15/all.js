"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

$(document).ready(function () {
  function t() {
    $.ajax({ url: "https://pixabay.com/api/?key=4567175-1fcb090e1f6a018a904e3d3b2&q=" + $(".form__search__input").val(), method: "GET", dataType: "jsonp", success: function success(t) {
        e(t);
      }, error: function error() {
        console.log("error");
      } });
  }function e(t) {
    n.masonry("destroy");for (var e = 0; e < 7; e++) {
      var o = t.hits[e],
          s = $('<figure class="grid-item">               <img target="_blank" src="' + o.webformatURL + '"></img><p class="tag">' + o.tags + "</p></figure>");n.append(s), n.imagesLoaded().progress(function () {
        n.masonry("layout");
      });
    }i();
  }function i() {
    n.masonry({ itemSelector: ".grid-item", percentPosition: !0 });
  }var n = $(".grid");$(".bxslider").bxSlider(), $(".form__search__btn").on("click", function (e) {
    $(".holiday_ideas__result").empty(), t(), e.preventDefault();
  }), $(".form__search__input").keypress(function (e) {
    13 == e.which && ($(".holiday_ideas__result").empty(), t(), e.preventDefault());
  }), t(), i();
}), !function (t, e) {
  "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery);
}(window, function (t, e) {
  "use strict";
  function i(i, s, a) {
    function l(t, e, n) {
      var o,
          s = "$()." + i + '("' + e + '")';return t.each(function (t, l) {
        var d = a.data(l, i);if (!d) return void r(i + " not initialized. Cannot call methods, i.e. " + s);var c = d[e];if (!c || "_" == e.charAt(0)) return void r(s + " is not a valid method");var h = c.apply(d, n);o = void 0 === o ? h : o;
      }), void 0 !== o ? o : t;
    }function d(t, e) {
      t.each(function (t, n) {
        var o = a.data(n, i);o ? (o.option(e), o._init()) : (o = new s(n, e), a.data(n, i, o));
      });
    }a = a || e || t.jQuery, a && (s.prototype.option || (s.prototype.option = function (t) {
      a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t));
    }), a.fn[i] = function (t) {
      if ("string" == typeof t) {
        var e = o.call(arguments, 1);return l(this, t, e);
      }return d(this, t), this;
    }, n(a));
  }function n(t) {
    !t || t && t.bridget || (t.bridget = i);
  }var o = Array.prototype.slice,
      s = t.console,
      r = "undefined" == typeof s ? function () {} : function (t) {
    s.error(t);
  };return n(e || t.jQuery), i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.EvEmitter = e();
}("undefined" != typeof window ? window : undefined, function () {
  function t() {}var e = t.prototype;return e.on = function (t, e) {
    if (t && e) {
      var i = this._events = this._events || {},
          n = i[t] = i[t] || [];return -1 == n.indexOf(e) && n.push(e), this;
    }
  }, e.once = function (t, e) {
    if (t && e) {
      this.on(t, e);var i = this._onceEvents = this._onceEvents || {},
          n = i[t] = i[t] || {};return n[e] = !0, this;
    }
  }, e.off = function (t, e) {
    var i = this._events && this._events[t];if (i && i.length) {
      var n = i.indexOf(e);return -1 != n && i.splice(n, 1), this;
    }
  }, e.emitEvent = function (t, e) {
    var i = this._events && this._events[t];if (i && i.length) {
      var n = 0,
          o = i[n];e = e || [];for (var s = this._onceEvents && this._onceEvents[t]; o;) {
        var r = s && s[o];r && (this.off(t, o), delete s[o]), o.apply(this, e), n += r ? 0 : 1, o = i[n];
      }return this;
    }
  }, t;
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
    return e();
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.getSize = e();
}(window, function () {
  "use strict";
  function t(t) {
    var e = parseFloat(t),
        i = -1 == t.indexOf("%") && !isNaN(e);return i && e;
  }function e() {}function i() {
    for (var t = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, e = 0; d > e; e++) {
      var i = l[e];t[i] = 0;
    }return t;
  }function n(t) {
    var e = getComputedStyle(t);return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), e;
  }function o() {
    if (!c) {
      c = !0;var e = document.createElement("div");e.style.width = "200px", e.style.padding = "1px 2px 3px 4px", e.style.borderStyle = "solid", e.style.borderWidth = "1px 2px 3px 4px", e.style.boxSizing = "border-box";var i = document.body || document.documentElement;i.appendChild(e);var o = n(e);s.isBoxSizeOuter = r = 200 == t(o.width), i.removeChild(e);
    }
  }function s(e) {
    if (o(), "string" == typeof e && (e = document.querySelector(e)), e && "object" == (typeof e === "undefined" ? "undefined" : _typeof(e)) && e.nodeType) {
      var s = n(e);if ("none" == s.display) return i();var a = {};a.width = e.offsetWidth, a.height = e.offsetHeight;for (var c = a.isBorderBox = "border-box" == s.boxSizing, h = 0; d > h; h++) {
        var u = l[h],
            g = s[u],
            p = parseFloat(g);a[u] = isNaN(p) ? 0 : p;
      }var f = a.paddingLeft + a.paddingRight,
          m = a.paddingTop + a.paddingBottom,
          v = a.marginLeft + a.marginRight,
          y = a.marginTop + a.marginBottom,
          x = a.borderLeftWidth + a.borderRightWidth,
          S = a.borderTopWidth + a.borderBottomWidth,
          b = c && r,
          w = t(s.width);w !== !1 && (a.width = w + (b ? 0 : f + x));var E = t(s.height);return E !== !1 && (a.height = E + (b ? 0 : m + S)), a.innerWidth = a.width - (f + x), a.innerHeight = a.height - (m + S), a.outerWidth = a.width + v, a.outerHeight = a.height + y, a;
    }
  }var r,
      a = "undefined" == typeof console ? e : function (t) {
    console.error(t);
  },
      l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
      d = l.length,
      c = !1;return s;
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e() : t.matchesSelector = e();
}(window, function () {
  "use strict";
  var t = function () {
    var t = Element.prototype;if (t.matches) return "matches";if (t.matchesSelector) return "matchesSelector";for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
      var n = e[i],
          o = n + "MatchesSelector";if (t[o]) return o;
    }
  }();return function (e, i) {
    return e[t](i);
  };
}), function (t, e) {
  "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
    return e(t, i);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector);
}(window, function (t, e) {
  var i = {};i.extend = function (t, e) {
    for (var i in e) {
      t[i] = e[i];
    }return t;
  }, i.modulo = function (t, e) {
    return (t % e + e) % e;
  }, i.makeArray = function (t) {
    var e = [];if (Array.isArray(t)) e = t;else if (t && "number" == typeof t.length) for (var i = 0; i < t.length; i++) {
      e.push(t[i]);
    } else e.push(t);return e;
  }, i.removeFrom = function (t, e) {
    var i = t.indexOf(e);-1 != i && t.splice(i, 1);
  }, i.getParent = function (t, i) {
    for (; t != document.body;) {
      if (t = t.parentNode, e(t, i)) return t;
    }
  }, i.getQueryElement = function (t) {
    return "string" == typeof t ? document.querySelector(t) : t;
  }, i.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, i.filterFindElements = function (t, n) {
    t = i.makeArray(t);var o = [];return t.forEach(function (t) {
      if (t instanceof HTMLElement) {
        if (!n) return void o.push(t);e(t, n) && o.push(t);for (var i = t.querySelectorAll(n), s = 0; s < i.length; s++) {
          o.push(i[s]);
        }
      }
    }), o;
  }, i.debounceMethod = function (t, e, i) {
    var n = t.prototype[e],
        o = e + "Timeout";t.prototype[e] = function () {
      var t = this[o];t && clearTimeout(t);var e = arguments,
          s = this;this[o] = setTimeout(function () {
        n.apply(s, e), delete s[o];
      }, i || 100);
    };
  }, i.docReady = function (t) {
    var e = document.readyState;"complete" == e || "interactive" == e ? t() : document.addEventListener("DOMContentLoaded", t);
  }, i.toDashed = function (t) {
    return t.replace(/(.)([A-Z])/g, function (t, e, i) {
      return e + "-" + i;
    }).toLowerCase();
  };var n = t.console;return i.htmlInit = function (e, o) {
    i.docReady(function () {
      var s = i.toDashed(o),
          r = "data-" + s,
          a = document.querySelectorAll("[" + r + "]"),
          l = document.querySelectorAll(".js-" + s),
          d = i.makeArray(a).concat(i.makeArray(l)),
          c = r + "-options",
          h = t.jQuery;d.forEach(function (t) {
        var i,
            s = t.getAttribute(r) || t.getAttribute(c);try {
          i = s && JSON.parse(s);
        } catch (e) {
          return void (n && n.error("Error parsing " + r + " on " + t.className + ": " + e));
        }var a = new e(t, i);h && h.data(t, o, a);
      });
    });
  }, i;
}), function (t, e) {
  "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize));
}(window, function (t, e) {
  "use strict";
  function i(t) {
    for (var e in t) {
      return !1;
    }return e = null, !0;
  }function n(t, e) {
    t && (this.element = t, this.layout = e, this.position = { x: 0, y: 0 }, this._create());
  }function o(t) {
    return t.replace(/([A-Z])/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }var s = document.documentElement.style,
      r = "string" == typeof s.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof s.transform ? "transform" : "WebkitTransform",
      l = { WebkitTransition: "webkitTransitionEnd", transition: "transitionend" }[r],
      d = { transform: a, transition: r, transitionDuration: r + "Duration", transitionProperty: r + "Property", transitionDelay: r + "Delay" },
      c = n.prototype = Object.create(t.prototype);c.constructor = n, c._create = function () {
    this._transn = { ingProperties: {}, clean: {}, onEnd: {} }, this.css({ position: "absolute" });
  }, c.handleEvent = function (t) {
    var e = "on" + t.type;this[e] && this[e](t);
  }, c.getSize = function () {
    this.size = e(this.element);
  }, c.css = function (t) {
    var e = this.element.style;for (var i in t) {
      var n = d[i] || i;e[n] = t[i];
    }
  }, c.getPosition = function () {
    var t = getComputedStyle(this.element),
        e = this.layout._getOption("originLeft"),
        i = this.layout._getOption("originTop"),
        n = t[e ? "left" : "right"],
        o = t[i ? "top" : "bottom"],
        s = this.layout.size,
        r = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
        a = -1 != o.indexOf("%") ? parseFloat(o) / 100 * s.height : parseInt(o, 10);r = isNaN(r) ? 0 : r, a = isNaN(a) ? 0 : a, r -= e ? s.paddingLeft : s.paddingRight, a -= i ? s.paddingTop : s.paddingBottom, this.position.x = r, this.position.y = a;
  }, c.layoutPosition = function () {
    var t = this.layout.size,
        e = {},
        i = this.layout._getOption("originLeft"),
        n = this.layout._getOption("originTop"),
        o = i ? "paddingLeft" : "paddingRight",
        s = i ? "left" : "right",
        r = i ? "right" : "left",
        a = this.position.x + t[o];e[s] = this.getXValue(a), e[r] = "";var l = n ? "paddingTop" : "paddingBottom",
        d = n ? "top" : "bottom",
        c = n ? "bottom" : "top",
        h = this.position.y + t[l];e[d] = this.getYValue(h), e[c] = "", this.css(e), this.emitEvent("layout", [this]);
  }, c.getXValue = function (t) {
    var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px";
  }, c.getYValue = function (t) {
    var e = this.layout._getOption("horizontal");return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px";
  }, c._transitionTo = function (t, e) {
    this.getPosition();var i = this.position.x,
        n = this.position.y,
        o = parseInt(t, 10),
        s = parseInt(e, 10),
        r = o === this.position.x && s === this.position.y;if (this.setPosition(t, e), r && !this.isTransitioning) return void this.layoutPosition();var a = t - i,
        l = e - n,
        d = {};d.transform = this.getTranslate(a, l), this.transition({ to: d, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
  }, c.getTranslate = function (t, e) {
    var i = this.layout._getOption("originLeft"),
        n = this.layout._getOption("originTop");return t = i ? t : -t, e = n ? e : -e, "translate3d(" + t + "px, " + e + "px, 0)";
  }, c.goTo = function (t, e) {
    this.setPosition(t, e), this.layoutPosition();
  }, c.moveTo = c._transitionTo, c.setPosition = function (t, e) {
    this.position.x = parseInt(t, 10), this.position.y = parseInt(e, 10);
  }, c._nonTransition = function (t) {
    this.css(t.to), t.isCleaning && this._removeStyles(t.to);for (var e in t.onTransitionEnd) {
      t.onTransitionEnd[e].call(this);
    }
  }, c.transition = function (t) {
    if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(t);var e = this._transn;for (var i in t.onTransitionEnd) {
      e.onEnd[i] = t.onTransitionEnd[i];
    }for (i in t.to) {
      e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
    }if (t.from) {
      this.css(t.from);var n = this.element.offsetHeight;n = null;
    }this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0;
  };var h = "opacity," + o(a);c.enableTransition = function () {
    if (!this.isTransitioning) {
      var t = this.layout.options.transitionDuration;t = "number" == typeof t ? t + "ms" : t, this.css({ transitionProperty: h, transitionDuration: t, transitionDelay: this.staggerDelay || 0 }), this.element.addEventListener(l, this, !1);
    }
  }, c.onwebkitTransitionEnd = function (t) {
    this.ontransitionend(t);
  }, c.onotransitionend = function (t) {
    this.ontransitionend(t);
  };var u = { "-webkit-transform": "transform" };c.ontransitionend = function (t) {
    if (t.target === this.element) {
      var e = this._transn,
          n = u[t.propertyName] || t.propertyName;if (delete e.ingProperties[n], i(e.ingProperties) && this.disableTransition(), n in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[n]), n in e.onEnd) {
        var o = e.onEnd[n];o.call(this), delete e.onEnd[n];
      }this.emitEvent("transitionEnd", [this]);
    }
  }, c.disableTransition = function () {
    this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1;
  }, c._removeStyles = function (t) {
    var e = {};for (var i in t) {
      e[i] = "";
    }this.css(e);
  };var g = { transitionProperty: "", transitionDuration: "", transitionDelay: "" };return c.removeTransitionStyles = function () {
    this.css(g);
  }, c.stagger = function (t) {
    t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms";
  }, c.removeElem = function () {
    this.element.parentNode.removeChild(this.element), this.css({ display: "" }), this.emitEvent("remove", [this]);
  }, c.remove = function () {
    return r && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
      this.removeElem();
    }), void this.hide()) : void this.removeElem();
  }, c.reveal = function () {
    delete this.isHidden, this.css({ display: "" });var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("visibleStyle");e[i] = this.onRevealTransitionEnd, this.transition({ from: t.hiddenStyle, to: t.visibleStyle, isCleaning: !0, onTransitionEnd: e });
  }, c.onRevealTransitionEnd = function () {
    this.isHidden || this.emitEvent("reveal");
  }, c.getHideRevealTransitionEndProperty = function (t) {
    var e = this.layout.options[t];if (e.opacity) return "opacity";for (var i in e) {
      return i;
    }
  }, c.hide = function () {
    this.isHidden = !0, this.css({ display: "" });var t = this.layout.options,
        e = {},
        i = this.getHideRevealTransitionEndProperty("hiddenStyle");e[i] = this.onHideTransitionEnd, this.transition({ from: t.visibleStyle, to: t.hiddenStyle, isCleaning: !0, onTransitionEnd: e });
  }, c.onHideTransitionEnd = function () {
    this.isHidden && (this.css({ display: "none" }), this.emitEvent("hide"));
  }, c.destroy = function () {
    this.css({ position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: "" });
  }, n;
}), function (t, e) {
  "use strict";
  "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, o, s) {
    return e(t, i, n, o, s);
  }) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item);
}(window, function (t, e, i, n, o) {
  "use strict";
  function s(t, e) {
    var i = n.getQueryElement(t);if (!i) return void (l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || t)));this.element = i, d && (this.$element = d(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(e);var o = ++h;this.element.outlayerGUID = o, u[o] = this, this._create();var s = this._getOption("initLayout");s && this.layout();
  }function r(t) {
    function e() {
      t.apply(this, arguments);
    }return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e;
  }function a(t) {
    if ("number" == typeof t) return t;var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        n = e && e[2];if (!i.length) return 0;i = parseFloat(i);var o = p[n] || 1;return i * o;
  }var l = t.console,
      d = t.jQuery,
      c = function c() {},
      h = 0,
      u = {};s.namespace = "outlayer", s.Item = o, s.defaults = { containerStyle: { position: "relative" }, initLayout: !0, originLeft: !0, originTop: !0, resize: !0, resizeContainer: !0, transitionDuration: "0.4s", hiddenStyle: { opacity: 0, transform: "scale(0.001)" }, visibleStyle: { opacity: 1, transform: "scale(1)" } };var g = s.prototype;n.extend(g, e.prototype), g.option = function (t) {
    n.extend(this.options, t);
  }, g._getOption = function (t) {
    var e = this.constructor.compatOptions[t];return e && void 0 !== this.options[e] ? this.options[e] : this.options[t];
  }, s.compatOptions = { initLayout: "isInitLayout", horizontal: "isHorizontal", layoutInstant: "isLayoutInstant", originLeft: "isOriginLeft", originTop: "isOriginTop", resize: "isResizeBound", resizeContainer: "isResizingContainer" }, g._create = function () {
    this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);var t = this._getOption("resize");t && this.bindResize();
  }, g.reloadItems = function () {
    this.items = this._itemize(this.element.children);
  }, g._itemize = function (t) {
    for (var e = this._filterFindItemElements(t), i = this.constructor.Item, n = [], o = 0; o < e.length; o++) {
      var s = e[o],
          r = new i(s, this);n.push(r);
    }return n;
  }, g._filterFindItemElements = function (t) {
    return n.filterFindElements(t, this.options.itemSelector);
  }, g.getItemElements = function () {
    return this.items.map(function (t) {
      return t.element;
    });
  }, g.layout = function () {
    this._resetLayout(), this._manageStamps();var t = this._getOption("layoutInstant"),
        e = void 0 !== t ? t : !this._isLayoutInited;this.layoutItems(this.items, e), this._isLayoutInited = !0;
  }, g._init = g.layout, g._resetLayout = function () {
    this.getSize();
  }, g.getSize = function () {
    this.size = i(this.element);
  }, g._getMeasurement = function (t, e) {
    var n,
        o = this.options[t];o ? ("string" == typeof o ? n = this.element.querySelector(o) : o instanceof HTMLElement && (n = o), this[t] = n ? i(n)[e] : o) : this[t] = 0;
  }, g.layoutItems = function (t, e) {
    t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout();
  }, g._getItemsForLayout = function (t) {
    return t.filter(function (t) {
      return !t.isIgnored;
    });
  }, g._layoutItems = function (t, e) {
    if (this._emitCompleteOnItems("layout", t), t && t.length) {
      var i = [];t.forEach(function (t) {
        var n = this._getItemLayoutPosition(t);n.item = t, n.isInstant = e || t.isLayoutInstant, i.push(n);
      }, this), this._processLayoutQueue(i);
    }
  }, g._getItemLayoutPosition = function () {
    return { x: 0, y: 0 };
  }, g._processLayoutQueue = function (t) {
    this.updateStagger(), t.forEach(function (t, e) {
      this._positionItem(t.item, t.x, t.y, t.isInstant, e);
    }, this);
  }, g.updateStagger = function () {
    var t = this.options.stagger;return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = a(t), this.stagger);
  }, g._positionItem = function (t, e, i, n, o) {
    n ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i));
  }, g._postLayout = function () {
    this.resizeContainer();
  }, g.resizeContainer = function () {
    var t = this._getOption("resizeContainer");if (t) {
      var e = this._getContainerSize();e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1));
    }
  }, g._getContainerSize = c, g._setContainerMeasure = function (t, e) {
    if (void 0 !== t) {
      var i = this.size;i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px";
    }
  }, g._emitCompleteOnItems = function (t, e) {
    function i() {
      o.dispatchEvent(t + "Complete", null, [e]);
    }function n() {
      r++, r == s && i();
    }var o = this,
        s = e.length;if (!e || !s) return void i();var r = 0;e.forEach(function (e) {
      e.once(t, n);
    });
  }, g.dispatchEvent = function (t, e, i) {
    var n = e ? [e].concat(i) : i;if (this.emitEvent(t, n), d) if (this.$element = this.$element || d(this.element), e) {
      var o = d.Event(e);o.type = t, this.$element.trigger(o, i);
    } else this.$element.trigger(t, i);
  }, g.ignore = function (t) {
    var e = this.getItem(t);e && (e.isIgnored = !0);
  }, g.unignore = function (t) {
    var e = this.getItem(t);e && delete e.isIgnored;
  }, g.stamp = function (t) {
    t = this._find(t), t && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this));
  }, g.unstamp = function (t) {
    t = this._find(t), t && t.forEach(function (t) {
      n.removeFrom(this.stamps, t), this.unignore(t);
    }, this);
  }, g._find = function (t) {
    return t ? ("string" == typeof t && (t = this.element.querySelectorAll(t)), t = n.makeArray(t)) : void 0;
  }, g._manageStamps = function () {
    this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this));
  }, g._getBoundingRect = function () {
    var t = this.element.getBoundingClientRect(),
        e = this.size;this._boundingRect = { left: t.left + e.paddingLeft + e.borderLeftWidth, top: t.top + e.paddingTop + e.borderTopWidth, right: t.right - (e.paddingRight + e.borderRightWidth), bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth) };
  }, g._manageStamp = c, g._getElementOffset = function (t) {
    var e = t.getBoundingClientRect(),
        n = this._boundingRect,
        o = i(t),
        s = { left: e.left - n.left - o.marginLeft, top: e.top - n.top - o.marginTop, right: n.right - e.right - o.marginRight, bottom: n.bottom - e.bottom - o.marginBottom };return s;
  }, g.handleEvent = n.handleEvent, g.bindResize = function () {
    t.addEventListener("resize", this), this.isResizeBound = !0;
  }, g.unbindResize = function () {
    t.removeEventListener("resize", this), this.isResizeBound = !1;
  }, g.onresize = function () {
    this.resize();
  }, n.debounceMethod(s, "onresize", 100), g.resize = function () {
    this.isResizeBound && this.needsResizeLayout() && this.layout();
  }, g.needsResizeLayout = function () {
    var t = i(this.element),
        e = this.size && t;return e && t.innerWidth !== this.size.innerWidth;
  }, g.addItems = function (t) {
    var e = this._itemize(t);return e.length && (this.items = this.items.concat(e)), e;
  }, g.appended = function (t) {
    var e = this.addItems(t);e.length && (this.layoutItems(e, !0), this.reveal(e));
  }, g.prepended = function (t) {
    var e = this._itemize(t);if (e.length) {
      var i = this.items.slice(0);this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i);
    }
  }, g.reveal = function (t) {
    if (this._emitCompleteOnItems("reveal", t), t && t.length) {
      var e = this.updateStagger();t.forEach(function (t, i) {
        t.stagger(i * e), t.reveal();
      });
    }
  }, g.hide = function (t) {
    if (this._emitCompleteOnItems("hide", t), t && t.length) {
      var e = this.updateStagger();t.forEach(function (t, i) {
        t.stagger(i * e), t.hide();
      });
    }
  }, g.revealItemElements = function (t) {
    var e = this.getItems(t);this.reveal(e);
  }, g.hideItemElements = function (t) {
    var e = this.getItems(t);this.hide(e);
  }, g.getItem = function (t) {
    for (var e = 0; e < this.items.length; e++) {
      var i = this.items[e];if (i.element == t) return i;
    }
  }, g.getItems = function (t) {
    t = n.makeArray(t);var e = [];return t.forEach(function (t) {
      var i = this.getItem(t);i && e.push(i);
    }, this), e;
  }, g.remove = function (t) {
    var e = this.getItems(t);this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
      t.remove(), n.removeFrom(this.items, t);
    }, this);
  }, g.destroy = function () {
    var t = this.element.style;t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
      t.destroy();
    }), this.unbindResize();var e = this.element.outlayerGUID;delete u[e], delete this.element.outlayerGUID, d && d.removeData(this.element, this.constructor.namespace);
  }, s.data = function (t) {
    t = n.getQueryElement(t);var e = t && t.outlayerGUID;return e && u[e];
  }, s.create = function (t, e) {
    var i = r(s);return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, e), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = t, i.data = s.data, i.Item = r(o), n.htmlInit(i, t), d && d.bridget && d.bridget(t, i), i;
  };var p = { ms: 1, s: 1e3 };return s.Item = o, s;
}), function (t, e) {
  "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], e) : "object" == (typeof module === "undefined" ? "undefined" : _typeof(module)) && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize);
}(window, function (t, e) {
  var i = t.create("masonry");return i.compatOptions.fitWidth = "isFitWidth", i.prototype._resetLayout = function () {
    this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];for (var t = 0; t < this.cols; t++) {
      this.colYs.push(0);
    }this.maxY = 0;
  }, i.prototype.measureColumns = function () {
    if (this.getContainerWidth(), !this.columnWidth) {
      var t = this.items[0],
          i = t && t.element;this.columnWidth = i && e(i).outerWidth || this.containerWidth;
    }var n = this.columnWidth += this.gutter,
        o = this.containerWidth + this.gutter,
        s = o / n,
        r = n - o % n,
        a = r && 1 > r ? "round" : "floor";s = Math[a](s), this.cols = Math.max(s, 1);
  }, i.prototype.getContainerWidth = function () {
    var t = this._getOption("fitWidth"),
        i = t ? this.element.parentNode : this.element,
        n = e(i);this.containerWidth = n && n.innerWidth;
  }, i.prototype._getItemLayoutPosition = function (t) {
    t.getSize();var e = t.size.outerWidth % this.columnWidth,
        i = e && 1 > e ? "round" : "ceil",
        n = Math[i](t.size.outerWidth / this.columnWidth);n = Math.min(n, this.cols);for (var o = this._getColGroup(n), s = Math.min.apply(Math, o), r = o.indexOf(s), a = { x: this.columnWidth * r, y: s }, l = s + t.size.outerHeight, d = this.cols + 1 - o.length, c = 0; d > c; c++) {
      this.colYs[r + c] = l;
    }return a;
  }, i.prototype._getColGroup = function (t) {
    if (2 > t) return this.colYs;for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
      var o = this.colYs.slice(n, n + t);e[n] = Math.max.apply(Math, o);
    }return e;
  }, i.prototype._manageStamp = function (t) {
    var i = e(t),
        n = this._getElementOffset(t),
        o = this._getOption("originLeft"),
        s = o ? n.left : n.right,
        r = s + i.outerWidth,
        a = Math.floor(s / this.columnWidth);a = Math.max(0, a);var l = Math.floor(r / this.columnWidth);l -= r % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);for (var d = this._getOption("originTop"), c = (d ? n.top : n.bottom) + i.outerHeight, h = a; l >= h; h++) {
      this.colYs[h] = Math.max(c, this.colYs[h]);
    }
  }, i.prototype._getContainerSize = function () {
    this.maxY = Math.max.apply(Math, this.colYs);var t = { height: this.maxY };return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t;
  }, i.prototype._getContainerFitWidth = function () {
    for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) {
      t++;
    }return (this.cols - t) * this.columnWidth - this.gutter;
  }, i.prototype.needsResizeLayout = function () {
    var t = this.containerWidth;return this.getContainerWidth(), t != this.containerWidth;
  }, i;
}), !function (t) {
  var e = { mode: "horizontal", slideSelector: "", infiniteLoop: !0, hideControlOnEnd: !1, speed: 500, easing: null, slideMargin: 0, startSlide: 0, randomStart: !1, captions: !1, ticker: !1, tickerHover: !1, adaptiveHeight: !1, adaptiveHeightSpeed: 500, video: !1, useCSS: !0, preloadImages: "visible", responsive: !0, slideZIndex: 50, wrapperClass: "bx-wrapper", touchEnabled: !0, swipeThreshold: 50, oneToOneTouch: !0, preventDefaultSwipeX: !0, preventDefaultSwipeY: !1, ariaLive: !0, ariaHidden: !0, keyboardEnabled: !1, pager: !0, pagerType: "full", pagerShortSeparator: " / ", pagerSelector: null, buildPager: null, pagerCustom: null, controls: !0, nextText: ">", prevText: "<", nextSelector: null, prevSelector: null, autoControls: !1, startText: "Start", stopText: "Stop", autoControlsCombine: !1, autoControlsSelector: null, auto: !1, pause: 4e3, autoStart: !0, autoDirection: "next", stopAutoOnClick: !1, autoHover: !1, autoDelay: 0, autoSlideForOnePage: !1, minSlides: 1, maxSlides: 1, moveSlides: 0, slideWidth: 0, shrinkItems: !1, onSliderLoad: function onSliderLoad() {
      return !0;
    }, onSlideBefore: function onSlideBefore() {
      return !0;
    }, onSlideAfter: function onSlideAfter() {
      return !0;
    }, onSlideNext: function onSlideNext() {
      return !0;
    }, onSlidePrev: function onSlidePrev() {
      return !0;
    }, onSliderResize: function onSliderResize() {
      return !0;
    } };t.fn.bxSlider = function (n) {
    if (0 === this.length) return this;if (this.length > 1) return this.each(function () {
      t(this).bxSlider(n);
    }), this;var o = {},
        s = this,
        r = t(window).width(),
        a = t(window).height();if (!t(s).data("bxSlider")) {
      var l = function l() {
        t(s).data("bxSlider") || (o.settings = t.extend({}, e, n), o.settings.slideWidth = parseInt(o.settings.slideWidth), o.children = s.children(o.settings.slideSelector), o.children.length < o.settings.minSlides && (o.settings.minSlides = o.children.length), o.children.length < o.settings.maxSlides && (o.settings.maxSlides = o.children.length), o.settings.randomStart && (o.settings.startSlide = Math.floor(Math.random() * o.children.length)), o.active = { index: o.settings.startSlide }, o.carousel = o.settings.minSlides > 1 || o.settings.maxSlides > 1, o.carousel && (o.settings.preloadImages = "all"), o.minThreshold = o.settings.minSlides * o.settings.slideWidth + (o.settings.minSlides - 1) * o.settings.slideMargin, o.maxThreshold = o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin, o.working = !1, o.controls = {}, o.interval = null, o.animProp = "vertical" === o.settings.mode ? "top" : "left", o.usingCSS = o.settings.useCSS && "fade" !== o.settings.mode && function () {
          for (var t = document.createElement("div"), e = ["WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"], i = 0; i < e.length; i++) {
            if (void 0 !== t.style[e[i]]) return o.cssPrefix = e[i].replace("Perspective", "").toLowerCase(), o.animProp = "-" + o.cssPrefix + "-transform", !0;
          }return !1;
        }(), "vertical" === o.settings.mode && (o.settings.maxSlides = o.settings.minSlides), s.data("origStyle", s.attr("style")), s.children(o.settings.slideSelector).each(function () {
          t(this).data("origStyle", t(this).attr("style"));
        }), d());
      },
          d = function d() {
        var e = o.children.eq(o.settings.startSlide);s.wrap('<div class="' + o.settings.wrapperClass + '"><div class="bx-viewport"></div></div>'), o.viewport = s.parent(), o.settings.ariaLive && !o.settings.ticker && o.viewport.attr("aria-live", "polite"), o.loader = t('<div class="bx-loading" />'), o.viewport.prepend(o.loader), s.css({ width: "horizontal" === o.settings.mode ? 1e3 * o.children.length + 215 + "%" : "auto", position: "relative" }), o.usingCSS && o.settings.easing ? s.css("-" + o.cssPrefix + "-transition-timing-function", o.settings.easing) : o.settings.easing || (o.settings.easing = "swing"), o.viewport.css({ width: "100%", overflow: "hidden", position: "relative" }), o.viewport.parent().css({ maxWidth: g() }), o.settings.pager || o.settings.controls || o.viewport.parent().css({ margin: "0 auto 0px" }), o.children.css({ float: "horizontal" === o.settings.mode ? "left" : "none", listStyle: "none", position: "relative" }), o.children.css("width", p()), "horizontal" === o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginRight", o.settings.slideMargin), "vertical" === o.settings.mode && o.settings.slideMargin > 0 && o.children.css("marginBottom", o.settings.slideMargin), "fade" === o.settings.mode && (o.children.css({ position: "absolute", zIndex: 0, display: "none" }), o.children.eq(o.settings.startSlide).css({ zIndex: o.settings.slideZIndex, display: "block" })), o.controls.el = t('<div class="bx-controls" />'), o.settings.captions && T(), o.active.last = o.settings.startSlide === m() - 1, o.settings.video && s.fitVids(), ("all" === o.settings.preloadImages || o.settings.ticker) && (e = o.children), o.settings.ticker ? o.settings.pager = !1 : (o.settings.controls && w(), o.settings.auto && o.settings.autoControls && E(), o.settings.pager && b(), (o.settings.controls || o.settings.autoControls || o.settings.pager) && o.viewport.after(o.controls.el)), c(e, h);
      },
          c = function c(e, i) {
        var n = e.find('img:not([src=""]), iframe').length,
            o = 0;return 0 === n ? void i() : void e.find('img:not([src=""]), iframe').each(function () {
          t(this).one("load error", function () {
            ++o === n && i();
          }).each(function () {
            this.complete && t(this).trigger("load");
          });
        });
      },
          h = function h() {
        if (o.settings.infiniteLoop && "fade" !== o.settings.mode && !o.settings.ticker) {
          var e = "vertical" === o.settings.mode ? o.settings.minSlides : o.settings.maxSlides,
              i = o.children.slice(0, e).clone(!0).addClass("bx-clone"),
              n = o.children.slice(-e).clone(!0).addClass("bx-clone");o.settings.ariaHidden && (i.attr("aria-hidden", !0), n.attr("aria-hidden", !0)), s.append(i).prepend(n);
        }o.loader.remove(), y(), "vertical" === o.settings.mode && (o.settings.adaptiveHeight = !0), o.viewport.height(u()), s.redrawSlider(), o.settings.onSliderLoad.call(s, o.active.index), o.initialized = !0, o.settings.responsive && t(window).bind("resize", Y), o.settings.auto && o.settings.autoStart && (m() > 1 || o.settings.autoSlideForOnePage) && O(), o.settings.ticker && q(), o.settings.pager && W(o.settings.startSlide), o.settings.controls && k(), o.settings.touchEnabled && !o.settings.ticker && H(), o.settings.keyboardEnabled && !o.settings.ticker && t(document).keydown(A);
      },
          u = function u() {
        var e = 0,
            n = t();if ("vertical" === o.settings.mode || o.settings.adaptiveHeight) {
          if (o.carousel) {
            var s = 1 === o.settings.moveSlides ? o.active.index : o.active.index * v();for (n = o.children.eq(s), i = 1; i <= o.settings.maxSlides - 1; i++) {
              n = s + i >= o.children.length ? n.add(o.children.eq(i - 1)) : n.add(o.children.eq(s + i));
            }
          } else n = o.children.eq(o.active.index);
        } else n = o.children;return "vertical" === o.settings.mode ? (n.each(function (i) {
          e += t(this).outerHeight();
        }), o.settings.slideMargin > 0 && (e += o.settings.slideMargin * (o.settings.minSlides - 1))) : e = Math.max.apply(Math, n.map(function () {
          return t(this).outerHeight(!1);
        }).get()), "border-box" === o.viewport.css("box-sizing") ? e += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom")) + parseFloat(o.viewport.css("border-top-width")) + parseFloat(o.viewport.css("border-bottom-width")) : "padding-box" === o.viewport.css("box-sizing") && (e += parseFloat(o.viewport.css("padding-top")) + parseFloat(o.viewport.css("padding-bottom"))), e;
      },
          g = function g() {
        var t = "100%";return o.settings.slideWidth > 0 && (t = "horizontal" === o.settings.mode ? o.settings.maxSlides * o.settings.slideWidth + (o.settings.maxSlides - 1) * o.settings.slideMargin : o.settings.slideWidth), t;
      },
          p = function p() {
        var t = o.settings.slideWidth,
            e = o.viewport.width();if (0 === o.settings.slideWidth || o.settings.slideWidth > e && !o.carousel || "vertical" === o.settings.mode) t = e;else if (o.settings.maxSlides > 1 && "horizontal" === o.settings.mode) {
          if (e > o.maxThreshold) return t;e < o.minThreshold ? t = (e - o.settings.slideMargin * (o.settings.minSlides - 1)) / o.settings.minSlides : o.settings.shrinkItems && (t = Math.floor((e + o.settings.slideMargin) / Math.ceil((e + o.settings.slideMargin) / (t + o.settings.slideMargin)) - o.settings.slideMargin));
        }return t;
      },
          f = function f() {
        var t = 1,
            e = null;return "horizontal" === o.settings.mode && o.settings.slideWidth > 0 ? o.viewport.width() < o.minThreshold ? t = o.settings.minSlides : o.viewport.width() > o.maxThreshold ? t = o.settings.maxSlides : (e = o.children.first().width() + o.settings.slideMargin, t = Math.floor((o.viewport.width() + o.settings.slideMargin) / e)) : "vertical" === o.settings.mode && (t = o.settings.minSlides), t;
      },
          m = function m() {
        var t = 0,
            e = 0,
            i = 0;if (o.settings.moveSlides > 0) {
          if (o.settings.infiniteLoop) t = Math.ceil(o.children.length / v());else for (; e < o.children.length;) {
            ++t, e = i + f(), i += o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
          }
        } else t = Math.ceil(o.children.length / f());return t;
      },
          v = function v() {
        return o.settings.moveSlides > 0 && o.settings.moveSlides <= f() ? o.settings.moveSlides : f();
      },
          y = function y() {
        var t, e, i;o.children.length > o.settings.maxSlides && o.active.last && !o.settings.infiniteLoop ? "horizontal" === o.settings.mode ? (e = o.children.last(), t = e.position(), x(-(t.left - (o.viewport.width() - e.outerWidth())), "reset", 0)) : "vertical" === o.settings.mode && (i = o.children.length - o.settings.minSlides, t = o.children.eq(i).position(), x(-t.top, "reset", 0)) : (t = o.children.eq(o.active.index * v()).position(), o.active.index === m() - 1 && (o.active.last = !0), void 0 !== t && ("horizontal" === o.settings.mode ? x(-t.left, "reset", 0) : "vertical" === o.settings.mode && x(-t.top, "reset", 0)));
      },
          x = function x(e, i, n, r) {
        var a, l;o.usingCSS ? (l = "vertical" === o.settings.mode ? "translate3d(0, " + e + "px, 0)" : "translate3d(" + e + "px, 0, 0)", s.css("-" + o.cssPrefix + "-transition-duration", n / 1e3 + "s"), "slide" === i ? (s.css(o.animProp, l), 0 !== n ? s.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
          t(e.target).is(s) && (s.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), M());
        }) : M()) : "reset" === i ? s.css(o.animProp, l) : "ticker" === i && (s.css("-" + o.cssPrefix + "-transition-timing-function", "linear"), s.css(o.animProp, l), 0 !== n ? s.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function (e) {
          t(e.target).is(s) && (s.unbind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd"), x(r.resetValue, "reset", 0), D());
        }) : (x(r.resetValue, "reset", 0), D()))) : (a = {}, a[o.animProp] = e, "slide" === i ? s.animate(a, n, o.settings.easing, function () {
          M();
        }) : "reset" === i ? s.css(o.animProp, e) : "ticker" === i && s.animate(a, n, "linear", function () {
          x(r.resetValue, "reset", 0), D();
        }));
      },
          S = function S() {
        for (var e = "", i = "", n = m(), s = 0; s < n; s++) {
          i = "", o.settings.buildPager && t.isFunction(o.settings.buildPager) || o.settings.pagerCustom ? (i = o.settings.buildPager(s), o.pagerEl.addClass("bx-custom-pager")) : (i = s + 1, o.pagerEl.addClass("bx-default-pager")), e += '<div class="bx-pager-item"><a href="" data-slide-index="' + s + '" class="bx-pager-link">' + i + "</a></div>";
        }o.pagerEl.html(e);
      },
          b = function b() {
        o.settings.pagerCustom ? o.pagerEl = t(o.settings.pagerCustom) : (o.pagerEl = t('<div class="bx-pager" />'), o.settings.pagerSelector ? t(o.settings.pagerSelector).html(o.pagerEl) : o.controls.el.addClass("bx-has-pager").append(o.pagerEl), S()), o.pagerEl.on("click touchend", "a", P);
      },
          w = function w() {
        o.controls.next = t('<a class="bx-next" href="">' + o.settings.nextText + "</a>"), o.controls.prev = t('<a class="bx-prev" href="">' + o.settings.prevText + "</a>"), o.controls.next.bind("click touchend", z), o.controls.prev.bind("click touchend", C), o.settings.nextSelector && t(o.settings.nextSelector).append(o.controls.next), o.settings.prevSelector && t(o.settings.prevSelector).append(o.controls.prev), o.settings.nextSelector || o.settings.prevSelector || (o.controls.directionEl = t('<div class="bx-controls-direction" />'), o.controls.directionEl.append(o.controls.prev).append(o.controls.next), o.controls.el.addClass("bx-has-controls-direction").append(o.controls.directionEl));
      },
          E = function E() {
        o.controls.start = t('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + o.settings.startText + "</a></div>"), o.controls.stop = t('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + o.settings.stopText + "</a></div>"), o.controls.autoEl = t('<div class="bx-controls-auto" />'), o.controls.autoEl.on("click", ".bx-start", _), o.controls.autoEl.on("click", ".bx-stop", I), o.settings.autoControlsCombine ? o.controls.autoEl.append(o.controls.start) : o.controls.autoEl.append(o.controls.start).append(o.controls.stop), o.settings.autoControlsSelector ? t(o.settings.autoControlsSelector).html(o.controls.autoEl) : o.controls.el.addClass("bx-has-controls-auto").append(o.controls.autoEl), L(o.settings.autoStart ? "stop" : "start");
      },
          T = function T() {
        o.children.each(function (e) {
          var i = t(this).find("img:first").attr("title");void 0 !== i && ("" + i).length && t(this).append('<div class="bx-caption"><span>' + i + "</span></div>");
        });
      },
          z = function z(t) {
        t.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && s.stopAuto(), s.goToNextSlide());
      },
          C = function C(t) {
        t.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && s.stopAuto(), s.goToPrevSlide());
      },
          _ = function _(t) {
        s.startAuto(), t.preventDefault();
      },
          I = function I(t) {
        s.stopAuto(), t.preventDefault();
      },
          P = function P(e) {
        var i, n;e.preventDefault(), o.controls.el.hasClass("disabled") || (o.settings.auto && o.settings.stopAutoOnClick && s.stopAuto(), i = t(e.currentTarget), void 0 !== i.attr("data-slide-index") && (n = parseInt(i.attr("data-slide-index")), n !== o.active.index && s.goToSlide(n)));
      },
          W = function W(e) {
        var i = o.children.length;return "short" === o.settings.pagerType ? (o.settings.maxSlides > 1 && (i = Math.ceil(o.children.length / o.settings.maxSlides)), void o.pagerEl.html(e + 1 + o.settings.pagerShortSeparator + i)) : (o.pagerEl.find("a").removeClass("active"), void o.pagerEl.each(function (i, n) {
          t(n).find("a").eq(e).addClass("active");
        }));
      },
          M = function M() {
        if (o.settings.infiniteLoop) {
          var t = "";0 === o.active.index ? t = o.children.eq(0).position() : o.active.index === m() - 1 && o.carousel ? t = o.children.eq((m() - 1) * v()).position() : o.active.index === o.children.length - 1 && (t = o.children.eq(o.children.length - 1).position()), t && ("horizontal" === o.settings.mode ? x(-t.left, "reset", 0) : "vertical" === o.settings.mode && x(-t.top, "reset", 0));
        }o.working = !1, o.settings.onSlideAfter.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index);
      },
          L = function L(t) {
        o.settings.autoControlsCombine ? o.controls.autoEl.html(o.controls[t]) : (o.controls.autoEl.find("a").removeClass("active"), o.controls.autoEl.find("a:not(.bx-" + t + ")").addClass("active"));
      },
          k = function k() {
        1 === m() ? (o.controls.prev.addClass("disabled"), o.controls.next.addClass("disabled")) : !o.settings.infiniteLoop && o.settings.hideControlOnEnd && (0 === o.active.index ? (o.controls.prev.addClass("disabled"), o.controls.next.removeClass("disabled")) : o.active.index === m() - 1 ? (o.controls.next.addClass("disabled"), o.controls.prev.removeClass("disabled")) : (o.controls.prev.removeClass("disabled"), o.controls.next.removeClass("disabled")));
      },
          O = function O() {
        o.settings.autoDelay > 0 ? setTimeout(s.startAuto, o.settings.autoDelay) : (s.startAuto(), t(window).focus(function () {
          s.startAuto();
        }).blur(function () {
          s.stopAuto();
        })), o.settings.autoHover && s.hover(function () {
          o.interval && (s.stopAuto(!0), o.autoPaused = !0);
        }, function () {
          o.autoPaused && (s.startAuto(!0), o.autoPaused = null);
        });
      },
          q = function q() {
        var e,
            i,
            n,
            r,
            a,
            l,
            d,
            c,
            h = 0;"next" === o.settings.autoDirection ? s.append(o.children.clone().addClass("bx-clone")) : (s.prepend(o.children.clone().addClass("bx-clone")), e = o.children.first().position(), h = "horizontal" === o.settings.mode ? -e.left : -e.top), x(h, "reset", 0), o.settings.pager = !1, o.settings.controls = !1, o.settings.autoControls = !1, o.settings.tickerHover && (o.usingCSS ? (r = "horizontal" === o.settings.mode ? 4 : 5, o.viewport.hover(function () {
          i = s.css("-" + o.cssPrefix + "-transform"), n = parseFloat(i.split(",")[r]), x(n, "reset", 0);
        }, function () {
          c = 0, o.children.each(function (e) {
            c += "horizontal" === o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0);
          }), a = o.settings.speed / c, l = "horizontal" === o.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(n))), D(d);
        })) : o.viewport.hover(function () {
          s.stop();
        }, function () {
          c = 0, o.children.each(function (e) {
            c += "horizontal" === o.settings.mode ? t(this).outerWidth(!0) : t(this).outerHeight(!0);
          }), a = o.settings.speed / c, l = "horizontal" === o.settings.mode ? "left" : "top", d = a * (c - Math.abs(parseInt(s.css(l)))), D(d);
        })), D();
      },
          D = function D(t) {
        var e,
            i,
            n,
            r = t ? t : o.settings.speed,
            a = { left: 0, top: 0 },
            l = { left: 0, top: 0 };"next" === o.settings.autoDirection ? a = s.find(".bx-clone").first().position() : l = o.children.first().position(), e = "horizontal" === o.settings.mode ? -a.left : -a.top, i = "horizontal" === o.settings.mode ? -l.left : -l.top, n = { resetValue: i }, x(e, "ticker", r, n);
      },
          R = function R(e) {
        var i = t(window),
            n = { top: i.scrollTop(), left: i.scrollLeft() },
            o = e.offset();return n.right = n.left + i.width(), n.bottom = n.top + i.height(), o.right = o.left + e.outerWidth(), o.bottom = o.top + e.outerHeight(), !(n.right < o.left || n.left > o.right || n.bottom < o.top || n.top > o.bottom);
      },
          A = function A(t) {
        var e = document.activeElement.tagName.toLowerCase(),
            i = "input|textarea",
            n = new RegExp(e, ["i"]),
            o = n.exec(i);if (null == o && R(s)) {
          if (39 === t.keyCode) return z(t), !1;if (37 === t.keyCode) return C(t), !1;
        }
      },
          H = function H() {
        o.touch = { start: { x: 0, y: 0 }, end: { x: 0, y: 0 } }, o.viewport.bind("touchstart MSPointerDown pointerdown", B), o.viewport.on("click", ".bxslider a", function (t) {
          o.viewport.hasClass("click-disabled") && (t.preventDefault(), o.viewport.removeClass("click-disabled"));
        });
      },
          B = function B(t) {
        if (o.controls.el.addClass("disabled"), o.working) t.preventDefault(), o.controls.el.removeClass("disabled");else {
          o.touch.originalPos = s.position();var e = t.originalEvent,
              i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e];o.touch.start.x = i[0].pageX, o.touch.start.y = i[0].pageY, o.viewport.get(0).setPointerCapture && (o.pointerId = e.pointerId, o.viewport.get(0).setPointerCapture(o.pointerId)), o.viewport.bind("touchmove MSPointerMove pointermove", j), o.viewport.bind("touchend MSPointerUp pointerup", N), o.viewport.bind("MSPointerCancel pointercancel", F);
        }
      },
          F = function F(t) {
        x(o.touch.originalPos.left, "reset", 0), o.controls.el.removeClass("disabled"), o.viewport.unbind("MSPointerCancel pointercancel", F), o.viewport.unbind("touchmove MSPointerMove pointermove", j), o.viewport.unbind("touchend MSPointerUp pointerup", N), o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId);
      },
          j = function j(t) {
        var e = t.originalEvent,
            i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
            n = Math.abs(i[0].pageX - o.touch.start.x),
            s = Math.abs(i[0].pageY - o.touch.start.y),
            r = 0,
            a = 0;3 * n > s && o.settings.preventDefaultSwipeX ? t.preventDefault() : 3 * s > n && o.settings.preventDefaultSwipeY && t.preventDefault(), "fade" !== o.settings.mode && o.settings.oneToOneTouch && ("horizontal" === o.settings.mode ? (a = i[0].pageX - o.touch.start.x, r = o.touch.originalPos.left + a) : (a = i[0].pageY - o.touch.start.y, r = o.touch.originalPos.top + a), x(r, "reset", 0));
      },
          N = function N(t) {
        o.viewport.unbind("touchmove MSPointerMove pointermove", j), o.controls.el.removeClass("disabled");var e = t.originalEvent,
            i = "undefined" != typeof e.changedTouches ? e.changedTouches : [e],
            n = 0,
            r = 0;o.touch.end.x = i[0].pageX, o.touch.end.y = i[0].pageY, "fade" === o.settings.mode ? (r = Math.abs(o.touch.start.x - o.touch.end.x), r >= o.settings.swipeThreshold && (o.touch.start.x > o.touch.end.x ? s.goToNextSlide() : s.goToPrevSlide(), s.stopAuto())) : ("horizontal" === o.settings.mode ? (r = o.touch.end.x - o.touch.start.x, n = o.touch.originalPos.left) : (r = o.touch.end.y - o.touch.start.y, n = o.touch.originalPos.top), !o.settings.infiniteLoop && (0 === o.active.index && r > 0 || o.active.last && r < 0) ? x(n, "reset", 200) : Math.abs(r) >= o.settings.swipeThreshold ? (r < 0 ? s.goToNextSlide() : s.goToPrevSlide(), s.stopAuto()) : x(n, "reset", 200)), o.viewport.unbind("touchend MSPointerUp pointerup", N), o.viewport.get(0).releasePointerCapture && o.viewport.get(0).releasePointerCapture(o.pointerId);
      },
          Y = function Y(e) {
        if (o.initialized) if (o.working) window.setTimeout(Y, 10);else {
          var i = t(window).width(),
              n = t(window).height();r === i && a === n || (r = i, a = n, s.redrawSlider(), o.settings.onSliderResize.call(s, o.active.index));
        }
      },
          $ = function $(t) {
        var e = f();o.settings.ariaHidden && !o.settings.ticker && (o.children.attr("aria-hidden", "true"), o.children.slice(t, t + e).attr("aria-hidden", "false"));
      },
          Q = function Q(t) {
        return t < 0 ? o.settings.infiniteLoop ? m() - 1 : o.active.index : t >= m() ? o.settings.infiniteLoop ? 0 : o.active.index : t;
      };return s.goToSlide = function (e, i) {
        var n,
            r,
            a,
            l,
            d = !0,
            c = 0,
            h = { left: 0, top: 0 },
            g = null;if (o.oldIndex = o.active.index, o.active.index = Q(e), !o.working && o.active.index !== o.oldIndex) {
          if (o.working = !0, d = o.settings.onSlideBefore.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index), "undefined" != typeof d && !d) return o.active.index = o.oldIndex, void (o.working = !1);"next" === i ? o.settings.onSlideNext.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (d = !1) : "prev" === i && (o.settings.onSlidePrev.call(s, o.children.eq(o.active.index), o.oldIndex, o.active.index) || (d = !1)), o.active.last = o.active.index >= m() - 1, (o.settings.pager || o.settings.pagerCustom) && W(o.active.index), o.settings.controls && k(), "fade" === o.settings.mode ? (o.settings.adaptiveHeight && o.viewport.height() !== u() && o.viewport.animate({ height: u() }, o.settings.adaptiveHeightSpeed), o.children.filter(":visible").fadeOut(o.settings.speed).css({ zIndex: 0 }), o.children.eq(o.active.index).css("zIndex", o.settings.slideZIndex + 1).fadeIn(o.settings.speed, function () {
            t(this).css("zIndex", o.settings.slideZIndex), M();
          })) : (o.settings.adaptiveHeight && o.viewport.height() !== u() && o.viewport.animate({ height: u() }, o.settings.adaptiveHeightSpeed), !o.settings.infiniteLoop && o.carousel && o.active.last ? "horizontal" === o.settings.mode ? (g = o.children.eq(o.children.length - 1), h = g.position(), c = o.viewport.width() - g.outerWidth()) : (n = o.children.length - o.settings.minSlides, h = o.children.eq(n).position()) : o.carousel && o.active.last && "prev" === i ? (r = 1 === o.settings.moveSlides ? o.settings.maxSlides - v() : (m() - 1) * v() - (o.children.length - o.settings.maxSlides), g = s.children(".bx-clone").eq(r), h = g.position()) : "next" === i && 0 === o.active.index ? (h = s.find("> .bx-clone").eq(o.settings.maxSlides).position(), o.active.last = !1) : e >= 0 && (l = e * parseInt(v()), h = o.children.eq(l).position()), "undefined" != typeof h ? (a = "horizontal" === o.settings.mode ? -(h.left - c) : -h.top, x(a, "slide", o.settings.speed)) : o.working = !1), o.settings.ariaHidden && $(o.active.index * v());
        }
      }, s.goToNextSlide = function () {
        if (o.settings.infiniteLoop || !o.active.last) {
          var t = parseInt(o.active.index) + 1;s.goToSlide(t, "next");
        }
      }, s.goToPrevSlide = function () {
        if (o.settings.infiniteLoop || 0 !== o.active.index) {
          var t = parseInt(o.active.index) - 1;s.goToSlide(t, "prev");
        }
      }, s.startAuto = function (t) {
        o.interval || (o.interval = setInterval(function () {
          "next" === o.settings.autoDirection ? s.goToNextSlide() : s.goToPrevSlide();
        }, o.settings.pause), o.settings.autoControls && t !== !0 && L("stop"));
      }, s.stopAuto = function (t) {
        o.interval && (clearInterval(o.interval), o.interval = null, o.settings.autoControls && t !== !0 && L("start"));
      }, s.getCurrentSlide = function () {
        return o.active.index;
      }, s.getCurrentSlideElement = function () {
        return o.children.eq(o.active.index);
      }, s.getSlideElement = function (t) {
        return o.children.eq(t);
      }, s.getSlideCount = function () {
        return o.children.length;
      }, s.isWorking = function () {
        return o.working;
      }, s.redrawSlider = function () {
        o.children.add(s.find(".bx-clone")).outerWidth(p()), o.viewport.css("height", u()), o.settings.ticker || y(), o.active.last && (o.active.index = m() - 1), o.active.index >= m() && (o.active.last = !0), o.settings.pager && !o.settings.pagerCustom && (S(), W(o.active.index)), o.settings.ariaHidden && $(o.active.index * v());
      }, s.destroySlider = function () {
        o.initialized && (o.initialized = !1, t(".bx-clone", this).remove(), o.children.each(function () {
          void 0 !== t(this).data("origStyle") ? t(this).attr("style", t(this).data("origStyle")) : t(this).removeAttr("style");
        }), void 0 !== t(this).data("origStyle") ? this.attr("style", t(this).data("origStyle")) : t(this).removeAttr("style"), t(this).unwrap().unwrap(), o.controls.el && o.controls.el.remove(), o.controls.next && o.controls.next.remove(), o.controls.prev && o.controls.prev.remove(), o.pagerEl && o.settings.controls && !o.settings.pagerCustom && o.pagerEl.remove(), t(".bx-caption", this).remove(), o.controls.autoEl && o.controls.autoEl.remove(), clearInterval(o.interval), o.settings.responsive && t(window).unbind("resize", Y), o.settings.keyboardEnabled && t(document).unbind("keydown", A), t(this).removeData("bxSlider"));
      }, s.reloadSlider = function (e) {
        void 0 !== e && (n = e), s.destroySlider(), l(), t(s).data("bxSlider", this);
      }, l(), t(s).data("bxSlider", this), this;
    }
  };
}(jQuery);