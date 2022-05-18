import Signup from "./pages/Auth/Signup";
import Home from "./pages/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


  // "homepage": "https://Dr-HaEgHo.github.io/admin-panel",
