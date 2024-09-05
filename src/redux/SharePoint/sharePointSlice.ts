/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SharePointState {
    sharePoint: any | null;
    loading: boolean;
    sharePointErrors: string[] | null;
}

const initialState: SharePointState = {
    sharePoint: null,
    loading: false,
    sharePointErrors: null,
};

const colaboratorSlice = createSlice({
    name: 'sharePoint',
    initialState,
    reducers: {
        sendDocumentToSharePointStart: (state) => {
            state.loading = false;
            state.sharePointErrors = null;
        },
        setDocumentToSharePointErrors: (state, action: PayloadAction<string[]>) => {
            state.loading = true;
            state.sharePointErrors = action.payload;
        },
    },
});

export const { sendDocumentToSharePointStart, setDocumentToSharePointErrors } = colaboratorSlice.actions;
export default colaboratorSlice.reducer;