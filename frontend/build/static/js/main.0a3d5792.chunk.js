;(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    194: function (e, t, a) {
      e.exports = a(227)
    },
    227: function (e, t, a) {
      'use strict'
      a.r(t)
      var n = a(71),
        r = a.n(n),
        o = a(0),
        i = a.n(o),
        l = a(12),
        s = a.n(l),
        c = a(18),
        u = a(160),
        m = a(47),
        d = a(161),
        h = a(15),
        p = { isLoggedIn: !1, user: !1 },
        f = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : p,
            t = arguments.length > 1 ? arguments[1] : void 0
          switch (t.type) {
            case 'ACTION_LOGIN_SUCCESS':
              var a = t.user
              return Object(h.a)(
                Object(h.a)({}, e),
                {},
                { isLoggedIn: !0, user: a },
              )
            case 'ACTION_USER_UPDATE_SUCCESS':
              var n = t.data
              return Object(h.a)(
                Object(h.a)({}, e),
                {},
                {
                  isLoggedIn: !0,
                  user: Object(h.a)(Object(h.a)({}, e.user), n),
                },
              )
            case 'ACTION_LOGOUT':
              return Object(h.a)(
                Object(h.a)({}, e),
                {},
                { isLoggedIn: !1, user: !1 },
              )
            default:
              return e
          }
        },
        g = { message: null, isError: !1 },
        b = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : g,
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
        E = { calls: [], recipients: [], loading: !1, error: !1 },
        v = function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : E,
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
              var i = t.recipient,
                l = e.recipients
              return (
                l.push(i),
                Object(h.a)(Object(h.a)({}, e), {}, { recipients: l })
              )
            default:
              return e
          }
        },
        y = Object(m.combineReducers)({ auth: f, dashboard: v, alert: b }),
        w = a(141),
        k = a(162),
        x = { key: 'root', blacklist: ['alert'], storage: a.n(k).a }
      var O = a(22),
        C = a(28),
        S = a(9),
        j = a.n(S),
        T = a(14),
        A = function () {
          localStorage.removeItem('access_token'),
            localStorage.removeItem('refresh_token')
        },
        N = function () {
          return localStorage.getItem('access_token')
        },
        I = function (e) {
          localStorage.setItem('access_token', e.access),
            localStorage.setItem('refresh_token', e.refresh)
        },
        _ = 'https://sharethepledge-assets.s3.us-east-2.amazonaws.com',
        F = {
          fl: 'Far Left',
          le: 'Left',
          cl: 'Center Left',
          m: 'Middle',
          cr: 'Center Right',
          ri: 'Right',
          fr: 'Far Right',
          uk: 'Unknown',
        },
        B = { re: 'Registered', nr: 'Not Registered', un: 'Unknow' },
        D = {
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
        W = N(),
        L = r.a.create({
          baseURL: '/api/',
          timeout: 5e3,
          headers: {
            Authorization: W ? 'Token ' + W : null,
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        })
      L.interceptors.response.use(
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
                return L.post('/token/refresh/', { refresh: a })
                  .then(function (e) {
                    return (
                      I(e.data),
                      (L.defaults.headers.Authorization =
                        'Token ' + e.data.access),
                      (t.headers.Authorization = 'Token ' + e.data.access),
                      L(t)
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
      var P = L,
        R = a(16),
        M = function () {
          var e = N()
          if (e) {
            var t = e.split('.'),
              a = Object(R.a)(t, 2)[1],
              n = window.atob(a)
            return console.log(n), JSON.parse(n)
          }
        }
      function z() {
        return (z = Object(T.a)(
          j.a.mark(function e(t) {
            var a, n
            return j.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        t({ type: 'ACTION_LOAD_CALLS' }),
                        (e.next = 4),
                        P.get('calls/')
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
      function H(e) {
        return q.apply(this, arguments)
      }
      function q() {
        return (q = Object(T.a)(
          j.a.mark(function e(t) {
            var a, n
            return j.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        t({ type: 'ACTION_LOAD_RECIPIENTS' }),
                        (e.next = 4),
                        P.get('recipients/')
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
      function U(e, t) {
        return V.apply(this, arguments)
      }
      function V() {
        return (V = Object(T.a)(
          j.a.mark(function e(t, a) {
            var n
            return j.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (a.user = M().id),
                        (e.next = 4),
                        P.post('recipients/', a)
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
      function Y(e, t) {
        return G.apply(this, arguments)
      }
      function G() {
        return (G = Object(T.a)(
          j.a.mark(function e(t, a) {
            var n
            return j.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (a.caller = M().id),
                        (e.next = 4),
                        P.post('calls/', a)
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
      function K() {
        return (K = Object(T.a)(
          j.a.mark(function e(t, a, n, r) {
            var o, i
            return j.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        P.patch('calls/'.concat(a.id, '/'), n)
                      )
                    case 3:
                      ;(o = e.sent), (i = 0)
                    case 5:
                      if (!(i < r.length)) {
                        e.next = 12
                        break
                      }
                      if (r[i].id !== a.id) {
                        e.next = 9
                        break
                      }
                      return (
                        n.notes
                          ? (r[i].notes = n.notes)
                          : (r[i].completed = n.completed),
                        e.abrupt('break', 12)
                      )
                    case 9:
                      i++, (e.next = 5)
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
      var J = a(164),
        X = a.n(J),
        Z = a(7),
        Q = a(8),
        $ = a(290),
        ee = a(50),
        te = a(17),
        ae = a(273),
        ne = a(272),
        re = a(271),
        oe = a(142),
        ie = a(270),
        le = a(235),
        se = a(291),
        ce = a(230),
        ue = a(236),
        me = a(233),
        de = function (e) {
          var t = e.name,
            a = e.label,
            n = e.type,
            r = void 0 === n ? 'text' : n,
            o = e.handleBlur,
            l = e.handleChange,
            s = e.helperText,
            c = e.error,
            u = e.list,
            m = e.rows,
            d = void 0 === m ? 1 : m,
            h = e.values,
            p = e.description,
            f = e.size,
            g = void 0 === f ? 'small' : f
          return (
            console.log(c),
            i.a.createElement(
              i.a.Fragment,
              null,
              u &&
                i.a.createElement(
                  ce.a,
                  {
                    variant: 'outlined',
                    fullWidth: !0,
                    margin: 'normal',
                    size: g,
                    error: c,
                  },
                  i.a.createElement(ue.a, { htmlFor: 'age-native-simple' }, a),
                  i.a.createElement(
                    le.a,
                    {
                      fullWidth: !0,
                      label: a,
                      name: t,
                      onBlur: o,
                      onChange: l,
                      value: h[t],
                    },
                    i.a.createElement(se.a, { value: '' }),
                    Object.keys(u).map(function (e, t) {
                      return i.a.createElement(se.a, { key: t, value: e }, u[e])
                    }),
                  ),
                  p && i.a.createElement(me.a, null, p),
                  i.a.createElement(me.a, null, s),
                ),
              !u &&
                i.a.createElement(ie.a, {
                  error: c,
                  fullWidth: !0,
                  helperText: s,
                  label: a,
                  margin: 'normal',
                  name: t,
                  type: r,
                  onBlur: o,
                  onChange: l,
                  value: h[t],
                  variant: 'outlined',
                  size: g,
                  rows: d,
                  InputLabelProps: 'date' === r && { shrink: !0 },
                }),
            )
          )
        }
      function he() {
        var e = Object(Z.a)([
          '\n  &.form {\n    padding: 2rem;\n    margin: 2rem 0;\n    border: 1px solid rgb(240, 104, 47);\n    min-height: 100%;\n    .actions {\n      margin-top: 1rem;\n    }\n  }\n',
        ])
        return (
          (he = function () {
            return e
          }),
          e
        )
      }
      var pe = Q.a.div(he()),
        fe = function (e) {
          var t = e.onSubmit,
            a = (e.errorState, e.toggleModal),
            n = void 0 === a ? null : a,
            r =
              "If you don't know or you'd rather not to say, you can this leave blank"
          return i.a.createElement(
            re.a,
            { maxWidth: 'sm' },
            i.a.createElement(
              pe,
              { className: !n && 'form' },
              i.a.createElement(
                ee.a,
                {
                  initialValues: {
                    first_name: '',
                    last_name: '',
                    political_leaning: '',
                    state_registered: '',
                    state_residence: '',
                    registered_to_vote: '',
                  },
                  validationSchema: te.a().shape({
                    first_name: te.c().required('First Name is required'),
                  }),
                  onSubmit: (function () {
                    var e = Object(T.a)(
                      j.a.mark(function e(a, n) {
                        var r, o, i, l, s
                        return j.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.setErrors),
                                  (o = n.setStatus),
                                  (i = n.setSubmitting),
                                  (e.next = 3),
                                  t(a)
                                )
                              case 3:
                                ;(l = e.sent),
                                  (s = l.error) &&
                                    (o({ success: !1 }), r(s), i(!1))
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
                    l = e.handleSubmit,
                    s = e.isSubmitting,
                    c = e.touched,
                    u = e.values
                  return i.a.createElement(
                    'form',
                    { onSubmit: l },
                    i.a.createElement(de, {
                      error: Boolean(c.first_name && t.first_name),
                      helperText: c.first_name && t.first_name,
                      label: 'First Name',
                      name: 'first_name',
                      handleBlur: a,
                      handleChange: o,
                      values: u,
                    }),
                    i.a.createElement(de, {
                      error: Boolean(c.last_name && t.last_name),
                      helperText: c.last_name && t.last_name,
                      label: 'Last Name',
                      name: 'last_name',
                      handleBlur: a,
                      handleChange: o,
                      values: u,
                    }),
                    i.a.createElement(de, {
                      error: Boolean(c.state_residence && t.state_residence),
                      helperText: c.state_residence && t.state_residence,
                      label: 'State Residence',
                      name: 'state_residence',
                      handleBlur: a,
                      handleChange: o,
                      list: D,
                      description: r,
                      values: u,
                    }),
                    i.a.createElement(de, {
                      error: Boolean(c.state_registered && t.state_registered),
                      helperText: c.state_registered && t.state_registered,
                      label: 'State Registered',
                      name: 'state_registered',
                      handleBlur: a,
                      handleChange: o,
                      list: D,
                      description: r,
                      values: u,
                    }),
                    i.a.createElement(de, {
                      error: Boolean(
                        c.registered_to_vote && t.registered_to_vote,
                      ),
                      helperText: c.registered_to_vote && t.registered_to_vote,
                      label: 'State Registered',
                      name: 'registered_to_vote',
                      handleBlur: a,
                      handleChange: o,
                      list: B,
                      description: r,
                      values: u,
                    }),
                    i.a.createElement(de, {
                      error: Boolean(
                        c.political_leaning && t.political_leaning,
                      ),
                      helperText: c.political_leaning && t.political_leaning,
                      label: 'Political Leaning',
                      name: 'political_leaning',
                      handleBlur: a,
                      handleChange: o,
                      list: F,
                      description: r,
                      values: u,
                    }),
                    i.a.createElement(
                      oe.a,
                      { variant: 'subtitle2' },
                      i.a.createElement(
                        'i',
                        null,
                        'For your organizational purposes, we want to give you some options for categorizing your calls and your callees. Adding these details in is ',
                        i.a.createElement('strong', null, 'totally optional'),
                        '. We will only ever look at this information for aggregated, anonymized tracking of where The Pledge has spread.',
                      ),
                    ),
                    i.a.createElement('br', null),
                    i.a.createElement(
                      ne.a,
                      { container: !0, spacing: 1 },
                      i.a.createElement(
                        ne.a,
                        { item: !0, xs: n ? 6 : 12 },
                        i.a.createElement(
                          ae.a,
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
                      i.a.createElement(
                        ne.a,
                        { item: !0, xs: n ? 6 : 0 },
                        n &&
                          i.a.createElement(
                            ae.a,
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
        ge = function (e) {
          var t = e.toggleModal,
            a = void 0 === t ? null : t,
            n = Object(c.b)(),
            r = Object(C.b)().enqueueSnackbar,
            o = (function () {
              var e = Object(T.a)(
                j.a.mark(function e(t, o) {
                  var i, l, s
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), U(n, t)
                          case 3:
                            if (((i = e.sent), (l = i.response), !i.isError)) {
                              e.next = 13
                              break
                            }
                            if (
                              ((s = l.response),
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
                            a ? a(!1) : Object(O.c)('dashboard'),
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
          return i.a.createElement(fe, { onSubmit: o, toggleModal: a })
        }
      function be() {
        var e = Object(Z.a)([
          '\n  padding: 2rem;\n  margin: 10rem 0;\n  border: 1px solid rgb(240, 104, 47);\n  min-height: 100%;\n  .actions {\n    margin-top: 1rem;\n  }\n',
        ])
        return (
          (be = function () {
            return e
          }),
          e
        )
      }
      function Ee() {
        var e = Object(Z.a)([
          '\n  && {\n    & > div {\n      padding: 0;\n      form {\n        padding: 0;\n        padding-top: 3rem;\n        padding-bottom: 3rem;\n        margin: 0;\n        border: none;\n      }\n    }\n  }\n',
        ])
        return (
          (Ee = function () {
            return e
          }),
          e
        )
      }
      var ve = Object(Q.a)($.a)(Ee()),
        ye = Q.a.div(be()),
        we = function (e) {
          var t = e.onSubmit,
            a = (e.errorState, e.recipients),
            n = Object(o.useState)(!1),
            r = Object(R.a)(n, 2),
            l = r[0],
            s = r[1]
          return i.a.createElement(
            re.a,
            { maxWidth: 'sm' },
            i.a.createElement(
              ye,
              null,
              i.a.createElement(
                ee.a,
                {
                  initialValues: { date: '', recipient: '', notes: '' },
                  validationSchema: te.a().shape({
                    date: te.c().required('Date is required'),
                    recipient: te.c().required('Recipient is required'),
                  }),
                  onSubmit: (function () {
                    var e = Object(T.a)(
                      j.a.mark(function e(a, n) {
                        var r, o, i, l, s
                        return j.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.setErrors),
                                  (o = n.setStatus),
                                  (i = n.setSubmitting),
                                  (e.next = 3),
                                  t(a)
                                )
                              case 3:
                                ;(l = e.sent),
                                  (s = l.error) &&
                                    (o({ success: !1 }), r(s), i(!1))
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
                  return i.a.createElement(
                    'form',
                    { onSubmit: o },
                    i.a.createElement(de, {
                      error: Boolean(u.date && t.date),
                      helperText: u.date && t.date,
                      label: 'Date',
                      name: 'date',
                      type: 'date',
                      handleBlur: n,
                      handleChange: r,
                      values: m,
                    }),
                    i.a.createElement(de, {
                      error: Boolean(u.recipient && t.recipient),
                      helperText: u.recipient && t.recipient,
                      label: 'Recipient',
                      name: 'recipient',
                      handleBlur: n,
                      handleChange: r,
                      values: m,
                      list: a,
                    }),
                    i.a.createElement(de, {
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
                    i.a.createElement(
                      ne.a,
                      { container: !0, spacing: 1, className: 'actions' },
                      i.a.createElement(
                        ne.a,
                        { item: !0, xs: 6 },
                        i.a.createElement(
                          ae.a,
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
                      i.a.createElement(
                        ne.a,
                        { item: !0, xs: 6 },
                        i.a.createElement(
                          ae.a,
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
                      i.a.createElement(
                        ve,
                        {
                          onClose: function () {
                            return s(!1)
                          },
                          'aria-labelledby': 'simple-dialog-title',
                          open: l,
                        },
                        i.a.createElement(ge, { toggleModal: s }),
                      ),
                    ),
                  )
                },
              ),
            ),
          )
        },
        ke = function () {
          var e = Object(c.b)(),
            t = Object(c.c)(function (e) {
              return e.dashboard
            }).recipients,
            a = Object(C.b)().enqueueSnackbar,
            n = (function () {
              var t = Object(T.a)(
                j.a.mark(function t(n, r) {
                  var o, i, l
                  return j.a.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.prev = 0),
                              (n.date = X()(n.date, 'YYYY-MM-DD').format(
                                'MM-DD-YYYY',
                              )),
                              (t.next = 4),
                              Y(e, n)
                            )
                          case 4:
                            if (((o = t.sent), (i = o.response), !o.isError)) {
                              t.next = 14
                              break
                            }
                            if (400 !== (l = i.response).status) {
                              t.next = 12
                              break
                            }
                            return (
                              a(l.data, { variant: 'warning' }),
                              t.abrupt('return', { error: l.data })
                            )
                          case 12:
                            t.next = 16
                            break
                          case 14:
                            a('New Call is Created!', { variant: 'success' }),
                              Object(O.c)('dashboard')
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
            i.a.createElement(we, { onSubmit: n, recipients: r })
          )
        },
        xe = a(286),
        Oe = a(169),
        Ce = a.n(Oe),
        Se = a(174),
        je = '#FFFFFF',
        Te = Object(Se.a)({
          palette: {
            primary: {
              main: '#F0682F',
              light: '##FF995C',
              dark: '#B73700',
              contrastText: je,
            },
            secondary: {
              main: '#004EB1',
              light: '#5579E4',
              dark: '#002781',
              contrastText: je,
            },
            error: {
              main: '#F02F57',
              light: '#F35878',
              dark: '#A8203C',
              contrastText: je,
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
            background: { default: je, layout: '#E9EDF1' },
            text: {
              white: je,
              disabled: '#E9EDF1',
              hint: '#CED4DA',
              primary: '#343A40',
              secondary: '#868E96',
            },
          },
          spacing: 16,
          typography: {},
        }),
        Ae = Object(h.a)(
          Object(h.a)({}, Ce.a),
          {},
          {
            colors: {
              primary: '#F0682F',
              secondary: '#004EB1',
              white: '#FFFFFF',
              base100: '#F8F9FA',
              base200: '#F1F3F5',
              base300: '#E9EDF1',
              base400: '#CED4DA',
              base500: '#ADB5BD',
              base600: '#868E96',
              base700: '#495057',
              base800: '#343A40',
              base900: '#181B1E',
            },
            fonts: {
              body: 'Inter, system-ui, sans-serif',
              heading: 'Mulish, system-ui, sans-serif',
              button: 'Inter, system-ui, sans-serif',
              link: 'Inter, system-ui, sans-serif',
            },
            fontWeights: { body: 400, heading: 800, button: 600, link: 600 },
            fontSizes: [14, 16, 18, 22, 28, 32, 40],
            lineHeights: { body: 1.5, heading: 1.25 },
            borderWidths: { button: '1px' },
            shadows: { small: '0 4px 8px rgba(0, 0, 0, 0.08)' },
            text: {
              body: {
                small: {
                  color: 'base800',
                  fontFamily: 'body',
                  lineHeight: 'body',
                  fontWeight: 'body',
                  fontSize: 0,
                },
                large: {
                  color: 'base800',
                  fontFamily: 'body',
                  lineHeight: 'body',
                  fontWeight: 'body',
                  fontSize: 1,
                },
              },
              h1: {
                color: 'base800',
                fontFamily: 'heading',
                lineHeight: 'heading',
                fontWeight: 'heading',
                fontSize: 6,
              },
              h2: {
                color: 'base800',
                fontFamily: 'heading',
                lineHeight: 'heading',
                fontWeight: 'heading',
                fontSize: 5,
              },
              h3: {
                color: 'base800',
                fontFamily: 'heading',
                lineHeight: 'heading',
                fontWeight: 'heading',
                fontSize: 4,
              },
              h4: {
                color: 'base800',
                fontFamily: 'heading',
                lineHeight: 'heading',
                fontWeight: 'heading',
                fontSize: 3,
              },
              h5: {
                color: 'base800',
                fontFamily: 'heading',
                lineHeight: 'heading',
                fontWeight: 'heading',
                fontSize: 2,
              },
              h6: {
                color: 'base800',
                fontFamily: 'heading',
                lineHeight: 'heading',
                fontWeight: 'heading',
                fontSize: 1,
              },
            },
            links: {
              nav: {
                px: 2,
                color: 'base600',
                fontFamily: 'body',
                lineHeight: 'body',
                fontWeight: 'link',
                fontSize: 1,
                textDecoration: 'none',
                '&:hover': { color: 'primary', textDecoration: 'underline' },
              },
              footer: {
                color: 'base800',
                fontFamily: 'body',
                lineHeight: 'body',
                fontWeight: 'link',
                fontSize: 0,
                textDecoration: 'none',
                '&:hover': { color: 'primary' },
              },
              ctaLink: {
                color: 'secondary',
                fontFamily: 'body',
                lineHeight: 'body',
                fontWeight: 'link',
                fontSize: 1,
                textDecoration: 'none',
                '&:hover': { color: 'base600' },
              },
            },
            buttons: {
              primary: {
                color: 'white',
                fontFamily: 'body',
                fontWeight: 'button',
                borderStyle: 'solid',
                borderColor: 'primary',
                borderWidth: 'button',
                bg: 'primary',
                '&:focus': { bg: 'white', color: 'primary', outline: 'none' },
              },
              secondary: {
                color: 'primary',
                fontWeight: 'button',
                fontFamily: 'body',
                bg: 'white',
                borderStyle: 'solid',
                borderColor: 'primary',
                borderWidth: 'button',
                '&:focus': { bg: 'primary', color: 'white' },
              },
              tertiary: {
                color: 'primary',
                fontFamily: 'body',
                fontWeight: 'button',
                bg: 'white',
              },
            },
            alerts: {
              status: { color: 'white', bg: 'primary' },
              error: { color: 'white', bg: 'secondary' },
            },
            content: { normal: { px: '10vh' } },
          },
        ),
        Ne = {
          title: 'Dashboard',
          description:
            'Explanation of what the dashboard is, how to use it, etc. At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.At nam minimum ponderum. Est audiam animal molestiae te.',
          bg: Ae.colors.white,
        },
        Ie = {
          description:
            'The pledge is our commitment to calling 5 or more people you know before November 3rd and encouraging them to vote blue down the ballot \u2014 to get politicians who threaten our democracy out of office.',
          bg: Ae.colors.grey300,
          ctaText: "Why We're Doing This",
        },
        _e = {
          title: 'Resources',
          description:
            'These resources are here to get you through Step 3: Prep For Your Calls.',
          subDescription:
            'Collectively, these resources allow us to do three things: (1) Meet our callees where they are by understanding their core values, beliefs, and viewpoints, (2) Learn skills that help us have more thoughtful, more open conversations, and, (3) Think strategically about where our calls can make the most difference between now and November 3rd',
          bg: Ae.colors.base300,
        },
        Fe = 'Step by Step',
        Be = [
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
      function De() {
        var e = Object(Z.a)([
          '\n  && {\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    display: flex;\n  }\n',
        ])
        return (
          (De = function () {
            return e
          }),
          e
        )
      }
      function We() {
        var e = Object(Z.a)([
          '\n  margin-right: auto;\n  margin-left: auto;\n  background-color: ',
          ';\n  min-height: 40vh;\n  width: 100%;\n',
        ])
        return (
          (We = function () {
            return e
          }),
          e
        )
      }
      var Le = Q.a.div(We(), function (e) {
          return e.bg
        }),
        Pe = Object(Q.a)(xe.a)(De()),
        Re = function (e) {
          var t = e.content,
            a = e.children
          return i.a.createElement(
            Le,
            { bg: t.bg },
            i.a.createElement(
              Pe,
              { p: 2 },
              a,
              t.title &&
                i.a.createElement(
                  oe.a,
                  { variant: 'h4', mt: 1, mb: 4 },
                  i.a.createElement('strong', null, t.title),
                ),
              t.description &&
                t.ctaText &&
                i.a.createElement(
                  xe.a,
                  {
                    bgcolor: 'secondary.main',
                    borderRadius: '5px',
                    p: 2,
                    textAlign: 'center',
                    color: 'text.white',
                  },
                  i.a.createElement(
                    oe.a,
                    { variant: 'h6' },
                    i.a.createElement('strong', null, t.description),
                  ),
                ),
              t.description &&
                !t.ctaText &&
                i.a.createElement(
                  xe.a,
                  {
                    width: '100%',
                    p: 1,
                    textAlign: 'center',
                    className: 'description',
                    color: 'primary',
                  },
                  i.a.createElement(oe.a, { variant: 'body1' }, t.description),
                ),
              t.ctaText &&
                i.a.createElement(
                  xe.a,
                  { my: 3, px: 2 },
                  i.a.createElement(
                    ae.a,
                    {
                      onClick: function () {
                        return Object(O.c)('the-why')
                      },
                      color: 'primary',
                      variant: 'contained',
                    },
                    i.a.createElement('strong', null, t.ctaText),
                  ),
                ),
            ),
          )
        }
      function Me() {
        var e = Object(Z.a)(['\n  && {\n    min-width: 150px;\n  }\n'])
        return (
          (Me = function () {
            return e
          }),
          e
        )
      }
      var ze = Object(Q.a)(ae.a)(Me()),
        He = function (e) {
          var t = e.label,
            a = e.onClick,
            n = e.active
          return void 0 !== n && n
            ? i.a.createElement(
                ze,
                { variant: 'contained', color: 'primary', onClick: a },
                t,
              )
            : i.a.createElement(ze, { onClick: a }, t)
        },
        qe = a(274),
        Ue = a(288),
        Ve = a(234),
        Ye = a(275),
        Ge = a(276),
        Ke = a(277),
        Je = a(170),
        Xe = a.n(Je)
      function Ze() {
        var e = Object(Z.a)([
          '\n  && {\n    border: 1px solid #e7e7e7;\n    border-radius: 5px;\n    margin-bottom: 1rem;\n  }\n',
        ])
        return (
          (Ze = function () {
            return e
          }),
          e
        )
      }
      function Qe() {
        var e = Object(Z.a)([
          '\n  && {\n    align-items: center;\n    .right-col {\n      text-align: right;\n    }\n  }\n',
        ])
        return (
          (Qe = function () {
            return e
          }),
          e
        )
      }
      var $e = Object(Q.a)(ne.a)(Qe()),
        et = Object(Q.a)(ne.a)(Ze()),
        tt = function (e) {
          var t = e.call,
            a = void 0 === t ? {} : t,
            n = e.recipient,
            r = void 0 === n ? {} : n,
            l = e.updateCallAction,
            s = (e.loading, Object(o.useState)(!1)),
            c = Object(R.a)(s, 2),
            u = c[0],
            m = c[1],
            d = Object(o.useState)(!1),
            h = Object(R.a)(d, 2),
            p = h[0],
            f = h[1],
            g = r.first_name,
            b = r.last_name,
            E = r.state_residence,
            v = r.state_registered,
            y = r.registered_to_vote,
            w = r.political_leaning,
            k = a.notes,
            x = a.completed,
            O = a.date,
            C = Object(o.useState)(k),
            S = Object(R.a)(C, 2),
            j = S[0],
            T = S[1],
            A = function (e, t) {
              console.log('call1', e), l(e, t), f(!1)
            }
          return i.a.createElement(
            et,
            { item: !0, xs: 12 },
            i.a.createElement(
              $e,
              { container: !0 },
              i.a.createElement(
                ne.a,
                { item: !0, xs: 8, className: 'left-col' },
                O &&
                  i.a.createElement(
                    oe.a,
                    { variant: 'h5', component: 'h5' },
                    ' ',
                    O,
                  ),
                i.a.createElement(
                  oe.a,
                  { variant: 'subtitle1', component: 'subtitle1' },
                  ' ',
                  ''.concat(g, ' ').concat(b),
                ),
                i.a.createElement('br', null),
              ),
              i.a.createElement(
                ne.a,
                { item: !0, xs: 4, className: 'right-col' },
                k &&
                  i.a.createElement(qe.a, {
                    control: i.a.createElement(Ue.a, {
                      checked: x,
                      name: 'checkedB',
                      color: 'primary',
                      onChange: function (e) {
                        return A(a, { completed: e.target.checked })
                      },
                    }),
                    label: 'Contacted',
                  }),
              ),
            ),
            i.a.createElement(
              $e,
              { container: !0, spacing: 2 },
              i.a.createElement(
                ne.a,
                { item: !0, xs: 8, className: 'left-col' },
                i.a.createElement(
                  oe.a,
                  { variant: 'subtitle1', component: 'subtitle1' },
                  ' ',
                  'State Residence',
                ),
              ),
              i.a.createElement(
                ne.a,
                { item: !0, xs: 4, className: 'right-col' },
                i.a.createElement(
                  oe.a,
                  { variant: 'subtitle1', component: 'subtitle1' },
                  D[null === E || void 0 === E ? void 0 : E.toUpperCase()],
                ),
              ),
              i.a.createElement(
                ne.a,
                { item: !0, xs: 8, className: 'left-col' },
                i.a.createElement(
                  oe.a,
                  { variant: 'subtitle1', component: 'subtitle1' },
                  ' ',
                  'State Registered',
                ),
              ),
              i.a.createElement(
                ne.a,
                { item: !0, xs: 4, className: 'right-col' },
                i.a.createElement(
                  oe.a,
                  { variant: 'subtitle1', component: 'subtitle1' },
                  D[null === v || void 0 === v ? void 0 : v.toUpperCase()],
                ),
              ),
              i.a.createElement(
                ne.a,
                { item: !0, xs: 8, className: 'left-col' },
                i.a.createElement(
                  oe.a,
                  { variant: 'subtitle1', component: 'subtitle1' },
                  ' ',
                  'Registered To Vote',
                ),
              ),
              i.a.createElement(
                ne.a,
                { item: !0, xs: 4, className: 'right-col' },
                i.a.createElement(
                  oe.a,
                  { variant: 'subtitle1', component: 'subtitle1' },
                  B[y],
                ),
              ),
              i.a.createElement(
                ne.a,
                { item: !0, xs: 8, className: 'left-col' },
                i.a.createElement(
                  oe.a,
                  { variant: 'subtitle1', component: 'subtitle1' },
                  ' ',
                  'Political Leaning',
                ),
              ),
              i.a.createElement(
                ne.a,
                { item: !0, xs: 4, className: 'right-col' },
                i.a.createElement(
                  oe.a,
                  { variant: 'subtitle1', component: 'subtitle1' },
                  F[w],
                ),
              ),
            ),
            k &&
              i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(
                  ae.a,
                  {
                    color: 'primary',
                    onClick: function () {
                      return m(!u)
                    },
                  },
                  u ? 'Hide Notes' : 'Show Notes',
                ),
                u &&
                  i.a.createElement(
                    'div',
                    null,
                    i.a.createElement(
                      oe.a,
                      { variant: 'subtitle1', component: 'subtitle1' },
                      ' ',
                      i.a.createElement('i', null, '' === k ? 'No Notes' : k),
                    ),
                    i.a.createElement(
                      Ve.a,
                      {
                        onClick: function () {
                          return f(!0)
                        },
                      },
                      i.a.createElement(Xe.a, null),
                    ),
                    i.a.createElement(
                      $.a,
                      {
                        onClose: function () {
                          return f(!1)
                        },
                        'aria-labelledby': 'simple-dialog-title',
                        open: p,
                      },
                      i.a.createElement(
                        Ye.a,
                        { id: 'simple-dialog-title' },
                        'Edit Notes',
                      ),
                      i.a.createElement(
                        Ge.a,
                        null,
                        i.a.createElement(ie.a, {
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
                      i.a.createElement(
                        Ke.a,
                        null,
                        i.a.createElement(
                          ae.a,
                          {
                            autoFocus: !0,
                            onClick: function () {
                              return f(!1)
                            },
                            color: 'primary',
                          },
                          'Cancel',
                        ),
                        i.a.createElement(
                          ae.a,
                          {
                            onClick: function () {
                              return A(a, { notes: j })
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
        },
        at = function (e) {
          var t = e.calls,
            a = e.recipients,
            n = e.updateCallAction,
            r = e.loading
          return i.a.createElement(
            i.a.Fragment,
            null,
            null === t || void 0 === t
              ? void 0
              : t.map(function (e, t) {
                  var o = a.find(function (t) {
                    return t.id === e.recipient
                  })
                  return i.a.createElement(tt, {
                    call: e,
                    recipient: o,
                    key: t,
                    updateCallAction: n,
                    loading: r,
                  })
                }),
            i.a.createElement(
              ne.a,
              { item: !0, xs: 12 },
              i.a.createElement(
                ae.a,
                {
                  variant: 'contained',
                  color: 'primary',
                  onClick: function () {
                    return Object(O.c)('create-call')
                  },
                  fullWidth: !0,
                },
                'Schedule Call +',
              ),
            ),
          )
        },
        nt = function (e) {
          var t = e.recipients
          return i.a.createElement(
            i.a.Fragment,
            null,
            t.map(function (e, t) {
              return i.a.createElement(tt, { recipient: e, key: t })
            }),
            i.a.createElement(
              ne.a,
              { item: !0, xs: 12 },
              i.a.createElement(
                ae.a,
                {
                  variant: 'contained',
                  color: 'primary',
                  onClick: function () {
                    return Object(O.c)('create-recipient')
                  },
                  fullWidth: !0,
                },
                'Add Recipient +',
              ),
            ),
          )
        }
      function rt() {
        var e = Object(Z.a)(['\n  && {\n    max-width: 616px;\n  }\n'])
        return (
          (rt = function () {
            return e
          }),
          e
        )
      }
      var ot = Object(Q.a)(ne.a)(rt()),
        it = function () {
          var e = Object(o.useState)('calls'),
            t = Object(R.a)(e, 2),
            a = t[0],
            n = t[1],
            r = Object(c.b)(),
            l = Object(c.c)(function (e) {
              return e.dashboard
            }),
            s = l.calls,
            u = l.recipients,
            m = l.loading
          Object(o.useEffect)(
            function () {
              'calls' === a
                ? (!(function (e) {
                    z.apply(this, arguments)
                  })(r),
                  H(r))
                : H(r)
            },
            [a],
          )
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(Re, { content: Ne }),
            i.a.createElement(
              ne.a,
              {
                container: !0,
                alignItems: 'center',
                justify: 'center',
                fullWidth: !0,
              },
              i.a.createElement(
                xe.a,
                { p: 1 },
                i.a.createElement(He, {
                  active: 'calls' === a,
                  label: 'Calls',
                  onClick: function () {
                    return n('calls')
                  },
                }),
              ),
              i.a.createElement(
                xe.a,
                { p: 1 },
                i.a.createElement(He, {
                  active: 'recipients' === a,
                  label: 'Recipients',
                  onClick: function () {
                    return n('recipients')
                  },
                }),
              ),
            ),
            i.a.createElement(
              ne.a,
              {
                container: !0,
                alignItems: 'center',
                justify: 'center',
                fullWidth: !0,
              },
              i.a.createElement(
                xe.a,
                { px: 2, py: 2 },
                'calls' === a &&
                  i.a.createElement(
                    ot,
                    { container: !0, spacing: 4 },
                    i.a.createElement(at, {
                      calls: s,
                      recipients: u,
                      updateCallAction: function (e, t) {
                        !(function (e, t, a, n) {
                          K.apply(this, arguments)
                        })(r, e, t, s)
                      },
                      loading: m,
                    }),
                  ),
                'recipients' === a &&
                  i.a.createElement(
                    ot,
                    { container: !0, spacing: 4 },
                    i.a.createElement(nt, { recipients: u }),
                  ),
              ),
            ),
          )
        },
        lt = a(278)
      function st() {
        var e = Object(Z.a)([
          '\n  && {\n    text-align: center;\n    width: 240px;\n    height: 144px;\n    background-color: white;\n    margin-bottom: 1rem;\n    .title {\n      opacity: 20%;\n    }\n  }\n',
        ])
        return (
          (st = function () {
            return e
          }),
          e
        )
      }
      var ct = Object(Q.a)(lt.a)(st()),
        ut = function (e) {
          var t = e.stepID,
            a = e.primaryText
          return i.a.createElement(
            ct,
            null,
            i.a.createElement(
              xe.a,
              { m: 0.5, px: 0.5, pt: 1, pb: 'auto' },
              i.a.createElement(
                xe.a,
                { fontSize: 'h5.fontSize', mb: 0.5, className: 'title' },
                t,
              ),
              i.a.createElement(
                xe.a,
                { fontSize: 'body1.fontSize', fontWeight: 'fontWeightBold' },
                a,
              ),
            ),
          )
        }
      function mt() {
        var e = Object(Z.a)([
          '\n  && {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    align-itemns: center;\n    width: 100%;\n  }\n',
        ])
        return (
          (mt = function () {
            return e
          }),
          e
        )
      }
      function dt() {
        var e = Object(Z.a)([
          '\n  && {\n    background-color: ',
          ';\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    .learn-more {\n      padding-right: 3rem;\n      padding-left: 3rem;\n    }\n  }\n',
        ])
        return (
          (dt = function () {
            return e
          }),
          e
        )
      }
      function ht() {
        var e = Object(Z.a)([
          '\n  background-color: ',
          ';\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n',
        ])
        return (
          (ht = function () {
            return e
          }),
          e
        )
      }
      var pt = Q.a.div(ht(), function (e) {
          return e.bg
        }),
        ft = Object(Q.a)(xe.a)(dt(), function (e) {
          return e.bg
        }),
        gt = Object(Q.a)(xe.a)(mt()),
        bt = function () {
          return i.a.createElement(
            pt,
            { bg: Ae.colors.base300 },
            i.a.createElement(
              ft,
              { px: 2, py: 4 },
              i.a.createElement(
                xe.a,
                {
                  mx: 'auto',
                  px: 2,
                  mb: 1,
                  textAlign: 'center',
                  className: 'title-wrapper',
                },
                i.a.createElement(oe.a, { variant: 'h4' }, Fe),
              ),
              i.a.createElement(
                gt,
                { mb: 1 },
                Be.map(function (e) {
                  return i.a.createElement(ut, {
                    key: e.stepID,
                    stepID: e.stepID,
                    primaryText: e.primary,
                  })
                }),
              ),
              i.a.createElement(
                ae.a,
                {
                  onClick: function () {
                    return Object(O.c)('steps')
                  },
                  variant: 'contained',
                  className: 'learn-more',
                  color: 'primary',
                },
                'Learn More >',
              ),
            ),
          )
        },
        Et = a(39),
        vt = a.n(Et),
        yt = a(54),
        wt = a.n(yt),
        kt = a(279),
        xt = a(280),
        Ot = a(292),
        Ct = a(281)
      function St() {
        var e = Object(Z.a)(['\n  && {\n    box-shadow: none;\n  }\n'])
        return (
          (St = function () {
            return e
          }),
          e
        )
      }
      function jt() {
        var e = Object(Z.a)([
          '\n  && {\n    box-shadow: none;\n    padding: 0;\n  }\n',
        ])
        return (
          (jt = function () {
            return e
          }),
          e
        )
      }
      function Tt() {
        var e = Object(Z.a)([
          '\n  && {\n    box-shadow: none;\n    padding: 0;\n  }\n',
        ])
        return (
          (Tt = function () {
            return e
          }),
          e
        )
      }
      var At = ''.concat(_, '/images/phone.jpg'),
        Nt = ''.concat(_, '/images/element5-digital-2i7Dn2uMEQE-unsplash.jpg'),
        It = ''.concat(_, '/images/reachable.jpg'),
        _t = ''.concat(_, '/images/swingstates.jpg'),
        Ft = ''.concat(_, '/images/facebook.jpg'),
        Bt = Object(Q.a)(kt.a)(Tt()),
        Dt = Object(Q.a)(xt.a)(jt()),
        Wt = Object(Q.a)(Ot.a)(St()),
        Lt = function () {
          var e = Object(o.useState)(!1),
            t = Object(R.a)(e, 2),
            a = t[0],
            n = t[1]
          return i.a.createElement(
            xe.a,
            { px: 20, py: 2 },
            i.a.createElement(
              ne.a,
              { container: !0, spacing: 3, alignItems: 'center' },
              i.a.createElement(
                ne.a,
                { item: !0, xs: 12, md: 8 },
                i.a.createElement(
                  Wt,
                  { expanded: a },
                  i.a.createElement(
                    Bt,
                    null,
                    i.a.createElement(
                      xe.a,
                      null,
                      i.a.createElement(
                        oe.a,
                        { mb: 3, variant: 'h4' },
                        'Who To Call',
                      ),
                      i.a.createElement(
                        oe.a,
                        { variant: 'body1' },
                        i.a.createElement(
                          'p',
                          null,
                          "President Trump has stated that he will contest this election, and that he does not intend to pass power peacefully. We need to win in key swing states, but, more importantly, we need a landslide to ensure that this election is decided by the people and not by President Trump's new ultraconservative Supreme Court. We need to get as many Americans registered and planning to vote for Biden as possible.",
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'On September 24th, Eric Trump told supporters at a Las Vegas campaign stop that his father \u201cof course [would] concede\u201d the election \u201cif he got blown out of the water\u201d by Joe Biden.',
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          i.a.createElement(
                            'strong',
                            null,
                            'So, we need to blow him out.',
                          ),
                          ' Every vote counts',
                        ),
                      ),
                    ),
                  ),
                  i.a.createElement(
                    Dt,
                    null,
                    i.a.createElement(
                      'div',
                      null,
                      i.a.createElement(
                        oe.a,
                        { variant: 'h6' },
                        'Here\u2019s who to call:',
                      ),
                      i.a.createElement(
                        oe.a,
                        { variant: 'body' },
                        i.a.createElement(
                          'ol',
                          null,
                          i.a.createElement(
                            'li',
                            null,
                            i.a.createElement('strong', null, 'Likelies:'),
                            ' Friends who are likely Biden supporters, but who may need a push to get registered or to actually vote.',
                            i.a.createElement(
                              'ol',
                              { type: 'a' },
                              i.a.createElement(
                                'li',
                                null,
                                'Help them get registered and ready to vote for Biden.',
                              ),
                              i.a.createElement(
                                'li',
                                null,
                                'Encourage them to take the pledge',
                              ),
                            ),
                          ),
                          i.a.createElement(
                            'li',
                            null,
                            i.a.createElement(
                              'strong',
                              null,
                              'Already energized:',
                            ),
                            ' Friends who are already activated to stop Trump and are looking for a way to help.',
                            i.a.createElement(
                              'ol',
                              { type: 'a' },
                              i.a.createElement(
                                'li',
                                null,
                                'Encourage them to take the pledge.',
                              ),
                            ),
                          ),
                          i.a.createElement(
                            'li',
                            null,
                            i.a.createElement(
                              'strong',
                              null,
                              'Unknowns/Non-liberals:',
                            ),
                            ' Friends who may not be planning to vote for Biden',
                            i.a.createElement(
                              'ol',
                              { type: 'a' },
                              i.a.createElement(
                                'li',
                                null,
                                'Call them to understand where they\u2019re coming from, to share your own perspective, and to encourage them to vote blue.',
                              ),
                              i.a.createElement(
                                'li',
                                null,
                                'Help them get registered and, when possible, ready to vote for Biden.',
                              ),
                              i.a.createElement(
                                'li',
                                null,
                                'Encourage them to take the pledge.',
                              ),
                            ),
                          ),
                        ),
                      ),
                      i.a.createElement(
                        oe.a,
                        { variant: 'h6' },
                        'Prioritize Swing States!',
                      ),
                      i.a.createElement(
                        oe.a,
                        { variant: 'body' },
                        i.a.createElement(
                          'p',
                          null,
                          'It is critical that we reach potential voters in swing states (e.g., PA, FL, WI, MI, and AZ), because this election is impossible to win without them.',
                          i.a.createElement(
                            'strong',
                            null,
                            'Calling friends who live, have lived, or grew up in swing states is our focus, even if they are not currently voting there.',
                          ),
                          ' ',
                          'Larger chunks of ',
                          i.a.createElement('i', null, 'their'),
                          ' networks will be people from that state, making it easier for them to reach people in an authentic way.',
                        ),
                      ),
                      i.a.createElement(
                        oe.a,
                        { variant: 'h6' },
                        'The Swing States:',
                      ),
                      i.a.createElement(
                        xe.a,
                        { my: 1, display: 'flex', justifyContent: 'center' },
                        i.a.createElement('img', {
                          src: _t,
                          alt: 'hello',
                          width: '100%',
                        }),
                      ),
                      i.a.createElement(
                        oe.a,
                        { variant: 'h6' },
                        'Finding Friends in Key States:',
                      ),
                      i.a.createElement(
                        oe.a,
                        { variant: 'body' },
                        'Facebook has a feature where you can use any search window to type \u201cMy friends who live in [insert name of swing state].\u201d The results list three names with the option to \u201cSee all.\u201d',
                      ),
                      i.a.createElement(
                        xe.a,
                        { my: 1, display: 'flex', justifyContent: 'center' },
                        i.a.createElement('img', {
                          src: Ft,
                          alt: 'hello',
                          width: '100%',
                        }),
                      ),
                    ),
                  ),
                ),
                i.a.createElement(
                  ae.a,
                  {
                    color: 'primary',
                    onClick: function () {
                      return n(!a)
                    },
                  },
                  'Learn More ',
                  a
                    ? i.a.createElement(wt.a, null)
                    : i.a.createElement(vt.a, null),
                ),
              ),
              i.a.createElement(
                ne.a,
                { item: !0, xs: 12, md: 4 },
                i.a.createElement('img', {
                  src: At,
                  width: '100%',
                  alt: 'phone',
                }),
              ),
            ),
          )
        },
        Pt = function () {
          var e = Object(o.useState)(!1),
            t = Object(R.a)(e, 2),
            a = t[0],
            n = t[1]
          return i.a.createElement(
            xe.a,
            { px: 20, py: 2 },
            i.a.createElement(
              ne.a,
              { container: !0, spacing: 2, alignItems: 'center' },
              i.a.createElement(
                ne.a,
                { item: !0, xs: 12, md: 4 },
                i.a.createElement('img', {
                  src: It,
                  width: '100%',
                  alt: 'reachable',
                }),
              ),
              i.a.createElement(
                ne.a,
                { item: !0, xs: 12, md: 8 },
                i.a.createElement(
                  Wt,
                  { expanded: a },
                  i.a.createElement(
                    Bt,
                    null,
                    i.a.createElement(
                      xe.a,
                      null,
                      i.a.createElement(
                        oe.a,
                        { mb: 3, variant: 'h4' },
                        'Who is actually reachable...',
                      ),
                      i.a.createElement(
                        oe.a,
                        { variant: 'body1' },
                        i.a.createElement(
                          'p',
                          null,
                          'A lot of people actually, both left and right of center.',
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Our polarized public discourse suggests that there is an irreconcilable divide between an ideologically fixed right and left. Yet,',
                          ' ',
                          i.a.createElement(
                            'strong',
                            null,
                            'many people are more ready to change their minds and hear different perspectives than our polarized political framework would imply.',
                          ),
                          ' ',
                          'These people, ideologically, fall both left and right of center, but with the',
                          ' ',
                          i.a.createElement(
                            'strong',
                            null,
                            'right kind of conversation',
                          ),
                          ' - one with a friend - all are potential Biden supporters.',
                        ),
                      ),
                    ),
                  ),
                  i.a.createElement(
                    Dt,
                    null,
                    i.a.createElement(
                      oe.a,
                      { variant: 'body1' },
                      i.a.createElement(
                        'p',
                        null,
                        'Our culture\u2019s polarized picture of America is a bit over dramatic. \u201cPolitical polls and years of knife-edge elections have convinced many that our country has become a 50:50 society, divided into two opposing political tribes and trapped in a spiral of conflict and division.\u201d A 2018 study called',
                        ' ',
                        i.a.createElement(
                          Ct.a,
                          { href: 'https://hiddentribes.us/' },
                          '\u201cHiddenTribes: A Study of America\u2019s Polarized Landscape\u201d',
                        ),
                        ' ',
                        'found that',
                        ' ',
                        i.a.createElement(
                          'strong',
                          null,
                          i.a.createElement(
                            'i',
                            null,
                            'this dichotomy was wrong.',
                          ),
                        ),
                        ' ',
                        'Instead, the majority of Americans (',
                        i.a.createElement('strong', null, 'around 67%'),
                        ') actually fall into a group that they refer to as the ',
                        i.a.createElement('strong', null, 'Exhausted Majority'),
                        ':',
                      ),
                      i.a.createElement(
                        'p',
                        null,
                        i.a.createElement(
                          'i',
                          null,
                          'In talking to everyday Americans, we have found a large segment of the population whose voices are rarely heard above the shouts of the partisan tribes. These are people who believe that Americans have more in common than that which divides them...',
                          i.a.createElement('br', null),
                          i.a.createElement('br', null),
                          'The Exhausted Majority contains distinct groups of people with varying degrees of political understanding and activism. But they share a sense of fatigue with our polarized national conversation, a willingness to be flexible in their political viewpoints... [a belief] that compromise is necessary in politics, as in other parts of life, and [a desire] to see the country come together and solve its problems.',
                        ),
                      ),
                    ),
                  ),
                ),
                i.a.createElement(
                  ae.a,
                  {
                    color: 'primary',
                    onClick: function () {
                      return n(!a)
                    },
                  },
                  'Learn More ',
                  a
                    ? i.a.createElement(wt.a, null)
                    : i.a.createElement(vt.a, null),
                ),
              ),
            ),
          )
        },
        Rt = function () {
          var e = Object(o.useState)(!1),
            t = Object(R.a)(e, 2),
            a = t[0],
            n = t[1]
          return i.a.createElement(
            xe.a,
            { px: 20, py: 2 },
            i.a.createElement(
              ne.a,
              { container: !0, spacing: 2, alignItems: 'center' },
              i.a.createElement(
                ne.a,
                { item: !0, xs: 12, md: 8 },
                i.a.createElement(
                  Wt,
                  { expanded: a },
                  i.a.createElement(
                    Bt,
                    null,
                    i.a.createElement(
                      xe.a,
                      null,
                      i.a.createElement(
                        oe.a,
                        { mb: 3, variant: 'h4' },
                        'Why this works\u2026',
                      ),
                      i.a.createElement(
                        oe.a,
                        { variant: 'body1' },
                        i.a.createElement(
                          'p',
                          null,
                          'Studies of what motivates behavior and changes minds show that \u201cfriends have a [notably] stronger behavioral effect on each other\u201d than strangers do. Yet a huge portion of traditional campaigning strategy relies on stranger-to-stranger communication (',
                          i.a.createElement(
                            Ct.a,
                            {
                              href:
                                'https://www.nature.com/articles/nature11421',
                            },
                            'Study',
                          ),
                          ').',
                        ),
                        i.a.createElement(
                          'p',
                          null,
                          'Friendships and pre-existing relationships are a campaigning resource that has not yet been thoroughly tapped. We believe that by combining the efficient outreach technique of phone calls with the personal connection of pre-existing relationships \u2013 in effect,',
                          ' ',
                          i.a.createElement(
                            'strong',
                            null,
                            'highly personalized phone-banking',
                          ),
                          '\u2013 we can achieve much higher campaign efficacy than ever before.',
                        ),
                      ),
                    ),
                  ),
                  i.a.createElement(
                    Dt,
                    null,
                    i.a.createElement(
                      oe.a,
                      { variant: 'body1', mr: 2 },
                      i.a.createElement(
                        'p',
                        null,
                        'People are much more likely to change their minds on important issues when they discuss them with people within their sphere of social and family connections. We are profoundly influenced in our actions and beliefs by people we see as part of our communities, and',
                        ' ',
                        i.a.createElement(
                          'strong',
                          null,
                          'the closer we perceive someone to be, the more their thinking and behavior affects us.',
                        ),
                        ' ',
                        '(See studies detailed in book',
                        ' ',
                        i.a.createElement(
                          Ct.a,
                          { href: 'http://www.connectedthebook.com/' },
                          '\u201cConnected\u201d',
                        ),
                        ') This holds true for political beliefs and activity (like voting). Conversations among friends, family, and neighborly acquaintances have a large impact on whether and how people vote. (',
                        i.a.createElement(
                          Ct.a,
                          {
                            href: 'https://www.jstor.org/stable/1515378?seq=1',
                          },
                          'People Who Talk Together Vote Together',
                        ),
                        '). A 2016 study called \u201c',
                        i.a.createElement(
                          Ct.a,
                          {
                            href:
                              'https://academic.oup.com/restud/article/84/1/143/2684500',
                          },
                          'Voting to Tell Others',
                        ),
                        ',\u201d found that \u201cvoter turnout would increase by 2 percent if the number of times people were asked if they voted doubled,\u201d simply because people did not want to have to lie \u2013 that is, to say they voted when they really didn\u2019t \u2013 when asked again.',
                      ),
                      i.a.createElement(
                        'p',
                        null,
                        'Moreover, there are measurable correlations between how frequently people talk about voting and how likely they are to actually get out to vote.',
                        ' ',
                        i.a.createElement(
                          Ct.a,
                          {
                            href:
                              'https://www.britishelectionstudy.com/bes-resources/are-we-influenced-by-how-our-friends-vote/#.X5EcK9NKiWY',
                          },
                          'Surveys',
                        ),
                        ' ',
                        'find that chronic non-voters are often unable to name anyone at all with whom they discuss politics, which \u201cremind[s] us that',
                        ' ',
                        i.a.createElement(
                          'strong',
                          null,
                          'political discussion is itself an indicator of political engagement.\u201d Just talking to people about voting makes them more likely to vote!',
                        ),
                        ' ',
                        'A Knight Foundation study, \u201c',
                        i.a.createElement(
                          Ct.a,
                          {
                            href:
                              'https://knightfoundation.org/reports/the-100-million-project/',
                          },
                          'The 100 Million Project',
                        ),
                        ',\u201d surveyed some \u201c12,000 chronic non-voters nationally and in 10 swing states, soliciting their views, attitudes and behaviors on a wide range of topics.\u201d It found that a conversation with a trusted friend about how to vote was the second most frequently listed factor that would motivate non-voters to vote (behind a neutral source of information about candidates and issues). Conversations with friends mobilize otherwise uncommitted voters.',
                      ),
                      i.a.createElement(
                        'p',
                        null,
                        'With public cynicism and distrust in institutions at an all-time high, people need to hear from people they already know and trust about the issues that matter, and about why their vote matters.',
                      ),
                    ),
                  ),
                ),
                i.a.createElement(
                  ae.a,
                  {
                    color: 'primary',
                    onClick: function () {
                      return n(!a)
                    },
                  },
                  'Learn More ',
                  a
                    ? i.a.createElement(wt.a, null)
                    : i.a.createElement(vt.a, null),
                ),
              ),
              i.a.createElement(
                ne.a,
                { item: !0, xs: 12, md: 4 },
                i.a.createElement('img', {
                  src: Nt,
                  width: '100%',
                  alt: 'voteimg',
                }),
              ),
            ),
          )
        },
        Mt = function () {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(Lt, null),
            i.a.createElement(Pt, null),
            i.a.createElement(Rt, null),
          )
        },
        zt = ''.concat(_, '/images/logo.svg'),
        Ht = function () {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              Re,
              { content: Ie },
              i.a.createElement('img', {
                src: zt,
                height: '100rem',
                alt: 'logo',
              }),
              i.a.createElement('br', null),
            ),
            i.a.createElement(bt, null),
            i.a.createElement(Mt, null),
          )
        }
      function qt(e, t) {
        e({ type: 'ALERT_MESSAGE', payload: t })
      }
      function Ut(e, t, a) {
        return Vt.apply(this, arguments)
      }
      function Vt() {
        return (Vt = Object(T.a)(
          j.a.mark(function e(t, a, n) {
            var r,
              o,
              i,
              l,
              s,
              c = arguments
            return j.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r =
                          c.length > 3 && void 0 !== c[3] ? c[3] : 'dashboard'),
                        (e.prev = 1),
                        (e.next = 4),
                        P.post('login/', {
                          email: n.email,
                          password: n.password,
                        })
                      )
                    case 4:
                      ;(o = e.sent),
                        (P.defaults.headers.Authorization =
                          'Token ' + o.data.access),
                        I(o.data),
                        t(
                          (i = { message: 'Logged in!', isError: !1 }).message,
                          { variant: 'success' },
                        ),
                        a({ type: 'ACTION_LOGIN_SUCCESS', user: M() }),
                        qt(a, i),
                        Object(O.c)(r),
                        (e.next = 18)
                      break
                    case 14:
                      ;(e.prev = 14),
                        (e.t0 = e.catch(1)),
                        401 === e.t0.response.status
                          ? (t(
                              (l = {
                                message:
                                  'Your email or password was incorrect. Please try again',
                                isError: !0,
                              }).message,
                              { variant: 'warning' },
                            ),
                            qt(a, l))
                          : (t(
                              (s = {
                                message:
                                  'Something went wrong. Please try again',
                                isError: !0,
                              }).message,
                              { variant: 'warning' },
                            ),
                            qt(a, s))
                    case 18:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [[1, 14]],
            )
          }),
        )).apply(this, arguments)
      }
      function Yt(e, t) {
        var a =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 'home',
          n = { message: 'Logged out', isError: !1 }
        qt(t, n),
          e(n.message, { variant: 'success' }),
          Object(O.c)(a),
          setTimeout(function () {
            A(), t({ type: 'ACTION_LOGOUT' })
          }, 1)
      }
      function Gt(e, t, a) {
        return Kt.apply(this, arguments)
      }
      function Kt() {
        return (Kt = Object(T.a)(
          j.a.mark(function e(t, a, n) {
            var r,
              o,
              i,
              l,
              s = arguments
            return j.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (r = s.length > 3 && void 0 !== s[3] ? s[3] : 'login'),
                        (e.prev = 1),
                        (e.next = 4),
                        P.post('signup/', {
                          email: n.email,
                          first_name: n.firstName,
                          last_name: n.lastName,
                          password1: n.password,
                          password2: n.passwordCon,
                        })
                      )
                    case 4:
                      return (
                        (o = e.sent),
                        qt(
                          a,
                          (i = {
                            message: 'Signed up! You can now log in',
                            isError: !1,
                          }),
                        ),
                        t(i.message, { variant: 'success' }),
                        Object(O.c)(r),
                        e.abrupt('return', { response: o.data, isError: !1 })
                      )
                    case 12:
                      return (
                        (e.prev = 12),
                        (e.t0 = e.catch(1)),
                        qt(
                          a,
                          (l = {
                            message:
                              'Whoops! Looks like there are some errors :(',
                            isError: !0,
                          }),
                        ),
                        t(l.message, { variant: 'warning' }),
                        e.abrupt('return', { response: e.t0, isError: !0 })
                      )
                    case 18:
                    case 'end':
                      return e.stop()
                  }
              },
              e,
              null,
              [[1, 12]],
            )
          }),
        )).apply(this, arguments)
      }
      function Jt(e, t) {
        return Xt.apply(this, arguments)
      }
      function Xt() {
        return (Xt = Object(T.a)(
          j.a.mark(function e(t, a) {
            var n,
              r,
              o,
              i = arguments
            return j.a.wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (n =
                          i.length > 2 && void 0 !== i[2] ? i[2] : 'account'),
                        (e.prev = 1),
                        (e.next = 4),
                        P.put('account/', {
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
                          data: {
                            email: a.email,
                            first_name: a.firstName,
                            last_name: a.lastName,
                          },
                        }),
                        qt(t, o),
                        Object(O.c)(n),
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
        )).apply(this, arguments)
      }
      function Zt() {
        var e = Object(Z.a)([
          '\n  padding: 2rem;\n  margin: 10rem 0;\n  border: 1px solid rgb(240, 104, 47);\n  min-height: 100%;\n  .actions {\n    margin-top: 1rem;\n  }\n',
        ])
        return (
          (Zt = function () {
            return e
          }),
          e
        )
      }
      var Qt = Q.a.div(Zt()),
        $t = function (e) {
          var t = e.onSubmit
          return i.a.createElement(
            re.a,
            { maxWidth: 'sm' },
            i.a.createElement(
              Qt,
              null,
              i.a.createElement(
                ee.a,
                {
                  initialValues: { email: '', password: '' },
                  validationSchema: te.a().shape({
                    email: te
                      .c()
                      .email('Must be a valid email')
                      .max(255)
                      .required('Email is required'),
                    password: te
                      .c()
                      .min(7)
                      .max(255)
                      .required('Password is required'),
                  }),
                  onSubmit: (function () {
                    var e = Object(T.a)(
                      j.a.mark(function e(a, n) {
                        var r, o, i, l, s
                        return j.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.setErrors),
                                  (o = n.setStatus),
                                  (i = n.setSubmitting),
                                  (e.next = 3),
                                  t(a)
                                )
                              case 3:
                                ;(l = e.sent),
                                  (s = l.error) &&
                                    (o({ success: !1 }), r(s), i(!1))
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
                    l = e.touched,
                    s = e.values
                  return i.a.createElement(
                    'form',
                    { onSubmit: r },
                    i.a.createElement(de, {
                      error: Boolean(l.email && t.email),
                      helperText: l.email && t.email,
                      label: 'Email',
                      name: 'email',
                      type: 'email',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    i.a.createElement(de, {
                      error: Boolean(l.password && t.password),
                      helperText: l.password && t.password,
                      label: 'Password',
                      name: 'password',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                      type: 'password',
                    }),
                    i.a.createElement(
                      xe.a,
                      { mt: 2 },
                      i.a.createElement(
                        ae.a,
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
                  )
                },
              ),
            ),
          )
        },
        ea = function () {
          var e = Object(c.b)(),
            t = Object(C.b)().enqueueSnackbar,
            a = (function () {
              var a = Object(T.a)(
                j.a.mark(function a(n, r) {
                  return j.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.prev = 0), (a.next = 3), Ut(t, e, n)
                          case 3:
                            r.preventDefault(), (a.next = 9)
                            break
                          case 6:
                            ;(a.prev = 6),
                              (a.t0 = a.catch(0)),
                              console.error(a.t0)
                          case 9:
                          case 'end':
                            return a.stop()
                        }
                    },
                    a,
                    null,
                    [[0, 6]],
                  )
                }),
              )
              return function (e, t) {
                return a.apply(this, arguments)
              }
            })()
          return i.a.createElement($t, { onSubmit: a })
        }
      function ta() {
        var e = Object(Z.a)([
          '\n  &.form {\n    padding: 2rem;\n    margin: 2rem 0;\n    border: 1px solid rgb(240, 104, 47);\n    min-height: 100%;\n    .actions {\n      margin-top: 1rem;\n    }\n  }\n',
        ])
        return (
          (ta = function () {
            return e
          }),
          e
        )
      }
      var aa = Q.a.div(ta()),
        na = function (e) {
          var t = e.onSubmit,
            a = (e.errorState, e.toggleModal),
            n = void 0 === a ? null : a
          return i.a.createElement(
            re.a,
            { maxWidth: 'sm' },
            i.a.createElement(
              aa,
              { className: !n && 'form' },
              i.a.createElement(
                ee.a,
                {
                  initialValues: { email: '', password: '' },
                  validationSchema: te.a().shape({
                    firstName: te.c().required('First Name is required'),
                    lastName: te.c().required('Last Name is required'),
                    email: te
                      .c()
                      .required('Email is required')
                      .email('Enter a valid email address'),
                    password: te.c().required('Password is required'),
                    passwordCon: te
                      .c()
                      .required('Password Confirmation is required')
                      .oneOf([te.b('password')], 'Passwords must match'),
                  }),
                  onSubmit: (function () {
                    var e = Object(T.a)(
                      j.a.mark(function e(a, n) {
                        var r, o, i, l, s
                        return j.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.setErrors),
                                  (o = n.setStatus),
                                  (i = n.setSubmitting),
                                  (e.next = 3),
                                  t(a)
                                )
                              case 3:
                                ;(l = e.sent),
                                  (s = l.error) &&
                                    (o({ success: !1 }), r(s), i(!1))
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
                    l = e.touched,
                    s = e.values
                  return i.a.createElement(
                    'form',
                    { onSubmit: r },
                    i.a.createElement(de, {
                      error: Boolean(l.firstName && t.firstName),
                      helperText: l.firstName && t.firstName,
                      label: 'First Name',
                      name: 'firstName',
                      type: 'firstName',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    i.a.createElement(de, {
                      error: Boolean(l.lastName && t.lastName),
                      helperText: l.lastName && t.lastName,
                      label: 'Last Name',
                      name: 'lastName',
                      type: 'lastName',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    i.a.createElement(de, {
                      error: Boolean(l.email && t.email),
                      helperText: l.email && t.email,
                      label: 'Email',
                      name: 'email',
                      type: 'email',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    i.a.createElement(de, {
                      error: Boolean(l.password && t.password),
                      helperText: l.password && t.password,
                      label: 'Password',
                      name: 'password',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                      type: 'password',
                    }),
                    i.a.createElement(de, {
                      error: Boolean(l.passwordCon && t.passwordCon),
                      helperText: l.passwordCon && t.passwordCon,
                      label: 'Password Confirmation',
                      name: 'passwordCon',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                      type: 'password',
                    }),
                    i.a.createElement(
                      xe.a,
                      { mt: 2 },
                      i.a.createElement(
                        ae.a,
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
        ra = function (e) {
          var t = e.toggleModal,
            a = void 0 === t ? null : t,
            n = Object(c.b)(),
            r = Object(C.b)().enqueueSnackbar,
            o = (function () {
              var e = Object(T.a)(
                j.a.mark(function e(t, o) {
                  var i, l, s
                  return j.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.prev = 0), (e.next = 3), Jt(n, t)
                          case 3:
                            if (((i = e.sent), (l = i.response), !i.isError)) {
                              e.next = 12
                              break
                            }
                            if (400 !== (s = l.response).status) {
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
          return i.a.createElement(na, { onSubmit: o, toggleModal: a })
        }
      function oa() {
        var e = Object(Z.a)(['\n  && {\n    margin: 16px;\n  }\n'])
        return (
          (oa = function () {
            return e
          }),
          e
        )
      }
      function ia() {
        var e = Object(Z.a)([
          '\n  && {\n    & > div {\n      padding: 0;\n      form {\n        padding: 0;\n        padding-top: 3rem;\n        padding-bottom: 3rem;\n        margin: 0;\n        border: none;\n      }\n    }\n  }\n',
        ])
        return (
          (ia = function () {
            return e
          }),
          e
        )
      }
      var la = Object(Q.a)($.a)(ia()),
        sa = Object(Q.a)(ae.a)(oa()),
        ca = function (e) {
          var t = e.user,
            a = Object(o.useState)(!1),
            n = Object(R.a)(a, 2),
            r = n[0],
            l = n[1]
          return i.a.createElement(
            ne.a,
            {
              container: !0,
              direction: 'column',
              alignItems: 'center',
              justify: 'center',
            },
            i.a.createElement(
              xe.a,
              { color: 'primary.main' },
              i.a.createElement(oe.a, { variant: 'h6' }, 'Profile'),
            ),
            i.a.createElement(
              xe.a,
              {
                mt: 3,
                mb: 6,
                py: 5,
                px: 6,
                border: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                borderColor: 'primary.main',
              },
              i.a.createElement(
                oe.a,
                { variant: 'h6' },
                i.a.createElement(
                  'p',
                  null,
                  null === t || void 0 === t ? void 0 : t.first_name,
                  ' ',
                  null === t || void 0 === t ? void 0 : t.last_name,
                  i.a.createElement('br', null),
                  null === t || void 0 === t ? void 0 : t.email,
                ),
              ),
              i.a.createElement(
                xe.a,
                {
                  borderRadius: '5px',
                  width: '50%',
                  bgcolor: 'secondary.main',
                  color: 'text.white',
                },
                i.a.createElement(
                  oe.a,
                  { variant: 'h6' },
                  i.a.createElement(
                    'strong',
                    null,
                    null === t || void 0 === t ? void 0 : t.signup_code,
                  ),
                ),
              ),
              i.a.createElement(
                sa,
                {
                  my: 4,
                  variant: 'outlined',
                  color: 'secondary',
                  onClick: function () {
                    return l(!0)
                  },
                },
                'Edit Account',
              ),
              i.a.createElement(
                la,
                {
                  onClose: function () {
                    return l(!1)
                  },
                  'aria-labelledby': 'simple-dialog-title',
                  open: r,
                },
                i.a.createElement(ra, { toggleModal: l }),
              ),
            ),
          )
        },
        ua = function () {
          var e = Object(c.c)(function (e) {
            return e.auth
          }).user
          return i.a.createElement(ca, { user: e })
        },
        ma = function (e) {
          var t = e.tab,
            a = e.setTab
          return i.a.createElement(
            xe.a,
            {
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
              py: 1,
              px: 8,
            },
            i.a.createElement(
              xe.a,
              { p: 1 },
              i.a.createElement(He, {
                active: 'demographics' === t,
                label: 'Political Identities',
                onClick: function () {
                  return a('demographics')
                },
              }),
              i.a.createElement(He, {
                active: 'common-views' === t,
                label: 'Views & Response Prep',
                onClick: function () {
                  return a('common-views')
                },
              }),
              i.a.createElement(He, {
                active: 'call-tactics' === t,
                label: 'Conversation Guide',
                onClick: function () {
                  return a('call-tactics')
                },
              }),
              i.a.createElement(He, {
                active: 'key-issues' === t,
                label: 'Key Issues',
                onClick: function () {
                  return a('key-issues')
                },
              }),
              i.a.createElement(He, {
                active: 'swing-states' === t,
                label: 'Swing States',
                onClick: function () {
                  return a('swing-states')
                },
              }),
            ),
          )
        },
        da = a(293),
        ha = a(139),
        pa = a.n(ha),
        fa = a(140),
        ga = a.n(fa),
        ba = function (e) {
          var t = e.slides,
            a = Object(o.useState)(0),
            n = Object(R.a)(a, 2),
            r = n[0],
            l = n[1],
            s = t.length
          return i.a.createElement(
            xe.a,
            { width: 800 },
            i.a.createElement('img', {
              src: t[r],
              alt: 'framework',
              width: '100%',
            }),
            i.a.createElement(da.a, {
              steps: s,
              position: 'static',
              variant: 'text',
              activeStep: r,
              nextButton: i.a.createElement(
                ae.a,
                {
                  size: 'small',
                  onClick: function () {
                    l(function (e) {
                      return e + 1
                    })
                  },
                  disabled: r === s - 1,
                },
                'Next',
                'rtl' === Te.direction
                  ? i.a.createElement(pa.a, null)
                  : i.a.createElement(ga.a, null),
              ),
              backButton: i.a.createElement(
                ae.a,
                {
                  size: 'small',
                  onClick: function () {
                    l(function (e) {
                      return e - 1
                    })
                  },
                  disabled: 0 === r,
                },
                'rtl' === Te.direction
                  ? i.a.createElement(ga.a, null)
                  : i.a.createElement(pa.a, null),
                'Back',
              ),
            }),
          )
        },
        Ea = a(294),
        va = a(282),
        ya = a(289)
      var wa = function (e) {
          var t = e.slides,
            a = Object(o.useState)(0),
            n = Object(R.a)(a, 2),
            r = n[0],
            l = n[1],
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
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              xe.a,
              { width: 800 },
              i.a.createElement('img', { src: t[r], alt: s[r], width: '100%' }),
            ),
            i.a.createElement(
              Ea.a,
              {
                alternativeLabel: !0,
                nonLinear: !0,
                activeStep: r,
                connector: !1,
              },
              s.map(function (e, t) {
                return i.a.createElement(
                  va.a,
                  { key: e },
                  i.a.createElement(
                    ya.a,
                    {
                      onClick:
                        ((a = t),
                        function () {
                          l(a)
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
        ka = ''.concat(_, '/images/framework1-1.png'),
        xa = ''.concat(_, '/images/framework1-2.png'),
        Oa = ''.concat(_, '/images/framework1-3.png'),
        Ca = ''.concat(_, '/images/framework1-4.png'),
        Sa = ''.concat(_, '/images/framework1-5.png'),
        ja = ''.concat(_, '/images/framework1-6.png'),
        Ta = ''.concat(_, '/images/framework1-7.png'),
        Aa = ''.concat(_, '/images/framework2-1.png'),
        Na = ''.concat(_, '/images/framework2-2.png'),
        Ia = ''.concat(_, '/images/framework2-3.png'),
        _a = ''.concat(_, '/images/framework2-4.png'),
        Fa = ''.concat(_, '/images/framework2-5.png'),
        Ba = ''.concat(_, '/images/framework2-6.png'),
        Da = ''.concat(_, '/images/framework2-7.png'),
        Wa = ''.concat(_, '/images/framework2-8.png'),
        La = ''.concat(_, '/images/framework2-9.png'),
        Pa = ''.concat(_, '/images/framework2-10.png'),
        Ra = ''.concat(_, '/images/framework2-11.png'),
        Ma = ''.concat(_, '/images/framework2-12.png'),
        za = ''.concat(_, '/images/swing-states-al.png'),
        Ha = ''.concat(_, '/images/swing-states-az.png'),
        qa = ''.concat(_, '/images/swing-states-co.png'),
        Ua = ''.concat(_, '/images/swing-states-fl.png'),
        Va = ''.concat(_, '/images/swing-states-ga.png'),
        Ya = ''.concat(_, '/images/swing-states-ia.png'),
        Ga = ''.concat(_, '/images/swing-states-ks.png'),
        Ka = ''.concat(_, '/images/swing-states-me.png'),
        Ja = ''.concat(_, '/images/swing-states-mi.png'),
        Xa = ''.concat(_, '/images/swing-states-mn.png'),
        Za = ''.concat(_, '/images/swing-states-mt.png'),
        Qa = ''.concat(_, '/images/swing-states-nc.png'),
        $a = ''.concat(_, '/images/swing-states-nh.png'),
        en = ''.concat(_, '/images/swing-states-nv.png'),
        tn = ''.concat(_, '/images/swing-states-oh.png'),
        an = ''.concat(_, '/images/swing-states-pa.png'),
        nn = ''.concat(_, '/images/swing-states-tx.png'),
        rn = ''.concat(_, '/images/swing-states-wi.png'),
        on = [ka, xa, Oa, Ca, Sa, ja, Ta],
        ln = [Aa, Na, Ia, _a, Fa, Ba, Da, Wa, La, Pa, Ra, Ma],
        sn = [
          za,
          Ha,
          qa,
          Ua,
          Va,
          Ya,
          Ga,
          Ka,
          Ja,
          Xa,
          Za,
          Qa,
          $a,
          en,
          tn,
          an,
          nn,
          rn,
        ],
        cn = ''.concat(_, '/images/frameworks-intro1.png'),
        un = ''.concat(_, '/images/frameworks-intro2.png'),
        mn = function () {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(
              xe.a,
              { textAlign: 'center', mb: 2 },
              i.a.createElement(
                oe.a,
                { variant: 'h6' },
                i.a.createElement(
                  'strong',
                  null,
                  'To talk to people about challenging topics, we need to understand where they might fall on the political spectrum. The Political Identities resource is here to help us think with more nuance about beliefs and motivations.',
                ),
              ),
            ),
            i.a.createElement(
              oe.a,
              { variant: 'body1' },
              i.a.createElement(
                'p',
                null,
                'People often present their political views \u2013 even to themselves \u2013 as factual statements of how things are and how things should be. But our views are almost always the product of our feelings and our value systems (yes, even yours!). We often use facts and data to help us justify what we feel, more than to inform what we should feel.',
              ),
              i.a.createElement(
                'p',
                null,
                'Despite intense political differences, everyone\u2019s beliefs and values overlap to some degree. If we can assess where our friend most likely falls on the political spectrum, we can gain insight into the values most central to their world views and be better prepared for having productive conversations. We can tap into our innate understanding of one others\u2019 values and beliefs, if we try.',
              ),
            ),
            i.a.createElement(
              xe.a,
              {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              },
              i.a.createElement(
                xe.a,
                {
                  width: '80%',
                  display: 'flex',
                  mb: 2,
                  justifyContent: 'center',
                  alignItems: 'center',
                },
                i.a.createElement('img', {
                  src: cn,
                  alt: 'frameworks-intro1',
                  width: '60%',
                }),
                i.a.createElement('img', {
                  src: un,
                  alt: 'frameworks-intro2',
                  width: '60%',
                }),
              ),
              i.a.createElement(ba, { slides: on }),
              i.a.createElement('br', null),
              i.a.createElement(ba, { slides: ln }),
            ),
          )
        },
        dn = function () {
          return i.a.createElement(
            xe.a,
            { textAlign: 'center', mb: 2 },
            i.a.createElement(
              oe.a,
              { variant: 'body1' },
              i.a.createElement(
                'p',
                null,
                'Once we assess where our friends most likely fall on the political spectrum, we can prepare for some of the views that may come up in our conversation with them.',
                i.a.createElement(
                  'b',
                  null,
                  'There are an infinite number of political views that could come up in a conversation about politics, and we cannot be prepared to address all of them.',
                ),
              ),
              i.a.createElement(
                'p',
                null,
                'Getting into the weeds on a particular issue may sometimes be necessary, but it\u2019s helpful to frame your broader intention in the conversation with an overall goal of',
                ' ',
                i.a.createElement(
                  'b',
                  null,
                  'saying what your friend needs to hear to be motivated to vote for Biden',
                ),
                ' ',
                '- and saying it in a way that they can hear. Though people may claim to be concerned about an issue, what they need to hear may actually be much \u201cbigger picture\u201d than that.',
              ),
              i.a.createElement(
                'p',
                null,
                'Once you\u2019ve assessed where your friend likely falls on the political spectrum, give these common views and responses a look. These responses are not meant to provide exact language for a response; instead, they are meant to provide you with perspective on what a thoughtful response might look like/include.',
              ),
            ),
          )
        },
        hn = function () {
          return i.a.createElement(
            oe.a,
            { variant: 'body1' },
            i.a.createElement(
              'p',
              null,
              'Now that we have a sense of the different types of political identities and value systems that people hold, let\u2019s get into the weeds: the conversations',
            ),
            i.a.createElement(
              'p',
              null,
              i.a.createElement('strong', null, 'The real work happens here.'),
            ),
            i.a.createElement(
              'p',
              null,
              'This is a resource of tips and tricks for navigating phone calls in a healthy way. What might we hear on calls, and how might we respond thoughtfully? How do we challenge others from a place of care, rather than from a place of judgment? The point of these tips is to help us manage our emotions and communication styles so that we can have productive, respectful conversations. While we can\u2019t predict what every (or, for that matter, any!) conversation will look like, we can build a shared toolkit that can be adapted to different contexts.',
            ),
            i.a.createElement(
              'p',
              null,
              i.a.createElement(
                'strong',
                null,
                'The work is messy, and we\u2019re capable of doing it.',
              ),
            ),
          )
        },
        pn = function () {
          return i.a.createElement(
            xe.a,
            { textAlign: 'center' },
            i.a.createElement(
              oe.a,
              { variant: 'body1' },
              i.a.createElement(
                'p',
                null,
                'This resource is here to provide a breakdown of the main issues that are central to this election. We provide an overview, as well as common misconceptions that might come up when folks who identify as conservative engage with the issue.',
              ),
            ),
          )
        },
        fn = function () {
          return i.a.createElement(
            xe.a,
            {
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            },
            i.a.createElement(
              oe.a,
              { variant: 'h6' },
              i.a.createElement(
                xe.a,
                { textAlign: 'center' },
                i.a.createElement(
                  'b',
                  null,
                  'This resource is here to help you learn more about the critical places that will drive important outcomes on November 3rd.',
                ),
              ),
            ),
            i.a.createElement(
              oe.a,
              { variant: 'body1' },
              i.a.createElement(
                'p',
                null,
                'These sites collectively (and perhaps even individually) have all the information you, or your friend/callee could possibly need about voting on a state by state basis from important dates to registration services to down ballot election information (including links to candidates websites) to first-time-voter checklists, tips, and advice, these websites have it all. Send your friend these links to help them get/stay organized after your call!',
              ),
            ),
            i.a.createElement(
              xe.a,
              { mb: 2, border: 1, borderColor: 'primary.main' },
              i.a.createElement(
                oe.a,
                { variant: 'body1' },
                i.a.createElement(
                  'ul',
                  null,
                  i.a.createElement(
                    'li',
                    null,
                    i.a.createElement(
                      Ct.a,
                      { href: 'https://www.vote411.org/ballot' },
                      'Vote411',
                    ),
                    ': Everything. Important dates, down ballot race information and links to candidate websites, registration links and check sites, polling place information, etc.',
                  ),
                  i.a.createElement(
                    'li',
                    null,
                    i.a.createElement(
                      Ct.a,
                      {
                        href:
                          'https://www.headcount.org/verify-voter-registration/?source=HChomepage',
                      },
                      'Headcount',
                    ),
                    ': Also everything.',
                  ),
                  i.a.createElement(
                    'li',
                    null,
                    i.a.createElement(
                      Ct.a,
                      { href: 'https://www.voteamerica.com/' },
                      'VoteAmerica',
                    ),
                    ': Easy registration, find out where to vote, track your ballot, check your registration status, register to vote, vote by mail information, request your absentee ballot, receive election reminders, contact your election office, etc.',
                  ),
                  i.a.createElement(
                    'li',
                    null,
                    i.a.createElement(
                      Ct.a,
                      {
                        href:
                          'https://www.nytimes.com/interactive/2020/09/24/us/politics/how-to-vote-register.html',
                      },
                      'NYTimes Interactive How-to-vote/register',
                    ),
                    ': Key dates, registration info, detailed/helpful voting information. Requires NYT login.',
                  ),
                  i.a.createElement(
                    'li',
                    null,
                    i.a.createElement(
                      Ct.a,
                      { href: 'https://www.usa.gov/voter-registration' },
                      'usa.gov/voter-registration',
                    ),
                    ': Voter registration checks and info.',
                  ),
                ),
              ),
            ),
            i.a.createElement(wa, { slides: sn }),
          )
        },
        gn = function (e) {
          e.children
          var t = Object(o.useState)('demographics'),
            a = Object(R.a)(t, 2),
            n = a[0],
            r = a[1]
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(Re, { content: _e }),
            i.a.createElement(ma, { tab: n, setTab: r }),
            i.a.createElement(
              xe.a,
              { px: 6 },
              'demographics' === n && i.a.createElement(mn, null),
              'common-views' === n && i.a.createElement(dn, null),
              'call-tactics' === n && i.a.createElement(hn, null),
              'key-issues' === n && i.a.createElement(pn, null),
              'swing-states' === n && i.a.createElement(fn, null),
            ),
          )
        },
        bn = function () {
          return i.a.createElement(
            xe.a,
            null,
            i.a.createElement(oe.a, { variant: 'h1' }, 'Sharing the Pledge'),
          )
        }
      function En() {
        var e = Object(Z.a)([
          '\n  padding: 2rem;\n  margin: 2rem 0;\n  border: 1px solid rgb(240, 104, 47);\n  min-height: 100%;\n  .actions {\n    margin-top: 1rem;\n  }\n',
        ])
        return (
          (En = function () {
            return e
          }),
          e
        )
      }
      var vn = Q.a.div(En()),
        yn = function (e) {
          var t = e.onSubmit
          e.errorState
          return i.a.createElement(
            re.a,
            { maxWidth: 'sm' },
            i.a.createElement(
              vn,
              null,
              i.a.createElement(
                ee.a,
                {
                  initialValues: { email: '', password: '' },
                  validationSchema: te.a().shape({
                    firstName: te.c().required('First Name is required'),
                    lastName: te.c().required('Last Name is required'),
                    email: te
                      .c()
                      .required('Email is required')
                      .email('Enter a valid email address'),
                    password: te.c().required('Password is required'),
                    passwordCon: te
                      .c()
                      .required('Password Confirmation is required')
                      .oneOf([te.b('password')], 'Passwords must match'),
                  }),
                  onSubmit: (function () {
                    var e = Object(T.a)(
                      j.a.mark(function e(a, n) {
                        var r, o, i, l, s
                        return j.a.wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (r = n.setErrors),
                                  (o = n.setStatus),
                                  (i = n.setSubmitting),
                                  (e.next = 3),
                                  t(a)
                                )
                              case 3:
                                ;(l = e.sent),
                                  (s = l.error) &&
                                    (o({ success: !1 }), r(s), i(!1))
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
                    l = e.touched,
                    s = e.values
                  return i.a.createElement(
                    'form',
                    { onSubmit: r },
                    i.a.createElement(de, {
                      error: Boolean(l.firstName && t.firstName),
                      helperText: l.firstName && t.firstName,
                      label: 'First Name',
                      name: 'firstName',
                      type: 'firstName',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    i.a.createElement(de, {
                      error: Boolean(l.lastName && t.lastName),
                      helperText: l.lastName && t.lastName,
                      label: 'Last Name',
                      name: 'lastName',
                      type: 'lastName',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    i.a.createElement(de, {
                      error: Boolean(l.email && t.email),
                      helperText: l.email && t.email,
                      label: 'Email',
                      name: 'email',
                      type: 'email',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                    }),
                    i.a.createElement(de, {
                      error: Boolean(l.password && t.password),
                      helperText: l.password && t.password,
                      label: 'Password',
                      name: 'password',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                      type: 'password',
                    }),
                    i.a.createElement(de, {
                      error: Boolean(l.passwordCon && t.passwordCon),
                      helperText: l.passwordCon && t.passwordCon,
                      label: 'Password Confirmation',
                      name: 'passwordCon',
                      handleBlur: a,
                      handleChange: n,
                      values: s,
                      size: 'large',
                      type: 'password',
                    }),
                    i.a.createElement(
                      xe.a,
                      { mt: 2 },
                      i.a.createElement(
                        ae.a,
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
        wn = function () {
          var e = Object(C.b)().enqueueSnackbar,
            t = Object(c.b)(),
            a = (function () {
              var a = Object(T.a)(
                j.a.mark(function a(n, r) {
                  var o, i, l
                  return j.a.wrap(
                    function (a) {
                      for (;;)
                        switch ((a.prev = a.next)) {
                          case 0:
                            return (a.prev = 0), (a.next = 3), Gt(e, t, n)
                          case 3:
                            if (((o = a.sent), (i = o.response), !o.isError)) {
                              a.next = 10
                              break
                            }
                            if (400 !== (l = i.response).status) {
                              a.next = 10
                              break
                            }
                            return a.abrupt('return', { error: l.data })
                          case 10:
                            r.preventDefault(), (a.next = 16)
                            break
                          case 13:
                            ;(a.prev = 13),
                              (a.t0 = a.catch(0)),
                              console.error(a.t0)
                          case 16:
                          case 'end':
                            return a.stop()
                        }
                    },
                    a,
                    null,
                    [[0, 13]],
                  )
                }),
              )
              return function (e, t) {
                return a.apply(this, arguments)
              }
            })()
          return i.a.createElement(yn, { onSubmit: a })
        },
        kn = function () {
          return i.a.createElement(
            xe.a,
            { width: 0.8, my: 1 },
            i.a.createElement(
              Ot.a,
              { variant: 'outlined', square: !0 },
              i.a.createElement(
                kt.a,
                { expandIcon: i.a.createElement(vt.a, null) },
                i.a.createElement(
                  xe.a,
                  {
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                  i.a.createElement(
                    oe.a,
                    { variant: 'subtitle1' },
                    'Take the Pledge.',
                  ),
                  i.a.createElement(
                    oe.a,
                    { variant: 'h6', color: 'primary' },
                    'Step 1',
                  ),
                ),
              ),
              i.a.createElement(
                xt.a,
                null,
                i.a.createElement(
                  oe.a,
                  { variant: 'body' },
                  "'Sign up, take the Pledge and track your outreach in your dashboard!'",
                ),
              ),
            ),
          )
        },
        xn = function () {
          return i.a.createElement(
            xe.a,
            { width: 0.8, my: 1 },
            i.a.createElement(
              Ot.a,
              { variant: 'outlined', square: !0 },
              i.a.createElement(
                kt.a,
                { expandIcon: i.a.createElement(vt.a, null) },
                i.a.createElement(
                  xe.a,
                  {
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                  i.a.createElement(
                    oe.a,
                    { variant: 'subtitle1' },
                    'Choose who you want to call.',
                  ),
                  i.a.createElement(
                    oe.a,
                    { variant: 'h6', color: 'primary' },
                    'Step 1',
                  ),
                ),
              ),
              i.a.createElement(
                xt.a,
                null,
                i.a.createElement(
                  oe.a,
                  { variant: 'body' },
                  "Think about friends or connections you know that you think might not be voting or voting for conservative candidates. People in swing states are a higher priority, but it's best to start with people who most comfortable having potentially tough, political conversations with, and then work your way out.",
                ),
              ),
            ),
          )
        },
        On = function () {
          return i.a.createElement(
            xe.a,
            { width: 0.8, my: 1 },
            i.a.createElement(
              Ot.a,
              { variant: 'outlined', square: !0 },
              i.a.createElement(
                kt.a,
                { expandIcon: i.a.createElement(vt.a, null) },
                i.a.createElement(
                  xe.a,
                  {
                    width: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                  i.a.createElement(
                    oe.a,
                    { variant: 'subtitle1' },
                    'Prep for your calls.',
                  ),
                  i.a.createElement(
                    oe.a,
                    { variant: 'h6', color: 'primary' },
                    'Step 3',
                  ),
                ),
              ),
              i.a.createElement(
                xt.a,
                null,
                i.a.createElement(
                  oe.a,
                  { variant: 'body' },
                  i.a.createElement(
                    'ul',
                    null,
                    i.a.createElement(
                      'li',
                      null,
                      'A: Use our Demographic Breakdown Resource [hyper link] to assess where you think your callee most likely falls on the political spectrum and to prepare for what you may encounter in the conversation as a result.',
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        Cn = function () {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(kn, null),
            i.a.createElement(xn, null),
            i.a.createElement(On, null),
          )
        },
        Sn = function () {
          return i.a.createElement(
            ne.a,
            {
              container: !0,
              direction: 'column',
              alignItems: 'center',
              justify: 'center',
              fullWidth: !0,
            },
            i.a.createElement(oe.a, { variant: 'h5' }, 'Step by Step'),
            i.a.createElement(Cn, null),
          )
        }
      function jn() {
        var e = Object(Z.a)(['\n  && {\n    box-shadow: none;\n  }\n'])
        return (
          (jn = function () {
            return e
          }),
          e
        )
      }
      function Tn() {
        var e = Object(Z.a)([
          '\n  && {\n    box-shadow: none;\n    padding: 0;\n  }\n',
        ])
        return (
          (Tn = function () {
            return e
          }),
          e
        )
      }
      function An() {
        var e = Object(Z.a)([
          '\n  && {\n    box-shadow: none;\n    padding: 0;\n  }\n',
        ])
        return (
          (An = function () {
            return e
          }),
          e
        )
      }
      var Nn = Object(Q.a)(kt.a)(An()),
        In = Object(Q.a)(xt.a)(Tn()),
        _n = Object(Q.a)(Ot.a)(jn()),
        Fn = function () {
          var e = Object(o.useState)(!1),
            t = Object(R.a)(e, 2),
            a = t[0],
            n = t[1]
          return i.a.createElement(
            xe.a,
            { my: 1 },
            i.a.createElement(
              _n,
              { expanded: a },
              i.a.createElement(
                Nn,
                null,
                i.a.createElement(
                  xe.a,
                  null,
                  i.a.createElement(
                    oe.a,
                    { mb: 3, variant: 'h6' },
                    i.a.createElement(
                      'b',
                      null,
                      '(1) THE STAKES ARE TOO HIGH TO IGNORE.',
                    ),
                  ),
                  i.a.createElement(
                    oe.a,
                    { variant: 'body1' },
                    i.a.createElement(
                      'p',
                      null,
                      'The stakes of this election are existential, especially for young people who hope for a future. We face a global environmental reality of consistent climate catastrophe, population increase and',
                      ' ',
                      i.a.createElement(
                        Ct.a,
                        {
                          href:
                            'https://www.nytimes.com/interactive/2020/07/23/magazine/climate-migration.html',
                        },
                        'widespread population displacement',
                      ),
                      ', an',
                      ' ',
                      i.a.createElement(
                        Ct.a,
                        {
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
              i.a.createElement(
                In,
                null,
                i.a.createElement(
                  oe.a,
                  { variant: 'body1' },
                  i.a.createElement(
                    'p',
                    null,
                    'A week into Donald Trump\u2019s presidency, the Doomsday Clock was pushed to two-and-a-half minutes to midnight \u2013 the closest since 1953. As a result of \u201cthe failure of the international community to deal with nuclear weapons and climate change,\u201d and \u201clargely because of statements [made by] the president\u201d the Bulletin of Atomic Scientists has set the clock to 100 seconds to midnight\u2014',
                    i.a.createElement(
                      Ct.a,
                      {
                        href:
                          'https://www.independent.co.uk/news/world/americas/us-politics/noam-chomsky-donald-trump-doomsday-clock-midnight-close-nuclear-war-north-korea-a8014626.html',
                      },
                      'the closest it\u2019s ever been.',
                    ),
                    ' ',
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    i.a.createElement(
                      Ct.a,
                      { href: 'https://lincolnproject.us/' },
                      'The Lincoln Project',
                    ),
                    ', a group of high-powered and politically engaged conservatives who have pledged to fight to protect our democracy against Trump and his band of corrupt Republicans, states the constitutional stakes quite well:',
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    i.a.createElement(
                      'i',
                      null,
                      'This fall\u2019s elections will be about much more than just who controls one house of Congress or the White House. This November, the American people will decide the path for America\u2019s future. All of the prosperity and freedom we\u2019ve come to take for granted depends on our public servants serving the Constitution first, last and always. Today, one party [The GOP] has abdicated that responsibility and instead pledged their loyalty to one person.',
                    ),
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    i.a.createElement(
                      'i',
                      null,
                      'Our Mission: Defeat President Trump and Trumpism at the ballot box.',
                    ),
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    i.a.createElement(
                      'i',
                      null,
                      'We do not undertake this task lightly nor from ideological preference. Our many policy differences with national Democrats remain. However, the priority for all patriotic Americans must be a shared fidelity to the Constitution and a commitment to defeat those candidates who have abandoned their constitutional oaths, regardless of party. Electing Democrats who support the Constitution over Republicans who do not is a worthy effort.',
                    ),
                  ),
                ),
              ),
            ),
            i.a.createElement(
              ae.a,
              {
                color: 'primary',
                onClick: function () {
                  return n(!a)
                },
              },
              'Learn More ',
              a ? i.a.createElement(wt.a, null) : i.a.createElement(vt.a, null),
            ),
          )
        },
        Bn = function () {
          var e = Object(o.useState)(!1),
            t = Object(R.a)(e, 2),
            a = t[0],
            n = t[1]
          return i.a.createElement(
            xe.a,
            { mt: 1 },
            i.a.createElement(
              _n,
              { expanded: a },
              i.a.createElement(
                Nn,
                null,
                i.a.createElement(
                  xe.a,
                  null,
                  i.a.createElement(
                    oe.a,
                    { mb: 3, variant: 'h6' },
                    i.a.createElement(
                      'b',
                      null,
                      '(2) EVERY VOTE (AND EVERY CONVERSATION) MATTERS.',
                    ),
                  ),
                  i.a.createElement(
                    oe.a,
                    { variant: 'body1' },
                    i.a.createElement(
                      'p',
                      null,
                      i.a.createElement('b', null, 'Voting:'),
                      " For many people, the belief that their vote doesn't matter is the main factor behind their decision not to vote. President Trump has stated that he will contest this election, and that he does not intend to pass power peacefully. This means that ",
                      i.a.createElement(
                        'b',
                        null,
                        'we need a blow-out -- every vote matters.',
                      ),
                    ),
                  ),
                ),
              ),
              i.a.createElement(
                In,
                null,
                i.a.createElement(
                  oe.a,
                  { variant: 'body1' },
                  i.a.createElement(
                    'p',
                    null,
                    'Many Americans feel that their contributions to the democratic process don\u2019t matter. The \u201c',
                    i.a.createElement(
                      Ct.a,
                      {
                        href:
                          'https://knightfoundation.org/reports/the-100-million-project/',
                      },
                      '100 Million Project',
                    ),
                    ',\u201d a study conducted by the Knight Foundation, found that for some 20% of chronic non-voters and young people, the primary reasons for not voting were that their \u201cvote doesn\u2019t matter\u201d and that \u201cthe system is [too] corrupt\u201d to be changed. Moreover, the \u201c',
                    i.a.createElement(
                      Ct.a,
                      { href: 'https://hiddentribes.us/' },
                      'Hidden Tribes',
                    ),
                    '\u201d study indicates that many liberals of lower socioeconomic status--many of whom are registered to vote-do not end up voting because they have no faith that the system will operate fairly or in their interest.',
                    ' ',
                    i.a.createElement(
                      'b',
                      null,
                      "For many people, the belief that their vote doesn't matter is the key factor underlying their decision not to engage in the election.",
                    ),
                    ' ',
                    'If people can be helped to understand that their involvement matters, they will be more likely to participate.',
                    ' ',
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    "Trump\u2019s attacks on our democratic institutions include attacking the legitimacy of the electoral process itself. Trump has stated that he will contest this election, and that he does not intend to pass power peacefully. This means that the closer the vote, the more chaotic and disruptive our society will become. Trump has already nominated a conservative loyalist to the Supreme Court to replace Justice Ruth Bader Ginsburg. We need to win in key swing states, but, more importantly, we need a landslide to ensure that this election is decided by the people and not by President Trump's new ultraconservative Supreme Court. On September 24th,",
                    i.a.createElement(
                      Ct.a,
                      {
                        href:
                          'https://www.reviewjournal.com/news/politics-and-government/eric-trump-says-his-father-will-concede-if-joe-biden-wins-big-2129305',
                      },
                      'Eric Trump told supporters',
                    ),
                    ' ',
                    'at a Las Vegas campaign stop that his father \u201cof course [would] concede\u201d the election \u201cif he got blown out of the water\u201d by Joe Biden.',
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    'So,',
                    ' ',
                    i.a.createElement(
                      'b',
                      null,
                      i.a.createElement('i', null, 'we need a blow-out.'),
                    ),
                    ' ',
                    'Every vote counts.',
                  ),
                ),
              ),
            ),
            i.a.createElement(
              ae.a,
              {
                color: 'primary',
                onClick: function () {
                  return n(!a)
                },
              },
              'Learn More ',
              a ? i.a.createElement(wt.a, null) : i.a.createElement(vt.a, null),
            ),
          )
        },
        Dn = function () {
          var e = Object(o.useState)(!1),
            t = Object(R.a)(e, 2),
            a = t[0],
            n = t[1]
          return i.a.createElement(
            xe.a,
            { mb: 1 },
            i.a.createElement(
              _n,
              { expanded: a },
              i.a.createElement(
                Nn,
                null,
                i.a.createElement(
                  xe.a,
                  null,
                  i.a.createElement(
                    oe.a,
                    { variant: 'body1' },
                    i.a.createElement(
                      'p',
                      null,
                      i.a.createElement(
                        'b',
                        null,
                        'Beyond Voting (Conversations):',
                      ),
                      ' Traditional get-out-the-vote methods, like phone-banking and text-banking, pairs strangers with strangers, but people are more open to new ideas when they talk to friends. The more people talk about voting, the more they know about voting, and the more likely they are to vote. Changing one person\u2019s mind to vote for Biden, or away from voting for Trump, can have a ripple effect on the whole community. Every conversation matters.',
                    ),
                  ),
                ),
              ),
              i.a.createElement(
                In,
                null,
                i.a.createElement(
                  oe.a,
                  { variant: 'body1' },
                  i.a.createElement(
                    'p',
                    null,
                    'When we participate in the democratic process, for example by taking The Pledge, our potential for impact grows exponentially. The authors of book \u201c',
                    i.a.createElement(
                      Ct.a,
                      { href: 'http://www.connectedthebook.com/' },
                      'Connected',
                    ),
                    '\u201d discuss a series of consistent, dependable phenomena, so pervasive in social networks that they\u2019ve deemed them rules (\u201cRules of Life in the Network\u201d):',
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    i.a.createElement(
                      'i',
                      null,
                      'People typically have many direct ties to a wide variety of people, including parents and children, brothers and sisters, spouses (and nice ex-spouses), bosses and coworkers, and neighbors and friends. And each and every one of these ties offers opportunities to influence and be influenced.',
                    ),
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    'The fourth of these rules is that \u201cOur Friends\u2019 Friends\u2019 Friends Affect Us\u201d',
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    i.a.createElement(
                      'i',
                      null,
                      'Our friends and family can influence us to do things, like gain weight or show up at the polls. But their friends and family can influence us too. This is an illustration of hyperdyadic spread, or the tendency of effects to spread from person to person to person, beyond an individual\u2019s direct social ties.',
                    ),
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    'Changing one person\u2019s mind away from voting for Trump, who lives in a community of Trump supporters in a swing state, can have a massive rippling effect on the whole community\u2014and imagine the impact it would have if they agreed to take the pledge! Every vote matters. Every conversation matters.',
                  ),
                ),
              ),
            ),
            i.a.createElement(
              ae.a,
              {
                color: 'primary',
                onClick: function () {
                  return n(!a)
                },
              },
              'Learn More ',
              a ? i.a.createElement(wt.a, null) : i.a.createElement(vt.a, null),
            ),
          )
        },
        Wn = function () {
          var e = Object(o.useState)(!1),
            t = Object(R.a)(e, 2),
            a = t[0],
            n = t[1]
          return i.a.createElement(
            xe.a,
            { my: 1 },
            i.a.createElement(
              _n,
              { expanded: a },
              i.a.createElement(
                Nn,
                null,
                i.a.createElement(
                  xe.a,
                  null,
                  i.a.createElement(
                    oe.a,
                    { mb: 3, variant: 'h6' },
                    i.a.createElement(
                      'b',
                      null,
                      '(3) THE COUNTRY AND THE WORLD ARE WORTH FIGHTING FOR.',
                    ),
                  ),
                  i.a.createElement(
                    oe.a,
                    { variant: 'body1' },
                    i.a.createElement(
                      'p',
                      null,
                      'For many, 2020 has been incredibly bleak. It may feel like our society is splintering, and that our democracy is failing. It might feel tempting to disengage from it all, because sitting in the thick of it is painful and scary.',
                    ),
                    i.a.createElement(
                      'p',
                      null,
                      'But we need each other to take action now. The people we put into power shape our lives. We have the opportunity to take action today that will affect all of our futures. We invite you to join us - our voices matter, our votes matter, and together, we can fight for the future we deserve.',
                    ),
                  ),
                ),
              ),
              i.a.createElement(
                In,
                null,
                i.a.createElement(
                  oe.a,
                  { variant: 'body1' },
                  i.a.createElement(
                    'p',
                    null,
                    'Our country is in a tough place right now. That comes from faulty, and in many cases, monstrously immoral engineering of some aspects of our governmental system over a long period of time. For many, it seems the American experiment has failed. Some of these people may not be compelled to fight for our country based solely on the idea that the Constitution lets our standards and rules of governance develop and change over time. But they may be compelled to fight if they understand that what happens in America right now--the result of this election--not only affects the lives of the nation\u2019s already massively disenfranchised, but also affects the ',
                    i.a.createElement('b', null, 'world as a whole'),
                    '. If American democracy crumbles, and, God forbid, falls into the hands of an insane, racist, narcissistic dictator, every human being, every animal, everyone and everything the world over will pay for it.',
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    'We know things are bleak and that it can seem like fighting for the world means fighting to keep the powerful, powerful, and the oppressed, oppressed. We know humans have pesky, stubborn, hard-to-break patterns of selfishness and self-sabotage. And we think everyone is feeling the struggle of those realities in their own way right now.',
                  ),
                  i.a.createElement(
                    'p',
                    null,
                    'But this world is also beautiful\u2026 and',
                    ' ',
                    i.a.createElement(
                      'b',
                      null,
                      i.a.createElement('i', null, 'we'),
                    ),
                    ' ',
                    'are also beautiful. And it, and us, are worth fighting for! Honestly, what else are we even doing here? Hiding? Festering in denial? Those things slowly eat your soul. Straight up, they want to eat you\u2026 and they will eat you. And when that happens we become the problem. We gotta stand up! Your soul is worth fighting for!',
                    i.a.createElement(
                      'b',
                      null,
                      i.a.createElement(
                        'i',
                        null,
                        'We are worth fighting for!',
                      ),
                    ),
                  ),
                ),
              ),
            ),
            i.a.createElement(
              ae.a,
              {
                color: 'primary',
                onClick: function () {
                  return n(!a)
                },
              },
              'Learn More ',
              a ? i.a.createElement(wt.a, null) : i.a.createElement(vt.a, null),
            ),
          )
        },
        Ln = function () {
          return i.a.createElement(
            ne.a,
            {
              container: !0,
              direction: 'column',
              alignItems: 'center',
              justify: 'center',
            },
            i.a.createElement(
              xe.a,
              {
                width: '60%',
                border: 1,
                mt: 2,
                p: 2,
                borderColor: 'primary.main',
                textAlign: 'center',
              },
              i.a.createElement(
                xe.a,
                { color: 'primary.main', textAlign: 'center' },
                i.a.createElement(
                  oe.a,
                  { variant: 'h6' },
                  i.a.createElement('b', null, 'OUR MISSION.'),
                ),
              ),
              i.a.createElement(
                oe.a,
                { variant: 'body1' },
                'Our mission is to harness the power of personal social networks to encourage our friends and family to vote for Joe Biden \u2013 to preserve the integrity of our democracy and the future of our planet.',
              ),
              i.a.createElement(
                xe.a,
                { color: 'primary.main', textAlign: 'center' },
                i.a.createElement(
                  oe.a,
                  { variant: 'h6' },
                  i.a.createElement('b', null, 'WHAT BROUGHT US HERE'),
                ),
              ),
              i.a.createElement(
                oe.a,
                { variant: 'body1' },
                '2020 has thrown a lot at us: a global pandemic; economic recession; racial and social discord. President Donald Trump and his administration have not helped the majority of the country that is in crisis. We as a country, as a people, and as a society, need new leadership, rekindled hope, and resounding change.',
              ),
              i.a.createElement(
                xe.a,
                { color: 'primary.main', textAlign: 'center' },
                i.a.createElement(
                  oe.a,
                  { variant: 'h6' },
                  i.a.createElement('b', null, 'THE PLEDGE'),
                ),
              ),
              i.a.createElement(
                oe.a,
                { variant: 'body1' },
                'The pledge is our commitment to calling 5 or more friends and family between now and November 3rd to encourage them to vote blue down the ballot \u2014 to get politicians who threaten our democracy out of office.',
              ),
            ),
            i.a.createElement(
              xe.a,
              { textAlign: 'center', mt: 2 },
              i.a.createElement(oe.a, { variant: 'h4' }, 'WHY THE PLEDGE?'),
            ),
            i.a.createElement(Fn, null),
            i.a.createElement(Bn, null),
            i.a.createElement(Dn, null),
            i.a.createElement(Wn, null),
          )
        },
        Pn = function (e) {
          e.children
          var t = Object(c.c)(function (e) {
              return e.auth
            }).isLoggedIn,
            a = Object(C.b)().enqueueSnackbar,
            n = Object(c.b)()
          return (
            Object(o.useEffect)(function () {
              !N() && t && Yt(a, n)
            }),
            i.a.createElement(
              O.b,
              null,
              i.a.createElement(Ht, { path: '/' }),
              i.a.createElement(ua, { path: 'account' }),
              i.a.createElement(gn, { path: 'resources' }),
              i.a.createElement(bn, { path: 'sharing-the-pledge' }),
              i.a.createElement(Sn, { path: 'steps' }),
              i.a.createElement(Ln, { path: 'the-why' }),
              !t && i.a.createElement(ea, { path: 'login' }),
              !t && i.a.createElement(wn, { path: 'signup' }),
              t && i.a.createElement(it, { path: 'dashboard' }),
              t && i.a.createElement(ge, { path: 'create-recipient' }),
              t && i.a.createElement(ke, { path: 'create-call' }),
            )
          )
        }
      function Rn() {
        var e = Object(Z.a)([
          '\n  box-sizing: border-box;\n  min-width: 0px;\n  font-family: Inter, system-ui, sans-serif;\n  line-height: 1.5;\n  font-weight: 600;\n  text-decoration: none;\n  &.footer-link {\n    margin: 0px;\n    color: rgb(52, 58, 64);\n    font-size: 14px;\n  }\n  &.nav-link {\n    padding-left: 8px;\n    padding-right: 8px;\n    color: rgb(134, 142, 150);\n    font-size: 16px;\n    margin: 8px 4px;\n    &:hover {\n      color: #F0682F;\n      text-decoration: underline;\n    }\n  }\n',
        ])
        return (
          (Rn = function () {
            return e
          }),
          e
        )
      }
      var Mn = Object(Q.a)(O.a)(Rn()),
        zn = function (e) {
          return i.a.createElement(Mn, e)
        }
      function Hn() {
        var e = Object(Z.a)([
          '\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  li {\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n  }\n',
        ])
        return (
          (Hn = function () {
            return e
          }),
          e
        )
      }
      function qn() {
        var e = Object(Z.a)([
          '\n  && {\n    padding: 1rem 0;\n    .right-content {\n      border-left: 1px solid black;\n    }\n    .right-content,\n    .left-content {\n      padding: 1rem 2rem;\n    }\n    .left-content {\n      padding-left: 0;\n    }\n  }\n',
        ])
        return (
          (qn = function () {
            return e
          }),
          e
        )
      }
      var Un = Object(Q.a)(ne.a)(qn()),
        Vn = Q.a.ul(Hn()),
        Yn = function () {
          return i.a.createElement(
            Un,
            { container: !0, alignItems: 'center' },
            i.a.createElement(
              ne.a,
              { item: !0, xs: 6, className: 'left-content' },
              i.a.createElement(
                xe.a,
                { fontWeight: 600, fontSize: 'h6.fontSize', my: 0.5 },
                'The Pledge',
              ),
              i.a.createElement(
                oe.a,
                { variant: 'body2', component: 'body2' },
                'We need to get as many American citizens registered and planning to vote for Biden as possible! Trump has verbally stated that he will contest this election, and that he does not intend to pass power peacefully.',
              ),
            ),
            i.a.createElement(
              ne.a,
              { item: !0, container: !0, xs: 6, className: 'right-content' },
              i.a.createElement(
                ne.a,
                { item: !0, xs: 6 },
                i.a.createElement(
                  Vn,
                  null,
                  i.a.createElement(
                    'li',
                    null,
                    i.a.createElement(
                      zn,
                      { className: 'footer-link', to: '/' },
                      'Demographic Breakdown',
                    ),
                  ),
                  i.a.createElement(
                    'li',
                    null,
                    i.a.createElement(
                      zn,
                      { className: 'footer-link', to: '/' },
                      'Commonly Held Views',
                    ),
                  ),
                  i.a.createElement(
                    'li',
                    null,
                    i.a.createElement(
                      zn,
                      { className: 'footer-link', to: '/' },
                      'Key Issues',
                    ),
                  ),
                  i.a.createElement(
                    'li',
                    null,
                    i.a.createElement(
                      zn,
                      { className: 'footer-link', to: '/' },
                      'Swing State Information',
                    ),
                  ),
                ),
              ),
              i.a.createElement(
                ne.a,
                { item: !0, xs: 6 },
                i.a.createElement(
                  Vn,
                  null,
                  i.a.createElement(
                    'li',
                    null,
                    i.a.createElement(
                      zn,
                      { className: 'footer-link', to: '/' },
                      'About the Pledge',
                    ),
                  ),
                  i.a.createElement(
                    'li',
                    null,
                    i.a.createElement(
                      zn,
                      { className: 'footer-link', to: '/' },
                      'Contact Us',
                    ),
                  ),
                ),
              ),
            ),
          )
        },
        Gn = function (e) {
          return i.a.createElement(
            xe.a,
            { my: 1, ml: 1 },
            i.a.createElement(
              ae.a,
              Object.assign(
                { component: O.a, role: null, 'aria-disabled': null },
                e,
              ),
            ),
          )
        },
        Kn = ''.concat(_, '/images/logo.svg'),
        Jn = function () {
          var e = Object(c.b)(),
            t = Object(c.c)(function (e) {
              return e.auth
            }).isLoggedIn,
            a = Object(C.b)().enqueueSnackbar
          return i.a.createElement(
            ne.a,
            {
              container: !0,
              color: 'black',
              bg: 'white',
              alignItems: 'center',
            },
            i.a.createElement(
              xe.a,
              { display: 'flex', justifyContent: 'center' },
              i.a.createElement('img', {
                src: Kn,
                height: '40rem',
                alt: 'logo',
              }),
            ),
            i.a.createElement(
              zn,
              { to: '/', my: 2, mx: 1, className: 'nav-link' },
              'Home',
            ),
            i.a.createElement(
              zn,
              { to: 'resources', my: 2, mx: 1, className: 'nav-link' },
              'Resources',
            ),
            i.a.createElement(
              zn,
              { to: 'the-why', my: 2, mx: 1, className: 'nav-link' },
              'The Why',
            ),
            i.a.createElement(
              zn,
              {
                to: 'sharing-the-pledge',
                my: 2,
                mx: 1,
                className: 'nav-link',
                sx: { color: 'secondary' },
              },
              'Sharing the Pledge',
            ),
            i.a.createElement(xe.a, { mx: 'auto' }),
            !t &&
              i.a.createElement(
                Gn,
                { to: 'login', color: 'primary', variant: 'contained' },
                'Login',
              ),
            !t &&
              i.a.createElement(
                Gn,
                { to: 'signup', color: 'primary', variant: 'outlined' },
                'Sign Up',
              ),
            t &&
              i.a.createElement(
                Gn,
                {
                  to: 'home',
                  onClick: function () {
                    return Yt(a, e)
                  },
                  color: 'primary',
                  variant: 'contained',
                },
                'Logout',
              ),
            t &&
              i.a.createElement(
                Gn,
                { to: 'dashboard', color: 'primary', variant: 'outlined' },
                'Dashboard',
              ),
            t &&
              i.a.createElement(
                Gn,
                { to: 'account', color: 'primary', variant: 'outlined' },
                'Account',
              ),
          )
        }
      function Xn() {
        var e = Object(Z.a)(['\n  position: relative;\n'])
        return (
          (Xn = function () {
            return e
          }),
          e
        )
      }
      function Zn() {
        var e = Object(Z.a)([
          '\n  position: relative;\n  padding-right: 10vh;\n  padding-left: 10vh;\n  background-color: ',
          ';\n',
        ])
        return (
          (Zn = function () {
            return e
          }),
          e
        )
      }
      function Qn() {
        var e = Object(Z.a)([
          '\n  position: relative;\n  padding-right: 10vh;\n  padding-left: 10vh;\n',
        ])
        return (
          (Qn = function () {
            return e
          }),
          e
        )
      }
      function $n() {
        var e = Object(Z.a)(['\n  position: relative;\n'])
        return (
          ($n = function () {
            return e
          }),
          e
        )
      }
      var er = Q.a.div($n()),
        tr = Q.a.nav(Qn()),
        ar = Q.a.footer(Zn(), Ae.colors.base300),
        nr = Q.a.main.attrs(function () {
          return { id: 'maincontent' }
        })(Xn()),
        rr = function (e) {
          var t = e.children,
            a = Object(c.c)(function (e) {
              return e.alert
            }),
            n = (a.message, a.isError, i.a.createElement(nr, null, t))
          return i.a.createElement(
            er,
            null,
            i.a.createElement(tr, null, i.a.createElement(Jn, null)),
            n,
            i.a.createElement(ar, null, i.a.createElement(Yn, null)),
          )
        },
        or = a(175),
        ir = a(283),
        lr = a(284),
        sr = function (e) {
          var t = e.children
          return i.a.createElement(
            or.a,
            { theme: Ae },
            i.a.createElement(
              ir.a,
              { theme: Te },
              i.a.createElement(lr.a, null),
              t,
            ),
          )
        },
        cr = (function () {
          var e = Object(w.a)(x, y),
            t = Object(m.createStore)(e, Object(d.devToolsEnhancer)())
          return { store: t, persistor: Object(w.b)(t) }
        })(),
        ur = cr.store,
        mr = cr.persistor,
        dr = function (e) {
          e.children
          return i.a.createElement(
            c.a,
            { store: ur },
            i.a.createElement(
              u.a,
              { loading: null, persistor: mr },
              i.a.createElement(
                C.a,
                { maxSnack: 3 },
                i.a.createElement(
                  sr,
                  null,
                  i.a.createElement(rr, null, i.a.createElement(Pn, null)),
                ),
              ),
            ),
          )
        }
      ;(r.a.defaults.xsrfCookieName = 'csrftoken'),
        (r.a.defaults.xsrfHeaderName = 'X-CSRFToken'),
        (r.a.defaults.headers.post['Content-Type'] = 'application/json'),
        (r.a.defaults.headers.common['Content-Type'] = 'application/json'),
        s.a.render(i.a.createElement(dr, null), document.getElementById('root'))
    },
  },
  [[194, 1, 2]],
])
//# sourceMappingURL=main.0a3d5792.chunk.js.map
