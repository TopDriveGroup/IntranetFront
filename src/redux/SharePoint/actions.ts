/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from '../store';
import axiosInstance from '../../api/axios';
import { sendDocumentToSharePointStart, setDocumentToSharePointErrors } from './sharePointSlice';

// Enviar archivo a SharePoint
export const sendDocumentToSharePoint = (formData: FormData) => async (dispatch: AppDispatch) => {
    try {
        dispatch(sendDocumentToSharePointStart());
        return await axiosInstance.post(`/share-point/upload/root/parent`, formData);
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setDocumentToSharePointErrors(error.response?.data));
        } else {
            dispatch(setDocumentToSharePointErrors(error));
        }
    }
};