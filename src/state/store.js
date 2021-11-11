import { configureStore } from '@reduxjs/toolkit';
import appReducer from './modules/app';
import authReducer from './modules/auth';
import apiMiddleware from './middleware/apiMiddleware';

export default configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware)
});
