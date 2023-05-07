import { configureStore } from '@reduxjs/toolkit';
import sharedReducer from '../services/state/shared/shared.slice';

export const store = configureStore({
    reducer: {
        sharedReducer
    },
    devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;