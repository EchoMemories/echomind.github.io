import comp from "D:/Desktop/chat/echomind-docs/src/.vuepress/.temp/pages/zh/index.html.vue"
const data = JSON.parse("{\"path\":\"/zh/\",\"title\":\"EchoMind\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"icon\":\"house\",\"title\":\"EchoMind\",\"heroImage\":\"./logo.svg\",\"bgImage\":\"https://theme-hope-assets.vuejs.press/bg/6-light.svg\",\"bgImageDark\":\"https://theme-hope-assets.vuejs.press/bg/6-dark.svg\",\"bgImageStyle\":{\"background-attachment\":\"fixed\"},\"heroText\":\"EchoMind\",\"tagline\":\"Python+ollama开发长时记忆对话。\",\"actions\":[{\"text\":\"使用指南\",\"icon\":\"lightbulb\",\"link\":\"./demo/\",\"type\":\"primary\"},{\"text\":\"文档\",\"link\":\"./guide/\"}],\"highlights\":[{\"header\":\"易于安装\",\"image\":\"/assets/image/box.svg\",\"bgImage\":\"https://theme-hope-assets.vuejs.press/bg/3-light.svg\",\"bgImageDark\":\"https://theme-hope-assets.vuejs.press/bg/3-dark.svg\"}],\"copyright\":false,\"footer\":\"使用 <a href=\\\"https://theme-hope.vuejs.press/zh/\\\" target=\\\"_blank\\\">VuePress Theme Hope</a> 主题 | MIT 协议, 版权所有 © 2019-至今 Mr.Hope\"},\"readingTime\":{\"minutes\":5.76,\"words\":1727},\"filePathRelative\":\"zh/README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
