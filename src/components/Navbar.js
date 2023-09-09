import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import icons from "../assets/icons/icons";
import { navbarScrollController } from "./helpers/funtion";
const Navbar = () => {
  const [showStatus, setshowStatus] = useState({
    shop: false,
    aboutUs: false,
    search: false,
  });
  useEffect(() => {
    navbarScrollController();
  }, []);
  return (
    <nav className="fixed top-0 left-0 w-full h-[80px]  flex justify-between items-center Ccontainer py-4 z-[100] transition-transform duration-75">
      {/* Nav Menu Items */}
      <div className="flex items-center text-[0.9rem] font-[300]">
        {/* List Items */}
        <div className="relative flex">
          <Link
            className="  font-[300] hover:underline pr-4 py-2 flex items-center gap-1"
            onClick={() => setshowStatus({ shop: !showStatus.shop })}
          >
            <span>Shop</span>
            {icons.subBottomIcon}
          </Link>
          <ul
            className={`absolute left-0 top-[100%] bg-white flex-col min-w-[160px] px-4 py-10 gap-3 ${
              showStatus.shop ? "flex" : "hidden"
            }`}
          >
            <li>
              <Link>All</Link>
            </li>
            <li>
              <Link>Men</Link>
            </li>
            <li>
              <Link>Woman</Link>
            </li>
            <li>
              <Link>Kids</Link>
            </li>
            <li>
              <Link>Best Sale</Link>
            </li>
            <li>
              <Link>Discounted</Link>
            </li>
          </ul>
        </div>
        {/* List Items */}
        <div className="relative flex">
          <Link
            className="  font-[300] hover:underline pr-4 py-2 flex items-center gap-1"
            onClick={() => setshowStatus({ aboutUs: !showStatus.aboutUs })}
          >
            <span>About Us</span>
            {icons.subBottomIcon}
          </Link>

          <ul
            className={`absolute left-0 top-[100%] bg-white flex-col min-w-[160px] px-4 py-10 gap-3 ${
              showStatus.aboutUs ? "flex" : "hidden"
            }`}
          >
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link>Feedback</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* Logo */}
      <div>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 755.7 755.7"
          className="w-10 h-10"
        >
          <path
            d="M755.7,414.41V755.7H604.19V544.49l-191,211.21H209l382.3-422.79c-35.07-107.29-136.46-181.4-250-181.4H151.51V755.7H0V0H341.29c110.7,0,214.77,43.11,293,121.38A414.33,414.33,0,0,1,714.4,233.59a409.7,409.7,0,0,1,39,137A418.65,418.65,0,0,1,755.7,414.41Z"
            fill="#231f20"
          />
        </svg>
      </div>
      {/* Search , Account , Shopping Cart */}
      <div className="flex items-center gap-5">
        {/* Search Icon */}
        <span
          className="cursor-pointer"
          onClick={() => setshowStatus({ search: !showStatus.search })}
        >
          {icons.searchIcon}
          {console.log(showStatus.search)}
        </span>
        {/* Search Box  */}
        <div
          className={`absolute  left-0 w-full h-full bg-white flex items-center justify-between Ccontainer overflow-hidden transition-all ease-in-out duration-300 ${
            showStatus.search ? "top-0 opacity-100" : "top-[-100%] opacity-0"
          }`}
        >
          <div className="flex items-center ">
            <input
              type="text"
              placeholder="Search"
              className="h-8 w-auto sm:min-w-[20rem] px-3 font-200 bg-transparent outline-none "
            />
            <span className="p-1 cursor-pointer">{icons.searchIcon}</span>
          </div>
          <span
            className="cursor-pointer"
            onClick={() => setshowStatus({ search: !showStatus.search })}
          >
            {icons.exitIcon}
          </span>
        </div>
        {/* Account Link */}
        <Link to="/login">{icons.accountsIcon}</Link>
        {/* Shopping Cart Link */}
        <Link to="/shoppingcart">{icons.shoppingCartIcon}</Link>
      </div>
    </nav>
  );
};

export default Navbar;
