import React from "react";
import './customerpage.css';

function Customer() {
    const data = [
        { from_to: 'Nairobi - Sugoi',  seat_no: '3A', bus_no :'Bus 45', travel_date: '24-08-2024', time : '20:30' },
        { from_to : 'Nairobi - Mombasa',  age: 22, seat_no: '2B', bus_no: 'Bus 21',  travel_date: '25-07-2024', time : '21:00' },
        { from_to : 'Nairobi - Kisumu', age: 22, seat_no: '4A', bus_no :'Bus 12', travel_date: '30-07-2024', time :'18:00' }
    ];

    return (
        <div className="container">
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
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((customer, index) => (
                            <tr key={index}>
                                <td>{customer.from_to}</td>
                                <td>{customer.bus_no}</td>
                                <td>{customer.seat_no}</td>
                                <td>{customer.travel_date}</td>
                                <td>{customer.time}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Customer;
