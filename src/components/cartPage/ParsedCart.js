
export { userCartArr }
let userCartArr = [];
export function ParsedCart() {
    
    return(
        <div>
            {
                userCartArr.map((product, name) => (
                    <div className="cartWrap" key={product.name}>

                        <div className="userCartProductImages">
                            <div>{ product.image1 }</div></div>
                            <div>
                        <div className="cartProductsDescriptionWrap">                
                    <h2 className="cartProductsName">{product.name}</h2>
                    <div>{ product.description }</div></div>
                    <div className="cartProductsPriceQtyWrap">
                    <div>{product.price}</div>
                    <div>{ product.qty }</div>
                    </div></div></div>

                  
                ))
                
            }
        </div>
    )
}

export default ParsedCart;