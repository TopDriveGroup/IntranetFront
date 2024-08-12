import logo from '../../assets/Landing/SocialNetwork/WhatsApp.png';
import styles from "./WhatsApp.module.css";

export default function WhatsApp () {
    const phoneNumber = '573112712405';

    function handleWhatsAppClick () {
        const url = `whatsapp://send?phone=${phoneNumber}`;
        window.location.href = url;
    }

    return (
        <div className={`${styles.whatsappLandgin} position-fixed`}>
            <div onClick={handleWhatsAppClick} >
                <img className={`${styles.whatsapp}`} src={logo} alt="Logo WhatsApp" />
            </div>
        </div>
    );
}