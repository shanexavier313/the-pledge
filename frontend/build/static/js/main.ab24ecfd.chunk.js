;(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    191: function (e, t, a) {
      e.exports = a(224)
    },
    224: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a(75),
        r = a.n(n),
        o = a(0),
        l = a.n(o),
        i = a(17),
        s = a.n(i),
        c = a(15),
        u = a(157),
        m = a(48),
        d = a(158),
        h = a(14),
        p = {
          access: localStorage.getItem('access'),
          refresh: localStorage.getItem('refresh'),
          isLoggedIn: null,
          user: null,
        },
        g = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : p,
            t = arguments.length > 1 ? arguments[1] : void 0,
            a = t.type,
            n = t.payload
          switch (a) {
            case 'AUTHENTICATED_SUCCESS':
              return Object(h.a)(Object(h.a)({}, e), {}, { isLoggedIn: !0 })
            case 'ACTION_USER_UPDATE_SUCCESS':
              return Object(h.a)(
                Object(h.a)({}, e),
                {},
                {
                  user: {
                    email: n.email,
                    first_name: n.first_name,
                    last_name: n.last_name,
                  },
                },
              )
            case 'LOGIN_SUCCESS':
              return (
                localStorage.setItem('access', n.access),
                Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { isLoggedIn: !0, access: n.access, refresh: n.refresh },
                )
              )
            case 'USER_LOADED_SUCCESS':
              return Object(h.a)(Object(h.a)({}, e), {}, { user: n })
            case 'SIGNUP_SUCCESS':
            case 'AUTHENTICATED_FAIL':
              return Object(h.a)(Object(h.a)({}, e), {}, { isLoggedIn: !1 })
            case 'USER_LOADED_FAIL':
              return Object(h.a)(Object(h.a)({}, e), {}, { user: null })
            case 'SIGNUP_FAIL':
            case 'LOGIN_FAIL':
            case 'LOGOUT':
              return (
                localStorage.removeItem('access'),
                localStorage.removeItem('refresh'),
                Object(h.a)(
                  Object(h.a)({}, e),
                  {},
                  { access: null, refresh: null, isLoggedIn: !1, user: null },
                )
              )
            default:
              return e
          }
        },
        f = { message: null, isError: !1 },
        E = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : f,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case 'ALERT_MESSAGE':
              return Object(h.a)(
                Object(h.a)({}, e),
                {},
                { message: t.payload.message, isError: t.payload.isError },
              )
            default:
              return e
          }
        },
        b = { calls: [], recipients: [], loading: !1, error: !1 },
        v = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : b,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case 'ACTION_LOAD_CALLS':
              return Object(h.a)(Object(h.a)({}, e), {}, { loading: !0 })
            case 'ACTION_LOAD_CALLS_SUCCESS':
              var a = t.calls
              return Object(h.a)(Object(h.a)({}, e), {}, { calls: a })
            case 'ACTION_LOAD_RECIPIENTS_SUCCESS':
              var n = t.recipients
              return Object(h.a)(
                Object(h.a)({}, e),
                {},
                { recipients: n, loading: !1 },
              )
            case 'ACTION_LOAD_CALLS_FAIL':
              var r = t.error
              return Object(h.a)(
                Object(h.a)({}, e),
                {},
                { calls: [], loading: !1, error: r },
              )
            case 'ACTION_LOAD_RECIPIENTS_FAIL':
              var o = t.error
              return Object(h.a)(
                Object(h.a)({}, e),
                {},
                { recipients: [], loading: !1, error: o },
              )
            case 'ACTION_CREATE_RECIPIENTS_SUCCESS':
              var l = t.recipient,
                i = e.recipients
              return (
                i.push(l),
                Object(h.a)(Object(h.a)({}, e), {}, { recipients: i })
              )
            default:
              return e
          }
        },
        y = Object(m.combineReducers)({ auth: g, dashboard: v, alert: E }),
        w = a(139),
        k = a(159),
        x = { key: 'root', blacklist: ['alert'], storage: a.n(k).a }
      var S = a(18),
        O = a(22),
        C = a(292),
        j = a(7),
        T = a(8),
        A = a(271),
        I = a(272),
        N = a(290),
        _ = a(141)
      function D() {
        var e = Object(j.a)([
          '\n  box-sizing: border-box;\n  min-width: 0px;\n  font-family: Inter, system-ui, sans-serif;\n  line-height: 1.5;\n  text-decoration: none;\n  color &.footer-link {\n    margin: 0px;\n    color: rgb(52, 58, 64);\n    font-size: 14px;\n    font-weight: 600;\n  }\n  &.nav-link {\n    padding-left: 8px;\n    padding-right: 8px;\n    color: rgb(134, 142, 150);\n    font-size: 16px;\n    margin: 8px 4px;\n    font-weight: 600;\n    &:hover {\n      color: #f0682f;\n      text-decoration: underline;\n    }\n  }\n',
        ])
        return (
          (D = function () {
            return e
          }),
          e
        )
      }
      var R = Object(T.a)(S.a)(D()),
        L = function (e) {
          return l.a.createElement(R, e)
        }
      function P() {
        var e = Object(j.a)([
          '\n  && {\n    box-sizing: border-box;\n    min-width: 0px;\n    font-family: Inter, system-ui, sans-serif;\n    line-height: 1.5;\n    text-decoration: none;\n    padding-left: 8px;\n    padding-right: 8px;\n    color: #f0682f;\n    font-size: 16px;\n    margin: 8px 4px;\n    font-weight: 600;\n    &:hover {\n      color: rgb(134, 142, 150);\n    }\n  }\n',
        ])
        return (
          (P = function () {
            return e
          }),
          e
        )
      }
      function B() {
        var e = Object(j.a)([
          '\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  li {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n',
        ])
        return (
          (B = function () {
            return e
          }),
          e
        )
      }
      function F() {
        var e = Object(j.a)([
          '\n  && {\n    padding: 1rem 0;\n\n    .right-content,\n    .left-content {\n      padding: 1rem 2rem;\n    }\n    .left-content {\n      padding-left: 0;\n    }\n\n    @media only screen and (min-width: 600px) {\n      .right-content {\n        border-left: 1px solid black;\n      }\n    }\n    @media only screen and (max-width: 600px) {\n      .right-content {\n        padding: 0;\n        & > div {\n          border-top: 1px solid black;\n        }\n      }\n    }\n  }\n',
        ])
        return (
          (F = function () {
            return e
          }),
          e
        )
      }
      var W = Object(T.a)(A.a)(F()),
        H = T.a.ul(B()),
        M = Object(T.a)(I.a)(P()),
        U = function () {
          return l.a.createElement(
            W,
            { container: !0, alignItems: 'center' },
            l.a.createElement(
              A.a,
              { item: !0, xs: 12, sm: 6, className: 'left-content' },
              l.a.createElement(
                N.a,
                { fontWeight: 600, fontSize: 'h6.fontSize', my: 0.5 },
                'The Pledge',
              ),
              l.a.createElement(
                _.a,
                { variant: 'body2', component: 'body2' },
                'The pledge is our commitment to calling 5 or more people you know before November 3rd and encouraging them to vote blue down the ballot \u2014 to get politicians who threaten our democracy out of office.',
              ),
            ),
            l.a.createElement(
              A.a,
              {
                item: !0,
                container: !0,
                xs: 12,
                sm: 6,
                className: 'right-content',
              },
              l.a.createElement(
                A.a,
                { item: !0, xs: 12, md: 6 },
                l.a.createElement(
                  H,
                  null,
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      L,
                      { className: 'nav-link', to: '/' },
                      'Home',
                    ),
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      L,
                      { className: 'nav-link', to: '/resources' },
                      'Resources',
                    ),
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      L,
                      { className: 'nav-link', to: '/the-why' },
                      'The Why',
                    ),
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      L,
                      { className: 'nav-link', to: '/steps' },
                      'Step by Step',
                    ),
                  ),
                ),
              ),
              l.a.createElement(
                A.a,
                { item: !0, xs: 12, md: 6 },
                l.a.createElement(
                  H,
                  null,
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      L,
                      { className: 'nav-link', to: '/sharing-the-pledge' },
                      'Sharing the Pledge',
                    ),
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      M,
                      { href: 'mailto:sharethepledge.com' },
                      'Contact Us',
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        z = a(273),
        q = function (e) {
          return l.a.createElement(
            N.a,
            { my: 1, ml: 1 },
            l.a.createElement(
              z.a,
              Object.assign(
                { component: S.a, role: null, 'aria-disabled': null },
                e,
              ),
            ),
          )
        },
        V = a(6),
        Y = a.n(V),
        G = a(10),
        J = function () {
          localStorage.removeItem('access_token'),
            localStorage.removeItem('refresh_token')
        },
        K = function () {
          return localStorage.getItem('access_token')
        },
        X = function (e) {
          localStorage.setItem('access_token', e.access),
            localStorage.setItem('refresh_token', e.refresh)
        },
        Z = 'https://sharethepledge-assets.s3.us-east-2.amazonaws.com',
        Q = {
          fl: 'Far Left',
          le: 'Left',
          cl: 'Center Left',
          m: 'Middle',
          cr: 'Center Right',
          ri: 'Right',
          fr: 'Far Right',
          uk: 'Unknown',
        },
        $ = { re: 'Registered', nr: 'Not Registered', un: 'Unknown' },
        ee = {
          AL: 'Alabama',
          AK: 'Alaska',
          AS: 'American Samoa',
          AZ: 'Arizona',
          AR: 'Arkansas',
          CA: 'California',
          CO: 'Colorado',
          CT: 'Connecticut',
          DE: 'Delaware',
          DC: 'District Of Columbia',
          FM: 'Federated States Of Micronesia',
          FL: 'Florida',
          GA: 'Georgia',
          GU: 'Guam',
          HI: 'Hawaii',
          ID: 'Idaho',
          IL: 'Illinois',
          IN: 'Indiana',
          IA: 'Iowa',
          KS: 'Kansas',
          KY: 'Kentucky',
          LA: 'Louisiana',
          ME: 'Maine',
          MH: 'Marshall Islands',
          MD: 'Maryland',
          MA: 'Massachusetts',
          MI: 'Michigan',
          MN: 'Minnesota',
          MS: 'Mississippi',
          MO: 'Missouri',
          MT: 'Montana',
          NE: 'Nebraska',
          NV: 'Nevada',
          NH: 'New Hampshire',
          NJ: 'New Jersey',
          NM: 'New Mexico',
          NY: 'New York',
          NC: 'North Carolina',
          ND: 'North Dakota',
          MP: 'Northern Mariana Islands',
          OH: 'Ohio',
          OK: 'Oklahoma',
          OR: 'Oregon',
          PW: 'Palau',
          PA: 'Pennsylvania',
          PR: 'Puerto Rico',
          RI: 'Rhode Island',
          SC: 'South Carolina',
          SD: 'South Dakota',
          TN: 'Tennessee',
          TX: 'Texas',
          UT: 'Utah',
          VT: 'Vermont',
          VI: 'Virgin Islands',
          VA: 'Virginia',
          WA: 'Washington',
          WV: 'West Virginia',
          WI: 'Wisconsin',
          WY: 'Wyoming',
        },
        te = K(),
        ae = r.a.create({
          baseURL: '/api/',
          timeout: 5e3,
          headers: {
            Authorization: te ? 'Token ' + te : null,
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        })
      ae.interceptors.response.use(
        function (e) {
          return e
        },
        function (e) {
          var t = e.config
          if (401 === e.response.status && '/api/token/refresh/' === t.url)
            return (window.location.href = '/login/'), Promise.reject(e)
          if (
            'token_not_valid' === e.response.data.code &&
            401 === e.response.status &&
            'Unauthorized' === e.response.statusText
          ) {
            var a = localStorage.getItem('refresh_token')
            if (a) {
              var n = JSON.parse(atob(a.split('.')[1])),
                r = Math.ceil(Date.now() / 1e3)
              if ((console.log(n.exp), n.exp > r))
                return ae
                  .post('/token/refresh/', { refresh: a })
                  .then(function (e) {
                    return (
                      X(e.data),
                      (ae.defaults.headers.Authorization =
                        'Token ' + e.data.access),
                      (t.headers.Authorization = 'Token ' + e.data.access),
                      ae(t)
                    )
                  })
                  .catch(function (e) {
                    console.log(e)
                  })
              console.log('Refresh token is expired', n.exp, r),
                (window.location.href = '/login/')
            } else
              console.log('Refresh token not available.'),
                (window.location.href = '/login/')
          }
          return Promise.reject(e)
        },
      )
      var ne = ae,
        re = a(19),
        oe = function () {
          var e = K()
          if (e) {
            var t = e.split('.'),
              a = Object(re.a)(t, 2)[1],
              n = window.atob(a)
            return console.log(n), JSON.parse(n)
          }
        }
      function le(e, t) {
        e({ type: 'ALERT_MESSAGE', payload: t })
      }
      var ie = (function () {
          var e = Object(G.a)(
            Y.a.mark(function e(t) {
              var a
              return Y.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.prev = 0), (e.next = 3), ne.get('/auth/users/me/')
                        )
                      case 3:
                        ;(a = e.sent),
                          t({ type: 'USER_LOADED_SUCCESS', payload: a.data }),
                          (e.next = 10)
                        break
                      case 7:
                        ;(e.prev = 7),
                          (e.t0 = e.catch(0)),
                          t({ type: 'USER_LOADED_FAIL' })
                      case 10:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[0, 7]],
              )
            }),
          )
          return function (t) {
            return e.apply(this, arguments)
          }
        })(),
        se = (function () {
          var e = Object(G.a)(
            Y.a.mark(function e(t, a, n) {
              var r,
                o,
                l,
                i,
                s = arguments
              return Y.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r = s.length > 3 && void 0 !== s[3] ? s[3] : '/'),
                          (o = JSON.stringify({
                            email: n.email,
                            password: n.password,
                          })),
                          (e.prev = 2),
                          (e.next = 5),
                          ne.post('/auth/jwt/create/', o)
                        )
                      case 5:
                        ;(l = e.sent),
                          (ne.defaults.headers.Authorization =
                            'Token ' + l.data.access),
                          X(l.data),
                          a({ type: 'LOGIN_SUCCESS', payload: l.data }),
                          ie(a),
                          t({ message: 'Logged in!', isError: !1 }.message, {
                            variant: 'success',
                          }),
                          Object(S.c)(r),
                          (e.next = 21)
                        break
                      case 15:
                        ;(e.prev = 15),
                          (e.t0 = e.catch(2)),
                          console.log(a),
                          (i = e.t0.response),
                          a({ type: 'LOGIN_FAIL' }),
                          401 === i.status
                            ? t(
                                {
                                  message:
                                    'Your email or password was incorrect. Please try again',
                                  isError: !0,
                                }.message,
                                { variant: 'warning' },
                              )
                            : t(
                                {
                                  message:
                                    'Something went wrong. Please try again',
                                  isError: !0,
                                }.message,
                                { variant: 'warning' },
                              )
                      case 21:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[2, 15]],
              )
            }),
          )
          return function (t, a, n) {
            return e.apply(this, arguments)
          }
        })(),
        ce = (function () {
          var e = Object(G.a)(
            Y.a.mark(function e(t, a, n) {
              var r,
                o,
                l,
                i = arguments
              return Y.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r =
                            i.length > 3 && void 0 !== i[3] ? i[3] : 'login'),
                          (o = JSON.stringify({
                            first_name: n.firstName,
                            last_name: n.lastName,
                            email: n.email,
                            password: n.password,
                            re_password: n.passwordCon,
                          })),
                          (e.prev = 2),
                          (e.next = 5),
                          ne.post('/auth/users/', o)
                        )
                      case 5:
                        ;(l = e.sent),
                          a({ type: 'SIGNUP_SUCCESS', payload: l.data }),
                          t(
                            {
                              message:
                                'Signed up! Check your email to activate your account.',
                              isError: !1,
                            }.message,
                            { variant: 'success' },
                          ),
                          Object(S.c)(r),
                          (e.next = 18)
                        break
                      case 12:
                        return (
                          (e.prev = 12),
                          (e.t0 = e.catch(2)),
                          a({ type: 'SIGNUP_FAIL' }),
                          t(
                            {
                              message:
                                'Whoops! Looks like there are some errors :(',
                              isError: !0,
                            }.message,
                            { variant: 'warning' },
                          ),
                          e.abrupt('return', { response: e.t0, isError: !0 })
                        )
                      case 18:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[2, 12]],
              )
            }),
          )
          return function (t, a, n) {
            return e.apply(this, arguments)
          }
        })(),
        ue = (function () {
          var e = Object(G.a)(
            Y.a.mark(function e(t, a, n) {
              var r,
                o,
                l,
                i = arguments
              return Y.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r =
                            i.length > 3 && void 0 !== i[3] ? i[3] : '/login'),
                          (o = JSON.stringify({ uid: t.uid, token: t.token })),
                          (e.prev = 2),
                          (e.next = 5),
                          ne.post('/auth/users/activation/', o)
                        )
                      case 5:
                        ;(l = e.sent),
                          a({ type: 'ACTIVATION_SUCCESS', payload: l.data }),
                          n(
                            {
                              message: 'Account activated! You can now log in.',
                              isError: !1,
                            }.message,
                            { variant: 'success' },
                          ),
                          Object(S.c)(r),
                          (e.next = 16)
                        break
                      case 12:
                        ;(e.prev = 12),
                          (e.t0 = e.catch(2)),
                          n(
                            {
                              message:
                                'Something went wrong. Retry the activation link or contact us :(',
                              isError: !0,
                            }.message,
                            { variant: 'warning' },
                          )
                      case 16:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[2, 12]],
              )
            }),
          )
          return function (t, a, n) {
            return e.apply(this, arguments)
          }
        })(),
        me = (function () {
          var e = Object(G.a)(
            Y.a.mark(function e(t, a, n) {
              var r,
                o,
                l,
                i = arguments
              return Y.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r =
                            i.length > 3 && void 0 !== i[3] ? i[3] : '/login'),
                          (o = JSON.stringify({ email: t.email })),
                          (e.prev = 2),
                          (e.next = 5),
                          ne.post('/auth/users/reset_password/', o)
                        )
                      case 5:
                        ;(l = e.sent),
                          a({
                            type: 'RESET_PASSWORD_SUCCESS',
                            payload: l.data,
                          }),
                          n(
                            {
                              message:
                                'A password reset link has been sent to your email!',
                              isError: !1,
                            }.message,
                            { variant: 'success' },
                          ),
                          Object(S.c)(r),
                          (e.next = 17)
                        break
                      case 12:
                        return (
                          (e.prev = 12),
                          (e.t0 = e.catch(2)),
                          n(
                            {
                              message:
                                'Whoops! Looks like there are some errors :(',
                              isError: !0,
                            }.message,
                            { variant: 'warning' },
                          ),
                          e.abrupt('return', { response: e.t0, isError: !0 })
                        )
                      case 17:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[2, 12]],
              )
            }),
          )
          return function (t, a, n) {
            return e.apply(this, arguments)
          }
        })(),
        de = (function () {
          var e = Object(G.a)(
            Y.a.mark(function e(t, a, n) {
              var r,
                o,
                l,
                i = arguments
              return Y.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (r =
                            i.length > 3 && void 0 !== i[3] ? i[3] : '/login'),
                          (o = JSON.stringify({
                            uid: t.uid,
                            token: t.token,
                            new_password: t.password,
                            re_new_password: t.passwordCon,
                          })),
                          (e.prev = 2),
                          (e.next = 5),
                          ne.post('/auth/users/reset_password_confirm/', o)
                        )
                      case 5:
                        ;(l = e.sent),
                          a({
                            type: 'RESET_PASSWORD_CONFIRM_SUCCESS',
                            payload: l.data,
                          }),
                          n(
                            {
                              message:
                                'Password has been reset! You can now log in.',
                              isError: !1,
                            }.message,
                            { variant: 'success' },
                          ),
                          Object(S.c)(r),
                          (e.next = 17)
                        break
                      case 12:
                        return (
                          (e.prev = 12),
                          (e.t0 = e.catch(2)),
                          n(
                            {
                              message:
                                'Whoops! Looks like there are some errors :(',
                              isError: !0,
                            }.message,
                            { variant: 'warning' },
                          ),
                          e.abrupt('return', { response: e.t0, isError: !0 })
                        )
                      case 17:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[2, 12]],
              )
            }),
          )
          return function (t, a, n) {
            return e.apply(this, arguments)
          }
        })(),
        he = (function () {
          var e = Object(G.a)(
            Y.a.mark(function e(t, a) {
              var n,
                r,
                o,
                l = arguments
              return Y.a.wrap(
                function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (n =
                            l.length > 2 && void 0 !== l[2] ? l[2] : 'account'),
                          (e.prev = 1),
                          (e.next = 4),
                          ne.put('auth/users/me/', {
                            email: a.email,
                            first_name: a.firstName,
                            last_name: a.lastName,
                            password1: a.password,
                            password2: a.passwordCon,
                          })
                        )
                      case 4:
                        return (
                          (r = e.sent),
                          (o = { message: 'Account updated!', isError: !1 }),
                          t({
                            type: 'ACTION_USER_UPDATE_SUCCESS',
                            payload: {
                              email: a.email,
                              first_name: a.firstName,
                              last_name: a.lastName,
                            },
                          }),
                          le(t, o),
                          Object(S.c)(n),
                          e.abrupt('return', { response: r.data, isError: !1 })
                        )
                      case 12:
                        return (
                          (e.prev = 12),
                          (e.t0 = e.catch(1)),
                          e.abrupt('return', { response: e.t0, isError: !0 })
                        )
                      case 15:
                      case 'end':
                        return e.stop()
                    }
                },
                e,
                null,
                [[1, 12]],
              )
            }),
          )
          return function (t, a) {
            return e.apply(this, arguments)
          }
        })(),
        pe = function (e, t) {
          var a =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : '/',
            n = { message: 'Logged out.', isError: !1 }
          e(n.message, { variant: 'success' }),
            Object(S.c)(a),
            setTimeout(function () {
              J(), t({ type: 'LOGOUT' })
            }, 1)
        },
        ge = ''.concat(Z, '/images/logo.svg'),
        fe = function () {
          var e = Object(c.b)(),
            t = Object(c.c)(function (e) {
              return e.auth
            }).isLoggedIn,
            a = Object(O.b)().enqueueSnackbar
          return l.a.createElement(
            A.a,
            {
              container: !0,
              color: 'black',
              bg: 'white',
              alignItems: 'center',
            },
            l.a.createElement(
              N.a,
              { display: 'flex', justifyContent: 'center' },
              l.a.createElement('img', {
                src: ge,
                height: '40rem',
                alt: 'logo',
              }),
            ),
            l.a.createElement(
              L,
              { to: '/', my: 2, mx: 1, className: 'nav-link' },
              'Home',
            ),
            l.a.createElement(
              L,
              { to: '/resources', my: 2, mx: 1, className: 'nav-link' },
              'Resources',
            ),
            l.a.createElement(
              L,
              { to: '/the-why', my: 2, mx: 1, className: 'nav-link' },
              'The Why',
            ),
            l.a.createElement(
              L,
              {
                to: '/sharing-the-pledge',
                my: 2,
                mx: 1,
                className: 'nav-link',
                sx: { color: 'secondary' },
              },
              'Sharing the Pledge',
            ),
            l.a.createElement(N.a, { mx: 'auto' }),
            !t &&
              l.a.createElement(
                q,
                { to: '/login', color: 'primary', variant: 'contained' },
                'Login',
              ),
            !t &&
              l.a.createElement(
                q,
                { to: '/signup', color: 'primary', variant: 'outlined' },
                'Sign Up',
              ),
            t &&
              l.a.createElement(
                q,
                {
                  to: '/',
                  onClick: function () {
                    return pe(a, e)
                  },
                  color: 'primary',
                  variant: 'contained',
                },
                'Logout',
              ),
            t &&
              l.a.createElement(
                q,
                { to: '/dashboard', color: 'primary', variant: 'outlined' },
                'Dashboard',
              ),
            t &&
              l.a.createElement(
                q,
                { to: '/account', color: 'primary', variant: 'outlined' },
                'Account',
              ),
          )
        },
        Ee = a(274),
        be = a(227),
        ve = a(228),
        ye = a(164),
        we = a.n(ye),
        ke = a(165),
        xe = a.n(ke)
      function Se() {
        var e = Object(j.a)([
          '\n  && {\n    & > a,\n    & > div {\n      justify-content: center;\n    }\n    font-size: 1rem;\n  }\n',
        ])
        return (
          (Se = function () {
            return e
          }),
          e
        )
      }
      var Oe = ''.concat(Z, '/images/logo.svg'),
        Ce = Object(T.a)(Ee.a)(Se()),
        je = function () {
          var e = Object(c.b)(),
            t = Object(o.useState)(!1),
            a = Object(re.a)(t, 2),
            n = a[0],
            r = a[1],
            i = Object(c.c)(function (e) {
              return e.auth
            }).isLoggedIn,
            s = Object(O.b)().enqueueSnackbar
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              A.a,
              {
                container: !0,
                color: 'black',
                bg: '#E9EDF1',
                alignItems: 'center',
              },
              l.a.createElement(
                A.a,
                { item: !0, xs: 3 },
                !n &&
                  l.a.createElement(
                    be.a,
                    {
                      onClick: function () {
                        return r(!0)
                      },
                    },
                    l.a.createElement(we.a, null),
                  ),
              ),
              l.a.createElement(
                A.a,
                { item: !0, xs: 6 },
                l.a.createElement(
                  N.a,
                  { display: 'flex', mx: 'auto', justifyContent: 'center' },
                  l.a.createElement('img', {
                    src: Oe,
                    height: '40rem',
                    alt: 'logo',
                  }),
                ),
              ),
              l.a.createElement(
                A.a,
                {
                  item: !0,
                  xs: 3,
                  justiy: 'end',
                  container: !0,
                  direction: 'row-reverse',
                },
                n &&
                  l.a.createElement(
                    be.a,
                    {
                      onClick: function () {
                        return r(!1)
                      },
                    },
                    l.a.createElement(xe.a, null),
                  ),
              ),
            ),
            n &&
              l.a.createElement(
                Ce,
                { component: 'nav', 'aria-label': 'main mailbox folders' },
                l.a.createElement(
                  ve.a,
                  { component: L, to: '/', className: 'nav-link' },
                  'Home',
                ),
                l.a.createElement(
                  ve.a,
                  { component: L, to: '/resources', className: 'nav-link' },
                  'Resources',
                ),
                l.a.createElement(
                  ve.a,
                  { component: L, to: '/the-why', className: 'nav-link' },
                  'The Why',
                ),
                l.a.createElement(
                  ve.a,
                  {
                    component: L,
                    to: '/sharing-the-pledge',
                    className: 'nav-link',
                  },
                  'Sharing the Pledge',
                ),
                l.a.createElement(
                  A.a,
                  { container: !0 },
                  !i &&
                    l.a.createElement(
                      q,
                      { to: '/login', color: 'primary', variant: 'contained' },
                      'Login',
                    ),
                  !i &&
                    l.a.createElement(
                      q,
                      { to: '/signup', color: 'primary', variant: 'outlined' },
                      'Sign Up',
                    ),
                  i &&
                    l.a.createElement(
                      q,
                      {
                        to: '/',
                        onClick: function () {
                          return pe(s, e)
                        },
                        color: 'primary',
                        variant: 'contained',
                      },
                      'Logout',
                    ),
                  i &&
                    l.a.createElement(
                      q,
                      {
                        to: '/dashboard',
                        color: 'primary',
                        variant: 'outlined',
                      },
                      'Dashboard',
                    ),
                  i &&
                    l.a.createElement(
                      q,
                      { to: '/account', color: 'primary', variant: 'outlined' },
                      'Account',
                    ),
                ),
              ),
          )
        }
      function Te() {
        var e = Object(j.a)(['\n  position: relative;\n'])
        return (
          (Te = function () {
            return e
          }),
          e
        )
      }
      function Ae() {
        var e = Object(j.a)([
          '\n  position: relative;\n  padding-right: 4rem;\n  padding-left: 4rem;\n  @media only screen and (max-width: 500px) {\n    padding-right: 2rem;\n    padding-left: 2rem;\n  }\n  background-color: #E9EDF1;\n',
        ])
        return (
          (Ae = function () {
            return e
          }),
          e
        )
      }
      function Ie() {
        var e = Object(j.a)([
          '\n  position: relative;\n  padding: 1rem 5rem;\n  @media only screen and (max-width: 800px) {\n    padding: 1rem;\n  }\n',
        ])
        return (
          (Ie = function () {
            return e
          }),
          e
        )
      }
      function Ne() {
        var e = Object(j.a)(['\n  position: relative;\n'])
        return (
          (Ne = function () {
            return e
          }),
          e
        )
      }
      var _e = T.a.div(Ne()),
        De = T.a.nav(Ie()),
        Re = T.a.footer(Ae()),
        Le = T.a.main.attrs(function () {
          return { id: 'maincontent' }
        })(Te()),
        Pe = function (e) {
          var t = e.children,
            a = Object(c.c)(function (e) {
              return e.alert
            }),
            n = (a.message, a.isError, l.a.createElement(Le, null, t))
          return l.a.createElement(
            _e,
            null,
            l.a.createElement(
              De,
              null,
              l.a.createElement(
                C.a,
                { smDown: !0 },
                l.a.createElement(fe, null),
              ),
              l.a.createElement(C.a, { mdUp: !0 }, l.a.createElement(je, null)),
            ),
            n,
            l.a.createElement(Re, null, l.a.createElement(U, null)),
          )
        },
        Be = a(295),
        Fe = a(16),
        We = a(35),
        He = a(277),
        Me = a(276),
        Ue = a(233),
        ze = a(275),
        qe = a(229),
        Ve = a(234),
        Ye = a(232),
        Ge = function (e) {
          var t = e.name,
            a = e.label,
            n = e.type,
            r = void 0 === n ? 'text' : n,
            o = e.handleBlur,
            i = e.handleChange,
            s = e.helperText,
            c = e.error,
            u = e.list,
            m = e.rows,
            d = void 0 === m ? 1 : m,
            h = e.values,
            p = e.description,
            g = e.size,
            f = void 0 === g ? 'small' : g
          return l.a.createElement(
            l.a.Fragment,
            null,
            u &&
              l.a.createElement(
                qe.a,
                {
                  variant: 'outlined',
                  fullWidth: !0,
                  margin: 'normal',
                  size: f,
                  error: c,
                },
                l.a.createElement(Ve.a, { htmlFor: 'age-native-simple' }, a),
                l.a.createElement(
                  Ue.a,
                  {
                    fullWidth: !0,
                    label: a,
                    name: t,
                    onBlur: o,
                    onChange: i,
                    value: h[t],
                  },
                  l.a.createElement(ze.a, { value: '' }),
                  Object.keys(u).map(function (e, t) {
                    return l.a.createElement(ze.a, { key: t, value: e }, u[e])
                  }),
                ),
                p && l.a.createElement(Ye.a, null, p),
                l.a.createElement(Ye.a, null, s),
              ),
            !u &&
              l.a.createElement(Me.a, {
                error: c,
                fullWidth: !0,
                helperText: s,
                label: a,
                margin: 'normal',
                name: t,
                type: r,
                onBlur: o,
                onChange: i,
                value: h[t],
                variant: 'outlined',
                size: f,
                rows: d,
                InputLabelProps: 'date' === r && { shrink: !0 },
              }),
          )
        }
      function Je() {
        var e = Object(j.a)([
          '\n  &.form {\n    padding: 2rem;\n    margin: 2rem 0;\n    border: 1px solid rgb(240, 104, 47);\n    min-height: 100%;\n    .actions {\n      margin-top: 1rem;\n    }\n  }\n',
        ])
        return (
          (Je = function () {
            return e
          }),
          e
        )
      }
      var Ke = T.a.div(Je()),
        Xe = function (e) {
          var t = e.onSubmit,
            a = (e.errorState, e.toggleModal),
            n = void 0 === a ? null : a
          return l.a.createElement(
            He.a,
            { maxWidth: 'sm' },
            l.a.createElement(
              Ke,
              { className: !n && 'form' },
              l.a.createElement(
                We.a,
                {
                  initialValues: { email: '', password: '' },
                  validationSchema: Fe.b().shape({
                    firstName: Fe.d().required('First Name is required'),
                    lastName: Fe.d().required('Last Name is required'),
                    email: Fe.d()
                      .required('Email is required')
                      .email('Enter a valid email address'),
                    password: Fe.d().required('Password is required'),
                    passwordCon: Fe.d()
                      .required('Password Confirmation is required')
                      .oneOf([Fe.c('password')], 'Passwords must match'),
                  }),
                  onSubmit: (function () {
                    var e = Object(G.a)(
                      Y.a.mark(function e(a, n) {
                        var r, o, l, i, s
                        return Y.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.setErrors),
                                  (o = n.setStatus),
                                  (l = n.setSubmitting),
                                  (e.next = 3),
                                  t(a)
                                )
                              case 3:
                                ;(i = e.sent),
                                  (s = i.error) &&
                                    (o({ success: !1 }), r(s), l(!1))
                              case 6:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      }),
                    )
                    return function (t, a) {
                      return e.apply(this, arguments)
                    }
                  })(),
                },
                function (e) {
                  var t = e.errors,
                    a = e.handleBlur,
                    n = e.handleChange,
                    r = e.handleSubmit,
                    o = e.isSubmitting,
                    i = e.touched,
                    s = e.values
                  return l.a.createElement(
                    'form',
                    { onSubmit: r },
                    l.a.createElement(Ge, {
                      error: Boolean(i.firstName && t.firstName),
                      helperText: i.firstName && t.firstName,
                      label: 'First Name',
                      name: 'firstName',
                      type: 'firstName',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(i.lastName && t.lastName),
                      helperText: i.lastName && t.lastName,
                      label: 'Last Name',
                      name: 'lastName',
                      type: 'lastName',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(i.email && t.email),
                      helperText: i.email && t.email,
                      label: 'Email',
                      name: 'email',
                      type: 'email',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(i.password && t.password),
                      helperText: i.password && t.password,
                      label: 'Password',
                      name: 'password',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                      type: 'password',
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(i.passwordCon && t.passwordCon),
                      helperText: i.passwordCon && t.passwordCon,
                      label: 'Password Confirmation',
                      name: 'passwordCon',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                      type: 'password',
                    }),
                    l.a.createElement(
                      N.a,
                      { mt: 2 },
                      l.a.createElement(
                        z.a,
                        {
                          color: 'primary',
                          disabled: o,
                          fullWidth: !0,
                          type: 'submit',
                          variant: 'contained',
                        },
                        'Update Account',
                      ),
                    ),
                  )
                },
              ),
            ),
          )
        },
        Ze = function (e) {
          var t = e.toggleModal,
            a = void 0 === t ? null : t,
            n = Object(c.b)(),
            r = Object(O.b)().enqueueSnackbar,
            o = (function () {
              var e = Object(G.a)(
                Y.a.mark(function e(t, o) {
                  var l, i, s
                  return Y.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), he(n, t)
                          case 3:
                            if (((l = e.sent), (i = l.response), !l.isError)) {
                              e.next = 12
                              break
                            }
                            if (400 !== (s = i.response).status) {
                              e.next = 10
                              break
                            }
                            return e.abrupt('return', { error: s.data })
                          case 10:
                            e.next = 14
                            break
                          case 12:
                            r('Account is updated', { variant: 'success' }),
                              a(!1)
                          case 14:
                            o.preventDefault(), (e.next = 20)
                            break
                          case 17:
                            ;(e.prev = 17),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0)
                          case 20:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 17]],
                  )
                }),
              )
              return function (t, a) {
                return e.apply(this, arguments)
              }
            })()
          return l.a.createElement(Xe, { onSubmit: o, toggleModal: a })
        }
      function Qe() {
        var e = Object(j.a)(['\n  && {\n    margin: 16px;\n  }\n'])
        return (
          (Qe = function () {
            return e
          }),
          e
        )
      }
      function $e() {
        var e = Object(j.a)([
          '\n  && {\n    & > div {\n      padding: 0;\n      form {\n        padding: 0;\n        padding-top: 3rem;\n        padding-bottom: 3rem;\n        margin: 0;\n        border: none;\n      }\n    }\n  }\n',
        ])
        return (
          ($e = function () {
            return e
          }),
          e
        )
      }
      var et = Object(T.a)(Be.a)($e()),
        tt = Object(T.a)(z.a)(Qe()),
        at = function (e) {
          var t = e.user,
            a = Object(o.useState)(!1),
            n = Object(re.a)(a, 2),
            r = n[0],
            i = n[1]
          return l.a.createElement(
            A.a,
            {
              container: !0,
              direction: 'column',
              alignItems: 'center',
              justify: 'center',
            },
            l.a.createElement(
              N.a,
              { color: 'primary.main' },
              l.a.createElement(_.a, { variant: 'h6' }, 'Profile'),
            ),
            l.a.createElement(
              N.a,
              {
                mt: 3,
                mb: 6,
                mx: 1,
                py: 3,
                px: 3,
                border: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderColor: 'primary.main',
              },
              l.a.createElement(
                _.a,
                { variant: 'h6' },
                l.a.createElement(
                  'p',
                  null,
                  null === t || void 0 === t ? void 0 : t.first_name,
                  ' ',
                  null === t || void 0 === t ? void 0 : t.last_name,
                  l.a.createElement('br', null),
                  null === t || void 0 === t ? void 0 : t.email,
                ),
              ),
              l.a.createElement(
                N.a,
                {
                  borderRadius: '5px',
                  width: '50%',
                  bgcolor: 'secondary.main',
                  color: 'text.white',
                },
                l.a.createElement(
                  _.a,
                  { variant: 'h6' },
                  l.a.createElement(
                    'strong',
                    null,
                    null === t || void 0 === t ? void 0 : t.signup_code,
                  ),
                ),
              ),
              l.a.createElement(
                tt,
                {
                  my: 4,
                  variant: 'outlined',
                  color: 'secondary',
                  onClick: function () {
                    return i(!0)
                  },
                },
                'Edit Account',
              ),
              l.a.createElement(
                et,
                {
                  onClose: function () {
                    return i(!1)
                  },
                  'aria-labelledby': 'simple-dialog-title',
                  open: r,
                },
                l.a.createElement(Ze, { toggleModal: i }),
              ),
            ),
          )
        },
        nt = function () {
          var e = Object(c.c)(function (e) {
            return e.auth
          }).user
          return l.a.createElement(Pe, null, l.a.createElement(at, { user: e }))
        },
        rt = function (e) {
          var t = Object(c.b)(),
            a = Object(O.b)().enqueueSnackbar
          return (
            Object(o.useEffect)(function () {
              e.uid && e.token && ue(e, t, a)
            }, []),
            l.a.createElement(
              Pe,
              null,
              l.a.createElement(
                N.a,
                { fontSize: 'h4.fontSize', textAlign: 'center', my: 3 },
                'Activating Account',
              ),
            )
          )
        }
      function ot() {
        return (ot = Object(G.a)(
          Y.a.mark(function e(t) {
            var a, n
            return Y.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        t({ type: 'ACTION_LOAD_CALLS' }),
                        (e.next = 4),
                        ne.get('calls/')
                      )
                    case 4:
                      ;(a = e.sent),
                        (n = a.data),
                        t({ type: 'ACTION_LOAD_CALLS_SUCCESS', calls: n }),
                        (e.next = 13)
                      break
                    case 9:
                      ;(e.prev = 9),
                        (e.t0 = e.catch(0)),
                        console.log(e.t0),
                        t({ type: 'ACTION_LOAD_CALLS_FAIL', error: e.t0 })
                    case 13:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [[0, 9]],
            )
          }),
        )).apply(this, arguments)
      }
      function lt(e) {
        return it.apply(this, arguments)
      }
      function it() {
        return (it = Object(G.a)(
          Y.a.mark(function e(t) {
            var a, n
            return Y.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        t({ type: 'ACTION_LOAD_RECIPIENTS' }),
                        (e.next = 4),
                        ne.get('recipients/')
                      )
                    case 4:
                      ;(a = e.sent),
                        (n = a.data),
                        t({
                          type: 'ACTION_LOAD_RECIPIENTS_SUCCESS',
                          recipients: n,
                        }),
                        (e.next = 13)
                      break
                    case 9:
                      ;(e.prev = 9),
                        (e.t0 = e.catch(0)),
                        console.log(e.t0),
                        t({ type: 'ACTION_LOAD_RECIPIENTS_FAIL', error: e.t0 })
                    case 13:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [[0, 9]],
            )
          }),
        )).apply(this, arguments)
      }
      function st(e, t) {
        return ct.apply(this, arguments)
      }
      function ct() {
        return (ct = Object(G.a)(
          Y.a.mark(function e(t, a) {
            var n
            return Y.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (a.user = oe().id),
                        (e.next = 4),
                        ne.post('recipients/', a)
                      )
                    case 4:
                      return (
                        (n = e.sent),
                        t({
                          type: 'ACTION_CREATE_RECIPIENTS_SUCCESS',
                          recipient: n.data,
                        }),
                        e.abrupt('return', { response: n.data, isError: !1 })
                      )
                    case 9:
                      return (
                        (e.prev = 9),
                        (e.t0 = e.catch(0)),
                        e.abrupt('return', { response: e.t0, isError: !0 })
                      )
                    case 12:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [[0, 9]],
            )
          }),
        )).apply(this, arguments)
      }
      function ut(e, t) {
        return mt.apply(this, arguments)
      }
      function mt() {
        return (mt = Object(G.a)(
          Y.a.mark(function e(t, a) {
            var n
            return Y.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (a.caller = oe().id),
                        (e.next = 4),
                        ne.post('calls/', a)
                      )
                    case 4:
                      return (
                        (n = e.sent),
                        e.abrupt('return', { response: n.data, isError: !1 })
                      )
                    case 8:
                      return (
                        (e.prev = 8),
                        (e.t0 = e.catch(0)),
                        e.abrupt('return', { response: e.t0, isError: !0 })
                      )
                    case 11:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [[0, 8]],
            )
          }),
        )).apply(this, arguments)
      }
      function dt() {
        return (dt = Object(G.a)(
          Y.a.mark(function e(t, a, n, r) {
            var o, l
            return Y.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        ne.patch('calls/'.concat(a.id, '/'), n)
                      )
                    case 3:
                      ;(o = e.sent), (l = 0)
                    case 5:
                      if (!(l < r.length)) {
                        e.next = 12
                        break
                      }
                      if (r[l].id !== a.id) {
                        e.next = 9
                        break
                      }
                      return (
                        n.notes
                          ? (r[l].notes = n.notes)
                          : (r[l].completed = n.completed),
                        e.abrupt('break', 12)
                      )
                    case 9:
                      l++, (e.next = 5)
                      break
                    case 12:
                      return (
                        t({ type: 'ACTION_LOAD_CALLS_SUCCESS', calls: r }),
                        e.abrupt('return', { response: o.data, isError: !1 })
                      )
                    case 16:
                      return (
                        (e.prev = 16),
                        (e.t0 = e.catch(0)),
                        e.abrupt('return', { response: e.t0, isError: !0 })
                      )
                    case 19:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [[0, 16]],
            )
          }),
        )).apply(this, arguments)
      }
      var ht = a(169),
        pt = a.n(ht)
      function gt() {
        var e = Object(j.a)([
          '\n  &.form {\n    padding: 2rem;\n    margin: 2rem 0;\n    border: 1px solid rgb(240, 104, 47);\n    min-height: 100%;\n    .actions {\n      margin-top: 1rem;\n    }\n  }\n',
        ])
        return (
          (gt = function () {
            return e
          }),
          e
        )
      }
      var ft = T.a.div(gt()),
        Et = function (e) {
          var t = e.onSubmit,
            a = (e.errorState, e.toggleModal),
            n = void 0 === a ? null : a,
            r =
              "If you don't know or you'd rather not to say, you can this leave blank"
          return l.a.createElement(
            He.a,
            { maxWidth: 'sm' },
            l.a.createElement(
              ft,
              { className: !n && 'form' },
              l.a.createElement(
                We.a,
                {
                  initialValues: {
                    first_name: '',
                    last_name: '',
                    political_leaning: '',
                    state_registered: '',
                    state_residence: '',
                    registered_to_vote: '',
                  },
                  validationSchema: Fe.b().shape({
                    first_name: Fe.d().required('First Name is required'),
                  }),
                  onSubmit: (function () {
                    var e = Object(G.a)(
                      Y.a.mark(function e(a, n) {
                        var r, o, l, i, s
                        return Y.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.setErrors),
                                  (o = n.setStatus),
                                  (l = n.setSubmitting),
                                  (e.next = 3),
                                  t(a)
                                )
                              case 3:
                                ;(i = e.sent),
                                  (s = i.error) &&
                                    (o({ success: !1 }), r(s), l(!1))
                              case 6:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      }),
                    )
                    return function (t, a) {
                      return e.apply(this, arguments)
                    }
                  })(),
                },
                function (e) {
                  var t = e.errors,
                    a = e.handleBlur,
                    o = e.handleChange,
                    i = e.handleSubmit,
                    s = e.isSubmitting,
                    c = e.touched,
                    u = e.values
                  return l.a.createElement(
                    'form',
                    { onSubmit: i },
                    l.a.createElement(Ge, {
                      error: Boolean(c.first_name && t.first_name),
                      helperText: c.first_name && t.first_name,
                      label: 'First Name',
                      name: 'first_name',
                      handleBlur: a,
                      handleChange: o,
                      values: u,
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(c.last_name && t.last_name),
                      helperText: c.last_name && t.last_name,
                      label: 'Last Name',
                      name: 'last_name',
                      handleBlur: a,
                      handleChange: o,
                      values: u,
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(c.state_residence && t.state_residence),
                      helperText: c.state_residence && t.state_residence,
                      label: 'State Residence',
                      name: 'state_residence',
                      handleBlur: a,
                      handleChange: o,
                      list: ee,
                      description: r,
                      values: u,
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(c.state_registered && t.state_registered),
                      helperText: c.state_registered && t.state_registered,
                      label: 'State Registered',
                      name: 'state_registered',
                      handleBlur: a,
                      handleChange: o,
                      list: ee,
                      description: r,
                      values: u,
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(
                        c.registered_to_vote && t.registered_to_vote,
                      ),
                      helperText: c.registered_to_vote && t.registered_to_vote,
                      label: 'State Registered',
                      name: 'registered_to_vote',
                      handleBlur: a,
                      handleChange: o,
                      list: $,
                      description: r,
                      values: u,
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(
                        c.political_leaning && t.political_leaning,
                      ),
                      helperText: c.political_leaning && t.political_leaning,
                      label: 'Political Leaning',
                      name: 'political_leaning',
                      handleBlur: a,
                      handleChange: o,
                      list: Q,
                      description: r,
                      values: u,
                    }),
                    l.a.createElement(
                      _.a,
                      { variant: 'subtitle2' },
                      l.a.createElement(
                        'i',
                        null,
                        'For your organizational purposes, we want to give you some options for categorizing your calls and your callees. Adding these details in is ',
                        l.a.createElement('strong', null, 'totally optional'),
                        '. We will only ever look at this information for aggregated, anonymized tracking of where The Pledge has spread.',
                      ),
                    ),
                    l.a.createElement('br', null),
                    l.a.createElement(
                      A.a,
                      { container: !0, spacing: 1 },
                      l.a.createElement(
                        A.a,
                        { item: !0, xs: n ? 6 : 12 },
                        l.a.createElement(
                          z.a,
                          {
                            color: 'primary',
                            disabled: s,
                            fullWidth: !0,
                            type: 'submit',
                            variant: 'contained',
                          },
                          'Create New Recipient',
                        ),
                      ),
                      l.a.createElement(
                        A.a,
                        { item: !0, xs: n ? 6 : 0 },
                        n &&
                          l.a.createElement(
                            z.a,
                            {
                              color: 'secondary',
                              fullWidth: !0,
                              onClick: function () {
                                return n(!1)
                              },
                            },
                            'Close',
                          ),
                      ),
                    ),
                  )
                },
              ),
            ),
          )
        },
        bt = function (e) {
          var t = e.toggleModal,
            a = void 0 === t ? null : t,
            n = Object(c.b)(),
            r = Object(O.b)().enqueueSnackbar,
            o = (function () {
              var e = Object(G.a)(
                Y.a.mark(function e(t, o) {
                  var l, i, s
                  return Y.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), st(n, t)
                          case 3:
                            if (((l = e.sent), (i = l.response), !l.isError)) {
                              e.next = 13
                              break
                            }
                            if (
                              ((s = i.response),
                              r(s.data, { variant: 'warning' }),
                              400 !== s.status)
                            ) {
                              e.next = 11
                              break
                            }
                            return e.abrupt('return', { error: s.data })
                          case 11:
                            e.next = 15
                            break
                          case 13:
                            a ? a(!1) : Object(S.c)('dashboard'),
                              r('New Recipient is Created!', {
                                variant: 'success',
                              })
                          case 15:
                            o.preventDefault(), (e.next = 21)
                            break
                          case 18:
                            ;(e.prev = 18),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0)
                          case 21:
                          case 'end':
                            return e.stop()
                        }
                    },
                    e,
                    null,
                    [[0, 18]],
                  )
                }),
              )
              return function (t, a) {
                return e.apply(this, arguments)
              }
            })()
          return l.a.createElement(
            Pe,
            null,
            l.a.createElement(Et, { onSubmit: o, toggleModal: a }),
          )
        }
      function vt() {
        var e = Object(j.a)([
          '\n  padding: 2rem;\n  margin: 10rem 0;\n  border: 1px solid rgb(240, 104, 47);\n  min-height: 100%;\n  @media only screen and (max-width: 800px) {\n    margin: 2rem 0;\n  }\n  .actions {\n    margin-top: 1rem;\n  }\n',
        ])
        return (
          (vt = function () {
            return e
          }),
          e
        )
      }
      function yt() {
        var e = Object(j.a)([
          '\n  && {\n    & > div {\n      padding: 0;\n      form {\n        padding: 0;\n        padding-top: 3rem;\n        padding-bottom: 3rem;\n        margin: 0;\n        border: none;\n      }\n    }\n  }\n',
        ])
        return (
          (yt = function () {
            return e
          }),
          e
        )
      }
      var wt = Object(T.a)(Be.a)(yt()),
        kt = T.a.div(vt()),
        xt = function (e) {
          var t = e.onSubmit,
            a = (e.errorState, e.recipients),
            n = Object(o.useState)(!1),
            r = Object(re.a)(n, 2),
            i = r[0],
            s = r[1]
          return l.a.createElement(
            He.a,
            { maxWidth: 'sm' },
            l.a.createElement(
              kt,
              null,
              l.a.createElement(
                We.a,
                {
                  initialValues: { date: '', recipient: '', notes: '' },
                  validationSchema: Fe.b().shape({
                    date: Fe.a()
                      .required('Date is required')
                      .min(new Date(), "Can't schedule a call in the past")
                      .max(
                        new Date('11/3/2020'),
                        'Make sure you call before Nov 3rd!',
                      ),
                    recipient: Fe.d().required('Recipient is required'),
                  }),
                  onSubmit: (function () {
                    var e = Object(G.a)(
                      Y.a.mark(function e(a, n) {
                        var r, o, l, i, s
                        return Y.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.setErrors),
                                  (o = n.setStatus),
                                  (l = n.setSubmitting),
                                  (e.next = 3),
                                  t(a)
                                )
                              case 3:
                                ;(i = e.sent),
                                  (s = i.error) &&
                                    (o({ success: !1 }), r(s), l(!1))
                              case 6:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      }),
                    )
                    return function (t, a) {
                      return e.apply(this, arguments)
                    }
                  })(),
                },
                function (e) {
                  var t = e.errors,
                    n = e.handleBlur,
                    r = e.handleChange,
                    o = e.handleSubmit,
                    c = e.isSubmitting,
                    u = e.touched,
                    m = e.values
                  return l.a.createElement(
                    'form',
                    { onSubmit: o },
                    l.a.createElement(Ge, {
                      error: Boolean(u.date && t.date),
                      helperText: u.date && t.date,
                      label: 'Date',
                      name: 'date',
                      type: 'date',
                      handleBlur: n,
                      handleChange: r,
                      values: m,
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(u.recipient && t.recipient),
                      helperText: u.recipient && t.recipient,
                      label: 'Recipient',
                      name: 'recipient',
                      handleBlur: n,
                      handleChange: r,
                      values: m,
                      list: a,
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(u.notes && t.notes),
                      helperText: u.notes && t.notes,
                      label: 'Notes',
                      name: 'notes',
                      type: 'notes',
                      handleBlur: n,
                      handleChange: r,
                      values: m,
                      rows: 2,
                    }),
                    l.a.createElement(
                      A.a,
                      { container: !0, spacing: 1, className: 'actions' },
                      l.a.createElement(
                        A.a,
                        { item: !0, xs: 6 },
                        l.a.createElement(
                          z.a,
                          {
                            color: 'primary',
                            disabled: c,
                            fullWidth: !0,
                            type: 'submit',
                            variant: 'contained',
                          },
                          'Create New Call',
                        ),
                      ),
                      l.a.createElement(
                        A.a,
                        { item: !0, xs: 6 },
                        l.a.createElement(
                          z.a,
                          {
                            color: 'default',
                            fullWidth: !0,
                            onClick: function () {
                              return s(!0)
                            },
                          },
                          'Add New Recipient',
                        ),
                      ),
                      l.a.createElement(
                        wt,
                        {
                          onClose: function () {
                            return s(!1)
                          },
                          'aria-labelledby': 'simple-dialog-title',
                          open: i,
                        },
                        l.a.createElement(bt, { toggleModal: s }),
                      ),
                    ),
                  )
                },
              ),
            ),
          )
        },
        St = function () {
          var e = Object(c.b)(),
            t = Object(c.c)(function (e) {
              return e.dashboard
            }).recipients,
            a = Object(O.b)().enqueueSnackbar,
            n = (function () {
              var t = Object(G.a)(
                Y.a.mark(function t(n, r) {
                  var o, l, i
                  return Y.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (n.date = pt()(n.date, 'YYYY-MM-DD').format(
                                'MM-DD-YYYY',
                              )),
                              (t.next = 4),
                              ut(e, n)
                            )
                          case 4:
                            if (((o = t.sent), (l = o.response), !o.isError)) {
                              t.next = 14
                              break
                            }
                            if (400 !== (i = l.response).status) {
                              t.next = 12
                              break
                            }
                            return (
                              a(i.data, { variant: 'warning' }),
                              t.abrupt('return', { error: i.data })
                            )
                          case 12:
                            t.next = 16
                            break
                          case 14:
                            a('New Call is Created!', { variant: 'success' }),
                              Object(S.c)('dashboard')
                          case 16:
                            r.preventDefault(), (t.next = 22)
                            break
                          case 19:
                            ;(t.prev = 19),
                              (t.t0 = t.catch(0)),
                              console.error(t.t0)
                          case 22:
                          case 'end':
                            return t.stop()
                        }
                    },
                    t,
                    null,
                    [[0, 19]],
                  )
                }),
              )
              return function (e, a) {
                return t.apply(this, arguments)
              }
            })(),
            r = {}
          return (
            t.forEach(function (e, t) {
              r[e.id] = ''.concat(e.first_name, ' ').concat(e.last_name)
            }),
            l.a.createElement(
              Pe,
              null,
              l.a.createElement(xt, { onSubmit: n, recipients: r }),
            )
          )
        },
        Ot = a(296),
        Ct = a(282),
        jt = a(283),
        Tt = a(29),
        At = a.n(Tt)
      function It() {
        var e = Object(j.a)([
          '\n  && {\n    min-width: 150px;\n    margin: 1rem;\n  }\n',
        ])
        return (
          (It = function () {
            return e
          }),
          e
        )
      }
      var Nt = Object(T.a)(z.a)(It()),
        _t = function (e) {
          var t = e.label,
            a = e.onClick,
            n = e.active
          return void 0 !== n && n
            ? l.a.createElement(
                Nt,
                { variant: 'contained', color: 'primary', onClick: a },
                t,
              )
            : l.a.createElement(Nt, { onClick: a }, t)
        },
        Dt = a(278),
        Rt = a(293),
        Lt = a(279),
        Pt = a(280),
        Bt = a(281),
        Ft = a(170),
        Wt = a.n(Ft)
      function Ht() {
        var e = Object(j.a)([
          '\n  && {\n    border: 1px solid #e7e7e7;\n    border-radius: 5px;\n    margin-bottom: 1rem;\n  }\n',
        ])
        return (
          (Ht = function () {
            return e
          }),
          e
        )
      }
      function Mt() {
        var e = Object(j.a)([
          '\n  && {\n    align-items: center;\n    .right-col {\n      text-align: right;\n    }\n  }\n',
        ])
        return (
          (Mt = function () {
            return e
          }),
          e
        )
      }
      var Ut = Object(T.a)(A.a)(Mt()),
        zt = Object(T.a)(A.a)(Ht()),
        qt = function (e) {
          var t = e.call,
            a = void 0 === t ? {} : t,
            n = e.recipient,
            r = void 0 === n ? {} : n,
            i = e.updateCallAction,
            s = (e.loading, Object(o.useState)(!1)),
            c = Object(re.a)(s, 2),
            u = c[0],
            m = c[1],
            d = Object(o.useState)(!1),
            h = Object(re.a)(d, 2),
            p = h[0],
            g = h[1],
            f = r.first_name,
            E = r.last_name,
            b = r.state_residence,
            v = r.state_registered,
            y = r.registered_to_vote,
            w = r.political_leaning,
            k = a.notes,
            x = a.completed,
            S = a.date,
            O = Object(o.useState)(k),
            C = Object(re.a)(O, 2),
            j = C[0],
            T = C[1],
            I = function (e, t) {
              console.log('call1', e), i(e, t), g(!1)
            }
          return (
            console.log(S),
            l.a.createElement(
              zt,
              { item: !0, xs: 12 },
              l.a.createElement(
                Ut,
                { container: !0 },
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 8, className: 'left-col' },
                  S &&
                    l.a.createElement(
                      _.a,
                      { variant: 'h6', component: 'h5' },
                      ' ',
                      S,
                    ),
                  l.a.createElement(
                    N.a,
                    { color: 'primary.main' },
                    l.a.createElement(
                      _.a,
                      { variant: 'h5', component: 'subtitle1' },
                      ' ',
                      ''.concat(f, ' ').concat(E),
                    ),
                  ),
                  l.a.createElement('br', null),
                ),
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 4, className: 'right-col' },
                  l.a.createElement(Dt.a, {
                    control: l.a.createElement(Rt.a, {
                      checked: x,
                      name: 'checkedB',
                      color: 'primary',
                      onChange: function (e) {
                        return I(a, { completed: e.target.checked })
                      },
                    }),
                    label: 'Contacted',
                  }),
                ),
              ),
              l.a.createElement(
                Ut,
                { container: !0, spacing: 2 },
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 8, className: 'left-col' },
                  l.a.createElement(
                    _.a,
                    { variant: 'subtitle1', component: 'subtitle1' },
                    ' ',
                    'State Residence',
                  ),
                ),
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 4, className: 'right-col' },
                  l.a.createElement(
                    _.a,
                    { variant: 'subtitle1', component: 'subtitle1' },
                    ee[null === b || void 0 === b ? void 0 : b.toUpperCase()],
                  ),
                ),
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 8, className: 'left-col' },
                  l.a.createElement(
                    _.a,
                    { variant: 'subtitle1', component: 'subtitle1' },
                    ' ',
                    'State Registered',
                  ),
                ),
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 4, className: 'right-col' },
                  l.a.createElement(
                    _.a,
                    { variant: 'subtitle1', component: 'subtitle1' },
                    ee[null === v || void 0 === v ? void 0 : v.toUpperCase()],
                  ),
                ),
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 8, className: 'left-col' },
                  l.a.createElement(
                    _.a,
                    { variant: 'subtitle1', component: 'subtitle1' },
                    ' ',
                    'Registered To Vote',
                  ),
                ),
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 4, className: 'right-col' },
                  l.a.createElement(
                    _.a,
                    { variant: 'subtitle1', component: 'subtitle1' },
                    $[y],
                  ),
                ),
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 8, className: 'left-col' },
                  l.a.createElement(
                    _.a,
                    { variant: 'subtitle1', component: 'subtitle1' },
                    ' ',
                    'Political Leaning',
                  ),
                ),
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 4, className: 'right-col' },
                  l.a.createElement(
                    _.a,
                    { variant: 'subtitle1', component: 'subtitle1' },
                    Q[w],
                  ),
                ),
              ),
              k &&
                l.a.createElement(
                  l.a.Fragment,
                  null,
                  l.a.createElement(
                    N.a,
                    {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                    l.a.createElement(
                      z.a,
                      {
                        color: 'primary',
                        onClick: function () {
                          return m(!u)
                        },
                      },
                      u ? 'Hide Notes' : 'Show Notes',
                    ),
                  ),
                  u &&
                    l.a.createElement(
                      'div',
                      null,
                      l.a.createElement(
                        _.a,
                        { variant: 'subtitle1', component: 'subtitle1' },
                        ' ',
                        l.a.createElement('i', null, '' === k ? 'No Notes' : k),
                      ),
                      l.a.createElement(
                        be.a,
                        {
                          onClick: function () {
                            return g(!0)
                          },
                        },
                        l.a.createElement(Wt.a, null),
                      ),
                      l.a.createElement(
                        Be.a,
                        {
                          onClose: function () {
                            return g(!1)
                          },
                          'aria-labelledby': 'simple-dialog-title',
                          open: p,
                        },
                        l.a.createElement(
                          Lt.a,
                          { id: 'simple-dialog-title' },
                          'Edit Notes',
                        ),
                        l.a.createElement(
                          Pt.a,
                          null,
                          l.a.createElement(Me.a, {
                            id: 'outlined-multiline-static',
                            label: 'Multiline',
                            multiline: !0,
                            rows: 4,
                            defaultValue: 'Default Value',
                            variant: 'outlined',
                            value: j,
                            onChange: function (e) {
                              return T(e.target.value)
                            },
                          }),
                        ),
                        l.a.createElement(
                          Bt.a,
                          null,
                          l.a.createElement(
                            z.a,
                            {
                              autoFocus: !0,
                              onClick: function () {
                                return g(!1)
                              },
                              color: 'primary',
                            },
                            'Cancel',
                          ),
                          l.a.createElement(
                            z.a,
                            {
                              onClick: function () {
                                return I(a, { notes: j })
                              },
                              color: 'primary',
                            },
                            'Ok',
                          ),
                        ),
                      ),
                    ),
                ),
            )
          )
        },
        Vt = function (e) {
          var t = e.calls,
            a = e.recipients,
            n = e.updateCallAction,
            r = e.loading
          return l.a.createElement(
            l.a.Fragment,
            null,
            null === t || void 0 === t
              ? void 0
              : t.map(function (e, t) {
                  var o = a.find(function (t) {
                    return t.id === e.recipient
                  })
                  return l.a.createElement(qt, {
                    call: e,
                    recipient: o,
                    key: t,
                    updateCallAction: n,
                    loading: r,
                  })
                }),
            l.a.createElement(
              A.a,
              { item: !0, xs: 12 },
              l.a.createElement(
                z.a,
                {
                  variant: 'contained',
                  color: 'primary',
                  onClick: function () {
                    return Object(S.c)('create-call')
                  },
                  fullWidth: !0,
                },
                'Schedule Call +',
              ),
            ),
          )
        },
        Yt = function (e) {
          var t = e.recipients
          return l.a.createElement(
            l.a.Fragment,
            null,
            t.map(function (e, t) {
              return l.a.createElement(qt, { recipient: e, key: t })
            }),
            l.a.createElement(
              A.a,
              { item: !0, xs: 12 },
              l.a.createElement(
                z.a,
                {
                  variant: 'contained',
                  color: 'primary',
                  onClick: function () {
                    return Object(S.c)('create-recipient')
                  },
                  fullWidth: !0,
                },
                'Add Recipient +',
              ),
            ),
          )
        }
      function Gt() {
        var e = Object(j.a)(['\n  && {\n    max-width: 616px;\n  }\n'])
        return (
          (Gt = function () {
            return e
          }),
          e
        )
      }
      var Jt = Object(T.a)(A.a)(Gt()),
        Kt = function () {
          var e = Object(o.useState)('calls'),
            t = Object(re.a)(e, 2),
            a = t[0],
            n = t[1],
            r = Object(c.b)(),
            i = Object(c.c)(function (e) {
              return e.dashboard
            }),
            s = i.calls,
            u = i.recipients,
            m = i.loading
          Object(o.useEffect)(
            function () {
              'calls' === a
                ? (!(function (e) {
                    ot.apply(this, arguments)
                  })(r),
                  lt(r))
                : lt(r)
            },
            [a],
          )
          return l.a.createElement(
            Pe,
            null,
            l.a.createElement(
              N.a,
              {
                minHeight: '40vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                bgcolor: 'base.300',
                px: '10vh',
                my: 2,
              },
              l.a.createElement(
                N.a,
                { mb: 1 },
                l.a.createElement(
                  _.a,
                  { variant: 'h4' },
                  l.a.createElement('b', null, 'Dashboard'),
                ),
              ),
              l.a.createElement(
                N.a,
                { textAlign: 'center' },
                l.a.createElement(
                  _.a,
                  { variant: 'h6' },
                  'Don\u2019t worry if you can\u2019t think of a lot of people to call at first. You can come back to this Dashboard at any time to add people to call, and schedule calls.',
                ),
              ),
            ),
            l.a.createElement(
              He.a,
              null,
              l.a.createElement(
                Ot.a,
                { variant: 'outlined', square: !0 },
                l.a.createElement(
                  Ct.a,
                  { expandIcon: l.a.createElement(At.a, null) },
                  l.a.createElement(
                    N.a,
                    {
                      width: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    },
                    l.a.createElement(
                      _.a,
                      { variant: 'h6' },
                      l.a.createElement('b', null, 'What to do after a call'),
                    ),
                    l.a.createElement(
                      C.a,
                      { smDown: !0 },
                      l.a.createElement(
                        _.a,
                        { variant: 'body1', color: 'primary' },
                        'LEARN MORE',
                      ),
                    ),
                  ),
                ),
                l.a.createElement(
                  jt.a,
                  null,
                  l.a.createElement(
                    N.a,
                    null,
                    l.a.createElement(
                      _.a,
                      { variant: 'subtitle1' },
                      'After you have called send a follow-up text or email along these lines:',
                    ),
                    l.a.createElement(
                      _.a,
                      { variant: 'body' },
                      l.a.createElement(
                        'p',
                        null,
                        l.a.createElement('b', null, 'Just after the call:'),
                      ),
                    ),
                    l.a.createElement(
                      _.a,
                      { variant: 'body1' },
                      l.a.createElement(
                        'i',
                        null,
                        l.a.createElement(
                          'ul',
                          null,
                          l.a.createElement(
                            'li',
                            null,
                            'Hey! I\u2019m glad you decided to take the pledge. Here\u2019s a link to get signed up!',
                            ' ',
                            l.a.createElement(
                              I.a,
                              { href: 'sharethepledge.com' },
                              'sharethepledge.com',
                            ),
                          ),
                          l.a.createElement(
                            'li',
                            null,
                            'Hey! I just wanted to reach out about our call earlier, and send a link for you to get registered and find your polling place. These links are easy for getting all the information you need about voting in your state, including important dates, down ballot race information, polling places, and stuff like that. Check any of them out. They should have what you need but let me know if you have any questions!',
                            ' ',
                            l.a.createElement(
                              I.a,
                              { href: 'https://www.vote411.org/ballot' },
                              'Vote411',
                            ),
                            ',',
                            ' ',
                            l.a.createElement(
                              I.a,
                              {
                                href:
                                  'https://www.headcount.org/verify-voter-registration/?source=HChomepage',
                              },
                              'Headcount',
                            ),
                            ',',
                            ' ',
                            l.a.createElement(
                              I.a,
                              { href: 'https://www.voteamerica.com/' },
                              'VoteAmerica',
                            ),
                          ),
                          l.a.createElement(
                            'li',
                            null,
                            'Hey! Re: our call, I just wanted to check and see if you\u2019ve confirmed that you\u2019re registered to vote? Use this link to check:',
                            ' ',
                            l.a.createElement(
                              I.a,
                              {
                                href: 'https://www.usa.gov/voter-registration',
                              },
                              'usa.gov/voter-registration',
                            ),
                          ),
                        ),
                      ),
                    ),
                    l.a.createElement(
                      _.a,
                      { variant: 'body' },
                      l.a.createElement(
                        'p',
                        null,
                        l.a.createElement('b', null, 'Staying in touch:'),
                      ),
                    ),
                    l.a.createElement(
                      _.a,
                      { variant: 'body1' },
                      l.a.createElement(
                        'i',
                        null,
                        l.a.createElement(
                          'ul',
                          null,
                          l.a.createElement(
                            'li',
                            null,
                            "Hey! Just wanted to reach out about our call a few days ago and make sure you\u2019re still planning to vote! Check-ins are good for guaranteeing turn-out! Do you have a day you're planning to vote? Let me know! Use these sites to find info about polling places and whatever else you might need.",
                            ' ',
                            l.a.createElement(
                              I.a,
                              { href: 'https://www.vote411.org/ballot' },
                              'Vote411',
                            ),
                            ',',
                            ' ',
                            l.a.createElement(
                              I.a,
                              {
                                href:
                                  'https://www.headcount.org/verify-voter-registration/?source=HChomepage',
                              },
                              'Headcount',
                            ),
                            ',',
                            ' ',
                            l.a.createElement(
                              I.a,
                              { href: 'https://www.voteamerica.com/' },
                              'VoteAmerica',
                            ),
                            ' ',
                            'Let me know if there\u2019s any way I can help.',
                          ),
                          l.a.createElement(
                            'li',
                            null,
                            'Hey! Just wanted to reach out and see how The Pledge is going for you. Have you signed up yet? Here\u2019s the link if you haven\u2019t signed up yet:',
                            ' ',
                            l.a.createElement(
                              I.a,
                              { href: 'sharethepledge.com' },
                              'sharethepledge.com',
                            ),
                            '!',
                          ),
                          l.a.createElement(
                            'li',
                            null,
                            'Hey! You mentioned when we last talked that you were planning to vote yesterday. Did you end up getting out to vote?',
                          ),
                          l.a.createElement(
                            'li',
                            null,
                            'Hey how have your calls been going so far? Let me know if you want to talk any of them through.',
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
            l.a.createElement(
              N.a,
              { textAlign: 'center', mt: 1 },
              l.a.createElement(
                _.a,
                { variant: 'subtitle1' },
                l.a.createElement(
                  'i',
                  null,
                  'Remember to add notes about your calls to organize your personalized follow up approach!',
                ),
              ),
            ),
            l.a.createElement(
              A.a,
              {
                container: !0,
                alignItems: 'center',
                justify: 'center',
                fullWidth: !0,
              },
              l.a.createElement(
                N.a,
                { p: 1 },
                l.a.createElement(_t, {
                  active: 'calls' === a,
                  label: 'Calls',
                  onClick: function () {
                    return n('calls')
                  },
                }),
              ),
              l.a.createElement(
                N.a,
                { p: 1 },
                l.a.createElement(_t, {
                  active: 'recipients' === a,
                  label: 'Recipients',
                  onClick: function () {
                    return n('recipients')
                  },
                }),
              ),
            ),
            l.a.createElement(
              A.a,
              {
                container: !0,
                alignItems: 'center',
                justify: 'center',
                fullWidth: !0,
              },
              l.a.createElement(
                N.a,
                { px: 2, py: 2 },
                'calls' === a &&
                  l.a.createElement(
                    Jt,
                    { container: !0, spacing: 4 },
                    l.a.createElement(Vt, {
                      calls: s,
                      recipients: u,
                      updateCallAction: function (e, t) {
                        !(function (e, t, a, n) {
                          dt.apply(this, arguments)
                        })(r, e, t, s)
                      },
                      loading: m,
                    }),
                  ),
                'recipients' === a &&
                  l.a.createElement(
                    Jt,
                    { container: !0, spacing: 4 },
                    l.a.createElement(Yt, { recipients: u }),
                  ),
              ),
            ),
          )
        }
      function Xt() {
        var e = Object(j.a)([
          '\n  margin-right: auto;\n  margin-left: auto;\n  background-color: ',
          ';\n  min-height: 40vh;\n  width: 100%;\n',
        ])
        return (
          (Xt = function () {
            return e
          }),
          e
        )
      }
      var Zt = T.a.div(Xt(), function (e) {
          return e.bg
        }),
        Qt = function (e) {
          var t = e.content,
            a = e.children
          return l.a.createElement(
            Zt,
            { bg: t.bg },
            l.a.createElement(
              N.a,
              {
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              },
              a,
              t.title
                ? l.a.createElement(
                    _.a,
                    { variant: 'h4' },
                    l.a.createElement('strong', null, t.title),
                  )
                : null,
              t.description && t.ctaText
                ? l.a.createElement(
                    N.a,
                    {
                      bgcolor: 'secondary.main',
                      borderRadius: '5px',
                      p: 2,
                      textAlign: 'center',
                      color: 'text.white',
                    },
                    l.a.createElement(
                      _.a,
                      { variant: 'h6' },
                      l.a.createElement('strong', null, t.description),
                    ),
                  )
                : null,
              t.description && !t.ctaText
                ? l.a.createElement(
                    N.a,
                    {
                      width: '100%',
                      p: 1,
                      textAlign: 'center',
                      className: 'description',
                      color: 'primary',
                    },
                    l.a.createElement(_.a, { variant: 'h6' }, t.description),
                  )
                : null,
              t.subDescription
                ? l.a.createElement(
                    N.a,
                    {
                      width: '100%',
                      p: 1,
                      textAlign: 'center',
                      className: 'description',
                      color: 'primary',
                    },
                    l.a.createElement(
                      _.a,
                      { variant: 'body1' },
                      t.subDescription,
                    ),
                  )
                : null,
              t.ctaText
                ? l.a.createElement(
                    N.a,
                    { my: 3, px: 2 },
                    l.a.createElement(
                      z.a,
                      {
                        onClick: function () {
                          return Object(S.c)('the-why')
                        },
                        color: 'primary',
                        variant: 'contained',
                      },
                      t.ctaText,
                    ),
                  )
                : null,
            ),
          )
        },
        $t = a(284)
      function ea() {
        var e = Object(j.a)([
          '\n  && {\n    text-align: center;\n    width: 240px;\n    height: 144px;\n    background-color: white;\n    margin-bottom: 1rem;\n    .title {\n      opacity: 20%;\n    }\n  }\n',
        ])
        return (
          (ea = function () {
            return e
          }),
          e
        )
      }
      var ta = Object(T.a)($t.a)(ea()),
        aa = function (e) {
          var t = e.stepID,
            a = e.primaryText
          return l.a.createElement(
            ta,
            null,
            l.a.createElement(
              N.a,
              { m: 0.5, px: 0.5, pt: 1, pb: 'auto' },
              l.a.createElement(
                N.a,
                { fontSize: 'h5.fontSize', mb: 0.5, className: 'title' },
                t,
              ),
              l.a.createElement(
                N.a,
                { fontSize: 'body1.fontSize', fontWeight: 'fontWeightBold' },
                a,
              ),
            ),
          )
        },
        na = a(171),
        ra = '#FFFFFF',
        oa = Object(na.a)({
          palette: {
            primary: {
              main: '#F0682F',
              light: '#FF995C',
              dark: '#B73700',
              contrastText: ra,
            },
            secondary: {
              main: '#004EB1',
              light: '#5579E4',
              dark: '#002781',
              contrastText: ra,
            },
            error: {
              main: '#F02F57',
              light: '#F35878',
              dark: '#A8203C',
              contrastText: ra,
            },
            warning: {
              main: '#F0C92F',
              light: '#F3D358',
              dark: '#A88C20',
              contrastText: '#181B1E',
            },
            success: {
              main: '#2FF068',
              light: '#58F386',
              dark: '#20A848',
              contrastText: '#181B1E',
            },
            base: {
              100: '#F8F9FA',
              200: '#F1F3F5',
              300: '#E9EDF1',
              400: '#CED4DA',
              500: '#ADB5BD',
              600: '#868E96',
              700: '#495057',
              800: '#343A40',
              900: '#181B1E',
            },
            background: { default: ra, layout: '#E9EDF1' },
            text: {
              white: ra,
              disabled: '#E9EDF1',
              hint: '#CED4DA',
              primary: '#343A40',
              secondary: '#868E96',
            },
          },
          spacing: 16,
          typography: {},
        }),
        la =
          (oa.palette.background.layout,
          {
            description:
              'The pledge is our commitment to calling 5 or more people you know before November 3rd and encouraging them to vote blue down the ballot \u2014 to get politicians who threaten our democracy out of office.',
            bg: oa.palette.background.default,
            ctaText: "Why We're Doing This",
          }),
        ia = {
          title: 'Resources',
          description: 'These resources are here help you prep for your calls',
          subDescription:
            'They allow us to do three things: (1) Meet our callees where they are by understanding their core values, beliefs, and viewpoints, (2) Learn skills that help us have more thoughtful, more open conversations, and, (3) Think strategically about where our calls can make the most difference between now and November 3rd',
          bg: oa.palette.background.layout,
        },
        sa = 'Step by Step',
        ca = [
          {
            stepID: 'Step 1',
            primary: 'Take the Pledge',
            description:
              'Sign up, take the Pledge and track your outreach in your dashboard!',
          },
          {
            stepID: 'Step 2',
            primary: 'Choose your callees',
            description:
              "Think about friends or connections you know that you think might not be voting or voting for conservative candidates. People in swing states are a higher priority, but it's best to start with people who most comfortable having potentially tough, political conversations with, and then work your way out.",
          },
          {
            stepID: 'Step 3',
            primary: 'Prep for your calls',
            description:
              'A: Use our Demographic Breakdown Resource [hyper link] to assess where you think your callee most likely falls on the political spectrum and to prepare for what you may encounter in the conversation as a result. \n\n B: Use our Demographic Views Resource [hyper link] to prepare yourself for the nature of the conversation you will likely be having with this person based on their likely views/values. Use this resource to better empathize with their perspective before the call, to prepare how you plan to communicate, and to better contextualize their responses in real time. \n\n C: Use our Key Issues Resource [hyper link] to prep yourself with specific information that it may be helpful to have at your disposal based on the likely key interests/concerns of your callee. \n\n D: Use our Conversation Guide Resource [hyper link] to prepare for how you want to approach the conversation from an interpersonal and emotional perspective. THIS RESOURCE IS PERHAPS MORE IMPORTANT THAN ANY OTHER!',
          },
          {
            stepID: 'Step 4',
            primary: 'Start making calls',
            description:
              'Have any or all of our resource pages open when you make your call. And when you\u2019re done with a call, update your Outreach Portal [hyper link] about how it went!',
          },
          {
            stepID: 'Step 5',
            primary: 'Follow up',
            description:
              "Most calls (even one's that didn't feel particularly successful) will likely require a bit of follow up.-- If your callee agreed to register to vote send them a registration link [hyper link].\n\n-- If you callee thought they had registered send them a check link [hyper link].\n\n -- If your callee agreed to take the pledge, send them the pledge link [hyper link] with your personal sign-up code to help track your impact. \n\nUse our After The Call Resource [hyperlink] for any/all the links/guidance you may need! We even have pre-written follow up texts to save you the hassel, but its better they here from you than from us!",
          },
          {
            stepID: 'Step 6',
            primary: 'Keep in touch',
            description:
              'Hold your friends accountable! Remind them about upcoming voting deadlines and to make their calls. Use our accountability resource [hyper link] for help with text ideas and for links to important info to send your friends. Studies like \u201cVoting to Tell Others,\u201d a 2016 study conducted by a team of behavioral economists from UC Berkeley, the University of Chicago and Harvard, have found that \u201cvoter turnout would increase by 2 percent if the number of times people were asked if they voted doubled,\u201d due exclusively to the phenomenon of people not wanting to have to lie in the future when (they anticipate) they will be asked again. Simple check-ins can go a long way!',
          },
        ]
      function ua() {
        var e = Object(j.a)([
          '\n  && {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-itemns: center;\n    width: 100%;\n  }\n',
        ])
        return (
          (ua = function () {
            return e
          }),
          e
        )
      }
      function ma() {
        var e = Object(j.a)([
          '\n  && {\n    background-color: ',
          ';\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    .learn-more {\n      padding-right: 3rem;\n      padding-left: 3rem;\n    }\n  }\n',
        ])
        return (
          (ma = function () {
            return e
          }),
          e
        )
      }
      function da() {
        var e = Object(j.a)([
          '\n  background-color: ',
          ';\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n',
        ])
        return (
          (da = function () {
            return e
          }),
          e
        )
      }
      var ha = T.a.div(da(), function (e) {
          return e.bg
        }),
        pa = Object(T.a)(N.a)(ma(), function (e) {
          return e.bg
        }),
        ga = Object(T.a)(N.a)(ua()),
        fa = function () {
          return l.a.createElement(
            ha,
            { bg: oa.palette.background.layout },
            l.a.createElement(
              pa,
              { px: 2, py: 4 },
              l.a.createElement(
                N.a,
                {
                  mx: 'auto',
                  px: 2,
                  mb: 1,
                  textAlign: 'center',
                  className: 'title-wrapper',
                },
                l.a.createElement(_.a, { variant: 'h4' }, sa),
              ),
              l.a.createElement(
                He.a,
                { maxWidth: 'md' },
                l.a.createElement(
                  ga,
                  { mb: 1 },
                  ca.map(function (e, t) {
                    return l.a.createElement(aa, {
                      key: t,
                      stepID: e.stepID,
                      primaryText: e.primary,
                    })
                  }),
                ),
              ),
              l.a.createElement(
                z.a,
                {
                  onClick: function () {
                    return Object(S.c)('steps')
                  },
                  variant: 'contained',
                  className: 'learn-more',
                  color: 'primary',
                },
                'Learn More',
              ),
            ),
          )
        },
        Ea = a(55),
        ba = a.n(Ea)
      function va() {
        var e = Object(j.a)(['\n  && {\n    box-shadow: none;\n  }\n'])
        return (
          (va = function () {
            return e
          }),
          e
        )
      }
      function ya() {
        var e = Object(j.a)([
          '\n  && {\n    box-shadow: none;\n    padding: 0;\n  }\n',
        ])
        return (
          (ya = function () {
            return e
          }),
          e
        )
      }
      function wa() {
        var e = Object(j.a)([
          '\n  && {\n    box-shadow: none;\n    padding: 0;\n  }\n',
        ])
        return (
          (wa = function () {
            return e
          }),
          e
        )
      }
      var ka = ''.concat(Z, '/images/phone.jpg'),
        xa = ''.concat(Z, '/images/element5-digital-2i7Dn2uMEQE-unsplash.jpg'),
        Sa = ''.concat(Z, '/images/reachable.jpg'),
        Oa = ''.concat(Z, '/images/swingstates.jpg'),
        Ca = ''.concat(Z, '/images/facebook.jpg'),
        ja = Object(T.a)(Ct.a)(wa()),
        Ta = Object(T.a)(jt.a)(ya()),
        Aa = Object(T.a)(Ot.a)(va()),
        Ia = function () {
          var e = Object(o.useState)(!1),
            t = Object(re.a)(e, 2),
            a = t[0],
            n = t[1]
          return l.a.createElement(
            N.a,
            { py: 2 },
            l.a.createElement(
              A.a,
              { container: !0, spacing: 3, alignItems: 'center' },
              l.a.createElement(
                A.a,
                { item: !0, xs: 12, md: 8 },
                l.a.createElement(
                  Aa,
                  { expanded: a },
                  l.a.createElement(
                    ja,
                    null,
                    l.a.createElement(
                      N.a,
                      null,
                      l.a.createElement(
                        _.a,
                        { mb: 3, variant: 'h4' },
                        'Who To Call',
                      ),
                      l.a.createElement(
                        _.a,
                        { variant: 'body1' },
                        l.a.createElement(
                          'p',
                          null,
                          "President Trump has stated that he will contest this election, and that he does not intend to pass power peacefully. We need to win in key swing states, but, more importantly, we need a landslide to ensure that this election is decided by the people and not by President Trump's new ultraconservative Supreme Court. We need to get as many Americans registered and planning to vote for Biden as possible.",
                        ),
                        l.a.createElement(
                          'p',
                          null,
                          'On September 24th, Eric Trump told supporters at a Las Vegas campaign stop that his father \u201cof course [would] concede\u201d the election \u201cif he got blown out of the water\u201d by Joe Biden.',
                        ),
                        l.a.createElement(
                          'p',
                          null,
                          l.a.createElement(
                            'strong',
                            null,
                            'So, we need to blow him out.',
                          ),
                          ' Every vote counts',
                        ),
                      ),
                    ),
                  ),
                  l.a.createElement(
                    Ta,
                    null,
                    l.a.createElement(
                      N.a,
                      null,
                      l.a.createElement(
                        _.a,
                        { variant: 'h6' },
                        'Here\u2019s who to call:',
                      ),
                      l.a.createElement(
                        _.a,
                        { variant: 'body' },
                        l.a.createElement(
                          'ol',
                          null,
                          l.a.createElement(
                            'li',
                            null,
                            l.a.createElement('strong', null, 'Likelies:'),
                            ' Friends who are likely Biden supporters, but who may need a push to get registered or to actually vote.',
                            l.a.createElement(
                              'ol',
                              { type: 'a' },
                              l.a.createElement(
                                'li',
                                null,
                                'Help them get registered and ready to vote for Biden.',
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                'Encourage them to take the pledge',
                              ),
                            ),
                          ),
                          l.a.createElement(
                            'li',
                            null,
                            l.a.createElement(
                              'strong',
                              null,
                              'Already energized:',
                            ),
                            ' Friends who are already activated to stop Trump and are looking for a way to help.',
                            l.a.createElement(
                              'ol',
                              { type: 'a' },
                              l.a.createElement(
                                'li',
                                null,
                                'Encourage them to take the pledge.',
                              ),
                            ),
                          ),
                          l.a.createElement(
                            'li',
                            null,
                            l.a.createElement(
                              'strong',
                              null,
                              'Unknowns/Non-liberals:',
                            ),
                            ' Friends who may not be planning to vote for Biden',
                            l.a.createElement(
                              'ol',
                              { type: 'a' },
                              l.a.createElement(
                                'li',
                                null,
                                'Call them to understand where they\u2019re coming from, to share your own perspective, and to encourage them to vote blue.',
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                'Help them get registered and, when possible, ready to vote for Biden.',
                              ),
                              l.a.createElement(
                                'li',
                                null,
                                'Encourage them to take the pledge.',
                              ),
                            ),
                          ),
                        ),
                      ),
                      l.a.createElement(
                        _.a,
                        { variant: 'h6' },
                        'Prioritize Swing States!',
                      ),
                      l.a.createElement(
                        _.a,
                        { variant: 'body' },
                        l.a.createElement(
                          'p',
                          null,
                          'It is critical that we reach potential voters in swing states (e.g., PA, FL, WI, MI, and AZ), because this election is impossible to win without them.',
                          l.a.createElement(
                            'strong',
                            null,
                            'Calling friends who live, have lived, or grew up in swing states is our focus, even if they are not currently voting there.',
                          ),
                          ' ',
                          'Larger chunks of ',
                          l.a.createElement('i', null, 'their'),
                          ' networks will be people from that state, making it easier for them to reach people in an authentic way.',
                        ),
                      ),
                      l.a.createElement(
                        _.a,
                        { variant: 'h6' },
                        'The Swing States:',
                      ),
                      l.a.createElement(
                        N.a,
                        { my: 1 },
                        l.a.createElement(
                          He.a,
                          null,
                          l.a.createElement('img', {
                            src: Oa,
                            alt: 'hello',
                            width: '100%',
                          }),
                        ),
                      ),
                      l.a.createElement(
                        _.a,
                        { variant: 'h6' },
                        'Finding Friends in Key States:',
                      ),
                      l.a.createElement(
                        _.a,
                        { variant: 'body' },
                        'Facebook has a feature where you can use any search window to type \u201cMy friends who live in [insert name of swing state].\u201d The results list three names with the option to \u201cSee all.\u201d',
                      ),
                      l.a.createElement(
                        N.a,
                        { my: 1 },
                        l.a.createElement(
                          He.a,
                          null,
                          l.a.createElement('img', {
                            src: Ca,
                            alt: 'hello',
                            width: '100%',
                          }),
                        ),
                      ),
                    ),
                  ),
                ),
                l.a.createElement(
                  z.a,
                  {
                    color: 'primary',
                    onClick: function () {
                      return n(!a)
                    },
                  },
                  'Learn More ',
                  a
                    ? l.a.createElement(ba.a, null)
                    : l.a.createElement(At.a, null),
                ),
              ),
              l.a.createElement(
                C.a,
                { only: ['sm', 'xs'] },
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 12, md: 4 },
                  l.a.createElement('img', {
                    src: ka,
                    width: '100%',
                    alt: 'phone',
                  }),
                ),
              ),
            ),
          )
        },
        Na = function () {
          var e = Object(o.useState)(!1),
            t = Object(re.a)(e, 2),
            a = t[0],
            n = t[1]
          return l.a.createElement(
            N.a,
            { py: 2 },
            l.a.createElement(
              A.a,
              { container: !0, spacing: 2, alignItems: 'center' },
              l.a.createElement(
                C.a,
                { only: ['sm', 'xs'] },
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 12, md: 4 },
                  l.a.createElement('img', {
                    src: Sa,
                    width: '100%',
                    alt: 'reachable',
                  }),
                ),
              ),
              l.a.createElement(
                A.a,
                { item: !0, xs: 12, md: 8 },
                l.a.createElement(
                  Aa,
                  { expanded: a },
                  l.a.createElement(
                    ja,
                    null,
                    l.a.createElement(
                      N.a,
                      null,
                      l.a.createElement(
                        _.a,
                        { mb: 3, variant: 'h4' },
                        'Who is actually reachable...',
                      ),
                      l.a.createElement(
                        _.a,
                        { variant: 'body1' },
                        l.a.createElement(
                          'p',
                          null,
                          'A lot of people actually, both left and right of center.',
                        ),
                        l.a.createElement(
                          'p',
                          null,
                          'Our polarized public discourse suggests that there is an irreconcilable divide between an ideologically fixed right and left. Yet,',
                          ' ',
                          l.a.createElement(
                            'strong',
                            null,
                            'many people are more ready to change their minds and hear different perspectives than our polarized political framework would imply.',
                          ),
                          ' ',
                          'These people, ideologically, fall both left and right of center, but with the',
                          ' ',
                          l.a.createElement(
                            'strong',
                            null,
                            'right kind of conversation',
                          ),
                          ' - one with a friend - all are potential Biden supporters.',
                        ),
                      ),
                    ),
                  ),
                  l.a.createElement(
                    Ta,
                    null,
                    l.a.createElement(
                      _.a,
                      { variant: 'body1' },
                      l.a.createElement(
                        'p',
                        null,
                        'Our culture\u2019s polarized picture of America is a bit over dramatic. \u201cPolitical polls and years of knife-edge elections have convinced many that our country has become a 50:50 society, divided into two opposing political tribes and trapped in a spiral of conflict and division.\u201d A 2018 study called',
                        ' ',
                        l.a.createElement(
                          I.a,
                          { href: 'https://hiddentribes.us/' },
                          '\u201cHiddenTribes: A Study of America\u2019s Polarized Landscape\u201d',
                        ),
                        ' ',
                        'found that',
                        ' ',
                        l.a.createElement(
                          'strong',
                          null,
                          l.a.createElement(
                            'i',
                            null,
                            'this dichotomy was wrong.',
                          ),
                        ),
                        ' ',
                        'Instead, the majority of Americans (',
                        l.a.createElement('strong', null, 'around 67%'),
                        ') actually fall into a group that they refer to as the ',
                        l.a.createElement('strong', null, 'Exhausted Majority'),
                        ':',
                      ),
                      l.a.createElement(
                        'p',
                        null,
                        l.a.createElement(
                          'i',
                          null,
                          'In talking to everyday Americans, we have found a large segment of the population whose voices are rarely heard above the shouts of the partisan tribes. These are people who believe that Americans have more in common than that which divides them...',
                          l.a.createElement('br', null),
                          l.a.createElement('br', null),
                          'The Exhausted Majority contains distinct groups of people with varying degrees of political understanding and activism. But they share a sense of fatigue with our polarized national conversation, a willingness to be flexible in their political viewpoints... [a belief] that compromise is necessary in politics, as in other parts of life, and [a desire] to see the country come together and solve its problems.',
                        ),
                      ),
                    ),
                  ),
                ),
                l.a.createElement(
                  z.a,
                  {
                    color: 'primary',
                    onClick: function () {
                      return n(!a)
                    },
                  },
                  'Learn More ',
                  a
                    ? l.a.createElement(ba.a, null)
                    : l.a.createElement(At.a, null),
                ),
              ),
            ),
          )
        },
        _a = function () {
          var e = Object(o.useState)(!1),
            t = Object(re.a)(e, 2),
            a = t[0],
            n = t[1]
          return l.a.createElement(
            N.a,
            { py: 2 },
            l.a.createElement(
              A.a,
              { container: !0, spacing: 2, alignItems: 'center' },
              l.a.createElement(
                A.a,
                { item: !0, xs: 12, md: 8 },
                l.a.createElement(
                  Aa,
                  { expanded: a },
                  l.a.createElement(
                    ja,
                    null,
                    l.a.createElement(
                      N.a,
                      null,
                      l.a.createElement(
                        _.a,
                        { mb: 3, variant: 'h4' },
                        'Why this works\u2026',
                      ),
                      l.a.createElement(
                        _.a,
                        { variant: 'body1' },
                        l.a.createElement(
                          'p',
                          null,
                          'Studies of what motivates behavior and changes minds show that \u201cfriends have a [notably] stronger behavioral effect on each other\u201d than strangers do. Yet a huge portion of traditional campaigning strategy relies on stranger-to-stranger communication (',
                          l.a.createElement(
                            I.a,
                            {
                              href:
                                'https://www.nature.com/articles/nature11421',
                            },
                            'Study',
                          ),
                          ').',
                        ),
                        l.a.createElement(
                          'p',
                          null,
                          'Friendships and pre-existing relationships are a campaigning resource that has not yet been thoroughly tapped. We believe that by combining the efficient outreach technique of phone calls with the personal connection of pre-existing relationships \u2013 in effect,',
                          ' ',
                          l.a.createElement(
                            'strong',
                            null,
                            'highly personalized phone-banking',
                          ),
                          '\u2013 we can achieve much higher campaign efficacy than ever before.',
                        ),
                      ),
                    ),
                  ),
                  l.a.createElement(
                    Ta,
                    null,
                    l.a.createElement(
                      _.a,
                      { variant: 'body1', mr: 2 },
                      l.a.createElement(
                        'p',
                        null,
                        'People are much more likely to change their minds on important issues when they discuss them with people within their sphere of social and family connections. We are profoundly influenced in our actions and beliefs by people we see as part of our communities, and',
                        ' ',
                        l.a.createElement(
                          'strong',
                          null,
                          'the closer we perceive someone to be, the more their thinking and behavior affects us.',
                        ),
                        ' ',
                        '(See studies detailed in book',
                        ' ',
                        l.a.createElement(
                          I.a,
                          { href: 'http://www.connectedthebook.com/' },
                          '\u201cConnected\u201d',
                        ),
                        ') This holds true for political beliefs and activity (like voting). Conversations among friends, family, and neighborly acquaintances have a large impact on whether and how people vote. (',
                        l.a.createElement(
                          I.a,
                          {
                            href: 'https://www.jstor.org/stable/1515378?seq=1',
                          },
                          'People Who Talk Together Vote Together',
                        ),
                        '). A 2016 study called \u201c',
                        l.a.createElement(
                          I.a,
                          {
                            href:
                              'https://academic.oup.com/restud/article/84/1/143/2684500',
                          },
                          'Voting to Tell Others',
                        ),
                        ',\u201d found that \u201cvoter turnout would increase by 2 percent if the number of times people were asked if they voted doubled,\u201d simply because people did not want to have to lie \u2013 that is, to say they voted when they really didn\u2019t \u2013 when asked again.',
                      ),
                      l.a.createElement(
                        'p',
                        null,
                        'Moreover, there are measurable correlations between how frequently people talk about voting and how likely they are to actually get out to vote.',
                        ' ',
                        l.a.createElement(
                          I.a,
                          {
                            href:
                              'https://www.britishelectionstudy.com/bes-resources/are-we-influenced-by-how-our-friends-vote/#.X5EcK9NKiWY',
                          },
                          'Surveys',
                        ),
                        ' ',
                        'find that chronic non-voters are often unable to name anyone at all with whom they discuss politics, which \u201cremind[s] us that',
                        ' ',
                        l.a.createElement(
                          'strong',
                          null,
                          'political discussion is itself an indicator of political engagement.\u201d Just talking to people about voting makes them more likely to vote!',
                        ),
                        ' ',
                        'A Knight Foundation study, \u201c',
                        l.a.createElement(
                          I.a,
                          {
                            href:
                              'https://knightfoundation.org/reports/the-100-million-project/',
                          },
                          'The 100 Million Project',
                        ),
                        ',\u201d surveyed some \u201c12,000 chronic non-voters nationally and in 10 swing states, soliciting their views, attitudes and behaviors on a wide range of topics.\u201d It found that a conversation with a trusted friend about how to vote was the second most frequently listed factor that would motivate non-voters to vote (behind a neutral source of information about candidates and issues). Conversations with friends mobilize otherwise uncommitted voters.',
                      ),
                      l.a.createElement(
                        'p',
                        null,
                        'With public cynicism and distrust in institutions at an all-time high, people need to hear from people they already know and trust about the issues that matter, and about why their vote matters.',
                      ),
                    ),
                  ),
                ),
                l.a.createElement(
                  z.a,
                  {
                    color: 'primary',
                    onClick: function () {
                      return n(!a)
                    },
                  },
                  'Learn More ',
                  a
                    ? l.a.createElement(ba.a, null)
                    : l.a.createElement(At.a, null),
                ),
              ),
              l.a.createElement(
                C.a,
                { only: ['sm', 'xs'] },
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 12, md: 4 },
                  l.a.createElement('img', {
                    src: xa,
                    width: '100%',
                    alt: 'voteimg',
                  }),
                ),
              ),
            ),
          )
        },
        Da = function () {
          return l.a.createElement(
            He.a,
            null,
            l.a.createElement(Ia, null),
            l.a.createElement(Na, null),
            l.a.createElement(_a, null),
          )
        },
        Ra = ''.concat(Z, '/images/logo.svg'),
        La = function () {
          return l.a.createElement(
            Pe,
            null,
            l.a.createElement(
              Qt,
              { content: la },
              l.a.createElement('img', {
                src: Ra,
                height: '100rem',
                alt: 'logo',
              }),
              l.a.createElement('br', null),
            ),
            l.a.createElement(fa, null),
            l.a.createElement(Da, null),
          )
        }
      function Pa() {
        var e = Object(j.a)([
          '\n  padding: 2rem;\n  margin: 10rem 0;\n  border: 1px solid rgb(240, 104, 47);\n  @media only screen and (max-width: 800px) {\n    margin: 2rem 0;\n  }\n  min-height: 100%;\n  .actions {\n    margin-top: 1rem;\n  }\n',
        ])
        return (
          (Pa = function () {
            return e
          }),
          e
        )
      }
      var Ba = T.a.div(Pa()),
        Fa = function (e) {
          var t = e.onSubmit
          return l.a.createElement(
            He.a,
            { maxWidth: 'sm' },
            l.a.createElement(
              Ba,
              null,
              l.a.createElement(
                We.a,
                {
                  initialValues: { email: '', password: '' },
                  validationSchema: Fe.b().shape({
                    email: Fe.d()
                      .email('Must be a valid email')
                      .max(255)
                      .required('Email is required'),
                    password: Fe.d()
                      .min(7)
                      .max(255)
                      .required('Password is required'),
                  }),
                  onSubmit: (function () {
                    var e = Object(G.a)(
                      Y.a.mark(function e(a, n) {
                        var r, o, l, i, s
                        return Y.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.setErrors),
                                  (o = n.setStatus),
                                  (l = n.setSubmitting),
                                  (e.next = 3),
                                  t(a)
                                )
                              case 3:
                                ;(i = e.sent),
                                  (s = i.error) &&
                                    (o({ success: !1 }), r(s), l(!1))
                              case 6:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      }),
                    )
                    return function (t, a) {
                      return e.apply(this, arguments)
                    }
                  })(),
                },
                function (e) {
                  var t = e.errors,
                    a = e.handleBlur,
                    n = e.handleChange,
                    r = e.handleSubmit,
                    o = e.isSubmitting,
                    i = e.touched,
                    s = e.values
                  return l.a.createElement(
                    'form',
                    { onSubmit: r },
                    l.a.createElement(Ge, {
                      error: Boolean(i.email && t.email),
                      helperText: i.email && t.email,
                      label: 'Email',
                      name: 'email',
                      type: 'email',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(i.password && t.password),
                      helperText: i.password && t.password,
                      label: 'Password',
                      name: 'password',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                      type: 'password',
                    }),
                    l.a.createElement(
                      N.a,
                      { my: 1 },
                      l.a.createElement(
                        z.a,
                        {
                          color: 'primary',
                          disabled: o,
                          fullWidth: !0,
                          type: 'submit',
                          variant: 'contained',
                        },
                        'Login',
                      ),
                    ),
                    l.a.createElement(
                      z.a,
                      {
                        component: S.a,
                        to: '/reset-password',
                        color: 'secondary',
                      },
                      'Forgot Password',
                    ),
                  )
                },
              ),
            ),
          )
        },
        Wa = function () {
          var e = Object(c.b)(),
            t = Object(O.b)().enqueueSnackbar,
            a = (function () {
              var a = Object(G.a)(
                Y.a.mark(function a(n) {
                  return Y.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.prev = 0), (a.next = 3), se(t, e, n)
                          case 3:
                            a.next = 8
                            break
                          case 5:
                            ;(a.prev = 5),
                              (a.t0 = a.catch(0)),
                              console.error(a.t0)
                          case 8:
                          case 'end':
                            return a.stop()
                        }
                    },
                    a,
                    null,
                    [[0, 5]],
                  )
                }),
              )
              return function (e) {
                return a.apply(this, arguments)
              }
            })()
          return l.a.createElement(
            Pe,
            null,
            l.a.createElement(Fa, { onSubmit: a }),
          )
        },
        Ha = function (e) {
          var t = e.tab,
            a = e.setTab
          return l.a.createElement(
            He.a,
            null,
            l.a.createElement(
              N.a,
              {
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                flexWrap: 'wrap',
                py: 1,
                pb: 3,
              },
              l.a.createElement(_t, {
                active: 'demographics' === t,
                label: 'Political Identities',
                onClick: function () {
                  return a('demographics')
                },
              }),
              l.a.createElement(_t, {
                active: 'common-views' === t,
                label: 'Views & Response Prep',
                onClick: function () {
                  return a('common-views')
                },
              }),
              l.a.createElement(_t, {
                active: 'call-tactics' === t,
                label: 'Conversation Guide',
                onClick: function () {
                  return a('call-tactics')
                },
              }),
              l.a.createElement(_t, {
                active: 'key-issues' === t,
                label: 'Key Issues',
                onClick: function () {
                  return a('key-issues')
                },
              }),
              l.a.createElement(_t, {
                active: 'swing-states' === t,
                label: 'Critical States',
                onClick: function () {
                  return a('swing-states')
                },
              }),
            ),
          )
        },
        Ma = a(297),
        Ua = a(137),
        za = a.n(Ua),
        qa = a(138),
        Va = a.n(qa),
        Ya = function (e) {
          var t = e.slides,
            a = Object(o.useState)(0),
            n = Object(re.a)(a, 2),
            r = n[0],
            i = n[1],
            s = t.length
          return l.a.createElement(
            N.a,
            null,
            l.a.createElement('img', {
              src: t[r],
              alt: 'framework',
              width: '100%',
            }),
            l.a.createElement(Ma.a, {
              steps: s,
              position: 'static',
              variant: 'text',
              activeStep: r,
              nextButton: l.a.createElement(
                z.a,
                {
                  size: 'small',
                  onClick: function () {
                    i(function (e) {
                      return e + 1
                    })
                  },
                  disabled: r === s - 1,
                },
                'Next',
                'rtl' === oa.direction
                  ? l.a.createElement(za.a, null)
                  : l.a.createElement(Va.a, null),
              ),
              backButton: l.a.createElement(
                z.a,
                {
                  size: 'small',
                  onClick: function () {
                    i(function (e) {
                      return e - 1
                    })
                  },
                  disabled: 0 === r,
                },
                'rtl' === oa.direction
                  ? l.a.createElement(Va.a, null)
                  : l.a.createElement(za.a, null),
                'Back',
              ),
            }),
          )
        },
        Ga = a(298),
        Ja = a(285),
        Ka = a(294)
      function Xa() {
        var e = Object(j.a)([
          '\n  && {\n    flex-wrap: wrap;\n    & > div {\n      margin-bottom: 1rem;\n    }\n  }\n',
        ])
        return (
          (Xa = function () {
            return e
          }),
          e
        )
      }
      var Za = Object(T.a)(Ga.a)(Xa()),
        Qa = function (e) {
          var t = e.slides,
            a = Object(o.useState)(0),
            n = Object(re.a)(a, 2),
            r = n[0],
            i = n[1],
            s = [
              'Alabama',
              'Arizona',
              'Colorado',
              'Florida',
              'Georgia',
              'Iowa',
              'Kansas',
              'Maine',
              'Michigan',
              'Minnesota',
              'Montana',
              'North Carolina',
              'New Hampshire',
              'Nevada',
              'Ohio',
              'Pennsylvania',
              'Texas',
              'Wisconsin',
            ]
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              N.a,
              null,
              l.a.createElement('img', { src: t[r], alt: s[r], width: '100%' }),
            ),
            l.a.createElement(
              Za,
              {
                alternativeLabel: !0,
                nonLinear: !0,
                activeStep: r,
                connector: !1,
              },
              s.map(function (e, t) {
                return l.a.createElement(
                  Ja.a,
                  { key: e },
                  l.a.createElement(
                    Ka.a,
                    {
                      onClick:
                        ((a = t),
                        function () {
                          i(a)
                        }),
                    },
                    e,
                  ),
                )
                var a
              }),
            ),
          )
        },
        $a = function (e) {
          return l.a.createElement(
            z.a,
            e,
            l.a.createElement(
              I.a,
              {
                target: '_blank',
                rel: 'noreferrer noopener',
                href: e.href,
                color: e.linkColor,
              },
              e.children,
            ),
          )
        },
        en = ''.concat(Z, '/images/framework1-1.png'),
        tn = ''.concat(Z, '/images/framework1-2.png'),
        an = ''.concat(Z, '/images/framework1-3.png'),
        nn = ''.concat(Z, '/images/framework1-4.png'),
        rn = ''.concat(Z, '/images/framework1-5.png'),
        on = ''.concat(Z, '/images/framework1-6.png'),
        ln = ''.concat(Z, '/images/framework1-7.png'),
        sn = ''.concat(Z, '/images/framework2-1.png'),
        cn = ''.concat(Z, '/images/framework2-2.png'),
        un = ''.concat(Z, '/images/framework2-3.png'),
        mn = ''.concat(Z, '/images/framework2-4.png'),
        dn = ''.concat(Z, '/images/framework2-5.png'),
        hn = ''.concat(Z, '/images/framework2-6.png'),
        pn = ''.concat(Z, '/images/framework2-7.png'),
        gn = ''.concat(Z, '/images/framework2-8.png'),
        fn = ''.concat(Z, '/images/framework2-9.png'),
        En = ''.concat(Z, '/images/framework2-10.png'),
        bn = ''.concat(Z, '/images/framework2-11.png'),
        vn = ''.concat(Z, '/images/framework2-12.png'),
        yn = ''.concat(Z, '/images/swing-states-al.png'),
        wn = ''.concat(Z, '/images/swing-states-az.png'),
        kn = ''.concat(Z, '/images/swing-states-co.png'),
        xn = ''.concat(Z, '/images/swing-states-fl.png'),
        Sn = ''.concat(Z, '/images/swing-states-ga.png'),
        On = ''.concat(Z, '/images/swing-states-ia.png'),
        Cn = ''.concat(Z, '/images/swing-states-ks.png'),
        jn = ''.concat(Z, '/images/swing-states-me.png'),
        Tn = ''.concat(Z, '/images/swing-states-mi.png'),
        An = ''.concat(Z, '/images/swing-states-mn.png'),
        In = ''.concat(Z, '/images/swing-states-mt.png'),
        Nn = ''.concat(Z, '/images/swing-states-nc.png'),
        _n = ''.concat(Z, '/images/swing-states-nh.png'),
        Dn = ''.concat(Z, '/images/swing-states-nv.png'),
        Rn = ''.concat(Z, '/images/swing-states-oh.png'),
        Ln = ''.concat(Z, '/images/swing-states-pa.png'),
        Pn = ''.concat(Z, '/images/swing-states-tx.png'),
        Bn = ''.concat(Z, '/images/swing-states-wi.png'),
        Fn = [en, tn, an, nn, rn, on, ln],
        Wn = [sn, cn, un, mn, dn, hn, pn, gn, fn, En, bn, vn],
        Hn = [
          yn,
          wn,
          kn,
          xn,
          Sn,
          On,
          Cn,
          jn,
          Tn,
          An,
          In,
          Nn,
          _n,
          Dn,
          Rn,
          Ln,
          Pn,
          Bn,
        ],
        Mn = ''.concat(Z, '/images/frameworks-intro1.png'),
        Un = ''.concat(Z, '/images/frameworks-intro2.png'),
        zn = function () {
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(
              N.a,
              { textAlign: 'center', mb: 2 },
              l.a.createElement(
                _.a,
                { variant: 'h6' },
                l.a.createElement(
                  'strong',
                  null,
                  'To talk to people about challenging topics, we need to understand where they might fall on the political spectrum. The Political Identities resource is here to help us think with more nuance about beliefs and motivations.',
                ),
              ),
            ),
            l.a.createElement(
              _.a,
              { variant: 'body1' },
              l.a.createElement(
                'p',
                null,
                'People often present their political views \u2013 even to themselves \u2013 as factual statements of how things are and how things should be. But our views are almost always the product of our feelings and our value systems (yes, even yours!). We often use facts and data to help us justify what we feel, more than to inform what we should feel.',
              ),
              l.a.createElement(
                'p',
                null,
                'Despite intense political differences, everyone\u2019s beliefs and values overlap to some degree. If we can assess where our friend most likely falls on the political spectrum, we can gain insight into the values most central to their world views and be better prepared for having productive conversations. We can tap into our innate understanding of one anothers\u2019 values and beliefs, if we try.',
              ),
              l.a.createElement(
                'p',
                null,
                'To get an overview of the different political identities people might hold, we recommend this 19-minute',
                ' ',
                l.a.createElement(
                  I.a,
                  {
                    target: '_blank',
                    rel: 'noreferrer noopener',
                    href:
                      'https://www.join-theconversation.com/conversations/episode/c1833383/daniel-yudkin-americas-hidden-tribes',
                  },
                  'podcast with Daniel Yudkin',
                ),
                ', one of the writers of \u201cAmerica\u2019s Hidden Tribes\u201d report.',
              ),
            ),
            l.a.createElement(
              N.a,
              {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              },
              l.a.createElement(
                A.a,
                { container: !0 },
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 12, lg: 6 },
                  l.a.createElement('img', {
                    src: Mn,
                    alt: 'frameworks-intro1',
                    width: '100%',
                  }),
                ),
                l.a.createElement(
                  A.a,
                  { item: !0, xs: 12, lg: 6 },
                  l.a.createElement('img', {
                    src: Un,
                    alt: 'frameworks-intro2',
                    width: '100%',
                  }),
                ),
              ),
              l.a.createElement(Ya, { slides: Fn }),
              l.a.createElement('br', null),
              l.a.createElement(Ya, { slides: Wn }),
              l.a.createElement(
                N.a,
                {
                  width: '80%',
                  p: 1,
                  my: 2,
                  border: 1,
                  borderColor: 'primary.main',
                },
                l.a.createElement(
                  _.a,
                  { variant: 'body1' },
                  'If you want to see a',
                  ' ',
                  l.a.createElement(
                    'b',
                    null,
                    'stunningly clear example of value systems at work',
                  ),
                  ', read this',
                  ' ',
                  l.a.createElement(
                    I.a,
                    {
                      target: '_blank',
                      rel: 'noreferrer noopener',
                      href:
                        'https://www.chicksonright.com/blog/2020/08/24/its-not-that-we-love-donald-trump-so-much-its-that-we-cant-stand-you/',
                    },
                    'open letter',
                  ),
                  ' ',
                  'to liberals. For a breakdown of the values and beliefs we see at play in this op-ed, click',
                  ' ',
                  l.a.createElement(
                    I.a,
                    {
                      target: '_blank',
                      rel: 'noreferrer noopener',
                      href:
                        'https://docs.google.com/document/d/1_bS54pzCO6NrD5aGORq8mTH4-FE8YFbs33_i9uULHjg/edit?usp=sharing',
                    },
                    'here',
                  ),
                ),
              ),
            ),
          )
        },
        qn = function () {
          return l.a.createElement(
            N.a,
            {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 2,
            },
            l.a.createElement(
              _.a,
              { variant: 'body1' },
              l.a.createElement(
                'p',
                null,
                'Once we assess where our friends most likely fall on the political spectrum, we can prepare for some of the views that may come up in our conversation with them.',
                l.a.createElement(
                  'b',
                  null,
                  'There are an infinite number of political views that could come up in a conversation about politics, and we cannot be prepared to address all of them.',
                ),
              ),
              l.a.createElement(
                'p',
                null,
                'Getting into the weeds on a particular issue may sometimes be necessary, but it\u2019s helpful to frame your broader intention in the conversation with an overall goal of',
                ' ',
                l.a.createElement(
                  'b',
                  null,
                  'saying what your friend needs to hear to be motivated to vote for Biden',
                ),
                ' ',
                '- and saying it in a way that they can hear. Though people may claim to be concerned about an issue, what they need to hear may actually be much \u201cbigger picture\u201d than that.',
              ),
              l.a.createElement(
                'p',
                null,
                'Once you\u2019ve assessed where your friend likely falls on the political spectrum, give these common views and responses a look. These responses are not meant to provide exact language for a response; instead, they are meant to provide you with perspective on what a thoughtful response might look like/include.',
              ),
            ),
            l.a.createElement(
              N.a,
              { mb: 1 },
              l.a.createElement(
                _.a,
                { variant: 'h6' },
                l.a.createElement('b', null, 'Resource'),
              ),
            ),
            l.a.createElement(
              He.a,
              { maxWidth: 'xs' },
              l.a.createElement(
                N.a,
                {
                  p: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  b: 1,
                  bgcolor: 'base.300',
                  border: 1,
                  borderColor: 'base.900',
                },
                l.a.createElement(
                  $a,
                  {
                    variant: 'contained',
                    color: 'secondary',
                    linkColor: 'inherit',
                    href:
                      'https://docs.google.com/document/d/1E1DpvhtSdoRn2Ak3EpBJnmV2-PljygTlcTp0zY43xLs/edit?usp=sharing',
                  },
                  'Views & Response Prep',
                ),
              ),
            ),
          )
        },
        Vn = function () {
          return l.a.createElement(
            N.a,
            {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 2,
            },
            l.a.createElement(
              _.a,
              { variant: 'body1' },
              l.a.createElement(
                'p',
                null,
                'Now that we have a sense of the different types of political identities and value systems that people hold,',
                ' ',
                l.a.createElement(
                  'b',
                  null,
                  'let\u2019s get into the real work: the conversations.',
                ),
              ),
              l.a.createElement(
                'p',
                null,
                'This is a resource of tips and tricks for navigating phone calls in a healthy way. What might we hear on calls, and how might we respond thoughtfully? How do we challenge others from a place of care, rather than from a place of judgment? The point of these tips is to help us manage our emotions and communication styles so that we can have productive, respectful conversations. While we can\u2019t predict what every (or, for that matter, any!) conversation will look like, we can build a shared toolkit that can be adapted to different contexts.',
              ),
              l.a.createElement(
                'p',
                null,
                l.a.createElement(
                  'strong',
                  null,
                  'The work is messy, and we\u2019re capable of doing it.',
                ),
              ),
            ),
            l.a.createElement(
              N.a,
              { mb: 1 },
              l.a.createElement(
                _.a,
                { variant: 'h6' },
                l.a.createElement('b', null, 'Resource'),
              ),
            ),
            l.a.createElement(
              He.a,
              { maxWidth: 'xs' },
              l.a.createElement(
                N.a,
                {
                  p: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'base.300',
                  border: 1,
                  borderColor: 'base.900',
                },
                l.a.createElement(
                  $a,
                  {
                    variant: 'contained',
                    color: 'secondary',
                    linkColor: 'inherit',
                    href:
                      'https://docs.google.com/document/d/1z-V_mOlN5EXXA-dpMjy5GcxPP8tWnva4iwHX1pFvkys/edit?usp=sharing',
                  },
                  'Conversation Guide',
                ),
              ),
            ),
          )
        },
        Yn = function () {
          return l.a.createElement(
            N.a,
            {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mb: 2,
            },
            l.a.createElement(
              _.a,
              { variant: 'body1' },
              l.a.createElement(
                'p',
                null,
                'This resource is here to provide a breakdown of the main issues that are central to this election. We provide an overview, as well as common misconceptions that might come up when folks who identify as conservative engage with the issue. This guide is written by liberal and progressive voters, and it will resonate more strongly with those who identify as liberal.',
              ),
            ),
            l.a.createElement(
              N.a,
              { mb: 1 },
              l.a.createElement(
                _.a,
                { variant: 'h6' },
                l.a.createElement('b', null, 'Resource'),
              ),
            ),
            l.a.createElement(
              He.a,
              { maxWidth: 'xs' },
              l.a.createElement(
                N.a,
                {
                  p: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'base.300',
                  border: 1,
                  borderColor: 'base.900',
                },
                l.a.createElement(
                  $a,
                  {
                    variant: 'contained',
                    color: 'secondary',
                    linkColor: 'inherit',
                    href:
                      'https://docs.google.com/document/d/1RbH9v1q7esVcfJaDdcFYHjEumHR_F7MBtm8ZYf55xAY/edit?usp=sharing',
                  },
                  'Key Issues',
                ),
              ),
            ),
          )
        },
        Gn = function () {
          return l.a.createElement(
            N.a,
            {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            },
            l.a.createElement(
              _.a,
              { variant: 'h6' },
              l.a.createElement(
                N.a,
                { textAlign: 'center' },
                l.a.createElement(
                  'b',
                  null,
                  'This resource is here to help you learn more about the critical places that will drive important outcomes on November 3rd.',
                ),
              ),
            ),
            l.a.createElement(
              _.a,
              { variant: 'body1' },
              l.a.createElement(
                'p',
                null,
                'These sites collectively (and perhaps even individually) have all the information you, or your friend/callee could possibly need about voting on a state by state basis from important dates to registration services to down ballot election information (including links to candidates websites) to first-time-voter checklists, tips, and advice, these websites have it all. Send your friend these links to help them get/stay organized after your call!',
              ),
            ),
            l.a.createElement(
              N.a,
              { mb: 2, border: 1, borderColor: 'primary.main' },
              l.a.createElement(
                _.a,
                { variant: 'body1' },
                l.a.createElement(
                  'ul',
                  null,
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      I.a,
                      {
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        href: 'https://www.vote411.org/ballot',
                      },
                      'Vote411',
                    ),
                    ': Everything. Important dates, down ballot race information and links to candidate websites, registration links and check sites, polling place information, etc.',
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      I.a,
                      {
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        href:
                          'https://www.headcount.org/verify-voter-registration/?source=HChomepage',
                      },
                      'Headcount',
                    ),
                    ': Also everything.',
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      I.a,
                      {
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        href: 'https://www.voteamerica.com/',
                      },
                      'VoteAmerica',
                    ),
                    ': Easy registration, find out where to vote, track your ballot, check your registration status, register to vote, vote by mail information, request your absentee ballot, receive election reminders, contact your election office, etc.',
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      I.a,
                      {
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        href:
                          'https://www.nytimes.com/interactive/2020/09/24/us/politics/how-to-vote-register.html',
                      },
                      'NYTimes Interactive How-to-vote/register',
                    ),
                    ': Key dates, registration info, detailed/helpful voting information. Requires NYT login.',
                  ),
                  l.a.createElement(
                    'li',
                    null,
                    l.a.createElement(
                      I.a,
                      {
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        href: 'https://www.usa.gov/voter-registration',
                      },
                      'usa.gov/voter-registration',
                    ),
                    ': Voter registration checks and info.',
                  ),
                ),
              ),
            ),
            l.a.createElement(Qa, { slides: Hn }),
          )
        },
        Jn = function (e) {
          e.children
          var t = Object(o.useState)('demographics'),
            a = Object(re.a)(t, 2),
            n = a[0],
            r = a[1]
          return l.a.createElement(
            Pe,
            null,
            l.a.createElement(Qt, { content: ia }),
            l.a.createElement(Ha, { tab: n, setTab: r }),
            l.a.createElement(
              He.a,
              null,
              'demographics' === n && l.a.createElement(zn, null),
              'common-views' === n && l.a.createElement(qn, null),
              'call-tactics' === n && l.a.createElement(Vn, null),
              'key-issues' === n && l.a.createElement(Yn, null),
              'swing-states' === n && l.a.createElement(Gn, null),
            ),
          )
        }
      function Kn() {
        var e = Object(j.a)([
          '\n  padding: 2rem;\n  margin: 10rem 0;\n  border: 1px solid rgb(240, 104, 47);\n  @media only screen and (max-width: 800px) {\n    margin: 2rem 0;\n  }\n  min-height: 100%;\n  .actions {\n    margin-top: 1rem;\n  }\n',
        ])
        return (
          (Kn = function () {
            return e
          }),
          e
        )
      }
      var Xn = T.a.div(Kn()),
        Zn = function (e) {
          var t = e.onSubmit
          return l.a.createElement(
            He.a,
            { maxWidth: 'sm' },
            l.a.createElement(
              Xn,
              null,
              l.a.createElement(
                We.a,
                {
                  initialValues: { email: '', password: '' },
                  validationSchema: Fe.b().shape({
                    email: Fe.d()
                      .email('Must be a valid email')
                      .max(255)
                      .required('Email is required'),
                  }),
                  onSubmit: (function () {
                    var e = Object(G.a)(
                      Y.a.mark(function e(a, n) {
                        var r, o, l, i, s
                        return Y.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.setErrors),
                                  (o = n.setStatus),
                                  (l = n.setSubmitting),
                                  (e.next = 3),
                                  t(a)
                                )
                              case 3:
                                ;(i = e.sent),
                                  (s = i.error) &&
                                    (o({ success: !1 }), r(s), l(!1))
                              case 6:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      }),
                    )
                    return function (t, a) {
                      return e.apply(this, arguments)
                    }
                  })(),
                },
                function (e) {
                  var t = e.errors,
                    a = e.handleBlur,
                    n = e.handleChange,
                    r = e.handleSubmit,
                    o = e.isSubmitting,
                    i = e.touched,
                    s = e.values
                  return l.a.createElement(
                    'form',
                    { onSubmit: r },
                    l.a.createElement(Ge, {
                      error: Boolean(i.email && t.email),
                      helperText: i.email && t.email,
                      label: 'Email',
                      name: 'email',
                      type: 'email',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    l.a.createElement(
                      N.a,
                      { my: 1 },
                      l.a.createElement(
                        z.a,
                        {
                          color: 'primary',
                          disabled: o,
                          fullWidth: !0,
                          type: 'submit',
                          variant: 'contained',
                        },
                        'Submit',
                      ),
                    ),
                  )
                },
              ),
            ),
          )
        },
        Qn = function () {
          var e = Object(c.b)(),
            t = Object(O.b)().enqueueSnackbar,
            a = (function () {
              var a = Object(G.a)(
                Y.a.mark(function a(n) {
                  var r, o, l
                  return Y.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.prev = 0), (a.next = 3), me(n, e, t)
                          case 3:
                            if (((r = a.sent), (o = r.response), !r.isError)) {
                              a.next = 10
                              break
                            }
                            if (400 !== (l = o.response).status) {
                              a.next = 10
                              break
                            }
                            return a.abrupt('return', {
                              error: { email: l.data },
                            })
                          case 10:
                            a.next = 15
                            break
                          case 12:
                            ;(a.prev = 12),
                              (a.t0 = a.catch(0)),
                              console.error(a.t0)
                          case 15:
                          case 'end':
                            return a.stop()
                        }
                    },
                    a,
                    null,
                    [[0, 12]],
                  )
                }),
              )
              return function (e) {
                return a.apply(this, arguments)
              }
            })()
          return l.a.createElement(
            Pe,
            null,
            l.a.createElement(Zn, { onSubmit: a }),
          )
        }
      function $n() {
        var e = Object(j.a)([
          '\n  padding: 2rem;\n  margin: 2rem 0;\n  border: 1px solid rgb(240, 104, 47);\n  min-height: 100%;\n  .actions {\n    margin-top: 1rem;\n  }\n',
        ])
        return (
          ($n = function () {
            return e
          }),
          e
        )
      }
      var er = T.a.div($n()),
        tr = function (e) {
          var t = e.onSubmit
          e.errorState
          return l.a.createElement(
            He.a,
            { maxWidth: 'sm' },
            l.a.createElement(
              er,
              null,
              l.a.createElement(
                We.a,
                {
                  initialValues: { email: '', password: '' },
                  validationSchema: Fe.b().shape({
                    password: Fe.d().required('Password is required'),
                    passwordCon: Fe.d()
                      .required('Password Confirmation is required')
                      .oneOf([Fe.c('password')], 'Passwords must match'),
                  }),
                  onSubmit: (function () {
                    var e = Object(G.a)(
                      Y.a.mark(function e(a, n) {
                        var r, o, l, i, s
                        return Y.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.setErrors),
                                  (o = n.setStatus),
                                  (l = n.setSubmitting),
                                  (e.next = 3),
                                  t(a)
                                )
                              case 3:
                                ;(i = e.sent),
                                  (s = i.error) &&
                                    (o({ success: !1 }), r(s), l(!1))
                              case 6:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      }),
                    )
                    return function (t, a) {
                      return e.apply(this, arguments)
                    }
                  })(),
                },
                function (e) {
                  var t = e.errors,
                    a = e.handleBlur,
                    n = e.handleChange,
                    r = e.handleSubmit,
                    o = e.isSubmitting,
                    i = e.touched,
                    s = e.values
                  return l.a.createElement(
                    'form',
                    { onSubmit: r },
                    l.a.createElement(Ge, {
                      error: Boolean(i.password && t.password),
                      helperText: i.password && t.password,
                      label: 'Password',
                      name: 'password',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                      type: 'password',
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(i.passwordCon && t.passwordCon),
                      helperText: i.passwordCon && t.passwordCon,
                      label: 'Password Confirmation',
                      name: 'passwordCon',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                      type: 'password',
                    }),
                    l.a.createElement(
                      N.a,
                      { mt: 2 },
                      l.a.createElement(
                        z.a,
                        {
                          color: 'primary',
                          disabled: o,
                          fullWidth: !0,
                          type: 'submit',
                          variant: 'contained',
                        },
                        'Reset',
                      ),
                    ),
                  )
                },
              ),
            ),
          )
        },
        ar = function (e) {
          var t = Object(O.b)().enqueueSnackbar,
            a = Object(c.b)(),
            n = (function () {
              var n = Object(G.a)(
                Y.a.mark(function n(r) {
                  var o, l, i
                  return Y.a.wrap(
                    function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.prev = 0),
                              (n.next = 3),
                              de(Object(h.a)(Object(h.a)({}, r), e), a, t)
                            )
                          case 3:
                            if (((o = n.sent), (l = o.response), !o.isError)) {
                              n.next = 10
                              break
                            }
                            if (400 !== (i = l.response).status) {
                              n.next = 10
                              break
                            }
                            return n.abrupt('return', { error: i.data })
                          case 10:
                            n.next = 15
                            break
                          case 12:
                            ;(n.prev = 12),
                              (n.t0 = n.catch(0)),
                              console.error(n.t0)
                          case 15:
                          case 'end':
                            return n.stop()
                        }
                    },
                    n,
                    null,
                    [[0, 12]],
                  )
                }),
              )
              return function (e) {
                return n.apply(this, arguments)
              }
            })()
          return l.a.createElement(
            Pe,
            null,
            l.a.createElement(tr, { onSubmit: n }),
          )
        },
        nr = function () {
          return l.a.createElement(
            Pe,
            null,
            l.a.createElement(
              N.a,
              {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                bgcolor: 'base.300',
                px: '10vh',
                py: 2,
              },
              l.a.createElement(
                N.a,
                { mb: 1 },
                l.a.createElement(
                  _.a,
                  { variant: 'h4' },
                  l.a.createElement('b', null, 'Sharing The Pledge'),
                ),
              ),
              l.a.createElement(
                _.a,
                { variant: 'h6' },
                'Do you have friends, family or acquaintances in your network interested in making the pledge? We want to make it easy.',
              ),
            ),
            l.a.createElement(
              A.a,
              {
                container: !0,
                direction: 'column',
                alignItems: 'center',
                justify: 'center',
              },
              l.a.createElement(
                He.a,
                null,
                l.a.createElement(
                  N.a,
                  { border: 1, my: 2, p: 2, borderColor: 'primary.main' },
                  l.a.createElement(
                    _.a,
                    { variant: 'h6' },
                    'Sample text language:',
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'body1' },
                    l.a.createElement(
                      'p',
                      null,
                      l.a.createElement(
                        'i',
                        null,
                        'Hi X. The election is in X days, and I made a pledge to call 5 members of my friend group to encourage them to vote for Biden. Here\u2019s how you can sign up to join me:',
                        ' ',
                        l.a.createElement(
                          I.a,
                          {
                            target: '_blank',
                            rel: 'noreferrer noopener',
                            href: 'https://sharethepledge.com',
                          },
                          'sharethepledge.com',
                        ),
                      ),
                    ),
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'h6' },
                    'Sample email language:',
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'body1' },
                    l.a.createElement(
                      'p',
                      null,
                      l.a.createElement(
                        'i',
                        null,
                        'Hey, X:',
                        l.a.createElement('br', null),
                        'I hope you\u2019re doing well. We are X days from the election. I am reaching out because I have made a pledge to call my family and friends to make sure they have a plan for voting and encourage them to vote for Biden. I did this through a website called The Pledge.',
                        l.a.createElement('br', null),
                        'I think you would be great at this - it\u2019s a good way to stay energized and motivated in the lead-up to the election and can potentially have a real impact on turnout. Here\u2019s how to sign up:',
                        ' ',
                        l.a.createElement(
                          I.a,
                          {
                            target: '_blank',
                            rel: 'noreferrer noopener',
                            href: 'https://sharethepledge.com',
                          },
                          'sharethepledge.com',
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          )
        }
      function rr() {
        var e = Object(j.a)([
          '\n  padding: 2rem;\n  margin: 2rem 0;\n  border: 1px solid rgb(240, 104, 47);\n  min-height: 100%;\n  .actions {\n    margin-top: 1rem;\n  }\n',
        ])
        return (
          (rr = function () {
            return e
          }),
          e
        )
      }
      var or = T.a.div(rr()),
        lr = function (e) {
          var t = e.onSubmit
          e.errorState
          return l.a.createElement(
            He.a,
            { maxWidth: 'sm' },
            l.a.createElement(
              or,
              null,
              l.a.createElement(
                We.a,
                {
                  initialValues: { email: '', password: '' },
                  validationSchema: Fe.b().shape({
                    firstName: Fe.d().required('First Name is required'),
                    lastName: Fe.d().required('Last Name is required'),
                    email: Fe.d()
                      .required('Email is required')
                      .email('Enter a valid email address'),
                    password: Fe.d().required('Password is required'),
                    passwordCon: Fe.d()
                      .required('Password Confirmation is required')
                      .oneOf([Fe.c('password')], 'Passwords must match'),
                  }),
                  onSubmit: (function () {
                    var e = Object(G.a)(
                      Y.a.mark(function e(a, n) {
                        var r, o, l, i, s
                        return Y.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.setErrors),
                                  (o = n.setStatus),
                                  (l = n.setSubmitting),
                                  (e.next = 3),
                                  t(a)
                                )
                              case 3:
                                ;(i = e.sent),
                                  (s = i.error) &&
                                    (o({ success: !1 }), r(s), l(!1))
                              case 6:
                              case 'end':
                                return e.stop()
                            }
                        }, e)
                      }),
                    )
                    return function (t, a) {
                      return e.apply(this, arguments)
                    }
                  })(),
                },
                function (e) {
                  var t = e.errors,
                    a = e.handleBlur,
                    n = e.handleChange,
                    r = e.handleSubmit,
                    o = e.isSubmitting,
                    i = e.touched,
                    s = e.values
                  return l.a.createElement(
                    'form',
                    { onSubmit: r },
                    l.a.createElement(Ge, {
                      error: Boolean(i.firstName && t.firstName),
                      helperText: i.firstName && t.firstName,
                      label: 'First Name',
                      name: 'firstName',
                      type: 'firstName',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(i.lastName && t.lastName),
                      helperText: i.lastName && t.lastName,
                      label: 'Last Name',
                      name: 'lastName',
                      type: 'lastName',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(i.email && t.email),
                      helperText: i.email && t.email,
                      label: 'Email',
                      name: 'email',
                      type: 'email',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(i.password && t.password),
                      helperText: i.password && t.password,
                      label: 'Password',
                      name: 'password',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                      type: 'password',
                    }),
                    l.a.createElement(Ge, {
                      error: Boolean(i.passwordCon && t.passwordCon),
                      helperText: i.passwordCon && t.passwordCon,
                      label: 'Password Confirmation',
                      name: 'passwordCon',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                      type: 'password',
                    }),
                    l.a.createElement(
                      N.a,
                      { mt: 2 },
                      l.a.createElement(
                        z.a,
                        {
                          color: 'primary',
                          disabled: o,
                          fullWidth: !0,
                          type: 'submit',
                          variant: 'contained',
                        },
                        'Sign Up',
                      ),
                    ),
                  )
                },
              ),
            ),
          )
        },
        ir = function () {
          var e = Object(O.b)().enqueueSnackbar,
            t = Object(c.b)(),
            a = (function () {
              var a = Object(G.a)(
                Y.a.mark(function a(n) {
                  var r, o, l
                  return Y.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.prev = 0), (a.next = 3), ce(e, t, n)
                          case 3:
                            if (((r = a.sent), (o = r.response), !r.isError)) {
                              a.next = 10
                              break
                            }
                            if (400 !== (l = o.response).status) {
                              a.next = 10
                              break
                            }
                            return a.abrupt('return', { error: l.data })
                          case 10:
                            a.next = 15
                            break
                          case 12:
                            ;(a.prev = 12),
                              (a.t0 = a.catch(0)),
                              console.error(a.t0)
                          case 15:
                          case 'end':
                            return a.stop()
                        }
                    },
                    a,
                    null,
                    [[0, 12]],
                  )
                }),
              )
              return function (e) {
                return a.apply(this, arguments)
              }
            })()
          return l.a.createElement(
            Pe,
            null,
            l.a.createElement(lr, { onSubmit: a }),
          )
        }
      function sr() {
        var e = Object(j.a)(['\n  && {\n    color: #f0682f;\n  }\n'])
        return (
          (sr = function () {
            return e
          }),
          e
        )
      }
      var cr = ''.concat(Z, '/images/swingstates.jpg'),
        ur = ''.concat(Z, '/images/facebook.jpg'),
        mr = Object(T.a)(L)(sr()),
        dr = function () {
          return l.a.createElement(
            N.a,
            { my: 1 },
            l.a.createElement(
              Ot.a,
              { variant: 'outlined', square: !0 },
              l.a.createElement(
                Ct.a,
                { expandIcon: l.a.createElement(At.a, null) },
                l.a.createElement(
                  N.a,
                  {
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                  l.a.createElement(_.a, { variant: 'h6' }, 'Take the Pledge'),
                  l.a.createElement(
                    _.a,
                    { variant: 'h6', color: 'primary' },
                    'Step 1',
                  ),
                ),
              ),
              l.a.createElement(
                jt.a,
                null,
                l.a.createElement(
                  A.a,
                  { container: !0 },
                  l.a.createElement(
                    A.a,
                    { item: !0, xs: 12, md: 12 },
                    l.a.createElement(
                      _.a,
                      { variant: 'body1' },
                      'Sign up and track your outreach in your dashboard.',
                    ),
                  ),
                  l.a.createElement(
                    A.a,
                    {
                      item: !0,
                      container: !0,
                      xs: 12,
                      md: 12,
                      justify: 'center',
                    },
                    l.a.createElement(
                      N.a,
                      { mt: 1 },
                      l.a.createElement(
                        q,
                        {
                          variant: 'outlined',
                          color: 'primary',
                          to: '/signup',
                        },
                        'Sign Up',
                      ),
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        hr = function () {
          return l.a.createElement(
            N.a,
            { my: 1 },
            l.a.createElement(
              Ot.a,
              { variant: 'outlined', square: !0 },
              l.a.createElement(
                Ct.a,
                { expandIcon: l.a.createElement(At.a, null) },
                l.a.createElement(
                  N.a,
                  {
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                  l.a.createElement(
                    _.a,
                    { variant: 'h6' },
                    'Choose who you want to call',
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'h6', color: 'primary' },
                    'Step 2',
                  ),
                ),
              ),
              l.a.createElement(
                jt.a,
                null,
                l.a.createElement(
                  N.a,
                  null,
                  l.a.createElement(
                    _.a,
                    { variant: 'subtitle1' },
                    'Here\u2019s who to call:',
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'body1' },
                    l.a.createElement(
                      'ol',
                      null,
                      l.a.createElement(
                        'li',
                        null,
                        l.a.createElement('strong', null, 'Likelies:'),
                        ' Friends who are likely Biden supporters, but who may need a push to get registered or to actually vote.',
                        l.a.createElement(
                          'ol',
                          { type: 'a' },
                          l.a.createElement(
                            'li',
                            null,
                            'Help them get registered and ready to vote for Biden.',
                          ),
                          l.a.createElement(
                            'li',
                            null,
                            'Encourage them to take the pledge',
                          ),
                        ),
                      ),
                      l.a.createElement(
                        'li',
                        null,
                        l.a.createElement('strong', null, 'Already energized:'),
                        ' Friends who are already activated to stop Trump and are looking for a way to help.',
                        l.a.createElement(
                          'ol',
                          { type: 'a' },
                          l.a.createElement(
                            'li',
                            null,
                            'Encourage them to take the pledge.',
                          ),
                        ),
                      ),
                      l.a.createElement(
                        'li',
                        null,
                        l.a.createElement(
                          'strong',
                          null,
                          'Unknowns/Non-liberals:',
                        ),
                        ' Friends who may not be planning to vote for Biden',
                        l.a.createElement(
                          'ol',
                          { type: 'a' },
                          l.a.createElement(
                            'li',
                            null,
                            'Call them to understand where they\u2019re coming from, to share your own perspective, and to encourage them to vote blue.',
                          ),
                          l.a.createElement(
                            'li',
                            null,
                            'Help them get registered and, when possible, ready to vote for Biden.',
                          ),
                          l.a.createElement(
                            'li',
                            null,
                            'Encourage them to take the pledge.',
                          ),
                        ),
                      ),
                    ),
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'subtitle1' },
                    'Prioritize Swing States!',
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'body1' },
                    l.a.createElement(
                      'p',
                      null,
                      'It is critical that we reach potential voters in swing states (e.g., PA, FL, WI, MI, and AZ), because this election is impossible to win without them.',
                      l.a.createElement(
                        'strong',
                        null,
                        'Calling friends who live, have lived, or grew up in swing states is our focus, even if they are not currently voting there.',
                      ),
                      ' ',
                      'Larger chunks of ',
                      l.a.createElement('i', null, 'their'),
                      ' networks will be people from that state, making it easier for them to reach people in an authentic way.',
                    ),
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'subtitle1' },
                    'The Swing States:',
                  ),
                  l.a.createElement(
                    N.a,
                    { my: 1 },
                    l.a.createElement(
                      He.a,
                      null,
                      l.a.createElement('img', {
                        src: cr,
                        alt: 'hello',
                        width: '60%',
                      }),
                    ),
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'subtitle1' },
                    'Finding Friends in Key States:',
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'body1' },
                    'Facebook has a feature where you can use any search window to type \u201cMy friends who live in [insert name of swing state].\u201d The results list three names with the option to \u201cSee all.\u201d',
                  ),
                  l.a.createElement(
                    N.a,
                    { my: 1 },
                    l.a.createElement(
                      He.a,
                      null,
                      l.a.createElement('img', {
                        src: ur,
                        alt: 'hello',
                        width: '60%',
                      }),
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        pr = function () {
          return l.a.createElement(
            N.a,
            { my: 1 },
            l.a.createElement(
              Ot.a,
              { variant: 'outlined', square: !0 },
              l.a.createElement(
                Ct.a,
                { expandIcon: l.a.createElement(At.a, null) },
                l.a.createElement(
                  N.a,
                  {
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                  l.a.createElement(
                    _.a,
                    { variant: 'h6' },
                    'Prep for your calls',
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'h6', color: 'primary' },
                    'Step 3',
                  ),
                ),
              ),
              l.a.createElement(
                jt.a,
                null,
                l.a.createElement(
                  _.a,
                  { variant: 'body1' },
                  l.a.createElement(
                    'ol',
                    { type: 'A' },
                    l.a.createElement(
                      'li',
                      null,
                      'Use our',
                      ' ',
                      l.a.createElement(
                        mr,
                        { to: '/resources' },
                        'Political Identities Resource',
                      ),
                      ' ',
                      'to assess where you think your callee most likely falls on the political spectrum and to prepare for what you may encounter in the conversation as a result.',
                    ),
                    l.a.createElement(
                      'li',
                      null,
                      'Use our',
                      ' ',
                      l.a.createElement(
                        I.a,
                        {
                          target: '_blank',
                          rel: 'noreferrer noopener',
                          href:
                            'https://docs.google.com/document/d/1E1DpvhtSdoRn2Ak3EpBJnmV2-PljygTlcTp0zY43xLs/edit?usp=sharing',
                        },
                        'Political Views & Response Resource',
                      ),
                      ' ',
                      'to prepare yourself for the nature of the conversation you will likely be having with this person based on their likely views/values. Use this resource to better empathize with their perspective before the call, to prepare how you plan to communicate, and to better contextualize their responses in real time.',
                    ),
                    l.a.createElement(
                      'li',
                      null,
                      'Use our',
                      ' ',
                      l.a.createElement(
                        I.a,
                        {
                          target: '_blank',
                          rel: 'noreferrer noopener',
                          href:
                            'https://docs.google.com/document/d/1z-V_mOlN5EXXA-dpMjy5GcxPP8tWnva4iwHX1pFvkys/edit?usp=sharing',
                        },
                        'Conversation Guide Resource',
                      ),
                      ' ',
                      'to prepare for how you want to approach the conversation from an interpersonal and emotional perspective. THIS RESOURCE IS PERHAPS MORE IMPORTANT THAN ANY OTHER!',
                    ),
                    l.a.createElement(
                      'li',
                      null,
                      'Use our',
                      ' ',
                      l.a.createElement(
                        I.a,
                        {
                          target: '_blank',
                          rel: 'noreferrer noopener',
                          href:
                            'https://docs.google.com/document/d/1-wgo0bhW5TJzUyq1bZSl69HTCd-D-pqD-24MZ0vrQKs/edit?usp=sharing',
                        },
                        'Key Issues Resource',
                      ),
                      ' ',
                      'to prep yourself with specific information that it may be helpful to have at your disposal based on the likely key interests/concerns of your callee.',
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        gr = function () {
          return l.a.createElement(
            N.a,
            { my: 1 },
            l.a.createElement(
              Ot.a,
              { variant: 'outlined', square: !0 },
              l.a.createElement(
                Ct.a,
                { expandIcon: l.a.createElement(At.a, null) },
                l.a.createElement(
                  N.a,
                  {
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                  l.a.createElement(
                    _.a,
                    { variant: 'h6' },
                    'Start making calls',
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'h6', color: 'primary' },
                    'Step 4',
                  ),
                ),
              ),
              l.a.createElement(
                jt.a,
                null,
                l.a.createElement(
                  _.a,
                  { variant: 'body1' },
                  'Have any or all of our',
                  ' ',
                  l.a.createElement(mr, { to: '/resources' }, 'Resources'),
                  ' open when you make your call. And when you\u2019re done with a call, add details in your',
                  ' ',
                  l.a.createElement(mr, { to: '/dashboard' }, 'Dashboard'),
                  ' about how it went.',
                ),
              ),
            ),
          )
        },
        fr = function () {
          return l.a.createElement(
            N.a,
            { my: 1 },
            l.a.createElement(
              Ot.a,
              { variant: 'outlined', square: !0 },
              l.a.createElement(
                Ct.a,
                { expandIcon: l.a.createElement(At.a, null) },
                l.a.createElement(
                  N.a,
                  {
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                  l.a.createElement(_.a, { variant: 'h6' }, 'Follow up'),
                  l.a.createElement(
                    _.a,
                    { variant: 'h6', color: 'primary' },
                    'Step 5',
                  ),
                ),
              ),
              l.a.createElement(
                jt.a,
                null,
                l.a.createElement(
                  N.a,
                  null,
                  l.a.createElement(
                    _.a,
                    { variant: 'subtitle1' },
                    l.a.createElement(
                      'i',
                      null,
                      'Most calls will likely be aided by a bit of follow up.',
                    ),
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'body1' },
                    l.a.createElement(
                      'p',
                      null,
                      l.a.createElement(
                        'b',
                        null,
                        'Voting/Registration Links:',
                      ),
                    ),
                    l.a.createElement(
                      'p',
                      null,
                      'These sites collectively (and perhaps even individually) have all the information you, or your friend/callee could possibly need about voting on a state by state basis from important dates to registration services to down ballot election information (including links to candidates websites) to first-time-voter checklists, tips, and advice, these websites have it all. Send your friend these links to help them get/stay organized after your call!',
                    ),
                    l.a.createElement(
                      'ul',
                      null,
                      l.a.createElement(
                        'li',
                        null,
                        l.a.createElement(
                          I.a,
                          {
                            target: '_blank',
                            rel: 'noreferrer noopener',
                            href: 'https://www.vote411.org/ballot',
                          },
                          'Vote411',
                        ),
                        ': Everything. Important dates, down ballot race information and links to candidate websites, registration links and check sites, polling place information, etc. Headcount: Also everything.',
                      ),
                      l.a.createElement(
                        'li',
                        null,
                        l.a.createElement(
                          I.a,
                          {
                            target: '_blank',
                            rel: 'noreferrer noopener',
                            href: 'https://www.voteamerica.com/',
                          },
                          'VoteAmerica',
                        ),
                        ': Easy registration, find out where to vote, track your ballot, check your registration status, register to vote, vote by mail information, request your absentee ballot, receive election reminders, contact your election office, etc.',
                      ),
                      l.a.createElement(
                        'li',
                        null,
                        l.a.createElement(
                          I.a,
                          {
                            target: '_blank',
                            rel: 'noreferrer noopener',
                            href:
                              'https://www.nytimes.com/interactive/2020/09/24/us/politics/how-to-vote-register.html',
                          },
                          'NYTimes Interactive How-to-vote/register',
                        ),
                        ' ',
                        'Key dates, registration info, detailed/helpful voting information. Requires NYT login.',
                      ),
                      l.a.createElement(
                        'li',
                        null,
                        l.a.createElement(
                          I.a,
                          {
                            target: '_blank',
                            rel: 'noreferrer noopener',
                            href: 'https://www.usa.gov/voter-registration',
                          },
                          'usa.gov/voter-registration',
                        ),
                        ' ',
                        'Voter registration checks and info.',
                        ' ',
                      ),
                    ),
                    l.a.createElement(
                      'p',
                      null,
                      l.a.createElement('b', null, 'Take The Pledge Link:'),
                    ),
                    l.a.createElement(
                      'p',
                      null,
                      'If your friend agreed to take the pledge, send them a link',
                      ' ',
                      l.a.createElement(
                        I.a,
                        {
                          target: '_blank',
                          rel: 'noreferrer noopener',
                          href: 'sharethepledge.com',
                        },
                        ' ',
                        'The Pledge',
                      ),
                      ' ',
                      'and encourage them to get signed up.',
                    ),
                    l.a.createElement(
                      'p',
                      null,
                      l.a.createElement(
                        'i',
                        null,
                        'Once you\u2019ve indicated that you\u2019ve completed a call, these links and sample texts for this sort of outreach will be in your dashboard.',
                      ),
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        Er = function () {
          return l.a.createElement(
            N.a,
            { my: 1 },
            l.a.createElement(
              Ot.a,
              { variant: 'outlined', square: !0 },
              l.a.createElement(
                Ct.a,
                { expandIcon: l.a.createElement(At.a, null) },
                l.a.createElement(
                  N.a,
                  {
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                  l.a.createElement(_.a, { variant: 'h6' }, 'Keep in touch'),
                  l.a.createElement(
                    _.a,
                    { variant: 'h6', color: 'primary' },
                    'Step 6',
                  ),
                ),
              ),
              l.a.createElement(
                jt.a,
                null,
                l.a.createElement(
                  _.a,
                  { variant: 'body1' },
                  l.a.createElement(
                    'p',
                    null,
                    'Hold your friends accountable. Remind them about upcoming voting deadlines and to make their calls. Studies like \u201cVoting to Tell Others,\u201d have found that \u201cvoter turnout would increase by 2 percent if the number of times people were asked if they voted doubled,\u201d due exclusively to the phenomenon of people not wanting to have to lie in the future when (they anticipate) they will be asked again. Simple check-ins can go a long way! Once you\u2019ve indicated that you\u2019ve completed a call, there will be sample texts for this sort of outreach in your dashboard.',
                  ),
                ),
              ),
            ),
          )
        },
        br = function () {
          return l.a.createElement(
            l.a.Fragment,
            null,
            l.a.createElement(dr, null),
            l.a.createElement(hr, null),
            l.a.createElement(pr, null),
            l.a.createElement(gr, null),
            l.a.createElement(fr, null),
            l.a.createElement(Er, null),
          )
        },
        vr = function () {
          return l.a.createElement(
            Pe,
            null,
            l.a.createElement(
              He.a,
              null,
              l.a.createElement(
                N.a,
                { textAlign: 'center' },
                l.a.createElement(
                  _.a,
                  { variant: 'h4' },
                  l.a.createElement('b', null, 'Step by Step'),
                ),
              ),
              l.a.createElement(br, null),
            ),
          )
        },
        yr = a(286)
      function wr() {
        var e = Object(j.a)(['\n  && {\n    box-shadow: none;\n  }\n'])
        return (
          (wr = function () {
            return e
          }),
          e
        )
      }
      function kr() {
        var e = Object(j.a)([
          '\n  && {\n    box-shadow: none;\n    padding: 0;\n  }\n',
        ])
        return (
          (kr = function () {
            return e
          }),
          e
        )
      }
      function xr() {
        var e = Object(j.a)([
          '\n  && {\n    box-shadow: none;\n    padding: 0;\n  }\n',
        ])
        return (
          (xr = function () {
            return e
          }),
          e
        )
      }
      var Sr = Object(T.a)(Ct.a)(xr()),
        Or = Object(T.a)(jt.a)(kr()),
        Cr = Object(T.a)(Ot.a)(wr()),
        jr = function () {
          var e = Object(o.useState)(!1),
            t = Object(re.a)(e, 2),
            a = t[0],
            n = t[1]
          return l.a.createElement(
            N.a,
            { my: 1 },
            l.a.createElement(
              Cr,
              { expanded: a },
              l.a.createElement(
                Sr,
                null,
                l.a.createElement(
                  N.a,
                  null,
                  l.a.createElement(
                    _.a,
                    { mb: 3, variant: 'h6' },
                    l.a.createElement(
                      'b',
                      null,
                      '(1) THE STAKES ARE TOO HIGH TO IGNORE.',
                    ),
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'body1' },
                    l.a.createElement(
                      'p',
                      null,
                      'The stakes of this election are existential, especially for young people who hope for a future. We face a global environmental reality of consistent climate catastrophe, population increase and',
                      ' ',
                      l.a.createElement(
                        I.a,
                        {
                          target: '_blank',
                          rel: 'noreferrer noopener',
                          href:
                            'https://www.nytimes.com/interactive/2020/07/23/magazine/climate-migration.html',
                        },
                        'widespread population displacement',
                      ),
                      ', an',
                      ' ',
                      l.a.createElement(
                        I.a,
                        {
                          target: '_blank',
                          rel: 'noreferrer noopener',
                          href:
                            'https://www.wsj.com/articles/viral-outbreaks-once-rare-become-part-of-the-global-landscape-11583455309',
                        },
                        'increase in global pandemics',
                      ),
                      ', rising income inequality domestically, heightened nuclear tensions and fractured international relations, and President Trump\u2019s authoritarian and conspiracy-driven administration. We cannot wait to recover our democracy and planet. The time to act is now.',
                    ),
                  ),
                ),
              ),
              l.a.createElement(
                Or,
                null,
                l.a.createElement(
                  _.a,
                  { variant: 'body1' },
                  l.a.createElement(
                    'p',
                    null,
                    'A week into Donald Trump\u2019s presidency, the Doomsday Clock was pushed to two-and-a-half minutes to midnight \u2013 the closest since 1953. As a result of \u201cthe failure of the international community to deal with nuclear weapons and climate change,\u201d and \u201clargely because of statements [made by] the president\u201d the Bulletin of Atomic Scientists has set the clock to 100 seconds to midnight\u2014',
                    l.a.createElement(
                      I.a,
                      {
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        href:
                          'https://www.independent.co.uk/news/world/americas/us-politics/noam-chomsky-donald-trump-doomsday-clock-midnight-close-nuclear-war-north-korea-a8014626.html',
                      },
                      'the closest it\u2019s ever been.',
                    ),
                    ' ',
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    l.a.createElement(
                      I.a,
                      {
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        href: 'https://lincolnproject.us/',
                      },
                      'The Lincoln Project',
                    ),
                    ', a group of high-powered and politically engaged conservatives who have pledged to fight to protect our democracy against Trump and his band of corrupt Republicans, states the constitutional stakes quite well:',
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    l.a.createElement(
                      'i',
                      null,
                      'This fall\u2019s elections will be about much more than just who controls one house of Congress or the White House. This November, the American people will decide the path for America\u2019s future. All of the prosperity and freedom we\u2019ve come to take for granted depends on our public servants serving the Constitution first, last and always. Today, one party [The GOP] has abdicated that responsibility and instead pledged their loyalty to one person.',
                    ),
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    l.a.createElement(
                      'i',
                      null,
                      'Our Mission: Defeat President Trump and Trumpism at the ballot box.',
                    ),
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    l.a.createElement(
                      'i',
                      null,
                      'We do not undertake this task lightly nor from ideological preference. Our many policy differences with national Democrats remain. However, the priority for all patriotic Americans must be a shared fidelity to the Constitution and a commitment to defeat those candidates who have abandoned their constitutional oaths, regardless of party. Electing Democrats who support the Constitution over Republicans who do not is a worthy effort.',
                    ),
                  ),
                ),
              ),
            ),
            l.a.createElement(
              z.a,
              {
                color: 'primary',
                onClick: function () {
                  return n(!a)
                },
              },
              'Learn More ',
              a ? l.a.createElement(ba.a, null) : l.a.createElement(At.a, null),
            ),
          )
        },
        Tr = function () {
          var e = Object(o.useState)(!1),
            t = Object(re.a)(e, 2),
            a = t[0],
            n = t[1]
          return l.a.createElement(
            N.a,
            { mt: 1 },
            l.a.createElement(
              Cr,
              { expanded: a },
              l.a.createElement(
                Sr,
                null,
                l.a.createElement(
                  N.a,
                  null,
                  l.a.createElement(
                    _.a,
                    { mb: 3, variant: 'h6' },
                    l.a.createElement(
                      'b',
                      null,
                      '(2) EVERY VOTE (AND EVERY CONVERSATION) MATTERS.',
                    ),
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'body1' },
                    l.a.createElement(
                      'p',
                      null,
                      l.a.createElement('b', null, 'Voting:'),
                      " For many people, the belief that their vote doesn't matter is the main factor behind their decision not to vote. President Trump has stated that he will contest this election, and that he does not intend to pass power peacefully. This means that ",
                      l.a.createElement(
                        'b',
                        null,
                        'we need a blow-out \u2014 every vote matters.',
                      ),
                    ),
                  ),
                ),
              ),
              l.a.createElement(
                Or,
                null,
                l.a.createElement(
                  _.a,
                  { variant: 'body1' },
                  l.a.createElement(
                    'p',
                    null,
                    'Many Americans feel that their contributions to the democratic process don\u2019t matter. The \u201c',
                    l.a.createElement(
                      I.a,
                      {
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        href:
                          'https://knightfoundation.org/reports/the-100-million-project/',
                      },
                      '100 Million Project',
                    ),
                    ',\u201d a study conducted by the Knight Foundation, found that for some 20% of chronic non-voters and young people, the primary reasons for not voting were that their \u201cvote doesn\u2019t matter\u201d and that \u201cthe system is [too] corrupt\u201d to be changed. Moreover, the \u201c',
                    l.a.createElement(
                      I.a,
                      {
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        href: 'https://hiddentribes.us/',
                      },
                      'Hidden Tribes',
                    ),
                    '\u201d study indicates that many liberals of lower socioeconomic status--many of whom are registered to vote-do not end up voting because they have no faith that the system will operate fairly or in their interest.',
                    ' ',
                    l.a.createElement(
                      'b',
                      null,
                      "For many people, the belief that their vote doesn't matter is the key factor underlying their decision not to engage in the election.",
                    ),
                    ' ',
                    'If people can be helped to understand that their involvement matters, they will be more likely to participate.',
                    ' ',
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    "Trump\u2019s attacks on our democratic institutions include attacking the legitimacy of the electoral process itself. Trump has stated that he will contest this election, and that he does not intend to pass power peacefully. This means that the closer the vote, the more chaotic and disruptive our society will become. Trump has already nominated a conservative loyalist to the Supreme Court to replace Justice Ruth Bader Ginsburg. We need to win in key swing states, but, more importantly, we need a landslide to ensure that this election is decided by the people and not by President Trump's new ultraconservative Supreme Court. On September 24th,",
                    l.a.createElement(
                      I.a,
                      {
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        href:
                          'https://www.reviewjournal.com/news/politics-and-government/eric-trump-says-his-father-will-concede-if-joe-biden-wins-big-2129305',
                      },
                      'Eric Trump told supporters',
                    ),
                    ' ',
                    'at a Las Vegas campaign stop that his father \u201cof course [would] concede\u201d the election \u201cif he got blown out of the water\u201d by Joe Biden.',
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'So,',
                    ' ',
                    l.a.createElement(
                      'b',
                      null,
                      l.a.createElement('i', null, 'we need a blow-out.'),
                    ),
                    ' ',
                    'Every vote counts.',
                  ),
                ),
              ),
            ),
            l.a.createElement(
              z.a,
              {
                color: 'primary',
                onClick: function () {
                  return n(!a)
                },
              },
              'Learn More ',
              a ? l.a.createElement(ba.a, null) : l.a.createElement(At.a, null),
            ),
          )
        },
        Ar = function () {
          var e = Object(o.useState)(!1),
            t = Object(re.a)(e, 2),
            a = t[0],
            n = t[1]
          return l.a.createElement(
            N.a,
            { mb: 1 },
            l.a.createElement(
              Cr,
              { expanded: a },
              l.a.createElement(
                Sr,
                null,
                l.a.createElement(
                  N.a,
                  null,
                  l.a.createElement(
                    _.a,
                    { variant: 'body1' },
                    l.a.createElement(
                      'p',
                      null,
                      l.a.createElement(
                        'b',
                        null,
                        'Beyond Voting (Conversations):',
                      ),
                      ' Traditional get-out-the-vote methods, like phone-banking and text-banking, pairs strangers with strangers, but people are more open to new ideas when they talk to friends. The more people talk about voting, the more they know about voting, and the more likely they are to vote. Changing one person\u2019s mind to vote for Biden, or away from voting for Trump, can have a ripple effect on the whole community. Every conversation matters.',
                    ),
                  ),
                ),
              ),
              l.a.createElement(
                Or,
                null,
                l.a.createElement(
                  _.a,
                  { variant: 'body1' },
                  l.a.createElement(
                    'p',
                    null,
                    'When we participate in the democratic process, for example by taking The Pledge, our potential for impact grows exponentially. The authors of book \u201c',
                    l.a.createElement(
                      I.a,
                      {
                        target: '_blank',
                        rel: 'noreferrer noopener',
                        href: 'https://www.connectedthebook.com/',
                      },
                      'Connected',
                    ),
                    '\u201d discuss a series of consistent, dependable phenomena, so pervasive in social networks that they\u2019ve deemed them rules (\u201cRules of Life in the Network\u201d):',
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    l.a.createElement(
                      'i',
                      null,
                      'People typically have many direct ties to a wide variety of people, including parents and children, brothers and sisters, spouses (and nice ex-spouses), bosses and coworkers, and neighbors and friends. And each and every one of these ties offers opportunities to influence and be influenced.',
                    ),
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'The fourth of these rules is that \u201cOur Friends\u2019 Friends\u2019 Friends Affect Us\u201d',
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    l.a.createElement(
                      'i',
                      null,
                      'Our friends and family can influence us to do things, like gain weight or show up at the polls. But their friends and family can influence us too. This is an illustration of hyperdyadic spread, or the tendency of effects to spread from person to person to person, beyond an individual\u2019s direct social ties.',
                    ),
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'Changing one person\u2019s mind away from voting for Trump, who lives in a community of Trump supporters in a swing state, can have a massive rippling effect on the whole community\u2014and imagine the impact it would have if they agreed to take the pledge! Every vote matters. Every conversation matters.',
                  ),
                ),
              ),
            ),
            l.a.createElement(
              z.a,
              {
                color: 'primary',
                onClick: function () {
                  return n(!a)
                },
              },
              'Learn More ',
              a ? l.a.createElement(ba.a, null) : l.a.createElement(At.a, null),
            ),
          )
        },
        Ir = function () {
          var e = Object(o.useState)(!1),
            t = Object(re.a)(e, 2),
            a = t[0],
            n = t[1]
          return l.a.createElement(
            N.a,
            { my: 1 },
            l.a.createElement(
              Cr,
              { expanded: a },
              l.a.createElement(
                Sr,
                null,
                l.a.createElement(
                  N.a,
                  null,
                  l.a.createElement(
                    _.a,
                    { mb: 3, variant: 'h6' },
                    l.a.createElement(
                      'b',
                      null,
                      '(3) THE COUNTRY AND THE WORLD ARE WORTH FIGHTING FOR.',
                    ),
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'body1' },
                    l.a.createElement(
                      'p',
                      null,
                      'For many, 2020 has been incredibly bleak. It may feel like our society is splintering, and that our democracy is failing. It might feel tempting to disengage from it all, because sitting in the thick of it is painful and scary.',
                    ),
                    l.a.createElement(
                      'p',
                      null,
                      'But we need each other to take action now. The people we put into power shape our lives. We have the opportunity to take action today that will affect all of our futures. We invite you to join us - our voices matter, our votes matter, and together, we can fight for the future we deserve.',
                    ),
                  ),
                ),
              ),
              l.a.createElement(
                Or,
                null,
                l.a.createElement(
                  _.a,
                  { variant: 'body1' },
                  l.a.createElement(
                    'p',
                    null,
                    'Our country is in a tough place right now. That comes from faulty, and in many cases, monstrously immoral engineering of some aspects of our governmental system over a long period of time. For many, it seems the American experiment has failed. Some of these people may not be compelled to fight for our country based solely on the idea that the Constitution lets our standards and rules of governance develop and change over time. But they may be compelled to fight if they understand that what happens in America right now--the result of this election--not only affects the lives of the nation\u2019s already massively disenfranchised, but also affects the ',
                    l.a.createElement('b', null, 'world as a whole'),
                    '. If American democracy crumbles, and, God forbid, falls into the hands of an insane, racist, narcissistic dictator, every human being, every animal, everyone and everything the world over will pay for it.',
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'We know things are bleak and that it can seem like fighting for the world means fighting to keep the powerful, powerful, and the oppressed, oppressed. We know humans have pesky, stubborn, hard-to-break patterns of selfishness and self-sabotage. And we think everyone is feeling the struggle of those realities in their own way right now.',
                  ),
                  l.a.createElement(
                    'p',
                    null,
                    'But this world is also beautiful\u2026 and',
                    ' ',
                    l.a.createElement(
                      'b',
                      null,
                      l.a.createElement('i', null, 'we'),
                    ),
                    ' ',
                    'are also beautiful. And it, and us, are worth fighting for! Honestly, what else are we even doing here? Hiding? Festering in denial? Those things slowly eat your soul. Straight up, they want to eat you\u2026 and they will eat you. And when that happens we become the problem. We gotta stand up! Your soul is worth fighting for!',
                    l.a.createElement(
                      'b',
                      null,
                      l.a.createElement(
                        'i',
                        null,
                        'We are worth fighting for!',
                      ),
                    ),
                  ),
                ),
              ),
            ),
            l.a.createElement(
              z.a,
              {
                color: 'primary',
                onClick: function () {
                  return n(!a)
                },
              },
              'Learn More ',
              a ? l.a.createElement(ba.a, null) : l.a.createElement(At.a, null),
            ),
          )
        },
        Nr = function () {
          return l.a.createElement(
            Pe,
            null,
            l.a.createElement(
              A.a,
              {
                container: !0,
                direction: 'column',
                alignItems: 'center',
                justify: 'center',
              },
              l.a.createElement(
                He.a,
                null,
                l.a.createElement(
                  N.a,
                  {
                    border: 1,
                    mt: 2,
                    p: 2,
                    borderColor: 'primary.main',
                    textAlign: 'center',
                  },
                  l.a.createElement(
                    N.a,
                    { color: 'primary.main', textAlign: 'center' },
                    l.a.createElement(
                      _.a,
                      { variant: 'h6' },
                      l.a.createElement('b', null, 'OUR MISSION.'),
                    ),
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'body1' },
                    'Our mission is to harness the power of personal social networks to encourage our friends and family to vote for Joe Biden \u2013 to preserve the integrity of our democracy and the future of our planet.',
                  ),
                  l.a.createElement(
                    N.a,
                    { color: 'primary.main', textAlign: 'center' },
                    l.a.createElement(
                      _.a,
                      { variant: 'h6' },
                      l.a.createElement('b', null, 'WHAT BROUGHT US HERE'),
                    ),
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'body1' },
                    '2020 has thrown a lot at us: a global pandemic; economic recession; racial and social discord. President Donald Trump and his administration have not helped the majority of the country that is in crisis. We as a country, as a people, and as a society, need new leadership, rekindled hope, and resounding change.',
                  ),
                  l.a.createElement(
                    N.a,
                    { color: 'primary.main', textAlign: 'center' },
                    l.a.createElement(
                      _.a,
                      { variant: 'h6' },
                      l.a.createElement('b', null, 'THE PLEDGE'),
                    ),
                  ),
                  l.a.createElement(
                    _.a,
                    { variant: 'body1' },
                    'The pledge is our commitment to calling 5 or more friends and family between now and November 3rd to encourage them to vote blue down the ballot \u2014 to get politicians who threaten our democracy out of office.',
                  ),
                ),
              ),
              l.a.createElement(
                He.a,
                null,
                l.a.createElement(
                  N.a,
                  { textAlign: 'center', mt: 2 },
                  l.a.createElement(
                    _.a,
                    { variant: 'h4' },
                    l.a.createElement('b', null, 'Why take the Pledge?'),
                  ),
                ),
              ),
              l.a.createElement(
                He.a,
                null,
                l.a.createElement(jr, null),
                l.a.createElement(yr.a, null),
                l.a.createElement(Tr, null),
                l.a.createElement(Ar, null),
                l.a.createElement(yr.a, null),
                l.a.createElement(Ir, null),
              ),
            ),
          )
        },
        _r = function (e) {
          e.children
          var t = Object(c.c)(function (e) {
              return e.auth
            }).isLoggedIn,
            a = Object(O.b)().enqueueSnackbar,
            n = Object(c.b)()
          return (
            Object(o.useEffect)(function () {
              !K() && t && pe(a, n)
            }),
            l.a.createElement(
              S.b,
              null,
              l.a.createElement(La, { path: '/', default: !0 }),
              l.a.createElement(nt, { path: 'account' }),
              l.a.createElement(rt, { path: 'activate/:uid/:token' }),
              l.a.createElement(Jn, { path: 'resources' }),
              l.a.createElement(Qn, { path: 'reset-password' }),
              l.a.createElement(ar, {
                path: 'reset-password/confirm/:uid/:token',
              }),
              l.a.createElement(nr, { path: 'sharing-the-pledge' }),
              l.a.createElement(vr, { path: 'steps' }),
              l.a.createElement(Nr, { path: 'the-why' }),
              !t && l.a.createElement(Wa, { path: 'login' }),
              !t && l.a.createElement(ir, { path: 'signup' }),
              t && l.a.createElement(Kt, { path: 'dashboard' }),
              t && l.a.createElement(bt, { path: 'create-recipient' }),
              t && l.a.createElement(St, { path: 'create-call' }),
            )
          )
        },
        Dr = a(287),
        Rr = a(288),
        Lr = function (e) {
          var t = e.children
          return l.a.createElement(
            Dr.a,
            { theme: oa },
            l.a.createElement(Rr.a, null),
            t,
          )
        },
        Pr = (function () {
          var e = Object(w.a)(x, y),
            t = Object(m.createStore)(e, Object(d.devToolsEnhancer)())
          return { store: t, persistor: Object(w.b)(t) }
        })(),
        Br = Pr.store,
        Fr = Pr.persistor,
        Wr = function (e) {
          e.children
          return l.a.createElement(
            c.a,
            { store: Br },
            l.a.createElement(
              u.a,
              { loading: null, persistor: Fr },
              l.a.createElement(
                O.a,
                { maxSnack: 3 },
                l.a.createElement(Lr, null, l.a.createElement(_r, null)),
              ),
            ),
          )
        }
      ;(r.a.defaults.xsrfCookieName = 'csrftoken'),
        (r.a.defaults.xsrfHeaderName = 'X-CSRFToken'),
        (r.a.defaults.headers.post['Content-Type'] = 'application/json'),
        (r.a.defaults.headers.common['Content-Type'] = 'application/json'),
        s.a.render(l.a.createElement(Wr, null), document.getElementById('root'))
    },
  },
  [[191, 1, 2]],
])
//# sourceMappingURL=main.ab24ecfd.chunk.js.map
