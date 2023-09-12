import React from "react";
import icons from "../../assets/icons/icons";

const SectionThree = () => {
  return (
    <section className="w-full CsecYmargin Ccontainer">
      <div className="flex flex-wrap sm:flex-row flex-col gap-4 justify-between items-center">
        <span>{icons.zaraIcon}</span>
        {/* <span>{icons.hmIcon}</span> */}
        <span>{icons.diorIcon}</span>
        {/* <span>{icons.bossIcon}</span> */}
        <span>{icons.louisvuittonIcon}</span>
        <span>{icons.gucciIcon}</span>
      </div>
    </section>
  );
};

export default SectionThree;
