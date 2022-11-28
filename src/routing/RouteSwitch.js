import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { UserCart }from "../components/cartPage/UserCart.js";

//Electronics wrapper and item(s) imports
import { ElectronicsWrapper }from "../components/productdisplays/electronics/ElectronicsWrapper.js";
import { Laptop } from '../components/productdisplays/electronics/Laptop.js';
import { Headphones } from '../components/productdisplays/electronics/Headphones.js';
import { Airpods } from '../components/productdisplays/electronics/Airpods.js';
import { IPhone } from '../components/productdisplays/electronics/IPhone.js';
import { Xbox } from '../components/productdisplays/electronics/Xbox.js';
import { Android } from '../components/productdisplays/electronics/Android.js';
//Home goods wrapper and item(s) imports
import { HomeGoodsWrapper } from '../components/productdisplays/tvAndGaming/tvAndGamingWrapper.js';







const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/usercart" element={<UserCart />} />

        <Route path='/electronics' element={<ElectronicsWrapper />} />
        <Route path='/iphone' element={<IPhone  />} />
        <Route path='/laptop' element={<Laptop  />} />
        <Route path='/headphones' element={<Headphones  />} />
        <Route path='/airpods' element={<Airpods  />} />
        <Route path='/xbox' element={<Xbox  />} />
        <Route path='/android' element={<Android  />} />
        <Route path='/homegoods' element={<HomeGoodsWrapper  />} />

  
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;