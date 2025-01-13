import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import DiagnosticoEmprendedores from './Pages/DiagnosticoEmprendedores';
import DiagnosticoEmpresas from './Pages/DiagnosticoEmpresas';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emprendedores" element={<DiagnosticoEmprendedores />} />
        <Route path="/empresas" element={<DiagnosticoEmpresas />} />
      </Routes>
    </Router>
  );
}

export default App
