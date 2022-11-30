import { Header } from "../../header.js";
import { ProductTiles } from "../producttiles.js";
import { useNavigate } from "react-router-dom";
import iphoneOne from "../../../images/electronics/iphone/iphoneOne.jpg";
import headphonesOne from "../../../images/electronics/sonyHeadphones/headphonesFront.png";
import samsung85inch from  "../../../images/televisions/samsung85inch/front.jpg";
import airpodsOut from "../../../images/electronics/airpods/airpodsOut.jpg";
import androidBoth from "../../../images/electronics/android/androidBoth.jpg";
import galaxys22 from "../../../images/phoneandaudio/galaxys22/bothsides.jpg";
import powerbeats from "../../../images/phoneandaudio/powerbeats/front.jpg";
const arr = [];

export function PhonesAndAudioWrapper() {
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
          onClick={(e) => onClick("android")}
          className="topTile"
          img={androidBoth}
          name="Google Pixel 7 Pro"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        
        <ProductTiles
          onClick={(e) => onClick("powerbeats")}
          className="tileTwo"
          img={powerbeats}
          name='Beats by Dr. Dre - Powerbeats Pro'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("iphone")}
          className="tileThree"
          img={iphoneOne}
          name='Apple Iphone 13 Pro'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'

        />
        <ProductTiles
          onClick={(e) => onClick("airpods")}
          className="tileFour"
          img={airpodsOut}
          name='Airpods Pro (Gen 2)'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("galaxys22")}
          className="tileFive"
          img={galaxys22}
          name='Samsung Galaxy s22 Ultra'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("headphones")}
          className="tileSix"
          img={headphonesOne}
          name='Sony WH-1000XM Headphones'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
      </div>
    </div>
  );
}

export default PhonesAndAudioWrapper;
