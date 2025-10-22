import React from "react";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import locationIcon from "../assets/location.svg";

const Footer = () => {
  return (
    <section>
      <div className="w-full bg-white-800 text-black py-10 px-6 sm:px-6 lg:px-8">
        <div className="grid grid cols-1 md grid grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-black">Ziwatt Technologies</h3>
            <p className="text-muted-foreground">
              Transforming businesses through innovative technology solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-primary transition-colors cursor-pointer">Cloud Solutions</li>
              <li>Data & Analytics</li>
              <li>Application Development</li>
              <li>Enterprise Solutions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
                <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
             <li className="flex flex-row gap-3"><img src={emailIcon} alt="Email" /> ziwatttechnologies.com</li>
              <li className="flex flex-row gap-3"><img src={phoneIcon} alt="Phone" />0723782739</li>
              <li className="flex flex-row gap-3"><img src={locationIcon} alt="Location" />Nairobi ,Kenya</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-12 pt-8 border-t border-border text-center text-gray"><p>© 2025 Ziwatt Technologies. All rights reserved.</p></div>
    </section>
  );
};

export default Footer;
