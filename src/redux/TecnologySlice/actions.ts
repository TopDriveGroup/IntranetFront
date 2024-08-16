/* eslint-disable @typescript-eslint/no-explicit-any */
import jsCookie from 'js-cookie';
import { AppDispatch } from '../store';
import axiosInstance from '../../api/axios';
import { ICollaborator } from '../../types/collaborator.types';
import { setTecnologyCollaboratorData, setTecnologyCollaboratorErrors, postTecnologyCollaboratorRegisterStart, postTecnologyCollaboratorLoginStart } from './tecnologySlice';

//REGISTRO DE TECNOLOGIES
export const postTecnologyCollaboratorRegister = (formData: ICollaborator) => async (dispatch: AppDispatch) => {
    try {
        dispatch(postTecnologyCollaboratorRegisterStart(formData));
        const response = await axiosInstance.post('/tecnology-collaborator/register', formData);
        dispatch(setTecnologyCollaboratorData(response.data));
    } catch (error: any) {
        if (error.response && error.response.status === 500) {
            dispatch(setTecnologyCollaboratorErrors(error.response?.data));
        } else {
            dispatch(setTecnologyCollaboratorErrors(error));
        }
    }
};

//VERIFICA EL TOKEN CADA QUE ENTRE A UNA RUTA PROTEGIDA
export const verifyTokenRequest = (token: string) => {
    return axiosInstance.get(`/auth/verify-token`, {
        headers: { Authorization: `Bearer ${token}` },
    });
};

//LOGIN DE TECNOLOGIES
export const postTecnologyCollaboratorLogin = (loginData: { email: string; password: string }) => async (dispatch: AppDispatch) => {
    try {
        const response = await axiosInstance.post('/auth/login-tecnology-collaborator', loginData);
        jsCookie.set('token', response.data.token); 
        dispatch(postTecnologyCollaboratorLoginStart(response.data.serResult));
    } catch (error: any) {
        if (error.response && error.response.status === 401) {
            dispatch(setTecnologyCollaboratorErrors(error.response?.data.message));
        } else {
            dispatch(setTecnologyCollaboratorErrors(error.response?.data.message));
        }
    }
};