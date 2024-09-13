import UploadToSharePoint from '../UploadToSharePoint/UploadToSharePoint';
import styles from './styles.module.css';

interface BulletinBoardProps {
    addNotification: (type: 'success' | 'error', message: string) => void;
}

function BulletinBoard({ addNotification }: BulletinBoardProps) {

    return (
        <div className={`${styles.container} p-2`}>
            <div className='d-flex flex-column'>
                <h2>Cartelera</h2>
                <UploadToSharePoint addNotification={addNotification} />
                <p>- Fechas especiales</p>
                <p>- Cumpleaños</p>
                <p>- Noticias de interés</p>
                <p>- Capacitaciones de la jornada</p>
                <p>- Campaña</p>
                <p>- Ascensos</p>
                <p>- Pausas activas</p>
                <p>- Casos de éxito</p>
            </div>
        </div>
    );
}

export default BulletinBoard;