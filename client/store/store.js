import { configureStore } from '@reduxjs/toolkit';
import movieSlice from '../reducers/movieSlice';
import authSlice from '../reducers/authSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    movies: movieSlice,
  },
});

export default store;
