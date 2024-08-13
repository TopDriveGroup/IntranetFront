/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import jsCookie from 'js-cookie';
import { jwtDecode } from 'jwt-decode';
//REDUX
import { useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../../../../../redux/store';
import { loginColaborator } from '../../../../../redux/ColaboratorSlice/actions';
//ELEMENTOS DEL COMPONENTE
import { IUserLogin } from '../../../../../types/userLogin.types';
import LogoTopDriveGroup from '../../../../../assets/TopDriveGroup/LogoTopDrive.svg';
import { RiEyeFill, RiEyeOffFill } from 'react-icons/ri';
import { PiWarningCircle } from 'react-icons/pi';
import styles from './styles.module.css';

interface DecodedToken {
    typeRole: string;
}

function LoginPage() {
    const token = jsCookie.get("token");
    const navigate = useNavigate();
    const dispatch: AppDispatch = useDispatch();

    // Utiliza useSelector para obtener la información del usuario del estado de Redux
    const colaboratorErrors = useSelector((state: RootState) => state.colaborator.colaboratorErrors);
    const isAuthenticated = useSelector((state: RootState) => state.colaborator.isAuthenticated);

    const { register, formState: { errors }, handleSubmit } = useForm<IUserLogin>();

    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    const onSubmit = async (loginData: IUserLogin) => {
        try {
            dispatch(loginColaborator(loginData));
        } catch {
            throw new Error('Error al iniciar sesión');
        }
    };

    useEffect(() => {
        if (isAuthenticated) {
            let decodedToken: DecodedToken | null = null;
            if (token) {
                // Se decodifica el token para redirigir al usuario a su panel respectivo
                decodedToken = jwtDecode<DecodedToken>(token);
                if(decodedToken.typeRole === 'Superadmin') {
                    navigate("/panel-colaborator/profile");
                } else {
                    navigate("/panel-top-drive-group/configuration");
                }
            }
        }
    }, [ isAuthenticated ]);

    return (
        <div className="d-flex align-items-center justify-content-center">
            <div className={`${styles.container} d-flex align-items-center justify-content-center vh-100`}>
                <div className={`${styles.container__Component} d-flex flex-column align-items-center justify-content-center`}>
                    <Link to="/">
                        <img src={LogoTopDriveGroup} alt="Top Drive Group" className={`${styles.logo} mb-4`} loading="lazy" />
                    </Link>
                    
                    <div className='position-relative'>
                        {colaboratorErrors && (
                            <div className={`${styles.errors__Login} p-2 text-center position-absolute w-100`}>
                                <p className='m-0'><PiWarningCircle /> {colaboratorErrors}</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                            <div className='mb-2 d-flex align-items-center justify-content-center position-relative'>
                                <input
                                    type="email"
                                    {...register('email', { required: true })}
                                    className={`${styles.input} p-2 mb-3 border rounded`}
                                    placeholder='Email del usuario'
                                />
                                {errors.email && (
                                    <p className={`${styles.text__Danger} text-danger position-absolute`}>El email del usuario es requerido</p>
                                )}
                            </div>

                            <div className='mb-2'>
                                <div className="rounded d-flex align-items-center justify-content-center position-relative">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        {...register('password', { required: true })}
                                        className={`${styles.input} p-2 mb-3 border rounded`}
                                        placeholder='Contraseña'
                                    />
                                    {showPassword ? (
                                        <RiEyeOffFill className={`${styles.icon} position-absolute`} onClick={toggleShowPassword} />
                                    ) : (
                                        <RiEyeFill className={`${styles.icon} position-absolute`} onClick={toggleShowPassword} />
                                    )}
                                    {errors.password && (
                                        <p className={`${styles.text__Danger} text-danger position-absolute`}>La contraseña es requerida</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className="d-flex mb-4">
                                <button 
                                    className={`${styles.button__Submit} border-0 rounded m-auto text-decoration-none`}
                                    type='submit'
                                >
                                    Login
                                </button>
                            </div>  
                        </form>

                        <p className='m-0 text-center'>¿No tienes cuenta? <Link to="/register" className={`${styles.link} text-sky-500 text-decoration-none`}>Regístrate acá</Link></p>
                        <p className='text-center'><Link to="/reset-password" className={`${styles.link} text-sky-500 text-decoration-none`}>¿Has olvidado la contraseña?</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;