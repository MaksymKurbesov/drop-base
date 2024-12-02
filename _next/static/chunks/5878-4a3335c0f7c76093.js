"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5878],
  {
    65878: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const o = n(60221),
        i = n(88810),
        r = n(67085);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return S;
          },
        });
      const s = n(63862),
        a = n(91897),
        l = n(57437),
        d = a._(n(2265)),
        c = s._(n(54887)),
        u = s._(n(38293)),
        f = n(55346),
        p = n(90128),
        g = n(62589),
        m = (n(31765), n(25523)),
        h = s._(n(5084)),
        y = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function b(e, t, n, r, s, a, l) {
        const d = null == e ? void 0 : e.src;
        if (!e || e["data-loaded-src"] === d) return;
        e["data-loaded-src"] = d;
        ("decode" in e ? e.decode() : Promise.resolve())
          .catch(() => {})
          .then(() => {
            if (e.parentElement && e.isConnected) {
              if (("empty" !== t && s(!0), null == n ? void 0 : n.current)) {
                const t = new Event("load");
                Object.defineProperty(t, "target", { writable: !1, value: e });
                let r = !1,
                  s = !1;
                n.current(
                  i._(o._({}, t), {
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => s,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (s = !0), t.stopPropagation();
                    },
                  }),
                );
              }
              (null == r ? void 0 : r.current) && r.current(e);
            }
          });
      }
      function _(e) {
        return Boolean(d.use) ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" === typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      const w = (0, d.forwardRef)((e, t) => {
        let {
            src: n,
            srcSet: s,
            sizes: a,
            height: c,
            width: u,
            decoding: f,
            className: p,
            style: g,
            fetchPriority: m,
            placeholder: h,
            loading: y,
            unoptimized: w,
            fill: v,
            onLoadRef: S,
            onLoadingCompleteRef: j,
            setBlurComplete: z,
            setShowAltText: C,
            sizesInput: P,
            onLoad: x,
            onError: O,
          } = e,
          M = r._(e, [
            "src",
            "srcSet",
            "sizes",
            "height",
            "width",
            "decoding",
            "className",
            "style",
            "fetchPriority",
            "placeholder",
            "loading",
            "unoptimized",
            "fill",
            "onLoadRef",
            "onLoadingCompleteRef",
            "setBlurComplete",
            "setShowAltText",
            "sizesInput",
            "onLoad",
            "onError",
          ]);
        return (0, l.jsx)(
          "img",
          i._(o._({}, M, _(m)), {
            loading: y,
            width: u,
            height: c,
            decoding: f,
            "data-nimg": v ? "fill" : "1",
            className: p,
            style: g,
            sizes: a,
            srcSet: s,
            src: n,
            ref: (0, d.useCallback)(
              (e) => {
                t &&
                  ("function" === typeof t
                    ? t(e)
                    : "object" === typeof t && (t.current = e)),
                  e && (O && (e.src = e.src), e.complete && b(e, h, S, j, z));
              },
              [n, h, S, j, z, O, w, P, t],
            ),
            onLoad: (e) => {
              b(e.currentTarget, h, S, j, z);
            },
            onError: (e) => {
              C(!0), "empty" !== h && z(!0), O && O(e);
            },
          }),
        );
      });
      function v(e) {
        let { isAppRouter: t, imgAttributes: n } = e;
        const i = o._(
          {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
          },
          _(n.fetchPriority),
        );
        return t && c.default.preload
          ? (c.default.preload(n.src, i), null)
          : (0, l.jsx)(u.default, {
              children: (0, l.jsx)(
                "link",
                o._({ rel: "preload", href: n.srcSet ? void 0 : n.src }, i),
                "__nimg-" + n.src + n.srcSet + n.sizes,
              ),
            });
      }
      const S = (0, d.forwardRef)((e, t) => {
        const n = !(0, d.useContext)(m.RouterContext),
          r = (0, d.useContext)(g.ImageConfigContext),
          s = (0, d.useMemo)(() => {
            const e = y || r || p.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return i._(o._({}, e), { allSizes: t, deviceSizes: n });
          }, [r]),
          { onLoad: a, onLoadingComplete: c } = e,
          u = (0, d.useRef)(a);
        (0, d.useEffect)(() => {
          u.current = a;
        }, [a]);
        const b = (0, d.useRef)(c);
        (0, d.useEffect)(() => {
          b.current = c;
        }, [c]);
        const [_, S] = (0, d.useState)(!1),
          [j, z] = (0, d.useState)(!1),
          { props: C, meta: P } = (0, f.getImgProps)(e, {
            defaultLoader: h.default,
            imgConf: s,
            blurComplete: _,
            showAltText: j,
          });
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(
              w,
              i._(o._({}, C), {
                unoptimized: P.unoptimized,
                placeholder: P.placeholder,
                fill: P.fill,
                onLoadRef: u,
                onLoadingCompleteRef: b,
                setBlurComplete: S,
                setShowAltText: z,
                sizesInput: e.sizes,
                ref: t,
              }),
            ),
            P.priority
              ? (0, l.jsx)(v, { isAppRouter: n, imgAttributes: C })
              : null,
          ],
        });
      });
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    91436: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      const o = n(63862)._(n(2265)).default.createContext({});
    },
    23964: function (e, t) {
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: o = !1,
        } = void 0 === e ? {} : e;
        return t || (n && o);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    55346: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const o = n(60221),
        i = n(88810),
        r = n(67085);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      n(31765);
      const s = n(96496),
        a = n(90128);
      function l(e) {
        return void 0 !== e.default;
      }
      new Map();
      function d(e) {
        return "undefined" === typeof e
          ? e
          : "number" === typeof e
            ? Number.isFinite(e)
              ? e
              : NaN
            : "string" === typeof e && /^[0-9]+$/.test(e)
              ? parseInt(e, 10)
              : NaN;
      }
      function c(e) {
        let {
          config: t,
          src: n,
          unoptimized: o,
          width: i,
          quality: r,
          sizes: s,
          loader: a,
        } = e;
        if (o) return { src: n, srcSet: void 0, sizes: void 0 };
        const { widths: l, kind: d } = (function (e, t, n) {
            let { deviceSizes: o, allSizes: i } = e;
            if (n) {
              const e = /(^|\s)(1?\d?\d)vw/g,
                t = [];
              for (let o; (o = e.exec(n)); o) t.push(parseInt(o[2]));
              if (t.length) {
                const e = 0.01 * Math.min(...t);
                return { widths: i.filter((t) => t >= o[0] * e), kind: "w" };
              }
              return { widths: i, kind: "w" };
            }
            return "number" !== typeof t
              ? { widths: o, kind: "w" }
              : {
                  widths: [
                    ...new Set(
                      [t, 2 * t].map(
                        (e) => i.find((t) => t >= e) || i[i.length - 1],
                      ),
                    ),
                  ],
                  kind: "x",
                };
          })(t, i, s),
          c = l.length - 1;
        return {
          sizes: s || "w" !== d ? s : "100vw",
          srcSet: l
            .map(
              (e, o) =>
                a({ config: t, src: n, quality: r, width: e }) +
                " " +
                ("w" === d ? e : o + 1) +
                d,
            )
            .join(", "),
          src: a({ config: t, src: n, quality: r, width: l[c] }),
        };
      }
      function u(e, t) {
        let {
            src: n,
            sizes: u,
            unoptimized: f = !1,
            priority: p = !1,
            loading: g,
            className: m,
            quality: h,
            width: y,
            height: b,
            fill: _ = !1,
            style: w,
            overrideSrc: v,
            onLoad: S,
            onLoadingComplete: j,
            placeholder: z = "empty",
            blurDataURL: C,
            fetchPriority: P,
            decoding: x = "async",
            layout: O,
            objectFit: M,
            objectPosition: E,
            lazyBoundary: I,
            lazyRoot: R,
          } = e,
          A = r._(e, [
            "src",
            "sizes",
            "unoptimized",
            "priority",
            "loading",
            "className",
            "quality",
            "width",
            "height",
            "fill",
            "style",
            "overrideSrc",
            "onLoad",
            "onLoadingComplete",
            "placeholder",
            "blurDataURL",
            "fetchPriority",
            "decoding",
            "layout",
            "objectFit",
            "objectPosition",
            "lazyBoundary",
            "lazyRoot",
          ]);
        const {
          imgConf: k,
          showAltText: L,
          blurComplete: D,
          defaultLoader: N,
        } = t;
        let T,
          F = k || a.imageConfigDefault;
        if ("allSizes" in F) T = F;
        else {
          const e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
            t = F.deviceSizes.sort((e, t) => e - t);
          T = i._(o._({}, F), { allSizes: e, deviceSizes: t });
        }
        if ("undefined" === typeof N)
          throw new Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config",
          );
        let U = A.loader || N;
        delete A.loader, delete A.srcSet;
        const B = "__next_img_default" in U;
        if (B) {
          if ("custom" === T.loader)
            throw new Error(
              'Image with src "' +
                n +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader',
            );
        } else {
          const e = U;
          U = (t) => {
            const { config: n } = t,
              o = r._(t, ["config"]);
            return e(o);
          };
        }
        if (O) {
          "fill" === O && (_ = !0);
          const e = { responsive: "100vw", fill: "100vw" },
            t = {
              intrinsic: { maxWidth: "100%", height: "auto" },
              responsive: { width: "100%", height: "auto" },
            }[O];
          t && (w = o._({}, w, t));
          const n = e[O];
          n && !u && (u = n);
        }
        let q,
          G,
          W = "",
          H = d(y),
          V = d(b);
        if (
          (function (e) {
            return (
              "object" === typeof e &&
              (l(e) ||
                (function (e) {
                  return void 0 !== e.src;
                })(e))
            );
          })(n)
        ) {
          const e = l(n) ? n.default : n;
          if (!e.src)
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e),
            );
          if (!e.height || !e.width)
            throw new Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e),
            );
          if (
            ((q = e.blurWidth),
            (G = e.blurHeight),
            (C = C || e.blurDataURL),
            (W = e.src),
            !_)
          )
            if (H || V) {
              if (H && !V) {
                const t = H / e.width;
                V = Math.round(e.height * t);
              } else if (!H && V) {
                const t = V / e.height;
                H = Math.round(e.width * t);
              }
            } else (H = e.width), (V = e.height);
        }
        n = "string" === typeof n ? n : W;
        let $ = !p && ("lazy" === g || "undefined" === typeof g);
        (!n || n.startsWith("data:") || n.startsWith("blob:")) &&
          ((f = !0), ($ = !1)),
          T.unoptimized && (f = !0),
          B && n.endsWith(".svg") && !T.dangerouslyAllowSVG && (f = !0),
          p && (P = "high");
        const J = d(h);
        const Y = Object.assign(
            _
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: M,
                  objectPosition: E,
                }
              : {},
            L ? {} : { color: "transparent" },
            w,
          ),
          Q =
            D || "empty" === z
              ? null
              : "blur" === z
                ? 'url("data:image/svg+xml;charset=utf-8,' +
                  (0, s.getImageBlurSvg)({
                    widthInt: H,
                    heightInt: V,
                    blurWidth: q,
                    blurHeight: G,
                    blurDataURL: C || "",
                    objectFit: Y.objectFit,
                  }) +
                  '")'
                : 'url("' + z + '")';
        let X = Q
          ? {
              backgroundSize: Y.objectFit || "cover",
              backgroundPosition: Y.objectPosition || "50% 50%",
              backgroundRepeat: "no-repeat",
              backgroundImage: Q,
            }
          : {};
        const K = c({
          config: T,
          src: n,
          unoptimized: f,
          width: H,
          quality: J,
          sizes: u,
          loader: U,
        });
        return {
          props: i._(o._({}, A), {
            loading: $ ? "lazy" : g,
            fetchPriority: P,
            width: H,
            height: V,
            decoding: x,
            className: m,
            style: o._({}, Y, X),
            sizes: K.sizes,
            srcSet: K.srcSet,
            src: v || K.src,
          }),
          meta: { unoptimized: f, priority: p, placeholder: z, fill: _ },
        };
      }
    },
    38293: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 });
      const o = n(60221);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return h;
          },
          defaultHead: function () {
            return f;
          },
        });
      const i = n(63862),
        r = n(91897),
        s = n(57437),
        a = r._(n(2265)),
        l = i._(n(17421)),
        d = n(91436),
        c = n(48701),
        u = n(23964);
      n(31765);
      function f(e) {
        void 0 === e && (e = !1);
        const t = [(0, s.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, s.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              }),
            ),
          t
        );
      }
      function p(e, t) {
        return "string" === typeof t || "number" === typeof t
          ? e
          : t.type === a.default.Fragment
            ? e.concat(
                a.default.Children.toArray(t.props.children).reduce(
                  (e, t) =>
                    "string" === typeof t || "number" === typeof t
                      ? e
                      : e.concat(t),
                  [],
                ),
              )
            : e.concat(t);
      }
      const g = ["name", "httpEquiv", "charSet", "itemProp"];
      function m(e, t) {
        const { inAmpMode: n } = t;
        return e
          .reduce(p, [])
          .reverse()
          .concat(f(n).reverse())
          .filter(
            (function () {
              const e = new Set(),
                t = new Set(),
                n = new Set(),
                o = {};
              return (i) => {
                let r = !0,
                  s = !1;
                if (
                  i.key &&
                  "number" !== typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  s = !0;
                  const t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (r = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (r = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = g.length; e < t; e++) {
                      const t = g[e];
                      if (i.props.hasOwnProperty(t))
                        if ("charSet" === t) n.has(t) ? (r = !1) : n.add(t);
                        else {
                          const e = i.props[t],
                            n = o[t] || new Set();
                          ("name" === t && s) || !n.has(e)
                            ? (n.add(e), (o[t] = n))
                            : (r = !1);
                        }
                    }
                }
                return r;
              };
            })(),
          )
          .reverse()
          .map((e, t) => {
            const i = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              const t = o._({}, e.props || {});
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, t)
              );
            }
            return a.default.cloneElement(e, { key: i });
          });
      }
      const h = function (e) {
        let { children: t } = e;
        const n = (0, a.useContext)(d.AmpStateContext),
          o = (0, a.useContext)(c.HeadManagerContext);
        return (0, s.jsx)(l.default, {
          reduceComponentsToState: m,
          headManager: o,
          inAmpMode: (0, u.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    96496: function (e, t) {
      function n(e) {
        let {
          widthInt: t,
          heightInt: n,
          blurWidth: o,
          blurHeight: i,
          blurDataURL: r,
          objectFit: s,
        } = e;
        const a = o ? 40 * o : t,
          l = i ? 40 * i : n,
          d = a && l ? "viewBox='0 0 " + a + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          d +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (d
            ? "none"
            : "contain" === s
              ? "xMidYMid"
              : "cover" === s
                ? "xMidYMid slice"
                : "none") +
          "' style='filter: url(%23b);' href='" +
          r +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    62589: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      const o = n(63862)._(n(2265)),
        i = n(90128),
        r = o.default.createContext(i.imageConfigDefault);
    },
    90128: function (e, t) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return o;
          },
        });
      const n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        o = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          localPatterns: void 0,
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    5084: function (e, t) {
      function n(e) {
        let { config: t, src: n, width: o, quality: i } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          o +
          "&q=" +
          (i || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o;
          },
        }),
        (n.__next_img_default = !0);
      const o = n;
    },
    17421: function (e, t, n) {
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      const o = n(2265),
        i = "undefined" === typeof window,
        r = i ? () => {} : o.useLayoutEffect,
        s = i ? () => {} : o.useEffect;
      function a(e) {
        const { headManager: t, reduceComponentsToState: n } = e;
        function a() {
          if (t && t.mountedInstances) {
            const i = o.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean),
            );
            t.updateHead(n(i, e));
          }
        }
        var l;
        i &&
          (null == t || null == (l = t.mountedInstances) || l.add(e.children),
          a());
        return (
          r(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          r(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            ),
          ),
          s(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            ),
          ),
          null
        );
      }
    },
  },
]);
