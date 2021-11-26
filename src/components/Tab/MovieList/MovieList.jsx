import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteMovieAction } from '../../../store/data/action';
import BurgerIcon from '../../BurgerIcon/BurgerIcon';
import Button from '../../Button/Button';
import MovieForm from '../MovieForm/MovieForm';
import classes from './MovieList.module.css';

const MovieList = ({ movies, categoryId }) => {
  const [editMovie, setEditMovie] = useState(false);
  const [editMovieId, setEditMovieId] = useState('');
  const onEditMovieHandler = (id) => {
    if (editMovie) {
      setEditMovie(false);
      setEditMovieId('');
      return;
    }
    setEditMovie(true);
    setEditMovieId(id);
  };
  const dispatch = useDispatch();
  const onDeleteHandler = (movieId) => {
    dispatch(deleteMovieAction(categoryId, movieId));
  };
  return (
    <div className={classes.MovieList}>
      <MovieForm categoryId={categoryId} />
      {movies?.length > 0 ? (
        movies?.map((el) => (
          <React.Fragment key={el?.id}>
            <div className={classes.Movie}>
              <div className={classes.MovieName}>
                <BurgerIcon size='sm' />
                {el?.name}
              </div>
              <div className={classes.MovieBtnsContainer}>
                <Button
                  px={4}
                  color='orange'
                  onClick={() => onEditMovieHandler(el.id)}
                >
                  Edit
                </Button>
                <Button
                  px={4}
                  color='red'
                  onClick={() => onDeleteHandler(el?.id)}
                >
                  Delete
                </Button>
              </div>
            </div>
            {editMovie && el.id === editMovieId && (
              <MovieForm edit movie={el} onEdit={onEditMovieHandler} />
            )}
          </React.Fragment>
        ))
      ) : (
        <div className={classes.Movie}>No Movies</div>
      )}
    </div>
  );
};

export default MovieList;
