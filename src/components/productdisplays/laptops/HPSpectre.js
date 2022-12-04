import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import top from "../../../images/laptops/hpspectre/top.jpg";
import side from "../../../images/laptops/hpspectre/side.jpg";
import flipped from "../../../images/laptops/hpspectre/flipped.jpg";
import front from "../../../images/laptops/hpspectre/front.jpg";

const boldText = (value) => {
  return <b>{value}</b>;
};
const liOne = [
  boldText("Overview"),
  <br />,
  "Show yourself in your best light: You’re at your best when you’re looking your best. With HP GlamCam, an intelligent 5MP camera that provides backlight adjustment, auto frame and appearance filter, you can keep your focus on what you’re saying, not what you look like. Helps protect well-being: This 2-in-1 laptop helps protect your well-being by alerting you when it's time to take a break or you're too close to the screen with a screen time reminder and screen distance reminders. It also helps protect your privacy with walk away recognition, attention tracking, shoulder surfing protection, privacy camera shutter, mute mic button and built-in fingerprint reader. Plus keep your eyes comfortable with adaptive color and Eyesafe Certified low blue light panels. Boosts productivity: Settle for perfection. Get it all done with remarkable specs, like a taller display for more viewing area and less scrolling, plus the latest Intel processor and long battery life for all the power you can handle. Because little things make a big difference: Better feels better. Opening the sustainable packaging is just the first sign that you’ve made an eco-friendly choice. Containing ocean-bound plastic you can feel like you made a difference, along with a great choice.",
];
const liTwo = [
  boldText('Operating system: Windows 11 Home'),
  <br />,
  "From a rejuvenated Start menu, to new ways to connect to your favorite people, news, games, and content—Windows 11 is the place to think, express, and create in a natural way.",
];
const liThree = [
  boldText("Display: 16-inch diagonal, 3K+ (3072 x 1920), multitouch-enabled, IPS, edge-to-edge glass, micro-edge, antireflection Corning Gorilla Glass NBT, Low Blue Light"),
  <br />,
 "3072 x 1920 resolution delivers incredible details and lifelike colors. And with touch, you can control your PC right from the screen.",
];
const liFour = [
  boldText("Processor: Intel® Evo™ platform powered by 12th Generation Intel® Core™ i7-12700H"),
  <br />,
  "Intel Evo brings you a premium thin and light laptop experience with an ideal combination of performance, consistent responsiveness, and long-lasting battery.",
];
const liFive = [
  boldText("Memory: 16 GB DDR4-3200 MHz RAM (onboard)"),
  <br />,
  "Reams of high-bandwidth DDR4 RAM to smoothly run your graphics-heavy PC games and video-editing applications, as well as numerous programs and browser tabs all at once.",
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

export function HPSpectre() {
  const imageGallery = [top, side, front, flipped];

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const product = {
    name: 'HP - Spectre 2-in-1 16" 3K+ Touch-Screen Laptop - Intel Evo platform Core i7 - 16GB Memory - 512GB SSD - Pen Included - Nocturne Blue',
    price: 1640.00.toFixed(2),
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
                  alt="A 16 inch hp spectre laptop"
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

export default HPSpectre;
