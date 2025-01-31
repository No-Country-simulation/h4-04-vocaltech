import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario from "./Pages/Fromulario"; 
import ServicesPage from "./Pages/ServicesPage"; 
import Login from "./Pages/Login"; 
import Register from "./Pages/Register"; 
import LandingPage from "./Pages/LandingPage"; 
import EmpresaForm from "./components/EmpresaForm";
import EmprendedorForm from "./components/EmprendedorForm";
//import { Adminpage } from "./Pages/Adminpage";

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
        <Route path="/form-empresa" element={<EmpresaForm />}/>

        {/* Ruta Formulario Emprendedor */}
        <Route path="/form-emprendedor" element={<EmprendedorForm />}/>
        {/* Rutas de admin */}
        {/*<Route path="/admin" element={<Adminpage />} /> */}
        
        {/* Ruta 404: Página no encontrada */}
        <Route path="*" element={<div>Página no encontrada - 404</div>} /> 
      </Routes>
    </Router>
  );
}

export default App;
