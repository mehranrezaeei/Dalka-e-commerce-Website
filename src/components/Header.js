import React from "react";
import Navbar from "./Navbar";
import headerImg from "../assets/images/header-pic.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" w-full min-h-screen bg-white top-0 ">
      <Navbar />
      <div className="flex sm:flex-row flex-col justify-between Ccontainer z-[10] pt-[85px]  min-h-[65vh] items-center">
        <div className="flex flex-col justify-center max-w-full  sm:max-w-[50%] sm:order-1 order-2 ">
          <h1 className="sm:text-[2.5rem] text-[2rem] uppercase font-[600] mb-3">
            Beauty , Quality , Specialness
          </h1>
          <p className="text-lg mb-6">
            Be the most special person in a room with Dalca, beauty and the best
            material for you to be the best
          </p>
          <Link className="bg-Cblue w-fit text-white py-3 px-6 outline outline-3 outline-Cblue hover:outline-offset-2 transition-all duration-300">
            Products
          </Link>
        </div>

        <div className="sm:CheaderImgContainer sm:order-2 order-1 xs:block flex justify-center">
          <img
            src={headerImg}
            className="w-auto xs:h-[600px] h-[450px]"
            alt="/"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
