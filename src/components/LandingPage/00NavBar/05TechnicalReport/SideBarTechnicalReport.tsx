import { Link, useLocation } from 'react-router-dom';
// ELEMENTOS DEL COMPONENTE
import { MdNavigateNext } from "react-icons/md";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import styles from './styles.module.css';

function SideBarTechnicalReport() {
    const location = useLocation();

    return (
        <div className={`${styles.container} overflow-y-auto position-sticky border-top-0`}>
            <div className={`${styles.container__Component} p-1`}>
                <div className={`${styles.container__Section} mb-2 d-flex align-items-center justify-content-end`}>
                    {location.pathname !== "/technical-report" && (
                        <div>
                            <IoIosArrowRoundBack className={`${styles.icon__Back} `}/>
                            <Link to="/technical-report" className={`${styles.button__Back} text-decoration-none`}>Ir a Inicio de Reporte Técnico</Link>
                        </div>
                    )}
                </div>

                <div className={`${styles.container__Section} ${location.pathname === '/technical-report/technical-data-sheets' ? styles.active : ''} mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <Link to="/technical-report/technical-data-sheets" className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__SideBar} p-1 text-decoration-none`}>Fichas técnicas</div>
                    </Link>
                </div>

                <div className={`${styles.container__Section} ${location.pathname === '/technical-report/conformity-certificates' ? styles.active : ''} mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <Link to="/technical-report/conformity-certificates" className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__SideBar} p-1 text-decoration-none`}>Certificado de conformidad</div>
                    </Link>
                </div>

                <div className={`${styles.container__Section} ${location.pathname === '/technical-report/kits&-packages' ? styles.active : ''} mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <Link to="/technical-report/kits&-packages" className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__SideBar} p-1 text-decoration-none`}>Kits & Paquetes</div>
                    </Link>
                </div>

                <div className={`${styles.container__Section} ${location.pathname === '/technical-report/support-documents' ? styles.active : ''} mb-2 d-flex align-items-center`}>
                    <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                        <MdNavigateNext className={styles.icon__Deployment}/>
                    </div>
                    <Link to="/technical-report/support-documents" className={`${styles.section} d-flex align-items-center justify-content-start text-decoration-none`}>
                        <div className={`${styles.container__Icon} d-flex align-items-center justify-content-center`}>
                            <IoHome className={`${styles.icon__Section} `}/>
                        </div>
                        <div className={`${styles.link__SideBar} p-1 text-decoration-none`}>Documentos de apoyo</div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SideBarTechnicalReport;