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

    const [isTechSubMenuOpen, setTechSubMenuOpen] = useState(() => getInitialState('techSubMenuOpen', false));
    const [isQualitySubMenuOpen, setQualitySubMenuOpen] = useState(() => getInitialState('qualitySubMenuOpen', false));

    // SUBMENU DE SOLICITUDES TECH
    const toggleTechSubMenuOpen = () => {
        const newState = !isTechSubMenuOpen;
        setTechSubMenuOpen(newState);
        localStorage.setItem('techSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE SOLICITUDES QUALITY
    const toggleQualitySubMenuOpen = () => {
        const newState = !isQualitySubMenuOpen;
        setQualitySubMenuOpen(newState);
        localStorage.setItem('qualitySubMenuOpen', JSON.stringify(newState));
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

                <div onClick={toggleTechSubMenuOpen}
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
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Tech {isTechSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isTechSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/requests/tech'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/requests/tech' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Tech
                        </Link>
                        <Link
                            to='/requests/tech'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/requests/tech' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Suministro de material POP
                        </Link>
                        <Link
                            to='/requests/tech'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/requests/tech' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            HelpDesk
                        </Link>
                    </div>
                )}

                <div onClick={toggleQualitySubMenuOpen}
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
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Quality {isQualitySubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isQualitySubMenuOpen && (
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