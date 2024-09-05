import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// INGLES - LANDING
import enFooter from './locales/en/Landing/Footer/EnFooter.json';
// INGLES - HELPERS

// ESPAÑOL - LANDINGPAGE
import esFooter from './locales/es/Landing/Footer/EsFooter.json';
// ESPAÑOL - HELPERS

// APLICAR LAZY LOADING PARA EL LENGUAJE DE TRADUCCION
const resources = {
    en: {
        // LANDING
        footer: enFooter,
        
        // LANDING HELPERS
    },
    
    es: {
        // LANDING
        footer: esFooter,

        // LANDING HELPERS
    }
};

// Obtener el idioma almacenado en localStorage o usar 'es' como predeterminado
const savedLanguage = localStorage.getItem('language') || 'es';

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: savedLanguage, // Idioma inicial
        fallbackLng: 'es',
        ns: [
            // LANDING
            'navBarLanding',
            'aboutUs',
            'industries_WasteWater',
            'industries_FoodBeverages',
            'industries_Cement',
            'industries_Construction',
            'industries_Energy',
            'industries_RenewableEnergies',
            'industries_Metallurgy',
            'industries_Mining',
            'industries_OilGas',
            'industries_Ports',
            'industries_PulpPaper',
            'industries_Chemicals',
            'industries_Tablerists',
            'industries_Telecommunications',
            'quotation',
            'pqrf',
            'contactUs',
            'companyDescription',
            'businessUnits',
            'statistics',
            'solutions',
            'allies',
            'certificates',
            'footer',
            // LANDING HELPES
            'departmentAndCity',
            // LANDING ECOMMERCE
            'navBarEcommerce',
            'meansPaymentEcommerce',
            'producTrackingEcommerce',
            'returnsAndExchangesEcommerce'
        ],
        defaultNS: 'navBarLanding',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;