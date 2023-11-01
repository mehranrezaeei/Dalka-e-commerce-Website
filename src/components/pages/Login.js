import React from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import icons from "../../assets/icons/icons";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <div className="h-[35rem] px-2  mt-[85px] flex justify-center">
        <form className="bg-white w-full h-full flex flex-col items-center justify-center py-14">
          <h1 className="text-[2.5rem] uppercase text-Cblue">Login</h1>
          <div className="flex sm:w-fit w-full flex-col  my-10 gap-4">
            <div className="flex items-center border-b-[1px] py-1 border-black">
              <span>{icons.accountsIcon}</span>
              <input
                type="text"
                className="sm:w-[400px] w-full h-12 px-3 text-black font-[300] outline-none"
                placeholder="Username"
              />
            </div>
            <div className="flex items-center border-b-[1px] py-1 border-black">
              <span>{icons.lockClosedIcon}</span>
              <input
                type="text"
                className="sm:w-[400px] w-full h-12 px-3 text-black font-[300] outline-none"
                placeholder="Username"
              />
            </div>
            <div>
              <Link to="/register" className="font-[300] text-[0.9rem]">
                Dosen't Have an Account ?
              </Link>
            </div>
            <div className="my-4">
              <button
                className="w-full h-12 bg-Cblue font-[600
            ] text-white text-[1.3rem]"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
