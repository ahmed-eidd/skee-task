import React from 'react';
import classes from './Button.module.css';

const Button = ({ children, type, color, onClick, px, style }) => {
  const btnColor = () => {
    if (color === 'green' || !color) {
      return classes.Green;
    }
    if (color === 'orange') {
      return classes.Orange;
    }
    if (color === 'red') {
      return classes.Red;
    }
  };

  const btnClasses = [classes.Button, btnColor()].join(' ');

  return (
    <button
      className={btnClasses}
      onClick={onClick}
      type={type || 'button'}
      style={{
        paddingLeft: `${px}rem`,
        paddingRight: `${px}rem`,
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
