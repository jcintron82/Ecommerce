import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import xboxSide from "../../../images/gaming/xbox/xboxSide.jpg";
import xboxBox from "../../../images/gaming/xbox/xboxBox.jpg";
import xboxFront from "../../../images/gaming/xbox/xboxFront.jpg";
import xboxController from "../../../images/gaming/xbox/xboxController.jpg";

const boldText = (value) => {
  return <b>{value}</b>;
};
const liOne = [
  boldText("Overview"),
  <br />,
  "Xbox Series X, the fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming. Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture. Enjoy thousands of games from four generations of Xbox, with hundreds of optimized titles that look and play better than ever.",
];
const liTwo = [
  boldText("Power your dreams"),
  <br />,
  "Xbox Series X, the fastest, most powerful Xbox ever. Explore rich new worlds with 12 teraflops of raw graphic processing power, DirectX ray tracing, a custom SSD, and 4K gaming.*",
];
const liThree = [
  boldText("Play more, wait less"),
  <br />,
 "Make the most of every gaming minute with Quick Resume, lightning-fast load times, and gameplay of up to 120 FPS—all powered by Xbox Velocity Architecture.*",
];
const liFour = [
  boldText("Thousands of games ready to play"),
  <br />,
  "Enjoy digital games from four generations of Xbox, with hundreds of optimized titles that look and play better than ever.",
];
const liFive = [
  boldText("Looks better, plays better"),
  <br />,
  "Minimize load times and increase frame rates with a custom-built NVMe SSD, which enables larger, more robust games to operate at their full capacity. Bring your games and movies to life with the rich, dynamic sound environments at a high quality.",
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

export function Xbox() {
  const imageGallery = [xboxFront, xboxSide, xboxBox, xboxController];

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const product = {
    name: 'Microsoft - Xbox Series X 1TB Console - Black',
    price: 499.00.toFixed(2),
    image1: <img src={xboxFront} className="productImg"></img>,
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
                <strike className="strikedPrice">$499.00</strike> Save $1000.00!
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
                  alt="An Xbox Series X 1 terabyte"
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

export default Xbox;
