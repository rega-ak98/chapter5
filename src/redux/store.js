import { legacy_createStore,compose, applyMiddleware } from 'redux';
import rootReducer from '../../src/redux/reducer/rootReducer';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(...middlewares))
);

export default store;