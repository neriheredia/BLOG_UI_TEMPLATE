import { NavLink } from 'react-router-dom';
import styles from './Center.module.css';
function Center() {
	return (
		<div className={styles.center}>
			<NavLink to=''>HOME</NavLink>
			<NavLink to=''>ABOUT</NavLink>
			<NavLink to=''>CONTACT</NavLink>
			<NavLink to=''>WRITE</NavLink>
		</div>
	);
}
export default Center;
