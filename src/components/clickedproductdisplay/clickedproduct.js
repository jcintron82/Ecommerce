import Header from '../header.js'
import Button from '../buttons.js';
import { useNavigate } from 'react-router-dom';
import { ProductTiles } from '../productdisplays/producttiles.js'

export const ClickedProduct = () => {
	const navigate = useNavigate();
	return(
		<div>
		<Header />
		<div className='locationDiv'><Button text='Home'
		 onClick={e => navigate('/home') }/>, current page</div>

		<div className="productNameWrap"> <div className="productNameHeader">
		ProductName</div>
		Price </div> 
		<div className='imagesAndDescFlexWrap'>
		<div className='productImageWrap'> 
		<div className='productWrap'> img</div>
		<div className='productWrap'> img</div>
		<div className='productWrap'> img</div>
		<Button text='See More' />
		</div>
		<div className='descriptionWrap'> 
			<div className='productDescription'>Product Description</div>
			<Button text='Add To Cart' className='addToCartBtn' />
		</div>
		</div>
		<div className="detailsMenuWrap"> Details drop down menu </div>
		<div className="mayAlsoLikeWrap"> 
			<div> You may also like..</div>
			<div className="mayAlsoLikeTilesWrap"> 
			 <ProductTiles />
			 <ProductTiles />
			 <ProductTiles />
			 </div>
			 <div>Footer</div>

		 </div>
		</div>


		)
}

export default ClickedProduct;