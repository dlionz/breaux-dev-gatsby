import React from 'react'
import Styles from './layout.module.css'

export default ({ children, data }) => {

  return (
    <div className={Styles.wrapper}>
      {children}
      <p style={{ color: 'rgb(211,211,211)', textAlign: 'center'}}>Damien Breaux © 2020</p>
    </div>
  )
}