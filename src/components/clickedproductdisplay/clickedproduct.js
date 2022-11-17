import Header from '../header.js'
import Button from '../buttons.js';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ProductTiles } from '../productdisplays/producttiles.js'
import {arr} from '../productdisplays/producttilewrap.js'

export const ClickedProduct = () => {

	
		const [productName, setProductName] = useState('');
	
		const setValue = () => {
			setProductName(arr[0].name)
		}

		 useEffect(() => {
    
    	setValue()
  });

	const onClick = () => {
		navigate('/home');
		arr.splice(0)
		console.log(arr)
	}

	const navigate = useNavigate();
	return(
		<div>
		<Header />
		<div className='locationDiv'><Button text='Home'
		 onClick={ onClick }/>, current page</div>

		<div className="productNameWrap"> <div className="productNameHeader">
		{ productName }</div>
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