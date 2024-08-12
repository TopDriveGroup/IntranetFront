import NavBar from '../../components/LandingPage/00NavBar/NavBar';
import Footer from '../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function LandingPage() {

    return (
        <div>
            <NavBar />
            <div className={styles.container}>
                <div className='d-flex'>
                    Inicio
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;