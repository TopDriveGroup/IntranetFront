import NavBar from '../../../../../components/LandingPage/00NavBar/NavBar';
import SideBarTecnology from '../../../../../components/LandingPage/00NavBar/01SIG/02Tecnology/SideBarTecnology/SideBarTecnology';
import Footer from '../../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function TecnologyPage() {
    
    return (
        <div>
            <NavBar />
            <div className={`${styles.container} p-2 d-flex`}>
                <SideBarTecnology />
                <div className={`${styles.component} p-3`}>
                    <h2 className={`${styles.title} `}>Tecnología</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad voluptates culpa cupiditate placeat eos possimus nostrum excepturi, dolore inventore fugiat, asperiores corporis at perferendis sequi eius aliquam ratione facilis?</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TecnologyPage;