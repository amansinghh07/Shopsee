import React, { useContext, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { ProductContext } from "../contexts/ProductContext";
import Product from "../components/Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";


const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);
  const { addToCart } = useContext(CartContext);

  const sliderRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevClick = () => {
    sliderRef.current.slickPrev();
  };

  

  const handleNextClick = () => {
    sliderRef.current.slickNext();
  };


  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary"></div>
      </section>
    );
  }

  const { title, price, description, image } = product;

  
  

  return (
    <>
    <section className="min-h-screen flex justify-center items-center py-10">
      <div className="container mt-10 p-4 ">
        <div className="lg:flex bg-white  p-8">
          {/* Left Column */}
          <div className="lg:w-1/2 mb-4 lg:mb-0 flex justify-center">
            <img
              className="max-w-[500px] w-full h-auto"
              src={image}
              alt={title}
            />
          </div>

          {/* Right Column */}
          <div className="lg:w-1/2 flex flex-col justify-center p-8 bg-gray-200 ">
            <h1 className="text-3xl font-bold mb-3">{title}</h1>
            <div className="text-xl text-custom font-semibold mb-8 pl-3">
              ₹ {price}.00
            </div>
            <p className="mb-10 text-lg">{description}</p>
            <div className="flex  lg:justify-start lg:items-center items-center justify-center mb-4">
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-primary py-2 px-4 text-white font-medium text-lg transition duration-150 hover:bg-fadeCustom hover:text-black"
              >
                Add to cart
              </button>
              
            </div>
          </div>
        </div>
      </div>
    </section>



    {/* Product Carousel */}
    <section className="py-12 mb-12">
    <div className="container mx-auto relative">
      <h2 className="text-3xl font-semibold mb-2 ml-6">Trending Products</h2>
      <div className="flex justify-end w-full mb-4">
        <button
          className="right mr-2 bg-primary hover:bg-black text-white text-1xl px-3 py-2"
          onClick={handlePrevClick}
        >
          <AiOutlineArrowLeft size={20}/>
        </button>
        <button
          className="right mr-2 bg-primary hover:bg-black text-white text-1xl px-3 py-2"
          onClick={handleNextClick}
        >
          <AiOutlineArrowRight size={20}/>
        </button>
      </div>
      <Slider ref={sliderRef} {...carouselSettings}>
        {products.map((product) => (
          <div className="px-5">
            <Product product={product} key={product.id}  />
          </div>
        ))}
      </Slider>
    </div>
  </section>

  </>
  );
};

export default ProductDetails;
