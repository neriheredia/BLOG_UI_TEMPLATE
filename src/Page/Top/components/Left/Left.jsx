import { NavLink } from 'react-router-dom';
import styles from './Left.module.css';

function Left() {
	return (
		<div className={styles.left}>
			<NavLink to='' className='fa-brands fa-square-facebook'></NavLink>
			<NavLink to='' className='fa-brands fa-square-instagram'></NavLink>
			<NavLink to='' className='fa-brands fa-square-facebook'></NavLink>
			<NavLink to='' className='fa-brands fa-square-twitter'></NavLink>
		</div>
	);
}
export default Left;
