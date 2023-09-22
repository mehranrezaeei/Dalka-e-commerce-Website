import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddItem } from "../../features/shoppingCartSlice/shoppingCartSlice";
import { isInItems } from "../helpers/funtion";
const Card = ({ productData }) => {
  const state = useSelector((state) => state.shoppingcart);
  const Dispatch = useDispatch();
  return (
    <div className="h-fit flex flex-col lg:w-[300px] xs:w-[350px] w-full">
      <div className="CcardImgContainer w-full h-[450px] relative overflow-hidden">
        <Link
          className="w-full h-full"
          to={`/productdetail/${productData.category + "-" + productData.id}`}
        >
          <img
            src={productData.productImages.main}
            className="w-full h-full"
            alt={productData.name}
          />
        </Link>
        <div className="absolute bottom-[-100%] transition-all flex w-full h-[30%]  justify-center items-center bg-gradient-to-t from-white to-transparent via-slate-50">
          {isInItems(state, productData.id) ? (
            <button
              className=" py-2 px-4 bg-green-600 text-white rounded-md"
              disabled
            >
              Added To cart
            </button>
          ) : (
            <button
              className=" py-2 px-4 border border-black rounded-md hover:bg-black hover:text-white transition-colors duration-200"
              onClick={() => {
                Dispatch(AddItem(productData));
                console.log(state);
              }}
            >
              Add To Cart
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col flex-auto">
          <h3 className="my-2 font-[300] ">{productData.name}</h3>
          <span>{productData.price} $</span>
        </div>
        <div className=" flex flex-col py-2 gap-[1px]">
          {productData.colors.map((item) => {
            return <span className={`w-3 h-3 rounded-sm bg-${item}`}></span>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
