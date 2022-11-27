import {Button } from './buttons.js'
import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom'
import macbookAd from'../images/ads/macbookAd.avif'
import headphonesAd from'../images/ads/headphonesAd.avif'
import sneakersAd from'../images/ads/x.avif'
	
const imageArr = [sneakersAd, headphonesAd, sneakersAd];
const linkAdArray = ['/laptop', '/electronics', '/homeGoods'];
let counter = 0;

export function IntroBlurbWrap() {

	const [picture, setPicture] = useState(imageArr[counter]);
	const [newPic, setNewPic] = useState(true);
	const [adCycle, setAdCycle] = useState(linkAdArray[counter])
		

	useEffect(() => {
		setTimeout(() => {
			if (counter === imageArr.length - 1){
				counter = 0;
				setPicture(imageArr[counter])
				setAdCycle(linkAdArray[counter])}
			else {
			counter++;
			setPicture(imageArr[counter])
			setAdCycle(linkAdArray[counter])

			}
		},5000);
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
				<Link className='introBlurbWrap' to={adCycle}>
                <img
                  className="homePageImageRotation"
                  src={picture}
                  alt="Advertisement"
                ></img></Link>
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