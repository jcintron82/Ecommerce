import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import airpods from "../../../images/electronics/airpods/airpods.jpg";
import airpodsIn from "../../../images/electronics/airpods/airpodsIn.jpg";
import airpodsOut from "../../../images/electronics/airpods/airpodsOut.jpg";
import airpodsSide from "../../../images/electronics/airpods/airpodsSide.jpg";

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
const imageGallery = [
  airpods,
  airpodsIn,
  airpodsOut,
  airpodsSide,
];

const product = {
  name: "Apple AirPods Pro (2nd Generation) ",
  price: 240,
  image1: airpods,
  stockQty: 10,
  orderQty: 0,
  orderTotal: 0,
 
};

export function Airpods() {
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
                <strike className="strikedPrice"></strike>
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
                  alt="A pair of apple airpods second generation"
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
                <option value="3">3</option>
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
              AirPods Pro (2nd generation) deliver an even more effortless experience
               than the original model. Touch control lets you manage playback 
               functions from the stem and adjust volume with a light swipe up or 
               down.
              </li>
              <li>Up to 6 hours of listening time on a single charge
                 (up to 5.5 hours with Personalized Spatial Audio and Head Tracking enabled).</li>
              <li>Up to 4.5 hours of talk time with a single charge.</li>
              <li>Active Noise Cancellation now cancels twice as much unwanted noise.</li>
              <li>
              The upgraded H2 chip powers smarter noise cancellation and three-dimensional sound. Adaptive EQ tunes music to your ears in real
               time to deliver crisp, clean high notes and deep, rich bass in stunning clarity.
              </li>
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

export default Airpods;
