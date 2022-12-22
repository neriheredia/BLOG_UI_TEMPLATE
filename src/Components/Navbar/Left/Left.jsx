import { NavLink } from 'react-router-dom';
import styles from './Left.module.css';

function Left() {
	return (
		<div className={styles.left}>
			<NavLink to='' className='topIcon fab fa-facebook-square'></NavLink>
			<NavLink to='' className='topIcon fab fa-instagram-square'></NavLink>
			<NavLink to='' className='topIcon fab fa-pinterest-square'></NavLink>
			<NavLink to='' className='topIcon fab fa-twitter-square'></NavLink>
		</div>
	);
}

export default Left;
