import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { ClickedProduct }from "../components/clickedproductdisplay/clickedproduct.js";
import { UserCart }from "../components/cartPage/UserCart.js";
import { ElectronicsWrapper }from "../components/productdisplays/electronics/ElectronicsWrapper.js";
import { ProductIphone } from '../components/productdisplays/electronics/ProductIphone.js';


//Home goods wrapper and item(s) imports
import { HomeGoodsWrapper } from '../components/productdisplays/homeGoods/homeGoodsWrapper.js';







const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/clickedproduct" element={<ClickedProduct />} />
        <Route path="/usercart" element={<UserCart />} />
        <Route path='/electronics' element={<ElectronicsWrapper />} />
        <Route path='/iphone' element={<ProductIphone  />} />

        <Route path='/homegoods' element={<HomeGoodsWrapper  />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;