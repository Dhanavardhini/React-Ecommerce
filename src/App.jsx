// ✅ This goes in App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import {
  Home,
  Product,
  Products,
  AboutPage,
  ContactPage,
  Cart,
  Login,
  Register,
  Checkout,
  PageNotFound,
} from "./pages";

const App = () => {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/*" element={<PageNotFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </ScrollToTop>
  );
};

export default App;
