import { Layout, NotFound, injectDarkMode, setupDarkMode, setupSidebarItems, scrollPromise } from "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_1be7a1a0938b239aab7e589251d9be97/node_modules/vuepress-theme-hope/lib/bundle/exports/base.js";

import { defineCatalogInfoGetter } from "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/@vuepress+plugin-catalog@2._456a4e656ad24ef94070f69d86008142/node_modules/@vuepress/plugin-catalog/lib/client/index.js"
import { h } from "vue"
import { resolveComponent } from "vue"
import { GlobalEncrypt, LocalEncrypt } from "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_1be7a1a0938b239aab7e589251d9be97/node_modules/vuepress-theme-hope/lib/bundle/exports/encrypt.js";
import "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_1be7a1a0938b239aab7e589251d9be97/node_modules/vuepress-theme-hope/lib/bundle/styles/encrypt/bundle.scss"

import "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_cf552a9a6c35afa3482f8d97516aa40b/node_modules/@vuepress/helper/lib/client/styles/colors.css";
import "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_cf552a9a6c35afa3482f8d97516aa40b/node_modules/@vuepress/helper/lib/client/styles/normalize.css";
import "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_cf552a9a6c35afa3482f8d97516aa40b/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";
import "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/vuepress-theme-hope@2.0.0-r_1be7a1a0938b239aab7e589251d9be97/node_modules/vuepress-theme-hope/lib/bundle/styles/bundle.scss";

defineCatalogInfoGetter((meta) => {
  const title = meta.title;
  const shouldIndex = meta.index ?? true;
  const icon = meta.icon;

  return shouldIndex ? {
    title,
    content: icon ? () =>[h(resolveComponent("VPIcon"), { icon, sizing: "both" }), title] : null,
    order: meta.order,
    index: meta.index,
  } : null;
});

export default {
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;

    router.options.scrollBehavior = async (...args) => {
      await scrollPromise.wait();

      return scrollBehavior(...args);
    };

    // inject global properties
    injectDarkMode(app);

    app.component("GlobalEncrypt", GlobalEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();

  },
  layouts: {
    Layout,
    NotFound,

  }
};
