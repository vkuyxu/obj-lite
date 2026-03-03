import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "obj-lite",
  description: "A lightweight utility library for object manipulation.",
  base: "/obj-lite/",
  head: [["link", { rel: "icon", href: "/obj-lite/favicon.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "快速上手", link: "/pages/use" },
    ],
    sidebar: [
      {
        text: "快速上手",
        items: [
          { text: "USE", link: "/pages/use" },
          { text: "API", link: "/pages/api" },
        ],
      },
    ],
    socialLinks: [{ icon: "gitee", link: "https://gitee.com/vkuyxu/objLite" }],
    search: {
      provider: "local",
    },
  },
});
