import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import front from "../../../images/televisions/tcl65inch6series/front.jpg";
import side from "../../../images/televisions/tcl65inch6series/side.jpg";
import tvinuse from "../../../images/televisions/tcl65inch6series/tvinuse.jpg";
import tvports from "../../../images/televisions/tcl65inch6series/tvports.jpg";

const boldText = (value) => {
  return <b>{value}</b>;
};
const liOne = [
  boldText("Overview"),
  <br />,
  "TCL's 6-Series TCL Roku TV combines brilliant 8K HDR and Mini-LED technology in a bold, brushed metal design for a superior TV experience. Quantum Dot technology and the HDR Pro Pack with Dolby Vision combine for greater brightness and contrast, as well as a full palette of rich colors. TCL’s Contrast Control Zone technology optimizes the image across individual zones to yield striking contrast between light and dark areas. The 6-Series models’ AiPQ Engine uses machine-learning algorithms to intelligently enhance color, contrast, and clarity, as you watch for an unrivaled 8K HDR experience, while dynamically upscaling content to near 8K resolution for astonishing clarity.",
];
const liTwo = [
  boldText("Brilliant 8K Clarity"),
  <br />,
  "Certified by the 8K Association for exceptional display performance with over 33 million pixels and four times the clarity of 4K UHD displays. No matter the source, every frame is intelligently enhanced by TCL's AiPQ Engine technology. ",
];
const liThree = [
  boldText("Mini-LED Technology"),
  <br />,
 "Uncompromised contrast, brightness, and uniformity for incredible viewing in any environment. Mini-LED backlight technology bring exceptionally powerful and precise control of brilliantly bright and deeply dark areas of the image, delivering unparalleled depth and dimension.",
];
const liFour = [
  boldText("QLED"),
  <br />,
  "Quantum dot technology delivers more than a billion colors with greater accuracy, better brightness, and wider color volume, matching the format used by most cinema screens and Hollywood content creators. This provides exceptionally vivid and lifelike picture performance.",
];
const liFive = [
  boldText("Contrast Control Zones"),
  <br />,
  "Contrast is optimized across up to 240 localized zones for striking distinction between bright and dark areas of the image for maximum detail, depth, and dimension.",
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

export function TCL65Inch6Series() {
  const imageGallery = [front, side, tvports, tvinuse];

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const product = {
    name: 'TCL - 65" Class 6-Series Mini-LED QLED 8K UHD Smart Roku TV',
    price: 999.00.toFixed(2),
    image1: <img src={front} className="productImg"></img>,
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
                <strike className="strikedPrice">$1,999.00</strike> Save $1000.00!
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
                  alt="A 65 inch TCL Smart Roku TV"
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

export default TCL65Inch6Series;
