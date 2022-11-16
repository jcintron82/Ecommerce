import Button from './buttons.js'
import stock from'../images/stock.avif'


export function IntroBlurbWrap() {

	return (
		<div className='introBlurbWrap'>
		<div className='introImageWrap'>
		<img className='introImage' src={stock}></img></div>

		<div className='introBlurb'>
		<div>It is a long established fact that a reader will be distracted by the readable content of a 
		page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
		</div>
		<Button text='Shop Now' /> </div>


		 </div>

		)
}

export default IntroBlurbWrap;