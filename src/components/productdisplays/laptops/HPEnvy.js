import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import top from "../../../images/laptops/hpenvy/top.jpg";
import side from "../../../images/laptops/hpenvy/side.jpg";
import flipped from "../../../images/laptops/hpenvy/flipped.jpg";
import front from "../../../images/laptops/hpenvy/front.jpg";

const boldText = (value) => {
  return <b>{value}</b>;
};
const liOne = [
  boldText("Overview"),
  <br />,
  "Your ideas deserve the best: Even though it's small it packs in the tools you need to realize your most creative ideas. With the 13.3 inch display you get beautiful, brilliant colors. It has the latest Intel processor and graphics so it can handle what you throw at it. Create seamlessly: Quickly transfer any file almost any device to your PC without cables, clouds, thumb drives, or hassle with HP QuickDrop. While Duet for HP opens up your workspace and workflow by connecting your tablet, phone, or another PC as a second display. Show your best self: When you go live, you want to look your best. So turn it on for the 5MP GlamCam with Appearance Filter, Backlight Adjustment, Auto Frame, and AI noise reduction. It also features a physical camera shutter for privacy, because when you’re on, you’re on, and when you’re not, you’re not. Because little things make a big difference: Containing ocean-bound plastic, recycled aluminum and EPEAT Gold and ENERGY STAR ratings, make a difference, along with a great choice.",
];
const liTwo = [
  boldText("Operating system: Windows 11 Home"),
  <br />,
  "From a rejuvenated Start menu, to new ways to connect to your favorite people, news, games, and content—Windows 11 is the place to think, express, and create in a natural way.",
];
const liThree = [
  boldText("Display: 13.3-inch diagonal, WUXGA (1920 x 1200), multitouch-enabled, IPS, edge-to-edge glass, micro-edge, Corning Gorilla Glass NBT"),
  <br />,
 "Intuitive touchscreen technology with 1920 x 1200 resolution and 178-degree wide-viewing angles.",
];
const liFour = [
  boldText("Processor: Intel Evo platform powered by 12th Generation Intel Core i7-1250U"),
  <br />,
  "12th Gen Intel Core processor distributes performance where you need it the most — saving you time and increasing your ability to do the things you actually want.",
];
const liFive = [
  boldText("Memory: 8 GB LPDDR4x-4266 MHz RAM (onboard)"),
  <br />,
  "Substantial high-bandwidth RAM to smoothly run your games and photo- and video-editing applications, as well as multiple programs and browser tabs all at once.",
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

export function HPEnvy() {
  const imageGallery = [top, side, front, flipped];

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const product = {
    name: 'HP - ENVY 2-in-1 13.3" Touch-Screen Laptop - Intel Core i7 - 8GB Memory - 512GB SSD - Natural Silver',
    price: 649.00.toFixed(2),
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
                <strike className="strikedPrice">$1,049.00</strike> Save $400.00!
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
                  alt='An HP Envy Laptop 13inches'
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

export default HPEnvy;
