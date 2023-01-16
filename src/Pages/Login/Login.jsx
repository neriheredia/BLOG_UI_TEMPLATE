import './Login.css';

function Login() {
	return (
		<div className='login'>
			<div className='logincontainer'>
				<span className='logintitle'>LOGIN</span>
				<form className='loginForm' action=''>
					<label htmlFor=''>Email</label>
					<input type='text' placeholder='Enter your email...' />
					<label htmlFor=''>Password</label>
					<input type='text' placeholder='Enter your password...' />
					<button className='loginFormbutton'>Login</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
