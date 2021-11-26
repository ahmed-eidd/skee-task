import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { allMoviesSelector } from '../../store/data/selector';
import BurgerIcon from '../BurgerIcon/BurgerIcon';
import MovieList from './MovieList/MovieList';
import classes from './Tab.module.css';

const Tab = ({ categoryName, categoryId }) => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const movies = useSelector((state) => allMoviesSelector(state, categoryId));

  return (
    <div className={classes.Container}>
      <div className={classes.Tab} onClick={toggleMenu}>
        <BurgerIcon />
        <div className={classes.CategoryName}>
          {categoryName || 'category Name'}
        </div>
      </div>
      {open && <MovieList movies={movies} categoryId={categoryId} />}
    </div>
  );
};

export default Tab;
