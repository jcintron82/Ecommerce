import { ProductTiles } from "./producttiles.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Imports for the product section photos
import mainElectronics from "../../images/electronics/mainElectronics.avif";
import homeGoodsMain from "../../images/homeGoods/homeGoodsMain.avif";
export { arr, productFloat}
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
    let formattedArg = '/' + section;
    navigate(formattedArg);
  };

  return (
    <div className="homePageProductsWrap">
  
      <ProductTiles
        onClick={(e) => onClick('electronics')}
        className="homePageProductTiles"
        img={mainElectronics}
        name='Laptops'
        imgWrap='homePageImageWrap'
        imgClass='homePageProducttileImages'
        nameClass='homePageNames'
      />


      <ProductTiles
        onClick={(e) => onClick('televisions')}
        className="homePageProductTiles"
        img={homeGoodsMain}
        name='Television'
        imgWrap='homePageImageWrap'
        imgClass='homePageProducttileImages'
        nameClass='homePageNames'
      />
      <ProductTiles
        onClick={(e) => onClick('homeGoods')}
        className="homePageProductTiles"
        img={homeGoodsMain}
        name='Games and Consoles'
        imgWrap='homePageImageWrap'
        imgClass='homePageProducttileImages'
        nameClass='homePageNames'
      />
      <ProductTiles
        onClick={(e) => onClick('homeGoods')}
        className="homePageProductTiles"
        img={homeGoodsMain}
        name='Phones'
        imgWrap='homePageImageWrap'
        imgClass='homePageProducttileImages'
        nameClass='homePageNames'
      />

    </div>
  );
}

export default ProductTileWrap;
