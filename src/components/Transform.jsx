import React from "react";

const Transform = () => {
  return (
    <section className="w-full bg-purple-200 py-24">
      <div className="text-center">
        <h2 className="text-4xl md text-5xl font-bold text-primary">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl max-w-2xl mx-auto p-8">
          Let's discuss how our technology solutions can help you achieve your
          goals and drive sustainable growth.
        </p>
      </div>
      <div class="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
        <button class="bg-pink-500 text-white px-4 py-2 rounded">
          Schedule a Consultation
         
        </button>

       <button class="bg-purple-500 text-white px-4 py-2 rounded">
          View Case Studies

       </button>
      
      </div>
    </section>
  );
};

export default Transform;
