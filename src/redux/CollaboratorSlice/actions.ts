/* eslint-disable @typescript-eslint/no-explicit-any */
import jsCookie from 'js-cookie';
import { AppDispatch } from '../store';
import axiosInstance from '../../api/axios';
import { ICollaborator } from '../../types/collaborator.types';
import { setCollaboratorData, setCollaboratorErrors, postCollaboratorRegisterStart, isAuthenticatedStatus, loginStart, profileStart, getCollaboratorProfileStart, sendDocumentToSharePointStart, logoutStart } from './colaboratorSlice';

//REGISTRO DE COLABORADORES
export const postCollaboratorRegister = (formData: ICollaborator) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postCollaboratorRegisterStart(formData));
        const response = await axiosInstance.post('/collaborator/register', formData);
        dispatch(setCollaboratorData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setCollaboratorErrors(error.response?.data));
        } else {
            dispatch(setCollaboratorErrors(error));
        }
    }
};

//VERIFICA EL TOKEN CADA QUE ENTRE A UNA RUTA PROTEGIDA
export const verifyTokenRequest = (token: string) => {
    return axiosInstance.get(`/auth/verify-token`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

//LOGIN DE USUARIOS
export const loginUser = (loginData: { corporateEmail: string; password: string }) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.post('/auth/login', loginData);
        jsCookie.set('token', response.data.token); 
        dispatch(loginStart(response.data.serResult));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setCollaboratorErrors(error.response?.data.message));
        } else {
            dispatch(setCollaboratorErrors(error.response?.data.message));
        }
    }
};

//PERFIL DE USUARIO
export const getProfileCollaborator = (token: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get('/auth/profile', {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(profileStart(response.data));
        // console.log('response.data: ', response.data)
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setCollaboratorErrors(error.response?.data.message));
        } else {
            dispatch(setCollaboratorErrors(error.message));
        }
    }
};


//PERFIL DE USUARIO
export const getCollaboratorProfile = (token: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get('/auth/profile', {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(getCollaboratorProfileStart(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setCollaboratorErrors(error.response?.data.message));
        } else {
            dispatch(setCollaboratorErrors(error.message));
        }
    }
};

//ENVIA CORREO ELECTRONICO A UN CLIENTE REGISTRADO EN EL crM
export const sendEmailCRMClient = (sendEmailData: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(sendDocumentToSharePointStart());
        return await axiosInstance.post(`/user/send-email`, sendEmailData);
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setCollaboratorErrors(error.response?.data));
        } else {
            dispatch(setCollaboratorErrors(error));
        }
    }
};

//LOGOUT DE COLABORADORES                        
export const collaboratorLogout = () => (dispatch: AppDispatch) => {
    dispatch(logoutStart());
    jsCookie.remove('token');
    dispatch(isAuthenticatedStatus(false));
    dispatch(setCollaboratorData(null));
    window.location.href = "/login";
};