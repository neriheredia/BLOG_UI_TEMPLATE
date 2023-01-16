
function Register() {
	return (
		<div className='login'>
			<div className='logincontainer'>
				<span className='logintitle'>REGISTER</span>
				<form className='loginForm' action=''>
					<label htmlFor=''>Email</label>
					<input type='text' placeholder='Enter your email...' />
					<label htmlFor=''>Password</label>
					<input type='text' placeholder='Enter your password...' />
					<label htmlFor=''>Repeat password</label>
					<input type='text' placeholder='Enter your password...' />
					<button className='loginFormbutton'>Register</button>
				</form>
			</div>
		</div>
	);
}

export default Register;
