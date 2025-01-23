import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario from "./Pages/Fromulario";
import LandingPage from "./Pages/LandingPage"; // Importación correcta

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* Ruta para el Formulario */}
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App;
