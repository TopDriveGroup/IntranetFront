import { useState } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
// ELEMENTOS DEL COMPONENTE
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from './styles.module.css';

function SideBarOperations() {
    const location = useLocation();

    // Leer el estado inicial de los submenús desde localStorage
    const getInitialState = (key: string, defaultValue: boolean) => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    };

    const [isPoliciesOperationsSubMenuOpen, setPoliciesOperationsSubMenuOpen] = useState(() => getInitialState('policiesOperationsSubMenuOpen', false));
    const [isFormsOperationsSubMenuOpen, setFormsOperationsSubMenuOpen] = useState(() => getInitialState('formsOperationsSubMenuOpen', false));
    const [isProceduresOperationsSubMenuOpen, setProceduresOperationsSubMenuOpen] = useState(() => getInitialState('proceduresOperationsSubMenuOpen', false));
    const [isRegistersOperationsSubMenuOpen, setRegistersOperationsSubMenuOpen] = useState(() => getInitialState('registersOperationsSubMenuOpen', false));
    const [isIndicatorsOperationsSubMenuOpen, setIndicatorsOperationsSubMenuOpen] = useState(() => getInitialState('indicatorsOperationsSubMenuOpen', false));

    // SUBMENU DE POLITICAS
    const togglePoliciesOperationsSubMenuOpen = () => {
        const newState = !isPoliciesOperationsSubMenuOpen;
        setPoliciesOperationsSubMenuOpen(newState);
        localStorage.setItem('policiesOperationsSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE FORMATOS
    const toggleFormsOperationsSubMenuOpen = () => {
        const newState = !isFormsOperationsSubMenuOpen;
        setFormsOperationsSubMenuOpen(newState);
        localStorage.setItem('formsOperationsSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE PROCEDIMIENTOS
    const toggleProceduresOperationsSubMenuOpen = () => {
        const newState = !isProceduresOperationsSubMenuOpen;
        setProceduresOperationsSubMenuOpen(newState);
        localStorage.setItem('proceduresOperationsSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE PROCEDIMIENTOS
    const toggleRegistersOperationsSubMenuOpen = () => {
        const newState = !isRegistersOperationsSubMenuOpen;
        setRegistersOperationsSubMenuOpen(newState);
        localStorage.setItem('registersOperationsSubMenuOpen', JSON.stringify(newState));
    };

    // SUBMENU DE PROCEDIMIENTOS
    const toggleIndicatorsOperationsSubMenuOpen = () => {
        const newState = !isIndicatorsOperationsSubMenuOpen;
        setIndicatorsOperationsSubMenuOpen(newState);
        localStorage.setItem('indicatorsOperationsSubMenuOpen', JSON.stringify(newState));
    };

    // RUTAS CON PARAMS
    const matchPolicies = useMatch('/sig/operations/policies');

    return (
        <div className={`${styles.container} overflow-y-auto position-sticky border-top-0`}>
            <div className={`${styles.container__Component} p-1`}>
                <div className={`${styles.container__Section} mb-2 d-flex align-items-center justify-content-end`}>
                    {location.pathname !== "/sig/operations" && (
                        <div className={`${styles.aaaaaaaaaaa} `}>
                            <IoIosArrowRoundBack className={`${styles.icon__Back} `}/>
                            <Link to="/sig/operations" className={`${styles.button__Back} text-decoration-none`}>Ir a Inicio de Operaciones</Link>
                        </div>
                    )}
                    {location.pathname === "/sig/operations" && (
                        <div className={`${styles.aaaaaaaaaaa} `}>
                            <IoIosArrowRoundBack className={`${styles.icon__Back} `}/>
                            <Link to="/sig" className={`${styles.button__Back} text-decoration-none`}>Ir a Inicio de SIG</Link>
                        </div>
                    )}
                </div>

                <div onClick={togglePoliciesOperationsSubMenuOpen} className={`${styles.container__Section} ${(location.pathname === '/sig/operations/policies' || location.pathname === '/sig/operations/policies' || matchPolicies) ? styles.active : ''}  mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Políticas {isPoliciesOperationsSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isPoliciesOperationsSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/sig/operations/policies'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/sig/operations/policies' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Políticas
                        </Link>
                    </div>
                )}

                <div onClick={toggleFormsOperationsSubMenuOpen} className={`${styles.container__Section} ${(location.pathname === '/sig/operations/forms' || location.pathname === '/sig/operations/forms') ? styles.active : ''}  mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Formularios {isFormsOperationsSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isFormsOperationsSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/sig/operations/forms'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/sig/operations/forms' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Formularios de creación
                        </Link>
                    </div>
                )}

                <div onClick={toggleProceduresOperationsSubMenuOpen} className={`${styles.container__Section} ${(location.pathname === '/sig/operations/procedures' || location.pathname === '/sig/operations/procedures') ? styles.active : ''}  mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Procedimientos {isProceduresOperationsSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isProceduresOperationsSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/sig/operations/procedures'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/sig/operations/procedures' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Procedimientos
                        </Link>
                    </div>
                )}

                <div onClick={toggleRegistersOperationsSubMenuOpen} className={`${styles.container__Section} ${(location.pathname === '/sig/operations/registers' || location.pathname === '/sig/operations/registers') ? styles.active : ''}  mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Registro(Solo el área) {isRegistersOperationsSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isRegistersOperationsSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/sig/operations/registers'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/sig/operations/registers' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Registro Uno
                        </Link>
                    </div>
                )}

                <div onClick={toggleIndicatorsOperationsSubMenuOpen} className={`${styles.container__Section} ${(location.pathname === '/sig/operations/indicators' || location.pathname === '/sig/operations/indicators') ? styles.active : ''}  mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Indicadores(Solo el área) {isIndicatorsOperationsSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isIndicatorsOperationsSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/sig/operations/indicators'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/sig/operations/indicators' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Registro Uno
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SideBarOperations;