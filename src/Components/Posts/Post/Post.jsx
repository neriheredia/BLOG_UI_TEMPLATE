import { NavLink } from 'react-router-dom';
import './Post.css';

function Post(props) {
	return (
		<div className='post'>
			<NavLink className='title' to={'/post/' + props.id}>
				<img className='postimg' src={props.image} alt='img' />
				<br />
				<div className='info'>
					<div className='div'>
						{props.category?.map((c, key) => (
							<span key={key} className='category'>
								{c}
							</span>
						))}
					</div>
					{props.title}
					<br />
					<span className='time'>{props.time}</span>
				</div>
				<p className='text'>{props.overview}</p>
			</NavLink>
		</div>
	);
}

export default Post;
