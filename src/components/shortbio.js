import React from 'react'
import { useStaticQuery, Link } from "gatsby"
import { rhythm } from "../utils/typography"

export default (props) => {
  const data = useStaticQuery(graphql`
    query {
      site{
        siteMetadata{
          author{
            name
            summary
          }
        }
      }
    }
  `)

  return(
    <React.Fragment>
      { props.isBlogPost === true ?
      <React.Fragment>
        <hr
        style={{
          marginBottom: rhythm(1),
        }}
        />
        <div style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
          }}>
          <p>Written by <Link to="/">{data.site.siteMetadata.author.name}</Link> - {data.site.siteMetadata.author.summary}</p>
        </div>
      </React.Fragment>

      :

      <React.Fragment>
        <hr
        style={{
          marginBottom: rhythm(1),
        }}
        />
        <div style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
          }}>
          <p><Link to="/">{data.site.siteMetadata.author.name}</Link> - {data.site.siteMetadata.author.summary}</p>
        </div>
      </React.Fragment>

      }
    </React.Fragment>
  )
}