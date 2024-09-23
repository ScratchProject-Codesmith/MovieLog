import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

//Query database for search results
export const searchMovies = createAsyncThunk(
  'movies/searchMovies',
  async (query) => {
    const response = await fetch(`/movies/${query}`);
    if (!response.ok) {
      throw new Error('Cannot retrieve movie search results');
    }
    const movies = response.json();
    console.log(movies);
    return movies;
  }
);

export const getWatchedMovies = createAsyncThunk(
  'movies/watchedMovies',
  async (id) => {
    const response = await fetch(`database/movie/getInfo/${id}`);
    if (!response.ok) {
      throw new Error('Cannot retrieve movie watched list');
    }
    const movies = response.json();
    console.log(movies);
    return movies;
  }
);

export const addWatchedMovie = createAsyncThunk(
  'movies/postWatchedMovie',
  async (comment, rating) => {
    const response = await fetch(`database/movie/`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ comment: comment, rating: rating }),
    });
    if (!response.ok) {
      throw new Error('Cannot add movie to watched list');
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
  query: '',
  searchResults: [],
  //date: new Date(),
};

export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    /*addWatchedMovie: (state, action) => {
      return;
    },*/
    addToWatchMovie: (state, action) => {
      return;
    },
    addMovieComment: (state, action) => {
      return;
    },
    updateSearchQuery: (state, action) => {
      state.query = action.payload;
    },
    searchMovieDatabase: (state, action) => {
      state.searchResults = action.payload;
    }, //Maybe don't need?
  },
});

export const {
  addToWatchMovie,
  addMovieComment,
  updateSearchQuery,
  searchMovieDatabase,
} = movieSlice.actions;

export default movieSlice.reducer;
