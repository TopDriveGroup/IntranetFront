import styles from './styles.module.css';

function OccupationalSafety() {
    
    return (
        <div className={`${styles.container} p-5`}>
            <div className={`${styles.container__Component} m-auto d-flex align-items-center justify-content-evenly`}>
                <div className={`${styles.aaaaaaaaa} d-flex align-items-center justify-content-center`}>
                    <h1 className={`${styles.title__Section} `}>Brigadistas</h1>
                </div>

                <div className={`${styles.bbbbbbb} d-flex align-items-center justify-content-center gap-4`}>
                    <div className={`${styles.container__Brigader} d-flex flex-column align-items-center justify-content-center position-relative`}>
                        <div className={`${styles.uno} `}></div>
                        <div className={`${styles.continer__Info} position-absolute`}>
                            <h6 className={`${styles.collaborator} m-0 text-center`}>Javier Lievano</h6>
                            <p className={`${styles.title__Position} m-0 text-center`}>Líder de cuadrilla</p>
                        </div>
                    </div>
                    <div className={`${styles.container__Brigader} d-flex flex-column align-items-center justify-content-center position-relative`}>
                        <div className={`${styles.dos} `}></div>
                        <div className={`${styles.continer__Info} position-absolute`}>
                            <h6 className={`${styles.collaborator} m-0 text-center`}>Nataly Núñez</h6>
                            <p className={`${styles.title__Position} m-0 text-center`}>Semi líder de cuadrilla</p>
                        </div>
                    </div>
                    <div className={`${styles.container__Brigader} d-flex flex-column align-items-center justify-content-center position-relative`}>
                        <div className={`${styles.tres} `}></div>
                        <div className={`${styles.continer__Info} position-absolute`}>
                            <h6 className={`${styles.collaborator} m-0 text-center`}>Carlos Reyes</h6>
                            <p className={`${styles.title__Position} m-0 text-center`}>Cuadrilla</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OccupationalSafety;