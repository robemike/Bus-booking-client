import React from 'react';
import { useNavigate } from 'react-router-dom';

function Drivers() {
  const navigate = useNavigate();

  const drivers = [
    { name: "John Doe", numberPlate: "KBC123A" },
    { name: "Jane Smith", numberPlate: "KDE456B" },
    { name: "Michael Johnson", numberPlate: "KFG789C" },
    { name: "Emily Davis", numberPlate: "KHI012D" },
    { name: "Robert Brown", numberPlate: "KJK345E" },
    { name: "Linda Wilson", numberPlate: "KLN678F" },
    { name: "James Taylor", numberPlate: "KMP901G" },
    { name: "Barbara Anderson", numberPlate: "KQR234H" },
    { name: "William Thomas", numberPlate: "KST567I" },
    { name: "Susan Martinez", numberPlate: "KUV890J" },
    { name: "David Lee", numberPlate: "KWX123K" },
    { name: "Jessica Harris", numberPlate: "KYZ456L" },
    { name: "Charles Clark", numberPlate: "KAB789M" },
    { name: "Sarah Lewis", numberPlate: "KCD012N" },
    { name: "Daniel Walker", numberPlate: "KEE345O" },
    { name: "Karen Hall", numberPlate: "KFF678P" },
    { name: "Matthew Young", numberPlate: "KGG901Q" },
    { name: "Nancy Allen", numberPlate: "KHH234R" },
    { name: "Andrew King", numberPlate: "KII567S" },
    { name: "Amanda Wright", numberPlate: "KJJ890T" },
    { name: "Steven Harris", numberPlate: "KKK123U" },
    { name: "Laura Martin", numberPlate: "KLL456V" },
    { name: "Paul Robinson", numberPlate: "KMM789W" },
    { name: "Diana Scott", numberPlate: "KNN012X" },
    { name: "Frank Carter", numberPlate: "KOO345Y" },
    { name: "Sophia Evans", numberPlate: "KPP678Z" },
    { name: "Tom Lewis", numberPlate: "KQQ901A" }
  ];

  return (
    <div id='din-class' className="container">
      <div className="navbar">
        <h1>BUSLINK</h1>
      </div>
    
      <div className="sidebar">
        <a onClick={() => navigate('/admin/dashboard')}>Dashboard</a>
        <a onClick={() => navigate('/admin/drivers')}>Drivers</a>
        <a onClick={() => navigate('/admin/buses')}>Buses</a>
        <a onClick={() => navigate('/admin/customers')}>Customers</a>
      </div>

      <div className="content">
        <h1>Drivers</h1>
        <ul className="drivers-list">
          {drivers.map((driver, index) => (
            <li key={index} className="driver-item">
              <div className="driver-field">
                <strong>Name:</strong> {driver.name}
              </div>
              <div className="driver-field">
                <strong>Number Plate:</strong> {driver.numberPlate}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Drivers;
