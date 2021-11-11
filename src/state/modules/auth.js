import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: undefined
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export default authSlice.reducer;
export const {
  setUser
} = authSlice.actions;
