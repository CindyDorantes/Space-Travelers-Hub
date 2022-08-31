import { combineReducers, configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import missionReducer from './Mission';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({
  Rockets: rocketReducer,
  missions: missionReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
