import React from 'react'
import damien from '../../static/damien.jpg'
import Styles from './profilePicture.module.css'

export default ({ data, props }) => {
  
  return(
    <React.Fragment>
    <div style={{marginRight: '10px'}}>
      <img src={damien} className={Styles.image} alt=""/>
    </div>
  </React.Fragment>
  ) 
}
