import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moviesToWatch: [],
  moviesWatched: [],
  selectedMovie: null,
  movieReview: '',
  movieRating: null,
  watchDate: new Date(),
};
