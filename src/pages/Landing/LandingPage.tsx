import NavBar from '../../components/LandingPage/00NavBar/NavBar';
import Footer from '../../components/LandingPage/Footer/Footer';
import BulletinBoard from '../../components/LandingPage/01BulletinBoard/BulletinBoard';
import Principles from '../../components/LandingPage/02/Principles';
import OccupationalSafety from '../../components/LandingPage/03OccupationalSafety/OccupationalSafety';
import EconomicIndicators from '../../components/LandingPage/04EconomicIndicators/EconomicIndicators';
import CorporateVideo from '../../components/LandingPage/05CorporateVideo/CorporateVideo';
import styles from './styles.module.css';

function LandingPage() {

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} p-2`}>
                <BulletinBoard />
                <Principles />
                <OccupationalSafety />
                <EconomicIndicators />
                <CorporateVideo />
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;