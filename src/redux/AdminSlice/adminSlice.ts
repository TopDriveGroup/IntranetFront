import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICollaborator } from '../../types/collaborator.types';

interface AdminCollaboratorState {
    adminCollaborator: ICollaborator | null;
    loading: boolean;
    adminCollaboratorErrors: string[] | null;
}

const initialState: AdminCollaboratorState = {
    adminCollaborator: null,
    loading: false,
    adminCollaboratorErrors: null,
};

const adminCollaboratorSlice = createSlice({
    name: 'adminCollaborator',
    initialState,
    reducers: {
        setAdminCollaboratorData: (state, action: PayloadAction<ICollaborator | null>) => {
            state.loading = false;
            state.adminCollaborator = action.payload;
        },
        setAdminCollaboratorErrors: (state, action: PayloadAction<string[]>) => {
            state.loading = true;
            state.adminCollaboratorErrors = action.payload;
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

export const { setAdminCollaboratorData, setAdminCollaboratorErrors, postAdminCollaboratorRegisterStart, postAdminCollaboratorLoginStart } = adminCollaboratorSlice.actions;
export default adminCollaboratorSlice.reducer;