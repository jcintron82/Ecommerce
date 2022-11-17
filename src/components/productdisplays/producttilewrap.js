import { ProductTiles } from './producttiles.js'
import { useState } from 'react'



export function ProductTileWrap () {

	const [tile1, setTile1] = useState();
	const [tile2, setTile2] = useState();
	const [tile3, setTile3] = useState();
	const [tile4, setTile4] = useState();
	const [tile5, setTile5] = useState();
	const [tile6, setTile6] = useState();

	const onClick = (tile) => {
		
	}

	return (
		<div className='productsWrap' >
		<ProductTiles onClick={ onClick } className='productTiles'/>
		<ProductTiles onClick={ onClick } className='productTiles'/>
		<ProductTiles onClick={ onClick } className='productTiles'/>
		<ProductTiles onClick={ onClick } className='productTiles'/>
		<ProductTiles onClick={ onClick } className='productTiles'/>
		<ProductTiles onClick={ onClick } className='productTiles'/>
		</div>
		);

}

export default ProductTileWrap;