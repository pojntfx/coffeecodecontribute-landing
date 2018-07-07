import React from "react";
import { DefaultLayout } from "../layouts/default";
import { graphql } from "gatsby";

export default ({
  data: {
    markdownRemark: {
      // frontmatter: { title },
      html
    }
  }
}) => {
  return (
    <div>
      <DefaultLayout>
        {/* <h1>{title}</h1> */}
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </DefaultLayout>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      # frontmatter {
      #   title
      # }
    }
  }
`;
