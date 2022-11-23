import { ReactComponent as Cart } from "./cart.svg";
import { ReactComponent as HomeIcon } from "./home.svg";
import { useNavigate } from "react-router-dom";
import { arr } from "./productdisplays/producttilewrap.js";

export function Header() {
  const navigate = useNavigate();

  const homeClick = () => {
    navigate("/home");
    arr.splice(0);
  };

  const cartClick = () => {
    navigate("/usercart");
  };

  return (
    <div className="header">
      <div className="logoWrap">
        {" "}
        <HomeIcon style={{ width: "27px" }} onClick={homeClick} />
      </div>
      <div className="logoWrap">Ascension Marketplace</div>
      <div className="cartLogoWrap">
        {" "}
        <Cart fill="white" style={{ width: "27px" }} onClick={cartClick} />{" "}
      </div>
    </div>
  );
}

export default Header;
