import { Link } from 'react-router-dom';
import './Categories.css';

function Categories() {
	return (
		<div className='categories'>
			<span className='titlesside'>CATEGORIES</span>
			<div className="links">
				<Link to='' >Life</Link>
				<Link to='' >Music</Link>
				<Link to='' >Sport</Link>
				<Link to='' >Style</Link>
				<Link to='' >Tech</Link>
				<Link to='' >Cinema</Link>
			</div>
		</div>
	);
}

export default Categories;
