/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from '../store';
import axiosInstance from '../../api/axios';
import { setDocumentToSharePointErrors, sendDocumentToSharePointStart } from './sharePointSlice';

// Enviar archivo a SharePoint
export const sendDocumentToSharePoint = (formData: FormData) => async (dispatch: AppDispatch) => {
    try {
        dispatch(sendDocumentToSharePointStart());
        const response = await axiosInstance.put('/share-point', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',  // axios lo maneja por defecto, pero es una buena práctica incluirlo
            },
        });
        return response; 
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setDocumentToSharePointErrors(error.response?.data));
        } else {
            dispatch(setDocumentToSharePointErrors(error.message));
        }
    }
};