import { NavLink } from 'react-router-dom';
import './Center.css';

function Center() {
	return (
		<div className='center'>
			<NavLink to='/'>HOME</NavLink>
			<NavLink to='/about'>ABOUT</NavLink>
			<NavLink to='/contact'>CONTACT</NavLink>
			<NavLink to='/write'>WRITE</NavLink>
		</div>
	);
}

export default Center;
