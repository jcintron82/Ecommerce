import { Header } from '../../header.js'
import { useNavigate } from 'react-router-dom'
import { ProductTiles } from '../producttiles.js'
import blender from '../../../images/homeGoods/blender.avif'




// const arr = [];

const productBlender = {
  name: "Blender",
  price: 1000,
  description: "A blender",
  image1: blender,
  stockQty: 10,
  orderQty:0,
  orderTotal:0,
}

export function HomeGoodsWrapper() {
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
        onClick={(e) => onClick(productBlender)}
        className="productTiles"
        img={productBlender.image1}
        name={productBlender.name}
        description={productBlender.description}
      /></div>
      </div>
        )
}

export default HomeGoodsWrapper;