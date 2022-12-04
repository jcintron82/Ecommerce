import Header from "../../header.js";
import Footer from "../../Footer.js";
import Button from "../../buttons.js";
import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import { userCartArr } from "../../cartPage/ParsedCart.js";
import top from "../../../images/laptops/dellxps/top.jpg";
import side from "../../../images/laptops/dellxps/side.jpg";
import flipped from "../../../images/laptops/dellxps/open.jpg";
import front from "../../../images/laptops/dellxps/front.jpg";

const boldText = (value) => {
  return <b>{value}</b>;
};
const liOne = [
  boldText("Overview"),
  <br />,
  "XPS products are designed to be the best, with cutting-edge technologies, exceptional build quality, unique materials and powerful features. XPS brings together the most elegant designs and premium experiences to enhance your work and personal success. This combination ultimately results in beautifully crafted products with no compromises. The new XPS 15 is the perfect balance of power and portability with an unrivaled immersive visual and sound experience. Whether you are streaming, editing photos or creating your next masterpiece, the XPS 15 has the power to move your ideas into reality.",
];
const liTwo = [
  boldText("Windows 11"),
  <br />,
  "Windows 11 has all the power and security of Windows 10 with a redesigned and refreshed look. It also comes with new tools, sounds, and apps. Every detail has been considered. All of it comes together to bring you a refreshing experience on your PC.",
];
const liThree = [
  boldText('15.6" FHD+ Display'),
  <br />,
 "1920 x 1200 resolution showcases your games and HD movies with impressive color and clarity. Antireflective finish reduces eyestrain and widens the field of view.",
];
const liFour = [
  boldText("12th Generation Intel® Core™ i7-12700H"),
  <br />,
  "Ultra-low-voltage platform. Fourteen-core, twenty-way processing provides maximum high-efficiency power to go. Intel Turbo Boost Technology delivers dynamic extra power when you need it.",
];
const liFive = [
  boldText("512GB M.2 PCIe NVMe Solid State Drive"),
  <br />,
  "While offering less storage space than a hard drive, a flash-based SSD has no moving parts, resulting in faster start-up times and data access, no noise, and reduced heat production and power draw on the battery.",
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

export function DellXPS() {
  const imageGallery = [top, side, front, flipped];

  const [qty, setQty] = useState(1);
  const [open, setOpen] = useState(false);
  const [pic2, setPic2] = useState(imageGallery[counter]);
  const [isEnter, setIsEnter] = useState(false);

  const product = {
    name: 'Dell - XPS 15 15.6" FHD+ Laptop - 12th Gen Intel Core i7 - 16GB Memory - NVIDIA GeForce RTX 3050 Ti - 512GB SSD - Silver',
    price: 2020.00.toFixed(2),
    image1: <img src={flipped} className="productImg"></img>,
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
                  alt='A 15 inch dell xps laptop'
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

export default DellXPS;
