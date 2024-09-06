import NavBar from '../../../../../../components/LandingPage/00NavBar/NavBar';
import SideBarOperations from '../../../../../../components/LandingPage/00NavBar/01SIG/01Operations/SideBarOperations/SideBarOperations';
import Footer from '../../../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function OperationPolicies() {

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} d-flex`}>
                <SideBarOperations />
                <div className={`${styles.component} p-3`}>
                    <h2 className={`${styles.title} `}>Políticas de Operaciones</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad voluptates culpa cupiditate placeat eos possimus nostrum excepturi, dolore inventore fugiat, asperiores corporis at perferendis sequi eius aliquam ratione facilis?</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default OperationPolicies;