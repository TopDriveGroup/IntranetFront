import ImageOurPhilosophy from '../../../assets/Landing/02OurPhilosophy/OurPhilosophy.png';
import { RiMagicLine } from "react-icons/ri";
import { GrGrow } from "react-icons/gr";
import { FaTools } from "react-icons/fa";
import styles from './styles.module.css';

function OurPhilosophy() {

    return (
        <div className={`${styles.container} p-5`}>
            <div className={`${styles.container__Component} m-auto d-flex flex-column`}>
                <div className={`${styles.container__Introduction_Text_Section} `}>
                    <h2 className={`${styles.title__Section} mb-4 text-center`}>Nuestra filosofía de Creer, Crear y Crecer es el motor que nos conecta, nos desafía y nos impulsa a seguir avanzando, siempre juntos.</h2>  
                </div>

                <div className={`${styles.container__Information_Section} d-flex align-items-center justify-content-evenly`}>
                    <div className={`${styles.container__Image_Section} d-flex align-items-center justify-content-center overflow-hidden`}>
                        <img src={ImageOurPhilosophy} alt="Image Our Philosophy" className={`${styles.image__Our_Philosophy} overflow-hidden`}/>
                    </div>
                    <div className={`${styles.container__Data} d-flex flex-column align-items-center justify-content-center gap-4`}>
                        <div className={`${styles.data} `}>
                            <h2 className={`${styles.title__Data} m-0 d-flex align-items-center justify-content-start gap-2`}>Creer <RiMagicLine className={`${styles.icon__Section} `}/></h2>
                            <p className={`${styles.text__Data} m-0`}>Creemos en el poder de las personas y en nuestra capacidad colectiva para superar cualquier desafío. Esta confianza impulsa cada paso que damos y nos distingue como equipo</p>
                        </div>
                        <div className={`${styles.data} `}>
                            <h2 className={`${styles.title__Data} m-0 d-flex align-items-center justify-content-start gap-2`}>Crear <FaTools className={`${styles.icon__Section} `}/></h2>
                            <p className={`${styles.text__Data} m-0`}>La innovación constante es parte de quienes somos. Creamos nuevas formas de hacer las cosas, impulsando soluciones que transforman nuestro entorno y nos hacen más ágiles</p>
                        </div>
                        <div className={`${styles.data} `}>
                            <h2 className={`${styles.title__Data} m-0 d-flex align-items-center justify-content-start gap-2`}>Crecer <GrGrow className={`${styles.icon__Section} `}/></h2>
                            <p className={`${styles.text__Data} m-0`}>Crecer es nuestra evolución natural. El éxito no se mide solo en logros, sino en cómo cada uno de nosotros crece y aporta al equipo. Juntos, expandimos nuestros horizontes y alcanzamos nuevas metas.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OurPhilosophy;