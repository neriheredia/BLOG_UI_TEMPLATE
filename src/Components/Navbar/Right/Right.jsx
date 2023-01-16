import { NavLink } from 'react-router-dom';
import './Right.css';

function Rigth() {
	const loged=true;
	return (
		<div className='right'>
			{loged? <><NavLink to='/login'>LOGIN</NavLink>
			<NavLink to='/register'>REGISTER</NavLink> </> : false}
			<NavLink
				to=''
				className='topSearchIcon fas fa-search rigthcolor'
			></NavLink>
		</div>
	);
}

export default Rigth;
