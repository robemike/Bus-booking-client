// import React from "react";
// import "./buses.css";
// import Navbar from "./Navbar.js";
// import { useNavigate } from "react-router-dom";

// function DriverBuses() {
//   const navigate = useNavigate();
//   const busData = [
//     { name: "Super Metro", code: "KZF 456F" },
//     { name: "The Guardian", code: "KWT 654T" },
//     { name: "Lopha Travelers", code: "KDA 214K" },
//     { name: "StarBus", code: "KDB 676U" },
//     { name: "Modern Coast", code: "KBQ 678U" },
//     { name: "Embassava", code: "KDC 766O" },
//     { name: "Muranga Shuttle", code: "KAA 567Y" },
//   ];

//   return (
//     <div>
//       {/* <Navbar /> <br/> */}
//       <div className="buses-sidebar">
//         <ul>
//           <li>
//             <a onClick={() => navigate("/drivers/landing")}>Dashboard</a>
//           </li>
//           <li>
//             <a onClick={() => navigate("/drivers/buses")}>Buses</a>
//           </li>
//           <li>
//             <a onClick={() => navigate("/drivers/trips")}>Trips</a>
//           </li>
//           <li>
//             <a onClick={() => navigate("/drivers/customer-list")}>Customers</a>
//           </li>
//         </ul>
//       </div>



//       <div className="buses-container">


//         <header className="header">BUSLINK BUSES</header>


//         <div className="content">
//           <div className="search-bar">
//             <input type="search" placeholder="Search Bus" />
//           </div>
//           <ul className="bus-list">
//             {busData.map((bus, index) => (
//               <li className="bus-item" key={index}>
//                 <div>
//                   <span className="bus-icon">🚌</span>
//                   <span>{bus.name}</span>
//                 </div>
//                 <div>
//                   <span className="bus-code">{bus.code}</span>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         </div>
//         <footer className="footer">© 2023 BUSLINK BUSES</footer>
//       </div>
//     </div>
//   );
// }

// export default DriverBuses;
import React from "react";
import './buses.css';
import { useNavigate } from "react-router-dom";

function DriverBuses() {
    const navigate = useNavigate(); 
    const busData = [
        { name: 'Super Metro', code: 'KZF 456F' },
        { name: 'The Guardian', code: 'KWT 654T' },
        { name: 'Lopha Travelers', code: 'KDA 214K'},
        { name: 'StarBus', code: 'KDB 676U' },
        { name: 'Modern Coast', code: 'KBQ 678U' },
        { name: 'Embassava', code: 'KDC 766O'},
        { name: 'Muranga Shuttle', code: 'KAA 567Y'}
    ];

    return (
        <div className="buses-container">

        <div className="buses-sidebar">
            <li><a onClick={() => navigate("/drivers/landing")}>Dashboard</a></li>
            <li><a onClick={() => navigate("/drivers/buses")}>Buses</a></li>
            <li><a onClick={() => navigate("/drivers/trips")}>Trips</a></li>
            <li><a onClick={() => navigate("/drivers/customer-list")}>Customers</a></li>
        </div>

        <div className="buses-content-container">
            <header className="buses-header">BUSLINK BUSES</header>

            <div className="buses-content">
                <div className="buses-search-bar">
                    <input type="search" placeholder="Search Bus" />
                </div>

                <ul className="buses-bus-list">
                    {busData.map((bus, index) => (
                        <li className="buses-bus-item" key={index}>
                            <div>
                                <span className="buses-bus-icon">🚌</span>
                                <span>{bus.name}</span>
                            </div>
                            <div>
                                <span className="buses-bus-code">{bus.code}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <footer className="buses-footer">© 2023 BUSLINK BUSES</footer>
        </div>
    </div>
);
}

export default DriverBuses;
