import React from 'react'
import { Link, graphql } from "gatsby"
import { rhythm } from '../utils/typography'
import Layout from '../components/layout'
import Header from '../components/header'
import ShortBio from '../components/shortbio'

const postStyle = {
  marginBottom: rhythm(1/4)
}

export default ({ data }) => {
  
  return(
    <Layout>
      <Header/>
      <ShortBio isBlogPost={false}/>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug} style={{ boxShadow: 'none', textDecoration: 'none' }}>
            <h3 style={postStyle}>{node.frontmatter.title}{" "}
              <span style={{color: `#bbb`}}> - {node.frontmatter.date}</span>
            </h3>
          </Link>
            <p>{node.frontmatter.description}</p>
        </div>
      ))}
    </Layout>   
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description

          }
          fields{
            slug
          }
          excerpt
        }
      }
    }
  }
`