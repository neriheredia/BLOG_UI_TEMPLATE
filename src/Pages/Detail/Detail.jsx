import { useParams } from 'react-router-dom';
import post from '../../constants/posts.json';
import SideBar from '../../Components/Sidebar/SideBar';
import './Detail.css';
import '../../Components/Sidebar/SideBar.css'

function Detail() {
	const { id } = useParams();

	return (
		<div className='detailconteiner'>
			<div className='detail'>
				<img className='detailimg' src={post[id].image} alt='img' />
				<br />
				<div className='detailtitle'>{post[id].title}</div>
				<div className='gap'>
					{post[id].category?.map((c, key) => (
						<span key={key} className='detailinfo'>
							{c}
						</span>
					))}
					<span className='detailinfo'>{post[id].time}</span>
				</div>
				<p className='detailtext'>
					{' '}
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea possimus
					quo incidunt nulla recusandae commodi delectus maiores! Dolorum, facilis
					maiores a iure saepe, adipisci libero cum, cumque tempore quam esse!
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo sit
					atque voluptatibus dolore rerum pariatur sequi cumque omnis id,
					distinctio amet quas maxime sapiente odio tempore mollitia eligendi
					numquam repudiandae. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Error voluptatibus consequuntur similique cumque officia
					laudantium est veniam ipsam tempore, asperiores eaque, tenetur enim
					eligendi eveniet voluptatum odio impedit sunt ipsum.
				</p>
			</div>
			<div className='detailmargin sidebar'>
				<SideBar />
			</div>
		</div>
	);
}

export default Detail;
