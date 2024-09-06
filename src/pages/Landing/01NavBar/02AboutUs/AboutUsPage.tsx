import NavBar from '../../../../components/LandingPage/00NavBar/NavBar';
import Footer from '../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function AboutUsPage() {

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} p-4 `}>
                <h2 className={`${styles.title} `}>Sobre la empresa</h2>

            </div>
            <Footer />
        </div>
    );
}

export default AboutUsPage;