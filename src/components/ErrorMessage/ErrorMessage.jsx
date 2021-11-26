import React from 'react';
import classes from './ErrorMessage.module.css';

const ErroMessage = ({ message, style }) => {
  return (
    <div className={classes.ErrorMessage} style={style}>
      {message}
    </div>
  );
};

export default ErroMessage;
