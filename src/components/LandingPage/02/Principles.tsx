import styles from './styles.module.css';

function Principles() {

    return (
        <div className={`${styles.container} p-2`}>
            <div className='d-flex flex-column'>
                <h2>Principios</h2>
                <p>Creer</p>
                <p>Crear</p>
                <p>Crecer</p>
            </div>
        </div>
    );
}

export default Principles;