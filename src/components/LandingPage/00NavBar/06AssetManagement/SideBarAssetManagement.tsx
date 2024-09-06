import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// ELEMENTOS DEL COMPONENTE
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from './styles.module.css';

function SideBarAssetManagement() {
    const location = useLocation();

    // Leer el estado inicial de los submenús desde localStorage
    const getInitialState = (key: string, defaultValue: boolean) => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    };

    const [isTechnicalDataSheetsSubMenuOpen, setTechnicalDataSheetsSubMenuOpen] = useState(() => getInitialState('technicalDataSheetsSubMenuOpen', false));
    const [isConformityCertificatesSubMenuOpen, setConformityCertificatesSubMenuOpen] = useState(() => getInitialState('conformityCertificatesSubMenuOpen', false));
    const [isKitsPackagesSubMenuOpen, setKitsPackagesSubMenuOpen] = useState(() => getInitialState('kitsPackagesSubMenuOpen', false));

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

    // SUBMENU DE PROCEDIMIENTOS
    const toggleKitsPackagesSubMenuOpen = () => {
        const newState = !isKitsPackagesSubMenuOpen;
        setKitsPackagesSubMenuOpen(newState);
        localStorage.setItem('kitsPackagesSubMenuOpen', JSON.stringify(newState));
    };

    return (
        <div className={`${styles.container} overflow-y-auto position-sticky border-top-0`}>
            <div className={`${styles.container__Component} p-1`}>
                <div className={`${styles.container__Section} mb-2 d-flex align-items-center justify-content-end`}>
                    {location.pathname !== "/asset-management" && (
                        <div>
                            <IoIosArrowRoundBack className={`${styles.icon__Back} `}/>
                            <Link to="/asset-management" className={`${styles.button__Back} text-decoration-none`}>Ir a Inicio de Gestión de Activos</Link>
                        </div>
                    )}
                </div>

                <div onClick={toggleTechnicalDataSheetsSubMenuOpen}
                    className={`${styles.container__Section}
                    ${(location.pathname === '/asset-management/my-assets') ? styles.active : ''}  mb-2 d-flex align-items-center`}
                >
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Mis activos {isTechnicalDataSheetsSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isTechnicalDataSheetsSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/asset-management/my-assets'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/asset-management/my-assets' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Mis activos
                        </Link>
                    </div>
                )}

                <div onClick={toggleConformityCertificatesSubMenuOpen}
                    className={`${styles.container__Section}
                    ${(location.pathname === '/asset-management/asset-request') ? styles.active : ''} 
                    mb-2 d-flex align-items-center`}
                >
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Solicitud de activos {isConformityCertificatesSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isConformityCertificatesSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/asset-management/asset-request'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/asset-management/asset-request' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Solicitud de activos
                        </Link>
                    </div>
                )}

                <div onClick={toggleKitsPackagesSubMenuOpen}
                    className={`${styles.container__Section}
                    ${(location.pathname === '/asset-management/asset-summary') ? styles.active : ''} 
                    mb-2 d-flex align-items-center`}
                >
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Resumen de activos {isKitsPackagesSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isKitsPackagesSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/asset-management/asset-summary'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/asset-management/asset-summary' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Resumen de activos
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SideBarAssetManagement;