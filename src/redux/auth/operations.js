import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { checkErrors, checkSuccesfull } from 'utilities/checks';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

// Add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

/*
 * POST @ /users/signup
 * body: { name, email, password }
 * 201 User created.
 * 400 User creation error.
 * 500 Server error.
 */

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('users/signup', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(response.data.token);
      toast.success(checkSuccesfull('users/signup', response.status));
      return response.data;
    } catch (error) {
      toast.error(checkErrors('users/signup', error.response.status));
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/login
 * body: { email, password }
 * 200 	User is logged in.
 * 400 Login error
 */

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const response = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(response.data.token);
      toast.success(checkSuccesfull('users/login', response.status));

      return response.data;
    } catch (error) {
      toast.error(checkErrors('users/login', error.response.status));
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 * 200 The uset is logged out
 * 401 Missing header with authorization token
 * 500 Server error
 */

export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();

    toast.success(checkSuccesfull('users/logout', 200));
  } catch (error) {
    toast.error(checkErrors('users/logout', error.response.status));
    return thunkApi.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    // Reading the token from the state via getState()
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      // toast.error('Unable to fetch user');
      return thunkApi.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const response = await axios.get('users/current');
      // toast.success(checkSuccesfull('users/current', response.status));

      return response.data;
    } catch (error) {
      toast.error(checkErrors('users/current', error.response.status));

      return thunkApi.rejectWithValue(error.message);
    }
  }
);
