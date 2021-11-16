import { createSlice } from '@reduxjs/toolkit';
import authAPI from 'api/authAPI';
import { setLoading } from './app';

const user = JSON.parse(localStorage.getItem('user'));

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loggedIn: user ? true : false,
    user: user ? user : undefined,
    authErrorMessage: ''
  },
  reducers: {
    authSuccess: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
    authFailure: (state, action) => {
      switch (action.payload.status) {
        case 400:
          state.authErrorMessage = 'Данные введены неверно!'
          break;
        default:
          state.authErrorMessage = `Непредвиденный ответ ${action.payload.status} от сервера!`;
      }
    },
    logout: (state, action) => {
      state.user = undefined;
      state.loggedIn = false;
    }
  }
});

export default authSlice.reducer;

export const login = (username, password) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const response = await authAPI.login(username, password);
    const user = {
      username,
      token: response.data.token
    }
    dispatch(
      authSlice.actions.authSuccess(user)
    );
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    dispatch(
      authSlice.actions.authFailure({
        status: error.response.status,
        data: error.response.data
      })
    );
  }
  dispatch(setLoading(false));
}

export const register = (username, password) => async (dispatch, getState) => {
  dispatch(setLoading(true));
  try {
    const response = await authAPI.register(username, password);
    const user = {
      username,
      token: response.data.token
    }
    dispatch(
      authSlice.actions.authSuccess(user)
    );
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    dispatch(
      authSlice.actions.authFailure({
        status: error.response.status,
        data: error.response.data
      })
    );
  }
  dispatch(setLoading(false));
}

export const logout = () => async (dispatch, getState) => {
  dispatch(
    authSlice.actions.logout()
  );
  localStorage.removeItem('user');
}
