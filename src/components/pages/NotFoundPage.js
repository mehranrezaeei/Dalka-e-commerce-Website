import React, { useEffect } from "react";
import notFoundImg from "../../assets/images/notfound-image.png";
import { Link, useNavigate } from "react-router-dom";
const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate("/");
    }, 10000);

    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div className="flex  w-full min-h-screen justify-center items-center">
      <div className=" flex items-center gap-6 sm:flex-row flex-col">
        <div>
          <img src={notFoundImg} alt="" className="h-[350px] " />
        </div>
        <div className="px-10 flex flex-col sm:items-start items-center">
          <h1 className="text-[6rem] font-[600] tracking-wider text-Cblue">
            404
          </h1>
          <h1 className="text-[3rem] font-bold uppercase tracking-wide sm:text-left text-center">
            oops! Page
          </h1>
          <h1 className="text-[3rem] font-bold uppercase tracking-wide sm:text-left text-center">
            {" "}
            Not Found
          </h1>
          <Link
            to="/"
            className="px-7 my-3 w-fit rounded-md py-3 bg-Cblue text-white"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
