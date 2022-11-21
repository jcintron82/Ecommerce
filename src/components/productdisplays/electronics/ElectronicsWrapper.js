import { Header } from '../../header.js'
import { ProductTiles } from '../producttiles.js'
import { useNavigate } from 'react-router-dom'
import  iphonePic from '../../../images/electronics/iphone.avif'


const arr = [];

const iphone = {
  name: "IPhone 12",
  price: 1000,
  description: "An IPhone 12",
  image1: iphonePic,
  stockQty: 10,
  orderQty:0,
  orderTotal:0,
}

const productLaptop = {
  name: "Dell Laptop",
  price: 250,
  description: "A Dell Laptop",
  image1: iphone,
  stockQty: 10,
  orderQty:0,
  orderTotal:0,
}


export function ElectronicsWrapper() {
   const  navigate = useNavigate();

   
   const onClick = (section) => {
    arr.push(section);
    // console.log(arr);
    // console.log(productFloat);
    let formattedArg = '/' + section;
    navigate(formattedArg);
  };



        return (
            <div>
            <Header />
             <div className="productsWrap">
      <ProductTiles
        onClick={(e) => onClick('iphone')}
        className="productTiles"
        img={iphone.image1}
        name={iphone.name}
        description={iphone.description}
      />
       <ProductTiles
        onClick={(e) => onClick('laptop')}
        className="productTiles"
        img={productLaptop.image1}
        name={productLaptop.name}
        description={productLaptop.description}
      />
      
      </div>
      </div>
        )
}

export default ElectronicsWrapper;