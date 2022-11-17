import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { ClickedProduct }from "../components/clickedproductdisplay/clickedproduct.js";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<App />} />
        <Route path="/clickedproduct" element={<ClickedProduct />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;