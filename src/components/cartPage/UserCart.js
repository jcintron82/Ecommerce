import Header from '../header.js';
import Button from '../buttons.js';
import { useState } from 'react';
import { ParsedCart, userCartArr } from './ParsedCart.js';

export const cartDataFloat = {};

export function UserCart() {

	const [totalQty, setTotalQty] = useState(0);
	const [orderSubTotal, setOrderSubTotal] = useState(0.00);
	const [orderTaxAmt, setorderTaxAmt] = useState(0.00);
	const [orderTotal, setOrderTotal] = useState(0.00);

	cartDataFloat.setData = function setData(qty, subTotal, tax, total) {
		setTotalQty(qty);
		setOrderSubTotal(subTotal);
		setorderTaxAmt(tax);
		setOrderTotal(total);
	}

	return(
		<div>
		<Header />
		<div className='itemAmtAndTotal'>
		<h1>Your Cart</h1>
		<div className='topOrderSummaryWrap'>
		<div className='topOderSummaryValues'>Items: { totalQty }</div>
		<div className='topOderSummaryValues'>Total: ${ orderTotal }</div> </div>
		<div className='topCheckoutBtnWrap'><Button text='Checkout' className='checkoutBtn' /></div> </div>
		
		<div className='cartBodyWrapper'>
		<ParsedCart />
		</div>
		<div className='orderSummaryWrapper'>
			<div className='orderSummaryheader'>Order Summary</div>
			<div className='itemQtyWrap'>Order Qty: { totalQty }<div className='summaryValues'> Subtotal: ${ orderSubTotal }</div></div>
			<div className='salesTaxWrap'>Sales Tax 7%<div className='summaryValues'>Tax Amount: ${ orderTaxAmt }</div></div>
			<div className='totalPriceWrap'>Total: ${ orderTotal } </div>
			<Button text='Checkout' className='checkoutBtn' />
		</div>

		<div>
			Other Products For You
		</div>




		</div>
		);
}

export default UserCart;