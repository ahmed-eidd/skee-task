import { actionTypes } from './actionTypes';
import moviesData from '../../movies-data.json';

const initialState = {
  items: [...moviesData.categories],
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ADD_CATEGORY: {
      const newMovie = {
        id: payload.categoryName + new Date(),
        name: payload.categoryName,
        movies: [],
      };
      return {
        items: [...state.items, newMovie],
      };
    }

    case actionTypes.ADD_MOVIE: {
      const categoryIndex = state.items.findIndex(
        (movie) => movie.id === +payload.categoryId
      );
      const newState = {
        ...state,
      };

      newState.items[categoryIndex].movies = [
        ...newState.items[categoryIndex].movies,
        {
          name: payload.movieName,
          description: payload.movieDescription,
          id: payload.movieName + new Date(),
        },
      ];
      return {
        ...newState,
      };
    }

    case actionTypes.DELETE_MOVIE: {
      const categoryIndex = state.items.findIndex(
        (category) => category.id === payload.categoryId
      );


      return {
        ...state,
        items: [ 
          ...state.items,
          state.items[categoryIndex] 
          // [categoryIndex]: {
          //   ...state.items[categoryIndex],
          //   movies: state.items[categoryIndex].movies.filter(
          //     (el) => el.id !== payload.movieId
          //   ),
          // },
         ],
      };
    }

    default:
      return state;
  }
};

export default categoriesReducer;
