import { CodeTabs } from "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_ae53025fbad512a28dfb4becb68ae3bf/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_ae53025fbad512a28dfb4becb68ae3bf/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/@vuepress+plugin-markdown-t_ae53025fbad512a28dfb4becb68ae3bf/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
