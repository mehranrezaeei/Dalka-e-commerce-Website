import React, { useState } from "react";
import Navbar from "../layout/Navbar";
import { Link } from "react-router-dom";
import { ContactValidation } from "../common/Authentication";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [error, seterror] = useState({});

  const [fullname, setfullname] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");

  const submitHandel = (e) => {
    e.preventDefault();
    const ValidationErrors = ContactValidation({ fullname, email, message });
    console.log(error);
    if (Object.keys(ValidationErrors).length > 0) {
      seterror(ValidationErrors);
      toast.error("Please fill in all fields correctly");
    } else {
      toast.success("Your Message Send Successfully");
      setfullname("");
      setemail("");
      setmessage("");
      seterror({});
    }
  };
  return (
    <div className="w-full h-screen pt-[80px] bg-[#f0ead2]">
      <Navbar />
      <ToastContainer />
      <div className="flex justify-center items-center w-full h-full relative">
        <div className="w-[35%] h-[40%] bg-[#b08968]  absolute bottom-0 left-0 md:block hidden"></div>
        <div className="md:w-[60%] sm:w-[80%] w-[90%] h-fit flex md:flex-row flex-col border-[2px] rounded-sm md:p-12 p-6  z-10 border-black">
          {/* Form  */}
          <div className="flex-1">
            <form className="flex flex-col gap-5" onSubmit={submitHandel}>
              <input
                type="text"
                placeholder="Full Name"
                onChange={(e) => setfullname(e.target.value)}
                value={fullname}
                className={`w-full outline-none border-b-[2px] py-2  ${
                  error.fullname ? "border-b-red-500" : "border-b-black"
                } bg-transparent placeholder-black`}
              />
              <input
                type="text"
                placeholder="E-mail"
                onChange={(e) => setemail(e.target.value)}
                value={email}
                className={`w-full outline-none border-b-[2px] py-2 ${
                  error.email ? "border-b-red-500" : "border-b-black"
                }  bg-transparent placeholder-black`}
              />
              <textarea
                placeholder="Message"
                onChange={(e) => setmessage(e.target.value)}
                value={message}
                rows="2"
                className={`border-b-[2px] w-full  ${
                  error.message ? "border-b-red-500" : "border-b-black"
                } resize-none outline-none bg-transparent placeholder-black`}
              />
              <button
                type="submit"
                className="w-full h-12 rounded-full bg-black mt-2 text-white text-lg"
              >
                Contact Us
              </button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="flex-1 flex flex-col md:items-center ">
            <div className="flex-1 flex flex-col justify-between">
              <div className="py-3">
                <h4 className="text-[1.25rem]">Contact</h4>
                <span className="font-[300]">dalka@gmail.com</span>
              </div>
              <div className="py-3">
                <h4 className="text-[1.25rem]">Based in</h4>
                <span className="font-[300]">Tehran , Iran</span>
              </div>
            </div>
            <div>
              <div className="w-fit flex items-center gap-7 mt-7">
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 30 30"
                    className="w-7 h-7"
                  >
                    <path d="M9,25H4V10h5V25z M6.501,8C5.118,8,4,6.879,4,5.499S5.12,3,6.501,3C7.879,3,9,4.121,9,5.499C9,6.879,7.879,8,6.501,8z M27,25h-4.807v-7.3c0-1.741-0.033-3.98-2.499-3.98c-2.503,0-2.888,1.896-2.888,3.854V25H12V9.989h4.614v2.051h0.065 c0.642-1.18,2.211-2.424,4.551-2.424c4.87,0,5.77,3.109,5.77,7.151C27,16.767,27,25,27,25z"></path>
                  </svg>
                </Link>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="800"
                    width="1200"
                    viewBox="-100.7682 -167.947 873.3244 1007.682"
                    className="w-8 h-8"
                  >
                    <g fill="#100f0d">
                      <path d="M335.895 0c-91.224 0-102.663.387-138.49 2.021-35.752 1.631-60.169 7.31-81.535 15.612-22.088 8.584-40.82 20.07-59.493 38.743-18.674 18.673-30.16 37.407-38.743 59.495C9.33 137.236 3.653 161.653 2.02 197.405.386 233.232 0 244.671 0 335.895c0 91.222.386 102.661 2.02 138.488 1.633 35.752 7.31 60.169 15.614 81.534 8.584 22.088 20.07 40.82 38.743 59.495 18.674 18.673 37.405 30.159 59.493 38.743 21.366 8.302 45.783 13.98 81.535 15.612 35.827 1.634 47.266 2.021 138.49 2.021 91.222 0 102.661-.387 138.488-2.021 35.752-1.631 60.169-7.31 81.534-15.612 22.088-8.584 40.82-20.07 59.495-38.743 18.673-18.675 30.159-37.407 38.743-59.495 8.302-21.365 13.981-45.782 15.612-81.534 1.634-35.827 2.021-47.266 2.021-138.488 0-91.224-.387-102.663-2.021-138.49-1.631-35.752-7.31-60.169-15.612-81.534-8.584-22.088-20.07-40.822-38.743-59.495-18.675-18.673-37.407-30.159-59.495-38.743-21.365-8.302-45.782-13.981-81.534-15.612C438.556.387 427.117 0 335.895 0zm0 60.521c89.686 0 100.31.343 135.729 1.959 32.75 1.493 50.535 6.965 62.37 11.565 15.68 6.094 26.869 13.372 38.622 25.126 11.755 11.754 19.033 22.944 25.127 38.622 4.6 11.836 10.072 29.622 11.565 62.371 1.616 35.419 1.959 46.043 1.959 135.73 0 89.687-.343 100.311-1.959 135.73-1.493 32.75-6.965 50.535-11.565 62.37-6.094 15.68-13.372 26.869-25.127 38.622-11.753 11.755-22.943 19.033-38.621 25.127-11.836 4.6-29.622 10.072-62.371 11.565-35.413 1.616-46.036 1.959-135.73 1.959-89.694 0-100.315-.343-135.73-1.96-32.75-1.492-50.535-6.964-62.37-11.564-15.68-6.094-26.869-13.372-38.622-25.127-11.754-11.753-19.033-22.943-25.127-38.621-4.6-11.836-10.071-29.622-11.565-62.371-1.616-35.419-1.959-46.043-1.959-135.73 0-89.687.343-100.311 1.959-135.73 1.494-32.75 6.965-50.535 11.565-62.37 6.094-15.68 13.373-26.869 25.126-38.622 11.754-11.755 22.944-19.033 38.622-25.127 11.836-4.6 29.622-10.072 62.371-11.565 35.419-1.616 46.043-1.959 135.73-1.959" />
                      <path d="M335.895 447.859c-61.838 0-111.966-50.128-111.966-111.964 0-61.838 50.128-111.966 111.966-111.966 61.836 0 111.964 50.128 111.964 111.966 0 61.836-50.128 111.964-111.964 111.964zm0-284.451c-95.263 0-172.487 77.224-172.487 172.487 0 95.261 77.224 172.485 172.487 172.485 95.261 0 172.485-77.224 172.485-172.485 0-95.263-77.224-172.487-172.485-172.487m219.608-6.815c0 22.262-18.047 40.307-40.308 40.307-22.26 0-40.307-18.045-40.307-40.307 0-22.261 18.047-40.308 40.307-40.308 22.261 0 40.308 18.047 40.308 40.308" />
                    </g>
                  </svg>
                </Link>
                <Link>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="twitter"
                    role="img"
                    viewBox="0 0 512 512"
                    data-fa-i2svg=""
                    className="w-6 h-6"
                  >
                    <path
                      fill="currentColor"
                      d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
