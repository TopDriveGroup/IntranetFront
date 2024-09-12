import NavBar from '../../../../../components/LandingPage/00NavBar/NavBar';
import SideBarRequests from '../../../../../components/LandingPage/00NavBar/07Requests/SideBarRequests';
import Footer from '../../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function QualityPage() {

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} d-flex`}>
                <SideBarRequests />
                <div className={`${styles.component} p-3`}>
                    <h2 className={`${styles.title} `}>Quality</h2>

                    <div className='m-3 p-3 border rounded d-inline'>
                        Solicitud de vacaciones
                    </div>

                    <div className='m-3 p-3 border rounded d-inline'>
                        Ausentismo (Permisos)
                    </div>

                    <div className='m-3 p-3 border rounded d-inline'>
                        Trabajo en casa
                    </div>

                    <div className='m-3 p-3 border rounded d-inline'>
                        Solicitudes de retiro cesantías
                    </div>

                    <div className='m-3 p-3 border rounded d-inline'>
                        Certificados laborales
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default QualityPage;