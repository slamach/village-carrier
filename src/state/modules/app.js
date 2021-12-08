import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    loading: 0,
    lostConnection: false
  },
  reducers: {
    incLoading: (state, action) => {
      state.loading += 1;
    },
    decLoading: (state, action) => {
      state.loading -= 1;
    },
    setLostConnection: (state, action) => {
      state.lostConnection = true;
    }
  }
});

export default appSlice.reducer;
export const { incLoading, decLoading, setLostConnection } = appSlice.actions;
