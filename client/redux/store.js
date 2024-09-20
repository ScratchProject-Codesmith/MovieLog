import { configureStore } from '@reduxjs/toolit';
import movieReducer from './movie-reducers';

const store = configureStore({
  reducer: movieReducer,
});

export default store;
