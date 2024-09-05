import { configureStore } from '@reduxjs/toolkit';
import colaboratorReducer from './CollaboratorSlice/colaboratorSlice';
import sharePointReducer from './SharePoint/sharePointSlice';

// Define RootState
export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        collaborator: colaboratorReducer,
        sharePoint: sharePointReducer,
    },
});

export type AppDispatch = typeof store.dispatch;