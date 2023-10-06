import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import campaignsReducer from './campaignsSlice';

export const store = configureStore({
  reducer: {
    campaigns: campaignsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
