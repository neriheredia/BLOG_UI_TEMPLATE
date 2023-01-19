import Post from './Post/Post';
import Loading from '../../utilities/Loading';
import './Posts.css';
import { useContext } from 'react';
import { context } from '../../App';
import Pagination from '../Pagination/Pagination';

function Posts() {
	const globalstate = useContext(context);

	// useEffect(() => {
	// 	Get(globalstate.categorie)
	// 		.then(data => {
	// 			globalstate.setNews(data);
	// 		})
	// 		.catch(e => {
	// 			alert('Esta categoria no puede cargarse');
	// 			return <Home />;
	// 		});
	// 		console.log("Carga en Post");
	// }, [globalstate.categorie]);

	if (!globalstate.news) return <Loading />;

	return (
		<div className='post-pagination'>
			<Pagination />
			<div className='posts'>
				{globalstate.news.data
					.slice(globalstate.page.start, globalstate.page.end)
					?.map(post => (
						<Post
							author={post.title}
							imageUrl={post.imageUrl}
							key={post.id}
							id={post.id}
						/>
					))}
			</div>
		</div>
	);
}

export default Posts;
