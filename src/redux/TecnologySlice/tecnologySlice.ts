import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICollaborator } from '../../types/collaborator.types';

interface TecnologyCollaboratorState {
    tecnologyCollaborator: ICollaborator | null;
    loading: boolean;
    tecnologyCollaboratorErrors: string[] | null;
}

const initialState: TecnologyCollaboratorState = {
    tecnologyCollaborator: null,
    loading: false,
    tecnologyCollaboratorErrors: null,
};

const tecnologyCollaboratorSlice = createSlice({
    name: 'tecnologyCollaborator',
    initialState,
    reducers: {
        setTecnologyCollaboratorData: (state, action: PayloadAction<ICollaborator | null>) => {
            state.loading = false;
            state.tecnologyCollaborator = action.payload;
        },
        setTecnologyCollaboratorErrors: (state, action: PayloadAction<string[]>) => {
            state.loading = true;
            state.tecnologyCollaboratorErrors = action.payload;
        },
        postTecnologyCollaboratorRegisterStart: (state, action: PayloadAction<ICollaborator | null>) => {
            state.loading = true;
            state.tecnologyCollaborator = action.payload;
            state.tecnologyCollaboratorErrors = null;
        },
        postTecnologyCollaboratorLoginStart: (state, action: PayloadAction<ICollaborator>) => {
            state.loading = false;
            state.tecnologyCollaborator = action.payload;
        },
    },
});

export const { setTecnologyCollaboratorData, setTecnologyCollaboratorErrors, postTecnologyCollaboratorRegisterStart, postTecnologyCollaboratorLoginStart } = tecnologyCollaboratorSlice.actions;
export default tecnologyCollaboratorSlice.reducer;