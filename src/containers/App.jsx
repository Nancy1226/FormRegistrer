import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Registrer from "../pages/Registrer";
import Login from "../pages/Login";
import RegistrerCar from "../pages/RegistrerCar";
import NotFound from "../pages/NotFound";

function App(){
  return ( 
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/registrer' element={<Registrer />} />
        <Route path='/registrerCar' element={<RegistrerCar />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </BrowserRouter> 
    );
}
export default App;