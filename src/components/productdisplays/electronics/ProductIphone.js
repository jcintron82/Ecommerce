import Header from "../../header.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { ProductTiles } from "../../productdisplays/producttiles.js";
import { userCartArr } from '../../cartPage/ParsedCart.js';
import iphonePic from '../../../images/electronics/iphone.avif'

const iphone = {
    name: "IPhone 12",
    price: 1000,
    description: "An IPhone 12",
    image1: iphonePic,
    stockQty: 10,
    orderQty:0,
    orderTotal:0,
  }



export function ProductIphone() {
    const [productName] = useState("");
    const [productPrice] = useState("");
    const [productDescription] = useState("");
   
 
    
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


        return (
            <div>
            <Header />
            <div className="locationDiv">
        , current page
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
            <img className="clickedProductImages" src={iphonePic}></img>
          </div>
          <div className="productWrap"> img</div>
          <div className="productWrap"> img</div>
          <Button text="See More" />
        </div>
        <div className="descriptionWrap">
          <div className="productDescription">{productDescription}</div>
          <Button text="Add To Cart" className="addToCartBtn" onClick={e => addToCartClick(iphone)} />
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
          
        )
}

export default ProductIphone;