module.exports = {
  base: "/template-docs/",
  title: "Docs Template",
  themeConfig: {
    nav: [
      {
        text: "Docs",
        ariaLabel: "Docs Menu",
        items: [
          { text: "Styleguide", link: "/styleguide/" },
          { text: "Testing", link: "/testing/" },
        ],
      },
    ],
  },
  plugins: [
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10,
      },
    ],
  ],
};
