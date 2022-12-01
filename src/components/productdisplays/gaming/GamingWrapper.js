import { Header } from "../../header.js";
import { ProductTiles } from "../producttiles.js";
import { useNavigate } from "react-router-dom";
import iphoneOne from "../../../images/electronics/iphone/iphoneOne.jpg";
import gamecube from "../../../images/gaming/gamecube/top.jpg";
import ps5bundle from "../../../images/gaming/ps5bundle/systemBox.jpg";
import switchOLEDmodel from "../../../images/gaming/switchOLED/allitems.jpg";
import nintendoswitch from "../../../images/gaming/switchoriginal/box.jpg";
import xboxMain from "../../../images/gaming/xbox/xboxMain.jpg";

const arr = [];

export function GamingWrapper() {
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
          onClick={(e) => onClick("xbox")}
          className="topTile"
          img={xboxMain}
          name="Xbox Series X 1TB"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("gamecube")}
          className="tileTwo"
          img={gamecube}
          name="Nintendo Gamecube"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("switchoriginal")}
          className="tileThree"
          img={nintendoswitch}
          name="Nintendo Switch"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'

        />
        <ProductTiles
          onClick={(e) => onClick("switcholedmodel")}
          className="tileFour"
          img={switchOLEDmodel}
          name="Nintendo Switch OLED Model"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("ps5bundle")}
          className="tileFive"
          img={ps5bundle}
          name="PlayStation 5 - God of War Bundle"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("xboxmodelS")}
          className="tileSix"
          img={xboxMain}
          name="Xbox Series S"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
      </div>
    </div>
  );
}

export default GamingWrapper;
