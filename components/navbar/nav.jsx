import '../navbar/nav.css';

const Nav = () => (
	<div className='top'>
		<div className='topLeft'>
			<i className='topIcon fab fa-facebook-square'></i>
			<i className='topIcon fab fa-instagram-square'></i>
			<i className='topIcon fab fa-pinterest-square'></i>
			<i className='topIcon fab fa-twitter-square'></i>
		</div>
		<div className='topCenter'>
			<ul className='topList'>
				<li className='topListItem'>
					<a className='link' href='/'>
						HOME
					</a>
				</li>
				<li className='topListItem'>
					<a className='link' href='/'>
						ABOUT
					</a>
				</li>
				<li className='topListItem'>
					<a className='link' href='/'>
						CONTACT
					</a>
				</li>
				<li className='topListItem'>
					<a className='link' href='/write'>
						WRITE
					</a>
				</li>
			</ul>
		</div>
		<div className='topRight'>
			<ul className='topList'>
				<li className='topListItem'>
					<a className='link' href='/login'>
						LOGIN
					</a>
				</li>
				<li className='topListItem'>
					<a className='link' href='/register'>
						REGISTER
					</a>
				</li>
			</ul>
			<i className='topSearchIcon fas fa-search'></i>
		</div>
	</div>
);
export default Nav;
