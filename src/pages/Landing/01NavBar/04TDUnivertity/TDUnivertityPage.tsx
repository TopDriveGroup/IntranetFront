import NavBar from '../../../../components/LandingPage/00NavBar/NavBar';
import Footer from '../../../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function TDUnivertityPage() {

    return (
        <div className={`${styles.container} d-flex flex-column align-items-center justify-content-between overflow-hidden overflow-y-auto`}>
            <NavBar />
            <div className='d-flex'>
                <div className='d-flex'>
                    <p className='border w-100'>Inducción corporativa</p>

                    <div>
                        <p className='border w-100'>Capacitaciones</p>
                        Interfaz donde se muestren todas las capacitaciones como en forma de cuadros con imágenes y descripciones de cada una
                        <div>
                            <p>Cuando entre a capacitaciones</p>
                            <p>Repositorio</p>{/* Contenido del curso */}
                                Al final viene la Evaluación
                                El entrar a hacer el curso marca el tiempo y la fecha en la que la ersona ingresa, esta asistencia se debe de marcar por tiempo, por la evaluación y también por el visitar las rutas
                            
                            
                            
                            
                            <div>
                                <p>Asistencia</p>{/* ESTO SOLO LO PUEDE EDITAR EL ADMIN (LUIS, YURANI, JAVI O NATALY, LUISA, MARCELA) */}
                                Asistencia es un módulo:
                                A
                                <p>Evaluación</p>
                            </div>



                            <p>Grabación</p>






                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default TDUnivertityPage;