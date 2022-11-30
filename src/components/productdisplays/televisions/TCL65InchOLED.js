import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import front from "../../../images/televisions/TCL65inch/front.jpg";
import side from "../../../images/televisions/TCL65inch/side.jpg";
import tvinuse from "../../../images/televisions/TCL65inch/tvinuse.jpg";
import tvports from "../../../images/televisions/TCL65inch/tvports.jpg";

const boldText = (value) => {
  return <b>{value}</b>;
};
const liOne = [
  boldText("Overview"),
  <br />,
  "TCL’s 5-Series QLED TV marries premium picture and endless entertainment for a stellar home theater experience. Quantum Dot technology and the HDR Pro Pack with Dolby Vision combine for greater brightness and contrast, as well as a full palette of rich colors.",
];
const liTwo = [
  boldText("Superior 4K Ultra HD"),
  <br />,
  "Picture clarity combined with the contrast, color, and detail of Dolby Vision HDR (High Dynamic Range) for the most lifelike picture.",
];
const liThree = [
  boldText("QLED"),
  <br />,
  "Quantum dot technology delivers more than a billion colors with greater accuracy, better brightness, and wider color volume, matching the format used by most cinema screens and Hollywood content creators. ",
];
const liFour = [
  boldText("Contrast Control Zones"),
  <br />,
  "Contrast is optimized across up to 60 localized zones for striking distinction between bright and dark areas of the image for maximum detail, depth, and dimension.",
];
const liFive = [
  boldText("Hands-free Voice Control"),
  <br />,
  "Easy home control and entertainment, without lifting a finger. Turn on the big game. Dim the lights. See who’s at the front door. All without having to ask, “where’s the remote control?” That’s the magic of hands-free voice control. Just say “Hey Google” to get started.",
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

export function TCL65InchOLED() {
  const imageGallery = [front, side, tvports, tvinuse];

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const product = {
    name: "TCL - 65in Class 5-Series QLED 4K UHD Smart Google TV",
    price: 549.99,
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
              {/* <div className="savedPriceWrap">
                <strike className="strikedPrice">$1099.99</strike> Save $100.00
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
                  alt="A 65 inch TCL Smart Tv"
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

export default TCL65InchOLED;
