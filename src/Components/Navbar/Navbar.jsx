import './Navbar.css';
import { useContext } from 'react';
import { context } from '../../App';
import { NavLink } from 'react-router-dom';

function Top() {
	const state = useContext(context);
	return (
		<div className='top'>
			<button className='inclined-button'><NavLink  to='/'>
				HOME
			</NavLink></button>
			{state.state ? (
				<button className='inclined-button'><NavLink  to='/news'>
					NEWS
				</NavLink></button>
			) : null}
			{state.state ? (
				<button className='inclined-button'><NavLink  to='/favorites'>
					FAVORITES
				</NavLink></button>
			) : null}

			{state.state ? (
				<>
					<button className='radius' onClick={() => state.setState(false)}>
						<i className='fas fa-sign-out-alt' />
					</button>
				</>
			) : (
				<>
					<button className='inclined-button'><NavLink  to='/login'>
						LOGIN
					</NavLink></button>
					<button className='inclined-button'><NavLink to='/register'>
						REGISTER
					</NavLink></button>
				</>
			)}
		</div>
	);
}

export default Top;
