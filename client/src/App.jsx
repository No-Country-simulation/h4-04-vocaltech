
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './index.css';


import { LoginPage } from "./modules/auth/pages/LoginPage";
//import { RegisterPage } from "./modules/auth/pages/RegisterPage";
 import{Registronuevo} from "./modules/auth/pages/Registronuevo"

function App() {
  const routes = [
    {
      path: "/login",
      element: <LoginPage />,
    },
   
  
   {
    path:"/registro",
    element:<Registronuevo/>,
   },

    {
      path: "*",
      element: <Navigate to="/login" replace />,
    },
  ];

  return (
    <Router>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Router>
  );
}
export default App; 