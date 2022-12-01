import { Header } from "../../header.js";
import { ProductTiles } from "../producttiles.js";
import { useNavigate } from "react-router-dom";
import macbookAir from "../../../images/laptops/macbookair/top.jpg";
import laptopMain from "../../../images/electronics/laptop/macbookTop.png";
import hpenvy from "../../../images/laptops/hpenvy/front.jpg";
import open from "../../../images/laptops/dellxps/front.jpg";
import dellInspiron from "../../../images/laptops/dellinspiron14in/front.jpg";
import hpspectre from "../../../images/laptops/hpspectre/front.jpg";

const arr = [];

export function LaptopsWrapper() {
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
          onClick={(e) => onClick("macbookair")}
          className="topTile"
          img={macbookAir}
          name='Apple Macbook Air 13.6"'
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
          onClick={(e) => onClick("dellinspiron14in")}
          className="tileThree"
          img={dellInspiron}
          name='Dell Inspiron 14" Laptop'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'

        />
        <ProductTiles
          onClick={(e) => onClick("dellxps15in")}
          className="tileFour"
          img={open}
          name='Dell XPS 15" Laptop'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("hpenvy")}
          className="tileFive"
          img={hpenvy}
          name='HP Envy 13"'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("hpspectre")}
          className="tileSix"
          img={hpspectre}
          name='HP Spectre 16" Laptop'
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
      </div>
    </div>
  );
}

export default LaptopsWrapper;
