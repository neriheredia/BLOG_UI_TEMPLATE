import { NavLink } from 'react-router-dom';
import './Post.css';

function Post(props) {
	return (
		<div className='post'>
			<NavLink  to={'/post/' + props.id}>
				<div className='Link'>
					<img className='postimg' src={props.imageUrl} alt='img' />
					<h1 className='h1'>{props.author}</h1>
				</div>
			</NavLink>
		</div>
	);
}

export default Post;
