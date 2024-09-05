import styles from './styles.module.css';

function OccupationalSafety() {
    
    return (
        <div className={`${styles.container} p-2`}>
            <div className='d-flex flex-column'>
                <h2>Seguridad en el trabajo</h2>
                <div>Coopas</div>
                <div>Brigadistas</div>
                <div>Comité de convivencia</div>
            </div>
        </div>
    );
}

export default OccupationalSafety;