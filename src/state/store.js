import { configureStore } from '@reduxjs/toolkit';
import appReducer from './modules/app';
import authReducer from './modules/auth';
import dashboardReducer from './modules/dashboard';

export default configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    dashboard: dashboardReducer
  }
});
