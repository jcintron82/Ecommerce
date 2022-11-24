import { Header } from "../../header.js";
import { ProductTiles } from "../producttiles.js";
import { useNavigate } from "react-router-dom";
import iphonePic from "../../../images/electronics/iphone.avif";
import laptopMain from "../../../images/electronics/laptop/laptopMain.avif";
import airpodsMain from "../../../images/electronics/airpods/airpodsMain.avif";
import headphonesMain from "../../../images/electronics/sonyHeadphones/headphonesMain.avif";


const arr = [];

const iphone = {
  name: "IPhone 12",
  price: 1000,
  description: "An IPhone 12",
  image1: iphonePic,
  stockQty: 10,
  orderQty: 0,
  orderTotal: 0,
};

const productLaptop = {
  name: "Dell Laptop",
  price: 250,
  description: "A Dell Laptop",
  image1: laptopMain,
  stockQty: 10,
  orderQty: 0,
  orderTotal: 0,
};

export function ElectronicsWrapper() {
  const navigate = useNavigate();

  const onClick = (section) => {
    arr.push(section);
    let formattedArg = "/" + section;
    navigate(formattedArg);
  };

  return (
    <div>
      <Header />
      <div className="productsWrap">
        <ProductTiles
          onClick={(e) => onClick("iphone")}
          className="topTwoTiles"
          img={iphonePic}
          name={iphone.name}
          description={iphone.description}
        />
        <ProductTiles
          onClick={(e) => onClick("laptop")}
          className="topTwoTiles"
          img={productLaptop.image1}
          name={productLaptop.name}
          description={productLaptop.description}
        />
         <ProductTiles
          onClick={(e) => onClick("laptop")}
          className="productTiles"
          img={productLaptop.image1}
          name={productLaptop.name}
          description={productLaptop.description}
        />
         <ProductTiles
          onClick={(e) => onClick("headphones")}
          className="productTiles"
          img={headphonesMain}
          name={productLaptop.name}
          description={productLaptop.description}
        />
         <ProductTiles
          onClick={(e) => onClick("laptop")}
          className="productTiles"
          img={airpodsMain}
          name={productLaptop.name}
          description={productLaptop.description}
        />
         <ProductTiles
          onClick={(e) => onClick("laptop")}
          className="productTiles"
          img={productLaptop.image1}
          name={productLaptop.name}
          description={productLaptop.description}
        />
      </div>
    </div>
  );
}

export default ElectronicsWrapper;
