import Center from './Center/Center';
import Left from './Left/Left';
import Rigth from './Right/Right';
import './Navbar.css';

function Top() {
	return (
		<div className='top'>
			<Left className='left' />
			<Center className='center' />
			<Rigth className='rigth' />
		</div>
	);
}

export default Top;
