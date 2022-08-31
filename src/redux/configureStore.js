import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './Mission';
import dragonReducer from './dragons/dragons';

const rootReducer = combineReducers({
  missions: missionReducer,
  dragons: dragonReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
