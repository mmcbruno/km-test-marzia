import {applyMiddleware, configureStore} from '@reduxjs/toolkit';
import campaignsReducer from './campaignsSlice';
import logger from 'redux-logger';

const enhancers = [applyMiddleware(logger)];

export const setupStore = (preloadedState?: RootState) => {
    return configureStore({
        reducer: {
            campaigns: campaignsReducer,
        },
        preloadedState,
        enhancers
    })
}

export const store = configureStore({
    reducer: {
        campaigns: campaignsReducer,
    },
    enhancers,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
