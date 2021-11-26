import { createSlice } from '@reduxjs/toolkit';
import villageAPI from 'api/villageAPI';
import playerAPI from 'api/playerAPI';
import { incLoading, decLoading } from './app';

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    userEmeralds: 0,
    villages: [],
    villagers: [],
    dashboardErrorMessage: ''
  },
  reducers: {
    getVillagesSuccess: (state, action) => {
      state.villages = action.payload;
    },
    getVillagesFailure: (state, action) => {
      switch (action.payload.status) {
        default:
          state.dashboardErrorMessage = `Непредвиденный ответ ${action.payload.status} от сервера!`;
      }
    },
    getUserDataSuccess: (state, action) => {
      state.userEmeralds = action.payload.amountOfEmeralds;
    },
    getUserDataFailure: (state, action) => {
      switch (action.payload.status) {
        default:
          state.dashboardErrorMessage = `Непредвиденный ответ ${action.payload.status} от сервера!`;
      }
    },
    getVillagersSuccess: (state, action) => {
      state.villagers = action.payload;
    },
    getVillagersFailure: (state, action) => {
      switch (action.payload.status) {
        default:
          state.dashboardErrorMessage = `Непредвиденный ответ ${action.payload.status} от сервера!`;
      }
    }
  }
});

export default dashboardSlice.reducer;

export const getVillages = () => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await villageAPI.getVillages(getState().auth.user.token);
    dispatch(dashboardSlice.actions.getVillagesSuccess(response.data));
  } catch (error) {
    dispatch(
      dashboardSlice.actions.getVillagesFailure({
        status: error.response.status,
        data: error.response.data
      })
    );
  }
  dispatch(decLoading());
};

export const getUserData = () => async (dispatch, getState) => {
  // FIXME: Починить корс
  dispatch(incLoading());
  setTimeout(() => {
    dispatch(
      dashboardSlice.actions.getUserDataSuccess({
        id: 3,
        username: 'test123456',
        amountOfEmeralds: 10,
        tradingExperience: 0
      })
    );
    dispatch(decLoading());
  }, 2000);
  // try {
  //   const response = await playerAPI.getUserData(getState().auth.user.token);
  //   dispatch(dashboardSlice.actions.getUserDataSuccess(response.data));
  // } catch (error) {
  //   dispatch(
  //     dashboardSlice.actions.getUserDataFailure({
  //       status: error.response.status,
  //       data: error.response.data
  //     })
  //   );
  // }
  // dispatch(decLoading());
};

export const getVillagers = (villageId) => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await villageAPI.getVillagers(villageId, getState().auth.user.token);
    dispatch(dashboardSlice.actions.getVillagersSuccess(response.data));
  } catch (error) {
    dispatch(
      dashboardSlice.actions.getVillagersFailure({
        status: error.response.status,
        data: error.response.data
      })
    );
  }
  dispatch(decLoading());
};
