import img from '../../assets/foto6.webp';
import './Header.css';

function Header() {
	return (
		<div className='header'>
			<div className='titles'>
				<span className='reactNode'>React & Node</span>
				<span className='blog'>BLOG</span>
			</div>
			<img className='img' src={img} alt='imgPortada' />
		</div>
	);
}

export default Header;
