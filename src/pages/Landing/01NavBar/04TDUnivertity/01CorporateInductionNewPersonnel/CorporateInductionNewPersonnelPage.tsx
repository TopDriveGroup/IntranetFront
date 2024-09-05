import NavBar from '../../../../../components/LandingPage/00NavBar/NavBar';
import Footer from '../../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function CorporateInductionNewPersonnelPage() {

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} p-2`}>
                <h2 className={`${styles.title} `}>Inducción corporativa perosonal nuevo</h2>
            </div>
            <Footer />
        </div>
    );
}

export default CorporateInductionNewPersonnelPage;