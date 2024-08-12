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
import TecnologyPoliciesPage from './pages/Landing/01NavBar/01SIG/02Tecnology/01TecnologyPolicies/TecnologyPoliciesPage';
import TecnologyFormsPage from './pages/Landing/01NavBar/01SIG/02Tecnology/02TecnologyForms/TecnologyFormsPage';
import TecnologyProceduresPage from './pages/Landing/01NavBar/01SIG/02Tecnology/03TecnologyProcedures/TecnologyProceduresPage';
import TecnologyRegistersPage from './pages/Landing/01NavBar/01SIG/02Tecnology/04TecnologyRegisters/TecnologyRegistersPage';
import TecnologyIndicatorsPage from './pages/Landing/01NavBar/01SIG/02Tecnology/05TecnologyIndicators/TecnologyIndicatorsPage';
// CALIDAD Y ADMIN
import QualityAdministrativePage from './pages/Landing/01NavBar/01SIG/03QualityAdministrative/QualityAdministrativePage';
import QualityAdministrativePoliciesPage from './pages/Landing/01NavBar/01SIG/03QualityAdministrative/01QualityAdministrativePolicies/QualityAdministrativePoliciesPage';
import QualityAdministrativeFormsPage from './pages/Landing/01NavBar/01SIG/03QualityAdministrative/02QualityAdministrativeForms/QualityAdministrativeFormsPage';
import QualityAdministrativeProceduresPage from './pages/Landing/01NavBar/01SIG/03QualityAdministrative/03QualityAdministrativeProcedures/QualityAdministrativeProceduresPage';
import QualityAdministrativeRegistersPage from './pages/Landing/01NavBar/01SIG/03QualityAdministrative/04QualityAdministrativeRegisters/QualityAdministrativeRegistersPage';
import QualityAdministrativeIndicatorsPage from './pages/Landing/01NavBar/01SIG/03QualityAdministrative/05QualityAdministrativeIndicators/QualityAdministrativeIndicatorsPage';
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
                    <Route path='/sig/tecnology/policies' element={<TecnologyPoliciesPage />} />
                    <Route path='/sig/tecnology/forms' element={<TecnologyFormsPage />} />
                    <Route path='/sig/tecnology/procedures' element={<TecnologyProceduresPage />} />
                    <Route path='/sig/tecnology/registers' element={<TecnologyRegistersPage />} />
                    <Route path='/sig/tecnology/indicators' element={<TecnologyIndicatorsPage />} />
                    {/* ----------SIG CALIDAD Y ADMINISTRACION---------- */}
                    <Route path='/sig/quality-and-administrative' element={<QualityAdministrativePage />} />
                    <Route path='/sig/quality-and-administrative/policies' element={<QualityAdministrativePoliciesPage />} />
                    <Route path='/sig/quality-and-administrative/forms' element={<QualityAdministrativeFormsPage />} />
                    <Route path='/sig/quality-and-administrative/procedures' element={<QualityAdministrativeProceduresPage />} />
                    <Route path='/sig/quality-and-administrative/registers' element={<QualityAdministrativeRegistersPage />} />
                    <Route path='/sig/quality-and-administrative/indicators' element={<QualityAdministrativeIndicatorsPage />} />

                    {/* ----------NOSOTROS---------- */}
                    <Route path='/about-us' element={<AboutUsPage />} />
                    {/* ----------DOCUMENTOS---------- */}
                    <Route path='/documents' element={<DocumentsPage />} />
                    {/* ----------TD UNIVERSITY---------- */}
                    <Route path='/top-drive-univertity' element={<TDUnivertityPage />} />
                    {/* ----------REPORTE TECNICO---------- */}
                    <Route path='/technical-report' element={<TechnicalReportPage />} />
                    {/* ----------gESTION DE ACTIVOS---------- */}
                    <Route path='/asset-management' element={<AssetManagementPage />} />
                    {/* ----------SOLICITUDES---------- */}
                    <Route path='/requests' element={<RequestsPage />} />
                    
                    {/* ERROR 404 */}
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;