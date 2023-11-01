import React, { useRef, useState } from "react";
import icons from "../../assets/icons/icons";

const FilterProductModal = ({
  ModalHide,
  filteringItems,
  filteringItemsData,
  filterItemsBtn,
}) => {
  // const { filterModal, setfilterModal } = filterModalState;
  const filteredItems = filteringItems.filteringItemsState;
  const setfilteredItems = filteringItems.setfilteringItemsState;
  const { colors, size, category } = filteredItems;
  const handleChange = (e) => {
    const { value, checked } = e.target;
    if (e.target.name === "colors[]") {
      if (checked) {
        setfilteredItems({
          ...filteredItems,
          colors: [...colors, value],
        });
      } else {
        setfilteredItems({
          ...filteredItems,
          colors: colors.filter((item) => item !== value),
        });
      }
    }
    // Size
    if (e.target.name === "size[]") {
      if (checked) {
        setfilteredItems({
          ...filteredItems,
          size: [...size, value],
        });
      } else {
        setfilteredItems({
          ...filteredItems,
          size: size.filter((item) => item !== value),
        });
      }
    }
    // Category
    if (e.target.name === "category[]") {
      if (checked) {
        setfilteredItems({
          ...filteredItems,
          category: [...category, value],
        });
      } else {
        setfilteredItems({
          ...filteredItems,
          category: category.filter((item) => item !== value),
        });
      }
    }

    console.log(filteredItems);
  };

  // Show And Hide Modals Filter Items
  const [modalBtnStatus, setmodalBtnStatus] = useState({
    color: false,
    size: false,
    category: false,
    priceRange: true,
  });

  // Price Range Refs and States
  const minRange = useRef();
  const maxRange = useRef();
  const minInp = useRef();
  const maxInp = useRef();
  const progressRange = useRef();
  const priceGap = 100;

  const [priceRangevalue, setpriceRangevalue] = useState({
    minrange: 0,
    maxrange: 1000,
    minValue: 0,
    maxValue: 1000,
  });

  // Price Range And Input Change Handler
  const priceRangeHandler = (e) => {
    let minVal = parseInt(minRange.current.value);
    let maxVal = parseInt(maxRange.current.value);
    // console.log(maxVal);

    if (maxVal - minVal < priceGap) {
      if (e.target.name === minRange.current.name) {
        // minRange.current.value = maxVal - priceGap;
        setpriceRangevalue({
          ...priceRangevalue,
          minrange: maxVal - priceGap,
        });
      } else {
        // maxRange.current.value = minVal + priceGap;
        setpriceRangevalue({
          ...priceRangevalue,
          maxrange: minVal + priceGap,
        });
      }
    } else {
      // minInp.current.value = minVal;
      // maxInp.current.value = maxVal;
      setpriceRangevalue({
        ...priceRangevalue,
        [e.target.name]: e.target.value,
      });
      progressRange.current.style.left =
        (minVal / minRange.current.max) * 100 + "%";
      progressRange.current.style.right =
        100 - (maxVal / maxRange.current.max) * 100 + "%";
    }
    setfilteredItems({ ...filteredItems, price: { min: minVal, max: maxVal } });
  };
  const priceInpHandler = (e) => {
    let minVal = parseInt(minInp.current.value);
    let maxVal = parseInt(maxInp.current.value);
    // console.log(maxVal);

    if (maxVal - minVal < priceGap) {
      if (e.target.name === minInp.current.name) {
        // minRange.current.value = maxVal - priceGap;
        setpriceRangevalue({
          ...priceRangevalue,
          minrange: maxVal - priceGap,
        });
      } else {
        // maxRange.current.value = minVal + priceGap;
        setpriceRangevalue({
          ...priceRangevalue,
          maxrange: minVal + priceGap,
        });
      }
    } else {
      // minInp.current.value = minVal;
      // maxInp.current.value = maxVal;
      setpriceRangevalue({
        ...priceRangevalue,
        [e.target.name]: e.target.value,
      });
      progressRange.current.style.left =
        (minVal / minInp.current.max) * 100 + "%";
      progressRange.current.style.right =
        100 - (maxVal / maxInp.current.max) * 100 + "%";
    }
    setfilteredItems({ ...filteredItems, price: { min: minVal, max: maxVal } });
  };

  return (
    <div className="flex flex-col gap-4 md:w-[450px] xs:w-[400px] w-[95%] h-fit fixed translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] bg-white p-4 z-[112] rounded-lg shadow-lg">
      {/* Close Button */}
      <div className="flex">
        <span className="cursor-pointer" onClick={() => ModalHide()}>
          {icons.exitIcon("w-6 h-6")}
        </span>
      </div>
      {/* Modal Body */}
      <div className="flex flex-col gap-5 max-h-[60vh] py-3 overflow-y-auto pr-2 ">
        {/* Colors */}
        <div className="flex flex-col ">
          {/* Title */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setmodalBtnStatus({
                ...modalBtnStatus,
                color: !modalBtnStatus.color,
              })
            }
          >
            <span className="text-lg">Color</span>
            <span
              className={`transition-transform  ${
                modalBtnStatus.color ? "rotate-0" : "rotate-[-180deg]"
              }`}
            >
              {icons.subBottomIcon}
            </span>
          </div>
          {/* Content */}
          <div
            className={`flex gap-3 overflow-hidden transition-all duration-300 ${
              modalBtnStatus.color ? "h-auto my-3 opacity-100" : "h-0 opacity-0"
            }`}
          >
            {filteringItemsData.colors.map((item) => {
              return (
                <>
                  <input
                    type="checkbox"
                    name="colors[]"
                    id={item}
                    value={item}
                    checked={colors.includes(item)}
                    hidden
                    className="Ccolorscheck"
                    onClick={handleChange}
                  />
                  <label
                    className={`w-6 h-6 CcolorsLable rounded-md relative cursor-pointer ${item}`}
                    for={item}
                  ></label>
                </>
              );
            })}
          </div>
        </div>
        {/* Size */}
        <div>
          {/* Title */}
          <div
            className="flex justify-between items-center cursor-pointer "
            onClick={() =>
              setmodalBtnStatus({
                ...modalBtnStatus,
                size: !modalBtnStatus.size,
              })
            }
          >
            <span className="text-lg">Size</span>
            <span
              className={`transition-transform  ${
                modalBtnStatus.size ? "rotate-0" : "rotate-[-180deg]"
              }`}
            >
              {icons.subBottomIcon}
            </span>
          </div>
          {/* Content */}
          <div
            className={`flex flex-col gap-2 overflow-hidden  transition-all duration-300 ${
              modalBtnStatus.size ? "h-auto my-3 opacity-100" : "h-0 opacity-0"
            }`}
          >
            {filteringItemsData.size.map((item) => {
              return (
                <div className="w-fit flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="size[]"
                    id={item}
                    value={item}
                    checked={size.includes(item)}
                    className="w-5 h-5 rounded-md cursor-pointer"
                    onClick={handleChange}
                  />
                  <label className="cursor-pointer font-[300]" for={item}>
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        {/* Category */}
        <div>
          {/* Title */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setmodalBtnStatus({
                ...modalBtnStatus,
                category: !modalBtnStatus.category,
              })
            }
          >
            <span className="text-lg">category</span>
            <span
              className={`transition-transform  ${
                modalBtnStatus.category ? "rotate-0" : "rotate-[-180deg]"
              }`}
            >
              {icons.subBottomIcon}
            </span>
          </div>
          {/* Content */}
          <div
            className={`flex flex-col gap-2 overflow-hidden  transition-all duration-300 ${
              modalBtnStatus.category
                ? "h-auto my-3 opacity-100"
                : "h-0 opacity-0"
            }`}
          >
            {filteringItemsData.category.map((item) => {
              return (
                <div className="w-fit flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="category[]"
                    id={item}
                    value={item}
                    checked={category.includes(item)}
                    className="w-5 h-5 rounded-md cursor-pointer"
                    onClick={handleChange}
                  />
                  <label className="cursor-pointer font-[300]" for={item}>
                    {item}
                  </label>
                </div>
              );
            })}
          </div>
        </div>
        {/* Price Range */}
        <div className="flex flex-col">
          {/* Title */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() =>
              setmodalBtnStatus({
                ...modalBtnStatus,
                priceRange: !modalBtnStatus.priceRange,
              })
            }
          >
            <span className="text-lg">Price Rnage</span>
            <span
              className={`transition-transform  ${
                modalBtnStatus.priceRange ? "rotate-0" : "rotate-[-180deg]"
              }`}
            >
              {icons.subBottomIcon}
            </span>
          </div>
          {/* Content */}
          <div
            className={`flex flex-col gap-1 overflow-hidden  transition-all duration-300  ${
              modalBtnStatus.priceRange
                ? "h-auto my-3 opacity-100"
                : "h-0 opacity-0"
            }`}
          >
            <div className="flex items-center gap-4 my-3">
              <div className="flex items-center flex-1 gap-4">
                <label>Min</label>
                <input
                  type="number"
                  ref={minInp}
                  min={priceRangevalue.minValue}
                  max={priceRangevalue.maxValue}
                  name="minrange"
                  value={priceRangevalue.minrange}
                  className="CpricerangeInp border rounded-md w-full h-8 px-2"
                  onChange={priceInpHandler}
                />
              </div>
              <div className="flex items-center flex-1 gap-4">
                <label>Max</label>
                <input
                  type="number"
                  ref={maxInp}
                  min={priceRangevalue.minValue}
                  max={priceRangevalue.maxValue}
                  name="maxrange"
                  value={priceRangevalue.maxrange}
                  className="CpricerangeInp border rounded-md w-full h-8 px-2"
                  onChange={priceInpHandler}
                />
              </div>
            </div>
            <div className="relative mt-4 flex  h-4">
              <div className="h-1 w-full bg-gray-300  rounded-full relative">
                <div
                  className="bg-Cblue absolute top-0 h-1 left-0 right-0 rounded-full"
                  ref={progressRange}
                ></div>
              </div>
              <input
                type="range"
                name="minrange"
                ref={minRange}
                className="CrangeInp w-full h-1 absolute top-0 bg-transparent cursor-pointer pointer-events-none"
                min="0"
                step="5"
                max="1000"
                value={priceRangevalue.minrange}
                onChange={priceRangeHandler}
              />
              <input
                type="range"
                name="maxrange"
                ref={maxRange}
                className="CrangeInp w-full h-1 absolute top-0 bg-transparent cursor-pointer pointer-events-none"
                min="0"
                step="5"
                max="1000"
                value={priceRangevalue.maxrange}
                onChange={priceRangeHandler}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filter Button */}
      <div className="flex gap-2">
        <button
          className=" w-full bg-Cblue text-white h-12"
          onClick={() => {
            filterItemsBtn();
            ModalHide();
          }}
        >
          Filter items
        </button>
        <button
          className="w-fit h-12 px-2 bg-black text-white"
          onClick={() => {
            filterItemsBtn();
            setfilteredItems({
              colors: [],
              size: [],
              category: [],
              price: { min: 0, max: 1000 },
            });
            setpriceRangevalue({
              minrange: 0,
              maxrange: 1000,
              minValue: 0,
              maxValue: 1000,
            });
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default FilterProductModal;
