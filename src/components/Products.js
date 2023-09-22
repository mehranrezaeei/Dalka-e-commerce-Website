import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Card from "./shared/Card";
import icons from "../assets/icons/icons";
import { ProductsData } from "../assets/data/data";
// Dependecy
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AddItem,
  RemoveItem,
  Decrease,
  Increase,
} from "../features/shoppingCartSlice/shoppingCartSlice";
const Products = () => {
  const [modalShoppingCart, setmodalShoppingCart] = useState(false);
  const selector = useSelector((state) => state.shoppingcart);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflowY = modalShoppingCart ? "hidden" : "auto";
  }, [modalShoppingCart]);
  {
    console.log(selector);
  }
  return (
    <div className="relative">
      <Navbar />
      {/* Blur Bg For Modal Shopping Cart  */}
      <div
        className={`fixed cursor-pointer w-screen h-screen backdrop-blur-[2px] top-0 left-0 z-[109] ${
          modalShoppingCart ? "block" : "hidden"
        }`}
        onClick={() => {
          setmodalShoppingCart(!modalShoppingCart);
        }}
      ></div>
      <div className="mt-[85px] w-full h-[70vh] bg-gray-600">HEader</div>
      <div className="Ccontainer my-10">
        {/* Header of Products For Filter ... */}
        <div className="flex items-center justify-between h-20 ">
          {/* Selection Filter */}
          <select className="py-2 outline-none font-[300] cursor-pointer">
            <option selected>All</option>
            <option>Price: Lowest to High</option>
            <option>Price: Hight to Low</option>
            <option>Most Visited</option>
            <option>BestSelling</option>
            <option>Newest</option>
          </select>
          <div className="flex items-center gap-3">
            {/* Filter Button */}
            <span className="py-1 px-6 border-[1px] font-[300] border-black">
              Filter
            </span>
            {/* Search Button */}
            <span className="flex items-center gap-2 py-1 px-3 border-[1px] font-[300] border-black">
              Search
              {icons.searchIcon}
            </span>
          </div>
        </div>
        <div className="min-h-screen flex py-10 flex-wrap gap-7 justify-center gap-y-4">
          {ProductsData.Man.map((item) => {
            return <Card productData={item} />;
          })}
        </div>
      </div>
      {/* Modal Shopping Cart  */}
      <div
        className={`fixed lg:w-[40%] md:w-[60%] pt-7 xs:w-[70%] w-[100%] h-screen transition-all duration-500 ease-in-out justify-between bg-white top-0 flex flex-col z-[110] ${
          modalShoppingCart ? "right-0 " : "right-[-100%]"
        }`}
      >
        {/* Modal Close Button */}
        <button
          className="absolute top-[7px] left-[15px]"
          onClick={() => setmodalShoppingCart(!modalShoppingCart)}
        >
          {icons.exitIcon("w-7 h-7")}
        </button>
        {/* Shoping Cart Items */}
        <div className="flex flex-col gap-3 overflow-y-auto py-5 px-4">
          {selector.selectedItems.map((item) => {
            return (
              <div className="flex justify-between items-center ">
                <div className="flex gap-2">
                  <img src={item.productImages.main} className="w-20" alt="" />
                  <div className="flex flex-col justify-evenly">
                    <h1>{item.name}</h1>
                    <span>{item.category}</span>
                    <span className="font-bold text-lg">{item.price}</span>
                  </div>
                </div>
                {/* Buttons Handeler */}
                <div className="flex items-center">
                  <div className="flex rounded-full overflow-hidden bg-gray-100">
                    {item.quantity === 1 && (
                      <button
                        className={`w-7 h-7 k flex justify-center  items-center hover:bg-red-500 hover:text-white transition-colors`}
                        onClick={() => dispatch(RemoveItem(item.id))}
                      >
                        {icons.trashIcon("w-[18px] h-[18px]")}
                      </button>
                    )}
                    {item.quantity > 1 && (
                      <button
                        className={`w-7 h-7 k flex justify-center  items-center hover:bg-red-500 hover:text-white transition-colors`}
                        onClick={() => dispatch(Decrease(item.id))}
                      >
                        -
                      </button>
                    )}
                    <span className="border-Cblue px-2 h-7 flex items-center justify-center ">
                      {item.quantity}
                    </span>
                    <button
                      className="w-7 h-7 k flex justify-center  items-center hover:bg-green-500 hover:text-white transition-colors"
                      onClick={() => dispatch(Increase(item.id))}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Link to Shopping Cart Page */}
        <div>
          <Link className=" bg-Cblue text-white my-3 mx-4 flex justify-center items-center py-3">
            Shopping Cart
          </Link>
        </div>
      </div>
      {selector.itemsCounter > 0 && (
        <div
          className={`fixed top-[50%] translate-y-[-50%] right-[-15px] w-8 flex justify-end items-center text-[1.3rem] h-8 rounded-full transition-all  bg-black rotate-[-180deg] text-white cursor-pointer `}
          onClick={() => setmodalShoppingCart(!modalShoppingCart)}
        >
          {icons.arrowRight(`w-6 h-6 font-bold`)}
        </div>
      )}
    </div>
  );
};

export default Products;
