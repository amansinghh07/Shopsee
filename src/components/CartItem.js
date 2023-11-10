import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);
  const { id, title, image, price, amount } = item;

  const handleDecrement = (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    decreaseAmount(id);
  };

  const handleIncrement = (event) => {
    event.preventDefault();
    event.stopPropagation(); 
    increaseAmount(id);
  };


  return (
    <div className="flex gap-x-4 py-1 lg:px-6 border-2 border-[#e4e4e4] w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        {/* image */}
        <Link to={`/product/${id}`}>
          <img className="max-w-[70px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col p-4">
          {/* title and remove icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/product/${id}`}
              className="text-md font-medium max-w-[200px] text-black"
            >
              {title}
            </Link>
            {/* remove */}
            <div
              onClick={() => removeFromCart(id)} 
              
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-red-500 font-bold transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            <div className="flex flex-1 max-w-[100px] items-center h-full border text-primary font-medium">
              <div
                onClick={(event) => handleDecrement(event)}
                className="flex-1 flex justify-center items-center cursor-pointer h-full"
              >
                <IoMdRemove />
              </div>
              <div className="h-full text-lg flex justify-center items-center px-2">
                {amount}
              </div>
              <div
                onClick={(event) => handleIncrement(event)}
                className="flex-1 h-full flex justify-center items-center cursor-pointer"
              >
                <IoMdAdd />
              </div>
            </div>
            
            <div className="flex-1 text-md flex justify-end items-center text-primary font-medium">
              {`₹ ${parseFloat(price * amount).toFixed(2)}`}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
