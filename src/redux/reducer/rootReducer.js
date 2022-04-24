import { combineReducers } from 'redux';
import carReducer from './carReducer';
import detailReducer from './detailReducer';

export default combineReducers({
  car: carReducer,
  carDetail: detailReducer
});