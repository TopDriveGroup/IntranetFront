import NavBar from '../../../../../../components/LandingPage/00NavBar/NavBar';
import SideBarProjectsSolutions from '../../../../../../components/LandingPage/00NavBar/01SIG/06ProjectsSolutions/SideBarProjectsSolutions/SideBarProjectsSolutions';
import Footer from '../../../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function ProjectsSolutionsProceduresPage() {
    return (
        <div className={`${styles.container} d-flex flex-column align-items-center justify-content-between`}>
            <NavBar />
            <div className={`${styles.container__Component} d-flex`}>
                <SideBarProjectsSolutions />
                <div className={`${styles.component} p-3`}>
                    <h2 className={`${styles.title} `}>Procedimientos de Proyectos y Servicios</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad voluptates culpa cupiditate placeat eos possimus nostrum excepturi, dolore inventore fugiat, asperiores corporis at perferendis sequi eius aliquam ratione facilis?</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ProjectsSolutionsProceduresPage;