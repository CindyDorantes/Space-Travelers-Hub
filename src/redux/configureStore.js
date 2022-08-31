import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
// import rocketReducer from './rockets/rockets';
// import rocketReducer from './rockets/rockets';
import rocketReducer from './rockets/rockets';

const reducer = combineReducers({
  Rockets: rocketReducer,
});

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
});

export default store;
