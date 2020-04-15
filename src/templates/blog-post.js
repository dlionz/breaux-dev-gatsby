import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/layout'
import ShortBio from '../components/shortbio'
import SEO from "../components/seo"

export default ({data}) => {
  // test
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt}/>
      <h1>{post.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <ShortBio isBlogPost={true}/>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      excerpt
    }
  }
`