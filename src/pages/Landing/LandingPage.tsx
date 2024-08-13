import NavBar from '../../components/LandingPage/00NavBar/NavBar';
import Footer from '../../components/LandingPage/Footer/Footer';
import styles from './styles.module.css';

function LandingPage() {

    return (
        <div>
            <NavBar />
            <div className={styles.container}>
                <div className='mb-5 d-flex flex-column'>
                    <h2>Cartelera</h2>
                    <p>- Fechas especiales</p>
                    <p>- Cumpleaños</p>
                    <p>- Noticias de interés</p>
                    <p>- Capacitaciones de la jornada</p>
                    <p>- Campaña</p>
                    <p>- Ascensos</p>
                    <p>- Pausas activas</p>
                    <p>- Casos de éxito</p>
                </div>

                <div className='border mb-5'>
                    <p>Creer</p>
                    <p>Crear</p>
                    <p>Crecer</p>
                </div>

                <div className='border mb-5'>
                    <h2>Seguridad en el trabajo</h2>
                    <div>Coopas</div>
                    <div>Brigadistas</div>
                    <div>Comité de convivencia</div>
                </div>

                <div className='border mb-5'>
                    <h2>Indicadores económicos</h2>
                    <div>Indicadores</div>
                    <div>Revistas de economía</div>
                </div>

                <div className='border mb-5'>
                    <h2>Video corporativo</h2>
                    <div>Video</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;