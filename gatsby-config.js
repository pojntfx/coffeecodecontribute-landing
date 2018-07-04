module.exports = {
  pathPrefix: "/coffeecodecontribute-landing",
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    "gatsby-plugin-react-helmet"
  ]
};
