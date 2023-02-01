import React from 'react'
import classes from './MyButton.module.css'


const MyButton = ( {children, ...props}) => {
  return (
    <button { ...props} className= {classes.myBtn}><i className="fa fa-backward" aria-hidden="true"></i>{children}</button>
  )
}

export default MyButton