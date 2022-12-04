import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { UserCart } from "../components/cartPage/UserCart.js";

//Televisions
import { TCL65InchOLED } from "../components/productdisplays/televisions/TCL65InchOLED.js";
import { Vizio65Inch } from "../components/productdisplays/televisions/Vizio65Inch.js";
import { Sony83Inch } from "../components/productdisplays/televisions/Sony83Inch.js";
import { Samsung85Inch } from "../components/productdisplays/televisions/Samsung85Inch";
import { TCL65Inch6Series } from "../components/productdisplays/televisions/Tcl65Inch6Series";
import { TVsWrapper } from "../components/productdisplays/televisions/TVsWrapper.js";
import { Samsung65Inch } from "../components/productdisplays/televisions/Samsung65Inch.js";

//Phones and audio
import { PhonesAndAudioWrapper } from "../components/productdisplays/phonesandaudio/PhonesAndAudioWrapper";
import { GalaxyS22 } from "../components/productdisplays/phonesandaudio/GalaxyS22";
import { PowerBeats } from "../components/productdisplays/phonesandaudio/PowerBeats";
import { IPhone } from "../components/productdisplays/phonesandaudio/IPhone.js";
import { Airpods } from "../components/productdisplays/phonesandaudio/Airpods.js";
import { Headphones } from "../components/productdisplays/phonesandaudio/Headphones.js";
import { Android } from "../components/productdisplays/phonesandaudio/Android.js";

//Laptops
import { LaptopsWrapper } from "../components/productdisplays/laptops/LaptopsWrapper.js";
import { Laptop } from "../components/productdisplays/laptops/Laptop.js";
import { MacbookAir } from "../components/productdisplays/laptops/MacbookAir";
import { DellInspiron } from "../components/productdisplays/laptops/DellInspiron";
import { DellXPS } from "../components/productdisplays/laptops/DellXPS";
import { HPEnvy } from "../components/productdisplays/laptops/HPEnvy";
import { HPSpectre } from "../components/productdisplays/laptops/HPSpectre";

//Gaming
import { GamingWrapper } from "../components/productdisplays/gaming/GamingWrapper";
import { NintendoSwitchOriginal } from "../components/productdisplays/gaming/NintendoSwitchOriginal";
import { NintendoSwitchOLED } from "../components/productdisplays/gaming/NintendoSwitchOLED";
import { Gamecube } from "../components/productdisplays/gaming/Gamecube";
import { PS5Bundle } from "../components/productdisplays/gaming/PS5Bundle";
import { XboxSeriesS } from "../components/productdisplays/gaming/XboxSeriesS";
import { Xbox } from "../components/productdisplays/gaming/Xbox.js";

const RouteSwitch = () => {
  return (
    <BrowserRouter basename="/home">
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/usercart" element={<UserCart />} />

        <Route path="/laptops" element={<LaptopsWrapper />} />
        <Route path="/macbookair" element={<MacbookAir />} />
        <Route path="/dellinspiron14in" element={<DellInspiron />} />
        <Route path="/dellxps15in" element={<DellXPS />} />
        <Route path="/hpenvy" element={<HPEnvy />} />
        <Route path="/hpspectre" element={<HPSpectre />} />

        <Route path="/phonesandaudio" element={<PhonesAndAudioWrapper />} />
        <Route path="/galaxys22" element={<GalaxyS22 />} />
        <Route path="powerbeats" element={<PowerBeats />} />
        <Route path="/iphone" element={<IPhone />} />
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/headphones" element={<Headphones />} />
        <Route path="/airpods" element={<Airpods />} />
        <Route path="/xbox" element={<Xbox />} />
        <Route path="/android" element={<Android />} />

        <Route path="/televisions" element={<TVsWrapper />} />
        <Route path="/samsung65inch" element={<Samsung65Inch />} />
        <Route path="/65inchTvOLED" element={<TCL65InchOLED />} />
        <Route path="/vizio65inch" element={<Vizio65Inch />} />
        <Route path="/sony83inch" element={<Sony83Inch />} />
        <Route path="/samsung85inch" element={<Samsung85Inch />} />
        <Route path="/65inchtclseries6" element={<TCL65Inch6Series />} />

        <Route path="/gaming" element={<GamingWrapper />} />
        <Route path="/switchoriginal" element={<NintendoSwitchOriginal />} />
        <Route path="/switcholedmodel" element={<NintendoSwitchOLED />} />
        <Route path="/gamecube" element={<Gamecube />} />
        <Route path="/ps5bundle" element={<PS5Bundle />} />
        <Route path="/xboxmodelS" element={<XboxSeriesS />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
