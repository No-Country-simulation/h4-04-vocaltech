import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Formulario from './Pages/Fromulario';


function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App
