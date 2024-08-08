import React from 'react';

const FindBus1 = () => {
  return (
    <div className="find-bus">
      <div className="header">
        <img 
          className="header-image" 
          alt="" 
          src="https://media.cnn.com/api/v1/images/stellar/prod/230202121804-basigo-electric-bus-nairobi-kenya-1.jpg?q=w_1110,c_fill/f_webp" 
        />
        <div className="header-text">
          <div className="select-your-bus">Find bus!</div>
        </div>
      </div>
      <div className="bus-list">
        <div className="bus-item">
          <img className="bus-item-image" alt="" src="https://www.smetro.co.ke/assets/img/metrobus2.jpeg" />
          <div className="bus-info">
            <div className="bus-company"><button>SUPER METRO</button></div>
            <div className="bus-details">A/C Sleeper (2+2)</div>
            <div className="seats-left">15 Seats left</div>
            <div className="time">
              <div className="travel-time">6:00 PM - 3:00 AM
              </div>
              <div className="duration">9h</div>
            </div>
            <div className="price"><b>Ksh 3000</b></div>
          </div>
        </div>
        <div className="bus-item">
          <img className="bus-item-image" alt="" src="https://theguardian.co.ke/uploads/guardian/square.jpg?w=550&h=350" />
          <div className="bus-info">
            <div className="bus-company"><button>GUARDIAN</button></div>
            <div className="bus-details">A/C Sleeper 2+1</div>
            <div className="seats-left">2 Seats left</div>
            <div className="time">
              <div className="travel-time">8:15 PM - 6:00 AM</div>
              <div className="duration">9h 45m</div>
            </div>
            <div className="price"><b>Ksh 3500</b></div>
          </div>
        </div>
        <div className="bus-item">
          <img className="bus-item-image" alt="" src="https://www.businesslist.co.ke/img/ke/c/1631962219-39-lopha-travel-ltd.jpg" />
          <div className="bus-info">
            <div className="bus-company"><button>LOPHA TRAVELS</button></div>
            <div className="bus-details">A/C Sleeper 2+2</div>
            <div className="seats-left">21 Seats left</div>
            <div className="time">
              <div className="travel-time">8:30 PM - 5:30 AM</div>
              <div className="duration">9h</div>
            </div>
            <div className="price"><b>Ksh 2500</b></div>
          </div>
        </div>
        <div className="bus-item">
          <img className="bus-item-image" alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEsa0cnB38-O-jijeCfeSTwAZl9fYmqZDOOQ0FF44XzZgzwuquKMuOyx8k0i94q1SOQ&usqp=CAU" />
          <div className="bus-info">
            <div className="bus-company"><button>STARBUS</button></div>
            <div className="bus-details">Non A/C Sleeper 2+1</div>
            <div className="seats-left">4 Seats left</div>
            <div className="time">
              <div className="travel-time">7:25 PM - 6:15 AM</div>
              <div className="duration">10h 50m</div>
            </div>
            <div className="price"><b>Ksh 3000</b></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindBus1;


