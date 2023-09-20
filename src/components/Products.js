import React from "react";
import Navbar from "./Navbar";
import Card from "./shared/Card";
import icons from "../assets/icons/icons";
import { ProductsData } from "../assets/data/data";

const Products = () => {
  return (
    <div>
      <Navbar />
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
            console.log(item.name);
            return <Card productData={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Products;
