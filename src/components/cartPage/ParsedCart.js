
export const userCartArr = [];

export function ParsedCart() {

    return(
        <div>
            {
                userCartArr.map(product => (
                    <div className="cartWrap">
                    <h2 key={product.name}>{product.name}</h2>
                    <h2 key={product.price}>{product.price}</h2>
                    </div>
                ))
                
            }
        </div>
    )
}

export default ParsedCart;