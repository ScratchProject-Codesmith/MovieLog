import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

//Async thunk to handle login... this will set JWT in local storage
export const login = createAsyncThunk('auth/login', async (credentials) => {
  const response = await fetch('http://localhost:3000/database/login', {
    //MIGHT NEED TO CHANGE THIS LATER
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
  });
  if (!response.ok) throw new Error('Invalid Username/Password');
  const data = await response.json();
  //store JWT from frontend
  localStorage.setItem('token', data.token);
  return data.user;
});

//Async thunk to handle signup.. this will also store the JWT locally
export const signup = createAsyncThunk('auth/signup', async (userData) => {
  const response = await fetch('http://localhost:3000/database/signup', {
    //MIGHT NEED TO CHANGE THIS!
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  if (!response.ok) throw new Error('Error in signup');
  const data = await response.json();
  //store JWT from frontend
  localStorage.setItem('token', data.token);
  return data.user;
});

//Logout action// return dispatches the logout action type
export const logout = () => {
  localStorage.removeItem('token');
  return { type: 'auth/logout' };
};

//create auth slice to handle authorization state. The only main reducer for this will be logout.
export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      //this will ideally clear the user data
      state.user = null;
      //reset loading to false
      state.loading = false;
      //remove web token from local storage on logout
      localStorage.removeItem('token');
    },
  },

  //CreateSlice has built in builder method,
  //comes with its own little state object
  //pending
  //fulfilled
  //error
  extraReducers: (builder) => {
    builder
      //if pending....loading!
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //if fulfilled...do something with the data!
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      //if rejected... Error message
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //SIGNUP ACTIONS
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      //success! set the user data.
      .addCase(signup.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { logout: logoutAction } = authSlice.actions;
export default authSlice.reducer;
