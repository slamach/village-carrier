import { configureStore } from '@reduxjs/toolkit';
import appReducer from './modules/app';
import authReducer from './modules/auth';

export default configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer
  }
});
