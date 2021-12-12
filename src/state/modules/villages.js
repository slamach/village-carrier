import { createSlice } from '@reduxjs/toolkit';
import villageAPI from 'api/villageAPI';
import { incLoading, decLoading, setLostConnection } from './app';

const villagesSlice = createSlice({
  name: 'villages',
  initialState: {
    villages: [],
    villagesErrorMessage: '',
    lastRequestedVillage: null
  },
  reducers: {
    getVillagesSuccess: (state, action) => {
      state.villages = action.payload;
    },
    getVillagesFailure: (state, action) => {
      switch (action.payload.status) {
        default:
          state.villagesErrorMessage = `Непредвиденный ответ ${action.payload.status} от сервера!`;
      }
    },
    getVillageInfoSuccess: (state, action) => {
      state.lastRequestedVillage = action.payload;
      state.villagesErrorMessage = '';
    },
    getVillageInfoFailure: (state, action) => {
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
    if (error.response) {
      dispatch(
        villagesSlice.actions.getVillagesFailure({
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

export const getVillageInfo = (villageId) => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await villageAPI.getVillageInfo(villageId, getState().auth.user.token);
    dispatch(villagesSlice.actions.getVillageInfoSuccess(response.data));
  } catch (error) {
    if (error.response) {
      dispatch(
        villagesSlice.actions.getVillageInfoFailure({
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
