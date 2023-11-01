import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import icons from "../../assets/icons/icons";
import { navbarScrollController } from "../helpers/funtion";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showStatus, setshowStatus] = useState({
    shop: false,
    aboutUs: false,
    search: false,
  });
  const aboutusRef = useRef();
  const shopRef = useRef();
  const [burgorMenu, setburgorMenu] = useState(false);
  const state = useSelector((state) => state.shoppingcart);
  useEffect(() => {
    const handelClickOutSide = (e) => {
      if (
        aboutusRef.current &&
        !aboutusRef.current.contains(e.target) &&
        shopRef.current &&
        !shopRef.current.contains(e.target)
      ) {
        setshowStatus({ ...showStatus, shop: false, aboutUs: false });
      }
    };

    if (showStatus.aboutUs || showStatus.shop) {
      window.addEventListener("click", handelClickOutSide);
    }

    return () => window.removeEventListener("click", handelClickOutSide);
  }, [showStatus.aboutUs, showStatus.shop]);

  const searchInp = useRef();
  useEffect(() => {
    navbarScrollController();
    document.body.style.overflowY = burgorMenu ? "hidden" : "auto";
  }, [burgorMenu]);

  return (
    <nav className="fixed top-0 left-0 w-full h-[80px] z-[100] transition-transform duration-75 bg-white ">
      <div className="Ccontainer w-full h-full flex justify-between items-center py-4">
        {/* Blur Background for hamburgor menu */}
        <div
          className={`fixed cursor-pointer w-screen h-screen backdrop-blur-[2px] top-0 left-0 z-[109] ${
            burgorMenu ? "block" : "hidden"
          }`}
          onClick={() => {
            setburgorMenu(!burgorMenu);
          }}
        ></div>
        {/* Burgor Menu */}
        <div className="w-52 md:hidden block z-[115]">
          <div
            className={`w-7 h-4 flex flex-col cursor-pointer relative origin-center`}
            onClick={() => {
              setburgorMenu(!burgorMenu);
            }}
          >
            <div
              className={`w-4 h-[0.2rem] rounded-full bg-black absolute  translate-y-[-50%] transition-all ${
                burgorMenu ? "rotate-[45deg] top-[50%] w-7" : "top-[0]"
              }`}
            ></div>
            <div
              className={`w-5 h-[0.2rem] rounded-full bg-black absolute translate-y-[-50%] top-[50%] transition-all ${
                burgorMenu && "translate-x-[-70%] opacity-0 "
              }`}
            ></div>
            <div
              className={`w-7 h-[0.2rem] rounded-full bg-black absolute  translate-y-[-50%] transition-all ${
                burgorMenu ? "rotate-[-45deg] top-[50%] w-7" : "top-[100%]"
              }`}
            ></div>
          </div>
        </div>

        {/* Nav Menu Items */}
        <div
          className={`flex md:flex-row flex-col md:justify-normal justify-between md:h-auto h-screen md:items-center text-[0.9rem] md:p-0 pt-20 pb-5 sm:pl-14 pl-6 max-[450px]:px-3 pr-6 xs:w-[65%] w-[75%] font-[300] transition-[left] md:w-52 md:bg-transparent bg-white md:static top-0 fixed ${
            burgorMenu ? "left-0 z-[110]" : "left-[-100%]"
          }`}
        >
          {/* List Items */}
          <div className="flex md:flex-row flex-col">
            <div className="relative flex flex-col md:m-0 my-1">
              <Link
                className="font-[300] hover:underline md:pr-4 py-2 flex items-center justify-between md:justify-normal w-full gap-1"
                ref={shopRef}
                onClick={() => setshowStatus({ shop: !showStatus.shop })}
              >
                <span>Shop</span>
                <span
                  className={`transition-transform duration-200 ${
                    showStatus.shop ? "rotate-0" : "rotate-[180deg]"
                  }`}
                >
                  {icons.subBottomIcon}
                </span>
              </Link>
              <ul
                className={`md:absolute left-0 md:top-[100%] transition-all bg-white flex-col min-w-[160px] md:px-4 px-2 py-4 md:py-10 gap-3 ${
                  showStatus.shop ? "flex" : "hidden"
                }`}
              >
                <li>
                  <Link to="/products/all">All</Link>
                </li>
                <li>
                  <Link to="/products/man">Man</Link>
                </li>
                <li>
                  <Link to="/products/woman">Woman</Link>
                </li>
                <li>
                  <Link to="/products/kids">Kids</Link>
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
            <div className="relative flex flex-col md:m-0 my-1">
              <Link
                className="font-[300] hover:underline md:pr-4 py-2 flex md:justify-normal justify-between items-center gap-1"
                ref={aboutusRef}
                onClick={() => setshowStatus({ aboutUs: !showStatus.aboutUs })}
              >
                <span>About Us</span>
                <span
                  className={`transition-transform duration-200 ${
                    showStatus.aboutUs ? "rotate-0" : "rotate-[180deg]"
                  }`}
                >
                  {icons.subBottomIcon}
                </span>
              </Link>

              <ul
                className={`md:absolute left-0 top-[100%] bg-white flex-col min-w-[160px] md:px-4 px-2 py-4 md:py-10 gap-3 ${
                  showStatus.aboutUs ? "flex" : "hidden"
                }`}
              >
                <li>
                  <Link to="/about/aboutus">About</Link>
                </li>
                <li>
                  <Link to="/about/contact">Contact</Link>
                </li>
                <li>
                  <Link>Feedback</Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Account Links */}
          <div className=" md:hidden flex items-center justify-between">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>

        {/* Logo */}
        <Link to="/">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 755.7 755.7"
            className="md:w-10 md:h-10 xs:w-8 xs:h-8 w-7 h-7 "
          >
            <path
              d="M755.7,414.41V755.7H604.19V544.49l-191,211.21H209l382.3-422.79c-35.07-107.29-136.46-181.4-250-181.4H151.51V755.7H0V0H341.29c110.7,0,214.77,43.11,293,121.38A414.33,414.33,0,0,1,714.4,233.59a409.7,409.7,0,0,1,39,137A418.65,418.65,0,0,1,755.7,414.41Z"
              fill="#231f20"
            />
          </svg>
        </Link>
        {/* Search , Account , Shopping Cart */}
        <div className="flex justify-end gap-5 w-52">
          {/* Search Icon */}
          <span
            className="cursor-pointer"
            onClick={() => {
              setshowStatus({ search: !showStatus.search });
              searchInp.current.focus();
            }}
          >
            {icons.searchIcon}
          </span>
          {/* Search Box  */}
          <div
            className={`absolute  left-0 w-full z-[115] h-full bg-white flex items-center justify-between xs:Ccontainer px-1 overflow-hidden transition-all ease-in-out duration-300 ${
              showStatus.search ? "top-0 opacity-100" : "top-[-100%] opacity-0"
            }`}
          >
            <div className="flex items-center ">
              <input
                type="text"
                placeholder="Search"
                ref={searchInp}
                className="h-8 md:w-[20rem] flex-auto xs:w-[15rem] xs:px-3 px-1 font-200 bg-transparent outline-none"
              />
              <span className="p-1 cursor-pointer flex-auto">
                {icons.searchIcon}
              </span>
            </div>
            <span
              className="cursor-pointer"
              onClick={() => setshowStatus({ search: !showStatus.search })}
            >
              {icons.exitIcon("w-7 h-7")}
            </span>
          </div>
          {/* Account Link */}
          <Link to="/login" className="md:block hidden">
            {icons.accountsIcon}
          </Link>
          {/* Shopping Cart Link */}
          <Link to="/shoppingcart" className="relative">
            <span>{icons.shoppingCartIcon}</span>
            {state.itemsCounter > 0 && (
              <span className="absolute top-0 right-[-50%] bg-red-500 text-white rounded-full text-[0.8rem] flex items-center justify-center min-w-[18px] min-h-[18px]">
                {state.itemsCounter > 99 ? 99 : state.itemsCounter}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
