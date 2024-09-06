import { useState } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';
// ELEMENTOS DEL COMPONENTE
import { MdNavigateNext } from "react-icons/md";
// import { IoIosArrowRoundBack } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import styles from './styles.module.css';

function SideBarDocuments() {
    const location = useLocation();

    // Leer el estado inicial de los submenús desde localStorage
    const getInitialState = (key: string, defaultValue: boolean) => {
        const storedValue = localStorage.getItem(key);
        return storedValue !== null ? JSON.parse(storedValue) : defaultValue;
    };

    const [isPoliciesSubMenuOpen, setPoliciesSubMenuOpen] = useState(() => getInitialState('policiesSubMenuOpen', false));
    const [isFormsSubMenuOpen, setFormsSubMenuOpen] = useState(() => getInitialState('formsSubMenuOpen', false));
    const [isProceduresSubMenuOpen, setProceduresSubMenuOpen] = useState(() => getInitialState('proceduresSubMenuOpen', false));

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

    // RUTAS CON PARAMS
    const matchPolicies = useMatch('/documents/finantial/finantial/policies');

    return (
        <div className={`${styles.container} overflow-y-auto position-sticky border-top-0`}>
            <div className={`${styles.container__Component} p-1`}>
                <div className={`${styles.container__Section} mb-2 d-flex align-items-center justify-content-end`}>
                    {/* {location.pathname !== "/documents/finantial/finantial" && (
                        <div>
                            <IoIosArrowRoundBack className={`${styles.icon__Back} `}/>
                            <Link to="/documents/finantial/finantial" className={`${styles.button__Back} text-decoration-none`}>Ir a Inicio de Documentos</Link>
                        </div>
                    )}
                    {location.pathname === "/documents/finantial/finantial" && (
                        <div>
                            <IoIosArrowRoundBack className={`${styles.icon__Back} `}/>
                            <Link to="/documents" className={`${styles.button__Back} text-decoration-none`}>Ir a Inicio de SIG</Link>
                        </div>
                    )} */}
                </div>

                <div onClick={togglePoliciesSubMenuOpen}
                    className={`${styles.container__Section}
                    ${(location.pathname === '/documents/finantial/finantial/top-drive-group' ||
                    location.pathname === '/documents/finantial/finantial/world-electrictTelecom-solutions' ||
                    location.pathname === '/documents/finantial/finantial/west-cargo-logistics' ||
                    location.pathname === '/documents/finantial/finantial/kowa-coworking-warehouse' ||
                    matchPolicies) ? styles.active : ''}  mb-2 d-flex align-items-center`}
                >
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Financiero {isPoliciesSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isPoliciesSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/documents/finantial/top-drive-group'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/documents/finantial/top-drive-group' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Top Drive Group SAS
                        </Link>
                        <Link
                            to='/documents/finantial/world-electrictTelecom-solutions'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/documents/finantial/world-electrictTelecom-solutions' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            World Electric Telecom Solutions SAS
                        </Link>
                        <Link
                            to='/documents/finantial/west-cargo-logistics'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/documents/finantial/west-cargo-logistics' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            West Cargo Logistics SAS
                        </Link>
                        <Link
                            to='/documents/finantial/kowa-coworking-warehouse'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/documents/finantial/kowa-coworking-warehouse' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Kowa Coworking Warehouse
                        </Link>
                    </div>
                )}

                <div onClick={toggleFormsSubMenuOpen}
                    className={`${styles.container__Section}
                    ${(location.pathname === '/documents/finantial/marketing') ? styles.active : ''} 
                    mb-2 d-flex align-items-center`}
                >
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Marketing {isFormsSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isFormsSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/documents/finantial/marketing'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/documents/finantial/marketing' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Formularios de creación
                        </Link>
                    </div>
                )}

                <div onClick={toggleProceduresSubMenuOpen}
                    className={`${styles.container__Section}
                    ${(location.pathname === '/documents/finantial/administrative') ? styles.active : ''} 
                    mb-2 d-flex align-items-center`}
                >
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <div className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__Side_Bar} p-1 d-flex align-items-center justify-content-between`}>Administrativo {isProceduresSubMenuOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}  </div>
                    </div>
                </div>
                {isProceduresSubMenuOpen && (
                    <div className={styles.sub__Menu}>
                        <Link
                            to='/documents/finantial/administrative'
                            className={`${styles.link__Sub_Menu} ${location.pathname === '/documents/finantial/administrative' ? styles.active__Sub_Menu : ''} text-decoration-none`}
                        >
                            Formularios de creación
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SideBarDocuments;