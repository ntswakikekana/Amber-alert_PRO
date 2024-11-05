import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import missingPersonsReducer from '../features/missingPersons/missingPersonsSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    missingPersons: missingPersonsReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

