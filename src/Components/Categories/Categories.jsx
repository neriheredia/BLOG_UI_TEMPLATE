import { useContext } from 'react';
import { context } from '../../App';
import './categories.css';

function Categories() {
	const { setCategorie } = useContext(context);
	return (
		<div className='categories'>
			<button
				onClick={() => setCategorie('business')}
				className='categoriesbutton'
			>
				Business
			</button>
			<button
				onClick={() => setCategorie('technology')}
				className='categoriesbutton'
			>
				Technology
			</button>
			<button
				onClick={() => setCategorie('startup')}
				className='categoriesbutton'
			>
				Startup
			</button>
			<button
				onClick={() => setCategorie('science')}
				className='categoriesbutton'
			>
				Science
			</button>
			<button
				onClick={() => setCategorie('world')}
				className='categoriesbutton'
			>
				World
			</button>
		</div>
	);
}
export default Categories;
