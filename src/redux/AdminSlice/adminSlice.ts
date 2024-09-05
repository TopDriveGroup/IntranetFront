import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICollaborator } from '../../types/collaborator.types';

interface AdminCollaboratorState {
    adminCollaborator: ICollaborator | null;
    loading: boolean;
    adminCollaboratorErrors: string[] | null;
    isAdminCollaboratorAuthenticated: boolean;
}

const initialState: AdminCollaboratorState = {
    adminCollaborator: null,
    loading: false,
    adminCollaboratorErrors: null,
    isAdminCollaboratorAuthenticated: false,
};

const adminCollaboratorSlice = createSlice({
    name: 'adminCollaborator',
    initialState,
    reducers: {
        setAdminCollaboratorData: (state, action: PayloadAction<ICollaborator | null>) => {
            state.loading = false;
            state.adminCollaborator = action.payload;
            state.isAdminCollaboratorAuthenticated = !!action.payload;
        },
        setAdminCollaboratorErrors: (state, action: PayloadAction<string[]>) => {
            state.loading = true;
            state.adminCollaboratorErrors = action.payload;
        },
        isAdminCollaboratorAuthenticatedStatus: (state, action: PayloadAction<boolean>) => {
            state.isAdminCollaboratorAuthenticated = action.payload;
        },
        postAdminCollaboratorRegisterStart: (state, action: PayloadAction<ICollaborator | null>) => {
            state.loading = true;
            state.adminCollaborator = action.payload;
            state.adminCollaboratorErrors = null;
        },
        postAdminCollaboratorLoginStart: (state, action: PayloadAction<ICollaborator>) => {
            state.loading = false;
            state.adminCollaborator = action.payload;
        },
    },
});

export const { setAdminCollaboratorData, setAdminCollaboratorErrors, isAdminCollaboratorAuthenticatedStatus, postAdminCollaboratorRegisterStart, postAdminCollaboratorLoginStart } = adminCollaboratorSlice.actions;
export default adminCollaboratorSlice.reducer;