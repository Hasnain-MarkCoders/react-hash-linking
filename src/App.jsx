import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import Header from "./components/Header/Header"
import Features from "./pages/Features/Features"
import Home from "./pages/Home/Home"
import Pricing from "./pages/Pricing/Pricing"
import Users from "./pages/Users/Users"
import ROUTES_NAME from './../routesNames'
import Layout from './pages/Layout/Layout'
function App() {
  const router = createBrowserRouter([
    {path:ROUTES_NAME.HOME,element:<Home/>},
    {path:ROUTES_NAME.PRICING,element:<Home/>},
    {path:ROUTES_NAME.CUSTOMER,element:<Home/>},
    {path:ROUTES_NAME.CONTENT,element:<Home/>},
  ])
return (
  <>
  <Routes>
    <Route path={ROUTES_NAME.HOME} element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path={ROUTES_NAME.PRICING} element={<Pricing/>}/>
    <Route path={ROUTES_NAME.CUSTOMER} element={<Users/>}/>
    <Route path={ROUTES_NAME.CONTENT} element={<Features/>}/>
  


    </Route>

  </Routes>

  </>

)
}

export default App
