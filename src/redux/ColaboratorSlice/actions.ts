/* eslint-disable @typescript-eslint/no-explicit-any */
import jsCookie from 'js-cookie';
import { AppDispatch } from '../store';
import axiosInstance from '../../api/axios';
import { IColaborator } from '../../types/colaborator.types';
import { setColaboratorData, setColaboratorErrors, postRegisterColaboratorStart, isAuthenticatedStatus, postLoginStart, getProfileStart } from './colaboratorSlice';

//REGISTRO DE USUARIOS
export const postRegisterColaborator = (formData: IColaborator) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postRegisterColaboratorStart(formData));
        const response = await axiosInstance.post('/colaborator/register', formData);
        dispatch(setColaboratorData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setColaboratorErrors(error.response?.data));
        } else {
            dispatch(setColaboratorErrors(error));
        }
    }
};

//VERIFICA EL TOKEN CADA QUE ENTRE A UNA RUTA PROTEGIDA
export const verifyTokenRequest = (token: string) => {
    return axiosInstance.get(`/auth/verifyToken`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

//LOGIN DE USUARIOS
export const loginColaborator = (loginData: { email: string; password: string }) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.post('/auth/login', loginData);
        jsCookie.set('token', response.data.token); 
        dispatch(postLoginStart(response.data.serResult));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setColaboratorErrors(error.response?.data.message));
        } else {
            dispatch(setColaboratorErrors(error.response?.data.message));
        }
    }
};

//PERFIL DE USUARIO
export const getProfileColaborator = (token: string) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.get('/auth/profile', {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            }
        });
        dispatch(getProfileStart(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setColaboratorErrors(error.response?.data.message));
        } else {
            dispatch(setColaboratorErrors(error.message));
        }
    }
};

//LOGOUT DE USUARIOS                        
export const logoutColaborator = () => (dispatch: AppDispatch) => {
    jsCookie.remove('token');
    dispatch(isAuthenticatedStatus(false));
    dispatch(setColaboratorData(null));
    window.location.href = "/login";
};