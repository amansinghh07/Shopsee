import React, { useState } from "react";
import Product from "../components/Product";
import items from "../components/AllData";

const Categories = () => {
  const [category, setCategory] = useState("all");

  const filteredItems =
    category === "all"
      ? items
      : items.filter((item) => item.category === category);

  const handleFilter = (selectedCategory) => {
    setCategory(selectedCategory);
  };



  return (
    <div className="container mx-auto mt-36 mb-20 text-center">
      <div className="flex flex-wrap justify-center space-x-2 md:space-x-4 mb-12 md:mb-12 text-md">
        <button
          className={`border-2 border-neutral-500 px-4 pb-[4px] pt-1 ${
            category === "all" ? "bg-fadeCustom text-black border-none" : ""
          }`}
          onClick={() => handleFilter("all")}
        >
          All
        </button>
        <button
          className={`border-2 border-neutral-500 px-4 pb-[4px] pt-1  ${
            category === "men" ? "bg-fadeCustom text-black border-none" : ""
          }`}
          onClick={() => handleFilter("men")}
        >
          Men
        </button>
        <button
          className={`border-2 border-neutral-500 px-4 pb-[4px] pt-1  ${
            category === "women" ? "bg-fadeCustom text-black border-none" : ""
          }`}
          onClick={() => handleFilter("women")}
        >
          Women
        </button>
        <button
          className={`border-2 border-neutral-500 px-4 pb-[4px] pt-1  ${
            category === "kid" ? "bg-fadeCustom text-black border-none" : ""
          }`}
          onClick={() => handleFilter("kid")}
        >
          Kid
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 text-left">
        {filteredItems.map((product) => (
          <div key={product.id} className="px-5 mb-8">
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
