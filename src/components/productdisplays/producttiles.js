export function ProductTiles({ onClick, className, img, name, description }) {
  return (
	
    <div className={className} onClick={onClick}>
      <div className="imgWrap">
        {" "}
        <img
          className="productTilesImage"
          src={img}
          alt="Your selected product"
        ></img>
      </div>
	  <div className="nameWrap">{name}</div>
    </div>

  );
}

export default ProductTiles;
