import React, { useEffect } from "react";
import useTitle from "../../hook/useTitle";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

const Homepage = () => {
  useTitle("Home");
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      <div data-aos="fade-down" data-aos-duration="1000"
        className="hero min-h-screen bg-[url('https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <h1 className="mb-5 text-3xl font-bold">Welcome to</h1>
            <p className="mb-5 text-5xl font-bold">
            Mohite consultancy services
            </p>
            <button className="btn bg-[#039477] hover:bg-[#3bb89f] text-white">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
