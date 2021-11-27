import { createSlice } from '@reduxjs/toolkit';
import villageAPI from 'api/villageAPI';
import { incLoading, decLoading } from './app';

const villagesSlice = createSlice({
  name: 'villages',
  initialState: {
    villages: [],
    villagesErrorMessage: ''
  },
  reducers: {
    getVillagesSuccess: (state, action) => {
      state.villages = action.payload;
    },
    getVillagesFailure: (state, action) => {
      // TODO: Разобрать ошибки
      switch (action.payload.status) {
        default:
          state.villagesErrorMessage = `Непредвиденный ответ ${action.payload.status} от сервера!`;
      }
    }
  }
});

export default villagesSlice.reducer;

export const getVillages = () => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await villageAPI.getVillages(getState().auth.user.token);
    dispatch(villagesSlice.actions.getVillagesSuccess(response.data));
  } catch (error) {
    dispatch(
      villagesSlice.actions.getVillagesFailure({
        status: error.response.status,
        data: error.response.data
      })
    );
  }
  dispatch(decLoading());
};
