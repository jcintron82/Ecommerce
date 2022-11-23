export function Button({ onClick, text, className, svg }) {
	return (
	  <button onClick={onClick} className={className}>
		{" "}
		{text} {svg}{" "}
	  </button>
	);
  }
  
  export default Button;
  