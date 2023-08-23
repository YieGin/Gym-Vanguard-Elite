import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Signin from "./Pages/Signin";
import Prodcut from "./Pages/ShopPage/Prodcut";
import Profile from "./Pages/ShopPage/Profile";
import Wishlist from "./Pages/ShopPage/Wishlist";
import Cart from "./Pages/ShopPage/Cart";
import Ordering from "./Pages/ShopPage/Ordering";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import FAQ from "./Pages/Footer/FooterPages/Faq";
import { Shorts, Jackets, Stringers, Lifting } from "./Pages/ShopPage/Catalog";
import { WishlistProvider } from "./Pages/ShopPage/Wishlist/WishlistContext";
import { ShoppingCartProvider } from "./Pages/ShopPage/Cart/ShoppingCartProvider";

const App = () => {
  return (
    <BrowserRouter>
      <WishlistProvider>
        <ShoppingCartProvider>
          <AppContent />
        </ShoppingCartProvider>
      </WishlistProvider>
    </BrowserRouter>
  );
};

const AppContent = () => {
  const location = useLocation();
  const { pathname } = location;

  const excludedPaths = ["/Jackets", "/Stringers", "/Lifting", "/Shorts"];
  const shouldRenderNavbar = !excludedPaths.includes(pathname);

  return (
    <>
      {shouldRenderNavbar && <Header />}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Jackets" element={<Jackets />} />
        <Route path="/Stringers" element={<Stringers />} />
        <Route path="/Lifting" element={<Lifting />} />
        <Route path="/Shorts" element={<Shorts />} />
        <Route path="/Product/:category/:itemId" element={<Prodcut />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Ordering" element={<Ordering />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
