/* eslint-disable @typescript-eslint/no-explicit-any */
import jsCookie from 'js-cookie';
import { AppDispatch } from '../store';
import axiosInstance from '../../api/axios';
import { ICollaborator } from '../../types/collaborator.types';
import { setCollaboratorData, setCollaboratorErrors, postCollaboratorRegisterStart, isAuthenticatedStatus, postCollaboratorLoginStart, getCollaboratorProfileStart } from './colaboratorSlice';

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
    return axiosInstance.get(`/auth/verifyToken`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

//LOGIN DE COLABORADORES
export const postCollaboratorLogin = (loginData: { email: string; password: string }) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.post('/auth/login', loginData);
        jsCookie.set('token', response.data.token); 
        dispatch(postCollaboratorLoginStart(response.data.serResult));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setCollaboratorErrors(error.response?.data.message));
        } else {
            dispatch(setCollaboratorErrors(error.response?.data.message));
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

//LOGOUT DE COLABORADORES                        
export const collaboratorLogout = () => (dispatch: AppDispatch) => {
    jsCookie.remove('token');
    dispatch(isAuthenticatedStatus(false));
    dispatch(setCollaboratorData(null));
    window.location.href = "/login";
};


/*
FUNCIONES UTILIZABLES PARA LOS TRES TIPOS DE PANELES
- getProfile
- logout
- verifyToken
*/