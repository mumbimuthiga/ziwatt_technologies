import React from "react";

const Header = () => {
  return (
    <div className="bg-purple-100 text-black dark:text-white">
      <header className="fixed inset-x-0 top-0 z-50 box-border backdrop-blur-md shadow-md">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1 gap-x-6">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Ziwatt Technologies</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
                className="h-8 w-auto"
              />
            </a>
            <h4 className="font-semibold">Ziwatt Technologies</h4>
          </div>
          <div className="lg:flex lg:gap-x-12">
            <a href="#" className="text-sm leading-6 font-semibold">
              Home
            </a>
            <a href="#" className="text-sm leading-6 font-semibold">
              About
            </a>
            <a href="#" className="text-sm leading-6 font-semibold">
              Services
            </a>
            <a href="#" className="text-sm leading-6 font-semibold">
              Testimonials
            </a>
            <a href="#" className="text-sm leading-6 font-semibold">
              Contact
            </a>
             <a
              href="#"
              className="inline-flex items-center px-2 py-1 rounded-md bg-indigo-600 text-white font-semibold shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 transition-colors duration-150"
              role="button"
            >
              Get Started
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;