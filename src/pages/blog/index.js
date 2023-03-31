import { Link, graphql } from "gatsby";
import * as React from "react";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BlogPage = ({ data }) => {
  // console.log(data.allMarkdownRemark.nodes);
  // const image = getImage();/

  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allMarkdownRemark.nodes.map((node) => {
          const thumb = getImage(node.frontmatter.thumb);
          console.log(thumb);
          return (
            <article key={node.id}>
              <h2>
                <Link to={`/blog/${node.parent.name}`}>
                  {node.frontmatter.title}
                </Link>
               
              </h2>
              <p>{node.frontmatter.date}</p>
            </article>
          );
        })}
      </ul>
    </Layout>
  );
};

export const Head = () => <Seo title="My Blog Posts" />;

export const query =  graphql`
{
  allMarkdownRemark {
    nodes {
      id
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        thumb {
          childImageSharp {
            gatsbyImageData
          }
        }
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
