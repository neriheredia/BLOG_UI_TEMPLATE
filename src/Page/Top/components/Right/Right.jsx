import { NavLink } from 'react-router-dom';
import styles from './Right.module.css';
function Rigth() {
	return (
		<div className={styles.right}>
			<NavLink to=''>LOGIN</NavLink>
			<NavLink to=''>REGISTER</NavLink>
			<NavLink to=''>
				<i className='fa-solid fa-magnifying-glass'></i>
			</NavLink>
		</div>
	);
}
export default Rigth;
