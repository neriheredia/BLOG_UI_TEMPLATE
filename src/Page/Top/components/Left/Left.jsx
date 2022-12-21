import { NavLink } from 'react-router-dom';
import styles from './Left.module.css';

function Left() {
	return (
		<div className={styles.left}>
			<NavLink to=''>
				<i className='fa-brands fa-square-facebook'></i>
			</NavLink>
			<NavLink to=''>
				<i className='fa-brands fa-square-instagram'></i>
			</NavLink>
			<NavLink to=''>
				<i className='fa-brands fa-square-facebook'></i>
			</NavLink>
			<NavLink to=''>
				<i className='fa-brands fa-square-twitter'></i>
			</NavLink>
		</div>
	);
}
export default Left;
