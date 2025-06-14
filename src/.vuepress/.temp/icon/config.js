import { hasGlobalComponent } from "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_2f4942ac6ec2850686e83866ba4cc6f9/node_modules/@vuepress/helper/lib/client/index.js";
import { useScriptTag } from "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/@vueuse+core@13.2.0_vue@3.5.14/node_modules/@vueuse/core/index.mjs";
import { h } from "vue";
import { VPIcon } from "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0_332acd18f20d0f98c50339dc6020940f/node_modules/@vuepress/plugin-icon/lib/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "iconify",
            prefix: "fa6-solid:",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useScriptTag(`https://cdn.jsdelivr.net/npm/iconify-icon@2`);
  },
}
