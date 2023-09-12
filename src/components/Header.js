import React from "react";
import Navbar from "./Navbar";
import headerImg from "../assets/images/header-pic.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className=" w-full min-h-screen bg-white top-0 ">
      <Navbar />
      <div className="flex justify-between Ccontainer z-[10] pt-[85px]">
        <div className="flex flex-col justify-center max-w-[50%]">
          <h1 className="text-[2.5rem] uppercase font-[600] mb-3">
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
        <div className=" CheaderImgContainer">
          <img src={headerImg} className="w-auto h-[600px]" alt="/" />
        </div>
      </div>
    </header>
  );
};

export default Header;
