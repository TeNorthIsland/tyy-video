;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [5973],
  {
    5817: function (a, n, e) {
      Promise.resolve().then(e.bind(e, 772))
    },
    772: function (a, n, e) {
      'use strict'
      e.r(n),
        e.d(n, {
          default: function () {
            return m
          },
        })
      var t = e(7437),
        l = e(4033),
        i = e(197),
        r = e.n(i),
        o = e(1396),
        s = e.n(o)
      let c = [
          { name: '最新', url: '/' },
          { name: '西瓜', url: '/tab/melon' },
          { name: '抖音', url: '/tab/tiktok' },
          { name: '快手', url: '/tab/kuaishou' },
          { name: '哔哩', url: '/tab/bilibili' },
        ],
        u = [
          { name: '分类', url: '/tab/category' },
          { name: '我喜欢的', url: '/tab/like' },
          { name: '会员', url: '/tab/vip' },
          { name: '小程序', url: '/tab/gameDownload' },
          { name: '客服', url: '/tab/chat' },
        ]
      function m(a) {
        let { children: n } = a,
          e = (0, l.usePathname)()
        ;(0, l.useRouter)()
        let i = (a) => (console.log(e, a), e === a ? r().active : '')
        return (0, t.jsxs)('div', {
          className: r().mainBody,
          children: [
            (0, t.jsx)('nav', {
              className: r().mainNaviaContent,
              children: (0, t.jsx)('ul', {
                className: r().naviUl,
                children: c.map((a, n) => (0, t.jsx)('li', { className: i(a.url), children: (0, t.jsx)('div', { children: (0, t.jsx)(s(), { href: a.url, children: a.name }) }) }, n)),
              }),
            }),
            (0, t.jsx)('div', { className: r().content, children: n }),
            (0, t.jsx)('nav', {
              className: r().mainNaviaContentFooter,
              children: (0, t.jsx)('ul', {
                className: r().naviUl,
                children: u.map((a, n) => (0, t.jsx)('li', { className: i(a.url), children: (0, t.jsx)('div', { children: (0, t.jsx)(s(), { href: a.url, children: a.name }) }) }, n)),
              }),
            }),
          ],
        })
      }
    },
    197: function (a) {
      a.exports = {
        mainBody: 'layout_mainBody__tcIb4',
        mainNaviaContent: 'layout_mainNaviaContent__tRfvI',
        naviUl: 'layout_naviUl__sWycc',
        active: 'layout_active__lw0In',
        content: 'layout_content__yuOY5',
        mainNaviaContentFooter: 'layout_mainNaviaContentFooter__c2HMt',
      }
    },
  },
  function (a) {
    a.O(0, [4569, 2971, 2472, 1744], function () {
      return a((a.s = 5817))
    }),
      (_N_E = a.O())
  },
])
