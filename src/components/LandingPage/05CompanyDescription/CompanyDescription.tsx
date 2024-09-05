import styles from './styles.module.css';

function CompanyDescription() {

    return (
        <div>
            <div className={`${styles.container} d-flex align-items-start justify-content-center gap-5`}>
                <iframe
                    src="https://player.vimeo.com/video/987140072"
                    title="Top Drive Group Video"
                    width="900"
                    height="504"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className={`${styles.video}`}
                ></iframe>
            </div>
        </div>
    );
}

export default CompanyDescription;