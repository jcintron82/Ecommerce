import Header from '../header.js';
import Button from '../buttons.js'

export const userCartArr = [];



export function UserCart() {
	return(
		<div>
		<Header />
		<h2> Your Cart </h2>
		<div className='itemAmtAndTotal'>
		<div> Item #s and Total</div> <Button text='Checkout' /></div>
		
		<div className='cartBodyWrapper'>
		</div>
		<div className='orderSummaryWrapper'>
			<div>Order Summary</div>
			<div className='itemQtyWrap'>Item Qty <div>Subtotal</div></div>
			<div className='salesTaxWrap'>Sales Tax<div>Tax Amount</div></div>
			<div className='totalPriceWrap'>Total<div>Total $$$</div></div>
			<Button text='Checkout' />
		</div>

		<div>
			Other Products For You
		</div>




		</div>
		);
}

export default UserCart;