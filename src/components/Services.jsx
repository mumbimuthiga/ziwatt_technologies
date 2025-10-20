import React from "react";

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive technology solutions designed to propel your business
            forward
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="block max-w-sm p-12 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex flex-col space-y-1.5 p-6">
            <h4 className="p-3 font-bold">UI/UX Design</h4>
            <p className="text-muted-foreground text-base leading-relaxed">
              Beautiful, intuitive interfaces that delight users and drive
              engagement through thoughtful design.
            </p>
          </div>
        </div>

        <div className="block max-w-sm p-12 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex flex-col space-y-1.5 p-6">
            <h4 className="p-3 font-bold">Web Design</h4>
            <p className="text-muted-foreground text-base leading-relaxed">
              Stunning, responsive websites that capture your brand and convert
              visitors into customers.
            </p>
          </div>
        </div>

        <div className="block max-w-sm p-12 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex flex-col space-y-1.5 p-6">
            <h4 className="p-3 font-bold">Mobile App Design</h4>
            <p className="text-muted-foreground text-base leading-relaxed">
              Native-feeling mobile experiences optimized for iOS and Android
              platforms.
            </p>
          </div>
        </div>
        <div className="block max-w-sm p-12 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex flex-col space-y-1.5 p-6">
            <h4 className="p-3 font-bold">Design Systems</h4>
            <p className="text-muted-foreground text-base leading-relaxed">
              Scalable, consistent design frameworks that streamline development
              and maintain brand unity.
            </p>
          </div>
        </div>
        <div className="block max-w-sm p-12 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <div className="flex flex-col space-y-1.5 p-6">
            <h4 className="p-3 font-bold">Prototyping</h4>
            <p className="text-muted-foreground text-base leading-relaxed">
              Interactive prototypes that bring ideas to life and validate
              concepts before development.
            </p>
          </div>
        </div>
    
      <div className="relative block max-w-sm p-12 rounded-lg overflow-hidden group transition-all duration-700 transform hover:scale-105">
        {/* Gradient background (fades in on hover) */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        {/* Card content */}
        <div className="relative rounded-lg bg-white border border-gray-200 rounded-lg p-12 shadow-md transition-all duration-700 ">
          <h2 className="text-lg font-semibold text-gray-800 text-center">Hover me ✨</h2>
          <p className="text-gray-600 text-center mt-2">
            Watch the purple-pink gradient fade in smoothly!
          </p>
        </div>
      </div>
    
      <div className="block max-w-sm p-12 rounded-lg bg-white border border-gray-200  hover:bg-purple-200 transition-all duration-500 hover:scale-110 shadow-md">
          {/* <div class="rounded-lg border text-card-foreground shadow-sm group hover:shadow-glow transition-all duration-500 border-border hover:border-primary/50 bg-gradient-card hover:scale-105 animate-fade-in" style="animation-delay: 0s;"> */}
          <div className="flex flex-col space-y-1.5 p-6">
          <h4 className="p-3 font-bold">User Research</h4>
          <p className="text-muted-foreground text-base leading-relaxed">
            Data-driven insights into user behavior to create experiences that
            truly resonate.
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
