(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3185],
  {
    92519: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 37809)),
        Promise.resolve().then(t.bind(t, 49916)),
        Promise.resolve().then(t.bind(t, 87739)),
        Promise.resolve().then(t.t.bind(t, 65878, 23)),
        Promise.resolve().then(t.t.bind(t, 75001, 23)),
        Promise.resolve().then(t.t.bind(t, 11791, 23)),
        Promise.resolve().then(t.t.bind(t, 50598, 23)),
        Promise.resolve().then(t.t.bind(t, 50391, 23)),
        Promise.resolve().then(t.t.bind(t, 2528, 23)),
        Promise.resolve().then(t.bind(t, 37933)),
        Promise.resolve().then(t.bind(t, 65343)),
        Promise.resolve().then(t.bind(t, 71031));
    },
    37809: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return x;
        },
      });
      var r = t(57437),
        o = t(75571),
        i = t(41677),
        c = t(2265),
        s = t(52181),
        a = t(50332),
        u = t(81753);
      const l = (0, c.createContext)({
        experimentClient: null,
        isReady: !1,
        getUserVariant: () => "",
      });
      function d(e) {
        let { children: n } = e;
        const [t, o] = (0, c.useState)(!1),
          [i, d] = (0, c.useState)();
        (0, c.useEffect)(() => {
          const e = s.KS.initialize(a.IE, {
            exposureTrackingProvider: {
              track: (e) => {
                (0, u.ZP)(
                  "exposure__".concat(e.flag_key),
                  {
                    action: u.Us.view,
                    componentType: u.re.page,
                    variant: e.variant,
                    flag_key: e.flag_key,
                    experiment_key: e.experiment_key,
                  },
                  u.E3.high,
                );
              },
            },
            userProvider: {
              getUser: () => ({
                user_id: window.ClientAnalytics.identity.userId,
                device_id: window.ClientAnalytics.identity.deviceId,
                os: window.ClientAnalytics.identity.device_os,
                language: window.ClientAnalytics.identity.languageCode,
                country: window.ClientAnalytics.identity.countryCode,
              }),
            },
          });
          d(e);
        }, []);
        const f = (0, c.useCallback)(async () => {
          i && (await i.start());
        }, []);
        (0, c.useEffect)(() => {
          f()
            .then(() => {
              o(!0);
            })
            .catch((e) => {});
        }, [i]);
        const v = (0, c.useCallback)(
            (e) => {
              if (!t) return;
              if (!i) return;
              return i.variant(e).value;
            },
            [t],
          ),
          g = (0, c.useMemo)(
            () => ({ experimentClient: i, isReady: t, getUserVariant: v }),
            [t, v],
          );
        return (0, r.jsx)(l.Provider, { value: g, children: n });
      }
      const f = !1;
      const v = {
        categories: [
          {
            id: o.TrackingCategory.NECESSARY,
            expiry: 365,
            required: !0,
            trackers: [
              { id: "ip_country", type: o.TrackerType.COOKIE, expiry: 10 },
              { id: "locale", type: o.TrackerType.COOKIE },
            ],
          },
          {
            id: o.TrackingCategory.PERFORMANCE,
            expiry: 365,
            trackers: [
              { id: "_dd_s", type: o.TrackerType.COOKIE },
              { id: "base_device_id", type: o.TrackerType.COOKIE },
            ],
          },
        ],
        geolocationRules: [
          { region: o.Region.DEFAULT, framework: o.Framework.OPT_OUT },
          { region: o.Region.EU, framework: o.Framework.OPT_IN },
        ],
      };
      var g = t(99376),
        h = t(48667),
        _ = t(54916),
        b = t(17006);
      var k = (e, n, t, r) => {
        let o = t;
        const i =
            null === n || void 0 === n
              ? void 0
              : n.consent.includes("performance"),
          c = _.yG
            ? "ca92bbcb548f7ec4b8ebe9194b8eda81"
            : "2b38c7ac93c0dccc83ebf9acc5107413";
        if (
          (i ? o || ((o = (0, b.Z)()), r(o)) : (o = "base_web_device_id"),
          window.ClientAnalytics)
        ) {
          const {
            init: n,
            identify: t,
            PlatformName: r,
            initNextJsTrackPageview: i,
          } = window.ClientAnalytics;
          n({
            isProd: !_.yG,
            amplitudeApiKey: c,
            platform: r.web,
            projectName: "base_web",
            showDebugLogging: _.yG,
            version: "1.0.0",
            apiEndpoint: "https://cca-lite.coinbase.com",
          }),
            t({ deviceId: o }),
            i({ nextJsRouter: e });
        }
      };
      function m() {
        const e = (0, o.useSavedTrackingPreference)(),
          [n, t] = (0, o.useCookie)("base_device_id"),
          i = (0, g.usePathname)(),
          s = (0, c.useRef)(null),
          a = (0, c.useMemo)(
            () => ({
              events: {
                on: (e, n) => {
                  "routeChangeComplete" === e && n && (s.current = n);
                },
              },
            }),
            [],
          );
        (0, c.useEffect)(() => {
          s.current && s.current();
        }, [s, i]);
        const u = (0, c.useCallback)(() => k(a, e, n, t), [a, e, n, t]);
        return _.yG
          ? null
          : (0, r.jsx)(h.default, {
              src: "https://static-assets.coinbase.com/js/cca/v0.0.1.js",
              onLoad: u,
            });
      }
      var y = t(30166),
        C = t(86685),
        p = t(47903);
      const E = (0, y.default)(async () => t.e(4374).then(t.bind(t, 44374)), {
          loadableGenerated: { webpack: () => [44374] },
          ssr: !1,
        }),
        w = "abluaRXSxWIV";
      function x(e) {
        let { children: n } = e;
        const s = (0, c.useRef)(),
          a = (0, c.useCallback)((e) => {
            var n;
            const t =
              null === (n = s.current) || void 0 === n ? void 0 : n.consent;
            if (((s.current = e), !t)) return;
            const r = e.consent;
            [
              ...t.filter((e) => !r.includes(e)),
              ...r.filter((e) => !t.includes(e)),
            ].length > 0 && window.location.reload();
          }, []),
          u = (0, c.useCallback)(
            (e) => p.k.error("Cookie manager provider error", e),
            [],
          ),
          l = (0, c.useCallback)((e, n) => p.k.info(e, n), []);
        return (
          (function (e) {
            const [n, r] = (0, c.useState)(null);
            (0, c.useEffect)(() => {
              f ||
                (e &&
                  (async () => {
                    try {
                      const { sprig: n } = await t
                          .e(2274)
                          .then(t.bind(t, 82274)),
                        o = n.configure({ environmentId: e });
                      o("track", "pageload"), r(o);
                    } catch (n) {}
                  })());
            }, []);
          })(w),
          (0, r.jsx)(C.default, {
            context: "web",
            children: (0, r.jsxs)(o.Provider, {
              projectName: "base_web",
              locale: "en",
              region: o.Region.DEFAULT,
              log: l,
              onError: u,
              onPreferenceChange: a,
              config: v,
              children: [
                (0, r.jsx)(m, {}),
                (0, r.jsx)(i.zt, {
                  children: (0, r.jsx)(d, {
                    children: (0, r.jsxs)(r.Fragment, {
                      children: [n, (0, r.jsx)(E, {})],
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    49916: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return d;
        },
      });
      var r,
        o = t(27347),
        i = t(54916),
        c = t(47903),
        s = t(2265);
      const a = null !== (r = "16db4f8f-831a-4df5-b78b-546405085227") ? r : "";
      var u;
      const l = null !== (u = "pubf484d04488d53c7af19b7477e946fc48") ? u : "";
      function d() {
        return (
          (0, s.useEffect)(() => {
            i.yG ||
              (a && l
                ? o.v.init({
                    applicationId: a,
                    clientToken: l,
                    site: "datadoghq.com",
                    service: "base-org",
                    env: "production",
                    sessionSampleRate: 100,
                    sessionReplaySampleRate: 20,
                    trackUserInteractions: !0,
                    trackResources: !0,
                    trackLongTasks: !0,
                    defaultPrivacyLevel: "mask",
                    allowedTracingUrls: [
                      {
                        match: (e) => e.startsWith("https://base.org/api"),
                        propagatorTypes: ["datadog"],
                      },
                    ],
                  })
                : c.k.warn("Datadog is not configured"));
          }, []),
          null
        );
      }
    },
    87739: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          AnalyticsContext: function () {
            return s;
          },
          default: function () {
            return u;
          },
          useAnalytics: function () {
            return a;
          },
        });
      var r = t(60221),
        o = t(57437),
        i = t(81753),
        c = t(2265);
      const s = (0, c.createContext)({
        logEventWithContext: function () {},
        fullContext: "",
      });
      function a() {
        const e = (0, c.useContext)(s);
        if (void 0 === e)
          throw new Error(
            "useAnalytics must be used within a AnalyticsProvider",
          );
        return e;
      }
      function u(e) {
        let { children: n, context: t } = e;
        const { fullContext: u } = a(),
          l = [u, t].filter((e) => !!e).join("_"),
          d = (0, c.useCallback)(
            (e, n, t) => {
              const o = e.toLocaleLowerCase();
              (0, i.ZP)(
                o,
                (0, r._)(
                  {
                    action: n,
                    context: l,
                    page_path: window.location.pathname,
                  },
                  t,
                ),
                i.E3.high,
              );
            },
            [l],
          ),
          f = (0, c.useMemo)(
            () => ({ logEventWithContext: d, context: t, fullContext: l }),
            [t, l, d],
          );
        return (0, o.jsx)(s.Provider, { value: f, children: n });
      }
    },
    86685: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return l;
        },
        p: function () {
          return u;
        },
      });
      var r = t(57437),
        o = t(27347),
        i = t(54916),
        c = t(47903),
        s = t(2265);
      const a = (0, s.createContext)({
        logError: function () {},
        fullContext: "",
      });
      function u() {
        const e = (0, s.useContext)(a);
        if (void 0 === e)
          throw new Error("useErrors must be used within a ErrorsProvider");
        return e;
      }
      function l(e) {
        let { children: n, context: t } = e;
        const { fullContext: l } = u(),
          d = [l, t].filter((e) => !!e).join("_"),
          f = (0, s.useCallback)(
            (e, n) => {
              i.yG ||
                (c.k.error('Error caught with message: "'.concat(n, '"'), e, {
                  context: d,
                  message: n,
                }),
                o.v.addError(e, { context: d, message: n }));
            },
            [d],
          ),
          v = (0, s.useMemo)(
            () => ({ logError: f, context: t, fullContext: d }),
            [t, d, f],
          );
        return (0, r.jsx)(a.Provider, { value: v, children: n });
      }
    },
    37933: function (e, n, t) {
      "use strict";
      t.d(n, {
        CookieManagerButton: function () {
          return c;
        },
      });
      var r = t(57437),
        o = t(2265),
        i = t(51101);
      function c() {
        const [e, n] = (0, o.useState)(!1),
          t = (0, o.useCallback)(() => n(!0), []),
          c = (0, o.useCallback)(() => n(!1), []);
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)("button", {
              type: "button",
              className: "appearance-none",
              onClick: t,
              children: "Cookie Manager",
            }),
            e &&
              (0, r.jsx)(i.CookiePreferencesModal, { isOpen: e, onClose: c }),
          ],
        });
      }
    },
    71031: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return d;
        },
      });
      var r = t(60221),
        o = t(88810),
        i = t(67085),
        c = t(57437),
        s = t(81753),
        a = t(27648),
        u = t(2265),
        l = t(87739);
      function d(e) {
        var { children: n, onClick: t } = e,
          d = (0, i._)(e, ["children", "onClick"]);
        const { logEventWithContext: f } = (0, l.useAnalytics)(),
          v = (0, u.useCallback)(
            (e) => {
              const n = e.currentTarget;
              try {
                const e = new URL(n.href),
                  {
                    href: t,
                    hostname: r,
                    origin: o,
                    pathname: i,
                    search: c,
                  } = e;
                f("link_clicked", s.Us.click, {
                  componentType: s.re.link,
                  href: t,
                  hostname: r,
                  origin: o,
                  pathname: i,
                  search: c,
                });
              } catch (r) {}
              t && t(e);
            },
            [t, f],
          );
        return (0, c.jsx)(
          a.default,
          (0, o._)((0, r._)({}, d), { onClick: v, children: n }),
        );
      }
    },
    54916: function (e, n, t) {
      "use strict";
      t.d(n, {
        yG: function () {
          return d;
        },
      });
      var r = t(81460),
        o = t(90713),
        i = t(68571);
      var c;
      c = i.env.DOCS_URL;
      var s;
      s = i.env.BRIDGE_URL;
      var a;
      a = i.env.GREENHOUSE_HTTPS;
      var u;
      u = i.env.MAINNET_LAUNCH_BLOG_POST_URL;
      var l;
      l = i.env.MAINNET_LAUNCH_FLAG;
      const d = !1;
      var f;
      f = i.env.TRUSTED_SIGNER_ADDRESS;
      var v;
      (v = i.env.TRUSTED_SIGNER_PRIVATE_KEY),
        r.L.id,
        o.u.id,
        r.L.id,
        o.u.id,
        i.env.AMPLITUDE_API_KEY_DEVELOPMENT,
        i.env.AMPLITUDE_API_KEY_PRODUCTION;
      var g;
      !(function (e) {
        e.FARCASTER_FRAME_CONTEXT = "FARCASTER_FRAME_CONTEXT";
      })(g || (g = {}));
    },
    47903: function (e, n, t) {
      "use strict";
      t.d(n, {
        k: function () {
          return c;
        },
      });
      var r = t(60221),
        o = t(88810);
      class i {
        static getInstance(e) {
          return i.instance || (i.instance = new i(e)), i.instance;
        }
        createDatadogLog(e, n, t) {
          let o, i;
          JSON.stringify(
            (0, r._)(
              {
                message: "[".concat(this.service, "] ").concat(n),
                level: e,
                dd: { trace_id: o, span_id: i },
              },
              t,
            ),
          );
        }
        log(e, n, t) {
          this.createDatadogLog(e, n, t);
        }
        info(e, n) {
          this.log("info", e, n);
        }
        warn(e, n) {
          this.log("warn", e, n);
        }
        error(e, n, t) {
          const i =
            n instanceof Error
              ? {
                  name: n.name,
                  cause: n.cause,
                  message: n.message,
                  stack: n.stack,
                }
              : { message: JSON.stringify(n) };
          n && this.log("error", e, (0, o._)((0, r._)({}, t), { error: i })),
            this.log("error", e, t);
        }
        debug(e, n) {
          this.log("debug", e, n);
        }
        verbose(e, n) {
          this.log("verbose", e, n);
        }
        constructor(e) {
          this.service = e.service;
        }
      }
      const c = i.getInstance({ service: "base-org" });
    },
    50332: function (e, n, t) {
      "use strict";
      t.d(n, {
        IE: function () {
          return l;
        },
        yG: function () {
          return u;
        },
      });
      var r = t(68571);
      var o;
      o = r.env.DOCS_URL;
      var i;
      i = r.env.BRIDGE_URL;
      var c;
      c = r.env.GREENHOUSE_HTTPS;
      var s;
      s = r.env.MAINNET_LAUNCH_BLOG_POST_URL;
      var a;
      a = r.env.MAINNET_LAUNCH_FLAG;
      const u = !1,
        l = u
          ? "client-Wvf63OdaukDZyCBtwgbOvHgGTuASBZFG"
          : "client-agFoQg5AOvZ2ZiOChny9RrGk21jG3VrH";
    },
    81753: function (e, n, t) {
      "use strict";
      t.d(n, {
        E3: function () {
          return i;
        },
        Us: function () {
          return o;
        },
        ZP: function () {
          return s;
        },
        re: function () {
          return r;
        },
        yV: function () {
          return a;
        },
      });
      var r,
        o,
        i,
        c = t(50332);
      function s(e, n, t) {
        if (c.yG)
          return console.log("logEvent: ", {
            name: e,
            event: n,
            importance: t,
          });
        const r = window.ClientAnalytics;
        r && (null === r || void 0 === r || r.logEvent(e, n, t));
      }
      function a(e) {
        if (c.yG) return console.log("identify: ", { event: e });
        const n = window.ClientAnalytics;
        n && (null === n || void 0 === n || n.logEvent("identify", e, "low"));
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
        })(o || (o = {})),
        (function (e) {
          (e.low = "low"), (e.high = "high");
        })(i || (i = {}));
    },
    2528: function () {},
    65343: function (e, n, t) {
      "use strict";
      t.r(n),
        (n.default = {
          src: "_next/static/media/bigBaseLogo.855a4e9c.svg",
          height: 257,
          width: 1194,
          blurWidth: 0,
          blurHeight: 0,
        });
    },
  },
  function (e) {
    e.O(
      0,
      [5698, 9779, 2972, 5878, 22, 1165, 7347, 1677, 6742, 2971, 2117, 1744],
      function () {
        return (n = 92519), e((e.s = n));
        var n;
      },
    );
    var n = e.O();
    _N_E = n;
  },
]);
