import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { context } from '../../../App';
import './Center.css';

function Center() {
	const { state } = useContext(context);
	return (
		<div className='center'>
			<NavLink to='/'>HOME</NavLink>
			{state? <NavLink to='/news'>NEWS</NavLink> :null}
			{state ? <NavLink to='/favorites'>FAVORITES</NavLink> : null}
		</div>
	);
}

export default Center;
