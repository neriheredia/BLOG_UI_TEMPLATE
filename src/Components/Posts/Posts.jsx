import Post from './Post/Post';
import Loading from '../../utilities/Loading';
import './Posts.css';
import Get from '../../utilities/Get';
import { useContext, useEffect, useState } from 'react';
import { context } from '../../App';

function Posts() {
	const [state, setState] = useState(false);
	const globalstate = useContext(context);
	useEffect(() => {
		Get(globalstate.categorie).then(data => {
			setState(data);
			globalstate.setNews(data);
		});
	}, [globalstate.categorie]);

	if (!state) return <Loading />;

	return (
		<div className='posts'>
			{state.data?.map(post => (
				<Post
					author={post.title}
					imageUrl={post.imageUrl}
					key={post.id}
					id={post.id}
				/>
			))}
		</div>
	);
}

export default Posts;
