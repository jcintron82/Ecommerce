import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import front from "../../../images/phoneandaudio/powerbeats/front.jpg";
import back from "../../../images/phoneandaudio/powerbeats/back.jpg";
import headphonesin from "../../../images/phoneandaudio/powerbeats/insidecase.jpg";
import headphonesout from "../../../images/phoneandaudio/powerbeats/outsidecase.jpg";

const boldText = (value) => {
  return <b>{value}</b>;
};
const liOne = [
  boldText("Overview"),
  <br />,
  "Totally wireless Powerbeats Pro Earbuds are built to revolutionize your workouts. With zero wires to hold you back, the adjustable, secure-fit earhooks are customizable for extended comfort and stability. A reinforced design for sweat and water resistance lets you take it to the next level. Each earbud has full volume and track controls and up to 9 hours of listening time to fuel your training with powerful, balanced sound.",
];
const liTwo = [
  boldText("High-Performance Workout Earbuds"),
  <br />,
  "Powerbeats Pro, powered by the Apple H1 headphone chip, will revolutionize the way you work out. Built for elite athletes, these totally wireless Earbuds have no wires to hold you back",
];
const liThree = [
  boldText("Sound Like a Pro"),
  <br />,
 "Powerbeats Pro boast powerful, balanced audio via an entirely redesigned acoustic package, delivering pure sound reproduction, enhanced clarity, and improved dynamic range. These earbuds were crafted with a focus on ergonomic comfort to deliver the best listening experience possible.",
];
const liFour = [
  boldText("Power. Play."),
  <br />,
  "Long hours of training? Marathons? Bring it. Each earbud has up to 9 hours of listening time so you can keep your music going. With the charging case, you'll get more than 24 hours of combined playback.",
];
const liFive = [
  boldText("Wireless That Works"),
  <br />,
  "Powerbeats Pro are ready to go when you are. With Class 1 Bluetooth® technology, these wireless Earbuds offer extended range and fewer dropouts, so they stay connected as you keep moving.",
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

export function PowerBeats() {
  const imageGallery = [front, back, headphonesin, headphonesout];

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const product = {
    name: 'Beats by Dr. Dre - Powerbeats Pro Totally Wireless Earbuds - Black',
    price: 199.00.toFixed(2),
    image1: <img src={headphonesin} className="productImg"></img>,
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
                <strike className="strikedPrice">$1,999.00</strike> Save $1000.00!
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
                  alt="Powerbeats headphones black"
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

export default PowerBeats;
