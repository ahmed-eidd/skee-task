import React from 'react';
import classes from './Input.module.css';

const Input = ({ elementType, onChange, value, label, ...props }) => {

  let element = (
    <input
      onChange={onChange}
      className={classes.InputElement}
      {...props}
      value={value}
    />
  );

  switch (elementType) {
    case 'input':
      element = (
        <input
          onChange={onChange}
          className={classes.InputElement}
          {...props}
          value={value}
        />
      );
      break;

    case 'textarea':
      element = (
        <textarea
          onChange={onChange}
          className={classes.InputElement}
          {...props}
          value={value}
        />
      );
      break;

    default:
        break;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{label}</label>
      {element}
    </div>
  );
};

export default Input;
