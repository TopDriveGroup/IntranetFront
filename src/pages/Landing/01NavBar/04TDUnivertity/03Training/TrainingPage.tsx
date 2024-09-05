import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/LandingPage/00NavBar/NavBar';
import Footer from '../../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function TrainingPage() {

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} p-2 pt-4`}>
                <Link to='/top-drive-univertity' className={`${styles.button__Back} text-decoration-none`}>Volver</Link>

                <h2 className={`${styles.title} mt-4`}>Capacitaciones</h2>
            </div>
            <Footer />
        </div>
    );
}

export default TrainingPage;