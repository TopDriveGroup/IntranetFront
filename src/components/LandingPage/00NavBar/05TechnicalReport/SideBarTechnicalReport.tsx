import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// ELEMENTOS DEL COMPONENTE
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from './styles.module.css';

function SideBarTechnicalReport() {
    const location = useLocation();

    // Leer el estado inicial de los submenús desde localStorage
    const getInitialState = (key: string, defaultValue: boolean) => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    };

    const [isTechnicalDataSheetsSubMenuOpen, setTechnicalDataSheetsSubMenuOpen] = useState(() => getInitialState('technicalDataSheetsSubMenuOpen', false));
    const [isConformityCertificatesSubMenuOpen, setConformityCertificatesSubMenuOpen] = useState(() => getInitialState('conformityCertificatesSubMenuOpen', false));
    const [isKitsPackagesSubMenuOpen, setKitsPackagesSubMenuOpen] = useState(() => getInitialState('kitsPackagesSubMenuOpen', false));
    const [isSupportDocumentsSubMenuOpen, setSupportDocumentsSubMenuOpen] = useState(() => getInitialState('supportDocumentsSubMenuOpen', false));

    // SUBMENU DE FICHAS TECNICAS
    const toggleTechnicalDataSheetsSubMenuOpen = () => {
        const newState = !isTechnicalDataSheetsSubMenuOpen;
        setTechnicalDataSheetsSubMenuOpen(newState);
        localStorage.setItem('technicalDataSheetsSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE CERTIFICADO DE CONFORMIDAD
    const toggleConformityCertificatesSubMenuOpen = () => {
        const newState = !isConformityCertificatesSubMenuOpen;
        setConformityCertificatesSubMenuOpen(newState);
        localStorage.setItem('conformityCertificatesSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE KITS Y PAQUETES
    const toggleKitsPackagesSubMenuOpen = () => {
        const newState = !isKitsPackagesSubMenuOpen;
        setKitsPackagesSubMenuOpen(newState);
        localStorage.setItem('kitsPackagesSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE DOCUMENTOS DE APOYO
    const toggleSupportDocumentsSubMenuOpen = () => {
        const newState = !isSupportDocumentsSubMenuOpen;
        setSupportDocumentsSubMenuOpen(newState);
        localStorage.setItem('supportDocumentsSubMenuOpen', JSON.stringify(newState));
    };


    return (
        <div className={`${styles.container} overflow-y-auto position-sticky border-top-0`}>
            <div className={`${styles.container__Component} p-1`}>
                <div className={`${styles.container__Section} mb-2 d-flex align-items-center justify-content-end`}>
                    {location.pathname !== "/technical-report" && (
                        <div>
                            <IoIosArrowRoundBack className={`${styles.icon__Back} `}/>
                            <Link to="/technical-report" className={`${styles.button__Back} text-decoration-none`}>Ir a Inicio de Repositorio Técnico</Link>
                        </div>
                    )}
                </div>

                <div onClick={toggleTechnicalDataSheetsSubMenuOpen}
                    className={`${styles.container__Section}
                    ${(location.pathname === '/technical-report/technical-data-sheets') ? styles.active : ''}  mb-2 d-flex align-items-center`}
                >
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Fichas técnicas {isTechnicalDataSheetsSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isTechnicalDataSheetsSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/technical-report/technical-data-sheets'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/technical-report/technical-data-sheets' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Fichas técnicas
                        </Link>
                    </div>
                )}

                <div onClick={toggleConformityCertificatesSubMenuOpen}
                    className={`${styles.container__Section}
                    ${(location.pathname === '/technical-report/conformity-certificates') ? styles.active : ''} 
                    mb-2 d-flex align-items-center`}
                >
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Certificado de conformidad {isConformityCertificatesSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isConformityCertificatesSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/technical-report/conformity-certificates'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/technical-report/conformity-certificates' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Certificado de conformidad
                        </Link>
                    </div>
                )}

                <div onClick={toggleKitsPackagesSubMenuOpen}
                    className={`${styles.container__Section}
                    ${(location.pathname === '/technical-report/kits&-packages') ? styles.active : ''} 
                    mb-2 d-flex align-items-center`}
                >
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Kits & Paquetes {isKitsPackagesSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isKitsPackagesSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/technical-report/kits&-packages'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/technical-report/kits&-packages' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Kits & Paquetes
                        </Link>
                    </div>
                )}

                <div onClick={toggleSupportDocumentsSubMenuOpen}
                    className={`${styles.container__Section}
                    ${(location.pathname === '/technical-report/support-documents') ? styles.active : ''} 
                    mb-2 d-flex align-items-center`}
                >
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Documentos de apoyo {isSupportDocumentsSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isSupportDocumentsSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/technical-report/support-documents'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/technical-report/support-documents' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Documentos de apoyo
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SideBarTechnicalReport;