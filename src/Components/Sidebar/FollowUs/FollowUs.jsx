import { NavLink } from 'react-router-dom';
import './FollowUs.css';

function FollowUs() {
	return (
		<div className='followus'>
			<span className='titlesside'>FOLLOW US</span>
			<div className='followlinks'>
			<NavLink to='' className='topIcon fab fa-facebook-square'></NavLink>
			<NavLink to='' className='topIcon fab fa-instagram-square'></NavLink>
			<NavLink to='' className='topIcon fab fa-pinterest-square'></NavLink>
			<NavLink to='' className='topIcon fab fa-twitter-square'></NavLink>
			</div>
		</div>
	);
}

export default FollowUs;
