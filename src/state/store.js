import { configureStore } from '@reduxjs/toolkit';
import appReducer from './modules/app';
import authReducer from './modules/auth';
import villagesReducer from './modules/villages';
import villagersReducer from './modules/villagers';
import offersReducer from './modules/offers';
import profileReducer from './modules/profile';

export default configureStore({
  reducer: {
    app: appReducer,
    auth: authReducer,
    villages: villagesReducer,
    villagers: villagersReducer,
    offers: offersReducer,
    profile: profileReducer
  }
});
