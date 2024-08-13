import React, { useState } from "react";
import "./customerpage.css";

function Customer() {
  const [data, setData] = useState([
    {
      from_to: "Nairobi - Sugoi",
      seat_no: "3A",
      bus_no: "Bus 45",
      travel_date: "24-08-2024",
      time: "20:30",
    },
    {
      from_to: "Nairobi - Mombasa",
      seat_no: "2B",
      bus_no: "Bus 21",
      travel_date: "25-07-2024",
      time: "21:00",
    },
    {
      from_to: "Nairobi - Kisumu",
      seat_no: "4A",
      bus_no: "Bus 12",
      travel_date: "30-07-2024",
      time: "18:00",
    },
  ]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentCustomer, setCurrentCustomer] = useState(null);

  const handleDelete = (index) => {
    const updatedData = data.filter((_, i) => i !== index);
    setData(updatedData);
  };

  const handleEditClick = (index) => {
    setIsEditing(true);
    setCurrentCustomer({ ...data[index], index });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setCurrentCustomer((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveEdit = () => {
    const updatedData = data.map((item, index) =>
      index === currentCustomer.index ? currentCustomer : item
    );
    setData(updatedData);
    setIsEditing(false);
    setCurrentCustomer(null);
  };

  return (
    <div className="page-wrapper">
      <div className="container">
        <div className="customer-page">
          <h1>Customer Bookings</h1>
          <hr />
          <div>
            <table>
              <thead>
                <tr>
                  <th>FROM - TO</th>
                  <th>BUS NO.</th>
                  <th>SEAT NO.</th>
                  <th>TRAVEL DATE</th>
                  <th>TIME</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {data.map((customer, index) => (
                  <tr key={index}>
                    {isEditing && currentCustomer.index === index ? (
                      <>
                        <td>
                          <input
                            type="text"
                            name="from_to"
                            value={currentCustomer.from_to}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="bus_no"
                            value={currentCustomer.bus_no}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="seat_no"
                            value={currentCustomer.seat_no}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="travel_date"
                            value={currentCustomer.travel_date}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <input
                            type="text"
                            name="time"
                            value={currentCustomer.time}
                            onChange={handleEditChange}
                          />
                        </td>
                        <td>
                          <button onClick={handleSaveEdit}>Save</button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{customer.from_to}</td>
                        <td>{customer.bus_no}</td>
                        <td>{customer.seat_no}</td>
                        <td>{customer.travel_date}</td>
                        <td>{customer.time}</td>
                        <td>
                          <button onClick={() => handleEditClick(index)}>
                            Edit
                          </button>
                          <button onClick={() => handleDelete(index)}>
                            Delete
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customer;
