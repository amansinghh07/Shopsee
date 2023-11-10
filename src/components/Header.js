import React, { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import { BsBag } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    setMenuOpen(!menuOpen);
    e.preventDefault();

  };

  const closeMenu = (e) => {
    setMenuOpen(false);
    e.preventDefault();

  };

  

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", () => {
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
      });
    };
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-white py-6 shadow-md"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-[40px]">
        <Link to={"/"}>
          <div>
            <img className="w-[140px] md:w-[160px]" src={Logo} alt="" />
          </div>
        </Link>

        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-6 mr-5">
            <Link to={"/"} className="text-xl font-normal uppercase">
              Home
            </Link>
            <Link to={"/category"} className="text-xl font-normal uppercase">
              Categories
            </Link>
          </div>

          <div
            onClick={() => setIsOpen(!isOpen)}
            className="cursor-pointer relative"
          >
            <BsBag className="text-2xl" />
            <div className="bg-custom absolute -right-2 -bottom-2 text-xs w-5 h-5 text-white rounded-full flex justify-center items-center">
              {itemAmount}
            </div>
          </div>

          <div className="md:hidden">
            {menuOpen ? (
              <FaTimes className="text-2xl" onClick={closeMenu} />
            ) : (
              <FaBars className="text-2xl" onClick={toggleMenu} />
            )}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-gray-200">
          <div className="flex justify-end p-5">
            <FaTimes className="text-3xl cursor-pointer" onClick={closeMenu} />
          </div>
          <div className="flex flex-col space-y-4 items-center justify-center h-60" onClick={closeMenu}>
            <Link to={"/"} className="text-3xl font-normal uppercase" >
              Home
            </Link>
            <Link to={"/category"} className="text-3xl font-normal uppercase">
              Categories
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
