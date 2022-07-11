import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import ProtectedRoutes from "./components/ProtectedRoutes";
import 'react-toastify/dist/ReactToastify.css'
import DashHome from "./components/Home/DashHome";
import Teams from "./components/Dashboard/Teams/Teams";
import SideBar from "./components/Dashboard/SideBar/SideBar";
import Products from "./components/Dashboard/Products/Products";
import Clients from "./components/Dashboard/Clients/Clients";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />

        {/* Protected the dashboard route so only logged in users can have access */}
        <Route element={<ProtectedRoutes />} >
          <Route path='/*' element={<Dashboard />} />
          {/* <Route path='dashboard/teams' element={<Teams/> } /> */}
          {/* <Route path='dashboard/products' element={<Products/> } /> */}
          {/* <Route path='dashboard/clients' element={<Clients/> } /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


  // "homepage": "https://Dr-HaEgHo.github.io/admin-panel",
