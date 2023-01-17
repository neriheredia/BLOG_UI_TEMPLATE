import { useContext } from 'react';
import { context } from '../../App';
import './Login.css';

function Login() {
	const state = useContext(context);
	return (
		<div className='login'>
			<div className='logincontainer'>
				<span className='logintitle'>LOGIN</span>
				<form className='loginForm' action=''>
					<label htmlFor=''>Email</label>
					<input type='text' placeholder='Enter your email...' />
					<label htmlFor=''>Password</label>
					<input type='text' placeholder='Enter your password...' />
					<button
						onClick={e => {
							e.preventDefault();
							state.setState(true);
						}}
						className='loginFormbutton'
					>
						Login
					</button>
					{console.log('on')}
				</form>
			</div>
		</div>
	);
}

export default Login;
