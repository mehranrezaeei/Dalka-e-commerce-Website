import React from "react";
// Dependecy
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  RemoveItem,
  Increase,
  Decrease,
  Checkout,
  Clear,
} from "../../features/shoppingCartSlice/shoppingCartSlice";
import icons from "../../assets/icons/icons";
// Toastify Library
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoppingCart = () => {
  const selector = useSelector((state) => state.shoppingcart);
  const Dispatch = useDispatch();
  // React Router Dom Navigate
  const Navigate = useNavigate();
  // Toastify
  const notify = (message, type) => {
    if (type === "success") {
      toast.success(message, { theme: "colored" });
    } else if (type === "error") {
      toast.error(message, { theme: "colored" });
    }
  };
  return (
    <div className="w-full h-screen Ccontainer md:my-10 my-2">
      <ToastContainer />
      <div className="flex flex-col">
        {/* Shopping Cart Header */}
        <div className="py-3 border-b md:flex hidden ">
          <span className="w-[50%] ">Description</span>
          <span className="w-[8%]">Size</span>
          <span className="w-[25%]">Quantity</span>
          <span className="w-[8%]">Price</span>
          <span className="w-[8%]">Remove</span>
        </div>
        {/* Shopping Cart Items */}
        <div className="flex flex-col h-[65vh] overflow-y-auto">
          {selector.selectedItems.map((item) => {
            return (
              <div className="w-full ">
                <div className="w-full flex flex-wrap  my-7 border-b md:static relative ">
                  <div className=" md:w-auto w-full">
                    <img
                      src={item.productImages.main}
                      className="md:h-36 h-auto md:w-28 w-full"
                      alt=""
                    />
                  </div>
                  <div className="md:flex-1 md:py-0 py-4 md:px-4 w-full flex md:flex-row flex-col">
                    {/* Name And Category */}
                    <div className="md:w-[30%]  w-full flex items-center justify-center md:justify-start">
                      <div className="flex flex-col justify-center md:items-start items-center capitalize">
                        <h1 className="md:text-lg text-[1.3rem] font-[600]">
                          {item.name}
                        </h1>
                        <span className="font-[300] text-lg md:text-base">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <div className="md:w-[70%]  w-full flex md:flex-row flex-col items-center gap-4 md:py-0 py-5">
                      {/* Size and Quantity */}
                      <div className="flex  md:w-[70%] w-full justify-center gap-3">
                        <div className="md:order-1 order-2">
                          <select className="h-12 p-1 border">
                            {item.productSize.map((item) => {
                              return <option value={item}>{item}</option>;
                            })}
                          </select>
                        </div>
                        {/* Quantity */}
                        <div className="flex md:order-2 order-1">
                          <button
                            className="w-12 h-12 bg-gray-100 border hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-200"
                            onClick={() => {
                              item.quantity > 1
                                ? Dispatch(Decrease(item.id))
                                : Dispatch(RemoveItem(item.id));
                            }}
                          >
                            -
                          </button>
                          <span className="w-12 h-12 flex justify-center items-center bg-Cblue text-white border">
                            {item.quantity}
                          </span>
                          <button
                            className="w-12 h-12 bg-gray-100 border hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors duration-200"
                            onClick={() => Dispatch(Increase(item.id))}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      {/* Price And Remove Item */}
                      <div className="flex md:w-[30%] gap-2 md:flex-row flex-col items-center w-full justify-around">
                        {/* Price */}
                        <div className=" md:text-lg text-[1.8rem] font-[600]">
                          <span>{item.price} $</span>
                        </div>
                        {/* Remove */}
                        <div className="flex justify-center md:static absolute top-3 right-3">
                          <button onClick={() => Dispatch(RemoveItem(item.id))}>
                            {icons.exitIcon("md:w-5 md:h-5 w-7 h-7")}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Price And Total Payment Info */}
        <div className="flex sm:items-center sm:flex-row flex-col gap-2 my-3">
          <div className="flex flex-1 md:flex-row flex-col gap-2 ">
            <div className="flex justify-between border p-3 h-20 items-center flex-1">
              <span>Discount</span>
              <span>0.00 $</span>
            </div>
            <div className="flex justify-between border  p-3 h-20 items-center flex-1">
              <span>Delivery</span>
              <span>0.00 $</span>
            </div>
          </div>
          <div className="flex flex-1 md:flex-row flex-col gap-2">
            <div className="flex justify-between border p-3 h-20 items-center flex-1">
              <span>Items</span>
              <span>{selector.itemsCounter}</span>
            </div>
            <div className="flex justify-between border p-3 h-20 items-center flex-1">
              <span>Total</span>
              <span>{selector.total.toFixed(2)} $</span>
            </div>
          </div>
        </div>
        {/* Chechkout & Discount & Clear */}
        <div className="flex md:flex-row flex-col gap-2 mb-3">
          {/* Discount Side*/}
          <div className="md:flex-[3] flex md:flex-row flex-col">
            <input
              type="text"
              placeholder="Please Enter Discount Code"
              value=""
              className="border h-14 md:flex-1 px-3"
            />
            <button className="md:w-[33%]  px-3 h-14 bg-Cblue text-white ">
              Apply Discount
            </button>
          </div>
          {/* Checkout , Continue Shopping , Clear */}
          <div className="md:flex-[1] flex flex-col gap-1">
            {/* Checkout */}
            <div className="flex gap-1">
              <button
                className="bg-Cblue text-white w-full h-14"
                onClick={() => {
                  if (selector.selectedItems.length) {
                    Dispatch(Checkout());
                    Dispatch(Clear());
                    notify("Checkout was Successfull", "success");
                  } else {
                    notify("Shopping Cart Is Empty !", "error");
                  }
                }}
              >
                Checkout
              </button>
              <span className="bg-Cblue h-14 text-white flex justify-center items-center px-4">
                {icons.shoppingCartIcon}
              </span>
            </div>
            {/* Continue Shopping */}
            <div className="">
              <button
                className="w-full h-14 bg-gray-100 border"
                onClick={() => Navigate(-1)}
              >
                Continue Shopping
              </button>
            </div>
            {/* Clear Shopping Cart */}
            <div className="">
              <button
                className="w-full h-14 bg-gray-100 border"
                onClick={() => {
                  if (selector.selectedItems.length) {
                    Dispatch(Clear());
                    notify("All Items Removed", "success");
                  } else {
                    notify("Shopping Cart Is Empty !", "error");
                  }
                }}
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
