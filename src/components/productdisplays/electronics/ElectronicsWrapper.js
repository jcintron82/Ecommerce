import { Header } from "../../header.js";
import { ProductTiles } from "../producttiles.js";
import { useNavigate } from "react-router-dom";
import iphoneOne from "../../../images/electronics/iphone/iphoneOne.jpg";
import laptopMain from "../../../images/electronics/laptop/macbookTop.png";
import airpodsOut from "../../../images/electronics/airpods/airpodsOut.jpg";
import headphonesOne from "../../../images/electronics/sonyHeadphones/headphonesFront.png";
import xboxMain from "../../../images/electronics/xbox/xboxMain.jpg";
import androidBoth from "../../../images/electronics/android/androidBoth.jpg";

const arr = [];

export function ElectronicsWrapper() {
  const navigate = useNavigate();

  const onClick = (section) => {
    arr.push(section);
    let formattedArg = "/" + section;
    navigate(formattedArg);
  };

  return (
    <div>
      <Header />
      <div className="productsWrap">
        <ProductTiles
          onClick={(e) => onClick("iphone")}
          className="topTile"
          img={iphoneOne}
          name="Apple Iphone"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("laptop")}
          className="tileTwo"
          img={laptopMain}
          name="MacBook Pro"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("android")}
          className="tileThree"
          img={androidBoth}
          name="Macnook Pro"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'

        />
        <ProductTiles
          onClick={(e) => onClick("headphones")}
          className="tileFour"
          img={headphonesOne}
          name="Sony Headphones"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("airpods")}
          className="tileFive"
          img={airpodsOut}
          name="Apple Airpods"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("xbox")}
          className="tileSix"
          img={xboxMain}
          name="Xbox One"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
      </div>
    </div>
  );
}

export default ElectronicsWrapper;
