import { Header } from '../../header.js'
import { useNavigate } from 'react-router-dom'
import { ProductTiles } from '../producttiles.js'
import blender from '../../../images/homeGoods/blender.avif'


const arr = [];

export function HomeGoodsWrapper() {
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
          className="topTile"
          img={blender}
          name="Apple Iphone"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("laptop")}
          className="tileTwo"
          img={blender}
          name="MacBook Pro"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("android")}
          className="tileThree"
          img={blender}
          name="Macnook Pro"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'

        />
        <ProductTiles
          onClick={(e) => onClick("headphones")}
          className="tileFour"
          img={blender}
          name="Sony Headphones"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("airpods")}
          className="tileFive"
          img={blender}
          name="Apple Airpods"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
        <ProductTiles
          onClick={(e) => onClick("xbox")}
          className="tileSix"
          img={blender}
          name="Xbox One"
          imgWrap='imgWrap'
          imgClass='productTilesImage'
          nameClass='nameWrap'
        />
      </div>
    </div>
  );
}


export default HomeGoodsWrapper;