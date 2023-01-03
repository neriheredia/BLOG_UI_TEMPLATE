import '../post/post.css';

const Post = props => {
	return (
		<div className='post'>
			<img className='postImg' src='\src\assets\foto7.jpeg' alt=''></img>
			<div className='postInfo'>
				<div className='postCats'>
					<div className='postCat'>
						<span>
							<a className='link' href='/posts?cat=Music'>
								Life
							</a>
						</span>
						<span>
							<a className='link' href='/posts?cat=Music'>
								Life
							</a>
						</span>
					</div>
				</div>
				<span className='postTitle'>
					<a className='link' href='/post/abc'>
						{props.title}
					</a>
				</span>
				<hr />
				<span className='postDate'>1 hour ago</span>
				<p className='postDesc'>{props.overview}</p>
			</div>
		</div>
	);
};

export default Post;
