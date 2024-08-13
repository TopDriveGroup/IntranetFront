import { Link, useLocation } from 'react-router-dom';
import NavBar from '../../../../components/LandingPage/00NavBar/NavBar';
import Footer from '../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function SIGPage() {
    const location = useLocation();

    return (
        <div className={`${styles.container} d-flex flex-column align-items-center justify-content-between`}>
            <NavBar />
            <div className={`${styles.container__Component} p-4 d-flex flex-column`}>
                <h2 className={`${styles.title} `}>Sistema Integrado de Gestión</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad voluptates culpa cupiditate placeat eos possimus nostrum excepturi, dolore inventore fugiat, asperiores corporis at perferendis sequi eius aliquam ratione facilis?</p>
                <Link to="/sig/operations" className={`${styles.section} ${location.pathname === '/sig/operations' ? styles.active : ''} d-flex align-items-center justify-content-start text-decoration-none`}>Operations</Link>
                <Link to="/sig/tecnology" className={`${styles.section} ${location.pathname === '/sig/tecnology' ? styles.active : ''} d-flex align-items-center justify-content-start text-decoration-none`}>Tecnology</Link>
                <Link to="/sig/quality-and-administrative" className={`${styles.section} ${location.pathname === '/sig/quality-and-administrative' ? styles.active : ''} d-flex align-items-center justify-content-start text-decoration-none`}>Quality And Administrative</Link>
                <Link to="/sig/finantial" className={`${styles.section} ${location.pathname === '/sig/finantial' ? styles.active : ''} d-flex align-items-center justify-content-start text-decoration-none`}>Finantial</Link>
                <Link to="/sig/marketing" className={`${styles.section} ${location.pathname === '/sig/marketing' ? styles.active : ''} d-flex align-items-center justify-content-start text-decoration-none`}>Marketing</Link>
                <Link to="/sig/projects-and-solutions" className={`${styles.section} ${location.pathname === '/sig/projects-and-solutions' ? styles.active : ''} d-flex align-items-center justify-content-start text-decoration-none`}>Projects and Solutions</Link>
            </div>
            <Footer />
        </div>
    );
}

export default SIGPage;