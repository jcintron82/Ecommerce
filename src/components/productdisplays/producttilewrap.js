import { ProductTiles } from "./producttiles.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

//Imports for the product section photos
import mainElectronics from "../../images/electronics/mainElectronics.avif";
import homeGoodsMain from "../../images/homeGoods/homeGoodsMain.avif";
export { arr, productFloat}
 const arr = [];

 const productFloat = {};



const electronics = {
  name: "Stock",
  price: 106,
  description: "A good chicken stock",
  image1: mainElectronics,
  stockQty: 10,
  orderQty:0,
  orderTotal:0,
  
};

const homeGoods = {
  name: "Jarred Stock",
  price: 1000,
  description: "A jar of Fine Stock",
  image1: homeGoodsMain,
  stockQty:10,
  orderQty:0,
  orderTotal:0,

};

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
    <div className="productsWrap">
      <ProductTiles
        onClick={(e) => onClick('electronics')}
        className="productTiles"
        img={electronics.image1}
        name={electronics.name}
        description={electronics.description}
      />

      <ProductTiles
        onClick={(e) => onClick('homeGoods')}
        className="productTiles"
        img={homeGoods.image1}
        name={homeGoods.name}
        description={homeGoods.description}
      />

      <ProductTiles onClick={onClick} className="productTiles" />
      <ProductTiles onClick={onClick} className="productTiles" />
      <ProductTiles onClick={onClick} className="productTiles" />
      <ProductTiles onClick={onClick} className="productTiles" />
      <ProductTiles onClick={onClick} className="productTiles" />
    </div>
  );
}

export default ProductTileWrap;
