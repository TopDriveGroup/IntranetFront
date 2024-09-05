/* eslint-disable @typescript-eslint/no-explicit-any */
import { AppDispatch } from '../store';
import axiosInstance from '../../api/axios';
import { setDocumentToSharePointErrors, sendDocumentToSharePointStart } from './sharePointSlice';

//ENVIA CORREO ELECTRONICO A UN CLIENTE REGISTRADO EN EL crM
export const sendDocumentToSharePoint = (sendEmailData: any) => async (dispatch: AppDispatch) => {
// export const sendDocumentToSharePoint = (token: string, sendEmailData: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(sendDocumentToSharePointStart());
        return await axiosInstance.post(`/share-point`, sendEmailData);
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setDocumentToSharePointErrors(error.response?.data));
        } else {
            dispatch(setDocumentToSharePointErrors(error));
        }
    }
};