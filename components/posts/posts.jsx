import '../posts/posts.css';
import Post from '../../components/post/post.jsx';
import data from '../../constants/posts.json';

const Posts = () => {
	return (
		<div className='posts'>
			{data.map((post, key) => (
				<Post
					key={key}
					category={post.category}
					image={post.image}
					overview={post.overview}
					time={post.time}
					title={post.title}
				/>
			))}
		</div>
	);
};

export default Posts;
