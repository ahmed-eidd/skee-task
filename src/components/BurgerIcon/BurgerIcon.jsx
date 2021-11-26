import React from 'react';
import { extendClasses } from '../../helpers/extendClasses';
import classes from './BurgerIcon.module.css';

const BurgerIcon = ({size = 'md'}) => {
  const iconClass = extendClasses(
    classes.BurgerIcon,
    size === 'sm' && classes.sm,
    size === 'md' && classes.md,
    size === 'lg' && classes.lg
  );

  return (
    <div className={iconClass}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default BurgerIcon;
