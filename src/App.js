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

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup />} />
        
        <Route element={ <ProtectedRoutes/> } >
          <Route path='/*' element={<Dashboard />} />
      </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


  // "homepage": "https://Dr-HaEgHo.github.io/admin-panel",
