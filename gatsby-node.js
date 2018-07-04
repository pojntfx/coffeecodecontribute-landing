const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` });
    createNodeField({
      node,
      name: "slug",
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(({ data: { allMarkdownRemark: { edges } } }) => {
      edges.forEach(({ node: { fields: { slug } } }) => {
        createPage({
          path: `${slug}`,
          component: path.resolve("./src/templates/subpage.js"),
          context: {
            slug
          }
        });
      });
      resolve();
    });
  });
};
