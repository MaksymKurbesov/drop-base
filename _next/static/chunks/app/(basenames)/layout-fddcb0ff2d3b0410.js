(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9666, 9481],
  {
    22551: function (e, n, t) {
      Promise.resolve().then(t.bind(t, 29481)),
        Promise.resolve().then(t.bind(t, 86685)),
        Promise.resolve().then(t.bind(t, 14770));
    },
    56391: function (e, n, t) {
      "use strict";
      t.d(n, {
        _: function () {
          return s;
        },
      });
      var a = t(57437),
        r = t(2265),
        i = t(86685);
      function s(e) {
        let { children: n } = e;
        const [s, c] = (0, r.useState)(),
          { logError: l } = (0, i.p)();
        return (
          (0, r.useEffect)(() => {
            Promise.all([t.e(6455), t.e(9481)])
              .then(t.bind(t, 29481))
              .then((e) => {
                c(() => e.default);
              })
              .catch((e) => l(e, "Failed to load CryptoProviders"));
          }, [l]),
          s ? (0, a.jsx)(s, { children: n }) : null
        );
      }
    },
    29481: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return P;
          },
        });
      var a,
        r = t(57437),
        i = t(46741),
        s = t(67872),
        c = t(54114),
        l = t(29827),
        o = t(54916),
        d = t(49005),
        u = t(79516),
        h = t(70335),
        m = t(90713),
        x = t(81460),
        p = t(64314),
        f = t(75442),
        g = t(70711),
        b = t(81),
        j = t(50583),
        v = t(46821),
        w = t(66378),
        C = t(68571);
      const y = (0, s.a3)(
          [
            {
              groupName: "Recommended",
              wallets: [f.D, g.P, b.a, j.u, v.b, w.D],
            },
          ],
          {
            projectId:
              null !== (a = "99a7649b4421d35d175fbca94c1bd880")
                ? a
                : "dummy-id",
            walletConnectParameters: {},
            appName: "Base.org",
            appDescription: "",
            appUrl: "https://www.base.org/",
            appIcon: "",
          },
        ),
        N = (0, d._)({
          connectors: y,
          chains: [m.u, x.L, p.R],
          transports: {
            [m.u.id]: (0, u.d)(),
            [x.L.id]: (0, u.d)(),
            [p.R.id]: (0, u.d)(),
          },
          ssr: !0,
        }),
        k = new c.S(),
        B = { appearance: { mode: "light" } };
      function P(e) {
        let { children: n } = e;
        return (0, r.jsx)(h.WagmiProvider, {
          config: N,
          children: (0, r.jsx)(l.aH, {
            client: k,
            children: (0, r.jsx)(i.Ag, {
              chain: o.yG ? x.L : m.u,
              apiKey: C.env.NEXT_PUBLIC_ONCHAINKIT_API_KEY,
              config: B,
              children: (0, r.jsx)(s.pj, { modalSize: "compact", children: n }),
            }),
          }),
        });
      }
    },
    61481: function (e, n, t) {
      "use strict";
      t.d(n, {
        pB: function () {
          return J;
        },
        tB: function () {
          return A;
        },
        J7: function () {
          return M;
        },
      });
      var a = t(57437),
        r = t(15893),
        i = t(59156),
        s = t(90713),
        c = t(67872),
        l = t(76956),
        o = t(48318),
        d = t(64707),
        u = t(77861),
        h = t(33507),
        m = t(64314),
        x = t(42901),
        p = t(74920),
        f = t(45773),
        g = t(21144);
      function b() {
        const { address: e } = (0, d.useAccount)(),
          { data: n, isLoading: t } = (0, u.useEnsName)({
            address: e,
            chainId: m.R.id,
            query: { retry: !1 },
          }),
          { data: r, isLoading: i } = (0, h.useEnsAvatar)({
            name: null !== n && void 0 !== n ? n : void 0,
            chainId: m.R.id,
            query: { retry: !1 },
          }),
          { data: s, isLoading: c } = (0, x.Z)({ address: e }),
          l = t || i || c;
        if (s)
          return (0, a.jsx)(f.Z, {
            basename: s,
            width: 32,
            height: 32,
            wrapperClassName:
              "rounded-full h-[2rem] max-h-[2rem] min-h-[2rem] w-[2rem] min-w-[2rem] max-w-[2rem]",
          });
        let o = r;
        return (
          o || (o = (0, g.ni)(e)),
          (0, a.jsx)(p.Z, {
            src: o,
            alt: "Avatar",
            wrapperClassName:
              "rounded-full h-[2rem] max-h-[2rem] min-h-[2rem] w-[2rem] min-w-[2rem] max-w-[2rem]",
            backgroundClassName: "bg-blue-500",
            imageClassName:
              "group-hover:rotate-[-1deg] group-hover:scale-105 object-cover h-full w-full",
            width: 32,
            height: 32,
            forceIsLoading: l,
          })
        );
      }
      var j = t(27560),
        v = t(11420),
        w = t(81753);
      var C = t(86855),
        y = t.n(C),
        N = t(2265),
        k = t(72694),
        B = t(46327),
        P = t(86685),
        _ = t(43233),
        E = t(36509),
        S = t(37842),
        L = t(8987);
      function I(e) {
        let { chain: n, currentChain: t } = e;
        const { switchChainAsync: r } = (0, B.useSwitchChain)(),
          { logError: i } = (0, P.p)(),
          s = (0, N.useCallback)(() => {
            n !== t &&
              r({ chainId: n.id }).catch((e) => i(e, "Failed to switch chain"));
          }, [n, t, i, r]);
        return (0, a.jsx)(E.Z, { onClick: s, children: n.name });
      }
      function Z() {
        const { chain: e, isConnected: n } = (0, d.useAccount)(),
          { chains: t } = (0, B.useSwitchChain)();
        return n && e
          ? (0, a.jsxs)(_.Z, {
              children: [
                (0, a.jsx)(L.Z, {
                  children: (0, a.jsx)("span", {
                    className:
                      "inline-block rounded bg-blue-5 px-3 py-1 text-blue-50",
                    children: e.name,
                  }),
                }),
                (0, a.jsx)(S.Z, {
                  children: t.map((n) =>
                    (0, a.jsx)(I, { chain: n, currentChain: e }, n.id),
                  ),
                }),
              ],
            })
          : null;
      }
      var A,
        W = t(70304),
        z = t(56391);
      function M(e) {
        let { connectWalletButtonVariant: n = 0 } = e;
        return (0, a.jsx)(z._, {
          children: (0, a.jsx)(J, { connectWalletButtonVariant: n }),
        });
      }
      function J(e) {
        let { connectWalletButtonVariant: n = 0 } = e;
        const { openConnectModal: t } = (0, c.We)(),
          { switchChain: u } = (0, B.useSwitchChain)(),
          h = (0, N.useCallback)(() => u({ chainId: s.u.id }), [u]),
          m = (0, W.useSearchParams)(),
          x = null === m || void 0 === m ? void 0 : m.get("showChainSwitcher"),
          [p, f] = (0, N.useState)(!1);
        (0, N.useEffect)(() => {
          f(!0);
        }, []);
        const {
            address: g,
            connector: C,
            isConnected: P,
            isConnecting: _,
            isReconnecting: E,
            chain: S,
          } = (0, d.useAccount)(),
          L = !!S && v.KC.includes(S.id),
          { basenameChain: I } = (0, v.ZP)(),
          [, A] = (0, k.m9)(),
          z = (0, N.useCallback)(() => {
            A(null !== g && void 0 !== g ? g : "");
          }, [g, A]);
        (0, N.useEffect)(() => {
          var e;
          g &&
            ((0, w.ZP)(
              "wallet_connected",
              {
                action: w.Us.change,
                context: "navbar",
                address: g,
                wallet_type:
                  ((e = null === C || void 0 === C ? void 0 : C.name),
                  e ? e.toLowerCase().replace(/[ \-\/\.]/g, "_") : ""),
                wallet_connector_id: null === C || void 0 === C ? void 0 : C.id,
              },
              w.E3.low,
            ),
            (0, w.yV)({ userId: g }));
        }, [g, C]);
        const M = (0, N.useCallback)(() => {
            null === t || void 0 === t || t(),
              (0, w.ZP)(
                "connect_wallet",
                {
                  action: w.Us.click,
                  componentType: w.re.button,
                  context: "navbar",
                },
                w.E3.low,
              );
          }, [t]),
          J = y()("text-lg font-display", {
            "text-white": 0 === n,
            "text-black": 1 === n,
          }),
          O = (0, k.ac)("(min-width: 768px)");
        if (_ || E || !p)
          return (0, a.jsx)(j.J, { name: "spinner", color: "currentColor" });
        if (!P) {
          return 0 === n
            ? (0, a.jsx)(o.default, {
                onClick: M,
                roundedFull: !0,
                children: "Connect",
              })
            : (0, a.jsx)(l.zx, {
                variant: l.cT.Black,
                size: l.Ph.Small,
                onClick: M,
                rounded: !0,
                children: "Connect",
              });
        }
        return L
          ? (0, a.jsxs)(i.w5, {
              children: [
                (0, a.jsx)(i.RZ, {
                  withWalletAggregator: !0,
                  className:
                    "flex items-center justify-center rounded-xl bg-transparent p-2 hover:bg-gray-40/20",
                  children: (0, a.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, a.jsx)(b, {}),
                      O && (0, a.jsx)(r.VG, { chain: I, className: J }),
                      x && (0, a.jsx)(Z, {}),
                    ],
                  }),
                }),
                (0, a.jsxs)(i.Zl, {
                  className: "z-50 rounded-xl bg-white font-sans shadow-md",
                  children: [
                    (0, a.jsxs)(r.iJ, {
                      className: "px-4 pb-2 pt-3 font-display",
                      children: [
                        (0, a.jsx)(b, {}),
                        (0, a.jsx)(r.VG, {
                          onClick: z,
                          chain: I,
                          className:
                            "cursor-pointer font-display transition-all hover:opacity-65",
                        }),
                        (0, a.jsx)(r.je, { className: "font-display" }),
                      ],
                    }),
                    (0, a.jsx)(i.ou, {
                      className: "font-display hover:bg-gray-40/20",
                    }),
                    (0, a.jsx)(i.zN, {
                      icon: "wallet",
                      href: "https://wallet.coinbase.com",
                      target: "_blank",
                      className: "font-display hover:bg-gray-40/20",
                      children: "Go to Wallet Dashboard",
                    }),
                    (0, a.jsx)(i.Oq, {
                      className: "font-display hover:bg-gray-40/20",
                    }),
                  ],
                }),
              ],
            })
          : (0, a.jsx)(l.zx, {
              variant: l.cT.Black,
              size: l.Ph.Small,
              onClick: h,
              rounded: !0,
              children: "Connect to Base",
            });
      }
      !(function (e) {
        (e[(e.BaseOrg = 0)] = "BaseOrg"), (e[(e.Basename = 1)] = "Basename");
      })(A || (A = {}));
    },
    14770: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return b;
        },
      });
      var a = t(57437),
        r = {
          src: "_next/static/media/usernameBaseLogo.c13052c9.svg",
          height: 46,
          width: 44,
          blurWidth: 0,
          blurHeight: 0,
        },
        i = t(71031),
        s = t(61481),
        c = t(46327),
        l = t(64707),
        o = t(86855),
        d = t.n(o),
        u = t(11420),
        h = t(90713),
        m = t(81460),
        x = t(27560),
        p = t(2265),
        f = t(54916),
        g = t(73919);
      function b() {
        const { basenameChain: e } = (0, u.ZP)(),
          { switchChain: n } = (0, c.useSwitchChain)(),
          { chain: t, isConnected: o } = (0, l.useAccount)(),
          b = f.yG && e.id === h.u.id,
          j = !f.yG && e.id === m.L.id,
          v =
            (null === t || void 0 === t ? void 0 : t.id) !== e.id &&
            (null === t || void 0 === t ? void 0 : t.id) !== m.L.id &&
            o,
          w = (0, p.useCallback)(
            (e) => {
              e.preventDefault(), n({ chainId: h.u.id });
            },
            [n],
          ),
          C = (0, p.useCallback)(
            (e) => {
              e.preventDefault(), n({ chainId: m.L.id });
            },
            [n],
          ),
          y = d()("p-2 rounded flex items-center gap-6", { "bg-white": o }),
          N = d()(
            "flex h-24 w-full max-w-[1440px] flex-row items-center justify-between gap-4 md:gap-16 self-center bg-transparent px-4 md:px-8",
          );
        return (0, a.jsxs)("div", {
          className: "absolute top-0 z-50 flex w-full flex-col",
          children: [
            b &&
              (0, a.jsx)("div", {
                className:
                  "flex items-center  justify-center gap-2 bg-orange-10 p-2 text-center text-orange-80",
                children: (0, a.jsxs)("p", {
                  children: [
                    (0, a.jsx)("span", {
                      className: "align-center mr-1 inline-block",
                      children: (0, a.jsx)(x.J, {
                        name: "info",
                        color: "currentColor",
                        height: "1rem",
                      }),
                    }),
                    "You are on Base Mainnet.",
                    " ",
                    (0, a.jsx)("button", {
                      className: "text-orange-90 underline underline-offset-2",
                      type: "button",
                      onClick: C,
                      children: "Switch to Testnet",
                    }),
                    "?",
                  ],
                }),
              }),
            j &&
              (0, a.jsx)("div", {
                className:
                  "flex items-center  justify-center gap-2 bg-orange-10 p-2 text-center text-orange-80",
                children: (0, a.jsxs)("p", {
                  children: [
                    (0, a.jsx)("span", {
                      className: "align-center mr-1 inline-block",
                      children: (0, a.jsx)(x.J, {
                        name: "info",
                        color: "currentColor",
                        height: "1rem",
                      }),
                    }),
                    "You are on Base Sepolia.",
                    " ",
                    (0, a.jsx)("button", {
                      className: "text-orange-90 underline underline-offset-2",
                      type: "button",
                      onClick: w,
                      children: "Switch to Base Mainnet",
                    }),
                    " ",
                    "to register a .base.eth name.",
                  ],
                }),
              }),
            v &&
              (0, a.jsx)("div", {
                className:
                  "flex items-center  justify-center gap-2 bg-orange-10 p-2 text-center text-orange-80",
                children: (0, a.jsxs)("p", {
                  children: [
                    (0, a.jsx)("span", {
                      className: "align-center mr-1 inline-block",
                      children: (0, a.jsx)(x.J, {
                        name: "info",
                        color: "currentColor",
                        height: "1rem",
                      }),
                    }),
                    "You are not on Base.",
                    " ",
                    (0, a.jsx)("button", {
                      className: "text-orange-90 underline underline-offset-2",
                      type: "button",
                      onClick: w,
                      children: "Switch to Base Mainnet",
                    }),
                    " ",
                    "to access Basenames features.",
                  ],
                }),
              }),
            (0, a.jsxs)("nav", {
              className: N,
              children: [
                (0, a.jsx)(i.default, {
                  href: "/",
                  children: (0, a.jsx)(g.Z, { src: r, alt: "Base" }),
                }),
                (0, a.jsxs)("span", {
                  className: y,
                  children: [
                    o &&
                      (0, a.jsx)("span", {
                        className: "text-md text-palette-primary",
                        children: (0, a.jsxs)(i.default, {
                          href: "/manage-names",
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)(x.J, {
                              name: "list",
                              color: "currentColor",
                              width: "1rem",
                              height: "1rem",
                            }),
                            "My Basenames",
                          ],
                        }),
                      }),
                    (0, a.jsx)(p.Suspense, {
                      children: (0, a.jsx)(s.pB, {
                        connectWalletButtonVariant: s.tB.Basename,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      }
    },
    71031: function (e, n, t) {
      "use strict";
      t.d(n, {
        default: function () {
          return u;
        },
      });
      var a = t(60221),
        r = t(88810),
        i = t(67085),
        s = t(57437),
        c = t(81753),
        l = t(27648),
        o = t(2265),
        d = t(87739);
      function u(e) {
        var { children: n, onClick: t } = e,
          u = (0, i._)(e, ["children", "onClick"]);
        const { logEventWithContext: h } = (0, d.useAnalytics)(),
          m = (0, o.useCallback)(
            (e) => {
              const n = e.currentTarget;
              try {
                const e = new URL(n.href),
                  {
                    href: t,
                    hostname: a,
                    origin: r,
                    pathname: i,
                    search: s,
                  } = e;
                h("link_clicked", c.Us.click, {
                  componentType: c.re.link,
                  href: t,
                  hostname: a,
                  origin: r,
                  pathname: i,
                  search: s,
                });
              } catch (a) {}
              t && t(e);
            },
            [t, h],
          );
        return (0, s.jsx)(
          l.default,
          (0, r._)((0, a._)({}, u), { onClick: m, children: n }),
        );
      }
    },
    48318: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          default: function () {
            return u;
          },
        });
      var a = t(57437),
        r = t(86855),
        i = t.n(r),
        s = t(85562),
        c = t(27560);
      const l = {
          [s.c.Primary]:
            "bg-blue text-white border border-blue hover:bg-blue-80 active:bg-[#06318E]",
          [s.c.Secondary]:
            "bg-white border border-white text-palette-foreground hover:bg-gray-15 active:bg-gray-30",
          [s.c.Outlined]:
            "bg-transparent text-white border border-white hover:bg-white hover:text-black active:bg-[#E3E7E9]",
        },
        o = {
          [s.P.Medium]: "text-md px-4 py-2 gap-3",
          [s.P.Large]: "text-lg px-6 py-4 gap-5",
        },
        d = { [s.P.Medium]: "0.75rem", [s.P.Large]: "1rem" };
      function u(e) {
        let {
          children: n,
          onClick: t,
          disabled: r,
          variant: u = s.c.Primary,
          size: h = s.P.Medium,
          iconName: m,
          roundedFull: x = !1,
          className: p,
          fullWidth: f = !1,
        } = e;
        const g = i()(
            "text-md px-4 py-2 whitespace-nowrap",
            "flex items-center justify-center",
            "disabled:opacity-40 disabled:pointer-events-none",
            "transition-all",
            l[u],
            o[h],
            x ? "rounded-full" : "rounded-lg",
            f ? "w-full" : "w-auto",
            p,
          ),
          b = d[h];
        return (0, a.jsxs)("button", {
          type: "button",
          onClick: t,
          disabled: r,
          className: g,
          children: [
            (0, a.jsx)("span", { children: n }),
            m &&
              (0, a.jsx)(c.J, {
                name: m,
                width: b,
                height: b,
                color: "currentColor",
              }),
          ],
        });
      }
    },
    85562: function (e, n, t) {
      "use strict";
      var a, r;
      t.d(n, {
        P: function () {
          return r;
        },
        c: function () {
          return a;
        },
      }),
        (function (e) {
          (e.Primary = "primary"),
            (e.Secondary = "secondary"),
            (e.Outlined = "outlined");
        })(a || (a = {})),
        (function (e) {
          (e.Medium = "medium"), (e.Large = "large");
        })(r || (r = {}));
    },
  },
  function (e) {
    e.O(
      0,
      [
        9472, 2486, 589, 2972, 5878, 22, 1226, 1165, 2694, 6906, 7347, 7945,
        8628, 5893, 1611, 6455, 7010, 7560, 6842, 1627, 2971, 2117, 1744,
      ],
      function () {
        return (n = 22551), e((e.s = n));
        var n;
      },
    );
    var n = e.O();
    _N_E = n;
  },
]);
