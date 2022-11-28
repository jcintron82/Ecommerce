import { cartDataFloat } from "./UserCart";
import androidFront from "../../images/electronics/android/androidFront.jpg";
export { userCartArr };
const x = <img src={androidFront}></img>
let userCartArr = [ {
  name: "Google Pixel 7 Pro 512GB (Unlocked) - Obsidian",
  price: 979,
  image1: <img src={androidFront} className='productImg'></img>,
  stockQty: 10,
  orderQty: 0,
  orderTotal: 0,
}
];

export function ParsedCart() {
  let totalQty = 0.0;
  let orderSubTotal = 0.0;
  let orderTaxAmt = 0.0;
  let total$ = 0.0;

  const changeData = (product) => {
    totalQty = totalQty + product.orderQty;
    orderSubTotal = orderSubTotal + product.orderTotal;
    let x = orderSubTotal / 100;
    orderTaxAmt = x * 7;
    total$ = orderSubTotal + orderTaxAmt;
    cartDataFloat.setData(totalQty, orderSubTotal, orderTaxAmt, total$);
  };

  return (
    <div className="parsedCartMasterWrap">
      
      {userCartArr.map((product, name) => (
        <div className="cartWrap" key={product.name}>
          <div className="userCartProductImages">
           { product.image1 }
          </div>
          <div>
            <div className="cartProductsDescriptionWrap">
              <h2 className="cartProductsName">{product.name}</h2>
            </div>
            <div className="cartProductsPriceQtyWrap">
              <div>{product.orderTotal}</div>
              <div>
                {product.orderQty} {changeData(product)}
              </div>
              <div>
                <select
                  name="qty"
                  className="cartQtyInput"
                  type="number"
                  placeholder={product.orderQty}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>{" "}
                </select>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ParsedCart;
