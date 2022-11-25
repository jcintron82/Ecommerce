import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import {  useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import headphones from "../../../images/electronics/sonyHeadphones/headphones.png";
import headphonesFront from "../../../images/electronics/sonyHeadphones/headphonesFront.png";
import headphonesSide from "../../../images/electronics/sonyHeadphones/headphonesSide.png";
import guySmilingWithHeadphones from "../../../images/electronics/sonyHeadphones/guySmilingWithHeadphones.png";

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
const imageGallery = [headphones, headphonesFront, headphonesSide, guySmilingWithHeadphones];

const product = {
  name: "Sony WH-1000XM5 Wireless Industry Leading Noise Cancelling Headphones (Black)",
  price: 369,
  image1: headphones,
  stockQty: 10,
  orderQty: 0,
  orderTotal: 0,
};

export function Headphones() {
  const [qty, setQty] = useState(product.orderQty);
  const [open, setOpen] = useState(false);
  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const handleQtyChange = (e) => {
    setQty(e.target.value);
  };

  const nextImageClick = () => {
    if (counter === 3) {
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
    setIsLoading(!isLoading);
 
    if (userCartArr.includes(product)) {
      product.orderQty = product.orderQty + parsedInt;
      product.orderTotal = product.price * product.orderQty;
      console.log(product);
    } else {
      product.orderQty = product.orderQty + parsedInt;
      product.orderTotal = product.price * product.orderQty;
      userCartArr.push(product);
      console.log(product);
    }
    setIsLoading(!isLoading);
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
              <div className="priceWrap">${product.price}.00</div>
              <div className="savedPriceWrap">
                <strike className="strikedPrice">$399.00</strike> Save $30.00
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
                  alt="A pair of Sony headphones, model WH-1000XM5"
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
              <select
                onChange={handleQtyChange}
                name="qty"
                className="cartQtyInput"
                type="number"
              >
                {" "}
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">3</option>
                {" "}
              </select>{" "}
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
              <li>
              Up to 30-hour battery life with quick charging (3 min charge for 3 hours of playback)
              </li>
              <li>Industry-leading noise cancellation optimized to you</li>
              <li>Crystal clear hands-free calling</li>
              <li>Magnificent Sound, engineered to perfection</li>
              <li>For everyday convenience, just Speak-to-Chat and 
                Quick Attention mode stop your music and let in ambient sound</li>
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

export default Headphones;