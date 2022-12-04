import { ProductTiles } from "./producttiles.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Imports for the product section photos
import laptops from "../../images/electronics/laptops.avif";
import televisions from "../../images/electronics/televisions.avif";
import consoles from "../../images/electronics/consoles.avif";
import phonesandaudio from "../../images/electronics/phonesandaudio.avif";

export { arr, productFloat };
const arr = [];

const productFloat = {};

export function ProductTileWrap() {
  const navigate = useNavigate();

  const [tile1, setTile1] = useState();
  const [tile2, setTile2] = useState();
  const [tile3, setTile3] = useState();
  const [tile4, setTile4] = useState();
  const [tile5, setTile5] = useState();
  const [tile6, setTile6] = useState();

  const onClick = (section) => {
    let formattedArg = "/" + section;
    navigate(formattedArg);
  };

  return (
    <div className="homePageProductsWrap">
      <ProductTiles
        onClick={(e) => onClick("gaming")}
        className="homePageProductTiles"
        img={consoles}
        name="Games and Consoles"
        imgWrap="homePageImageWrap"
        imgClass="homePageProducttileImages"
        nameClass="homePageNames"
      />
      <ProductTiles
        onClick={(e) => onClick("phonesandaudio")}
        className="homePageProductTiles"
        img={phonesandaudio}
        name="Phones/Audio Devices"
        imgWrap="homePageImageWrap"
        imgClass="homePageProducttileImages"
        nameClass="homePageNames"
      />
      <ProductTiles
        onClick={(e) => onClick("laptops")}
        className="homePageProductTiles"
        img={laptops}
        name="Laptops"
        imgWrap="homePageImageWrap"
        imgClass="homePageProducttileImages"
        nameClass="homePageNames"
      />
      <ProductTiles
        onClick={(e) => onClick("televisions")}
        className="homePageProductTiles"
        img={televisions}
        name="Televisions"
        imgWrap="homePageImageWrap"
        imgClass="homePageProducttileImages"
        nameClass="homePageNames"
      />
    </div>
  );
}

export default ProductTileWrap;
