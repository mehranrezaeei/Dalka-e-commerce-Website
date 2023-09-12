import React from "react";
import { Link } from "react-router-dom";
import icons from "../assets/icons/icons";
// Data
import { footerData } from "../assets/data/data";
// images
import logo from "../assets/images/dalka-logo.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col min-h-[60vh] justify-end">
      <div className="flex justify-center items-center border-b gap-12 py-10 ">
        <Link className="hover:scale-[1.2] transition-all duration-300">
          {icons.twitterIcon}
        </Link>
        <Link className="hover:scale-[1.2] transition-all duration-300">
          {icons.instagramIcon}
        </Link>
        <Link className="hover:scale-[1.2] transition-all duration-300">
          {icons.linkedinIcon}
        </Link>
        <Link className="hover:scale-[1.2] transition-all duration-300">
          {icons.youtubeIcon}
        </Link>
      </div>
      <div className="flex flex-wrap justify-between items-center py-20 Ccontainer bg-black text-white gap-3">
        {footerData.map((item) => {
          return (
            <ul className="font-[300] flex sm:gap-4 gap-2">
              {item.map((item, index) => {
                return (
                  <li className="first:font-[600] first:pb-2 first:flex items-center first:gap-2">
                    <Link>{item}</Link>
                    {index == 0 ? <span>{icons.arrowRight}</span> : ""}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
