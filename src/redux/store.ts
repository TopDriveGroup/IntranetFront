import { configureStore } from '@reduxjs/toolkit';
import colaboratorReducer from './ColaboratorSlice/colaboratorSlice';

// Define RootState
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        colaborator: colaboratorReducer,
    },
});

export type AppDispatch = typeof store.dispatch;