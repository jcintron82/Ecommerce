import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import front from "../../../images/televisions/vizio65inch/front.jpg";
import side from "../../../images/televisions/vizio65inch/side.jpg";
import tvinuse from "../../../images/televisions/vizio65inch/tvinuse.jpg";
import tvports from "../../../images/televisions/vizio65inch/tvports.jpg";

const boldText = (value) => {
  return <b>{value}</b>;
};
const liOne = [
  boldText("Overview"),
  <br />,
  "Escape into awesome entertainment with the VIZIO V-Series 4K UHD Smart TV. With epic 4K UHD picture quality, Dolby Vision Bright Mode, HDR10, a full array backlight, and active pixel tuning, V-Series provides crystal-clear and sharp picture quality. The next-gen speed and power of the VIZIO IQ Active processor brings astonishing detail and vibrancy to your viewing experience. ",
];
const liTwo = [
  boldText("Dolby Vision Bright Mode"),
  <br />,
  "You’ll see even more lifelike accuracy, color saturation, black detail, and brightness in Dolby Vision Bright picture mode, thanks to color pixel tuning that ramps up depth and detail to new heights. V-Series also supports HDR10/+ and HLG formats.",
];
const liThree = [
  boldText("Full Array Backlight"),
  <br />,
  "LEDs are evenly distributed across the screen's backlight for superior light uniformity and picture performance.",
];
const liFour = [
  boldText("IQ Active Processor "),
  <br />,
  "Delivers superior picture processing, including a powerful and intelligent 4K upscaling engine that enhances your favorite HD entertainment in spectacular 4K quality.",
];
const liFive = [
  boldText("V-Gaming Engine"),
  <br />,
  "Automatically makes the latest console gameplay more responsive with sub 10ms input lag, 4K 48-60 fps Variable Refresh Rate and Auto Game Mode together with a finely tuned picture mode optimized for gaming as well as Gaming HDR with Dolby Vision, HGiG, and newly-added gaming menu. ",
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

export function Vizio65Inch() {
  const imageGallery = [front, side, tvports, tvinuse];

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const product = {
    name: "VIZIO - 65in Class V-Series LED 4K UHD Smart TV",
    price: 419.99,
    image1: <img src={side} className="productImg"></img>,
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
              <div className="savedPriceWrap">
                <strike className="strikedPrice">$544.99</strike> Save $125.00
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
                  alt="A 65 inch  Vizion Smart Tv"
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

export default Vizio65Inch;
