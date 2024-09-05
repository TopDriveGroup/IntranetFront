/* eslint-disable @typescript-eslint/no-explicit-any */
import jsCookie from 'js-cookie';
import { AppDispatch } from '../store';
import axiosInstance from '../../api/axios';
import { ICollaborator } from '../../types/collaborator.types';
import { setAdminCollaboratorData, setAdminCollaboratorErrors, isAdminCollaboratorAuthenticatedStatus, postAdminCollaboratorRegisterStart, postAdminCollaboratorLoginStart } from './adminSlice';

//REGISTRO DE ADMINS
export const postAdminCollaboratorRegister = (formData: ICollaborator) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postAdminCollaboratorRegisterStart(formData));
        const response = await axiosInstance.post('/admin/register', formData);
        dispatch(setAdminCollaboratorData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setAdminCollaboratorErrors(error.response?.data));
        } else {
            dispatch(setAdminCollaboratorErrors(error));
        }
    }
};

//VERIFICA EL TOKEN CADA QUE ENTRE A UNA RUTA PROTEGIDA
export const verifyTokenRequest = (token: string) => {
    return axiosInstance.get(`/auth/verifyToken`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

//LOGIN DE ADMINS
export const postAdminCollaboratorLogin = (loginData: { email: string; password: string }) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.post('/admin/login', loginData);
        jsCookie.set('token', response.data.token); 
        dispatch(postAdminCollaboratorLoginStart(response.data.serResult));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setAdminCollaboratorErrors(error.response?.data.message));
        } else {
            dispatch(setAdminCollaboratorErrors(error.response?.data.message));
        }
    }
};

//LOGOUT DE USUARIOS                        
export const logoutAdminCollaborator = () => (dispatch: AppDispatch) => {
    jsCookie.remove('token');
    dispatch(isAdminCollaboratorAuthenticatedStatus(false));
    dispatch(setAdminCollaboratorData(null));
    window.location.href = "/login";
};