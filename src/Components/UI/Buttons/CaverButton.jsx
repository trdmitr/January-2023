import React from 'react'
import classes from './MyButton.module.css'

const CaverButton = ( {children, ...props}) => {
  return (
    <button { ...props} className= {classes.cavBtn}><i className="fa fa-backward"></i> {children}</button>
  )
}

export default CaverButton