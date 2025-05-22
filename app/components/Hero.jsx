import React from "react";
import HeroCTA from "./HeroCTA";

function Hero() {
  return (
    <div className="px-8  grid place-items-center text-center mt-30 md:mt-12">
      <h2 className="heading2 lg:w-[50%]">
      Your Trusted Partner in Health & Wellness.
      </h2>
      <h2 className="heading4 text-green-800">Bringing the Pharmacy to Your Fingertips</h2>
      <p className="text-gray-500 mt-2">Search for any medication any where in Cameroon, and see the nearest pharmacy close to you.</p>
      <HeroCTA />
    </div>
  );
}

export default Hero;
