import React from "react";
import './buses.css';


function Buses() {
    return (
      <div className="buses-container">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search Bus" aria-label="Search" />
              <button id="searchbtn" className="btn btn-outline-success" type="submit">Search</button>
          </form>
      </nav>
    
  </div>
    );
}

export default Buses;
