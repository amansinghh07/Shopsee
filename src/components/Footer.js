import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footer py-8">
      <div className="container mx-auto flex justify-center items-center mb-6">
        <div className="text-white flex space-x-5">
          <button onClick={() => {}} className="text-primary ">
            <FaInstagram size={24}  />
          </button>
          <button onClick={() => {}} className="text-primary">
            <FaFacebook size={24} />
          </button>
          <button onClick={() => {}} className="text-primary">
            <FaTwitter size={24} />
          </button>
        </div>
        
      </div>
      <div className="flex flex-row items-center justify-center md:flex-wrap">
          <a href="/" className="text-lg text-priamry hover:text-gray-300 mx-4 mb-2 md:mb-0">About Us</a>
          <a href="/" className="text-lg text-priamry hover:text-gray-300 mx-4 mb-2 md:mb-0">Contact Us</a>
          <a href="/" className="text-lg text-priamry hover:text-gray-300 mx-4 mb-2 md:mb-0">FAQ</a>
        </div>
      <div className="container mx-auto mt-5 text-center">
        <p className="text-primary font-medium text-sm">
          © SHOP SEE 2023. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
