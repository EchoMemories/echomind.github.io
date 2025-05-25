export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Project home","icon":"house"} }],
  ["/zh/", { loader: () => import(/* webpackChunkName: "zh_index.html" */"D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/index.html.js"), meta: {"title":"EchoMind","icon":"house"} }],
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
