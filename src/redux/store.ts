import { configureStore } from '@reduxjs/toolkit';
import colaboratorReducer from './CollaboratorSlice/colaboratorSlice';

// Define RootState
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        collaborator: colaboratorReducer,
    },
});

export type AppDispatch = typeof store.dispatch;