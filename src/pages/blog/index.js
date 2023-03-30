
import { Link, graphql } from 'gatsby'
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";

const BlogPage = ({ data }) => {
  // console.log(data.allMarkdownRemark.nodes);

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMarkdownRemark.nodes.map((node) => (
          
          <article key={node.id}>
            <h2>
            <Link to={`/blog/${node.parent.name}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>{node.frontmatter.date}</p>
            
          </article>
        ))}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export const query =   graphql`
query {
  allMarkdownRemark {
    nodes {
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      excerpt
      parent {
        ... on File {
          name
        }
      }
    }
  }
}
`

export default BlogPage;
