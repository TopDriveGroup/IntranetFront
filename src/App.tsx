import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';

// GENERALES
import WhatsApp from './components/WhatsApp/WhatsApp';
import Scroll from './components/Scroll/Scroll';

// LANDINGPAGE
import LandingPage from './pages/Landing/LandingPage';
// NAVBAR
import SIGPage from './pages/Landing/01NavBar/01SIG/SIGPage';
// OPERACIONES
import OperationsPage from './pages/Landing/01NavBar/01SIG/01Operations/OperationsPage';
import PoliciesPage from './pages/Landing/01NavBar/01SIG/01Operations/01OperationPolicies/OperationPolicies';
import FormsPage from './pages/Landing/01NavBar/01SIG/01Operations/02OperationForms/OperationFormsPage';
import ProceduresPage from './pages/Landing/01NavBar/01SIG/01Operations/03OperationProcedures/OperationProceduresPage';
import RegistersPage from './pages/Landing/01NavBar/01SIG/01Operations/04OperationRegisters/OperationRegistersPage';
import IndicatorsPage from './pages/Landing/01NavBar/01SIG/01Operations/05OperationIndicators/OperationIndicatorsPage';
// TECNOLOGIA
import TecnologyPage from './pages/Landing/01NavBar/01SIG/02Tecnology/TecnologyPage';
// CALIDAD Y ADMIN
// FINANCIERO
// MARKETING
// PROYECTOS Y SERVICIOS
import AboutUsPage from './pages/Landing/01NavBar/02Nosotros/AboutUsPage';
import DocumentsPage from './pages/Landing/01NavBar/03Documents/DocumentsPage';
import TDUnivertityPage from './pages/Landing/01NavBar/04TDUnivertity/TDUnivertityPage';
import TechnicalReportPage from './pages/Landing/01NavBar/05TechnicalReport/TechnicalReportPage';
import AssetManagementPage from './pages/Landing/01NavBar/06AssetManagement/AssetManagementPage';
import RequestsPage from './pages/Landing/01NavBar/07Requests/RequestsPage';

// ERROR404
import Error404 from './pages/Error404/Error404';

function App() {

    return (
        <div>
            <BrowserRouter>
                <WhatsApp />
                <Scroll />
                <Routes>
                    {/* ----------LANDINGPAGE---------- */}
                    <Route path='/' element={<LandingPage />} />
                    <Route path='/sig' element={<SIGPage />} />
                    {/* ----------SIG OPERACIONES---------- */}
                    <Route path='/sig/operations' element={<OperationsPage />} />
                    <Route path='/sig/operations/policies' element={<PoliciesPage />} />
                    <Route path='/sig/operations/forms' element={<FormsPage />} />
                    <Route path='/sig/operations/procedures' element={<ProceduresPage />} />
                    <Route path='/sig/operations/registers' element={<RegistersPage />} />
                    <Route path='/sig/operations/indicators' element={<IndicatorsPage />} />
                    {/* ----------SIG TECNOLOGIA---------- */}
                    <Route path='/sig/tecnology' element={<TecnologyPage />} />

                    <Route path='/about-us' element={<AboutUsPage />} />
                    <Route path='/documents' element={<DocumentsPage />} />
                    <Route path='/top-drive-univertity' element={<TDUnivertityPage />} />
                    <Route path='/technical-report' element={<TechnicalReportPage />} />
                    <Route path='/asset-management' element={<AssetManagementPage />} />
                    <Route path='/requests' element={<RequestsPage />} />
                    
                    {/* ERROR 404 */}
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;