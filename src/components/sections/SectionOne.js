import React from "react";
// Images
import pic1 from "../../assets/images/sectionOne-pic1.jpg";
import pic2 from "../../assets/images/sectionOne-pic2.jpg";
import pic3 from "../../assets/images/sectionOne-pic3.jpg";
import pic4 from "../../assets/images/sectionOne-pic4.jpg";
import pic5 from "../../assets/images/sectionOne-pic5.jpg";

const SectionOne = () => {
  return (
    <section className="flex flex-col gap-5 Ccontainer CsecYmargin">
      <div className="flex md:flex-row flex-col gap-5 w-full">
        <div className="flex-1">
          <img src={pic1} className="w-full" alt="/" />
        </div>
        <div className="flex-1">
          <img src={pic2} className="w-full" alt="/" />
        </div>
      </div>

      <div className="flex gap-5 w-full">
        <div className="flex-1">
          <img src={pic3} className="w-full" alt="/" />
        </div>
        <div className="flex-1">
          <img src={pic4} className="w-full" alt="/" />
        </div>
        <div className="flex-1">
          <img src={pic5} className="w-full" alt="/" />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
