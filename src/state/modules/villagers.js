import { createSlice } from '@reduxjs/toolkit';
import villageAPI from 'api/villageAPI';
import { incLoading, decLoading, setLostConnection } from './app';

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
      switch (action.payload.status) {
        // FIXME: Исправить код ошибки на несуществующую деревню
        case 500:
          state.villagersErrorMessage = 'Упс! Кажется, такой деревни не существует.';
          break;
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
    if (error.response) {
      dispatch(
        villagersSlice.actions.getVillagersFailure({
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
