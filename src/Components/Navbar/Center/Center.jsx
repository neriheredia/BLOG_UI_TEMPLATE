import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { context } from '../../../App';
import './Center.css';

function Center() {
	const { state } = useContext(context);
	return (
		<div className='center'>
			<NavLink to='/'>HOME</NavLink>
			<NavLink to='/about'>ABOUT</NavLink>
			{state ? <NavLink to='/write'>WRITE</NavLink> : null}
		</div>
	);
}

export default Center;
