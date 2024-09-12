import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles.css';
// GENERALES
import WhatsApp from './components/WhatsApp/WhatsApp';
import Scroll from './components/Scroll/Scroll';
// LANDINGPAGE
import LoginPage from './pages/Landing/01NavBar/00PreNavBar/03LoginColaborators/LoginPage';

// PROTECTEDROUTES
import ProtectedRoute from './ProtectedRoute';
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
import FinantialPage from './pages/Landing/01NavBar/01SIG/04Finantial/FinantialPage';
import FinantialPoliciesPage from './pages/Landing/01NavBar/01SIG/04Finantial/01FinantialPolicies/FinantialPoliciesPage';
import FinantialFormsPage from './pages/Landing/01NavBar/01SIG/04Finantial/02FinantialForms/FinantialFormsPage';
import FinantialProceduresPage from './pages/Landing/01NavBar/01SIG/04Finantial/03FinantialProcedures/FinantialProceduresPage';
import FinantialRegistersPage from './pages/Landing/01NavBar/01SIG/04Finantial/04FinantialRegisters/FinantialRegistersPage';
import FinantialIndicatorsPage from './pages/Landing/01NavBar/01SIG/04Finantial/05FinantialIndicators/FinantialIndicatorsPage';
// MARKETING
import MarketingPage from './pages/Landing/01NavBar/01SIG/05Marketing/MarketingPage';
import MarketingPoliciesPage from './pages/Landing/01NavBar/01SIG/05Marketing/01MarketingPolicies/MarketingPoliciesPage';
import MarketingFormsPage from './pages/Landing/01NavBar/01SIG/05Marketing/02MarketingForms/MarketingFormsPage';
import MarketingProceduresPage from './pages/Landing/01NavBar/01SIG/05Marketing/03MarketingProcedures/MarketingProceduresPage';
import MarketingRegistersPage from './pages/Landing/01NavBar/01SIG/05Marketing/04MarketingRegisters/MarketingRegistersPage';
import MarketingIndicatorsPage from './pages/Landing/01NavBar/01SIG/05Marketing/05MarketingIndicators/MarketingIndicatorsPage';
// PROYECTOS Y SERVICIOS
import ProjectsSolutionsPage from './pages/Landing/01NavBar/01SIG/06ProjectsSolutions/ProjectsSolutionsPage';
import ProjectsSolutionsPoliciesPage from './pages/Landing/01NavBar/01SIG/06ProjectsSolutions/01ProjectsSolutionsPolicies/ProjectsSolutionsPoliciesPage';
import ProjectsSolutionsFormsPage from './pages/Landing/01NavBar/01SIG/06ProjectsSolutions/02ProjectsSolutionsForms/ProjectsSolutionsFormsPage';
import ProjectsSolutionsProceduresPage from './pages/Landing/01NavBar/01SIG/06ProjectsSolutions/03ProjectsSolutionsProcedures/ProjectsSolutionsProceduresPage';
import ProjectsSolutionsRegistersPage from './pages/Landing/01NavBar/01SIG/06ProjectsSolutions/04ProjectsSolutionsRegisters/ProjectsSolutionsRegistersPage';
import ProjectsSolutionsIndicatorsPage from './pages/Landing/01NavBar/01SIG/06ProjectsSolutions/05ProjectsSolutionsIndicators/ProjectsSolutionsIndicatorsPage';
import AboutUsPage from './pages/Landing/01NavBar/02AboutUs/AboutUsPage';
// DOCUMENTOS
import DocumentsPage from './pages/Landing/01NavBar/03Documents/DocumentsPage';
import FinantialDocumentsPage from './pages/Landing/01NavBar/03Documents/01FinantialDocumentsPage/FinantialDocumentsPage';
import FinantialDocumentsTopDriveGroupPage from './pages/Landing/01NavBar/03Documents/01FinantialDocumentsPage/01FinantialDocumentsTopDriveGroup/FinantialDocumentsTopDriveGroupPage';
import FinantialDocumentsWetsPage from './pages/Landing/01NavBar/03Documents/01FinantialDocumentsPage/02FinantialDocumentsWets/FinantialDocumentsWetsPage';
import FinantialDocumentsWestPage from './pages/Landing/01NavBar/03Documents/01FinantialDocumentsPage/03FinantialDocumentsWest/FinantialDocumentsWestPage';
import FinantialDocumentsKowaPage from './pages/Landing/01NavBar/03Documents/01FinantialDocumentsPage/04FinantialDocumentsKowa/FinantialDocumentsKowaPage';

import MarketingDocumentsPage from './pages/Landing/01NavBar/03Documents/02MarketingDocuments/MarketingDocumentsPage';
import AdministrativeDocumentsPage from './pages/Landing/01NavBar/03Documents/03AdministrativeDocuments/AdministrativeDocumentsPage';
// UNIVERSITY
import TDUnivertityPage from './pages/Landing/01NavBar/04TDUnivertity/TDUnivertityPage';
import CorporateInductionNewPersonnelPage from './pages/Landing/01NavBar/04TDUnivertity/01CorporateInductionNewPersonnel/CorporateInductionNewPersonnelPage';
import InductionVisitPlantPage from './pages/Landing/01NavBar/04TDUnivertity/02InductionVisitPlant/InductionVisitPlantPage';
import TrainingPage from './pages/Landing/01NavBar/04TDUnivertity/03Training/TrainingPage';
// REPORTES TECNICOS
import TechnicalReportPage from './pages/Landing/01NavBar/05TechnicalReport/TechnicalReportPage';
import TechnicalDataSheets from './pages/Landing/01NavBar/05TechnicalReport/01TechnicalDataSheets/TechnicalDataSheetsPage';
import ConformityCertificatesPage from './pages/Landing/01NavBar/05TechnicalReport/02ConformityCertificates/ConformityCertificatesPage';
import KitsPackagesPage from './pages/Landing/01NavBar/05TechnicalReport/03Kits&Packages/KitsPackagesPage';
import SupportDocumentsPage from './pages/Landing/01NavBar/05TechnicalReport/04SupportDocuments/SupportDocumentsPage';
// GESTION DE ACTIVOS
import AssetManagementPage from './pages/Landing/01NavBar/06AssetManagement/AssetManagementPage';
import MyAssetsPage from './pages/Landing/01NavBar/06AssetManagement/01MyAssets/MyAssetsPage';
import AssetRequestPage from './pages/Landing/01NavBar/06AssetManagement/02AssetRequest/AssetRequestPage';
import AssetSummaryPage from './pages/Landing/01NavBar/06AssetManagement/03AssetSummary/AssetSummaryPage';
// SOLICITUDES
import RequestsPage from './pages/Landing/01NavBar/07Requests/RequestsPage';
import TechPage from './pages/Landing/01NavBar/07Requests/01Tech/TechPage';
import QualityPage from './pages/Landing/01NavBar/07Requests/02Quality/QualityPage';
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
                    <Route path='/login' element={<LoginPage />} />
                    <Route element={<ProtectedRoute />}>
                    {/* PROTECTED ROUTES */}
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
                        <Route path='/sig/technology' element={<TecnologyPage />} />
                        <Route path='/sig/technology/policies' element={<TecnologyPoliciesPage />} />
                        <Route path='/sig/technology/forms' element={<TecnologyFormsPage />} />
                        <Route path='/sig/technology/procedures' element={<TecnologyProceduresPage />} />
                        <Route path='/sig/technology/registers' element={<TecnologyRegistersPage />} />
                        <Route path='/sig/technology/indicators' element={<TecnologyIndicatorsPage />} />
                        {/* ----------SIG CALIDAD Y ADMINISTRACION---------- */}
                        <Route path='/sig/quality-and-administrative' element={<QualityAdministrativePage />} />
                        <Route path='/sig/quality-and-administrative/policies' element={<QualityAdministrativePoliciesPage />} />
                        <Route path='/sig/quality-and-administrative/forms' element={<QualityAdministrativeFormsPage />} />
                        <Route path='/sig/quality-and-administrative/procedures' element={<QualityAdministrativeProceduresPage />} />
                        <Route path='/sig/quality-and-administrative/registers' element={<QualityAdministrativeRegistersPage />} />
                        <Route path='/sig/quality-and-administrative/indicators' element={<QualityAdministrativeIndicatorsPage />} />
                        {/* ----------SIG FINANCIERO---------- */}
                        <Route path='/sig/finantial' element={<FinantialPage />} />
                        <Route path='/sig/finantial/policies' element={<FinantialPoliciesPage />} />
                        <Route path='/sig/finantial/forms' element={<FinantialFormsPage />} />
                        <Route path='/sig/finantial/procedures' element={<FinantialProceduresPage />} />
                        <Route path='/sig/finantial/registers' element={<FinantialRegistersPage />} />
                        <Route path='/sig/finantial/indicators' element={<FinantialIndicatorsPage />} />
                        {/* ----------SIG MARKETING---------- */}
                        <Route path='/sig/marketing' element={<MarketingPage />} />
                        <Route path='/sig/marketing/policies' element={<MarketingPoliciesPage />} />
                        <Route path='/sig/marketing/forms' element={<MarketingFormsPage />} />
                        <Route path='/sig/marketing/procedures' element={<MarketingProceduresPage />} />
                        <Route path='/sig/marketing/registers' element={<MarketingRegistersPage />} />
                        <Route path='/sig/marketing/indicators' element={<MarketingIndicatorsPage />} />
                        {/* ----------SIG PROYECTOS Y SERVICIOS---------- */}
                        <Route path='/sig/projects-and-solutions' element={<ProjectsSolutionsPage />} />
                        <Route path='/sig/projects-and-solutions/policies' element={<ProjectsSolutionsPoliciesPage />} />
                        <Route path='/sig/projects-and-solutions/forms' element={<ProjectsSolutionsFormsPage />} />
                        <Route path='/sig/projects-and-solutions/procedures' element={<ProjectsSolutionsProceduresPage />} />
                        <Route path='/sig/projects-and-solutions/registers' element={<ProjectsSolutionsRegistersPage />} />
                        <Route path='/sig/projects-and-solutions/indicators' element={<ProjectsSolutionsIndicatorsPage />} />

                        {/* ----------NOSOTROS---------- */}
                        <Route path='/about-us' element={<AboutUsPage />} />

                        {/* ----------DOCUMENTOS---------- */}
                        <Route path='/documents' element={<DocumentsPage />} />
                        <Route path='/documents/finantial' element={<FinantialDocumentsPage />} />
                        <Route path='/documents/finantial/top-drive-group' element={<FinantialDocumentsTopDriveGroupPage />} />
                        <Route path='/documents/finantial/world-electrict-telecom-solutions' element={<FinantialDocumentsWetsPage />} />
                        <Route path='/documents/finantial/west-cargo-logistics' element={<FinantialDocumentsWestPage />} />
                        <Route path='/documents/finantial/kowa-coworking-warehouse' element={<FinantialDocumentsKowaPage />} />

                        <Route path='/documents/marketing' element={<MarketingDocumentsPage />} />
                        <Route path='/documents/administrative' element={<AdministrativeDocumentsPage />} />

                        {/* ----------TD UNIVERSITY---------- */}
                        <Route path='/top-drive-univertity' element={<TDUnivertityPage />} />
                        <Route path='/top-drive-univertity/corporate-induction-for-new-personnel' element={<CorporateInductionNewPersonnelPage />} />
                        <Route path='/top-drive-univertity/induction-visit-plant' element={<InductionVisitPlantPage />} />
                        <Route path='/top-drive-univertity/training' element={<TrainingPage />} />

                        {/* ----------REPORTE TECNICO---------- */}
                        <Route path='/technical-report' element={<TechnicalReportPage />} />
                        <Route path='/technical-report/technical-data-sheets' element={<TechnicalDataSheets />} />
                        <Route path='/technical-report/conformity-certificates' element={<ConformityCertificatesPage />} />
                        <Route path='/technical-report/kits&-packages' element={<KitsPackagesPage />} />
                        <Route path='/technical-report/support-documents' element={<SupportDocumentsPage />} />

                        {/* ----------GESTION DE ACTIVOS---------- */}
                        <Route path='/asset-management' element={<AssetManagementPage />} />
                        <Route path='/asset-management/my-assets' element={<MyAssetsPage />} />
                        <Route path='/asset-management/asset-request' element={<AssetRequestPage />} />
                        <Route path='/asset-management/asset-summary' element={<AssetSummaryPage />} />

                        {/* ----------SOLICITUDES---------- */}
                        <Route path='/requests' element={<RequestsPage />} />
                        <Route path='/requests/tech' element={<TechPage />} />
                        <Route path='/requests/quality' element={<QualityPage />} />
                    </Route>
                    {/* ERROR 404 */}
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;