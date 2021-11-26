import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovieAction } from '../../../store/data/action';
import BurgerIcon from '../../BurgerIcon/BurgerIcon';
import Button from '../../Button/Button';
import classes from './MovieList.module.css';

const MovieList = ({ movies, categoryId }) => {
  const dispatch = useDispatch();
  const onDeleteHandler = (movieId) => {
    dispatch(deleteMovieAction(categoryId, movieId));
  };
  return (
    <div className={classes.MovieList}>
      {movies?.length > 0 ? (
        movies?.map((el) => (
          <div className={classes.Movie} key={el?.id}>
            <div className={classes.MovieName}>
              <BurgerIcon size='sm' />
              {el?.name}
            </div>
            <div className={classes.MovieBtnsContainer}>
              <Button px={4} color='orange'>
                Edit
              </Button>
              <Button px={4} color='red' onClick={() => onDeleteHandler(el?.id)}>
                Delete
              </Button>
            </div>
          </div>
        ))
      ) : (
        <div className={classes.Movie}>No Movies</div>
      )}
    </div>
  );
};

export default MovieList;