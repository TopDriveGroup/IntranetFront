import styles from './styles.module.css';

function CorporateVideo() {
    
    return (
        <div className={`${styles.container} p-2`}>
            <div className='d-flex flex-column'>
                <h2>Video corporativo</h2>
                <div>Video</div>
            </div>
        </div>
    );
}

export default CorporateVideo;