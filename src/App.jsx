import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario from "./Pages/Fromulario";
import ServicesPage from "./Pages/ServicesPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import LandingPage from "./Pages/LandingPage";
import EmprendedorForm from "./components/EmprendedorForm";
import  Adminpage  from "./Pages/Adminpage";
import FormEmpresaNavi from "./components/FormEmpresaNavi";
import Mvp1 from "./components/mvp1";
import Comunicacion1 from "./components/Comunicacion1";
import Talento1 from "./components/Talento1";
import MVP2 from "./components/MVP2";
import Talento2 from "./components/Talento2";
import Fin from "./components/Fin";
import FormularioTerminado from "./components/Formulario-Terminado";
import ComunicacionEmpre1 from "./components/ComunicacionEmpre1";
import Pitch1 from "./components/Pitch1";
import Pitch2 from "./components/Pitch2";
import Mvpe1 from "./components/Mvpe1";
import Mvpe2 from "./components/Mvpe2";
import TalentoEmpre1 from "./components/TalentoEmpre1";
import TalentoEmpre2 from "./components/TalentoEmpre2";
import FinEmpre from "./components/FinEmpre";
//import FormNavigation from "./components/FormNavigation";
import AdminpageEmprendedor from "./Pages/AdminpageEmprendedor";
import DetalleLead from "./components/DetalleLead";


function App() {
  return (
    <Router>
      <Routes>
        {/* Rutas principales */}
        <Route path="/" element={<LandingPage />} />

        {/* Rutas de autenticación */}
        <Route path="/registro" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Rutas de servicios */}
        <Route path="/services" element={<ServicesPage />} />

        {/* Rutas de formularios */}
        <Route path="/formularioinicio" element={<Formulario />} />

        {/* Ruta Formulario Empresa */}
        <Route path="/form-empresa" element={<FormEmpresaNavi />} />

        {/* Ruta Formulario Emprendedor */}
        <Route path="/form-emprendedor" element={<EmprendedorForm />}/>

        {/* Rutas de admin */}
        <Route path="/adminpage" element={<Adminpage />} />

         {/* Rutas de admin Emprendedor */}
         <Route path="/adminEmprendedor" element={<AdminpageEmprendedor />} />
         <Route path="/adminEmprendedor/:id" element={<DetalleLead />} />
        
        <Route path="/form-emprendedor" element={<EmprendedorForm />} />

        {/* Rutas de mvp1 */}
        <Route path="/mvp1" element={<Mvp1 />} />

        {/* Rutas de mvp1 */}
        <Route path="/mvp2" element={<MVP2 />} />

        {/* Rutas de talento1 */}
        <Route path="/talento1" element={<Talento1 />} />

        {/* Rutas de talento2 */}
        <Route path="/talento2" element={<Talento2 />} />

        {/* Rutas de comunicacion1*/}
        <Route path="/comunicacion1" element={<Comunicacion1 />} />

        {/* Rutas de formulario-terminado*/}
        <Route path="/formulario-terminado" element={<FormularioTerminado />} />

      {/* Rutas de fin*/}
      <Route path="/fin" element={<Fin />} />

        {/* Rutas de comunicacion-empre1*/}
        <Route path="/comunicacion-empre1" element={<ComunicacionEmpre1 />} />

        {/* Rutas de pitch1*/}
        <Route path="/pitch1" element={<Pitch1 />} />

        {/* Rutas de pitch2*/}
        <Route path="/pitch2" element={<Pitch2 />} />

        {/* Rutas de mvpe1*/}
        <Route path="/mvpe1" element={<Mvpe1 />} />

        {/* Rutas de mvpe2*/}
        <Route path="/mvpe2" element={<Mvpe2 />} />

        {/* Rutas de talento-empre1*/}
        <Route path="/talento-empre1" element={<TalentoEmpre1 />} />

        {/* Rutas de tañento-empre2*/}
        <Route path="/talento-empre2" element={<TalentoEmpre2 />} />

        {/* Rutas de fin-empre*/}
        <Route path="/fin-empre" element={<FinEmpre />} />

        {/* Ruta 404: Página no encontrada */}
        <Route path="*" element={<div>Página no encontrada - 404</div>} />
      </Routes>
    </Router>
  );
}

export default App;
