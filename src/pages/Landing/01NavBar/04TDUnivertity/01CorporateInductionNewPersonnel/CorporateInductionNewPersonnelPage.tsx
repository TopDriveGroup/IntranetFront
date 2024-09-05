import { Link } from 'react-router-dom';
import NavBar from '../../../../../components/LandingPage/00NavBar/NavBar';
import Footer from '../../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function CorporateInductionNewPersonnelPage() {

    return (
        <div>
            <NavBar />
            <div className={`${styles.container} p-2 pt-4`}>
                <Link to='/top-drive-univertity' className={`${styles.button__Back} text-decoration-none`}>Volver</Link>
                <h2 className={`${styles.title} mt-4`}>Inducción corporativa a personal nuevo</h2>

                <div className={`${styles.container__Course} m-auto mt-4 mb-4 d-flex flex-wrap align-items-center justify-content-center gap-4`}>
                    <Link to='/top-drive-univertity/corporate-induction-for-new-personnel/course-' className={`${styles.course} text-decoration-none`}>
                        <h3 className={`${styles.title__Course} m-0 d-flex align-items-center justify-content-center`}>Curso 1</h3>
                    </Link>
                    <Link to='/top-drive-univertity/corporate-induction-for-new-personnel/course-' className={`${styles.course} text-decoration-none`}>
                        <h3 className={`${styles.title__Course} m-0 d-flex align-items-center justify-content-center`}>Curso 2</h3>
                    </Link>
                    <Link to='/top-drive-univertity/corporate-induction-for-new-personnel/course-' className={`${styles.course} text-decoration-none`}>
                        <h3 className={`${styles.title__Course} m-0 d-flex align-items-center justify-content-center`}>Curso 3</h3>
                    </Link>
                    <Link to='/top-drive-univertity/corporate-induction-for-new-personnel/course-' className={`${styles.course} text-decoration-none`}>
                        <h3 className={`${styles.title__Course} m-0 d-flex align-items-center justify-content-center`}>Curso 4</h3>
                    </Link>
                    <Link to='/top-drive-univertity/corporate-induction-for-new-personnel/course-' className={`${styles.course} text-decoration-none`}>
                        <h3 className={`${styles.title__Course} m-0 d-flex align-items-center justify-content-center`}>Curso 5</h3>
                    </Link>
                    <Link to='/top-drive-univertity/corporate-induction-for-new-personnel/course-' className={`${styles.course} text-decoration-none`}>
                        <h3 className={`${styles.title__Course} m-0 d-flex align-items-center justify-content-center`}>Curso 6</h3>
                    </Link>
                    <Link to='/top-drive-univertity/corporate-induction-for-new-personnel/course-' className={`${styles.course} text-decoration-none`}>
                        <h3 className={`${styles.title__Course} m-0 d-flex align-items-center justify-content-center`}>Curso 7</h3>
                    </Link>
                    <Link to='/top-drive-univertity/corporate-induction-for-new-personnel/course-' className={`${styles.course} text-decoration-none`}>
                        <h3 className={`${styles.title__Course} m-0 d-flex align-items-center justify-content-center`}>Curso 8</h3>
                    </Link>
                    <Link to='/top-drive-univertity/corporate-induction-for-new-personnel/course-' className={`${styles.course} text-decoration-none`}>
                        <h3 className={`${styles.title__Course} m-0 d-flex align-items-center justify-content-center`}>Curso 9</h3>
                    </Link>
                    <Link to='/top-drive-univertity/corporate-induction-for-new-personnel/course-' className={`${styles.course} text-decoration-none`}>
                        <h3 className={`${styles.title__Course} m-0 d-flex align-items-center justify-content-center`}>Curso 10</h3>
                    </Link>
                    <Link to='/top-drive-univertity/corporate-induction-for-new-personnel/course-' className={`${styles.course} text-decoration-none`}>
                        <h3 className={`${styles.title__Course} m-0 d-flex align-items-center justify-content-center`}>Curso 11</h3>
                    </Link>
                    <Link to='/top-drive-univertity/corporate-induction-for-new-personnel/course-' className={`${styles.course} text-decoration-none`}>
                        <h3 className={`${styles.title__Course} m-0 d-flex align-items-center justify-content-center`}>Curso 12</h3>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default CorporateInductionNewPersonnelPage;