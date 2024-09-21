import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//Query database for search results
export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async (query) => {
    const response = await fetch(`/movies?=${query}`);
    if (!response.ok) {
      throw new Error('Cannot retrieve movie search results');
    }
    const movies = response.json();
    return movies;
  }
);

const initialState = {
  moviesToWatch: [],
  watchedMovies: [],
  selectedMovie: null,
  movieComment: '',
  //searchResults: [],
  date: new Date(),
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    addWatchedMovie: (state, action) => {
      return;
    },
    addToWatchMovie: (state, action) => {
      return;
    },
    addMovieComment: (state, action) => {
      return;
    },
    updateSearchQuery: (state, action) => {
      return;
    },
    //searchMovieDatabase: (state, action) => {}, Maybe don't need?
  },
});

export const {
  addWatchedMovie,
  addToWatchMovie,
  addMovieComment,
  updateSearchQuery,
  searchMovieDatabase,
} = movieSlice.actions;

export default movieSlice.reducer;
