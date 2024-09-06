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

    const [isMyAssetsSubMenuOpen, setMyAssetsSubMenuOpen] = useState(() => getInitialState('myAssetsSubMenuOpen', false));
    const [isAssetRequestSubMenuOpen, setAssetRequestSubMenuOpen] = useState(() => getInitialState('assetRequestSubMenuOpen', false));
    const [isAssetSummarySubMenuOpen, setAssetSummarySubMenuOpen] = useState(() => getInitialState('assetSummarySubMenuOpen', false));

    // SUBMENU DE MIS ACTIVOS
    const toggleMyAssetsSubMenuOpen = () => {
        const newState = !isMyAssetsSubMenuOpen;
        setMyAssetsSubMenuOpen(newState);
        localStorage.setItem('myAssetsSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE SOLICITUD DE ACTIVOS
    const toggleAssetRequestSubMenuOpen = () => {
        const newState = !isAssetRequestSubMenuOpen;
        setAssetRequestSubMenuOpen(newState);
        localStorage.setItem('assetRequestSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE RESUMEN DE ACTIVOS
    const toggleAssetSummarySubMenuOpen = () => {
        const newState = !isAssetSummarySubMenuOpen;
        setAssetSummarySubMenuOpen(newState);
        localStorage.setItem('assetSummarySubMenuOpen', JSON.stringify(newState));
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

                <div onClick={toggleMyAssetsSubMenuOpen}
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
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Mis activos {isMyAssetsSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isMyAssetsSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/asset-management/my-assets'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/asset-management/my-assets' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Mis activos
                        </Link>
                    </div>
                )}

                <div onClick={toggleAssetRequestSubMenuOpen}
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
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Solicitud de activos {isAssetRequestSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isAssetRequestSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/asset-management/asset-request'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/asset-management/asset-request' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Solicitud de activos
                        </Link>
                    </div>
                )}

                <div onClick={toggleAssetSummarySubMenuOpen}
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
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Resumen de activos {isAssetSummarySubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isAssetSummarySubMenuOpen && (
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