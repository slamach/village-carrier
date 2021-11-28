import { createSlice } from '@reduxjs/toolkit';
import offersAPI from 'api/offersAPI';
import { incLoading, decLoading } from './app';
import { getUserData } from './profile';

const offersSlice = createSlice({
  name: 'offers',
  initialState: {
    offers: [],
    lastRequstedVillagerId: -1,
    offersErrorMessage: ''
  },
  reducers: {
    getOffersSuccess: (state, action) => {
      state.offers = action.payload.data;
      state.lastRequstedVillagerId = action.payload.villagerId;
    },
    getOffersFailure: (state, action) => {
      // TODO: Разобрать ошибки
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
    dispatch(
      offersSlice.actions.getOffersFailure({
        status: error.response.status,
        data: error.response.data
      })
    );
  }
  dispatch(decLoading());
};

export const makeNewDeal = (offerId) => async (dispatch, getState) => {
  dispatch(incLoading());
  try {
    await offersAPI.makeNewDeal(offerId, getState().auth.user.token);
    dispatch(getUserData());
    dispatch(getOffers(getState().offers.lastRequstedVillagerId));
  } catch (error) {
    // FIXME: Добавить обработку ошибок
    console.log(`${error.response.status}: ${error.message}`);
  }
  dispatch(decLoading());
};
