import { NavLink } from 'react-router-dom';
import './Left.css';

function Left() {
	return (
		<div className='left'>
			<NavLink to='' className='topIcon fab fa-facebook-square leftcolor'></NavLink>
			<NavLink to='' className='topIcon fab fa-instagram-square leftcolor'></NavLink>
			<NavLink to='' className='topIcon fab fa-pinterest-square leftcolor'></NavLink>
			<NavLink to='' className='topIcon fab fa-twitter-square leftcolor'></NavLink>
		</div>
	);
}

export default Left;
