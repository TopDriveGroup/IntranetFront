import { useState } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
// ELEMENTOS DEL COMPONENTE
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from './styles.module.css';

function SideBarMarketing() {
    const location = useLocation();

    // Leer el estado inicial de los submenús desde localStorage
    const getInitialState = (key: string, defaultValue: boolean) => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    };

    const [isPoliciesSubMenuOpen, setPoliciesSubMenuOpen] = useState(() => getInitialState('policiesSubMenuOpen', false));
    const [isFormsSubMenuOpen, setFormsSubMenuOpen] = useState(() => getInitialState('formsSubMenuOpen', false));
    const [isProceduresSubMenuOpen, setProceduresSubMenuOpen] = useState(() => getInitialState('proceduresSubMenuOpen', false));
    const [isRegistersSubMenuOpen, setRegistersSubMenuOpen] = useState(() => getInitialState('registersSubMenuOpen', false));
    const [isIndicatorsSubMenuOpen, setIndicatorsSubMenuOpen] = useState(() => getInitialState('indicatorsSubMenuOpen', false));

    // SUBMENU DE PLITICAS
    const togglePoliciesSubMenuOpen = () => {
        const newState = !isPoliciesSubMenuOpen;
        setPoliciesSubMenuOpen(newState);
        localStorage.setItem('policiesSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE FORMATOS
    const toggleFormsSubMenuOpen = () => {
        const newState = !isFormsSubMenuOpen;
        setFormsSubMenuOpen(newState);
        localStorage.setItem('formsSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE PROCEDIMIENTOS
    const toggleProceduresSubMenuOpen = () => {
        const newState = !isProceduresSubMenuOpen;
        setProceduresSubMenuOpen(newState);
        localStorage.setItem('proceduresSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE PROCEDIMIENTOS
    const toggleRegistersSubMenuOpen = () => {
        const newState = !isRegistersSubMenuOpen;
        setRegistersSubMenuOpen(newState);
        localStorage.setItem('registersSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE PROCEDIMIENTOS
    const toggleIndicatorsSubMenuOpen = () => {
        const newState = !isIndicatorsSubMenuOpen;
        setIndicatorsSubMenuOpen(newState);
        localStorage.setItem('indicatorsSubMenuOpen', JSON.stringify(newState));
    };

    // RUTAS CON PARAMS
    const matchPolicies = useMatch('/sig/marketing/policies');

    return (
        <div className={`${styles.container} overflow-y-auto position-sticky border-top-0`}>
            <div className={`${styles.container__Component} p-1`}>
                <div className={`${styles.container__Section} mb-2 d-flex align-items-center justify-content-end`}>
                    {location.pathname !== "/sig/marketing" && (
                        <div>
                            <IoIosArrowRoundBack className={`${styles.icon__Back} `}/>
                            <Link to="/sig/marketing" className={`${styles.button__Back} text-decoration-none`}>Ir a Inicio de Marketing</Link>
                        </div>
                    )}
                    {location.pathname === "/sig/marketing" && (
                        <div>
                            <IoIosArrowRoundBack className={`${styles.icon__Back} `}/>
                            <Link to="/sig" className={`${styles.button__Back} text-decoration-none`}>Ir a Inicio de SIG</Link>
                        </div>
                    )}
                </div>

                <div onClick={togglePoliciesSubMenuOpen} className={`${styles.container__Section} ${(location.pathname === '/sig/marketing/policies' || location.pathname === '/sig/marketing/policies' || matchPolicies) ? styles.active : ''}  mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Políticas {isPoliciesSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isPoliciesSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/sig/marketing/policies'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/sig/marketing/policies' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Políticas
                        </Link>
                    </div>
                )}

                <div onClick={toggleFormsSubMenuOpen} className={`${styles.container__Section} ${(location.pathname === '/sig/marketing/forms' || location.pathname === '/sig/marketing/forms') ? styles.active : ''}  mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Formularios {isFormsSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isFormsSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/sig/marketing/forms'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/sig/marketing/forms' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Formularios de creación
                        </Link>
                    </div>
                )}

                <div onClick={toggleProceduresSubMenuOpen} className={`${styles.container__Section} ${(location.pathname === '/sig/marketing/procedures' || location.pathname === '/sig/marketing/procedures') ? styles.active : ''}  mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Procedimientos {isProceduresSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isProceduresSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/sig/marketing/procedures'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/sig/marketing/procedures' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Formularios de creación
                        </Link>
                    </div>
                )}

                <div onClick={toggleRegistersSubMenuOpen} className={`${styles.container__Section} ${(location.pathname === '/sig/marketing/registers' || location.pathname === '/sig/marketing/registers') ? styles.active : ''}  mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Registro(Solo el área) {isRegistersSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isRegistersSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/sig/marketing/registers'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/sig/marketing/registers' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Registro Uno
                        </Link>
                    </div>
                )}

                <div onClick={toggleIndicatorsSubMenuOpen} className={`${styles.container__Section} ${(location.pathname === '/sig/marketing/indicators' || location.pathname === '/sig/marketing/indicators') ? styles.active : ''}  mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Indicadores(Solo el área) {isIndicatorsSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isIndicatorsSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/sig/marketing/indicators'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/sig/marketing/indicators' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Registro Uno
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SideBarMarketing;