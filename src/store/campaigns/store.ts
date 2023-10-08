import {configureStore} from '@reduxjs/toolkit';
import campaignsReducer from './campaignsSlice';


export const store = configureStore({
    reducer: {
        campaigns: campaignsReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

