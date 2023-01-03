import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
	return <div className='login'>
		<span className='logintitle'>Login</span>
		<form className='loginForm' action="">
			<label htmlFor="">Email</label>
			<input type="text" placeholder='Enter your email...'/>
			<label htmlFor="">Password</label>
			<input type="text" placeholder='Enter your password...'/>
			<button className='loginFormbutton'>Login</button>
			<Link><button className='registerbutton'>Register</button></Link>
		</form>
	</div>;
}

export default Login;
