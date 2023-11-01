import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../../data/data";
import icons from "../../assets/icons/icons";
// Dependency
import {
  AddItem,
  RemoveItem,
  Increase,
  Decrease,
} from "../../features/shoppingCartSlice/shoppingCartSlice";
import { useDispatch, useSelector } from "react-redux";
import { quantityCount } from "../helpers/funtion";
const ProductDetail = () => {
  const { id, productscategory } = useParams();
  const [currentProduct, setcurrentProduct] = useState();
  const selector = useSelector((state) => state.shoppingcart);
  const Dispatch = useDispatch();
  const DataCategoryHandel = () => {
    if (ProductsData[productscategory]) {
      return ProductsData[productscategory];
    } else {
      return ProductsData.man;
    }
  };
  const Products = DataCategoryHandel();
  useEffect(() => {
    Products.forEach((item) => {
      const productid = item.category + "-" + item.id;
      if (productid === id) {
        setcurrentProduct(item);
      }
    });
  }, []);

  const starHandler = (value) => {
    let stars = [];
    for (let i = 1; i <= value; i++) {
      stars.push(<span>{icons.starIcon}</span>);
    }
    return stars;
  };
  return (
    <div className="flex justify-center items-center">
      <div className="lg:w-[65%] md:w-[85%] sm:w-full mt-12">
        <div className="flex items-center w-full sm:flex-row flex-col gap-10 ">
          {/* Image Side */}
          <div>
            <div className="flex flex-col gap-3">
              <div>
                <img
                  src={currentProduct && currentProduct.productImages.main}
                  className="h-[550px] sm:w-[400px] w-full"
                  alt={currentProduct && currentProduct.name}
                />
              </div>
              <div className="flex justify-center gap-2">
                {currentProduct &&
                  currentProduct.productImages.otherImages.map((item) => {
                    return <img className="w-10" src={item} alt="" />;
                  })}
              </div>
            </div>
          </div>
          {/* Information Side */}
          <div className="flex flex-1 flex-col gap-3 xs:p-0 px-2">
            <h1 className="text-[1.5rem]">
              {currentProduct && currentProduct.name}
            </h1>
            <span className="font-[300] capitalize">
              {currentProduct && currentProduct.category}
            </span>
            <div className="flex gap-2 border-b border-b-black items-center py-2">
              {currentProduct &&
                starHandler(Math.trunc(currentProduct.productRating))}
              {currentProduct && currentProduct.productRating}
            </div>
            <div className="flex flex-col gap-2 border-b border-b-black pb-4">
              Colors :
              <div className="flex  gap-4">
                {currentProduct &&
                  currentProduct.colors.map((item) => {
                    return (
                      <span className={`w-5 h-5 rounded-md bg-${item}`}></span>
                    );
                  })}
              </div>
            </div>
            <div className="flex flex-col gap-2 ">
              Select a Size
              <div className="flex gap-4">
                {currentProduct &&
                  currentProduct.productSize.map((item) => {
                    return (
                      <span
                        className={`w-9 h-9 flex justify-center items-center rounded-lg border border-gray-500 font-[300] hover:bg-black hover:text-white cursor-pointer`}
                      >
                        {item}
                      </span>
                    );
                  })}
              </div>
            </div>
            <div className="text-[2rem] mt-6">
              <span>{currentProduct && currentProduct.price} $</span>
            </div>
            <div className="flex items-center">
              {currentProduct &&
                quantityCount(selector.selectedItems, currentProduct.id) ===
                  0 && (
                  <button
                    className="w-full py-2 rounded-sm bg-Cblue text-white text-lg"
                    onClick={() => {
                      Dispatch(AddItem(currentProduct));
                    }}
                  >
                    Add to Cart
                  </button>
                )}
              {currentProduct &&
                quantityCount(selector.selectedItems, currentProduct.id) ===
                  1 && (
                  <button
                    className="flex flex-1 justify-center items-center  h-12 bg-gray-100 border hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-200"
                    onClick={() => {
                      Dispatch(RemoveItem(currentProduct.id));
                    }}
                  >
                    {icons.trashIcon("w-5 h-5")}
                  </button>
                )}
              {currentProduct &&
                quantityCount(selector.selectedItems, currentProduct.id) >
                  1 && (
                  <button
                    className="flex flex-1 justify-center items-center  h-12 bg-gray-100 border hover:bg-red-500 hover:text-white hover:border-red-500 transition-colors duration-200 text-lg"
                    onClick={() => {
                      Dispatch(Decrease(currentProduct.id));
                    }}
                  >
                    -
                  </button>
                )}
              {currentProduct &&
                quantityCount(selector.selectedItems, currentProduct.id) >
                  0 && (
                  <span className="flex justify-center items-center flex-1 h-12 bg-Cblue text-white border-Cblue ">
                    {quantityCount(selector.selectedItems, currentProduct.id)}
                  </span>
                )}
              {currentProduct &&
                quantityCount(selector.selectedItems, currentProduct.id) >
                  0 && (
                  <button
                    className="flex flex-1 justify-center items-center h-12 bg-gray-100 border hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors duration-200 text-lg"
                    onClick={() => {
                      Dispatch(Increase(currentProduct.id));
                    }}
                  >
                    +
                  </button>
                )}
            </div>
          </div>
        </div>
        {/* Description Part */}
        <div className="flex flex-col xs:p-0 px-2 ">
          <div className="flex flex-col gap-1 w-fit py-7">
            <span className="capitalize font-bold text-lg">description :</span>
            <p className="font-[300]">
              {currentProduct && currentProduct.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
