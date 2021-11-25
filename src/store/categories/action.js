import { actionTypes } from './actionTypes';

export const addCategoryAction = (categoryData) => ({
  type: actionTypes.ADD_CATEGORY,
  payload: categoryData,
});

export const addMovieAction = (movieData) => ({
  type: actionTypes.ADD_MOVIE,
  payload: movieData,
});

export const editMovieAction = (editedMovie) => ({
  type: actionTypes.EDIT_MOVIE,
  payload: editedMovie,
});

export const deleteMovieAction = (movieId) => ({
  type: actionTypes.DELETE_MOVIE,
  payload: movieId,
});
