import { Link, useLocation } from 'react-router-dom';
// ELEMENTOS DEL COMPONENTE
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import styles from './styles.module.css';

function SideBarTecnology() {
    const location = useLocation();

    return (
        <div className={`${styles.container} overflow-y-auto position-sticky border-top-0`}>
            <div className={`${styles.container__Component} p-1`}>
                <div className={`${styles.container__Section} mb-2 d-flex align-items-center justify-content-end`}>
                    {location.pathname !== "/sig/tecnology" && (
                        <div>
                            <IoIosArrowRoundBack className={`${styles.icon__Back} `}/>
                            <Link to="/sig/tecnology" className={`${styles.button__Back} text-decoration-none`}>Ir a Inicio de Tecnología</Link>
                        </div>
                    )}
                    {location.pathname === "/sig/tecnology" && (
                        <div>
                            <IoIosArrowRoundBack className={`${styles.icon__Back} `}/>
                            <Link to="/sig" className={`${styles.button__Back} text-decoration-none`}>Ir a Inicio de SIG</Link>
                        </div>
                    )}
                </div>

                <div className={`${styles.container__Section} ${location.pathname === '/sig/tecnology/policies' ? styles.active : ''} mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <Link to="/sig/tecnology/policies" className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__SideBar} p-1 text-decoration-none`}>Políticas</div>
                    </Link>
                </div>

                <div className={`${styles.container__Section} ${location.pathname === '/sig/tecnology/forms' ? styles.active : ''} mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <Link to="/sig/tecnology/forms" className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__SideBar} p-1 text-decoration-none`}>Formatos</div>
                    </Link>
                </div>

                <div className={`${styles.container__Section} ${location.pathname === '/sig/tecnology/procedures' ? styles.active : ''} mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <Link to="/sig/tecnology/procedures" className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__SideBar} p-1 text-decoration-none`}>Procedimientos</div>
                    </Link>
                </div>

                <div className={`${styles.container__Section} ${location.pathname === '/sig/tecnology/registers' ? styles.active : ''} mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <Link to="/sig/tecnology/registers" className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__SideBar} p-1 text-decoration-none`}>Registro(Solo el área)</div>
                    </Link>
                </div>

                <div className={`${styles.container__Section} ${location.pathname === '/sig/tecnology/indicators' ? styles.active : ''} mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <Link to="/sig/tecnology/indicators" className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__SideBar} p-1 text-decoration-none`}>Indicadores(Solo el área)</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SideBarTecnology;