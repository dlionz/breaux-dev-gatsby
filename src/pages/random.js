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
        <h3>Currently Watching</h3>
          <ul>
          {data.site.siteMetadata.watching.map((item, index) => {
              return( 
                <li key={index}>{item}</li> 
              )
            })
          }
          </ul>
          <h3>Currently Learning</h3>
          <ul>
            <li>Drawing - Digital Art - Digital Painting</li>
          </ul>
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
        watching
      }
    }
  }
` 
