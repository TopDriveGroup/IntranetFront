import styles from './styles.module.css';

function EconomicIndicators() {
    
    return (
        <div className={`${styles.container} p-2`}>
            <div className='d-flex flex-column'>
                <h2>Indicadores económicos</h2>
                <div>Indicadores</div>
                <div>Revistas de economía</div>
            </div>
        </div>
    );
}

export default EconomicIndicators;