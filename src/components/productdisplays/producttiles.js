import { Button } from '../buttons'

export function ProductTiles ({ onClick, className, img, name, description }) {
	return (
		
		<div className={ className } onClick={ onClick }>

		<div> <img className='productTilesImage' 
		src={ img }></img>
		</div>
		<div>{ name }</div>
		<div>{ description }</div>
			
			

		</div>
		
		);

}

export default ProductTiles;