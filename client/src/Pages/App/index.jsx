import { useRoutes, BrowserRouter } from 'react-router-dom'
import Login from '../Login'
import Registronuevo from"../../modules/auth/components/RegisterNew"
const AppRoutes = () => {
  let routes = useRoutes([
    {path: '/', element: <Login /> },
    {path:"/registro",
    element:<Registronuevo/>},
    {path: "*",
      element: <Navigate to="/login" replace />}
])
return routes

}
const App = () => {
  return (
    <>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </>
  )
}

export default App
