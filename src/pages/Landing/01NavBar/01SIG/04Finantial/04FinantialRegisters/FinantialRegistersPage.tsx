import NavBar from '../../../../../../components/LandingPage/00NavBar/NavBar';
import SideBarFinantial from '../../../../../../components/LandingPage/00NavBar/01SIG/04Finantial/SideBarFinantial/SideBarFinantial';
import Footer from '../../../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function FinantialRegistersPage() {
    return (
        <div className={`${styles.container} d-flex flex-column align-items-center justify-content-between`}>
            <NavBar />
            <div className={`${styles.container__Component} d-flex`}>
                <SideBarFinantial />
                <div className={`${styles.component} p-3`}>
                    <h2 className={`${styles.title} `}>Registros de Financiero</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad voluptates culpa cupiditate placeat eos possimus nostrum excepturi, dolore inventore fugiat, asperiores corporis at perferendis sequi eius aliquam ratione facilis?</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default FinantialRegistersPage;