import React from 'react'
import Layout from '../components/layout'
import Header from '../components/header'
import Info from '../components/info'
import Seo from '../components/seo'

export default ({ data }) => {
  
  return (
    <Layout>
      <Seo title={data.site.siteMetadata.author.name}/>
      <Header/>
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