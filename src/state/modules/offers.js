import { createSlice } from '@reduxjs/toolkit';
import offersAPI from 'api/offersAPI';
import { incLoading, decLoading } from './app';

const offersSlice = createSlice({
  name: 'offers',
  initialState: {
    offers: [],
    offersErrorMessage: ''
  },
  reducers: {
    getOffersSuccess: (state, action) => {
      state.offers = action.payload;
    },
    getOffersFailure: (state, action) => {
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
    dispatch(offersSlice.actions.getOffersSuccess(response.data));
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
