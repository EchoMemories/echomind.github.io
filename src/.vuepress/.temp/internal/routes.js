export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Project home","icon":"house"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "demo_disable.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"title":"Disabling layout and features","icon":"gears","order":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "demo_encrypt.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"title":"Encryption Article","icon":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "demo_layout.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"title":"Layout","icon":"object-group","order":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "demo_markdown.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"title":"Markdown Enhance","icon":"fa6-brands:markdown","order":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "demo_page.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"title":"Page Config","icon":"file","order":3} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "demo_index.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"title":"Features demo","icon":"laptop-code"} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "guide_index.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"title":"Guide","icon":"lightbulb"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":"EchoMind","icon":"house"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "guide_foo_ray.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"title":"Ray","icon":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "guide_foo_index.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"title":"Foo feature","icon":"lightbulb"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "guide_bar_baz.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"title":"Baz","icon":"circle-info"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "guide_bar_index.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"title":"Bar feature","icon":"lightbulb"} }],
  ["/zh/guide/", { loader: () => import(/* webpackChunkName: "zh_guide_index.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/guide/index.html.js"), meta: {"title":"指南","icon":"lightbulb"} }],
  ["/zh/demo/disable.html", { loader: () => import(/* webpackChunkName: "zh_demo_disable.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/demo/disable.html.js"), meta: {"title":"布局与功能禁用","icon":"gears","order":4} }],
  ["/zh/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "zh_demo_encrypt.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/demo/encrypt.html.js"), meta: {"title":"密码加密的文章","icon":"lock"} }],
  ["/zh/demo/layout.html", { loader: () => import(/* webpackChunkName: "zh_demo_layout.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/demo/layout.html.js"), meta: {"title":"布局","icon":"object-group","order":2} }],
  ["/zh/demo/markdown.html", { loader: () => import(/* webpackChunkName: "zh_demo_markdown.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/demo/markdown.html.js"), meta: {"title":"Markdown 展示","icon":"fa6-brands:markdown","order":2} }],
  ["/zh/demo/page.html", { loader: () => import(/* webpackChunkName: "zh_demo_page.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/demo/page.html.js"), meta: {"title":"页面配置","icon":"file","order":3} }],
  ["/zh/demo/", { loader: () => import(/* webpackChunkName: "zh_demo_index.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/demo/index.html.js"), meta: {"title":"主要功能与配置演示","icon":"laptop-code"} }],
  ["/zh/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "zh_guide_bar_baz.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/guide/bar/baz.html.js"), meta: {"title":"Baz","icon":"circle-info"} }],
  ["/zh/guide/bar/", { loader: () => import(/* webpackChunkName: "zh_guide_bar_index.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/guide/bar/index.html.js"), meta: {"title":"Bar 功能","icon":"lightbulb"} }],
  ["/zh/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "zh_guide_foo_ray.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/guide/foo/ray.html.js"), meta: {"title":"Ray","icon":"circle-info"} }],
  ["/zh/guide/foo/", { loader: () => import(/* webpackChunkName: "zh_guide_foo_index.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/guide/foo/index.html.js"), meta: {"title":"Foo 功能","icon":"lightbulb"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
