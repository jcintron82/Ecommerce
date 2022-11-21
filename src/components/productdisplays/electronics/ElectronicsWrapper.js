import { Header } from '../../header.js'
import { ProductTiles } from '../producttiles.js'
import { useNavigate } from 'react-router-dom'
import  iphone from '../../../images/electronics/iphone.avif'


const arr = [];

const productIphone = {
  name: "IPhone 12",
  price: 1000,
  description: "An IPhone 12",
  image1: iphone,
  stockQty: 10,
  orderQty:0,
  orderTotal:0,
}

export function ElectronicsWrapper() {
   const  navigate = useNavigate();


   const onClick = (product) => {
    // arr.push(product);
    navigate("/iphone12");
  };



        return (
            <div>
            <Header />
             <div className="productsWrap">
      <ProductTiles
        onClick={(e) => onClick(productIphone)}
        className="productTiles"
        img={productIphone.image1}
        name={productIphone.name}
        description={productIphone.description}
      /></div>
      </div>
        )
}

export default ElectronicsWrapper;