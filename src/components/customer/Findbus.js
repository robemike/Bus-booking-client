import React from 'react';

const busData = [
  {
    id: 1,
    companyName: 'SUPER METRO',
    imageUrl: 'https://www.smetro.co.ke/assets/img/metrobus2.jpeg',
    details: 'A/C Sleeper (2+2)',
    seatsLeft: '15 Seats left',
    travelTime: '6:00 PM - 3:00 AM',
    duration: '9h',
    price: 'Ksh 3000'
  },
  {
    id: 2,
    companyName: 'GUARDIAN',
    imageUrl: 'https://theguardian.co.ke/uploads/guardian/square.jpg?w=550&h=350',
    details: 'A/C Sleeper 2+1',
    seatsLeft: '2 Seats left',
    travelTime: '8:15 PM - 6:00 AM',
    duration: '9h 45m',
    price: 'Ksh 3500'
  },
  {
    id: 3,
    companyName: 'LOPHA TRAVELS',
    imageUrl: 'https://www.businesslist.co.ke/img/ke/c/1631962219-39-lopha-travel-ltd.jpg',
    details: 'A/C Sleeper 2+2',
    seatsLeft: '21 Seats left',
    travelTime: '8:30 PM - 5:30 AM',
    duration: '9h',
    price: 'Ksh 2500'
  },
  {
    id: 4,
    companyName: 'STARBUS',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8mEsa0cnB38-O-jijeCfeSTwAZl9fYmqZDOOQ0FF44XzZgzwuquKMuOyx8k0i94q1SOQ&usqp=CAU',
    details: 'Non A/C Sleeper 2+1',
    seatsLeft: '4 Seats left',
    travelTime: '7:25 PM - 6:15 AM',
    duration: '10h 50m',
    price: 'Ksh 3000'
  },
  {
    id: 5,
    companyName: 'EAGLE EXPRESS',
    imageUrl: 'https://media.cnn.com/api/v1/images/stellar/prod/230202121804-basigo-electric-bus-nairobi-kenya-1.jpg?q=w_1110,c_fill/f_webp',
    details: 'Luxury Coach 2+2',
    seatsLeft: '8 Seats left',
    travelTime: '9:00 PM - 6:00 AM',
    duration: '9h',
    price: 'Ksh 3200'
  },
  {
    id: 6,
    companyName: 'RAPID TRANSIT',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0v7X7PvVTSQfpDTcdnKAyhUNPioOuHwnueCaRwEMFAgtu630C_H-t5dJPMTvnk1gnMGk&usqp=CAU',
    details: 'Standard Coach 2+2',
    seatsLeft: '5 Seats left',
    travelTime: '10:00 PM - 7:00 AM',
    duration: '9h',
    price: 'Ksh 2800'
  },
  {
    id: 7,
    companyName: 'CITY LINK',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdv10gT0gUW2ufJgaGpUA4hNppA4Gp6EwpbhR8dce18SdwNrEbIWE8okaTZ_BuddEPjbU&usqp=CAU',
    details: 'Comfortable Sleeper 2+2',
    seatsLeft: '10 Seats left',
    travelTime: '6:30 PM - 4:00 AM',
    duration: '9h 30m',
    price: 'Ksh 2900'
  },
  {
    id: 8,
    companyName: 'FAST LANE',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8H4l3JDbQIEJ1mpoWXY3gEgBLZK4yujLCx6GEfsnShrRjsP9NfujmSNWQA2vB8np_Us&usqp=CAU',
    details: 'Semi-Luxury Coach 2+2',
    seatsLeft: '12 Seats left',
    travelTime: '7:00 PM - 5:00 AM',
    duration: '10h',
    price: 'Ksh 3100'
  }
];

const FindBus1 = () => {
  return (
    <div className="find-bus">
      <div id="headerfd">
        <img 
          className="header-image" 
          alt="Bus Header" 
          src="https://media.cnn.com/api/v1/images/stellar/prod/230202121804-basigo-electric-bus-nairobi-kenya-1.jpg?q=w_1110,c_fill/f_webp" 
        />
      </div>
      <div className="bus-list">
        {busData.map((bus) => (
          <div className="bus-item" key={bus.id}>
            <img className="bus-item-image" alt={`${bus.companyName} Bus`} src={bus.imageUrl} />
            <div className="bus-info">
              <div className="bus-company"><button>{bus.companyName}</button></div>
              <div className="bus-details">{bus.details}</div>
              <div className="seats-left">{bus.seatsLeft}</div>
              <div className="time">
                <div className="travel-time">{bus.travelTime}</div>
                <div className="duration">{bus.duration}</div>
              </div>
              <div className="price"><b>{bus.price}</b></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindBus1;