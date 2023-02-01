import React from 'react'
import classes from './MyButton.module.css'
const BackButton = ({children, ...props}) => {
  return (
    <button { ...props} className= {classes.backBtn}><i className="fa fa-backward" aria-hidden="true"></i> {children}</button>
  )
}

export default BackButton