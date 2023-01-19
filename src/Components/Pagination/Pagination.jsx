import { useContext } from 'react';
import { context } from '../../App';
import './Pagination.css';

function Pagination() {
	const globalstate = useContext(context);

	return (
		<div className='pagination'>
			<button
				onClick={() =>
					globalstate.page.start === 0
						? null
						: globalstate.setPage({
								start: (globalstate.page.start -= 8),
								end: (globalstate.page.end -= 8),
						  })
				}
			>
				Previous
			</button>

			<button
				onClick={() =>
					globalstate.page.end >= globalstate.news.data.length
						? null
						: globalstate.setPage({
								start: (globalstate.page.start += 8),
								end: (globalstate.page.end += 8),
						  })
				}
			>
				Next
			</button>
		</div>
	);
}
export default Pagination;
