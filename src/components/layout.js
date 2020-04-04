import React from 'react'
import Styles from './layout.module.css'

export default ({ children, data }) => {

  return (
    <div className={Styles.wrapper}>
      {children}
    </div>
  )
}