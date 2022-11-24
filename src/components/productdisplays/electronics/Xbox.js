import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import xboxSide from "../../../images/electronics/xbox/xboxSide.jpg";
import xboxBox from "../../../images/electronics/xbox/xboxBox.jpg";
import xboxFront from "../../../images/electronics/xbox/xboxFront.jpg";
import xboxController from "../../../images/electronics/xbox/xboxController.jpg";

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
const imageGallery = [xboxSide, xboxFront, xboxBox, xboxController];

const product = {
  name: "Microsoft Xbox Series X 1TB Console - Black",
  price: 499,
  image1: xboxSide,
  stockQty: 10,
  orderQty: 0,
  orderTotal: 0,
};

export function Xbox() {
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
                  alt="An xbox series x console"
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
                <option value="3">3</option>{" "}
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
                {" "}
                Xbox Series X, the fastest, most powerful Xbox ever. Explore
                rich new worlds with 12 teraflops of raw graphic processing
                power, DirectX ray tracing, a custom SSD, and 4K gaming.
              </li>
              <li>
                Enjoy digital games from four generations of Xbox, with hundreds
                of optimized titles that look and play better than ever.
              </li>
              <li>
                Minimize load times and increase frame rates with a custom-built
                NVMe SSD, which enables larger, more robust games to operate at
                their full capacity. Bring your games and movies to life with
                the rich, dynamic sound environments at a high quality.
              </li>
              <li>
                {" "}
                Explore rich new worlds with 12 teraflops of raw graphic
                processing power, DirectX ray tracing, a custom SSD, and 4K
                gaming.
              </li>
              <li>
                When you add Xbox Game Pass Ultimate (membership sold separately
                or included when you choose Xbox All Access), you get an instant
                library of 100+ high-quality games, including day one releases
                from Xbox Game Studios like Halo Infinite, Forza Horizon 5, and
                Microsoft Flight Simulator.
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

export default Xbox;
