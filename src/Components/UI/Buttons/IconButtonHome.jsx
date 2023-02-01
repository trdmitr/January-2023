import React from 'react'
import classes from './MyButton.module.css'

const IconButtonHome = ( {children, ...props}) => {
  return (
    <button { ...props} className= {classes.hmBtn}><i className="fa fa-music" aria-hidden="true"></i> {children}</button>
  )
}

export default IconButtonHome