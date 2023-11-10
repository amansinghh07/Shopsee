import React, { useContext, useRef, useEffect } from "react";
import { ProductContext } from "../contexts/ProductContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Product from "../components/Product";
import Hero from "../components/Hero";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Banner1 from "../img/banner1.webp";
import Banner2 from "../img/banner2.webp";

const SectionContainer = ({ children }) => {
  return <div className="container mx-auto">{children}</div>;
};

const Home = () => {
  const { products } = useContext(ProductContext);
  const sliderRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  const featuredProducts = products.slice(0, 8);

  return (
    <div>
      <Hero />
      {/* Featured Products */}
      <SectionContainer>
        <section className="py-16">
          <h2 className="text-3xl font-semibold mb-10 mt-4 ml-6">
            Featured Products
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div className="px-5 mb-8" key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </section>
      </SectionContainer>

      {/* Category Banners */}
      <SectionContainer>
        <section className="py-16">
          <div className="bg-gray-100 flex flex-row md:flex-row justify-center w-full md:w-11/12 mx-auto overflow-hidden mb-8">
            <div className="banner-container-reverse flex flex-row md:flex-row justify-around items-center h-auto md:h-96">
              <div className="text-side text-center md:text-left p-4 md:p-8">
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-4">
                  Infinite Style Choices
                </h2>
                <p className="text-md md:text-xl mb-10">
                  Endless cool possibilities await with seamless combinations in
                  standard sizes for men, women, and kids.
                </p>
                <a href="/category">
                  <button className="bg-primary text-white px-6 md:px-5 py-2 md:py-1 hover:bg-opacity-80 transition duration-300 text-md md:text-xl">
                    Shop now
                  </button>
                </a>
              </div>
            </div>
            <div className="img-side hidden md:block">
              <img
                src={Banner1}
                alt="banner"
                className="h-full w-[750px] object-cover"
              />
            </div>
          </div>
        </section>
      </SectionContainer>

      {/* Product Carousel */}
      <SectionContainer>
        <section className="py-16 flex flex-col">
          <div className="flex flex-col items-start mb-10 ml-6 md:flex-row md:justify-between md:items-center">
            <h2 className="text-3xl font-semibold mb-2 md:mb-0">
              Trending Products
            </h2>
            <div className="flex space-x-2 mt-2 md:mt-0 md:items-center">
              <button
                className="bg-black text-white text-1xl px-4 py-2 hover:bg-opacity-80"
                onClick={handlePrevClick}
              >
                <AiOutlineArrowLeft size={18} />
              </button>
              <button
                className="bg-black text-white text-1xl px-4 py-2 hover:bg-opacity-80"
                onClick={handleNextClick}
              >
                <AiOutlineArrowRight size={18} />
              </button>
            </div>
          </div>
          <Slider ref={sliderRef} {...carouselSettings}>
            {products.map((product) => (
              <div
                className="px-5 mb-8"
                key={product.id}
                style={{ flexBasis: "25%" }}
              >
                <Product product={product} key={product.id} />
              </div>
            ))}
          </Slider>
        </section>
      </SectionContainer>

      {/* Simple Banner */}
      <SectionContainer>
        <section className="py-16">
          <div className="bg-gray-100 flex flex-row md:flex-row justify-center w-full md:w-11/12 mx-auto overflow-hidden mb-8 ">
            <div className="banner-container-reverse flex flex-row md:flex-row justify-around items-center h-auto md:h-96">
              <div className="text-side text-center md:text-left p-4 md:p-8">
                <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-4">
                  Comfort & Stylish Living
                </h2>
                <p className="text-md md:text-xl mb-10">
                  Seamless combinations, made possible by standard sizes, open
                  the door to an endless world of cool and captivating
                  possibilities.
                </p>
                <a href="/category">
                  <button className="bg-primary text-white px-6 md:px-5 py-2 md:py-1 hover:bg-opacity-80 transition duration-300 text-md md:text-xl">
                    Shop now
                  </button>
                </a>
              </div>
            </div>
            <div className="img-side hidden md:block">
              <img
                src={Banner2}
                alt="banner"
                className="h-full w-[750px] object-cover"
              />
            </div>
          </div>
        </section>
      </SectionContainer>
    </div>
  );
};

export default Home;
