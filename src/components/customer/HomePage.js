import React from "react";
// import Navbar from "./Navbar";
import Destinations from "./Destinations";
import buses from "../../assets/buses.jpg";
import BookingForm from "./BookingForm";

const HomePage = () => {
  return (
    <div>
      <div className="pt-16">
        <img
          src={buses}
          alt="buses"
          className="w-full h-[600px] object-cover"
        />
      </div>
      <BookingForm />
      <Destinations />
    </div>
  );
};

export default HomePage;
