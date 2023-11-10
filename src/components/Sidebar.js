import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import CartItem from "../components/CartItem";
import { SidebarContext } from "../contexts/SidebarContext";
import { CartContext } from "../contexts/CartContext";
import EmptyIMG from "../img/empty.png";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, total, itemAmount } = useContext(CartContext);
  const cartIsEmpty = cart.length === 0;

  const handleCheckoutClick = () => {
    handleClose();
  };

  return (
    <div
    className={`${
      isOpen ? "right-0" : "-right-full"
    } fixed top-0 bg-white shadow-2xl w-[400px] xl:w-[450px] lg:w-[500px] transition-all duration-300 z-20 px-4 md:px-8 lg:px-[35px]`}
    style={{
      minHeight: cartIsEmpty ? "100vh" : "100vh",
    }}
    >
      {/* Header */}
      <div className="flex items-center justify-between py-4 md:py-6 border-b">
        <div className="uppercase text-md md:text-lg font-semibold">
          Shopping Bag ({itemAmount})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      {/* Cart items */}
      {!cartIsEmpty && (
        <div className="flex flex-col gap-y-2 h-[400px] overflow-y-auto border-b">
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />;
          })}
        </div>
      )}
      {/* Footer (Total and Checkout) */}
      <div className="flex flex-col gap-y-3 py-4 mt-4">
        {cartIsEmpty ? (
          <>
            <div className="text-center mt-10">
              <img src={EmptyIMG} alt="Empty Cart" className="mx-auto" />
            </div>
            <div className="text-center text-primary text-md md:text-xl mb-4">
              No items in your bag
            </div>
          </>
        ) : (
          <div className="flex w-full justify-between items-center mb-4">
            <div className="font-semibold">
              <span className="mr-2 text-md md:text-xl">Total :</span>
              <span className="text-md md:text-xl">
                ₹ {parseFloat(total).toFixed(2)}
              </span>
            </div>
          </div>
        )}
        {!cartIsEmpty && (
          <Link
            to="/checkout"
            onClick={handleCheckoutClick}
            className="bg-primary flex p-4 justify-center items-center text-white text-lg w-full font-medium transition duration-150 hover:bg-fadeCustom hover:text-black"
          >
            Checkout
          </Link>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
