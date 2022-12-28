import { NavLink } from "react-router-dom";
import './Post.css';

function Post(props) {
	return (
		<div className="post">
			<img src={props.image} alt="img" /><br />
			<div className="info">
				<div className="div">
					{props.category?.map((c,key)=>(<span key={key} className='category'>{c}</span>))}
				</div>
				<NavLink className='title' to=''>{props.title}</NavLink><br />
				<span className="time">{props.time}</span>
			</div>
			<p className="text">{props.overview}</p>
		</div>
	);
}

export default Post;
