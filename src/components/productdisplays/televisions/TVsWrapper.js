import { Header } from "../../header.js";
import { ProductTiles } from "../producttiles.js";
import { useNavigate } from "react-router-dom";
import samsung65inch from "../../../images/televisions/65inchsamsung/front.jpg";
import TCL65in from  "../../../images/televisions/TCL65inch/side.jpg";
import samsung85inch from  "../../../images/televisions/samsung85inch/front.jpg";
import sony83inch from  "../../../images/televisions/sony83inch/side.jpg";
import tcl65in6series from "../../../images/televisions/tcl65inch6series/front.jpg";
import vizio65in from  "../../../images/televisions/vizio65inch/side.jpg";
const arr = [];

export function TVsWrapper() {
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
          onClick={(e) => onClick("samsung65inch")}
          className="topTile"
          img={samsung65inch}
          name='Samsung 65" Inch'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        
        <ProductTiles
          onClick={(e) => onClick("65inchTvOLED")}
          className="tileTwo"
          img={TCL65in}
          name='TCL 65" OLED TV'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("vizio65inch")}
          className="tileThree"
          img={vizio65in}
          name='Vizio 65" 4K LED Smart TV'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'

        />
        <ProductTiles
          onClick={(e) => onClick("sony83inch")}
          className="tileFour"
          img={sony83inch}
          name='Sony 83" 4K OLED Smart Tv'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("samsung85inch")}
          className="tileFive"
          img={samsung85inch}
          name='Samsung 85" Smart TV'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("65inchtclseries6")}
          className="tileSix"
          img={tcl65in6series}
          name='TCL 65" Roku Smart TV'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
      </div>
    </div>
  );
}

export default TVsWrapper;
