import React from 'react';
import classes from './Box.module.css';

const Box = ({ children,className,style }) => {
  return <div className={classes.Box} style={style}>{children}</div>;
};

export default Box;