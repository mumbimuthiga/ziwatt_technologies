import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // install via: npm install lucide-react

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-purple-100 text-black dark:text-white">
      <header className="fixed inset-x-0 top-0 z-50 box-border backdrop-blur-md shadow-md">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          {/* Logo + Title */}
          <div className="flex flex-1 items-center gap-x-3">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Ziwatt Technologies</span>
              <img
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt="Logo"
                className="h-8 w-auto"
              />
            </a>
            <h4 className="font-semibold">Ziwatt Technologies</h4>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-gray-700 hover:text-indigo-600"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-8">
            <a href="#" className="text-sm font-semibold leading-6">
              Home
            </a>
            <a href="#" className="text-sm font-semibold leading-6">
              About
            </a>
            <a href="#" className="text-sm font-semibold leading-6">
              Services
            </a>
            <a href="#" className="text-sm font-semibold leading-6">
              Testimonials
            </a>
            <a href="#" className="text-sm font-semibold leading-6">
              Contact
            </a>
            <a
              href="#"
              className="inline-flex items-center px-3 py-1.5 rounded-md bg-indigo-600 text-white font-semibold shadow-sm hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-purple-100 border-t border-gray-200">
            <nav className="flex flex-col items-start px-6 py-4 space-y-3">
              <a href="#" className="text-sm font-semibold">
                Home
              </a>
              <a href="#" className="text-sm font-semibold">
                About
              </a>
              <a href="#" className="text-sm font-semibold">
                Services
              </a>
              <a href="#" className="text-sm font-semibold">
                Testimonials
              </a>
              <a href="#" className="text-sm font-semibold">
                Contact
              </a>
              <a
                href="#"
                className="inline-flex items-center px-3 py-1.5 rounded-md bg-indigo-600 text-white font-semibold shadow-sm hover:bg-indigo-700 transition"
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
