"use strict";


(self.webpackChunkbot = self.webpackChunkbot || []).push([
    ["993"], {
        73799: function(e, t, n) {
            n.r(t), n.d(t, {
                default: () => tk
            });


            var l = n("85893"),
                i = n("67294"),
                o = n("67026"),
                a = n("92198"),
                s = n("89250"),
                r = n("30453"),
                c = n("37979"),
                d = n("2502"),
                u = n("32767"),
                h = n("99402"),
                m = n("99466"),
                g = n("42913"),
                x = n("54458"),
                _ = n("28607"),
                v = n("62269"),
                p = n("56594"),
                j = n("90372"),
                b = n("31619");


            let f = "hideSocialModal",
                w = () => {
                    let [e, t] = (0, i.useState)(!1), [n, o] = (0, i.useState)({});


                    (0, i.useEffect)(() => {
                        if (!localStorage.getItem(f)) {
                            let e = setTimeout(() => {
                                t(!0)
                            }, 2e3);


                            return () => clearTimeout(e)
                        }
                    }, []), (0, i.useEffect)(() => {
                        if (!(0, j.UG)()) return;


                        let e = window.location.hostname;


                        (0, b.E)(e).then(e => {
                            let n = {
                                whatsapp: ((null == e ? void 0 : e.socialWhatsapp) ?? "").toString().trim() || void 0,
                                whatsapp1: ((null == e ? void 0 : e.socialWhatsapp1) ?? "").toString().trim() || void 0,
                                whatsapp2: ((null == e ? void 0 : e.socialWhatsapp2) ?? "").toString().trim() || void 0,
                                whatsapp3: ((null == e ? void 0 : e.socialWhatsapp3) ?? "").toString().trim() || void 0,
                                whatsapp4: ((null == e ? void 0 : e.socialWhatsapp4) ?? "").toString().trim() || void 0,
                                whatsapp5: ((null == e ? void 0 : e.socialWhatsapp5) ?? "").toString().trim() || void 0,
                                whatsapp6: ((null == e ? void 0 : e.socialWhatsapp6) ?? "").toString().trim() || void 0,
                                telegram: ((null == e ? void 0 : e.socialTelegram) ?? "").toString().trim() || void 0,
                                youtube: ((null == e ? void 0 : e.socialYoutube) ?? "").toString().trim() || void 0,
                                tiktok: ((null == e ? void 0 : e.socialTiktok) ?? "").toString().trim() || void 0,
                                instagram: ((null == e ? void 0 : e.socialInstagram) ?? "").toString().trim() || void 0,
                                facebook: ((null == e ? void 0 : e.socialFacebook) ?? "").toString().trim() || void 0
                            };


                            if (!Object.values(n).some(Boolean)) {
                                t(!1);


                                return
                            }
                            o(n)
                        })
                    }, []);


                    let a = () => {
                        t(!1)
                    };


                    return e ? (0, l.jsx)("div", {
                        className: "social-modal-overlay",
                        onClick: a,
                        children: (0, l.jsxs)("div", {
                            className: "social-modal-content",
                            onClick: e => e.stopPropagation(),
                            children: [(0, l.jsx)("button", {
                                className: "social-modal-close-btn",
                                onClick: a,
                                children: (0, l.jsx)(u.bjh, {
                                    size: 24
                                })
                            }), (0, l.jsx)("div", {
                                className: "social-modal-icon",
                                children: (0, l.jsx)(h.Z, {
                                    width: 48,
                                    height: 48
                                })
                            }), (0, l.jsx)("h2", {
                                className: "social-modal-title",
                                children: "Join Our Trading Community"
                            }), (0, l.jsx)("p", {
                                className: "social-modal-subtitle",
                                children: "Connect & Grow Together"
                            }), (0, l.jsx)("p", {
                                className: "social-modal-description",
                                children: "Connect with fellow traders! Share your trading experiences, strategies, and get the latest updates on new features and classes."
                            }), (0, l.jsxs)("div", {
                                className: "social-modal-links",
                                children: [n.whatsapp && (0, l.jsxs)("a", {
                                    href: n.whatsapp,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "social-modal-btn social-btn-whatsapp",
                                    children: [(0, l.jsx)(m.Z, {
                                        width: 24,
                                        height: 24
                                    }), (0, l.jsx)("span", {
                                        children: "Join WhatsApp Channel"
                                    })]
                                }), [1, 2, 3, 4, 5, 6].map(e => {
                                    let t = n[`whatsapp${e}`];


                                    return t ? (0, l.jsxs)("a", {
                                        href: t,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "social-modal-btn social-btn-whatsapp",
                                        children: [(0, l.jsx)(m.Z, {
                                            width: 24,
                                            height: 24
                                        }), (0, l.jsxs)("span", {
                                            children: ["WhatsApp Group ", e]
                                        })]
                                    }, `whatsapp${e}`) : null
                                }), n.telegram && (0, l.jsxs)("a", {
                                    href: n.telegram,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "social-modal-btn social-btn-telegram",
                                    children: [(0, l.jsx)(g.Z, {
                                        width: 24,
                                        height: 24
                                    }), (0, l.jsx)("span", {
                                        children: "Join Telegram Group"
                                    })]
                                }), n.youtube && (0, l.jsxs)("a", {
                                    href: n.youtube,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "social-modal-btn social-btn-youtube",
                                    children: [(0, l.jsx)(x.Z, {
                                        width: 24,
                                        height: 24
                                    }), (0, l.jsx)("span", {
                                        children: "Subscribe on YouTube"
                                    })]
                                }), n.tiktok && (0, l.jsxs)("a", {
                                    href: n.tiktok,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "social-modal-btn social-btn-tiktok",
                                    children: [(0, l.jsx)(_.Z, {
                                        width: 24,
                                        height: 24
                                    }), (0, l.jsx)("span", {
                                        children: "Follow on TikTok"
                                    })]
                                }), n.instagram && (0, l.jsxs)("a", {
                                    href: n.instagram,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "social-modal-btn social-btn-instagram",
                                    children: [(0, l.jsx)(v.Z, {
                                        width: 24,
                                        height: 24
                                    }), (0, l.jsx)("span", {
                                        children: "Follow on Instagram"
                                    })]
                                }), n.facebook && (0, l.jsxs)("a", {
                                    href: n.facebook,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "social-modal-btn social-btn-facebook",
                                    children: [(0, l.jsx)(p.Z, {
                                        width: 24,
                                        height: 24
                                    }), (0, l.jsx)("span", {
                                        children: "Follow on Facebook"
                                    })]
                                })]
                            }), (0, l.jsxs)("div", {
                                className: "social-modal-actions",
                                children: [(0, l.jsx)("button", {
                                    className: "social-modal-action-btn social-btn-dont-show",
                                    onClick: () => {
                                        localStorage.setItem(f, "true"), t(!1)
                                    },
                                    children: "Don't show again"
                                }), (0, l.jsx)("button", {
                                    className: "social-modal-action-btn social-btn-close",
                                    onClick: a,
                                    children: "Close"
                                })]
                            })]
                        })
                    }) : null
                };


            var y = n("89471");


            let C = function() {
                let e = (0, s.TH)(),
                    t = (0, s.s0)();


                return {
                    deleteQueryString: function(n) {
                        let l = new URLSearchParams(e.search);


                        l.delete(n), t({
                            search: l.toString()
                        }, {
                            replace: !0
                        })
                    },
                    queryString: function() {
                        let t = new URLSearchParams(e.search),
                            n = {};


                        return t.forEach((e, t) => {
                            n[t] = e
                        }), n
                    }(),
                    setQueryString: function(n) {
                        ! function(n) {
                            let l = new URLSearchParams(e.search);


                            Object.entries(n).forEach(e => {
                                let [t, n] = e;


                                void 0 === n ? l.delete(t) : l.set(t, n)
                            }), t({
                                search: l.toString()
                            }, {
                                replace: !0
                            })
                        }(n)
                    }
                }
            };



            function N(e) {
                let {
                    deleteQueryString: t,
                    queryString: n,
                    setQueryString: l
                } = C(), {
                    isDesktop: o
                } = (0, d.F)(), [a, s] = (0, y.Sx)(), r = () => {
                    if (!n.modal && s.setAll([]), (null == e ? void 0 : e.shouldReinitializeModals) !== void 0 && !1 === e.shouldReinitializeModals) t("modal");


                    else {
                        let e = n.modal;


                        if (e) {
                            let t = e.split(","),
                                n = t.slice(-1)[0];


                            s.setAll([]), t.forEach(e => {
                                s.set(e, !o)
                            }), s.set(n, !0)
                        }
                    }
                };


                return (0, i.useEffect)(() => {
                    r()
                }, []), (0, i.useEffect)(() => {
                    !(null == n ? void 0 : n.modal) && s.reset()
                }, [null == n ? void 0 : n.modal]), (0, y.OR)("popstate", () => {
                    r()
                }), {
                    hideModal: e => {
                        let i = n.modal;


                        if (i) {
                            let n = i.split(",");


                            if (null == e ? void 0 : e.shouldHideAllModals) a.forEach((e, n) => {
                                s.set(n, !1), t("modal")
                            });


                            else if (null == e ? void 0 : e.shouldHidePreviousModals) {
                                if (n.length > 1) {
                                    let e = n.shift();


                                    n.forEach(e => {
                                        s.set(e, !1)
                                    }), n = [e ?? ""], l({
                                        modal: e
                                    })
                                } else 1 === n.length ? l({
                                    modal: n[0]
                                }) : t("modal")
                            } else {
                                let e = n.pop(),
                                    i = n.slice(-1)[0];


                                i ? (s.set(e, !1), s.set(i, !0)) : s.set(e, !1), 0 === n.length ? t("modal") : l({
                                    modal: n.join(",")
                                })
                            }
                        }
                    },
                    isModalOpenFor: e => a.get(e) || !1,
                    showModal: (e, t) => {
                        let i = n.modal;


                        if (i) {
                            let n = i.split(","),
                                a = n.slice(-1)[0];


                            if (a === e) return;


                            (null == t ? void 0 : t.shouldStackModals) === !1 ? s.set(a, !1) : s.set(a, (null == t ? void 0 : t.shouldStackModals) || !o), s.set(e, !0), n.push(e), l({
                                modal: (null == t ? void 0 : t.shouldClearPreviousModals) ? e : n.join(",")
                            })
                        } else s.set(e, !0), l({
                            modal: e
                        })
                    }
                }
            }
            let k = () => {
                let e = localStorage.getItem("active_tab"),
                    t = ["dashboard", "bot_builder", "chart", "tutorial"],
                    n = t[Number(e)],
                    l = window.location.href.split("#")[0];


                return `${l}#${n}`
            };


            var I = n("32305"),
                Z = n("96223"),
                S = n("3693"),
                L = n("98146"),
                z = n("64410"),
                E = n("918"),
                T = n("50051"),
                F = n("16496"),
                M = n("59001"),
                A = n("57218"),
                P = n("12811"),
                R = n("28505"),
                D = n("73971"),
                O = n("99243"),
                U = n("63066"),
                H = n("96396"),
                B = n("14249"),
                $ = n("45322"),
                V = n("34273"),
                X = n("473");


            let q = [{
                code: "EN",
                displayName: "English",
                icon: (0, l.jsx)(I.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(I.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(I.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "AR",
                displayName: "العربية",
                icon: (0, l.jsx)(Z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(Z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(Z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "BN",
                displayName: "বাংলা",
                icon: (0, l.jsx)(S.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(S.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(S.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "DE",
                displayName: "Deutsch",
                icon: (0, l.jsx)(L.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(L.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(L.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ES",
                displayName: "Espa\xf1ol",
                icon: (0, l.jsx)(z.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(z.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(z.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "FR",
                displayName: "Fran\xe7ais",
                icon: (0, l.jsx)(E.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(E.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(E.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "IT",
                displayName: "Italiano",
                icon: (0, l.jsx)(T.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(T.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(T.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SW",
                displayName: "Kiswahili",
                icon: (0, l.jsx)(F.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(F.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(F.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KM",
                displayName: "ខ្មែរ",
                icon: (0, l.jsx)(M.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(M.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(M.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "KO",
                displayName: "한국어",
                icon: (0, l.jsx)(A.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(A.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(A.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PL",
                displayName: "Polish",
                icon: (0, l.jsx)(P.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(P.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(P.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "PT",
                displayName: "Portugu\xeas",
                icon: (0, l.jsx)(R.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(R.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(R.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "RU",
                displayName: "Русский",
                icon: (0, l.jsx)(D.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(D.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(D.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "SI",
                displayName: "සිංහල",
                icon: (0, l.jsx)(O.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(O.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(O.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TH",
                displayName: "ไทย",
                icon: (0, l.jsx)(U.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(U.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(U.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "TR",
                displayName: "T\xfcrk\xe7e",
                icon: (0, l.jsx)(H.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(H.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(H.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "UZ",
                displayName: "O'zbek",
                icon: (0, l.jsx)(B.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(B.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(B.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "VI",
                displayName: "Tiếng Việt",
                icon: (0, l.jsx)($.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)($.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)($.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_CN",
                displayName: "简体中文",
                icon: (0, l.jsx)(V.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(V.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(V.Z, {
                    height: 14.67,
                    width: 22
                })
            }, {
                code: "ZH_TW",
                displayName: "繁體中文",
                icon: (0, l.jsx)(X.Z, {
                    height: 24,
                    width: 36
                }),
                placeholderIcon: (0, l.jsx)(X.Z, {
                    height: 12,
                    width: 18
                }),
                placeholderIconInMobile: (0, l.jsx)(X.Z, {
                    height: 14.67,
                    width: 22
                })
            }];


            var W = n("48059"),
                G = n("44412"),
                J = n("96877"),
                K = n("83257"),
                Y = n("53261"),
                Q = n("21456"),
                ee = n("64915");


            let et = (0, J.Pi)(() => {
                let {
                    is_dark_mode_on: e,
                    toggleTheme: t
                } = (0, K.Z)(), {
                    localize: n
                } = (0, W.T_)();


                return (0, l.jsx)(ee.u, {
                    as: "button",
                    className: "app-footer__icon",
                    tooltipContent: n("Change theme"),
                    onClick: t,
                    children: e ? (0, l.jsx)(Q.Z, {
                        iconSize: "xs"
                    }) : (0, l.jsx)(Y.Z, {
                        iconSize: "xs"
                    })
                })
            });


            var en = n("79655"),
                el = n("27334"),
                ei = n("45452"),
                eo = n("12838");


            let ea = () => {
                    let e = eo.fV.getValue(eo.sE.configServerURL);


                    return e ? (0, l.jsxs)(ei.Z, {
                        className: "app-footer__endpoint",
                        color: "red",
                        size: "s",
                        children: ["The server", " ", (0, l.jsx)(en.rU, {
                            className: "app-footer__endpoint-text",
                            to: el.xOw.endpoint,
                            children: "endpoint"
                        }), " ", `is: ${e}`]
                    }) : null
                },
                es = {
                    exit: ["exitFullscreen", "webkitExitFullscreen", "mozCancelFullScreen", "msExitFullscreen"],
                    request: ["requestFullscreen", "webkitRequestFullscreen", "mozRequestFullScreen", "msRequestFullscreen"],
                    screenChange: ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"],
                    screenElement: ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"]
                },
                er = () => {
                    let [e, t] = (0, i.useState)(!1), {
                        exit: n,
                        request: l,
                        screenChange: o,
                        screenElement: a
                    } = es, s = (0, i.useCallback)(() => t(a.some(e => document[e])), [a]);


                    return (0, i.useEffect)(() => (o.forEach(e => {
                        document.addEventListener(e, s, !1)
                    }), () => {
                        o.forEach(e => {
                            document.removeEventListener(e, s, !1)
                        })
                    }), [s, o]), {
                        toggleFullScreenMode: i => {
                            null == i || i.stopPropagation();


                            let o = n.find(e => document[e]),
                                a = l.find(e => document.documentElement[e]);


                            e && o ? document[o]() : a ? document.documentElement[a]() : t(!1)
                        }
                    }
                };


            var ec = n("69914");


            let ed = () => {
                    let {
                        toggleFullScreenMode: e
                    } = er(), {
                        localize: t
                    } = (0, W.T_)();


                    return (0, l.jsx)(ee.u, {
                        as: "button",
                        className: "app-footer__icon",
                        onClick: e,
                        tooltipContent: t("Full screen"),
                        children: (0, l.jsx)(ec.Z, {
                            iconSize: "xs"
                        })
                    })
                },
                eu = e => {
                    let {
                        openLanguageSettingModal: t
                    } = e, {
                        currentLang: n,
                        localize: o
                    } = (0, W.T_)(), a = (0, i.useMemo)(() => {
                        var e;


                        return null === (e = q.find(e => {
                            let {
                                code: t
                            } = e;


                            return t == n
                        })) || void 0 === e ? void 0 : e.placeholderIcon
                    }, [n]);


                    return (0, l.jsxs)(ee.u, {
                        as: "button",
                        className: "app-footer__language",
                        onClick: t,
                        tooltipContent: o("Language"),
                        children: [a, (0, l.jsx)(ei.Z, {
                            size: "xs",
                            weight: "bold",
                            children: n
                        })]
                    })
                },
                eh = () => "undefined" == typeof navigator || "boolean" != typeof navigator.onLine || navigator.onLine,
                em = () => {
                    let [e, t] = (0, i.useState)(eh()), n = () => t(!0), l = () => t(!1);


                    return (0, i.useEffect)(() => (window.addEventListener("online", n), window.addEventListener("offline", l), () => {
                        window.removeEventListener("online", n), window.removeEventListener("offline", l)
                    }), []), e
                },
                eg = () => {
                    let [e, t] = (0, i.useState)("online"), n = em();


                    return (0, i.useEffect)(() => {
                        n ? t("online") : t("offline")
                    }, [n]), e
                },
                ex = () => ({
                    blinking: {
                        className: "app-footer__network-status-online app-footer__network-status-blinking",
                        tooltip: (0, W.NC)("Connecting to server")
                    },
                    offline: {
                        className: "app-footer__network-status-offline",
                        tooltip: "Offline"
                    },
                    online: {
                        className: "app-footer__network-status-online",
                        tooltip: "Online"
                    }
                }),
                e_ = () => {
                    let e = eg(),
                        {
                            className: t,
                            tooltip: n
                        } = (0, i.useMemo)(() => ex()[e], [e]);


                    return (0, l.jsx)(ee.u, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_network_status",
                        tooltipContent: (0, W.NC)("Network status: {{status}}", {
                            status: n
                        }),
                        children: (0, l.jsx)("div", {
                            className: (0, o.Z)("app-footer__network-status", t),
                            "data-testid": "dt_circle"
                        })
                    })
                };


            var ev = n("30381"),
                ep = n.n(ev),
                ej = n("75545"),
                eb = n("27179"),
                ef = n("83606");


            let ew = (0, J.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, d.F)(), {
                        common: t
                    } = (0, ej.oR)() ?? {
                        common: {
                            server_time: ep()()
                        }
                    };


                    return (0, l.jsx)(ee.u, {
                        as: "div",
                        className: "app-footer__icon",
                        "data-testid": "dt_server_time",
                        tooltipContent: t.server_time.format(eb.kT),
                        children: (0, l.jsx)(ef.x, {
                            size: e ? "xs" : "sm",
                            children: t.server_time.format(eb.Yp)
                        })
                    })
                }),
                ey = () => {
                    let {
                        currentLang: e = "EN",
                        localize: t,
                        switchLanguage: n
                    } = (0, W.T_)(), {
                        hideModal: i,
                        isModalOpenFor: o,
                        showModal: a
                    } = N();


                    return (0, l.jsxs)("footer", {
                        className: "app-footer",
                        children: [(0, l.jsx)(ed, {}), (0, l.jsx)(eu, {
                            openLanguageSettingModal: () => a("DesktopLanguagesModal")
                        }), (0, l.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, l.jsx)(et, {}), (0, l.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, l.jsx)(ew, {}), (0, l.jsx)("div", {
                            className: "app-footer__vertical-line"
                        }), (0, l.jsx)(e_, {}), (0, l.jsx)(ea, {}), o("DesktopLanguagesModal") && (0, l.jsx)(G.u, {
                            headerTitle: t("Select Language"),
                            isModalOpen: !0,
                            languages: q,
                            onClose: i,
                            onLanguageSwitch: e => {
                                n(e), i(), window.location.replace(k()), window.location.reload()
                            },
                            selectedLanguage: e
                        })]
                    })
                };


            var eC = n("8015");


            let eN = {
                    aud: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAudIcon
                    }))),
                    bch: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBchIcon
                    }))),
                    btc: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBtcIcon
                    }))),
                    busd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBusdIcon
                    }))),
                    dai: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDaiIcon
                    }))),
                    eth: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEthIcon
                    }))),
                    eur: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    "eur-check": (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEurIcon
                    }))),
                    eurs: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEursIcon
                    }))),
                    eusdt: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    gbp: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyGbpIcon
                    }))),
                    idk: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyIdkIcon
                    }))),
                    ltc: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyLtcIcon
                    }))),
                    pax: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyPaxIcon
                    }))),
                    tusd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTusdIcon
                    }))),
                    tusdt: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    unknown: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyPlaceholderIcon
                    }))),
                    usd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdIcon
                    }))),
                    usdc: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdcIcon
                    }))),
                    usdk: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdkIcon
                    }))),
                    ust: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUsdtIcon
                    }))),
                    virtual: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDemoIcon
                    }))),
                    xrp: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXrpIcon
                    }))),
                    algo: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAlgoIcon
                    }))),
                    avax: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyAvaxIcon
                    }))),
                    bat: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBatIcon
                    }))),
                    bnb: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyBnbIcon
                    }))),
                    dash: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDashIcon
                    }))),
                    doge: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDogeIcon
                    }))),
                    dot: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyDotIcon
                    }))),
                    eos: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEosIcon
                    }))),
                    etc: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyEtcIcon
                    }))),
                    fil: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyFilIcon
                    }))),
                    iota: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyIotaIcon
                    }))),
                    link: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyLinkIcon
                    }))),
                    matic: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMaticIcon
                    }))),
                    mkr: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMkrIcon
                    }))),
                    mcd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyMultiCollateralDaiIcon
                    }))),
                    neo: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyNeoIcon
                    }))),
                    none: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyNoneIcon
                    }))),
                    omg: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyOmgIcon
                    }))),
                    p2p: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyP2PIcon
                    }))),
                    scd: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencySingleCollateralDaiIcon
                    }))),
                    sol: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencySolIcon
                    }))),
                    terra: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTerraIcon
                    }))),
                    trx: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyTrxIcon
                    }))),
                    uni: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyUniIcon
                    }))),
                    xlm: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXlmIcon
                    }))),
                    xmr: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXmrIcon
                    }))),
                    xtz: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyXtzIcon
                    }))),
                    zec: (0, i.lazy)(() => n.e("609").then(n.bind(n, 19673)).then(e => ({
                        default: e.CurrencyZecIcon
                    })))
                },
                ek = e => {
                    let {
                        currency: t,
                        isVirtual: n
                    } = e, o = n ? eN.virtual : eN[null == t ? void 0 : t.toLowerCase()] || eN.unknown;


                    return (0, l.jsx)(i.Suspense, {
                        fallback: null,
                        children: (0, l.jsx)(o, {
                            iconSize: "sm"
                        })
                    })
                };


            var eI = n("79649"),
                eZ = n("76546");


            let eS = e => {
                var t, n;


                let {
                    allBalanceData: o
                } = e, {
                    accountList: a,
                    activeLoginid: s
                } = (0, eI.T)(), r = (0, ej.oR)(), c = (null == r ? void 0 : null === (t = r.ui) || void 0 === t ? void 0 : t.is_ksh_currency_enabled) ?? !1, d = (0, i.useMemo)(() => null == a ? void 0 : a.find(e => e.loginid === s), [s, a]), u = null == o ? void 0 : null === (n = o.accounts) || void 0 === n ? void 0 : n[(null == d ? void 0 : d.loginid) ?? ""];


                return {
                    data: (0, i.useMemo)(() => {
                        var e;


                        let t = (null == u ? void 0 : u.balance) ?? 0,
                            n = c ? `KSH ${(t*eZ.z).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}` : (0, el.oC5)(null == t ? void 0 : t.toFixed((0, el.i4S)(null == u ? void 0 : u.currency))) ?? "0";


                        return d ? { ...d,
                            balance: n,
                            currency: c ? "" : null == d ? void 0 : d.currency,
                            currencyLabel: (null == d ? void 0 : d.is_virtual) ? (0, W.NC)("Demo") : c ? "" : null == d ? void 0 : d.currency,
                            icon: (0, l.jsx)(ek, {
                                currency: null == d ? void 0 : null === (e = d.currency) || void 0 === e ? void 0 : e.toLowerCase(),
                                isVirtual: !!(null == d ? void 0 : d.is_virtual)
                            }),
                            isVirtual: !!(null == d ? void 0 : d.is_virtual),
                            isActive: (null == d ? void 0 : d.loginid) === s
                        } : void 0
                    }, [d, s, o, c])
                }
            };


            var eL = n("77898"),
                ez = n("16857");


            let eE = () => {
                    let [e, t] = i.useState(null);


                    i.useEffect(() => {
                        if (!(0, j.UG)()) return;


                        let e = window.location.hostname;


                        (0, b.E)(e).then(e => t(e))
                    }, []);


                    let n = ((null == e ? void 0 : e.logoUrl) || "").toString().trim() || void 0,
                        o = ((null == e ? void 0 : e.brandName) || "").toString().trim() || "Deriv";


                    return (0, l.jsx)("div", {
                        className: "d-apollo-logo",
                        children: (0, l.jsxs)("div", {
                            className: "logo-holder",
                            children: [n && (0, l.jsx)("img", {
                                src: n,
                                alt: "custom Logo",
                                className: "d-apollo-logo__image"
                            }), (0, l.jsx)(ei.Z, {
                                color: "less-prominent",
                                lineHeight: "xs",
                                size: "xs",
                                weight: "bold",
                                align: "center",
                                className: "dc-contract-card-message",
                                children: o
                            })]
                        })
                    })
                },
                eT = () => {
                    let {
                        isDesktop: e
                    } = (0, d.F)();


                    return e ? (0, l.jsx)(eE, {}) : null
                };


            var eF = n("24561");


            let eM = e => {
                    let {
                        isMobile: t
                    } = e;


                    return (0, l.jsx)(l.Fragment, {
                        children: t ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "13"
                            }), (0, l.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "35",
                                y: "19"
                            }), (0, l.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "120",
                                y: "6"
                            })]
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)("circle", {
                                cx: "14",
                                cy: "22",
                                r: "12"
                            }), (0, l.jsx)("circle", {
                                cx: "58",
                                cy: "22",
                                r: "12"
                            }), (0, l.jsx)("rect", {
                                height: "7",
                                rx: "4",
                                ry: "4",
                                width: "76",
                                x: "150",
                                y: "20"
                            }), (0, l.jsx)("circle", {
                                cx: "118",
                                cy: "24",
                                r: "13"
                            }), (0, l.jsx)("rect", {
                                height: "30",
                                rx: "4",
                                ry: "4",
                                width: "1",
                                x: "87",
                                y: "8"
                            }), (0, l.jsx)("rect", {
                                height: "32",
                                rx: "4",
                                ry: "4",
                                width: "82",
                                x: "250",
                                y: "8"
                            })]
                        })
                    })
                },
                eA = e => {
                    let {
                        isMobile: t,
                        speed: n
                    } = e;


                    return (0, l.jsx)(eF.ZP, {
                        "data-testid": "dt_accounts_info_loader",
                        height: t ? 42 : 46,
                        speed: n,
                        width: t ? 216 : 350,
                        backgroundColor: "var(--general-section-1)",
                        foregroundColor: "var(--general-hover)",
                        children: (0, l.jsx)(eM, {
                            isMobile: t
                        })
                    })
                };


            var eP = n("30394"),
                eR = n("88199"),
                eD = n("42457"),
                eO = n("33281"),
                eU = n("47342"),
                eH = n("63387"),
                eB = n.n(eH);


            let e$ = e => {
                let {
                    width: t,
                    height: n
                } = e;


                return (0, l.jsx)("div", {
                    className: "skeleton",
                    style: {
                        width: t,
                        height: n
                    }
                })
            };


            var eV = n("44884"),
                eX = n("37410"),
                eq = n("37528");


            let eW = {
                    currency: " ",
                    currencyLabel: "Options & Multipliers",
                    is_virtual: 1,
                    loginid: "",
                    is_disabled: !1,
                    balance: "",
                    icon: (0, l.jsx)(eX.Z, {
                        width: 24,
                        height: 24
                    }),
                    isActive: !1,
                    isVirtual: !0
                },
                eG = e => Number(e.replace(/,/g, "")),
                eJ = () => (0, l.jsx)(eq.i, {
                    color: "var(--general-section-2)",
                    height: "4px"
                }),
                eK = e => {
                    let {
                        oAuthLogout: t,
                        loginid: n,
                        is_logging_out: i
                    } = e, o = (null == n ? void 0 : n.includes("CR")) || (null == n ? void 0 : n.includes("MF"));


                    return (0, l.jsxs)("div", {
                        className: "",
                        children: [(0, l.jsx)(eU.T.TradersHubLink, {
                            href: el.xOw.traders_hub,
                            children: (0, W.NC)("Looking for CFD accounts? Go to Trader's Hub")
                        }), (0, l.jsx)(eJ, {}), (0, l.jsxs)("div", {
                            className: eB()("account-switcher-footer__actions", {
                                "account-switcher-footer__actions--hide-manage-button": !o
                            }),
                            children: [o && (0, l.jsx)(eC.Z, {
                                id: "manage-button",
                                className: "manage-button",
                                onClick: () => location.replace("https://app.deriv.com"),
                                children: (0, l.jsx)(W.Xx, {
                                    i18n_default_text: "Manage accounts"
                                })
                            }), (0, l.jsx)(eU.T.Footer, {
                                children: i ? (0, l.jsx)("div", {
                                    className: "deriv-account-switcher__logout--loader",
                                    children: (0, l.jsx)(e$, {
                                        width: "120px",
                                        height: "12px"
                                    })
                                }) : (0, l.jsxs)("div", {
                                    id: "dt_logout_button",
                                    className: "deriv-account-switcher__logout",
                                    onClick: t,
                                    children: [(0, l.jsx)(ei.Z, {
                                        color: "prominent",
                                        size: "xs",
                                        align: "left",
                                        className: "deriv-account-switcher__logout-text",
                                        children: (0, W.NC)("Logout")
                                    }), (0, l.jsx)(eV.Z, {
                                        iconSize: "xs",
                                        fill: "var(--text-general)",
                                        className: "icon-general-fill-path"
                                    })]
                                })
                            })]
                        })]
                    })
                },
                eY = e => {
                    let {
                        tabs_labels: t,
                        modifiedVRTCRAccountList: n,
                        switchAccount: i,
                        isVirtual: a,
                        activeLoginId: s,
                        oAuthLogout: r,
                        is_logging_out: c
                    } = e;


                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)(eU.T.AccountsPanel, {
                            isOpen: !0,
                            title: (0, W.NC)("Deriv account"),
                            className: "account-switcher-panel",
                            children: n && n.map(e => (0, l.jsx)("span", {
                                className: (0, o.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, l.jsx)(eU.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && i(e.loginid)
                                    },
                                    onResetBalance: a && s === e.loginid && 1e4 !== eG(e.balance) ? () => {
                                        var e;


                                        null === eR.api_base || void 0 === eR.api_base || null === (e = eR.api_base.api) || void 0 === e || e.send({
                                            topup_virtual: 1
                                        })
                                    } : void 0
                                })
                            }, e.loginid))
                        }, t.demo.toLowerCase()), (0, l.jsx)(eJ, {}), (0, l.jsx)(eK, {
                            loginid: s,
                            oAuthLogout: r,
                            is_logging_out: c
                        })]
                    })
                },
                eQ = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: n,
                        modifiedMFAccountList: i,
                        switchAccount: a,
                        is_low_risk_country: s
                    } = e, r = (null == i ? void 0 : i.length) !== 0 && s ? (0, W.NC)("Eu Deriv accounts") : (0, W.NC)("Deriv accounts");


                    return (0, l.jsx)(eU.T.AccountsPanel, {
                        isOpen: !0,
                        title: r,
                        className: "account-switcher-panel",
                        children: i.map(e => (e.currencyLabel = (0, W.NC)("Multipliers"), (0, l.jsx)("span", {
                            className: (0, o.Z)("account-switcher__item", {
                                "account-switcher__item--disabled": e.is_disabled
                            }),
                            children: (0, l.jsx)(eU.T.AccountsItem, {
                                account: e,
                                onSelectAccount: () => {
                                    !e.is_disabled && a(e.loginid)
                                }
                            })
                        }, e.loginid)))
                    }, t ? n.real.toLowerCase() : n.demo.toLowerCase())
                };


            var e0 = n("11527");


            let e1 = e => {
                    var t, n;


                    let {
                        isVirtual: i,
                        tabs_labels: o,
                        is_low_risk_country: a
                    } = e;


                    return a ? (0, l.jsx)(eU.T.AccountsPanel, {
                        isOpen: !0,
                        title: (0, W.NC)("Non-Eu Deriv account"),
                        className: "account-switcher-panel",
                        children: (0, l.jsxs)("div", {
                            className: "account-switcher-panel__no-eu-accounts",
                            children: [(0, l.jsx)(eU.T.AccountsItem, {
                                account: eW,
                                onSelectAccount: () => {}
                            }), (0, l.jsx)(eJ, {}), (0, l.jsx)(e0.z, {
                                id: "add-button",
                                className: "add-button",
                                onClick: () => location.replace(el.xOw.traders_hub),
                                children: (0, l.jsx)(W.Xx, {
                                    i18n_default_text: "Add"
                                })
                            })]
                        })
                    }, i ? null == o ? void 0 : null === (n = o.real) || void 0 === n ? void 0 : n.toLowerCase() : null == o ? void 0 : null === (t = o.demo) || void 0 === t ? void 0 : t.toLowerCase()) : null
                },
                e6 = e => {
                    let {
                        isVirtual: t,
                        tabs_labels: n,
                        modifiedCRAccountList: i,
                        modifiedMFAccountList: a,
                        is_low_risk_country: s,
                        switchAccount: r
                    } = e;


                    if (!s && i && (null == i ? void 0 : i.length) === 0) return null;


                    let c = (null == a ? void 0 : a.length) === 0 ? (0, W.NC)("Deriv accounts") : (0, W.NC)("Non-Eu Deriv account");


                    return (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(eU.T.AccountsPanel, {
                            isOpen: !0,
                            title: c,
                            className: "account-switcher-panel",
                            style: {
                                maxHeight: "220px"
                            },
                            children: i.map(e => (0, l.jsx)("span", {
                                className: (0, o.Z)("account-switcher__item", {
                                    "account-switcher__item--disabled": e.is_disabled
                                }),
                                children: (0, l.jsx)(eU.T.AccountsItem, {
                                    account: e,
                                    onSelectAccount: () => {
                                        !e.is_disabled && r(e.loginid)
                                    }
                                })
                            }, e.loginid))
                        }, t ? null == n ? void 0 : n.real.toLowerCase() : n.demo.toLowerCase())
                    })
                },
                e2 = e => {
                    let {
                        modifiedCRAccountList: t,
                        modifiedMFAccountList: n,
                        switchAccount: i,
                        isVirtual: o,
                        tabs_labels: a,
                        is_low_risk_country: s,
                        oAuthLogout: r,
                        loginid: c,
                        is_logging_out: d
                    } = e, u = t && (null == t ? void 0 : t.length) > 0, h = n && (null == n ? void 0 : n.length) > 0;


                    return (0, l.jsxs)(l.Fragment, {
                        children: [u ? (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(e6, {
                                modifiedCRAccountList: t,
                                modifiedMFAccountList: n,
                                switchAccount: i,
                                isVirtual: o,
                                tabs_labels: a,
                                is_low_risk_country: s
                            }), (0, l.jsx)(eJ, {})]
                        }) : (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(e1, {
                                is_low_risk_country: s,
                                isVirtual: o,
                                tabs_labels: a
                            }), (0, l.jsx)(eJ, {})]
                        }), h && (0, l.jsxs)(l.Fragment, {
                            children: [(0, l.jsx)(eQ, {
                                modifiedMFAccountList: n,
                                switchAccount: i,
                                isVirtual: o,
                                tabs_labels: a,
                                is_low_risk_country: s
                            }), (0, l.jsx)(eJ, {})]
                        }), (0, l.jsx)(eK, {
                            oAuthLogout: r,
                            loginid: c,
                            is_logging_out: d
                        })]
                    })
                };


            var e9 = n("17481");


            let e3 = (0, i.lazy)(() => n.e("932").then(n.bind(n, 67568))),
                e4 = {
                    demo: (0, W.NC)("Demo"),
                    real: (0, W.NC)("Real")
                },
                e7 = e => {
                    var t;


                    let {
                        isVirtual: n,
                        modifiedCRAccountList: o,
                        modifiedMFAccountList: a,
                        modifiedVRTCRAccountList: s,
                        switchAccount: c,
                        activeLoginId: d,
                        client: u
                    } = e, {
                        oAuthLogout: h
                    } = (0, r.q)({
                        handleLogout: async () => u.logout(),
                        client: u
                    }), m = (0, e9.Gz)().includes((null === (t = u.account_settings) || void 0 === t ? void 0 : t.country_code) ?? ""), g = !!n;


                    return ((0, i.useEffect)(() => {
                        var e, t;


                        let l = null === (e = document.getElementsByClassName("account-switcher-panel")) || void 0 === e ? void 0 : e[0];


                        !n && l && (l.style.maxHeight = "70vh", null === (t = (0, eD._)(".deriv-accordion__content", l)) || void 0 === t || t.then(e => {
                            e && (e.style.maxHeight = "70vh")
                        }))
                    }, [n]), g) ? (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsx)(eY, {
                            modifiedVRTCRAccountList: s,
                            switchAccount: c,
                            activeLoginId: d,
                            isVirtual: g,
                            tabs_labels: e4,
                            oAuthLogout: h,
                            is_logging_out: u.is_logging_out
                        })
                    }) : (0, l.jsx)(e2, {
                        modifiedCRAccountList: o,
                        modifiedMFAccountList: a,
                        switchAccount: c,
                        isVirtual: g,
                        tabs_labels: e4,
                        is_low_risk_country: m,
                        oAuthLogout: h,
                        loginid: d,
                        is_logging_out: u.is_logging_out
                    })
                },
                e8 = (0, J.Pi)(e => {
                    var t, n;


                    let {
                        activeAccount: o
                    } = e, {
                        isDesktop: a
                    } = (0, d.F)(), {
                        accountList: s
                    } = (0, eI.T)(), {
                        ui: r,
                        run_panel: c,
                        client: u
                    } = (0, ej.oR)(), {
                        accounts: h
                    } = u, {
                        toggleAccountsDialog: m,
                        is_accounts_switcher_on: g,
                        account_switcher_disabled_message: x,
                        is_ksh_currency_enabled: _,
                        toggleKshCurrency: v
                    } = r, {
                        is_stop_button_visible: p
                    } = c, j = Object.keys(h).some(e => "wallet" === h[e].account_category), [b, f] = (0, i.useState)(!1), w = localStorage.getItem("active_loginid");


                    (0, i.useEffect)(() => {
                        f("true" === localStorage.getItem("is_api_token_login"))
                    }, [s]);


                    let y = (0, i.useMemo)(() => {
                            let e = s;


                            return b && w && (e = null == s ? void 0 : s.filter(e => (null == e ? void 0 : e.loginid) === w)), null == e ? void 0 : e.map(e => {
                                var t, n, i, a, s, r, c;


                                let d = (null === (i = u.all_accounts_balance) || void 0 === i ? void 0 : null === (n = i.accounts) || void 0 === n ? void 0 : null === (t = n[null == e ? void 0 : e.loginid]) || void 0 === t ? void 0 : t.balance) ?? 0,
                                    h = _ ? `KSH ${(d*eZ.z).toLocaleString("en-US",{minimumFractionDigits:2,maximumFractionDigits:2})}` : (0, el.oC5)((null == d ? void 0 : d.toFixed((0, el.i4S)(e.currency))) ?? "0");


                                return { ...e,
                                    balance: h,
                                    currency: _ ? "" : null == e ? void 0 : e.currency,
                                    currencyLabel: (null == e ? void 0 : e.is_virtual) ? e4.demo : _ ? "" : (null === (r = u.website_status) || void 0 === r ? void 0 : null === (s = r.currencies_config) || void 0 === s ? void 0 : null === (a = s[null == e ? void 0 : e.currency]) || void 0 === a ? void 0 : a.name) ?? (null == e ? void 0 : e.currency),
                                    icon: (0, l.jsx)(ek, {
                                        currency: null == e ? void 0 : null === (c = e.currency) || void 0 === c ? void 0 : c.toLowerCase(),
                                        isVirtual: !!(null == e ? void 0 : e.is_virtual)
                                    }),
                                    isVirtual: !!(null == e ? void 0 : e.is_virtual),
                                    isActive: (null == e ? void 0 : e.loginid) === (null == o ? void 0 : o.loginid)
                                }
                            })
                        }, [s, null === (t = u.all_accounts_balance) || void 0 === t ? void 0 : t.accounts, null === (n = u.website_status) || void 0 === n ? void 0 : n.currencies_config, null == o ? void 0 : o.loginid, _, b, w]),
                        C = (0, i.useMemo)(() => (null == y ? void 0 : y.filter(e => {
                            var t;


                            return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("CR")
                        })) ?? [], [y]),
                        N = (0, i.useMemo)(() => (null == y ? void 0 : y.filter(e => {
                            var t;


                            return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("MF")
                        })) ?? [], [y]),
                        k = (0, i.useMemo)(() => (null == y ? void 0 : y.filter(e => {
                            var t;


                            return null == e ? void 0 : null === (t = e.loginid) || void 0 === t ? void 0 : t.includes("VRT")
                        })) ?? [], [y]),
                        I = async e => {
                            if (e.toString() === (null == o ? void 0 : o.loginid)) return;


                            let t = JSON.parse(localStorage.getItem("accountsList") ?? "{}")[e];


                            if (!t) return;


                            localStorage.setItem("authToken", t), localStorage.setItem("active_loginid", e.toString()), await (null === eR.api_base || void 0 === eR.api_base ? void 0 : eR.api_base.init(!0));


                            let n = new URLSearchParams(window.location.search),
                                l = y.find(t => t.loginid === e.toString());


                            if (!l) return;


                            let i = l.is_virtual ? "demo" : l.currency;


                            n.set("account", i), window.history.pushState({}, "", `${window.location.pathname}?${n.toString()}`)
                        };


                    return o && (j ? (0, l.jsx)(i.Suspense, {
                        fallback: (0, l.jsx)(eO.a, {}),
                        children: (0, l.jsx)(e3, {
                            is_dialog_on: g,
                            toggleDialog: m
                        })
                    }) : (0, l.jsxs)("div", {
                        className: "account-switcher-wrapper",
                        children: [(0, l.jsxs)("div", {
                            className: "currency-switch-buttons",
                            children: [(0, l.jsx)("button", {
                                className: `currency-switch-btn ${_?"":"currency-switch-btn--active"}`,
                                onClick: () => _ && v(),
                                children: "USD"
                            }), (0, l.jsx)("button", {
                                className: `currency-switch-btn ${_?"currency-switch-btn--active":""}`,
                                onClick: () => !_ && v(),
                                children: "KSH"
                            })]
                        }), (0, l.jsx)(eP.Z, {
                            className: "run-panel__info",
                            classNameBubble: "run-panel__info--bubble",
                            alignment: "bottom",
                            message: x,
                            zIndex: "5",
                            children: (0, l.jsxs)(eU.T, {
                                activeAccount: o,
                                isDisabled: p,
                                tabsLabels: e4,
                                modalContentStyle: {
                                    content: {
                                        top: a ? "30%" : "50%",
                                        borderRadius: "10px"
                                    }
                                },
                                children: [(0, l.jsx)(eU.T.Tab, {
                                    title: e4.real,
                                    children: (0, l.jsx)(e7, {
                                        modifiedCRAccountList: C,
                                        modifiedMFAccountList: N,
                                        switchAccount: I,
                                        activeLoginId: null == o ? void 0 : o.loginid,
                                        client: u
                                    })
                                }), (0, l.jsx)(eU.T.Tab, {
                                    title: e4.demo,
                                    children: (0, l.jsx)(e7, {
                                        modifiedVRTCRAccountList: k,
                                        switchAccount: I,
                                        isVirtual: !0,
                                        activeLoginId: null == o ? void 0 : o.loginid,
                                        client: u
                                    })
                                })]
                            })
                        })]
                    }))
                });


            var e5 = n("57801"),
                te = n("31784"),
                tt = n("87383");


            let tn = (0, J.Pi)(e => {
                let {
                    is_open: t,
                    onClose: n
                } = e, [o, s] = (0, i.useState)(""), [r, c] = (0, i.useState)(!1), [d, u] = (0, i.useState)(""), h = async () => {
                    if (!o.trim()) {
                        u((0, W.NC)("Please enter your API token"));


                        return
                    }
                    c(!0), u("");


                    try {
                        let n = (0, tt.wL)("116974");


                        await new Promise((e, t) => {
                            let l = setTimeout(() => {
                                t(Error("Connection timeout"))
                            }, 1e4);


                            1 === n.connection.readyState ? (clearTimeout(l), e()) : (n.connection.addEventListener("open", () => {
                                clearTimeout(l), e()
                            }), n.connection.addEventListener("error", () => {
                                clearTimeout(l), t(Error("Connection failed"))
                            }))
                        });


                        let {
                            authorize: l,
                            error: i
                        } = await n.authorize(o.trim());


                        if (i) {
                            u(i.message || (0, W.NC)("Invalid API token")), n.disconnect(), c(!1);


                            return
                        }
                        if (l) {
                            var e, t;


                            let i = {},
                                s = {};


                            null === (e = l.account_list) || void 0 === e || e.forEach(e => {
                                i[e.loginid] = o.trim(), s[e.loginid] = {
                                    loginid: e.loginid,
                                    token: o.trim(),
                                    currency: e.currency || "",
                                    is_virtual: e.is_virtual
                                }
                            }), localStorage.setItem("accountsList", JSON.stringify(i)), localStorage.setItem("clientAccounts", JSON.stringify(s)), localStorage.setItem("authToken", o.trim()), localStorage.setItem("active_loginid", l.loginid), localStorage.setItem("is_api_token_login", "true"), localStorage.setItem("api_token_app_id", "116974");


                            let r = {};


                            null === (t = l.account_list) || void 0 === t || t.forEach(e => {
                                r[e.loginid] = {
                                    loginid: e.loginid,
                                    token: o.trim(),
                                    currency: e.currency || ""
                                }
                            });


                            try {
                                a.Z.set("client.accounts", JSON.stringify(r), {
                                    expires: 30
                                }), a.Z.set("active_loginid", l.loginid, {
                                    expires: 30
                                })
                            } catch (e) {
                                console.warn("Could not set cookies:", e)
                            }
                            n.disconnect(), window.location.href = "/"
                        }
                    } catch (e) {
                        u((null == e ? void 0 : e.message) || (0, W.NC)("Failed to authenticate. Please check your token.")), c(!1)
                    }
                };


                return (0, l.jsxs)(te.Z, {
                    className: "api-token-modal",
                    is_open: t,
                    toggleModal: n,
                    title: (0, W.NC)("Login with API Token"),
                    width: "440px",
                    children: [(0, l.jsx)(te.Z.Body, {
                        children: (0, l.jsx)("div", {
                            className: "api-token-modal__content",
                            children: r ? (0, l.jsxs)("div", {
                                className: "api-token-modal__loading",
                                children: [(0, l.jsx)(ei.Z, {
                                    size: "s",
                                    align: "center",
                                    children: (0, l.jsx)(W.Xx, {
                                        i18n_default_text: "Authorizing with API token..."
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "api-token-modal__spinner"
                                })]
                            }) : (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)(ei.Z, {
                                    size: "xs",
                                    className: "api-token-modal__description",
                                    children: (0, l.jsx)(W.Xx, {
                                        i18n_default_text: "Enter your Deriv API token to login. You can create an API token from your Deriv account settings."
                                    })
                                }), (0, l.jsx)("div", {
                                    className: "api-token-modal__input-wrapper",
                                    children: (0, l.jsx)(e5.Z, {
                                        type: "password",
                                        label: (0, W.NC)("API Token"),
                                        value: o,
                                        onChange: e => {
                                            s(e.target.value), u("")
                                        },
                                        onKeyDown: e => {
                                            "Enter" === e.nativeEvent.key && h()
                                        },
                                        error: d,
                                        placeholder: (0, W.NC)("Enter your API token"),
                                        disabled: r
                                    })
                                }), (0, l.jsxs)(ei.Z, {
                                    size: "xxs",
                                    className: "api-token-modal__hint",
                                    children: [(0, l.jsx)(W.Xx, {
                                        i18n_default_text: "Get your API token from"
                                    }), " ", (0, l.jsx)("a", {
                                        href: "https://app.deriv.com/account/api-token",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "api-token-modal__link",
                                        children: (0, l.jsx)(W.Xx, {
                                            i18n_default_text: "Deriv API Token Settings"
                                        })
                                    })]
                                })]
                            })
                        })
                    }), (0, l.jsxs)(te.Z.Footer, {
                        children: [(0, l.jsx)(eC.Z, {
                            secondary: !0,
                            onClick: n,
                            disabled: r,
                            children: (0, l.jsx)(W.Xx, {
                                i18n_default_text: "Cancel"
                            })
                        }), (0, l.jsx)(eC.Z, {
                            primary: !0,
                            onClick: h,
                            is_loading: r,
                            disabled: r || !o.trim(),
                            children: (0, l.jsx)(W.Xx, {
                                i18n_default_text: "Login"
                            })
                        })]
                    })]
                })
            });


            var tl = n("39523"),
                ti = n("38051"),
                to = n("39590"),
                ta = n("14393"),
                ts = n("34215"),
                tr = n("44741");


            ta.Z, (0, W.NC)("A whole new trading experience on a powerful yet easy to use platform."), el.xOw.trade, ta.Z, ts.Z, (0, W.NC)("Automated trading at your fingertips. No coding needed."), el.xOw.bot, ts.Z, tr.Z, (0, W.NC)("Trade the world’s markets with our popular user-friendly platform."), el.xOw.smarttrader, tr.Z;


            let tc = {
                    as: "a",
                    href: el.xOw.traders_hub,
                    icon: (0, l.jsx)(ti.Z, {
                        iconSize: "xs"
                    }),
                    label: "Trader's Hub"
                },
                td = [{
                    as: "a",
                    href: el.xOw.reports,
                    icon: (0, l.jsx)(to.Z, {
                        iconSize: "xs"
                    }),
                    label: (0, W.NC)("Reports")
                }],
                tu = (0, J.Pi)(() => {
                    let {
                        localize: e
                    } = (0, W.T_)(), {
                        isDesktop: t
                    } = (0, d.F)(), n = (0, ej.oR)();


                    if (!n) return null;


                    let {
                        is_logged_in: i
                    } = n.client;


                    return i && 0 !== td.length ? (0, l.jsx)(l.Fragment, {
                        children: t ? td.map(t => {
                            let {
                                as: n,
                                href: i,
                                icon: o,
                                label: a
                            } = t;


                            return (0, l.jsx)(tl.s, {
                                as: n,
                                className: "app-header__menu",
                                href: i,
                                leftComponent: o,
                                children: (0, l.jsx)(ef.x, {
                                    children: e(a)
                                })
                            }, a)
                        }) : td["1"] && (0, l.jsx)(tl.s, {
                            as: td["1"].as,
                            className: "flex gap-2 p-5",
                            href: td["1"].href,
                            leftComponent: td["1"].icon,
                            children: (0, l.jsx)(ef.x, {
                                children: e(td["1"].label)
                            })
                        }, td["1"].label)
                    }) : null
                });


            tu.TradershubLink = () => (0, l.jsx)(tl.s, {
                as: "a",
                className: "app-header__menu",
                href: tc.href,
                leftComponent: tc.icon,
                children: (0, l.jsx)(ef.x, {
                    children: tc.label
                })
            }, tc.label);


            var th = n("17934"),
                tm = n("41301"),
                tg = n("68782");


            let tx = e => {
                let {
                    buttonText: t,
                    onClick: n
                } = e, {
                    isDesktop: i
                } = (0, d.F)();


                return (0, l.jsxs)("button", {
                    className: "flex items-center w-full pt-8 p-[3.2rem]",
                    onClick: n,
                    children: [(0, l.jsx)(tg.Z, {
                        iconSize: "xs",
                        fill: "var(--text-general)"
                    }), (0, l.jsx)(ef.x, {
                        className: "ml-[1.6rem]",
                        size: i ? "md" : "lg",
                        weight: "bold",
                        children: t
                    })]
                })
            };


            var t_ = n("68534"),
                tv = n("93217");


            let tp = e => {
                    let {
                        localize: t
                    } = (0, W.T_)(), {
                        is_dark_mode_on: n,
                        toggleTheme: i
                    } = (0, K.Z)(), {
                        oAuthLogout: o
                    } = (0, r.q)({
                        handleLogout: async () => null == e ? void 0 : e.logout(),
                        client: e
                    });


                    return {
                        config: [
                            [{
                                as: "button",
                                label: t("Dark theme"),
                                LeftComponent: t_.Z,
                                RightComponent: (0, l.jsx)(tv.Z, {
                                    value: n,
                                    onChange: i
                                })
                            }], (null == e ? void 0 : e.is_logged_in) ? [{
                                as: "button",
                                label: t("Log out"),
                                LeftComponent: eV.Z,
                                onClick: o,
                                removeBorderBottom: !0
                            }] : []
                        ]
                    }
                },
                tj = (0, J.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, d.F)(), {
                        client: t
                    } = (0, ej.oR)(), n = e ? "sm" : "md", {
                        config: i
                    } = tp(t);


                    return (0, l.jsx)("div", {
                        className: "mobile-menu__content",
                        children: (0, l.jsx)("div", {
                            className: "mobile-menu__content__items",
                            children: i.map((e, t) => {
                                let i = e.find(e => {
                                    let {
                                        removeBorderBottom: t
                                    } = e;


                                    return t
                                });


                                return (0, l.jsx)("div", {
                                    className: (0, o.Z)("mobile-menu__content__items--padding", {
                                        "mobile-menu__content__items--bottom-border": !i
                                    }),
                                    "data-testid": "dt_menu_item",
                                    children: e.map(e => {
                                        let {
                                            LeftComponent: t,
                                            RightComponent: i,
                                            as: a,
                                            href: s,
                                            label: r,
                                            onClick: c,
                                            target: d
                                        } = e, u = "Binarytools.com" === r;


                                        return "a" === a ? (0, l.jsx)(tl.s, {
                                            as: "a",
                                            className: (0, o.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !u
                                            }),
                                            disableHover: !0,
                                            href: s,
                                            leftComponent: (0, l.jsx)(t, {
                                                className: "mobile-menu__content__items--right-margin",
                                                height: 16,
                                                width: 16
                                            }),
                                            target: d,
                                            children: (0, l.jsx)(ef.x, {
                                                size: n,
                                                children: r
                                            })
                                        }, r) : (0, l.jsx)(tl.s, {
                                            as: "button",
                                            className: (0, o.Z)("mobile-menu__content__items__item", {
                                                "mobile-menu__content__items__icons": !u
                                            }),
                                            disableHover: !0,
                                            leftComponent: (0, l.jsx)(t, {
                                                className: "mobile-menu__content__items--right-margin",
                                                iconSize: "xs"
                                            }),
                                            onClick: c,
                                            rightComponent: i,
                                            children: (0, l.jsx)(ef.x, {
                                                size: n,
                                                children: r
                                            })
                                        }, r)
                                    })
                                }, t)
                            })
                        })
                    })
                }),
                tb = e => {
                    let {
                        hideLanguageSetting: t,
                        openLanguageSetting: n
                    } = e, {
                        currentLang: o,
                        localize: a
                    } = (0, W.T_)(), {
                        isDesktop: s
                    } = (0, d.F)(), r = (0, i.useMemo)(() => {
                        var e;


                        return null === (e = q.find(e => {
                            let {
                                code: t
                            } = e;


                            return t === o
                        })) || void 0 === e ? void 0 : e.placeholderIconInMobile
                    }, [o]);


                    return (0, l.jsxs)("div", {
                        className: "mobile-menu__header",
                        children: [(0, l.jsx)(ef.x, {
                            size: s ? "md" : "lg",
                            weight: "bold",
                            children: a("Menu")
                        }), !t && (0, l.jsxs)("button", {
                            className: "mobile-menu__header__language items-center",
                            onClick: n,
                            children: [r, (0, l.jsx)(ef.x, {
                                className: "ml-[0.4rem]",
                                size: s ? "xs" : "sm",
                                weight: "bold",
                                children: o
                            })]
                        })]
                    })
                };


            var tf = n("89816");


            let tw = e => {
                    let {
                        onClick: t
                    } = e;


                    return (0, l.jsx)("button", {
                        onClick: t,
                        children: (0, l.jsx)(tf.Z, {
                            iconSize: "xs",
                            fill: "var(--text-general)"
                        })
                    })
                },
                ty = () => {
                    var e, t, n;


                    let [o, a] = (0, i.useState)(!1), {
                        currentLang: s = "EN",
                        localize: r,
                        switchLanguage: c
                    } = (0, W.T_)(), {
                        hideModal: h,
                        isModalOpenFor: m,
                        showModal: g
                    } = N(), {
                        isDesktop: x
                    } = (0, d.F)(), _ = () => a(!1), v = !!m("MobileLanguagesDrawer"), p = () => {
                        window.location.reload()
                    }, j = (0, ej.oR)(), b = null == j ? void 0 : j.client, f = b ? Object.values(b.accounts || {}).find(e => !e.is_virtual) : void 0;


                    f && (null === (n = b.all_accounts_balance) || void 0 === n || null === (t = n.accounts) || void 0 === t || null === (e = t[f.loginid]) || void 0 === e || e.balance);


                    let w = (null == f ? void 0 : f.currency) ?? "USD";


                    return ((0, el.O$T)(w), x) ? null : (0, l.jsxs)("div", {
                        className: "mobile-menu",
                        children: [(0, l.jsxs)("div", {
                            className: "mobile-menu__toggle",
                            children: [(0, l.jsx)(tw, {
                                onClick: () => a(!0)
                            }), (0, l.jsx)("div", {
                                onClick: () => p(),
                                children: (0, l.jsx)(u.e8N, {
                                    size: 20,
                                    style: {
                                        color: "#29dfc0"
                                    }
                                })
                            })]
                        }), (0, l.jsxs)(th.d, {
                            isOpen: o,
                            onCloseDrawer: _,
                            width: "29.5rem",
                            children: [(0, l.jsx)(th.d.Header, {
                                onCloseDrawer: _,
                                children: (0, l.jsx)(tb, {
                                    hideLanguageSetting: v,
                                    openLanguageSetting: () => g("MobileLanguagesDrawer")
                                })
                            }), (0, l.jsx)(th.d.Content, {
                                children: v ? (0, l.jsxs)(l.Fragment, {
                                    children: [(0, l.jsx)("div", {
                                        className: "mobile-menu__back-btn",
                                        children: (0, l.jsx)(tx, {
                                            buttonText: r("Language"),
                                            onClick: h
                                        })
                                    }), (0, l.jsx)(tm.I, {
                                        isOpen: !0,
                                        languages: q,
                                        onClose: h,
                                        onLanguageSwitch: e => {
                                            c(e), window.location.replace(k()), window.location.reload()
                                        },
                                        selectedLanguage: s,
                                        wrapperClassName: "mobile-menu__language-drawer"
                                    })]
                                }) : (0, l.jsx)(tj, {})
                            }), (0, l.jsxs)(th.d.Footer, {
                                className: "mobile-menu__footer",
                                children: [(0, l.jsx)(ew, {}), (0, l.jsx)(e_, {})]
                            })]
                        })]
                    })
                },
                tC = (0, J.Pi)(() => {
                    let {
                        isDesktop: e
                    } = (0, d.F)(), {
                        isAuthorizing: t,
                        activeLoginid: n
                    } = (0, eI.T)(), {
                        client: a
                    } = (0, ej.oR)() ?? {}, [s, u] = (0, i.useState)(!1), {
                        data: h
                    } = eS({
                        allBalanceData: null == a ? void 0 : a.all_accounts_balance
                    }), {
                        isOAuth2Enabled: m
                    } = (0, r.q)();


                    return (0, l.jsxs)(eL.h, {
                        className: (0, o.Z)("app-header", {
                            "app-header--desktop": e,
                            "app-header--mobile": !e
                        }),
                        children: [(0, l.jsxs)(ez.i, {
                            variant: "left",
                            children: [(0, l.jsx)(eT, {}), (0, l.jsx)(ty, {}), e && (0, l.jsx)(tu, {})]
                        }), (0, l.jsx)(ez.i, {
                            variant: "right",
                            children: t ? (0, l.jsx)(eA, {
                                isLoggedIn: !0,
                                isMobile: !e,
                                speed: 3
                            }) : n ? (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsx)(e8, {
                                    activeAccount: h
                                })
                            }) : (0, l.jsxs)("div", {
                                className: "auth-actions",
                                children: [(0, l.jsx)(eC.Z, {
                                    primary: !0,
                                    onClick: async () => {
                                        m ? await (0, c.P6)({
                                            redirectCallbackUri: `${window.location.origin}/callback`
                                        }) : window.location.replace((0, el.O2o)())
                                    },
                                    children: (0, l.jsx)(W.Xx, {
                                        i18n_default_text: "Log in"
                                    })
                                }), (0, l.jsx)(eC.Z, {
                                    secondary: !0,
                                    onClick: () => u(!0),
                                    children: (0, l.jsx)(W.Xx, {
                                        i18n_default_text: "API Token"
                                    })
                                }), (0, l.jsx)(eC.Z, {
                                    primary: !0,
                                    onClick: () => {
                                        window.open((0, el.OGe)())
                                    },
                                    children: (0, l.jsx)(W.Xx, {
                                        i18n_default_text: "Sign up"
                                    })
                                }), (0, l.jsx)(tn, {
                                    is_open: s,
                                    onClose: () => u(!1)
                                })]
                            })
                        })]
                    })
                }),
                tN = e => {
                    let {
                        children: t
                    } = e, n = localStorage.getItem("theme") ?? "light", {
                        ui: o
                    } = (0, ej.oR)() ?? {
                        ui: {
                            setDevice: () => {}
                        }
                    }, {
                        setDevice: a
                    } = o, {
                        isDesktop: s,
                        isMobile: r,
                        isTablet: c
                    } = (0, d.F)();


                    return (0, i.useEffect)(() => {
                        let e = document.querySelector("body");


                        e && ("light" === n ? (e.classList.remove("theme--dark"), e.classList.add("theme--light")) : (e.classList.remove("theme--light"), e.classList.add("theme--dark")))
                    }, [n]), (0, i.useEffect)(() => {
                        r ? a("mobile") : c ? a("tablet") : a("desktop")
                    }, [s, r, c, a]), (0, l.jsx)("div", {
                        className: "main-body",
                        children: t
                    })
                },
                tk = () => {
                    let {
                        isDesktop: e
                    } = (0, d.F)(), {
                        isOAuth2Enabled: t
                    } = (0, r.q)(), n = "/callback" === window.location.pathname, u = "true" === a.Z.get("logged_state"), h = window.location.pathname.includes("endpoint"), m = Object.keys(JSON.parse(localStorage.getItem("accountsList") ?? "{}")).length > 0;


                    return (0, i.useEffect)(() => {
                        u && !m && t && !h && !n && (0, c.P6)({
                            redirectCallbackUri: `${window.location.origin}/callback`
                        })
                    }, [u, m, t, h, n]), (0, l.jsxs)("div", {
                        className: (0, o.Z)("layout", {
                            responsive: e
                        }),
                        children: [!n && (0, l.jsx)(tC, {}), (0, l.jsx)(tN, {
                            children: (0, l.jsx)(s.j3, {})
                        }), !n && e && (0, l.jsx)(ey, {}), (0, l.jsx)(w, {})]
                    })
                }
        },
        31784: function(e, t, n) {
            n.d(t, {
                Z: () => x
            });


            var l = n("85893"),
                i = n("67294"),
                o = n("63387"),
                a = n.n(o),
                s = n("73935"),
                r = n("81262"),
                c = n("1051"),
                d = n("14117"),
                u = n("76298"),
                h = n("29490");


            let m = e => {
                    let {
                        children: t,
                        className: n,
                        close_icon_color: o,
                        elements_to_ignore: r,
                        has_close_icon: m = !0,
                        has_return_icon: g = !1,
                        header: x,
                        header_background_color: _,
                        height: v,
                        id: p,
                        is_confirmation_modal: j,
                        is_open: b,
                        is_risk_warning_visible: f,
                        is_title_centered: w,
                        is_vertical_bottom: y,
                        is_vertical_centered: C,
                        is_vertical_top: N,
                        onMount: k,
                        onReturn: I,
                        onUnmount: Z,
                        portalId: S = "modal_root",
                        renderTitle: L,
                        should_close_on_click_outside: z,
                        should_header_stick_body: E = !0,
                        small: T,
                        title: F,
                        toggleModal: M,
                        width: A
                    } = e, P = i.useRef(document.createElement("div")), R = S && document.getElementById(S), D = i.useRef(R || document.getElementById(S)), O = i.useRef(null), U = [".dc-datepicker__picker", ".dc-mobile-dialog", ".dc-dropdown-list", ".dc-dropdown__list", ".modal_root"], H = () => {
                        var e;


                        return null === (e = D.current) || void 0 === e ? void 0 : e.querySelectorAll(U.join(", ")).length
                    };


                    (0, c.t)(O, () => {
                        b && (null == M || M())
                    }, e => {
                        var t, n;


                        let l = null === (t = document.getElementById("popup_root")) || void 0 === t ? void 0 : t.hasChildNodes(),
                            i = e.path ?? (null === (n = e.composedPath) || void 0 === n ? void 0 : n.call(e));


                        return z || m && !H() && b && !l && !(r && (null == i ? void 0 : i.find(e => r.includes(e))))
                    }), i.useEffect(() => {
                        var e, t;


                        return P.current.classList.add("dc-modal"), null == D || null === (t = D.current) || void 0 === t || null === (e = t.appendChild) || void 0 === e || e.call(t, P.current), null == k || k(), () => {
                            let e = null == D ? void 0 : D.current,
                                t = null == P ? void 0 : P.current;


                            e && t && (null == e ? void 0 : e.contains(t)) && (null == e || e.removeChild(t)), null == Z || Z()
                        }
                    }, []);


                    let B = i.useCallback(e => {
                        "Escape" === e.key && (null == M || M())
                    }, [M]);


                    i.useEffect(() => (window.addEventListener("keydown", B), () => window.removeEventListener("keydown", B)), [B]);


                    let $ = L ? L() : null;


                    return s.createPortal((0, l.jsxs)("div", {
                        ref: O,
                        id: p,
                        className: a()("dc-modal__container", {
                            [`dc-modal__container_${n}`]: n,
                            "dc-modal__container--risk-message": f,
                            "dc-modal__container--small": T,
                            "dc-modal__container--is-vertical-centered": C,
                            "dc-modal__container--is-vertical-bottom": y,
                            "dc-modal__container--is-vertical-top": N,
                            "dc-modal__container--is-confirmation-modal": j
                        }),
                        style: {
                            height: v || "auto",
                            width: A || "auto"
                        },
                        children: [!f && (x || F || $) && (0, l.jsxs)("div", {
                            className: a()("dc-modal-header", {
                                "dc-modal-header__border-bottom": !E,
                                [`dc-modal-header--${n}`]: n,
                                "dc-modal-header--is-title-centered": w
                            }),
                            style: {
                                background: _
                            },
                            children: [$ && (0, l.jsx)(h.Z, {
                                as: "h3",
                                color: "prominent",
                                weight: "bold",
                                styles: {
                                    lineHeight: "2.4rem"
                                },
                                className: a()("dc-modal-header__title", {
                                    [`dc-modal-header__title--${n}`]: n
                                }),
                                children: $
                            }), F && (0, l.jsxs)(h.Z, {
                                as: "h3",
                                color: "prominent",
                                weight: "bold",
                                styles: {
                                    lineHeight: "2.4rem"
                                },
                                className: a()("dc-modal-header__title", {
                                    [`dc-modal-header__title--${n}`]: n
                                }),
                                children: [g && (0, l.jsx)(d.Z, {
                                    onClick: I,
                                    className: "dc-modal-header__icon"
                                }), F]
                            }), x && (0, l.jsx)("div", {
                                className: a()("dc-modal-header__section", {
                                    [`dc-modal-header__section--${n}`]: n
                                }),
                                children: x
                            }), m && (0, l.jsx)("div", {
                                onClick: M,
                                className: "dc-modal-header__close",
                                role: "button",
                                children: (0, l.jsx)(u.Z, {
                                    height: "20px",
                                    width: "20px",
                                    color: o,
                                    "data-testid": "dt_modal_close_icon",
                                    fill: "var(--text-general)",
                                    className: "icon-general-fill-path"
                                })
                            })]
                        }), t]
                    }), P.current)
                },
                g = e => {
                    let {
                        children: t,
                        className: n,
                        close_icon_color: i,
                        elements_to_ignore: o,
                        exit_classname: a,
                        has_close_icon: s = !0,
                        has_return_icon: c = !1,
                        header: d,
                        header_background_color: u,
                        height: h,
                        id: g,
                        is_confirmation_modal: x,
                        is_open: _,
                        is_risk_warning_visible: v,
                        is_title_centered: p,
                        is_vertical_bottom: j,
                        is_vertical_centered: b,
                        is_vertical_top: f,
                        onEntered: w,
                        onExited: y,
                        onMount: C,
                        onReturn: N,
                        onUnmount: k,
                        portalId: I = "modal_root",
                        renderTitle: Z,
                        should_close_on_click_outside: S = !1,
                        should_header_stick_body: L = !0,
                        small: z,
                        title: E,
                        transition_timeout: T,
                        toggleModal: F,
                        width: M
                    } = e;


                    return (0, l.jsx)(r.Z, {
                        appear: !0,
                        in: _,
                        timeout: T || 250,
                        classNames: {
                            appear: "dc-modal__container--enter",
                            enter: "dc-modal__container--enter",
                            enterDone: "dc-modal__container--enter-done",
                            exit: a || "dc-modal__container--exit"
                        },
                        unmountOnExit: !0,
                        onEntered: w,
                        onExited: y,
                        children: (0, l.jsx)(m, {
                            className: n,
                            close_icon_color: i,
                            should_header_stick_body: L,
                            has_return_icon: c,
                            header: d,
                            header_background_color: u,
                            id: g,
                            is_open: _,
                            is_risk_warning_visible: v,
                            is_confirmation_modal: x,
                            is_vertical_bottom: j,
                            is_vertical_centered: b,
                            is_vertical_top: f,
                            is_title_centered: p,
                            title: E,
                            toggleModal: F,
                            has_close_icon: s,
                            height: h,
                            onMount: C,
                            onReturn: N,
                            onUnmount: k,
                            portalId: I,
                            renderTitle: Z,
                            should_close_on_click_outside: S,
                            small: z,
                            width: M,
                            elements_to_ignore: o,
                            children: t
                        })
                    })
                };


            g.Body = e => {
                let {
                    children: t,
                    className: n
                } = e;


                return (0, l.jsx)("div", {
                    className: a()("dc-modal-body", n),
                    children: t
                })
            }, g.Footer = e => {
                let {
                    children: t,
                    className: n,
                    has_separator: o,
                    is_bypassed: s
                } = e;


                return s ? (0, l.jsx)(i.Fragment, {
                    children: t
                }) : (0, l.jsx)("div", {
                    "data-testid": "dt_modal_footer",
                    className: a()("dc-modal-footer", {
                        "dc-modal-footer--separator": o
                    }, n),
                    children: t
                })
            };


            let x = g
        },
        86278: function(e, t, n) {
            n.d(t, {
                X: function() {
                    return i
                },
                m: function() {
                    return o
                }
            });


            var l = n(67294);


            let i = (e, t) => {
                    let [n, i] = l.useState(!1), o = l.useRef(null), a = e || o, s = () => i(!0), r = () => i(!1);


                    return l.useEffect(() => {
                        let e = a.current;


                        if (e) return t ? (e.addEventListener("mouseenter", s), e.addEventListener("mouseleave", r)) : (e.addEventListener("mouseover", s), e.addEventListener("mouseout", r)), () => {
                            t ? (e.removeEventListener("mouseenter", s), e.removeEventListener("mouseleave", r)) : (e.removeEventListener("mouseover", s), e.removeEventListener("mouseout", r))
                        }
                    }, [a, t]), [a, n]
                },
                o = () => {
                    let [e, t] = l.useState(!1), n = l.useCallback(() => t(!0), []), i = l.useCallback(() => t(!1), []), o = l.useRef(null);


                    return [l.useCallback(e => {
                        o.current && (o.current.removeEventListener("mouseover", n), o.current.removeEventListener("mouseout", i)), o.current = e, o.current && (o.current.addEventListener("mouseover", n), o.current.addEventListener("mouseout", i))
                    }, [n, i]), e]
                }
        }
    }
]);

