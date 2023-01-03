import '../post/post.css';

const Post = props => {
	return (
		<div className='post'>
			<img className='postImg' src={props.image} alt='' />
			<div className='postInfo'>
				<div className='postCats'>
					<div className='postCat'>
						<span>
							<a className='link' href='/posts?cat=Music'>
								{props.category}
							</a>
						</span>
						<span>
							<a className='link' href='/posts?cat=Music'>
								{props.category}
							</a>
						</span>
					</div>
				</div>
				<span className='postTitle'>
					<a className='link' href='/post/abc'>
						<h1>{props.title}</h1>
					</a>
				</span>
				<hr />
				<span className='postDate'>{props.time}</span>
				<p className='postDesc'>{props.overview}</p>
			</div>
		</div>
	);
};

export default Post;
