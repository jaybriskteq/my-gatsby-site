
import { graphql } from "gatsby";
import * as React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const BlogPage = ({ data }) => { 

  console.log(data.allMarkdownRemark.nodes);

  return (
    <Layout pageTitle="My Blog Posts">
     <ul>
      {
        data.allMarkdownRemark.nodes.map(node => (
          <li key={node.title}>
            {node}
          </li>
        ))
      }
      </ul>
    </Layout>
  );
};



export const Head = () => <Seo title="My Blog Posts" />;

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        id
        frontmatter {
          title
        }
      }
    }
  }
`

export default BlogPage;


