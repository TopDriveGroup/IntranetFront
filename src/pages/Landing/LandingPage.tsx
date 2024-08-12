import NavBar from '../../components/LandingPage/01NavBar/NavBar';
// import SideBar from '../../components/LandingPage/01SideBar/SideBar';
import Footer from '../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function LandingPage() {

    return (
        <div className={`${styles.container} d-flex flex-column align-items-center justify-content-between overflow-hidden overflow-y-auto`}>
            <NavBar />
            <div className='d-flex'>
                {/* <SideBar /> */}
                <div className='d-flex'>
                    Inicio
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;