import React from "react";
import Navbar from "../layout/Navbar";
import { aboutusData } from "../../data/data";
const AboutUs = () => {
  return (
    <div className="W-full min-h-screen pt-[80px]">
      <Navbar />
      <div className="w-full h-[calc(100vh-80px)] flex flex-col">
        <div className="w-full md:h-[70%] h-fit flex">
          <div className="flex flex-col sm:px-14 px-7 ">
            <h1 className="text-[3rem] font-sans py-3">About</h1>
            <p className="text-lg font-[300] overflow-hidden">
              {aboutusData.mainData}
            </p>
          </div>
        </div>
        {/* Our Value */}
        <div className="md:h-[30%] h-fit w-full flex flex-col">
          <h2 className="text-[2rem] py-6 font-sans font-medium sm:text-left text-center w-full sm:px-14 px-7 bg-white">
            Our Value
          </h2>
          <div className="w-full h-fit flex-1">
            <ul className="grid md:grid-cols-4 items-end sm:grid-cols-2 grid-cols-1 w-full overflow-hidden h-full text-[1.5rem] font-bold">
              {aboutusData.ourValueData.map((item, index) => {
                console.log("hir", index);
                return (
                  <li
                    className={` animate-side-left-show hover:text-[1.7rem] transition-all flex justify-center items-center text-[1.5rem] text-white h-28`}
                    style={{
                      backgroundColor: item.color,
                      animationDuration: `${(index + 1) * 400}ms`,
                    }}
                  >
                    {item.text}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
