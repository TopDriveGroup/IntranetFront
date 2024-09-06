import NavBar from '../../../../../components/LandingPage/00NavBar/NavBar';
import SideBarProjectsSolutions from '../../../../../components/LandingPage/00NavBar/01SIG/06ProjectsSolutions/SideBarProjectsSolutions/SideBarProjectsSolutions';
import Footer from '../../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function ProjectsSolutionsPage() {
    
    return (
        <div>
            <NavBar />
            <div className={`${styles.container} p-2 d-flex`}>
                <SideBarProjectsSolutions />
                <div className={`${styles.component} p-3`}>
                    <h2 className={`${styles.title} `}>Proyectos y Servicios</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad voluptates culpa cupiditate placeat eos possimus nostrum excepturi, dolore inventore fugiat, asperiores corporis at perferendis sequi eius aliquam ratione facilis?</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectsSolutionsPage;