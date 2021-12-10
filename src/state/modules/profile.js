import { createSlice } from '@reduxjs/toolkit';
import playerAPI from 'api/playerAPI';
import { incLoading, decLoading, setLostConnection } from './app';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userEmeralds: 0,
    inventory: [],
    kits: [],
    profileErrorMessage: ''
  },
  reducers: {
    getUserDataSuccess: (state, action) => {
      state.userEmeralds = action.payload.amountOfEmeralds;
    },
    getUserDataFailure: (state, action) => {
      switch (action.payload.status) {
        default:
          state.profileErrorMessage = `Непредвиденный ответ ${action.payload.status} от сервера!`;
      }
    },
    getInventorySuccess: (state, action) => {
      state.inventory = action.payload;
    },
    getInventoryFailure: (state, action) => {
      switch (action.payload.status) {
        default:
          state.profileErrorMessage = `Непредвиденный ответ ${action.payload.status} от сервера!`;
      }
    },
    getKitsSuccess: (state, action) => {
      state.kits = action.payload;
    },
    getKitsFailure: (state, action) => {
      switch (action.payload.status) {
        default:
          state.profileErrorMessage = `Непредвиденный ответ ${action.payload.status} от сервера!`;
      }
    }
  }
});

export default profileSlice.reducer;

export const getUserData = () => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await playerAPI.getUserData(getState().auth.user.token);
    dispatch(profileSlice.actions.getUserDataSuccess(response.data));
  } catch (error) {
    if (error.response) {
      dispatch(
        profileSlice.actions.getUserDataFailure({
          status: error.response.status,
          data: error.response.data
        })
      );
    } else {
      dispatch(setLostConnection());
    }
  }
  dispatch(decLoading());
};

export const getInventory = () => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await playerAPI.getInventory(
      getState().auth.user.id,
      getState().auth.user.token
    );
    dispatch(profileSlice.actions.getInventorySuccess(response.data));
  } catch (error) {
    if (error.response) {
      dispatch(
        profileSlice.actions.getInventoryFailure({
          status: error.response.status,
          data: error.response.data
        })
      );
    } else {
      dispatch(setLostConnection());
    }
  }
  dispatch(decLoading());
};

export const makeNewWithdrawal = () => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    await playerAPI.makeNewWithdrawal(getState().auth.user.token);
    dispatch(getUserData());
    dispatch(getInventory());
  } catch (error) {
    if (error.response) {
      // TODO: Добавить обработку ошибок
      console.log(`${error.response.status}: ${error.message}`);
    } else {
      dispatch(setLostConnection());
    }
  }
  dispatch(decLoading());
};

export const getKits = () => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await playerAPI.getKits(getState().auth.user.token);
    dispatch(profileSlice.actions.getKitsSuccess(response.data));
  } catch (error) {
    if (error.response) {
      dispatch(
        profileSlice.actions.getKitsFailure({
          status: error.response.status,
          data: error.response.data
        })
      );
    } else {
      dispatch(setLostConnection());
    }
  }
  dispatch(decLoading());
};

export const obtainKit = (kitId) => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    await playerAPI.obtainKit(kitId, getState().auth.user.token);
    dispatch(getUserData());
    dispatch(getInventory());
    dispatch(getKits());
  } catch (error) {
    if (error.response) {
      // TODO: Добавить обработку ошибок
      console.log(`${error.response.status}: ${error.message}`);
    } else {
      dispatch(setLostConnection());
    }
  }
  dispatch(decLoading());
};
