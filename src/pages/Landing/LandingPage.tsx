import NavBar from '../../components/LandingPage/00NavBar/NavBar';
import Footer from '../../components/LandingPage/Footer/Footer';
import BulletinBoard from '../../components/LandingPage/01BulletinBoard/BulletinBoard';
import OurPhilosophy from '../../components/LandingPage/02OurPhilosophy/OurPhilosophy';
import OccupationalSafety from '../../components/LandingPage/03OccupationalSafety/OccupationalSafety';
import EconomicIndicators from '../../components/LandingPage/04EconomicIndicators/EconomicIndicators';
import CompanyDescription from '../../components/LandingPage/05CompanyDescription/CompanyDescription';
import styles from './styles.module.css';

interface LandingPageProps {
    addNotification: (type: 'success' | 'error', message: string) => void;
}

function LandingPage({ addNotification }: LandingPageProps) {

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} p-2`}>
                <BulletinBoard addNotification={addNotification} />
                <OurPhilosophy />
                <OccupationalSafety />
                <EconomicIndicators />
                <CompanyDescription />
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;