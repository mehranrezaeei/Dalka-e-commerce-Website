import React from "react";
import { Link } from "react-router-dom";
import icons from "../../assets/icons/icons";
// Data
import { footerData } from "../../data/data";
// images
import { v4 } from "uuid";

const Footer = () => {
  return (
    <footer className="flex flex-col h-fit mt-36 ">
      <div className="flex justify-center items-center border-b sm:gap-12 gap-7 w-full py-10 ">
        <a
          href="https://twitter.com"
          className="hover:scale-[1.2] transition-all duration-300"
        >
          {icons.twitterIcon}
        </a>
        <a
          href="https://instagram.com"
          className="hover:scale-[1.2] transition-all duration-300"
        >
          {icons.instagramIcon}
        </a>
        <a
          href="https://linkedin.com"
          className="hover:scale-[1.2] transition-all duration-300"
        >
          {icons.linkedinIcon}
        </a>
        <a
          href="https://youtube.com"
          className="hover:scale-[1.2] transition-all duration-300"
        >
          {icons.youtubeIcon}
        </a>
      </div>
      <div className="bg-black w-full flex flex-col">
        <div className="flex flex-wrap justify-between items-center py-20 Ccontainer w-full text-white gap-3">
          {footerData.map((item, index) => {
            return (
              <ul
                className="font-[300] flex sm:gap-4 gap-2 xs:flex-nowrap flex-wrap"
                key={v4 + "-" + index}
              >
                {item.map((item, index) => {
                  return (
                    <li
                      className="first:font-[600] first:pb-2 first:flex items-center first:gap-2"
                      key={`${item.text}-${index}`}
                    >
                      <Link to={item.url}>{item.text}</Link>
                      {index === 0 ? <span>{icons.arrowRight}</span> : ""}
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
        <div className="text-white flex justify-center pb-4">
          <a
            href="https://www.linkedin.com/in/mehranrezaei"
            target="_blank"
            rel="noreferrer"
            className="font-[300]"
          >
            &copy; Designed by Mehran Rezaei
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
