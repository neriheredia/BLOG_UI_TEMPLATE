import { NavLink } from 'react-router-dom';
import './Right.css';

function Rigth() {
	return (
		<div className='right'>
			<NavLink to='/login'>LOGIN</NavLink>
			<NavLink to='/register'>REGISTER</NavLink>
			<NavLink to='' className='topSearchIcon fas fa-search rigthcolor'></NavLink>
		</div>
	);
}

export default Rigth;
