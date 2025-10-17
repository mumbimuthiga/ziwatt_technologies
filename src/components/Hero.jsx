import React from "react";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-pink-100 to-purple-200 ">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
        Transform Your Business
        
       
      </h1>
      <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
        With
      </h2>
      <h3 className="text-5xl md:text-6xl font-extrabold text-gray-800 mb-6">
        Cutting-Edge Technology
      </h3>
      <p className="text-lg md:text-xl font-bold text-gray-400 mb-8 max-w-xl">
        We deliver innovative technological solutions that drive growth, efficiency, and success for businesses worldwide.
      </p>
      <div className="flex">
        <button className="bg-purple-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700 transition">
        Get Started
      </button>
      <button className="bg-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700 transition ml-4 text-gray-800">
        See Our Work 
      </button>
      </div>
     
    </section>
  );
};

export default Hero;
