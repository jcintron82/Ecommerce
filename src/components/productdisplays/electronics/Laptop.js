import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import macbookFront from "../../../images/electronics/laptop/macbookFront.png";
import macbookTop from "../../../images/electronics/laptop/macbookTop.png";
import macbookSide from "../../../images/electronics/laptop/macbookSide.png";
import macbookClosed from "../../../images/electronics/laptop/macbookClosed.jpg";

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
const imageGallery = [macbookFront, macbookTop, macbookSide, macbookClosed];

const laptop = {
  name: "Refurbished 13.3-inch Apple MacBook Pro Apple M1 Chip with 9-Core CPU and 8-Core GPU",
  price: 1059,
  description:
    "A refurbished Macbook Pro 13-Inch. Featuring a 13.3-inch LED-backlit display,",
  image1: macbookFront,
  stockQty: 10,
  orderQty: 0,
  orderTotal: 0,
};

export function Laptop() {
  const [qty, setQty] = useState(laptop.orderQty);
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
    setIsLoading(!isLoading)
    // setTimeout(() => {
    //     setIsLoading(!isLoading)
    // }, 1000)


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
    setIsLoading(!isLoading)
  };

  return (
    <div className="mainWrap">
      <Header />
      <div className="productNameWrap">
        {" "}
        <div className="productNameHeader">{laptop.name}</div>
        <div className="priceWrap">${laptop.price}.00</div>
        <div className="savedPriceWrap">
          <strike className="strikedPrice">$1249.00</strike> Save $190.00
        </div>
      </div>
      <div className="imagesAndDescFlexWrap">
        <div className="img">
          <CSSTransition in={isEnter} timeout={420} classNames="imageFadeIn">
            <img className="imageFadeIn" src={pic2} alt='A macbook pro 13-3inch'></img>
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
            <option value="3">3</option>{" "}
          </select>{" "}
          <Button
            text="Add To Cart"
            className="addToCartBtn"
            onClick={(e) => addToCartClick(laptop)}
          />
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
                  Refurbished Macbook Pro 13-Inch. Featuring a 13.3-inch
                  LED-backlit display, 2560-by-1600 native resolution at 227
                  pixels per inch.
                </li>
                <li>8GB Unified Memory</li>
                <li>256GB SSD</li>
                <li>Touch Bar and Touch ID</li>
                <li>720p FaceTime HD Camera</li>
              </ul>
            ) : (
              <div></div>
            )}
          </CSSTransition>
        </div>
      </div>

      <div>
        {" "}
        <Footer className="footer" />
      </div>
    </div>
  );
}

export default Laptop;
