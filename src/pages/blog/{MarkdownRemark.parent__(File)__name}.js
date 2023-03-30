import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

const BlogPost = ({ data, children }) => {
  console.log(children , data)
  return (
    <Layout pageTitle={data.markdownRemark.frontmatter.title}>
      <p>{data.markdownRemark.frontmatter.date}</p>
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
    }
    excerpt
  }
}
`

export const Head = ({ data }) => <Seo title={data.markdownRemark.frontmatter.title} />

export default BlogPost