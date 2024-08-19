import React from "react";
import Navbar from "./Navbar";
import Destinations from "./Destinations";
import buses from "../../assets/buses.jpg";
import BookingForm from "./BookingForm";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <img
          src={buses}
          alt="buses"
          className="w-full h-[600px] object-cover"
        />
      </div>
      <BookingForm />
      <Destinations />
      <Footer />
    </div>
  );
};

export default HomePage;
