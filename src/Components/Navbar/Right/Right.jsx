import { NavLink } from 'react-router-dom';
import styles from './Right.module.css';
function Rigth() {
	return (
		<div className={styles.right}>
			<NavLink to=''>LOGIN</NavLink>
			<NavLink to=''>REGISTER</NavLink>
			<NavLink to='' className='fa-solid fa-magnifying-glass'></NavLink>
		</div>
	);
}
export default Rigth;
