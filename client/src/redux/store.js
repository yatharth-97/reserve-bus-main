import { combineReducers, configureStore } from '@reduxjs/toolkit';
import alertsSlice from './alertsSlice.js';
import usersSlice from './usersSlice.js';

const rootReducer = combineReducers({
  alerts: alertsSlice,
  users: usersSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
