import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// ELEMENTOS DEL COMPONENTE
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from './styles.module.css';

function SideBarRequests() {
    const location = useLocation();

    // Leer el estado inicial de los submenús desde localStorage
    const getInitialState = (key: string, defaultValue: boolean) => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    };

    const [isTechnicalDataSheetsSubMenuOpen, setTechnicalDataSheetsSubMenuOpen] = useState(() => getInitialState('technicalDataSheetsSubMenuOpen', false));
    const [isConformityCertificatesSubMenuOpen, setConformityCertificatesSubMenuOpen] = useState(() => getInitialState('conformityCertificatesSubMenuOpen', false));

    // SUBMENU DE PLITICAS
    const toggleTechnicalDataSheetsSubMenuOpen = () => {
        const newState = !isTechnicalDataSheetsSubMenuOpen;
        setTechnicalDataSheetsSubMenuOpen(newState);
        localStorage.setItem('technicalDataSheetsSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE FORMATOS
    const toggleConformityCertificatesSubMenuOpen = () => {
        const newState = !isConformityCertificatesSubMenuOpen;
        setConformityCertificatesSubMenuOpen(newState);
        localStorage.setItem('conformityCertificatesSubMenuOpen', JSON.stringify(newState));
    };

    return (
        <div className={`${styles.container} overflow-y-auto position-sticky border-top-0`}>
            <div className={`${styles.container__Component} p-1`}>
                <div className={`${styles.container__Section} mb-2 d-flex align-items-center justify-content-end`}>
                    {location.pathname !== "/requests" && (
                        <div>
                            <IoIosArrowRoundBack className={`${styles.icon__Back} `}/>
                            <Link to="/requests" className={`${styles.button__Back} text-decoration-none`}>Ir a Inicio de Solicitudes</Link>
                        </div>
                    )}
                </div>

                <div onClick={toggleTechnicalDataSheetsSubMenuOpen}
                    className={`${styles.container__Section}
                    ${(location.pathname === '/requests/tech') ? styles.active : ''}  mb-2 d-flex align-items-center`}
                >
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Tech {isTechnicalDataSheetsSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isTechnicalDataSheetsSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/requests/tech'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/requests/tech' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Tech
                        </Link>
                    </div>
                )}

                <div onClick={toggleConformityCertificatesSubMenuOpen}
                    className={`${styles.container__Section}
                    ${(location.pathname === '/requests/quality') ? styles.active : ''} 
                    mb-2 d-flex align-items-center`}
                >
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Quality {isConformityCertificatesSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isConformityCertificatesSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/requests/quality'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/requests/quality' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Quality
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SideBarRequests;