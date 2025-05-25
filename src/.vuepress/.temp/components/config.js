import { hasGlobalComponent } from "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_cf552a9a6c35afa3482f8d97516aa40b/node_modules/@vuepress/helper/lib/client/index.js";
import Badge from "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/vuepress-plugin-components@_6a9f8607bbef21db8cc6a3c8174f178e/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import VPCard from "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/vuepress-plugin-components@_6a9f8607bbef21db8cc6a3c8174f178e/node_modules/vuepress-plugin-components/lib/client/components/VPCard.js";

import "D:/Desktop/chat/echomind-docs/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.1_cf552a9a6c35afa3482f8d97516aa40b/node_modules/@vuepress/helper/lib/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
