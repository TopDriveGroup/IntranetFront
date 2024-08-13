import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IColaborator } from '../../types/colaborator.types';

interface ColaboratorState {
    colaborator: IColaborator | null;
    loading: boolean;
    colaboratorErrors: string[] | null;
    isAuthenticated: boolean;
}

const initialState: ColaboratorState = {
    colaborator: null,
    loading: false,
    colaboratorErrors: null,
    isAuthenticated: false,
};

const colaboratorSlice = createSlice({
    name: 'colaborator',
    initialState,
    reducers: {
        setColaboratorData: (state, action: PayloadAction<IColaborator | null>) => {
            state.loading = false;
            state.colaborator = action.payload;
            state.isAuthenticated = !!action.payload;
        },
        setColaboratorErrors: (state, action: PayloadAction<string[]>) => {
            state.loading = true;
            state.colaboratorErrors = action.payload;
        },
        postRegisterColaboratorStart: (state, action: PayloadAction<IColaborator | null>) => {
            state.loading = true;
            state.colaborator = action.payload;
            state.colaboratorErrors = null;
        },
        isAuthenticatedStatus: (state, action: PayloadAction<boolean>) => {
            state.isAuthenticated = action.payload;
        },
        postLoginStart: (state, action: PayloadAction<IColaborator>) => {
            state.loading = false;
            state.colaborator = action.payload;
            state.isAuthenticated = true;
        },
        getProfileStart: (state, action: PayloadAction<IColaborator>) => {
            state.loading = false;
            state.colaborator = action.payload;
            state.isAuthenticated = true;
        },
    },
});

export const { setColaboratorData, setColaboratorErrors, postRegisterColaboratorStart, isAuthenticatedStatus, postLoginStart, getProfileStart } = colaboratorSlice.actions;
export default colaboratorSlice.reducer;