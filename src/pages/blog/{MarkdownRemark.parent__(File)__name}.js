import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage, getImage } from "gatsby-plugin-image";


const BlogPost = ({ data, children }) => {
  // console.log(children , data)
  const thumb = getImage(data.markdownRemark.frontmatter.thumb);
  console.log(thumb);
  return (
    <Layout pageTitle={data.markdownRemark.frontmatter.title}>
      <p>{data.markdownRemark.frontmatter.date}</p>
      <GatsbyImage image={thumb} alt="thumbnail"></GatsbyImage>

      <p>{data.markdownRemark.excerpt}</p>
    </Layout>
  )
}

export const query =  graphql`
query ($id: String) {
  markdownRemark(id: {eq: $id}) {
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
  }
}
`

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export default BlogPost