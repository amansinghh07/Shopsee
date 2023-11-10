import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  const { id, image, title, price } = product;

  return (
    <>
      <div>
        <div className="border-2 border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition hover:border-black">
          <Link to={`/product/${id}`}>
            <div className="w-full h-full flex justify-center items-center">
              <div className="w-[200px] mx-auto flex justify-center items-center">
                <img
                  className="max-h-[160px] group-hover:scale-110 transition duration-300"
                  src={image}
                  alt=""
                />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <h2 className="font-normal text-lg mb-1 pl-2">{title}</h2>
          <h2 className="font-semibold text-lg pl-4"> ₹ {price}.00</h2>
        </div>
      </div>
    </>
  );
};

export default Product;
