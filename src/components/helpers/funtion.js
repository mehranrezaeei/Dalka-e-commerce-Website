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
