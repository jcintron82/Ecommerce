import { ProductTiles } from "./producttiles.js";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import stock from "../../images/stock.avif";
import jarredStock from "../../images/jarredStock.avif";
export { arr, productFloat}
 const arr = [];

 const productFloat = {};



const prod1 = {
  name: "Stock",
  price: 106,
  description: "A good chicken stock",
  image1: stock,
  stockQty: 10,
  orderQty:0,
  orderTotal:0,
  
};

const prod2 = {
  name: "Jarred Stock",
  price: 1000,
  description: "A jar of Fine Stock",
  image1: jarredStock,
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

  const onClick = (product) => {
    arr.push(product);
    console.log(arr);
    console.log(productFloat);
    navigate("/clickedproduct");
  };

  return (
    <div className="productsWrap">
      <ProductTiles
        onClick={(e) => onClick(prod1)}
        className="productTiles"
        img={prod1.image1}
        name={prod1.name}
        description={prod1.description}
      />

      <ProductTiles
        onClick={(e) => onClick(prod2)}
        className="productTiles"
        img={prod2.image1}
        name={prod2.name}
        description={prod2.description}
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
