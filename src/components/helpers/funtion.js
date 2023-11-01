export const navbarScrollController = () => {
  const navbar = document.querySelector("nav");
  let lastScrollY = window.scrollY;
  window.onscroll = () => {
    if (window.scrollY > 15) {
      if (lastScrollY > window.scrollY) {
        navbar.classList.add("CscrollNavDeActive");
      } else {
        navbar.classList.remove("CscrollNavDeActive");
      }
      lastScrollY = window.scrollY;
    } else {
      navbar.classList.remove("CscrollNavDeActive");
    }
  };
};

export const isInItems = (state, id) => {
  if (state.selectedItems.find((item) => item.id === id)) {
    return true;
  } else {
    return false;
  }
};

export const quantityCount = (state, id) => {
  const finded = state.find((item) => item.id === id);
  if (finded) {
    return finded.quantity;
  } else {
    return 0;
  }
};

export const filterData = (data) => {
  const filtersData = {
    colors: [],
    size: [],
    category: [],
    price: { min: "", max: "" },
  };
  const pricearr = [];

  data.forEach((items) => {
    // colors
    items.colors.map((value) => filtersData.colors.push(value));
    // sizes
    items.productSize.map((value) => filtersData.size.push(value));
    // Category
    filtersData.category.push(items.category);
    pricearr.push(items.price);
  });
  filtersData.size = [...new Set(filtersData.size)];
  filtersData.colors = [...new Set(filtersData.colors)];
  filtersData.category = [...new Set(filtersData.category)];
  filtersData.price.max = Math.max(...pricearr);
  filtersData.price.min = Math.min(...pricearr);

  return filtersData;
};

// Filter The Products Data When Clicked On Filter Button
export const handleFilter = (products, filteringItems) => {
  const { colors, size, category, price } = filteringItems;
  const filtered = products.filter((product) => {
    console.log(product);
    const categoryMatch =
      category.length === 0 || category.includes(product.category);
    const colorMatch =
      colors.length === 0 ||
      colors.some((color) => product.colors.includes(color));
    const sizeMatch =
      size.length === 0 ||
      size.some((size) => product.productSize.includes(size));
    const priceMatch = product.price > price.min && product.price < price.max;
    return categoryMatch && colorMatch && sizeMatch && priceMatch;
  });
  console.log(filtered);
  return filtered;
};
