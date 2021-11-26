import { combineReducers } from 'redux';
import categoriesReducer from '../store/categories/reducer';
import dataReducer from '../store/data/reducer';

const rootReducer = combineReducers({
  // categories: categoriesReducer,
  data: dataReducer,
});

export default rootReducer;
