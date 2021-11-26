import { actionTypes } from './actionTypes';

export const addCategoryAction = (categoryName, categoryDescription) => ({
  type: actionTypes.ADD_CATEGORY,
  payload: { categoryName, categoryDescription },
});

export const addMovieAction = (categoryId, movieName, movieDescription) => ({
  type: actionTypes.ADD_MOVIE,
  payload: {
    categoryId,
    movieName,
    movieDescription,
  },
});

export const editMovieAction = (movieId, movieName, movieDescription) => ({
  type: actionTypes.EDIT_MOVIE,
  payload: {
    movieId,
    movieName,
    movieDescription,
  },
});

export const deleteMovieAction = (categoryId,movieId) => ({
  type: actionTypes.DELETE_MOVIE,
  payload: {
    categoryId,
    movieId
  },
});
