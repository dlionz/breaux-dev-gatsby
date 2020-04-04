import React from 'react'
import Styles from './info.module.css'
import ProfilePic from './profilePicture.js'
import { useStaticQuery, graphql } from 'gatsby'

export default (props) => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          social {
            devTo
            twitter
            linkedIn
            github
            email
          }
        }
      }
    }
  `)
    const social = data.site.siteMetadata.social;

  return (
    <div className={Styles.info}>
      <ProfilePic />
      <div className={Styles.infoP}>
        <p id={Styles.hand}>
          I'm a C# .Net developer interested in Javascript and focused on always improving. <br/>
          I'm a professional on <a target="_blank" rel="noopener noreferrer" href={social.linkedIn}>Linkedin</a> <br/>
          I write about my life and experiences on <a target="_blank" rel="noopener noreferrer" href={social.devTo}>Dev.to</a> <br/>
          I try and tweet on <a target="_blank" rel="noopener noreferrer" href={social.twitter}>Twitter</a> <br/>
          and somtimes I put code on <a target="_blank" rel="noopener noreferrer" href={social.github}>Github</a> <br/>
          Send me an <a href={social.email}>electronic letter</a>
        </p>
      </div>
    </div>
  )
}