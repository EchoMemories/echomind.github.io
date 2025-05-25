import CodeDemo from "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@_f6dc3657d95c69d34d418e3e17364ce3/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/vuepress-plugin-md-enhance@_f6dc3657d95c69d34d418e3e17364ce3/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
  },
};
