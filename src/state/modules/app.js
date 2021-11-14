import { createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    loading: false
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export default appSlice.reducer;
export const {
  setLoading
} = appSlice.actions;
