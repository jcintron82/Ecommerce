import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import front from "../../../images/phoneandaudio/galaxys22/front.jpg";
import side from "../../../images/phoneandaudio/galaxys22/side.jpg";
import bothSides from "../../../images/phoneandaudio/galaxys22/bothsides.jpg";
import back from "../../../images/phoneandaudio/galaxys22/back.jpg";

const boldText = (value) => {
  return <b>{value}</b>;
};
const liOne = [
  boldText("Overview"),
  <br />,
  "The power of our fastest chip ever, long lasting battery, and sophisticated AI enables revolutionary night-time video that’s as clear-as-day. And, for the first time, S Pen with its increased super-powers has been embedded in Galaxy S22 Ultra’s beautifully sleek design. Today, Galaxy S22 Ultra sets an epic standard of smartphone experience.",
];
const liTwo = [
  boldText("Light up your life with 8K video"),
  <br />,
  "Shoot videos that rival how epic your life is with stunning 8K recording.",
];
const liThree = [
  boldText("So smooth, you won’t believe you shot it"),
  <br />,
  "Video you capture is effortlessly smooth, thanks to Auto Focus Video Stabilization on Galaxy S22 Ultra.",
];
const liFour = [
  boldText("Low light? No problem."),
  <br />,
  "Capture the night with crystal-clear, bright pics and videos, no matter the lighting with Night Mode.",
];
const liFive = [
  boldText("Bring out the beauty with every pic"),
  <br />,
  "Put all your favorite details on display. Portrait Mode auto- detects and adjusts to what you want front and center, making all your photos worthy of a frame.",
];

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

export function GalaxyS22() {
  const imageGallery = [front, side, bothSides, back];

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const product = {
    name: 'Samsung - Galaxy S22 Ultra 128GB (Unlocked) - Phantom Black',
    price: 890.00.toFixed(2),
    image1: <img src={bothSides} className="productImg"></img>,
    stockQty: 10,
    orderQty: 0,
    orderTotal: 0,
  };

  const handleQtyChange = (e) => {
    setQty(e.target.value);
  };

  const nextImageClick = () => {
    if (counter === imageGallery.length - 1) {
      counter = 0;
      setPic2(imageGallery[counter]);
    } else {
      counter = counter + 1;
      setPic2(imageGallery[counter]);
    }
    setIsEnter(!isEnter);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  const addToCartClick = (product) => {
    const parsedInt = parseInt(qty, 10);

    falseQtyBreak: if (qty <= 0) {
      break falseQtyBreak;
    } else if (userCartArr.includes(product)) {
      product.orderQty = product.orderQty + parsedInt;
      product.orderTotal = product.price * product.orderQty;
      console.log(product);
    } else {
      product.orderQty = product.orderQty + parsedInt;
      product.orderTotal = product.price * product.orderQty;
      userCartArr.push(product);
      console.log(product);
    }
  };

  return (
    <div className="mainWrap">
      <Header />
      <div className="flip">
        <div className="productNameWrap">
          {" "}
          <div className="productNameHeader">
            {product.name}
            <div className="pricesWrapParent">
              <div className="priceWrap">${product.price}</div>
              <div className="savedPriceWrap">
                <strike className="strikedPrice">$1190.00</strike> Save $300.
              </div>
            </div>
          </div>
        </div>
        <div className="imagesAndDescFlexWrap">
          <div className="imageWrap">
            <div className="img">
              <CSSTransition
                in={isEnter}
                timeout={420}
                classNames="imageFadeIn"
              >
                <img
                  className="imageFadeIn"
                  src={pic2}
                  alt="An 83 inch Sony Smart Tv"
                ></img>
              </CSSTransition>
            </div>
            <div className="seeMoreWrap">
              <Button
                text="Image"
                svg={seeMoreSVG}
                onClick={nextImageClick}
                className="seeMoreBtn"
              />
            </div>
          </div>
          <div className="desktopBtnWrap">
            <div className="addToCartBtnWrap">
              <input
                onChange={handleQtyChange}
                className="cartQtyInput"
                placeholder={qty}
                type="number"
                min="1"
              ></input>
              <Button
                text="Add To Cart"
                className="addToCartBtn"
                onClick={(e) => addToCartClick(product)}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="detailsWrap">
        <Button
          text="Details"
          className="collapsibleDetailsBtn"
          onClick={handleOpen}
        />
        <CSSTransition in={open} timeout={120} classNames="detailsScroll">
          {open ? (
            <ul className="detailsBoxOne">
              <li>{liOne}</li>
              <li>{liTwo}</li>
              <li> {liThree}</li>
              <li>{liFour}</li>
              <li>{liFive}</li>
            </ul>
          ) : (
            <div></div>
          )}
        </CSSTransition>
      </div>

      <div>
        {" "}
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default GalaxyS22;
