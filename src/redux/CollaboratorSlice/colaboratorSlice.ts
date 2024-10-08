import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICollaborator } from '../../types/collaborator.types';

interface CollaboratorState {
    collaborator: ICollaborator | null;
    loading: boolean;
    colaboratorErrors: string[] | null;
    isAuthenticated: boolean;
}

const initialState: CollaboratorState = {
    collaborator: null,
    loading: false,
    colaboratorErrors: null,
    isAuthenticated: false,
};

const colaboratorSlice = createSlice({
    name: 'collaborator',
    initialState,
    reducers: {
        setCollaboratorData: (state, action: PayloadAction<ICollaborator | null>) => {
            state.loading = false;
            state.collaborator = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        setCollaboratorErrors: (state, action: PayloadAction<string[]>) => {
            state.loading = true;
            state.colaboratorErrors = action.payload;
        },
        postCollaboratorRegisterStart: (state, action: PayloadAction<ICollaborator | null>) => {
            state.loading = true;
            state.collaborator = action.payload;
            state.colaboratorErrors = null;
        },
        isAuthenticatedStatus: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
        loginStart: (state, action: PayloadAction<ICollaborator>) => {
            state.loading = false;
            state.collaborator = action.payload;
            state.isAuthenticated = true;
        },
        profileStart: (state, action: PayloadAction<ICollaborator>) => {
            state.loading = false;
            state.collaborator = action.payload;
            state.isAuthenticated = true;
        },
        getCollaboratorProfileStart: (state, action: PayloadAction<ICollaborator>) => {
            state.loading = false;
            state.collaborator = action.payload;
            state.isAuthenticated = true;
        },
        sendDocumentToSharePointStart: (state) => {
            state.loading = false;
            state.colaboratorErrors = null;
        },
        logoutStart: (state) => {
            state.loading = false;
            state.isAuthenticated = false;
        },
    },
});

export const { setCollaboratorData, setCollaboratorErrors, postCollaboratorRegisterStart, isAuthenticatedStatus, loginStart, profileStart, getCollaboratorProfileStart, sendDocumentToSharePointStart, logoutStart } = colaboratorSlice.actions;
export default colaboratorSlice.reducer;