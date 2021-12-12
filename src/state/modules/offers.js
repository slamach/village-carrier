import { createSlice } from '@reduxjs/toolkit';
import offersAPI from 'api/offersAPI';
import { incLoading, decLoading, setLostConnection } from './app';
import { getUserData } from './profile';

const offersSlice = createSlice({
  name: 'offers',
  initialState: {
    offers: [],
    lastRequstedVillager: null,
    offersErrorMessage: ''
  },
  reducers: {
    getOffersSuccess: (state, action) => {
      state.offers = action.payload.data;
    },
    getOffersFailure: (state, action) => {
      switch (action.payload.status) {
        case 400:
          state.offersErrorMessage = 'Упс! Кажется, такого жителя не существует.';
          break;
        default:
          state.offersErrorMessage = `Непредвиденный ответ ${action.payload.status} от сервера!`;
      }
    },
    getVillagerInfoSuccess: (state, action) => {
      state.lastRequstedVillager = action.payload;
      state.offersErrorMessage = '';
    },
    getVillagerInfoFailure: (state, action) => {
      switch (action.payload.status) {
        default:
          state.offersErrorMessage = `Непредвиденный ответ ${action.payload.status} от сервера!`;
      }
    }
  }
});

export default offersSlice.reducer;

export const getOffers = (villagerId) => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await offersAPI.getOffersByVillagerId(villagerId, getState().auth.user.token);
    dispatch(offersSlice.actions.getOffersSuccess({ data: response.data, villagerId }));
  } catch (error) {
    if (error.response) {
      dispatch(
        offersSlice.actions.getOffersFailure({
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

export const makeNewDeal = (offerId) => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    await offersAPI.makeNewDeal(offerId, getState().auth.user.token);
    dispatch(getUserData());
    dispatch(getOffers(getState().offers.lastRequstedVillager.villagerId));
    dispatch(getVillagerInfo(getState().offers.lastRequstedVillager.villagerId));
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

export const getVillagerInfo = (villagerId) => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    const response = await offersAPI.getVillagerInfo(villagerId, getState().auth.user.token);
    dispatch(offersSlice.actions.getVillagerInfoSuccess(response.data));
  } catch (error) {
    if (error.response) {
      dispatch(
        offersSlice.actions.getVillagerInfoFailure({
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
