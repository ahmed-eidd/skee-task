import { actionTypes } from './actionTypes';
import moviesData from '../../movies-data.json';

const initialState = {
  items: [...moviesData.categories],
};

const categoriesReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.ADD_CATEGORY: {
      return {
        items: [...state.items, payload],
      };
    }

    case actionTypes.ADD_MOVIE: {
      const movieCategory = state.items.findIndex((movie) => movie.id === +payload.id );
      console.log(movieCategory);
      state.items[movieCategory].movies = [
        ...state.items[movieCategory].movies,
        payload,
      ];
      return {
        items: [...state.items],
      };
    }

    default:
      return state;
  }
};

export default categoriesReducer;
