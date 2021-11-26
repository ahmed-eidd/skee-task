import { actionTypes } from './actionTypes';
import { categoryObj, movieObj } from '../../helpers/formatData';

const initialState = {
  categories: categoryObj,
  movies: movieObj,
};

const dataReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ADD_CATEGORY: {
      break;
    }

    case actionTypes.ADD_MOVIE: {
      break;
    }

    case actionTypes.DELETE_MOVIE: {
      // filter movies in the allIds object
      const newMovieAllIds = state.movies.allIds.filter(
        (id) => id !== payload.movieId
      );

      // filter movies the byId object
      const newMovieById = Object.keys(state.movies.byId).reduce((acc, key) => {
        if (key !== +payload.movieId) {
          acc[key] = state.movies.byId[key];
        }
        return acc;
      }, {});

      // filter movies in the categories byId object
      const newCategoriesById = state.categories.byId[
        payload.categoryId
      ].movies.filter((el) => el !== payload.movieId);

      return {
        ...state,
        categories: {
          ...state.categories,
          byId: {
            ...state.categories.byId,
            [payload.categoryId]: {
              ...state.categories.byId[payload.categoryId],
              movies: newCategoriesById,
            },
          },
        },

        // movies
        movies: {
          ...state.movies,
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
