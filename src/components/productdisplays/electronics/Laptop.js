import Header from "../../header.js";
import Button from "../../buttons.js";
import { useState, useEffect } from "react";
import { ProductTiles } from "../../productdisplays/producttiles.js";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import macbookFront from "../../../images/electronics/laptop/macbookFront.png";
import macbookTop from "../../../images/electronics/laptop/macbookTop.png";
import macbookSide from "../../../images/electronics/laptop/macbookSide.png";

let counter = 0;
const imageGallery = [
    macbookFront,macbookTop,macbookSide
]

const laptop = {
  name: "13.3-inch Apple MacBook Pro",
  price: 500,
  description:
    "A refurbished Macbook Pro 13-Inch. Featuring a 13.3-inch LED-backlit display,",
  image1: macbookFront,
  stockQty: 10,
  orderQty: 0,
  orderTotal: 0,
};

export function Laptop() {

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productImage1, setProductImage1] = useState("");
  const [open, setOpen] = useState(false);
//   const [seeMore, setSeeMore] = useState(false);

  const [pic2, setPic2] = useState(imageGallery[counter]);
  

const nextImageClick = () => {
    if (counter === 2) {
        counter = 0
        setPic2(imageGallery[counter]);
    }
    else {
    counter = counter + 1
    setPic2(imageGallery[counter]); }
    // setPicThree(macbookTop)
}

  const handleOpen = () => {
    setOpen(!open);
  };

  const addToCartClick = (product) => {
    if (userCartArr.includes(product)) {
      console.log("yes 2");
      product.orderQty++;
      product.orderTotal = product.price * product.orderQty;
    } else {
      product.orderQty++;
      product.orderTotal = product.price * product.orderQty;
      userCartArr.push(product);
    }
  };

  return (
    <div>
      <Header />

      <div className="productNameWrap">
        {" "}
        <div className="productNameHeader">{laptop.name}</div>
        {laptop.price}
      </div>
      <div className="imagesAndDescFlexWrap">
        <div className="productImageWrap" id="">
          <div className="productWrap">
            {" "}
            <img className="clickedProductImages" src={pic2}></img>
          </div>
        </div>
      
        <Button 
            text="See More" 
            onClick={nextImageClick}
            className='seeMoreBtn'  />
            {/* {seeMore ? (
                <div>GoodJob</div>
            ) : <div></div>} */}


        <div className="addToCartBtnWrap">
          {" "}
          <Button
            text="Add To Cart"
            className="addToCartBtn"
            onClick={(e) => addToCartClick(laptop)}
          />
        </div>
        <div className="descriptionWrap">
          <div className="detailsWrap">
            <Button
              text="Details"
              className="collapsibleDetailsBtn"
              onClick={handleOpen}
            />
            {open ? (
              <div className="detailsBoxOne">
                A refurbished Macbook Pro 13-Inch. Featuring a 13.3-inch
                LED-backlit display, 2560-by-1600 native resolution at 227
                pixels per inch.
                <div>8GB Unified Memory</div>
                <div>256GB SSD</div>
                <div>Touch Bar and Touch ID</div>
                <div>720p FaceTime HD Camera</div>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>
      <div className="mayAlsoLikeWrap">
        <div className="mayAlsoLikeTilesWrap">
          <ProductTiles />
          <ProductTiles />
          <ProductTiles />
        </div>
        <div>Footer</div>
      </div>
    </div>
  );
}

export default Laptop;
