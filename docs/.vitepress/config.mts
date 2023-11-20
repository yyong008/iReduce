import { defineConfig } from "vitepress";
import { js } from "./js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "iReduce",
  description: "A experience log",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "JavaScript", link: "/js/index" },
      { text: "CSS", link: "/css/index" },
      { text: "HTML", link: "/html/index" },
      { text: "React", link: "/react/index" },
      { text: "Mini", link: "/mini/index" },
      { text: "Node.js", link: "/node/index" },
      { text: "Tools", link: "/tools/index" },
      { text: "Browser", link: "/browser/index" },
      { text: "Interview", link: "/interview/index" },
    ],

    sidebar: {
      "/js/": js,
      "/css/": [{ text: "flex", link: "/css/flex/index" }],
      "/html/": [{ text: "a", link: "/html/a/index" }],
      "/react/": [{ text: "setState", link: "/react/setState/index" }],
      "/mini/": [{ text: "setState", link: "/mini/index" }],
      "/node/": [{ text: "setState", link: "/node/index" }],
      "/tools/": [{ text: "setState", link: "/tools/index" }],
      "/browser/": [{ text: "url", link: "/browser/url" }],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
