import React from 'react'
import classes from './Box.module.css'

const Box = ({children}) => {
  return (
    <div className={classes.Box}>
      {children} 
    </div>
  )
}

export default Box
