import {Button } from './buttons.js'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import macbookAd1 from'../images/ads/macbookAd1.jpg'
import ps5ad from'../images/ads/ps5ad.png'
import airpods from'../images/ads/airpods.jpg'
const imageArr = [macbookAd1, airpods, ps5ad];
const linkAdArray = ['/laptop', '/airpods', '/ps5bundle'];

let counter = -1;
const seeMoreSVG = (
	<svg
	  width="24px"
	  className="w-6 h-6"
	  fill="currentColor"
	  viewBox="0 0 20 20"
	  xmlns="http://www.w3.org/2000/svg"
	>
	  <path
		fillRule="evenodd"
		d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
		clipRule="evenodd"
	  />
	</svg>
  );

export function IntroBlurbWrap() {

	const [picture, setPicture] = useState(imageArr[0]);
	const [newPic, setNewPic] = useState(true);
	const [adCycle, setAdCycle] = useState(counter)
		

	useEffect(() => {
		setTimeout(() => {
			if (counter === 2){
				counter = 0;
				setPicture(imageArr[counter])
				setAdCycle(linkAdArray[counter])
				console.log(counter)
			}
				
			else {
				counter++
			setPicture(imageArr[counter])
			setAdCycle(linkAdArray[counter])
			console.log(counter)
		

			}
		},2000);
	  }, );

	// const nextAdvertisementClick = () => {
	// 	if (counter === imageArr.length - 1){
	// 		counter = 0;
	// 		setPicture(imageArr[counter])
	// 		setAdCycle(linkAdArray[counter])}
	// 	else {
	// 		counter++;
	// 		setPicture(imageArr[counter])
	// 	}
	// }

	return (
		<div className='introBlurbWrap'>
		
		{newPic ? (
				<div className='introBlurbWrap'>
				{/* <Button text='Next' className='blurbWrapBtns'/> */}
				<Link className='introBlurbWrap' to={adCycle}>
                <img
                  className="homePageImageRotation"
                  src={picture}
                  alt="Advertisement"
                ></img></Link>
				{/* <Button svg={seeMoreSVG}  className='blurbWrapBtns' onClick={nextAdvertisementClick}/> */}
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