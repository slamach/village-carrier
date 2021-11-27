import { createSlice } from '@reduxjs/toolkit';
import playerAPI from 'api/playerAPI';
import { incLoading, decLoading } from './app';

const profileSlice = createSlice({
  name: 'profile',
  initialState: {
    userEmeralds: 0,
    profileErrorMessage: ''
  },
  reducers: {
    getUserDataSuccess: (state, action) => {
      state.userEmeralds = action.payload.amountOfEmeralds;
    },
    getUserDataFailure: (state, action) => {
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
