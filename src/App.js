import Navbar from "./components/Navbar/Navbar";
import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import DashHome from "./components/Home/DashHome";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        {/* <Route path='/dash-home' element={<DashHome/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
