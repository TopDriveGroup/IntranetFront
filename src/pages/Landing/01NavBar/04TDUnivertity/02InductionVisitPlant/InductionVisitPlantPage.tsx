import NavBar from '../../../../../components/LandingPage/00NavBar/NavBar';
import Footer from '../../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function InductionVisitPlantPage() {

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} p-2`}>
                <h2 className={`${styles.title} `}>Inducción visita planta</h2>
            </div>
            <Footer />
        </div>
    );
}

export default InductionVisitPlantPage;