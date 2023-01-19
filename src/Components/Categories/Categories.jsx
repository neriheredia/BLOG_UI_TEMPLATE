import { useContext } from 'react';
import { context } from '../../App';
import './categories.css';

function Categories() {
	const globalstate = useContext(context);
	return (
		<div onClick={()=>globalstate.setPage({start: 0, end:6} )} className='categories'>
			<button
				onClick={() => globalstate.setCategorie('business')}
				className='categoriesbutton'
			>
				Business
			</button>
			<button
				onClick={() => globalstate.setCategorie('technology')}
				className='categoriesbutton'
			>
				Technology
			</button>
			<button
				onClick={() => globalstate.setCategorie('startup')}
				className='categoriesbutton'
			>
				Startup
			</button>
			<button
				onClick={() => globalstate.setCategorie('science')}
				className='categoriesbutton'
			>
				Science
			</button>
			<button
				onClick={() => globalstate.setCategorie('world')}
				className='categoriesbutton'
			>
				World
			</button>
		</div>
	);
}
export default Categories;
