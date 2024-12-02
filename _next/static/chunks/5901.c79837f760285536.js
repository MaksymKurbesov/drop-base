"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5901],
  {
    76323: function (e, s, t) {
      var n = t(60221),
        r = t(88810),
        a = t(67085),
        o = t(57437),
        c = t(2265),
        i = t(86685);
      const A = (0, c.forwardRef)((e, s) => {
        var { children: A } = e,
          l = (0, a._)(e, ["children"]);
        const [d, h] = (0, c.useState)(),
          { logError: x } = (0, i.p)();
        return (
          (0, c.useEffect)(() => {
            Promise.all([t.e(2381), t.e(2533)])
              .then(t.bind(t, 62533))
              .then((e) => {
                h(() => e.RigidBody);
              })
              .catch((e) => x(e, "Failed to load RigidBody"));
          }, [x]),
          d
            ? (0, o.jsx)(d, (0, r._)((0, n._)({ ref: s }, l), { children: A }))
            : null
        );
      });
      (A.displayName = "DynamicRigidBody"), (s.Z = A);
    },
    85901: function (e, s, t) {
      t.r(s),
        t.d(s, {
          Everything: function () {
            return ze;
          },
          Scene: function () {
            return Se;
          },
        });
      var n = t(57437),
        r = t(86855),
        a = t.n(r),
        o = t(2265),
        c = t(30166),
        i = t(33145),
        A = t(71031),
        l = t(59661),
        d = t(5163),
        h = t(53485),
        x = t(60221),
        u = t(88810),
        g = t(72694),
        m =
          "_next/static/assets/glb/controllere47ca45a29355805bd39158b6793da76.glb",
        j = "_next/static/assets/glb/eth09b2cc4122b47ec4453ba315d76d227f.glb",
        b = "_next/static/assets/glb/globec086c8afef1eb09492e81e0b51134e4b.glb",
        f = "_next/static/assets/glb/phone16ae0c91a2963439127af7206ce34aa1.glb",
        p =
          "_next/static/assets/glb/headphones0a5e502ed7913aaa2215cd815f7c4a70.glb",
        y =
          "_next/static/assets/glb/spikeyb3355dadee223fc1396e032dbc916fae.glb",
        w = "_next/static/assets/glb/play872356c815b73013937e41ae8d76d56b.glb",
        E =
          "_next/static/assets/glb/object239aa7282621249ac1f94feee0173ed2.glb",
        v = "_next/static/assets/glb/logob836918bcd7862e8424fdc8b99ab4370.glb",
        S =
          "_next/static/assets/glb/cursor9c4e425930733dfc3a8ea7c8b9f1b802.glb",
        B = {
          src: "_next/static/media/lightning.639b2e46.svg",
          height: 93,
          width: 54,
          blurWidth: 0,
          blurHeight: 0,
        },
        k = t(21247),
        P = t(51508),
        C = t(93579),
        M = t(70162),
        Q = t(7124),
        _ = t(76323);
      const z = (0, c.default)(
          async () =>
            t
              .e(4900)
              .then(t.bind(t, 84900))
              .then((e) => e.PhysicsMesh),
          { loadableGenerated: { webpack: () => [84900] }, ssr: !1 },
        ),
        I = (0, c.default)(
          async () =>
            Promise.all([t.e(2381), t.e(2533)])
              .then(t.bind(t, 62533))
              .then((e) => e.BallCollider),
          { loadableGenerated: { webpack: () => [62533] }, ssr: !1 },
        ),
        L = (0, c.default)(
          async () =>
            Promise.all([t.e(2381), t.e(2533)])
              .then(t.bind(t, 62533))
              .then((e) => e.CylinderCollider),
          { loadableGenerated: { webpack: () => [62533] }, ssr: !1 },
        ),
        D = (0, c.default)(
          async () =>
            Promise.all([t.e(5107), t.e(22), t.e(914)])
              .then(t.bind(t, 70571))
              .then((e) => e.Center),
          { loadableGenerated: { webpack: () => [70571] }, ssr: !1 },
        );
      C.L.setDecoderPath("draco/");
      const O = "#105eff",
        G = "#444";
      function R() {
        return (0, n.jsx)("meshPhysicalMaterial", {
          color: G,
          metalness: 0.5,
          roughness: 0.5,
        });
      }
      function N() {
        return (0, n.jsx)("meshPhysicalMaterial", {
          color: "white",
          metalness: 0.8,
          roughness: 0.3,
        });
      }
      const H = [0.5, 0.5, 0.5],
        F = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      function T() {
        const e = (0, o.useMemo)(
          () =>
            F.map((e) =>
              (0, n.jsx)(
                z,
                {
                  scale: 0.5,
                  gravityEffect: 0.03,
                  children: (0, n.jsxs)("mesh", {
                    castShadow: !0,
                    receiveShadow: !0,
                    children: [
                      (0, n.jsx)("boxGeometry", { args: H }),
                      (0, n.jsx)(R, {}),
                    ],
                  }),
                },
                e,
              ),
            ),
          [],
        );
        return (0, n.jsx)("group", { children: e });
      }
      const U = [0.25, 64, 64],
        K = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
      function Y() {
        const e = (0, o.useMemo)(
          () =>
            K.map((e) =>
              (0, n.jsx)(
                z,
                {
                  scale: 0.25,
                  gravityEffect: 0.004,
                  children: (0, n.jsxs)("mesh", {
                    castShadow: !0,
                    receiveShadow: !0,
                    children: [
                      (0, n.jsx)("sphereGeometry", { args: U }),
                      (0, n.jsx)("meshPhysicalMaterial", { color: O }),
                    ],
                  }),
                },
                e,
              ),
            ),
          [],
        );
        return (0, n.jsx)("group", { children: e });
      }
      const X = [Math.PI / 2, 0, 0],
        W = [0, 0, -10];
      function Z() {
        const e = (0, o.useRef)(null),
          s = (0, o.useRef)(!1),
          t = (0, g.ac)("(max-width: 769px)");
        (0, M.F)((t) => {
          let { pointer: n } = t;
          e.current &&
            (s.current
              ? ((e.current.rotation.y = (0, P.t7)(
                  e.current.rotation.y,
                  n.x,
                  0.05,
                )),
                (e.current.rotation.x = (0, P.t7)(
                  e.current.rotation.x,
                  -n.y,
                  0.05,
                )))
              : (e.current.rotation.y = (0, P.t7)(
                  e.current.rotation.y,
                  0,
                  0.05,
                )),
            (e.current.position.z = (0, P.t7)(e.current.position.z, 0, 0.05)),
            e.current.position.z > -0.01 && (s.current = !0));
        });
        const r = (0, o.useMemo)(() => [10, t ? 1.1 : 2], [t]);
        return (0, n.jsxs)(_.Z, {
          type: "kinematicPosition",
          colliders: !1,
          children: [
            (0, n.jsx)(L, { rotation: X, args: r }),
            (0, n.jsx)("group", {
              ref: e,
              position: W,
              children: (0, n.jsx)(D, {
                scale: t ? 0.075 : 0.13,
                children: (0, n.jsx)($, {}),
              }),
            }),
          ],
        });
      }
      const J = [0, 0, 0],
        V = [0, 0, 10];
      function q() {
        const e = new k.Vector3(),
          s = (0, o.useRef)(null),
          t = (0, o.useRef)(null),
          r = (0, g.ac)("(max-width: 769px)");
        (0, M.F)((n) => {
          let { pointer: r, viewport: a } = n;
          var o, c, i;
          null === (o = s.current) ||
            void 0 === o ||
            o.setNextKinematicTranslation(
              e.set((r.x * a.width) / 2, (r.y * a.height) / 2, 0),
            ),
            null === (c = t.current) ||
              void 0 === c ||
              c.position.set(0, 0, 10),
            null === (i = t.current) ||
              void 0 === i ||
              i.lookAt((r.x * a.width) / 2, (r.y * a.height) / 2, 0);
        });
        const a = (0, o.useMemo)(() => [r ? 1 : 2], [r]);
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(_.Z, {
              position: J,
              type: "kinematicPosition",
              colliders: !1,
              ref: s,
              children: (0, n.jsx)(I, { args: a }),
            }),
            (0, n.jsx)("directionalLight", {
              ref: t,
              position: V,
              intensity: 10,
              color: O,
            }),
          ],
        });
      }
      function $() {
        const { nodes: e } = (0, C.L)(v),
          s = e.Base_Logo;
        return (0, n.jsx)(D, {
          children: (0, n.jsx)("mesh", {
            scale: 3.2,
            geometry: s.geometry,
            castShadow: !0,
            receiveShadow: !0,
            children: (0, n.jsx)("meshPhysicalMaterial", {
              color: O,
              metalness: 0,
              roughness: 0.25,
            }),
          }),
        });
      }
      function ee() {
        const e = (0, M.H)(Q.u, B.src).paths[0].toShapes(!0),
          s = (0, o.useMemo)(
            () => [
              e,
              {
                curveSegments: 64,
                depth: 5,
                bevelEnabled: !0,
                bevelSegments: 64,
                bevelSize: 0.5,
                bevelThickness: 1,
              },
            ],
            [e],
          );
        return (0, n.jsx)(z, {
          children: (0, n.jsx)(D, {
            children: (0, n.jsxs)("mesh", {
              scale: 0.019,
              castShadow: !0,
              receiveShadow: !0,
              children: [
                (0, n.jsx)("extrudeGeometry", { args: s }),
                (0, n.jsx)(N, {}),
              ],
            }),
          }),
        });
      }
      function se(e) {
        const { nodes: s } = (0, C.L)(m),
          t = s.Controller;
        return (0, n.jsx)(z, {
          children: (0, n.jsx)(
            "mesh",
            (0, u._)((0, x._)({}, e), {
              geometry: t.geometry,
              castShadow: !0,
              receiveShadow: !0,
              scale: 0.3,
              children: (0, n.jsx)(R, {}),
            }),
          ),
        });
      }
      function te() {
        const { nodes: e } = (0, C.L)(j),
          s = e.ETH;
        return (0, n.jsx)(z, {
          children: (0, n.jsx)("mesh", {
            geometry: s.geometry,
            castShadow: !0,
            receiveShadow: !0,
            scale: 0.25,
            children: (0, n.jsx)(N, {}),
          }),
        });
      }
      function ne() {
        const { nodes: e } = (0, C.L)(b),
          s = e.Globe;
        return (0, n.jsx)(z, {
          children: (0, n.jsx)("mesh", {
            geometry: s.geometry,
            castShadow: !0,
            receiveShadow: !0,
            scale: 0.25,
            children: (0, n.jsx)(N, {}),
          }),
        });
      }
      const re = [0, 0, 0.06],
        ae = [Math.PI / 2, 0, 0],
        oe = [1.8, 0.86];
      function ce() {
        const { nodes: e } = (0, C.L)(f),
          s = e.Cylinder;
        return (0, n.jsxs)(z, {
          children: [
            (0, n.jsx)("mesh", {
              geometry: s.geometry,
              castShadow: !0,
              receiveShadow: !0,
              rotation: ae,
              children: (0, n.jsx)(R, {}),
            }),
            (0, n.jsxs)("mesh", {
              position: re,
              children: [
                (0, n.jsx)("planeGeometry", { args: oe }),
                (0, n.jsx)(N, {}),
              ],
            }),
          ],
        });
      }
      function ie() {
        const { nodes: e } = (0, C.L)(p),
          s = e.Headphones;
        return (0, n.jsx)(z, {
          children: (0, n.jsx)("mesh", {
            geometry: s.geometry,
            castShadow: !0,
            receiveShadow: !0,
            scale: 0.2,
            children: (0, n.jsx)(R, {}),
          }),
        });
      }
      function Ae() {
        const { nodes: e } = (0, C.L)(y),
          s = e.Spikey;
        return (0, n.jsx)(z, {
          children: (0, n.jsx)("mesh", {
            geometry: s.geometry,
            castShadow: !0,
            receiveShadow: !0,
            scale: 0.3,
            children: (0, n.jsx)(R, {}),
          }),
        });
      }
      function le() {
        const { nodes: e } = (0, C.L)(w),
          s = e.Play;
        return (0, n.jsx)(z, {
          children: (0, n.jsx)("mesh", {
            geometry: s.geometry,
            castShadow: !0,
            receiveShadow: !0,
            scale: 0.4,
            children: (0, n.jsx)(R, {}),
          }),
        });
      }
      function de() {
        const { nodes: e } = (0, C.L)(E),
          s = e.Object_02;
        return (0, n.jsx)(z, {
          children: (0, n.jsx)("mesh", {
            geometry: s.geometry,
            castShadow: !0,
            receiveShadow: !0,
            scale: 0.3,
            children: (0, n.jsx)(R, {}),
          }),
        });
      }
      function he() {
        const { nodes: e } = (0, C.L)(S),
          s = e.Cursor,
          t = e.Cursor1;
        return (0, n.jsx)(z, {
          children: (0, n.jsx)(D, {
            children: (0, n.jsxs)("group", {
              scale: 0.35,
              children: [
                (0, n.jsx)("mesh", {
                  geometry: s.geometry,
                  castShadow: !0,
                  receiveShadow: !0,
                  children: (0, n.jsx)(R, {}),
                }),
                (0, n.jsx)("mesh", {
                  geometry: t.geometry,
                  castShadow: !0,
                  receiveShadow: !0,
                  children: (0, n.jsx)(N, {}),
                }),
              ],
            }),
          }),
        });
      }
      var xe = {
          src: "_next/static/media/base-logo.3985e963.svg",
          height: 30,
          width: 29,
          blurWidth: 0,
          blurHeight: 0,
        },
        ue = {
          src: "_next/static/media/environmentLight.bba96e23.jpg",
          height: 480,
          width: 960,
          blurDataURL:
            "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIQAxAAAAGYB//EABYQAAMAAAAAAAAAAAAAAAAAAAIRFP/aAAgBAQABBQKg3//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQMBAT8Bf//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABgQAQEAAwAAAAAAAAAAAAAAAAERAAIS/9oACAEBAAY/AlIXXmTP/8QAGBAAAgMAAAAAAAAAAAAAAAAAESEAMZH/2gAIAQEAAT8hXFYIANn/2gAMAwEAAgADAAAAEPP/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAEDAQE/EH//xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oACAECAQE/EH//xAAXEAEBAQEAAAAAAAAAAAAAAAABESEA/9oACAEBAAE/EEi1aOUEg2KWm3e//9k=",
          blurWidth: 8,
          blurHeight: 4,
        };
      const ge = (0, c.default)(
          async () =>
            t
              .e(7283)
              .then(t.bind(t, 27283))
              .then((e) => e.Canvas),
          { loadableGenerated: { webpack: () => [27283] }, ssr: !1 },
        ),
        me = (0, c.default)(
          async () =>
            Promise.all([t.e(5107), t.e(22), t.e(914)])
              .then(t.bind(t, 70571))
              .then((e) => e.Html),
          { loadableGenerated: { webpack: () => [70571] }, ssr: !1 },
        ),
        je = (0, c.default)(
          async () =>
            Promise.all([t.e(5107), t.e(22), t.e(914)])
              .then(t.bind(t, 70571))
              .then((e) => e.Lightformer),
          { loadableGenerated: { webpack: () => [70571] }, ssr: !1 },
        ),
        be = (0, c.default)(
          async () =>
            Promise.all([t.e(5107), t.e(22), t.e(914)])
              .then(t.bind(t, 70571))
              .then((e) => e.Environment),
          { loadableGenerated: { webpack: () => [70571] }, ssr: !1 },
        ),
        fe = (0, c.default)(
          async () =>
            Promise.all([t.e(2381), t.e(2533)])
              .then(t.bind(t, 62533))
              .then((e) => e.Physics),
          { loadableGenerated: { webpack: () => [62533] }, ssr: !1 },
        ),
        pe =
          "https://wallet.coinbase.com/nft/mint/eip155:8453:erc721:0x803Fc79D31AB30a39B3BD2A90171470cC82Ba44a",
        ye = [0, 0, 0],
        we = ["#111", 2.5, 7],
        Ee = { position: [0, 0, 5] },
        ve = [7, 64, 64];
      function Se() {
        const [e, s] = (0, o.useState)(!1),
          [t, r] = (0, o.useState)({ x: 0, y: 0 }),
          [c, i] = (0, o.useState)(!0),
          l = (0, o.useRef)(null),
          d = (0, o.useCallback)((e) => {
            e.preventDefault(), s(!0), r({ x: e.clientX, y: e.clientY });
          }, []),
          h = (0, o.useCallback)(() => {
            s(!1);
          }, []);
        (0, o.useEffect)(
          () => (
            document.addEventListener("click", h),
            () => {
              document.removeEventListener("click", h);
            }
          ),
          [h],
        ),
          (0, o.useEffect)(() => {
            const e = l.current,
              s = new IntersectionObserver(
                (e) => {
                  const [s] = e;
                  i(s.isIntersecting);
                },
                { threshold: 0, rootMargin: "0px 0px -100% 0px" },
              );
            return (
              e && s.observe(e),
              (() => {
                const e = !document.hidden && document.hasFocus();
                i(e);
              })(),
              () => {
                e && s.unobserve(e);
              }
            );
          }, []);
        const x = a()(
          "fixed h-screen w-full transition-all",
          c ? "opacity-100" : "opacity-0",
        );
        return (0, n.jsxs)("div", {
          ref: l,
          className: "absolute h-full w-full",
          onContextMenu: d,
          children: [
            (0, n.jsxs)(ge, {
              shadows: !0,
              frameloop: c ? "always" : "never",
              camera: Ee,
              className: x,
              children: [
                (0, n.jsx)("fog", { attach: "fog", args: we }),
                (0, n.jsxs)("mesh", {
                  children: [
                    (0, n.jsx)("sphereGeometry", { args: ve }),
                    (0, n.jsx)("meshPhysicalMaterial", {
                      color: "#666",
                      side: 1,
                      depthTest: !1,
                    }),
                  ],
                }),
                (0, n.jsx)(Be, {}),
                (0, n.jsx)(_e, {}),
                (0, n.jsx)(o.Suspense, {
                  fallback: (0, n.jsx)(ke, {}),
                  children: (0, n.jsxs)(fe, {
                    gravity: ye,
                    timeStep: "vary",
                    paused: !c,
                    children: [(0, n.jsx)(q, {}), (0, n.jsx)(ze, {})],
                  }),
                }),
              ],
            }),
            e &&
              (0, n.jsx)("div", {
                className:
                  "absolute rounded border border-white/20 bg-black px-4 py-2 shadow-md",
                style: {
                  top: "".concat(t.y, "px"),
                  left: "".concat(t.x, "px"),
                },
                children: (0, n.jsx)(A.default, {
                  href: pe,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover:text-blue",
                  children: "Mint This",
                }),
              }),
          ],
        });
      }
      function Be() {
        return (0, n.jsxs)(l.x, {
          multisampling: 0,
          stencilBuffer: !1,
          children: [
            (0, n.jsx)(d.d, {
              mipmapBlur: !0,
              luminanceThreshold: 0.5,
              intensity: 1,
            }),
            (0, n.jsx)(h.k, {}),
          ],
        });
      }
      function ke() {
        return (0, n.jsx)(me, {
          center: !0,
          children: (0, n.jsx)("div", {
            className: "h-[50px] w-[50px] animate-pulse",
            children: (0, n.jsx)(i.default, {
              src: xe,
              alt: "Loading...",
              className: "w-[50px]",
            }),
          }),
        });
      }
      const Pe = [5, 5, -3],
        Ce = [0, -15, -9],
        Me = [10, 1, 0],
        Qe = [10, 10, 0];
      function _e() {
        const e = (0, o.useCallback)((e) => e.lookAt(0, 0, 0), []);
        return (0, n.jsxs)(be, {
          files: ue.src,
          children: [
            (0, n.jsx)(je, {
              form: "ring",
              intensity: 6,
              "rotation-x": Math.PI / 2,
              position: Pe,
              scale: 4,
              color: "white",
            }),
            (0, n.jsx)(je, {
              form: "circle",
              intensity: 20,
              "rotation-x": Math.PI / 2,
              position: Ce,
              scale: 2,
            }),
            (0, n.jsx)(je, {
              form: "circle",
              intensity: 2,
              "rotation-y": -Math.PI / 2,
              position: Me,
              scale: 8,
            }),
            (0, n.jsx)(je, {
              form: "ring",
              color: "white",
              intensity: 5,
              onUpdate: e,
              position: Qe,
              scale: 4,
            }),
          ],
        });
      }
      function ze() {
        return (0, n.jsxs)("group", {
          dispose: null,
          children: [
            (0, n.jsx)(Z, {}),
            (0, n.jsx)(ee, {}),
            (0, n.jsx)(Y, {}),
            (0, n.jsx)(T, {}),
            (0, n.jsx)(se, {}),
            (0, n.jsx)(te, {}),
            (0, n.jsx)(ne, {}),
            (0, n.jsx)(ce, {}),
            (0, n.jsx)(ie, {}),
            (0, n.jsx)(Ae, {}),
            (0, n.jsx)(le, {}),
            (0, n.jsx)(de, {}),
            (0, n.jsx)(he, {}),
          ],
        });
      }
    },
  },
]);
