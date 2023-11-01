import React, { useEffect, useState } from "react";
import Navbar from "../layout/Navbar";
import Card from "../common/Card";
import icons from "../../assets/icons/icons";
import { ProductsData } from "../../data/data";
import FilterProductModal from "../common/FilterProductModal";
// Dependecy
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterData, handleFilter } from "../helpers/funtion";

import {
  RemoveItem,
  Decrease,
  Increase,
} from "../../features/shoppingCartSlice/shoppingCartSlice";
import SlideShow from "../common/SlideShow";

const Products = () => {
  // Modal Status
  const [modalStatus, setmodalStatus] = useState({
    modalShoppingCart: false,
    filterModal: false,
  });
  // Getting Category From UseParams
  const { productscategory } = useParams();
  // Blur the Background
  const [blurBg, setblurBg] = useState(false);
  // Filter State
  const [filteringItemsState, setfilteringItemsState] = useState({
    colors: [],
    size: [],
    category: [],
    price: { min: 0, max: 1000 },
  });
  const DataCategoryHandel = () => {
    if (ProductsData[productscategory]) {
      return ProductsData[productscategory];
    } else {
      return ProductsData.man;
    }
  };
  // Set Data With Category
  const ProductsDataCategory = DataCategoryHandel();
  // Filter Products Data
  const [filterdProducts, setfilterdProducts] = useState([
    ...ProductsDataCategory,
  ]);

  console.log("Product Data ", filterdProducts);
  // Handel Click On The Filter Items
  const filterItemsHandel = () => {
    setfilterdProducts(handleFilter(ProductsDataCategory, filteringItemsState));
    console.log(filterdProducts);
  };
  const selector = useSelector((state) => state.shoppingcart);
  const dispatch = useDispatch();
  // This is The Data That Exported From All Data That Help To Creating Filtering Inputs
  const dataForFilteringItems = filterData(ProductsDataCategory);
  useEffect(() => {
    const bodyOverflowHandler = () => {
      if (modalStatus.filterModal || modalStatus.modalShoppingCart) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    };
    bodyOverflowHandler();
  }, [modalStatus]);
  const filterModalHide = () => {
    setmodalStatus({ filterModal: false });
    setblurBg(false);
  };

  return (
    <div className="relative">
      <Navbar />
      {/* Blur Bg For Modal Shopping Cart  */}
      <div
        className={`fixed cursor-pointer w-screen h-screen backdrop-blur-[2px] top-0 left-0 z-[109] ${
          blurBg ? "block" : "hidden"
        }`}
        onClick={() => {
          setblurBg(false);
          setmodalStatus({
            modalShoppingCart: false,
            filterModal: false,
          });
        }}
      ></div>

      <div className="mt-[85px] w-full h-[70vh] ">
        <SlideShow />
      </div>
      <div className="Ccontainer my-10">
        {/* Header of Products For Filter ... */}
        <div className="flex sm:flex-row flex-col sm:items-center sm:gap-0 gap-4 justify-between sm:h-20 h-fit ">
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
            <button
              className="py-1 px-6 sm:w-auto w-full border-[1px] font-[300] border-black"
              onClick={() => {
                setmodalStatus({ filterModal: true });
                setblurBg(true);
              }}
            >
              Filter
            </button>
            <div className={`${modalStatus.filterModal ? "block" : "hidden"} `}>
              <FilterProductModal
                ModalHide={filterModalHide}
                filteringItems={{ filteringItemsState, setfilteringItemsState }}
                filteringItemsData={dataForFilteringItems}
                filterItemsBtn={filterItemsHandel}
              />
            </div>
            {/* Search Button */}
            <span className="flex items-center gap-2 py-1 px-3 border-[1px] font-[300] border-black ">
              Search
              {icons.searchIcon}
            </span>
          </div>
        </div>
        <div className="min-h-screen flex py-10 flex-wrap gap-7 justify-center gap-y-4">
          {filterdProducts.length > 0 &&
            filterdProducts.map((item) => {
              return <Card productData={item} />;
            })}
        </div>
      </div>
      {/* Modal Shopping Cart  */}
      <div
        className={`fixed lg:w-[40%] md:w-[60%] pt-7 xs:w-[70%] w-[100%] h-screen transition-all duration-500 ease-in-out justify-between bg-white top-0 flex flex-col z-[110] ${
          modalStatus.modalShoppingCart ? "right-0 " : "right-[-100%]"
        }`}
      >
        {/* Modal Close Button */}
        <button
          className="absolute top-[7px] left-[15px]"
          onClick={() => {
            setmodalStatus({ modalShoppingCart: false });
            setblurBg(false);
          }}
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
          <Link
            to="/shoppingcart"
            className=" bg-Cblue text-white my-3 mx-4 flex justify-center items-center py-3"
          >
            Shopping Cart
          </Link>
        </div>
      </div>
      {selector.itemsCounter > 0 && (
        <div
          className={`fixed top-[50%] translate-y-[-50%] right-[-15px] w-8 flex justify-end items-center text-[1.3rem] h-8 rounded-full transition-all  bg-black rotate-[-180deg] text-white cursor-pointer `}
          onClick={() => {
            setmodalStatus({ modalShoppingCart: true });
            setblurBg(true);
          }}
        >
          {icons.arrowRight(`w-6 h-6 font-bold`)}
        </div>
      )}
    </div>
  );
};

export default Products;
