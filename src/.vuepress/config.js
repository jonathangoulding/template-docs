module.exports = {
  title: "Docs Template",
  themeConfig: {
    nav: [
      {
        text: "Docs",
        ariaLabel: "Docs Menu",
        items: [
          { text: "StyleGuide", link: "/style-guide" },
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
