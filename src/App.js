// Dependecy
import { Route, Routes } from "react-router-dom";
// Components
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import Products from "./components/pages/Products";
import ProductDetail from "./components/pages/ProductDetail";
import ShoppingCart from "./components/pages/ShoppingCart";
import AboutUs from "./components/pages/AboutUs";
import Contact from "./components/pages/Contact";
import HomePage from "./components/pages/HomePage";
import NotFoundPage from "./components/pages/NotFoundPage";
// Components
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about/aboutus" element={<AboutUs />} />
        <Route path="/about/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productscategory" element={<Products />} />
        <Route path="/*" element={<NotFoundPage />} />
        {/* // <Route path="*" element={<NotFoundPage />} /> */}
        <Route
          path="/productdetail/:productscategory/:id"
          element={<ProductDetail />}
        />
      </Routes>
    </div>
  );
}

export default App;
