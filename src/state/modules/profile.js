import { createSlice } from '@reduxjs/toolkit';
import playerAPI from 'api/playerAPI';
import { incLoading, decLoading } from './app';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userEmeralds: 0,
    inventory: [],
    profileErrorMessage: ''
  },
  reducers: {
    getUserDataSuccess: (state, action) => {
      state.userEmeralds = action.payload.amountOfEmeralds;
    },
    getUserDataFailure: (state, action) => {
      state.userEmeralds = action.payload.amountOfEmeralds;
    },
    getInventorySuccess: (state, action) => {
      state.inventory = action.payload;
    },
    getInventoryFailure: (state, action) => {
      // TODO: Разобрать ошибки
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
    dispatch(
      profileSlice.actions.getUserDataFailure({
        status: error.response.status,
        data: error.response.data
      })
    );
  }
  dispatch(decLoading());
};

export const getInventory = () => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await playerAPI.getInventory(getState().auth.user.id, getState().auth.user.token);
    dispatch(profileSlice.actions.getInventorySuccess(response.data));
  } catch (error) {
    dispatch(
      profileSlice.actions.getInventoryFailure({
        status: error.response.status,
        data: error.response.data
      })
    );
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
    // FIXME: Добавить обработку ошибок
    console.log(`${error.response.status}: ${error.message}`);
  }
  dispatch(decLoading());
};
