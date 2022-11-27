export function ProductTiles({ onClick, className, img, name, imgWrap, imgClass, nameClass }) {
  return (
	
    <div className={className} onClick={onClick}>
      <div className={imgWrap}>
        {" "}
        <img
          className={ imgClass }
          src={img}
          alt="Your selected product"
        ></img>
		<div className={nameClass}>{name}</div>
      </div>
	 </div>

  );
}

export default ProductTiles;
