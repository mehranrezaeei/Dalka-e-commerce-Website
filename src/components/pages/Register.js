import React, { useEffect, useState } from "react";
// Components
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
// Dependency
import { Link } from "react-router-dom";
import { Validation } from "../common/Authentication";
// Toastify Library
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const dataIntialValue = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  };
  const [data, setdata] = useState(dataIntialValue);
  const [errors, seterrors] = useState({});
  const [submitStatus, setsubmitStatus] = useState(false);
  // For Input Change
  const changeHandler = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };
  const notify = (message) => {
    toast.success(message);
  };
  useEffect(() => {
    seterrors(Validation(data));
  }, [data]);
  const submitHandler = (e) => {
    e.preventDefault();
    setsubmitStatus(true);
    if (!Object.keys(errors).length) {
      notify("Registration was successful");
      setdata(dataIntialValue);
      setsubmitStatus(false);
    }
  };

  return (
    <div className=" flex flex-col">
      <Navbar />
      <div className="h-[35rem] px-2  mt-[85px] flex justify-center">
        <form className="bg-white w-full h-full flex flex-col items-center justify-center py-14">
          <ToastContainer />
          <h1 className="text-[2.5rem] uppercase text-Cblue">SignUp</h1>
          <div className="flex flex-col sm:w-fit w-full items my-10 gap-4">
            {/* First Name Inp */}
            <div className="flex flex-col">
              <div className="flex items-center border-b-[1px] py-1 border-black">
                <input
                  type="text"
                  className="sm:w-[400px] w-full h-12 text-black font-[300] outline-none"
                  placeholder="First Name"
                  value={data.firstname}
                  name="firstname"
                  onChange={changeHandler}
                />
              </div>
              <span className="font-[300] text-[0.9rem] bg-red-200  w-fit px-1 mt-1">
                {submitStatus && errors.firstname && errors.firstname}
              </span>
            </div>
            {/* Last Name Inp */}
            <div className="flex flex-col">
              <div className="flex items-center border-b-[1px] py-1 border-black">
                <input
                  type="text"
                  className="sm:w-[400px] w-full h-12 text-black font-[300] outline-none"
                  placeholder="Last Name"
                  value={data.lastname}
                  name="lastname"
                  onChange={changeHandler}
                />
              </div>
              <span className="font-[300] text-[0.9rem] bg-red-200  w-fit px-1 mt-1">
                {submitStatus && errors.lastname && errors.lastname}
              </span>
            </div>
            {/* Email Inp */}
            <div className="flex flex-col">
              <div className="flex items-center border-b-[1px] py-1 border-black">
                <input
                  type="text"
                  className="sm:w-[400px] w-full h-12 text-black font-[300] outline-none"
                  placeholder="Email"
                  value={data.email}
                  name="email"
                  onChange={changeHandler}
                />
              </div>
              <span className="font-[300] text-[0.9rem] bg-red-200  w-fit px-1 mt-1">
                {submitStatus && errors.email && errors.email}
              </span>
            </div>
            {/* Password Inp */}
            <div className="flex flex-col">
              <div className="flex items-center border-b-[1px] py-1 border-black">
                <input
                  type="text"
                  className="sm:w-[400px] w-full h-12 text-black font-[300] outline-none"
                  placeholder="Password"
                  value={data.password}
                  name="password"
                  onChange={changeHandler}
                />
              </div>
              <span className="font-[300] text-[0.9rem] bg-red-200  w-fit px-1 mt-1">
                {submitStatus && errors.password && errors.password}
              </span>
            </div>
            {/* Switch Between Login Sing Up Link */}
            <div>
              <Link to="/login" className="font-[300] text-[0.9rem]">
                Already Have an Account ?
              </Link>
            </div>
            {/* Button */}
            <div className="my-4">
              <button
                type="submit"
                className="w-full h-12 bg-Cblue font-[600
        ] text-white text-[1.3rem]"
                onClick={submitHandler}
              >
                SignUp
              </button>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
