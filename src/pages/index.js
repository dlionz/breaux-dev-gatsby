import React from 'react'
import Layout from '../components/layout'
import Info from '../components/info'
import Seo from '../components/seo'

export default ({ data }) => {
  
  return (
    <Layout>
      <Seo title='Welcome!'/>
      <Info />
    </Layout>
  )
}

export const query = graphql`
  {
    site {
      siteMetadata {
        author{
          name
        }
      }
    }
  }
`