import { createSlice } from '@reduxjs/toolkit';
import villageAPI from 'api/villageAPI';
import { incLoading, decLoading, setLostConnection } from './app';
import { getUserData } from './profile';

const villagesSlice = createSlice({
  name: 'villages',
  initialState: {
    villages: [],
    villagesErrorMessage: '',
    lastRequestedVillage: null,
    raidStatus: 0
  },
  reducers: {
    getVillagesSuccess: (state, action) => {
      state.villages = action.payload;
      state.raidStatus = 0;
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
    },
    fightRaidSuccess: (state, action) => {
      if (action.payload.win) {
        state.lastRequestedVillage.hasRaid = false;
        state.raidStatus = 1;
      } else {
        state.raidStatus = 2;
      }
    },
    fightRaidFailure: (state, action) => {
      switch (action.payload.status) {
        case 400:
          state.raidStatus = 3;
          break;
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

export const fightRaid = (raidId) => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await villageAPI.fightRaid(raidId, getState().auth.user.token);
    dispatch(villagesSlice.actions.fightRaidSuccess(response.data));
    dispatch(getUserData());
  } catch (error) {
    if (error.response) {
      dispatch(
        villagesSlice.actions.fightRaidFailure({
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
