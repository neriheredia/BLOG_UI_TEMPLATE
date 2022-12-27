import { NavLink } from 'react-router-dom';
import './Left.css';

function Left() {
	return (
		<div className='left'>
			<NavLink to='' className='topIcon fab fa-facebook-square'></NavLink>
			<NavLink to='' className='topIcon fab fa-instagram-square'></NavLink>
			<NavLink to='' className='topIcon fab fa-pinterest-square'></NavLink>
			<NavLink to='' className='topIcon fab fa-twitter-square'></NavLink>
		</div>
	);
}

export default Left;
