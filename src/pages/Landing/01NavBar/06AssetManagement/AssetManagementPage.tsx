import NavBar from '../../../../components/LandingPage/00NavBar/NavBar';
import SideBarAssetManagement from '../../../../components/LandingPage/00NavBar/06AssetManagement/SideBarAssetManagement';
import Footer from '../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function AssetManagementPage() {

    return (
        <div className={`${styles.container} d-flex flex-column align-items-center justify-content-between overflow-hidden overflow-y-auto`}>
            <NavBar />
            <div className='d-flex'>
                <SideBarAssetManagement />
                <div className={`${styles.component} p-3`}>
                    <h2 className={`${styles.title} `}>Gestión de Activos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad voluptates culpa cupiditate placeat eos possimus nostrum excepturi, dolore inventore fugiat, asperiores corporis at perferendis sequi eius aliquam ratione facilis?</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AssetManagementPage;