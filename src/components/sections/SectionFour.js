import React from "react";
// Video
import video1 from "../../assets/videos/sectionFour-video.mp4";
const SectionFour = () => {
  return (
    <section className="CsecYmargin w-full">
      <video autoPlay loop muted className="w-full h-[24rem] object-cover">
        <source src={video1} type="video/mp4" />
      </video>
    </section>
  );
};

export default SectionFour;
