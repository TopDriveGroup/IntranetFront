import NavBar from '../../../../../../components/LandingPage/00NavBar/NavBar';
import SideBarMarketing from '../../../../../../components/LandingPage/00NavBar/01SIG/05Marketing/SideBarMarketing/SideBarMarketing';
import Footer from '../../../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function MarketingIndicatorsPage() {
    return (
        <div className={`${styles.container} d-flex flex-column align-items-center justify-content-between`}>
            <NavBar />
            <div className={`${styles.container__Component} d-flex`}>
                <SideBarMarketing />
                <div className={`${styles.component} p-3`}>
                    <h2 className={`${styles.title} `}>Indicadores de Marketing</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad voluptates culpa cupiditate placeat eos possimus nostrum excepturi, dolore inventore fugiat, asperiores corporis at perferendis sequi eius aliquam ratione facilis?</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MarketingIndicatorsPage;