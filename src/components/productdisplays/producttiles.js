import stock from '../../images/stock.avif';
import { Button } from '../buttons'

export function ProductTiles ({ onClick }) {
	return (
		
		<div className='productTiles' onClick={onClick}>

		<div> <img className='productTilesImage' 
		src={stock}></img>
		</div>
		<div>Product Main Desc</div>
		<div>product Sub Desc</div>
			
			

		</div>
		
		);

}

export default ProductTiles;