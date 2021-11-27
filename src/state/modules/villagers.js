import { createSlice } from '@reduxjs/toolkit';
import villageAPI from 'api/villageAPI';
import { incLoading, decLoading } from './app';

const villagersSlice = createSlice({
  name: 'villagers',
  initialState: {
    villagers: [],
    villagersErrorMessage: ''
  },
  reducers: {
    getVillagersSuccess: (state, action) => {
      state.villagers = action.payload;
    },
    getVillagersFailure: (state, action) => {
      // TODO: Разобрать ошибки
      switch (action.payload.status) {
        default:
          state.villagersErrorMessage = `Непредвиденный ответ ${action.payload.status} от сервера!`;
      }
    }
  }
});

export default villagersSlice.reducer;

export const getVillagers = (villageId) => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await villageAPI.getVillagers(villageId, getState().auth.user.token);
    dispatch(villagersSlice.actions.getVillagersSuccess(response.data));
  } catch (error) {
    dispatch(
      villagersSlice.actions.getVillagersFailure({
        status: error.response.status,
        data: error.response.data
      })
    );
  }
  dispatch(decLoading());
};
