import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import ShortBio from '../components/shortbio'
import { graphql } from 'gatsby'

export default ({ data }) => {
  console.log(data.site.siteMetadata.reading)
  return(
    <Layout >
      <SEO title='Random info about me'/>
      <div style={{marginTop: '2em'}}>
        <h3>Currently Reading</h3>
          <ul>
          {data.site.siteMetadata.reading.map((item, index) => {
              return( 
                <li key={index}>{item}</li> 
              )
            })
          }
          </ul>
      </div>
      <div>
        <p>more to come...</p>
      </div>
      <ShortBio />
    </Layout>
    
  )
}


export const query = graphql`
  {
    site {
      siteMetadata {
        reading
      }
    }
  }
` 
