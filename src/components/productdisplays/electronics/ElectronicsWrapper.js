import { Header } from "../../header.js";
import { ProductTiles } from "../producttiles.js";
import { useNavigate } from "react-router-dom";
import iphonePic from "../../../images/electronics/iphone.avif";
import laptopMain from "../../../images/electronics/laptop/laptopMain.avif";
import airpodsMain from "../../../images/electronics/airpods/airpodsMain.avif";
import headphonesMain from "../../../images/electronics/sonyHeadphones/headphonesMain.avif";
import xboxMain from "../../../images/electronics/xboxMain.avif";
import androidMain from "../../../images/electronics/android/androidMain.avif";


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
          className="topTwoTiles"
          img={iphonePic}
          name='Apple Iphone'
         
        />
        <ProductTiles
          onClick={(e) => onClick("laptop")}
          className="topTwoTiles"
          img={laptopMain}
          name='MacBook Pro'
          
        />
         <ProductTiles
          onClick={(e) => onClick("android")}
          className="productTiles"
          img={androidMain}
          name='Macnook Pro'
        />
         <ProductTiles
          onClick={(e) => onClick("headphones")}
          className="productTiles"
          img={headphonesMain}
          name='Sony Headphones'
        />
         <ProductTiles
          onClick={(e) => onClick("airpods")}
          className="productTiles"
          img={airpodsMain}
          name='Apple Airpods (2nd Gen)'
        />
         <ProductTiles
          onClick={(e) => onClick("xbox")}
          className="productTiles"
          img={xboxMain}
          name='Xbox One'
        />
      </div>
    </div>
  );
}

export default ElectronicsWrapper;
