import { actionTypes } from './actionTypes';
import { categoryObj, movieObj } from '../../helpers/formatData';
import { v1 as idGenerator } from 'uuid';
import {customToast} from '../../helpers/customToast';

// { categoryObj, movieObj } from 'formData' is a normalized redux State Shape
// for more information:
// https://redux.js.org/usage/structuring-reducers/normalizing-state-shape

const initialState = {
  categories: categoryObj,
  movies: movieObj,
};

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;

  const categoryState = state.categories;
  const movieState = state.movies;

  switch (type) {
    case actionTypes.ADD_CATEGORY: {

      const newCategoryId = idGenerator();
    
      const newMovie = {
        id: newCategoryId,
        name: payload.categoryName,
        movies: [],
      };

      customToast('New Category has been added')


      return {
        ...state,
        categories: {
          ...categoryState,
          byId: {
            ...categoryState.byId,
            [newCategoryId]: newMovie,
          },
          allIds: [...categoryState.allIds, newCategoryId],
        },
      };
    }


    case actionTypes.ADD_MOVIE: {

      const newMovieId = idGenerator();

      const newMovie = {
        name: payload.movieName,
        id: newMovieId,
      };

      customToast('New Movie has been added')


      return {
        ...state,
        categories: {
          ...categoryState,
          byId: {
            ...categoryState.byId,
            [payload.categoryId]: {
              ...categoryState.byId[payload.categoryId],
              movies: [
                ...categoryState.byId[payload.categoryId].movies,
                newMovieId,
              ],
            },
          },
        },

        movies: {
          ...movieState,
          byId: {
            ...movieState.byId,
            [newMovieId]: newMovie,
          },
          allIds: [...movieState.allIds, newMovieId],
        },
      };
    }


    case actionTypes.EDIT_MOVIE: {

      const editedMovie = {
        name: payload.movieName,
        id: payload.movieId,
      };

      customToast('Movie Edited! Success')


      return {
        ...state,
        movies: {
          ...movieState,
          byId: {
            ...movieState.byId,
            [payload.movieId]: editedMovie,
          },
        },
      };
    }


    case actionTypes.DELETE_MOVIE: {

      // filter movies in the allIds object
      const newMovieAllIds = movieState.allIds.filter(
        (id) => id !== payload.movieId
      );

      // filter movies the byId object
      const newMovieById = Object.keys(movieState.byId).reduce((acc, key) => {
        if (key !== +payload.movieId) {
          acc[key] = movieState.byId[key];
        }
        return acc;
      }, {});

      // filter movies in the categories byId object
      const newCategoriesById = categoryState.byId[
        payload.categoryId
      ].movies.filter((el) => el !== payload.movieId);

      customToast('Movie Deleted! Success')


      return {
        ...state,
        categories: {
          ...categoryState,
          byId: {
            ...categoryState.byId,
            [payload.categoryId]: {
              ...categoryState.byId[payload.categoryId],
              movies: newCategoriesById,
            },
          },
        },

        // movies
        movies: {
          ...movieState,
          allIds: newMovieAllIds,
          byId: newMovieById,
        },
      };
    }


    default:
      return state;
  }
};

export default dataReducer;


  