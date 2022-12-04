import { cartDataFloat } from "./UserCart";
import { useState } from "react";
import { Button } from "../buttons.js";
import { ReactComponent as TrashIcon } from "../trashicon.svg";
export { userCartArr };

let userCartArr = [];

export function ParsedCart() {
  const [stateRefresh, setStateRefresh] = useState(userCartArr);

  //Do not change these to useState - load bearing code - React will kick error
  // component (`UserCart`) while rendering a different component (`ParsedCart`)
  let totalQty = 0.0;
  let orderSubTotal = 0.0;
  let orderTaxAmt = 0.0;
  let total$ = 0.0;

  const changeData = (product) => {
    if (userCartArr.length === 0) {
      totalQty = 0;
      orderSubTotal = 0;
      orderTaxAmt = 0;
      total$ = 0;
      cartDataFloat.setData(totalQty, orderSubTotal, orderTaxAmt, total$);
    } else {
      totalQty = totalQty + product.orderQty;
      orderSubTotal = orderSubTotal + product.orderTotal;
      let formattedSub = orderSubTotal.toFixed(2);
      let x = orderSubTotal / 100;
      orderTaxAmt = (x * 7).toFixed(2);
      total$ = (parseFloat(orderSubTotal) + parseFloat(orderTaxAmt)).toFixed(2);
      cartDataFloat.setData(totalQty, formattedSub, orderTaxAmt, total$);
    }
  };

  const changeQtyUp = (product) => {
    product.orderQty = parseInt(product.orderQty, 10) + 1;
    product.orderTotal = product.price * product.orderQty;
    changeData(product);
  };

  const changeQtyDown = (product) => {
    falseQtyChangeBreak: if (product.orderQty === 0) {
      break falseQtyChangeBreak;
    } else {
      product.orderQty = product.orderQty - 1;
      product.orderTotal = product.price * product.orderQty;
      changeData(product);
    }
  };

  const qtyOnChange = (e, product) => {
    console.log(e.target.value);
    falseQtyOnChange: if (product.orderQty === 0) {
      break falseQtyOnChange;
    } else {
      product.orderQty = e.target.value;
      product.orderTotal = product.price * product.orderQty;
      changeData(product);
    }
  };

  const deleteCartProduct = (product, index) => {
    const newCart = userCartArr.splice(index, 1);
    product.orderQty = 0;
    console.log(userCartArr);
    if (userCartArr.length === 0) {
      changeData(product);
    }
    setStateRefresh(newCart);
  };

  const formatOrderTotal = (total) => {
         total.toFixed(2)
  }
  
  return (
    <div className="parsedCartMasterWrap">
      {userCartArr.map((product, i) => (
        <div className="cartWrap" key={product.name}>
          <div className="userCartProductImages">{product.image1}</div>
          <div>
            <div className="cartProductsDescriptionWrap">
              <h2 className="cartProductsName">{product.name}</h2>
            </div>
            <div className="cartProductsPriceQtyWrap">
              {() => formatOrderTotal(product.orderTotal)}
              <div>${product.orderTotal}</div>
              <div>{changeData(product)}</div>
              <div className="qtyChangeWrapper">
                <Button
                  text="-"
                  onClick={() => changeQtyDown(product)}
                  className="qtyBtnDown"
                />
                <input
                  onChange={() => qtyOnChange(product)}
                  className="cartQtyInput"
                  placeholder={product.orderQty}
                  type="number"
                  min="1"
                  readOnly
                ></input>
                <Button
                  text="+"
                  onClick={() => changeQtyUp(product)}
                  className="qtyBtnUp"
                />
              </div>
              <div className="trashWrap">
                <TrashIcon
                  fill="black"
                  style={{ width: "24px" }}
                  onClick={() => deleteCartProduct(product, i)}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ParsedCart;
