import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    loading: 0
  },
  reducers: {
    incLoading: (state, action) => {
      state.loading += 1;
    },
    decLoading: (state, action) => {
      state.loading -= 1;
    }
  }
});

export default appSlice.reducer;
export const { incLoading, decLoading } = appSlice.actions;
