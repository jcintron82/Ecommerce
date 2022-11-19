import {ReactComponent as Cart} from './cart.svg';
import {ReactComponent as HomeIcon} from './home.svg';
import { useNavigate } from 'react-router-dom'
import stock from '../images/stock.avif'


export function Header() {
	const navigate = useNavigate();

	const homeClick = () => {
		navigate('/home')
	}
	

	const cartClick = () => {
		navigate('/usercart')
	}

	return (
		<div className='header'>
		<div><HomeIcon style={{width: '27px'}} onClick={homeClick} /></div>
		<div> company name/Logo</div>
		<div> search</div>
		<div> <Cart style={{width: '27px'}} onClick={cartClick} /> </div>
		

		</div>

		)
}

export default Header;