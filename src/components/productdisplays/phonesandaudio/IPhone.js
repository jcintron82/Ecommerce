import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import iphoneOne from "../../../images/electronics/iphone/iphoneOne.jpg";
import iphoneTwo from "../../../images/electronics/iphone/iphoneTwo.jpg";
import iphone3 from "../../../images/electronics/iphone/iphone3.jpg";
import iphoneFour from "../../../images/electronics/iphone/iphoneFour.jpg";

const boldText = (value) => {
  return <b>{value}</b>;
};
const liOne = [
  boldText("Overview"),
  <br />,
  "AirPods Pro feature Active Noise Cancellation for immersive sound. Transparency mode for hearing the world around you. They’re sweat and water resistant1 and have a customizable fit for all-day comfort.",
];
const liTwo = [
  boldText('Noise Cancellation'),
  <br />,
  "Active Noise Cancellation blocks outside noise, so you can immerse yourself in music.",
];
const liThree = [
  boldText("Transparency"),
  <br />,
 "Transparency mode for hearing and interacting with the world around you.",
];
const liFour = [
  boldText("Sweat And Water Resistant"),
  <br />,
  "AirPods Pro are sweat and water resistant for non-water sports and exercise, and they are IPX4 rated. Sweat and water resistance are not permanent conditions. The charging case is not sweat or water resistant.",
];
const liFive = [
  boldText("Spatial Audio"),
  <br />,
  "Spatial audio works with movies, TV, and video in supported apps. Requires iPhone or iPad.",
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

export function IPhone() {
  const imageGallery = [iphoneOne, iphoneTwo, iphone3, iphoneFour];

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const product = {
    name: 'Apple - AirPods Pro (1st generation) with Magsafe Charging Case - White',
    price: 185.00.toFixed(2),
    image1: <img src={iphoneOne} className="productImg"></img>,
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
    const parsedInt = parseInt(qty, 10)
    const productIndex = userCartArr.findIndex((obj => obj.name === product.name))
    falseQtyBreak: if (qty <= 0) {
      break falseQtyBreak;
    }
    else if (userCartArr.includes(userCartArr[productIndex])) {
      userCartArr[productIndex].orderQty = (parseInt(userCartArr[productIndex].orderQty , 10)+ parsedInt);
      userCartArr[productIndex].orderTotal = (product.price * userCartArr[productIndex].orderQty);
    } else {
      product.orderQty = qty;
      product.orderTotal = product.price * product.orderQty;
      userCartArr.push(product);
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
              {/* <div className="savedPriceWrap">
                <strike className="strikedPrice">$215.00</strike> Save $30.00!
              </div> */}
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
                  alt="An Apple Iphone 13"
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

export default IPhone;
