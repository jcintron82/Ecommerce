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

import { TVsWrapper }from '../components/productdisplays/televisions/TVsWrapper.js';
import { Samsung65Inch }from '../components/productdisplays/televisions/Samsung65Inch.js'
//Home goods wrapper and item(s) imports
import { TCL65InchOLED } from '../components/productdisplays/televisions/TCL65InchOLED.js';
import { Vizio65Inch } from '../components/productdisplays/televisions/Vizio65Inch.js';
import { Sony83Inch } from '../components/productdisplays/televisions/Sony83Inch.js';
import { Samsung85Inch } from '../components/productdisplays/televisions/Samsung85Inch';
import { TCL65Inch6Series } from '../components/productdisplays/televisions/Tcl65Inch6Series';

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


        <Route path='/televisions' element={<TVsWrapper  />} />
        <Route path='/samsung65inch' element={<Samsung65Inch />} />
        <Route path='65inchTvOLED' element={<TCL65InchOLED />} />
        <Route path='vizio65inch' element={<Vizio65Inch />} />
        <Route path='sony83inch' element={<Sony83Inch />} />
        <Route path='samsung85inch' element={<Samsung85Inch />} />
        <Route path='65inchtclseries6' element={<TCL65Inch6Series />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;