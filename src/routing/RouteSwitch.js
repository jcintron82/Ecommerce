import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { ClickedProduct }from "../components/clickedproductdisplay/clickedproduct.js";
import { UserCart }from "../components/cartPage/UserCart.js";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/clickedproduct" element={<ClickedProduct />} />
        <Route path="/usercart" element={<UserCart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;