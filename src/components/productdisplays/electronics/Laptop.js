import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { ProductTiles } from "../../productdisplays/producttiles.js";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import macbookFront from "../../../images/electronics/laptop/macbookFront.png";
import macbookTop from "../../../images/electronics/laptop/macbookTop.png";
import macbookSide from "../../../images/electronics/laptop/macbookSide.png";
import macbookClosed from "../../../images/electronics/laptop/macbookClosed.jpg";

const seeMoreSVG = (
  <svg
    width="24px"
    className="w-6 h-6"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);
let counter = 0;
const imageGallery = [macbookFront, macbookTop, macbookSide, macbookClosed];

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
  const nodeRef = useRef(null);

  //   const [seeMore, setSeeMore] = useState(false);

  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const nextImageClick = () => {
    if (counter === 3) {
      counter = 0;
      setPic2(imageGallery[counter]);
    } else {
      counter = counter + 1;
      setPic2(imageGallery[counter]);
    }
    // setPicThree(macbookTop)
    setIsEnter(!isEnter);
  };

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
        <h2 className="productNameHeader">{laptop.name}</h2>
        <div className="priceWrap">{laptop.price}</div>
      </div>
      <div className="imagesAndDescFlexWrap">
        <div className="img">
        <CSSTransition in={isEnter} timeout={1500} classNames="imageFadeIn">
          <img src={pic2}></img>
        </CSSTransition></div>
        <div className="seeMoreWrap">
        <Button
          text="Next"
          svg={seeMoreSVG}
          onClick={nextImageClick}
          className="seeMoreBtn"
        /></div>
    

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
        </div></div>
        <Footer />
    </div>
  );
}

export default Laptop;
