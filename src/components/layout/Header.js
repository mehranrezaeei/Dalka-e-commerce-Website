import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import HeaderCarousel from "../common/HeaderCarousel";
const Header = () => {
  return (
    <header className=" w-full min-h-screen top-0  ">
      <Navbar />
      <div className="flex md:flex-row flex-col justify-between Ccontainer z-[10] pt-[85px]  min-h-[65vh] gap-5 items-center">
        <div className="flex flex-col justify-center max-w-full  md:max-w-[50%] md:order-1 order-2 ">
          <h1 className="sm:text-[2.5rem] text-[2rem] uppercase font-[600] mb-3">
            Beauty , Quality , Specialness
          </h1>
          <p className="text-lg mb-6">
            Be the most special person in a room with Dalca, beauty and the best
            material for you to be the best
          </p>
          <Link
            to="/products/all"
            className="bg-Cblue w-fit text-white py-3 px-6 outline outline-3 outline-Cblue hover:outline-offset-2 transition-all duration-300"
          >
            Products
          </Link>
        </div>

        <div className="sm:CheaderImgContainer md:order-2 order-1 xs:block md:w-[36%] sm:w-[70%] w-full h-[560px] ">
          <HeaderCarousel />
        </div>
      </div>
    </header>
  );
};

export default Header;
