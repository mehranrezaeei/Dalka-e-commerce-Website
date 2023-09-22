import { ProductsData } from "../../assets/data/data";
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
