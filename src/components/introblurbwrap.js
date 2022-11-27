import {Button } from './buttons.js'
import { useState, useEffect } from 'react';
import stock from'../images/stock.avif'
import jarredStock from'../images/jarredStock.avif'



const imageArr = [stock, jarredStock];
let counter = 0;
export function IntroBlurbWrap() {

	const [picture, setPicture] = useState(imageArr[counter]);
	const [newPic, setNewPic] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			if (counter === imageArr.length - 1){
				counter = 0;
				setPicture(imageArr[counter])}
			else {
			counter++;
			setPicture(imageArr[counter])

			}
		},3000);
	  }, );

	const nextAdvertisementClick = () => {
		counter++;
		setPicture(imageArr[counter]);
		console.log(counter)
		console.log(picture)
	}

	return (
		<div className='introBlurbWrap'>
		
		{newPic ? (
				<div className='introBlurbWrap'>
				<Button text='Next' className='blurbWrapBtns'/>
			
                <img
                  className="homePageImageRotation"
                  src={picture}
                  alt="Advertisement"
                ></img>
				<Button text='Next' className='blurbWrapBtns' onClick={nextAdvertisementClick}/>
				</div>
			
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