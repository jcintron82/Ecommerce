import { useState, useEffect } from 'react';
import { CSSTransition } from "react-transition-group";
import stock from'../images/stock.avif'
import jarredStock from'../images/jarredStock.avif'


const imageArr = [stock, jarredStock,stock];
let counter = 0;
export function IntroBlurbWrap() {

	const [picture, setPicture] = useState(imageArr[counter]);
	const [newPic, setNewPic] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			counter++;
			setPicture(imageArr[counter])
			if (counter > 1){
				counter = 0;
			}
		},30000);
	  }, );


	return (
		<div className='introBlurbWrap'>
		
		{newPic ? (

                <img
                  className="homePageImageRotation"
                  src={picture}
                  alt="A pair of apple airpods second generation"
                ></img>
            )
			  : <div></div>}

		{/* <div className='introBlurb'>
		<div>It is a long established fact that a reader will be distracted by the readable content of a 
		page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
		</div>
		<Button text='Shop Now' /> </div> */}


		 </div>

		)
}

export default IntroBlurbWrap;