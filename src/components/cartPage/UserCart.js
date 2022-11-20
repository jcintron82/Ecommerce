import Header from '../header.js';
import Button from '../buttons.js';
import { useState } from 'react';
import { ParsedCart, userCartArr } from './ParsedCart.js';

export const cartDataFloat = {};

export function UserCart() {

	const [totalQty, setTotalQty] = useState();
	const [orderSubTotal, setOrderSubTotal] = useState();
	const [orderTaxAmt, setorderTaxAmt] = useState();
	const [orderTotal, setOrderTotal] = useState('place');

	cartDataFloat.setData = function setData(qty, subTotal, tax, total) {
		setTotalQty(qty);
		setOrderSubTotal(subTotal);
		setorderTaxAmt(tax);
		setOrderTotal(total);
	}

	return(
		<div>
		<Header />
		<h2> Your Cart </h2>
		<div className='itemAmtAndTotal'>
		<div> Item #s and Total</div> <Button text='Checkout' /></div>
		
		<div className='cartBodyWrapper'>
		<ParsedCart />
		</div>
		<div className='orderSummaryWrapper'>
			<div>Order Summary</div>
			<div className='itemQtyWrap'>Order Qty: { totalQty }<div>Subtotal: { orderSubTotal }</div></div>
			<div className='salesTaxWrap'>Sales Tax 7%<div>Tax Amount: { orderTaxAmt }</div></div>
			<div className='totalPriceWrap'>Total: { orderTotal } <div>Total $$$</div></div>
			<Button text='Checkout' />
		</div>

		<div>
			Other Products For You
		</div>




		</div>
		);
}

export default UserCart;