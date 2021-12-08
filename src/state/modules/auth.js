import { createSlice } from '@reduxjs/toolkit';
import authAPI from 'api/authAPI';
import { incLoading, decLoading } from './app';

const user = JSON.parse(localStorage.getItem('user'));

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: user ? user : undefined,
    authErrorMessage: ''
  },
  reducers: {
    authSuccess: (state, action) => {
      state.user = action.payload;
    },
    authFailure: (state, action) => {
      if (!action.payload) {
        state.authErrorMessage = `Соединение с сервером потеряно`;
        return;
      }
      switch (action.payload.status) {
        case 400:
          state.authErrorMessage = action.payload.data.message;
          break;
        default:
          state.authErrorMessage = `Непредвиденный ответ ${action.payload.status} от сервера`;
      }
    },
    clearAuthErrorMessage: (state, action) => {
      state.authErrorMessage = '';
    },
    logout: (state, action) => {
      state.user = undefined;
    }
  }
});

export default authSlice.reducer;
export const { clearAuthErrorMessage } = authSlice.actions;

export const login = (username, password) => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await authAPI.login(username, password);
    const user = {
      username,
      id: response.data.playerId,
      token: response.data.token
    };
    dispatch(authSlice.actions.authSuccess(user));
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    dispatch(
      authSlice.actions.authFailure(error.response)
    );
  }
  dispatch(decLoading());
};

export const register = (username, password) => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await authAPI.register(username, password);
    const user = {
      username,
      id: response.data.playerId,
      token: response.data.token
    };
    dispatch(authSlice.actions.authSuccess(user));
    localStorage.setItem('user', JSON.stringify(user));
  } catch (error) {
    dispatch(
      authSlice.actions.authFailure(error.response)
    );
  }
  dispatch(decLoading());
};

export const logout = () => async (dispatch, getState) => {
  dispatch(authSlice.actions.logout());
  localStorage.removeItem('user');
};
