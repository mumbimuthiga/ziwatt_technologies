import React from "react";

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive technology solutions designed to propel your business
            forward
          </p>
        </div>
      </div>

<div className="grid grid-cols-3 gap-4">
    <div>
        <h4>Ui/UX Design</h4>
        <p>Beautiful, intuitive interfaces that delight users and drive engagement through thoughtful design.</p>
    </div>
     <div>
        <h4>web Design</h4>
        <p>Stunning, responsive websites that capture your brand and convert visitors into customers.</p>
    </div>
     <div>
        <h4>Mobile App Design</h4>
        <p>Native-feeling mobile experiences optimized for iOS and Android platforms.</p>
    </div>
     <div>
        <h4>Design Systems</h4>
        <p>Scalable, consistent design frameworks that streamline development and maintain brand unity.</p>
    </div>
     <div>
        <h4>Prototyping</h4>
        <p>Interactive prototypes that bring ideas to life and validate concepts before development.</p>
    </div>
     <div>
        <h4>User Research</h4>
        <p>Data-driven insights into user behavior to create experiences that truly resonate.</p>
    </div>

</div>
     
    </section>
  );
};

export default Services;
