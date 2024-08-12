
import { useEffect, useState, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
//ELEMENTOS DEL COMPONENTE
import LogoTopDrive from '../../../assets/TopDriveGroup/LogoTopDrive.svg';
import { BiWorld } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import styles from './styles.module.css';

function NavBar() {
    const location = useLocation();

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

                    <div className={`${styles.ecommerce} d-flex align-items-center justify-content-center`}>
                        <Link to="/register" className={`${styles.register} px-2 d-flex align-items-center justify-content-center text-center text-decoration-none`} >
                            Registro
                        </Link>
                        <Link to="/login" className={`${styles.login} px-2 d-flex align-items-center justify-content-end text-center text-decoration-none gap-1`} >
                            <AiOutlineUser className={styles.icon__User} />
                            Login
                        </Link>
                    </div>
                </div>
            </div>

            <div className={`${styles.container__Navbar} px-2 m-auto d-flex align-items-center justify-content-between`}>
                <Link to="/" className={`${styles.container__Logo} d-flex align-items-center justify-content-center`}>
                    <img src={LogoTopDrive} alt="Logo Top Drive Group" className={`${styles.logo} `} />
                </Link>

                <div className={`${styles.menu} d-flex align-items-center justify-content-center`} >
                    <Link to="/sig" className={`${styles.home} ${location.pathname === '/sig' ? styles.active : ''} d-flex align-items-center justify-content-center text-decoration-none`} >
                        SIG
                    </Link>
                    <Link to="/about-us" className={`${styles.home} d-flex align-items-center justify-content-center text-decoration-none`} >
                        Nosotros
                    </Link>
                    <Link to="/documents" className={`${styles.aboutUs} ${location.pathname === '/documents' ? styles.active : ''} d-flex align-items-center justify-content-center text-decoration-none`} >
                        Documentos
                    </Link>
                    <Link to="/top-drive-univertity" className={`${styles.products} ${location.pathname === '/top-drive-univertity' ? styles.active : ''} d-flex align-items-center justify-content-center text-decoration-none`} >
                        TD Univertity
                    </Link>
                    <Link to="/technical-report" className={`${styles.quotation} ${location.pathname === '/technical-report' ? styles.active : ''} d-flex align-items-center justify-content-center text-decoration-none`} >
                        Reporte Técnico
                    </Link>
                    <Link to="/asset-management" className={`${styles.quotation} ${location.pathname === '/asset-management' ? styles.active : ''} d-flex align-items-center justify-content-center text-decoration-none`} >
                        Gestión de activos
                    </Link>
                    <Link to="/requests" className={`${styles.quotation} ${location.pathname === '/requests' ? styles.active : ''} d-flex align-items-center justify-content-center text-decoration-none`} >
                        Solicitudes
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default NavBar;