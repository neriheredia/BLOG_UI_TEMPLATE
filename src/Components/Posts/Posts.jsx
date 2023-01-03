import Post from './Post/Post';
import post from '../../constants/posts.json';
import './Posts.css';

function Posts() {
	return (
		<div className='posts'>
			{post.map((post) => (
				<Post
					key={post.id}
					id={post.id}
					image={post.image}
					category={post.category}
					overview={post.overview}
					time={post.time}
					title={post.title}
				/>
			))}
		</div>
	);
}

export default Posts;
