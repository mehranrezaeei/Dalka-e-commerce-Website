import React from "react";
import { Link } from "react-router-dom";
import pic1 from "../../assets/images/sectionTwo-pic1.jpg";
import pic2 from "../../assets/images/sectionTwo-pic2.jpg";
import pic3 from "../../assets/images/sectionTwo-pic3.jpg";
import pic4 from "../../assets/images/sectionTwo-pic4.jpg";
import icons from "../../assets/icons/icons";

const SectionTwo = () => {
  return (
    <section className="CsecYmargin w-full xs:min-h-screen h-fit Ccontainer">
      <div className="my-10 flex justify-between items-center">
        <h1 className="sm:text-[3rem] xs:text-[2.5rem] text-[2rem] font-[600]">
          Up to 50% Off
        </h1>
        <div className="flex items-center flex-wrap gap-1">
          <Link className="text-white bg-Cblue xs:p-3 p-2 rounded-full outline outline-3 hover:outline-Cblue hover:outline-offset-2 transition-all duration-300">
            {icons.arrowUpRight}
          </Link>
        </div>
      </div>
      <div>
        <Link className="flex md:flex-row flex-col">
          <div className="flex flex-1">
            <img src={pic1} className="object-cover w-[50%]" alt="/" />
            <img src={pic2} className="object-cover w-[50%]" alt="/" />
          </div>
          <div className="flex flex-1">
            <img src={pic3} className="object-cover w-[50%]" alt="/" />
            <img src={pic4} className="object-cover w-[50%]" alt="/" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default SectionTwo;
