import { ProductTiles } from './producttiles.js'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import stock from '../../images/stock.avif'


const prod1 = {
	name: 'Stock',
	price: '$100',
	description: 'A good chicken stock',
	image: stock
};

const productArr = [ 

	];

export function ProductTileWrap () {
	const navigate = useNavigate();

	const [tile1, setTile1] = useState();
	const [tile2, setTile2] = useState();
	const [tile3, setTile3] = useState();
	const [tile4, setTile4] = useState();
	const [tile5, setTile5] = useState();
	const [tile6, setTile6] = useState();

	const onClick = (product) => {
		console.log(product.name)
	}

	return (
		<div className='productsWrap' >
		<ProductTiles onClick={e => navigate('/clickedproduct') } className='productTiles' img={stock}
		name={ prod1.name } description={ prod1.description }/>




		<ProductTiles onClick={ onClick } className='productTiles'/>
		<ProductTiles onClick={ onClick } className='productTiles'/>
		<ProductTiles onClick={ onClick } className='productTiles'/>
		<ProductTiles onClick={ onClick } className='productTiles'/>
		<ProductTiles onClick={ onClick } className='productTiles'/>
		</div>
		);

}

export default ProductTileWrap;