import { useEffect, useState, useRef } from 'react';
import { Link, useMatch } from 'react-router-dom';
//REDUX
import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../../redux/store';
import { collaboratorLogout } from '../../../redux/CollaboratorSlice/actions';
//ELEMENTOS DEL COMPONENTE
import LogoTopDrive from '../../../assets/TopDriveGroup/LogoTopDrive.svg';
import { BiWorld } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import styles from './styles.module.css';

function NavBar() {
    const dispatch: AppDispatch = useDispatch();

    // LENGUAJE
    const menuRef = useRef<HTMLDivElement>(null);
    const languageMenuRef = useRef<HTMLDivElement>(null);
    const [languageMenuVisible, setLanguageMenuVisible] = useState(false);

    const toggleLanguageMenu = () => {
        setLanguageMenuVisible(!languageMenuVisible);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node)) {
                setLanguageMenuVisible(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuRef, languageMenuRef]);

    const matchSIG = useMatch('/sig/*');
    const matchAboutUs = useMatch('/about-us/*');
    const matchDocuments = useMatch('/documents/*');
    const matchTDUnivertity = useMatch('/top-drive-univertity/*');
    const matchTechnicalReport = useMatch('/technical-report/*');
    const matchAssetManagement = useMatch('/asset-management/*');
    const matchRequests = useMatch('/requests/*');

    const logout = async () => {
        try {
            dispatch(collaboratorLogout());
        } catch (error) {
            console.log('Error: ', error)
            throw new Error('Error al hacer el cierre de sesión');
        }
    };

    return (
        <div className={`${styles.container} position-fixed top-0`}>
            <div className={`${styles.container__Pre_NavBar} m-auto`}>
                <div className={`${styles.pre__NavBar} m-auto d-flex align-items-center justify-content-between`}>
                    <div className={`${styles.container__Language_Phone_Lines} d-flex align-items-center justify-content-between`}>
                        <div className={`${styles.container__Language} px-2 d-flex align-items-center justify-content-center position-relative`} onClick={toggleLanguageMenu}>
                            <div className={`${styles.container__Icon_Language} d-flex align-items-center justify-content-center text-center overflow-hidden`} >
                                <BiWorld />
                            </div>
                            <div className={`${styles.text__Language} mx-1 p-0`}>
                                Lenguaje
                            </div>
                            {languageMenuVisible && (
                                <div ref={languageMenuRef} className={`${styles.dropdown__Language} p-3 d-flex flex-column position-absolute overflow-hidden`}>
                                    <div className={`${styles.language__Button} `}>English</div>
                                    <div className={`${styles.language__Button} `}>Español</div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className={`${styles.container__Logout} d-flex align-items-center justify-content-center`}>
                        <div className={`${styles.logout} px-2 d-flex align-items-center justify-content-end text-center text-decoration-none gap-1`} onClick={logout} >
                            Salir
                            <MdOutlineLogout className={styles.icon__Logout} />
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.container__Navbar} px-2 m-auto d-flex align-items-center justify-content-between`}>
                <Link to="/" className={`${styles.container__Logo} d-flex align-items-center justify-content-center`}>
                    <img src={LogoTopDrive} alt="Logo Top Drive Group" className={`${styles.logo} `} />
                </Link>
                <div className={`${styles.menu} d-flex align-items-center justify-content-center`} >
                    <Link to="/sig" className={`${styles.home} ${matchSIG ? styles.active : ''} d-flex align-items-center justify-content-center text-decoration-none`} >
                        SIG
                    </Link>
                    <Link to="/about-us" className={`${styles.home} ${matchAboutUs ? styles.active : ''} d-flex align-items-center justify-content-center text-decoration-none`} >
                        Nosotros
                    </Link>
                    <Link to="/documents"className={`${styles.aboutUs} ${matchDocuments ? styles.active : ''} d-flex align-items-center justify-content-center text-decoration-none`} >
                        Documentos
                    </Link>
                    <Link to="/top-drive-univertity" className={`${styles.products} ${matchTDUnivertity ? styles.active : ''} d-flex align-items-center justify-content-center text-decoration-none`} >
                        TD Univertity
                    </Link>
                    <Link to="/technical-report" className={`${styles.quotation} ${matchTechnicalReport ? styles.active : ''} d-flex align-items-center justify-content-center text-decoration-none`} >
                        Repositorio Técnico
                    </Link>
                    <Link to="/asset-management" className={`${styles.quotation} ${matchAssetManagement ? styles.active : ''} d-flex align-items-center justify-content-center text-decoration-none`} >
                        Gestión de activos
                    </Link>
                    <Link to="/requests" className={`${styles.quotation} ${matchRequests ? styles.active : ''} d-flex align-items-center justify-content-center text-decoration-none`} >
                        Solicitudes
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;