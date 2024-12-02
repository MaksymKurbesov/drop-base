(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7234],
  {
    41911: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 87739)),
        Promise.resolve().then(n.t.bind(n, 65878, 23)),
        Promise.resolve().then(n.t.bind(n, 72972, 23)),
        Promise.resolve().then(n.bind(n, 21889)),
        Promise.resolve().then(n.bind(n, 44288)),
        Promise.resolve().then(n.bind(n, 95924)),
        Promise.resolve().then(n.bind(n, 60965));
    },
    87739: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          AnalyticsContext: function () {
            return u;
          },
          default: function () {
            return a;
          },
          useAnalytics: function () {
            return s;
          },
        });
      var r = n(60221),
        i = n(57437),
        o = n(81753),
        c = n(2265);
      const u = (0, c.createContext)({
        logEventWithContext: function () {},
        fullContext: "",
      });
      function s() {
        const e = (0, c.useContext)(u);
        if (void 0 === e)
          throw new Error(
            "useAnalytics must be used within a AnalyticsProvider",
          );
        return e;
      }
      function a(e) {
        let { children: t, context: n } = e;
        const { fullContext: a } = s(),
          l = [a, n].filter((e) => !!e).join("_"),
          d = (0, c.useCallback)(
            (e, t, n) => {
              const i = e.toLocaleLowerCase();
              (0, o.ZP)(
                i,
                (0, r._)(
                  {
                    action: t,
                    context: l,
                    page_path: window.location.pathname,
                  },
                  n,
                ),
                o.E3.high,
              );
            },
            [l],
          ),
          f = (0, c.useMemo)(
            () => ({ logEventWithContext: d, context: n, fullContext: l }),
            [n, l, d],
          );
        return (0, i.jsx)(u.Provider, { value: f, children: t });
      }
    },
    27648: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return i.a;
        },
      });
      var r = n(72972),
        i = n.n(r);
    },
    21889: function (e, t, n) {
      "use strict";
      n.d(t, {
        ButtonWithLinkAndEventLogging: function () {
          return h;
        },
      });
      var r = n(60221),
        i = n(67085),
        o = n(57437),
        c = n(2265),
        u = n(81753),
        s = n(87739),
        a = n(88810),
        l = n(27648),
        d = n(48318);
      function f(e) {
        var {
            href: t,
            target: n,
            rel: c,
            linkClassNames: u,
            linkProps: s,
            variant: f,
            size: h,
            children: A,
            buttonClassNames: g,
            roundedFull: v = !1,
            fullWidth: m = !1,
            disabled: p = !1,
          } = e,
          b = (0, i._)(e, [
            "href",
            "target",
            "rel",
            "linkClassNames",
            "linkProps",
            "variant",
            "size",
            "children",
            "buttonClassNames",
            "roundedFull",
            "fullWidth",
            "disabled",
          ]);
        return (0, o.jsx)(
          l.default,
          (0, a._)(
            (0, r._)(
              {
                href: t,
                target: n,
                rel: c,
                className: "".concat(u).concat(p ? " pointer-events-none" : ""),
              },
              s,
            ),
            {
              children: (0, o.jsx)(
                d.default,
                (0, a._)(
                  (0, r._)(
                    {
                      variant: f,
                      size: h,
                      className: g,
                      roundedFull: v,
                      fullWidth: m,
                      disabled: p,
                    },
                    b,
                  ),
                  { children: A },
                ),
              ),
            },
          ),
        );
      }
      function h(e) {
        var { eventName: t } = e,
          n = (0, i._)(e, ["eventName"]);
        const { logEventWithContext: a } = (0, s.useAnalytics)(),
          l = (0, c.useCallback)(() => {
            a(t, u.Us.click, { componentType: u.re.button });
          }, [a, t]);
        return (0, o.jsx)(f, (0, r._)({ onClick: l }, n));
      }
    },
    60965: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return s;
          },
        });
      var r = n(57437),
        i = n(2265),
        o = n(27648),
        c = n(81753),
        u = n(87739);
      function s(e) {
        let {
          href: t,
          title: n,
          description: s,
          topLeft: a = null,
          topRight: l = null,
          classnames: d,
        } = e;
        const { logEventWithContext: f } = (0, u.useAnalytics)(),
          h =
            "\n    group border-2 p-7 text-white\n    duration-200\n    hover:scale-105 hover:shadow-lg hover:shadow-gray-80\n    ".concat(
              d,
              "\n  ",
            ),
          A = (0, i.useCallback)(() => {
            f(n.replace(/ /g, "_").replace(/\W/g, ""), c.Us.click, {
              componentType: c.re.link,
            });
          }, [f, n]);
        return (0, r.jsx)(
          "div",
          {
            className: h,
            children: (0, r.jsxs)(o.default, {
              href: t,
              onClick: A,
              children: [
                (0, r.jsxs)("div", {
                  className: "flex w-full flex-row justify-between",
                  children: [a, l],
                }),
                (0, r.jsxs)("div", {
                  className: "mt-8",
                  children: [
                    (0, r.jsx)("h3", {
                      className: "mb-4 font-mono text-lg uppercase sm:text-xl",
                      children: n,
                    }),
                    (0, r.jsx)("p", {
                      className: "font-sans text-sm sm:text-base",
                      children: s,
                    }),
                  ],
                }),
              ],
            }),
          },
          t,
        );
      }
    },
    48318: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return d;
          },
        });
      var r = n(57437),
        i = n(86855),
        o = n.n(i),
        c = n(85562),
        u = n(27560);
      const s = {
          [c.c.Primary]:
            "bg-blue text-white border border-blue hover:bg-blue-80 active:bg-[#06318E]",
          [c.c.Secondary]:
            "bg-white border border-white text-palette-foreground hover:bg-gray-15 active:bg-gray-30",
          [c.c.Outlined]:
            "bg-transparent text-white border border-white hover:bg-white hover:text-black active:bg-[#E3E7E9]",
        },
        a = {
          [c.P.Medium]: "text-md px-4 py-2 gap-3",
          [c.P.Large]: "text-lg px-6 py-4 gap-5",
        },
        l = { [c.P.Medium]: "0.75rem", [c.P.Large]: "1rem" };
      function d(e) {
        let {
          children: t,
          onClick: n,
          disabled: i,
          variant: d = c.c.Primary,
          size: f = c.P.Medium,
          iconName: h,
          roundedFull: A = !1,
          className: g,
          fullWidth: v = !1,
        } = e;
        const m = o()(
            "text-md px-4 py-2 whitespace-nowrap",
            "flex items-center justify-center",
            "disabled:opacity-40 disabled:pointer-events-none",
            "transition-all",
            s[d],
            a[f],
            A ? "rounded-full" : "rounded-lg",
            v ? "w-full" : "w-auto",
            g,
          ),
          p = l[f];
        return (0, r.jsxs)("button", {
          type: "button",
          onClick: n,
          disabled: i,
          className: m,
          children: [
            (0, r.jsx)("span", { children: t }),
            h &&
              (0, r.jsx)(u.J, {
                name: h,
                width: p,
                height: p,
                color: "currentColor",
              }),
          ],
        });
      }
    },
    85562: function (e, t, n) {
      "use strict";
      var r, i;
      n.d(t, {
        P: function () {
          return i;
        },
        c: function () {
          return r;
        },
      }),
        (function (e) {
          (e.Primary = "primary"),
            (e.Secondary = "secondary"),
            (e.Outlined = "outlined");
        })(r || (r = {})),
        (function (e) {
          (e.Medium = "medium"), (e.Large = "large");
        })(i || (i = {}));
    },
    50332: function (e, t, n) {
      "use strict";
      n.d(t, {
        IE: function () {
          return l;
        },
        yG: function () {
          return a;
        },
      });
      var r = n(68571);
      var i;
      i = r.env.DOCS_URL;
      var o;
      o = r.env.BRIDGE_URL;
      var c;
      c = r.env.GREENHOUSE_HTTPS;
      var u;
      u = r.env.MAINNET_LAUNCH_BLOG_POST_URL;
      var s;
      s = r.env.MAINNET_LAUNCH_FLAG;
      const a = !1,
        l = a
          ? "client-Wvf63OdaukDZyCBtwgbOvHgGTuASBZFG"
          : "client-agFoQg5AOvZ2ZiOChny9RrGk21jG3VrH";
    },
    81753: function (e, t, n) {
      "use strict";
      n.d(t, {
        E3: function () {
          return o;
        },
        Us: function () {
          return i;
        },
        ZP: function () {
          return u;
        },
        re: function () {
          return r;
        },
        yV: function () {
          return s;
        },
      });
      var r,
        i,
        o,
        c = n(50332);
      function u(e, t, n) {
        if (c.yG)
          return console.log("logEvent: ", {
            name: e,
            event: t,
            importance: n,
          });
        const r = window.ClientAnalytics;
        r && (null === r || void 0 === r || r.logEvent(e, t, n));
      }
      function s(e) {
        if (c.yG) return console.log("identify: ", { event: e });
        const t = window.ClientAnalytics;
        t && (null === t || void 0 === t || t.logEvent("identify", e, "low"));
      }
      !(function (e) {
        (e.unknown = "unknown"),
          (e.banner = "banner"),
          (e.button = "button"),
          (e.card = "card"),
          (e.chart = "chart"),
          (e.content_script = "content_script"),
          (e.dropdown = "dropdown"),
          (e.link = "link"),
          (e.page = "page"),
          (e.modal = "modal"),
          (e.table = "table"),
          (e.search_bar = "search_bar"),
          (e.service_worker = "service_worker"),
          (e.text = "text"),
          (e.text_input = "text_input"),
          (e.tray = "tray"),
          (e.checkbox = "checkbox"),
          (e.icon = "icon");
      })(r || (r = {})),
        (function (e) {
          (e.unknown = "unknown"),
            (e.blur = "blur"),
            (e.click = "click"),
            (e.change = "change"),
            (e.dismiss = "dismiss"),
            (e.focus = "focus"),
            (e.hover = "hover"),
            (e.select = "select"),
            (e.measurement = "measurement"),
            (e.move = "move"),
            (e.process = "process"),
            (e.render = "render"),
            (e.scroll = "scroll"),
            (e.view = "view"),
            (e.search = "search"),
            (e.keyPress = "keyPress"),
            (e.error = "error");
        })(i || (i = {})),
        (function (e) {
          (e.low = "low"), (e.high = "high");
        })(o || (o = {}));
    },
    44288: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "_next/static/media/build-with-us.449ee1ca.png",
          height: 379,
          width: 1250,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAMAAABSSm3fAAAACVBMVEWFQqqhRqeZQqeKsjPdAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAEElEQVR4nGNgYmIEAwYYAAAAnwALGG8MMgAAAABJRU5ErkJggg==",
          blurWidth: 8,
          blurHeight: 2,
        });
    },
    95924: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          src: "_next/static/media/getstarted-hero-img.11e244a0.png",
          height: 2366,
          width: 3160,
          blurDataURL:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAYFBMVEUEea/g4P+AUeaQVfQZf1wGh1MNfrm3NaHRQgpMaXEAfa++v/ONeN03LpoxTscLelLnQQIdcKuVMyEUhlxUVJ/nbka9aLanzusLVZIuXsVJT7/hv8R3K4YPjU04nb7axObb3yJkAAAAIHRSTlONBE2wncK+4sgAR+HXwMrbsFa41Muxz9HG2sDKx4S5xfMyP7wAAAAJcEhZcwAALEsAACxLAaU9lqkAAAA5SURBVHicBcEFAsAgDACxAwotM+Yu///lErLbXu+/leyOPYTzphpURcxISVWe3qibMl0L0LUxziP8QBUCOIn1jmUAAAAASUVORK5CYII=",
          blurWidth: 8,
          blurHeight: 6,
        });
    },
    68571: function (e) {
      var t,
        n,
        r = (e.exports = {});
      function i() {
        throw new Error("setTimeout has not been defined");
      }
      function o() {
        throw new Error("clearTimeout has not been defined");
      }
      function c(e) {
        if (t === setTimeout) return setTimeout(e, 0);
        if ((t === i || !t) && setTimeout)
          return (t = setTimeout), setTimeout(e, 0);
        try {
          return t(e, 0);
        } catch (n) {
          try {
            return t.call(null, e, 0);
          } catch (n) {
            return t.call(this, e, 0);
          }
        }
      }
      !(function () {
        try {
          t = "function" === typeof setTimeout ? setTimeout : i;
        } catch (e) {
          t = i;
        }
        try {
          n = "function" === typeof clearTimeout ? clearTimeout : o;
        } catch (e) {
          n = o;
        }
      })();
      var u,
        s = [],
        a = !1,
        l = -1;
      function d() {
        a &&
          u &&
          ((a = !1), u.length ? (s = u.concat(s)) : (l = -1), s.length && f());
      }
      function f() {
        if (!a) {
          var e = c(d);
          a = !0;
          for (var t = s.length; t; ) {
            for (u = s, s = []; ++l < t; ) u && u[l].run();
            (l = -1), (t = s.length);
          }
          (u = null),
            (a = !1),
            (function (e) {
              if (n === clearTimeout) return clearTimeout(e);
              if ((n === o || !n) && clearTimeout)
                return (n = clearTimeout), clearTimeout(e);
              try {
                return n(e);
              } catch (t) {
                try {
                  return n.call(null, e);
                } catch (t) {
                  return n.call(this, e);
                }
              }
            })(e);
        }
      }
      function h(e, t) {
        (this.fun = e), (this.array = t);
      }
      function A() {}
      (r.nextTick = function (e) {
        var t = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        s.push(new h(e, t)), 1 !== s.length || a || c(f);
      }),
        (h.prototype.run = function () {
          this.fun.apply(null, this.array);
        }),
        (r.title = "browser"),
        (r.browser = !0),
        (r.env = {}),
        (r.argv = []),
        (r.version = ""),
        (r.versions = {}),
        (r.on = A),
        (r.addListener = A),
        (r.once = A),
        (r.off = A),
        (r.removeListener = A),
        (r.removeAllListeners = A),
        (r.emit = A),
        (r.prependListener = A),
        (r.prependOnceListener = A),
        (r.listeners = function (e) {
          return [];
        }),
        (r.binding = function (e) {
          throw new Error("process.binding is not supported");
        }),
        (r.cwd = function () {
          return "/";
        }),
        (r.chdir = function (e) {
          throw new Error("process.chdir is not supported");
        }),
        (r.umask = function () {
          return 0;
        });
    },
    86855: function (e, t) {
      var n;
      !(function () {
        "use strict";
        var r = {}.hasOwnProperty;
        function i() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n && (e = c(e, o(n)));
          }
          return e;
        }
        function o(e) {
          if ("string" === typeof e || "number" === typeof e) return e;
          if ("object" !== typeof e) return "";
          if (Array.isArray(e)) return i.apply(null, e);
          if (
            e.toString !== Object.prototype.toString &&
            !e.toString.toString().includes("[native code]")
          )
            return e.toString();
          var t = "";
          for (var n in e) r.call(e, n) && e[n] && (t = c(t, n));
          return t;
        }
        function c(e, t) {
          return t ? (e ? e + " " + t : e + t) : e;
        }
        e.exports
          ? ((i.default = i), (e.exports = i))
          : void 0 ===
              (n = function () {
                return i;
              }.apply(t, [])) || (e.exports = n);
      })();
    },
  },
  function (e) {
    e.O(0, [2972, 5878, 7560, 2971, 2117, 1744], function () {
      return (t = 41911), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
