import './App.css';
import Admin from './components/Admin/admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drivers from './components/Admin/drivers';
import Customers from './components/Admin/customers';
import Buses from './components/Admin/buses';
import Seats from './components/customer/seats';


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
