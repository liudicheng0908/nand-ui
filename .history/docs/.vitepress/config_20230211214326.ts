export default {
  base: process.env.NODE_ENV === 'production' ? '/nand-ui/' : '/',
  themeConfig: {
    siteTitle: false,
    logo: "/logo.png",
    nav: [
      { text: "指南", link: "/guild/installation" },
      { text: "组件", link: "/examples/icon/" },
    ],
    socialLinks: [{ icon: "github", link: "https://gitee.com" }],
    sidebar: {
      "/guild/": [
        {
          text: "基础",
          items: [
            {
              text: "安装",
              link: "/guild/installation",
            },
            {
              text: "快速开始",
              link: "/guild/quickstart",
            },
          ],
        },
        {
          text: "进阶",
          items: [
            {
              text: "xx",
              link: "/xx",
            },
          ],
        },
      ],
      "/examples/": [
        {
          text: "基础组件",
          items: [
            {
              text: "Icon图标",
              link: "/examples/Icon/",
            },
          ],
        },
      ],
    },
  },
};
