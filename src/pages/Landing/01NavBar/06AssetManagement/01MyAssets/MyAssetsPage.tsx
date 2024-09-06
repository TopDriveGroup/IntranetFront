import NavBar from '../../../../../components/LandingPage/00NavBar/NavBar';
import SideBarAssetManagement from '../../../../../components/LandingPage/00NavBar/06AssetManagement/SideBarAssetManagement';
import Footer from '../../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function MyAssetsPage() {

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} d-flex`}>
                <SideBarAssetManagement />
                <div className={`${styles.component} p-3`}>
                    <h2 className={`${styles.title} `}>Mis activos</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ad voluptates culpa cupiditate placeat eos possimus nostrum excepturi, dolore inventore fugiat, asperiores corporis at perferendis sequi eius aliquam ratione facilis?</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyAssetsPage;