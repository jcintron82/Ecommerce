import Header from "../header.js";
import Button from "../buttons.js";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { ProductTiles } from "../productdisplays/producttiles.js";
import { arr, productFloat } from "../productdisplays/producttilewrap.js";
import { userCartArr } from '../cartPage/ParsedCart.js';

let found = 'x';

export const ClickedProduct = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage1, setProductImage1] = useState("");
 

const func = () => {

}

const addToCartClick = (product) => {
  if (userCartArr.includes(product)){
    console.log('yes 2');
    product.orderQty++;
    product.orderTotal = (product.price * product.orderQty);
  }
  else {
    product.orderQty++;
    product.orderTotal = (product.price * product.orderQty);
    userCartArr.push(product)
    console.log('yes 2');
  }
  console.log(userCartArr)

 
}
  
  const setValue = () => {
    setProductName(arr[0].name);
    setProductPrice(arr[0].price);
    setProductDescription(arr[0].description);
    setProductImage1("d");
   console.log(productFloat)
  };

  useEffect(() => {
    setValue();
  });

  const onClick = () => {
    navigate("/home");
    arr.splice(0);
    console.log(arr);
  };

  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="locationDiv">
        <Button text="Home" onClick={onClick} />, current page
      </div>

      <div className="productNameWrap">
        {" "}
        <div className="productNameHeader">{productName}</div>
        {productPrice}
      </div>
      <div className="imagesAndDescFlexWrap">
        <div className="productImageWrap">
          <div className="productWrap">
            {" "}
            <img className="clickedProductImages" src={arr[0].image1}></img>
          </div>
          <div className="productWrap"> img</div>
          <div className="productWrap"> img</div>
          <Button text="See More" />
        </div>
        <div className="descriptionWrap">
          <div className="productDescription">{productDescription}</div>
          <Button text="Add To Cart" className="addToCartBtn" onClick={e => addToCartClick(arr[0])} />
        </div>
      </div>
      <div className="detailsMenuWrap"> Details drop down menu </div>
      <div className="mayAlsoLikeWrap">
        <div> You may also like..</div>
        <div className="mayAlsoLikeTilesWrap">
          <ProductTiles />
          <ProductTiles />
          <ProductTiles />
        </div>
        <div>Footer</div>
      </div>
    </div>
  );
};

export default ClickedProduct;
