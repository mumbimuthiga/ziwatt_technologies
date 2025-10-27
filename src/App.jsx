import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Stories from "./components/Stories";
import Testmonials from "./components/Testmonials";
import Transform from "./components/Transform";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header />
      <Hero />
      <Services />
      <Stories/>
      <Testmonials/>
      <Transform />
      <Footer/>
    </div>
  );
}

export default App;
