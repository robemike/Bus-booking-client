import './App.css';
import Admin from './Components/Admin/admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drivers from './Components/Admin/drivers';
import Customers from './Components/Admin/customers';
import Buses from './Components/Admin/buses';
import Seats from './Components/Customer/seats';




function App() {


  return (
   
    <Router>
    <Routes>
      <Route path="/dashboard" element={<Admin />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/buses" element={<Buses />} />
      <Route path="/seats" element={<Seats />} />
    </Routes>
  </Router>
  );


}



export default App;
