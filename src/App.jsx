import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stories from "./components/Stories";
import Testmonials from "./components/Testmonials";

function App() {
  return (
    <div>
       <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="block max-w-sm p-12 bg-white border border-gray-200 rounded-lg hover:bg-purple-200 transition-all duration-500 hover:scale-110 shadow-md">
        Hover me ✨
      </div>
    </div>

      <Header />
      <Hero />
      <Services />
      <Stories/>
      <Testmonials/>
    </div>
  );
}

export default App;
