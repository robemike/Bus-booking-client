import React from "react";
import { useNavigate } from "react-router-dom";



function Customers() {
  const navigate = useNavigate();

  const customers = [
    { name: "John Doe", seatNo: "1A", numberPlate: "KDD 154T" },
    { name: "Jane Smith", seatNo: "1B", numberPlate: "KBY 112P" },
    { name: "Michael Johnson", seatNo: "2A", numberPlate: "KDK 272A" },
    { name: "Emily Davis", seatNo: "2B", numberPlate: "KDL 699P" },
    { name: "Robert Brown", seatNo: "3A", numberPlate: "KCC 123A" },
    { name: "Linda Wilson", seatNo: "3B", numberPlate: "KDP 222Q" },
    { name: "James Taylor", seatNo: "4A", numberPlate: "KAA 123A" },
    { name: "Barbara Anderson", seatNo: "4B", numberPlate: "KBV 456P" },
    { name: "William Thomas", seatNo: "5A", numberPlate: "KCC 777F" },
    { name: "Susan Martinez", seatNo: "5B", numberPlate: "KBM 263S" },
    { name: "David Lee", seatNo: "6A", numberPlate: "KCR 272A" },
    { name: "Jessica Harris", seatNo: "6B", numberPlate: "KAY 234P" },
    { name: "Charles Clark", seatNo: "7A", numberPlate: "KAL 133E" },
    { name: "Sarah Lewis", seatNo: "7B", numberPlate: "KTZ 223" },
    { name: "Daniel Walker", seatNo: "8A", numberPlate: "KBV 676Y" },
    { name: "Karen Hall", seatNo: "8B", numberPlate: "KDF 222L" },
    { name: "Matthew Young", seatNo: "9A", numberPlate: "KCV 522M" },
    { name: "Nancy Allen", seatNo: "9B", numberPlate: "KBM 362D" },
    { name: "Andrew King", seatNo: "10A", numberPlate: "KLM 223" },
    { name: "Amanda Wright", seatNo: "10B", numberPlate: "KCT 130E" }
  ];

  return (
    <div  id="din-class"  className="container">
      <div className="navbar">
        <h1>BUSLINK</h1>
      </div>
      
      <div id="din-class1"  className="row">
        <div className="sidebar">
          <a href="dashboard" onClick={() => navigate("/admin/dashboard")}>Dashboard</a>
          <a href="drivers" onClick={() => navigate("/admin/drivers")}>Drivers</a>
          <a href="buses" onClick={() => navigate("/admin/buses")}>Buses</a>
          <a href="customers" onClick={() => navigate("/admin/customers")}>Customers</a>
        </div>
        <div className="content">
          <h1>Customers</h1>
          <div className="customers-list">
            {customers.map((customer, index) => (
              <div key={index} className="customer-item">
                <div className="customer-field">
                  <strong>Name:</strong> {customer.name}
                </div>
                <div className="customer-field">
                  <strong>Seat No:</strong> {customer.seatNo}
                </div>
                <div className="customer-field">
                  <strong>Number Plate:</strong> {customer.numberPlate}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
