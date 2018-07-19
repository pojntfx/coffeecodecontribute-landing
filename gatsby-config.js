module.exports = {
  siteMetadata: {
    title: "CoffeeCodeContribute",
    description: "Free/Libre Open Source Software Bootcamp"
  },
  pathPrefix: "/website",
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
