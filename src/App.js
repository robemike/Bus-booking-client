import './App.css';
import Admin from './Components/admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Drivers from './Components/drivers';
import Customers from './Components/customers';
import Buses from './Components/buses';




function App() {


  return (
   
    <Router>
    <Routes>
      <Route path="/dashboard" element={<Admin />} />
      <Route path="/drivers" element={<Drivers />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/buses" element={<Buses />} />
    </Routes>
  </Router>
  );


}



export default App;
