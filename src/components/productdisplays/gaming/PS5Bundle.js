import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import systemBox from "../../../images/gaming/ps5bundle/systemBox.jpg";
import systemFront from "../../../images/gaming/ps5bundle/systemFront.jpg";
import systemSide from "../../../images/gaming/ps5bundle/systemSide.jpg";
import systemTop from "../../../images/gaming/ps5bundle/systemTop.jpg";

const boldText = (value) => {
  return <b>{value}</b>;
};
const liOne = [
  boldText("Overview"),
  <br />,
  "PlayStation 5 Console – God of War Ragnarök Bundle includes: PlayStation 5 console, DualSense wireless controller, Base, HDMI cable, AC power cord, USB cable, Printed materials, ASTRO’s PLAYROOM (Pre-installed game. PS5™ console may need to be updated to the latest system software version. Internet connection required.), God of War Ragnarök full game voucher. Embark on an epic and heartfelt journey alongside Kratos and Atreus with the – God of War Ragnarök Bundle. Enjoy God of War Ragnarök with PS5 innovations including 4K and HDR visuals*, DualSense wireless controller adaptive triggers and haptic feedback and Tempest 3D AudioTech**. * 4K and HDR require a 4K and HDR compatible TV or display. ** 3D Audio with stereo headphones (analog or USB).",
];
const liTwo = [
  boldText("Integrated I/O"),
  <br />,
  "The custom integration of the PS5 console's systems lets creators pull data from the SSD so quickly that they can design games in ways never before possible.",
];
const liThree = [
  boldText("Stunning games"),
  <br />,
 "Marvel at incredible graphics and experience new PS5 features.",
];
const liFour = [
  boldText("Ultra-high speed SSD"),
  <br />,
  "Maximize your play sessions with near-instant load times for installed PS5 games.",
];
const liFive = [
  boldText("HDR technology"),
  <br />,
  "With an HDR TV, supported PS5 games display an unbelievably vibrant and lifelike range of colors.",
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

export function PS5Bundle() {
  const imageGallery = [systemFront, systemSide, systemBox, systemTop];

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const product = {
    name: 'PlayStation 5 Console – God of War Ragnarök Bundle',
    price: 545.00.toFixed(2),
    image1: <img src={systemFront} className="productImg"></img>,
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

export default PS5Bundle;
