import NavBar from '../../../../components/LandingPage/00NavBar/NavBar';
import Footer from '../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function DocumentsPage() {

    return (
        <div className={`${styles.container} d-flex flex-column align-items-center justify-content-between overflow-hidden overflow-y-auto`}>
            <NavBar />
            <div className='d-flex'>
                <div className='d-flex'>
                    DocumentsPage
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default DocumentsPage;