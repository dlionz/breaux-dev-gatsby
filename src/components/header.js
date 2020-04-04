import React from 'react'
import Styles from './header.module.css'
import {useStaticQuery, Link } from 'gatsby'

export default (props) => {

  const data = useStaticQuery(graphql`
    query {
      site{
        siteMetadata{
          author{
            name
          }
        }
      }
    }
  `)

  return(
    <React.Fragment>
      <Link to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <h1 className={Styles.head}>{data.site.siteMetadata.author.name}</h1>
      </Link>
      <div className={Styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </React.Fragment>
  )
}