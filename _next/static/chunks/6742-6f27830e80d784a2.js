(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6742],
  {
    70242: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (i &&
                  !("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const a = o(r(41888));
      t.default = a.default.button`
  ${({ theme: e, large: t }) => a.css`
    background-color: ${e.colors.primary};
    font-size: ${e.fontSize.sm};
    color: ${e.colors.onPrimary};
    padding: ${t ? `${e.size.sm} ${e.size.md}` : `${e.size.xs} ${e.size.md}`};
    border: ${e.border.border};
    border-color: ${e.colors.primary};
    border-radius: ${e.border.borderRadius};
    width: ${t ? "100%" : "fit-content"};
    cursor: pointer;
    white-space: nowrap;
  `}
`;
    },
    79606: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (i &&
                  !("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = o(r(2265)),
        u = r(68096),
        c = a(r(22856)),
        l = a(r(11110)),
        f = a(r(72597)),
        d = a(r(23780));
      t.default = (0, s.memo)(function ({ name: e }) {
        const { formatMessage: t } = (0, u.useIntl)(),
          r = (0, c.default)();
        if ("delete-if-seen" === e) return null;
        const n = r.labelIds[e],
          i = r.contentIds[e];
        return n && i
          ? s.default.createElement(
              s.default.Fragment,
              null,
              s.default.createElement(f.default, null, t(n)),
              s.default.createElement(l.default, { size: "sm", vertical: !0 }),
              s.default.createElement(d.default, { content: t(i) }),
              s.default.createElement(l.default, { size: "xs", vertical: !0 }),
            )
          : null;
      });
    },
    5698: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(r(2265)),
        o = n(r(41888)),
        a = n(r(91330)),
        s = n(r(11110));
      const u = o.default.input`
  position: absolute;
  opacity: 0;
  ${({ disabled: e }) => (e ? "" : "cursor: pointer;")};
  width: 100%;
  height: 100%;
  margin: 0;
`,
        c = o.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,
        l = o.default.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme: e, checked: t }) => (t ? e.colors.primary : e.colors.background)};
  ${({ disabled: e }) => e && "opacity: 50%;"};
  ${({ disabled: e }) => (e ? "" : "cursor: pointer;")};
  border-radius: 3px;
  border: ${({ theme: e }) => e.border.border};
  width: ${({ theme: e }) => e.size.md};
  height: ${({ theme: e }) => e.size.md};
`;
      t.default = function ({
        onChange: e,
        disabled: t,
        checked: r,
        children: n,
      }) {
        return i.default.createElement(
          c,
          null,
          i.default.createElement(
            l,
            { disabled: t, checked: r },
            r && i.default.createElement(a.default, null),
            i.default.createElement(u, {
              type: "checkbox",
              checked: r,
              onClick: t
                ? void 0
                : () => {
                    e(!r);
                  },
              disabled: t,
            }),
          ),
          i.default.createElement(s.default, { size: "xs", vertical: !0 }),
          n,
        );
      };
    },
    91330: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(r(2265)),
        o = n(r(41888));
      t.default = (0, o.default)(function () {
        return i.default.createElement(
          "svg",
          {
            width: "14",
            height: "10",
            viewBox: "0 0 14 10",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
          },
          i.default.createElement("path", {
            d: "M1 5.36364L4.75 9L13 1",
            stroke: "white",
            strokeWidth: "2",
            strokeLinecap: "round",
            strokeLinejoin: "round",
          }),
        );
      })`
  fill: ${({ theme: e }) => e.colors.onPrimary};
  cursor: pointer;
`;
    },
    19735: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(r(2265)),
        o = (0, n(r(41888)).default)(
          ({ size: e = "10", className: t, onClick: r }) =>
            i.default.createElement(
              "svg",
              {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                width: e,
                height: e,
                className: t,
                onClick: r,
              },
              i.default.createElement(
                "g",
                null,
                i.default.createElement("polygon", {
                  points: "17.5 18.5 19.5 17 2 1.5 0.5 3",
                }),
                i.default.createElement("polygon", {
                  points: "19.5 1.5 17.5 0.5 0.5 17 2 18.5",
                }),
              ),
            ),
        )`
  fill: ${({ inverted: e, theme: t }) => (e ? t.colors.background : t.colors.onBackgroundMuted)};

  cursor: pointer;
  transition: fill 0.15s ease;

  &:hover {
    fill: ${({ theme: e, inverted: t }) => (t ? e.colors.background : e.colors.onBackground)};
  }
`;
      t.default = o;
    },
    76436: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (i &&
                  !("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useBanner = void 0);
      const s = r(75571),
        u = o(r(2265)),
        c = r(19361),
        l = a(r(93353)),
        f = a(r(1419)),
        d = a(r(67835)),
        h = a(r(11613)),
        p = {
          expires: c.EXPIRATION_DAYS,
          domain: (0, s.getDomainWithoutSubdomain)(),
          path: "/",
        };
      (t.useBanner = () => {
        const e = (0, s.useSavedTrackingPreference)(),
          t = (0, s.useSavedTrackingPreferenceFromMobileApp)(),
          r = e || t,
          [n, i] = (0, u.useState)(!1),
          [o, a] = (0, u.useState)(!!r),
          { region: c, config: l } = (0, s.useTrackingManager)(),
          f = (0, s.isOptOut)(c),
          d = (0, s.getDefaultTrackingPreference)(c, l),
          h = (0, s.useSetTrackingPreference)(),
          [, m] = (0, s.useCookie)("ADVERTISING_SHARING_ALLOWED"),
          v = (0, u.useCallback)(() => {
            f && !r && h(d), a(!0);
          }, [d, f, r, h]),
          g = (0, u.useCallback)(() => {
            const e = (0, s.getDefaultTrackingPreference)(s.Region.DEFAULT, l);
            h({ region: c, consent: e.consent }), a(!0);
          }, [l, h, c]),
          y = (0, u.useCallback)(() => {
            a(!0), i(!1);
          }, [i, a]),
          b = (0, u.useCallback)(() => {
            i(!0);
          }, [i]),
          _ = Boolean(!e && t);
        return (
          (0, u.useEffect)(() => {
            if (_ && t) {
              (0, s.persistMobileAppPreferences)();
              const e = !1,
                r = Date.now();
              m({ value: e, updatedAt: r }, p), h(t);
            }
          }, [_]),
          {
            isModalOpen: n,
            hasDismissed: o,
            handleBannerDismiss: v,
            handleAcceptAll: g,
            closeModal: y,
            openModal: b,
          }
        );
      }),
        (t.default = (0, u.memo)(function ({
          theme: e,
          link: r,
          useTranslations: n,
          companyName: i,
        }) {
          const {
            hasDismissed: o,
            handleBannerDismiss: a,
            handleAcceptAll: s,
            closeModal: c,
            openModal: p,
            isModalOpen: m,
          } = (0, t.useBanner)();
          return u.default.createElement(
            h.default,
            { theme: e || l.default, useTranslations: n },
            u.default.createElement(d.default, {
              onClose: c,
              isOpen: m,
              link: r,
            }),
            u.default.createElement(f.default, {
              onDismiss: a,
              onAccept: s,
              showPreferencesModal: p,
              hasDismissed: o,
              link: r,
              companyName: i,
            }),
          );
        }));
    },
    1419: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (i &&
                  !("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const s = r(75571),
        u = o(r(2265)),
        c = r(68096),
        l = o(r(41888)),
        f = r(19361),
        d = a(r(87479)),
        h = a(r(22856)),
        p = a(r(70242)),
        m = a(r(19735)),
        v = a(r(19184)),
        g = a(r(11110));
      t.default = (0, u.memo)(function ({
        onDismiss: e,
        onAccept: t,
        showPreferencesModal: r,
        hasDismissed: n,
        link: i,
        companyName: o,
      }) {
        const { log: a } = (0, s.useTrackingManager)(),
          [l, f] = (0, d.default)(!n, 100);
        (0, u.useEffect)(() => {
          n || a("cookie_consent_footer_viewed");
        }, []);
        const y = (0, u.useCallback)(() => {
            a("cookie_consent_footer_dismissed"), f(e);
          }, [f, e, a]),
          T = (0, u.useCallback)(() => {
            f(t);
          }, [f, t]),
          { formatMessage: P } = (0, c.useIntl)(),
          O = (0, h.default)();
        return n
          ? null
          : u.default.createElement(
              k,
              { visible: l },
              u.default.createElement(
                b,
                { onClick: y, "aria-label": P(O.bannerDismissCTA) },
                u.default.createElement(m.default, {
                  inverted: !0,
                  size: "10",
                }),
              ),
              u.default.createElement(
                S,
                null,
                P(O.defaultBannerDescription, {
                  link: (e) =>
                    ((e, t) => [
                      u.default.createElement(
                        v.default,
                        { key: "CookieLink", link: t },
                        e,
                      ),
                    ])(e, i),
                  span: () =>
                    u.default.createElement("span", { key: "span" }, o),
                  button: (e) => [
                    u.default.createElement(
                      C,
                      {
                        key: "ManageCookieSettingsBtn",
                        onClick: r,
                        "aria-haspopup": !0,
                      },
                      e,
                    ),
                  ],
                }),
              ),
              u.default.createElement(
                w,
                null,
                u.default.createElement(
                  E,
                  { onClick: r },
                  P(O.bannerSettingsCTA),
                ),
                u.default.createElement(g.default, {
                  size: "md",
                  vertical: !0,
                }),
                u.default.createElement(
                  p.default,
                  { onClick: T },
                  P(O.bannerMainCTA),
                ),
              ),
              u.default.createElement(
                _,
                { onClick: y, "aria-label": P(O.bannerDismissCTA) },
                u.default.createElement(m.default, {
                  inverted: !0,
                  size: "10",
                }),
              ),
            );
      });
      const y = l.default.button`
  background-color: ${({ theme: e }) => e.colors.onBackgroundMuted};
  border: none;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  opacity: 0.5;
  padding: 0;
  cursor: pointer;
`,
        b = (0, l.default)(y)`
  ${({ theme: e }) => l.css`
    display: none;
    @media (max-width: ${e.breakpoints.tablet}px) {
      display: flex;
      align-self: flex-end;
      margin: ${e.size.xs} 0;
    }
  `}
`,
        _ = (0, l.default)(y)`
  display: flex;
  @media (max-width: ${({ theme: e }) => e.breakpoints.tablet}px) {
    display: none;
  }
`,
        w = l.default.div`
  ${({ theme: e }) => l.css`
    display: flex;
    align-items: center;
    margin-right: ${e.size.lg};
    @media (max-width: ${e.breakpoints.tablet}px) {
      margin-right: 0;
    }
  `}
`,
        E = l.default.button`
  color: ${({ theme: e }) => e.colors.primary};
  font-size: ${({ theme: e }) => e.fontSize.sm};
  background-color: transparent;
  border: none;
  white-space: nowrap;
  cursor: pointer;
`,
        S = l.default.div`
  ${({ theme: e }) => l.css`
    font-size: ${e.fontSize.sm};
    line-height: 23px;
    margin-right: ${e.size.lg};

    @media (max-width: ${e.breakpoints.tablet}px) {
      width: auto;
      margin-right: 0;
      margin-bottom: ${e.size.md};
    }
  `}
`,
        k = l.default.div`
  ${({ theme: e, visible: t }) => l.css`
    display: flex;
    align-items: center;
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: ${e.colors.backgroundMuted};
    z-index: ${e.zIndex.overlay};
    color: ${e.colors.onBackgroundMuted};
    padding: ${`${e.size.md} 60px`};
    justify-content: space-between;
    ${t ? "bottom: 0" : "bottom: -140px"};
    transition: bottom ${f.TRANSITION_TIME_MS}ms;
    @media (max-width: ${e.breakpoints.tablet}px) {
      flex-direction: column;
      padding: ${`0 ${e.size.md} ${e.size.md}`};
      ${t ? "bottom: 0" : "bottom: -200px"};
    }
  `}
`,
        C = l.default.button`
  background: transparent;
  border: none;
  white-space: nowrap;
  cursor: pointer;
  padding: 0;
  text-decoration: underline;
  color: ${({ theme: e }) => e.colors.onBackgroundMuted};
`;
    },
    67835: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (i &&
                  !("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          },
        a =
          (this && this.__rest) ||
          function (e, t) {
            var r = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                t.indexOf(n) < 0 &&
                (r[n] = e[n]);
            if (
              null != e &&
              "function" === typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                t.indexOf(n[i]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                  (r[n[i]] = e[n[i]]);
            }
            return r;
          },
        s =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.CookiePreferencesModalWithProviders = void 0);
      const u = r(75571),
        c = o(r(2265)),
        l = r(68096),
        f = s(r(41888)),
        d = s(r(22856)),
        h = s(r(93353)),
        p = s(r(70242)),
        m = s(r(79606)),
        v = s(r(5698)),
        g = s(r(84695)),
        y = s(r(19184)),
        b = s(r(11110)),
        _ = s(r(72597)),
        w = s(r(11613));
      function E(e, t) {
        switch (t.value) {
          case !0:
            return e.consent.includes(t.name)
              ? e
              : Object.assign(Object.assign({}, e), {
                  consent: [...e.consent, t.name],
                });
          case !1:
            return Object.assign(Object.assign({}, e), {
              consent: e.consent.filter((e) => e !== t.name),
            });
          default:
            return e;
        }
      }
      const S = (e, t) => [
        c.default.createElement(
          y.default,
          { key: "CookieLink", color: "primary", link: t },
          e,
        ),
      ];
      function k({ onClose: e, isOpen: t, link: r }) {
        const { region: n, log: i } = (0, u.useTrackingManager)();
        (0, c.useEffect)(() => {
          t && i("cookie_consent_manager_viewed");
        }, [t]);
        const { formatMessage: o } = (0, l.useIntl)(),
          a = (0, d.default)(),
          s = (0, u.useTrackingPreference)(),
          f = s.consent,
          [h, y] = (0, c.useReducer)(E, { consent: f, region: n }),
          w = (0, u.useRequiredCategories)(),
          k = (0, u.useSetTrackingPreference)(),
          A = (0, c.useCallback)((e) => {
            const t = {};
            return (
              u.TRACKER_CATEGORIES.forEach((r) => {
                t[r] = e.consent.includes(r) ? 1 : 0;
              }),
              t
            );
          }, []),
          I = (0, c.useCallback)(() => {
            k(h), i("cookie_consent_manager_saved_tapped", A(h)), e();
          }, [k, h, i, e, A]),
          x = (0, c.useCallback)(() => {
            k(s), i("cookie_consent_manager_dismissed", A(s)), e();
          }, [k, s, i, e, A]);
        return c.default.createElement(
          g.default,
          { close: x, isOpen: t, title: o(a.modalTitle) },
          c.default.createElement(
            O,
            null,
            c.default.createElement(
              _.default,
              null,
              o(a.modalDescription, { link: (e) => S(e, r) }),
            ),
            c.default.createElement(b.default, { size: "md" }),
            c.default.createElement(
              T,
              null,
              u.TRACKER_CATEGORIES.map((e) =>
                c.default.createElement(
                  C,
                  { key: e },
                  c.default.createElement(
                    v.default,
                    {
                      disabled: w.includes(e),
                      checked: h.consent.includes(e),
                      onChange: (t) => y({ name: e, value: t }),
                    },
                    c.default.createElement(m.default, { name: e }),
                  ),
                ),
              ),
            ),
            c.default.createElement(b.default, { size: "lg" }),
            c.default.createElement(
              P,
              null,
              c.default.createElement(
                p.default,
                { onClick: I, large: !0 },
                o(a.saveCTA),
              ),
            ),
          ),
        );
      }
      t.CookiePreferencesModalWithProviders = function (e) {
        var { theme: t, useTranslations: r } = e,
          n = a(e, ["theme", "useTranslations"]);
        return c.default.createElement(
          w.default,
          { theme: t || h.default, useTranslations: r },
          c.default.createElement(k, Object.assign({}, n)),
        );
      };
      const C = f.default.div`
  width: 50%;
  margin-bottom: ${({ theme: e }) => e.size.md};
  @media (max-width: ${({ theme: e }) => e.breakpoints.phone}px) {
    width: 100%;
  }
`,
        T = f.default.div`
  display: flex;
  flex-wrap: wrap;
`,
        P = f.default.div`
  display: flex;
  justify-content: center;
`,
        O = f.default.div`
  display: flex;
  flex-direction: column;
  max-width: 560px;
`;
      t.default = (0, c.memo)(k);
    },
    13206: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(r(2265)),
        o = n(r(41888));
      t.default = (0, o.default)(function ({ className: e }) {
        return i.default.createElement(
          "svg",
          {
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: e,
          },
          i.default.createElement("path", {
            d: "M8 0C3.59 0 0 3.59 0 8C0 12.41 3.59 16 8 16C12.41 16 16 12.41 16 8C16 3.59 12.41 0 8 0ZM8 15C4.14 15 1 11.86 1 8C1 4.14 4.14 1 8 1C11.86 1 15 4.14 15 8C15 11.86 11.86 15 8 15Z",
            fill: "#718598",
          }),
          i.default.createElement("path", {
            d: "M8.5 7.5H7.5V12H8.5V7.5Z",
            fill: "#718598",
          }),
          i.default.createElement("path", {
            d: "M8.5 4H7.5V6H8.5V4Z",
            fill: "#718598",
          }),
        );
      })`
  cursor: pointer;
`;
    },
    84695: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (i &&
                  !("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ModalHeader = void 0);
      const s = o(r(2265)),
        u = a(r(54887)),
        c = a(r(41888)),
        l = r(19361),
        f = a(r(87479)),
        d = a(r(19735));
      const h = c.default.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme: e }) => e.colors.overlay};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  overflow: scroll;
  position: fixed;
  top: 0;
  left: 0;
  opacity: ${({ visible: e }) => (e ? "1" : "0")};
  transition: opacity ${l.TRANSITION_TIME_MS}ms;
  z-index: ${({ theme: e }) => e.zIndex.overlay};
`;
      function p({ title: e, close: t }) {
        return s.default.createElement(
          v,
          null,
          e &&
            s.default.createElement(
              g,
              { "data-synthetic-id": "modal_cookies" },
              e,
            ),
          t && s.default.createElement(d.default, { onClick: t }),
        );
      }
      t.ModalHeader = p;
      const m = c.default.div`
  display: flex;
  padding: ${({ theme: e }) => `${e.size.lg} ${e.size.md}`};
`,
        v = c.default.div`
  display: flex;
  position: relative;
  min-height: 64px;
  padding: ${(e) => e.theme.size.md};
  border-bottom: ${(e) => e.theme.border.border};
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
`,
        g = c.default.span`
  position: relative;
  font-size: 18px;
  font-weight: 500;
  color: ${(e) => e.theme.colors.onBackground};
`,
        y = c.default.div`
  height: auto;
  margin: 100px 0 24px;
  min-width: 480px;
  border: none;
  border-radius: ${({ theme: e }) => e.border.borderRadius};
  background-color: ${({ theme: e }) => e.colors.background};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  overflow: visible;

  @media (max-width: ${({ theme: e }) => e.breakpoints.phone}px) {
    min-width: auto;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    border-radius: 0;
    overflow: scroll;
    -webkit-overflow-scrolling: touch;
  }
`;
      t.default = function (e) {
        const { children: t, close: r, title: n, isOpen: i } = e,
          o = (0, s.useRef)(null),
          a = (0, s.useRef)(null);
        (0, s.useEffect)(
          () => (
            "undefined" !== typeof document &&
              ((o.current = document.createElement("div")),
              document.body && document.body.appendChild(o.current)),
            () => {
              "undefined" !== typeof document &&
                document.body &&
                document.body.removeChild(o.current);
            }
          ),
          [],
        );
        const [c, l] = (0, f.default)(i),
          d = (0, s.useCallback)(() => {
            l(r);
          }, [l, r]),
          v = (0, s.useCallback)(
            (e) => {
              var t;
              (null === (t = a.current) || void 0 === t
                ? void 0
                : t.contains(e.target)) || d();
            },
            [d],
          );
        return o.current && i
          ? u.default.createPortal(
              s.default.createElement(
                h,
                { onClick: v, visible: c },
                s.default.createElement(
                  y,
                  { ref: a },
                  s.default.createElement(p, { close: d, title: n }),
                  s.default.createElement(m, null, t),
                ),
              ),
              o.current,
            )
          : null;
      };
    },
    709: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.palette = void 0),
        (t.palette = {
          foreground: "var(--foreground)",
          foregroundMuted: "var(--foreground-muted)",
          background: "var(--background)",
          backgroundAlternate: "var(--background-alternate)",
          backgroundOverlay: "var(--background-overlay)",
          line: "var(--line)",
          lineHeavy: "var(--line-heavy)",
          primary: "var(--primary)",
          primaryWash: "var(--primary-wash)",
          primaryForeground: "var(--primary-foreground)",
          negative: "var(--negative)",
          negativeForeground: "var(--negative-foreground)",
          positive: "var(--positive)",
          positiveForeground: "var(--positive-foreground)",
          secondary: "var(--secondary)",
          secondaryForeground: "var(--secondary-foreground)",
          transparent: "var(--transparent)",
        });
    },
    19184: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(r(2265)),
        o = n(r(41888)),
        a = r(709);
      const s = o.default.a`
  text-decoration: underline;
  color: ${({ theme: e, color: t }) => ("foregroundMuted" === t ? a.palette.foregroundMuted : "primary" === t ? e.colors.primary : e.colors.onBackgroundMuted)};
  &:visited {
    color: ${({ theme: e, color: t }) => ("foregroundMuted" === t ? a.palette.foregroundMuted : "primary" === t ? e.colors.primary : e.colors.onBackgroundMuted)};
  }
`;
      t.default = function ({ children: e, color: t = "light", link: r }) {
        return i.default.createElement(
          s,
          { color: t, href: r, target: "_blank", rel: "noopener" },
          e,
        );
      };
    },
    11110: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(r(41888)).default.div`
  ${({ theme: e, size: t, vertical: r }) => (r ? `\n        width: ${e.size[t]};\n        height: 100%;\n        ` : `\n        height: ${e.size[t]};\n        width: 100%;\n      `)}
`;
      t.default = i;
    },
    72597: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(r(41888)).default.span`
  font-size: ${({ theme: e }) => e.size.sm};
  color: ${({ theme: e }) => e.colors.onBackground};
  font-weight: ${({ theme: e, bold: t }) => (t ? e.fontWeight.bold : e.fontWeight.regular)};
  line-height: 160%;
`;
      t.default = i;
    },
    23780: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (i &&
                  !("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useTooltip = void 0);
      const s = o(r(2265)),
        u = a(r(41888)),
        c = a(r(13206)),
        l = o(r(58745));
      t.useTooltip = () => {
        const [e, t] = (0, s.useState)(!1),
          r = (0, s.useRef)(null),
          [n, i] = (0, s.useState)();
        return (
          (0, s.useEffect)(() => {
            if (!r.current) return;
            if (n || !e) return;
            const t = r.current.getBoundingClientRect(),
              o = { left: -t.width / 2, top: 0 };
            window.innerWidth - t.right - o.left < 0 &&
              (o.left = Math.round(window.innerWidth - t.right)),
              t.left + o.left < 0 && (o.left = Math.round(Math.abs(t.left))),
              window.innerHeight - t.bottom < 0 &&
                (o.top = Math.round(window.innerHeight - t.bottom)),
              t.top < 0 && (o.top = Math.round(Math.abs(t.top))),
              i(o);
          }, [r, e]),
          {
            shouldRender: e,
            setShouldRender: t,
            tooltipRef: r,
            offset: n,
            isVisible: !(!e || !n),
          }
        );
      };
      const f = u.default.div`
  /*
  * Invisible extra padding to prevent losing focus as
  * the mouse moves to the tooltip
  */
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: ${l.ARROW_SIZE}px;
    height: ${l.ARROW_DISTANCE}px;
    bottom: ${l.ARROW_DISTANCE}px;
  }
`,
        d = u.default.div`
  position: relative;
  opacity: ${({ visible: e }) => (e ? "1" : "0")};
  transition: opacity 100ms;
`;
      t.default = (0, s.memo)(function ({ content: e }) {
        var r, n;
        const {
          shouldRender: i,
          setShouldRender: o,
          offset: a,
          tooltipRef: u,
          isVisible: h,
        } = (0, t.useTooltip)();
        return s.default.createElement(
          f,
          { onMouseEnter: () => o(!0), onMouseLeave: () => o(!1) },
          i &&
            s.default.createElement(
              d,
              {
                key: "tooltip",
                style: {
                  left:
                    null !==
                      (r = null === a || void 0 === a ? void 0 : a.left) &&
                    void 0 !== r
                      ? r
                      : 0,
                  top:
                    null !==
                      (n = null === a || void 0 === a ? void 0 : a.top) &&
                    void 0 !== n
                      ? n
                      : 0,
                },
                visible: h,
              },
              s.default.createElement(l.default, { content: e, ref: u }),
            ),
          s.default.createElement(c.default, null),
        );
      });
    },
    58745: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ARROW_SIZE = t.ARROW_DISTANCE = void 0);
      const i = r(2265),
        o = n(r(2265)),
        a = n(r(41888)),
        s = (0, i.forwardRef)(function ({ content: e }, t) {
          return o.default.createElement(
            u,
            null,
            o.default.createElement(
              c,
              { ref: t },
              o.default.createElement(f, null),
              o.default.createElement(l, null, e),
            ),
          );
        });
      (t.ARROW_DISTANCE = 18), (t.ARROW_SIZE = 16);
      const u = a.default.div`
  position: relative;
`,
        c = a.default.div`
  position: absolute;
  bottom: ${t.ARROW_DISTANCE}px;
  max-width: 330px;
  min-height: 90px;
  background-color: ${({ theme: e }) => e.colors.onBackground};
  border-radius: ${({ theme: e }) => e.border.borderRadius};
  border: 1px solid ${({ theme: e }) => e.colors.onBackground};
  padding: 12px;
  width: max-content;
`,
        l = a.default.span`
  font-size: 12px;
  line-height: 14px;
  color: ${({ theme: e }) => e.colors.background};
`,
        f = a.default.div`
  position: absolute;
  bottom: -${t.ARROW_DISTANCE - 1}px;
  left: calc(50% - ${t.ARROW_SIZE / 2}px);
  width: 0;
  height: 0;
  border-left: ${t.ARROW_SIZE}px solid transparent;
  border-right: ${t.ARROW_SIZE}px solid transparent;
  border-top: ${t.ARROW_DISTANCE}px solid ${({ theme: e }) => e.colors.onBackground};
`;
      t.default = s;
    },
    11613: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(75571),
        o = n(r(2265)),
        a = r(68096),
        s = r(41888);
      t.default = function ({ children: e, theme: t, useTranslations: r }) {
        const { locale: n } = (0, i.useTrackingManager)();
        let u = {};
        if (r) {
          const [e, t] = r();
          if (!e) return null;
          u = t;
        }
        return o.default.createElement(
          a.IntlProvider,
          { messages: u || {}, locale: n },
          o.default.createElement(s.ThemeProvider, { theme: t }, e),
        );
      };
    },
    19361: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.ADVERTISING_SHARING_ALLOWED =
          t.EXPIRATION_DAYS =
          t.TRANSITION_TIME_MS =
            void 0),
        (t.TRANSITION_TIME_MS = 100);
      (t.EXPIRATION_DAYS = 365),
        (t.ADVERTISING_SHARING_ALLOWED = "advertising_sharing_allowed");
    },
    81245: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(75571);
      t.default = function () {
        return !(0, n.useSavedTrackingPreference)();
      };
    },
    87479: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__awaiter) ||
        function (e, t, r, n) {
          return new (r || (r = Promise))(function (i, o) {
            function a(e) {
              try {
                u(n.next(e));
              } catch (t) {
                o(t);
              }
            }
            function s(e) {
              try {
                u(n.throw(e));
              } catch (t) {
                o(t);
              }
            }
            function u(e) {
              var t;
              e.done
                ? i(e.value)
                : ((t = e.value),
                  t instanceof r
                    ? t
                    : new r(function (e) {
                        e(t);
                      })).then(a, s);
            }
            u((n = n.apply(e, t || [])).next());
          });
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2265),
        o = r(19361);
      t.default = (e, t = o.TRANSITION_TIME_MS) => {
        const [r, a] = (0, i.useState)(!e);
        (0, i.useEffect)(() => {
          const r = setTimeout(() => {
            a(e);
          }, t);
          return () => clearTimeout(r);
        }, [e, t]);
        return [
          r,
          (0, i.useCallback)(
            (e) =>
              n(void 0, void 0, void 0, function* () {
                a(!1), e && (yield setTimeout(e, t));
              }),
            [t],
          ),
        ];
      };
    },
    22856: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(75571),
        o = n(r(99075));
      t.default = () => {
        const { region: e } = (0, i.useTrackingManager)();
        return e === i.Region.EU
          ? o.default.euMessages
          : o.default.defaultMessages;
      };
    },
    51101: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useIsBannerVisible =
          t.CookiePreferencesModal =
          t.CookieBanner =
            void 0);
      var i = r(76436);
      Object.defineProperty(t, "CookieBanner", {
        enumerable: !0,
        get: function () {
          return n(i).default;
        },
      });
      var o = r(67835);
      Object.defineProperty(t, "CookiePreferencesModal", {
        enumerable: !0,
        get: function () {
          return o.CookiePreferencesModalWithProviders;
        },
      });
      var a = r(81245);
      Object.defineProperty(t, "useIsBannerVisible", {
        enumerable: !0,
        get: function () {
          return n(a).default;
        },
      });
    },
    93353: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = {
          colors: {
            primary: "#1652F0",
            positive: "#05B169",
            negative: "#DF5F67",
            warning: "#F4C622",
            background: "#FFFFFF",
            backgroundMuted: "#FAFBFC",
            onBackground: "#050F1A",
            onBackgroundMuted: "#708599",
            onPrimary: "#FFFFFF",
            overlay: "rgba(17,52,83,0.6)",
          },
          border: { border: "1px solid #D8D8D8", borderRadius: "4px" },
          fontSize: { sm: "14px", md: "16px" },
          fontWeight: { regular: "400", bold: "500" },
          size: { xs: "8px", sm: "16px", md: "24px", lg: "32px" },
          breakpoints: { phone: 560, desktop: 992, tablet: 768 },
          zIndex: {
            hidden: -1,
            normal: 0,
            elevated: 1,
            high: 2,
            extraHigh: 25,
            backdrop: 999,
            overlay: 1e3,
            top: 1001,
          },
        });
    },
    99075: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = "CookieManager",
        i = (0, r(68096).defineMessages)({
          defaultBannerDescription: {
            id: `${n}.defaultBannerDescription`,
            defaultMessage:
              "We use cookies and similar technologies on our websites to enhance and tailor your experience, analyze our traffic, and for security and marketing. You can choose not to allow some type of cookies by clicking <button>Manage Settings</button>. For more information see our <link>Cookie Policy</link>.",
            description:
              "Cookie banner for managing cooking consent preferences",
          },
          euBannerDescription: {
            id: `${n}.euBannerDescription`,
            defaultMessage:
              'We use cookies and similar technologies on our websites to enhance and tailor your experience, analyze our traffic, and for security and marketing. Select "Accept All" to allow <span> companyName </span> and its trusted affiliates and partners to use cookies and similar technologies or click <button>Manage Settings</button> to individually select which cookies you allow. You can withdraw your consent at any time. For more information see our <link>Cookie Policy</link>.',
            description:
              "Cookie banner for managing cooking consent preferences",
          },
          bannerSettingsCTA: {
            id: `${n}.bannerSettingsCTA`,
            defaultMessage: "Manage settings",
            description: "Button for customizing cookie consent preferences",
          },
          bannerCloseCTA: {
            id: `${n}.bannerCloseCTA`,
            defaultMessage: "Close",
            description: "Button for refusing cookie consent preferences",
          },
          bannerDismissCTA: {
            id: `${n}.bannerDismissCTA`,
            defaultMessage: "Dismiss",
            description: "Button for accepting cookie consent preferences",
          },
          bannerAcceptCTA: {
            id: `${n}.bannerAcceptCTA`,
            defaultMessage: "Accept all",
            description: "Button for accepting cookie consent preferences",
          },
          modalTitle: {
            id: `${n}.modalTitle`,
            defaultMessage: "Cookie preferences",
            description: "Modal title for user's cookie preferences",
          },
          modalDescription: {
            id: `${n}.modalDescription`,
            defaultMessage:
              "When you visit our website, we may store cookies on your browser for your security and to help us better understand user behavior and inform us about which parts of our website you have visited. The information does not usually directly identify you, but it can give you a safe and more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Blocking some types of cookies may impact your experience on the site. <link>Cookie Policy</link>",
            description: "Modal description for user's cookie preferences",
          },
          manageCookies: {
            id: `${n}.manageCookies`,
            defaultMessage: "Manage Cookies:",
            description: "Modal title for user's cookie preferences",
          },
          necessaryCookies: {
            id: `${n}.necessaryCookies`,
            defaultMessage: "Strictly Necessary Cookies",
            description:
              "Cookies that are necessary for the site to the function",
          },
          necessaryCookiesDescription: {
            id: `${n}.necessaryCookiesDescription`,
            defaultMessage:
              "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. These also include cookies we may rely on for fraud prevention. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work.",
            description:
              "Cookies that are necessary for the site to the function",
          },
          performanceCookies: {
            id: `${n}.performanceCookies`,
            defaultMessage: "Performance Cookies",
            description: "Cookies that impact site performance",
          },
          performanceCookiesDescription: {
            id: `${n}.performanceCookiesDescription`,
            defaultMessage:
              "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.",
            description: "Cookies that impact site performance",
          },
          functionalCookies: {
            id: `${n}.functionalCookies`,
            defaultMessage: "Functional Cookies",
            description: "Cookies to improve the functionality of the site",
          },
          functionalCookiesDescription: {
            id: `${n}.functionalCookiesDescription`,
            defaultMessage:
              "These cookies enable us to remember choices you have made in the past in order to provide enhanced functionality and personalisation (e.g. what language you prefer). If you do not allow these cookies then some or all of these services may not function properly.",
            description: "Cookies to improve the functionality of the site",
          },
          targetingCookies: {
            id: `${n}.targetingCookies`,
            defaultMessage: "Targeting Cookies",
            description: "Cookies used for advertising and ad targeting",
          },
          targetingCookiesDescription: {
            id: `${n}.targetingCookiesDescription`,
            defaultMessage:
              "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant ads on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.",
            description: "Cookies used for advertising and ad targeting",
          },
          saveCTA: {
            id: `${n}.saveCTA`,
            defaultMessage: "Save",
            description: "CTA to save cookie preferences",
          },
        }),
        o = {
          labelIds: {
            necessary: i.necessaryCookies,
            performance: i.performanceCookies,
            functional: i.functionalCookies,
            targeting: i.targetingCookies,
          },
          contentIds: {
            necessary: i.necessaryCookiesDescription,
            performance: i.performanceCookiesDescription,
            functional: i.functionalCookiesDescription,
            targeting: i.targetingCookiesDescription,
          },
        },
        a = Object.assign(
          {
            defaultBannerDescription: i.defaultBannerDescription,
            bannerSettingsCTA: i.bannerSettingsCTA,
            bannerMainCTA: i.bannerAcceptCTA,
            bannerDismissCTA: i.bannerDismissCTA,
            modalTitle: i.modalTitle,
            modalDescription: i.modalDescription,
            manageCookies: i.manageCookies,
            saveCTA: i.saveCTA,
            bannerCloseCTA: i.bannerCloseCTA,
          },
          o,
        ),
        s = Object.assign(
          {
            defaultBannerDescription: i.euBannerDescription,
            bannerSettingsCTA: i.bannerSettingsCTA,
            bannerMainCTA: i.bannerAcceptCTA,
            bannerDismissCTA: i.bannerDismissCTA,
            modalTitle: i.modalTitle,
            modalDescription: i.modalDescription,
            manageCookies: i.manageCookies,
            saveCTA: i.saveCTA,
            bannerCloseCTA: i.bannerCloseCTA,
          },
          o,
        );
      t.default = { defaultMessages: a, euMessages: s };
    },
    30166: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return i.a;
        },
      });
      var n = r(55775),
        i = r.n(n);
    },
    99376: function (e, t, r) {
      "use strict";
      var n = r(35475);
      r.o(n, "redirect") &&
        r.d(t, {
          redirect: function () {
            return n.redirect;
          },
        }),
        r.o(n, "useParams") &&
          r.d(t, {
            useParams: function () {
              return n.useParams;
            },
          }),
        r.o(n, "usePathname") &&
          r.d(t, {
            usePathname: function () {
              return n.usePathname;
            },
          }),
        r.o(n, "useRouter") &&
          r.d(t, {
            useRouter: function () {
              return n.useRouter;
            },
          }),
        r.o(n, "useSearchParams") &&
          r.d(t, {
            useSearchParams: function () {
              return n.useSearchParams;
            },
          });
    },
    48667: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return i.a;
        },
      });
      var n = r(88003),
        i = r.n(n);
    },
    8221: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          DOMAttributeNames: function () {
            return r;
          },
          default: function () {
            return a;
          },
          isEqualNode: function () {
            return i;
          },
        });
      const r = {
        acceptCharset: "accept-charset",
        className: "class",
        htmlFor: "for",
        httpEquiv: "http-equiv",
        noModule: "noModule",
      };
      function n(e) {
        let { type: t, props: n } = e;
        const i = document.createElement(t);
        for (const s in n) {
          if (!n.hasOwnProperty(s)) continue;
          if ("children" === s || "dangerouslySetInnerHTML" === s) continue;
          if (void 0 === n[s]) continue;
          const e = r[s] || s.toLowerCase();
          "script" !== t || ("async" !== e && "defer" !== e && "noModule" !== e)
            ? i.setAttribute(e, n[s])
            : (i[e] = !!n[s]);
        }
        const { children: o, dangerouslySetInnerHTML: a } = n;
        return (
          a
            ? (i.innerHTML = a.__html || "")
            : o &&
              (i.textContent =
                "string" === typeof o ? o : Array.isArray(o) ? o.join("") : ""),
          i
        );
      }
      function i(e, t) {
        if (e instanceof HTMLElement && t instanceof HTMLElement) {
          const r = t.getAttribute("nonce");
          if (r && !e.getAttribute("nonce")) {
            const n = t.cloneNode(!0);
            return (
              n.setAttribute("nonce", ""),
              (n.nonce = r),
              r === e.nonce && e.isEqualNode(n)
            );
          }
        }
        return e.isEqualNode(t);
      }
      let o;
      function a() {
        return {
          mountedInstances: new Set(),
          updateHead: (e) => {
            const t = {};
            e.forEach((e) => {
              if ("link" === e.type && e.props["data-optimized-fonts"]) {
                if (
                  document.querySelector(
                    'style[data-href="' + e.props["data-href"] + '"]',
                  )
                )
                  return;
                (e.props.href = e.props["data-href"]),
                  (e.props["data-href"] = void 0);
              }
              const r = t[e.type] || [];
              r.push(e), (t[e.type] = r);
            });
            const r = t.title ? t.title[0] : null;
            let n = "";
            if (r) {
              const { children: e } = r.props;
              n =
                "string" === typeof e ? e : Array.isArray(e) ? e.join("") : "";
            }
            n !== document.title && (document.title = n),
              ["meta", "base", "link", "style", "script"].forEach((e) => {
                o(e, t[e] || []);
              });
          },
        };
      }
      (o = (e, t) => {
        const r = document.getElementsByTagName("head")[0],
          o = r.querySelector("meta[name=next-head-count]");
        const a = Number(o.content),
          s = [];
        for (
          let n = 0, i = o.previousElementSibling;
          n < a;
          n++, i = (null == i ? void 0 : i.previousElementSibling) || null
        ) {
          var u;
          (null == i || null == (u = i.tagName) ? void 0 : u.toLowerCase()) ===
            e && s.push(i);
        }
        const c = t.map(n).filter((e) => {
          for (let t = 0, r = s.length; t < r; t++) {
            if (i(s[t], e)) return s.splice(t, 1), !1;
          }
          return !0;
        });
        s.forEach((e) => {
          var t;
          return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
        }),
          c.forEach((e) => r.insertBefore(e, o)),
          (o.content = (a - s.length + c.length).toString());
      }),
        ("function" === typeof t.default ||
          ("object" === typeof t.default && null !== t.default)) &&
          "undefined" === typeof t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    88003: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(60221),
        i = r(88810),
        o = r(67085);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return w;
          },
          handleClientScriptLoad: function () {
            return y;
          },
          initScriptLoader: function () {
            return b;
          },
        });
      const a = r(63862),
        s = r(91897),
        u = r(57437),
        c = a._(r(54887)),
        l = s._(r(2265)),
        f = r(48701),
        d = r(8221),
        h = r(63515),
        p = new Map(),
        m = new Set(),
        v = [
          "onLoad",
          "onReady",
          "dangerouslySetInnerHTML",
          "children",
          "onError",
          "strategy",
          "stylesheets",
        ],
        g = (e) => {
          const {
              src: t,
              id: r,
              onLoad: n = () => {},
              onReady: i = null,
              dangerouslySetInnerHTML: o,
              children: a = "",
              strategy: s = "afterInteractive",
              onError: u,
              stylesheets: l,
            } = e,
            f = r || t;
          if (f && m.has(f)) return;
          if (p.has(t)) return m.add(f), void p.get(t).then(n, u);
          const h = () => {
              i && i(), m.add(f);
            },
            g = document.createElement("script"),
            y = new Promise((e, t) => {
              g.addEventListener("load", function (t) {
                e(), n && n.call(this, t), h();
              }),
                g.addEventListener("error", function (e) {
                  t(e);
                });
            }).catch(function (e) {
              u && u(e);
            });
          o
            ? ((g.innerHTML = o.__html || ""), h())
            : a
              ? ((g.textContent =
                  "string" === typeof a
                    ? a
                    : Array.isArray(a)
                      ? a.join("")
                      : ""),
                h())
              : t && ((g.src = t), p.set(t, y));
          for (const [c, p] of Object.entries(e)) {
            if (void 0 === p || v.includes(c)) continue;
            const e = d.DOMAttributeNames[c] || c.toLowerCase();
            g.setAttribute(e, p);
          }
          "worker" === s && g.setAttribute("type", "text/partytown"),
            g.setAttribute("data-nscript", s),
            l &&
              ((e) => {
                if (c.default.preinit)
                  e.forEach((e) => {
                    c.default.preinit(e, { as: "style" });
                  });
                else if ("undefined" !== typeof window) {
                  let t = document.head;
                  e.forEach((e) => {
                    let r = document.createElement("link");
                    (r.type = "text/css"),
                      (r.rel = "stylesheet"),
                      (r.href = e),
                      t.appendChild(r);
                  });
                }
              })(l),
            document.body.appendChild(g);
        };
      function y(e) {
        const { strategy: t = "afterInteractive" } = e;
        "lazyOnload" === t
          ? window.addEventListener("load", () => {
              (0, h.requestIdleCallback)(() => g(e));
            })
          : g(e);
      }
      function b(e) {
        e.forEach(y),
          [
            ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
            ...document.querySelectorAll('[data-nscript="beforePageRender"]'),
          ].forEach((e) => {
            const t = e.id || e.getAttribute("src");
            m.add(t);
          });
      }
      function _(e) {
        const {
            id: t,
            src: r = "",
            onLoad: a = () => {},
            onReady: s = null,
            strategy: d = "afterInteractive",
            onError: p,
            stylesheets: v,
          } = e,
          y = o._(e, [
            "id",
            "src",
            "onLoad",
            "onReady",
            "strategy",
            "onError",
            "stylesheets",
          ]),
          {
            updateScripts: b,
            scripts: _,
            getIsSsr: w,
            appDir: E,
            nonce: S,
          } = (0, l.useContext)(f.HeadManagerContext),
          k = (0, l.useRef)(!1);
        (0, l.useEffect)(() => {
          const e = t || r;
          k.current || (s && e && m.has(e) && s(), (k.current = !0));
        }, [s, t, r]);
        const C = (0, l.useRef)(!1);
        if (
          ((0, l.useEffect)(() => {
            C.current ||
              ("afterInteractive" === d
                ? g(e)
                : "lazyOnload" === d &&
                  (function (e) {
                    "complete" === document.readyState
                      ? (0, h.requestIdleCallback)(() => g(e))
                      : window.addEventListener("load", () => {
                          (0, h.requestIdleCallback)(() => g(e));
                        });
                  })(e),
              (C.current = !0));
          }, [e, d]),
          ("beforeInteractive" !== d && "worker" !== d) ||
            (b
              ? ((_[d] = (_[d] || []).concat([
                  n._({ id: t, src: r, onLoad: a, onReady: s, onError: p }, y),
                ])),
                b(_))
              : w && w()
                ? m.add(t || r)
                : w && !w() && g(e)),
          E)
        ) {
          if (
            (v &&
              v.forEach((e) => {
                c.default.preinit(e, { as: "style" });
              }),
            "beforeInteractive" === d)
          )
            return r
              ? (c.default.preload(
                  r,
                  y.integrity
                    ? {
                        as: "script",
                        integrity: y.integrity,
                        nonce: S,
                        crossOrigin: y.crossOrigin,
                      }
                    : { as: "script", nonce: S, crossOrigin: y.crossOrigin },
                ),
                (0, u.jsx)("script", {
                  nonce: S,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([r, i._(n._({}, y), { id: t })]) +
                      ")",
                  },
                }))
              : (y.dangerouslySetInnerHTML &&
                  ((y.children = y.dangerouslySetInnerHTML.__html),
                  delete y.dangerouslySetInnerHTML),
                (0, u.jsx)("script", {
                  nonce: S,
                  dangerouslySetInnerHTML: {
                    __html:
                      "(self.__next_s=self.__next_s||[]).push(" +
                      JSON.stringify([0, i._(n._({}, y), { id: t })]) +
                      ")",
                  },
                }));
          "afterInteractive" === d &&
            r &&
            c.default.preload(
              r,
              y.integrity
                ? {
                    as: "script",
                    integrity: y.integrity,
                    nonce: S,
                    crossOrigin: y.crossOrigin,
                  }
                : { as: "script", nonce: S, crossOrigin: y.crossOrigin },
            );
        }
        return null;
      }
      Object.defineProperty(_, "__nextScript", { value: !0 });
      const w = _;
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    55775: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(60221),
        i = r(88810);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      const o = r(63862),
        a = (r(57437), r(2265), o._(r(15602)));
      function s(e, t) {
        var r;
        let o = {
          loading: (e) => {
            let { error: t, isLoading: r, pastDelay: n } = e;
            return null;
          },
        };
        "function" === typeof e && (o.loader = e);
        const s = n._({}, o, t);
        return (0, a.default)(
          i._(n._({}, s), {
            modules: null == (r = s.loadableGenerated) ? void 0 : r.modules,
          }),
        );
      }
      ("function" === typeof t.default ||
        ("object" === typeof t.default && null !== t.default)) &&
        "undefined" === typeof t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    81523: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "BailoutToCSR", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      const n = r(18993);
      function i(e) {
        let { reason: t, children: r } = e;
        if ("undefined" === typeof window) throw new n.BailoutToCSRError(t);
        return r;
      }
    },
    15602: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(60221);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      const i = r(57437),
        o = r(2265),
        a = r(81523),
        s = r(70049);
      function u(e) {
        return { default: e && "default" in e ? e.default : e };
      }
      const c = {
        loader: () => Promise.resolve(u(() => null)),
        loading: null,
        ssr: !0,
      };
      const l = function (e) {
        const t = n._({}, c, e),
          r = (0, o.lazy)(() => t.loader().then(u)),
          l = t.loading;
        function f(e) {
          const u = l
              ? (0, i.jsx)(l, { isLoading: !0, pastDelay: !0, error: null })
              : null,
            c = t.ssr
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    "undefined" === typeof window
                      ? (0, i.jsx)(s.PreloadCss, { moduleIds: t.modules })
                      : null,
                    (0, i.jsx)(r, n._({}, e)),
                  ],
                })
              : (0, i.jsx)(a.BailoutToCSR, {
                  reason: "next/dynamic",
                  children: (0, i.jsx)(r, n._({}, e)),
                });
          return (0, i.jsx)(o.Suspense, { fallback: u, children: c });
        }
        return (f.displayName = "LoadableComponent"), f;
      };
    },
    70049: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "PreloadCss", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      const n = r(57437),
        i = r(20544);
      function o(e) {
        let { moduleIds: t } = e;
        if ("undefined" !== typeof window) return null;
        const r = (0, i.getExpectedRequestStore)("next/dynamic css"),
          o = [];
        if (r.reactLoadableManifest && t) {
          const e = r.reactLoadableManifest;
          for (const r of t) {
            if (!e[r]) continue;
            const t = e[r].files.filter((e) => e.endsWith(".css"));
            o.push(...t);
          }
        }
        return 0 === o.length
          ? null
          : (0, n.jsx)(n.Fragment, {
              children: o.map((e) =>
                (0, n.jsx)(
                  "link",
                  {
                    precedence: "dynamic",
                    rel: "stylesheet",
                    href: r.assetPrefix + "_next/" + encodeURI(e),
                    as: "style",
                  },
                  e,
                ),
              ),
            });
      }
    },
    68096: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          FormattedDate: function () {
            return er;
          },
          FormattedDateParts: function () {
            return or;
          },
          FormattedDateTimeRange: function () {
            return Zt;
          },
          FormattedDisplayName: function () {
            return ir;
          },
          FormattedList: function () {
            return nr;
          },
          FormattedListParts: function () {
            return tt;
          },
          FormattedMessage: function () {
            return Xt;
          },
          FormattedNumber: function () {
            return rr;
          },
          FormattedNumberParts: function () {
            return et;
          },
          FormattedPlural: function () {
            return Kt;
          },
          FormattedRelativeTime: function () {
            return Vt;
          },
          FormattedTime: function () {
            return tr;
          },
          FormattedTimeParts: function () {
            return ar;
          },
          IntlContext: function () {
            return Ze;
          },
          IntlProvider: function () {
            return Lt;
          },
          InvalidConfigError: function () {
            return Re;
          },
          MessageFormatError: function () {
            return Le;
          },
          MissingDataError: function () {
            return Ne;
          },
          MissingTranslationError: function () {
            return je;
          },
          RawIntlProvider: function () {
            return Ye;
          },
          ReactIntlError: function () {
            return xe;
          },
          ReactIntlErrorCode: function () {
            return Ae;
          },
          UnsupportedFormatterError: function () {
            return Me;
          },
          createIntl: function () {
            return Rt;
          },
          createIntlCache: function () {
            return Fe;
          },
          defineMessage: function () {
            return Qt;
          },
          defineMessages: function () {
            return Jt;
          },
          injectIntl: function () {
            return Je;
          },
          useIntl: function () {
            return Qe;
          },
        });
      var n = r(4433),
        i = r(2265),
        o = r(28870),
        a = r.n(o);
      var s, u, c;
      function l(e, t, r) {
        if ((void 0 === r && (r = Error), !e)) throw new r(t);
      }
      function f(e) {
        return e.type === u.literal;
      }
      function d(e) {
        return e.type === u.argument;
      }
      function h(e) {
        return e.type === u.number;
      }
      function p(e) {
        return e.type === u.date;
      }
      function m(e) {
        return e.type === u.time;
      }
      function v(e) {
        return e.type === u.select;
      }
      function g(e) {
        return e.type === u.plural;
      }
      function y(e) {
        return e.type === u.pound;
      }
      function b(e) {
        return e.type === u.tag;
      }
      function _(e) {
        return !(!e || "object" !== typeof e || e.type !== c.number);
      }
      function w(e) {
        return !(!e || "object" !== typeof e || e.type !== c.dateTime);
      }
      !(function (e) {
        (e[(e.EXPECT_ARGUMENT_CLOSING_BRACE = 1)] =
          "EXPECT_ARGUMENT_CLOSING_BRACE"),
          (e[(e.EMPTY_ARGUMENT = 2)] = "EMPTY_ARGUMENT"),
          (e[(e.MALFORMED_ARGUMENT = 3)] = "MALFORMED_ARGUMENT"),
          (e[(e.EXPECT_ARGUMENT_TYPE = 4)] = "EXPECT_ARGUMENT_TYPE"),
          (e[(e.INVALID_ARGUMENT_TYPE = 5)] = "INVALID_ARGUMENT_TYPE"),
          (e[(e.EXPECT_ARGUMENT_STYLE = 6)] = "EXPECT_ARGUMENT_STYLE"),
          (e[(e.INVALID_NUMBER_SKELETON = 7)] = "INVALID_NUMBER_SKELETON"),
          (e[(e.INVALID_DATE_TIME_SKELETON = 8)] =
            "INVALID_DATE_TIME_SKELETON"),
          (e[(e.EXPECT_NUMBER_SKELETON = 9)] = "EXPECT_NUMBER_SKELETON"),
          (e[(e.EXPECT_DATE_TIME_SKELETON = 10)] = "EXPECT_DATE_TIME_SKELETON"),
          (e[(e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11)] =
            "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE"),
          (e[(e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12)] =
            "EXPECT_SELECT_ARGUMENT_OPTIONS"),
          (e[(e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13)] =
            "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE"),
          (e[(e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14)] =
            "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE"),
          (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15)] =
            "EXPECT_SELECT_ARGUMENT_SELECTOR"),
          (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16)] =
            "EXPECT_PLURAL_ARGUMENT_SELECTOR"),
          (e[(e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17)] =
            "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT"),
          (e[(e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18)] =
            "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT"),
          (e[(e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19)] =
            "INVALID_PLURAL_ARGUMENT_SELECTOR"),
          (e[(e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20)] =
            "DUPLICATE_PLURAL_ARGUMENT_SELECTOR"),
          (e[(e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21)] =
            "DUPLICATE_SELECT_ARGUMENT_SELECTOR"),
          (e[(e.MISSING_OTHER_CLAUSE = 22)] = "MISSING_OTHER_CLAUSE"),
          (e[(e.INVALID_TAG = 23)] = "INVALID_TAG"),
          (e[(e.INVALID_TAG_NAME = 25)] = "INVALID_TAG_NAME"),
          (e[(e.UNMATCHED_CLOSING_TAG = 26)] = "UNMATCHED_CLOSING_TAG"),
          (e[(e.UNCLOSED_TAG = 27)] = "UNCLOSED_TAG");
      })(s || (s = {})),
        (function (e) {
          (e[(e.literal = 0)] = "literal"),
            (e[(e.argument = 1)] = "argument"),
            (e[(e.number = 2)] = "number"),
            (e[(e.date = 3)] = "date"),
            (e[(e.time = 4)] = "time"),
            (e[(e.select = 5)] = "select"),
            (e[(e.plural = 6)] = "plural"),
            (e[(e.pound = 7)] = "pound"),
            (e[(e.tag = 8)] = "tag");
        })(u || (u = {})),
        (function (e) {
          (e[(e.number = 0)] = "number"), (e[(e.dateTime = 1)] = "dateTime");
        })(c || (c = {}));
      var E = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        S =
          /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;
      function k(e) {
        var t = {};
        return (
          e.replace(S, function (e) {
            var r = e.length;
            switch (e[0]) {
              case "G":
                t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                break;
              case "y":
                t.year = 2 === r ? "2-digit" : "numeric";
                break;
              case "Y":
              case "u":
              case "U":
              case "r":
                throw new RangeError(
                  "`Y/u/U/r` (year) patterns are not supported, use `y` instead",
                );
              case "q":
              case "Q":
                throw new RangeError(
                  "`q/Q` (quarter) patterns are not supported",
                );
              case "M":
              case "L":
                t.month = ["numeric", "2-digit", "short", "long", "narrow"][
                  r - 1
                ];
                break;
              case "w":
              case "W":
                throw new RangeError("`w/W` (week) patterns are not supported");
              case "d":
                t.day = ["numeric", "2-digit"][r - 1];
                break;
              case "D":
              case "F":
              case "g":
                throw new RangeError(
                  "`D/F/g` (day) patterns are not supported, use `d` instead",
                );
              case "E":
                t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
                break;
              case "e":
                if (r < 4)
                  throw new RangeError(
                    "`e..eee` (weekday) patterns are not supported",
                  );
                t.weekday = ["short", "long", "narrow", "short"][r - 4];
                break;
              case "c":
                if (r < 4)
                  throw new RangeError(
                    "`c..ccc` (weekday) patterns are not supported",
                  );
                t.weekday = ["short", "long", "narrow", "short"][r - 4];
                break;
              case "a":
                t.hour12 = !0;
                break;
              case "b":
              case "B":
                throw new RangeError(
                  "`b/B` (period) patterns are not supported, use `a` instead",
                );
              case "h":
                (t.hourCycle = "h12"), (t.hour = ["numeric", "2-digit"][r - 1]);
                break;
              case "H":
                (t.hourCycle = "h23"), (t.hour = ["numeric", "2-digit"][r - 1]);
                break;
              case "K":
                (t.hourCycle = "h11"), (t.hour = ["numeric", "2-digit"][r - 1]);
                break;
              case "k":
                (t.hourCycle = "h24"), (t.hour = ["numeric", "2-digit"][r - 1]);
                break;
              case "j":
              case "J":
              case "C":
                throw new RangeError(
                  "`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead",
                );
              case "m":
                t.minute = ["numeric", "2-digit"][r - 1];
                break;
              case "s":
                t.second = ["numeric", "2-digit"][r - 1];
                break;
              case "S":
              case "A":
                throw new RangeError(
                  "`S/A` (second) patterns are not supported, use `s` instead",
                );
              case "z":
                t.timeZoneName = r < 4 ? "short" : "long";
                break;
              case "Z":
              case "O":
              case "v":
              case "V":
              case "X":
              case "x":
                throw new RangeError(
                  "`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead",
                );
            }
            return "";
          }),
          t
        );
      }
      var C = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;
      var T = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        P = /^(@+)?(\+|#+)?[rs]?$/g,
        O = /(\*)(0+)|(#+)(0+)|(0+)/g,
        A = /^(0+)$/;
      function I(e) {
        var t = {};
        return (
          "r" === e[e.length - 1]
            ? (t.roundingPriority = "morePrecision")
            : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"),
          e.replace(P, function (e, r, n) {
            return (
              "string" !== typeof n
                ? ((t.minimumSignificantDigits = r.length),
                  (t.maximumSignificantDigits = r.length))
                : "+" === n
                  ? (t.minimumSignificantDigits = r.length)
                  : "#" === r[0]
                    ? (t.maximumSignificantDigits = r.length)
                    : ((t.minimumSignificantDigits = r.length),
                      (t.maximumSignificantDigits =
                        r.length + ("string" === typeof n ? n.length : 0))),
              ""
            );
          }),
          t
        );
      }
      function x(e) {
        switch (e) {
          case "sign-auto":
            return { signDisplay: "auto" };
          case "sign-accounting":
          case "()":
            return { currencySign: "accounting" };
          case "sign-always":
          case "+!":
            return { signDisplay: "always" };
          case "sign-accounting-always":
          case "()!":
            return { signDisplay: "always", currencySign: "accounting" };
          case "sign-except-zero":
          case "+?":
            return { signDisplay: "exceptZero" };
          case "sign-accounting-except-zero":
          case "()?":
            return { signDisplay: "exceptZero", currencySign: "accounting" };
          case "sign-never":
          case "+_":
            return { signDisplay: "never" };
        }
      }
      function M(e) {
        var t;
        if (
          ("E" === e[0] && "E" === e[1]
            ? ((t = { notation: "engineering" }), (e = e.slice(2)))
            : "E" === e[0] &&
              ((t = { notation: "scientific" }), (e = e.slice(1))),
          t)
        ) {
          var r = e.slice(0, 2);
          if (
            ("+!" === r
              ? ((t.signDisplay = "always"), (e = e.slice(2)))
              : "+?" === r &&
                ((t.signDisplay = "exceptZero"), (e = e.slice(2))),
            !A.test(e))
          )
            throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length;
        }
        return t;
      }
      function R(e) {
        var t = x(e);
        return t || {};
      }
      function N(e) {
        for (var t = {}, r = 0, i = e; r < i.length; r++) {
          var o = i[r];
          switch (o.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              (t.style = "percent"), (t.scale = 100);
              continue;
            case "currency":
              (t.style = "currency"), (t.currency = o.options[0]);
              continue;
            case "group-off":
            case ",_":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              (t.style = "unit"),
                (t.unit = o.options[0].replace(/^(.*?)-/, ""));
              continue;
            case "compact-short":
            case "K":
              (t.notation = "compact"), (t.compactDisplay = "short");
              continue;
            case "compact-long":
            case "KK":
              (t.notation = "compact"), (t.compactDisplay = "long");
              continue;
            case "scientific":
              t = (0, n.__assign)(
                (0, n.__assign)((0, n.__assign)({}, t), {
                  notation: "scientific",
                }),
                o.options.reduce(function (e, t) {
                  return (0, n.__assign)((0, n.__assign)({}, e), R(t));
                }, {}),
              );
              continue;
            case "engineering":
              t = (0, n.__assign)(
                (0, n.__assign)((0, n.__assign)({}, t), {
                  notation: "engineering",
                }),
                o.options.reduce(function (e, t) {
                  return (0, n.__assign)((0, n.__assign)({}, e), R(t));
                }, {}),
              );
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              (t.currencyDisplay = "narrowSymbol"), (t.unitDisplay = "narrow");
              continue;
            case "unit-width-short":
              (t.currencyDisplay = "code"), (t.unitDisplay = "short");
              continue;
            case "unit-width-full-name":
              (t.currencyDisplay = "name"), (t.unitDisplay = "long");
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
            case "scale":
              t.scale = parseFloat(o.options[0]);
              continue;
            case "rounding-mode-floor":
              t.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              t.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              t.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              t.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              t.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              t.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              t.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (o.options.length > 1)
                throw new RangeError(
                  "integer-width stems only accept a single optional option",
                );
              o.options[0].replace(O, function (e, r, n, i, o, a) {
                if (r) t.minimumIntegerDigits = n.length;
                else {
                  if (i && o)
                    throw new Error(
                      "We currently do not support maximum integer digits",
                    );
                  if (a)
                    throw new Error(
                      "We currently do not support exact integer digits",
                    );
                }
                return "";
              });
              continue;
          }
          if (A.test(o.stem)) t.minimumIntegerDigits = o.stem.length;
          else if (T.test(o.stem)) {
            if (o.options.length > 1)
              throw new RangeError(
                "Fraction-precision stems only accept a single optional option",
              );
            o.stem.replace(T, function (e, r, n, i, o, a) {
              return (
                "*" === n
                  ? (t.minimumFractionDigits = r.length)
                  : i && "#" === i[0]
                    ? (t.maximumFractionDigits = i.length)
                    : o && a
                      ? ((t.minimumFractionDigits = o.length),
                        (t.maximumFractionDigits = o.length + a.length))
                      : ((t.minimumFractionDigits = r.length),
                        (t.maximumFractionDigits = r.length)),
                ""
              );
            });
            var a = o.options[0];
            "w" === a
              ? (t = (0, n.__assign)((0, n.__assign)({}, t), {
                  trailingZeroDisplay: "stripIfInteger",
                }))
              : a && (t = (0, n.__assign)((0, n.__assign)({}, t), I(a)));
          } else if (P.test(o.stem))
            t = (0, n.__assign)((0, n.__assign)({}, t), I(o.stem));
          else {
            var s = x(o.stem);
            s && (t = (0, n.__assign)((0, n.__assign)({}, t), s));
            var u = M(o.stem);
            u && (t = (0, n.__assign)((0, n.__assign)({}, t), u));
          }
        }
        return t;
      }
      var D,
        L = {
          "001": ["H", "h"],
          AC: ["H", "h", "hb", "hB"],
          AD: ["H", "hB"],
          AE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AI: ["H", "h", "hb", "hB"],
          AL: ["h", "H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AR: ["H", "h", "hB", "hb"],
          AS: ["h", "H"],
          AT: ["H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          AW: ["H", "hB"],
          AX: ["H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BB: ["h", "hb", "H", "hB"],
          BD: ["h", "hB", "H"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BG: ["H", "hB", "h"],
          BH: ["h", "hB", "hb", "H"],
          BI: ["H", "h"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BN: ["hb", "hB", "h", "H"],
          BO: ["H", "hB", "h", "hb"],
          BQ: ["H"],
          BR: ["H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          BT: ["h", "H"],
          BW: ["H", "h", "hb", "hB"],
          BY: ["H", "h"],
          BZ: ["H", "h", "hb", "hB"],
          CA: ["h", "hb", "H", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CD: ["hB", "H"],
          CF: ["H", "h", "hB"],
          CG: ["H", "hB"],
          CH: ["H", "hB", "h"],
          CI: ["H", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CL: ["H", "h", "hB", "hb"],
          CM: ["H", "h", "hB"],
          CN: ["H", "hB", "hb", "h"],
          CO: ["h", "H", "hB", "hb"],
          CP: ["H"],
          CR: ["H", "h", "hB", "hb"],
          CU: ["H", "h", "hB", "hb"],
          CV: ["H", "hB"],
          CW: ["H", "hB"],
          CX: ["H", "h", "hb", "hB"],
          CY: ["h", "H", "hb", "hB"],
          CZ: ["H"],
          DE: ["H", "hB"],
          DG: ["H", "h", "hb", "hB"],
          DJ: ["h", "H"],
          DK: ["H"],
          DM: ["h", "hb", "H", "hB"],
          DO: ["h", "H", "hB", "hb"],
          DZ: ["h", "hB", "hb", "H"],
          EA: ["H", "h", "hB", "hb"],
          EC: ["H", "hB", "h", "hb"],
          EE: ["H", "hB"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          ER: ["h", "H"],
          ES: ["H", "hB", "h", "hb"],
          ET: ["hB", "hb", "h", "H"],
          FI: ["H"],
          FJ: ["h", "hb", "H", "hB"],
          FK: ["H", "h", "hb", "hB"],
          FM: ["h", "hb", "H", "hB"],
          FO: ["H", "h"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GE: ["H", "hB", "h"],
          GF: ["H", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GH: ["h", "H"],
          GI: ["H", "h", "hb", "hB"],
          GL: ["H", "h"],
          GM: ["h", "hb", "H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GQ: ["H", "hB", "h", "hb"],
          GR: ["h", "H", "hb", "hB"],
          GT: ["H", "h", "hB", "hb"],
          GU: ["h", "hb", "H", "hB"],
          GW: ["H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          HK: ["h", "hB", "hb", "H"],
          HN: ["H", "h", "hB", "hb"],
          HR: ["H", "hB"],
          HU: ["H", "h"],
          IC: ["H", "h", "hB", "hb"],
          ID: ["H"],
          IE: ["H", "h", "hb", "hB"],
          IL: ["H", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IN: ["h", "H"],
          IO: ["H", "h", "hb", "hB"],
          IQ: ["h", "hB", "hb", "H"],
          IR: ["hB", "H"],
          IS: ["H"],
          IT: ["H", "hB"],
          JE: ["H", "h", "hb", "hB"],
          JM: ["h", "hb", "H", "hB"],
          JO: ["h", "hB", "hb", "H"],
          JP: ["H", "K", "h"],
          KE: ["hB", "hb", "H", "h"],
          KG: ["H", "h", "hB", "hb"],
          KH: ["hB", "h", "H", "hb"],
          KI: ["h", "hb", "H", "hB"],
          KM: ["H", "h", "hB", "hb"],
          KN: ["h", "hb", "H", "hB"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          KW: ["h", "hB", "hb", "H"],
          KY: ["h", "hb", "H", "hB"],
          KZ: ["H", "hB"],
          LA: ["H", "hb", "hB", "h"],
          LB: ["h", "hB", "hb", "H"],
          LC: ["h", "hb", "H", "hB"],
          LI: ["H", "hB", "h"],
          LK: ["H", "h", "hB", "hb"],
          LR: ["h", "hb", "H", "hB"],
          LS: ["h", "H"],
          LT: ["H", "h", "hb", "hB"],
          LU: ["H", "h", "hB"],
          LV: ["H", "hB", "hb", "h"],
          LY: ["h", "hB", "hb", "H"],
          MA: ["H", "h", "hB", "hb"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          ME: ["H", "hB", "h"],
          MF: ["H", "hB"],
          MG: ["H", "h"],
          MH: ["h", "hb", "H", "hB"],
          MK: ["H", "h", "hb", "hB"],
          ML: ["H"],
          MM: ["hB", "hb", "H", "h"],
          MN: ["H", "h", "hb", "hB"],
          MO: ["h", "hB", "hb", "H"],
          MP: ["h", "hb", "H", "hB"],
          MQ: ["H", "hB"],
          MR: ["h", "hB", "hb", "H"],
          MS: ["H", "h", "hb", "hB"],
          MT: ["H", "h"],
          MU: ["H", "h"],
          MV: ["H", "h"],
          MW: ["h", "hb", "H", "hB"],
          MX: ["H", "h", "hB", "hb"],
          MY: ["hb", "hB", "h", "H"],
          MZ: ["H", "hB"],
          NA: ["h", "H", "hB", "hb"],
          NC: ["H", "hB"],
          NE: ["H"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NI: ["H", "h", "hB", "hb"],
          NL: ["H", "hB"],
          NO: ["H", "h"],
          NP: ["H", "h", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          OM: ["h", "hB", "hb", "H"],
          PA: ["h", "H", "hB", "hb"],
          PE: ["H", "hB", "h", "hb"],
          PF: ["H", "h", "hB"],
          PG: ["h", "H"],
          PH: ["h", "hB", "hb", "H"],
          PK: ["h", "hB", "H"],
          PL: ["H", "h"],
          PM: ["H", "hB"],
          PN: ["H", "h", "hb", "hB"],
          PR: ["h", "H", "hB", "hb"],
          PS: ["h", "hB", "hb", "H"],
          PT: ["H", "hB"],
          PW: ["h", "H"],
          PY: ["H", "h", "hB", "hb"],
          QA: ["h", "hB", "hb", "H"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          RS: ["H", "hB", "h"],
          RU: ["H"],
          RW: ["H", "h"],
          SA: ["h", "hB", "hb", "H"],
          SB: ["h", "hb", "H", "hB"],
          SC: ["H", "h", "hB"],
          SD: ["h", "hB", "hb", "H"],
          SE: ["H"],
          SG: ["h", "hb", "H", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SI: ["H", "hB"],
          SJ: ["H"],
          SK: ["H"],
          SL: ["h", "hb", "H", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          SO: ["h", "H"],
          SR: ["H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          ST: ["H", "hB"],
          SV: ["H", "h", "hB", "hb"],
          SX: ["H", "h", "hb", "hB"],
          SY: ["h", "hB", "hb", "H"],
          SZ: ["h", "hb", "H", "hB"],
          TA: ["H", "h", "hb", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TD: ["h", "H", "hB"],
          TF: ["H", "h", "hB"],
          TG: ["H", "hB"],
          TH: ["H", "h"],
          TJ: ["H", "h"],
          TL: ["H", "hB", "hb", "h"],
          TM: ["H", "h"],
          TN: ["h", "hB", "hb", "H"],
          TO: ["h", "H"],
          TR: ["H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          TW: ["hB", "hb", "h", "H"],
          TZ: ["hB", "hb", "H", "h"],
          UA: ["H", "hB", "h"],
          UG: ["hB", "hb", "H", "h"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          UY: ["H", "h", "hB", "hb"],
          UZ: ["H", "hB", "h"],
          VA: ["H", "h", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VE: ["h", "H", "hB", "hb"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          VN: ["H", "h"],
          VU: ["h", "H"],
          WF: ["H", "hB"],
          WS: ["h", "H"],
          XK: ["H", "hB", "h"],
          YE: ["h", "hB", "hb", "H"],
          YT: ["H", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          ZW: ["H", "h"],
          "af-ZA": ["H", "h", "hB", "hb"],
          "ar-001": ["h", "hB", "hb", "H"],
          "ca-ES": ["H", "h", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          "es-BO": ["H", "h", "hB", "hb"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-EC": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "es-PE": ["H", "h", "hB", "hb"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "hi-IN": ["hB", "h", "H"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          "kn-IN": ["hB", "h", "H"],
          "ml-IN": ["hB", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          "ta-IN": ["hB", "h", "hb", "H"],
          "te-IN": ["hB", "h", "H"],
          "zu-ZA": ["H", "hB", "hb", "h"],
        };
      function j(e) {
        var t = e.hourCycle;
        if (
          (void 0 === t &&
            e.hourCycles &&
            e.hourCycles.length &&
            (t = e.hourCycles[0]),
          t)
        )
          switch (t) {
            case "h24":
              return "k";
            case "h23":
              return "H";
            case "h12":
              return "h";
            case "h11":
              return "K";
            default:
              throw new Error("Invalid hourCycle");
          }
        var r,
          n = e.language;
        return (
          "root" !== n && (r = e.maximize().region),
          (L[r || ""] || L[n || ""] || L["".concat(n, "-001")] || L["001"])[0]
        );
      }
      var B = new RegExp("^".concat(E.source, "*")),
        H = new RegExp("".concat(E.source, "*$"));
      function F(e, t) {
        return { start: e, end: t };
      }
      var U = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        G = !!String.fromCodePoint,
        $ = !!Object.fromEntries,
        V = !!String.prototype.codePointAt,
        z = !!String.prototype.trimStart,
        K = !!String.prototype.trimEnd,
        q = !!Number.isSafeInteger
          ? Number.isSafeInteger
          : function (e) {
              return (
                "number" === typeof e &&
                isFinite(e) &&
                Math.floor(e) === e &&
                Math.abs(e) <= 9007199254740991
              );
            },
        W = !0;
      try {
        W =
          "a" ===
          (null ===
            (D = re("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec(
              "a",
            )) || void 0 === D
            ? void 0
            : D[0]);
      } catch (sr) {
        W = !1;
      }
      var X,
        Y = U
          ? function (e, t, r) {
              return e.startsWith(t, r);
            }
          : function (e, t, r) {
              return e.slice(r, r + t.length) === t;
            },
        Z = G
          ? String.fromCodePoint
          : function () {
              for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
              for (var r, n = "", i = e.length, o = 0; i > o; ) {
                if ((r = e[o++]) > 1114111)
                  throw RangeError(r + " is not a valid code point");
                n +=
                  r < 65536
                    ? String.fromCharCode(r)
                    : String.fromCharCode(
                        55296 + ((r -= 65536) >> 10),
                        (r % 1024) + 56320,
                      );
              }
              return n;
            },
        J = $
          ? Object.fromEntries
          : function (e) {
              for (var t = {}, r = 0, n = e; r < n.length; r++) {
                var i = n[r],
                  o = i[0],
                  a = i[1];
                t[o] = a;
              }
              return t;
            },
        Q = V
          ? function (e, t) {
              return e.codePointAt(t);
            }
          : function (e, t) {
              var r = e.length;
              if (!(t < 0 || t >= r)) {
                var n,
                  i = e.charCodeAt(t);
                return i < 55296 ||
                  i > 56319 ||
                  t + 1 === r ||
                  (n = e.charCodeAt(t + 1)) < 56320 ||
                  n > 57343
                  ? i
                  : n - 56320 + ((i - 55296) << 10) + 65536;
              }
            },
        ee = z
          ? function (e) {
              return e.trimStart();
            }
          : function (e) {
              return e.replace(B, "");
            },
        te = K
          ? function (e) {
              return e.trimEnd();
            }
          : function (e) {
              return e.replace(H, "");
            };
      function re(e, t) {
        return new RegExp(e, t);
      }
      if (W) {
        var ne = re("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        X = function (e, t) {
          var r;
          return (
            (ne.lastIndex = t),
            null !== (r = ne.exec(e)[1]) && void 0 !== r ? r : ""
          );
        };
      } else
        X = function (e, t) {
          for (var r = []; ; ) {
            var n = Q(e, t);
            if (void 0 === n || ae(n) || se(n)) break;
            r.push(n), (t += n >= 65536 ? 2 : 1);
          }
          return Z.apply(void 0, r);
        };
      var ie = (function () {
        function e(e, t) {
          void 0 === t && (t = {}),
            (this.message = e),
            (this.position = { offset: 0, line: 1, column: 1 }),
            (this.ignoreTag = !!t.ignoreTag),
            (this.locale = t.locale),
            (this.requiresOtherClause = !!t.requiresOtherClause),
            (this.shouldParseSkeletons = !!t.shouldParseSkeletons);
        }
        return (
          (e.prototype.parse = function () {
            if (0 !== this.offset())
              throw Error("parser can only be used once");
            return this.parseMessage(0, "", !1);
          }),
          (e.prototype.parseMessage = function (e, t, r) {
            for (var n = []; !this.isEOF(); ) {
              var i = this.char();
              if (123 === i) {
                if ((o = this.parseArgument(e, r)).err) return o;
                n.push(o.val);
              } else {
                if (125 === i && e > 0) break;
                if (35 !== i || ("plural" !== t && "selectordinal" !== t)) {
                  if (60 === i && !this.ignoreTag && 47 === this.peek()) {
                    if (r) break;
                    return this.error(
                      s.UNMATCHED_CLOSING_TAG,
                      F(this.clonePosition(), this.clonePosition()),
                    );
                  }
                  if (60 === i && !this.ignoreTag && oe(this.peek() || 0)) {
                    if ((o = this.parseTag(e, t)).err) return o;
                    n.push(o.val);
                  } else {
                    var o;
                    if ((o = this.parseLiteral(e, t)).err) return o;
                    n.push(o.val);
                  }
                } else {
                  var a = this.clonePosition();
                  this.bump(),
                    n.push({
                      type: u.pound,
                      location: F(a, this.clonePosition()),
                    });
                }
              }
            }
            return { val: n, err: null };
          }),
          (e.prototype.parseTag = function (e, t) {
            var r = this.clonePosition();
            this.bump();
            var n = this.parseTagName();
            if ((this.bumpSpace(), this.bumpIf("/>")))
              return {
                val: {
                  type: u.literal,
                  value: "<".concat(n, "/>"),
                  location: F(r, this.clonePosition()),
                },
                err: null,
              };
            if (this.bumpIf(">")) {
              var i = this.parseMessage(e + 1, t, !0);
              if (i.err) return i;
              var o = i.val,
                a = this.clonePosition();
              if (this.bumpIf("</")) {
                if (this.isEOF() || !oe(this.char()))
                  return this.error(s.INVALID_TAG, F(a, this.clonePosition()));
                var c = this.clonePosition();
                return n !== this.parseTagName()
                  ? this.error(
                      s.UNMATCHED_CLOSING_TAG,
                      F(c, this.clonePosition()),
                    )
                  : (this.bumpSpace(),
                    this.bumpIf(">")
                      ? {
                          val: {
                            type: u.tag,
                            value: n,
                            children: o,
                            location: F(r, this.clonePosition()),
                          },
                          err: null,
                        }
                      : this.error(s.INVALID_TAG, F(a, this.clonePosition())));
              }
              return this.error(s.UNCLOSED_TAG, F(r, this.clonePosition()));
            }
            return this.error(s.INVALID_TAG, F(r, this.clonePosition()));
          }),
          (e.prototype.parseTagName = function () {
            var e,
              t = this.offset();
            for (
              this.bump();
              !this.isEOF() &&
              (45 === (e = this.char()) ||
                46 === e ||
                (e >= 48 && e <= 57) ||
                95 === e ||
                (e >= 97 && e <= 122) ||
                (e >= 65 && e <= 90) ||
                183 == e ||
                (e >= 192 && e <= 214) ||
                (e >= 216 && e <= 246) ||
                (e >= 248 && e <= 893) ||
                (e >= 895 && e <= 8191) ||
                (e >= 8204 && e <= 8205) ||
                (e >= 8255 && e <= 8256) ||
                (e >= 8304 && e <= 8591) ||
                (e >= 11264 && e <= 12271) ||
                (e >= 12289 && e <= 55295) ||
                (e >= 63744 && e <= 64975) ||
                (e >= 65008 && e <= 65533) ||
                (e >= 65536 && e <= 983039));

            )
              this.bump();
            return this.message.slice(t, this.offset());
          }),
          (e.prototype.parseLiteral = function (e, t) {
            for (var r = this.clonePosition(), n = ""; ; ) {
              var i = this.tryParseQuote(t);
              if (i) n += i;
              else {
                var o = this.tryParseUnquoted(e, t);
                if (o) n += o;
                else {
                  var a = this.tryParseLeftAngleBracket();
                  if (!a) break;
                  n += a;
                }
              }
            }
            var s = F(r, this.clonePosition());
            return {
              val: { type: u.literal, value: n, location: s },
              err: null,
            };
          }),
          (e.prototype.tryParseLeftAngleBracket = function () {
            return this.isEOF() ||
              60 !== this.char() ||
              (!this.ignoreTag && (oe((e = this.peek() || 0)) || 47 === e))
              ? null
              : (this.bump(), "<");
            var e;
          }),
          (e.prototype.tryParseQuote = function (e) {
            if (this.isEOF() || 39 !== this.char()) return null;
            switch (this.peek()) {
              case 39:
                return this.bump(), this.bump(), "'";
              case 123:
              case 60:
              case 62:
              case 125:
                break;
              case 35:
                if ("plural" === e || "selectordinal" === e) break;
                return null;
              default:
                return null;
            }
            this.bump();
            var t = [this.char()];
            for (this.bump(); !this.isEOF(); ) {
              var r = this.char();
              if (39 === r) {
                if (39 !== this.peek()) {
                  this.bump();
                  break;
                }
                t.push(39), this.bump();
              } else t.push(r);
              this.bump();
            }
            return Z.apply(void 0, t);
          }),
          (e.prototype.tryParseUnquoted = function (e, t) {
            if (this.isEOF()) return null;
            var r = this.char();
            return 60 === r ||
              123 === r ||
              (35 === r && ("plural" === t || "selectordinal" === t)) ||
              (125 === r && e > 0)
              ? null
              : (this.bump(), Z(r));
          }),
          (e.prototype.parseArgument = function (e, t) {
            var r = this.clonePosition();
            if ((this.bump(), this.bumpSpace(), this.isEOF()))
              return this.error(
                s.EXPECT_ARGUMENT_CLOSING_BRACE,
                F(r, this.clonePosition()),
              );
            if (125 === this.char())
              return (
                this.bump(),
                this.error(s.EMPTY_ARGUMENT, F(r, this.clonePosition()))
              );
            var n = this.parseIdentifierIfPossible().value;
            if (!n)
              return this.error(
                s.MALFORMED_ARGUMENT,
                F(r, this.clonePosition()),
              );
            if ((this.bumpSpace(), this.isEOF()))
              return this.error(
                s.EXPECT_ARGUMENT_CLOSING_BRACE,
                F(r, this.clonePosition()),
              );
            switch (this.char()) {
              case 125:
                return (
                  this.bump(),
                  {
                    val: {
                      type: u.argument,
                      value: n,
                      location: F(r, this.clonePosition()),
                    },
                    err: null,
                  }
                );
              case 44:
                return (
                  this.bump(),
                  this.bumpSpace(),
                  this.isEOF()
                    ? this.error(
                        s.EXPECT_ARGUMENT_CLOSING_BRACE,
                        F(r, this.clonePosition()),
                      )
                    : this.parseArgumentOptions(e, t, n, r)
                );
              default:
                return this.error(
                  s.MALFORMED_ARGUMENT,
                  F(r, this.clonePosition()),
                );
            }
          }),
          (e.prototype.parseIdentifierIfPossible = function () {
            var e = this.clonePosition(),
              t = this.offset(),
              r = X(this.message, t),
              n = t + r.length;
            return (
              this.bumpTo(n), { value: r, location: F(e, this.clonePosition()) }
            );
          }),
          (e.prototype.parseArgumentOptions = function (e, t, r, i) {
            var o,
              a = this.clonePosition(),
              l = this.parseIdentifierIfPossible().value,
              f = this.clonePosition();
            switch (l) {
              case "":
                return this.error(s.EXPECT_ARGUMENT_TYPE, F(a, f));
              case "number":
              case "date":
              case "time":
                this.bumpSpace();
                var d = null;
                if (this.bumpIf(",")) {
                  this.bumpSpace();
                  var h = this.clonePosition();
                  if ((w = this.parseSimpleArgStyleIfPossible()).err) return w;
                  if (0 === (g = te(w.val)).length)
                    return this.error(
                      s.EXPECT_ARGUMENT_STYLE,
                      F(this.clonePosition(), this.clonePosition()),
                    );
                  d = { style: g, styleLocation: F(h, this.clonePosition()) };
                }
                if ((E = this.tryParseArgumentClose(i)).err) return E;
                var p = F(i, this.clonePosition());
                if (
                  d &&
                  Y(null === d || void 0 === d ? void 0 : d.style, "::", 0)
                ) {
                  var m = ee(d.style.slice(2));
                  if ("number" === l)
                    return (w = this.parseNumberSkeletonFromString(
                      m,
                      d.styleLocation,
                    )).err
                      ? w
                      : {
                          val: {
                            type: u.number,
                            value: r,
                            location: p,
                            style: w.val,
                          },
                          err: null,
                        };
                  if (0 === m.length)
                    return this.error(s.EXPECT_DATE_TIME_SKELETON, p);
                  var v = m;
                  this.locale &&
                    (v = (function (e, t) {
                      for (var r = "", n = 0; n < e.length; n++) {
                        var i = e.charAt(n);
                        if ("j" === i) {
                          for (
                            var o = 0;
                            n + 1 < e.length && e.charAt(n + 1) === i;

                          )
                            o++, n++;
                          var a = 1 + (1 & o),
                            s = o < 2 ? 1 : 3 + (o >> 1),
                            u = j(t);
                          for (("H" != u && "k" != u) || (s = 0); s-- > 0; )
                            r += "a";
                          for (; a-- > 0; ) r = u + r;
                        } else r += "J" === i ? "H" : i;
                      }
                      return r;
                    })(m, this.locale));
                  var g = {
                    type: c.dateTime,
                    pattern: v,
                    location: d.styleLocation,
                    parsedOptions: this.shouldParseSkeletons ? k(v) : {},
                  };
                  return {
                    val: {
                      type: "date" === l ? u.date : u.time,
                      value: r,
                      location: p,
                      style: g,
                    },
                    err: null,
                  };
                }
                return {
                  val: {
                    type:
                      "number" === l
                        ? u.number
                        : "date" === l
                          ? u.date
                          : u.time,
                    value: r,
                    location: p,
                    style:
                      null !==
                        (o = null === d || void 0 === d ? void 0 : d.style) &&
                      void 0 !== o
                        ? o
                        : null,
                  },
                  err: null,
                };
              case "plural":
              case "selectordinal":
              case "select":
                var y = this.clonePosition();
                if ((this.bumpSpace(), !this.bumpIf(",")))
                  return this.error(
                    s.EXPECT_SELECT_ARGUMENT_OPTIONS,
                    F(y, (0, n.__assign)({}, y)),
                  );
                this.bumpSpace();
                var b = this.parseIdentifierIfPossible(),
                  _ = 0;
                if ("select" !== l && "offset" === b.value) {
                  if (!this.bumpIf(":"))
                    return this.error(
                      s.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      F(this.clonePosition(), this.clonePosition()),
                    );
                  var w;
                  if (
                    (this.bumpSpace(),
                    (w = this.tryParseDecimalInteger(
                      s.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE,
                      s.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE,
                    )).err)
                  )
                    return w;
                  this.bumpSpace(),
                    (b = this.parseIdentifierIfPossible()),
                    (_ = w.val);
                }
                var E,
                  S = this.tryParsePluralOrSelectOptions(e, l, t, b);
                if (S.err) return S;
                if ((E = this.tryParseArgumentClose(i)).err) return E;
                var C = F(i, this.clonePosition());
                return "select" === l
                  ? {
                      val: {
                        type: u.select,
                        value: r,
                        options: J(S.val),
                        location: C,
                      },
                      err: null,
                    }
                  : {
                      val: {
                        type: u.plural,
                        value: r,
                        options: J(S.val),
                        offset: _,
                        pluralType: "plural" === l ? "cardinal" : "ordinal",
                        location: C,
                      },
                      err: null,
                    };
              default:
                return this.error(s.INVALID_ARGUMENT_TYPE, F(a, f));
            }
          }),
          (e.prototype.tryParseArgumentClose = function (e) {
            return this.isEOF() || 125 !== this.char()
              ? this.error(
                  s.EXPECT_ARGUMENT_CLOSING_BRACE,
                  F(e, this.clonePosition()),
                )
              : (this.bump(), { val: !0, err: null });
          }),
          (e.prototype.parseSimpleArgStyleIfPossible = function () {
            for (var e = 0, t = this.clonePosition(); !this.isEOF(); ) {
              switch (this.char()) {
                case 39:
                  this.bump();
                  var r = this.clonePosition();
                  if (!this.bumpUntil("'"))
                    return this.error(
                      s.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE,
                      F(r, this.clonePosition()),
                    );
                  this.bump();
                  break;
                case 123:
                  (e += 1), this.bump();
                  break;
                case 125:
                  if (!(e > 0))
                    return {
                      val: this.message.slice(t.offset, this.offset()),
                      err: null,
                    };
                  e -= 1;
                  break;
                default:
                  this.bump();
              }
            }
            return {
              val: this.message.slice(t.offset, this.offset()),
              err: null,
            };
          }),
          (e.prototype.parseNumberSkeletonFromString = function (e, t) {
            var r = [];
            try {
              r = (function (e) {
                if (0 === e.length)
                  throw new Error("Number skeleton cannot be empty");
                for (
                  var t = [],
                    r = 0,
                    n = e.split(C).filter(function (e) {
                      return e.length > 0;
                    });
                  r < n.length;
                  r++
                ) {
                  var i = n[r].split("/");
                  if (0 === i.length)
                    throw new Error("Invalid number skeleton");
                  for (
                    var o = i[0], a = i.slice(1), s = 0, u = a;
                    s < u.length;
                    s++
                  )
                    if (0 === u[s].length)
                      throw new Error("Invalid number skeleton");
                  t.push({ stem: o, options: a });
                }
                return t;
              })(e);
            } catch (n) {
              return this.error(s.INVALID_NUMBER_SKELETON, t);
            }
            return {
              val: {
                type: c.number,
                tokens: r,
                location: t,
                parsedOptions: this.shouldParseSkeletons ? N(r) : {},
              },
              err: null,
            };
          }),
          (e.prototype.tryParsePluralOrSelectOptions = function (e, t, r, n) {
            for (
              var i, o = !1, a = [], u = new Set(), c = n.value, l = n.location;
              ;

            ) {
              if (0 === c.length) {
                var f = this.clonePosition();
                if ("select" === t || !this.bumpIf("=")) break;
                var d = this.tryParseDecimalInteger(
                  s.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  s.INVALID_PLURAL_ARGUMENT_SELECTOR,
                );
                if (d.err) return d;
                (l = F(f, this.clonePosition())),
                  (c = this.message.slice(f.offset, this.offset()));
              }
              if (u.has(c))
                return this.error(
                  "select" === t
                    ? s.DUPLICATE_SELECT_ARGUMENT_SELECTOR
                    : s.DUPLICATE_PLURAL_ARGUMENT_SELECTOR,
                  l,
                );
              "other" === c && (o = !0), this.bumpSpace();
              var h = this.clonePosition();
              if (!this.bumpIf("{"))
                return this.error(
                  "select" === t
                    ? s.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT
                    : s.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT,
                  F(this.clonePosition(), this.clonePosition()),
                );
              var p = this.parseMessage(e + 1, t, r);
              if (p.err) return p;
              var m = this.tryParseArgumentClose(h);
              if (m.err) return m;
              a.push([
                c,
                { value: p.val, location: F(h, this.clonePosition()) },
              ]),
                u.add(c),
                this.bumpSpace(),
                (c = (i = this.parseIdentifierIfPossible()).value),
                (l = i.location);
            }
            return 0 === a.length
              ? this.error(
                  "select" === t
                    ? s.EXPECT_SELECT_ARGUMENT_SELECTOR
                    : s.EXPECT_PLURAL_ARGUMENT_SELECTOR,
                  F(this.clonePosition(), this.clonePosition()),
                )
              : this.requiresOtherClause && !o
                ? this.error(
                    s.MISSING_OTHER_CLAUSE,
                    F(this.clonePosition(), this.clonePosition()),
                  )
                : { val: a, err: null };
          }),
          (e.prototype.tryParseDecimalInteger = function (e, t) {
            var r = 1,
              n = this.clonePosition();
            this.bumpIf("+") || (this.bumpIf("-") && (r = -1));
            for (var i = !1, o = 0; !this.isEOF(); ) {
              var a = this.char();
              if (!(a >= 48 && a <= 57)) break;
              (i = !0), (o = 10 * o + (a - 48)), this.bump();
            }
            var s = F(n, this.clonePosition());
            return i
              ? q((o *= r))
                ? { val: o, err: null }
                : this.error(t, s)
              : this.error(e, s);
          }),
          (e.prototype.offset = function () {
            return this.position.offset;
          }),
          (e.prototype.isEOF = function () {
            return this.offset() === this.message.length;
          }),
          (e.prototype.clonePosition = function () {
            return {
              offset: this.position.offset,
              line: this.position.line,
              column: this.position.column,
            };
          }),
          (e.prototype.char = function () {
            var e = this.position.offset;
            if (e >= this.message.length) throw Error("out of bound");
            var t = Q(this.message, e);
            if (void 0 === t)
              throw Error(
                "Offset ".concat(e, " is at invalid UTF-16 code unit boundary"),
              );
            return t;
          }),
          (e.prototype.error = function (e, t) {
            return {
              val: null,
              err: { kind: e, message: this.message, location: t },
            };
          }),
          (e.prototype.bump = function () {
            if (!this.isEOF()) {
              var e = this.char();
              10 === e
                ? ((this.position.line += 1),
                  (this.position.column = 1),
                  (this.position.offset += 1))
                : ((this.position.column += 1),
                  (this.position.offset += e < 65536 ? 1 : 2));
            }
          }),
          (e.prototype.bumpIf = function (e) {
            if (Y(this.message, e, this.offset())) {
              for (var t = 0; t < e.length; t++) this.bump();
              return !0;
            }
            return !1;
          }),
          (e.prototype.bumpUntil = function (e) {
            var t = this.offset(),
              r = this.message.indexOf(e, t);
            return r >= 0
              ? (this.bumpTo(r), !0)
              : (this.bumpTo(this.message.length), !1);
          }),
          (e.prototype.bumpTo = function (e) {
            if (this.offset() > e)
              throw Error(
                "targetOffset "
                  .concat(
                    e,
                    " must be greater than or equal to the current offset ",
                  )
                  .concat(this.offset()),
              );
            for (e = Math.min(e, this.message.length); ; ) {
              var t = this.offset();
              if (t === e) break;
              if (t > e)
                throw Error(
                  "targetOffset ".concat(
                    e,
                    " is at invalid UTF-16 code unit boundary",
                  ),
                );
              if ((this.bump(), this.isEOF())) break;
            }
          }),
          (e.prototype.bumpSpace = function () {
            for (; !this.isEOF() && ae(this.char()); ) this.bump();
          }),
          (e.prototype.peek = function () {
            if (this.isEOF()) return null;
            var e = this.char(),
              t = this.offset(),
              r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
            return null !== r && void 0 !== r ? r : null;
          }),
          e
        );
      })();
      function oe(e) {
        return (e >= 97 && e <= 122) || (e >= 65 && e <= 90);
      }
      function ae(e) {
        return (
          (e >= 9 && e <= 13) ||
          32 === e ||
          133 === e ||
          (e >= 8206 && e <= 8207) ||
          8232 === e ||
          8233 === e
        );
      }
      function se(e) {
        return (
          (e >= 33 && e <= 35) ||
          36 === e ||
          (e >= 37 && e <= 39) ||
          40 === e ||
          41 === e ||
          42 === e ||
          43 === e ||
          44 === e ||
          45 === e ||
          (e >= 46 && e <= 47) ||
          (e >= 58 && e <= 59) ||
          (e >= 60 && e <= 62) ||
          (e >= 63 && e <= 64) ||
          91 === e ||
          92 === e ||
          93 === e ||
          94 === e ||
          96 === e ||
          123 === e ||
          124 === e ||
          125 === e ||
          126 === e ||
          161 === e ||
          (e >= 162 && e <= 165) ||
          166 === e ||
          167 === e ||
          169 === e ||
          171 === e ||
          172 === e ||
          174 === e ||
          176 === e ||
          177 === e ||
          182 === e ||
          187 === e ||
          191 === e ||
          215 === e ||
          247 === e ||
          (e >= 8208 && e <= 8213) ||
          (e >= 8214 && e <= 8215) ||
          8216 === e ||
          8217 === e ||
          8218 === e ||
          (e >= 8219 && e <= 8220) ||
          8221 === e ||
          8222 === e ||
          8223 === e ||
          (e >= 8224 && e <= 8231) ||
          (e >= 8240 && e <= 8248) ||
          8249 === e ||
          8250 === e ||
          (e >= 8251 && e <= 8254) ||
          (e >= 8257 && e <= 8259) ||
          8260 === e ||
          8261 === e ||
          8262 === e ||
          (e >= 8263 && e <= 8273) ||
          8274 === e ||
          8275 === e ||
          (e >= 8277 && e <= 8286) ||
          (e >= 8592 && e <= 8596) ||
          (e >= 8597 && e <= 8601) ||
          (e >= 8602 && e <= 8603) ||
          (e >= 8604 && e <= 8607) ||
          8608 === e ||
          (e >= 8609 && e <= 8610) ||
          8611 === e ||
          (e >= 8612 && e <= 8613) ||
          8614 === e ||
          (e >= 8615 && e <= 8621) ||
          8622 === e ||
          (e >= 8623 && e <= 8653) ||
          (e >= 8654 && e <= 8655) ||
          (e >= 8656 && e <= 8657) ||
          8658 === e ||
          8659 === e ||
          8660 === e ||
          (e >= 8661 && e <= 8691) ||
          (e >= 8692 && e <= 8959) ||
          (e >= 8960 && e <= 8967) ||
          8968 === e ||
          8969 === e ||
          8970 === e ||
          8971 === e ||
          (e >= 8972 && e <= 8991) ||
          (e >= 8992 && e <= 8993) ||
          (e >= 8994 && e <= 9e3) ||
          9001 === e ||
          9002 === e ||
          (e >= 9003 && e <= 9083) ||
          9084 === e ||
          (e >= 9085 && e <= 9114) ||
          (e >= 9115 && e <= 9139) ||
          (e >= 9140 && e <= 9179) ||
          (e >= 9180 && e <= 9185) ||
          (e >= 9186 && e <= 9254) ||
          (e >= 9255 && e <= 9279) ||
          (e >= 9280 && e <= 9290) ||
          (e >= 9291 && e <= 9311) ||
          (e >= 9472 && e <= 9654) ||
          9655 === e ||
          (e >= 9656 && e <= 9664) ||
          9665 === e ||
          (e >= 9666 && e <= 9719) ||
          (e >= 9720 && e <= 9727) ||
          (e >= 9728 && e <= 9838) ||
          9839 === e ||
          (e >= 9840 && e <= 10087) ||
          10088 === e ||
          10089 === e ||
          10090 === e ||
          10091 === e ||
          10092 === e ||
          10093 === e ||
          10094 === e ||
          10095 === e ||
          10096 === e ||
          10097 === e ||
          10098 === e ||
          10099 === e ||
          10100 === e ||
          10101 === e ||
          (e >= 10132 && e <= 10175) ||
          (e >= 10176 && e <= 10180) ||
          10181 === e ||
          10182 === e ||
          (e >= 10183 && e <= 10213) ||
          10214 === e ||
          10215 === e ||
          10216 === e ||
          10217 === e ||
          10218 === e ||
          10219 === e ||
          10220 === e ||
          10221 === e ||
          10222 === e ||
          10223 === e ||
          (e >= 10224 && e <= 10239) ||
          (e >= 10240 && e <= 10495) ||
          (e >= 10496 && e <= 10626) ||
          10627 === e ||
          10628 === e ||
          10629 === e ||
          10630 === e ||
          10631 === e ||
          10632 === e ||
          10633 === e ||
          10634 === e ||
          10635 === e ||
          10636 === e ||
          10637 === e ||
          10638 === e ||
          10639 === e ||
          10640 === e ||
          10641 === e ||
          10642 === e ||
          10643 === e ||
          10644 === e ||
          10645 === e ||
          10646 === e ||
          10647 === e ||
          10648 === e ||
          (e >= 10649 && e <= 10711) ||
          10712 === e ||
          10713 === e ||
          10714 === e ||
          10715 === e ||
          (e >= 10716 && e <= 10747) ||
          10748 === e ||
          10749 === e ||
          (e >= 10750 && e <= 11007) ||
          (e >= 11008 && e <= 11055) ||
          (e >= 11056 && e <= 11076) ||
          (e >= 11077 && e <= 11078) ||
          (e >= 11079 && e <= 11084) ||
          (e >= 11085 && e <= 11123) ||
          (e >= 11124 && e <= 11125) ||
          (e >= 11126 && e <= 11157) ||
          11158 === e ||
          (e >= 11159 && e <= 11263) ||
          (e >= 11776 && e <= 11777) ||
          11778 === e ||
          11779 === e ||
          11780 === e ||
          11781 === e ||
          (e >= 11782 && e <= 11784) ||
          11785 === e ||
          11786 === e ||
          11787 === e ||
          11788 === e ||
          11789 === e ||
          (e >= 11790 && e <= 11798) ||
          11799 === e ||
          (e >= 11800 && e <= 11801) ||
          11802 === e ||
          11803 === e ||
          11804 === e ||
          11805 === e ||
          (e >= 11806 && e <= 11807) ||
          11808 === e ||
          11809 === e ||
          11810 === e ||
          11811 === e ||
          11812 === e ||
          11813 === e ||
          11814 === e ||
          11815 === e ||
          11816 === e ||
          11817 === e ||
          (e >= 11818 && e <= 11822) ||
          11823 === e ||
          (e >= 11824 && e <= 11833) ||
          (e >= 11834 && e <= 11835) ||
          (e >= 11836 && e <= 11839) ||
          11840 === e ||
          11841 === e ||
          11842 === e ||
          (e >= 11843 && e <= 11855) ||
          (e >= 11856 && e <= 11857) ||
          11858 === e ||
          (e >= 11859 && e <= 11903) ||
          (e >= 12289 && e <= 12291) ||
          12296 === e ||
          12297 === e ||
          12298 === e ||
          12299 === e ||
          12300 === e ||
          12301 === e ||
          12302 === e ||
          12303 === e ||
          12304 === e ||
          12305 === e ||
          (e >= 12306 && e <= 12307) ||
          12308 === e ||
          12309 === e ||
          12310 === e ||
          12311 === e ||
          12312 === e ||
          12313 === e ||
          12314 === e ||
          12315 === e ||
          12316 === e ||
          12317 === e ||
          (e >= 12318 && e <= 12319) ||
          12320 === e ||
          12336 === e ||
          64830 === e ||
          64831 === e ||
          (e >= 65093 && e <= 65094)
        );
      }
      function ue(e) {
        e.forEach(function (e) {
          if ((delete e.location, v(e) || g(e)))
            for (var t in e.options)
              delete e.options[t].location, ue(e.options[t].value);
          else
            (h(e) && _(e.style)) || ((p(e) || m(e)) && w(e.style))
              ? delete e.style.location
              : b(e) && ue(e.children);
        });
      }
      function ce(e, t) {
        void 0 === t && (t = {}),
          (t = (0, n.__assign)(
            { shouldParseSkeletons: !0, requiresOtherClause: !0 },
            t,
          ));
        var r = new ie(e, t).parse();
        if (r.err) {
          var i = SyntaxError(s[r.err.kind]);
          throw (
            ((i.location = r.err.location),
            (i.originalMessage = r.err.message),
            i)
          );
        }
        return (
          (null === t || void 0 === t ? void 0 : t.captureLocation) ||
            ue(r.val),
          r.val
        );
      }
      function le(e, t) {
        var r = t && t.cache ? t.cache : ye,
          n = t && t.serializer ? t.serializer : me;
        return (t && t.strategy ? t.strategy : pe)(e, {
          cache: r,
          serializer: n,
        });
      }
      function fe(e, t, r, n) {
        var i,
          o =
            null == (i = n) || "number" === typeof i || "boolean" === typeof i
              ? n
              : r(n),
          a = t.get(o);
        return (
          "undefined" === typeof a && ((a = e.call(this, n)), t.set(o, a)), a
        );
      }
      function de(e, t, r) {
        var n = Array.prototype.slice.call(arguments, 3),
          i = r(n),
          o = t.get(i);
        return (
          "undefined" === typeof o && ((o = e.apply(this, n)), t.set(i, o)), o
        );
      }
      function he(e, t, r, n, i) {
        return r.bind(t, e, n, i);
      }
      function pe(e, t) {
        return he(
          e,
          this,
          1 === e.length ? fe : de,
          t.cache.create(),
          t.serializer,
        );
      }
      var me = function () {
        return JSON.stringify(arguments);
      };
      function ve() {
        this.cache = Object.create(null);
      }
      (ve.prototype.get = function (e) {
        return this.cache[e];
      }),
        (ve.prototype.set = function (e, t) {
          this.cache[e] = t;
        });
      var ge,
        ye = {
          create: function () {
            return new ve();
          },
        },
        be = {
          variadic: function (e, t) {
            return he(e, this, de, t.cache.create(), t.serializer);
          },
          monadic: function (e, t) {
            return he(e, this, fe, t.cache.create(), t.serializer);
          },
        };
      !(function (e) {
        (e.MISSING_VALUE = "MISSING_VALUE"),
          (e.INVALID_VALUE = "INVALID_VALUE"),
          (e.MISSING_INTL_API = "MISSING_INTL_API");
      })(ge || (ge = {}));
      var _e,
        we = (function (e) {
          function t(t, r, n) {
            var i = e.call(this, t) || this;
            return (i.code = r), (i.originalMessage = n), i;
          }
          return (
            (0, n.__extends)(t, e),
            (t.prototype.toString = function () {
              return "[formatjs Error: "
                .concat(this.code, "] ")
                .concat(this.message);
            }),
            t
          );
        })(Error),
        Ee = (function (e) {
          function t(t, r, n, i) {
            return (
              e.call(
                this,
                'Invalid values for "'
                  .concat(t, '": "')
                  .concat(r, '". Options are "')
                  .concat(Object.keys(n).join('", "'), '"'),
                ge.INVALID_VALUE,
                i,
              ) || this
            );
          }
          return (0, n.__extends)(t, e), t;
        })(we),
        Se = (function (e) {
          function t(t, r, n) {
            return (
              e.call(
                this,
                'Value for "'.concat(t, '" must be of type ').concat(r),
                ge.INVALID_VALUE,
                n,
              ) || this
            );
          }
          return (0, n.__extends)(t, e), t;
        })(we),
        ke = (function (e) {
          function t(t, r) {
            return (
              e.call(
                this,
                'The intl string context variable "'
                  .concat(t, '" was not provided to the string "')
                  .concat(r, '"'),
                ge.MISSING_VALUE,
                r,
              ) || this
            );
          }
          return (0, n.__extends)(t, e), t;
        })(we);
      function Ce(e) {
        return "function" === typeof e;
      }
      function Te(e, t, r, n, i, o, a) {
        if (1 === e.length && f(e[0]))
          return [{ type: _e.literal, value: e[0].value }];
        for (var s = [], u = 0, c = e; u < c.length; u++) {
          var l = c[u];
          if (f(l)) s.push({ type: _e.literal, value: l.value });
          else if (y(l))
            "number" === typeof o &&
              s.push({
                type: _e.literal,
                value: r.getNumberFormat(t).format(o),
              });
          else {
            var E = l.value;
            if (!i || !(E in i)) throw new ke(E, a);
            var S = i[E];
            if (d(l))
              (S && "string" !== typeof S && "number" !== typeof S) ||
                (S =
                  "string" === typeof S || "number" === typeof S
                    ? String(S)
                    : ""),
                s.push({
                  type: "string" === typeof S ? _e.literal : _e.object,
                  value: S,
                });
            else if (p(l)) {
              var k =
                "string" === typeof l.style
                  ? n.date[l.style]
                  : w(l.style)
                    ? l.style.parsedOptions
                    : void 0;
              s.push({
                type: _e.literal,
                value: r.getDateTimeFormat(t, k).format(S),
              });
            } else if (m(l)) {
              k =
                "string" === typeof l.style
                  ? n.time[l.style]
                  : w(l.style)
                    ? l.style.parsedOptions
                    : n.time.medium;
              s.push({
                type: _e.literal,
                value: r.getDateTimeFormat(t, k).format(S),
              });
            } else if (h(l)) {
              (k =
                "string" === typeof l.style
                  ? n.number[l.style]
                  : _(l.style)
                    ? l.style.parsedOptions
                    : void 0) &&
                k.scale &&
                (S *= k.scale || 1),
                s.push({
                  type: _e.literal,
                  value: r.getNumberFormat(t, k).format(S),
                });
            } else {
              if (b(l)) {
                var C = l.children,
                  T = l.value,
                  P = i[T];
                if (!Ce(P)) throw new Se(T, "function", a);
                var O = P(
                  Te(C, t, r, n, i, o).map(function (e) {
                    return e.value;
                  }),
                );
                Array.isArray(O) || (O = [O]),
                  s.push.apply(
                    s,
                    O.map(function (e) {
                      return {
                        type: "string" === typeof e ? _e.literal : _e.object,
                        value: e,
                      };
                    }),
                  );
              }
              if (v(l)) {
                if (!(A = l.options[S] || l.options.other))
                  throw new Ee(l.value, S, Object.keys(l.options), a);
                s.push.apply(s, Te(A.value, t, r, n, i));
              } else if (g(l)) {
                var A;
                if (!(A = l.options["=".concat(S)])) {
                  if (!Intl.PluralRules)
                    throw new we(
                      'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                      ge.MISSING_INTL_API,
                      a,
                    );
                  var I = r
                    .getPluralRules(t, { type: l.pluralType })
                    .select(S - (l.offset || 0));
                  A = l.options[I] || l.options.other;
                }
                if (!A) throw new Ee(l.value, S, Object.keys(l.options), a);
                s.push.apply(s, Te(A.value, t, r, n, i, S - (l.offset || 0)));
              } else;
            }
          }
        }
        return (function (e) {
          return e.length < 2
            ? e
            : e.reduce(function (e, t) {
                var r = e[e.length - 1];
                return (
                  r && r.type === _e.literal && t.type === _e.literal
                    ? (r.value += t.value)
                    : e.push(t),
                  e
                );
              }, []);
        })(s);
      }
      function Pe(e, t) {
        return t
          ? Object.keys(e).reduce(
              function (r, i) {
                var o, a;
                return (
                  (r[i] =
                    ((o = e[i]),
                    (a = t[i])
                      ? (0, n.__assign)(
                          (0, n.__assign)(
                            (0, n.__assign)({}, o || {}),
                            a || {},
                          ),
                          Object.keys(o).reduce(function (e, t) {
                            return (
                              (e[t] = (0, n.__assign)(
                                (0, n.__assign)({}, o[t]),
                                a[t] || {},
                              )),
                              e
                            );
                          }, {}),
                        )
                      : o)),
                  r
                );
              },
              (0, n.__assign)({}, e),
            )
          : e;
      }
      function Oe(e) {
        return {
          create: function () {
            return {
              get: function (t) {
                return e[t];
              },
              set: function (t, r) {
                e[t] = r;
              },
            };
          },
        };
      }
      !(function (e) {
        (e[(e.literal = 0)] = "literal"), (e[(e.object = 1)] = "object");
      })(_e || (_e = {}));
      var Ae,
        Ie = (function () {
          function e(t, r, i, o) {
            var a,
              s = this;
            if (
              (void 0 === r && (r = e.defaultLocale),
              (this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {},
              }),
              (this.format = function (e) {
                var t = s.formatToParts(e);
                if (1 === t.length) return t[0].value;
                var r = t.reduce(function (e, t) {
                  return (
                    e.length &&
                    t.type === _e.literal &&
                    "string" === typeof e[e.length - 1]
                      ? (e[e.length - 1] += t.value)
                      : e.push(t.value),
                    e
                  );
                }, []);
                return r.length <= 1 ? r[0] || "" : r;
              }),
              (this.formatToParts = function (e) {
                return Te(
                  s.ast,
                  s.locales,
                  s.formatters,
                  s.formats,
                  e,
                  void 0,
                  s.message,
                );
              }),
              (this.resolvedOptions = function () {
                var e;
                return {
                  locale:
                    (null === (e = s.resolvedLocale) || void 0 === e
                      ? void 0
                      : e.toString()) ||
                    Intl.NumberFormat.supportedLocalesOf(s.locales)[0],
                };
              }),
              (this.getAst = function () {
                return s.ast;
              }),
              (this.locales = r),
              (this.resolvedLocale = e.resolveLocale(r)),
              "string" === typeof t)
            ) {
              if (((this.message = t), !e.__parse))
                throw new TypeError(
                  "IntlMessageFormat.__parse must be set to process `message` of type `string`",
                );
              var u = o || {},
                c = (u.formatters, (0, n.__rest)(u, ["formatters"]));
              this.ast = e.__parse(
                t,
                (0, n.__assign)((0, n.__assign)({}, c), {
                  locale: this.resolvedLocale,
                }),
              );
            } else this.ast = t;
            if (!Array.isArray(this.ast))
              throw new TypeError(
                "A message must be provided as a String or AST.",
              );
            (this.formats = Pe(e.formats, i)),
              (this.formatters =
                (o && o.formatters) ||
                (void 0 === (a = this.formatterCache) &&
                  (a = { number: {}, dateTime: {}, pluralRules: {} }),
                {
                  getNumberFormat: le(
                    function () {
                      for (var e, t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                      return new ((e = Intl.NumberFormat).bind.apply(
                        e,
                        (0, n.__spreadArray)([void 0], t, !1),
                      ))();
                    },
                    { cache: Oe(a.number), strategy: be.variadic },
                  ),
                  getDateTimeFormat: le(
                    function () {
                      for (var e, t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                      return new ((e = Intl.DateTimeFormat).bind.apply(
                        e,
                        (0, n.__spreadArray)([void 0], t, !1),
                      ))();
                    },
                    { cache: Oe(a.dateTime), strategy: be.variadic },
                  ),
                  getPluralRules: le(
                    function () {
                      for (var e, t = [], r = 0; r < arguments.length; r++)
                        t[r] = arguments[r];
                      return new ((e = Intl.PluralRules).bind.apply(
                        e,
                        (0, n.__spreadArray)([void 0], t, !1),
                      ))();
                    },
                    { cache: Oe(a.pluralRules), strategy: be.variadic },
                  ),
                }));
          }
          return (
            Object.defineProperty(e, "defaultLocale", {
              get: function () {
                return (
                  e.memoizedDefaultLocale ||
                    (e.memoizedDefaultLocale =
                      new Intl.NumberFormat().resolvedOptions().locale),
                  e.memoizedDefaultLocale
                );
              },
              enumerable: !1,
              configurable: !0,
            }),
            (e.memoizedDefaultLocale = null),
            (e.resolveLocale = function (e) {
              if ("undefined" !== typeof Intl.Locale) {
                var t = Intl.NumberFormat.supportedLocalesOf(e);
                return t.length > 0
                  ? new Intl.Locale(t[0])
                  : new Intl.Locale("string" === typeof e ? e : e[0]);
              }
            }),
            (e.__parse = ce),
            (e.formats = {
              number: {
                integer: { maximumFractionDigits: 0 },
                currency: { style: "currency" },
                percent: { style: "percent" },
              },
              date: {
                short: { month: "numeric", day: "numeric", year: "2-digit" },
                medium: { month: "short", day: "numeric", year: "numeric" },
                long: { month: "long", day: "numeric", year: "numeric" },
                full: {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                },
              },
              time: {
                short: { hour: "numeric", minute: "numeric" },
                medium: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                },
                long: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                },
                full: {
                  hour: "numeric",
                  minute: "numeric",
                  second: "numeric",
                  timeZoneName: "short",
                },
              },
            }),
            e
          );
        })();
      !(function (e) {
        (e.FORMAT_ERROR = "FORMAT_ERROR"),
          (e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER"),
          (e.INVALID_CONFIG = "INVALID_CONFIG"),
          (e.MISSING_DATA = "MISSING_DATA"),
          (e.MISSING_TRANSLATION = "MISSING_TRANSLATION");
      })(Ae || (Ae = {}));
      var xe = (function (e) {
          function t(r, n, i) {
            var o = this,
              a = i ? (i instanceof Error ? i : new Error(String(i))) : void 0;
            return (
              ((o =
                e.call(
                  this,
                  "[@formatjs/intl Error "
                    .concat(r, "] ")
                    .concat(n, "\n")
                    .concat(
                      a ? "\n".concat(a.message, "\n").concat(a.stack) : "",
                    ),
                ) || this).code = r),
              "function" === typeof Error.captureStackTrace &&
                Error.captureStackTrace(o, t),
              o
            );
          }
          return (0, n.__extends)(t, e), t;
        })(Error),
        Me = (function (e) {
          function t(t, r) {
            return e.call(this, Ae.UNSUPPORTED_FORMATTER, t, r) || this;
          }
          return (0, n.__extends)(t, e), t;
        })(xe),
        Re = (function (e) {
          function t(t, r) {
            return e.call(this, Ae.INVALID_CONFIG, t, r) || this;
          }
          return (0, n.__extends)(t, e), t;
        })(xe),
        Ne = (function (e) {
          function t(t, r) {
            return e.call(this, Ae.MISSING_DATA, t, r) || this;
          }
          return (0, n.__extends)(t, e), t;
        })(xe),
        De = (function (e) {
          function t(t, r, n) {
            var i =
              e.call(
                this,
                Ae.FORMAT_ERROR,
                "".concat(t, "\nLocale: ").concat(r, "\n"),
                n,
              ) || this;
            return (i.locale = r), i;
          }
          return (0, n.__extends)(t, e), t;
        })(xe),
        Le = (function (e) {
          function t(t, r, n, i) {
            var o =
              e.call(
                this,
                ""
                  .concat(t, "\nMessageID: ")
                  .concat(
                    null === n || void 0 === n ? void 0 : n.id,
                    "\nDefault Message: ",
                  )
                  .concat(
                    null === n || void 0 === n ? void 0 : n.defaultMessage,
                    "\nDescription: ",
                  )
                  .concat(
                    null === n || void 0 === n ? void 0 : n.description,
                    "\n",
                  ),
                r,
                i,
              ) || this;
            return (o.descriptor = n), (o.locale = r), o;
          }
          return (0, n.__extends)(t, e), t;
        })(De),
        je = (function (e) {
          function t(t, r) {
            var n =
              e.call(
                this,
                Ae.MISSING_TRANSLATION,
                'Missing message: "'
                  .concat(t.id, '" for locale "')
                  .concat(r, '", using ')
                  .concat(
                    t.defaultMessage
                      ? "default message (".concat(
                          "string" === typeof t.defaultMessage
                            ? t.defaultMessage
                            : t.defaultMessage
                                .map(function (e) {
                                  var t;
                                  return null !== (t = e.value) && void 0 !== t
                                    ? t
                                    : JSON.stringify(e);
                                })
                                .join(),
                          ")",
                        )
                      : "id",
                    " as fallback.",
                  ),
              ) || this;
            return (n.descriptor = t), n;
          }
          return (0, n.__extends)(t, e), t;
        })(xe);
      function Be(e, t, r) {
        return (
          void 0 === r && (r = {}),
          t.reduce(function (t, n) {
            return n in e ? (t[n] = e[n]) : n in r && (t[n] = r[n]), t;
          }, {})
        );
      }
      var He = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function (e) {
          0;
        },
        onWarn: function (e) {
          0;
        },
      };
      function Fe() {
        return {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {},
        };
      }
      function Ue(e) {
        return {
          create: function () {
            return {
              get: function (t) {
                return e[t];
              },
              set: function (t, r) {
                e[t] = r;
              },
            };
          },
        };
      }
      function Ge(e, t, r, n) {
        var i,
          o = e && e[t];
        if ((o && (i = o[r]), i)) return i;
        n(new Me("No ".concat(t, " format named: ").concat(r)));
      }
      function $e(e) {
        l(
          e,
          "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.",
        );
      }
      var Ve = (0, n.__assign)((0, n.__assign)({}, He), {
        textComponent: i.Fragment,
      });
      function ze(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var r = Object.keys(e),
          n = Object.keys(t),
          i = r.length;
        if (n.length !== i) return !1;
        for (var o = 0; o < i; o++) {
          var a = r[o];
          if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a))
            return !1;
        }
        return !0;
      }
      var Ke,
        qe,
        We =
          "undefined" === typeof window ||
          window.__REACT_INTL_BYPASS_GLOBAL_CONTEXT__
            ? i.createContext(null)
            : window.__REACT_INTL_CONTEXT__ ||
              (window.__REACT_INTL_CONTEXT__ = i.createContext(null)),
        Xe = We.Consumer,
        Ye = We.Provider,
        Ze = We;
      function Je(e, t) {
        var r,
          o = t || {},
          s = o.intlPropName,
          u = void 0 === s ? "intl" : s,
          c = o.forwardRef,
          l = void 0 !== c && c,
          f = o.enforceContext,
          d = void 0 === f || f,
          h = function (t) {
            return i.createElement(Xe, null, function (r) {
              var o;
              d && $e(r);
              var a = (((o = {})[u] = r), o);
              return i.createElement(
                e,
                (0, n.__assign)({}, t, a, { ref: l ? t.forwardedRef : null }),
              );
            });
          };
        return (
          (h.displayName = "injectIntl(".concat(
            (r = e).displayName || r.name || "Component",
            ")",
          )),
          (h.WrappedComponent = e),
          l
            ? a()(
                i.forwardRef(function (e, t) {
                  return i.createElement(
                    h,
                    (0, n.__assign)({}, e, { forwardedRef: t }),
                  );
                }),
                e,
              )
            : a()(h, e)
        );
      }
      function Qe() {
        var e = i.useContext(Ze);
        return $e(e), e;
      }
      !(function (e) {
        (e.formatDate = "FormattedDate"),
          (e.formatTime = "FormattedTime"),
          (e.formatNumber = "FormattedNumber"),
          (e.formatList = "FormattedList"),
          (e.formatDisplayName = "FormattedDisplayName");
      })(Ke || (Ke = {})),
        (function (e) {
          (e.formatDate = "FormattedDateParts"),
            (e.formatTime = "FormattedTimeParts"),
            (e.formatNumber = "FormattedNumberParts"),
            (e.formatList = "FormattedListParts");
        })(qe || (qe = {}));
      var et = function (e) {
        var t = Qe(),
          r = e.value,
          i = e.children,
          o = (0, n.__rest)(e, ["value", "children"]);
        return i(t.formatNumberToParts(r, o));
      };
      et.displayName = "FormattedNumberParts";
      var tt = function (e) {
        var t = Qe(),
          r = e.value,
          i = e.children,
          o = (0, n.__rest)(e, ["value", "children"]);
        return i(t.formatListToParts(r, o));
      };
      function rt(e) {
        var t = function (t) {
          var r = Qe(),
            i = t.value,
            o = t.children,
            a = (0, n.__rest)(t, ["value", "children"]),
            s = "string" === typeof i ? new Date(i || 0) : i;
          return o(
            "formatDate" === e
              ? r.formatDateToParts(s, a)
              : r.formatTimeToParts(s, a),
          );
        };
        return (t.displayName = qe[e]), t;
      }
      function nt(e) {
        var t = function (t) {
          var r = Qe(),
            o = t.value,
            a = t.children,
            s = (0, n.__rest)(t, ["value", "children"]),
            u = r[e](o, s);
          if ("function" === typeof a) return a(u);
          var c = r.textComponent || i.Fragment;
          return i.createElement(c, null, u);
        };
        return (t.displayName = Ke[e]), t;
      }
      function it(e, t) {
        return Object.keys(e).reduce(function (r, i) {
          return (r[i] = (0, n.__assign)({ timeZone: t }, e[i])), r;
        }, {});
      }
      function ot(e, t) {
        return Object.keys((0, n.__assign)((0, n.__assign)({}, e), t)).reduce(
          function (r, i) {
            return (
              (r[i] = (0, n.__assign)(
                (0, n.__assign)({}, e[i] || {}),
                t[i] || {},
              )),
              r
            );
          },
          {},
        );
      }
      function at(e, t) {
        if (!t) return e;
        var r = Ie.formats;
        return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, r), e), {
          date: ot(it(r.date, t), it(e.date || {}, t)),
          time: ot(it(r.time, t), it(e.time || {}, t)),
        });
      }
      et.displayName = "FormattedNumberParts";
      var st = function (e, t, r, i, o) {
          var a = e.locale,
            s = e.formats,
            c = e.messages,
            f = e.defaultLocale,
            d = e.defaultFormats,
            h = e.fallbackOnEmptyString,
            p = e.onError,
            m = e.timeZone,
            v = e.defaultRichTextElements;
          void 0 === r && (r = { id: "" });
          var g = r.id,
            y = r.defaultMessage;
          l(
            !!g,
            "[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue",
          );
          var b = String(g),
            _ = c && Object.prototype.hasOwnProperty.call(c, b) && c[b];
          if (Array.isArray(_) && 1 === _.length && _[0].type === u.literal)
            return _[0].value;
          if (!i && _ && "string" === typeof _ && !v)
            return _.replace(/'\{(.*?)\}'/gi, "{$1}");
          if (
            ((i = (0, n.__assign)((0, n.__assign)({}, v), i || {})),
            (s = at(s, m)),
            (d = at(d, m)),
            !_)
          ) {
            if (!1 === h && "" === _) return _;
            if (
              ((!y || (a && a.toLowerCase() !== f.toLowerCase())) &&
                p(new je(r, a)),
              y)
            )
              try {
                return t.getMessageFormat(y, f, d, o).format(i);
              } catch (w) {
                return (
                  p(
                    new Le(
                      'Error formatting default message for: "'.concat(
                        b,
                        '", rendering default message verbatim',
                      ),
                      a,
                      r,
                      w,
                    ),
                  ),
                  "string" === typeof y ? y : b
                );
              }
            return b;
          }
          try {
            return t
              .getMessageFormat(
                _,
                a,
                s,
                (0, n.__assign)({ formatters: t }, o || {}),
              )
              .format(i);
          } catch (w) {
            p(
              new Le(
                'Error formatting message: "'
                  .concat(b, '", using ')
                  .concat(y ? "default message" : "id", " as fallback."),
                a,
                r,
                w,
              ),
            );
          }
          if (y)
            try {
              return t.getMessageFormat(y, f, d, o).format(i);
            } catch (w) {
              p(
                new Le(
                  'Error formatting the default message for: "'.concat(
                    b,
                    '", rendering message verbatim',
                  ),
                  a,
                  r,
                  w,
                ),
              );
            }
          return "string" === typeof _ ? _ : "string" === typeof y ? y : b;
        },
        ut = [
          "style",
          "currency",
          "unit",
          "unitDisplay",
          "useGrouping",
          "minimumIntegerDigits",
          "minimumFractionDigits",
          "maximumFractionDigits",
          "minimumSignificantDigits",
          "maximumSignificantDigits",
          "compactDisplay",
          "currencyDisplay",
          "currencySign",
          "notation",
          "signDisplay",
          "unit",
          "unitDisplay",
          "numberingSystem",
          "trailingZeroDisplay",
          "roundingPriority",
          "roundingIncrement",
          "roundingMode",
        ];
      function ct(e, t, r) {
        var n = e.locale,
          i = e.formats,
          o = e.onError;
        void 0 === r && (r = {});
        var a = r.format,
          s = (a && Ge(i, "number", a, o)) || {};
        return t(n, Be(r, ut, s));
      }
      function lt(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return ct(e, t, n).format(r);
        } catch (i) {
          e.onError(new De("Error formatting number.", e.locale, i));
        }
        return String(r);
      }
      function ft(e, t, r, n) {
        void 0 === n && (n = {});
        try {
          return ct(e, t, n).formatToParts(r);
        } catch (i) {
          e.onError(new De("Error formatting number.", e.locale, i));
        }
        return [];
      }
      var dt = ["numeric", "style"];
      function ht(e, t, r, n, i) {
        void 0 === i && (i = {}),
          n || (n = "second"),
          Intl.RelativeTimeFormat ||
            e.onError(
              new we(
                'Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n',
                ge.MISSING_INTL_API,
              ),
            );
        try {
          return (function (e, t, r) {
            var n = e.locale,
              i = e.formats,
              o = e.onError;
            void 0 === r && (r = {});
            var a = r.format,
              s = (!!a && Ge(i, "relative", a, o)) || {};
            return t(n, Be(r, dt, s));
          })(e, t, i).format(r, n);
        } catch (o) {
          e.onError(new De("Error formatting relative time.", e.locale, o));
        }
        return String(r);
      }
      var pt = [
        "formatMatcher",
        "timeZone",
        "hour12",
        "weekday",
        "era",
        "year",
        "month",
        "day",
        "hour",
        "minute",
        "second",
        "timeZoneName",
        "hourCycle",
        "dateStyle",
        "timeStyle",
        "calendar",
        "numberingSystem",
        "fractionalSecondDigits",
      ];
      function mt(e, t, r, i) {
        var o = e.locale,
          a = e.formats,
          s = e.onError,
          u = e.timeZone;
        void 0 === i && (i = {});
        var c = i.format,
          l = (0, n.__assign)(
            (0, n.__assign)({}, u && { timeZone: u }),
            c && Ge(a, t, c, s),
          ),
          f = Be(i, pt, l);
        return (
          "time" !== t ||
            f.hour ||
            f.minute ||
            f.second ||
            f.timeStyle ||
            f.dateStyle ||
            (f = (0, n.__assign)((0, n.__assign)({}, f), {
              hour: "numeric",
              minute: "numeric",
            })),
          r(o, f)
        );
      }
      function vt(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          a = void 0 === o ? {} : o,
          s = "string" === typeof i ? new Date(i || 0) : i;
        try {
          return mt(e, "date", t, a).format(s);
        } catch (u) {
          e.onError(new De("Error formatting date.", e.locale, u));
        }
        return String(s);
      }
      function gt(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          a = void 0 === o ? {} : o,
          s = "string" === typeof i ? new Date(i || 0) : i;
        try {
          return mt(e, "time", t, a).format(s);
        } catch (u) {
          e.onError(new De("Error formatting time.", e.locale, u));
        }
        return String(s);
      }
      function yt(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          a = r[2],
          s = void 0 === a ? {} : a,
          u = e.timeZone,
          c = e.locale,
          l = e.onError,
          f = Be(s, pt, u ? { timeZone: u } : {});
        try {
          return t(c, f).formatRange(i, o);
        } catch (d) {
          l(new De("Error formatting date time range.", e.locale, d));
        }
        return String(i);
      }
      function bt(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          a = void 0 === o ? {} : o,
          s = "string" === typeof i ? new Date(i || 0) : i;
        try {
          return mt(e, "date", t, a).formatToParts(s);
        } catch (u) {
          e.onError(new De("Error formatting date.", e.locale, u));
        }
        return [];
      }
      function _t(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++)
          r[n - 2] = arguments[n];
        var i = r[0],
          o = r[1],
          a = void 0 === o ? {} : o,
          s = "string" === typeof i ? new Date(i || 0) : i;
        try {
          return mt(e, "time", t, a).formatToParts(s);
        } catch (u) {
          e.onError(new De("Error formatting time.", e.locale, u));
        }
        return [];
      }
      var wt = ["type"];
      function Et(e, t, r, n) {
        var i = e.locale,
          o = e.onError;
        void 0 === n && (n = {}),
          Intl.PluralRules ||
            o(
              new we(
                'Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n',
                ge.MISSING_INTL_API,
              ),
            );
        var a = Be(n, wt);
        try {
          return t(i, a).select(r);
        } catch (s) {
          o(new De("Error formatting plural.", i, s));
        }
        return "other";
      }
      var St = ["type", "style"],
        kt = Date.now();
      function Ct(e, t, r, n) {
        void 0 === n && (n = {});
        var i = Tt(e, t, r, n).reduce(function (e, t) {
          var r = t.value;
          return (
            "string" !== typeof r
              ? e.push(r)
              : "string" === typeof e[e.length - 1]
                ? (e[e.length - 1] += r)
                : e.push(r),
            e
          );
        }, []);
        return 1 === i.length ? i[0] : 0 === i.length ? "" : i;
      }
      function Tt(e, t, r, i) {
        var o = e.locale,
          a = e.onError;
        void 0 === i && (i = {}),
          Intl.ListFormat ||
            a(
              new we(
                'Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n',
                ge.MISSING_INTL_API,
              ),
            );
        var s = Be(i, St);
        try {
          var u = {},
            c = r.map(function (e, t) {
              if ("object" === typeof e) {
                var r = (function (e) {
                  return "".concat(kt, "_").concat(e, "_").concat(kt);
                })(t);
                return (u[r] = e), r;
              }
              return String(e);
            });
          return t(o, s)
            .formatToParts(c)
            .map(function (e) {
              return "literal" === e.type
                ? e
                : (0, n.__assign)((0, n.__assign)({}, e), {
                    value: u[e.value] || e.value,
                  });
            });
        } catch (l) {
          a(new De("Error formatting list.", o, l));
        }
        return r;
      }
      var Pt = ["style", "type", "fallback", "languageDisplay"];
      function Ot(e, t, r, n) {
        var i = e.locale,
          o = e.onError;
        Intl.DisplayNames ||
          o(
            new we(
              'Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n',
              ge.MISSING_INTL_API,
            ),
          );
        var a = Be(n, Pt);
        try {
          return t(i, a).of(r);
        } catch (s) {
          o(new De("Error formatting display name.", i, s));
        }
      }
      function At(e) {
        var t;
        e.onWarn &&
          e.defaultRichTextElements &&
          "string" ===
            typeof ((t = e.messages || {}) ? t[Object.keys(t)[0]] : void 0) &&
          e.onWarn(
            '[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.io/docs/getting-started/message-distribution',
          );
      }
      function It(e, t) {
        var r = (function (e) {
            void 0 === e &&
              (e = {
                dateTime: {},
                number: {},
                message: {},
                relativeTime: {},
                pluralRules: {},
                list: {},
                displayNames: {},
              });
            var t = Intl.RelativeTimeFormat,
              r = Intl.ListFormat,
              i = Intl.DisplayNames,
              o = le(
                function () {
                  for (var e, t = [], r = 0; r < arguments.length; r++)
                    t[r] = arguments[r];
                  return new ((e = Intl.DateTimeFormat).bind.apply(
                    e,
                    (0, n.__spreadArray)([void 0], t, !1),
                  ))();
                },
                { cache: Ue(e.dateTime), strategy: be.variadic },
              ),
              a = le(
                function () {
                  for (var e, t = [], r = 0; r < arguments.length; r++)
                    t[r] = arguments[r];
                  return new ((e = Intl.NumberFormat).bind.apply(
                    e,
                    (0, n.__spreadArray)([void 0], t, !1),
                  ))();
                },
                { cache: Ue(e.number), strategy: be.variadic },
              ),
              s = le(
                function () {
                  for (var e, t = [], r = 0; r < arguments.length; r++)
                    t[r] = arguments[r];
                  return new ((e = Intl.PluralRules).bind.apply(
                    e,
                    (0, n.__spreadArray)([void 0], t, !1),
                  ))();
                },
                { cache: Ue(e.pluralRules), strategy: be.variadic },
              );
            return {
              getDateTimeFormat: o,
              getNumberFormat: a,
              getMessageFormat: le(
                function (e, t, r, i) {
                  return new Ie(
                    e,
                    t,
                    r,
                    (0, n.__assign)(
                      {
                        formatters: {
                          getNumberFormat: a,
                          getDateTimeFormat: o,
                          getPluralRules: s,
                        },
                      },
                      i || {},
                    ),
                  );
                },
                { cache: Ue(e.message), strategy: be.variadic },
              ),
              getRelativeTimeFormat: le(
                function () {
                  for (var e = [], r = 0; r < arguments.length; r++)
                    e[r] = arguments[r];
                  return new (t.bind.apply(
                    t,
                    (0, n.__spreadArray)([void 0], e, !1),
                  ))();
                },
                { cache: Ue(e.relativeTime), strategy: be.variadic },
              ),
              getPluralRules: s,
              getListFormat: le(
                function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  return new (r.bind.apply(
                    r,
                    (0, n.__spreadArray)([void 0], e, !1),
                  ))();
                },
                { cache: Ue(e.list), strategy: be.variadic },
              ),
              getDisplayNames: le(
                function () {
                  for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                  return new (i.bind.apply(
                    i,
                    (0, n.__spreadArray)([void 0], e, !1),
                  ))();
                },
                { cache: Ue(e.displayNames), strategy: be.variadic },
              ),
            };
          })(t),
          i = (0, n.__assign)((0, n.__assign)({}, He), e),
          o = i.locale,
          a = i.defaultLocale,
          s = i.onError;
        return (
          o
            ? !Intl.NumberFormat.supportedLocalesOf(o).length && s
              ? s(
                  new Ne(
                    'Missing locale data for locale: "'
                      .concat(
                        o,
                        '" in Intl.NumberFormat. Using default locale: "',
                      )
                      .concat(
                        a,
                        '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                      ),
                  ),
                )
              : !Intl.DateTimeFormat.supportedLocalesOf(o).length &&
                s &&
                s(
                  new Ne(
                    'Missing locale data for locale: "'
                      .concat(
                        o,
                        '" in Intl.DateTimeFormat. Using default locale: "',
                      )
                      .concat(
                        a,
                        '" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details',
                      ),
                  ),
                )
            : (s &&
                s(
                  new Re(
                    '"locale" was not configured, using "'.concat(
                      a,
                      '" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details',
                    ),
                  ),
                ),
              (i.locale = i.defaultLocale || "en")),
          At(i),
          (0, n.__assign)((0, n.__assign)({}, i), {
            formatters: r,
            formatNumber: lt.bind(null, i, r.getNumberFormat),
            formatNumberToParts: ft.bind(null, i, r.getNumberFormat),
            formatRelativeTime: ht.bind(null, i, r.getRelativeTimeFormat),
            formatDate: vt.bind(null, i, r.getDateTimeFormat),
            formatDateToParts: bt.bind(null, i, r.getDateTimeFormat),
            formatTime: gt.bind(null, i, r.getDateTimeFormat),
            formatDateTimeRange: yt.bind(null, i, r.getDateTimeFormat),
            formatTimeToParts: _t.bind(null, i, r.getDateTimeFormat),
            formatPlural: Et.bind(null, i, r.getPluralRules),
            formatMessage: st.bind(null, i, r),
            $t: st.bind(null, i, r),
            formatList: Ct.bind(null, i, r.getListFormat),
            formatListToParts: Tt.bind(null, i, r.getListFormat),
            formatDisplayName: Ot.bind(null, i, r.getDisplayNames),
          })
        );
      }
      function xt(e) {
        return e
          ? Object.keys(e).reduce(function (t, r) {
              var n,
                o = e[r];
              return (
                (t[r] = Ce(o)
                  ? ((n = o),
                    function (e) {
                      return n(i.Children.toArray(e));
                    })
                  : o),
                t
              );
            }, {})
          : e;
      }
      var Mt = function (e, t, r, o) {
          for (var a = [], s = 4; s < arguments.length; s++)
            a[s - 4] = arguments[s];
          var u = xt(o),
            c = st.apply(void 0, (0, n.__spreadArray)([e, t, r, u], a, !1));
          return Array.isArray(c) ? i.Children.toArray(c) : c;
        },
        Rt = function (e, t) {
          var r = e.defaultRichTextElements,
            i = (0, n.__rest)(e, ["defaultRichTextElements"]),
            o = xt(r),
            a = It(
              (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, Ve), i), {
                defaultRichTextElements: o,
              }),
              t,
            ),
            s = {
              locale: a.locale,
              timeZone: a.timeZone,
              fallbackOnEmptyString: a.fallbackOnEmptyString,
              formats: a.formats,
              defaultLocale: a.defaultLocale,
              defaultFormats: a.defaultFormats,
              messages: a.messages,
              onError: a.onError,
              defaultRichTextElements: o,
            };
          return (0, n.__assign)((0, n.__assign)({}, a), {
            formatMessage: Mt.bind(null, s, a.formatters),
            $t: Mt.bind(null, s, a.formatters),
          });
        };
      function Nt(e) {
        return {
          locale: e.locale,
          timeZone: e.timeZone,
          fallbackOnEmptyString: e.fallbackOnEmptyString,
          formats: e.formats,
          textComponent: e.textComponent,
          messages: e.messages,
          defaultLocale: e.defaultLocale,
          defaultFormats: e.defaultFormats,
          onError: e.onError,
          onWarn: e.onWarn,
          wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
          defaultRichTextElements: e.defaultRichTextElements,
        };
      }
      var Dt = (function (e) {
          function t() {
            var t = (null !== e && e.apply(this, arguments)) || this;
            return (
              (t.cache = {
                dateTime: {},
                number: {},
                message: {},
                relativeTime: {},
                pluralRules: {},
                list: {},
                displayNames: {},
              }),
              (t.state = {
                cache: t.cache,
                intl: Rt(Nt(t.props), t.cache),
                prevConfig: Nt(t.props),
              }),
              t
            );
          }
          return (
            (0, n.__extends)(t, e),
            (t.getDerivedStateFromProps = function (e, t) {
              var r = t.prevConfig,
                n = t.cache,
                i = Nt(e);
              return ze(r, i) ? null : { intl: Rt(i, n), prevConfig: i };
            }),
            (t.prototype.render = function () {
              return (
                $e(this.state.intl),
                i.createElement(
                  Ye,
                  { value: this.state.intl },
                  this.props.children,
                )
              );
            }),
            (t.displayName = "IntlProvider"),
            (t.defaultProps = Ve),
            t
          );
        })(i.PureComponent),
        Lt = Dt,
        jt = 3600;
      function Bt(e) {
        var t = Math.abs(e);
        return t < 60
          ? "second"
          : t < jt
            ? "minute"
            : t < 86400
              ? "hour"
              : "day";
      }
      function Ht(e) {
        switch (e) {
          case "second":
            return 1;
          case "minute":
            return 60;
          case "hour":
            return jt;
          default:
            return 86400;
        }
      }
      var Ft = ["second", "minute", "hour"];
      function Ut(e) {
        return void 0 === e && (e = "second"), Ft.indexOf(e) > -1;
      }
      var Gt = function (e) {
          var t = Qe(),
            r = t.formatRelativeTime,
            o = t.textComponent,
            a = e.children,
            s = r(
              e.value || 0,
              e.unit,
              (0, n.__rest)(e, ["children", "value", "unit"]),
            );
          return "function" === typeof a
            ? a(s)
            : o
              ? i.createElement(o, null, s)
              : i.createElement(i.Fragment, null, s);
        },
        $t = function (e) {
          var t = e.value,
            r = void 0 === t ? 0 : t,
            o = e.unit,
            a = void 0 === o ? "second" : o,
            s = e.updateIntervalInSeconds,
            u = (0, n.__rest)(e, ["value", "unit", "updateIntervalInSeconds"]);
          l(
            !s || !(!s || !Ut(a)),
            "Cannot schedule update with unit longer than hour",
          );
          var c,
            f = i.useState(),
            d = f[0],
            h = f[1],
            p = i.useState(0),
            m = p[0],
            v = p[1],
            g = i.useState(0),
            y = g[0],
            b = g[1];
          (a === d && r === m) ||
            (v(r || 0),
            h(a),
            b(
              Ut(a)
                ? (function (e, t) {
                    if (!e) return 0;
                    switch (t) {
                      case "second":
                        return e;
                      case "minute":
                        return 60 * e;
                      default:
                        return e * jt;
                    }
                  })(r, a)
                : 0,
            )),
            i.useEffect(
              function () {
                function e() {
                  clearTimeout(c);
                }
                if ((e(), !s || !Ut(a))) return e;
                var t = y - s,
                  r = Bt(t);
                if ("day" === r) return e;
                var n = Ht(r),
                  i = t - (t % n),
                  o = i >= y ? i - n : i,
                  u = Math.abs(o - y);
                return (
                  y !== o &&
                    (c = setTimeout(function () {
                      return b(o);
                    }, 1e3 * u)),
                  e
                );
              },
              [y, s, a],
            );
          var _ = r || 0,
            w = a;
          if (Ut(a) && "number" === typeof y && s) {
            var E = Ht((w = Bt(y)));
            _ = Math.round(y / E);
          }
          return i.createElement(Gt, (0, n.__assign)({ value: _, unit: w }, u));
        };
      $t.displayName = "FormattedRelativeTime";
      var Vt = $t,
        zt = function (e) {
          var t = Qe(),
            r = t.formatPlural,
            n = t.textComponent,
            o = e.value,
            a = e.other,
            s = e.children,
            u = e[r(o, e)] || a;
          return "function" === typeof s
            ? s(u)
            : n
              ? i.createElement(n, null, u)
              : u;
        };
      zt.displayName = "FormattedPlural";
      var Kt = zt;
      function qt(e) {
        var t = Qe(),
          r = t.formatMessage,
          n = t.textComponent,
          o = void 0 === n ? i.Fragment : n,
          a = e.id,
          s = e.description,
          u = e.defaultMessage,
          c = e.values,
          l = e.children,
          f = e.tagName,
          d = void 0 === f ? o : f,
          h = r({ id: a, description: s, defaultMessage: u }, c, {
            ignoreTag: e.ignoreTag,
          });
        return "function" === typeof l
          ? l(Array.isArray(h) ? h : [h])
          : d
            ? i.createElement(d, null, i.Children.toArray(h))
            : i.createElement(i.Fragment, null, h);
      }
      qt.displayName = "FormattedMessage";
      var Wt = i.memo(qt, function (e, t) {
        var r = e.values,
          i = (0, n.__rest)(e, ["values"]),
          o = t.values,
          a = (0, n.__rest)(t, ["values"]);
        return ze(o, r) && ze(i, a);
      });
      Wt.displayName = "MemoizedFormattedMessage";
      var Xt = Wt,
        Yt = function (e) {
          var t = Qe(),
            r = e.from,
            o = e.to,
            a = e.children,
            s = (0, n.__rest)(e, ["from", "to", "children"]),
            u = t.formatDateTimeRange(r, o, s);
          if ("function" === typeof a) return a(u);
          var c = t.textComponent || i.Fragment;
          return i.createElement(c, null, u);
        };
      Yt.displayName = "FormattedDateTimeRange";
      var Zt = Yt;
      function Jt(e) {
        return e;
      }
      function Qt(e) {
        return e;
      }
      var er = nt("formatDate"),
        tr = nt("formatTime"),
        rr = nt("formatNumber"),
        nr = nt("formatList"),
        ir = nt("formatDisplayName"),
        or = rt("formatDate"),
        ar = rt("formatTime");
    },
    41888: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          ServerStyleSheet: function () {
            return Ge;
          },
          StyleSheetConsumer: function () {
            return ae;
          },
          StyleSheetContext: function () {
            return oe;
          },
          StyleSheetManager: function () {
            return de;
          },
          ThemeConsumer: function () {
            return Ne;
          },
          ThemeContext: function () {
            return Re;
          },
          ThemeProvider: function () {
            return De;
          },
          __PRIVATE__: function () {
            return ze;
          },
          createGlobalStyle: function () {
            return Fe;
          },
          css: function () {
            return Ee;
          },
          default: function () {
            return Ke;
          },
          isStyledComponent: function () {
            return E;
          },
          keyframes: function () {
            return Ue;
          },
          useTheme: function () {
            return Ve;
          },
          version: function () {
            return k;
          },
          withTheme: function () {
            return $e;
          },
        });
      var n = r(60470),
        i = r(2265),
        o = r(19111),
        a = r.n(o);
      var s = function (e) {
          function t(e, n, u, c, d) {
            for (
              var h,
                p,
                m,
                v,
                _,
                E = 0,
                S = 0,
                k = 0,
                C = 0,
                T = 0,
                M = 0,
                N = (m = h = 0),
                L = 0,
                j = 0,
                B = 0,
                H = 0,
                F = u.length,
                U = F - 1,
                G = "",
                $ = "",
                V = "",
                z = "";
              L < F;

            ) {
              if (
                ((p = u.charCodeAt(L)),
                L === U &&
                  0 !== S + C + k + E &&
                  (0 !== S && (p = 47 === S ? 10 : 47),
                  (C = k = E = 0),
                  F++,
                  U++),
                0 === S + C + k + E)
              ) {
                if (
                  L === U &&
                  (0 < j && (G = G.replace(f, "")), 0 < G.trim().length)
                ) {
                  switch (p) {
                    case 32:
                    case 9:
                    case 59:
                    case 13:
                    case 10:
                      break;
                    default:
                      G += u.charAt(L);
                  }
                  p = 59;
                }
                switch (p) {
                  case 123:
                    for (
                      h = (G = G.trim()).charCodeAt(0), m = 1, H = ++L;
                      L < F;

                    ) {
                      switch ((p = u.charCodeAt(L))) {
                        case 123:
                          m++;
                          break;
                        case 125:
                          m--;
                          break;
                        case 47:
                          switch ((p = u.charCodeAt(L + 1))) {
                            case 42:
                            case 47:
                              e: {
                                for (N = L + 1; N < U; ++N)
                                  switch (u.charCodeAt(N)) {
                                    case 47:
                                      if (
                                        42 === p &&
                                        42 === u.charCodeAt(N - 1) &&
                                        L + 2 !== N
                                      ) {
                                        L = N + 1;
                                        break e;
                                      }
                                      break;
                                    case 10:
                                      if (47 === p) {
                                        L = N + 1;
                                        break e;
                                      }
                                  }
                                L = N;
                              }
                          }
                          break;
                        case 91:
                          p++;
                        case 40:
                          p++;
                        case 34:
                        case 39:
                          for (; L++ < U && u.charCodeAt(L) !== p; );
                      }
                      if (0 === m) break;
                      L++;
                    }
                    if (
                      ((m = u.substring(H, L)),
                      0 === h &&
                        (h = (G = G.replace(l, "").trim()).charCodeAt(0)),
                      64 === h)
                    ) {
                      switch (
                        (0 < j && (G = G.replace(f, "")), (p = G.charCodeAt(1)))
                      ) {
                        case 100:
                        case 109:
                        case 115:
                        case 45:
                          j = n;
                          break;
                        default:
                          j = x;
                      }
                      if (
                        ((H = (m = t(n, j, m, p, d + 1)).length),
                        0 < R &&
                          ((_ = s(3, m, (j = r(x, G, B)), n, O, P, H, p, d, c)),
                          (G = j.join("")),
                          void 0 !== _ &&
                            0 === (H = (m = _.trim()).length) &&
                            ((p = 0), (m = ""))),
                        0 < H)
                      )
                        switch (p) {
                          case 115:
                            G = G.replace(w, a);
                          case 100:
                          case 109:
                          case 45:
                            m = G + "{" + m + "}";
                            break;
                          case 107:
                            (m = (G = G.replace(g, "$1 $2")) + "{" + m + "}"),
                              (m =
                                1 === I || (2 === I && o("@" + m, 3))
                                  ? "@-webkit-" + m + "@" + m
                                  : "@" + m);
                            break;
                          default:
                            (m = G + m), 112 === c && (($ += m), (m = ""));
                        }
                      else m = "";
                    } else m = t(n, r(n, G, B), m, c, d + 1);
                    (V += m),
                      (m = B = j = N = h = 0),
                      (G = ""),
                      (p = u.charCodeAt(++L));
                    break;
                  case 125:
                  case 59:
                    if (
                      1 <
                      (H = (G = (0 < j ? G.replace(f, "") : G).trim()).length)
                    )
                      switch (
                        (0 === N &&
                          ((h = G.charCodeAt(0)),
                          45 === h || (96 < h && 123 > h)) &&
                          (H = (G = G.replace(" ", ":")).length),
                        0 < R &&
                          void 0 !==
                            (_ = s(1, G, n, e, O, P, $.length, c, d, c)) &&
                          0 === (H = (G = _.trim()).length) &&
                          (G = "\0\0"),
                        (h = G.charCodeAt(0)),
                        (p = G.charCodeAt(1)),
                        h)
                      ) {
                        case 0:
                          break;
                        case 64:
                          if (105 === p || 99 === p) {
                            z += G + u.charAt(L);
                            break;
                          }
                        default:
                          58 !== G.charCodeAt(H - 1) &&
                            ($ += i(G, h, p, G.charCodeAt(2)));
                      }
                    (B = j = N = h = 0), (G = ""), (p = u.charCodeAt(++L));
                }
              }
              switch (p) {
                case 13:
                case 10:
                  47 === S
                    ? (S = 0)
                    : 0 === 1 + h &&
                      107 !== c &&
                      0 < G.length &&
                      ((j = 1), (G += "\0")),
                    0 < R * D && s(0, G, n, e, O, P, $.length, c, d, c),
                    (P = 1),
                    O++;
                  break;
                case 59:
                case 125:
                  if (0 === S + C + k + E) {
                    P++;
                    break;
                  }
                default:
                  switch ((P++, (v = u.charAt(L)), p)) {
                    case 9:
                    case 32:
                      if (0 === C + E + S)
                        switch (T) {
                          case 44:
                          case 58:
                          case 9:
                          case 32:
                            v = "";
                            break;
                          default:
                            32 !== p && (v = " ");
                        }
                      break;
                    case 0:
                      v = "\\0";
                      break;
                    case 12:
                      v = "\\f";
                      break;
                    case 11:
                      v = "\\v";
                      break;
                    case 38:
                      0 === C + S + E && ((j = B = 1), (v = "\f" + v));
                      break;
                    case 108:
                      if (0 === C + S + E + A && 0 < N)
                        switch (L - N) {
                          case 2:
                            112 === T && 58 === u.charCodeAt(L - 3) && (A = T);
                          case 8:
                            111 === M && (A = M);
                        }
                      break;
                    case 58:
                      0 === C + S + E && (N = L);
                      break;
                    case 44:
                      0 === S + k + C + E && ((j = 1), (v += "\r"));
                      break;
                    case 34:
                    case 39:
                      0 === S && (C = C === p ? 0 : 0 === C ? p : C);
                      break;
                    case 91:
                      0 === C + S + k && E++;
                      break;
                    case 93:
                      0 === C + S + k && E--;
                      break;
                    case 41:
                      0 === C + S + E && k--;
                      break;
                    case 40:
                      if (0 === C + S + E) {
                        if (0 === h)
                          if (2 * T + 3 * M === 533);
                          else h = 1;
                        k++;
                      }
                      break;
                    case 64:
                      0 === S + k + C + E + N + m && (m = 1);
                      break;
                    case 42:
                    case 47:
                      if (!(0 < C + E + k))
                        switch (S) {
                          case 0:
                            switch (2 * p + 3 * u.charCodeAt(L + 1)) {
                              case 235:
                                S = 47;
                                break;
                              case 220:
                                (H = L), (S = 42);
                            }
                            break;
                          case 42:
                            47 === p &&
                              42 === T &&
                              H + 2 !== L &&
                              (33 === u.charCodeAt(H + 2) &&
                                ($ += u.substring(H, L + 1)),
                              (v = ""),
                              (S = 0));
                        }
                  }
                  0 === S && (G += v);
              }
              (M = T), (T = p), L++;
            }
            if (0 < (H = $.length)) {
              if (
                ((j = n),
                0 < R &&
                  void 0 !== (_ = s(2, $, j, e, O, P, H, c, d, c)) &&
                  0 === ($ = _).length)
              )
                return z + $ + V;
              if ((($ = j.join(",") + "{" + $ + "}"), 0 !== I * A)) {
                switch ((2 !== I || o($, 2) || (A = 0), A)) {
                  case 111:
                    $ = $.replace(b, ":-moz-$1") + $;
                    break;
                  case 112:
                    $ =
                      $.replace(y, "::-webkit-input-$1") +
                      $.replace(y, "::-moz-$1") +
                      $.replace(y, ":-ms-input-$1") +
                      $;
                }
                A = 0;
              }
            }
            return z + $ + V;
          }
          function r(e, t, r) {
            var i = t.trim().split(m);
            t = i;
            var o = i.length,
              a = e.length;
            switch (a) {
              case 0:
              case 1:
                var s = 0;
                for (e = 0 === a ? "" : e[0] + " "; s < o; ++s)
                  t[s] = n(e, t[s], r).trim();
                break;
              default:
                var u = (s = 0);
                for (t = []; s < o; ++s)
                  for (var c = 0; c < a; ++c)
                    t[u++] = n(e[c] + " ", i[s], r).trim();
            }
            return t;
          }
          function n(e, t, r) {
            var n = t.charCodeAt(0);
            switch ((33 > n && (n = (t = t.trim()).charCodeAt(0)), n)) {
              case 38:
                return t.replace(v, "$1" + e.trim());
              case 58:
                return e.trim() + t.replace(v, "$1" + e.trim());
              default:
                if (0 < 1 * r && 0 < t.indexOf("\f"))
                  return t.replace(
                    v,
                    (58 === e.charCodeAt(0) ? "" : "$1") + e.trim(),
                  );
            }
            return e + t;
          }
          function i(e, t, r, n) {
            var a = e + ";",
              s = 2 * t + 3 * r + 4 * n;
            if (944 === s) {
              e = a.indexOf(":", 9) + 1;
              var u = a.substring(e, a.length - 1).trim();
              return (
                (u = a.substring(0, e).trim() + u + ";"),
                1 === I || (2 === I && o(u, 1)) ? "-webkit-" + u + u : u
              );
            }
            if (0 === I || (2 === I && !o(a, 1))) return a;
            switch (s) {
              case 1015:
                return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
              case 951:
                return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
              case 963:
                return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
              case 1009:
                if (100 !== a.charCodeAt(4)) break;
              case 969:
              case 942:
                return "-webkit-" + a + a;
              case 978:
                return "-webkit-" + a + "-moz-" + a + a;
              case 1019:
              case 983:
                return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
              case 883:
                if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                if (0 < a.indexOf("image-set(", 11))
                  return a.replace(T, "$1-webkit-$2") + a;
                break;
              case 932:
                if (45 === a.charCodeAt(4))
                  switch (a.charCodeAt(5)) {
                    case 103:
                      return (
                        "-webkit-box-" +
                        a.replace("-grow", "") +
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("grow", "positive") +
                        a
                      );
                    case 115:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("shrink", "negative") +
                        a
                      );
                    case 98:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-" +
                        a.replace("basis", "preferred-size") +
                        a
                      );
                  }
                return "-webkit-" + a + "-ms-" + a + a;
              case 964:
                return "-webkit-" + a + "-ms-flex-" + a + a;
              case 1023:
                if (99 !== a.charCodeAt(8)) break;
                return (
                  "-webkit-box-pack" +
                  (u = a
                    .substring(a.indexOf(":", 15))
                    .replace("flex-", "")
                    .replace("space-between", "justify")) +
                  "-webkit-" +
                  a +
                  "-ms-flex-pack" +
                  u +
                  a
                );
              case 1005:
                return h.test(a)
                  ? a.replace(d, ":-webkit-") + a.replace(d, ":-moz-") + a
                  : a;
              case 1e3:
                switch (
                  ((t = (u = a.substring(13).trim()).indexOf("-") + 1),
                  u.charCodeAt(0) + u.charCodeAt(t))
                ) {
                  case 226:
                    u = a.replace(_, "tb");
                    break;
                  case 232:
                    u = a.replace(_, "tb-rl");
                    break;
                  case 220:
                    u = a.replace(_, "lr");
                    break;
                  default:
                    return a;
                }
                return "-webkit-" + a + "-ms-" + u + a;
              case 1017:
                if (-1 === a.indexOf("sticky", 9)) break;
              case 975:
                switch (
                  ((t = (a = e).length - 10),
                  (s =
                    (u = (33 === a.charCodeAt(t) ? a.substring(0, t) : a)
                      .substring(e.indexOf(":", 7) + 1)
                      .trim()).charCodeAt(0) +
                    (0 | u.charCodeAt(7))))
                ) {
                  case 203:
                    if (111 > u.charCodeAt(8)) break;
                  case 115:
                    a = a.replace(u, "-webkit-" + u) + ";" + a;
                    break;
                  case 207:
                  case 102:
                    a =
                      a.replace(
                        u,
                        "-webkit-" + (102 < s ? "inline-" : "") + "box",
                      ) +
                      ";" +
                      a.replace(u, "-webkit-" + u) +
                      ";" +
                      a.replace(u, "-ms-" + u + "box") +
                      ";" +
                      a;
                }
                return a + ";";
              case 938:
                if (45 === a.charCodeAt(5))
                  switch (a.charCodeAt(6)) {
                    case 105:
                      return (
                        (u = a.replace("-items", "")),
                        "-webkit-" +
                          a +
                          "-webkit-box-" +
                          u +
                          "-ms-flex-" +
                          u +
                          a
                      );
                    case 115:
                      return (
                        "-webkit-" + a + "-ms-flex-item-" + a.replace(S, "") + a
                      );
                    default:
                      return (
                        "-webkit-" +
                        a +
                        "-ms-flex-line-pack" +
                        a.replace("align-content", "").replace(S, "") +
                        a
                      );
                  }
                break;
              case 973:
              case 989:
                if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
              case 931:
              case 953:
                if (!0 === C.test(e))
                  return 115 ===
                    (u = e.substring(e.indexOf(":") + 1)).charCodeAt(0)
                    ? i(
                        e.replace("stretch", "fill-available"),
                        t,
                        r,
                        n,
                      ).replace(":fill-available", ":stretch")
                    : a.replace(u, "-webkit-" + u) +
                        a.replace(u, "-moz-" + u.replace("fill-", "")) +
                        a;
                break;
              case 962:
                if (
                  ((a =
                    "-webkit-" +
                    a +
                    (102 === a.charCodeAt(5) ? "-ms-" + a : "") +
                    a),
                  211 === r + n &&
                    105 === a.charCodeAt(13) &&
                    0 < a.indexOf("transform", 10))
                )
                  return (
                    a
                      .substring(0, a.indexOf(";", 27) + 1)
                      .replace(p, "$1-webkit-$2") + a
                  );
            }
            return a;
          }
          function o(e, t) {
            var r = e.indexOf(1 === t ? ":" : "{"),
              n = e.substring(0, 3 !== t ? r : 10);
            return (
              (r = e.substring(r + 1, e.length - 1)),
              N(2 !== t ? n : n.replace(k, "$1"), r, t)
            );
          }
          function a(e, t) {
            var r = i(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
            return r !== t + ";"
              ? r.replace(E, " or ($1)").substring(4)
              : "(" + t + ")";
          }
          function s(e, t, r, n, i, o, a, s, u, l) {
            for (var f, d = 0, h = t; d < R; ++d)
              switch ((f = M[d].call(c, e, h, r, n, i, o, a, s, u, l))) {
                case void 0:
                case !1:
                case !0:
                case null:
                  break;
                default:
                  h = f;
              }
            if (h !== t) return h;
          }
          function u(e) {
            return (
              void 0 !== (e = e.prefix) &&
                ((N = null),
                e
                  ? "function" !== typeof e
                    ? (I = 1)
                    : ((I = 2), (N = e))
                  : (I = 0)),
              u
            );
          }
          function c(e, r) {
            var n = e;
            if ((33 > n.charCodeAt(0) && (n = n.trim()), (n = [n]), 0 < R)) {
              var i = s(-1, r, n, n, O, P, 0, 0, 0, 0);
              void 0 !== i && "string" === typeof i && (r = i);
            }
            var o = t(x, n, r, 0, 0);
            return (
              0 < R &&
                void 0 !== (i = s(-2, o, n, n, O, P, o.length, 0, 0, 0)) &&
                (o = i),
              "",
              (A = 0),
              (P = O = 1),
              o
            );
          }
          var l = /^\0+/g,
            f = /[\0\r\f]/g,
            d = /: */g,
            h = /zoo|gra/,
            p = /([,: ])(transform)/g,
            m = /,\r+?/g,
            v = /([\t\r\n ])*\f?&/g,
            g = /@(k\w+)\s*(\S*)\s*/,
            y = /::(place)/g,
            b = /:(read-only)/g,
            _ = /[svh]\w+-[tblr]{2}/,
            w = /\(\s*(.*)\s*\)/g,
            E = /([\s\S]*?);/g,
            S = /-self|flex-/g,
            k = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            C = /stretch|:\s*\w+\-(?:conte|avail)/,
            T = /([^-])(image-set\()/,
            P = 1,
            O = 1,
            A = 0,
            I = 1,
            x = [],
            M = [],
            R = 0,
            N = null,
            D = 0;
          return (
            (c.use = function e(t) {
              switch (t) {
                case void 0:
                case null:
                  R = M.length = 0;
                  break;
                default:
                  if ("function" === typeof t) M[R++] = t;
                  else if ("object" === typeof t)
                    for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
                  else D = 0 | !!t;
              }
              return e;
            }),
            (c.set = u),
            void 0 !== e && u(e),
            c
          );
        },
        u = {
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
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        };
      function c(e) {
        var t = Object.create(null);
        return function (r) {
          return void 0 === t[r] && (t[r] = e(r)), t[r];
        };
      }
      var l =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        f = c(function (e) {
          return (
            l.test(e) ||
            (111 === e.charCodeAt(0) &&
              110 === e.charCodeAt(1) &&
              e.charCodeAt(2) < 91)
          );
        }),
        d = r(28870),
        h = r.n(d),
        p = r(68571);
      function m() {
        return (m =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var n in r)
                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
            }
            return e;
          }).apply(this, arguments);
      }
      var v = function (e, t) {
          for (var r = [e[0]], n = 0, i = t.length; n < i; n += 1)
            r.push(t[n], e[n + 1]);
          return r;
        },
        g = function (e) {
          return (
            null !== e &&
            "object" == typeof e &&
            "[object Object]" ===
              (e.toString ? e.toString() : Object.prototype.toString.call(e)) &&
            !(0, n.typeOf)(e)
          );
        },
        y = Object.freeze([]),
        b = Object.freeze({});
      function _(e) {
        return "function" == typeof e;
      }
      function w(e) {
        return e.displayName || e.name || "Component";
      }
      function E(e) {
        return e && "string" == typeof e.styledComponentId;
      }
      var S =
          ("undefined" != typeof p &&
            void 0 !== p.env &&
            (p.env.REACT_APP_SC_ATTR || p.env.SC_ATTR)) ||
          "data-styled",
        k = "5.3.11",
        C = "undefined" != typeof window && "HTMLElement" in window,
        T = Boolean(
          "boolean" == typeof SC_DISABLE_SPEEDY
            ? SC_DISABLE_SPEEDY
            : "undefined" != typeof p &&
                void 0 !== p.env &&
                (void 0 !== p.env.REACT_APP_SC_DISABLE_SPEEDY &&
                "" !== p.env.REACT_APP_SC_DISABLE_SPEEDY
                  ? "false" !== p.env.REACT_APP_SC_DISABLE_SPEEDY &&
                    p.env.REACT_APP_SC_DISABLE_SPEEDY
                  : void 0 !== p.env.SC_DISABLE_SPEEDY &&
                    "" !== p.env.SC_DISABLE_SPEEDY &&
                    "false" !== p.env.SC_DISABLE_SPEEDY &&
                    p.env.SC_DISABLE_SPEEDY),
        ),
        P = {};
      function O(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        throw new Error(
          "An error occurred. See https://git.io/JUIaE#" +
            e +
            " for more information." +
            (r.length > 0 ? " Args: " + r.join(", ") : ""),
        );
      }
      var A = (function () {
          function e(e) {
            (this.groupSizes = new Uint32Array(512)),
              (this.length = 512),
              (this.tag = e);
          }
          var t = e.prototype;
          return (
            (t.indexOfGroup = function (e) {
              for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
              return t;
            }),
            (t.insertRules = function (e, t) {
              if (e >= this.groupSizes.length) {
                for (var r = this.groupSizes, n = r.length, i = n; e >= i; )
                  (i <<= 1) < 0 && O(16, "" + e);
                (this.groupSizes = new Uint32Array(i)),
                  this.groupSizes.set(r),
                  (this.length = i);
                for (var o = n; o < i; o++) this.groupSizes[o] = 0;
              }
              for (
                var a = this.indexOfGroup(e + 1), s = 0, u = t.length;
                s < u;
                s++
              )
                this.tag.insertRule(a, t[s]) && (this.groupSizes[e]++, a++);
            }),
            (t.clearGroup = function (e) {
              if (e < this.length) {
                var t = this.groupSizes[e],
                  r = this.indexOfGroup(e),
                  n = r + t;
                this.groupSizes[e] = 0;
                for (var i = r; i < n; i++) this.tag.deleteRule(r);
              }
            }),
            (t.getGroup = function (e) {
              var t = "";
              if (e >= this.length || 0 === this.groupSizes[e]) return t;
              for (
                var r = this.groupSizes[e],
                  n = this.indexOfGroup(e),
                  i = n + r,
                  o = n;
                o < i;
                o++
              )
                t += this.tag.getRule(o) + "/*!sc*/\n";
              return t;
            }),
            e
          );
        })(),
        I = new Map(),
        x = new Map(),
        M = 1,
        R = function (e) {
          if (I.has(e)) return I.get(e);
          for (; x.has(M); ) M++;
          var t = M++;
          return I.set(e, t), x.set(t, e), t;
        },
        N = function (e) {
          return x.get(e);
        },
        D = function (e, t) {
          t >= M && (M = t + 1), I.set(e, t), x.set(t, e);
        },
        L = "style[" + S + '][data-styled-version="5.3.11"]',
        j = new RegExp(
          "^" + S + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)',
        ),
        B = function (e, t, r) {
          for (var n, i = r.split(","), o = 0, a = i.length; o < a; o++)
            (n = i[o]) && e.registerName(t, n);
        },
        H = function (e, t) {
          for (
            var r = (t.textContent || "").split("/*!sc*/\n"),
              n = [],
              i = 0,
              o = r.length;
            i < o;
            i++
          ) {
            var a = r[i].trim();
            if (a) {
              var s = a.match(j);
              if (s) {
                var u = 0 | parseInt(s[1], 10),
                  c = s[2];
                0 !== u &&
                  (D(c, u), B(e, c, s[3]), e.getTag().insertRules(u, n)),
                  (n.length = 0);
              } else n.push(a);
            }
          }
        },
        F = function () {
          return r.nc;
        },
        U = function (e) {
          var t = document.head,
            r = e || t,
            n = document.createElement("style"),
            i = (function (e) {
              for (var t = e.childNodes, r = t.length; r >= 0; r--) {
                var n = t[r];
                if (n && 1 === n.nodeType && n.hasAttribute(S)) return n;
              }
            })(r),
            o = void 0 !== i ? i.nextSibling : null;
          n.setAttribute(S, "active"),
            n.setAttribute("data-styled-version", "5.3.11");
          var a = F();
          return a && n.setAttribute("nonce", a), r.insertBefore(n, o), n;
        },
        G = (function () {
          function e(e) {
            var t = (this.element = U(e));
            t.appendChild(document.createTextNode("")),
              (this.sheet = (function (e) {
                if (e.sheet) return e.sheet;
                for (
                  var t = document.styleSheets, r = 0, n = t.length;
                  r < n;
                  r++
                ) {
                  var i = t[r];
                  if (i.ownerNode === e) return i;
                }
                O(17);
              })(t)),
              (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              try {
                return this.sheet.insertRule(t, e), this.length++, !0;
              } catch (e) {
                return !1;
              }
            }),
            (t.deleteRule = function (e) {
              this.sheet.deleteRule(e), this.length--;
            }),
            (t.getRule = function (e) {
              var t = this.sheet.cssRules[e];
              return void 0 !== t && "string" == typeof t.cssText
                ? t.cssText
                : "";
            }),
            e
          );
        })(),
        $ = (function () {
          function e(e) {
            var t = (this.element = U(e));
            (this.nodes = t.childNodes), (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              if (e <= this.length && e >= 0) {
                var r = document.createTextNode(t),
                  n = this.nodes[e];
                return (
                  this.element.insertBefore(r, n || null), this.length++, !0
                );
              }
              return !1;
            }),
            (t.deleteRule = function (e) {
              this.element.removeChild(this.nodes[e]), this.length--;
            }),
            (t.getRule = function (e) {
              return e < this.length ? this.nodes[e].textContent : "";
            }),
            e
          );
        })(),
        V = (function () {
          function e(e) {
            (this.rules = []), (this.length = 0);
          }
          var t = e.prototype;
          return (
            (t.insertRule = function (e, t) {
              return (
                e <= this.length &&
                (this.rules.splice(e, 0, t), this.length++, !0)
              );
            }),
            (t.deleteRule = function (e) {
              this.rules.splice(e, 1), this.length--;
            }),
            (t.getRule = function (e) {
              return e < this.length ? this.rules[e] : "";
            }),
            e
          );
        })(),
        z = C,
        K = { isServer: !C, useCSSOMInjection: !T },
        q = (function () {
          function e(e, t, r) {
            void 0 === e && (e = b),
              void 0 === t && (t = {}),
              (this.options = m({}, K, {}, e)),
              (this.gs = t),
              (this.names = new Map(r)),
              (this.server = !!e.isServer),
              !this.server &&
                C &&
                z &&
                ((z = !1),
                (function (e) {
                  for (
                    var t = document.querySelectorAll(L), r = 0, n = t.length;
                    r < n;
                    r++
                  ) {
                    var i = t[r];
                    i &&
                      "active" !== i.getAttribute(S) &&
                      (H(e, i), i.parentNode && i.parentNode.removeChild(i));
                  }
                })(this));
          }
          e.registerId = function (e) {
            return R(e);
          };
          var t = e.prototype;
          return (
            (t.reconstructWithOptions = function (t, r) {
              return (
                void 0 === r && (r = !0),
                new e(
                  m({}, this.options, {}, t),
                  this.gs,
                  (r && this.names) || void 0,
                )
              );
            }),
            (t.allocateGSInstance = function (e) {
              return (this.gs[e] = (this.gs[e] || 0) + 1);
            }),
            (t.getTag = function () {
              return (
                this.tag ||
                (this.tag =
                  ((r = (t = this.options).isServer),
                  (n = t.useCSSOMInjection),
                  (i = t.target),
                  (e = r ? new V(i) : n ? new G(i) : new $(i)),
                  new A(e)))
              );
              var e, t, r, n, i;
            }),
            (t.hasNameForId = function (e, t) {
              return this.names.has(e) && this.names.get(e).has(t);
            }),
            (t.registerName = function (e, t) {
              if ((R(e), this.names.has(e))) this.names.get(e).add(t);
              else {
                var r = new Set();
                r.add(t), this.names.set(e, r);
              }
            }),
            (t.insertRules = function (e, t, r) {
              this.registerName(e, t), this.getTag().insertRules(R(e), r);
            }),
            (t.clearNames = function (e) {
              this.names.has(e) && this.names.get(e).clear();
            }),
            (t.clearRules = function (e) {
              this.getTag().clearGroup(R(e)), this.clearNames(e);
            }),
            (t.clearTag = function () {
              this.tag = void 0;
            }),
            (t.toString = function () {
              return (function (e) {
                for (
                  var t = e.getTag(), r = t.length, n = "", i = 0;
                  i < r;
                  i++
                ) {
                  var o = N(i);
                  if (void 0 !== o) {
                    var a = e.names.get(o),
                      s = t.getGroup(i);
                    if (a && s && a.size) {
                      var u = S + ".g" + i + '[id="' + o + '"]',
                        c = "";
                      void 0 !== a &&
                        a.forEach(function (e) {
                          e.length > 0 && (c += e + ",");
                        }),
                        (n += "" + s + u + '{content:"' + c + '"}/*!sc*/\n');
                    }
                  }
                }
                return n;
              })(this);
            }),
            e
          );
        })(),
        W = /(a)(d)/gi,
        X = function (e) {
          return String.fromCharCode(e + (e > 25 ? 39 : 97));
        };
      function Y(e) {
        var t,
          r = "";
        for (t = Math.abs(e); t > 52; t = (t / 52) | 0) r = X(t % 52) + r;
        return (X(t % 52) + r).replace(W, "$1-$2");
      }
      var Z = function (e, t) {
          for (var r = t.length; r; ) e = (33 * e) ^ t.charCodeAt(--r);
          return e;
        },
        J = function (e) {
          return Z(5381, e);
        };
      function Q(e) {
        for (var t = 0; t < e.length; t += 1) {
          var r = e[t];
          if (_(r) && !E(r)) return !1;
        }
        return !0;
      }
      var ee = J("5.3.11"),
        te = (function () {
          function e(e, t, r) {
            (this.rules = e),
              (this.staticRulesId = ""),
              (this.isStatic = (void 0 === r || r.isStatic) && Q(e)),
              (this.componentId = t),
              (this.baseHash = Z(ee, t)),
              (this.baseStyle = r),
              q.registerId(t);
          }
          return (
            (e.prototype.generateAndInjectStyles = function (e, t, r) {
              var n = this.componentId,
                i = [];
              if (
                (this.baseStyle &&
                  i.push(this.baseStyle.generateAndInjectStyles(e, t, r)),
                this.isStatic && !r.hash)
              )
                if (this.staticRulesId && t.hasNameForId(n, this.staticRulesId))
                  i.push(this.staticRulesId);
                else {
                  var o = _e(this.rules, e, t, r).join(""),
                    a = Y(Z(this.baseHash, o) >>> 0);
                  if (!t.hasNameForId(n, a)) {
                    var s = r(o, "." + a, void 0, n);
                    t.insertRules(n, a, s);
                  }
                  i.push(a), (this.staticRulesId = a);
                }
              else {
                for (
                  var u = this.rules.length,
                    c = Z(this.baseHash, r.hash),
                    l = "",
                    f = 0;
                  f < u;
                  f++
                ) {
                  var d = this.rules[f];
                  if ("string" == typeof d) l += d;
                  else if (d) {
                    var h = _e(d, e, t, r),
                      p = Array.isArray(h) ? h.join("") : h;
                    (c = Z(c, p + f)), (l += p);
                  }
                }
                if (l) {
                  var m = Y(c >>> 0);
                  if (!t.hasNameForId(n, m)) {
                    var v = r(l, "." + m, void 0, n);
                    t.insertRules(n, m, v);
                  }
                  i.push(m);
                }
              }
              return i.join(" ");
            }),
            e
          );
        })(),
        re = /^\s*\/\/.*$/gm,
        ne = [":", "[", ".", "#"];
      function ie(e) {
        var t,
          r,
          n,
          i,
          o = void 0 === e ? b : e,
          a = o.options,
          u = void 0 === a ? b : a,
          c = o.plugins,
          l = void 0 === c ? y : c,
          f = new s(u),
          d = [],
          h = (function (e) {
            function t(t) {
              if (t)
                try {
                  e(t + "}");
                } catch (e) {}
            }
            return function (r, n, i, o, a, s, u, c, l, f) {
              switch (r) {
                case 1:
                  if (0 === l && 64 === n.charCodeAt(0)) return e(n + ";"), "";
                  break;
                case 2:
                  if (0 === c) return n + "/*|*/";
                  break;
                case 3:
                  switch (c) {
                    case 102:
                    case 112:
                      return e(i[0] + n), "";
                    default:
                      return n + (0 === f ? "/*|*/" : "");
                  }
                case -2:
                  n.split("/*|*/}").forEach(t);
              }
            };
          })(function (e) {
            d.push(e);
          }),
          p = function (e, n, o) {
            return (0 === n && -1 !== ne.indexOf(o[r.length])) || o.match(i)
              ? e
              : "." + t;
          };
        function m(e, o, a, s) {
          void 0 === s && (s = "&");
          var u = e.replace(re, ""),
            c = o && a ? a + " " + o + " { " + u + " }" : u;
          return (
            (t = s),
            (r = o),
            (n = new RegExp("\\" + r + "\\b", "g")),
            (i = new RegExp("(\\" + r + "\\b){2,}")),
            f(a || !o ? "" : o, c)
          );
        }
        return (
          f.use(
            [].concat(l, [
              function (e, t, i) {
                2 === e &&
                  i.length &&
                  i[0].lastIndexOf(r) > 0 &&
                  (i[0] = i[0].replace(n, p));
              },
              h,
              function (e) {
                if (-2 === e) {
                  var t = d;
                  return (d = []), t;
                }
              },
            ]),
          ),
          (m.hash = l.length
            ? l
                .reduce(function (e, t) {
                  return t.name || O(15), Z(e, t.name);
                }, 5381)
                .toString()
            : ""),
          m
        );
      }
      var oe = i.createContext(),
        ae = oe.Consumer,
        se = i.createContext(),
        ue = (se.Consumer, new q()),
        ce = ie();
      function le() {
        return (0, i.useContext)(oe) || ue;
      }
      function fe() {
        return (0, i.useContext)(se) || ce;
      }
      function de(e) {
        var t = (0, i.useState)(e.stylisPlugins),
          r = t[0],
          n = t[1],
          o = le(),
          s = (0, i.useMemo)(
            function () {
              var t = o;
              return (
                e.sheet
                  ? (t = e.sheet)
                  : e.target &&
                    (t = t.reconstructWithOptions({ target: e.target }, !1)),
                e.disableCSSOMInjection &&
                  (t = t.reconstructWithOptions({ useCSSOMInjection: !1 })),
                t
              );
            },
            [e.disableCSSOMInjection, e.sheet, e.target],
          ),
          u = (0, i.useMemo)(
            function () {
              return ie({
                options: { prefix: !e.disableVendorPrefixes },
                plugins: r,
              });
            },
            [e.disableVendorPrefixes, r],
          );
        return (
          (0, i.useEffect)(
            function () {
              a()(r, e.stylisPlugins) || n(e.stylisPlugins);
            },
            [e.stylisPlugins],
          ),
          i.createElement(
            oe.Provider,
            { value: s },
            i.createElement(se.Provider, { value: u }, e.children),
          )
        );
      }
      var he = (function () {
          function e(e, t) {
            var r = this;
            (this.inject = function (e, t) {
              void 0 === t && (t = ce);
              var n = r.name + t.hash;
              e.hasNameForId(r.id, n) ||
                e.insertRules(r.id, n, t(r.rules, n, "@keyframes"));
            }),
              (this.toString = function () {
                return O(12, String(r.name));
              }),
              (this.name = e),
              (this.id = "sc-keyframes-" + e),
              (this.rules = t);
          }
          return (
            (e.prototype.getName = function (e) {
              return void 0 === e && (e = ce), this.name + e.hash;
            }),
            e
          );
        })(),
        pe = /([A-Z])/,
        me = /([A-Z])/g,
        ve = /^ms-/,
        ge = function (e) {
          return "-" + e.toLowerCase();
        };
      function ye(e) {
        return pe.test(e) ? e.replace(me, ge).replace(ve, "-ms-") : e;
      }
      var be = function (e) {
        return null == e || !1 === e || "" === e;
      };
      function _e(e, t, r, n) {
        if (Array.isArray(e)) {
          for (var i, o = [], a = 0, s = e.length; a < s; a += 1)
            "" !== (i = _e(e[a], t, r, n)) &&
              (Array.isArray(i) ? o.push.apply(o, i) : o.push(i));
          return o;
        }
        return be(e)
          ? ""
          : E(e)
            ? "." + e.styledComponentId
            : _(e)
              ? "function" != typeof (c = e) ||
                (c.prototype && c.prototype.isReactComponent) ||
                !t
                ? e
                : _e(e(t), t, r, n)
              : e instanceof he
                ? r
                  ? (e.inject(r, n), e.getName(n))
                  : e
                : g(e)
                  ? (function e(t, r) {
                      var n,
                        i,
                        o = [];
                      for (var a in t)
                        t.hasOwnProperty(a) &&
                          !be(t[a]) &&
                          ((Array.isArray(t[a]) && t[a].isCss) || _(t[a])
                            ? o.push(ye(a) + ":", t[a], ";")
                            : g(t[a])
                              ? o.push.apply(o, e(t[a], a))
                              : o.push(
                                  ye(a) +
                                    ": " +
                                    ((n = a),
                                    (null == (i = t[a]) ||
                                    "boolean" == typeof i ||
                                    "" === i
                                      ? ""
                                      : "number" != typeof i ||
                                          0 === i ||
                                          n in u ||
                                          n.startsWith("--")
                                        ? String(i).trim()
                                        : i + "px") + ";"),
                                ));
                      return r ? [r + " {"].concat(o, ["}"]) : o;
                    })(e)
                  : e.toString();
        var c;
      }
      var we = function (e) {
        return Array.isArray(e) && (e.isCss = !0), e;
      };
      function Ee(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return _(e) || g(e)
          ? we(_e(v(y, [e].concat(r))))
          : 0 === r.length && 1 === e.length && "string" == typeof e[0]
            ? e
            : we(_e(v(e, r)));
      }
      new Set();
      var Se = function (e, t, r) {
          return (
            void 0 === r && (r = b),
            (e.theme !== r.theme && e.theme) || t || r.theme
          );
        },
        ke = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        Ce = /(^-|-$)/g;
      function Te(e) {
        return e.replace(ke, "-").replace(Ce, "");
      }
      var Pe = function (e) {
        return Y(J(e) >>> 0);
      };
      function Oe(e) {
        return "string" == typeof e && !0;
      }
      var Ae = function (e) {
          return (
            "function" == typeof e ||
            ("object" == typeof e && null !== e && !Array.isArray(e))
          );
        },
        Ie = function (e) {
          return "__proto__" !== e && "constructor" !== e && "prototype" !== e;
        };
      function xe(e, t, r) {
        var n = e[r];
        Ae(t) && Ae(n) ? Me(n, t) : (e[r] = t);
      }
      function Me(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        for (var i = 0, o = r; i < o.length; i++) {
          var a = o[i];
          if (Ae(a)) for (var s in a) Ie(s) && xe(e, a[s], s);
        }
        return e;
      }
      var Re = i.createContext(),
        Ne = Re.Consumer;
      function De(e) {
        var t = (0, i.useContext)(Re),
          r = (0, i.useMemo)(
            function () {
              return (function (e, t) {
                return e
                  ? _(e)
                    ? e(t)
                    : Array.isArray(e) || "object" != typeof e
                      ? O(8)
                      : t
                        ? m({}, t, {}, e)
                        : e
                  : O(14);
              })(e.theme, t);
            },
            [e.theme, t],
          );
        return e.children
          ? i.createElement(Re.Provider, { value: r }, e.children)
          : null;
      }
      var Le = {};
      function je(e, t, r) {
        var n = E(e),
          o = !Oe(e),
          a = t.attrs,
          s = void 0 === a ? y : a,
          u = t.componentId,
          c =
            void 0 === u
              ? (function (e, t) {
                  var r = "string" != typeof e ? "sc" : Te(e);
                  Le[r] = (Le[r] || 0) + 1;
                  var n = r + "-" + Pe("5.3.11" + r + Le[r]);
                  return t ? t + "-" + n : n;
                })(t.displayName, t.parentComponentId)
              : u,
          l = t.displayName,
          d =
            void 0 === l
              ? (function (e) {
                  return Oe(e) ? "styled." + e : "Styled(" + w(e) + ")";
                })(e)
              : l,
          p =
            t.displayName && t.componentId
              ? Te(t.displayName) + "-" + t.componentId
              : t.componentId || c,
          v =
            n && e.attrs
              ? Array.prototype.concat(e.attrs, s).filter(Boolean)
              : s,
          g = t.shouldForwardProp;
        n &&
          e.shouldForwardProp &&
          (g = t.shouldForwardProp
            ? function (r, n, i) {
                return (
                  e.shouldForwardProp(r, n, i) && t.shouldForwardProp(r, n, i)
                );
              }
            : e.shouldForwardProp);
        var S,
          k = new te(r, p, n ? e.componentStyle : void 0),
          C = k.isStatic && 0 === s.length,
          T = function (e, t) {
            return (function (e, t, r, n) {
              var o = e.attrs,
                a = e.componentStyle,
                s = e.defaultProps,
                u = e.foldedComponentIds,
                c = e.shouldForwardProp,
                l = e.styledComponentId,
                d = e.target,
                h = (function (e, t, r) {
                  void 0 === e && (e = b);
                  var n = m({}, t, { theme: e }),
                    i = {};
                  return (
                    r.forEach(function (e) {
                      var t,
                        r,
                        o,
                        a = e;
                      for (t in (_(a) && (a = a(n)), a))
                        n[t] = i[t] =
                          "className" === t
                            ? ((r = i[t]),
                              (o = a[t]),
                              r && o ? r + " " + o : r || o)
                            : a[t];
                    }),
                    [n, i]
                  );
                })(Se(t, (0, i.useContext)(Re), s) || b, t, o),
                p = h[0],
                v = h[1],
                g = (function (e, t, r, n) {
                  var i = le(),
                    o = fe();
                  return t
                    ? e.generateAndInjectStyles(b, i, o)
                    : e.generateAndInjectStyles(r, i, o);
                })(a, n, p),
                y = r,
                w = v.$as || t.$as || v.as || t.as || d,
                E = Oe(w),
                S = v !== t ? m({}, t, {}, v) : t,
                k = {};
              for (var C in S)
                "$" !== C[0] &&
                  "as" !== C &&
                  ("forwardedAs" === C
                    ? (k.as = S[C])
                    : (c ? c(C, f, w) : !E || f(C)) && (k[C] = S[C]));
              return (
                t.style &&
                  v.style !== t.style &&
                  (k.style = m({}, t.style, {}, v.style)),
                (k.className = Array.prototype
                  .concat(u, l, g !== l ? g : null, t.className, v.className)
                  .filter(Boolean)
                  .join(" ")),
                (k.ref = y),
                (0, i.createElement)(w, k)
              );
            })(S, e, t, C);
          };
        return (
          (T.displayName = d),
          ((S = i.forwardRef(T)).attrs = v),
          (S.componentStyle = k),
          (S.displayName = d),
          (S.shouldForwardProp = g),
          (S.foldedComponentIds = n
            ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId)
            : y),
          (S.styledComponentId = p),
          (S.target = n ? e.target : e),
          (S.withComponent = function (e) {
            var n = t.componentId,
              i = (function (e, t) {
                if (null == e) return {};
                var r,
                  n,
                  i = {},
                  o = Object.keys(e);
                for (n = 0; n < o.length; n++)
                  (r = o[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i;
              })(t, ["componentId"]),
              o = n && n + "-" + (Oe(e) ? e : Te(w(e)));
            return je(e, m({}, i, { attrs: v, componentId: o }), r);
          }),
          Object.defineProperty(S, "defaultProps", {
            get: function () {
              return this._foldedDefaultProps;
            },
            set: function (t) {
              this._foldedDefaultProps = n ? Me({}, e.defaultProps, t) : t;
            },
          }),
          Object.defineProperty(S, "toString", {
            value: function () {
              return "." + S.styledComponentId;
            },
          }),
          o &&
            h()(S, e, {
              attrs: !0,
              componentStyle: !0,
              displayName: !0,
              foldedComponentIds: !0,
              shouldForwardProp: !0,
              styledComponentId: !0,
              target: !0,
              withComponent: !0,
            }),
          S
        );
      }
      var Be = function (e) {
        return (function e(t, r, i) {
          if ((void 0 === i && (i = b), !(0, n.isValidElementType)(r)))
            return O(1, String(r));
          var o = function () {
            return t(r, i, Ee.apply(void 0, arguments));
          };
          return (
            (o.withConfig = function (n) {
              return e(t, r, m({}, i, {}, n));
            }),
            (o.attrs = function (n) {
              return e(
                t,
                r,
                m({}, i, {
                  attrs: Array.prototype.concat(i.attrs, n).filter(Boolean),
                }),
              );
            }),
            o
          );
        })(je, e);
      };
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "marker",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "textPath",
        "tspan",
      ].forEach(function (e) {
        Be[e] = Be(e);
      });
      var He = (function () {
        function e(e, t) {
          (this.rules = e),
            (this.componentId = t),
            (this.isStatic = Q(e)),
            q.registerId(this.componentId + 1);
        }
        var t = e.prototype;
        return (
          (t.createStyles = function (e, t, r, n) {
            var i = n(_e(this.rules, t, r, n).join(""), ""),
              o = this.componentId + e;
            r.insertRules(o, o, i);
          }),
          (t.removeStyles = function (e, t) {
            t.clearRules(this.componentId + e);
          }),
          (t.renderStyles = function (e, t, r, n) {
            e > 2 && q.registerId(this.componentId + e),
              this.removeStyles(e, r),
              this.createStyles(e, t, r, n);
          }),
          e
        );
      })();
      function Fe(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        var o = Ee.apply(void 0, [e].concat(r)),
          a = "sc-global-" + Pe(JSON.stringify(o)),
          s = new He(o, a);
        function u(e) {
          var t = le(),
            r = fe(),
            n = (0, i.useContext)(Re),
            o = (0, i.useRef)(t.allocateGSInstance(a)).current;
          return (
            t.server && c(o, e, t, n, r),
            (0, i.useLayoutEffect)(
              function () {
                if (!t.server)
                  return (
                    c(o, e, t, n, r),
                    function () {
                      return s.removeStyles(o, t);
                    }
                  );
              },
              [o, e, t, n, r],
            ),
            null
          );
        }
        function c(e, t, r, n, i) {
          if (s.isStatic) s.renderStyles(e, P, r, i);
          else {
            var o = m({}, t, { theme: Se(t, n, u.defaultProps) });
            s.renderStyles(e, o, r, i);
          }
        }
        return i.memo(u);
      }
      function Ue(e) {
        for (
          var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        var i = Ee.apply(void 0, [e].concat(r)).join(""),
          o = Pe(i);
        return new he(o, i);
      }
      var Ge = (function () {
          function e() {
            var e = this;
            (this._emitSheetCSS = function () {
              var t = e.instance.toString();
              if (!t) return "";
              var r = F();
              return (
                "<style " +
                [
                  r && 'nonce="' + r + '"',
                  S + '="true"',
                  'data-styled-version="5.3.11"',
                ]
                  .filter(Boolean)
                  .join(" ") +
                ">" +
                t +
                "</style>"
              );
            }),
              (this.getStyleTags = function () {
                return e.sealed ? O(2) : e._emitSheetCSS();
              }),
              (this.getStyleElement = function () {
                var t;
                if (e.sealed) return O(2);
                var r =
                    (((t = {})[S] = ""),
                    (t["data-styled-version"] = "5.3.11"),
                    (t.dangerouslySetInnerHTML = {
                      __html: e.instance.toString(),
                    }),
                    t),
                  n = F();
                return (
                  n && (r.nonce = n),
                  [i.createElement("style", m({}, r, { key: "sc-0-0" }))]
                );
              }),
              (this.seal = function () {
                e.sealed = !0;
              }),
              (this.instance = new q({ isServer: !0 })),
              (this.sealed = !1);
          }
          var t = e.prototype;
          return (
            (t.collectStyles = function (e) {
              return this.sealed
                ? O(2)
                : i.createElement(de, { sheet: this.instance }, e);
            }),
            (t.interleaveWithNodeStream = function (e) {
              return O(3);
            }),
            e
          );
        })(),
        $e = function (e) {
          var t = i.forwardRef(function (t, r) {
            var n = (0, i.useContext)(Re),
              o = e.defaultProps,
              a = Se(t, n, o);
            return i.createElement(e, m({}, t, { theme: a, ref: r }));
          });
          return h()(t, e), (t.displayName = "WithTheme(" + w(e) + ")"), t;
        },
        Ve = function () {
          return (0, i.useContext)(Re);
        },
        ze = { StyleSheet: q, masterSheet: ue },
        Ke = Be;
    },
    52181: function (e, t, r) {
      "use strict";
      r.d(t, {
        KS: function () {
          return We;
        },
      });
      var n = (function () {
          function e() {}
          return (
            (e.prototype.getApplicationContext = function () {
              return {
                versionName: this.versionName,
                language: i(),
                platform: "Web",
                os: void 0,
                deviceModel: void 0,
              };
            }),
            e
          );
        })(),
        i = function () {
          return (
            ("undefined" !== typeof navigator &&
              ((navigator.languages && navigator.languages[0]) ||
                navigator.language)) ||
            ""
          );
        },
        o = (function () {
          function e() {
            this.queue = [];
          }
          return (
            (e.prototype.logEvent = function (e) {
              this.receiver
                ? this.receiver(e)
                : this.queue.length < 512 && this.queue.push(e);
            }),
            (e.prototype.setEventReceiver = function (e) {
              (this.receiver = e),
                this.queue.length > 0 &&
                  (this.queue.forEach(function (t) {
                    e(t);
                  }),
                  (this.queue = []));
            }),
            e
          );
        })(),
        a = function () {
          return (
            (a =
              Object.assign ||
              function (e) {
                for (var t, r = 1, n = arguments.length; r < n; r++)
                  for (var i in (t = arguments[r]))
                    Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                return e;
              }),
            a.apply(this, arguments)
          );
        },
        s = function (e, t) {
          var r = typeof e;
          if (r !== typeof t) return !1;
          for (
            var n = 0, i = ["string", "number", "boolean", "undefined"];
            n < i.length;
            n++
          ) {
            if (i[n] === r) return e === t;
          }
          if (null == e && null == t) return !0;
          if (null == e || null == t) return !1;
          if (e.length !== t.length) return !1;
          var o = Array.isArray(e),
            a = Array.isArray(t);
          if (o !== a) return !1;
          if (!o || !a) {
            var u = Object.keys(e).sort(),
              c = Object.keys(t).sort();
            if (!s(u, c)) return !1;
            var l = !0;
            return (
              Object.keys(e).forEach(function (r) {
                s(e[r], t[r]) || (l = !1);
              }),
              l
            );
          }
          for (var f = 0; f < e.length; f++) if (!s(e[f], t[f])) return !1;
          return !0;
        };
      Object.entries ||
        (Object.entries = function (e) {
          for (var t = Object.keys(e), r = t.length, n = new Array(r); r--; )
            n[r] = [t[r], e[t[r]]];
          return n;
        });
      var u = (function () {
          function e() {
            (this.identity = { userProperties: {} }),
              (this.listeners = new Set());
          }
          return (
            (e.prototype.editIdentity = function () {
              var e = this,
                t = a({}, this.identity.userProperties),
                r = a(a({}, this.identity), { userProperties: t });
              return {
                setUserId: function (e) {
                  return (r.userId = e), this;
                },
                setDeviceId: function (e) {
                  return (r.deviceId = e), this;
                },
                setUserProperties: function (e) {
                  return (r.userProperties = e), this;
                },
                setOptOut: function (e) {
                  return (r.optOut = e), this;
                },
                updateUserProperties: function (e) {
                  for (
                    var t = r.userProperties || {},
                      n = 0,
                      i = Object.entries(e);
                    n < i.length;
                    n++
                  ) {
                    var o = i[n],
                      a = o[0],
                      s = o[1];
                    switch (a) {
                      case "$set":
                        for (
                          var u = 0, c = Object.entries(s);
                          u < c.length;
                          u++
                        ) {
                          var l = c[u],
                            f = l[0],
                            d = l[1];
                          t[f] = d;
                        }
                        break;
                      case "$unset":
                        for (var h = 0, p = Object.keys(s); h < p.length; h++) {
                          delete t[(f = p[h])];
                        }
                        break;
                      case "$clearAll":
                        t = {};
                    }
                  }
                  return (r.userProperties = t), this;
                },
                commit: function () {
                  return e.setIdentity(r), this;
                },
              };
            }),
            (e.prototype.getIdentity = function () {
              return a({}, this.identity);
            }),
            (e.prototype.setIdentity = function (e) {
              var t = a({}, this.identity);
              (this.identity = a({}, e)),
                s(t, this.identity) ||
                  this.listeners.forEach(function (t) {
                    t(e);
                  });
            }),
            (e.prototype.addIdentityListener = function (e) {
              this.listeners.add(e);
            }),
            (e.prototype.removeIdentityListener = function (e) {
              this.listeners.delete(e);
            }),
            e
          );
        })(),
        c =
          "undefined" !== typeof globalThis
            ? globalThis
            : "undefined" !== typeof r.g
              ? r.g
              : self,
        l = (function () {
          function e() {
            (this.identityStore = new u()),
              (this.eventBridge = new o()),
              (this.applicationContextProvider = new n());
          }
          return (
            (e.getInstance = function (t) {
              return (
                c.analyticsConnectorInstances ||
                  (c.analyticsConnectorInstances = {}),
                c.analyticsConnectorInstances[t] ||
                  (c.analyticsConnectorInstances[t] = new e()),
                c.analyticsConnectorInstances[t]
              );
            }),
            e
          );
        })(),
        f = r(50022).Buffer,
        d = function (e, t) {
          return (
            (d =
              Object.setPrototypeOf ||
              ({ __proto__: [] } instanceof Array &&
                function (e, t) {
                  e.__proto__ = t;
                }) ||
              function (e, t) {
                for (var r in t)
                  Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
              }),
            d(e, t)
          );
        };
      var h = function () {
        return (
          (h =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          h.apply(this, arguments)
        );
      };
      function p(e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function s(e) {
            try {
              u(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(a, s);
          }
          u((n = n.apply(e, t || [])).next());
        });
      }
      function m(e, t) {
        var r,
          n,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(s) {
          return function (u) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o && ((o = 0), s[0] && (a = 0)), a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return a.label++, { value: s[1], done: !1 };
                    case 5:
                      a.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        a.label = s[1];
                        break;
                      }
                      if (6 === s[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = s);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(s);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  s = t.call(e, a);
                } catch (u) {
                  (s = [6, u]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, u]);
          };
        }
      }
      function v(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function g(e, t) {
        var r = "function" === typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          o = r.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
            a.push(n.value);
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function y(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, i = 0, o = t.length; i < o; i++)
            (!n && i in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      "function" === typeof SuppressedError && SuppressedError;
      var b = "is",
        _ = "is not",
        w = "contains",
        E = "does not contain",
        S = "less",
        k = "less or equal",
        C = "greater",
        T = "greater or equal",
        P = "version less",
        O = "version less or equal",
        A = "version greater",
        I = "version greater or equal",
        x = "set is",
        M = "set is not",
        R = "set contains",
        N = "set does not contain",
        D = "set contains any",
        L = "set does not contain any",
        j = "regex match",
        B = "regex does not match",
        H = -862048943,
        F = 461845907,
        U = function (e, t) {
          void 0 === t && (t = 0);
          for (
            var r = (function (e) {
                for (var t = [], r = 0, n = 0; n < e.length; n++) {
                  var i = e.charCodeAt(n);
                  i < 128
                    ? (t[r++] = i)
                    : i < 2048
                      ? ((t[r++] = (i >> 6) | 192), (t[r++] = (63 & i) | 128))
                      : 55296 == (64512 & i) &&
                          n + 1 < e.length &&
                          56320 == (64512 & e.charCodeAt(n + 1))
                        ? ((i =
                            65536 +
                            ((1023 & i) << 10) +
                            (1023 & e.charCodeAt(++n))),
                          (t[r++] = (i >> 18) | 240),
                          (t[r++] = ((i >> 12) & 63) | 128),
                          (t[r++] = ((i >> 6) & 63) | 128),
                          (t[r++] = (63 & i) | 128))
                        : ((t[r++] = (i >> 12) | 224),
                          (t[r++] = ((i >> 6) & 63) | 128),
                          (t[r++] = (63 & i) | 128));
                }
                return Uint8Array.from(t);
              })(e),
              n = r.length,
              i = n >> 2,
              o = t,
              a = 0;
            a < i;
            a++
          ) {
            var s = z(r, a << 2);
            o = G(s, o);
          }
          var u = i << 2,
            c = 0;
          switch (n - u) {
            case 3:
              (c ^= r[u + 2] << 16),
                (c ^= r[u + 1] << 8),
                (c ^= r[u]),
                (c = Math.imul(c, H)),
                (c = V(c, 15)),
                (o ^= c = Math.imul(c, F));
              break;
            case 2:
              (c ^= r[u + 1] << 8),
                (c ^= r[u]),
                (c = Math.imul(c, H)),
                (c = V(c, 15)),
                (o ^= c = Math.imul(c, F));
              break;
            case 1:
              (c ^= r[u]),
                (c = Math.imul(c, H)),
                (c = V(c, 15)),
                (o ^= c = Math.imul(c, F));
          }
          return $((o ^= n)) >>> 0;
        },
        G = function (e, t) {
          var r = e,
            n = t;
          return (
            (r = Math.imul(r, H)),
            (r = V(r, 15)),
            (r = Math.imul(r, F)),
            (n = V((n ^= r), 13)),
            ((n = Math.imul(n, 5)) + -430675100) | 0
          );
        },
        $ = function (e) {
          var t = e;
          return (
            (t ^= t >>> 16),
            (t = Math.imul(t, -2048144789)),
            (t ^= t >>> 13),
            (t = Math.imul(t, -1028477387)),
            (t ^= t >>> 16)
          );
        },
        V = function (e, t, r) {
          return (
            void 0 === r && (r = 32),
            t > r && (t %= r),
            ((e << t) |
              ((((e & ((4294967295 << (r - t)) >>> 0)) >>> 0) >>> (r - t)) >>>
                0)) >>>
              0
          );
        },
        z = function (e, t) {
          void 0 === t && (t = 0);
          var r = (e[t] << 24) | (e[t + 1] << 16) | (e[t + 2] << 8) | e[t + 3];
          return K(r);
        },
        K = function (e) {
          return (
            ((-16777216 & e) >>> 24) |
            ((16711680 & e) >>> 8) |
            ((65280 & e) << 8) |
            ((255 & e) << 24)
          );
        },
        q = function (e, t) {
          var r, n;
          if (t && 0 !== t.length) {
            try {
              for (var i = v(t), o = i.next(); !o.done; o = i.next()) {
                var a = o.value;
                if (!a || !e || "object" !== typeof e) return;
                e = e[a];
              }
            } catch (s) {
              r = { error: s };
            } finally {
              try {
                o && !o.done && (n = i.return) && n.call(i);
              } finally {
                if (r) throw r.error;
              }
            }
            return e || void 0;
          }
        },
        W = "^"
          .concat("(\\d+)\\.(\\d+)", "(\\.")
          .concat("(\\d+)")
          .concat("(-(([-\\w]+\\.?)*))?", ")?$"),
        X = (function () {
          function e(e, t, r, n) {
            void 0 === n && (n = void 0),
              (this.major = e),
              (this.minor = t),
              (this.patch = r),
              (this.preRelease = n);
          }
          return (
            (e.parse = function (t) {
              if (t) {
                var r = new RegExp(W).exec(t);
                if (r) {
                  var n = Number(r[1]),
                    i = Number(r[2]);
                  if (!isNaN(n) && !isNaN(i))
                    return new e(n, i, Number(r[4]) || 0, r[5] || void 0);
                }
              }
            }),
            (e.prototype.compareTo = function (e) {
              return this.major > e.major
                ? 1
                : this.major < e.major
                  ? -1
                  : this.minor > e.minor
                    ? 1
                    : this.minor < e.minor
                      ? -1
                      : this.patch > e.patch
                        ? 1
                        : this.patch < e.patch ||
                            (this.preRelease && !e.preRelease)
                          ? -1
                          : !this.preRelease && e.preRelease
                            ? 1
                            : this.preRelease && e.preRelease
                              ? this.preRelease > e.preRelease
                                ? 1
                                : this.preRelease < e.preRelease
                                  ? -1
                                  : 0
                              : 0;
            }),
            e
          );
        })(),
        Y = (function () {
          function e() {}
          return (
            (e.prototype.evaluate = function (e, t) {
              var r,
                n,
                i = {},
                o = { context: e, result: i };
              try {
                for (var a = v(t), s = a.next(); !s.done; s = a.next()) {
                  var u = s.value,
                    c = this.evaluateFlag(o, u);
                  c && (i[u.key] = c);
                }
              } catch (l) {
                r = { error: l };
              } finally {
                try {
                  s && !s.done && (n = a.return) && n.call(a);
                } finally {
                  if (r) throw r.error;
                }
              }
              return i;
            }),
            (e.prototype.evaluateFlag = function (e, t) {
              var r, n, i;
              try {
                for (
                  var o = v(t.segments), a = o.next();
                  !a.done;
                  a = o.next()
                ) {
                  var s = a.value;
                  if ((i = this.evaluateSegment(e, t, s))) {
                    var u = h(h(h({}, t.metadata), s.metadata), i.metadata);
                    i = h(h({}, i), { metadata: u });
                    break;
                  }
                }
              } catch (c) {
                r = { error: c };
              } finally {
                try {
                  a && !a.done && (n = o.return) && n.call(o);
                } finally {
                  if (r) throw r.error;
                }
              }
              return i;
            }),
            (e.prototype.evaluateSegment = function (e, t, r) {
              var n, i, o, a;
              if (!r.conditions)
                return void 0 !== (c = this.bucket(e, r))
                  ? t.variants[c]
                  : void 0;
              try {
                for (
                  var s = v(r.conditions), u = s.next();
                  !u.done;
                  u = s.next()
                ) {
                  var c,
                    l = u.value,
                    f = !0;
                  try {
                    for (
                      var d = ((o = void 0), v(l)), h = d.next();
                      !h.done;
                      h = d.next()
                    ) {
                      var p = h.value;
                      if (!(f = this.matchCondition(e, p))) break;
                    }
                  } catch (m) {
                    o = { error: m };
                  } finally {
                    try {
                      h && !h.done && (a = d.return) && a.call(d);
                    } finally {
                      if (o) throw o.error;
                    }
                  }
                  if (f)
                    return void 0 !== (c = this.bucket(e, r))
                      ? t.variants[c]
                      : void 0;
                }
              } catch (g) {
                n = { error: g };
              } finally {
                try {
                  u && !u.done && (i = s.return) && i.call(s);
                } finally {
                  if (n) throw n.error;
                }
              }
            }),
            (e.prototype.matchCondition = function (e, t) {
              var r = q(e, t.selector);
              if (r) {
                if (this.isSetOperator(t.op)) {
                  var n = this.coerceStringArray(r);
                  return !!n && this.matchSet(n, t.op, t.values);
                }
                var i = this.coerceString(r);
                return void 0 !== i && this.matchString(i, t.op, t.values);
              }
              return this.matchNull(t.op, t.values);
            }),
            (e.prototype.getHash = function (e) {
              return U(e);
            }),
            (e.prototype.bucket = function (e, t) {
              var r, n, i, o;
              if (!t.bucket) return t.variant;
              var a = this.coerceString(q(e, t.bucket.selector));
              if (!a || 0 === a.length) return t.variant;
              var s = "".concat(t.bucket.salt, "/").concat(a),
                u = this.getHash(s),
                c = u % 100,
                l = Math.floor(u / 100);
              try {
                for (
                  var f = v(t.bucket.allocations), d = f.next();
                  !d.done;
                  d = f.next()
                ) {
                  var h = d.value,
                    p = h.range[0],
                    m = h.range[1];
                  if (c >= p && c < m)
                    try {
                      for (
                        var g = ((i = void 0), v(h.distributions)),
                          y = g.next();
                        !y.done;
                        y = g.next()
                      ) {
                        var b = y.value,
                          _ = b.range[0],
                          w = b.range[1];
                        if (l >= _ && l < w) return b.variant;
                      }
                    } catch (E) {
                      i = { error: E };
                    } finally {
                      try {
                        y && !y.done && (o = g.return) && o.call(g);
                      } finally {
                        if (i) throw i.error;
                      }
                    }
                }
              } catch (S) {
                r = { error: S };
              } finally {
                try {
                  d && !d.done && (n = f.return) && n.call(f);
                } finally {
                  if (r) throw r.error;
                }
              }
              return t.variant;
            }),
            (e.prototype.matchNull = function (e, t) {
              var r = this.containsNone(t);
              switch (e) {
                case b:
                case w:
                case S:
                case k:
                case C:
                case T:
                case P:
                case O:
                case A:
                case I:
                case x:
                case R:
                case D:
                  return r;
                case _:
                case E:
                case N:
                case L:
                  return !r;
                default:
                  return !1;
              }
            }),
            (e.prototype.matchSet = function (e, t, r) {
              switch (t) {
                case x:
                  return this.setEquals(e, r);
                case M:
                  return !this.setEquals(e, r);
                case R:
                  return this.matchesSetContainsAll(e, r);
                case N:
                  return !this.matchesSetContainsAll(e, r);
                case D:
                  return this.matchesSetContainsAny(e, r);
                case L:
                  return !this.matchesSetContainsAny(e, r);
                default:
                  return !1;
              }
            }),
            (e.prototype.matchString = function (e, t, r) {
              var n = this;
              switch (t) {
                case b:
                  return this.matchesIs(e, r);
                case _:
                  return !this.matchesIs(e, r);
                case w:
                  return this.matchesContains(e, r);
                case E:
                  return !this.matchesContains(e, r);
                case S:
                case k:
                case C:
                case T:
                  return this.matchesComparable(
                    e,
                    t,
                    r,
                    function (e) {
                      return n.parseNumber(e);
                    },
                    this.comparator,
                  );
                case P:
                case O:
                case A:
                case I:
                  return this.matchesComparable(
                    e,
                    t,
                    r,
                    function (e) {
                      return X.parse(e);
                    },
                    this.versionComparator,
                  );
                case j:
                  return this.matchesRegex(e, r);
                case B:
                  return !this.matchesRegex(e, r);
                default:
                  return !1;
              }
            }),
            (e.prototype.matchesIs = function (e, t) {
              if (this.containsBooleans(t)) {
                var r = e.toLowerCase();
                if ("true" === r || "false" === r)
                  return t.some(function (e) {
                    return e.toLowerCase() === r;
                  });
              }
              return t.some(function (t) {
                return e === t;
              });
            }),
            (e.prototype.matchesContains = function (e, t) {
              var r, n;
              try {
                for (var i = v(t), o = i.next(); !o.done; o = i.next()) {
                  var a = o.value;
                  if (e.toLowerCase().includes(a.toLowerCase())) return !0;
                }
              } catch (s) {
                r = { error: s };
              } finally {
                try {
                  o && !o.done && (n = i.return) && n.call(i);
                } finally {
                  if (r) throw r.error;
                }
              }
              return !1;
            }),
            (e.prototype.matchesComparable = function (e, t, r, n, i) {
              var o = this,
                a = n(e),
                s = r
                  .map(function (e) {
                    return n(e);
                  })
                  .filter(function (e) {
                    return void 0 !== e;
                  });
              return void 0 === a || 0 === s.length
                ? r.some(function (r) {
                    return o.comparator(e, t, r);
                  })
                : s.some(function (e) {
                    return i(a, t, e);
                  });
            }),
            (e.prototype.comparator = function (e, t, r) {
              switch (t) {
                case S:
                case P:
                  return e < r;
                case k:
                case O:
                  return e <= r;
                case C:
                case A:
                  return e > r;
                case T:
                case I:
                  return e >= r;
                default:
                  return !1;
              }
            }),
            (e.prototype.versionComparator = function (e, t, r) {
              var n = e.compareTo(r);
              switch (t) {
                case S:
                case P:
                  return n < 0;
                case k:
                case O:
                  return n <= 0;
                case C:
                case A:
                  return n > 0;
                case T:
                case I:
                  return n >= 0;
                default:
                  return !1;
              }
            }),
            (e.prototype.matchesRegex = function (e, t) {
              return t.some(function (t) {
                return Boolean(new RegExp(t).exec(e));
              });
            }),
            (e.prototype.containsNone = function (e) {
              return e.some(function (e) {
                return "(none)" === e;
              });
            }),
            (e.prototype.containsBooleans = function (e) {
              return e.some(function (e) {
                switch (e.toLowerCase()) {
                  case "true":
                  case "false":
                    return !0;
                  default:
                    return !1;
                }
              });
            }),
            (e.prototype.parseNumber = function (e) {
              var t;
              return null !== (t = Number(e)) && void 0 !== t ? t : void 0;
            }),
            (e.prototype.coerceString = function (e) {
              if (e)
                return "object" === typeof e ? JSON.stringify(e) : String(e);
            }),
            (e.prototype.coerceStringArray = function (e) {
              var t = this;
              if (Array.isArray(e))
                return e
                  .map(function (e) {
                    return t.coerceString(e);
                  })
                  .filter(Boolean);
              var r = String(e);
              try {
                var n = JSON.parse(r);
                return Array.isArray(n)
                  ? e
                      .map(function (e) {
                        return t.coerceString(e);
                      })
                      .filter(Boolean)
                  : void 0;
              } catch (i) {
                return;
              }
            }),
            (e.prototype.isSetOperator = function (e) {
              switch (e) {
                case x:
                case M:
                case R:
                case N:
                case D:
                case L:
                  return !0;
                default:
                  return !1;
              }
            }),
            (e.prototype.setEquals = function (e, t) {
              var r = new Set(e),
                n = new Set(t);
              return (
                r.size === n.size &&
                y([], g(n), !1).every(function (e) {
                  return r.has(e);
                })
              );
            }),
            (e.prototype.matchesSetContainsAll = function (e, t) {
              var r, n;
              if (e.length < t.length) return !1;
              try {
                for (var i = v(t), o = i.next(); !o.done; o = i.next()) {
                  var a = o.value;
                  if (!this.matchesIs(a, e)) return !1;
                }
              } catch (s) {
                r = { error: s };
              } finally {
                try {
                  o && !o.done && (n = i.return) && n.call(i);
                } finally {
                  if (r) throw r.error;
                }
              }
              return !0;
            }),
            (e.prototype.matchesSetContainsAny = function (e, t) {
              var r, n;
              try {
                for (var i = v(t), o = i.next(); !o.done; o = i.next()) {
                  var a = o.value;
                  if (this.matchesIs(a, e)) return !0;
                }
              } catch (s) {
                r = { error: s };
              } finally {
                try {
                  o && !o.done && (n = i.return) && n.call(i);
                } finally {
                  if (r) throw r.error;
                }
              }
              return !1;
            }),
            e
          );
        })(),
        Z = function (e, t, r) {
          var n, i;
          void 0 === r && (r = []);
          var o = t[e];
          if (o) {
            if (!o.dependencies || 0 === o.dependencies.length)
              return delete t[o.key], [o];
            r.push(o.key);
            var a = [],
              s = function (e) {
                if (
                  r.some(function (t) {
                    return t === e;
                  })
                )
                  throw Error("Detected a cycle between flags ".concat(r));
                var n = Z(e, t, r);
                n && a.push.apply(a, y([], g(n), !1));
              };
            try {
              for (
                var u = v(o.dependencies), c = u.next();
                !c.done;
                c = u.next()
              ) {
                s(c.value);
              }
            } catch (l) {
              n = { error: l };
            } finally {
              try {
                c && !c.done && (i = u.return) && i.call(u);
              } finally {
                if (n) throw n.error;
              }
            }
            return a.push(o), r.pop(), delete t[o.key], a;
          }
        };
      const J = "function" === typeof btoa,
        Q = "function" === typeof f,
        ee =
          ("function" === typeof TextDecoder && new TextDecoder(),
          "function" === typeof TextEncoder ? new TextEncoder() : void 0),
        te = Array.prototype.slice.call(
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        ),
        re =
          (((e) => {
            let t = {};
            e.forEach((e, r) => (t[e] = r));
          })(te),
          String.fromCharCode.bind(String)),
        ne =
          ("function" === typeof Uint8Array.from &&
            Uint8Array.from.bind(Uint8Array),
          (e) =>
            e
              .replace(/=/g, "")
              .replace(/[+\/]/g, (e) => ("+" == e ? "-" : "_"))),
        ie = (e) => {
          let t,
            r,
            n,
            i,
            o = "";
          const a = e.length % 3;
          for (let s = 0; s < e.length; ) {
            if (
              (r = e.charCodeAt(s++)) > 255 ||
              (n = e.charCodeAt(s++)) > 255 ||
              (i = e.charCodeAt(s++)) > 255
            )
              throw new TypeError("invalid character found");
            (t = (r << 16) | (n << 8) | i),
              (o +=
                te[(t >> 18) & 63] +
                te[(t >> 12) & 63] +
                te[(t >> 6) & 63] +
                te[63 & t]);
          }
          return a ? o.slice(0, a - 3) + "===".substring(a) : o;
        },
        oe = J
          ? (e) => btoa(e)
          : Q
            ? (e) => f.from(e, "binary").toString("base64")
            : ie,
        ae = Q
          ? (e) => f.from(e).toString("base64")
          : (e) => {
              let t = [];
              for (let r = 0, n = e.length; r < n; r += 4096)
                t.push(re.apply(null, e.subarray(r, r + 4096)));
              return oe(t.join(""));
            },
        se = (e) => {
          if (e.length < 2)
            return (t = e.charCodeAt(0)) < 128
              ? e
              : t < 2048
                ? re(192 | (t >>> 6)) + re(128 | (63 & t))
                : re(224 | ((t >>> 12) & 15)) +
                  re(128 | ((t >>> 6) & 63)) +
                  re(128 | (63 & t));
          var t =
            65536 +
            1024 * (e.charCodeAt(0) - 55296) +
            (e.charCodeAt(1) - 56320);
          return (
            re(240 | ((t >>> 18) & 7)) +
            re(128 | ((t >>> 12) & 63)) +
            re(128 | ((t >>> 6) & 63)) +
            re(128 | (63 & t))
          );
        },
        ue = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
        ce = (e) => e.replace(ue, se),
        le = Q
          ? (e) => f.from(e, "utf8").toString("base64")
          : ee
            ? (e) => ae(ee.encode(e))
            : (e) => oe(ce(e)),
        fe = (e, t = !1) => (t ? ne(le(e)) : le(e)),
        de = (e) => fe(e, !0),
        he = de;
      var pe = (function (e) {
          function t(r, n) {
            var i = e.call(this, n) || this;
            return (i.statusCode = r), Object.setPrototypeOf(i, t.prototype), i;
          }
          return (
            (function (e, t) {
              if ("function" !== typeof t && null !== t)
                throw new TypeError(
                  "Class extends value " +
                    String(t) +
                    " is not a constructor or null",
                );
              function r() {
                this.constructor = e;
              }
              d(e, t),
                (e.prototype =
                  null === t
                    ? Object.create(t)
                    : ((r.prototype = t.prototype), new r()));
            })(t, e),
            t
          );
        })(Error),
        me = (function () {
          function e(e, t, r) {
            (this.deploymentKey = e),
              (this.serverUrl = t),
              (this.httpClient = r);
          }
          return (
            (e.prototype.getVariants = function (e, t) {
              return p(this, void 0, void 0, function () {
                var r, n, i, o;
                return m(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return (
                        (r = he(JSON.stringify(e))),
                        (n = {
                          Authorization: "Api-Key ".concat(this.deploymentKey),
                          "X-Amp-Exp-User": r,
                        }),
                        (null === t || void 0 === t ? void 0 : t.flagKeys) &&
                          (n["X-Amp-Exp-Flag-Keys"] = he(
                            JSON.stringify(t.flagKeys),
                          )),
                        (null === t || void 0 === t
                          ? void 0
                          : t.trackingOption) &&
                          (n["X-Amp-Exp-Track"] = t.trackingOption),
                        (i = new URL(
                          "".concat(this.serverUrl, "/sdk/v2/vardata?v=0"),
                        )),
                        (null === t || void 0 === t
                          ? void 0
                          : t.evaluationMode) &&
                          i.searchParams.append(
                            "eval_mode",
                            null === t || void 0 === t
                              ? void 0
                              : t.evaluationMode,
                          ),
                        (null === t || void 0 === t
                          ? void 0
                          : t.deliveryMethod) &&
                          i.searchParams.append(
                            "delivery_method",
                            null === t || void 0 === t
                              ? void 0
                              : t.deliveryMethod,
                          ),
                        [
                          4,
                          this.httpClient.request({
                            requestUrl: i.toString(),
                            method: "GET",
                            headers: n,
                            timeoutMillis:
                              null === t || void 0 === t
                                ? void 0
                                : t.timeoutMillis,
                          }),
                        ]
                      );
                    case 1:
                      if (200 != (o = a.sent()).status)
                        throw new pe(
                          o.status,
                          "Fetch error response: status=".concat(o.status),
                        );
                      return [2, JSON.parse(o.body)];
                  }
                });
              });
            }),
            e
          );
        })(),
        ve = (function () {
          function e(e, t, r) {
            (this.deploymentKey = e),
              (this.serverUrl = t),
              (this.httpClient = r);
          }
          return (
            (e.prototype.getFlags = function (e) {
              return p(this, void 0, void 0, function () {
                var t, r;
                return m(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return (
                        (t = {
                          Authorization: "Api-Key ".concat(this.deploymentKey),
                        }),
                        (null === e || void 0 === e ? void 0 : e.libraryName) &&
                          (null === e || void 0 === e
                            ? void 0
                            : e.libraryVersion) &&
                          (t["X-Amp-Exp-Library"] = ""
                            .concat(e.libraryName, "/")
                            .concat(e.libraryVersion)),
                        [
                          4,
                          this.httpClient.request({
                            requestUrl: "".concat(
                              this.serverUrl,
                              "/sdk/v2/flags",
                            ),
                            method: "GET",
                            headers: t,
                            timeoutMillis:
                              null === e || void 0 === e
                                ? void 0
                                : e.timeoutMillis,
                          }),
                        ]
                      );
                    case 1:
                      if (200 != (r = n.sent()).status)
                        throw Error(
                          "Flags error response: status=".concat(r.status),
                        );
                      return [
                        2,
                        JSON.parse(r.body).reduce(function (e, t) {
                          return (e[t.key] = t), e;
                        }, {}),
                      ];
                  }
                });
              });
            }),
            e
          );
        })(),
        ge = "undefined" !== typeof globalThis ? globalThis : r.g || self,
        ye = (function () {
          function e(e, t) {
            (this.poller = void 0), (this.action = e), (this.ms = t);
          }
          return (
            (e.prototype.start = function () {
              this.poller ||
                ((this.poller = ge.setInterval(this.action, this.ms)),
                this.action());
            }),
            (e.prototype.stop = function () {
              this.poller &&
                (ge.clearInterval(this.poller), (this.poller = void 0));
            }),
            e
          );
        })(),
        be = r(90434),
        _e =
          ((function () {
            function e(e) {
              this.amplitudeInstance = e;
            }
            (e.prototype.getUser = function () {
              var e, t, r, n, i, o, a, s, u, c;
              return {
                device_id:
                  null ===
                    (t =
                      null === (e = this.amplitudeInstance) || void 0 === e
                        ? void 0
                        : e.options) || void 0 === t
                    ? void 0
                    : t.deviceId,
                user_id:
                  null ===
                    (n =
                      null === (r = this.amplitudeInstance) || void 0 === r
                        ? void 0
                        : r.options) || void 0 === n
                    ? void 0
                    : n.userId,
                version:
                  null ===
                    (o =
                      null === (i = this.amplitudeInstance) || void 0 === i
                        ? void 0
                        : i.options) || void 0 === o
                    ? void 0
                    : o.versionName,
                language:
                  null ===
                    (s =
                      null === (a = this.amplitudeInstance) || void 0 === a
                        ? void 0
                        : a.options) || void 0 === s
                    ? void 0
                    : s.language,
                platform:
                  null ===
                    (c =
                      null === (u = this.amplitudeInstance) || void 0 === u
                        ? void 0
                        : u.options) || void 0 === c
                    ? void 0
                    : c.platform,
                os: this.getOs(),
                device_model: this.getDeviceModel(),
              };
            }),
              (e.prototype.getOs = function () {
                var e, t, r, n, i, o;
                return [
                  null ===
                    (r =
                      null ===
                        (t =
                          null === (e = this.amplitudeInstance) || void 0 === e
                            ? void 0
                            : e._ua) || void 0 === t
                        ? void 0
                        : t.browser) || void 0 === r
                    ? void 0
                    : r.name,
                  null ===
                    (o =
                      null ===
                        (i =
                          null === (n = this.amplitudeInstance) || void 0 === n
                            ? void 0
                            : n._ua) || void 0 === i
                        ? void 0
                        : i.browser) || void 0 === o
                    ? void 0
                    : o.major,
                ]
                  .filter(function (e) {
                    return null !== e && void 0 !== e;
                  })
                  .join(" ");
              }),
              (e.prototype.getDeviceModel = function () {
                var e, t, r;
                return null ===
                  (r =
                    null ===
                      (t =
                        null === (e = this.amplitudeInstance) || void 0 === e
                          ? void 0
                          : e._ua) || void 0 === t
                      ? void 0
                      : t.os) || void 0 === r
                  ? void 0
                  : r.name;
              });
          })(),
          (function () {
            function e(e) {
              this.amplitudeInstance = e;
            }
            (e.prototype.track = function (e) {
              this.amplitudeInstance.logEvent(e.name, e.properties);
            }),
              (e.prototype.setUserProperty = function (e) {
                var t, r;
                this.amplitudeInstance.setUserProperties(
                  (((t = {})[e.userProperty] =
                    null === (r = e.variant) || void 0 === r
                      ? void 0
                      : r.value),
                  t),
                );
              }),
              (e.prototype.unsetUserProperty = function (e) {
                var t;
                this.amplitudeInstance._logEvent("$identify", null, null, {
                  $unset: ((t = {}), (t[e.userProperty] = "-"), t),
                });
              });
          })(),
          function () {
            return (
              (_e =
                Object.assign ||
                function (e) {
                  for (var t, r = 1, n = arguments.length; r < n; r++)
                    for (var i in (t = arguments[r]))
                      Object.prototype.hasOwnProperty.call(t, i) &&
                        (e[i] = t[i]);
                  return e;
                }),
              _e.apply(this, arguments)
            );
          });
      function we(e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function s(e) {
            try {
              u(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(a, s);
          }
          u((n = n.apply(e, t || [])).next());
        });
      }
      function Ee(e, t) {
        var r,
          n,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(s) {
          return function (u) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o && ((o = 0), s[0] && (a = 0)), a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return a.label++, { value: s[1], done: !1 };
                    case 5:
                      a.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        a.label = s[1];
                        break;
                      }
                      if (6 === s[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = s);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(s);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  s = t.call(e, a);
                } catch (u) {
                  (s = [6, u]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, u]);
          };
        }
      }
      function Se(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      "function" === typeof SuppressedError && SuppressedError;
      var ke,
        Ce,
        Te =
          ge.fetch ||
          function (e, t) {
            return (
              (t = t || {}),
              new Promise(function (r, n) {
                var i = new XMLHttpRequest(),
                  o = [],
                  a = [],
                  s = {},
                  u = function () {
                    return {
                      ok: 2 == ((i.status / 100) | 0),
                      statusText: i.statusText,
                      status: i.status,
                      url: i.responseURL,
                      text: function () {
                        return Promise.resolve(i.responseText);
                      },
                      json: function () {
                        return Promise.resolve(JSON.parse(i.responseText));
                      },
                      blob: function () {
                        return Promise.resolve(new Blob([i.response]));
                      },
                      clone: u,
                      headers: {
                        keys: function () {
                          return o;
                        },
                        entries: function () {
                          return a;
                        },
                        get: function (e) {
                          return s[e.toLowerCase()];
                        },
                        has: function (e) {
                          return e.toLowerCase() in s;
                        },
                      },
                    };
                  };
                for (var c in (i.open(t.method || "get", e, !0),
                (i.onload = function () {
                  i
                    .getAllResponseHeaders()
                    .replace(
                      /^(.*?):[^\S\n]*([\s\S]*?)$/gm,
                      function (e, t, r) {
                        o.push((t = t.toLowerCase())),
                          a.push([t, r]),
                          (s[t] = s[t] ? s[t] + "," + r : r);
                      },
                    ),
                    r(u());
                }),
                (i.onerror = n),
                (i.withCredentials = "include" == t.credentials),
                t.headers))
                  i.setRequestHeader(c, t.headers[c]);
                i.send(t.body || null);
              })
            );
          },
        Pe = (function () {
          function e(e) {
            this.client = e;
          }
          return (
            (e.prototype.request = function (e) {
              return we(this, void 0, void 0, function () {
                return Ee(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.client.request(
                          e.requestUrl,
                          e.method,
                          e.headers,
                          null,
                          e.timeoutMillis,
                        ),
                      ];
                    case 1:
                      return [2, t.sent()];
                  }
                });
              });
            }),
            e
          );
        })(),
        Oe = {
          request: function (e, t, r, n, i) {
            return (function (e, t) {
              return null == t || t <= 0
                ? e
                : new Promise(function (r, n) {
                    ge.setTimeout(function () {
                      n(Error("Request timeout after " + t + " milliseconds"));
                    }, t),
                      e.then(r, n);
                  });
            })(
              we(void 0, void 0, void 0, function () {
                var i, o;
                return Ee(this, function (a) {
                  switch (a.label) {
                    case 0:
                      return [4, Te(e, { method: t, headers: r, body: n })];
                    case 1:
                      return (
                        (i = a.sent()),
                        (o = { status: i.status }),
                        [4, i.text()]
                      );
                    case 2:
                      return (o.body = a.sent()), [2, o];
                  }
                });
              }),
              i,
            );
          },
        };
      !(function (e) {
        (e.LocalStorage = "localStorage"),
          (e.InitialVariants = "initialVariants");
      })(ke || (ke = {})),
        (function (e) {
          (e.LocalStorage = "storage"),
            (e.InitialVariants = "initial"),
            (e.SecondaryLocalStorage = "secondary-storage"),
            (e.SecondaryInitialVariants = "secondary-initial"),
            (e.FallbackInline = "fallback-inline"),
            (e.FallbackConfig = "fallback-config"),
            (e.LocalEvaluation = "local-evaluation");
        })(Ce || (Ce = {}));
      var Ae = function (e) {
          return (
            !e ||
            e === Ce.FallbackInline ||
            e === Ce.FallbackConfig ||
            e === Ce.SecondaryInitialVariants
          );
        },
        Ie = {
          debug: !1,
          instanceName: "$default_instance",
          fallbackVariant: {},
          initialVariants: {},
          initialFlags: void 0,
          source: ke.LocalStorage,
          serverUrl: "https://api.lab.amplitude.com",
          flagsServerUrl: "https://flag.lab.amplitude.com",
          serverZone: "US",
          fetchTimeoutMillis: 1e4,
          retryFetchOnFailure: !0,
          automaticExposureTracking: !0,
          pollOnStart: !0,
          fetchOnStart: !0,
          automaticFetchOnAmplitudeIdentityChange: !1,
          userProvider: null,
          analyticsProvider: null,
          exposureTrackingProvider: null,
          httpClient: Oe,
        },
        xe = "1.11.0",
        Me = (function () {
          function e(e) {
            this.identityStore = e;
          }
          return (
            (e.prototype.identityReady = function (e) {
              return we(this, void 0, void 0, function () {
                var t,
                  r = this;
                return Ee(this, function (n) {
                  return (t = this.identityStore.getIdentity()).userId ||
                    t.deviceId
                    ? [2]
                    : [
                        2,
                        Promise.race([
                          new Promise(function (e) {
                            var t = function () {
                              e(void 0),
                                r.identityStore.removeIdentityListener(t);
                            };
                            r.identityStore.addIdentityListener(t);
                          }),
                          new Promise(function (t, r) {
                            ge.setTimeout(
                              r,
                              e,
                              "Timed out waiting for Amplitude Analytics SDK to initialize. You must ensure that the analytics SDK is initialized prior to calling fetch().",
                            );
                          }),
                        ]),
                      ];
                });
              });
            }),
            (e.prototype.getUser = function () {
              var e = this.identityStore.getIdentity(),
                t = void 0;
              try {
                t = e.userProperties;
              } catch (r) {
                console.warn("[Experiment] failed to cast user properties");
              }
              return {
                user_id: e.userId,
                device_id: e.deviceId,
                user_properties: t,
              };
            }),
            e
          );
        })(),
        Re = (function () {
          function e(e) {
            this.eventBridge = e;
          }
          return (
            (e.prototype.track = function (e) {
              this.eventBridge.logEvent({
                eventType: "$exposure",
                eventProperties: e,
              });
            }),
            e
          );
        })(),
        Ne = (function () {
          function e(e, t) {
            (this.ua = new be.UAParser(
              "undefined" !== typeof navigator ? navigator.userAgent : null,
            ).getResult()),
              (this.contextProvider = e),
              (this.userProvider = t);
          }
          return (
            (e.prototype.getUser = function () {
              var e,
                t =
                  (null === (e = this.userProvider) || void 0 === e
                    ? void 0
                    : e.getUser()) || {},
                r = this.contextProvider.getApplicationContext();
              return _e(
                {
                  version: r.versionName,
                  language: r.language,
                  platform: r.platform,
                  os: r.os || this.getOs(this.ua),
                  device_model: r.deviceModel || this.getDeviceModel(this.ua),
                },
                t,
              );
            }),
            (e.prototype.getOs = function (e) {
              var t, r;
              return [
                null === (t = e.browser) || void 0 === t ? void 0 : t.name,
                null === (r = e.browser) || void 0 === r ? void 0 : r.major,
              ]
                .filter(function (e) {
                  return null !== e && void 0 !== e;
                })
                .join(" ");
            }),
            (e.prototype.getDeviceModel = function (e) {
              var t;
              return null === (t = e.os) || void 0 === t ? void 0 : t.name;
            }),
            e
          );
        })(),
        De = (function () {
          function e() {}
          return (
            (e.prototype.get = function (e) {
              return localStorage.getItem(e);
            }),
            (e.prototype.put = function (e, t) {
              localStorage.setItem(e, t);
            }),
            (e.prototype.delete = function (e) {
              localStorage.removeItem(e);
            }),
            e
          );
        })(),
        Le = (function () {
          function e(e, t, r) {
            (this.cache = {}),
              (this.namespace = e),
              (this.storage = t),
              (this.transformer = r);
          }
          return (
            (e.prototype.get = function (e) {
              return this.cache[e];
            }),
            (e.prototype.getAll = function () {
              return _e({}, this.cache);
            }),
            (e.prototype.put = function (e, t) {
              this.cache[e] = t;
            }),
            (e.prototype.putAll = function (e) {
              var t, r;
              try {
                for (
                  var n = Se(Object.keys(e)), i = n.next();
                  !i.done;
                  i = n.next()
                ) {
                  var o = i.value;
                  this.cache[o] = e[o];
                }
              } catch (a) {
                t = { error: a };
              } finally {
                try {
                  i && !i.done && (r = n.return) && r.call(n);
                } finally {
                  if (t) throw t.error;
                }
              }
            }),
            (e.prototype.remove = function (e) {
              delete this.cache[e];
            }),
            (e.prototype.clear = function () {
              this.cache = {};
            }),
            (e.prototype.load = function () {
              var e,
                t,
                r,
                n = this.storage.get(this.namespace);
              try {
                r = JSON.parse(n) || {};
              } catch (c) {
                return;
              }
              var i = {};
              try {
                for (
                  var o = Se(Object.keys(r)), a = o.next();
                  !a.done;
                  a = o.next()
                ) {
                  var s = a.value;
                  try {
                    var u = void 0;
                    (u = this.transformer ? this.transformer(r[s]) : r[s]) &&
                      (i[s] = u);
                  } catch (l) {}
                }
              } catch (f) {
                e = { error: f };
              } finally {
                try {
                  a && !a.done && (t = o.return) && t.call(o);
                } finally {
                  if (e) throw e.error;
                }
              }
              this.clear(), this.putAll(i);
            }),
            (e.prototype.store = function (e) {
              void 0 === e && (e = this.cache),
                this.storage.put(this.namespace, JSON.stringify(e));
            }),
            e
          );
        })(),
        je = function (e) {
          if ("string" === typeof e) return { key: e, value: e };
          if ("object" === typeof e) {
            var t = e.key,
              r = e.value,
              n = e.payload,
              i = e.metadata,
              o = e.expKey;
            i && i.experimentKey
              ? (o = i.experimentKey)
              : o && ((i = i || {}).experimentKey = o);
            var a = {};
            return (
              t ? (a.key = t) : r && (a.key = r),
              r && (a.value = r),
              i && (a.metadata = i),
              n && (a.payload = n),
              o && (a.expKey = o),
              a
            );
          }
        },
        Be = function (e) {
          return null === e || void 0 === e;
        },
        He = function (e) {
          return !!Be(e) || (e && 0 === Object.keys(e).length);
        },
        Fe = function (e) {
          var t;
          return (
            "local" ===
            (null === (t = null === e || void 0 === e ? void 0 : e.metadata) ||
            void 0 === t
              ? void 0
              : t.evaluationMode)
          );
        },
        Ue = (function () {
          function e(e, t, r, n) {
            (this.started = !1),
              (this.done = !1),
              (this.attempts = e),
              (this.min = t),
              (this.max = r),
              (this.scalar = n);
          }
          return (
            (e.prototype.start = function (e) {
              return we(this, void 0, void 0, function () {
                return Ee(this, function (t) {
                  switch (t.label) {
                    case 0:
                      if (this.started) throw Error("Backoff already started");
                      return (
                        (this.started = !0), [4, this.backoff(e, 0, this.min)]
                      );
                    case 1:
                      return t.sent(), [2];
                  }
                });
              });
            }),
            (e.prototype.cancel = function () {
              (this.done = !0), clearTimeout(this.timeoutHandle);
            }),
            (e.prototype.backoff = function (e, t, r) {
              return we(this, void 0, void 0, function () {
                var n = this;
                return Ee(this, function (i) {
                  return (
                    this.done ||
                      (this.timeoutHandle = ge.setTimeout(function () {
                        return we(n, void 0, void 0, function () {
                          var n, i;
                          return Ee(this, function (o) {
                            switch (o.label) {
                              case 0:
                                return o.trys.push([0, 2, , 3]), [4, e()];
                              case 1:
                                return o.sent(), [3, 3];
                              case 2:
                                return (
                                  o.sent(),
                                  (n = t + 1) < this.attempts &&
                                    ((i = Math.min(r * this.scalar, this.max)),
                                    this.backoff(e, n, i)),
                                  [3, 3]
                                );
                              case 3:
                                return [2];
                            }
                          });
                        });
                      }, r)),
                    [2]
                  );
                });
              });
            }),
            e
          );
        })(),
        Ge = function (e) {
          return null === e || void 0 === e
            ? {}
            : "string" == typeof e
              ? { key: e, value: e }
              : e;
        },
        $e = function (e) {
          if (!e) return {};
          var t = void 0;
          e.metadata && (t = e.metadata.experimentKey);
          var r = {};
          return (
            e.key && (r.key = e.key),
            e.value && (r.value = e.value),
            e.payload && (r.payload = e.payload),
            t && (r.expKey = t),
            e.metadata && (r.metadata = e.metadata),
            r
          );
        },
        Ve = (function () {
          function e(e) {
            (this.setProperties = {}),
              (this.unsetProperties = {}),
              (this.analyticsProvider = e);
          }
          return (
            (e.prototype.track = function (e) {
              this.setProperties[e.key] != e.variant.value &&
                ((this.setProperties[e.key] = e.variant.value),
                delete this.unsetProperties[e.key],
                this.analyticsProvider.track(e));
            }),
            (e.prototype.setUserProperty = function (e) {
              this.setProperties[e.key] != e.variant.value &&
                this.analyticsProvider.setUserProperty(e);
            }),
            (e.prototype.unsetUserProperty = function (e) {
              this.unsetProperties[e.key] ||
                ((this.unsetProperties[e.key] = "unset"),
                delete this.setProperties[e.key],
                this.analyticsProvider.unsetUserProperty(e));
            }),
            e
          );
        })(),
        ze = (function () {
          function e(e) {
            (this.tracked = {}), (this.exposureTrackingProvider = e);
          }
          return (
            (e.prototype.track = function (e) {
              var t = this.tracked[e.flag_key];
              (t && t.variant === e.variant) ||
                ((this.tracked[e.flag_key] = e),
                this.exposureTrackingProvider.track(e));
            }),
            e
          );
        })(),
        Ke = (function () {
          function e(e, t) {
            var r,
              n,
              i = this;
            if (
              ((this.engine = new Y()),
              (this.poller = new ye(function () {
                return i.doFlags();
              }, 6e4)),
              (this.isRunning = !1),
              (this.apiKey = e),
              (this.config = _e(_e(_e({}, Ie), t), {
                serverUrl:
                  (null === t || void 0 === t ? void 0 : t.serverUrl) ||
                  ("eu" ===
                  (null ===
                    (r = null === t || void 0 === t ? void 0 : t.serverZone) ||
                  void 0 === r
                    ? void 0
                    : r.toLowerCase())
                    ? "https://api.lab.eu.amplitude.com"
                    : Ie.serverUrl),
                flagsServerUrl:
                  (null === t || void 0 === t ? void 0 : t.flagsServerUrl) ||
                  ("eu" ===
                  (null ===
                    (n = null === t || void 0 === t ? void 0 : t.serverZone) ||
                  void 0 === n
                    ? void 0
                    : n.toLowerCase())
                    ? "https://flag.lab.eu.amplitude.com"
                    : Ie.flagsServerUrl),
              })),
              this.config.initialVariants)
            )
              for (var o in this.config.initialVariants)
                this.config.initialVariants[o] = je(
                  this.config.initialVariants[o],
                );
            this.config.userProvider &&
              (this.userProvider = this.config.userProvider),
              this.config.analyticsProvider &&
                (this.analyticsProvider = new Ve(
                  this.config.analyticsProvider,
                )),
              this.config.exposureTrackingProvider &&
                (this.exposureTrackingProvider = new ze(
                  this.config.exposureTrackingProvider,
                ));
            var a = new Pe(this.config.httpClient || Oe);
            (this.flagApi = new ve(this.apiKey, this.config.flagsServerUrl, a)),
              (this.evaluationApi = new me(
                this.apiKey,
                this.config.serverUrl,
                a,
              ));
            var s = new De();
            (this.variants = (function (e, t, r) {
              var n = e.substring(e.length - 6),
                i = "amp-exp-".concat(t, "-").concat(n);
              return new Le(i, r, je);
            })(this.apiKey, this.config.instanceName, s)),
              (this.flags = (function (e, t, r) {
                void 0 === r && (r = new De());
                var n = e.substring(e.length - 6),
                  i = "amp-exp-".concat(t, "-").concat(n, "-flags");
                return new Le(i, r);
              })(this.apiKey, this.config.instanceName, s));
            try {
              this.flags.load(), this.variants.load();
            } catch (u) {}
            this.mergeInitialFlagsWithStorage();
          }
          return (
            (e.prototype.start = function (e) {
              var t;
              return we(this, void 0, void 0, function () {
                var r;
                return Ee(this, function (n) {
                  switch (n.label) {
                    case 0:
                      return this.isRunning
                        ? [2]
                        : ((this.isRunning = !0),
                          this.setUser(e),
                          (r = this.doFlags()),
                          null === (t = this.config.fetchOnStart) ||
                          void 0 === t ||
                          t
                            ? [4, Promise.all([this.fetch(e), r])]
                            : [3, 2]);
                    case 1:
                      return n.sent(), [3, 4];
                    case 2:
                      return [4, r];
                    case 3:
                      n.sent(), (n.label = 4);
                    case 4:
                      return (
                        this.config.pollOnStart && this.poller.start(), [2]
                      );
                  }
                });
              });
            }),
            (e.prototype.stop = function () {
              this.isRunning && (this.poller.stop(), (this.isRunning = !1));
            }),
            (e.prototype.fetch = function (e, t) {
              return (
                void 0 === e && (e = this.user),
                we(this, void 0, void 0, function () {
                  var r;
                  return Ee(this, function (n) {
                    switch (n.label) {
                      case 0:
                        this.setUser(e || {}), (n.label = 1);
                      case 1:
                        return (
                          n.trys.push([1, 3, , 4]),
                          [
                            4,
                            this.fetchInternal(
                              e,
                              this.config.fetchTimeoutMillis,
                              this.config.retryFetchOnFailure,
                              t,
                            ),
                          ]
                        );
                      case 2:
                        return n.sent(), [3, 4];
                      case 3:
                        return (r = n.sent()), console.error(r), [3, 4];
                      case 4:
                        return [2, this];
                    }
                  });
                })
              );
            }),
            (e.prototype.variant = function (e, t) {
              var r, n;
              if (!this.apiKey) return { value: void 0 };
              var i = this.variantAndSource(e, t);
              return (
                this.config.automaticExposureTracking &&
                  this.exposureInternal(e, i),
                this.debug(
                  "[Experiment] variant for "
                    .concat(e, " is ")
                    .concat(
                      (null === (r = i.variant) || void 0 === r
                        ? void 0
                        : r.key) ||
                        (null === (n = i.variant) || void 0 === n
                          ? void 0
                          : n.value),
                    ),
                ),
                i.variant || {}
              );
            }),
            (e.prototype.exposure = function (e) {
              var t = this.variantAndSource(e);
              this.exposureInternal(e, t);
            }),
            (e.prototype.all = function () {
              if (!this.apiKey) return {};
              var e = this.evaluate();
              for (var t in e) {
                var r = this.flags.get(t);
                Fe(r) || delete e[t];
              }
              return _e(
                _e(_e({}, this.secondaryVariants()), this.sourceVariants()),
                e,
              );
            }),
            (e.prototype.clear = function () {
              this.variants.clear();
              try {
                this.variants.store();
              } catch (e) {}
            }),
            (e.prototype.getUser = function () {
              var e;
              if (!this.user) return this.user;
              if (
                null === (e = this.user) || void 0 === e
                  ? void 0
                  : e.user_properties
              ) {
                var t = _e({}, this.user.user_properties);
                return _e(_e({}, this.user), { user_properties: t });
              }
              return _e({}, this.user);
            }),
            (e.prototype.setUser = function (e) {
              var t;
              if (e)
                if (
                  null === (t = this.user) || void 0 === t
                    ? void 0
                    : t.user_properties
                ) {
                  var r = _e({}, e.user_properties);
                  this.user = _e(_e({}, e), { user_properties: r });
                } else this.user = _e({}, e);
              else this.user = null;
            }),
            (e.prototype.getUserProvider = function () {
              return this.userProvider;
            }),
            (e.prototype.setUserProvider = function (e) {
              return (this.userProvider = e), this;
            }),
            (e.prototype.mergeInitialFlagsWithStorage = function () {
              var e = this;
              this.config.initialFlags &&
                JSON.parse(this.config.initialFlags).forEach(function (t) {
                  e.flags.get(t.key) || e.flags.put(t.key, t);
                });
            }),
            (e.prototype.evaluate = function (e) {
              var t,
                r,
                n = this.addContext(this.user),
                i = (function (e, t) {
                  var r,
                    n,
                    i = h({}, e),
                    o = [],
                    a = t || Object.keys(i);
                  try {
                    for (var s = v(a), u = s.next(); !u.done; u = s.next()) {
                      var c = u.value,
                        l = Z(c, i);
                      l && o.push.apply(o, y([], g(l), !1));
                    }
                  } catch (f) {
                    r = { error: f };
                  } finally {
                    try {
                      u && !u.done && (n = s.return) && n.call(s);
                    } finally {
                      if (r) throw r.error;
                    }
                  }
                  return o;
                })(this.flags.getAll(), e),
                o = (function (e) {
                  var t, r, n, i;
                  if (!e) return {};
                  var o = { user: e },
                    a = {};
                  if (!e.groups) return o;
                  try {
                    for (
                      var s = Se(Object.keys(e.groups)), u = s.next();
                      !u.done;
                      u = s.next()
                    ) {
                      var c = u.value,
                        l = e.groups[c];
                      if (l.length > 0 && l[0]) {
                        var f = l[0],
                          d = { group_name: f },
                          h =
                            null ===
                              (i =
                                null === (n = e.group_properties) ||
                                void 0 === n
                                  ? void 0
                                  : n[c]) || void 0 === i
                              ? void 0
                              : i[f];
                        h &&
                          Object.keys(h).length > 0 &&
                          (d.group_properties = h),
                          (a[c] = d);
                      }
                    }
                  } catch (p) {
                    t = { error: p };
                  } finally {
                    try {
                      u && !u.done && (r = s.return) && r.call(s);
                    } finally {
                      if (t) throw t.error;
                    }
                  }
                  return (
                    Object.keys(a).length > 0 && (o.groups = a),
                    delete o.user.groups,
                    delete o.user.group_properties,
                    o
                  );
                })(n),
                a = this.engine.evaluate(o, i),
                s = {};
              try {
                for (
                  var u = Se(Object.keys(a)), c = u.next();
                  !c.done;
                  c = u.next()
                ) {
                  var l = c.value;
                  s[l] = $e(a[l]);
                }
              } catch (f) {
                t = { error: f };
              } finally {
                try {
                  c && !c.done && (r = u.return) && r.call(u);
                } finally {
                  if (t) throw t.error;
                }
              }
              return s;
            }),
            (e.prototype.variantAndSource = function (e, t) {
              var r = {};
              this.config.source === ke.LocalStorage
                ? (r = this.localStorageVariantAndSource(e, t))
                : this.config.source === ke.InitialVariants &&
                  (r = this.initialVariantsVariantAndSource(e, t));
              var n = this.flags.get(e);
              return (
                (Fe(n) || (!r.variant && n)) &&
                  (r = this.localEvaluationVariantAndSource(e, n, t)),
                r
              );
            }),
            (e.prototype.localEvaluationVariantAndSource = function (e, t, r) {
              var n,
                i = {},
                o = this.evaluate([t.key])[e],
                a = Ce.LocalEvaluation,
                s =
                  null ===
                    (n = null === o || void 0 === o ? void 0 : o.metadata) ||
                  void 0 === n
                    ? void 0
                    : n.default;
              if (!Be(o) && !s)
                return { variant: Ge(o), source: a, hasDefaultVariant: !1 };
              if (
                (s &&
                  (i = { variant: Ge(o), source: a, hasDefaultVariant: !0 }),
                !Be(r))
              )
                return {
                  variant: Ge(r),
                  source: Ce.FallbackInline,
                  hasDefaultVariant: i.hasDefaultVariant,
                };
              var u = this.config.initialVariants[e];
              if (!Be(u))
                return {
                  variant: Ge(u),
                  source: Ce.SecondaryInitialVariants,
                  hasDefaultVariant: i.hasDefaultVariant,
                };
              var c = Ge(this.config.fallbackVariant),
                l = {
                  variant: c,
                  source: Ce.FallbackConfig,
                  hasDefaultVariant: i.hasDefaultVariant,
                };
              return He(c) ? i : l;
            }),
            (e.prototype.localStorageVariantAndSource = function (e, t) {
              var r,
                n = {},
                i = this.variants.get(e),
                o =
                  null ===
                    (r = null === i || void 0 === i ? void 0 : i.metadata) ||
                  void 0 === r
                    ? void 0
                    : r.default;
              if (!Be(i) && !o)
                return {
                  variant: Ge(i),
                  source: Ce.LocalStorage,
                  hasDefaultVariant: !1,
                };
              if (
                (o &&
                  (n = {
                    variant: Ge(i),
                    source: Ce.LocalStorage,
                    hasDefaultVariant: !0,
                  }),
                !Be(t))
              )
                return {
                  variant: Ge(t),
                  source: Ce.FallbackInline,
                  hasDefaultVariant: n.hasDefaultVariant,
                };
              var a = this.config.initialVariants[e];
              if (!Be(a))
                return {
                  variant: Ge(a),
                  source: Ce.SecondaryInitialVariants,
                  hasDefaultVariant: n.hasDefaultVariant,
                };
              var s = Ge(this.config.fallbackVariant),
                u = {
                  variant: s,
                  source: Ce.FallbackConfig,
                  hasDefaultVariant: n.hasDefaultVariant,
                };
              return He(s) ? n : u;
            }),
            (e.prototype.initialVariantsVariantAndSource = function (e, t) {
              var r,
                n = {},
                i = this.config.initialVariants[e];
              if (!Be(i))
                return {
                  variant: Ge(i),
                  source: Ce.InitialVariants,
                  hasDefaultVariant: !1,
                };
              var o = this.variants.get(e),
                a =
                  null ===
                    (r = null === o || void 0 === o ? void 0 : o.metadata) ||
                  void 0 === r
                    ? void 0
                    : r.default;
              if (!Be(o) && !a)
                return {
                  variant: Ge(o),
                  source: Ce.LocalStorage,
                  hasDefaultVariant: !1,
                };
              if (
                (a &&
                  (n = {
                    variant: Ge(o),
                    source: Ce.LocalStorage,
                    hasDefaultVariant: !0,
                  }),
                !Be(t))
              )
                return {
                  variant: Ge(t),
                  source: Ce.FallbackInline,
                  hasDefaultVariant: n.hasDefaultVariant,
                };
              var s = Ge(this.config.fallbackVariant),
                u = {
                  variant: s,
                  source: Ce.FallbackConfig,
                  hasDefaultVariant: n.hasDefaultVariant,
                };
              return He(s) ? n : u;
            }),
            (e.prototype.fetchInternal = function (e, t, r, n) {
              return we(this, void 0, void 0, function () {
                var i, o;
                return Ee(this, function (a) {
                  switch (a.label) {
                    case 0:
                      if (!this.apiKey)
                        throw Error("Experiment API key is empty");
                      this.debug("[Experiment] Fetch all: retry=".concat(r)),
                        r && this.stopRetries(),
                        (a.label = 1);
                    case 1:
                      return (
                        a.trys.push([1, 4, , 5]), [4, this.doFetch(e, t, n)]
                      );
                    case 2:
                      return (i = a.sent()), [4, this.storeVariants(i, n)];
                    case 3:
                      return a.sent(), [2, i];
                    case 4:
                      throw (
                        ((o = a.sent()),
                        r &&
                          this.shouldRetryFetch(o) &&
                          this.startRetries(e, n),
                        o)
                      );
                    case 5:
                      return [2];
                  }
                });
              });
            }),
            (e.prototype.doFetch = function (e, t, r) {
              return we(this, void 0, void 0, function () {
                var n, i, o, a, s, u, c;
                return Ee(this, function (l) {
                  switch (l.label) {
                    case 0:
                      return [4, this.addContextOrWait(e, 1e4)];
                    case 1:
                      return (
                        (e = l.sent()),
                        this.debug("[Experiment] Fetch variants for user: ", e),
                        [
                          4,
                          this.evaluationApi.getVariants(
                            e,
                            _e({ timeoutMillis: t }, r),
                          ),
                        ]
                      );
                    case 2:
                      (n = l.sent()), (i = {});
                      try {
                        for (
                          o = Se(Object.keys(n)), a = o.next();
                          !a.done;
                          a = o.next()
                        )
                          (s = a.value), (i[s] = $e(n[s]));
                      } catch (f) {
                        u = { error: f };
                      } finally {
                        try {
                          a && !a.done && (c = o.return) && c.call(o);
                        } finally {
                          if (u) throw u.error;
                        }
                      }
                      return (
                        this.debug("[Experiment] Received variants: ", i),
                        [2, i]
                      );
                  }
                });
              });
            }),
            (e.prototype.doFlags = function () {
              return we(this, void 0, void 0, function () {
                var e;
                return Ee(this, function (t) {
                  switch (t.label) {
                    case 0:
                      return [
                        4,
                        this.flagApi.getFlags({
                          libraryName: "experiment-js-client",
                          libraryVersion: xe,
                          timeoutMillis: this.config.fetchTimeoutMillis,
                        }),
                      ];
                    case 1:
                      (e = t.sent()), this.flags.clear(), this.flags.putAll(e);
                      try {
                        this.flags.store();
                      } catch (r) {}
                      return this.mergeInitialFlagsWithStorage(), [2];
                  }
                });
              });
            }),
            (e.prototype.storeVariants = function (e, t) {
              return we(this, void 0, void 0, function () {
                var r, n, i, o;
                return Ee(this, function (a) {
                  for (o in (0 ===
                    (r = t && t.flagKeys ? t.flagKeys : []).length &&
                    this.variants.clear(),
                  (n = function (t) {
                    (r = r.filter(function (e) {
                      return e !== t;
                    })),
                      i.variants.put(t, e[t]);
                  }),
                  (i = this),
                  e))
                    n(o);
                  for (o in r) this.variants.remove(o);
                  try {
                    this.variants.store();
                  } catch (s) {}
                  return this.debug("[Experiment] Stored variants: ", e), [2];
                });
              });
            }),
            (e.prototype.startRetries = function (e, t) {
              return we(this, void 0, void 0, function () {
                var r = this;
                return Ee(this, function (n) {
                  return (
                    this.debug("[Experiment] Retry fetch"),
                    (this.retriesBackoff = new Ue(8, 500, 1e4, 1.5)),
                    this.retriesBackoff.start(function () {
                      return we(r, void 0, void 0, function () {
                        return Ee(this, function (r) {
                          switch (r.label) {
                            case 0:
                              return [4, this.fetchInternal(e, 1e4, !1, t)];
                            case 1:
                              return r.sent(), [2];
                          }
                        });
                      });
                    }),
                    [2]
                  );
                });
              });
            }),
            (e.prototype.stopRetries = function () {
              this.retriesBackoff && this.retriesBackoff.cancel();
            }),
            (e.prototype.addContext = function (e) {
              var t,
                r,
                n =
                  null === (t = this.userProvider) || void 0 === t
                    ? void 0
                    : t.getUser(),
                i = _e(
                  _e(
                    {},
                    null === e || void 0 === e ? void 0 : e.user_properties,
                  ),
                  null === n || void 0 === n ? void 0 : n.user_properties,
                );
              return _e(
                _e(
                  _e(
                    { library: "experiment-js-client/".concat(xe) },
                    null === (r = this.userProvider) || void 0 === r
                      ? void 0
                      : r.getUser(),
                  ),
                  e,
                ),
                { user_properties: i },
              );
            }),
            (e.prototype.addContextOrWait = function (e, t) {
              return we(this, void 0, void 0, function () {
                return Ee(this, function (r) {
                  switch (r.label) {
                    case 0:
                      return this.userProvider instanceof Ne &&
                        this.userProvider.userProvider instanceof Me
                        ? [4, this.userProvider.userProvider.identityReady(t)]
                        : [3, 2];
                    case 1:
                      r.sent(), (r.label = 2);
                    case 2:
                      return [2, this.addContext(e)];
                  }
                });
              });
            }),
            (e.prototype.sourceVariants = function () {
              return this.config.source == ke.LocalStorage
                ? this.variants.getAll()
                : this.config.source == ke.InitialVariants
                  ? this.config.initialVariants
                  : void 0;
            }),
            (e.prototype.secondaryVariants = function () {
              return this.config.source == ke.LocalStorage
                ? this.config.initialVariants
                : this.config.source == ke.InitialVariants
                  ? this.variants.getAll()
                  : void 0;
            }),
            (e.prototype.exposureInternal = function (e, t) {
              var r, n, i, o, a, s;
              this.legacyExposureInternal(e, t.variant, t.source);
              var u = { flag_key: e },
                c = Ae(t.source);
              if (!c || t.hasDefaultVariant) {
                (null === (r = t.variant) || void 0 === r
                  ? void 0
                  : r.expKey) &&
                  (u.experiment_key =
                    null === (n = t.variant) || void 0 === n
                      ? void 0
                      : n.expKey);
                var l =
                  null === (i = t.variant) || void 0 === i
                    ? void 0
                    : i.metadata;
                c ||
                  (null === l || void 0 === l ? void 0 : l.default) ||
                  ((null === (o = t.variant) || void 0 === o ? void 0 : o.key)
                    ? (u.variant = t.variant.key)
                    : (null === (a = t.variant) || void 0 === a
                        ? void 0
                        : a.value) && (u.variant = t.variant.value)),
                  l && (u.metadata = l),
                  null === (s = this.exposureTrackingProvider) ||
                    void 0 === s ||
                    s.track(u);
              }
            }),
            (e.prototype.legacyExposureInternal = function (e, t, r) {
              var n, i, o, a, s;
              if (this.analyticsProvider) {
                var u = (function (e, t, r, n) {
                  var i,
                    o = null === r || void 0 === r ? void 0 : r.value,
                    a = "[Experiment] ".concat(t);
                  return {
                    name: "[Experiment] Exposure",
                    user: e,
                    key: t,
                    variant: r,
                    userProperty: a,
                    properties: { key: t, variant: o, source: n },
                    userProperties: ((i = {}), (i[a] = o), i),
                  };
                })(this.addContext(this.getUser()), e, t, r);
                Ae(r) || !(null === t || void 0 === t ? void 0 : t.value)
                  ? null ===
                      (i =
                        null === (n = this.analyticsProvider) || void 0 === n
                          ? void 0
                          : n.unsetUserProperty) ||
                    void 0 === i ||
                    i.call(n, u)
                  : (null === t || void 0 === t ? void 0 : t.value) &&
                    (null ===
                      (a =
                        null === (o = this.analyticsProvider) || void 0 === o
                          ? void 0
                          : o.setUserProperty) ||
                      void 0 === a ||
                      a.call(o, u),
                    null === (s = this.analyticsProvider) ||
                      void 0 === s ||
                      s.track(u));
              }
            }),
            (e.prototype.debug = function (e) {
              for (var t = [], r = 1; r < arguments.length; r++)
                t[r - 1] = arguments[r];
              this.config.debug &&
                console.debug.apply(
                  console,
                  (function (e, t, r) {
                    if (r || 2 === arguments.length)
                      for (var n, i = 0, o = t.length; i < o; i++)
                        (!n && i in t) ||
                          (n || (n = Array.prototype.slice.call(t, 0, i)),
                          (n[i] = t[i]));
                    return e.concat(n || Array.prototype.slice.call(t));
                  })(
                    [e],
                    (function (e, t) {
                      var r =
                        "function" === typeof Symbol && e[Symbol.iterator];
                      if (!r) return e;
                      var n,
                        i,
                        o = r.call(e),
                        a = [];
                      try {
                        for (
                          ;
                          (void 0 === t || t-- > 0) && !(n = o.next()).done;

                        )
                          a.push(n.value);
                      } catch (s) {
                        i = { error: s };
                      } finally {
                        try {
                          n && !n.done && (r = o.return) && r.call(o);
                        } finally {
                          if (i) throw i.error;
                        }
                      }
                      return a;
                    })(t),
                    !1,
                  ),
                );
            }),
            (e.prototype.shouldRetryFetch = function (e) {
              return (
                !(e instanceof pe) ||
                e.statusCode < 400 ||
                e.statusCode >= 500 ||
                429 === e.statusCode
              );
            }),
            e
          );
        })(),
        qe = {},
        We = {
          initialize: function (e, t) {
            var r =
                (null === t || void 0 === t ? void 0 : t.instanceName) ||
                Ie.instanceName,
              n = "".concat(r, ".").concat(e),
              i = l.getInstance(r);
            return (
              qe[n] ||
                ((t = _e(_e({}, t), {
                  userProvider: new Ne(
                    i.applicationContextProvider,
                    null === t || void 0 === t ? void 0 : t.userProvider,
                  ),
                })),
                (qe[n] = new Ke(e, t))),
              qe[n]
            );
          },
          initializeWithAmplitudeAnalytics: function (e, t) {
            var r =
                (null === t || void 0 === t ? void 0 : t.instanceName) ||
                Ie.instanceName,
              n = "".concat(r, ".").concat(e),
              i = l.getInstance(r);
            return (
              qe[n] ||
                ((t = _e(
                  {
                    userProvider: new Ne(
                      i.applicationContextProvider,
                      new Me(i.identityStore),
                    ),
                    exposureTrackingProvider: new Re(i.eventBridge),
                  },
                  t,
                )),
                (qe[n] = new Ke(e, t)),
                t.automaticFetchOnAmplitudeIdentityChange &&
                  i.identityStore.addIdentityListener(function () {
                    qe[n].fetch();
                  })),
              qe[n]
            );
          },
        };
      !(function () {
        function e() {}
        (e.prototype.getUser = function () {
          return {};
        }),
          (e.prototype.start = function (e) {
            return we(this, void 0, void 0, function () {
              return Ee(this, function (e) {
                return [2];
              });
            });
          }),
          (e.prototype.stop = function () {}),
          (e.prototype.setUser = function (e) {}),
          (e.prototype.fetch = function (e) {
            return we(this, void 0, void 0, function () {
              return Ee(this, function (e) {
                return [2, this];
              });
            });
          }),
          (e.prototype.getUserProvider = function () {
            return null;
          }),
          (e.prototype.setUserProvider = function (e) {
            return this;
          }),
          (e.prototype.variant = function (e, t) {
            return Ie.fallbackVariant;
          }),
          (e.prototype.all = function () {
            return {};
          }),
          (e.prototype.clear = function () {}),
          (e.prototype.exposure = function (e) {});
      })();
    },
    90434: function (e, t, r) {
      var n;
      !(function (i, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          u = "object",
          c = "string",
          l = "model",
          f = "name",
          d = "type",
          h = "vendor",
          p = "version",
          m = "architecture",
          v = "console",
          g = "mobile",
          y = "tablet",
          b = "smarttv",
          _ = "wearable",
          w = "embedded",
          E = "Amazon",
          S = "Apple",
          k = "ASUS",
          C = "BlackBerry",
          T = "Browser",
          P = "Chrome",
          O = "Firefox",
          A = "Google",
          I = "Huawei",
          x = "LG",
          M = "Microsoft",
          R = "Motorola",
          N = "Opera",
          D = "Samsung",
          L = "Sharp",
          j = "Sony",
          B = "Xiaomi",
          H = "Zebra",
          F = "Facebook",
          U = function (e) {
            for (var t = {}, r = 0; r < e.length; r++)
              t[e[r].toUpperCase()] = e[r];
            return t;
          },
          G = function (e, t) {
            return typeof e === c && -1 !== $(t).indexOf($(e));
          },
          $ = function (e) {
            return e.toLowerCase();
          },
          V = function (e, t) {
            if (typeof e === c)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof t === s ? e : e.substring(0, 350)
              );
          },
          z = function (e, t) {
            for (var r, n, i, s, c, l, f = 0; f < t.length && !c; ) {
              var d = t[f],
                h = t[f + 1];
              for (r = n = 0; r < d.length && !c; )
                if ((c = d[r++].exec(e)))
                  for (i = 0; i < h.length; i++)
                    (l = c[++n]),
                      typeof (s = h[i]) === u && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == a
                            ? (this[s[0]] = s[1].call(this, l))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                            ? typeof s[1] !== a || (s[1].exec && s[1].test)
                              ? (this[s[0]] = l ? l.replace(s[1], s[2]) : o)
                              : (this[s[0]] = l ? s[1].call(this, l, s[2]) : o)
                            : 4 === s.length &&
                              (this[s[0]] = l
                                ? s[3].call(this, l.replace(s[1], s[2]))
                                : o)
                        : (this[s] = l || o);
              f += 2;
            }
          },
          K = function (e, t) {
            for (var r in t)
              if (typeof t[r] === u && t[r].length > 0) {
                for (var n = 0; n < t[r].length; n++)
                  if (G(t[r][n], e)) return "?" === r ? o : r;
              } else if (G(t[r], e)) return "?" === r ? o : r;
            return e;
          },
          q = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          W = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [p, [f, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [p, [f, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [f, p],
              [/opios[\/ ]+([\w\.]+)/i],
              [p, [f, N + " Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [p, [f, N]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [f, p],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [p, [f, "UC" + T]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
              [p, [f, "WeChat(Win) Desktop"]],
              [/micromessenger\/([\w\.]+)/i],
              [p, [f, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [p, [f, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [p, [f, "IE"]],
              [/yabrowser\/([\w\.]+)/i],
              [p, [f, "Yandex"]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[f, /(.+)/, "$1 Secure " + T], p],
              [/\bfocus\/([\w\.]+)/i],
              [p, [f, O + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [p, [f, N + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [p, [f, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [p, [f, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [p, [f, N + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [p, [f, "MIUI " + T]],
              [/fxios\/([-\w\.]+)/i],
              [p, [f, O]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[f, "360 " + T]],
              [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
              [[f, /(.+)/, "$1 " + T], p],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[f, /_/g, " "], p],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [f, p],
              [
                /(metasr)[\/ ]?([\w\.]+)/i,
                /(lbbrowser)/i,
                /\[(linkedin)app\]/i,
              ],
              [f],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[f, F], p],
              [
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i,
              ],
              [f, p],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [p, [f, "GSA"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [p, [f, P + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[f, P + " WebView"], p],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [p, [f, "Android " + T]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [f, p],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [p, [f, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [p, f],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                f,
                [
                  p,
                  K,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [f, p],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[f, "Netscape"], p],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [p, [f, O + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [f, p],
              [/(cobalt)\/([\w\.]+)/i],
              [f, [p, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[m, "amd64"]],
              [/(ia32(?=;))/i],
              [[m, $]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[m, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[m, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[m, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[m, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[m, /ower/, "", $]],
              [/(sun4\w)[;\)]/i],
              [[m, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[m, $]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [l, [h, D], [d, y]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [l, [h, D], [d, g]],
              [/((ipod|iphone)\d+,\d+)/i],
              [l, [h, S], [d, g]],
              [/(ipad\d+,\d+)/i],
              [l, [h, S], [d, y]],
              [/\((ip(?:hone|od)[\w ]*);/i],
              [l, [h, S], [d, g]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [l, [h, S], [d, y]],
              [/(macintosh);/i],
              [l, [h, S]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [l, [h, I], [d, y]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [l, [h, I], [d, g]],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [l, /_/g, " "],
                [h, B],
                [d, g],
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [l, /_/g, " "],
                [h, B],
                [d, y],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [l, [h, "OPPO"], [d, g]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [l, [h, "Vivo"], [d, g]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [l, [h, "Realme"], [d, g]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [l, [h, R], [d, g]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [l, [h, R], [d, y]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [l, [h, x], [d, y]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [l, [h, x], [d, g]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [l, [h, "Lenovo"], [d, y]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [l, /_/g, " "],
                [h, "Nokia"],
                [d, g],
              ],
              [/(pixel c)\b/i],
              [l, [h, A], [d, y]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [l, [h, A], [d, g]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [l, [h, j], [d, g]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [l, "Xperia Tablet"],
                [h, j],
                [d, y],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [l, [h, "OnePlus"], [d, g]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [l, [h, E], [d, y]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [l, /(.+)/g, "Fire Phone $1"],
                [h, E],
                [d, g],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [l, h, [d, y]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [l, [h, C], [d, g]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [l, [h, k], [d, y]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [l, [h, k], [d, g]],
              [/(nexus 9)/i],
              [l, [h, "HTC"], [d, y]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [h, [l, /_/g, " "], [d, g]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [l, [h, "Acer"], [d, y]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [l, [h, "Meizu"], [d, g]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [l, [h, L], [d, g]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [h, l, [d, g]],
              [
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [h, l, [d, y]],
              [/(surface duo)/i],
              [l, [h, M], [d, y]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [l, [h, "Fairphone"], [d, g]],
              [/(u304aa)/i],
              [l, [h, "AT&T"], [d, g]],
              [/\bsie-(\w*)/i],
              [l, [h, "Siemens"], [d, g]],
              [/\b(rct\w+) b/i],
              [l, [h, "RCA"], [d, y]],
              [/\b(venue[\d ]{2,7}) b/i],
              [l, [h, "Dell"], [d, y]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [l, [h, "Verizon"], [d, y]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [l, [h, "Barnes & Noble"], [d, y]],
              [/\b(tm\d{3}\w+) b/i],
              [l, [h, "NuVision"], [d, y]],
              [/\b(k88) b/i],
              [l, [h, "ZTE"], [d, y]],
              [/\b(nx\d{3}j) b/i],
              [l, [h, "ZTE"], [d, g]],
              [/\b(gen\d{3}) b.+49h/i],
              [l, [h, "Swiss"], [d, g]],
              [/\b(zur\d{3}) b/i],
              [l, [h, "Swiss"], [d, y]],
              [/\b((zeki)?tb.*\b) b/i],
              [l, [h, "Zeki"], [d, y]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[h, "Dragon Touch"], l, [d, y]],
              [/\b(ns-?\w{0,9}) b/i],
              [l, [h, "Insignia"], [d, y]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [l, [h, "NextBook"], [d, y]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[h, "Voice"], l, [d, g]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[h, "LvTel"], l, [d, g]],
              [/\b(ph-1) /i],
              [l, [h, "Essential"], [d, g]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [l, [h, "Envizen"], [d, y]],
              [/\b(trio[-\w\. ]+) b/i],
              [l, [h, "MachSpeed"], [d, y]],
              [/\btu_(1491) b/i],
              [l, [h, "Rotor"], [d, y]],
              [/(shield[\w ]+) b/i],
              [l, [h, "Nvidia"], [d, y]],
              [/(sprint) (\w+)/i],
              [h, l, [d, g]],
              [/(kin\.[onetw]{3})/i],
              [
                [l, /\./g, " "],
                [h, M],
                [d, g],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [l, [h, H], [d, y]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [l, [h, H], [d, g]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [h, l, [d, v]],
              [/droid.+; (shield) bui/i],
              [l, [h, "Nvidia"], [d, v]],
              [/(playstation [345portablevi]+)/i],
              [l, [h, j], [d, v]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [l, [h, M], [d, v]],
              [/smart-tv.+(samsung)/i],
              [h, [d, b]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [l, /^/, "SmartTV"],
                [h, D],
                [d, b],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [h, x],
                [d, b],
              ],
              [/(apple) ?tv/i],
              [h, [l, S + " TV"], [d, b]],
              [/crkey/i],
              [
                [l, P + "cast"],
                [h, A],
                [d, b],
              ],
              [/droid.+aft(\w)( bui|\))/i],
              [l, [h, E], [d, b]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [l, [h, L], [d, b]],
              [/(bravia[\w ]+)( bui|\))/i],
              [l, [h, j], [d, b]],
              [/(mitv-\w{5}) bui/i],
              [l, [h, B], [d, b]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i,
              ],
              [
                [h, V],
                [l, V],
                [d, b],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[d, b]],
              [/((pebble))app/i],
              [h, l, [d, _]],
              [/droid.+; (glass) \d/i],
              [l, [h, A], [d, _]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [l, [h, H], [d, _]],
              [/(quest( 2)?)/i],
              [l, [h, F], [d, _]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [h, [d, w]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [l, [d, g]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [l, [d, y]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[d, y]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[d, g]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [l, [h, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [p, [f, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [p, [f, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
              ],
              [f, p],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [p, f],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [f, p],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              ],
              [f, [p, K, q]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [f, "Windows"],
                [p, K, q],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [p, /_/g, "."],
                [f, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [f, "Mac OS"],
                [p, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [p, f],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [f, p],
              [/\(bb(10);/i],
              [p, [f, C]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [p, [f, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [p, [f, O + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [p, [f, "webOS"]],
              [/crkey\/([\d\.]+)/i],
              [p, [f, P + "cast"]],
              [/(cros) [\w]+ ([\w\.]+\w)/i],
              [[f, "Chromium OS"], p],
              [
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [f, p],
              [/(sunos) ?([\w\.\d]*)/i],
              [[f, "Solaris"], p],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [f, p],
            ],
          },
          X = function (e, t) {
            if ((typeof e === u && ((t = e), (e = o)), !(this instanceof X)))
              return new X(e, t).getResult();
            var r =
                e ||
                (typeof i !== s && i.navigator && i.navigator.userAgent
                  ? i.navigator.userAgent
                  : ""),
              n = t
                ? (function (e, t) {
                    var r = {};
                    for (var n in e)
                      t[n] && t[n].length % 2 === 0
                        ? (r[n] = t[n].concat(e[n]))
                        : (r[n] = e[n]);
                    return r;
                  })(W, t)
                : W;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[f] = o),
                  (t[p] = o),
                  z.call(t, r, n.browser),
                  (t.major =
                    typeof (e = t.version) === c
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : o),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[m] = o), z.call(e, r, n.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[h] = o), (e[l] = o), (e[d] = o), z.call(e, r, n.device), e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[f] = o), (e[p] = o), z.call(e, r, n.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (e[f] = o), (e[p] = o), z.call(e, r, n.os), e;
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return r;
              }),
              (this.setUA = function (e) {
                return (
                  (r = typeof e === c && e.length > 350 ? V(e, 350) : e), this
                );
              }),
              this.setUA(r),
              this
            );
          };
        (X.VERSION = "0.7.33"),
          (X.BROWSER = U([f, p, "major"])),
          (X.CPU = U([m])),
          (X.DEVICE = U([l, h, d, v, g, b, y, _, w])),
          (X.ENGINE = X.OS = U([f, p])),
          typeof t !== s
            ? (e.exports && (t = e.exports = X), (t.UAParser = X))
            : r.amdO
              ? (n = function () {
                  return X;
                }.call(t, r, t, e)) === o || (e.exports = n)
              : typeof i !== s && (i.UAParser = X);
        var Y = typeof i !== s && (i.jQuery || i.Zepto);
        if (Y && !Y.ua) {
          var Z = new X();
          (Y.ua = Z.getResult()),
            (Y.ua.get = function () {
              return Z.getUA();
            }),
            (Y.ua.set = function (e) {
              Z.setUA(e);
              var t = Z.getResult();
              for (var r in t) Y.ua[r] = t[r];
            });
        }
      })("object" === typeof window ? window : this);
    },
    65521: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (i &&
                  !("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          },
        a =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useCookie = t.useSetCookie = t.CookieProvider = void 0);
      const s = a(r(74085)),
        u = o(r(2265)),
        c = r(51485),
        l = r(18827),
        f = r(90078),
        d = o(r(7899)),
        h = a(r(2820)),
        p = r(5105),
        m = a(r(16599)),
        v = a(r(22010)),
        g = a(r(83383)),
        y = a(r(4042)),
        b = a(r(43017)),
        _ = (0, u.createContext)([{}]);
      t.CookieProvider = ({ children: e }) => {
        const {
            config: t,
            region: r,
            shadowMode: n,
            log: i,
            onPreferenceChange: o,
          } = (0, l.useTrackingManager)(),
          [a, h] = (0, u.useState)(() => (0, d.default)());
        let g, y;
        const w = (0, u.useCallback)(
          (e) => {
            e.forEach((e) => {
              n ||
                (s.default.remove(e, {
                  domain: (0, p.getDomainWithoutSubdomain)(),
                  path: "/",
                }),
                s.default.remove(e, {
                  domain: (0, p.getHostname)(),
                  path: "/",
                })),
                i("Cookie does not have consent and will be removed", {
                  cookie: e,
                });
            });
          },
          [n, i],
        );
        return (
          (0, u.useEffect)(() => {
            if ("undefined" !== typeof window) {
              const e = () => {
                const e = (0, d.default)();
                if (!(0, d.areRecordsEqual)(a, e)) {
                  h(e), (g = E(e, r, t)), (y = k(e)), (0, b.default)(g, y);
                  const n = [];
                  Object.keys(e).forEach((e) => {
                    const r = (0, m.default)(e, t);
                    c.REQUIRED_COOKIE_MANAGER_COOKIES.includes(e) ||
                      (r &&
                        ((0, v.default)(e, t, g) ||
                          r.type !== f.TrackerType.COOKIE)) ||
                      n.push(e);
                  }),
                    w(n);
                }
              };
              e();
              const n = setInterval(e, 500);
              return () => {
                clearInterval(n);
              };
            }
          }, []),
          (0, u.useEffect)(() => {
            o && o(g);
          }, []),
          u.default.createElement(_.Provider, { value: a }, e)
        );
      };
      t.useSetCookie = () => {
        const e = (0, u.useContext)(_),
          {
            config: t,
            region: r,
            log: n,
            shadowMode: i,
            onError: o,
          } = (0, l.useTrackingManager)(),
          a = E(e, r, t);
        return (0, u.useCallback)(
          (e, r, s) => {
            w({
              cookieName: e,
              trackingPreference: a,
              config: t,
              log: n,
              shadowMode: i,
              onError: o,
            })(r, s);
          },
          [a, t, n, i, o],
        );
      };
      const w =
          ({
            cookieName: e,
            trackingPreference: t,
            config: r,
            shadowMode: n,
            log: i,
            onError: o,
          }) =>
          (a, u) => {
            var l;
            if (void 0 === a || null === a) return void s.default.remove(e, u);
            const f = (0, v.default)(e, r, t);
            if (f || n) {
              const t = JSON.stringify(a),
                n =
                  null !== (l = null === u || void 0 === u ? void 0 : u.size) &&
                  void 0 !== l
                    ? l
                    : c.MAX_COOKIE_SIZE;
              if ((0, g.default)(encodeURIComponent(t) + e, n))
                o(new Error(`${e} value exceeds ${n}KB`));
              else {
                let n = u ? Object.assign({}, u) : void 0;
                (null === n || void 0 === n ? void 0 : n.size) && delete n.size;
                const i = (0, y.default)(e, r);
                i &&
                  (n = n
                    ? Object.assign(Object.assign({}, n), { expires: i })
                    : { expires: i }),
                  s.default.set(e, t, n);
              }
            }
            f ||
              i("Cookie does not have consent and will not be set", {
                cookie: e,
              });
          },
        E = (e, t, r) =>
          (t === f.Region.EU
            ? e[c.EU_CONSENT_PREFERENCES_COOKIE]
            : e[c.DEFAULT_CONSENT_PREFERENCES_COOKIE]) || (0, h.default)(t, r),
        S = { value: "true" },
        k = (e) => e[c.ADVERTISING_SHARING_ALLOWED] || S;
      t.useCookie = (e) => {
        const t = (0, u.useContext)(_),
          {
            config: r,
            region: n,
            log: i,
            shadowMode: o,
            onError: a,
          } = (0, l.useTrackingManager)(),
          s = E(t, n, r),
          c = w({
            cookieName: e,
            trackingPreference: s,
            config: r,
            log: i,
            shadowMode: o,
            onError: a,
          });
        return [(0, u.useContext)(_)[e], c];
      };
    },
    18827: function (e, t, r) {
      "use strict";
      var n =
          (this && this.__createBinding) ||
          (Object.create
            ? function (e, t, r, n) {
                void 0 === n && (n = r);
                var i = Object.getOwnPropertyDescriptor(t, r);
                (i &&
                  !("get" in i
                    ? !t.__esModule
                    : i.writable || i.configurable)) ||
                  (i = {
                    enumerable: !0,
                    get: function () {
                      return t[r];
                    },
                  }),
                  Object.defineProperty(e, n, i);
              }
            : function (e, t, r, n) {
                void 0 === n && (n = r), (e[n] = t[r]);
              }),
        i =
          (this && this.__setModuleDefault) ||
          (Object.create
            ? function (e, t) {
                Object.defineProperty(e, "default", {
                  enumerable: !0,
                  value: t,
                });
              }
            : function (e, t) {
                e.default = t;
              }),
        o =
          (this && this.__importStar) ||
          function (e) {
            if (e && e.__esModule) return e;
            var t = {};
            if (null != e)
              for (var r in e)
                "default" !== r &&
                  Object.prototype.hasOwnProperty.call(e, r) &&
                  n(t, e, r);
            return i(t, e), t;
          },
        a =
          (this && this.__rest) ||
          function (e, t) {
            var r = {};
            for (var n in e)
              Object.prototype.hasOwnProperty.call(e, n) &&
                t.indexOf(n) < 0 &&
                (r[n] = e[n]);
            if (
              null != e &&
              "function" === typeof Object.getOwnPropertySymbols
            ) {
              var i = 0;
              for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
                t.indexOf(n[i]) < 0 &&
                  Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
                  (r[n[i]] = e[n[i]]);
            }
            return r;
          };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.Provider = t.useTrackingManager = void 0);
      const s = o(r(2265)),
        u = r(65521),
        c = (0, s.createContext)(null);
      (t.useTrackingManager = () => {
        const e = (0, s.useContext)(c);
        if (!e) throw new Error("Cookie Manager Not Provided");
        return e;
      }),
        (t.Provider = function (e) {
          var { children: t } = e,
            r = a(e, ["children"]);
          return s.default.createElement(
            c.Provider,
            { value: r },
            s.default.createElement(u.CookieProvider, null, t),
          );
        });
    },
    51485: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TRACKER_CATEGORIES =
          t.PREFERENCE_EXPIRATION_YEAR =
          t.REQUIRED_COOKIE_MANAGER_COOKIES =
          t.KB =
          t.MAX_COOKIE_SIZE =
          t.GEOLOCATION_RULES =
          t.ONE_DAY_IN_MILLISECONDS =
          t.IS_MOBILE_APP =
          t.ADVERTISING_SHARING_ALLOWED =
          t.DEFAULT_CONSENT_PREFERENCES_COOKIE =
          t.EU_CONSENT_PREFERENCES_COOKIE =
            void 0);
      const n = r(90078);
      (t.EU_CONSENT_PREFERENCES_COOKIE = "cm_eu_preferences"),
        (t.DEFAULT_CONSENT_PREFERENCES_COOKIE = "cm_default_preferences"),
        (t.ADVERTISING_SHARING_ALLOWED = "advertising_sharing_allowed"),
        (t.IS_MOBILE_APP = "is_mobile_app"),
        (t.ONE_DAY_IN_MILLISECONDS = 864e5),
        (t.GEOLOCATION_RULES = [
          { region: n.Region.DEFAULT, framework: n.Framework.OPT_OUT },
          { region: n.Region.EU, framework: n.Framework.OPT_IN },
        ]),
        (t.MAX_COOKIE_SIZE = 4),
        (t.KB = 1e3),
        (t.REQUIRED_COOKIE_MANAGER_COOKIES = [
          t.EU_CONSENT_PREFERENCES_COOKIE,
          t.DEFAULT_CONSENT_PREFERENCES_COOKIE,
          t.ADVERTISING_SHARING_ALLOWED,
        ]),
        (t.PREFERENCE_EXPIRATION_YEAR = 1),
        (t.TRACKER_CATEGORIES = [
          n.TrackingCategory.NECESSARY,
          n.TrackingCategory.FUNCTIONAL,
          n.TrackingCategory.PERFORMANCE,
          n.TrackingCategory.TARGETING,
        ]);
    },
    64276: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(75571),
        o = r(18827),
        a = n(r(22010));
      t.default = (e) => {
        const t = (0, i.useTrackingPreference)(),
          { config: r } = (0, o.useTrackingManager)();
        return (0, a.default)(e, r, t);
      };
    },
    12748: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(18827);
      t.default = () => {
        const { config: e } = (0, n.useTrackingManager)();
        return e.categories
          .filter((e) => e.required)
          .reduce((e, t) => [...e, t.id], []);
      };
    },
    82043: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.useSavedTrackingPreference =
          t.useSavedTrackingPreferenceFromMobileApp =
            void 0);
      const n = r(2265),
        i = r(51485),
        o = r(65521),
        a = r(18827),
        s = r(90078),
        u = r(17075);
      t.useSavedTrackingPreferenceFromMobileApp = () => {
        const { region: e } = (0, a.useTrackingManager)(),
          [t] = (0, o.useCookie)(i.IS_MOBILE_APP),
          r = (0, n.useMemo)(() => (0, u.getIsMobileAppFromQueryParams)(), []),
          c = t || r;
        return (0, n.useMemo)(() => {
          if (c) return { region: e, consent: [s.TrackingCategory.NECESSARY] };
        }, [c, e]);
      };
      t.useSavedTrackingPreference = () => {
        const { region: e, onError: t } = (0, a.useTrackingManager)(),
          [r] = (0, o.useCookie)(i.EU_CONSENT_PREFERENCES_COOKIE),
          [n] = (0, o.useCookie)(i.DEFAULT_CONSENT_PREFERENCES_COOKIE),
          u = e === s.Region.EU ? r : n;
        if (u) {
          if (u.region && u.consent) return u;
          t(new Error("Malformed preferences"));
        }
      };
    },
    16248: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(2265),
        o = r(65521),
        a = r(18827),
        s = n(r(62686)),
        u = n(r(12748));
      t.default = () => {
        const {
            region: e,
            onPreferenceChange: t,
            onError: r,
          } = (0, a.useTrackingManager)(),
          n = (0, o.useSetCookie)(),
          c = (0, u.default)();
        return (0, i.useCallback)(
          (i) => {
            const o = i;
            c.forEach((e) => {
              i.consent.includes(e) ||
                (r(
                  new Error(`Trying to remove category ${e} that is required`),
                ),
                (o.consent = [...i.consent, e]));
            }),
              (0, s.default)(n, o, e, t);
          },
          [r, t, e, c, n],
        );
      };
    },
    75995: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(18827),
        o = n(r(2820)),
        a = r(82043);
      t.default = () => {
        const e = (0, a.useSavedTrackingPreference)(),
          { region: t, config: r } = (0, i.useTrackingManager)();
        return e || (0, o.default)(t, r);
      };
    },
    75571: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.persistMobileAppPreferences =
          t.getIsMobileAppFromQueryParams =
          t.isOptOut =
          t.getDomainWithoutSubdomain =
          t.getDefaultTrackingPreference =
          t.areCookiesEnabled =
          t.TrackingCategory =
          t.TrackerType =
          t.Region =
          t.Framework =
          t.useTrackingManager =
          t.Provider =
          t.useTrackingPreference =
          t.useSetTrackingPreference =
          t.useSavedTrackingPreferenceFromMobileApp =
          t.useSavedTrackingPreference =
          t.useRequiredCategories =
          t.useHasConsent =
          t.useCookie =
          t.TRACKER_CATEGORIES =
            void 0);
      var i = r(51485);
      Object.defineProperty(t, "TRACKER_CATEGORIES", {
        enumerable: !0,
        get: function () {
          return i.TRACKER_CATEGORIES;
        },
      });
      var o = r(65521);
      Object.defineProperty(t, "useCookie", {
        enumerable: !0,
        get: function () {
          return o.useCookie;
        },
      });
      var a = r(64276);
      Object.defineProperty(t, "useHasConsent", {
        enumerable: !0,
        get: function () {
          return n(a).default;
        },
      });
      var s = r(12748);
      Object.defineProperty(t, "useRequiredCategories", {
        enumerable: !0,
        get: function () {
          return n(s).default;
        },
      });
      var u = r(82043);
      Object.defineProperty(t, "useSavedTrackingPreference", {
        enumerable: !0,
        get: function () {
          return u.useSavedTrackingPreference;
        },
      }),
        Object.defineProperty(t, "useSavedTrackingPreferenceFromMobileApp", {
          enumerable: !0,
          get: function () {
            return u.useSavedTrackingPreferenceFromMobileApp;
          },
        });
      var c = r(16248);
      Object.defineProperty(t, "useSetTrackingPreference", {
        enumerable: !0,
        get: function () {
          return n(c).default;
        },
      });
      var l = r(75995);
      Object.defineProperty(t, "useTrackingPreference", {
        enumerable: !0,
        get: function () {
          return n(l).default;
        },
      });
      var f = r(18827);
      Object.defineProperty(t, "Provider", {
        enumerable: !0,
        get: function () {
          return f.Provider;
        },
      });
      var d = r(18827);
      Object.defineProperty(t, "useTrackingManager", {
        enumerable: !0,
        get: function () {
          return d.useTrackingManager;
        },
      });
      var h = r(90078);
      Object.defineProperty(t, "Framework", {
        enumerable: !0,
        get: function () {
          return h.Framework;
        },
      }),
        Object.defineProperty(t, "Region", {
          enumerable: !0,
          get: function () {
            return h.Region;
          },
        }),
        Object.defineProperty(t, "TrackerType", {
          enumerable: !0,
          get: function () {
            return h.TrackerType;
          },
        }),
        Object.defineProperty(t, "TrackingCategory", {
          enumerable: !0,
          get: function () {
            return h.TrackingCategory;
          },
        });
      var p = r(42887);
      Object.defineProperty(t, "areCookiesEnabled", {
        enumerable: !0,
        get: function () {
          return n(p).default;
        },
      });
      var m = r(2820);
      Object.defineProperty(t, "getDefaultTrackingPreference", {
        enumerable: !0,
        get: function () {
          return n(m).default;
        },
      });
      var v = r(5105);
      Object.defineProperty(t, "getDomainWithoutSubdomain", {
        enumerable: !0,
        get: function () {
          return v.getDomainWithoutSubdomain;
        },
      });
      var g = r(19062);
      Object.defineProperty(t, "isOptOut", {
        enumerable: !0,
        get: function () {
          return n(g).default;
        },
      });
      var y = r(17075);
      Object.defineProperty(t, "getIsMobileAppFromQueryParams", {
        enumerable: !0,
        get: function () {
          return y.getIsMobileAppFromQueryParams;
        },
      }),
        Object.defineProperty(t, "persistMobileAppPreferences", {
          enumerable: !0,
          get: function () {
            return y.persistMobileAppPreferences;
          },
        });
    },
    90078: function (e, t) {
      "use strict";
      var r, n, i, o;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.TrackerType = t.Framework = t.TrackingCategory = t.Region = void 0),
        (function (e) {
          (e.EU = "EU"), (e.DEFAULT = "DEFAULT");
        })(r || (t.Region = r = {})),
        (function (e) {
          (e.FUNCTIONAL = "functional"),
            (e.NECESSARY = "necessary"),
            (e.TARGETING = "targeting"),
            (e.PERFORMANCE = "performance"),
            (e.DELETE_IF_SEEN = "delete-if-seen");
        })(n || (t.TrackingCategory = n = {})),
        (function (e) {
          (e.OPT_OUT = "optOut"), (e.OPT_IN = "optIn");
        })(i || (t.Framework = i = {})),
        (function (e) {
          (e.COOKIE = "cookie"),
            (e.QUERY = "query"),
            (e.PIXEL = "pixel"),
            (e.BEACON = "beacon");
        })(o || (t.TrackerType = o = {}));
    },
    42887: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(r(74085)),
        o = "test_cookie";
      t.default = () => {
        i.default.set(o, "test");
        const e = !!i.default.get(o);
        return i.default.remove(o), e;
      };
    },
    7899: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.areRecordsEqual = t.deserializeCookies = void 0);
      const i = n(r(74085));
      function o(e, t) {
        if (typeof e !== typeof t) return !1;
        if ("object" === typeof e && null !== e) {
          const r = Object.keys(e),
            n = Object.keys(t);
          if (r.length !== n.length) return !1;
          for (const i of r) if (!o(e[i], t[i])) return !1;
        } else if (e !== t) return !1;
        return !0;
      }
      (t.deserializeCookies = (e) => {
        const t = {};
        return (
          Object.keys(e).forEach((r) => {
            try {
              t[r] = JSON.parse(e[r]);
            } catch (n) {
              t[r] = e[r];
            }
          }),
          t
        );
      }),
        (t.default = function (e) {
          return "undefined" === typeof window && e
            ? (0, t.deserializeCookies)(e)
            : (0, t.deserializeCookies)(i.default.get() || {});
        }),
        (t.areRecordsEqual = function (e, t) {
          const r = Object.keys(e),
            n = Object.keys(t);
          if (r.length !== n.length) return !1;
          for (const i of r) if (!o(e[i], t[i])) return !1;
          return !0;
        });
    },
    2820: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(90078),
        o = n(r(19062));
      t.default = (e, t) => {
        if (!(0, o.default)(e)) {
          return {
            region: e,
            consent: t.categories
              .map((e) => {
                if (e.required) return e.id;
              })
              .filter((e) => !!e),
          };
        }
        return {
          region: e,
          consent: t.categories
            .map((e) => e.id)
            .filter((e) => e !== i.TrackingCategory.DELETE_IF_SEEN),
        };
      };
    },
    5105: function (e, t) {
      "use strict";
      function r() {
        if ("undefined" !== typeof window) return window.location.hostname;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getDomainWithoutSubdomain = t.getHostname = void 0),
        (t.getHostname = r),
        (t.getDomainWithoutSubdomain = function () {
          const e = r();
          if (!e) return;
          if ("localhost" === e) return e;
          const [, ...t] = e.split(".");
          return `.${t.join(".")}`;
        });
    },
    70267: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(r(3290));
      t.default = (e, t) =>
        t.categories.find((t) => t.trackers.find((t) => (0, i.default)(t, e)));
    },
    16599: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = n(r(70267)),
        o = n(r(3290));
      t.default = (e, t) => {
        const r = (0, i.default)(e, t);
        return null === r || void 0 === r
          ? void 0
          : r.trackers.find((t) => (0, o.default)(t, e));
      };
    },
    22010: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(51485),
        o = n(r(70267));
      t.default = (e, t, r) => {
        const n = (0, o.default)(e, t);
        return (
          !!i.REQUIRED_COOKIE_MANAGER_COOKIES.includes(e) ||
          (!!n && (!!n.required || r.consent.includes(n.id)))
        );
      };
    },
    83383: function (e, t, r) {
      "use strict";
      var n = r(50022).Buffer;
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(51485);
      t.default = (e, t) => n.from(e).length / i.KB > t;
    },
    19062: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(51485),
        i = r(90078);
      t.default = (e) => {
        const t = n.GEOLOCATION_RULES.find((t) => t.region === e);
        return !t || t.framework === i.Framework.OPT_OUT;
      };
    },
    17075: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getIsMobileAppFromQueryParams = t.persistMobileAppPreferences =
          void 0);
      const n = r(51485),
        i = r(5105);
      function o() {
        try {
          const e = new URLSearchParams(window.location.search),
            t = "true" === e.get("webview"),
            r = "true" === e.get(n.IS_MOBILE_APP);
          return Boolean(t || r);
        } catch (e) {}
        return !1;
      }
      (t.persistMobileAppPreferences = function () {
        try {
          o() &&
            (document.cookie = `${n.IS_MOBILE_APP}=true; domain=${(0, i.getDomainWithoutSubdomain)()}`);
        } catch (e) {}
      }),
        (t.getIsMobileAppFromQueryParams = o);
    },
    4042: function (e, t, r) {
      "use strict";
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      const i = r(51485),
        o = n(r(70267)),
        a = n(r(3290));
      t.default = (e, t) => {
        const r = (0, o.default)(e, t);
        if (!r) return;
        const n = r.trackers.find((t) => (0, a.default)(t, e));
        if (!n) return;
        const s = new Date();
        return n && n.sessionCookie
          ? void 0
          : n && n.expiry
            ? new Date(s.getTime() + n.expiry * i.ONE_DAY_IN_MILLISECONDS)
            : r
              ? new Date(s.getTime() + r.expiry * i.ONE_DAY_IN_MILLISECONDS)
              : void 0;
      };
    },
    43017: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = (e, t) => {
        if ("undefined" !== typeof window) {
          window.dataLayer || (window.dataLayer = []);
          const r = [{ consent: e.consent }, { adConsent: t.value.toString() }];
          window.dataLayer.push(...r);
        }
      };
    },
    62686: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      const n = r(51485),
        i = r(90078),
        o = r(5105);
      t.default = (e, t, r, a) => {
        const s = {
          expires: 365 * n.PREFERENCE_EXPIRATION_YEAR,
          domain: (0, o.getDomainWithoutSubdomain)(),
          path: "/",
        };
        r === i.Region.EU
          ? e(n.EU_CONSENT_PREFERENCES_COOKIE, t, s)
          : e(n.DEFAULT_CONSENT_PREFERENCES_COOKIE, t, s),
          a && a(t);
      };
    },
    3290: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      t.default = (e, t) => {
        if (e.regex) {
          return new RegExp(e.regex).test(t);
        }
        return e.id === t;
      };
    },
    28870: function (e, t, r) {
      "use strict";
      var n = r(60470),
        i = {
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
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        s = {};
      function u(e) {
        return n.isMemo(e) ? a : s[e.$$typeof] || i;
      }
      (s[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (s[n.Memo] = a);
      var c = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        h = Object.getPrototypeOf,
        p = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" !== typeof r) {
          if (p) {
            var i = h(r);
            i && i !== p && e(t, i, n);
          }
          var a = l(r);
          f && (a = a.concat(f(r)));
          for (var s = u(t), m = u(r), v = 0; v < a.length; ++v) {
            var g = a[v];
            if (!o[g] && (!n || !n[g]) && (!m || !m[g]) && (!s || !s[g])) {
              var y = d(r, g);
              try {
                c(t, g, y);
              } catch (b) {}
            }
          }
        }
        return t;
      };
    },
    74085: function (e) {
      e.exports = (function () {
        "use strict";
        function e(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r) e[n] = r[n];
          }
          return e;
        }
        function t(r, n) {
          function i(t, i, o) {
            if ("undefined" !== typeof document) {
              "number" === typeof (o = e({}, n, o)).expires &&
                (o.expires = new Date(Date.now() + 864e5 * o.expires)),
                o.expires && (o.expires = o.expires.toUTCString()),
                (t = encodeURIComponent(t)
                  .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[()]/g, escape));
              var a = "";
              for (var s in o)
                o[s] &&
                  ((a += "; " + s),
                  !0 !== o[s] && (a += "=" + o[s].split(";")[0]));
              return (document.cookie = t + "=" + r.write(i, t) + a);
            }
          }
          function o(e) {
            if ("undefined" !== typeof document && (!arguments.length || e)) {
              for (
                var t = document.cookie ? document.cookie.split("; ") : [],
                  n = {},
                  i = 0;
                i < t.length;
                i++
              ) {
                var o = t[i].split("="),
                  a = o.slice(1).join("=");
                try {
                  var s = decodeURIComponent(o[0]);
                  if (((n[s] = r.read(a, s)), e === s)) break;
                } catch (u) {}
              }
              return e ? n[e] : n;
            }
          }
          return Object.create(
            {
              set: i,
              get: o,
              remove: function (t, r) {
                i(t, "", e({}, r, { expires: -1 }));
              },
              withAttributes: function (r) {
                return t(this.converter, e({}, this.attributes, r));
              },
              withConverter: function (r) {
                return t(e({}, this.converter, r), this.attributes);
              },
            },
            {
              attributes: { value: Object.freeze(n) },
              converter: { value: Object.freeze(r) },
            },
          );
        }
        return t(
          {
            read: function (e) {
              return (
                '"' === e[0] && (e = e.slice(1, -1)),
                e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
              );
            },
            write: function (e) {
              return encodeURIComponent(e).replace(
                /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
                decodeURIComponent,
              );
            },
          },
          { path: "/" },
        );
      })();
    },
    59427: function (e, t) {
      "use strict";
      var r = "function" === typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        i = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        a = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        u = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        d = r ? Symbol.for("react.forward_ref") : 60112,
        h = r ? Symbol.for("react.suspense") : 60113,
        p = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        v = r ? Symbol.for("react.lazy") : 60116,
        g = r ? Symbol.for("react.block") : 60121,
        y = r ? Symbol.for("react.fundamental") : 60117,
        b = r ? Symbol.for("react.responder") : 60118,
        _ = r ? Symbol.for("react.scope") : 60119;
      function w(e) {
        if ("object" === typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch ((e = e.type)) {
                case l:
                case f:
                case o:
                case s:
                case a:
                case h:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case c:
                    case d:
                    case v:
                    case m:
                    case u:
                      return e;
                    default:
                      return t;
                  }
              }
            case i:
              return t;
          }
        }
      }
      function E(e) {
        return w(e) === f;
      }
      (t.AsyncMode = l),
        (t.ConcurrentMode = f),
        (t.ContextConsumer = c),
        (t.ContextProvider = u),
        (t.Element = n),
        (t.ForwardRef = d),
        (t.Fragment = o),
        (t.Lazy = v),
        (t.Memo = m),
        (t.Portal = i),
        (t.Profiler = s),
        (t.StrictMode = a),
        (t.Suspense = h),
        (t.isAsyncMode = function (e) {
          return E(e) || w(e) === l;
        }),
        (t.isConcurrentMode = E),
        (t.isContextConsumer = function (e) {
          return w(e) === c;
        }),
        (t.isContextProvider = function (e) {
          return w(e) === u;
        }),
        (t.isElement = function (e) {
          return "object" === typeof e && null !== e && e.$$typeof === n;
        }),
        (t.isForwardRef = function (e) {
          return w(e) === d;
        }),
        (t.isFragment = function (e) {
          return w(e) === o;
        }),
        (t.isLazy = function (e) {
          return w(e) === v;
        }),
        (t.isMemo = function (e) {
          return w(e) === m;
        }),
        (t.isPortal = function (e) {
          return w(e) === i;
        }),
        (t.isProfiler = function (e) {
          return w(e) === s;
        }),
        (t.isStrictMode = function (e) {
          return w(e) === a;
        }),
        (t.isSuspense = function (e) {
          return w(e) === h;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" === typeof e ||
            "function" === typeof e ||
            e === o ||
            e === f ||
            e === s ||
            e === a ||
            e === h ||
            e === p ||
            ("object" === typeof e &&
              null !== e &&
              (e.$$typeof === v ||
                e.$$typeof === m ||
                e.$$typeof === u ||
                e.$$typeof === c ||
                e.$$typeof === d ||
                e.$$typeof === y ||
                e.$$typeof === b ||
                e.$$typeof === _ ||
                e.$$typeof === g))
          );
        }),
        (t.typeOf = w);
    },
    60470: function (e, t, r) {
      "use strict";
      e.exports = r(59427);
    },
    19111: function (e) {
      e.exports = function (e, t, r, n) {
        var i = r ? r.call(n, e, t) : void 0;
        if (void 0 !== i) return !!i;
        if (e === t) return !0;
        if ("object" !== typeof e || !e || "object" !== typeof t || !t)
          return !1;
        var o = Object.keys(e),
          a = Object.keys(t);
        if (o.length !== a.length) return !1;
        for (
          var s = Object.prototype.hasOwnProperty.bind(t), u = 0;
          u < o.length;
          u++
        ) {
          var c = o[u];
          if (!s(c)) return !1;
          var l = e[c],
            f = t[c];
          if (
            !1 === (i = r ? r.call(n, l, f, c) : void 0) ||
            (void 0 === i && l !== f)
          )
            return !1;
        }
        return !0;
      };
    },
    17006: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n,
        i = {
          randomUUID:
            "undefined" !== typeof crypto &&
            crypto.randomUUID &&
            crypto.randomUUID.bind(crypto),
        },
        o = new Uint8Array(16);
      function a() {
        if (
          !n &&
          !(n =
            "undefined" !== typeof crypto &&
            crypto.getRandomValues &&
            crypto.getRandomValues.bind(crypto))
        )
          throw new Error(
            "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported",
          );
        return n(o);
      }
      for (var s = [], u = 0; u < 256; ++u)
        s.push((u + 256).toString(16).slice(1));
      function c(e, t = 0) {
        return (
          s[e[t + 0]] +
          s[e[t + 1]] +
          s[e[t + 2]] +
          s[e[t + 3]] +
          "-" +
          s[e[t + 4]] +
          s[e[t + 5]] +
          "-" +
          s[e[t + 6]] +
          s[e[t + 7]] +
          "-" +
          s[e[t + 8]] +
          s[e[t + 9]] +
          "-" +
          s[e[t + 10]] +
          s[e[t + 11]] +
          s[e[t + 12]] +
          s[e[t + 13]] +
          s[e[t + 14]] +
          s[e[t + 15]]
        ).toLowerCase();
      }
      var l = function (e, t, r) {
        if (i.randomUUID && !t && !e) return i.randomUUID();
        var n = (e = e || {}).random || (e.rng || a)();
        if (((n[6] = (15 & n[6]) | 64), (n[8] = (63 & n[8]) | 128), t)) {
          r = r || 0;
          for (var o = 0; o < 16; ++o) t[r + o] = n[o];
          return t;
        }
        return c(n);
      };
    },
    50391: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__britney_56ce3a', '__britney_Fallback_56ce3a'",
        },
        className: "__className_56ce3a",
        variable: "__variable_56ce3a",
      };
    },
    75001: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__coinbaseDisplay_7118f1', '__coinbaseDisplay_Fallback_7118f1'",
        },
        className: "__className_7118f1",
        variable: "__variable_7118f1",
      };
    },
    50598: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__coinbaseMono_cd1525', '__coinbaseMono_Fallback_cd1525'",
        },
        className: "__className_cd1525",
        variable: "__variable_cd1525",
      };
    },
    11791: function (e) {
      e.exports = {
        style: {
          fontFamily:
            "'__coinbaseSans_cec8cc', '__coinbaseSans_Fallback_cec8cc'",
        },
        className: "__className_cec8cc",
        variable: "__variable_cec8cc",
      };
    },
    4433: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          __addDisposableResource: function () {
            return N;
          },
          __assign: function () {
            return o;
          },
          __asyncDelegator: function () {
            return C;
          },
          __asyncGenerator: function () {
            return k;
          },
          __asyncValues: function () {
            return T;
          },
          __await: function () {
            return S;
          },
          __awaiter: function () {
            return p;
          },
          __classPrivateFieldGet: function () {
            return x;
          },
          __classPrivateFieldIn: function () {
            return R;
          },
          __classPrivateFieldSet: function () {
            return M;
          },
          __createBinding: function () {
            return v;
          },
          __decorate: function () {
            return s;
          },
          __disposeResources: function () {
            return L;
          },
          __esDecorate: function () {
            return c;
          },
          __exportStar: function () {
            return g;
          },
          __extends: function () {
            return i;
          },
          __generator: function () {
            return m;
          },
          __importDefault: function () {
            return I;
          },
          __importStar: function () {
            return A;
          },
          __makeTemplateObject: function () {
            return P;
          },
          __metadata: function () {
            return h;
          },
          __param: function () {
            return u;
          },
          __propKey: function () {
            return f;
          },
          __read: function () {
            return b;
          },
          __rest: function () {
            return a;
          },
          __runInitializers: function () {
            return l;
          },
          __setFunctionName: function () {
            return d;
          },
          __spread: function () {
            return _;
          },
          __spreadArray: function () {
            return E;
          },
          __spreadArrays: function () {
            return w;
          },
          __values: function () {
            return y;
          },
        });
      var n = function (e, t) {
        return (
          (n =
            Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array &&
              function (e, t) {
                e.__proto__ = t;
              }) ||
            function (e, t) {
              for (var r in t)
                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            }),
          n(e, t)
        );
      };
      function i(e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Class extends value " +
              String(t) +
              " is not a constructor or null",
          );
        function r() {
          this.constructor = e;
        }
        n(e, t),
          (e.prototype =
            null === t
              ? Object.create(t)
              : ((r.prototype = t.prototype), new r()));
      }
      var o = function () {
        return (
          (o =
            Object.assign ||
            function (e) {
              for (var t, r = 1, n = arguments.length; r < n; r++)
                for (var i in (t = arguments[r]))
                  Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
              return e;
            }),
          o.apply(this, arguments)
        );
      };
      function a(e, t) {
        var r = {};
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) &&
            t.indexOf(n) < 0 &&
            (r[n] = e[n]);
        if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
          var i = 0;
          for (n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            t.indexOf(n[i]) < 0 &&
              Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
              (r[n[i]] = e[n[i]]);
        }
        return r;
      }
      function s(e, t, r, n) {
        var i,
          o = arguments.length,
          a =
            o < 3
              ? t
              : null === n
                ? (n = Object.getOwnPropertyDescriptor(t, r))
                : n;
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.decorate
        )
          a = Reflect.decorate(e, t, r, n);
        else
          for (var s = e.length - 1; s >= 0; s--)
            (i = e[s]) &&
              (a = (o < 3 ? i(a) : o > 3 ? i(t, r, a) : i(t, r)) || a);
        return o > 3 && a && Object.defineProperty(t, r, a), a;
      }
      function u(e, t) {
        return function (r, n) {
          t(r, n, e);
        };
      }
      function c(e, t, r, n, i, o) {
        function a(e) {
          if (void 0 !== e && "function" !== typeof e)
            throw new TypeError("Function expected");
          return e;
        }
        for (
          var s,
            u = n.kind,
            c = "getter" === u ? "get" : "setter" === u ? "set" : "value",
            l = !t && e ? (n.static ? e : e.prototype) : null,
            f = t || (l ? Object.getOwnPropertyDescriptor(l, n.name) : {}),
            d = !1,
            h = r.length - 1;
          h >= 0;
          h--
        ) {
          var p = {};
          for (var m in n) p[m] = "access" === m ? {} : n[m];
          for (var m in n.access) p.access[m] = n.access[m];
          p.addInitializer = function (e) {
            if (d)
              throw new TypeError(
                "Cannot add initializers after decoration has completed",
              );
            o.push(a(e || null));
          };
          var v = (0, r[h])(
            "accessor" === u ? { get: f.get, set: f.set } : f[c],
            p,
          );
          if ("accessor" === u) {
            if (void 0 === v) continue;
            if (null === v || "object" !== typeof v)
              throw new TypeError("Object expected");
            (s = a(v.get)) && (f.get = s),
              (s = a(v.set)) && (f.set = s),
              (s = a(v.init)) && i.unshift(s);
          } else (s = a(v)) && ("field" === u ? i.unshift(s) : (f[c] = s));
        }
        l && Object.defineProperty(l, n.name, f), (d = !0);
      }
      function l(e, t, r) {
        for (var n = arguments.length > 2, i = 0; i < t.length; i++)
          r = n ? t[i].call(e, r) : t[i].call(e);
        return n ? r : void 0;
      }
      function f(e) {
        return "symbol" === typeof e ? e : "".concat(e);
      }
      function d(e, t, r) {
        return (
          "symbol" === typeof t &&
            (t = t.description ? "[".concat(t.description, "]") : ""),
          Object.defineProperty(e, "name", {
            configurable: !0,
            value: r ? "".concat(r, " ", t) : t,
          })
        );
      }
      function h(e, t) {
        if (
          "object" === typeof Reflect &&
          "function" === typeof Reflect.metadata
        )
          return Reflect.metadata(e, t);
      }
      function p(e, t, r, n) {
        return new (r || (r = Promise))(function (i, o) {
          function a(e) {
            try {
              u(n.next(e));
            } catch (t) {
              o(t);
            }
          }
          function s(e) {
            try {
              u(n.throw(e));
            } catch (t) {
              o(t);
            }
          }
          function u(e) {
            var t;
            e.done
              ? i(e.value)
              : ((t = e.value),
                t instanceof r
                  ? t
                  : new r(function (e) {
                      e(t);
                    })).then(a, s);
          }
          u((n = n.apply(e, t || [])).next());
        });
      }
      function m(e, t) {
        var r,
          n,
          i,
          o,
          a = {
            label: 0,
            sent: function () {
              if (1 & i[0]) throw i[1];
              return i[1];
            },
            trys: [],
            ops: [],
          };
        return (
          (o = { next: s(0), throw: s(1), return: s(2) }),
          "function" === typeof Symbol &&
            (o[Symbol.iterator] = function () {
              return this;
            }),
          o
        );
        function s(s) {
          return function (u) {
            return (function (s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; o && ((o = 0), s[0] && (a = 0)), a; )
                try {
                  if (
                    ((r = 1),
                    n &&
                      (i =
                        2 & s[0]
                          ? n.return
                          : s[0]
                            ? n.throw || ((i = n.return) && i.call(n), 0)
                            : n.next) &&
                      !(i = i.call(n, s[1])).done)
                  )
                    return i;
                  switch (((n = 0), i && (s = [2 & s[0], i.value]), s[0])) {
                    case 0:
                    case 1:
                      i = s;
                      break;
                    case 4:
                      return a.label++, { value: s[1], done: !1 };
                    case 5:
                      a.label++, (n = s[1]), (s = [0]);
                      continue;
                    case 7:
                      (s = a.ops.pop()), a.trys.pop();
                      continue;
                    default:
                      if (
                        !(i = (i = a.trys).length > 0 && i[i.length - 1]) &&
                        (6 === s[0] || 2 === s[0])
                      ) {
                        a = 0;
                        continue;
                      }
                      if (3 === s[0] && (!i || (s[1] > i[0] && s[1] < i[3]))) {
                        a.label = s[1];
                        break;
                      }
                      if (6 === s[0] && a.label < i[1]) {
                        (a.label = i[1]), (i = s);
                        break;
                      }
                      if (i && a.label < i[2]) {
                        (a.label = i[2]), a.ops.push(s);
                        break;
                      }
                      i[2] && a.ops.pop(), a.trys.pop();
                      continue;
                  }
                  s = t.call(e, a);
                } catch (u) {
                  (s = [6, u]), (n = 0);
                } finally {
                  r = i = 0;
                }
              if (5 & s[0]) throw s[1];
              return { value: s[0] ? s[1] : void 0, done: !0 };
            })([s, u]);
          };
        }
      }
      var v = Object.create
        ? function (e, t, r, n) {
            void 0 === n && (n = r);
            var i = Object.getOwnPropertyDescriptor(t, r);
            (i &&
              !("get" in i ? !t.__esModule : i.writable || i.configurable)) ||
              (i = {
                enumerable: !0,
                get: function () {
                  return t[r];
                },
              }),
              Object.defineProperty(e, n, i);
          }
        : function (e, t, r, n) {
            void 0 === n && (n = r), (e[n] = t[r]);
          };
      function g(e, t) {
        for (var r in e)
          "default" === r ||
            Object.prototype.hasOwnProperty.call(t, r) ||
            v(t, e, r);
      }
      function y(e) {
        var t = "function" === typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" === typeof e.length)
          return {
            next: function () {
              return (
                e && n >= e.length && (e = void 0),
                { value: e && e[n++], done: !e }
              );
            },
          };
        throw new TypeError(
          t ? "Object is not iterable." : "Symbol.iterator is not defined.",
        );
      }
      function b(e, t) {
        var r = "function" === typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n,
          i,
          o = r.call(e),
          a = [];
        try {
          for (; (void 0 === t || t-- > 0) && !(n = o.next()).done; )
            a.push(n.value);
        } catch (s) {
          i = { error: s };
        } finally {
          try {
            n && !n.done && (r = o.return) && r.call(o);
          } finally {
            if (i) throw i.error;
          }
        }
        return a;
      }
      function _() {
        for (var e = [], t = 0; t < arguments.length; t++)
          e = e.concat(b(arguments[t]));
        return e;
      }
      function w() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++)
          e += arguments[t].length;
        var n = Array(e),
          i = 0;
        for (t = 0; t < r; t++)
          for (var o = arguments[t], a = 0, s = o.length; a < s; a++, i++)
            n[i] = o[a];
        return n;
      }
      function E(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, i = 0, o = t.length; i < o; i++)
            (!n && i in t) ||
              (n || (n = Array.prototype.slice.call(t, 0, i)), (n[i] = t[i]));
        return e.concat(n || Array.prototype.slice.call(t));
      }
      function S(e) {
        return this instanceof S ? ((this.v = e), this) : new S(e);
      }
      function k(e, t, r) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var n,
          i = r.apply(e, t || []),
          o = [];
        return (
          (n = {}),
          a("next"),
          a("throw"),
          a("return", function (e) {
            return function (t) {
              return Promise.resolve(t).then(e, c);
            };
          }),
          (n[Symbol.asyncIterator] = function () {
            return this;
          }),
          n
        );
        function a(e, t) {
          i[e] &&
            ((n[e] = function (t) {
              return new Promise(function (r, n) {
                o.push([e, t, r, n]) > 1 || s(e, t);
              });
            }),
            t && (n[e] = t(n[e])));
        }
        function s(e, t) {
          try {
            (r = i[e](t)).value instanceof S
              ? Promise.resolve(r.value.v).then(u, c)
              : l(o[0][2], r);
          } catch (n) {
            l(o[0][3], n);
          }
          var r;
        }
        function u(e) {
          s("next", e);
        }
        function c(e) {
          s("throw", e);
        }
        function l(e, t) {
          e(t), o.shift(), o.length && s(o[0][0], o[0][1]);
        }
      }
      function C(e) {
        var t, r;
        return (
          (t = {}),
          n("next"),
          n("throw", function (e) {
            throw e;
          }),
          n("return"),
          (t[Symbol.iterator] = function () {
            return this;
          }),
          t
        );
        function n(n, i) {
          t[n] = e[n]
            ? function (t) {
                return (r = !r)
                  ? { value: S(e[n](t)), done: !1 }
                  : i
                    ? i(t)
                    : t;
              }
            : i;
        }
      }
      function T(e) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var t,
          r = e[Symbol.asyncIterator];
        return r
          ? r.call(e)
          : ((e = y(e)),
            (t = {}),
            n("next"),
            n("throw"),
            n("return"),
            (t[Symbol.asyncIterator] = function () {
              return this;
            }),
            t);
        function n(r) {
          t[r] =
            e[r] &&
            function (t) {
              return new Promise(function (n, i) {
                (function (e, t, r, n) {
                  Promise.resolve(n).then(function (t) {
                    e({ value: t, done: r });
                  }, t);
                })(n, i, (t = e[r](t)).done, t.value);
              });
            };
        }
      }
      function P(e, t) {
        return (
          Object.defineProperty
            ? Object.defineProperty(e, "raw", { value: t })
            : (e.raw = t),
          e
        );
      }
      var O = Object.create
        ? function (e, t) {
            Object.defineProperty(e, "default", { enumerable: !0, value: t });
          }
        : function (e, t) {
            e.default = t;
          };
      function A(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e)
            "default" !== r &&
              Object.prototype.hasOwnProperty.call(e, r) &&
              v(t, e, r);
        return O(t, e), t;
      }
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function x(e, t, r, n) {
        if ("a" === r && !n)
          throw new TypeError("Private accessor was defined without a getter");
        if ("function" === typeof t ? e !== t || !n : !t.has(e))
          throw new TypeError(
            "Cannot read private member from an object whose class did not declare it",
          );
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e);
      }
      function M(e, t, r, n, i) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !i)
          throw new TypeError("Private accessor was defined without a setter");
        if ("function" === typeof t ? e !== t || !i : !t.has(e))
          throw new TypeError(
            "Cannot write private member to an object whose class did not declare it",
          );
        return "a" === n ? i.call(e, r) : i ? (i.value = r) : t.set(e, r), r;
      }
      function R(e, t) {
        if (null === t || ("object" !== typeof t && "function" !== typeof t))
          throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" === typeof e ? t === e : e.has(t);
      }
      function N(e, t, r) {
        if (null !== t && void 0 !== t) {
          if ("object" !== typeof t && "function" !== typeof t)
            throw new TypeError("Object expected.");
          var n, i;
          if (r) {
            if (!Symbol.asyncDispose)
              throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose];
          }
          if (void 0 === n) {
            if (!Symbol.dispose)
              throw new TypeError("Symbol.dispose is not defined.");
            (n = t[Symbol.dispose]), r && (i = n);
          }
          if ("function" !== typeof n)
            throw new TypeError("Object not disposable.");
          i &&
            (n = function () {
              try {
                i.call(this);
              } catch (e) {
                return Promise.reject(e);
              }
            }),
            e.stack.push({ value: t, dispose: n, async: r });
        } else r && e.stack.push({ async: !0 });
        return t;
      }
      var D =
        "function" === typeof SuppressedError
          ? SuppressedError
          : function (e, t, r) {
              var n = new Error(r);
              return (
                (n.name = "SuppressedError"),
                (n.error = e),
                (n.suppressed = t),
                n
              );
            };
      function L(e) {
        function t(t) {
          (e.error = e.hasError
            ? new D(t, e.error, "An error was suppressed during disposal.")
            : t),
            (e.hasError = !0);
        }
        return (function r() {
          for (; e.stack.length; ) {
            var n = e.stack.pop();
            try {
              var i = n.dispose && n.dispose.call(n.value);
              if (n.async)
                return Promise.resolve(i).then(r, function (e) {
                  return t(e), r();
                });
            } catch (o) {
              t(o);
            }
          }
          if (e.hasError) throw e.error;
        })();
      }
      t.default = {
        __extends: i,
        __assign: o,
        __rest: a,
        __decorate: s,
        __param: u,
        __metadata: h,
        __awaiter: p,
        __generator: m,
        __createBinding: v,
        __exportStar: g,
        __values: y,
        __read: b,
        __spread: _,
        __spreadArrays: w,
        __spreadArray: E,
        __await: S,
        __asyncGenerator: k,
        __asyncDelegator: C,
        __asyncValues: T,
        __makeTemplateObject: P,
        __importStar: A,
        __importDefault: I,
        __classPrivateFieldGet: x,
        __classPrivateFieldSet: M,
        __classPrivateFieldIn: R,
        __addDisposableResource: N,
        __disposeResources: L,
      };
    },
  },
]);
