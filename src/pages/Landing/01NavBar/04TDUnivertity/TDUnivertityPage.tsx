import { Link } from 'react-router-dom';
import NavBar from '../../../../components/LandingPage/00NavBar/NavBar';
import Footer from '../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function TDUnivertityPage() {

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} p-2 d-flex align-items-center justify-content-center`}>
                <div className='p-4 d-flex align-items-center justify-content-center border gap-4'>
                    <Link to='/top-drive-univertity/corporate-induction-for-new-personnel' className={`${styles.link} p-4 d-flex align-items-center justify-content-center text-decoration-none`}>
                        Inducción corporativa perosonal nuevo
                    </Link>
                    <Link to='/top-drive-univertity/induction-visit-plant' className={`${styles.link} p-4 d-flex align-items-center justify-content-center text-decoration-none`}>
                        Inducción visita planta
                    </Link>
                    <Link to='/top-drive-univertity/training' className={`${styles.link} p-4 d-flex align-items-center justify-content-center text-decoration-none`}>
                        Capacitaciones
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TDUnivertityPage;