import { useContext } from 'react';
/* import { Context } from './context/useContext'; */
import { Route, Routes } from "react-router-dom"
import "./App.css"
import NavBar from './Component/NavBar/NavBar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Component/footer/Footer';
import mens_banner from "./Component/Assets/banner_mens.png"
import womens_banner from "./Component/Assets/banner_women.png"
import kids_banner from "./Component/Assets/banner_kids.png"
import Weather from './Component/Weather/Weather';
/* import Tiktak from "./Pages/Tiktak/Tiktak" */
{/*  <Route path="/tiktak" element={<Tiktak />} /> */ }

function App() {
  return (
    <div className="App">
      {/**/}
    /*   <NavBar /> */
      <Routes>
       {/*  <Route path="/" element={<Shop />} />
        <Route path="/mens" element={<ShopCategory banner={mens_banner} category="men" />} />
        <Route path="/womens" element={<ShopCategory banner={womens_banner} category="women" />} />
        <Route path="/kids" element={<ShopCategory banner={kids_banner} category="kids" />} />
        <Route path="/product" element={<Product />}>
          <Route path=":productId" element={<Product />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} /> */}
        <Route path="/" element={<Weather />} />
      </Routes>
 /*      <Footer /> */
    </div>
  );
}
export default App;
