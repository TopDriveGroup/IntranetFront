import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASEURL,
    withCredentials: true,
});

// Interceptor para realizar un seguimiento de las solicitudes salientes
instance.interceptors.request.use(config => {
    // Verificar si el cuerpo de la solicitud contiene un FormData
    if (config.data instanceof FormData) {
        // Imprimir el contenido del FormData
        for (const [key, value] of config.data.entries()) { // Cambia 'let' por 'const'
            console.log(`FormData: ${key}:`, value);
        }
    }
    return config;
}, error => {
    return Promise.reject(error);
});


export default instance;