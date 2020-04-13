import React from 'react'
import Styles from './layout.module.css'
import Header from './header'

export default ({ children, data }) => {

  return (
    <div className={Styles.wrapper}>
      <Header />
      {children}
      <p style={{ color: 'rgb(211,211,211)', textAlign: 'center'}}>Damien Breaux © 2020</p>
    </div>
  )
}